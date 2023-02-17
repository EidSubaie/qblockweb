(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [270],
  {
    1739: function (n, e, a) {
      "use strict";
      a.d(e, {
        aG: function () {
          return f;
        },
        gN: function () {
          return d;
        },
      });
      var r = a(1604),
        t = a(9703),
        s = a(6450),
        i = a(7294);
      function l() {
        return (
          (l =
            Object.assign ||
            function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var a = arguments[e];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
              }
              return n;
            }),
          l.apply(this, arguments)
        );
      }
      function c(n, e) {
        if (null == n) return {};
        var a,
          r,
          t = {},
          s = Object.keys(n);
        for (r = 0; r < s.length; r++)
          (a = s[r]), e.indexOf(a) >= 0 || (t[a] = n[a]);
        return t;
      }
      var o = ["spacing"],
        u = ["isCurrentPage", "as", "className", "href"],
        m = [
          "isCurrentPage",
          "separator",
          "isLastChild",
          "spacing",
          "children",
          "className",
        ],
        g = ["children", "spacing", "separator", "className"],
        p = (0, r.Gp)(function (n, e) {
          var a = n.spacing,
            t = c(n, o),
            s = l({ mx: a }, (0, r.yK)().separator);
          return i.createElement(
            r.m$.span,
            l({ ref: e, role: "presentation" }, t, { __css: s })
          );
        });
      t.Ts && (p.displayName = "BreadcrumbSeparator");
      var h = (0, r.Gp)(function (n, e) {
        var a = n.isCurrentPage,
          s = n.as,
          o = n.className,
          m = n.href,
          g = c(n, u),
          p = (0, r.yK)(),
          h = l(
            {
              ref: e,
              as: s,
              className: (0, t.cx)("chakra-breadcrumb__link", o),
            },
            g
          );
        return a
          ? i.createElement(
              r.m$.span,
              l({ "aria-current": "page", __css: p.link }, h)
            )
          : i.createElement(r.m$.a, l({ __css: p.link, href: m }, h));
      });
      t.Ts && (h.displayName = "BreadcrumbLink");
      var d = (0, r.Gp)(function (n, e) {
        var a = n.isCurrentPage,
          o = n.separator,
          u = n.isLastChild,
          g = n.spacing,
          d = n.children,
          f = n.className,
          x = c(n, m),
          b = (0, s.WR)(d).map(function (n) {
            return n.type === h
              ? i.cloneElement(n, { isCurrentPage: a })
              : n.type === p
              ? i.cloneElement(n, {
                  spacing: g,
                  children: n.props.children || o,
                })
              : n;
          }),
          y = l(
            { display: "inline-flex", alignItems: "center" },
            (0, r.yK)().item
          ),
          v = (0, t.cx)("chakra-breadcrumb__list-item", f);
        return i.createElement(
          r.m$.li,
          l({ ref: e, className: v }, x, { __css: y }),
          b,
          !u && i.createElement(p, { spacing: g }, o)
        );
      });
      t.Ts && (d.displayName = "BreadcrumbItem");
      var f = (0, r.Gp)(function (n, e) {
        var a = (0, r.jC)("Breadcrumb", n),
          o = (0, r.Lr)(n),
          u = o.children,
          m = o.spacing,
          p = void 0 === m ? "0.5rem" : m,
          h = o.separator,
          d = void 0 === h ? "/" : h,
          f = o.className,
          x = c(o, g),
          b = (0, s.WR)(u),
          y = b.length,
          v = b.map(function (n, e) {
            return i.cloneElement(n, {
              separator: d,
              spacing: p,
              isLastChild: y === e + 1,
            });
          }),
          j = (0, t.cx)("chakra-breadcrumb", f);
        return i.createElement(
          r.m$.nav,
          l(
            {
              ref: e,
              "aria-label": "breadcrumb",
              className: j,
              __css: a.container,
            },
            x
          ),
          i.createElement(
            r.Fo,
            { value: a },
            i.createElement(
              r.m$.ol,
              { className: "chakra-breadcrumb__list" },
              v
            )
          )
        );
      });
      t.Ts && (f.displayName = "Breadcrumb");
    },
    7992: function (n, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return _;
          },
        });
      var r = a(1691),
        t = a(2165),
        s = (a(7294), a(937)),
        i = a(5683),
        l = a(8527),
        c = a(2778),
        o = a(5893);
      function u() {
        var n = (0, r.g)().t,
          e = { base: (0, c.y)(56, 80), sm: (0, c.v)(120, 150) };
        return (0, o.jsxs)(l.X6, {
          as: "h1",
          color: "black",
          children: [
            (0, o.jsx)(l.xv, {
              as: "span",
              position: "absolute",
              top: { base: "50%", sm: (0, c.v)(70, 0) },
              left: { base: (0, c.y)(24, 200), sm: (0, c.v)(0, 90) },
              transform: { base: "translateY(-140%)", sm: "none" },
              fontSize: e,
              lineHeight: "160%",
              letterSpacing: "normal",
              children: n("legal.hero.heading.0"),
            }),
            (0, o.jsx)(l.xv, {
              as: "span",
              position: "absolute",
              top: { base: "50%", sm: (0, c.v)(170, 115) },
              left: { base: (0, c.y)(172, 475), sm: (0, c.v)(280, 542) },
              transform: { base: "translateY(-80%)", sm: "none" },
              fontSize: e,
              lineHeight: "160%",
              letterSpacing: "normal",
              children: n("legal.hero.heading.1"),
            }),
            (0, o.jsx)(l.xv, {
              as: "span",
              position: "absolute",
              top: { base: "50%", sm: (0, c.v)(300, 258) },
              right: { base: (0, c.y)(29, 320), sm: "0px" },
              transform: { base: "translateY(-20%)", sm: "none" },
              fontSize: e,
              lineHeight: "160%",
              letterSpacing: "normal",
              children: n("legal.hero.heading.2"),
            }),
            (0, o.jsx)(l.xv, {
              as: "span",
              position: "absolute",
              top: { base: "50%", sm: (0, c.v)(420, 357) },
              left: { base: (0, c.y)(83, 340), sm: "51px" },
              transform: { base: "translateY(60%)", sm: "none" },
              fontSize: e,
              lineHeight: "160%",
              letterSpacing: "normal",
              children: n("legal.hero.heading.3"),
            }),
          ],
        });
      }
      var m = a(100);
      var g = function () {
          var n = (0, r.g)().t;
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)(i.V, {
              children: (0, o.jsx)(m.X2, {
                children: (0, o.jsxs)(l.P4, {
                  colSpan: { base: 4, sm: 12 },
                  paddingTop: "40px",
                  children: [
                    (0, o.jsx)(s.Z, {
                      children: (0, o.jsx)(i.H, {
                        currentPage: n("legal.title"),
                      }),
                    }),
                    (0, o.jsx)(u, {}),
                  ],
                }),
              }),
            }),
          });
        },
        p = a(8792),
        h = function (n) {
          var e = n.children;
          return (0, o.jsx)(l.X6, {
            as: "h2",
            fontSize: { base: "14px", sm: "20px" },
            lineHeight: "150%",
            letterSpacing: "normal",
            color: "white",
            marginBottom: { base: "32px", sm: "40px" },
            children: e,
          });
        },
        d = a(1664),
        f = a.n(d),
        x = function (n) {
          var e = n.href,
            a = n.children;
          return null !== e && void 0 !== e && e.startsWith("/")
            ? (0, o.jsx)(f(), {
                href: e,
                passHref: !0,
                children: (0, o.jsx)(l.rU, {
                  variant: "inline",
                  colorScheme: "teal",
                  fontFamily: "body",
                  fontSize: { base: "12px", sm: "16px" },
                  lineHeight: "150%",
                  fontWeight: "400",
                  letterSpacing: "normal",
                  display: "block",
                  width: "fit-content",
                  marginBottom: { base: "24px", sm: "32px" },
                  children: a,
                }),
              })
            : (0, o.jsx)(l.rU, {
                href: e,
                variant: "inline",
                colorScheme: "teal",
                fontFamily: "body",
                fontSize: { base: "12px", sm: "16px" },
                lineHeight: "150%",
                fontWeight: "400",
                letterSpacing: "normal",
                display: "block",
                width: "fit-content",
                marginBottom: { base: "24px", sm: "32px" },
                children: a,
              });
        },
        b = function (n) {
          var e = n.text;
          return (0, o.jsx)(l.X6, {
            as: "h3",
            fontSize: { base: "12px", sm: "16px" },
            lineHeight: "150%",
            letterSpacing: "normal",
            color: "white",
            marginBottom: { base: "24px", sm: "32px" },
            children: e,
          });
        },
        y = [
          {
            country: "us",
            languages: [
              { language: "english", linkCount: 6 },
              { language: "spanish", linkCount: 4 },
            ],
          },
          {
            country: "canada",
            languages: [
              { language: "english", linkCount: 2 },
              { language: "french", linkCount: 2 },
            ],
          },
          { country: "greatBritain", linkCount: 4 },
          { country: "france", linkCount: 3 },
          { country: "ireland", linkCount: 3 },
          { country: "australia", linkCount: 3 },
          { country: "japan", linkCount: 2 },
        ],
        v = function () {
          var n = (0, r.g)().t;
          return (0, o.jsx)(l.xu, {
            as: "main",
            bg: "black",
            paddingTop: { base: "43px", sm: "100px" },
            paddingBottom: { base: "36px", sm: "56px" },
            children: (0, o.jsx)(m.W2, {
              children: (0, o.jsx)(m.X2, {
                children: (0, o.jsx)(l.P4, {
                  colStart: { base: 1, sm: 4 },
                  colSpan: { base: 12, sm: 6 },
                  children: y.map(function (e) {
                    return null !== e && void 0 !== e && e.languages
                      ? (0, o.jsxs)(
                          "div",
                          {
                            children: [
                              (0, o.jsx)(h, {
                                children: n(
                                  "legal.main.".concat(e.country, ".heading")
                                ),
                              }),
                              e.languages.map(function (a) {
                                return (0, o.jsxs)(
                                  l.xu,
                                  {
                                    marginBottom: { base: "36px", sm: "56px" },
                                    children: [
                                      (0, o.jsx)(b, {
                                        text: n(
                                          "legal.main."
                                            .concat(e.country, ".")
                                            .concat(a.language, ".heading")
                                        ),
                                      }),
                                      Array.from({ length: a.linkCount }).map(
                                        function (r, t) {
                                          return (0, o.jsx)(
                                            x,
                                            {
                                              href: n(
                                                "legal.main."
                                                  .concat(e.country, ".")
                                                  .concat(a.language, ".links.")
                                                  .concat(t, ".url")
                                              ),
                                              children: n(
                                                "legal.main."
                                                  .concat(e.country, ".")
                                                  .concat(a.language, ".links.")
                                                  .concat(t, ".label")
                                              ),
                                            },
                                            ""
                                              .concat(e.country, "-")
                                              .concat(a.language, "-")
                                              .concat(t)
                                          );
                                        }
                                      ),
                                    ],
                                  },
                                  "".concat(e.country, "-").concat(a.language)
                                );
                              }),
                            ],
                          },
                          e.country
                        )
                      : (0, o.jsxs)(
                          "div",
                          {
                            children: [
                              (0, o.jsx)(h, {
                                children: n(
                                  "legal.main.".concat(e.country, ".heading")
                                ),
                              }),
                              (0, o.jsx)(l.xu, {
                                marginBottom: { base: "36px", sm: "56px" },
                                children: Array.from({
                                  length: e.linkCount,
                                }).map(function (a, r) {
                                  return (0,
                                  o.jsx)(x, { href: n("legal.main.".concat(e.country, ".links.").concat(r, ".url")), children: n("legal.main.".concat(e.country, ".links.").concat(r, ".label")) }, "".concat(e.country, "-").concat(r));
                                }),
                              }),
                            ],
                          },
                          e.country
                        );
                  }),
                }),
              }),
            }),
          });
        },
        j = a(6311),
        k = a(4297);
      function _() {
        var n = (0, r.g)().t;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(p.Z, { title: n("legal.pageTitle"), path: "legal" }),
            (0, o.jsx)(t.Z, {}),
            (0, o.jsx)(g, {}),
            (0, o.jsx)(v, {}),
            (0, o.jsx)(j.Z, {}),
            (0, o.jsx)(k.s, {}),
          ],
        });
      }
    },
    4974: function (n, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/legal",
        function () {
          return a(7992);
        },
      ]);
    },
    4730: function (n, e, a) {
      "use strict";
      function r(n, e) {
        if (null == n) return {};
        var a,
          r,
          t = (function (n, e) {
            if (null == n) return {};
            var a,
              r,
              t = {},
              s = Object.keys(n);
            for (r = 0; r < s.length; r++)
              (a = s[r]), e.indexOf(a) >= 0 || (t[a] = n[a]);
            return t;
          })(n, e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(n);
          for (r = 0; r < s.length; r++)
            (a = s[r]),
              e.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(n, a) &&
                  (t[a] = n[a]));
        }
        return t;
      }
      a.d(e, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (n) {
    n.O(0, [737, 35, 692, 774, 888, 179], function () {
      return (e = 4974), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
