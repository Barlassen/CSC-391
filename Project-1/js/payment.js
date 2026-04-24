// ============================================================
// CS391 Web Application Development Project
// payment.js – Logic for payment.html
// ============================================================

// ---- On page load ----
document.addEventListener('DOMContentLoaded', function () {
  loadReservationSummary();
  setupCardFormatting();
  restoreFormData();
  setupFormPersistence();
  setupScrollToTop();
  document.getElementById('btnCompleteBooking').addEventListener('click', handleCompleteBooking);
});

// ---- Load & display reservation summary ----
function loadReservationSummary() {
  const bookingStr = sessionStorage.getItem('currentBooking');
  const summaryEl  = document.getElementById('summaryContent');

  if (!bookingStr) {
    summaryEl.innerHTML = '<p class="text-danger">No reservation found. Please go back and select a hotel.</p>';
    return;
  }

  const booking = JSON.parse(bookingStr);
  const hotel   = booking.hotel;
  const sd      = booking.searchData || {};
  const rd      = booking.roomData;

  if (!rd) {
    summaryEl.innerHTML = '<p class="text-danger">No room selected. Please go back and select a room.</p>';
    return;
  }

  const checkIn  = sd.checkIn  || '–';
  const checkOut = sd.checkOut || '–';
  const nights   = calcNights(checkIn, checkOut);
  const total    = rd.pricePerNight * rd.roomCount * Math.max(nights, 1);

  summaryEl.innerHTML = `
    <dl>
      <div class="summary-row"><dt>Hotel</dt><dd>${hotel.name}</dd></div>
      <div class="summary-row"><dt>City</dt><dd>${hotel.city}, ${hotel.country}</dd></div>
      <div class="summary-row"><dt>Room Type</dt><dd>${rd.roomType}</dd></div>
      <div class="summary-row"><dt>Rooms</dt><dd>${rd.roomCount}</dd></div>
      <div class="summary-row"><dt>Guests</dt><dd>${sd.guests || '–'}</dd></div>
      <div class="summary-row"><dt>Check-in</dt><dd>${checkIn}</dd></div>
      <div class="summary-row"><dt>Check-out</dt><dd>${checkOut}</dd></div>
      <div class="summary-row"><dt>Nights</dt><dd>${nights > 0 ? nights : '–'}</dd></div>
      <div class="summary-row"><dt>Per night</dt><dd>₺${rd.pricePerNight.toLocaleString()}</dd></div>
    </dl>
    <div class="summary-total">
      <div class="summary-row">
        <dt><i class="bi bi-cash-coin me-1"></i>Total</dt>
        <dd>₺${total.toLocaleString()}</dd>
      </div>
    </div>`;
}

function calcNights(checkIn, checkOut) {
  if (!checkIn || !checkOut || checkIn === '–' || checkOut === '–') return 0;
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = new Date(checkOut) - new Date(checkIn);
  if (isNaN(diff)) return 0;
  return Math.max(0, Math.round(diff / msPerDay));
}

// ---- Card number & expiry auto-formatting ----
function setupCardFormatting() {
  const cardNumberEl = document.getElementById('cardNumber');
  cardNumberEl.addEventListener('input', function () {
    let val = cardNumberEl.value.replace(/\D/g, '').substring(0, 16);
    cardNumberEl.value = val.replace(/(.{4})/g, '$1 ').trim();
  });

  const expiryEl = document.getElementById('expiryDate');
  expiryEl.addEventListener('input', function () {
    let val = expiryEl.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 3) {
      val = val.substring(0, 2) + '/' + val.substring(2);
    }
    expiryEl.value = val;
  });

  const cvvEl = document.getElementById('cvv');
  cvvEl.addEventListener('input', function () {
    cvvEl.value = cvvEl.value.replace(/\D/g, '').substring(0, 4);
  });

  const phoneEl = document.getElementById('phone');
  phoneEl.addEventListener('input', function () {
    phoneEl.value = phoneEl.value.replace(/[^\d\s\-]/g, '');
  });
}

