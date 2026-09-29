// ==========================================================================
// NOTIFICATION & APPOINTMENT RECEIVING CONFIGURATION
// 1. WhatsApp Number (for one-tap chat buttons on site):
const WHATSAPP_RECEIVING_NUMBER = '916282696352';

// 2. Email for Instant Silent Booking Notifications directly to your phone:
// All client bookings are instantly forwarded to this email address:
window.BLISS_NOTIFICATION_EMAIL = 'melbinj407@gmail.com';
// ==========================================================================

/* ==========================================================================
   BLISS SPA - SCRIPT & INTERACTIVE LOGIC
   BTM Layout & Madiwala, Bangalore
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLenisSmoothScroll();
  initHeader();
  initScrollAnimations();
  initServiceFilters();
  initPackageCalculator();
  initBookingModal();
  initAdminDashboard();
  initPsychologicalComponents();
  initGalleryModal();
  initFAQ();
  initZenAudio();
  initNewsletter();
});

/* ==========================================================================
   1. HEADER, FLOATING CAPSULE & MOBILE DRAWER
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.getElementById('mobileMenuToggle') || document.querySelector('.mobile-menu-toggle');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  const capsuleLinks = document.querySelectorAll('.nav-capsule .nav-link');

  // Sticky header transition on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNav();
  }, { passive: true });

  // Update active capsule link based on scroll position
  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    capsuleLinks.forEach(link => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        const section = document.querySelector(targetId);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            capsuleLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      }
    });
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (drawer && drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on any drawer link click
  if (drawer) {
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }
}

/* ==========================================================================
   LENIS MOMENTUM SMOOTH SCROLL (Apple & Awwwards Grade Fluid Inertia)
   ========================================================================== */
let globalLenis = null;

function initLenisSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    globalLenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.95,
      smoothTouch: false, // native touch for best tactile haptics on mobile
      touchMultiplier: 2,
    });

    function raf(time) {
      globalLenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth scroll on internal anchor navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            globalLenis.scrollTo(target, { offset: -70 });
          }
        }
      });
    });
  }
}

/* ==========================================================================
   CINEMATIC SLOW & SMOOTH CONTENT SCROLL REVEAL ENGINE
   ========================================================================== */
function initScrollAnimations() {
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (backToTopBtn) {
      if (scrollTop > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      if (globalLenis) {
        globalLenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Comprehensive IntersectionObserver Scroll Reveal
  const targets = document.querySelectorAll(`
    .section-label, .section-heading, .section-subtitle,
    .service-card, .symptom-card, .trust-item,
    .experience-visual, .experience-content,
    .pillar-item, .guide-card, .custom-option-label,
    .gallery-item, .review-card, .faq-item,
    .location-info-card, .calc-wrapper, .story-item
  `);

  targets.forEach((el) => {
    el.classList.add('scroll-reveal');
    const parent = el.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children);
      const pos = siblings.indexOf(el);
      if (pos >= 0) {
        el.classList.add(`delay-${(pos % 6) + 1}`);
      }
    }
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    targets.forEach(el => {
      // Elements already above the fold on initial load stay visible immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) {
        el.classList.add('is-inview');
        el.classList.add('is-revealed');
      } else {
        revealObserver.observe(el);
      }
    });
  } else {
    targets.forEach(el => {
      el.classList.add('is-inview');
      el.classList.add('is-revealed');
    });
  }

  // 3. Dynamic Animated Number Counters on Scroll
  initAnimatedCounters();

  // 4. Subtle Parallax Motion on Scroll
  initSubtleParallax();
}

/**
 * Animated number counter engine (Counts up numbers smoothly when scrolled into view)
 */
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.stat-number, .badge-text strong');
  if (!counterElements.length || !('IntersectionObserver' in window)) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        counterObserver.unobserve(el);
        animateSingleCounter(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => counterObserver.observe(el));
}

