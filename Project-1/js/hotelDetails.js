// ============================================================
// CS391 Web Application Development Project
// hotelDetails.js – Logic for hotelDetails.html
// ============================================================

let currentHotel = null;

document.addEventListener('DOMContentLoaded', function () {
  loadHotelFromSession();
  document.getElementById('btnBookNowTop').addEventListener('click', showRoomSelection);
  setupLightbox();
  setupScrollToTop();
});

// ---- Load from sessionStorage ----
function loadHotelFromSession() {
  const bookingStr = sessionStorage.getItem('currentBooking');
  if (!bookingStr) {
    document.getElementById('hotelName').textContent = 'Hotel not found.';
    document.getElementById('hotelDescription').textContent =
      'Please go back to search results and select a hotel.';
    return;
  }
  const booking = JSON.parse(bookingStr);
  currentHotel  = booking.hotel;

  renderHeader();
  renderPhotosCarousel();
  renderInfo();
}

// ---- Header ----
function renderHeader() {
  document.getElementById('hotelName').textContent = currentHotel.name;
  document.getElementById('breadcrumbHotel').textContent = currentHotel.name;
  document.getElementById('hotelLocation').textContent =
    currentHotel.address + ' – ' + currentHotel.city + ', ' + currentHotel.country;
  document.getElementById('hotelStars').innerHTML = buildStarIcons(currentHotel.stars);
  document.getElementById('hotelRatingBlock').innerHTML = `
    <div class="hotel-rating-large">${currentHotel.rating}</div>
    <span class="hotel-rating-text">${getRatingLabel(currentHotel.rating)}</span>
    <span class="hotel-review-text">${currentHotel.reviewCount.toLocaleString()} reviews</span>`;
}

// ---- Photos carousel ----
function renderPhotosCarousel() {
  const inner      = document.getElementById('photosCarouselInner');
  const indicators = document.getElementById('photosIndicators');
  inner.innerHTML = indicators.innerHTML = '';

  const images = (currentHotel.images && currentHotel.images.length > 0)
    ? currentHotel.images : [currentHotel.image];

  images.forEach(function (url, i) {
    // indicator
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('data-bs-target', '#hotelPhotosCarousel');
    btn.setAttribute('data-bs-slide-to', String(i));
    if (i === 0) btn.classList.add('active');
    indicators.appendChild(btn);

    // slide
    const item = document.createElement('div');
    item.className = 'carousel-item' + (i === 0 ? ' active' : '');
    item.innerHTML = `<img src="${url}" alt="${currentHotel.name} – photo ${i + 1}" />`;
    inner.appendChild(item);
  });
}

// ---- Info & policies ----
function renderInfo() {
  document.getElementById('hotelDescription').textContent = currentHotel.description;

  document.getElementById('hotelAmenities').innerHTML =
    currentHotel.amenities.map(function (a) {
      return `<span class="amenity-tag"><i class="bi bi-check-circle-fill" style="color:#38a169"></i>${a}</span>`;
    }).join('');

  document.getElementById('policyCheckIn').textContent   = currentHotel.checkIn;
  document.getElementById('policyCheckOut').textContent  = currentHotel.checkOut;
  document.getElementById('policyPets').textContent      = currentHotel.policies.pets;
  document.getElementById('policySmoking').textContent   = currentHotel.policies.smoking;
  document.getElementById('policyChildren').textContent  = currentHotel.policies.children;
}

