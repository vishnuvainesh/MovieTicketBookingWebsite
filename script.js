/* =============================================================
   CINEVERSE – script.js
   Premium Movie Ticket Booking · v2.0
   Sections:
     01  Data
     02  State
     03  Init
     04  Navbar & Navigation
     05  Page Navigation
     06  Hero Slider
     07  Render: Movies
     08  Render: Upcoming Carousel
     09  Render: Offers
     10  Movie Details
     11  Theater Page
     12  Seat Selection
     13  Payment
     14  Confirmation
     15  Dashboard
     16  Search & Filter
     17  Utilities (Loading, Toast, Keyboard)
============================================================= */

/* ======================== 01 DATA ======================== */
const MOVIES = [
  {
    id: 'dune3', title: 'Dune: Part Three',
    genre: ['Sci-Fi','Adventure'], lang: 'English',
    duration: '2h 48m', rating: 9.2, format: 'IMAX',
    bg: 'linear-gradient(180deg,#1a0a00,#4a2a00,#8a5a00)', emoji: '🏜️',
    synopsis: 'The desert war reaches its apocalyptic conclusion. Paul Atreides stands on the precipice of galactic power, facing an impossible choice between love, duty, and the fate of millions.',
    cast: ['Timothée Chalamet','Zendaya','Rebecca Ferguson','Josh Brolin','Javier Bardem'], year: 2026,
  },
  {
    id: 'avatar4', title: 'Avatar: New Dawn',
    genre: ['Fantasy','Action'], lang: 'English',
    duration: '3h 10m', rating: 8.9, format: '3D',
    bg: 'linear-gradient(180deg,#001a1a,#003333,#006644)', emoji: '🌿',
    synopsis: "A new chapter in Pandora unfolds. The Na'vi discover ancient spirits dormant beneath the sacred forests, as humanity wages its final campaign.",
    cast: ['Sam Worthington','Zoe Saldana','Sigourney Weaver','Kate Winslet','CCH Pounder'], year: 2026,
  },
  {
    id: 'avengers5', title: 'Avengers: Rebirth',
    genre: ['Action','Superhero'], lang: 'English',
    duration: '2h 55m', rating: 9.5, format: 'IMAX',
    bg: 'linear-gradient(180deg,#0a001a,#200033,#400055)', emoji: '⚡',
    synopsis: "The Multiverse is fracturing. Earth's mightiest heroes face enemies from beyond time itself in the most epic showdown the universe has ever seen.",
    cast: ['Robert Downey Jr.','Chris Evans','Scarlett Johansson','Chris Hemsworth','Benedict Cumberbatch'], year: 2026,
  },
  {
    id: 'oppenheimer2', title: 'Oppenheimer: Legacy',
    genre: ['Drama','History'], lang: 'English',
    duration: '2h 30m', rating: 8.7, format: '4DX',
    bg: 'linear-gradient(180deg,#1a1a00,#333300,#555500)', emoji: '💥',
    synopsis: 'The aftermath of the bomb. A world reshaped. As the Cold War ignites, Oppenheimer must reckon with the ultimate consequences of his creation.',
    cast: ['Cillian Murphy','Emily Blunt','Matt Damon','Robert Downey Jr.'], year: 2026,
  },
  {
    id: 'interstellar2', title: 'Interstellar: Beyond',
    genre: ['Sci-Fi','Drama'], lang: 'English',
    duration: '2h 50m', rating: 9.1, format: 'IMAX',
    bg: 'linear-gradient(180deg,#000a1a,#001a33,#002266)', emoji: '🌌',
    synopsis: 'A new generation ventures past the known cosmos. Time bends. Love transcends. The final frontier awaits at the edge of a black hole.',
    cast: ['Matthew McConaughey','Anne Hathaway','Jessica Chastain','Fionn Whitehead'], year: 2026,
  },
  {
    id: 'inception2', title: 'Inception: Dream War',
    genre: ['Thriller','Sci-Fi'], lang: 'English',
    duration: '2h 40m', rating: 9.3, format: '4DX',
    bg: 'linear-gradient(180deg,#001a0a,#003322,#004433)', emoji: '🌀',
    synopsis: 'Dream thieves discover a terrifying weapon hidden in the subconscious. Reality itself is at stake as Cobb faces his greatest extraction yet.',
    cast: ['Leonardo DiCaprio','Joseph Gordon-Levitt','Elliot Page','Tom Hardy','Ken Watanabe'], year: 2026,
  },
  {
    id: 'joker3', title: 'Joker: Chaos Theory',
    genre: ['Drama','Thriller'], lang: 'English',
    duration: '2h 15m', rating: 8.6, format: '2D',
    bg: 'linear-gradient(180deg,#1a0000,#330000,#550011)', emoji: '🃏',
    synopsis: "Gotham collapses into madness. Arthur Fleck's shadow spreads across a generation — and a new Joker rises from the ashes.",
    cast: ['Joaquin Phoenix','Lady Gaga','Zazie Beetz','Brendan Gleeson'], year: 2026,
  },
  {
    id: 'matrix5', title: 'The Matrix: Source',
    genre: ['Action','Sci-Fi'], lang: 'English',
    duration: '2h 45m', rating: 8.4, format: 'IMAX',
    bg: 'linear-gradient(180deg,#001a00,#003300,#005500)', emoji: '💊',
    synopsis: 'Neo discovers the Source code of reality. A final war between humans and machines threatens to delete all of existence.',
    cast: ['Keanu Reeves','Carrie-Anne Moss','Jada Pinkett Smith','Yahya Abdul-Mateen II'], year: 2026,
  },
];