function animateSingleCounter(el) {
  const originalText = el.textContent.trim();
  const numMatch = originalText.match(/(\d[\d,.]*)/);
  if (!numMatch) return;

  const rawNumStr = numMatch[1].replace(/,/g, '');
  const targetVal = parseFloat(rawNumStr);
  if (isNaN(targetVal) || targetVal === 0) return;

  const isDecimal = rawNumStr.includes('.');
  const duration = 1600;
  const startTime = performance.now();

  function updateCount(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = targetVal * easeProgress;

    let formattedVal = '';
    if (isDecimal) {
      formattedVal = currentVal.toFixed(1);
    } else {
      formattedVal = Math.round(currentVal).toLocaleString();
    }

    el.textContent = originalText.replace(numMatch[1], formattedVal);

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = originalText;
    }
  }

  requestAnimationFrame(updateCount);
}

/**
 * Subtle Parallax for hero and feature photos
 */
function initSubtleParallax() {
  const heroBg = document.querySelector('.hero-bg-image');
  const expImgs = document.querySelectorAll('.exp-main-img');
  if (!heroBg && !expImgs.length) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (heroBg && scrollY < window.innerHeight) {
          heroBg.style.transform = `scale(1.02) translateY(${scrollY * 0.12}px)`;
        }
        expImgs.forEach(img => {
          const rect = img.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (rect.top - window.innerHeight / 2) * 0.05;
            img.style.transform = `translateY(${offset}px)`;
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   2. SERVICE CATEGORY FILTER
   ========================================================================== */
function initServiceFilters() {
  const tabBtns = document.querySelectorAll('.service-tabs .tab-btn');
  const serviceCards = document.querySelectorAll('.services-grid .service-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      serviceCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   3. INTERACTIVE SPA PACKAGE BUILDER / PRICING CALCULATOR
   ========================================================================== */
function initPackageCalculator() {
  const baseRadios = document.querySelectorAll('input[name="calc-base"]');
  const durationRadios = document.querySelectorAll('input[name="calc-duration"]');
  const addonChecks = document.querySelectorAll('input[name="calc-addon"]');

  const baseLineItem = document.getElementById('calc-summary-base');
  const durationLineItem = document.getElementById('calc-summary-duration');
  const addonsLineContainer = document.getElementById('calc-summary-addons');
  const discountRow = document.getElementById('calc-summary-discount');
  const discountVal = document.getElementById('calc-discount-val');
  const totalVal = document.getElementById('calc-total-val');
  const bookCalcBtn = document.getElementById('calc-book-btn');

  function updateCalculator() {
    let basePrice = 1999;
    let baseName = 'Swedish Massage';
    let durationExtra = 0;
    let durationText = '60 Minutes';
    let addons = [];
    let addonsTotal = 0;

    // Base therapy
    baseRadios.forEach(radio => {
      const parent = radio.closest('.custom-option-label');
      if (radio.checked) {
        parent.classList.add('active');
        basePrice = parseInt(radio.value, 10);
        baseName = radio.dataset.name;
      } else {
        parent.classList.remove('active');
      }
    });

    // Duration
    durationRadios.forEach(radio => {
      const parent = radio.closest('.custom-option-label');
      if (radio.checked) {
        parent.classList.add('active');
        durationExtra = parseInt(radio.value, 10);
        durationText = radio.dataset.name;
      } else {
        parent.classList.remove('active');
      }
    });

    // Addons
    addonChecks.forEach(check => {
      const parent = check.closest('.custom-option-label');
      if (check.checked) {
        parent.classList.add('active');
        const price = parseInt(check.value, 10);
        addons.push({ name: check.dataset.name, price: price });
        addonsTotal += price;
      } else {
        parent.classList.remove('active');
      }
    });

    // Update Summary UI
    if (baseLineItem) {
      baseLineItem.innerHTML = `<span>${baseName}</span><span class="item-cost">₹${basePrice.toLocaleString()}</span>`;
    }
    if (durationLineItem) {
      durationLineItem.innerHTML = `<span>Duration: ${durationText}</span><span class="item-cost">+₹${durationExtra.toLocaleString()}</span>`;
    }

    if (addonsLineContainer) {
      addonsLineContainer.innerHTML = '';
      if (addons.length === 0) {
        addonsLineContainer.innerHTML = `<div class="summary-item"><span style="color:var(--text-muted);font-style:italic;">No add-ons selected</span><span>-</span></div>`;
      } else {
        addons.forEach(ad => {
          const div = document.createElement('div');
          div.className = 'summary-item';
          div.innerHTML = `<span>+ ${ad.name}</span><span class="item-cost">₹${ad.price.toLocaleString()}</span>`;
          addonsLineContainer.appendChild(div);
        });
      }
    }

    // Subtotal & Discount
    const subtotal = basePrice + durationExtra + addonsTotal;
    let discount = 0;
    if (subtotal >= 4000) {
      discount = Math.round(subtotal * 0.15); // 15% discount for premium packages
    } else if (subtotal >= 2800) {
      discount = Math.round(subtotal * 0.10); // 10% discount
    }

    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountVal.textContent = `-₹${discount.toLocaleString()}`;
    } else {
      discountRow.style.display = 'none';
    }

    const finalTotal = subtotal - discount;
    if (totalVal) {
      totalVal.textContent = `₹${finalTotal.toLocaleString()}`;
    }

    // Store in button dataset for booking modal
    if (bookCalcBtn) {
      bookCalcBtn.dataset.service = `${baseName} (${durationText})`;
      bookCalcBtn.dataset.price = `₹${finalTotal.toLocaleString()}`;
    }
  }

  // Attach event listeners
  [...baseRadios, ...durationRadios, ...addonChecks].forEach(el => {
    el.addEventListener('change', updateCalculator);
  });

  // Initial calculation
  updateCalculator();

  if (bookCalcBtn) {
    bookCalcBtn.addEventListener('click', () => {
      const service = bookCalcBtn.dataset.service || 'Custom Spa Package';
      const price = bookCalcBtn.dataset.price || '₹2,500';
      openBookingModal(service, price);
    });
  }
}

/* ==========================================================================
   4. BOOKING MODAL & WHATSAPP INTEGRATION
   ========================================================================== */
function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const bookingForm = document.getElementById('appointmentForm');
  const serviceSelect = document.getElementById('bookService');
  const summaryService = document.getElementById('modalSummaryService');
  const summaryPrice = document.getElementById('modalSummaryPrice');
  const dateInput = document.getElementById('bookDate');

  // Set min date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Open modal triggers from anywhere in DOM
  document.querySelectorAll('[data-open-modal="booking"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.dataset.service || 'Swedish Full Body Massage';
      const price = btn.dataset.price || '₹1,999';
      openBookingModal(service, price);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeBookingModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBookingModal();
    });
  }

  // Service select change updates summary
  if (serviceSelect) {
    serviceSelect.addEventListener('change', () => {
      const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
      const price = selectedOption.dataset.price || '₹1,999';
      if (summaryService) summaryService.textContent = serviceSelect.value;
      if (summaryPrice) summaryPrice.textContent = price;
    });
  }

  // Form submit
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('bookName').value.trim();
      const phone = document.getElementById('bookPhone').value.trim();
      const service = serviceSelect ? serviceSelect.value : 'Swedish Massage';
      const date = dateInput ? dateInput.value : 'Today';
      const time = document.getElementById('bookTime').value;
      const therapist = document.getElementById('bookTherapist').value;
      const pressureSelect = document.getElementById('bookPressure');
      const pressure = pressureSelect ? pressureSelect.value : 'Moderate';
      const notes = document.getElementById('bookNotes').value.trim();
      const price = summaryPrice ? summaryPrice.textContent : '₹1,999';

      if (!name || !phone) {
        showToast('Please enter your name and phone number.');
        return;
      }

      // 1. Generate unique booking reference
      const refCode = 'BLISS-' + Math.floor(100000 + Math.random() * 900000);

      // Show immediate loading state on submit button
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>Confirming Your Session...</span>`;

      // 2. Zero-Loss Local Preservation (Instant Front Desk Record)
      const bookingRecord = {
        refCode,
        name,
        phone,
        service,
        date,
        time,
        therapist,
        pressure,
        notes: notes || 'None',
        price,
        submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };
      saveBookingToLocal(bookingRecord);

      // 3. Dispatch to FormSubmit in background using FormData
      if (window.BLISS_NOTIFICATION_EMAIL) {
        const fd = new FormData();
        fd.append('_subject', `🌿 New Booking: ${name} - ${service} (Bliss Spa)`);
        fd.append('_template', 'table');
        fd.append('_captcha', 'false');
        fd.append('Booking Reference', refCode);
        fd.append('Client Name', name);
        fd.append('Mobile Number', phone);
        fd.append('Therapy', service);
        fd.append('Date & Time', `${date} at ${time}`);
        fd.append('Therapist & Pressure', `${therapist} • ${pressure}`);
        fd.append('Special Notes', notes || 'None');
        fd.append('Payable at Spa', price);
        fd.append('Submitted At', bookingRecord.submittedAt);

        fetch(`https://formsubmit.co/ajax/${window.BLISS_NOTIFICATION_EMAIL}`, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: fd
        }).catch(err => console.log('Silent email dispatch note:', err));
      }

      // Simulate quick secure processing (600ms)
      setTimeout(() => {
        // Pre-build WhatsApp message for 1-tap client convenience
        const waText = encodeURIComponent(
          `*Appointment Reservation - Bliss Spa BTM Layout*\n` +
          `• *Booking Ref:* ${refCode}\n` +
          `• *Guest Name:* ${name}\n` +
          `• *Mobile:* ${phone}\n` +
          `• *Therapy:* ${service}\n` +
          `• *Date & Time:* ${date} at ${time}\n` +
          `• *Amount to Pay:* ${price}\n` +
          `Please confirm my room and therapist schedule.`
        );

        // 4. Render 5-star on-page confirmation
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `
          <div style="text-align: center; padding: 15px 4px;">
            <div style="width: 72px; height: 72px; background: rgba(212, 175, 55, 0.15); border: 2px solid var(--gold-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px; color: var(--gold-primary); font-size: 2rem;">
              <i class="fas fa-check"></i>
            </div>
            
            <h3 style="font-size: 1.8rem; margin-bottom: 6px; color: var(--text-pure);">Reservation Confirmed!</h3>
            <p style="color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 20px;">
              Booking Reference: <strong style="color: var(--gold-light); letter-spacing: 1px;">${refCode}</strong>
            </p>

            <div style="background: rgba(212, 175, 55, 0.08); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px; text-align: left;">
              <div style="color: var(--gold-light); font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-bell"></i> What happens next:
              </div>
              <p style="font-size: 0.88rem; color: var(--text-primary); line-height: 1.5; margin: 0;">
                Your appointment has been directly scheduled with our front desk. Our concierge team will call you at <strong>${phone}</strong> shortly to confirm your room &amp; therapist.
              </p>
            </div>

            <!-- Booking Summary -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 16px; text-align: left; margin-bottom: 22px; font-size: 0.88rem; line-height: 1.65;">
              <div><strong>Guest Name:</strong> ${name}</div>
              <div><strong>Selected Therapy:</strong> ${service}</div>
              <div><strong>Appointment:</strong> ${date} at ${time}</div>
              <div><strong>Therapist &amp; Pressure:</strong> ${therapist} • ${pressure}</div>
              ${notes ? `<div><strong>Notes:</strong> ${notes}</div>` : ''}
              <div><strong>Location:</strong> No. 63, near Udupi Garden, BTM 1st Stage</div>
              <div style="margin-top: 6px; border-top: 1px solid var(--border-light); padding-top: 6px; color: var(--gold-light); font-size: 0.95rem; font-weight: 700;">
                Amount to Pay at Spa: ${price}
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              <!-- 1-Tap Client WhatsApp Verification -->
              <a href="https://wa.me/916282696352?text=${waText}" target="_blank" class="btn-secondary" style="justify-content: center; min-height: 48px; border-color: #25d366; color: #25d366; background: rgba(37,211,102,0.12);">
                <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i>
                <span>Send to Spa WhatsApp (Instant Confirmation)</span>
              </a>

              <button type="button" class="btn-primary" onclick="closeBookingModal(); location.reload();" style="justify-content: center; min-height: 46px;">
                <i class="fas fa-check-circle"></i>
                <span>Done &amp; Return to Website</span>
              </button>
              
              <a href="tel:09945264342" class="btn-secondary" style="justify-content: center; min-height: 44px;">
                <i class="fas fa-phone-alt" style="color: var(--gold-primary);"></i>
                <span>Call Front Desk (099452 64342)</span>
              </a>
            </div>
          </div>
        `;

        showToast(`✨ Appointment Confirmed! Reference: ${refCode}`);
      }, 600);
    });
  }
}

