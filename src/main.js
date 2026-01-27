import './styles.css'

// Translations
const translations = {
  pl: {
    // Navigation
    'nav.about': 'O mnie',
    'nav.manifesto': 'Manifesto',
    'nav.skills': 'Umiejętności',
    'nav.automation': 'Automation Lab',
    'nav.experience': 'Doświadczenie',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.role': 'IT Team Leader | Specjalista od Chaosu & Adaptacji',
    'hero.tagline': 'Mniej copy-paste. Więcej kreatywności.',
    'hero.tagline_sub': 'Less copy-paste. More creativity.',
    'hero.cta': 'Poznaj mnie',
    'hero.linkedin': 'LinkedIn',
    'hero.linkedin_label': 'Połącz się ze mną',
    'hero.stat.years': 'lat doświadczenia',
    'hero.stat.countries': 'krajów współpracy',
    'hero.stat.focus': 'driven automation',

    // Manifesto
    'manifesto.title': 'Moje Podejście',
    'manifesto.subtitle': 'The Manifesto',
    'manifesto.card1.title': 'Stare Czasy Minęły',
    'manifesto.card1.text': '"Czasy się zmieniły. <span class="text-cyber-cyan font-semibold">\'Copy-paste\'</span> i powtarzalne, żmudne zadania to już nie jest praca dla ludzi."',
    'manifesto.card2.title': 'Nowe Podejście',
    'manifesto.card2.text': '"Wdrażam inne podejście: piszemy własne <span class="text-electric-purple font-semibold">Chrome Extensions</span> i zaprzęgamy do pracy <span class="text-cyber-cyan font-semibold">AI Agenty</span>. Efekt? Zespół ma większy fun z wymyślania \'automatu\', niż z obowiązku \'klepania\' zadań."',
    'manifesto.bullet1.title': 'Szybka adaptacja w chaosie',
    'manifesto.bullet1.text': 'Scrum to ramy, a nie religia.',
    'manifesto.bullet2.title': 'Inteligentna automatyzacja',
    'manifesto.bullet2.text': 'Eliminuję czynnik ludzki tam, gdzie jest zbędny (monotonia), żeby uwolnić go tam, gdzie jest niezbędny (kreatywność).',

    // Skills
    'skills.title': 'Tech Stack',
    'skills.subtitle': 'Narzędzia i kompetencje',
    'skills.ai.title': 'AI Agents',
    'skills.ai.desc': 'Projektowanie i wdrażanie inteligentnych agentów automatyzujących procesy zespołowe.',
    'skills.leadership.title': 'Team Leadership',
    'skills.leadership.desc': 'Budowanie i prowadzenie zespołów dev/PM',
    'skills.chrome.title': 'Chrome Extensions',
    'skills.chrome.desc': 'Tworzenie rozszerzeń automatyzujących workflow',

    // Automation Lab
    'automation.title': 'Automation Lab',
    'automation.subtitle': 'Gdzie pomysły stają się automatami',
    'automation.stat1': 'Redukcja monotonnych zadań',
    'automation.stat2': 'Wzrost satysfakcji zespołu',
    'automation.stat3': 'Potencjał kreatywności',

    // Timeline
    'timeline.title': 'Doświadczenie',
    'timeline.subtitle': 'Ścieżka kariery',
    'timeline.current': 'OBECNIE',
    'timeline.cofounder': 'CO-FOUNDER',
    'timeline.beliani.role': 'Project Manager / Team Leader',
    'timeline.beliani.desc': 'Prowadzenie zespołu projektowego, wdrażanie AI-driven automation, optymalizacja procesów.',
    'timeline.advisage.role': 'WebDev Team Leader',
    'timeline.advisage.desc': 'Kierowanie zespołem developerów, architektura rozwiązań webowych, mentoring juniorów.',
    'timeline.kopalnia.role': 'Współzałożyciel',
    'timeline.kopalnia.desc': 'Budowanie platformy edukacyjnej, rozwój produktu, zarządzanie zespołem startupowym.',

    // Timeline tabs
    'timeline.tab.leadership': 'Doświadczenie LIDERSKIE',
    'timeline.tab.it': 'Doświadczenie IT',
    'timeline.tab.graphic': 'Grafika komputerowa | DTP',

    // Leadership Path
    'timeline.lead.beliani.role': 'Project Manager HTML/CSS Team Leader',
    'timeline.lead.beliani.desc': 'Zarządzanie zespołem | Prowadzenie spotkań 1:1 | Tworzenie harmonogramów pracy | Rozwój zawodowy pracownika | Budowanie Chrome Extension | Tworzenie automatyzacji | Międzynarodowa współpraca z Copywriterami z 18 krajów | Rozpisywanie zadań | Tworzenie dokumentacji | Komunikacja | QA',
    'timeline.lead.advisage.role': 'WebDeveloper - Team Leader',
    'timeline.lead.advisage.desc': 'Projektowanie | DTP | Kodowanie stron WWW | Kontakt z klientem | QA | Manual testing | Dev tools',
    'timeline.lead.kopalnia.role': 'Współzałożyciel',
    'timeline.lead.kopalnia.desc': 'Marketing | Tworzenie marki | Projektowanie materiałów reklamowych | Pisanie wniosków do urzędów | Tworzenie strony WWW',

    // IT Path
    'timeline.it.ccc.role': 'Junior IT Specialist',
    'timeline.it.ccc.desc': 'Konfiguracja urządzeń sieciowych | Przeprowadzanie szkoleń | Praca pod presją czasu | Serwisowanie urządzeń | Rozwiązywanie problemów technicznych',
    'timeline.it.szpital.role': 'Informatyk',
    'timeline.it.szpital.desc': 'Konfiguracja urządzeń sieciowych | Przeprowadzanie szkoleń | Serwisowanie urządzeń | Rozwiązywanie problemów technicznych | Zgłaszanie błędów oprogramowania | Współpraca z personelem medycznym',
    'timeline.it.adawards.role': 'Informatyk',
    'timeline.it.adawards.desc': 'Projektowanie | DTP | Kodowanie stron WWW | Kontakt z klientem | QA | Manual testing',

    // Graphic Path
    'timeline.graphic.teb.role': 'Nauczyciel Grafiki komputerowej',
    'timeline.graphic.teb.desc': 'Nauczanie grafiki komputerowej | Szkolenia z SEO | Tworzenie dokumentacji',
    'timeline.graphic.agencja.role': 'Grafik komputerowy',
    'timeline.graphic.agencja.desc': 'Projektowanie | DTP | Kontakt z klientem | Produkcja reklam | Obsługa plotera drukującego/tnącego/laserowego | CNC',

    // About Section
    'about.title': 'O Mnie',
    'about.subtitle': 'Kontakt, Edukacja & Certyfikaty',
    'about.contact.title': 'Kontakt',
    'about.languages.title': 'Języki',
    'about.languages.polish': 'Polski',
    'about.languages.english': 'Angielski',
    'about.languages.native': 'Ojczysty',
    'about.languages.note': 'Codzienna praca w środowisku międzynarodowym',
    'about.certs.title': 'Certyfikaty',
    'about.education.title': 'Edukacja',
    'about.education.agile.field': 'Specjalista Agile, Agile - Zarządzanie w organizacjach',
    'about.education.agile.period': 'Luty 2023 - Marzec 2024',
    'about.education.pwsz.field': 'Inż. Grafika komputerowa',
    'about.education.pwsz.period': '2008 - 2011',
    'about.stats.title': 'W Skrócie',
    'about.stats.experience': 'Lat doświadczenia',
    'about.stats.teams': 'Zarządzanych zespołów',
    'about.stats.countries': 'Krajów we współpracy',

    // Footer
    'footer.title': 'Połączmy się',
    'footer.subtitle': 'Zainteresowany współpracą? Porozmawiajmy!',
    'footer.cta': 'Połącz się na LinkedIn',
    'footer.role': 'IT Team Leader | Specjalista od Chaosu & Adaptacji',
    'footer.copyright': '© 2025 Rafał Kobus. Zbudowane z podejściem'
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.manifesto': 'Manifesto',
    'nav.skills': 'Skills',
    'nav.automation': 'Automation Lab',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',

    // Hero
    'hero.role': 'IT Team Leader | Chaos & Adaptation Specialist',
    'hero.tagline': 'Less copy-paste. More creativity.',
    'hero.tagline_sub': 'Mniej copy-paste. Więcej kreatywności.',
    'hero.cta': 'Get to know me',
    'hero.linkedin': 'LinkedIn',
    'hero.linkedin_label': 'Connect with me',
    'hero.stat.years': 'years of experience',
    'hero.stat.countries': 'countries collaboration',
    'hero.stat.focus': 'driven automation',

    // Manifesto
    'manifesto.title': 'My Approach',
    'manifesto.subtitle': 'The Manifesto',
    'manifesto.card1.title': 'Old Times Are Gone',
    'manifesto.card1.text': '"Times have changed. <span class="text-cyber-cyan font-semibold">\'Copy-paste\'</span> and repetitive, tedious tasks are no longer work for humans."',
    'manifesto.card2.title': 'New Approach',
    'manifesto.card2.text': '"I implement a different approach: we write our own <span class="text-electric-purple font-semibold">Chrome Extensions</span> and put <span class="text-cyber-cyan font-semibold">AI Agents</span> to work. The result? The team has more fun inventing \'automations\' than being obligated to \'grind\' tasks."',
    'manifesto.bullet1.title': 'Fast adaptation in chaos',
    'manifesto.bullet1.text': 'Scrum is a framework, not a religion.',
    'manifesto.bullet2.title': 'Intelligent automation',
    'manifesto.bullet2.text': 'I eliminate the human factor where it\'s unnecessary (monotony) to free it where it\'s essential (creativity).',

    // Skills
    'skills.title': 'Tech Stack',
    'skills.subtitle': 'Tools and competencies',
    'skills.ai.title': 'AI Agents',
    'skills.ai.desc': 'Designing and implementing intelligent agents that automate team processes.',
    'skills.leadership.title': 'Team Leadership',
    'skills.leadership.desc': 'Building and leading dev/PM teams',
    'skills.chrome.title': 'Chrome Extensions',
    'skills.chrome.desc': 'Creating extensions that automate workflows',

    // Automation Lab
    'automation.title': 'Automation Lab',
    'automation.subtitle': 'Where ideas become automations',
    'automation.stat1': 'Reduction of monotonous tasks',
    'automation.stat2': 'Increase in team satisfaction',
    'automation.stat3': 'Creativity potential',

    // Timeline
    'timeline.title': 'Experience',
    'timeline.subtitle': 'Career path',
    'timeline.current': 'CURRENT',
    'timeline.cofounder': 'CO-FOUNDER',
    'timeline.beliani.role': 'Project Manager / Team Leader',
    'timeline.beliani.desc': 'Leading project team, implementing AI-driven automation, process optimization.',
    'timeline.advisage.role': 'WebDev Team Leader',
    'timeline.advisage.desc': 'Leading developer team, web solutions architecture, junior mentoring.',
    'timeline.kopalnia.role': 'Co-founder',
    'timeline.kopalnia.desc': 'Building educational platform, product development, startup team management.',

    // Timeline tabs
    'timeline.tab.leadership': 'LEADERSHIP Experience',
    'timeline.tab.it': 'IT Experience',
    'timeline.tab.graphic': 'Graphic Design | DTP',

    // Leadership Path
    'timeline.lead.beliani.role': 'Project Manager HTML/CSS Team Leader',
    'timeline.lead.beliani.desc': 'Team management | 1:1 meetings | Work schedule creation | Employee development | Chrome Extension building | Automation creation | International collaboration with Copywriters from 18 countries | Task assignment | Documentation | Communication | QA',
    'timeline.lead.advisage.role': 'WebDeveloper - Team Leader',
    'timeline.lead.advisage.desc': 'Design | DTP | Website coding | Client contact | QA | Manual testing | Dev tools',
    'timeline.lead.kopalnia.role': 'Co-founder',
    'timeline.lead.kopalnia.desc': 'Marketing | Brand creation | Marketing materials design | Government applications | Website development',

    // IT Path
    'timeline.it.ccc.role': 'Junior IT Specialist',
    'timeline.it.ccc.desc': 'Network device configuration | Training sessions | Working under pressure | Device maintenance | Technical problem solving',
    'timeline.it.szpital.role': 'IT Specialist',
    'timeline.it.szpital.desc': 'Network device configuration | Training sessions | Device maintenance | Technical problem solving | Software bug reporting | Medical staff collaboration',
    'timeline.it.adawards.role': 'IT Specialist',
    'timeline.it.adawards.desc': 'Design | DTP | Website coding | Client contact | QA | Manual testing',

    // Graphic Path
    'timeline.graphic.teb.role': 'Computer Graphics Teacher',
    'timeline.graphic.teb.desc': 'Teaching computer graphics | SEO training | Documentation creation',
    'timeline.graphic.agencja.role': 'Graphic Designer',
    'timeline.graphic.agencja.desc': 'Design | DTP | Client contact | Ad production | Printing/cutting/laser plotter operation | CNC',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Contact, Education & Certifications',
    'about.contact.title': 'Contact',
    'about.languages.title': 'Languages',
    'about.languages.polish': 'Polish',
    'about.languages.english': 'English',
    'about.languages.native': 'Native',
    'about.languages.note': 'Daily work in international environment',
    'about.certs.title': 'Certifications',
    'about.education.title': 'Education',
    'about.education.agile.field': 'Agile Specialist, Agile - Organization Management',
    'about.education.agile.period': 'Feb 2023 - Mar 2024',
    'about.education.pwsz.field': 'Eng. Computer Graphics',
    'about.education.pwsz.period': '2008 - 2011',
    'about.stats.title': 'At a Glance',
    'about.stats.experience': 'Years of experience',
    'about.stats.teams': 'Teams managed',
    'about.stats.countries': 'Countries in collaboration',

    // Footer
    'footer.title': 'Let\'s Connect',
    'footer.subtitle': 'Interested in collaboration? Let\'s talk!',
    'footer.cta': 'Connect on LinkedIn',
    'footer.role': 'IT Team Leader | Chaos & Adaptation Specialist',
    'footer.copyright': ' 2025 Rafał Kobus. Built with'
  }
};

