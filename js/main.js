/* ===========================================================
   Clavix — landing page scripts
   Vanilla JS, no dependencies, no trackers.
   =========================================================== */
(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Active section highlight in nav --- */
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navAnchors.forEach(function (a) { a.classList.remove('active'); });
        var active = document.querySelector('.nav-links a[href="#' + e.target.id + '"]');
        if (active) active.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { navObs.observe(s); });
  }

  /* --- Reveal on scroll --- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { revObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- Auto-resolve the latest release so download links never go stale --- */
  var repo = document.body.getAttribute('data-repo');
  var tagEl = document.getElementById('dl-tag');

  function osFromAsset(name) {
    if (/\.(AppImage|deb|rpm)$/i.test(name)) return 'linux';
    if (/\.(dmg|app\.tar\.gz)$/i.test(name)) return 'macos';
    if (/(-setup\.exe|\.msi|\.exe)$/i.test(name)) return 'windows';
    return null;
  }

  if (repo) {
    fetch('https://api.github.com/repos/' + repo + '/releases/latest', {
      headers: { 'Accept': 'application/vnd.github+json' }
    })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (rel) {
        if (tagEl && rel.tag_name) {
          tagEl.textContent = rel.tag_name;
          tagEl.title = 'Released ' + (rel.published_at || '').slice(0, 10);
        }
        var assets = rel.assets || [];
        // For each download link, find the matching asset by extension and
        // point straight at it; otherwise leave the /releases/latest fallback.
        document.querySelectorAll('.dl-links a[data-ext]').forEach(function (a) {
          var ext = a.getAttribute('data-ext');
          var match = assets.find(function (as) {
            return as.name.slice(-ext.length).toLowerCase() === ext.toLowerCase();
          });
          if (match && match.browser_download_url) {
            a.href = match.browser_download_url;
            a.setAttribute('download', '');
          }
        });
      })
      .catch(function () {
        if (tagEl) {
          tagEl.textContent = 'see releases';
          tagEl.parentElement.querySelector && null;
        }
      });
  }
})();
