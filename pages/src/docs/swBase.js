importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.1/workbox-sw.js');

workbox.core.setCacheNameDetails({ prefix: 'Zusty' });
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
  cleanUrls: true
});

workbox.googleAnalytics.initialize();
workbox.precaching.cleanupOutdatedCaches();
