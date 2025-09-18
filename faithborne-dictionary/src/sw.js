const CACHE_NAME = 'dictionary-cache-v1';
const urlsToCache = [
  './faithbornedictionary.html',
  '../pics/1.jpg',
  '../pics/2.jpg',
  '../pics/3.jpg',
  '../pics/4.jpg',
  '../pics/5.jpg',
  '../pics/6.jpg',
  '../pics/7.jpg',
  '../pics/8.jpg',
  '../pics/9.jpg',
  '../pics/10.jpg'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
