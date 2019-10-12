/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/MYBlogBuliding/Ivan-Life.github.io/public/2019/10/13/article-title/index.html","c2c76ab4929e9138231277b67aba49ea"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/2019/10/13/hello-world/index.html","5ece450bafbb32d38239866d273f4a8d"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/about/index.html","13637baea4da57e8eb9cb04a01a077ed"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/archives/2019/10/index.html","6fc6239505d869f11c392c26ea6f51c6"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/archives/2019/index.html","8771e334baec9c2d4005ebcd8129db35"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/archives/index.html","06d1f79fbea1a1797d85a777a1db9eb7"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/categories/Diary/index.html","22ecf0e8b4b8c83943fea13e573dbe1d"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/categories/index.html","f67f7b01e581a7998b5db077e46c7fd6"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/css/index.css","cbd2c774906bb61624da0b3639685fd4"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/gallery/index.html","8e70ae14a01fb3e395d1a173780549a7"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/img/alipay.jpg","8f99c4525cd90fd2ea2c8aa6619a2950"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/img/avatar.png","9d9779e3592085dda7c5437e357e7f9b"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/img/wechat.jpg","9f665544d6bcebc5879b4e27a096911e"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/index.html","3cbf1569cdcc981bd0100b09ea2e64ba"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/main.js","78605d833865a0d6a629dc52bf9082cb"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/third-party/fireworks.js","97f2bc84b86521dbfd8f93d5903b87bd"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/link/index.html","8ceaf456ba50496ac146db2b39e6e99b"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/playlist/index.html","7624ce8fb1b8a1f419ca091e4ac0ccf4"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/tags/Life/index.html","e21938869b2c3f7408b8c39f7a2cb991"],["E:/MYBlogBuliding/Ivan-Life.github.io/public/tags/index.html","7372a1eaedbc3897cc4c01e4bab8b90f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







