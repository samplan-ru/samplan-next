// Самплан (новое приложение), сборка adfc12e
const V = 'samplan-next-adfc12e';
const BASE = '/samplan-next/';
const FILES = ["_expo/static/css/native-tabs.module-f02081792d24f9be172eed7116ee2f4c.css","_expo/static/js/web/__expo-metro-runtime-4257f0b69ada5979f41571ad566833dd.js","_expo/static/js/web/__shared-0868011dee8b8f30-ad97247fa4bf8fc3c3ff9646679c665b.js","_expo/static/js/web/__shared-17566435c747128a-879637014e28347b7138f89be9fb47a5.js","_expo/static/js/web/__shared-22651e0729fd5087-74e6c0bbcd84ad2de028102ef866d3f0.js","_expo/static/js/web/__shared-2756dd9cf4213fd6-c525e117ec43636e4dff9d837708be66.js","_expo/static/js/web/__shared-3cf278ad390bbbf1-a36e53352990f271392137a6520c7c30.js","_expo/static/js/web/__shared-536b48fa58565118-1d4586d7a8658e5edb14fb37de5fb47a.js","_expo/static/js/web/__shared-543bafa67cca80bd-8f62afec9083511ed251881da2e09eb7.js","_expo/static/js/web/__shared-71ad84cc47f349d4-b2940710c54dcd5535e4b0b2a704c4cd.js","_expo/static/js/web/__shared-78234ca0f8ca759d-a859750010f4408c7ea1e97561e4c05c.js","_expo/static/js/web/__shared-7ef472bfe12f21ad-6782369eac9e7b15ac1022daf7a7cfc5.js","_expo/static/js/web/__shared-8387caece85524b9-2e06a0bf6b67e39d9d88bf8b5024d2c5.js","_expo/static/js/web/__shared-acc2e9f831e8d446-f786625b6ecbbe20235c474bf81183da.js","_expo/static/js/web/__shared-b04805315b73fe29-8d60436f174dd66d93f9255cefe51737.js","_expo/static/js/web/__shared-cfea504bf3f800f0-c50d59b24cf36081abbca0a1a3dcdfcb.js","_expo/static/js/web/__shared-e60c69dc26bc1f40-61784f4ffd5e6fa09d10edf2bc7900b0.js","_expo/static/js/web/__shared-f0c18c8fb848d495-848dd7aee7a1e1b61da298151ff15924.js","_expo/static/js/web/__shared-f6c17f39ae0822c9-d9c6d44e7f531aaab76dc680bc502d0c.js","_expo/static/js/web/__shared-f7119990f96eb989-803fd2d669121c67da5f675198f0bbd6.js","_expo/static/js/web/_layout-7615bf77e52b405d9414b9796b1f97ec.js","_expo/static/js/web/_layout-8e9dff94e3529a6f7015ac9208077d25.js","_expo/static/js/web/ch-361d697d2a15ceb1919bfd225f3d3f19.js","_expo/static/js/web/entry-18f6adea38c3c31207ac88b002ce40dd.js","_expo/static/js/web/index-84ce2baa85e7cf1972c8bf91f0e4f523.js","_expo/static/js/web/index-b1ddac0484ebaefdb49d210fd51e2275.js","_expo/static/js/web/life-861bf1e3e43adb058c6c2c4f55fd7847.js","_expo/static/js/web/me-44cb1203dc0cbbf58b90293d0b7e9109.js","_expo/static/js/web/ppl-a41d2f4c3cad032c4961adcc053f4d0f.js","assets/__node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png","assets/__node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png","assets/__node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png","assets/__node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png","assets/__node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png","assets/__node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png","assets/__node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png","assets/__node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png","assets/__node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png","assets/assets/fonts/web/Nunito_400Regular.5ba67bd7b559ca73bbcddc68abcdbf6d.woff2","assets/assets/fonts/web/Nunito_600SemiBold.42a6ccb7a1f380e6e2dde0c7a823739a.woff2","assets/assets/fonts/web/Nunito_700Bold.ff144b757f39265983e0a2eea11205ab.woff2","assets/assets/fonts/web/Nunito_800ExtraBold.8f9e4fb238a395bb23704b216e2ed70d.woff2","assets/assets/fonts/web/Rubik_600SemiBold.6f157a6985d4dbd74d472c366ef7fe84.woff2","assets/assets/fonts/web/Rubik_700Bold.cd40c68c7bff45a2647488f8aaaae927.woff2","assets/assets/fonts/web/Rubik_800ExtraBold.b5108a3ad73592bc1b09587f9a33aaa8.woff2","favicon.ico","icon-180.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest","zxing_reader.wasm"];
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
