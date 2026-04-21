// ============================================================
// CS391 Web Application Development Project
// index.js – Logic for index.html
// ============================================================

// ---- State ----
let guestCountValue = 2;
let roomCountValue = 1;

// ---- On page load ----
document.addEventListener('DOMContentLoaded', function () {
  setDefaultDates();
  renderDeals();
  renderPopularSearches();
  setupGuestRoomControls();
  setupSearchForm();
  setupAutocomplete();
  setupScrollToTop();
  restoreSearchState();
});

// ---- Set default check-in / check-out dates ----
function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 2);

  document.getElementById('checkIn').value = formatDate(tomorrow);
  document.getElementById('checkOut').value = formatDate(dayAfter);
  document.getElementById('checkIn').min = formatDate(today);
  document.getElementById('checkOut').min = formatDate(tomorrow);
}

function formatDate(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const d = String(dateObj.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// ---- Render Deals ----
function renderDeals() {
  const container = document.getElementById('dealsContainer');
  container.innerHTML = '';
  dealsArray.forEach(function (deal) {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = buildDealCard(deal);
    container.appendChild(col);
  });
}

function buildDealCard(deal) {
  return `
    <div class="deal-card">
      <img src="${deal.imageUrl}" alt="${deal.title}" loading="lazy" />
      <div class="deal-card-body">
        <div class="deal-card-title">${deal.title}</div>
        <div class="deal-card-details">${deal.details}</div>
        <a href="#" class="deal-card-link">LEARN MORE <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>`;
}

// ---- Render Popular Searches Carousel (4 per slide) ----
function renderPopularSearches() {
  const inner = document.getElementById('popularCarouselInner');
  inner.innerHTML = '';
  const itemsPerSlide = 4;
  const chunks = chunkArray(popularSearchesArray, itemsPerSlide);

  chunks.forEach(function (chunk, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item' + (index === 0 ? ' active' : '');
    item.innerHTML = buildPopularSlide(chunk);
    inner.appendChild(item);
  });
}

function buildPopularSlide(items) {
  const cols = items.map(function (pop) {
    return `
      <div class="col">
        <div class="popular-search-item" data-search-title="${pop.title}">
          <div class="popular-img-wrap">
            <img src="${pop.imageUrl}" alt="${pop.title}" loading="lazy" />
            <div class="popular-img-overlay"></div>
            <div class="popular-img-label">
              <span class="city-name">${pop.title}</span>
              <span class="city-meta">From &#8378;${pop.avgPrice.toLocaleString()} / night</span>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');
  return `<div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3">${cols}</div>`;
}

// ---- Guest / Room counter controls ----
function setupGuestRoomControls() {
  document.getElementById('guestMinus').addEventListener('click', function () {
    if (guestCountValue > 1) {
      guestCountValue--;
      updateGuestRoomDisplay();
    }
  });
  document.getElementById('guestPlus').addEventListener('click', function () {
    if (guestCountValue < 10) {
      guestCountValue++;
      updateGuestRoomDisplay();
    }
  });
  document.getElementById('roomMinus').addEventListener('click', function () {
    if (roomCountValue > 1) {
      roomCountValue--;
      updateGuestRoomDisplay();
    }
  });
  document.getElementById('roomPlus').addEventListener('click', function () {
    if (roomCountValue < 10) {
      roomCountValue++;
      updateGuestRoomDisplay();
    }
  });
}

function updateGuestRoomDisplay() {
  document.getElementById('guestCount').textContent = guestCountValue;
  document.getElementById('roomCount').textContent = roomCountValue;
  document.getElementById('guestRoomText').textContent = guestCountValue + ' Guests, ' + roomCountValue + ' Room' + (roomCountValue > 1 ? 's' : '');
}

// ---- Search Form ----
function setupSearchForm() {
  document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    handleSearch();
  });

  // Clicking a popular search item
  document.getElementById('popularCarouselInner').addEventListener('click', function (e) {
    const item = e.target.closest('.popular-search-item');
    if (item) {
      const title = item.getAttribute('data-search-title');
      saveSearchData(title, '', '', guestCountValue, roomCountValue);
      window.location.href = 'searchResults.html';
    }
  });
}

function handleSearch() {
  const text = document.getElementById('searchText').value.trim();
  const checkIn = document.getElementById('checkIn').value;
  const checkOut = document.getElementById('checkOut').value;

  if (!checkIn || !checkOut) {
    alert('Please select check-in and check-out dates.');
    return;
  }
  if (checkOut <= checkIn) {
    alert('Check-out date must be after check-in date.');
    return;
  }

  saveSearchData(text, checkIn, checkOut, guestCountValue, roomCountValue);

  const filtered = filterHotels(text);
  const sorted = sortByName(filtered);

  replaceDealsWithSearchCarousel(sorted, text);
}

function filterHotels(text) {
  if (!text) return hotelsArray.slice();
  const lower = text.toLowerCase();
  return hotelsArray.filter(function (hotel) {
    return (
      hotel.name.toLowerCase().includes(lower) ||
      hotel.city.toLowerCase().includes(lower) ||
      hotel.country.toLowerCase().includes(lower) ||
      hotel.description.toLowerCase().includes(lower) ||
      hotel.address.toLowerCase().includes(lower)
    );
  });
}

function sortByName(arr) {
  return arr.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

// ---- Replace deals section with search carousel ----
function replaceDealsWithSearchCarousel(hotels, searchText) {
  const dealsSection = document.getElementById('dealsSection');
  dealsSection.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'search-carousel-header';
  header.innerHTML = `
    <h2 class="section-title mb-0">
      ${searchText ? 'Results for "' + searchText + '"' : 'All Hotels'}
      <small class="text-muted fs-6 fw-normal ms-2">(${hotels.length} found)</small>
    </h2>
    <a href="searchResults.html" id="seeMoreDealsLink" class="see-more-link">
      See more deals <i class="bi bi-arrow-right"></i>
    </a>`;
  dealsSection.appendChild(header);

  if (hotels.length === 0) {
    dealsSection.innerHTML += `
      <div class="no-results">
        <i class="bi bi-search"></i>
        No hotels found for "${searchText}". Try a different search.
      </div>`;
    return;
  }

  const carouselWrapper = document.createElement('div');
  const carouselId = 'searchResultCarousel';
  carouselWrapper.className = 'popular-carousel-wrapper';
  carouselWrapper.innerHTML = `
    <div id="${carouselId}" class="carousel slide" data-bs-ride="false">
      <div class="carousel-inner" id="searchCarouselInner"></div>
      <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`;
  dealsSection.appendChild(carouselWrapper);

  const inner = document.getElementById('searchCarouselInner');
  const itemsPerSlide = 5;
  const chunks = chunkArray(hotels, itemsPerSlide);

  chunks.forEach(function (chunk, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item' + (index === 0 ? ' active' : '');
    const cols = chunk.map(function (hotel) {
      return `
        <div class="col">
          <div class="search-result-card" data-hotel-id="${hotel.id}">
            <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" />
            <div class="search-result-card-body">
              <div class="search-result-card-name">${hotel.name}</div>
              <div class="search-result-card-city">
                <i class="bi bi-geo-alt-fill"></i> ${hotel.city}
              </div>
              <div class="search-result-card-price">from &#8378;${hotel.lowRate.toLocaleString()}/night</div>
            </div>
          </div>
        </div>`;
    }).join('');
    item.innerHTML = `<div class="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-2">${cols}</div>`;
    inner.appendChild(item);
  });

  // Hotel card click → go to searchResults.html (or hotelDetails directly)
  inner.addEventListener('click', function (e) {
    const card = e.target.closest('.search-result-card');
    if (card) {
      const hotelId = parseInt(card.getAttribute('data-hotel-id'));
      const hotel = hotelsArray.find(function (h) { return h.id === hotelId; });
      if (hotel) {
        saveCurrentBooking(hotel);
        window.location.href = 'hotelDetails.html';
      }
    }
  });
}

// ---- Session Storage helpers ----
function saveSearchData(text, checkIn, checkOut, guests, rooms) {
  const searchData = {
    text: text,
    checkIn: checkIn,
    checkOut: checkOut,
    guests: guests,
    rooms: rooms
  };
  sessionStorage.setItem('searchData', JSON.stringify(searchData));
}

function saveCurrentBooking(hotel) {
  const searchDataStr = sessionStorage.getItem('searchData');
  const searchData = searchDataStr ? JSON.parse(searchDataStr) : {};
  const booking = {
    hotel: hotel,
    searchData: searchData
  };
  sessionStorage.setItem('currentBooking', JSON.stringify(booking));
}

// ---- Restore search state on reload ----
function restoreSearchState() {
  const searchDataStr = sessionStorage.getItem('searchData');
  if (!searchDataStr) return;
  const sd = JSON.parse(searchDataStr);
  if (sd.text) document.getElementById('searchText').value = sd.text;
  if (sd.checkIn) document.getElementById('checkIn').value = sd.checkIn;
  if (sd.checkOut) document.getElementById('checkOut').value = sd.checkOut;
  if (sd.guests) {
    guestCountValue = sd.guests;
    roomCountValue = sd.rooms || 1;
    updateGuestRoomDisplay();
  }
  // Geri tuşuyla dönüldüğünde önceki arama sonuçlarını yeniden göster
  if (sd.text) {
    const filtered = filterHotels(sd.text);
    const sorted = sortByName(filtered);
    replaceDealsWithSearchCarousel(sorted, sd.text);
  }
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
      handleSearch();
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

// ---- Utility: chunk array into groups ----
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
