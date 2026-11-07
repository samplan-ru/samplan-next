// Самплан (новое приложение), сборка b60c860
const V = 'samplan-next-b60c860';
const BASE = '/samplan-next/';
const FILES = ["_expo/static/css/native-tabs.module-f02081792d24f9be172eed7116ee2f4c.css","_expo/static/js/web/__expo-metro-runtime-8c088df87a31e4e6accd81c554ec290d.js","_expo/static/js/web/__shared-0868011dee8b8f30-c1ee705ffd8f2d7800039167d89fe6d3.js","_expo/static/js/web/__shared-17566435c747128a-07865d03c23a747495a1b0caa15cde7c.js","_expo/static/js/web/__shared-22651e0729fd5087-e938e7bb9bcc544cda06d8b8787ac4dc.js","_expo/static/js/web/__shared-2756dd9cf4213fd6-173643347f77401246608e4c0ec145dd.js","_expo/static/js/web/__shared-3cf278ad390bbbf1-e09a1461c09f3e8bbcac6ba546ae5993.js","_expo/static/js/web/__shared-536b48fa58565118-d342a915abf540138b1548f0d94152a6.js","_expo/static/js/web/__shared-543bafa67cca80bd-4016d883a766ce1f866fa415cdd119e5.js","_expo/static/js/web/__shared-71ad84cc47f349d4-0fac835392230a2f89fa6c18dcc6857b.js","_expo/static/js/web/__shared-78234ca0f8ca759d-737049f3766601a6727d8e5278766388.js","_expo/static/js/web/__shared-7ef472bfe12f21ad-2765195e1a936663907265226b5e262a.js","_expo/static/js/web/__shared-8387caece85524b9-19bc64c602317d8353161f6908861129.js","_expo/static/js/web/__shared-acc2e9f831e8d446-0a72b3233e0c30ee424fba87ea3552eb.js","_expo/static/js/web/__shared-b04805315b73fe29-a1327b0bd8c6a465fb9fd0e06506f7aa.js","_expo/static/js/web/__shared-cfea504bf3f800f0-50bcbfd743665eb1302b64e6df90e2bc.js","_expo/static/js/web/__shared-e60c69dc26bc1f40-049d9c2edf65bd0a4d927fac5d422447.js","_expo/static/js/web/__shared-f0c18c8fb848d495-94de804a2208d156a862b34f6d8f88a4.js","_expo/static/js/web/__shared-f6c17f39ae0822c9-fc1c7dbaadcbf738f06d4ca8feab40a5.js","_expo/static/js/web/__shared-f7119990f96eb989-20a91664424fd3ef4c9474241bcb47c7.js","_expo/static/js/web/_layout-343f58114da967bd2273bf41e7fda1ed.js","_expo/static/js/web/_layout-93e92092d29406234f3610ee2bd45924.js","_expo/static/js/web/ch-4e15c70edfbf7bf30a09f525c098305f.js","_expo/static/js/web/entry-544e7e8046964daf2b13d12f82e8fa8a.js","_expo/static/js/web/index-5a38e8d11d7a9ef9e07342aaad4b424e.js","_expo/static/js/web/index-aec78eb1e02b849f955bdaae22e1a92d.js","_expo/static/js/web/life-1ba213c9f37debfb7327da3b2633dc80.js","_expo/static/js/web/me-d7ffe3ed11107befb94e1c0024759cea.js","_expo/static/js/web/ppl-63ba607236f69d47fff02419ca431e80.js","assets/__node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png","assets/__node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png","assets/__node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png","assets/__node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png","assets/__node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png","assets/__node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png","assets/__node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png","assets/__node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png","assets/__node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png","assets/assets/fonts/web/Nunito_400Regular.5ba67bd7b559ca73bbcddc68abcdbf6d.woff2","assets/assets/fonts/web/Nunito_600SemiBold.42a6ccb7a1f380e6e2dde0c7a823739a.woff2","assets/assets/fonts/web/Nunito_700Bold.ff144b757f39265983e0a2eea11205ab.woff2","assets/assets/fonts/web/Nunito_800ExtraBold.8f9e4fb238a395bb23704b216e2ed70d.woff2","assets/assets/fonts/web/Rubik_600SemiBold.6f157a6985d4dbd74d472c366ef7fe84.woff2","assets/assets/fonts/web/Rubik_700Bold.cd40c68c7bff45a2647488f8aaaae927.woff2","assets/assets/fonts/web/Rubik_800ExtraBold.b5108a3ad73592bc1b09587f9a33aaa8.woff2","favicon.ico","icon-180.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest","zxing_reader.wasm"];
// the entry script of this build: a page naming another one belongs to another build
const ENTRY = FILES.find((f) => f.indexOf('/entry-') > 0);
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
          // a fresh copy for offline use; a new body, so the response carries no redirect flags.
          // The page of a newer build (a deploy before the new worker has installed) is shown but
          // not kept: offline it would name scripts this cache does not have — a blank page
          return r.text().then((txt) => {
            const head = { headers: { 'Content-Type': 'text/html; charset=utf-8' } };
            if (!ENTRY || txt.indexOf(ENTRY) >= 0) c.put(BASE + 'index.html', new Response(txt, head));
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
            // only this build's files: another build's scripts must not mix into this cache
            if (res.ok && FILES.indexOf(u.pathname.slice(BASE.length)) >= 0) c.put(req, res.clone());
            return res;
          }),
      ),
    ),
  );
});
