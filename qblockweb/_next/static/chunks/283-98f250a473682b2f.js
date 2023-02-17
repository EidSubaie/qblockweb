"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [283],
  {
    7720: function (e, t, n) {
      n.d(t, {
        JN: function () {
          return a;
        },
        $C: function () {
          return d;
        },
      });
      var r = n(1691),
        o = n(8527),
        i = n(2778),
        s = n(5893);
      var a = function () {
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
        c = n(3716),
        l = n(894);
      var p = function () {
        return (0, s.jsx)(c.ol, {
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
      var u = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            i = (0, r.g)().t;
          return (0, s.jsxs)(c.u_, {
            isOpen: t,
            onClose: n,
            children: [
              (0, s.jsx)(c.ZA, {}),
              (0, s.jsxs)(c.hz, {
                children: [
                  (0, s.jsx)(p, {}),
                  (0, s.jsx)(c.xB, {
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
                  (0, s.jsx)(c.fe, {
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
        h = n(7294),
        x = n(7375),
        f = n(2143);
      var d = function (e) {
        var t = e.children,
          n = (0, h.useContext)(f.f).onTrackingDeclined,
          r = (0, x.qY)(),
          i = r.isOpen,
          a = r.onOpen,
          c = r.onClose;
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
                n(), a();
              },
              "data-cy": "cookie-opt-out-link",
              children: t,
            }),
            (0, s.jsx)(u, { isOpen: i, onClose: c }),
          ],
        });
      };
    },
    5283: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var r = n(1691),
        o = n(2165),
        i = n(6311),
        s = n(8792),
        a = n(6267),
        c = n(5689),
        l = (n(7294), n(937)),
        p = n(8527),
        u = n(2778),
        h = n(5893);
      function x() {
        var e = (0, r.g)().t,
          t = { base: (0, u.y)(50, 120), sm: (0, u.v)(120, 150) };
        return (0, h.jsxs)(p.X6, {
          as: "h1",
          color: "black",
          children: [
            (0, h.jsx)(p.xv, {
              as: "span",
              fontWeight: "bold",
              position: "absolute",
              top: { base: "50%", sm: (0, u.v)(116, 83) },
              left: { base: (0, u.y)(24, 80), sm: (0, u.v)(145, 214) },
              transform: { base: "translateY(-110%)", sm: "none" },
              fontSize: t,
              lineHeight: "160%",
              letterSpacing: "normal",
              children: e("applicantPrivacyNotice.hero.heading.0"),
            }),
            (0, h.jsx)(p.xv, {
              as: "span",
              fontWeight: "bold",
              position: "absolute",
              top: { base: "50%", sm: (0, u.v)(255, 231) },
              right: { base: (0, u.y)(24, 80), sm: (0, u.v)(80, 208) },
              transform: { base: "translateY(-40%)", sm: "none" },
              fontSize: t,
              lineHeight: "160%",
              letterSpacing: "normal",
              children: e("applicantPrivacyNotice.hero.heading.1"),
            }),
            (0, h.jsx)(p.xv, {
              as: "span",
              fontWeight: "bold",
              position: "absolute",
              top: { base: "50%", sm: (0, u.v)(380, 359) },
              left: { base: (0, u.y)(24, 162), sm: (0, u.v)(255, 450) },
              transform: { base: "translateY(20%)", sm: "none" },
              fontSize: t,
              lineHeight: "160%",
              letterSpacing: "normal",
              children: e("applicantPrivacyNotice.hero.heading.2"),
            }),
          ],
        });
      }
      var f = n(5683),
        d = n(100);
      var g = function () {
          var e = (0, r.g)().t;
          return (0, h.jsx)(f.V, {
            children: (0, h.jsx)(d.X2, {
              children: (0, h.jsxs)(p.P4, {
                colSpan: { base: 4, sm: 12 },
                paddingTop: "40px",
                children: [
                  (0, h.jsx)(l.Z, {
                    children: (0, h.jsx)(f.H, {
                      currentPage: e("legal.title"),
                    }),
                  }),
                  (0, h.jsx)(x, {}),
                ],
              }),
            }),
          });
        },
        m = n(4297);
      var b = function (e) {
        var t = e.source,
          n = (0, r.g)().t;
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(s.Z, {
              title: n("applicantPrivacyNotice.pageTitle"),
              path: "legal/applicant-privacy-notice",
            }),
            (0, h.jsx)(o.Z, {}),
            (0, h.jsx)(g, {}),
            (0, h.jsx)(a.Z, { children: (0, h.jsx)(c.Z, { source: t }) }),
            (0, h.jsx)(i.Z, {}),
            (0, h.jsx)(m.s, {}),
          ],
        });
      };
    },
    5689: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return P;
        },
      });
      var r = n(9499),
        o = (n(7294), n(8527)),
        i = n(1604),
        s = n(9042),
        a = n(3659),
        c = n(4730),
        l = n(5893),
        p = ["items", "emphasizeFirstItem"];
      function u(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var x = function (e) {
          var t = e.items,
            n = e.emphasizeFirstItem,
            r = void 0 !== n && n,
            o = (0, c.Z)(e, p);
          return (0, l.jsx)(
            i.m$.ul,
            h(
              h({ marginLeft: "none" }, o),
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
        f = n(5740);
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
      function y(e) {
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
        S = y(y({}, O), {}, { fontWeight: "bold", textTransform: "none" }),
        w = {
          List: x,
          Heading: function (e) {
            var t = e.children,
              n = e.as,
              r = void 0 === n ? "h2" : n,
              i = e.size,
              s = void 0 === i ? "medium" : i,
              a = e.isAnchor,
              c = void 0 !== a && a,
              p = e.variant,
              u = void 0 === p ? "subTitle" : p;
            if (!t) throw new Error("Children is required for Heading.");
            var h = {
              color: "white",
              lineHeight: "150%",
              letterSpacing: "normal",
              fontSize: m[s],
            };
            return (
              "subTitle" === u && (h = g(g({}, h), {}, { fontFamily: "body" })),
              (0, l.jsx)(o.X6, {
                as: r,
                sx: h,
                id: c ? (0, f.Bd)(t.toString()) : void 0,
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
            return (0, l.jsx)(s.Th, y({ sx: S }, e));
          },
          td: function (e) {
            return (0, l.jsx)(s.Td, y({ sx: O }, e));
          },
          Link: function (e) {
            return (0, l.jsx)(b.MI, y({}, e));
          },
        };
      function P(e) {
        var t = e.source;
        return (0, l.jsx)(o.xu, {
          sx: {
            "& > *": { marginBottom: { base: "22px", sm: "34px" } },
            "& > :last-child": { margin: 0 },
          },
          children: (0, l.jsx)(a.R, y(y({}, t), {}, { components: w })),
        });
      }
    },
    6267: function (e, t, n) {
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
      n.d(t, {
        MI: function () {
          return c;
        },
        sq: function () {
          return a;
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
        a = {
          color: "white",
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "normal",
          marginBottom: "34px",
        };
      function c(e) {
        var t = e.href,
          n = e.size,
          a = e.children;
        if (!a)
          throw new Error("Children prop is required for LegalInlineLink.");
        t || (t = "#".concat((0, o.Bd)(a.toString())));
        var c = t.startsWith("#") ? (0, o.V8)(t.substring(1)) : function () {};
        return (0, s.jsx)(r.rU, {
          isExternal: i(t),
          href: t,
          onClick: c,
          variant: "inline",
          colorScheme: "teal",
          fontFamily: "body",
          size: n,
          fontWeight: "normal",
          children: a,
        });
      }
    },
    5740: function (e, t, n) {
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
  },
]);
