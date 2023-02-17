(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [731],
  {
    7720: function (e, t, r) {
      "use strict";
      r.d(t, {
        JN: function () {
          return c;
        },
        $C: function () {
          return d;
        },
      });
      var n = r(1691),
        o = r(8527),
        i = r(2778),
        s = r(5893);
      var c = function () {
          var e = (0, n.g)().t,
            t = { base: (0, i.y)(56, 120), sm: (0, i.v)(120, 150) };
          return (0, s.jsxs)(o.X6, {
            as: "h1",
            color: "black",
            children: [
              (0, s.jsx)(o.xv, {
                as: "span",
                fontWeight: "bold",
                position: "absolute",
                letterSpacing: "normal",
                fontSize: t,
                lineHeight: "160%",
                top: { base: "50%", sm: (0, i.v)(156, 104) },
                left: { base: (0, i.y)(24, 100), sm: (0, i.v)(40, 205) },
                transform: { base: "translateY(-89%)", sm: "none" },
                children: e("cookiePolicy.hero.heading.1"),
              }),
              (0, s.jsx)(o.xv, {
                as: "span",
                fontWeight: "bold",
                position: "absolute",
                letterSpacing: "normal",
                fontSize: t,
                lineHeight: "160%",
                top: { base: "50%", sm: "none" },
                bottom: { base: "none", sm: (0, i.v)(184, 164) },
                right: { base: (0, i.y)(27, 100), sm: (0, i.v)(0, 235) },
                transform: { base: "translateY(-11%)", sm: "none" },
                children: e("cookiePolicy.hero.heading.2"),
              }),
            ],
          });
        },
        a = r(3716),
        l = r(894);
      var u = function () {
        return (0, s.jsx)(a.ol, {
          top: "30px",
          right: "30px",
          "data-group": "true",
          children: (0, s.jsxs)(l.JO, {
            width: "42px",
            height: "42px",
            viewBox: "0 0 42 42",
            fill: "none",
            color: "teal.300",
            "data-cy": "cookie-close-modal-btn",
            sx: {
              "[data-group]:hover &": { color: "black" },
              "[data-group].focus-visible &": { color: "black" },
            },
            children: [
              (0, s.jsx)("line", {
                x1: "14.8321",
                y1: "14.1257",
                x2: "28.6219",
                y2: "27.9156",
                stroke: "currentColor",
              }),
              (0, s.jsx)("line", {
                x1: "28.2789",
                y1: "14.4882",
                x2: "14.489",
                y2: "28.2781",
                stroke: "currentColor",
              }),
            ],
          }),
        });
      };
      var p = function (e) {
          var t = e.isOpen,
            r = e.onClose,
            i = (0, n.g)().t;
          return (0, s.jsxs)(a.u_, {
            isOpen: t,
            onClose: r,
            children: [
              (0, s.jsx)(a.ZA, {}),
              (0, s.jsxs)(a.hz, {
                children: [
                  (0, s.jsx)(u, {}),
                  (0, s.jsx)(a.xB, {
                    children: (0, s.jsx)(o.xv, {
                      color: "teal.300",
                      fontFamily: "heading",
                      fontSize: "36px",
                      lineHeight: "160%",
                      letterSpacing: "normal",
                      "data-cy": "cookie-opt-out-modal-content",
                      children: i("cookiePolicy.optOutPopup.title"),
                    }),
                  }),
                  (0, s.jsx)(a.fe, {
                    children: (0, s.jsx)(o.xv, {
                      color: "teal.300",
                      children: i("cookiePolicy.optOutPopup.message"),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        x = r(7294),
        h = r(7375),
        f = r(2143);
      var d = function (e) {
        var t = e.children,
          r = (0, x.useContext)(f.f).onTrackingDeclined,
          n = (0, h.qY)(),
          i = n.isOpen,
          c = n.onOpen,
          a = n.onClose;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(o.rU, {
              as: "button",
              variant: "inline",
              colorScheme: "teal",
              fontFamily: "body",
              fontWeight: "400",
              fontSize: { base: "12px", sm: "16px" },
              lineHeight: "150%",
              letterSpacing: "normal",
              onClick: function () {
                r(), c();
              },
              "data-cy": "cookie-opt-out-link",
              children: t,
            }),
            (0, s.jsx)(p, { isOpen: i, onClose: a }),
          ],
        });
      };
    },
    5689: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return k;
        },
      });
      var n = r(9499),
        o = (r(7294), r(8527)),
        i = r(1604),
        s = r(9042),
        c = r(3659),
        a = r(4730),
        l = r(5893),
        u = ["items", "emphasizeFirstItem"];
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var h = function (e) {
          var t = e.items,
            r = e.emphasizeFirstItem,
            n = void 0 !== r && r,
            o = (0, a.Z)(e, u);
          return (0, l.jsx)(
            i.m$.ul,
            x(
              x({ marginLeft: "none" }, o),
              {},
              {
                children: t.map(function (e, t) {
                  return (0,
                  l.jsxs)(i.m$.li, { sx: { display: "flex", alignItems: "start", listStyle: "none", marginLeft: n && 0 !== t ? "18px" : 0 }, children: [(0, l.jsx)(i.m$.div, { sx: { flexShrink: 0, width: { base: "6px", sm: "8px" }, height: { base: "6px", sm: "8px" }, borderRadius: "1000px", background: "white", marginX: { base: "6px", sm: "9px" }, marginTop: { base: "4px", sm: "6px" } } }), (0, l.jsx)(i.m$.span, { sx: { color: "white", fontWeight: "400", fontSize: { base: "12px", sm: "16px" }, lineHeight: "150%", letterSpacing: "normal" }, children: e })] }, e);
                }),
              }
            )
          );
        },
        f = r(5740);
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var g = { large: "24px", medium: "20px", small: "16px" };
      var b = r(9006),
        j = r(7720);
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : v(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var O = {
          color: "white",
          borderColor: "teal.300",
          fontWeight: "400",
          fontSize: { base: "12px", sm: "16px" },
          letterSpacing: "normal",
          lineHeight: "160%",
          padding: { base: "12px", sm: "16px" },
          ":not(:last-child)": { borderRightWidth: "1px" },
        },
        w = y(y({}, O), {}, { fontWeight: "bold", textTransform: "none" }),
        S = {
          List: h,
          Heading: function (e) {
            var t = e.children,
              r = e.as,
              n = void 0 === r ? "h2" : r,
              i = e.size,
              s = void 0 === i ? "medium" : i,
              c = e.isAnchor,
              a = void 0 !== c && c,
              u = e.variant,
              p = void 0 === u ? "subTitle" : u;
            if (!t) throw new Error("Children is required for Heading.");
            var x = {
              color: "white",
              lineHeight: "150%",
              letterSpacing: "normal",
              fontSize: g[s],
            };
            return (
              "subTitle" === p && (x = m(m({}, x), {}, { fontFamily: "body" })),
              (0, l.jsx)(o.X6, {
                as: n,
                sx: x,
                id: a ? (0, f.Bd)(t.toString()) : void 0,
                children: t,
              })
            );
          },
          CookiesOptOutLink: j.$C,
          p: function (e) {
            return (0, l.jsx)(
              o.xv,
              y(
                {
                  sx: {
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "normal",
                  },
                },
                e
              )
            );
          },
          a: b.MI,
          ol: function (e) {
            return (0, l.jsx)(
              i.m$.ol,
              y(
                {
                  sx: {
                    marginLeft: "20px",
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "normal",
                  },
                },
                e
              )
            );
          },
          ul: function (e) {
            return (0, l.jsx)(
              i.m$.ul,
              y(
                {
                  sx: {
                    marginLeft: "20px",
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "normal",
                  },
                },
                e
              )
            );
          },
          hr: function () {
            return (0, l.jsx)(o.iz, {
              backgroundColor: "teal.300",
              borderWidth: "0px",
              height: "1px",
              marginTop: "64px",
              marginBottom: "64px",
            });
          },
          table: function (e) {
            return (0, l.jsx)(
              s.iA,
              y(
                {
                  borderColor: "teal.300",
                  borderWidth: "1px",
                  marginBottom: "40px",
                },
                e
              )
            );
          },
          thead: function (e) {
            return (0, l.jsx)(s.hr, y({ color: "white" }, e));
          },
          tbody: function (e) {
            return (0, l.jsx)(s.p3, y({}, e));
          },
          tr: s.Tr,
          th: function (e) {
            return (0, l.jsx)(s.Th, y({ sx: w }, e));
          },
          td: function (e) {
            return (0, l.jsx)(s.Td, y({ sx: O }, e));
          },
          Link: function (e) {
            return (0, l.jsx)(b.MI, y({}, e));
          },
        };
      function k(e) {
        var t = e.source;
        return (0, l.jsx)(o.xu, {
          sx: {
            "& > *": { marginBottom: { base: "22px", sm: "34px" } },
            "& > :last-child": { margin: 0 },
          },
          children: (0, l.jsx)(c.R, y(y({}, t), {}, { components: S })),
        });
      }
    },
    6267: function (e, t, r) {
      "use strict";
      var n = r(8527),
        o = (r(7294), r(100)),
        i = r(5893);
      t.Z = function (e) {
        var t = e.children;
        return (0, i.jsx)(n.xu, {
          as: "main",
          sx: {
            background: "black",
            paddingTop: { base: "64px", sm: "132px" },
            paddingBottom: "56px",
          },
          children: (0, i.jsx)(o.W2, {
            children: (0, i.jsx)(o.X2, {
              children: (0, i.jsx)(n.P4, {
                colStart: { base: 1, sm: 4 },
                colSpan: { base: 4, sm: 6 },
                children: t,
              }),
            }),
          }),
        });
      };
    },
    9006: function (e, t, r) {
      "use strict";
      r.d(t, {
        MI: function () {
          return a;
        },
        sq: function () {
          return c;
        },
      });
      r(7294);
      var n = r(8527),
        o = r(5740);
      function i(e) {
        return (
          !e.startsWith("https://block.xyz") &&
          !!(
            e.startsWith("https://") ||
            e.startsWith("http://") ||
            e.startsWith("mailto:") ||
            e.startsWith("tel:")
          )
        );
      }
      var s = r(5893),
        c = {
          color: "white",
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "normal",
          marginBottom: "34px",
        };
      function a(e) {
        var t = e.href,
          r = e.size,
          c = e.children;
        if (!c)
          throw new Error("Children prop is required for LegalInlineLink.");
        t || (t = "#".concat((0, o.Bd)(c.toString())));
        var a = t.startsWith("#") ? (0, o.V8)(t.substring(1)) : function () {};
        return (0, s.jsx)(n.rU, {
          isExternal: i(t),
          href: t,
          onClick: a,
          variant: "inline",
          colorScheme: "teal",
          fontFamily: "body",
          size: r,
          fontWeight: "normal",
          children: c,
        });
      }
    },
    9923: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return m;
          },
          default: function () {
            return g;
          },
        });
      var n = r(8527),
        o = r(1691),
        i = r(2165),
        s = r(937),
        c = r(6311),
        a = r(8792),
        l = r(5689),
        u = r(6267),
        p = r(7720),
        x = r(5683),
        h = r(100),
        f = r(4297),
        d = r(5893),
        m = !0;
      function g(e) {
        var t = e.source,
          r = (0, o.g)().t;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(a.Z, {
              title: r("cookiePolicy.title"),
              path: "cookie-policy",
            }),
            (0, d.jsx)(i.Z, {}),
            (0, d.jsxs)(h.im, {
              children: [
                (0, d.jsxs)(x.V, {
                  children: [
                    (0, d.jsx)(n.xu, {
                      paddingTop: "40px",
                      children: (0, d.jsx)(s.Z, {
                        children: (0, d.jsx)(x.H, {
                          currentPage: r("cookiePolicy.title"),
                        }),
                      }),
                    }),
                    (0, d.jsx)(p.JN, {}),
                  ],
                }),
                (0, d.jsx)(u.Z, { children: (0, d.jsx)(l.Z, { source: t }) }),
                (0, d.jsx)(c.Z, {}),
              ],
            }),
            (0, d.jsx)(f.s, {}),
          ],
        });
      }
    },
    5740: function (e, t, r) {
      "use strict";
      function n(e) {
        return e.replace(" ", "-").replace("*", "").toLowerCase();
      }
      function o(e) {
        return function (t) {
          t.preventDefault(),
            (function (e) {
              var t = document.getElementById(e);
              null === t ||
                void 0 === t ||
                t.scrollIntoView({ behavior: "smooth" });
            })(e);
        };
      }
      r.d(t, {
        Bd: function () {
          return n;
        },
        V8: function () {
          return o;
        },
      });
    },
    8192: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/cookie-policy",
        function () {
          return r(9923);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [737, 35, 669, 692, 774, 888, 179], function () {
      return (t = 8192), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