// ---- Show room selection ----
function showRoomSelection() {
  const section = document.getElementById('roomSelectionSection');
  section.classList.remove('d-none');
  renderRooms();
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- Render rooms ----
function renderRooms() {
  const container = document.getElementById('roomsContainer');
  container.innerHTML = '';

  currentHotel.rooms.forEach(function (room, index) {
    const div = document.createElement('div');
    div.className = 'room-row';
    div.dataset.roomIndex = index;
    div.innerHTML = buildRoomRow(room, index);
    container.appendChild(div);
  });

  container.querySelectorAll('.room-count-select').forEach(function (sel) {
    sel.addEventListener('change', function () { updateRoomTotal(sel); });
  });
  container.querySelectorAll('.btn-book-room').forEach(function (btn) {
    btn.addEventListener('click', function () { handleBookRoom(btn); });
  });
}

function buildRoomRow(room, index) {
  const conditions = room.conditions.map(function (c) {
    return `<div class="condition-badge"><i class="bi bi-check2-circle"></i>${c}</div>`;
  }).join('');

  const amenities = room.amenities.map(function (a) {
    return `<span class="room-amenity-tag">${a}</span>`;
  }).join('');

  const guestIcons = Array.from({ length: Math.min(room.guests, 4) })
    .map(function () { return '<i class="bi bi-person-fill"></i>'; }).join('');

  let options = '<option value="0">— Select —</option>';
  for (let i = 1; i <= 5; i++) {
    options += `<option value="${i}">${i} room${i > 1 ? 's' : ''}</option>`;
  }

  return `
    <img src="${room.image}" alt="${room.type}" class="room-img" loading="lazy" />

    <div class="room-info-block">
      <div class="room-type-name">${room.type}</div>
      <div class="room-size"><i class="bi bi-aspect-ratio me-1"></i>${room.size}</div>
      <div>${amenities}</div>
    </div>

    <div class="room-conditions-block">${conditions}</div>

    <div class="room-price-block">
      <div class="room-guests-icon">${guestIcons}</div>
      <div class="room-price">&#8378;${room.pricePerNight.toLocaleString()}</div>
      <div class="room-price-note">per night</div>
      <div class="room-price-note">All taxes included</div>
    </div>

    <div class="room-action-block">
      <select class="room-count-select" data-price="${room.pricePerNight}" data-room-index="${index}">${options}</select>
      <div class="room-total-price" id="roomTotal_${index}"></div>
      <button type="button" class="btn-book-room" data-room-index="${index}">
        <i class="bi bi-calendar-check me-1"></i>Book Now
      </button>
    </div>`;
}

function updateRoomTotal(sel) {
  const count = parseInt(sel.value);
  const price = parseInt(sel.dataset.price);
  const idx   = sel.dataset.roomIndex;
  const el    = document.getElementById('roomTotal_' + idx);
  el.textContent = count > 0
    ? '₺' + (count * price).toLocaleString() + ' total'
    : '';
}

function handleBookRoom(btn) {
  const idx    = parseInt(btn.dataset.roomIndex);
  const sel    = document.querySelector(`.room-count-select[data-room-index="${idx}"]`);
  const count  = parseInt(sel.value);

  if (!count || count < 1) {
    alert('Please select the number of rooms before booking.');
    sel.focus();
    return;
  }

  const room    = currentHotel.rooms[idx];
  const booking = JSON.parse(sessionStorage.getItem('currentBooking'));

  // Update (do NOT replace) the existing booking object
  booking.roomData = {
    roomType:      room.type,
    roomCount:     count,
    pricePerNight: room.pricePerNight,
    totalPrice:    count * room.pricePerNight,
    roomSize:      room.size,
    conditions:    room.conditions
  };

  sessionStorage.setItem('currentBooking', JSON.stringify(booking));
  window.location.href = 'payment.html';
}

// ---- Lightbox ----
function setupLightbox() {
  document.getElementById('photosCarouselInner').addEventListener('click', function (e) {
    const img = e.target.closest('img');
    if (!img) return;
    document.getElementById('lightboxImg').src = img.src;
    new bootstrap.Modal(document.getElementById('lightboxModal')).show();
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

// ---- Helpers ----
function buildStarIcons(n) {
  return Array.from({ length: 5 }).map(function (_, i) {
    return `<i class="bi bi-star-fill ${i < n ? 'star-filled' : 'star-empty'}"></i>`;
  }).join('');
}

function getRatingLabel(r) {
  if (r >= 9.5) return 'Exceptional';
  if (r >= 9.0) return 'Superb';
  if (r >= 8.5) return 'Excellent';
  if (r >= 8.0) return 'Very Good';
  if (r >= 7.0) return 'Good';
  return 'Pleasant';
}