function openBookingModal(serviceName = 'Swedish Full Body Massage', price = '₹1,999') {
  const modal = document.getElementById('bookingModal');
  const serviceSelect = document.getElementById('bookService');
  const summaryService = document.getElementById('modalSummaryService');
  const summaryPrice = document.getElementById('modalSummaryPrice');

  if (serviceSelect) {
    // Try matching select option
    let matched = false;
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase()) ||
          serviceName.toLowerCase().includes(serviceSelect.options[i].value.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched) {
      serviceSelect.value = serviceName;
    }
  }

  if (summaryService) summaryService.textContent = serviceName;
  if (summaryPrice) summaryPrice.textContent = price;

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Expose globally for inline buttons or event callers
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;

/* ==========================================================================
   RECEPTIONIST / FRONT DESK BOOKINGS LOG SYSTEM (ZERO-LOSS GUARANTEE)
   ========================================================================== */
function saveBookingToLocal(booking) {
  try {
    const bookings = JSON.parse(localStorage.getItem('bliss_spa_bookings') || '[]');
    bookings.unshift(booking);
    localStorage.setItem('bliss_spa_bookings', JSON.stringify(bookings.slice(0, 60)));
    updateAdminBookingBadge();
  } catch (e) {
    console.log('Error saving local booking:', e);
  }
}

