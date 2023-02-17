(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [510],
  {
    7720: function (e, t, n) {
      "use strict";
      n.d(t, {
        JN: function () {
          return c;
        },
        $C: function () {
          return d;
        },
      });
      var r = n(1691),
        o = n(8527),
        i = n(2778),
        s = n(5893);
      var c = function () {
          var e = (0, r.g)().t,
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
        a = n(3716),
        l = n(894);
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
            n = e.onClose,
            i = (0, r.g)().t;
          return (0, s.jsxs)(a.u_, {
            isOpen: t,
            onClose: n,
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
        f = n(7294),
        h = n(7375),
        x = n(2143);
      var d = function (e) {
        var t = e.children,
          n = (0, f.useContext)(x.f).onTrackingDeclined,
          r = (0, h.qY)(),
          i = r.isOpen,
          c = r.onOpen,
          a = r.onClose;
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
                n(), c();
              },
              "data-cy": "cookie-opt-out-link",
              children: t,
            }),
            (0, s.jsx)(p, { isOpen: i, onClose: a }),
          ],
        });
      };
    },
    5689: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return P;
        },
      });
      var r = n(9499),
        o = (n(7294), n(8527)),
        i = n(1604),
        s = n(9042),
        c = n(3659),
        a = n(4730),
        l = n(5893),
        u = ["items", "emphasizeFirstItem"];
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var h = function (e) {
          var t = e.items,
            n = e.emphasizeFirstItem,
            r = void 0 !== n && n,
            o = (0, a.Z)(e, u);
          return (0, l.jsx)(
            i.m$.ul,
            f(
              f({ marginLeft: "none" }, o),
              {},
              {
                children: t.map(function (e, t) {
                  return (0,
                  l.jsxs)(i.m$.li, { sx: { display: "flex", alignItems: "start", listStyle: "none", marginLeft: r && 0 !== t ? "18px" : 0 }, children: [(0, l.jsx)(i.m$.div, { sx: { flexShrink: 0, width: { base: "6px", sm: "8px" }, height: { base: "6px", sm: "8px" }, borderRadius: "1000px", background: "white", marginX: { base: "6px", sm: "9px" }, marginTop: { base: "4px", sm: "6px" } } }), (0, l.jsx)(i.m$.span, { sx: { color: "white", fontWeight: "400", fontSize: { base: "12px", sm: "16px" }, lineHeight: "150%", letterSpacing: "normal" }, children: e })] }, e);
                }),
              }
            )
          );
        },
        x = n(5740);
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var m = { large: "24px", medium: "20px", small: "16px" };
      var b = n(9006),
        j = n(7720);
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var y = {
          color: "white",
          borderColor: "teal.300",
          fontWeight: "400",
          fontSize: { base: "12px", sm: "16px" },
          letterSpacing: "normal",
          lineHeight: "160%",
          padding: { base: "12px", sm: "16px" },
          ":not(:last-child)": { borderRightWidth: "1px" },
        },
        w = O(O({}, y), {}, { fontWeight: "bold", textTransform: "none" }),
        S = {
          List: h,
          Heading: function (e) {
            var t = e.children,
              n = e.as,
              r = void 0 === n ? "h2" : n,
              i = e.size,
              s = void 0 === i ? "medium" : i,
              c = e.isAnchor,
              a = void 0 !== c && c,
              u = e.variant,
              p = void 0 === u ? "subTitle" : u;
            if (!t) throw new Error("Children is required for Heading.");
            var f = {
              color: "white",
              lineHeight: "150%",
              letterSpacing: "normal",
              fontSize: m[s],
            };
            return (
              "subTitle" === p && (f = g(g({}, f), {}, { fontFamily: "body" })),
              (0, l.jsx)(o.X6, {
                as: r,
                sx: f,
                id: a ? (0, x.Bd)(t.toString()) : void 0,
                children: t,
              })
            );
          },
          CookiesOptOutLink: j.$C,
          p: function (e) {
            return (0, l.jsx)(
              o.xv,
              O(
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
              O(
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
              O(
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
              O(
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
            return (0, l.jsx)(s.hr, O({ color: "white" }, e));
          },
          tbody: function (e) {
            return (0, l.jsx)(s.p3, O({}, e));
          },
          tr: s.Tr,
          th: function (e) {
            return (0, l.jsx)(s.Th, O({ sx: w }, e));
          },
          td: function (e) {
            return (0, l.jsx)(s.Td, O({ sx: y }, e));
          },
          Link: function (e) {
            return (0, l.jsx)(b.MI, O({}, e));
          },
        };
      function P(e) {
        var t = e.source;
        return (0, l.jsx)(o.xu, {
          sx: {
            "& > *": { marginBottom: { base: "22px", sm: "34px" } },
            "& > :last-child": { margin: 0 },
          },
          children: (0, l.jsx)(c.R, O(O({}, t), {}, { components: S })),
        });
      }
    },
    6267: function (e, t, n) {
      "use strict";
      var r = n(8527),
        o = (n(7294), n(100)),
        i = n(5893);
      t.Z = function (e) {
        var t = e.children;
        return (0, i.jsx)(r.xu, {
          as: "main",
          sx: {
            background: "black",
            paddingTop: { base: "64px", sm: "132px" },
            paddingBottom: "56px",
          },
          children: (0, i.jsx)(o.W2, {
            children: (0, i.jsx)(o.X2, {
              children: (0, i.jsx)(r.P4, {
                colStart: { base: 1, sm: 4 },
                colSpan: { base: 4, sm: 6 },
                children: t,
              }),
            }),
          }),
        });
      };
    },
    9006: function (e, t, n) {
      "use strict";
      n.d(t, {
        MI: function () {
          return a;
        },
        sq: function () {
          return c;
        },
      });
      n(7294);
      var r = n(8527),
        o = n(5740);
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
      var s = n(5893),
        c = {
          color: "white",
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "normal",
          marginBottom: "34px",
        };
      function a(e) {
        var t = e.href,
          n = e.size,
          c = e.children;
        if (!c)
          throw new Error("Children prop is required for LegalInlineLink.");
        t || (t = "#".concat((0, o.Bd)(c.toString())));
        var a = t.startsWith("#") ? (0, o.V8)(t.substring(1)) : function () {};
        return (0, s.jsx)(r.rU, {
          isExternal: i(t),
          href: t,
          onClick: a,
          variant: "inline",
          colorScheme: "teal",
          fontFamily: "body",
          size: n,
          fontWeight: "normal",
          children: c,
        });
      }
    },
    1327: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return g;
          },
          default: function () {
            return m;
          },
        });
      var r = n(8527),
        o = n(1691),
        i = n(2165),
        s = n(937),
        c = n(6311),
        a = n(8792),
        l = n(6267),
        u = n(5689),
        p = n(5683),
        f = n(4297),
        h = n(5100),
        x = n(695),
        d = n(5893),
        g = !0;
      function m(e) {
        var t = e.source,
          n = (0, o.g)().t;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(a.Z, {
              title: n("government.pageTitle"),
              path: "legal/government",
            }),
            (0, d.jsx)(i.Z, {}),
            (0, d.jsx)(p.V, {
              children: (0, d.jsxs)(r.xu, {
                children: [
                  (0, d.jsx)(s.Z, {
                    children: (0, d.jsx)(p.H, {
                      currentPage: n("legal.title"),
                      sx: { marginTop: "40px" },
                    }),
                  }),
                  (0, d.jsx)(r.X6, {
                    as: "h1",
                    color: "black",
                    fontSize: (0, h.Z)(
                      36,
                      150,
                      (0, h.w)(x.Z.sizes.xsMin),
                      (0, h.w)(x.Z.sizes.container.sm)
                    ),
                    lineHeight: "160%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    children: n("government.title"),
                  }),
                ],
              }),
            }),
            (0, d.jsx)(l.Z, { children: (0, d.jsx)(u.Z, { source: t }) }),
            (0, d.jsx)(c.Z, {}),
            (0, d.jsx)(f.s, {}),
          ],
        });
      }
    },
    5740: function (e, t, n) {
      "use strict";
      function r(e) {
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
      n.d(t, {
        Bd: function () {
          return r;
        },
        V8: function () {
          return o;
        },
      });
    },
    8756: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/legal/government",
        function () {
          return n(1327);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [737, 35, 669, 692, 774, 888, 179], function () {
      return (t = 8756), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
