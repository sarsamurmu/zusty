importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.core.setCacheNameDetails({ prefix: 'Zusty' });
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([], {
  cleanUrls: true
});

workbox.googleAnalytics.initialize();
workbox.precaching.cleanupOutdatedCaches();