// ---- Handle Complete Booking ----
function handleCompleteBooking() {
  if (!validateForm()) return;

  const bookingStr = sessionStorage.getItem('currentBooking');
  if (!bookingStr) {
    alert('Reservation data not found. Please start again.');
    return;
  }

  const booking = JSON.parse(bookingStr);
  const hotel = booking.hotel;
  const sd = booking.searchData || {};
  const rd = booking.roomData || {};

  const nights = calcNights(sd.checkIn, sd.checkOut);
  const totalAmount = rd.totalPrice
    ? rd.totalPrice * Math.max(nights, 1)
    : rd.pricePerNight * rd.roomCount * Math.max(nights, 1);

  // Build the reservation object as specified
  const reservation = {
    hotel: {
      name: hotel.name,
      address: hotel.address + ', ' + hotel.city + ', ' + hotel.country
    },
    reservationData: {
      roomCount: rd.roomCount,
      guestCount: sd.guests || 1,
      roomType: rd.roomType,
      checkInDate: sd.checkIn || '',
      checkOutDate: sd.checkOut || ''
    },
    guestData: {
      firstName: document.getElementById('firstName').value.trim(),
      lastName: document.getElementById('lastName').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: '+90' + document.getElementById('phone').value.trim()
    },
    paymentInformation: {
      cardInfo: {
        cardNumber: document.getElementById('cardNumber').value.replace(/\s/g, ''),
        cardHolder: document.getElementById('cardHolder').value.trim(),
        expiryDate: document.getElementById('expiryDate').value.trim(),
        cvv: document.getElementById('cvv').value.trim()
      },
      paymentMethod: 'Credit Card',
      totalAmount: totalAmount
    }
  };

  // Save to sessionStorage (do NOT clear sessionStorage)
  sessionStorage.setItem('reservation', JSON.stringify(reservation));
  sessionStorage.removeItem('paymentFormDraft');

  // Clear all form fields
  clearForm();

  // Build success details HTML
  const details = reservation.reservationData;
  const payment = reservation.paymentInformation;
  document.getElementById('successDetails').innerHTML = `
    <div class="success-row"><span>Hotel</span><strong>${reservation.hotel.name}</strong></div>
    <div class="success-row"><span>Room Type</span><strong>${details.roomType}</strong></div>
    <div class="success-row"><span>Rooms</span><strong>${details.roomCount}</strong></div>
    <div class="success-row"><span>Check-in</span><strong>${details.checkInDate}</strong></div>
    <div class="success-row"><span>Check-out</span><strong>${details.checkOutDate}</strong></div>
    <div class="success-row success-total"><span>Total</span><strong>&#8378;${payment.totalAmount.toLocaleString()}</strong></div>
  `;

  // Hide form, show success card
  document.getElementById('paymentLayout').classList.add('d-none');
  const card = document.getElementById('bookingSuccessCard');
  card.classList.remove('d-none');
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- Form Validation ----
function validateForm() {
  let isValid = true;

  // First name
  const firstName = document.getElementById('firstName');
  if (!firstName.value.trim()) {
    setInvalid(firstName, true);
    isValid = false;
  } else {
    setInvalid(firstName, false);
  }

  // Last name
  const lastName = document.getElementById('lastName');
  if (!lastName.value.trim()) {
    setInvalid(lastName, true);
    isValid = false;
  } else {
    setInvalid(lastName, false);
  }

  // Email
  const email = document.getElementById('email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
    setInvalid(email, true);
    isValid = false;
  } else {
    setInvalid(email, false);
  }

  // Phone
  const phone = document.getElementById('phone');
  const phoneClean = phone.value.replace(/[\s\-]/g, '');
  if (!phoneClean || phoneClean.length < 7 || phoneClean.length > 12) {
    setInvalid(phone, true);
    document.getElementById('phoneFeedback').classList.add('d-block');
    isValid = false;
  } else {
    setInvalid(phone, false);
    document.getElementById('phoneFeedback').classList.remove('d-block');
  }

  // Clarification checkbox
  const checkClarification = document.getElementById('checkClarification');
  if (!checkClarification.checked) {
    checkClarification.classList.add('is-invalid');
    isValid = false;
  } else {
    checkClarification.classList.remove('is-invalid');
  }

  // Consent checkbox
  const checkConsent = document.getElementById('checkConsent');
  if (!checkConsent.checked) {
    checkConsent.classList.add('is-invalid');
    isValid = false;
  } else {
    checkConsent.classList.remove('is-invalid');
  }

  // Card holder
  const cardHolder = document.getElementById('cardHolder');
  if (!cardHolder.value.trim()) {
    setInvalid(cardHolder, true);
    document.getElementById('cardHolderFeedback').classList.add('d-block');
    isValid = false;
  } else {
    setInvalid(cardHolder, false);
    document.getElementById('cardHolderFeedback').classList.remove('d-block');
  }

  // Card number – must be 16 digits
  const cardNumber = document.getElementById('cardNumber');
  const cardDigits = cardNumber.value.replace(/\s/g, '');
  if (cardDigits.length !== 16 || !/^\d+$/.test(cardDigits)) {
    setInvalid(cardNumber, true);
    document.getElementById('cardNumberFeedback').classList.add('d-block');
    isValid = false;
  } else {
    setInvalid(cardNumber, false);
    document.getElementById('cardNumberFeedback').classList.remove('d-block');
  }

  // Expiry date – MM/YY format
  const expiryDate = document.getElementById('expiryDate');
  const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expiryPattern.test(expiryDate.value.trim())) {
    setInvalid(expiryDate, true);
    document.getElementById('expiryFeedback').classList.add('d-block');
    isValid = false;
  } else {
    setInvalid(expiryDate, false);
    document.getElementById('expiryFeedback').classList.remove('d-block');
  }

  // CVV – 3 or 4 digits
  const cvv = document.getElementById('cvv');
  if (!/^\d{3,4}$/.test(cvv.value.trim())) {
    setInvalid(cvv, true);
    document.getElementById('cvvFeedback').classList.add('d-block');
    isValid = false;
  } else {
    setInvalid(cvv, false);
    document.getElementById('cvvFeedback').classList.remove('d-block');
  }

  // Agreement checkbox
  const checkAgreement = document.getElementById('checkAgreement');
  if (!checkAgreement.checked) {
    checkAgreement.classList.add('is-invalid');
    isValid = false;
  } else {
    checkAgreement.classList.remove('is-invalid');
  }

  return isValid;
}

