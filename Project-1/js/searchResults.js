// ============================================================
// CS391 Web Application Development Project
// searchResults.js – Logic for searchResults.html
// ============================================================

let guestCountValue = 2;
let roomCountValue  = 1;

// ---- Filter state ----
let filterMinPrice  = null;
let filterMaxPrice  = null;
let filterStars     = [];
let filterSort      = 'name';

document.addEventListener('DOMContentLoaded', function () {
  setDefaultDates();
  restoreSearchBar();
  setupGuestRoomControls();
  setupSearchForm();
  setupFilters();
  setupAutocomplete();
  setupScrollToTop();
  displayResults();
});

// ---- Default dates ----
function setDefaultDates() {
  const today    = new Date();
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today); dayAfter.setDate(today.getDate() + 2);
  document.getElementById('checkIn').min  = formatDate(today);
  document.getElementById('checkOut').min = formatDate(tomorrow);
  document.getElementById('checkIn').value  = formatDate(tomorrow);
  document.getElementById('checkOut').value = formatDate(dayAfter);
}

function formatDate(d) {
  return d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2,'0') + '-' +
    String(d.getDate()).padStart(2,'0');
}

// ---- Restore search bar ----
function restoreSearchBar() {
  const sd = getSearchData();
  if (!sd) return;
  if (sd.text)    document.getElementById('searchText').value = sd.text;
  if (sd.checkIn) document.getElementById('checkIn').value   = sd.checkIn;
  if (sd.checkOut)document.getElementById('checkOut').value  = sd.checkOut;
  if (sd.guests)  { guestCountValue = sd.guests; roomCountValue = sd.rooms || 1; updateGuestRoomDisplay(); }
}

// ---- Guest/Room controls ----
function setupGuestRoomControls() {
  document.getElementById('guestMinus').addEventListener('click', function () { if (guestCountValue > 1)  { guestCountValue--; updateGuestRoomDisplay(); } });
  document.getElementById('guestPlus') .addEventListener('click', function () { if (guestCountValue < 10) { guestCountValue++; updateGuestRoomDisplay(); } });
  document.getElementById('roomMinus') .addEventListener('click', function () { if (roomCountValue > 1)   { roomCountValue--;  updateGuestRoomDisplay(); } });
  document.getElementById('roomPlus')  .addEventListener('click', function () { if (roomCountValue < 10)  { roomCountValue++;  updateGuestRoomDisplay(); } });
}

function updateGuestRoomDisplay() {
  document.getElementById('guestCount').textContent    = guestCountValue;
  document.getElementById('roomCount').textContent     = roomCountValue;
  document.getElementById('guestRoomText').textContent =
    guestCountValue + ' Guest' + (guestCountValue > 1 ? 's' : '') +
    ', ' + roomCountValue + ' Room' + (roomCountValue > 1 ? 's' : '');
}

// ---- Search form ----
function setupSearchForm() {
  document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const text     = document.getElementById('searchText').value.trim();
    const checkIn  = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    if (!checkIn || !checkOut)       { alert('Please select check-in and check-out dates.'); return; }
    if (checkOut <= checkIn)          { alert('Check-out must be after check-in.'); return; }
    saveSearchData(text, checkIn, checkOut, guestCountValue, roomCountValue);
    displayResults();
  });
}

