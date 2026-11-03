// Самплан (новое приложение), сборка ce8f048
const V = 'samplan-next-ce8f048';
const BASE = '/samplan-next/';
const FILES = ["_expo/static/css/native-tabs.module-f02081792d24f9be172eed7116ee2f4c.css","_expo/static/js/web/__expo-metro-runtime-8c088df87a31e4e6accd81c554ec290d.js","_expo/static/js/web/__shared-0868011dee8b8f30-ea4ae8862494ee35ed706dcd8048a37d.js","_expo/static/js/web/__shared-17566435c747128a-e4488b9495e348ea8be00f35b1fd69a1.js","_expo/static/js/web/__shared-22651e0729fd5087-4c94cb2249efb2851994a9304b164228.js","_expo/static/js/web/__shared-2756dd9cf4213fd6-17d6876298c21dfbb53eb4cd26cfcbe3.js","_expo/static/js/web/__shared-3cf278ad390bbbf1-c5fc8ccaad5b448b6b0fc71c36e862da.js","_expo/static/js/web/__shared-536b48fa58565118-938eadc89ccbb6012d94535540f28be7.js","_expo/static/js/web/__shared-543bafa67cca80bd-60abc3b345568758b39901fa8aa3b30b.js","_expo/static/js/web/__shared-71ad84cc47f349d4-6490a6837c5e4d87d4fb005270549269.js","_expo/static/js/web/__shared-78234ca0f8ca759d-8ab657143d7350a69333c9ec44b5f194.js","_expo/static/js/web/__shared-7ef472bfe12f21ad-93ba82954b505763886648d6a8756273.js","_expo/static/js/web/__shared-8387caece85524b9-1579a94455dd7d0bb3c7a266336c7597.js","_expo/static/js/web/__shared-acc2e9f831e8d446-ef4f33c597f2a4ea92297b04f73a4722.js","_expo/static/js/web/__shared-b04805315b73fe29-4e568fce5a1bb86c811b33672306fc32.js","_expo/static/js/web/__shared-cfea504bf3f800f0-5e5b4e6db84ef313a0ebec188c6275ac.js","_expo/static/js/web/__shared-e60c69dc26bc1f40-7753279be63a21943f0a023dbdcfef64.js","_expo/static/js/web/__shared-f0c18c8fb848d495-30aac2f4a4d3ce691bb4bee79b111fd0.js","_expo/static/js/web/__shared-f6c17f39ae0822c9-cfc8844a4755ef45097c06a6c54192b9.js","_expo/static/js/web/__shared-f7119990f96eb989-c9f8431d9f33585c5a67d7e605689561.js","_expo/static/js/web/_layout-9c431856745cf48743b2e96fab9492fe.js","_expo/static/js/web/_layout-f807feeb5a5110e80ee7affa22bf566f.js","_expo/static/js/web/ch-373071ca536ea9a27214023bc46ee081.js","_expo/static/js/web/entry-374ff20993f6b038e6133a60cb3c27f5.js","_expo/static/js/web/index-6c4f62a39980cf63ad6229162bfe6081.js","_expo/static/js/web/index-88c4df5590ba1576b3edae26f50d3a91.js","_expo/static/js/web/life-2dfb6e012e111c4534670a33b2ea24d0.js","_expo/static/js/web/me-6cd88f9e8c0b5980a92d68ea5a078b63.js","_expo/static/js/web/ppl-e47e402bd06cc2a126f86fe35615a44a.js","assets/__node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png","assets/__node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png","assets/__node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png","assets/__node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png","assets/__node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png","assets/__node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png","assets/__node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png","assets/__node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png","assets/__node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png","assets/__node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png","assets/assets/fonts/web/Nunito_400Regular.5ba67bd7b559ca73bbcddc68abcdbf6d.woff2","assets/assets/fonts/web/Nunito_600SemiBold.42a6ccb7a1f380e6e2dde0c7a823739a.woff2","assets/assets/fonts/web/Nunito_700Bold.ff144b757f39265983e0a2eea11205ab.woff2","assets/assets/fonts/web/Nunito_800ExtraBold.8f9e4fb238a395bb23704b216e2ed70d.woff2","assets/assets/fonts/web/Rubik_600SemiBold.6f157a6985d4dbd74d472c366ef7fe84.woff2","assets/assets/fonts/web/Rubik_700Bold.cd40c68c7bff45a2647488f8aaaae927.woff2","assets/assets/fonts/web/Rubik_800ExtraBold.b5108a3ad73592bc1b09587f9a33aaa8.woff2","favicon.ico","icon-180.png","icon-192.png","icon-512.png","index.html","manifest.webmanifest","zxing_reader.wasm"];
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