const UPCOMING_MOVIES = [
  { title: 'Blade Runner 3',   emoji: '🤖', bg: 'linear-gradient(180deg,#0a001a,#1a0033)', date: 'Aug 15, 2026' },
  { title: 'Mad Max: Fury',    emoji: '🚗', bg: 'linear-gradient(180deg,#1a0a00,#3a1a00)', date: 'Sep 5, 2026' },
  { title: 'Black Panther 3',  emoji: '🐾', bg: 'linear-gradient(180deg,#001a1a,#003333)', date: 'Sep 20, 2026' },
  { title: 'Tenet 2',          emoji: '🔄', bg: 'linear-gradient(180deg,#0a0a1a,#1a1a3a)', date: 'Oct 10, 2026' },
  { title: 'Thor: Ragnarok II',emoji: '⚡', bg: 'linear-gradient(180deg,#1a0a1a,#2a1a3a)', date: 'Oct 25, 2026' },
  { title: 'Fantastic Voyage', emoji: '🧬', bg: 'linear-gradient(180deg,#001a00,#003a00)', date: 'Nov 8, 2026' },
  { title: 'Gladiator III',    emoji: '⚔️', bg: 'linear-gradient(180deg,#1a0800,#3a1800)', date: 'Nov 28, 2026' },
  { title: 'Pacific Rim: Rise',emoji: '🦾', bg: 'linear-gradient(180deg,#000a1a,#001a3a)', date: 'Dec 12, 2026' },
];

const OFFERS = [
  { title: '30% Off on Mondays',  desc: 'Enjoy 30% off on all ticket categories every Monday. Valid on all formats.', code: 'MONDAY30',  badge: '30% OFF',    color: 'gold' },
  { title: 'HDFC Bank Offer',     desc: 'HDFC Debit/Credit card holders get flat ₹150 off on bookings above ₹500.',   code: 'HDFC150',   badge: 'BANK OFFER', color: 'blue' },
  { title: 'Couple Special',      desc: 'Book 2 tickets and get 1 combo (popcorn + drink) absolutely free!',           code: 'COUPLE2',   badge: 'COMBO FREE', color: 'purple' },
  { title: 'Student Discount',    desc: 'Valid student ID gets you 20% off on weekday bookings. Every week!',          code: 'STUDENT20', badge: '20% OFF',    color: 'teal' },
];

const THEATERS = [
  { name: 'PVR IMAX Nexus',   location: 'Koramangala, Bengaluru', amenities: ['IMAX','4DX','Dolby Atmos','Recliner'],   rating: 4.8, times: ['10:00 AM','1:30 PM','4:45 PM','8:15 PM','11:30 PM'] },
  { name: 'Cinepolis Grand',  location: 'Indiranagar, Bengaluru', amenities: ['3D','Dolby','Food Court'],               rating: 4.5, times: ['9:30 AM','12:45 PM','3:30 PM','7:00 PM','10:15 PM'] },
  { name: 'INOX Onyx',        location: 'Whitefield, Bengaluru',  amenities: ['2D','3D','IMAX','Lounge'],               rating: 4.7, times: ['11:00 AM','2:00 PM','5:30 PM','9:00 PM'] },
  { name: 'Miraj Cinemas',    location: 'Jayanagar, Bengaluru',   amenities: ['2D','4DX','Snack Bar'],                  rating: 4.3, times: ['10:30 AM','1:45 PM','5:00 PM','8:30 PM'] },
];

const BOOKING_HISTORY = [
  { movie: 'Dune: Part Three',    date: 'May 28, 2026', seats: 'G7, G8',       theater: 'PVR IMAX Nexus', amount: 1160, status: 'Confirmed' },
  { movie: 'Avengers: Rebirth',   date: 'May 15, 2026', seats: 'C4, C5, C6',   theater: 'INOX Onyx',      amount: 2100, status: 'Confirmed' },
  { movie: 'Inception: Dream War',date: 'Apr 30, 2026', seats: 'A1',           theater: 'Cinepolis Grand', amount: 800,  status: 'Attended' },
];

const PROMO_CODES = {
  MONDAY30:  { type: 'percent', value: 0.3  },
  HDFC150:   { type: 'flat',    value: 150  },
  COUPLE2:   { type: 'flat',    value: 0    },
  STUDENT20: { type: 'percent', value: 0.2  },
};

const SEAT_PRICES = { vip: 800, premium: 500, regular: 250 };