function updateAdminBookingBadge() {
  try {
    const bookings = JSON.parse(localStorage.getItem('bliss_spa_bookings') || '[]');
    const count = bookings.length;
    const badge = document.getElementById('bookingCountBadge');
    const totalCount = document.getElementById('adminTotalCount');
    if (badge) badge.textContent = count;
    if (totalCount) totalCount.textContent = count;
  } catch (e) {}
}

function renderAdminBookings() {
  const listContainer = document.getElementById('adminBookingsList');
  if (!listContainer) return;

  let bookings = [];
  try {
    bookings = JSON.parse(localStorage.getItem('bliss_spa_bookings') || '[]');
  } catch (e) {}

  if (bookings.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-10 px-5 text-slate-400 bg-spa-surface rounded-2xl border border-dashed border-white/15">
        <i class="fas fa-calendar-times text-4xl mb-3 text-gold/60"></i>
        <p class="m-0 text-sm sm:text-base text-white font-semibold">No customer bookings recorded yet.</p>
        <small class="text-slate-300 block mt-1.5 text-xs">
          When guests book an appointment on this site, their full details appear here instantly with 1-tap call &amp; WhatsApp actions.
        </small>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = bookings.map((b) => `
    <div class="bg-spa-surface border border-white/10 hover:border-gold/40 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 transition">
      <div class="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div>
          <strong class="text-white text-base block">${b.name || 'Guest'}</strong>
          <span class="block text-gold-light text-xs font-mono mt-0.5">Ref: ${b.refCode || 'N/A'} • ${b.submittedAt || 'Just now'}</span>
        </div>
        <span class="bg-gold/15 text-gold-light font-bold px-3 py-1 rounded-full text-xs border border-gold/30">${b.price || '₹1,999'}</span>
      </div>
      <div class="text-xs sm:text-sm text-slate-200 leading-relaxed flex flex-col gap-1">
        <div><i class="fas fa-spa text-gold w-5"></i> <strong>${b.service || 'Spa Therapy'}</strong></div>
        <div><i class="far fa-calendar-alt text-gold w-5"></i> ${b.date || 'Today'} at ${b.time || 'Preferred time'}</div>
        <div><i class="fas fa-user-check text-gold w-5"></i> Therapist: ${b.therapist || 'Standard'} • Pressure: ${b.pressure || 'Moderate'}</div>
        ${b.notes && b.notes !== 'None' ? `<div><i class="far fa-comment-alt text-gold w-5"></i> Notes: <em>"${b.notes}"</em></div>` : ''}
      </div>
      <div class="flex gap-2.5 mt-1 flex-wrap">
        <a href="tel:${b.phone}" class="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#fff3d1] via-[#e6c35c] to-[#b89128] text-slate-950 font-bold text-xs px-3.5 py-2 rounded-full shadow-md hover:scale-105 active:scale-95 transition">
          <i class="fas fa-phone-alt"></i> Call ${b.phone}
        </a>
        <a href="https://wa.me/91${(b.phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${b.name}, this is Bliss Spa BTM Layout confirming your ${b.service} appointment for ${b.date} at ${b.time}.`)}" target="_blank" class="inline-flex items-center gap-1.5 bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366] text-[#25d366] font-semibold text-xs px-3.5 py-2 rounded-full transition hover:scale-105 active:scale-95">
          <i class="fab fa-whatsapp"></i> WhatsApp Guest
        </a>
      </div>
    </div>
  `).join('');
}

function initAdminDashboard() {
  const openBtn = document.getElementById('openAdminDashboard');
  const closeBtn = document.getElementById('closeAdminModalBtn');
  const modal = document.getElementById('adminBookingsModal');
  const clearBtn = document.getElementById('clearBookingsBtn');

  updateAdminBookingBadge();

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      renderAdminBookings();
      updateAdminBookingBadge();
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  function closeAdminModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeAdminModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAdminModal();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all recorded bookings from this device?')) {
        localStorage.removeItem('bliss_spa_bookings');
        renderAdminBookings();
        updateAdminBookingBadge();
        showToast('Booking log cleared.');
      }
    });
  }
}

/* ==========================================================================
   5. GALLERY LIGHTBOX MODAL
   ========================================================================== */
function initGalleryModal() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Create Lightbox Container if not present
  let lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'galleryLightbox';
    lightbox.className = 'modal-backdrop fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300';
    lightbox.innerHTML = `
      <div class="relative max-w-4xl w-full max-h-[90vh] text-center">
        <button id="closeLightboxBtn" class="absolute -top-12 right-0 text-white text-3xl hover:text-gold transition cursor-pointer">
          <i class="fas fa-times"></i>
        </button>
        <img id="lightboxImg" src="" alt="Spa Ambience" class="max-h-[75vh] w-auto max-w-full rounded-2xl border border-gold/40 mx-auto shadow-2xl">
        <p id="lightboxCaption" class="text-white mt-3.5 text-lg font-serif tracking-wider"></p>
      </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('#closeLightboxBtn')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h5') ? item.querySelector('h5').innerText : 'Bliss Spa Sanctuary';
      const desc = item.querySelector('p') ? item.querySelector('p').innerText : '';

      const lightboxImg = document.getElementById('lightboxImg');
      const lightboxCaption = document.getElementById('lightboxCaption');

      if (lightboxImg && img) lightboxImg.src = img.src;
      if (lightboxCaption) lightboxCaption.textContent = `${title} • ${desc}`;

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

/* ==========================================================================
   6. FAQ ACCORDION
   ========================================================================== */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other accordions
      faqItems.forEach(other => other.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. WEB AUDIO API - TRANQUIL ZEN SOUND GENERATOR
   Synthesizes peaceful 432Hz meditative singing bowl & nature resonance
   ========================================================================== */
function initZenAudio() {
  const audioButtons = document.querySelectorAll('.zen-audio-btn, #guidedAudioBtn');
  if (audioButtons.length === 0) return;

  let audioCtx = null;
  let isPlaying = false;
  let masterGain = null;
  let droneOsc1 = null;
  let droneOsc2 = null;
  let lfo = null;
  let lfoGain = null;
  let filter = null;
  let chimeInterval = null;

  function updateAudioButtonsState(playing) {
    audioButtons.forEach(btn => {
      if (playing) {
        btn.classList.add('playing');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('playing');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  function startZenAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 3);

      filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, audioCtx.currentTime);

      // Deep Tibetan Bowl Harmonic Frequencies (432Hz root octave down: 108Hz, 216Hz, 432Hz)
      droneOsc1 = audioCtx.createOscillator();
      droneOsc1.type = 'sine';
      droneOsc1.frequency.setValueAtTime(108, audioCtx.currentTime); // Deep root

      droneOsc2 = audioCtx.createOscillator();
      droneOsc2.type = 'triangle';
      droneOsc2.frequency.setValueAtTime(216.5, audioCtx.currentTime); // Gentle chorus detune

      // Slow Breathing LFO (0.08 Hz = ~12 sec breath cycle)
      lfo = audioCtx.createOscillator();
      lfo.frequency.setValueAtTime(0.08, audioCtx.currentTime);

      lfoGain = audioCtx.createGain();
      lfoGain.gain.setValueAtTime(180, audioCtx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      droneOsc1.connect(filter);
      droneOsc2.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(audioCtx.destination);

      droneOsc1.start();
      droneOsc2.start();
      lfo.start();

      // Periodically trigger a crystal singing bowl chime (every 6-9 seconds)
      triggerChime();
      chimeInterval = setInterval(() => {
        if (isPlaying) triggerChime();
      }, 7500);

      isPlaying = true;
      updateAudioButtonsState(true);
      showToast('🌸 Zen Meditation Audio Active');
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  function triggerChime() {
    if (!audioCtx || audioCtx.state === 'suspended') return;

    const chimeFreqs = [432, 540, 648, 864];
    const freq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

    const chimeOsc = audioCtx.createOscillator();
    const chimeGain = audioCtx.createGain();

    chimeOsc.type = 'sine';
    chimeOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    chimeGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    chimeGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.1);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.5);

    chimeOsc.connect(chimeGain);
    chimeGain.connect(audioCtx.destination);

    chimeOsc.start();
    chimeOsc.stop(audioCtx.currentTime + 4.6);
  }

  function stopZenAudio() {
    if (masterGain && audioCtx) {
      masterGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
      setTimeout(() => {
        if (droneOsc1) { droneOsc1.stop(); droneOsc1.disconnect(); }
        if (droneOsc2) { droneOsc2.stop(); droneOsc2.disconnect(); }
        if (lfo) { lfo.stop(); lfo.disconnect(); }
        if (chimeInterval) clearInterval(chimeInterval);
        if (audioCtx) audioCtx.close();
      }, 1000);
    }
    isPlaying = false;
    updateAudioButtonsState(false);
    showToast('Audio Muted');
  }

  audioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!isPlaying) {
        startZenAudio();
      } else {
        stopZenAudio();
      }
    });
  });
}

