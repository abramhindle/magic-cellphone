/*
 *  Magic Cellphone -- Taken from Air Horner
 *  Copyright 2015, 2017 Abram Hindle and Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
         '/',
         '/sw.js',
         '/buttons.html',
         '/index.html',
         '/starter.html',
         '/1.html',
         '/2.html',
         '/3.html',
         '/4.html',
         '/5.html',
         '/6.html',
         '/1.html?action=perform&time=120',
         '/2.html?action=perform&time=120',
         '/3.html?action=perform&time=120',
         '/4.html?action=perform&time=120',
         '/4.html?action=perform&time=180',
         '/5.html?action=perform&time=120',
         '/favicon.ico',
         '/performance.js',
//         '/gibberish3-c.js',
         '/gibberish3.latest.js',
//         '/www.charlie-roberts.com/gibberish/build/gibberish.js',
//         '/www.charlie-roberts.com/interface/build/interface.js',
     ]);
   })
 );
});
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);    
    event.respondWith(        
        caches.match(event.request).then(function(response) {            
            return response || fetch(event.request);
        })
    );
});
