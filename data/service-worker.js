// Service Worker for HỌC VIỆN ERP CONSULTING
// Caching strategy:
//  - App shell (HTML, CSS, JS, data/*.js, icons): cache-first with background update
//  - Firebase Firestore / Auth: network-only (always live)
//  - Other Firebase scripts (CDN): cache-first

const CACHE_VERSION = 'erp-pwa-v3';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './data/questions.js',
  './data/retail.js',
  './data/manufacturing.js',
  './data/playbook.js',
  // Firebase SDK from gstatic — cached for offline parse, but auth/firestore endpoints stay live
  'https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      // Try to cache app shell, but don't fail install if some assets are unreachable
      return Promise.allSettled(
        APP_SHELL.map(url => cache.add(url).catch(err => console.warn('SW cache miss:', url, err.message)))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Never intercept POST/PUT/PATCH/DELETE — only GET
  if (event.request.method !== 'GET') return;

  // Firebase Auth / Firestore endpoints: always network (NO cache)
  if (
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('identitytoolkit') ||
    url.hostname.includes('securetoken') ||
    url.hostname.includes('firebaseinstallations') ||
    url.hostname.includes('firebaseapp.com') ||
    url.hostname.includes('googletagmanager.com') ||
    url.hostname.includes('google-analytics.com') ||
    url.pathname.includes('/google.firestore.')
  ) {
    return; // let browser handle normally — no cache
  }

  // App shell: cache-first with background update
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        // Only cache successful basic/opaque/cors responses
        if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
          const clone = networkResponse.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return networkResponse;
      }).catch(() => cached); // if network fails, fall back to cache

      return cached || fetchPromise;
    })
  );
});

// Listen for skip waiting message from app
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