// Current state
let currentLang = localStorage.getItem('lang') || 'pl';

// Apply translations
function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
}

// Toggle language
function toggleLanguage() {
  currentLang = currentLang === 'pl' ? 'en' : 'pl';
  localStorage.setItem('lang', currentLang);

  // Update language indicators
  document.getElementById('current-lang').textContent = currentLang.toUpperCase();
  document.getElementById('current-lang-mobile').textContent = currentLang.toUpperCase();

  applyTranslations(currentLang);
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  document.getElementById('current-lang').textContent = currentLang.toUpperCase();
  document.getElementById('current-lang-mobile').textContent = currentLang.toUpperCase();
  applyTranslations(currentLang);

  // Language toggle buttons
  document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);
  document.getElementById('lang-toggle-mobile')?.addEventListener('click', toggleLanguage);

  // Career path toggle buttons
  document.querySelectorAll('.career-path-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const path = btn.getAttribute('data-path');

      // Update active button
      document.querySelectorAll('.career-path-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show selected path content
      document.querySelectorAll('.career-path-content').forEach(content => {
        content.classList.add('hidden');
      });
      const targetContent = document.getElementById(`path-${path}`);
      if (targetContent) {
        targetContent.classList.remove('hidden');
      }
    });
  });

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header background on scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('shadow-lg');
      } else {
        header.classList.remove('shadow-lg');
      }
    });
  }

  // Intersection Observer for fade-in animations (show/hide on scroll)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        entry.target.classList.remove('animate-fade-out');
      } else {
        entry.target.classList.remove('animate-fade-in');
        entry.target.classList.add('animate-fade-out');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Make hero visible immediately
  const hero = document.getElementById('hero');
  if (hero) {
    hero.style.opacity = '1';
  }

  // Slide-in cards animation for About section
  const slideDirections = ['from-left', 'from-right', 'from-top', 'from-bottom'];
  const aboutSection = document.getElementById('about');

  if (aboutSection) {
    const cards = aboutSection.querySelectorAll('.glass');

    // Assign random direction to each card
    cards.forEach(card => {
      const randomDirection = slideDirections[Math.floor(Math.random() * slideDirections.length)];
      card.classList.add('slide-card', randomDirection);
    });

    // Create observer for slide-in cards
    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe each card
    cards.forEach(card => slideObserver.observe(card));
  }

  // 3D Flip Animation for Timeline cards
  const timelineSection = document.getElementById('timeline');
  if (timelineSection) {
    // Add perspective container class to section
    timelineSection.classList.add('timeline-flip-container');

    // Find all timeline entry blocks (the glass cards)
    const timelineCards = timelineSection.querySelectorAll('.career-path-content .glass');

    timelineCards.forEach((card, index) => {
      // Add base flip class
      card.classList.add('timeline-flip-card');

      // Alternate flip direction based on position (left/right of timeline)
      // Check if card is in the left column (odd entries) or right column (even entries)
      const parent = card.closest('.relative.flex');
      if (parent) {
        const isLeftSide = parent.querySelector('.md\\:text-right');
        if (isLeftSide && isLeftSide.contains(card)) {
          card.classList.add('flip-left');
        } else {
          card.classList.add('flip-right');
        }
      }
    });

    // Create observer for timeline flip cards
    const flipObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe each timeline card
    timelineCards.forEach(card => flipObserver.observe(card));
  }

  // Stat Counter Animation
  const statCounters = document.querySelectorAll('.stat-counter');
  let countersAnimated = new Set();

  const animateCounter = (element) => {
    const target = element.dataset.target;
    const suffix = element.dataset.suffix || '';

    if (target === 'infinity') {
      // Special infinity animation: count 1-8, then rotate to ∞ with wings
      let count = 0;
      const countInterval = setInterval(() => {
        count++;
        element.textContent = count;

        if (count >= 8) {
          clearInterval(countInterval);
          // Add rotation and transform to infinity
          element.style.transition = 'transform 0.6s ease-out';
          element.style.display = 'inline-block';
          element.style.transform = 'rotate(90deg)';

          setTimeout(() => {
            element.textContent = '∞';
            element.style.transform = 'rotate(0deg)';
          }, 300);
        }
      }, 150);
    } else {
      // Normal counter animation
      const targetNum = parseInt(target);
      const duration = 2000;
      const steps = 60;
      const increment = targetNum / steps;
      let current = 0;

      const counterInterval = setInterval(() => {
        current += increment;
        if (current >= targetNum) {
          current = targetNum;
          clearInterval(counterInterval);
        }
        element.textContent = Math.floor(current) + suffix;
      }, duration / steps);
    }
  };

  // Create observer for stat counters
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
        countersAnimated.add(entry.target);
        animateCounter(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  statCounters.forEach(counter => counterObserver.observe(counter));

  // Neural Network Animation
  class NeuralNetworkAnimation {
    constructor(container) {
      this.container = container;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.particleCount = 100;
      this.connectionDistance = 150;
      this.mouseAttractionDistance = 500;
      this.mouseAttractionStrength = 0.02;
      this.animationId = null;
      this.mouse = { x: null, y: null };

      this.canvas.style.cssText = 'position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;';
      this.container.style.position = 'relative';
      this.container.insertBefore(this.canvas, this.container.firstChild);

      this.resize();
      this.init();
      this.animate();

      window.addEventListener('resize', () => this.resize());

      // Track mouse position relative to container
      this.container.addEventListener('mousemove', (e) => {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      });

      this.container.addEventListener('mouseleave', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
    }

    resize() {
      const rect = this.container.getBoundingClientRect();
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }

    init() {
      this.particles = [];
      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? 'rgba(102, 252, 241, 0.6)' : 'rgba(168, 85, 247, 0.6)'
        });
      }
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Update and draw particles
      this.particles.forEach(p => {
        // Gravitational attraction to mouse
        if (this.mouse.x !== null && this.mouse.y !== null) {
          const dx = this.mouse.x - p.x;
          const dy = this.mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.mouseAttractionDistance && distance > 0) {
            // Calculate attraction force (stronger when closer)
            const force = (this.mouseAttractionDistance - distance) / this.mouseAttractionDistance;
            const attractionForce = force * this.mouseAttractionStrength;

            // Apply attraction towards mouse
            p.vx += (dx / distance) * attractionForce;
            p.vy += (dy / distance) * attractionForce;

            // Limit velocity to prevent particles from going too fast
            const maxSpeed = 2;
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (speed > maxSpeed) {
              p.vx = (p.vx / speed) * maxSpeed;
              p.vy = (p.vy / speed) * maxSpeed;
            }
          }
        }

        // Apply friction to slow down particles
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

        // Draw particle
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.connectionDistance) {
            const opacity = (1 - distance / this.connectionDistance) * 0.3;
            this.ctx.beginPath();
            this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
            this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
            this.ctx.strokeStyle = `rgba(102, 252, 241, ${opacity})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
          }
        }
      }

      this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      this.canvas.remove();
    }
  }

  // Initialize neural network animation on specific sections
  const sectionsWithAnimation = ['hero', 'timeline', 'skills'];
  sectionsWithAnimation.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      new NeuralNetworkAnimation(section);
    }
  });
});
