// src/js/templates.js
window.PINNACLE_TEMPLATES = window.PINNACLE_TEMPLATES || {};

window.PINNACLE_TEMPLATES.home = function () {
    return `
<div class="pinnacle-home">

  <!-- HERO SECTION -->
  <div class="prt-hero">
    <div class="prt-hero-background"></div>
    <div class="prt-hero-content">
      <div class="prt-hero-badge">✨ Now Booking 2026 Season</div>
      <h1>Professional Race Timing<br>for the Upper Valley</h1>
      <p class="prt-hero-subtitle">
        Trusted by race directors across Vermont and New Hampshire. RFID chip timing,
        live results, and exceptional service for running events, triathlons, and cycling races.
      </p>

      <div class="prt-hero-cta">
        <a href="/contact" class="prt-btn prt-btn-primary">Get a Quote</a>
        <a href="/events" class="prt-btn prt-btn-secondary">View 2026 Events</a>
      </div>

      <div class="prt-trust">
        <div class="prt-trust-item">
          <span class="prt-trust-icon">✓</span>
          <span>USATF Certified</span>
        </div>
        <div class="prt-trust-item">
          <span class="prt-trust-icon">✓</span>
          <span>99.9% Accuracy</span>
        </div>
        <div class="prt-trust-item">
          <span class="prt-trust-icon">✓</span>
          <span>Same-Day Results</span>
        </div>
      </div>
    </div>
  </div>

  <!-- STATS SECTION -->
  <div class="prt-stats">
    <div class="prt-stat-card">
      <div class="prt-stat-value">500+</div>
      <div class="prt-stat-label">Races Timed</div>
    </div>
    <div class="prt-stat-card">
      <div class="prt-stat-value">50K+</div>
      <div class="prt-stat-label">Participants</div>
    </div>
    <div class="prt-stat-card">
      <div class="prt-stat-value">15+</div>
      <div class="prt-stat-label">Years Experience</div>
    </div>
    <div class="prt-stat-card">
      <div class="prt-stat-value">Live</div>
      <div class="prt-stat-label">Results Feed</div>
    </div>
  </div>

  <!-- WHY CHOOSE US - FOR RACE DIRECTORS -->
  <div class="prt-section">
    <div class="prt-section-header">
      <h2 class="prt-section-title">Why Race Directors Choose Pinnacle</h2>
      <p class="prt-section-subtitle">
        Professional timing services designed to make your event seamless and successful
      </p>
    </div>

    <div class="prt-services">
      <div class="prt-service-card">
        <div class="prt-service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="prt-service-title">Real-Time Results</h3>
        <p class="prt-service-desc">
          Live leaderboards and instant result notifications keep participants and spectators engaged throughout your event.
        </p>
      </div>

      <div class="prt-service-card">
        <div class="prt-service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="prt-service-title">USATF Certified</h3>
        <p class="prt-service-desc">
          Our certified course measurements and professional timing meet all USATF standards for official events.
        </p>
      </div>

      <div class="prt-service-card">
        <div class="prt-service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="prt-service-title">Turnkey Service</h3>
        <p class="prt-service-desc">
          From setup to teardown, we handle all timing equipment, registration integration, and result processing.
        </p>
      </div>
    </div>
  </div>

  <!-- UPCOMING EVENTS PREVIEW -->
  <div class="prt-section">
    <div class="prt-section-header">
      <h2 class="prt-section-title">Upcoming 2026 Events</h2>
      <p class="prt-section-subtitle">
        Join us at these premier races across the Upper Valley
      </p>
    </div>

    <div class="prt-events-grid">
      <div class="prt-event-card">
        <div class="prt-event-content">
          <span class="prt-event-date">February 7, 2026</span>
          <h3 class="prt-event-title">Ledyard Red Zone 5K</h3>
          <div class="prt-event-meta">
            <span>📍 Ledyard, CT</span>
            <span>•</span>
            <span>5K Run</span>
          </div>
        </div>
      </div>

      <div class="prt-event-card">
        <div class="prt-event-content">
          <span class="prt-event-date">February 8, 2026</span>
          <h3 class="prt-event-title">Crown Point Pigskin 5K</h3>
          <div class="prt-event-meta">
            <span>📍 Crown Point, NY</span>
            <span>•</span>
            <span>5K Run</span>
          </div>
        </div>
      </div>

      <div class="prt-event-card">
        <div class="prt-event-content">
          <span class="prt-event-date">April 4, 2026</span>
          <h3 class="prt-event-title">Dirty Paws Fun Run</h3>
          <div class="prt-event-meta">
            <span>📍 Vermont</span>
            <span>•</span>
            <span>Fun Run & 5K</span>
          </div>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin-top: 2.5rem;">
      <a href="/events" class="prt-btn prt-btn-primary">View Full Schedule</a>
    </div>
  </div>

  <!-- RACE DIRECTOR CTA -->
  <div class="prt-cta-section">
    <h2>Ready to Elevate Your Event?</h2>
    <p>Let's discuss how our professional timing services can make your race a success</p>
    <a href="/contact" class="prt-btn prt-btn-primary">Request a Quote</a>
  </div>

</div>
`;
};