// ---- Display hotels ----
function displayResults() {
  const sd      = getSearchData() || { text: '' };
  const text    = sd.text || '';
  const sorted  = applySortAndFilter(filterHotels(text));

  // Update title
  const title = document.getElementById('resultsTitle');
  title.innerHTML = text
    ? `Results for "<em>${text}</em>" <span class="text-muted fw-normal fs-6">(${sorted.length} hotel${sorted.length !== 1 ? 's' : ''})</span>`
    : `All Hotels <span class="text-muted fw-normal fs-6">(${sorted.length} hotels)</span>`;

  const container = document.getElementById('resultsContainer');
  container.innerHTML = '';

  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="no-results col-12">
        <i class="bi bi-search"></i>
        <h3>No hotels found for "${text}"</h3>
        <p class="text-muted">Try: Antalya, Istanbul, Cappadocia, Bodrum, Izmir, Pamukkale</p>
      </div>`;
    return;
  }

  sorted.forEach(function (hotel) {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = buildHotelCard(hotel);
    container.appendChild(col);
  });

  // One delegated click listener
  container.addEventListener('click', function (e) {
    const card = e.target.closest('.hotel-grid-card');
    if (card) {
      const hotel = hotelsArray.find(function (h) { return h.id === parseInt(card.dataset.hotelId); });
      if (hotel) { saveCurrentBooking(hotel); window.location.href = 'hotelDetails.html'; }
    }
  });
}

function buildHotelCard(hotel) {
  return `
    <div class="hotel-grid-card" data-hotel-id="${hotel.id}">
      <div class="hotel-grid-img-wrap">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" />
        <div class="hotel-grid-stars-badge">${buildStarText(hotel.stars)}</div>
      </div>
      <div class="hotel-grid-card-body">
        <div class="hotel-grid-name">${hotel.name}</div>
        <div class="hotel-grid-city"><i class="bi bi-geo-alt-fill me-1"></i>${hotel.city}, ${hotel.country}</div>
        <div class="hotel-rating-row">
          <span class="hotel-rating-badge">${hotel.rating}</span>
          <span class="hotel-rating-label">${getRatingLabel(hotel.rating)}</span>
          <span class="hotel-review-count">(${hotel.reviewCount.toLocaleString()})</span>
        </div>
        <div class="hotel-price-row">
          <div class="hotel-price-from">From</div>
          <span class="hotel-price-amount">&#8378;${hotel.lowRate.toLocaleString()}</span>
          <span class="hotel-price-night"> / night</span>
        </div>
      </div>
    </div>`;
}

function buildStarText(n) {
  let s = '';
  for (let i = 0; i < n; i++) s += '★';
  return s;
}

function getRatingLabel(r) {
  if (r >= 9.5) return 'Exceptional';
  if (r >= 9.0) return 'Superb';
  if (r >= 8.5) return 'Excellent';
  if (r >= 8.0) return 'Very Good';
  if (r >= 7.0) return 'Good';
  return 'Pleasant';
}

// ---- Filter & Sort ----
function filterHotels(text) {
  let results = hotelsArray.slice();

  // Text search
  if (text) {
    const q = text.toLowerCase();
    results = results.filter(function (h) {
      return h.name.toLowerCase().includes(q) ||
             h.city.toLowerCase().includes(q)  ||
             h.country.toLowerCase().includes(q) ||
             h.description.toLowerCase().includes(q) ||
             h.address.toLowerCase().includes(q);
    });
  }

  // Price filter
  if (filterMinPrice !== null) results = results.filter(function (h) { return h.lowRate >= filterMinPrice; });
  if (filterMaxPrice !== null) results = results.filter(function (h) { return h.lowRate <= filterMaxPrice; });

  // Stars filter
  if (filterStars.length > 0) results = results.filter(function (h) { return filterStars.includes(h.stars); });

  return results;
}

function sortByName(arr) {
  return arr.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
}

function applySortAndFilter(arr) {
  switch (filterSort) {
    case 'price-asc':  return arr.slice().sort(function (a, b) { return a.lowRate - b.lowRate; });
    case 'price-desc': return arr.slice().sort(function (a, b) { return b.lowRate - a.lowRate; });
    case 'rating':     return arr.slice().sort(function (a, b) { return b.rating - a.rating; });
    default:           return sortByName(arr);
  }
}

// ---- Filter bar setup ----
function setupFilters() {
  document.getElementById('filterMinPrice').addEventListener('input', function () {
    filterMinPrice = this.value !== '' ? parseFloat(this.value) : null;
    displayResults();
  });
  document.getElementById('filterMaxPrice').addEventListener('input', function () {
    filterMaxPrice = this.value !== '' ? parseFloat(this.value) : null;
    displayResults();
  });
  document.getElementById('filterSort').addEventListener('change', function () {
    filterSort = this.value;
    displayResults();
  });
  document.querySelectorAll('.filter-star-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const stars = parseInt(btn.dataset.stars);
      const idx   = filterStars.indexOf(stars);
      if (idx === -1) { filterStars.push(stars); btn.classList.add('active'); }
      else            { filterStars.splice(idx, 1); btn.classList.remove('active'); }
      displayResults();
    });
  });
  document.getElementById('filterReset').addEventListener('click', function () {
    filterMinPrice = null; filterMaxPrice = null;
    filterStars    = [];   filterSort = 'name';
    document.getElementById('filterMinPrice').value = '';
    document.getElementById('filterMaxPrice').value = '';
    document.getElementById('filterSort').value = 'name';
    document.querySelectorAll('.filter-star-btn').forEach(function (b) { b.classList.remove('active'); });
    displayResults();
  });
}

// ---- Autocomplete ----
function setupAutocomplete() {
  const input    = document.getElementById('searchText');
  const dropdown = document.getElementById('autocompleteDropdown');

  input.addEventListener('input', function () {
    const q = input.value.trim().toLowerCase();
    if (q.length < 1) { dropdown.classList.remove('open'); return; }

    const cities  = [...new Set(hotelsArray.map(function (h) { return h.city; }))];
    const matches = [];

    cities.forEach(function (city) {
      if (city.toLowerCase().includes(q))
        matches.push({ label: city, sub: 'City', icon: 'bi-geo-alt-fill', value: city });
    });
    hotelsArray.forEach(function (h) {
      if (h.name.toLowerCase().includes(q))
        matches.push({ label: h.name, sub: h.city, icon: 'bi-building', value: h.name });
    });

    if (matches.length === 0) { dropdown.classList.remove('open'); return; }

    dropdown.innerHTML = matches.slice(0, 8).map(function (m) {
      return `<div class="autocomplete-item" data-value="${m.value}">
        <i class="bi ${m.icon}"></i>
        <span class="autocomplete-item-label">${m.label}</span>
        <span class="autocomplete-item-sub">${m.sub}</span>
      </div>`;
    }).join('');
    dropdown.classList.add('open');
  });

  dropdown.addEventListener('mousedown', function (e) {
    const item = e.target.closest('.autocomplete-item');
    if (item) {
      input.value = item.dataset.value;
      dropdown.classList.remove('open');
      saveSearchData(input.value, document.getElementById('checkIn').value,
        document.getElementById('checkOut').value, guestCountValue, roomCountValue);
      displayResults();
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.autocomplete-wrapper')) dropdown.classList.remove('open');
  });
}

// ---- Scroll to top ----
function setupScrollToTop() {
  const btn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- SessionStorage ----
function getSearchData() {
  const s = sessionStorage.getItem('searchData');
  return s ? JSON.parse(s) : null;
}

function saveSearchData(text, checkIn, checkOut, guests, rooms) {
  sessionStorage.setItem('searchData', JSON.stringify({ text, checkIn, checkOut, guests, rooms }));
}

function saveCurrentBooking(hotel) {
  const sd = getSearchData() || {};
  sessionStorage.setItem('currentBooking', JSON.stringify({ hotel, searchData: sd }));
}
