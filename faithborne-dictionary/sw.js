const CACHE_NAME = 'dictionary-cache-v1';
const urlsToCache = [
  '/Faithbornedictionary/DICTIONARY/faithborne-dictionary/faithbornedictionary.html',
  '/Faithbornedictionary/DICTIONARY/pics/1.jpg',
  '/Faithbornedictionary/DICTIONARY/pics/2.jpg',
  '/Faithbornedictionary/DICTIONARY/pics/3.jpg',
  '/Faithbornedictionary/DICTIONARY/pics/4.jpg',
  '/Faithbornedictionary/DICTIONARY/pics/5.jpg',
  '/Faithbornedictionary/DICTIONARY/pics/6.jpg',
  '/Faithbornedictionary/DICTIONARY/pics/7.jpg',
  '/Faithbornedictionary/DICTIONARY/pics/8.jpg',
  '/Faithbornedictionary/DICTIONARY/pics/9.jpg',
  '/Faithbornedictionary/DICTIONARY/pics/10.jpg'
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
