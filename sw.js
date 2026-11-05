// Live Catch Dex: minimal service worker so the site can be installed as an app. No caching: the data is always live.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
