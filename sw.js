self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Basic pass-through; share target is handled by the page via query params
self.addEventListener('fetch', (e) => {
  // Let the browser handle normally
});