const SEAT_LAYOUT = [
  { row: 'A', type: 'vip',     count: 8,  bookedIndices: [2,5] },
  { row: 'B', type: 'vip',     count: 8,  bookedIndices: [0,3,7] },
  { row: 'C', type: 'premium', count: 10, bookedIndices: [1,4,8] },
  { row: 'D', type: 'premium', count: 10, bookedIndices: [2,6,9] },
  { row: 'E', type: 'premium', count: 10, bookedIndices: [0,5] },
  { row: 'F', type: 'regular', count: 12, bookedIndices: [3,7,10] },
  { row: 'G', type: 'regular', count: 12, bookedIndices: [1,5,8,11] },
  { row: 'H', type: 'regular', count: 12, bookedIndices: [0,4,6] },
  { row: 'I', type: 'regular', count: 12, bookedIndices: [2,9] },
  { row: 'J', type: 'regular', count: 12, bookedIndices: [3,6] },
];

/* ======================== 02 STATE ======================== */
let state = {
  currentHeroSlide: 0,
  selectedMovie:    null,
  selectedTheater:  null,
  selectedTime:     null,
  selectedDate:     null,
  selectedSeats:    [],
  bookingTotal:     0,
  bookingId:        null,
  discount:         0,
  promoApplied:     false,
  menuOpen:         false,
};

/* ======================== 03 INIT ======================== */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedMovies();
  renderUpcomingCarousel();
  renderOffers();
  renderAllMovies();
  renderTheaters();
  renderBookingHistory();
  renderFavMovies();
  initNavbar();
  initNavLinks();
  initSearch();
  setDefaultDate();
  startHeroAutoplay();
  initCopyOfferCodes();
});

/* ======================== 04 NAVBAR & NAVIGATION ======================== */
function initNavbar() {
  // Scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger toggle
  const hamburger = document.getElementById('navHamburger');
  hamburger.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  state.menuOpen = !state.menuOpen;
  const hamburger = document.getElementById('navHamburger');
  const links     = document.getElementById('navLinks');
  const overlay   = document.getElementById('navOverlay');
  hamburger.classList.toggle('open', state.menuOpen);
  hamburger.setAttribute('aria-expanded', state.menuOpen);
  links.classList.toggle('open', state.menuOpen);
  overlay.classList.toggle('active', state.menuOpen);
  document.body.style.overflow = state.menuOpen ? 'hidden' : '';
}

function closeMenu() {
  state.menuOpen = false;
  const hamburger = document.getElementById('navHamburger');
  const links     = document.getElementById('navLinks');
  const overlay   = document.getElementById('navOverlay');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  links.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function initNavLinks() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) {
        showPage(page);
        updateActiveNavLink(page);
      }
      closeMenu();
    });
  });

  // Logo click
  const logo = document.querySelector('.nav-logo');
  if (logo) logo.addEventListener('click', () => { showPage('home'); updateActiveNavLink('home'); });
  logo.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { showPage('home'); updateActiveNavLink('home'); } });
}

function updateActiveNavLink(page) {
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('data-page') === page);
  });
}

/* ======================== 05 PAGE NAVIGATION ======================== */
function showPage(name) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const target = document.getElementById(`page-${name}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav highlight
  const pageToNav = { home:'home', movies:'movies', theaters:'theaters', offers:'offers', dashboard:'dashboard' };
  if (pageToNav[name]) updateActiveNavLink(pageToNav[name]);
}

/* ======================== 06 HERO SLIDER ======================== */
let heroInterval;

function startHeroAutoplay() {
  heroInterval = setInterval(() => changeHeroSlide(1), 5000);
}

function pauseHeroAutoplay() {
  clearInterval(heroInterval);
}

function resumeHeroAutoplay() {
  clearInterval(heroInterval);
  heroInterval = setInterval(() => changeHeroSlide(1), 5000);
}

function changeHeroSlide(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;

  slides[state.currentHeroSlide].classList.remove('active');
  dots[state.currentHeroSlide].classList.remove('active');
  dots[state.currentHeroSlide].setAttribute('aria-selected','false');

  state.currentHeroSlide = (state.currentHeroSlide + dir + slides.length) % slides.length;

  slides[state.currentHeroSlide].classList.add('active');
  dots[state.currentHeroSlide].classList.add('active');
  dots[state.currentHeroSlide].setAttribute('aria-selected','true');
}

function goToSlide(i) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;

  slides[state.currentHeroSlide].classList.remove('active');
  dots[state.currentHeroSlide].classList.remove('active');
  dots[state.currentHeroSlide].setAttribute('aria-selected','false');

  state.currentHeroSlide = i;
  slides[i].classList.add('active');
  dots[i].classList.add('active');
  dots[i].setAttribute('aria-selected','true');

  resumeHeroAutoplay();
}

// Pause on hover
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mouseenter', pauseHeroAutoplay);
    hero.addEventListener('mouseleave', resumeHeroAutoplay);
  }
});

/* ======================== 07 RENDER: MOVIES ======================== */

/**
 * Creates a single movie card element.
 * @param {Object} movie
 * @param {boolean} showViewDetails – label "View Details" vs "Book Now"
 * @returns {HTMLElement}
 */
function createMovieCard(movie, showViewDetails = false) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${movie.title}, rated ${movie.rating}`);

  card.innerHTML = `
    <div class="card-poster">
      <div class="card-poster-art" style="background:${movie.bg}">
        <span aria-hidden="true">${movie.emoji}</span>
        <div class="card-badge">${movie.format}</div>
        <div class="card-poster-overlay" aria-hidden="true">
          <div class="card-play-btn">▶</div>
        </div>
      </div>
    </div>
    <div class="card-info">
      <div class="card-title" title="${movie.title}">${movie.title}</div>
      <div class="card-meta">
        ${movie.genre.map(g => `<span class="card-tag">${g}</span>`).join('')}
        <span class="card-tag">${movie.duration}</span>
      </div>
      <div class="card-rating">⭐ ${movie.rating}/10</div>
      <button class="card-book-btn" onclick="showMovieDetails('${movie.id}')">
        ${showViewDetails ? 'View Details' : 'Book Now'}
      </button>
    </div>
  `;

  // Keyboard activation
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showMovieDetails(movie.id);
    }
  });

  return card;
}

