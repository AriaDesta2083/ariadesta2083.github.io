'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e9785e2cfe64c365095873044a5db95a",
"assets/AssetManifest.bin.json": "0be3ae307c0e7c21b01dcdf3fe7fdda5",
"assets/AssetManifest.json": "cf62079c25e5525c65351ce00a42f1e7",
"assets/assets/docs/cv_ariadestaprabu.pdf": "f8cd3869f34c6e9909cebd038aa3e22f",
"assets/assets/icons/ic_androidstudio.png": "d0673388d80b3190df9bfc18c88f7f13",
"assets/assets/icons/ic_dart.png": "814b5d281a3e347c2379aa74ad10d7f6",
"assets/assets/icons/ic_figma.png": "39225e6a07bdbc8c750dc0c3e5a3cfe0",
"assets/assets/icons/ic_firebase.png": "eaae1e1a0ae81716f90ece8841956398",
"assets/assets/icons/ic_flutter.png": "448abc42f0517d9902e4caffb8f0bc88",
"assets/assets/icons/ic_git.png": "4dfc3db3134a5ba3ce91f685ac2e716b",
"assets/assets/icons/ic_gith.png": "a00470e5ea752cac4c6521787ab6fb21",
"assets/assets/icons/ic_github.png": "0a6bfa5e97095c42ef8f0a2e2340d24a",
"assets/assets/icons/ic_gitlab.png": "f8ce70e687d2fb491381dad51f569742",
"assets/assets/icons/ic_instagram.png": "016c9b5a6c79714fb450602f28024b52",
"assets/assets/icons/ic_laravel.png": "28a8f0eb60cdeadf86c7faa77ca95630",
"assets/assets/icons/ic_linkedin.png": "cba6bdf2a9d08f08b23291654b6267b5",
"assets/assets/icons/ic_midtrans.png": "d83d528ace552b2c28169a024859779a",
"assets/assets/icons/ic_moon.png": "e518fccb512fd69bff348305e3a9af97",
"assets/assets/icons/ic_mysql.png": "d19cc6dbc2d7893ac7e03c4ebf22ffc7",
"assets/assets/icons/ic_php.png": "3bf26aa8bb4dbc8f15a2f074990d9bd0",
"assets/assets/icons/ic_postman.png": "4f0d5c139c05f0ca514aa87802b2dec6",
"assets/assets/icons/ic_python.png": "6960acc8cb809eb81291931da67159db",
"assets/assets/icons/ic_son.png": "fe7a48eca2cb7f70533b2cd6cebb0eaf",
"assets/assets/icons/ic_sqlite.png": "9873917f2072ce8bbedc31c160cb1fdc",
"assets/assets/icons/ic_sun.png": "fe7a48eca2cb7f70533b2cd6cebb0eaf",
"assets/assets/icons/ic_telegram.png": "439cc1c699425e9ca4c598f8de541209",
"assets/assets/icons/ic_vscode.png": "ffce2d7768eb09e27367e8c1276439e7",
"assets/assets/icons/ic_whatsapp.png": "a67ec207b9f57d3d5f5e0dd94916918f",
"assets/assets/icons/ic_xendit.png": "c9be6a892975d13b5fcfce29cf6d43c1",
"assets/assets/images/img_a1_d.jpg": "10f6b0f3b13c607a3395888e5066a3a4",
"assets/assets/images/img_a1_l.jpg": "cdc58389742d72f911e565774797f77e",
"assets/assets/images/img_bgapp.png": "62dc796f464907335ebc8bded5a5c4af",
"assets/assets/images/img_bgapp2.png": "290d8db4505745db0c71ce1cdb78d381",
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
"assets/assets/img_nusatic/img_nusatic1.png": "43961192ae5f6de061e78502a8ff8cbd",
"assets/assets/img_nusatic/img_nusatic10.png": "2e5c49bfe96f5abcdd7cc7ddcb8cc91a",
"assets/assets/img_nusatic/img_nusatic11.png": "5869b76e508cc751abbfebcad2b29d7f",
"assets/assets/img_nusatic/img_nusatic12.png": "52f4ab93f66f394f3da479f1a4951d8b",
"assets/assets/img_nusatic/img_nusatic13.png": "5628bac33ccf54ba08910ee0ddcd2168",
"assets/assets/img_nusatic/img_nusatic14.png": "c665b989807cdf76155260259f80f0a9",
"assets/assets/img_nusatic/img_nusatic15.png": "ff6b90baf577576e597d278d993049f4",
"assets/assets/img_nusatic/img_nusatic16.png": "7ad09ed888d3f6568bd2d3996ea15620",
"assets/assets/img_nusatic/img_nusatic17.png": "de6f5cb5613ebce2b10787931aa4c18f",
"assets/assets/img_nusatic/img_nusatic18.png": "a2f1ec6de55c2d64202fe4b0d4a6754c",
"assets/assets/img_nusatic/img_nusatic19.png": "d3c0da9ff0f3d927ede252e76fe48ce7",
"assets/assets/img_nusatic/img_nusatic2.png": "964cd2a7efc53bbf1211ceb8e17cd824",
"assets/assets/img_nusatic/img_nusatic20.png": "ebaf24475db9ce8ab18f778defa0cd26",
"assets/assets/img_nusatic/img_nusatic21.png": "f7e69d51ddfc39c2abca7eecf834a848",
"assets/assets/img_nusatic/img_nusatic22.png": "48e1737421264fbd8d27f3d863ccc705",
"assets/assets/img_nusatic/img_nusatic23.png": "3b6d8c754cef1e4cb3a9bc462717832e",
"assets/assets/img_nusatic/img_nusatic24.png": "6b24aaa5d948504f6b45f8b06e3ef84a",
"assets/assets/img_nusatic/img_nusatic25.png": "1383382fe86b61f1edfb0643ad204db0",
"assets/assets/img_nusatic/img_nusatic26.png": "f92ace94172a69a8e6968af66b2b5876",
"assets/assets/img_nusatic/img_nusatic27.png": "a9c9a9580d3ce2792e71c565b4c59716",
"assets/assets/img_nusatic/img_nusatic28.png": "9de91b791d9e4552e9c5d8d6e7ff23db",
"assets/assets/img_nusatic/img_nusatic29.png": "11d7d786fa3048f6d990026193011e03",
"assets/assets/img_nusatic/img_nusatic3.png": "c034465e15f0aaa58f5dcc94e12386f3",
"assets/assets/img_nusatic/img_nusatic30.png": "c37dad908851e6edb0bf13b25b2f388b",
"assets/assets/img_nusatic/img_nusatic4.png": "6100328322b923e9f39916f670a81ebc",
"assets/assets/img_nusatic/img_nusatic5.png": "0209b8898f68725871829c0dc5355375",
"assets/assets/img_nusatic/img_nusatic6.png": "8ec28f910586c9390095c2f21799852f",
"assets/assets/img_nusatic/img_nusatic7.png": "dd7f78499b8c824245dc9435acafa09e",
"assets/assets/img_nusatic/img_nusatic8.png": "98964e17467006cd58945cfec6cea2d5",
"assets/assets/img_nusatic/img_nusatic9.png": "c03b4aa2f2caf35ca02adf06b30d098d",
"assets/assets/lang/en.json": "ede547930954be06af076322f5260897",
"assets/assets/lang/id.json": "c853a86a22adb13ee2fc326037541c7e",
"assets/assets/logo/logo.png": "61595418312fa604fe6da56aa3388aac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aa954610f8bdf033af9fed2afdd8563f",
"assets/NOTICES": "48e3b11d72c7300d040d7474ed40aae5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "86b0a05c4d14726dfa7768769356a40f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "4e5ef6dc86edccf0daa3ec9a8f027885",
"icons/Icon-192.png": "7445f9242075f4ecfee0ec2f1f6e30f0",
"icons/Icon-512.png": "005ca8f4d6c3e38fabb60c7c4cd3737b",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "df1de068a1edbd99a4d163f0498fec27",
"/": "df1de068a1edbd99a4d163f0498fec27",
"main.dart.js": "c81e94b63fd6cc941c9050356fa6cb07",
"manifest.json": "563623c2282f9e41460a1942ad5c6c82",
"version.json": "3c9ab285ddedcbd0373f6bc4ba2de44e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
