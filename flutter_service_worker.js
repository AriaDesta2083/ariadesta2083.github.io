'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "406dfd0585347700862a00193277e64c",
"assets/AssetManifest.bin.json": "df49219a83665c2b501469969c8e5c21",
"assets/AssetManifest.json": "ee0c5babf011f7df061192902ff7fc6b",
"assets/assets/docs/cv_ariadestap.pdf": "8368637e742f1be090619a601be58b0a",
"assets/assets/icons/ic_androidstudio.png": "d0673388d80b3190df9bfc18c88f7f13",
"assets/assets/icons/ic_dart.png": "814b5d281a3e347c2379aa74ad10d7f6",
"assets/assets/icons/ic_figma.png": "39225e6a07bdbc8c750dc0c3e5a3cfe0",
"assets/assets/icons/ic_firebase.png": "eaae1e1a0ae81716f90ece8841956398",
"assets/assets/icons/ic_flutter.png": "448abc42f0517d9902e4caffb8f0bc88",
"assets/assets/icons/ic_git.png": "6c43ba08d55f833b5a909d87cc15371e",
"assets/assets/icons/ic_github.png": "a00470e5ea752cac4c6521787ab6fb21",
"assets/assets/icons/ic_gitlab.png": "f8ce70e687d2fb491381dad51f569742",
"assets/assets/icons/ic_instagram.png": "016c9b5a6c79714fb450602f28024b52",
"assets/assets/icons/ic_laravel.png": "28a8f0eb60cdeadf86c7faa77ca95630",
"assets/assets/icons/ic_linkedin.png": "cba6bdf2a9d08f08b23291654b6267b5",
"assets/assets/icons/ic_moon.png": "e518fccb512fd69bff348305e3a9af97",
"assets/assets/icons/ic_mysql.png": "f3dfc826ecbdc4632f6432b1f2d9470c",
"assets/assets/icons/ic_php.png": "3bf26aa8bb4dbc8f15a2f074990d9bd0",
"assets/assets/icons/ic_postman.png": "4f0d5c139c05f0ca514aa87802b2dec6",
"assets/assets/icons/ic_python.png": "6960acc8cb809eb81291931da67159db",
"assets/assets/icons/ic_son.png": "fe7a48eca2cb7f70533b2cd6cebb0eaf",
"assets/assets/icons/ic_sqlite.png": "35702c2fa5462b5c6d03503020aa319b",
"assets/assets/icons/ic_sun.png": "fe7a48eca2cb7f70533b2cd6cebb0eaf",
"assets/assets/icons/ic_telegram.png": "439cc1c699425e9ca4c598f8de541209",
"assets/assets/icons/ic_vscode.png": "ffce2d7768eb09e27367e8c1276439e7",
"assets/assets/icons/ic_whatsapp.png": "a67ec207b9f57d3d5f5e0dd94916918f",
"assets/assets/images/img_a1_d.jpg": "10f6b0f3b13c607a3395888e5066a3a4",
"assets/assets/images/img_a1_l.jpg": "cdc58389742d72f911e565774797f77e",
"assets/assets/images/img_bgapp.png": "62dc796f464907335ebc8bded5a5c4af",
"assets/assets/images/img_p1_d.jpg": "8d0c7a504af899c3fd58545f899bb68a",
"assets/assets/images/img_p1_l.jpg": "abd6d1957e42451ea88ac7050a24b68b",
"assets/assets/images/img_p2_d.jpg": "5219cd04a6f2aeaa92ebef20d4c4a912",
"assets/assets/images/img_p2_l.jpg": "b948d8438d9bba62b298b7438a93c198",
"assets/assets/images/img_profile.png": "d7db668c940087068fcd69ce08462120",
"assets/assets/images/img_rs1.jpg": "3f130f6c97278d35b1d7951f584a0fdb",
"assets/assets/images/img_rs2.jpg": "d0af43ab8a4a3ca08225a2b8f400fefd",
"assets/assets/img_cuan/img_cuan1.png": "470ca4bb8b59a849acac14298fde931d",
"assets/assets/img_cuan/img_cuan10.png": "456f2306123b9ac53df644d09977382a",
"assets/assets/img_cuan/img_cuan11.png": "7d5bfac72a630a70b91e79c215bc9187",
"assets/assets/img_cuan/img_cuan12.png": "91b54d1fbcc4530ef4472b86355d14e0",
"assets/assets/img_cuan/img_cuan13.png": "71fba4153f797335e2ea40fc4357a175",
"assets/assets/img_cuan/img_cuan14.png": "3bdb6c5f4b7d6c7e2ed3a280303b5e56",
"assets/assets/img_cuan/img_cuan15.png": "21ec70b4a2f799e21868e717857032bc",
"assets/assets/img_cuan/img_cuan16.png": "7fd3acadb5f02c94b468ec88b2d290d4",
"assets/assets/img_cuan/img_cuan17.png": "7017b3ed4452b36383834149830b6711",
"assets/assets/img_cuan/img_cuan18.png": "d9ce4359926e23261a64657331183129",
"assets/assets/img_cuan/img_cuan19.png": "ec3fea21c2d63cecb238b91d95bf34e1",
"assets/assets/img_cuan/img_cuan2.png": "f1fa53ad8df1ebd1d60b484bea4a2eb5",
"assets/assets/img_cuan/img_cuan20.png": "66df796f8c3df7c0c5f01efc7adb6afe",
"assets/assets/img_cuan/img_cuan21.png": "7ed340065278076eacb125cd74126d80",
"assets/assets/img_cuan/img_cuan22.png": "fdde93dc94a5874c08cfcb813ba6c2c7",
"assets/assets/img_cuan/img_cuan23.png": "3ff61a5c32fb2d2bcf1172c5f4449720",
"assets/assets/img_cuan/img_cuan24.png": "6decaf9bc9c1134ee067a23454f31853",
"assets/assets/img_cuan/img_cuan25.png": "e6ff388238312d3207b6fce18af46bba",
"assets/assets/img_cuan/img_cuan26.png": "ae4d45cd06784a569c7b6d7ee061f6ea",
"assets/assets/img_cuan/img_cuan27.png": "6dcd07524cab159ae745319aa1d87eb2",
"assets/assets/img_cuan/img_cuan28.png": "2cd020a26a3fe9dd579ad71fa27baab0",
"assets/assets/img_cuan/img_cuan29.png": "80ee0d75d9c5a29048b17b9bb30ea083",
"assets/assets/img_cuan/img_cuan3.png": "ba96922b90867ea6444ba23584f8781c",
"assets/assets/img_cuan/img_cuan30.png": "7c8df2a15e5e4827af2dcc65a0b00f81",
"assets/assets/img_cuan/img_cuan4.png": "66cb7ef5a40f16c138c2bde147db4bad",
"assets/assets/img_cuan/img_cuan5.png": "dbf57314ccced81fdebeb6178a3a6f29",
"assets/assets/img_cuan/img_cuan6.png": "f83e231d96e7be84994550935899cc21",
"assets/assets/img_cuan/img_cuan7.png": "7b7b1584a132ffd86878506e4e2441b0",
"assets/assets/img_cuan/img_cuan8.png": "3dd24207b14cd4226270a5b50f1a2c9c",
"assets/assets/img_cuan/img_cuan9.png": "839cad8ad1a90340626417c0bad76218",
"assets/assets/logo/logo.png": "61595418312fa604fe6da56aa3388aac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c7102adf5336bdd78f4b70e2929e2ebf",
"assets/NOTICES": "139b445a4a0e422b028ac317a1ceb4f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "86b0a05c4d14726dfa7768769356a40f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "7445f9242075f4ecfee0ec2f1f6e30f0",
"icons/Icon-512.png": "005ca8f4d6c3e38fabb60c7c4cd3737b",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d73919cc0cf23856466a9199418d023",
"/": "6d73919cc0cf23856466a9199418d023",
"main.dart.js": "22421a3585351e1ae818fd580ccd3dea",
"manifest.json": "563623c2282f9e41460a1942ad5c6c82",
"version.json": "3c9ab285ddedcbd0373f6bc4ba2de44e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