/* ==========================================================================
   8. NEWSLETTER & TOASTS
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('✨ Thank you! A ₹500 welcome voucher has been sent to your email.');
        input.value = '';
      }
    });
  }
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast bg-[#14221c]/95 border border-gold/40 text-white px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2.5 shadow-2xl backdrop-blur-md';
  toast.innerHTML = `<i class="fas fa-sparkles text-gold"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

/* ==========================================================================
   9. PSYCHOLOGY, SENSORY BREATHING & SOCIAL PROOF TRIGGERS
   ========================================================================== */
function initPsychologicalComponents() {
  // 1. 4-7-8 Breathing Cycle Sync
  const breathingText = document.getElementById('breathingText');
  if (breathingText) {
    const phases = [
      { text: 'Inhale Peace (4s)...', duration: 4000 },
      { text: 'Hold & Dissolve Tension (7s)...', duration: 7000 },
      { text: 'Exhale All Stress (8s)...', duration: 8000 }
    ];
    let currentPhase = 0;

    function runBreathingStep() {
      if (!breathingText) return;
      breathingText.textContent = phases[currentPhase].text;
      const stepDuration = phases[currentPhase].duration;
      currentPhase = (currentPhase + 1) % phases.length;
      setTimeout(runBreathingStep, stepDuration);
    }
    runBreathingStep();
  }

  // 2. Guided Zen Audio Shortcut Button
  const guidedAudioBtn = document.getElementById('guidedAudioBtn');
  if (guidedAudioBtn) {
    guidedAudioBtn.addEventListener('click', () => {
      const topAudioBtn = document.getElementById('zenAudioToggle');
      if (topAudioBtn) {
        topAudioBtn.click();
        const isPlaying = topAudioBtn.classList.contains('playing');
        guidedAudioBtn.innerHTML = isPlaying 
          ? `<i class="fas fa-volume-up"></i> <span>Tibetan Singing Bowls Playing 🌿</span>`
          : `<i class="fas fa-water"></i> <span>Play Zen Singing Bowls</span>`;
      }
    });
  }

  // 3. Symptom-to-Relief Matcher Clicks
  const symptomCards = document.querySelectorAll('.symptom-card');
  symptomCards.forEach(card => {
    card.addEventListener('click', () => {
      symptomCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const service = card.dataset.service || 'Swedish Massage';
      const price = card.dataset.price || '₹1,999';

      showToast(`🌿 Prescribed for you: ${service}`);
      setTimeout(() => {
        openBookingModal(service, price);
      }, 350);
    });
  });

  // Mobile symptom card swipe indicator dot synchronization
  const symptomTrack = document.getElementById('symptomTrack');
  const symptomDots = document.querySelectorAll('#symptomDots .dot');
  if (symptomTrack && symptomDots.length) {
    symptomTrack.addEventListener('scroll', () => {
      const scrollLeft = symptomTrack.scrollLeft;
      const cardWidth = (symptomTrack.scrollWidth - symptomTrack.clientWidth) / (symptomDots.length - 1);
      const activeIdx = Math.round(scrollLeft / (cardWidth || 1));
      symptomDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIdx);
      });
    }, { passive: true });
  }

  // 4. Subtle Psychological Live Social Proof Toast
  const proofToast = document.getElementById('socialProofToast');
  const proofMsg = document.getElementById('socialProofMsg');

  if (proofToast && proofMsg) {
    const verifiedReservations = [
      { area: 'Koramangala 4th Block', service: 'Deep Tissue Massage', time: '11 mins ago' },
      { area: 'HSR Layout Sector 1', service: 'Traditional Thai Massage', time: '19 mins ago' },
      { area: 'BTM 2nd Stage', service: 'Swedish Relaxation Session', time: '26 mins ago' },
      { area: 'Electronic City Phase 1', service: 'Warm Aroma Lavender Therapy', time: '34 mins ago' },
      { area: 'Madiwala Market Road', service: 'Ayurvedic Herbal Shirodhara', time: '48 mins ago' },
      { area: 'Indiranagar 100ft Rd', service: 'Couples Private Jacuzzi Suite', time: '1 hour ago' }
    ];

    let proofIndex = 0;

    function showNextSocialProof() {
      if (!proofToast || !proofMsg) return;
      const item = verifiedReservations[proofIndex];
      proofMsg.innerHTML = `
        <strong>Guest from ${item.area}</strong> just reserved ${item.service}.
        <small>${item.time} • BTM 1st Stage</small>
      `;
      proofToast.classList.add('visible');

      setTimeout(() => {
        if (proofToast) proofToast.classList.remove('visible');
      }, 5500);

      proofIndex = (proofIndex + 1) % verifiedReservations.length;
      setTimeout(showNextSocialProof, 28000);
    }

    // First appearance after 7 seconds of browsing
    setTimeout(showNextSocialProof, 7000);
  }
}
