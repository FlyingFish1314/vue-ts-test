(function () {
  "use strict";
  var e = {
      3273: function (e, t, n) {
        var r = n(9242),
          o = n(3396);
        function i(e, t) {
          const n = (0, o.up)("router-link"),
            r = (0, o.up)("router-view");
          return (
            (0, o.wg)(),
            (0, o.iD)(
              o.HY,
              null,
              [
                (0, o._)("nav", null, [
                  (0, o.Wm)(
                    n,
                    { to: "/login" },
                    { default: (0, o.w5)(() => [(0, o.Uk)("Login")]), _: 1 }
                  ),
                  (0, o.Uk)(" | "),
                  (0, o.Wm)(
                    n,
                    { to: "/main" },
                    { default: (0, o.w5)(() => [(0, o.Uk)("Home")]), _: 1 }
                  ),
                ]),
                (0, o.Uk)(" 555 "),
                (0, o.Wm)(r),
              ],
              64
            )
          );
        }
        var u = n(89);
        const a = {},
          c = (0, u.Z)(a, [["render", i]]);
        var f = c,
          s = n(678);
        const l = [
            { path: "/", redirect: "/main" },
            { path: "/main", component: () => n.e(597).then(n.bind(n, 6597)) },
            { path: "/login", component: () => n.e(889).then(n.bind(n, 1889)) },
          ],
          d = (0, s.p7)({ history: (0, s.PO)("/"), routes: l });
        var p = d,
          h = n(65),
          v = (0, h.MT)({
            state: () => ({ name: "coderwhy" }),
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          });
        const m = (0, r.ri)(f);
        m.use(v),
          m.use(p),
          m.mount("#app"),
          console.log({
            NODE_ENV: "production",
            VUE_APP_BASE_NAME: "kobe",
            VUE_APP_BASE_URL: "https://coderwhy.org/prod",
            BASE_URL: "/",
          }),
          console.log("https://coderwhy.org/prod");
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, r, o, i) {
        if (!r) {
          var u = 1 / 0;
          for (s = 0; s < e.length; s++) {
            (r = e[s][0]), (o = e[s][1]), (i = e[s][2]);
            for (var a = !0, c = 0; c < r.length; c++)
              (!1 & i || u >= i) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](r[c]);
              })
                ? r.splice(c--, 1)
                : ((a = !1), i < u && (u = i));
            if (a) {
              e.splice(s--, 1);
              var f = o();
              void 0 !== f && (t = f);
            }
          }
          return t;
        }
        i = i || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > i; s--) e[s] = e[s - 1];
        e[s] = [r, o, i];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return n.d(t, { a: t }), t;
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, r) {
              return n.f[r](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return (
          "js/" + e + "." + { 597: "5ff887a1", 889: "727e33e7" }[e] + ".js"
        );
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return "css/" + e + ".4292a5f7.css";
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "vue3-ts-cms:";
      n.l = function (r, o, i, u) {
        if (e[r]) e[r].push(o);
        else {
          var a, c;
          if (void 0 !== i)
            for (
              var f = document.getElementsByTagName("script"), s = 0;
              s < f.length;
              s++
            ) {
              var l = f[s];
              if (
                l.getAttribute("src") == r ||
                l.getAttribute("data-webpack") == t + i
              ) {
                a = l;
                break;
              }
            }
          a ||
            ((c = !0),
            (a = document.createElement("script")),
            (a.charset = "utf-8"),
            (a.timeout = 120),
            n.nc && a.setAttribute("nonce", n.nc),
            a.setAttribute("data-webpack", t + i),
            (a.src = r)),
            (e[r] = [o]);
          var d = function (t, n) {
              (a.onerror = a.onload = null), clearTimeout(p);
              var o = e[r];
              if (
                (delete e[r],
                a.parentNode && a.parentNode.removeChild(a),
                o &&
                  o.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: a }),
              12e4
            );
          (a.onerror = d.bind(null, a.onerror)),
            (a.onload = d.bind(null, a.onload)),
            c && document.head.appendChild(a);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "/";
    })(),
    (function () {
      var e = function (e, t, n, r) {
          var o = document.createElement("link");
          (o.rel = "stylesheet"), (o.type = "text/css");
          var i = function (i) {
            if (((o.onerror = o.onload = null), "load" === i.type)) n();
            else {
              var u = i && ("load" === i.type ? "missing" : i.type),
                a = (i && i.target && i.target.href) || t,
                c = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                );
              (c.code = "CSS_CHUNK_LOAD_FAILED"),
                (c.type = u),
                (c.request = a),
                o.parentNode.removeChild(o),
                r(c);
            }
          };
          return (
            (o.onerror = o.onload = i),
            (o.href = t),
            document.head.appendChild(o),
            o
          );
        },
        t = function (e, t) {
          for (
            var n = document.getElementsByTagName("link"), r = 0;
            r < n.length;
            r++
          ) {
            var o = n[r],
              i = o.getAttribute("data-href") || o.getAttribute("href");
            if ("stylesheet" === o.rel && (i === e || i === t)) return o;
          }
          var u = document.getElementsByTagName("style");
          for (r = 0; r < u.length; r++) {
            (o = u[r]), (i = o.getAttribute("data-href"));
            if (i === e || i === t) return o;
          }
        },
        r = function (r) {
          return new Promise(function (o, i) {
            var u = n.miniCssF(r),
              a = n.p + u;
            if (t(u, a)) return o();
            e(r, a, o, i);
          });
        },
        o = { 143: 0 };
      n.f.miniCss = function (e, t) {
        var n = { 597: 1 };
        o[e]
          ? t.push(o[e])
          : 0 !== o[e] &&
            n[e] &&
            t.push(
              (o[e] = r(e).then(
                function () {
                  o[e] = 0;
                },
                function (t) {
                  throw (delete o[e], t);
                }
              ))
            );
      };
    })(),
    (function () {
      var e = { 143: 0 };
      (n.f.j = function (t, r) {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var i = new Promise(function (n, r) {
              o = e[t] = [n, r];
            });
            r.push((o[2] = i));
            var u = n.p + n.u(t),
              a = new Error(),
              c = function (r) {
                if (n.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    u = r && r.target && r.target.src;
                  (a.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + u + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = i),
                    (a.request = u),
                    o[1](a);
                }
              };
            n.l(u, c, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, r) {
          var o,
            i,
            u = r[0],
            a = r[1],
            c = r[2],
            f = 0;
          if (
            u.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in a) n.o(a, o) && (n.m[o] = a[o]);
            if (c) var s = c(n);
          }
          for (t && t(r); f < u.length; f++)
            (i = u[f]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(s);
        },
        r = (self["webpackChunkvue3_ts_cms"] =
          self["webpackChunkvue3_ts_cms"] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n.O(void 0, [998], function () {
    return n(3273);
  });
  r = n.O(r);
})();
//# sourceMappingURL=app.6e161ad6.js.map