function renderFeaturedMovies() {
  const grid = document.getElementById('featuredMoviesGrid');
  if (!grid) return;
  MOVIES.slice(0, 6).forEach(m => grid.appendChild(createMovieCard(m)));
}

function renderAllMovies(filtered = null) {
  const grid = document.getElementById('allMoviesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const list = filtered || MOVIES;
  list.forEach(m => grid.appendChild(createMovieCard(m, true)));

  const countEl = document.getElementById('filterCount');
  if (countEl) countEl.textContent = `Showing ${list.length} movie${list.length !== 1 ? 's' : ''}`;
}

/* ======================== 08 RENDER: UPCOMING CAROUSEL ======================== */
function renderUpcomingCarousel() {
  const carousel = document.getElementById('upcomingCarousel');
  if (!carousel) return;
  UPCOMING_MOVIES.forEach(m => {
    const card = document.createElement('div');
    card.className = 'upcoming-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${m.title} – coming ${m.date}`);
    card.innerHTML = `
      <div class="upcoming-card-art" style="background:${m.bg}">
        <span aria-hidden="true">${m.emoji}</span>
        <span class="upcoming-coming-badge" aria-hidden="true">COMING SOON</span>
        <div class="upcoming-overlay">
          <span class="upcoming-title">${m.title}</span>
          <span class="upcoming-date">${m.date}</span>
        </div>
      </div>
    `;
    carousel.appendChild(card);
  });
}

function scrollCarousel(dir) {
  const carousel = document.getElementById('upcomingCarousel');
  if (carousel) carousel.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
}

/* ======================== 09 RENDER: OFFERS ======================== */
function renderOffers() {
  const gridHome = document.getElementById('offersGrid');
  const gridFull = document.getElementById('offersGridFull');

  OFFERS.forEach(o => {
    [gridHome, gridFull].forEach(g => {
      if (!g) return;
      const card = document.createElement('div');
      card.className = `offer-card ${o.color}`;
      card.setAttribute('role', 'listitem');
      card.innerHTML = `
        <span class="offer-badge">${o.badge}</span>
        <div class="offer-title">${o.title}</div>
        <p class="offer-desc">${o.desc}</p>
        <div class="offer-code" tabindex="0" title="Click to copy" onclick="copyPromoCode('${o.code}', this)">
          ${o.code}
          <span class="copy-hint">Click to copy</span>
        </div>
      `;
      g.appendChild(card);
    });
  });
}

function initCopyOfferCodes() {
  // Keyboard support for offer codes
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.classList.contains('offer-code')) {
      const code = e.target.textContent.trim().split('\n')[0].trim();
      copyPromoCode(code, e.target);
    }
  });
}

function copyPromoCode(code, el) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`📋 Code "${code}" copied!`);
    }).catch(() => {
      showToast(`✅ Use code: ${code}`);
    });
  } else {
    showToast(`✅ Use code: ${code}`);
  }
}

/* ======================== 10 MOVIE DETAILS ======================== */
function showMovieDetails(movieId) {
  const movie = MOVIES.find(m => m.id === movieId);
  if (!movie) { showToast('❌ Movie not found'); return; }

  state.selectedMovie = movie;
  const container = document.getElementById('movieDetailsContent');
  if (!container) return;

  container.innerHTML = `
    <div class="movie-details-hero" style="background:${movie.bg}">
      <div class="movie-details-poster">
        <div class="details-poster-art" style="background:${movie.bg}" aria-hidden="true">
          ${movie.emoji}
        </div>
      </div>
      <div class="movie-details-info">
        <h1 class="details-title">${movie.title}</h1>
        <div class="details-meta">
          <span class="meta-chip gold">⭐ ${movie.rating}/10</span>
          <span class="meta-chip">${movie.genre.join(' / ')}</span>
          <span class="meta-chip">⏱ ${movie.duration}</span>
          <span class="meta-chip">🌐 ${movie.lang}</span>
          <span class="meta-chip">${movie.format}</span>
          <span class="meta-chip">📅 ${movie.year}</span>
        </div>
        <p class="synopsis">${movie.synopsis}</p>
        <div class="cast-section">
          <div class="cast-label">Cast &amp; Crew</div>
          <div class="cast-list">
            ${movie.cast.map(c => `<span class="cast-chip">${c}</span>`).join('')}
          </div>
        </div>
        <div class="details-btns">
          <button class="btn-primary" onclick="showPage('theaters')">Book Tickets</button>
          <button class="btn-ghost" onclick="showToast('🎬 Trailer coming soon!')">▶ Watch Trailer</button>
          <button class="btn-ghost" onclick="showPage('home')">← Back</button>
        </div>
      </div>
    </div>

    <div class="showtimes-section">
      <h2>Available Shows</h2>
      <div id="theaterShowtimeList"></div>
    </div>
  `;

  const list = document.getElementById('theaterShowtimeList');
  THEATERS.forEach(t => {
    const card = document.createElement('div');
    card.className = 'theater-showtime-card';
    card.innerHTML = `
      <div class="theater-name">🎭 ${t.name}</div>
      <div class="theater-location">📍 ${t.location} · ⭐ ${t.rating}</div>
      <div class="theater-amenities">
        ${t.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}
      </div>
      <div class="times-row">
        ${t.times.map(time => `
          <button class="time-btn" onclick="selectTime(this,'${t.name}','${time}')" aria-label="${t.name} at ${time}">
            ${time}
          </button>`).join('')}
      </div>
    `;
    list.appendChild(card);
  });

  showPage('movie-details');
}