function setInvalid(el, invalid) {
  if (invalid) {
    el.classList.add('is-invalid');
    el.classList.remove('is-valid');
  } else {
    el.classList.remove('is-invalid');
    el.classList.add('is-valid');
  }
}

// ---- Form persistence (geri basınca veriler kaybolmasın) ----
const FORM_FIELDS = ['firstName', 'lastName', 'email', 'phone', 'cardHolder', 'cardNumber', 'expiryDate', 'cvv'];

function setupFormPersistence() {
  FORM_FIELDS.forEach(function (id) {
    document.getElementById(id).addEventListener('input', saveFormData);
  });
  ['checkClarification', 'checkConsent', 'checkAgreement'].forEach(function (id) {
    document.getElementById(id).addEventListener('change', saveFormData);
  });
}

function saveFormData() {
  const data = {};
  FORM_FIELDS.forEach(function (id) { data[id] = document.getElementById(id).value; });
  data.checkClarification = document.getElementById('checkClarification').checked;
  data.checkConsent       = document.getElementById('checkConsent').checked;
  data.checkAgreement     = document.getElementById('checkAgreement').checked;
  sessionStorage.setItem('paymentFormDraft', JSON.stringify(data));
}

function restoreFormData() {
  const raw = sessionStorage.getItem('paymentFormDraft');
  if (!raw) return;
  const data = JSON.parse(raw);
  FORM_FIELDS.forEach(function (id) { if (data[id]) document.getElementById(id).value = data[id]; });
  if (data.checkClarification) document.getElementById('checkClarification').checked = true;
  if (data.checkConsent)       document.getElementById('checkConsent').checked       = true;
  if (data.checkAgreement)     document.getElementById('checkAgreement').checked     = true;
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

// ---- Clear all form fields ----
function clearForm() {
  const fields = ['firstName', 'lastName', 'email', 'phone',
    'cardHolder', 'cardNumber', 'expiryDate', 'cvv'];
  fields.forEach(function (id) {
    const el = document.getElementById(id);
    el.value = '';
    el.classList.remove('is-valid', 'is-invalid');
  });

  document.getElementById('checkClarification').checked = false;
  document.getElementById('checkConsent').checked = false;
  document.getElementById('checkAgreement').checked = false;

  ['checkClarification', 'checkConsent', 'checkAgreement'].forEach(function (id) {
    document.getElementById(id).classList.remove('is-invalid');
  });
}
