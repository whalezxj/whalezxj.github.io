/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/09/02/Java基础/index.html","869cac9c9f3ff34791c38f7c1a9245b6"],["/2020/09/02/前端-返回结果封装/index.html","85f0a51f63e18ce5002c4b223cbd64aa"],["/2020/09/02/常用正则表达式/index.html","ebabeef2cc3fd59d371f6a078b2e60d6"],["/2020/09/03/jdk8新特性/index.html","c940528475b9c934885b28fefa6887ad"],["/2020/09/03/snowflake雪花算法/index.html","05388091f30b6a77bcc2a9d744ab6e12"],["/2020/09/12/SwaggerConfig/index.html","d1a58802c3d78502ba518aa108afb1a8"],["/2020/09/12/Thymeleaf/index.html","cc99b5c13c9432414de5183d19303df6"],["/2020/09/25/spring boot/index.html","939a8b4680ef63611e686e509c265262"],["/2020/09/25/var 和 let 引发的血案！！/index.html","c672c961f3a1ab0ab836c80a5ce0ecbd"],["/2020/10/14/web爱及所爱/index.html","bf02294bb6f41e96a6c52365d426b348"],["/2020/10/19/mybatis-plus/index.html","3e8071a32c887116c3ef0b35bde9979c"],["/2020/10/21/mysql/index.html","1ec1156220cc96f5a87e88bc21604b19"],["/2020/10/28/ShiroDemo/index.html","68e92ea6c4414d8067d2a88bee93e322"],["/2020/11/13/jxls-springboot实现导出Excel报表/index.html","29e1006c947f6ee71ff6c75e0bca36a1"],["/2020/11/20/Git/index.html","273ec97c4819ff0c0507154e582ff8e0"],["/2020/11/21/Linux/index.html","cdda2ffd2f270c34170b865761bbca9c"],["/2020/11/24/@Scheduled和Quartz定时器/index.html","c15b1047de327a214a2b2a4aae40c836"],["/2020/12/05/EasyExcel/index.html","59e5025bfaae9c38b25ca257441340a6"],["/2020/12/19/jdk动态代理/index.html","c0eabc239ac7034e1c53eed9e6bd5b5a"],["/2020/12/21/mysql面试题/index.html","dfefcfbe92b9285b1f1f2e34b52f0988"],["/2021/01/18/BigDecimal相加的坑/index.html","b284f163422f4dd7a693f577bb41c140"],["/2021/01/22/XXL-JOB的使用/index.html","8279bbfa9e82ae273e3d8643eb2252f3"],["/2021/04/07/BeanFactory和ApplicationContext的区别/index.html","f13258cc8260b859a7dc8618d0fc5968"],["/2021/04/13/dubbo/index.html","3b071e029b1f1fdd1aa2fa15a48a5272"],["/2021/04/19/查看服务器日志/index.html","abd4cc4362812b4670c62ed9235f25d7"],["/2021/05/21/自动配置Starter编写/index.html","3ad6f15937f5708e633be9c108922e39"],["/about/index.html","3df200f1619e0b91a99aa2e7e7dfb571"],["/archives/2020/09/index.html","9f8db693e38ffe9e0fab31f837ec8390"],["/archives/2020/10/index.html","b6fa9f1b6de0742f611b4751a9b28515"],["/archives/2020/11/index.html","7f238e512b9c60c286d4716bbfeaad1b"],["/archives/2020/12/index.html","848bf4658857c14c2e9b82fb273d32e1"],["/archives/2020/index.html","a018fa9c54dbbccd575c46855d9c766c"],["/archives/2020/page/2/index.html","e842b40ecfa3f96e9ad871add2b5ea56"],["/archives/2021/01/index.html","8e4b6cde0e4a96fef72eabef517fd653"],["/archives/2021/04/index.html","0e7d2c9e925de631d55f10d53e6fe539"],["/archives/2021/05/index.html","52bd5fafbb0bf7596e1bd980a6940933"],["/archives/2021/index.html","7636feb990797b3633d89a2935414dec"],["/archives/index.html","f64646dc88aa51165b636578978beb96"],["/archives/page/2/index.html","8fb28fd78888f528a967ca83d6da8a1e"],["/archives/page/3/index.html","26555a0464eb2d865335b80b90ee861f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/git/index.html","7c45d1d8ca5a5d00ca2ca4980bd049dd"],["/categories/index.html","6bdaec7d1670965a4af224291695c50d"],["/categories/java/index.html","98bcd46943588f9c5378ef3920687fcb"],["/categories/js/index.html","64cd8a0a535eb18082fbb16f2cc562f1"],["/categories/linux/index.html","82cc7853ee7b77078e0007788d5598c1"],["/categories/mybatis-plus/index.html","a9d6553fbe2f2dd496a2000d5a391b51"],["/categories/mysql/index.html","809f491ab348cf0901ffc8a5b2c37209"],["/categories/shiro/index.html","bb44e475c12173ab8fd20adb735d4655"],["/categories/spring/index.html","5b1f0bda6d66b0b929f953321ff928d0"],["/categories/springboot/index.html","8358d67a1c76d6cb92b8a91a6e06264a"],["/categories/分布式父/index.html","1d7dd1e187300e4a79b7c3160c998d80"],["/categories/命令/index.html","576ab86df20e0dfc20e48e4054bfa09a"],["/categories/定时器/index.html","ad9a7295af446502eff9db6a51d6e7e8"],["/categories/导出/index.html","6ba744d5237b87108b901fedb568cc9d"],["/categories/工具类/index.html","3b78ab6bf820c2f68d4360ecbb4d7909"],["/categories/正则表达式/index.html","b52ae5edd3fa550fcdfa0e42fdb06934"],["/categories/算法/index.html","c45348ac10031b4cf01851979b56860c"],["/categories/那些不知道的坑/index.html","a0304495766fd7b968efcf50c9351f52"],["/categories/面试题/index.html","35e392a8d8368469b12e5d57695d5ef0"],["/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/index.css","9da0d91ef503976235eb24a5798402df"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","38b843ce8d375dd746f3a7e53d288fc9"],["/img/banner/4.jpg","a0c3209cc9c8515b9466d29db77c8904"],["/img/banner/5.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/bg001.jpg","5ddd0b652e875a8fcb4aed2dc77b341a"],["/img/banner/bg002.jpg","1bed37a57c0151908aa16489da91d784"],["/img/banner/bg003.jpg","004f9ffa008157bd80a8afdfeab2763a"],["/img/banner/bg004.jpg","89e335e5e5cd61badd0b195a65d322d7"],["/img/banner/bg005.jpg","89ce74a9c4efe137c4c8c46749f8de15"],["/img/banner/bg006.jpg","3556f40872bf06a0b9e6d8f199b9d5ef"],["/img/banner/bg007.jpg","598a0e35687b4a3353e7b9315ebbc885"],["/img/banner/bg008.jpg","38cdb6660b3295b4902a0556eeb1b515"],["/img/banner/bg009.jpg","f7565918fcc54c132e22f408f86ec235"],["/img/banner/bg010.jpg","5d013f2b1e47924b3fe91790c6415918"],["/img/banner/bg011.jpg","396fd3295531544eee48f16e73c05da6"],["/img/banner/bg012.jpg","1fc9748451ff79e362e5bdbfb2fb1c1a"],["/img/banner/bg013.jpg","a9c94a76c88d30accd803587f79d0cdd"],["/img/banner/bg014.jpg","a0c3209cc9c8515b9466d29db77c8904"],["/img/banner/bg016.jpg","3c7b1ea38aa0c4c15c050700881a710d"],["/img/banner/bg017.jpg","17dc7e4e3c043cbbf6b58cc02b9a74f2"],["/img/banner/bg018.jpg","677afbb18a438461694f80c57c9b49a8"],["/img/banner/bg1.jpg","ca56a080a292048402bdf56c16e53c05"],["/img/banner/kobe_bean_bryant-001.jpg","62c656c4f4babbf210e00e9f9c00c571"],["/img/banner/kobe_bean_bryant-002.jpg","083a880330cde0d5981eca2a9a903b6f"],["/img/bg001.jpg","5ddd0b652e875a8fcb4aed2dc77b341a"],["/img/cover/bg001.jpg","5ddd0b652e875a8fcb4aed2dc77b341a"],["/img/cover/bg002.jpg","1bed37a57c0151908aa16489da91d784"],["/img/cover/bg003.jpg","004f9ffa008157bd80a8afdfeab2763a"],["/img/cover/bg004.jpg","89e335e5e5cd61badd0b195a65d322d7"],["/img/cover/bg005.jpg","89ce74a9c4efe137c4c8c46749f8de15"],["/img/cover/bg006.jpg","3556f40872bf06a0b9e6d8f199b9d5ef"],["/img/cover/bg007.jpg","598a0e35687b4a3353e7b9315ebbc885"],["/img/cover/bg008.jpg","38cdb6660b3295b4902a0556eeb1b515"],["/img/cover/bg009.jpg","f7565918fcc54c132e22f408f86ec235"],["/img/cover/bg010.jpg","5d013f2b1e47924b3fe91790c6415918"],["/img/cover/bg011.jpg","396fd3295531544eee48f16e73c05da6"],["/img/cover/bg012.jpg","1fc9748451ff79e362e5bdbfb2fb1c1a"],["/img/cover/bg013.jpg","a9c94a76c88d30accd803587f79d0cdd"],["/img/cover/bg014.jpg","a0c3209cc9c8515b9466d29db77c8904"],["/img/cover/bg016.jpg","3c7b1ea38aa0c4c15c050700881a710d"],["/img/cover/bg017.jpg","17dc7e4e3c043cbbf6b58cc02b9a74f2"],["/img/cover/bg018.jpg","677afbb18a438461694f80c57c9b49a8"],["/img/cover/bg1.jpg","ca56a080a292048402bdf56c16e53c05"],["/img/cover/kobe_bean_bryant-001.jpg","62c656c4f4babbf210e00e9f9c00c571"],["/img/cover/kobe_bean_bryant-002.jpg","083a880330cde0d5981eca2a9a903b6f"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/touxiang.jpg","ed3b5292a8338ba09022c8c93d166f44"],["/index.html","9cfc3db625f7f11c8f051715f963e001"],["/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/js/main.js","b382597891e958e71bb7c1099977ec66"],["/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","10ce9b3a9c352a9884f5c873f31a1d12"],["/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","77997491e12c8066190009cd261af408"],["/page/3/index.html","b524d0d0102c7f13c7b6854d76585b40"],["/sw-register.js","ee0331aadb554725ec4be81fef9d99fd"],["/tags/BigDecimal/index.html","5459e722b6ffcf027d92c3e51d325093"],["/tags/Demo/index.html","dcb271a97997bdbd5a6887fc6d29f9ff"],["/tags/dubbo/index.html","2562081f307796e22015ee2caf2dad3e"],["/tags/easyexcel/index.html","bbc528e0dd535d3681303d216eeea55b"],["/tags/git/index.html","ccb7f5015ebeb50ee40bffcd1e930528"],["/tags/index.html","11076ea810fcada758ec0ead68cc0c5e"],["/tags/java/index.html","f78f8610aa7278d87aad0d89978c6e33"],["/tags/jdk/index.html","456aa33f49851171d37cecc2b9cccb84"],["/tags/js/index.html","d19dc9b514ab797c946289f7e95a00f5"],["/tags/jxls/index.html","a2868f0cd54b8ec8c25158b39e65cd40"],["/tags/linux/index.html","77566adcb306f2071d9b63c1b0ca9d92"],["/tags/mybatis-plus/index.html","4ab40c7dee8e5816cb8f245864bb2568"],["/tags/mysql/index.html","40ae6ba5d3150fcd52be0ec09ce554ba"],["/tags/shiro/index.html","532562a8ea68786c5dd9c96863a27da5"],["/tags/spring/index.html","87b46b0ae9f2cda2fdefdf871733fab7"],["/tags/springboot/index.html","6cf93eede265fc91e0990c870cf4df74"],["/tags/springboot/page/2/index.html","6f115515c6e240b359ed7e608ebe1e3d"],["/tags/swagger/index.html","731fb50f0977cd635efe4de4edac8ea2"],["/tags/任务调度/index.html","3fc5b01e2faee5218aee7ac0e9dbad3d"],["/tags/命令/index.html","a690f6ae130f3bf786b6554b34da5b8e"],["/tags/定时器/index.html","56815b054077fd366b25fba20a86ae37"],["/tags/导出/index.html","2f4072dcaea9d0b51d3d8cbe03126276"],["/tags/工具类/index.html","a99f7b955b74a11bf24f7be3253b2b3d"],["/tags/模板引擎/index.html","0d216927672e4c82e034f76489ff413f"],["/tags/正则表达式/index.html","57fd6c045b53e9e34a5e0d254c785d66"],["/tags/雪花算法/index.html","db25d4664cb01a28a560bf39742e08b5"],["/tags/面试题/index.html","6b48ac1fba76903acc4666e34d74bb9c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