function selectTime(btn, theaterName, time) {
  // Clear previous selections in this card only
  const allTimeBtns = document.querySelectorAll('.time-btn');
  allTimeBtns.forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  state.selectedTheater = theaterName;
  state.selectedTime    = time;

  setTimeout(() => showSeatSelection(), 350);
}

/* ======================== 11 THEATER PAGE ======================== */
function renderTheaters(list = THEATERS) {
  const container = document.getElementById('theatersList');
  if (!container) return;
  container.innerHTML = '';

  list.forEach(t => {
    const card = document.createElement('div');
    card.className = 'theater-card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div>
        <div class="theater-card-name">🎭 ${t.name}</div>
        <div class="theater-location">📍 ${t.location} · ⭐ ${t.rating}</div>
        <div class="theater-amenities" style="margin-top:0.8rem">
          ${t.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}
        </div>
        <div class="times-row" style="margin-top:1rem">
          ${t.times.map(time => `
            <button class="time-btn" onclick="selectTheaterTime(this,'${t.name}','${time}')" aria-label="${t.name} at ${time}">
              ${time}
            </button>`).join('')}
        </div>
      </div>
      <div class="theater-card-actions">
        <button class="btn-ghost" onclick="showToast('📍 Opening maps for ${t.name}…')">Get Directions</button>
      </div>
    `;
    container.appendChild(card);
  });

  if (list.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:3rem">No theaters found. Try a different search.</p>';
  }
}

function selectTheaterTime(btn, theaterName, time) {
  state.selectedTheater = theaterName;
  state.selectedTime    = time;
  if (!state.selectedMovie) state.selectedMovie = MOVIES[0];
  showSeatSelection();
}

function searchTheaters() {
  const query = document.getElementById('theaterSearchInput')?.value.trim().toLowerCase() || '';
  const date  = document.getElementById('theaterDate')?.value;

  if (!query && !date) {
    renderTheaters();
    showToast('🎭 Showing all theaters');
    return;
  }

  const filtered = THEATERS.filter(t => {
    const matchQ = !query || t.name.toLowerCase().includes(query) || t.location.toLowerCase().includes(query);
    return matchQ;
  });

  renderTheaters(filtered);
  showToast(`🔍 Found ${filtered.length} theater${filtered.length !== 1 ? 's' : ''}`);
}

function filterTheaters() {
  const query = document.getElementById('theaterSearchInput')?.value.trim().toLowerCase() || '';
  if (!query) { renderTheaters(); return; }
  const filtered = THEATERS.filter(t =>
    t.name.toLowerCase().includes(query) || t.location.toLowerCase().includes(query)
  );
  renderTheaters(filtered);
}

function setDefaultDate() {
  const dateInput = document.getElementById('theaterDate');
  if (dateInput) {
    dateInput.value = new Date().toISOString().split('T')[0];
  }
}

/* ======================== 12 SEAT SELECTION ======================== */
function showSeatSelection() {
  state.selectedSeats = [];
  state.discount      = 0;
  state.promoApplied  = false;

  const subtitle = document.getElementById('seatPageSubtitle');
  if (subtitle && state.selectedMovie) {
    subtitle.textContent = `${state.selectedMovie.title} · ${state.selectedTheater} · ${state.selectedTime}`;
  }

  const summaryMovie = document.getElementById('summaryMovie');
  if (summaryMovie && state.selectedMovie) {
    summaryMovie.innerHTML = `
      <div class="summary-movie-title">${state.selectedMovie.title}</div>
      <div class="summary-movie-meta">${state.selectedTheater || 'Theater'} · ${state.selectedTime || 'Showtime'}</div>
    `;
  }

  renderSeatMap();
  updateSeatSummary();
  showPage('seats');
}

function renderSeatMap() {
  const map = document.getElementById('seatMap');
  if (!map) return;
  map.innerHTML = '';

  SEAT_LAYOUT.forEach(rowData => {
    const rowEl   = document.createElement('div');
    rowEl.className = 'seat-row';
    rowEl.setAttribute('role', 'row');

    const label = document.createElement('span');
    label.className   = 'row-label';
    label.textContent = rowData.row;
    label.setAttribute('aria-label', `Row ${rowData.row}`);
    rowEl.appendChild(label);

    const half = Math.floor(rowData.count / 2);

    for (let i = 0; i < rowData.count; i++) {
      // Aisle gap in the middle
      if (i === half) {
        const gap = document.createElement('div');
        gap.className = 'gap'; gap.setAttribute('aria-hidden','true');
        rowEl.appendChild(gap);
      }

      const seat   = document.createElement('div');
      const seatId = `${rowData.row}${i + 1}`;
      const isBooked = rowData.bookedIndices.includes(i);
      const label    = `${rowData.type.charAt(0).toUpperCase()}${rowData.type.slice(1)} seat ${seatId} – ₹${SEAT_PRICES[rowData.type]}`;

      seat.className   = `seat ${rowData.type}${isBooked ? ' booked' : ''}`;
      seat.dataset.id  = seatId;
      seat.dataset.type = rowData.type;
      seat.title        = label;
      seat.setAttribute('role', 'button');
      seat.setAttribute('aria-label', `${label}${isBooked ? ' – unavailable' : ''}`);
      seat.setAttribute('aria-disabled', isBooked ? 'true' : 'false');
      seat.setAttribute('tabindex', isBooked ? '-1' : '0');

      if (!isBooked) {
        seat.addEventListener('click', () => toggleSeat(seat, seatId, rowData.type));
        seat.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSeat(seat, seatId, rowData.type); }
        });
      }

      rowEl.appendChild(seat);
    }

    map.appendChild(rowEl);
  });
}

function toggleSeat(seatEl, seatId, type) {
  if (seatEl.classList.contains('booked')) return;

  if (seatEl.classList.contains('selected')) {
    seatEl.classList.remove('selected');
    seatEl.classList.add(type);
    seatEl.setAttribute('aria-pressed', 'false');
    state.selectedSeats = state.selectedSeats.filter(s => s.id !== seatId);
  } else {
    if (state.selectedSeats.length >= 10) {
      showToast('⚠️ Maximum 10 seats per booking');
      return;
    }
    seatEl.classList.remove(type);
    seatEl.classList.add('selected');
    seatEl.setAttribute('aria-pressed', 'true');
    state.selectedSeats.push({ id: seatId, type, price: SEAT_PRICES[type] });
  }
  updateSeatSummary();
}

function updateSeatSummary() {
  const display   = document.getElementById('selectedSeatsDisplay');
  const breakdown = document.getElementById('categoryBreakdown');
  const subtotalEl = document.getElementById('subtotal');
  const feeEl     = document.getElementById('convenienceFee');
  const totalEl   = document.getElementById('grandTotal');

  if (!display) return;

  if (state.selectedSeats.length === 0) {
    display.textContent  = 'None';
    breakdown.innerHTML  = '';
    subtotalEl.textContent = '₹0';
    feeEl.textContent    = '₹0';
    totalEl.textContent  = '₹0';
    return;
  }

  display.textContent = state.selectedSeats.map(s => s.id).join(', ');

  // Category breakdown
  const cats = {};
  state.selectedSeats.forEach(s => { cats[s.type] = (cats[s.type] || []).concat(s); });
  breakdown.innerHTML = Object.entries(cats).map(([type, seats]) => {
    const amount = seats.reduce((a, b) => a + b.price, 0);
    return `<div class="category-breakdown-item">
      <span>${type.charAt(0).toUpperCase() + type.slice(1)} × ${seats.length}</span>
      <span>₹${amount}</span>
    </div>`;
  }).join('');

  const sub     = state.selectedSeats.reduce((a, b) => a + b.price, 0);
  const convFee = Math.round(sub * 0.05);
  state.bookingTotal = Math.max(0, sub + convFee - state.discount);

  subtotalEl.textContent = `₹${sub}`;
  feeEl.textContent      = `₹${convFee}`;
  totalEl.textContent    = `₹${state.bookingTotal}`;
}

/* ======================== 13 PAYMENT ======================== */
function proceedToPayment() {
  if (state.selectedSeats.length === 0) {
    showToast('⚠️ Please select at least one seat');
    return;
  }
  populatePaymentSummary();
  showPage('payment');
}

function populatePaymentSummary() {
  const orderEl = document.getElementById('paymentOrderSummary');
  const priceEl = document.getElementById('paymentPriceSummary');
  if (!orderEl) return;

  const movie = state.selectedMovie || MOVIES[0];
  orderEl.innerHTML = `
    <div style="margin-bottom:1rem">
      <div style="font-family:var(--font-display);font-size:1rem;margin-bottom:0.3rem">${movie.title}</div>
      <div style="font-size:0.83rem;color:var(--text-muted)">${state.selectedTheater || 'Theater'} · ${state.selectedTime || 'Showtime'}</div>
      <div style="font-size:0.83rem;color:var(--text-muted);margin-top:0.3rem">
        Seats: <strong>${state.selectedSeats.map(s => s.id).join(', ')}</strong>
      </div>
    </div>
  `;

  const sub     = state.selectedSeats.reduce((a, b) => a + b.price, 0);
  const convFee = Math.round(sub * 0.05);
  const disc    = state.discount || 0;
  const total   = Math.max(0, sub + convFee - disc);
  state.bookingTotal = total;

  priceEl.innerHTML = `
    <div class="price-row"><span>Subtotal</span><span>₹${sub}</span></div>
    <div class="price-row"><span>Convenience Fee (5%)</span><span>₹${convFee}</span></div>
    ${disc > 0 ? `<div class="price-row" style="color:var(--green)"><span>Discount</span><span>−₹${disc}</span></div>` : ''}
    <div class="price-row total"><span>Total</span><span>₹${total}</span></div>
  `;
}

function switchPayTab(btn, tabId) {
  document.querySelectorAll('.pay-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected','false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');

  document.querySelectorAll('.pay-content').forEach(c => {
    c.classList.add('hidden');
    c.setAttribute('aria-hidden','true');
  });
  const target = document.getElementById(`pay-${tabId}`);
  if (target) { target.classList.remove('hidden'); target.setAttribute('aria-hidden','false'); }
}

function formatCardNumber(input) {
  let v = input.value.replace(/\D/g,'').slice(0,16);
  v = v.replace(/(.{4})/g,'$1 ').trim();
  input.value = v;
  const display = document.getElementById('cardNumDisplay');
  if (display) display.textContent = v || '•••• •••• •••• ••••';
}

function formatExpiry(input) {
  let v = input.value.replace(/\D/g,'').slice(0,4);
  if (v.length >= 2) v = v.slice(0,2) + '/' + v.slice(2);
  input.value = v;
  const display = document.getElementById('cardExpDisplay');
  if (display) display.textContent = v || 'MM/YY';
}

function applyPromo() {
  const codeRaw = document.getElementById('promoInput')?.value.trim().toUpperCase();
  const msg     = document.getElementById('promoMsg');
  if (!msg) return;

  if (!codeRaw) {
    msg.textContent = '⚠️ Please enter a promo code';
    msg.className   = 'promo-msg error';
    return;
  }

  const promo = PROMO_CODES[codeRaw];
  if (!promo) {
    msg.textContent = '❌ Invalid promo code. Try MONDAY30, HDFC150, or STUDENT20.';
    msg.className   = 'promo-msg error';
    state.discount  = 0;
    return;
  }

  const sub = state.selectedSeats.reduce((a, b) => a + b.price, 0);
  let disc  = 0;

  if (promo.type === 'percent') disc = Math.round(sub * promo.value);
  else disc = promo.value;

  state.discount     = disc;
  state.promoApplied = true;

  if (disc > 0) {
    msg.textContent = `✅ Promo applied! You saved ₹${disc}`;
    msg.className   = 'promo-msg success';
  } else {
    msg.textContent = `✅ Code applied! Free combo included.`;
    msg.className   = 'promo-msg success';
  }

  populatePaymentSummary();
  updateSeatSummary();
}

function processPayment() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    state.bookingId = 'CV' + Math.random().toString(36).substr(2,8).toUpperCase();
    populateConfirmation();
    showPage('confirmation');
    showToast('🎉 Booking Confirmed! Enjoy the show!');
  }, 2200);
}

/* ======================== 14 CONFIRMATION ======================== */
function populateConfirmation() {
  const movie      = state.selectedMovie || MOVIES[0];
  const ticketBody = document.getElementById('ticketBody');
  const bookingEl  = document.getElementById('bookingId');

  if (bookingEl) bookingEl.textContent = state.bookingId;
  if (!ticketBody) return;

  const now = new Date();
  ticketBody.innerHTML = `
    <div class="ticket-row"><span class="ticket-label">Movie</span><span class="ticket-value">${movie.title}</span></div>
    <div class="ticket-row"><span class="ticket-label">Theater</span><span class="ticket-value">${state.selectedTheater || 'PVR IMAX Nexus'}</span></div>
    <div class="ticket-row"><span class="ticket-label">Date</span><span class="ticket-value">${now.toLocaleDateString('en-IN',{weekday:'short',year:'numeric',month:'short',day:'numeric'})}</span></div>
    <div class="ticket-row"><span class="ticket-label">Showtime</span><span class="ticket-value">${state.selectedTime || '7:30 PM'}</span></div>
    <div class="ticket-row"><span class="ticket-label">Seats</span><span class="ticket-value">${state.selectedSeats.length ? state.selectedSeats.map(s=>s.id).join(', ') : 'G7, G8'}</span></div>
    <div class="ticket-row"><span class="ticket-label">Format</span><span class="ticket-value">${movie.format}</span></div>
    <div class="ticket-row"><span class="ticket-label">Amount Paid</span><span class="ticket-value" style="color:var(--gold)">₹${state.bookingTotal}</span></div>
  `;
}

function downloadTicket() {
  showToast('⬇️ Ticket downloaded to your device!');
}

/* ======================== 15 DASHBOARD ======================== */
function renderBookingHistory() {
  const list = document.getElementById('bookingsList');
  if (!list) return;

  BOOKING_HISTORY.forEach(b => {
    const card = document.createElement('div');
    card.className = 'booking-history-card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="booking-info">
        <div class="booking-movie">${b.movie}</div>
        <div class="booking-meta">📅 ${b.date} · 💺 ${b.seats} · 🎭 ${b.theater}</div>
      </div>
      <div class="booking-amount">
        <strong>₹${b.amount}</strong>
        <span style="color:${b.status==='Confirmed'?'var(--green)':'var(--text-muted)'}">${b.status}</span>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderFavMovies() {
  const grid = document.getElementById('favMoviesGrid');
  if (!grid) return;
  MOVIES.slice(0, 4).forEach(m => grid.appendChild(createMovieCard(m)));
}

function switchDashTab(link, tabId) {
  document.querySelectorAll('.dash-link').forEach(l => {
    l.classList.remove('active');
    l.removeAttribute('aria-current');
  });
  link.classList.add('active');
  link.setAttribute('aria-current','page');

  document.querySelectorAll('.dash-tab').forEach(t => t.classList.add('hidden'));
  const target = document.getElementById(`dash-${tabId}`);
  if (target) target.classList.remove('hidden');
}

/* ======================== 16 SEARCH & FILTER ======================== */
function initSearch() {
  const searchInput = document.getElementById('navSearch');
  if (searchInput) {
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') triggerSearch(); });
  }
}

function triggerSearch() {
  const val = document.getElementById('navSearch')?.value.trim().toLowerCase();
  if (!val) { showToast('🔍 Please type something to search'); return; }

  const matched = MOVIES.filter(m =>
    m.title.toLowerCase().includes(val) ||
    m.genre.some(g => g.toLowerCase().includes(val)) ||
    m.lang.toLowerCase().includes(val)
  );

  showPage('movies');
  renderAllMovies(matched);

  if (matched.length > 0) {
    showToast(`🔍 ${matched.length} result${matched.length!==1?'s':''} for "${val}"`);
  } else {
    showToast(`❌ No results for "${val}"`);
  }
}

function filterMovies() {
  const genre  = document.getElementById('filterGenre')?.value || '';
  const lang   = document.getElementById('filterLang')?.value  || '';
  const ratingV= document.getElementById('filterRating')?.value|| '';
  const format = document.getElementById('filterFormat')?.value || '';

  const filtered = MOVIES.filter(m => {
    const okGenre  = !genre  || m.genre.includes(genre);
    const okLang   = !lang   || m.lang === lang;
    const okRating = !ratingV|| m.rating >= parseFloat(ratingV);
    const okFormat = !format || m.format === format;
    return okGenre && okLang && okRating && okFormat;
  });

  renderAllMovies(filtered);
}

function resetFilters() {
  ['filterGenre','filterLang','filterRating','filterFormat'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  renderAllMovies();
  showToast('🔄 Filters cleared');
}

/* ======================== 17 AUTH ======================== */
function handleLogin() {
  const email = document.getElementById('loginEmail')?.value.trim();
  const pass  = document.getElementById('loginPassword')?.value;

  if (!email || !pass) {
    showToast('⚠️ Please fill in all fields');
    return;
  }
  if (!isValidEmail(email)) {
    showToast('⚠️ Please enter a valid email');
    return;
  }

  showLoading();
  setTimeout(() => {
    hideLoading();
    showPage('home');
    showToast('👋 Welcome back! Signed in successfully.');
  }, 1000);
}

function handleSignup() {
  const first = document.getElementById('signupFirst')?.value.trim();
  const last  = document.getElementById('signupLast')?.value.trim();
  const email = document.getElementById('signupEmail')?.value.trim();
  const pass  = document.getElementById('signupPassword')?.value;
  const phone = document.getElementById('signupPhone')?.value.trim();

  if (!first || !last || !email || !pass || !phone) {
    showToast('⚠️ Please fill in all fields');
    return;
  }
  if (!isValidEmail(email)) {
    showToast('⚠️ Please enter a valid email');
    return;
  }
  if (pass.length < 8) {
    showToast('⚠️ Password must be at least 8 characters');
    return;
  }

  showLoading();
  setTimeout(() => {
    hideLoading();
    showPage('home');
    showToast('🎉 Account created! Welcome to CineVerse.');
  }, 1200);
}

function togglePassword(fieldId, btn) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  const isHidden = field.type === 'password';
  field.type = isHidden ? 'text' : 'password';
  btn.textContent = isHidden ? '🙈' : '👁';
  btn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ======================== 18 UTILITIES ======================== */

// Loading overlay
function showLoading() {
  const el = document.getElementById('loadingOverlay');
  if (el) el.classList.add('active');
}
function hideLoading() {
  const el = document.getElementById('loadingOverlay');
  if (el) el.classList.remove('active');
}

// Toast notification
let toastTimeout;
function showToast(message, duration = 3200) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('show');

  toastTimeout = setTimeout(() => toast.classList.remove('show'), duration);
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  const activePage = document.querySelector('.page.active');
  if (!activePage) return;

  switch (e.key) {
    case 'Escape':
      if (state.menuOpen) { closeMenu(); return; }
      if (activePage.id !== 'page-home') showPage('home');
      break;
    case 'ArrowLeft':
      if (activePage.id === 'page-home') changeHeroSlide(-1);
      break;
    case 'ArrowRight':
      if (activePage.id === 'page-home') changeHeroSlide(1);
      break;
  }
});

// Touch/swipe support for hero slider
(function initSwipe() {
  let startX = 0;
  document.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    const activePage = document.querySelector('.page.active');
    if (activePage?.id === 'page-home' && Math.abs(diff) > 50) {
      changeHeroSlide(diff > 0 ? 1 : -1);
      resumeHeroAutoplay();
    }
  }, { passive: true });
})();