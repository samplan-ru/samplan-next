// Самплан (новое приложение), сборка 3be7593
const V = 'samplan-next-3be7593';
const BASE = '/samplan-next/';
const FILES = ["_expo/static/js/web/__common-d9c938eb1904948ecba308ab7713864d.js","_expo/static/js/web/__expo-metro-runtime-8c088df87a31e4e6accd81c554ec290d.js","_expo/static/js/web/_layout-23fb78292708e15a8927f91d9f6a68e9.js","_expo/static/js/web/_layout-cd81f28f3428d7c52a08ed2c4eb62fde.js","_expo/static/js/web/ch-c9dcde301bf21138e6a9b204b1ef540b.js","_expo/static/js/web/entry-4c2ed4a4c50eddf35442d9066596e2b2.js","_expo/static/js/web/index-ebdef6d0f3b3d16743af2e74ee69590d.js","_expo/static/js/web/life-5b23202af0ac1bf64a40debd0fbce7f8.js","_expo/static/js/web/me-462858f91d7f471c0b0c66bcc221036e.js","_expo/static/js/web/ppl-1dba1728d34899d76a1a09104478a50e.js","assets/__node_modules/@expo-google-fonts/nunito/600SemiBold/Nunito_600SemiBold.b1364260246b29fd9393a1a071f3af61.ttf","assets/__node_modules/@expo-google-fonts/nunito/700Bold/Nunito_700Bold.c133c0b8cd169e7798d0cd239477cf32.ttf","assets/__node_modules/@expo-google-fonts/nunito/800ExtraBold/Nunito_800ExtraBold.2b1bb82750274fc2d1043bf3891cb531.ttf","assets/__node_modules/@expo-google-fonts/rubik/700Bold/Rubik_700Bold.6f755d180caef859e79b956cbc98a115.ttf","assets/__node_modules/@expo-google-fonts/rubik/800ExtraBold/Rubik_800ExtraBold.857f003f083bdc2bfad69dbc61a8a883.ttf","assets/__node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png","assets/__node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png","assets/__node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png","assets/__node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png","assets/__node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png","assets/__node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png","assets/__node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png","assets/__node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png","assets/__node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png","favicon.ico","icon-180.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest"];
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(V).then((c) => c.addAll(FILES.map((f) => new Request(BASE + f, { cache: 'reload' })))).then(() => self.skipWaiting()),
  );
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('samplan-next-') && k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin !== location.origin || !u.pathname.startsWith(BASE)) return;
  if (u.pathname.endsWith('/sw.js') || u.pathname.endsWith('/version.json')) return;
  // every route of the app is the same page (single-page build). The page itself comes from the
  // network when there is one (3 s), the cached copy only offline; scripts and fonts are hashed
  // files of the build — cache first
  if (req.mode === 'navigate') {
    e.respondWith(
      caches.open(V).then((c) => {
        const cached = () => c.match(BASE + 'index.html').then((r) => r || fetch(req));
        const net = fetch(BASE + 'index.html', { cache: 'no-cache' }).then((r) => {
          if (!r.ok) throw new Error(String(r.status));
          // a fresh copy for offline use; a new body, so the response carries no redirect flags
          return r.text().then((txt) => {
            const head = { headers: { 'Content-Type': 'text/html; charset=utf-8' } };
            c.put(BASE + 'index.html', new Response(txt, head));
            return new Response(txt, head);
          });
        });
        const timeout = new Promise((_, no) => setTimeout(() => no(new Error('timeout')), 3000));
        return Promise.race([net, timeout]).catch(cached);
      }),
    );
    return;
  }
  e.respondWith(
    caches.open(V).then((c) =>
      c.match(req, { ignoreSearch: true }).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok) c.put(req, res.clone());
            return res;
          }),
      ),
    ),
  );
});
