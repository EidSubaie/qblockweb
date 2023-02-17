(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [669],
  {
    1739: function (t, e, n) {
      "use strict";
      n.d(e, {
        aG: function () {
          return h;
        },
        gN: function () {
          return m;
        },
      });
      var r = n(1604),
        o = n(9703),
        i = n(6450),
        a = n(7294);
      function s() {
        return (
          (s =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          s.apply(this, arguments)
        );
      }
      function u(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      var l = ["spacing"],
        c = ["isCurrentPage", "as", "className", "href"],
        d = [
          "isCurrentPage",
          "separator",
          "isLastChild",
          "spacing",
          "children",
          "className",
        ],
        f = ["children", "spacing", "separator", "className"],
        v = (0, r.Gp)(function (t, e) {
          var n = t.spacing,
            o = u(t, l),
            i = s({ mx: n }, (0, r.yK)().separator);
          return a.createElement(
            r.m$.span,
            s({ ref: e, role: "presentation" }, o, { __css: i })
          );
        });
      o.Ts && (v.displayName = "BreadcrumbSeparator");
      var p = (0, r.Gp)(function (t, e) {
        var n = t.isCurrentPage,
          i = t.as,
          l = t.className,
          d = t.href,
          f = u(t, c),
          v = (0, r.yK)(),
          p = s(
            {
              ref: e,
              as: i,
              className: (0, o.cx)("chakra-breadcrumb__link", l),
            },
            f
          );
        return n
          ? a.createElement(
              r.m$.span,
              s({ "aria-current": "page", __css: v.link }, p)
            )
          : a.createElement(r.m$.a, s({ __css: v.link, href: d }, p));
      });
      o.Ts && (p.displayName = "BreadcrumbLink");
      var m = (0, r.Gp)(function (t, e) {
        var n = t.isCurrentPage,
          l = t.separator,
          c = t.isLastChild,
          f = t.spacing,
          m = t.children,
          h = t.className,
          y = u(t, d),
          g = (0, i.WR)(m).map(function (t) {
            return t.type === p
              ? a.cloneElement(t, { isCurrentPage: n })
              : t.type === v
              ? a.cloneElement(t, {
                  spacing: f,
                  children: t.props.children || l,
                })
              : t;
          }),
          x = s(
            { display: "inline-flex", alignItems: "center" },
            (0, r.yK)().item
          ),
          b = (0, o.cx)("chakra-breadcrumb__list-item", h);
        return a.createElement(
          r.m$.li,
          s({ ref: e, className: b }, y, { __css: x }),
          g,
          !c && a.createElement(v, { spacing: f }, l)
        );
      });
      o.Ts && (m.displayName = "BreadcrumbItem");
      var h = (0, r.Gp)(function (t, e) {
        var n = (0, r.jC)("Breadcrumb", t),
          l = (0, r.Lr)(t),
          c = l.children,
          d = l.spacing,
          v = void 0 === d ? "0.5rem" : d,
          p = l.separator,
          m = void 0 === p ? "/" : p,
          h = l.className,
          y = u(l, f),
          g = (0, i.WR)(c),
          x = g.length,
          b = g.map(function (t, e) {
            return a.cloneElement(t, {
              separator: m,
              spacing: v,
              isLastChild: x === e + 1,
            });
          }),
          E = (0, o.cx)("chakra-breadcrumb", h);
        return a.createElement(
          r.m$.nav,
          s(
            {
              ref: e,
              "aria-label": "breadcrumb",
              className: E,
              __css: n.container,
            },
            y
          ),
          a.createElement(
            r.Fo,
            { value: n },
            a.createElement(
              r.m$.ol,
              { className: "chakra-breadcrumb__list" },
              b
            )
          )
        );
      });
      o.Ts && (h.displayName = "Breadcrumb");
    },
    3716: function (t, e, n) {
      "use strict";
      n.d(e, {
        u_: function () {
          return Gl;
        },
        fe: function () {
          return $l;
        },
        ol: function () {
          return Kl;
        },
        hz: function () {
          return Hl;
        },
        xB: function () {
          return zl;
        },
        ZA: function () {
          return Yl;
        },
      });
      var r = n(894),
        o = n(1604),
        i = n(9703),
        a = n(7294);
      function s() {
        return (
          (s =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          s.apply(this, arguments)
        );
      }
      var u = ["children", "isDisabled", "__css"],
        l = function (t) {
          return a.createElement(
            r.JO,
            s({ focusable: "false", "aria-hidden": !0 }, t),
            a.createElement("path", {
              fill: "currentColor",
              d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
            })
          );
        },
        c = (0, o.Gp)(function (t, e) {
          var n = (0, o.mq)("CloseButton", t),
            r = (0, o.Lr)(t),
            i = r.children,
            c = r.isDisabled,
            d = r.__css,
            f = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = {},
                i = Object.keys(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
              return o;
            })(r, u);
          return a.createElement(
            o.m$.button,
            s(
              {
                type: "button",
                "aria-label": "Close",
                ref: e,
                disabled: c,
                __css: s(
                  {},
                  {
                    outline: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  },
                  n,
                  d
                ),
              },
              f
            ),
            i || a.createElement(l, { width: "1em", height: "1em" })
          );
        });
      i.Ts && (c.displayName = "CloseButton");
      var d = n(7462),
        f = "data-focus-lock",
        v = "data-focus-lock-disabled";
      function p(t, e) {
        return (function (t, e) {
          var n = (0, a.useState)(function () {
            return {
              value: t,
              callback: e,
              facade: {
                get current() {
                  return n.value;
                },
                set current(t) {
                  var e = n.value;
                  e !== t && ((n.value = t), n.callback(t, e));
                },
              },
            };
          })[0];
          return (n.callback = e), n.facade;
        })(e || null, function (e) {
          return t.forEach(function (t) {
            return (function (t, e) {
              return "function" === typeof t ? t(e) : t && (t.current = e), t;
            })(t, e);
          });
        });
      }
      var m = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px",
        },
        h = function (t) {
          var e = t.children;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement("div", {
              key: "guard-first",
              "data-focus-guard": !0,
              "data-focus-auto-guard": !0,
              style: m,
            }),
            e,
            e &&
              a.createElement("div", {
                key: "guard-last",
                "data-focus-guard": !0,
                "data-focus-auto-guard": !0,
                style: m,
              })
          );
        };
      (h.propTypes = {}), (h.defaultProps = { children: null });
      var y = function (t, e) {
        return (
          (y =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          y(t, e)
        );
      };
      function g(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        y(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var x = function () {
        return (
          (x =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }),
          x.apply(this, arguments)
        );
      };
      function b(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
            e.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
              (n[r[o]] = t[r[o]]);
        }
        return n;
      }
      Object.create;
      function E(t) {
        var e = "function" === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function w(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          o,
          i = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (s) {
          o = { error: s };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function P(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++)
            (!r && o in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
      function C(t) {
        return t;
      }
      function S(t, e) {
        void 0 === e && (e = C);
        var n = [],
          r = !1,
          o = {
            read: function () {
              if (r)
                throw new Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return n.length ? n[n.length - 1] : t;
            },
            useMedium: function (t) {
              var o = e(t, r);
              return (
                n.push(o),
                function () {
                  n = n.filter(function (t) {
                    return t !== o;
                  });
                }
              );
            },
            assignSyncMedium: function (t) {
              for (r = !0; n.length; ) {
                var e = n;
                (n = []), e.forEach(t);
              }
              n = {
                push: function (e) {
                  return t(e);
                },
                filter: function () {
                  return n;
                },
              };
            },
            assignMedium: function (t) {
              r = !0;
              var e = [];
              if (n.length) {
                var o = n;
                (n = []), o.forEach(t), (e = n);
              }
              var i = function () {
                  var n = e;
                  (e = []), n.forEach(t);
                },
                a = function () {
                  return Promise.resolve().then(i);
                };
              a(),
                (n = {
                  push: function (t) {
                    e.push(t), a();
                  },
                  filter: function (t) {
                    return (e = e.filter(t)), n;
                  },
                });
            },
          };
        return o;
      }
      function T(t, e) {
        return void 0 === e && (e = C), S(t, e);
      }
      function A(t) {
        void 0 === t && (t = {});
        var e = S(null);
        return (e.options = x({ async: !0, ssr: !1 }, t)), e;
      }
      var k = T({}, function (t) {
          return { target: t.target, currentTarget: t.currentTarget };
        }),
        O = T(),
        M = T(),
        R = A({ async: !0 }),
        V = [],
        N = a.forwardRef(function (t, e) {
          var n,
            r = a.useState(),
            o = r[0],
            i = r[1],
            s = a.useRef(),
            u = a.useRef(!1),
            l = a.useRef(null),
            c = t.children,
            h = t.disabled,
            y = t.noFocusGuards,
            g = t.persistentFocus,
            x = t.crossFrame,
            b = t.autoFocus,
            E = (t.allowTextSelection, t.group),
            w = t.className,
            P = t.whiteList,
            C = t.shards,
            S = void 0 === C ? V : C,
            T = t.as,
            A = void 0 === T ? "div" : T,
            M = t.lockProps,
            N = void 0 === M ? {} : M,
            L = t.sideCar,
            F = t.returnFocus,
            D = t.onActivation,
            j = t.onDeactivation,
            I = a.useState({})[0],
            B = a.useCallback(
              function () {
                (l.current = l.current || (document && document.activeElement)),
                  s.current && D && D(s.current),
                  (u.current = !0);
              },
              [D]
            ),
            _ = a.useCallback(
              function () {
                (u.current = !1), j && j(s.current);
              },
              [j]
            ),
            U = a.useCallback(
              function (t) {
                var e = l.current;
                if (Boolean(F) && e && e.focus) {
                  var n = "object" === typeof F ? F : void 0;
                  (l.current = null),
                    t
                      ? Promise.resolve().then(function () {
                          return e.focus(n);
                        })
                      : e.focus(n);
                }
              },
              [F]
            ),
            G = a.useCallback(function (t) {
              u.current && k.useMedium(t);
            }, []),
            W = O.useMedium,
            H = a.useCallback(function (t) {
              s.current !== t && ((s.current = t), i(t));
            }, []);
          var X = (0, d.Z)((((n = {})[v] = h && "disabled"), (n[f] = E), n), N),
            Y = !0 !== y,
            z = Y && "tail" !== y,
            $ = p([e, H]);
          return a.createElement(
            a.Fragment,
            null,
            Y && [
              a.createElement("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                tabIndex: h ? -1 : 0,
                style: m,
              }),
              a.createElement("div", {
                key: "guard-nearest",
                "data-focus-guard": !0,
                tabIndex: h ? -1 : 1,
                style: m,
              }),
            ],
            !h &&
              a.createElement(L, {
                id: I,
                sideCar: R,
                observed: o,
                disabled: h,
                persistentFocus: g,
                crossFrame: x,
                autoFocus: b,
                whiteList: P,
                shards: S,
                onActivation: B,
                onDeactivation: _,
                returnFocus: U,
              }),
            a.createElement(
              A,
              (0, d.Z)({ ref: $ }, X, { className: w, onBlur: W, onFocus: G }),
              c
            ),
            z &&
              a.createElement("div", {
                "data-focus-guard": !0,
                tabIndex: h ? -1 : 0,
                style: m,
              })
          );
        });
      (N.propTypes = {}),
        (N.defaultProps = {
          children: void 0,
          disabled: !1,
          returnFocus: !1,
          noFocusGuards: !1,
          autoFocus: !0,
          persistentFocus: !1,
          crossFrame: !0,
          allowTextSelection: void 0,
          group: void 0,
          className: void 0,
          whiteList: void 0,
          shards: void 0,
          as: "div",
          lockProps: {},
          onActivation: void 0,
          onDeactivation: void 0,
        });
      var L = N;
      function F(t, e) {
        return (
          (F =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          F(t, e)
        );
      }
      var D = n(4942);
      var j = function (t, e) {
          return function (n) {
            var r,
              o = [];
            function i() {
              (r = t(
                o.map(function (t) {
                  return t.props;
                })
              )),
                e(r);
            }
            var s = (function (t) {
              var e, s;
              function u() {
                return t.apply(this, arguments) || this;
              }
              (s = t),
                ((e = u).prototype = Object.create(s.prototype)),
                (e.prototype.constructor = e),
                F(e, s),
                (u.peek = function () {
                  return r;
                });
              var l = u.prototype;
              return (
                (l.componentDidMount = function () {
                  o.push(this), i();
                }),
                (l.componentDidUpdate = function () {
                  i();
                }),
                (l.componentWillUnmount = function () {
                  var t = o.indexOf(this);
                  o.splice(t, 1), i();
                }),
                (l.render = function () {
                  return a.createElement(n, this.props);
                }),
                u
              );
            })(a.PureComponent);
            return (
              (0, D.Z)(
                s,
                "displayName",
                "SideEffect(" +
                  (function (t) {
                    return t.displayName || t.name || "Component";
                  })(n) +
                  ")"
              ),
              s
            );
          };
        },
        I = function (t) {
          return "INPUT" === t.tagName && "radio" === t.type;
        },
        B = function (t, e) {
          return I(t) && t.name
            ? (function (t, e) {
                return (
                  e
                    .filter(I)
                    .filter(function (e) {
                      return e.name === t.name;
                    })
                    .filter(function (t) {
                      return t.checked;
                    })[0] || t
                );
              })(t, e)
            : t;
        },
        _ = function (t) {
          return t[0] && t.length > 1 ? B(t[0], t) : t[0];
        },
        U = function (t, e) {
          return t.length > 1 ? t.indexOf(B(t[e], t)) : e;
        },
        G = function (t, e) {
          return (
            !t ||
            t === document ||
            (t && t.nodeType === Node.DOCUMENT_NODE) ||
            (!(function (t) {
              if (t.nodeType !== Node.ELEMENT_NODE) return !1;
              var e = window.getComputedStyle(t, null);
              return (
                !(!e || !e.getPropertyValue) &&
                ("none" === e.getPropertyValue("display") ||
                  "hidden" === e.getPropertyValue("visibility"))
              );
            })(t) &&
              e(
                t.parentNode &&
                  t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                  ? t.parentNode.host
                  : t.parentNode
              ))
          );
        },
        W = function (t, e) {
          var n = t.get(e);
          if (void 0 !== n) return n;
          var r = G(e, W.bind(void 0, t));
          return t.set(e, r), r;
        },
        H = function (t) {
          return Boolean(t && t.dataset && t.dataset.focusGuard);
        },
        X = function (t) {
          return !H(t);
        },
        Y = function (t) {
          return Boolean(t);
        },
        z = "NEW_FOCUS",
        $ = function (t, e, n, r) {
          var o = t.length,
            i = t[0],
            a = t[o - 1],
            s = H(n);
          if (!(t.indexOf(n) >= 0)) {
            var u = e.indexOf(n),
              l = r ? e.indexOf(r) : u,
              c = r ? t.indexOf(r) : -1,
              d = u - l,
              f = e.indexOf(i),
              v = e.indexOf(a),
              p = (function (t) {
                var e = new Set();
                return (
                  t.forEach(function (n) {
                    return e.add(B(n, t));
                  }),
                  t.filter(function (t) {
                    return e.has(t);
                  })
                );
              })(e),
              m = p.indexOf(n) - (r ? p.indexOf(r) : u),
              h = U(t, 0),
              y = U(t, o - 1);
            return -1 === u || -1 === c
              ? z
              : !d && c >= 0
              ? c
              : u <= f && s && Math.abs(d) > 1
              ? y
              : u >= v && s && Math.abs(d) > 1
              ? h
              : d && Math.abs(m) > 1
              ? c
              : u <= f
              ? y
              : u > v
              ? h
              : d
              ? Math.abs(d) > 1
                ? c
                : (o + c + d) % o
              : void 0;
          }
        },
        Z = function (t) {
          for (var e = Array(t.length), n = 0; n < t.length; ++n) e[n] = t[n];
          return e;
        },
        K = function (t) {
          return Array.isArray(t) ? t : [t];
        },
        q = function (t) {
          return t.parentNode ? q(t.parentNode) : t;
        },
        J = function (t) {
          return K(t)
            .filter(Boolean)
            .reduce(function (t, e) {
              var n = e.getAttribute(f);
              return (
                t.push.apply(
                  t,
                  n
                    ? (function (t) {
                        for (
                          var e = new Set(), n = t.length, r = 0;
                          r < n;
                          r += 1
                        )
                          for (var o = r + 1; o < n; o += 1) {
                            var i = t[r].compareDocumentPosition(t[o]);
                            (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 &&
                              e.add(o),
                              (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 &&
                                e.add(r);
                          }
                        return t.filter(function (t, n) {
                          return !e.has(n);
                        });
                      })(
                        Z(
                          q(e).querySelectorAll(
                            '[data-focus-lock="' +
                              n +
                              '"]:not([' +
                              v +
                              '="disabled"])'
                          )
                        )
                      )
                    : [e]
                ),
                t
              );
            }, []);
        },
        Q = function (t, e) {
          var n = t.tabIndex - e.tabIndex,
            r = t.index - e.index;
          if (n) {
            if (!t.tabIndex) return 1;
            if (!e.tabIndex) return -1;
          }
          return n || r;
        },
        tt = function (t, e, n) {
          return Z(t)
            .map(function (t, e) {
              return {
                node: t,
                index: e,
                tabIndex:
                  n && -1 === t.tabIndex
                    ? (t.dataset || {}).focusGuard
                      ? 0
                      : -1
                    : t.tabIndex,
              };
            })
            .filter(function (t) {
              return !e || t.tabIndex >= 0;
            })
            .sort(Q);
        },
        et = [
          "button:enabled",
          "select:enabled",
          "textarea:enabled",
          "input:enabled",
          "a[href]",
          "area[href]",
          "summary",
          "iframe",
          "object",
          "embed",
          "audio[controls]",
          "video[controls]",
          "[tabindex]",
          "[contenteditable]",
          "[autofocus]",
        ].join(","),
        nt = et + ", [data-focus-guard]",
        rt = function (t, e) {
          return t.reduce(function (t, n) {
            return t.concat(
              Z(n.querySelectorAll(e ? nt : et)),
              n.parentNode
                ? Z(n.parentNode.querySelectorAll(et)).filter(function (t) {
                    return t === n;
                  })
                : []
            );
          }, []);
        },
        ot = function (t, e) {
          return Z(t)
            .filter(function (t) {
              return W(e, t);
            })
            .filter(function (t) {
              return (function (t) {
                return !(
                  ("INPUT" === t.tagName || "BUTTON" === t.tagName) &&
                  ("hidden" === t.type || t.disabled)
                );
              })(t);
            });
        },
        it = function (t, e, n) {
          return tt(ot(rt(t, n), e), !0, n);
        },
        at = function (t, e) {
          return tt(ot(rt(t), e), !1);
        },
        st = function (t, e) {
          return ot(
            (function (t) {
              var e = t.querySelectorAll("[data-autofocus-inside]");
              return Z(e)
                .map(function (t) {
                  return rt([t]);
                })
                .reduce(function (t, e) {
                  return t.concat(e);
                }, []);
            })(t),
            e
          );
        },
        ut = function (t, e) {
          return (
            void 0 === e && (e = []),
            e.push(t),
            t.parentNode && ut(t.parentNode, e),
            e
          );
        },
        lt = function (t, e) {
          for (var n = ut(t), r = ut(e), o = 0; o < n.length; o += 1) {
            var i = n[o];
            if (r.indexOf(i) >= 0) return i;
          }
          return !1;
        },
        ct = function (t, e, n) {
          var r = K(t),
            o = K(e),
            i = r[0],
            a = !1;
          return (
            o.filter(Boolean).forEach(function (t) {
              (a = lt(a || t, t) || a),
                n.filter(Boolean).forEach(function (t) {
                  var e = lt(i, t);
                  e && (a = !a || e.contains(a) ? e : lt(e, a));
                });
            }),
            a
          );
        },
        dt = function (t, e) {
          var n = document && document.activeElement,
            r = J(t).filter(X),
            o = ct(n || t, t, r),
            i = new Map(),
            a = at(r, i),
            s = it(r, i).filter(function (t) {
              var e = t.node;
              return X(e);
            });
          if (s[0] || (s = a)[0]) {
            var u,
              l = at([o], i).map(function (t) {
                return t.node;
              }),
              c = (function (t, e) {
                var n = new Map();
                return (
                  e.forEach(function (t) {
                    return n.set(t.node, t);
                  }),
                  t
                    .map(function (t) {
                      return n.get(t);
                    })
                    .filter(Y)
                );
              })(l, s),
              d = c.map(function (t) {
                return t.node;
              }),
              f = $(d, l, n, e);
            if (f === z) {
              var v = a
                .map(function (t) {
                  return t.node;
                })
                .filter(
                  ((u = (function (t, e) {
                    return t.reduce(function (t, n) {
                      return t.concat(st(n, e));
                    }, []);
                  })(r, i)),
                  function (t) {
                    return (
                      t.autofocus ||
                      (t.dataset && !!t.dataset.autofocus) ||
                      u.indexOf(t) >= 0
                    );
                  })
                );
              return { node: v && v.length ? _(v) : _(d) };
            }
            return void 0 === f ? f : c[f];
          }
        },
        ft = 0,
        vt = !1,
        pt = function (t, e) {
          var n,
            r = dt(t, e);
          if (!vt && r) {
            if (ft > 2)
              return (
                console.error(
                  "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
                ),
                (vt = !0),
                void setTimeout(function () {
                  vt = !1;
                }, 1)
              );
            ft++,
              (n = r.node).focus(),
              "contentWindow" in n &&
                n.contentWindow &&
                n.contentWindow.focus(),
              ft--;
          }
        },
        mt = function (t) {
          return Boolean(
            Z(t.querySelectorAll("iframe")).some(function (t) {
              return t === document.activeElement;
            })
          );
        },
        ht = function (t) {
          var e = document && document.activeElement;
          return (
            !(!e || (e.dataset && e.dataset.focusGuard)) &&
            J(t).reduce(function (t, n) {
              return t || n.contains(e) || mt(n);
            }, !1)
          );
        };
      function yt(t) {
        var e = window.setImmediate;
        "undefined" !== typeof e ? e(t) : setTimeout(t, 1);
      }
      var gt = function () {
          return (
            (document && document.activeElement === document.body) ||
            (document &&
              Z(document.querySelectorAll("[data-no-focus-lock]")).some(
                function (t) {
                  return t.contains(document.activeElement);
                }
              ))
          );
        },
        xt = null,
        bt = null,
        Et = null,
        wt = !1,
        Pt = function () {
          return !0;
        };
      function Ct(t, e, n, r) {
        var o = null,
          i = t;
        do {
          var a = r[i];
          if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
          else {
            if (!a.lockItem) break;
            if (i !== t) return;
            o = null;
          }
        } while ((i += n) !== e);
        o && (o.node.tabIndex = 0);
      }
      var St = function (t) {
          return t && "current" in t ? t.current : t;
        },
        Tt = function () {
          var t,
            e = !1;
          if (xt) {
            var n = xt,
              r = n.observed,
              o = n.persistentFocus,
              i = n.autoFocus,
              a = n.shards,
              s = n.crossFrame,
              u = r || (Et && Et.portaledElement),
              l = document && document.activeElement;
            if (u) {
              var c = [u].concat(a.map(St).filter(Boolean));
              if (
                ((l &&
                  !(function (t) {
                    return (xt.whiteList || Pt)(t);
                  })(l)) ||
                  ((o ||
                    (s ? Boolean(wt) : "meanwhile" === wt) ||
                    !gt() ||
                    (!bt && i)) &&
                    (!u ||
                      ht(c) ||
                      ((t = l), Et && Et.portaledElement === t) ||
                      (document && !bt && l && !i
                        ? (l.blur && l.blur(), document.body.focus())
                        : ((e = pt(c, bt)), (Et = {}))),
                    (wt = !1),
                    (bt = document && document.activeElement))),
                document)
              ) {
                var d = document && document.activeElement,
                  f = (function (t) {
                    var e = J(t).filter(X),
                      n = ct(t, t, e),
                      r = new Map(),
                      o = it([n], r, !0),
                      i = it(e, r)
                        .filter(function (t) {
                          var e = t.node;
                          return X(e);
                        })
                        .map(function (t) {
                          return t.node;
                        });
                    return o.map(function (t) {
                      var e = t.node;
                      return {
                        node: e,
                        index: t.index,
                        lockItem: i.indexOf(e) >= 0,
                        guard: H(e),
                      };
                    });
                  })(c),
                  v = f
                    .map(function (t) {
                      return t.node;
                    })
                    .indexOf(d);
                v > -1 &&
                  (f
                    .filter(function (t) {
                      var e = t.guard,
                        n = t.node;
                      return e && n.dataset.focusAutoGuard;
                    })
                    .forEach(function (t) {
                      return t.node.removeAttribute("tabIndex");
                    }),
                  Ct(v, f.length, 1, f),
                  Ct(v, -1, -1, f));
              }
            }
          }
          return e;
        },
        At = function (t) {
          Tt() && t && (t.stopPropagation(), t.preventDefault());
        },
        kt = function () {
          return yt(Tt);
        },
        Ot = function (t) {
          var e = t.target,
            n = t.currentTarget;
          n.contains(e) || (Et = { observerNode: n, portaledElement: e });
        },
        Mt = function () {
          (wt = "just"),
            setTimeout(function () {
              wt = "meanwhile";
            }, 0);
        };
      k.assignSyncMedium(Ot),
        O.assignMedium(kt),
        M.assignMedium(function (t) {
          return t({ moveFocusInside: pt, focusInside: ht });
        });
      var Rt = j(
          function (t) {
            return t.filter(function (t) {
              return !t.disabled;
            });
          },
          function (t) {
            var e = t.slice(-1)[0];
            e &&
              !xt &&
              (document.addEventListener("focusin", At, !0),
              document.addEventListener("focusout", kt),
              window.addEventListener("blur", Mt));
            var n = xt,
              r = n && e && e.id === n.id;
            (xt = e),
              n &&
                !r &&
                (n.onDeactivation(),
                t.filter(function (t) {
                  return t.id === n.id;
                }).length || n.returnFocus(!e)),
              e
                ? ((bt = null),
                  (r && n.observed === e.observed) || e.onActivation(),
                  Tt(),
                  yt(Tt))
                : (document.removeEventListener("focusin", At, !0),
                  document.removeEventListener("focusout", kt),
                  window.removeEventListener("blur", Mt),
                  (bt = null));
          }
        )(function () {
          return null;
        }),
        Vt = a.forwardRef(function (t, e) {
          return a.createElement(L, (0, d.Z)({ sideCar: Rt, ref: e }, t));
        }),
        Nt = L.propTypes || {};
      Nt.sideCar,
        (function (t, e) {
          if (null == t) return {};
          var n,
            r,
            o = {},
            i = Object.keys(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        })(Nt, ["sideCar"]);
      Vt.propTypes = {};
      var Lt = Vt,
        Ft = function (t) {
          var e = t.initialFocusRef,
            n = t.finalFocusRef,
            r = t.contentRef,
            o = t.restoreFocus,
            s = t.children,
            u = t.isDisabled,
            l = t.autoFocus,
            c = t.persistentFocus,
            d = t.lockFocusAcrossFrames,
            f = a.useCallback(
              function () {
                if (null != e && e.current) e.current.focus();
                else if (null != r && r.current) {
                  0 === (0, i.t5)(r.current).length &&
                    (0, i.T_)(r.current, { nextTick: !0 });
                }
              },
              [e, r]
            ),
            v = a.useCallback(
              function () {
                var t;
                null == n || null == (t = n.current) || t.focus();
              },
              [n]
            ),
            p = o && !n;
          return a.createElement(
            Lt,
            {
              crossFrame: d,
              persistentFocus: c,
              autoFocus: l,
              disabled: u,
              onActivation: f,
              onDeactivation: v,
              returnFocus: p,
            },
            s
          );
        };
      i.Ts && (Ft.displayName = "FocusLock");
      var Dt = n(6871),
        jt = n(8554),
        It = n.n(jt);
      const Bt = (1 / 60) * 1e3,
        _t =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        Ut =
          "undefined" !== typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(_t()), Bt);
      let Gt = !0,
        Wt = !1,
        Ht = !1;
      const Xt = { delta: 0, timestamp: 0 },
        Yt = ["read", "update", "preRender", "render", "postRender"],
        zt = Yt.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                o = !1,
                i = !1;
              const a = new WeakSet(),
                s = {
                  schedule: (t, i = !1, s = !1) => {
                    const u = s && o,
                      l = u ? e : n;
                    return (
                      i && a.add(t),
                      -1 === l.indexOf(t) &&
                        (l.push(t), u && o && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    const e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: (u) => {
                    if (o) i = !0;
                    else {
                      if (
                        ((o = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n];
                          r(u), a.has(r) && (s.schedule(r), t());
                        }
                      (o = !1), i && ((i = !1), s.process(u));
                    }
                  },
                };
              return s;
            })(() => (Wt = !0))),
            t
          ),
          {}
        ),
        $t = Yt.reduce((t, e) => {
          const n = zt[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (Wt || Qt(), n.schedule(t, e, r))), t
          );
        }, {}),
        Zt = Yt.reduce((t, e) => ((t[e] = zt[e].cancel), t), {}),
        Kt = Yt.reduce((t, e) => ((t[e] = () => zt[e].process(Xt)), t), {}),
        qt = (t) => zt[t].process(Xt),
        Jt = (t) => {
          (Wt = !1),
            (Xt.delta = Gt ? Bt : Math.max(Math.min(t - Xt.timestamp, 40), 1)),
            (Xt.timestamp = t),
            (Ht = !0),
            Yt.forEach(qt),
            (Ht = !1),
            Wt && ((Gt = !1), Ut(Jt));
        },
        Qt = () => {
          (Wt = !0), (Gt = !0), Ht || Ut(Jt);
        },
        te = () => Xt;
      var ee = $t,
        ne = "undefined" !== typeof document,
        re = ne ? a.useLayoutEffect : a.useEffect;
      function oe() {
        var t = (0, a.useRef)(!1);
        return (
          re(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }, []),
          t
        );
      }
      var ie = (0, a.createContext)(null);
      function ae(t) {
        var e = (0, a.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      var se = 0,
        ue = function () {
          return se++;
        },
        le = function () {
          return ae(ue);
        },
        ce = function (t) {
          var e = t.children,
            n = t.initial,
            r = t.isPresent,
            o = t.onExitComplete,
            i = t.custom,
            s = t.presenceAffectsLayout,
            u = ae(de),
            l = le(),
            c = (0, a.useMemo)(
              function () {
                return {
                  id: l,
                  initial: n,
                  isPresent: r,
                  custom: i,
                  onExitComplete: function (t) {
                    var e, n;
                    u.set(t, !0);
                    try {
                      for (
                        var r = E(u.values()), i = r.next();
                        !i.done;
                        i = r.next()
                      ) {
                        if (!i.value) return;
                      }
                    } catch (a) {
                      e = { error: a };
                    } finally {
                      try {
                        i && !i.done && (n = r.return) && n.call(r);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                    null === o || void 0 === o || o();
                  },
                  register: function (t) {
                    return (
                      u.set(t, !1),
                      function () {
                        return u.delete(t);
                      }
                    );
                  },
                };
              },
              s ? void 0 : [r]
            );
          return (
            (0, a.useMemo)(
              function () {
                u.forEach(function (t, e) {
                  return u.set(e, !1);
                });
              },
              [r]
            ),
            a.useEffect(
              function () {
                !r && !u.size && (null === o || void 0 === o || o());
              },
              [r]
            ),
            a.createElement(ie.Provider, { value: c }, e)
          );
        };
      function de() {
        return new Map();
      }
      var fe = (0, a.createContext)({});
      function ve(t) {
        return (0, a.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var pe = function (t) {
        return t.key || "";
      };
      var me = function (t) {
          var e = t.children,
            n = t.custom,
            r = t.initial,
            o = void 0 === r || r,
            i = t.onExitComplete,
            s = t.exitBeforeEnter,
            u = t.presenceAffectsLayout,
            l = void 0 === u || u,
            c = w(
              (function () {
                var t = oe(),
                  e = w((0, a.useState)(0), 2),
                  n = e[0],
                  r = e[1],
                  o = (0, a.useCallback)(
                    function () {
                      t.current && r(n + 1);
                    },
                    [n]
                  );
                return [
                  (0, a.useCallback)(
                    function () {
                      return ee.postRender(o);
                    },
                    [o]
                  ),
                  n,
                ];
              })(),
              1
            ),
            d = c[0],
            f = (0, a.useContext)(fe).forceRender;
          f && (d = f);
          var v = oe(),
            p = (function (t) {
              var e = [];
              return (
                a.Children.forEach(t, function (t) {
                  (0, a.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(e),
            m = p,
            h = new Set(),
            y = (0, a.useRef)(m),
            g = (0, a.useRef)(new Map()).current,
            x = (0, a.useRef)(!0);
          if (
            (re(function () {
              (x.current = !1),
                (function (t, e) {
                  t.forEach(function (t) {
                    var n = pe(t);
                    e.set(n, t);
                  });
                })(p, g),
                (y.current = m);
            }),
            ve(function () {
              (x.current = !0), g.clear(), h.clear();
            }),
            x.current)
          )
            return a.createElement(
              a.Fragment,
              null,
              m.map(function (t) {
                return a.createElement(
                  ce,
                  {
                    key: pe(t),
                    isPresent: !0,
                    initial: !!o && void 0,
                    presenceAffectsLayout: l,
                  },
                  t
                );
              })
            );
          m = P([], w(m), !1);
          for (
            var b = y.current.map(pe), E = p.map(pe), C = b.length, S = 0;
            S < C;
            S++
          ) {
            var T = b[S];
            -1 === E.indexOf(T) && h.add(T);
          }
          return (
            s && h.size && (m = []),
            h.forEach(function (t) {
              if (-1 === E.indexOf(t)) {
                var e = g.get(t);
                if (e) {
                  var r = b.indexOf(t);
                  m.splice(
                    r,
                    0,
                    a.createElement(
                      ce,
                      {
                        key: pe(e),
                        isPresent: !1,
                        onExitComplete: function () {
                          g.delete(t), h.delete(t);
                          var e = y.current.findIndex(function (e) {
                            return e.key === t;
                          });
                          if ((y.current.splice(e, 1), !h.size)) {
                            if (((y.current = p), !1 === v.current)) return;
                            d(), i && i();
                          }
                        },
                        custom: n,
                        presenceAffectsLayout: l,
                      },
                      e
                    )
                  );
                }
              }
            }),
            (m = m.map(function (t) {
              var e = t.key;
              return h.has(e)
                ? t
                : a.createElement(
                    ce,
                    { key: pe(t), isPresent: !0, presenceAffectsLayout: l },
                    t
                  );
            })),
            a.createElement(
              a.Fragment,
              null,
              h.size
                ? m
                : m.map(function (t) {
                    return (0, a.cloneElement)(t);
                  })
            )
          );
        },
        he = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        ye = {
          measureLayout: he(["layout", "layoutId", "drag"]),
          animation: he([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: he(["exit"]),
          drag: he(["drag", "dragControls"]),
          focus: he(["whileFocus"]),
          hover: he(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: he(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: he(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: he(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var ge = (0, a.createContext)({ strict: !1 }),
        xe = Object.keys(ye),
        be = xe.length;
      var Ee = (0, a.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        we = (0, a.createContext)({});
      var Pe = { current: null },
        Ce = !1;
      function Se() {
        return (
          !Ce &&
            (function () {
              if (((Ce = !0), ne))
                if (window.matchMedia) {
                  var t = window.matchMedia("(prefers-reduced-motion)"),
                    e = function () {
                      return (Pe.current = t.matches);
                    };
                  t.addListener(e), e();
                } else Pe.current = !1;
            })(),
          w((0, a.useState)(Pe.current), 1)[0]
        );
      }
      function Te(t, e, n, r) {
        var o = (0, a.useContext)(ge),
          i = (0, a.useContext)(we).visualElement,
          s = (0, a.useContext)(ie),
          u = (function () {
            var t = Se(),
              e = (0, a.useContext)(Ee).reducedMotion;
            return "never" !== e && ("always" === e || t);
          })(),
          l = (0, a.useRef)(void 0);
        r || (r = o.renderer),
          !l.current &&
            r &&
            (l.current = r(t, {
              visualState: e,
              parent: i,
              props: n,
              presenceId: null === s || void 0 === s ? void 0 : s.id,
              blockInitialAnimation:
                !1 === (null === s || void 0 === s ? void 0 : s.initial),
              shouldReduceMotion: u,
            }));
        var c = l.current;
        return (
          re(function () {
            null === c || void 0 === c || c.syncRender();
          }),
          (0, a.useEffect)(function () {
            var t;
            null ===
              (t = null === c || void 0 === c ? void 0 : c.animationState) ||
              void 0 === t ||
              t.animateChanges();
          }),
          re(function () {
            return function () {
              return null === c || void 0 === c ? void 0 : c.notifyUnmount();
            };
          }, []),
          c
        );
      }
      function Ae(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function ke(t) {
        return Array.isArray(t);
      }
      function Oe(t) {
        return "string" === typeof t || ke(t);
      }
      function Me(t, e, n, r, o) {
        var i;
        return (
          void 0 === r && (r = {}),
          void 0 === o && (o = {}),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)),
          "string" === typeof e &&
            (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)),
          e
        );
      }
      function Re(t, e, n) {
        var r = t.getProps();
        return Me(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function Ve(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          Oe(t.initial) ||
          Oe(t.animate) ||
          Oe(t.whileHover) ||
          Oe(t.whileDrag) ||
          Oe(t.whileTap) ||
          Oe(t.whileFocus) ||
          Oe(t.exit)
        );
      }
      function Ne(t) {
        return Boolean(Ve(t) || t.variants);
      }
      function Le(t) {
        var e = (function (t, e) {
            if (Ve(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || Oe(n) ? n : void 0,
                animate: Oe(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, a.useContext)(we)),
          n = e.initial,
          r = e.animate;
        return (0, a.useMemo)(
          function () {
            return { initial: n, animate: r };
          },
          [Fe(n), Fe(r)]
        );
      }
      function Fe(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      const De = (t, e, n) => -n * t + n * e + t;
      function je(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      function Ie(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function Be(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var _e = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                Ie(this.subscriptions, t),
                function () {
                  return Be(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var o = 0; o < r; o++) {
                    var i = this.subscriptions[o];
                    i && i(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        Ue = (function () {
          function t(t) {
            var e,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new _e()),
              (this.velocityUpdateSubscribers = new _e()),
              (this.renderSubscribers = new _e()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var r = te(),
                  o = r.delta,
                  i = r.timestamp;
                n.lastUpdated !== i &&
                  ((n.timeDelta = o),
                  (n.lastUpdated = i),
                  ee.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return ee.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? je(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function Ge(t) {
        return new Ue(t);
      }
      var We = function (t) {
        return Boolean(null !== t && "object" === typeof t && t.getVelocity);
      };
      const He = (t, e, n) => Math.min(Math.max(n, t), e),
        Xe = 0.001;
      function Ye({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1,
      }) {
        let o,
          i,
          a = 1 - e;
        (a = He(0.05, 1, a)),
          (t = He(0.01, 10, t / 1e3)),
          a < 1
            ? ((o = (e) => {
                const r = e * a,
                  o = r * t,
                  i = r - n,
                  s = ze(e, a),
                  u = Math.exp(-o);
                return Xe - (i / s) * u;
              }),
              (i = (e) => {
                const r = e * a * t,
                  i = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  l = ze(Math.pow(e, 2), a);
                return ((-o(e) + Xe > 0 ? -1 : 1) * ((i - s) * u)) / l;
              }))
            : ((o = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (i = (e) => Math.exp(-e * t) * (t * t * (n - e))));
        const s = (function (t, e, n) {
          let r = n;
          for (let o = 1; o < 12; o++) r -= t(r) / e(r);
          return r;
        })(o, i, 5 / t);
        if (((t *= 1e3), isNaN(s)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          const e = Math.pow(s, 2) * r;
          return {
            stiffness: e,
            damping: 2 * a * Math.sqrt(r * e),
            duration: t,
          };
        }
      }
      function ze(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      const $e = ["duration", "bounce"],
        Ze = ["stiffness", "damping", "mass"];
      function Ke(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function qe(t) {
        var { from: e = 0, to: n = 1, restSpeed: r = 2, restDelta: o } = t,
          i = b(t, ["from", "to", "restSpeed", "restDelta"]);
        const a = { done: !1, value: e };
        let {
            stiffness: s,
            damping: u,
            mass: l,
            velocity: c,
            duration: d,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!Ke(t, Ze) && Ke(t, $e)) {
              const n = Ye(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })),
                (e.isResolvedFromDuration = !0);
            }
            return e;
          })(i),
          v = Je,
          p = Je;
        function m() {
          const t = c ? -c / 1e3 : 0,
            r = n - e,
            i = u / (2 * Math.sqrt(s * l)),
            a = Math.sqrt(s / l) / 1e3;
          if (
            (void 0 === o && (o = Math.min(Math.abs(n - e) / 100, 0.4)), i < 1)
          ) {
            const e = ze(a, i);
            (v = (o) => {
              const s = Math.exp(-i * a * o);
              return (
                n -
                s *
                  (((t + i * a * r) / e) * Math.sin(e * o) +
                    r * Math.cos(e * o))
              );
            }),
              (p = (n) => {
                const o = Math.exp(-i * a * n);
                return (
                  i *
                    a *
                    o *
                    ((Math.sin(e * n) * (t + i * a * r)) / e +
                      r * Math.cos(e * n)) -
                  o *
                    (Math.cos(e * n) * (t + i * a * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === i)
            v = (e) => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(i * i - 1);
            v = (o) => {
              const s = Math.exp(-i * a * o),
                u = Math.min(e * o, 300);
              return (
                n -
                (s * ((t + i * a * r) * Math.sinh(u) + e * r * Math.cosh(u))) /
                  e
              );
            };
          }
        }
        return (
          m(),
          {
            next: (t) => {
              const e = v(t);
              if (f) a.done = t >= d;
              else {
                const i = 1e3 * p(t),
                  s = Math.abs(i) <= r,
                  u = Math.abs(n - e) <= o;
                a.done = s && u;
              }
              return (a.value = a.done ? n : e), a;
            },
            flipTarget: () => {
              (c = -c), ([e, n] = [n, e]), m();
            },
          }
        );
      }
      qe.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e;
      const Je = (t) => 0,
        Qe = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        tn = (t, e) => (n) => Math.max(Math.min(n, e), t),
        en = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        nn = /(-)?([\d]*\.?[\d])+/g,
        rn =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        on =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function an(t) {
        return "string" === typeof t;
      }
      const sn = {
          test: (t) => "number" === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        un = Object.assign(Object.assign({}, sn), { transform: tn(0, 1) }),
        ln = Object.assign(Object.assign({}, sn), { default: 1 }),
        cn = (t, e) => (n) =>
          Boolean(
            (an(n) && on.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        dn = (t, e, n) => (r) => {
          if (!an(r)) return r;
          const [o, i, a, s] = r.match(nn);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(i),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        fn = tn(0, 255),
        vn = Object.assign(Object.assign({}, sn), {
          transform: (t) => Math.round(fn(t)),
        }),
        pn = {
          test: cn("rgb", "red"),
          parse: dn("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            vn.transform(t) +
            ", " +
            vn.transform(e) +
            ", " +
            vn.transform(n) +
            ", " +
            en(un.transform(r)) +
            ")",
        };
      const mn = {
          test: cn("#"),
          parse: function (t) {
            let e = "",
              n = "",
              r = "",
              o = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (o = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (o = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (o += o)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1,
              }
            );
          },
          transform: pn.transform,
        },
        hn = (t) => ({
          test: (e) => an(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        yn = hn("deg"),
        gn = hn("%"),
        xn = hn("px"),
        bn = hn("vh"),
        En = hn("vw"),
        wn = Object.assign(Object.assign({}, gn), {
          parse: (t) => gn.parse(t) / 100,
          transform: (t) => gn.transform(100 * t),
        }),
        Pn = {
          test: cn("hsl", "hue"),
          parse: dn("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            gn.transform(en(e)) +
            ", " +
            gn.transform(en(n)) +
            ", " +
            en(un.transform(r)) +
            ")",
        };
      function Cn(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function Sn({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let o = 0,
          i = 0,
          a = 0;
        if ((e /= 100)) {
          const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r;
          (o = Cn(s, r, t + 1 / 3)),
            (i = Cn(s, r, t)),
            (a = Cn(s, r, t - 1 / 3));
        } else o = i = a = n;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * i),
          blue: Math.round(255 * a),
          alpha: r,
        };
      }
      const Tn = (t, e, n) => {
          const r = t * t,
            o = e * e;
          return Math.sqrt(Math.max(0, n * (o - r) + r));
        },
        An = [mn, pn, Pn],
        kn = (t) => An.find((e) => e.test(t)),
        On = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        Mn = (t, e) => {
          let n = kn(t),
            r = kn(e);
          On(t), On(e);
          let o = n.parse(t),
            i = r.parse(e);
          n === Pn && ((o = Sn(o)), (n = pn)),
            r === Pn && ((i = Sn(i)), (r = pn));
          const a = Object.assign({}, o);
          return (t) => {
            for (const e in a) "alpha" !== e && (a[e] = Tn(o[e], i[e], t));
            return (a.alpha = De(o.alpha, i.alpha, t)), n.transform(a);
          };
        },
        Rn = {
          test: (t) => pn.test(t) || mn.test(t) || Pn.test(t),
          parse: (t) =>
            pn.test(t) ? pn.parse(t) : Pn.test(t) ? Pn.parse(t) : mn.parse(t),
          transform: (t) =>
            an(t)
              ? t
              : t.hasOwnProperty("red")
              ? pn.transform(t)
              : Pn.transform(t),
        },
        Vn = "${c}",
        Nn = "${n}";
      function Ln(t) {
        "number" === typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const r = t.match(rn);
        r &&
          ((n = r.length), (t = t.replace(rn, Vn)), e.push(...r.map(Rn.parse)));
        const o = t.match(nn);
        return (
          o && ((t = t.replace(nn, Nn)), e.push(...o.map(sn.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function Fn(t) {
        return Ln(t).values;
      }
      function Dn(t) {
        const { values: e, numColors: n, tokenised: r } = Ln(t),
          o = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < o; r++)
            e = e.replace(
              r < n ? Vn : Nn,
              r < n ? Rn.transform(t[r]) : en(t[r])
            );
          return e;
        };
      }
      const jn = (t) => ("number" === typeof t ? 0 : t);
      const In = {
          test: function (t) {
            var e, n, r, o;
            return (
              isNaN(t) &&
              an(t) &&
              (null !==
                (n =
                  null === (e = t.match(nn)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (o =
                    null === (r = t.match(rn)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== o
                  ? o
                  : 0) >
                0
            );
          },
          parse: Fn,
          createTransformer: Dn,
          getAnimatableNone: function (t) {
            const e = Fn(t);
            return Dn(t)(e.map(jn));
          },
        },
        Bn = (t) => "number" === typeof t,
        _n = (t, e) => (n) => e(t(n)),
        Un = (...t) => t.reduce(_n);
      function Gn(t, e) {
        return Bn(t) ? (n) => De(t, e, n) : Rn.test(t) ? Mn(t, e) : Yn(t, e);
      }
      const Wn = (t, e) => {
          const n = [...t],
            r = n.length,
            o = t.map((t, n) => Gn(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = o[e](t);
            return n;
          };
        },
        Hn = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const o in n)
            void 0 !== t[o] && void 0 !== e[o] && (r[o] = Gn(t[o], e[o]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        };
      function Xn(t) {
        const e = In.parse(t),
          n = e.length;
        let r = 0,
          o = 0,
          i = 0;
        for (let a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++;
        return { parsed: e, numNumbers: r, numRGB: o, numHSL: i };
      }
      const Yn = (t, e) => {
          const n = In.createTransformer(e),
            r = Xn(t),
            o = Xn(e);
          return r.numHSL === o.numHSL &&
            r.numRGB === o.numRGB &&
            r.numNumbers >= o.numNumbers
            ? Un(Wn(r.parsed, o.parsed), n)
            : (n) => `${n > 0 ? e : t}`;
        },
        zn = (t, e) => (n) => De(t, e, n);
      function $n(t, e, n) {
        const r = [],
          o =
            n ||
            ("number" === typeof (i = t[0])
              ? zn
              : "string" === typeof i
              ? Rn.test(i)
                ? Mn
                : Yn
              : Array.isArray(i)
              ? Wn
              : "object" === typeof i
              ? Hn
              : void 0);
        var i;
        const a = t.length - 1;
        for (let s = 0; s < a; s++) {
          let n = o(t[s], t[s + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[s] : e;
            n = Un(t, n);
          }
          r.push(n);
        }
        return r;
      }
      function Zn(t, e, { clamp: n = !0, ease: r, mixer: o } = {}) {
        const i = t.length;
        e.length,
          !r || !Array.isArray(r) || r.length,
          t[0] > t[i - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        const a = $n(e, r, o),
          s =
            2 === i
              ? (function ([t, e], [n]) {
                  return (r) => n(Qe(t, e, r));
                })(t, a)
              : (function (t, e) {
                  const n = t.length,
                    r = n - 1;
                  return (o) => {
                    let i = 0,
                      a = !1;
                    if (
                      (o <= t[0]
                        ? (a = !0)
                        : o >= t[r] && ((i = r - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > o || e === r); e++);
                      i = e - 1;
                    }
                    const s = Qe(t[i], t[i + 1], o);
                    return e[i](s);
                  };
                })(t, a);
        return n ? (e) => s(He(t[0], t[i - 1], e)) : s;
      }
      const Kn = (t) => (e) => 1 - t(1 - e),
        qn = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Jn = (t) => (e) => e * e * ((t + 1) * e - t),
        Qn = (t) => t,
        tr = ((er = 2), (t) => Math.pow(t, er));
      var er;
      const nr = Kn(tr),
        rr = qn(tr),
        or = (t) => 1 - Math.sin(Math.acos(t)),
        ir = Kn(or),
        ar = qn(ir),
        sr = Jn(1.525),
        ur = Kn(sr),
        lr = qn(sr),
        cr = ((t) => {
          const e = Jn(t);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(1.525),
        dr = (t) => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        fr = Kn(dr);
      function vr(t, e) {
        return t.map(() => e || rr).splice(0, t.length - 1);
      }
      function pr({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: o = 300,
      }) {
        const i = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (function (t, e) {
            return t.map((t) => t * e);
          })(
            r && r.length === a.length
              ? r
              : (function (t) {
                  const e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(a),
            o
          );
        function u() {
          return Zn(s, a, { ease: Array.isArray(n) ? n : vr(a, n) });
        }
        let l = u();
        return {
          next: (t) => ((i.value = l(t)), (i.done = t >= o), i),
          flipTarget: () => {
            a.reverse(), (l = u());
          },
        };
      }
      const mr = {
        keyframes: pr,
        spring: qe,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: o = 0.5,
          modifyTarget: i,
        }) {
          const a = { done: !1, value: e };
          let s = n * t;
          const u = e + s,
            l = void 0 === i ? u : i(u);
          return (
            l !== u && (s = l - e),
            {
              next: (t) => {
                const e = -s * Math.exp(-t / r);
                return (
                  (a.done = !(e > o || e < -o)),
                  (a.value = a.done ? l : l + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      function hr(t, e, n = 0) {
        return t - e - n;
      }
      const yr = (t) => {
        const e = ({ delta: e }) => t(e);
        return { start: () => ee.update(e, !0), stop: () => Zt.update(e) };
      };
      function gr(t) {
        var e,
          n,
          {
            from: r,
            autoplay: o = !0,
            driver: i = yr,
            elapsed: a = 0,
            repeat: s = 0,
            repeatType: u = "loop",
            repeatDelay: l = 0,
            onPlay: c,
            onStop: d,
            onComplete: f,
            onRepeat: v,
            onUpdate: p,
          } = t,
          m = b(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let h,
          y,
          g,
          { to: x } = m,
          E = 0,
          w = m.duration,
          P = !1,
          C = !0;
        const S = (function (t) {
          if (Array.isArray(t.to)) return pr;
          if (mr[t.type]) return mr[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
            ? pr
            : e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            ? qe
            : pr;
        })(m);
        (null === (n = (e = S).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, r, x)) &&
          ((g = Zn([0, 100], [r, x], { clamp: !1 })), (r = 0), (x = 100));
        const T = S(Object.assign(Object.assign({}, m), { from: r, to: x }));
        function A() {
          E++,
            "reverse" === u
              ? ((C = E % 2 === 0),
                (a = (function (t, e, n = 0, r = !0) {
                  return r ? hr(e + -t, e, n) : e - (t - e) + n;
                })(a, w, l, C)))
              : ((a = hr(a, w, l)), "mirror" === u && T.flipTarget()),
            (P = !1),
            v && v();
        }
        function k(t) {
          if ((C || (t = -t), (a += t), !P)) {
            const t = T.next(Math.max(0, a));
            (y = t.value), g && (y = g(y)), (P = C ? t.done : a <= 0);
          }
          null === p || void 0 === p || p(y),
            P &&
              (0 === E && ((null !== w && void 0 !== w) || (w = a)),
              E < s
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(a, w, l, C) && A()
                : (h.stop(), f && f()));
        }
        return (
          o && (null === c || void 0 === c || c(), (h = i(k)), h.start()),
          {
            stop: () => {
              null === d || void 0 === d || d(), h.stop();
            },
          }
        );
      }
      var xr = function (t) {
        return 1e3 * t;
      };
      const br = (t, e) => 1 - 3 * e + 3 * t,
        Er = (t, e) => 3 * e - 6 * t,
        wr = (t) => 3 * t,
        Pr = (t, e, n) => ((br(e, n) * t + Er(e, n)) * t + wr(e)) * t,
        Cr = (t, e, n) => 3 * br(e, n) * t * t + 2 * Er(e, n) * t + wr(e);
      const Sr = 0.1;
      function Tr(t, e, n, r) {
        if (t === e && n === r) return Qn;
        const o = new Float32Array(11);
        for (let a = 0; a < 11; ++a) o[a] = Pr(a * Sr, t, n);
        function i(e) {
          let r = 0,
            i = 1;
          for (; 10 !== i && o[i] <= e; ++i) r += Sr;
          --i;
          const a = r + ((e - o[i]) / (o[i + 1] - o[i])) * Sr,
            s = Cr(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (let o = 0; o < 8; ++o) {
                  const o = Cr(e, n, r);
                  if (0 === o) return e;
                  e -= (Pr(e, n, r) - t) / o;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, o) {
                let i,
                  a,
                  s = 0;
                do {
                  (a = e + (n - e) / 2),
                    (i = Pr(a, r, o) - t),
                    i > 0 ? (n = a) : (e = a);
                } while (Math.abs(i) > 1e-7 && ++s < 10);
                return a;
              })(e, r, r + Sr, t, n);
        }
        return (t) => (0 === t || 1 === t ? t : Pr(i(t), e, r));
      }
      var Ar = {
          linear: Qn,
          easeIn: tr,
          easeInOut: rr,
          easeOut: nr,
          circIn: or,
          circInOut: ar,
          circOut: ir,
          backIn: sr,
          backInOut: lr,
          backOut: ur,
          anticipate: cr,
          bounceIn: fr,
          bounceInOut: (t) =>
            t < 0.5 ? 0.5 * (1 - dr(1 - 2 * t)) : 0.5 * dr(2 * t - 1) + 0.5,
          bounceOut: dr,
        },
        kr = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = w(t, 4);
            return Tr(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t
            ? ("Invalid easing type '".concat(t, "'"), Ar[t])
            : t;
        },
        Or = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !In.test(e) || e.startsWith("url(")))
          );
        },
        Mr = function (t) {
          return Array.isArray(t);
        },
        Rr = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Vr = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        Nr = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Lr = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        Fr = {
          x: Rr,
          y: Rr,
          z: Rr,
          rotate: Rr,
          rotateX: Rr,
          rotateY: Rr,
          rotateZ: Rr,
          scaleX: Vr,
          scaleY: Vr,
          scale: Vr,
          opacity: Nr,
          backgroundColor: Nr,
          color: Nr,
          default: Vr,
        };
      const Dr = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function jr(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(nn) || [];
        if (!r) return t;
        const o = n.replace(r, "");
        let i = Dr.has(e) ? 1 : 0;
        return r !== n && (i *= 100), e + "(" + i + o + ")";
      }
      const Ir = /([a-z-]*)\(.*?\)/g,
        Br = Object.assign(Object.assign({}, In), {
          getAnimatableNone: (t) => {
            const e = t.match(Ir);
            return e ? e.map(jr).join(" ") : t;
          },
        });
      var _r = x(x({}, sn), { transform: Math.round }),
        Ur = {
          borderWidth: xn,
          borderTopWidth: xn,
          borderRightWidth: xn,
          borderBottomWidth: xn,
          borderLeftWidth: xn,
          borderRadius: xn,
          radius: xn,
          borderTopLeftRadius: xn,
          borderTopRightRadius: xn,
          borderBottomRightRadius: xn,
          borderBottomLeftRadius: xn,
          width: xn,
          maxWidth: xn,
          height: xn,
          maxHeight: xn,
          size: xn,
          top: xn,
          right: xn,
          bottom: xn,
          left: xn,
          padding: xn,
          paddingTop: xn,
          paddingRight: xn,
          paddingBottom: xn,
          paddingLeft: xn,
          margin: xn,
          marginTop: xn,
          marginRight: xn,
          marginBottom: xn,
          marginLeft: xn,
          rotate: yn,
          rotateX: yn,
          rotateY: yn,
          rotateZ: yn,
          scale: ln,
          scaleX: ln,
          scaleY: ln,
          scaleZ: ln,
          skew: yn,
          skewX: yn,
          skewY: yn,
          distance: xn,
          translateX: xn,
          translateY: xn,
          translateZ: xn,
          x: xn,
          y: xn,
          z: xn,
          perspective: xn,
          transformPerspective: xn,
          opacity: un,
          originX: wn,
          originY: wn,
          originZ: xn,
          zIndex: _r,
          fillOpacity: un,
          strokeOpacity: un,
          numOctaves: _r,
        },
        Gr = x(x({}, Ur), {
          color: Rn,
          backgroundColor: Rn,
          outlineColor: Rn,
          fill: Rn,
          stroke: Rn,
          borderColor: Rn,
          borderTopColor: Rn,
          borderRightColor: Rn,
          borderBottomColor: Rn,
          borderLeftColor: Rn,
          filter: Br,
          WebkitFilter: Br,
        }),
        Wr = function (t) {
          return Gr[t];
        };
      function Hr(t, e) {
        var n,
          r = Wr(t);
        return (
          r !== Br && (r = In),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      var Xr = !1,
        Yr = function (t) {
          return Mr(t) ? t[t.length - 1] || 0 : t;
        };
      function zr(t) {
        var e = t.ease,
          n = t.times,
          r = t.yoyo,
          o = t.flip,
          i = t.loop,
          a = b(t, ["ease", "times", "yoyo", "flip", "loop"]),
          s = x({}, a);
        return (
          n && (s.offset = n),
          a.duration && (s.duration = xr(a.duration)),
          a.repeatDelay && (s.repeatDelay = xr(a.repeatDelay)),
          e &&
            (s.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map(kr)
              : kr(e)),
          "tween" === a.type && (s.type = "keyframes"),
          (r || i || o) &&
            (!0,
            r
              ? (s.repeatType = "reverse")
              : i
              ? (s.repeatType = "loop")
              : o && (s.repeatType = "mirror"),
            (s.repeat = i || r || o || a.repeat)),
          "spring" !== a.type && (s.type = "keyframes"),
          s
        );
      }
      function $r(t, e, n) {
        var r;
        return (
          Array.isArray(e.to) &&
            ((null !== (r = t.duration) && void 0 !== r) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = P([], w(t.to), !1)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = b(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = x(
              x({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = Mr(e) ? Lr : Fr[t] || Fr.default), x({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          x(x({}, e), zr(t))
        );
      }
      function Zr(t, e, n, r, o) {
        var i,
          a = Jr(r, t),
          s = null !== (i = a.from) && void 0 !== i ? i : e.get(),
          u = Or(t, n);
        "none" === s && u && "string" === typeof n
          ? (s = Hr(t, n))
          : Kr(s) && "string" === typeof n
          ? (s = qr(n))
          : !Array.isArray(n) && Kr(n) && "string" === typeof s && (n = qr(s));
        var l = Or(t, s);
        return (
          "You are trying to animate "
            .concat(t, ' from "')
            .concat(s, '" to "')
            .concat(n, '". ')
            .concat(
              s,
              " is not an animatable value - to enable this animation set "
            )
            .concat(s, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          l && u && !1 !== a.type
            ? function () {
                var r = {
                  from: s,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: o,
                  onUpdate: function (t) {
                    return e.set(t);
                  },
                };
                return "inertia" === a.type || "decay" === a.type
                  ? (function ({
                      from: t = 0,
                      velocity: e = 0,
                      min: n,
                      max: r,
                      power: o = 0.8,
                      timeConstant: i = 750,
                      bounceStiffness: a = 500,
                      bounceDamping: s = 10,
                      restDelta: u = 1,
                      modifyTarget: l,
                      driver: c,
                      onUpdate: d,
                      onComplete: f,
                      onStop: v,
                    }) {
                      let p;
                      function m(t) {
                        return (
                          (void 0 !== n && t < n) || (void 0 !== r && t > r)
                        );
                      }
                      function h(t) {
                        return void 0 === n
                          ? r
                          : void 0 === r || Math.abs(n - t) < Math.abs(r - t)
                          ? n
                          : r;
                      }
                      function y(t) {
                        null === p || void 0 === p || p.stop(),
                          (p = gr(
                            Object.assign(Object.assign({}, t), {
                              driver: c,
                              onUpdate: (e) => {
                                var n;
                                null === d || void 0 === d || d(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: f,
                              onStop: v,
                            })
                          ));
                      }
                      function g(t) {
                        y(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: a,
                              damping: s,
                              restDelta: u,
                            },
                            t
                          )
                        );
                      }
                      if (m(t)) g({ from: t, velocity: e, to: h(t) });
                      else {
                        let r = o * e + t;
                        "undefined" !== typeof l && (r = l(r));
                        const a = h(r),
                          s = a === n ? -1 : 1;
                        let c, d;
                        const f = (t) => {
                          (c = d),
                            (d = t),
                            (e = je(t - c, te().delta)),
                            ((1 === s && t > a) || (-1 === s && t < a)) &&
                              g({ from: t, to: a, velocity: e });
                        };
                        y({
                          type: "decay",
                          from: t,
                          velocity: e,
                          timeConstant: i,
                          power: o,
                          restDelta: u,
                          modifyTarget: l,
                          onUpdate: m(r) ? f : void 0,
                        });
                      }
                      return {
                        stop: () =>
                          null === p || void 0 === p ? void 0 : p.stop(),
                      };
                    })(x(x({}, r), a))
                  : gr(
                      x(x({}, $r(a, r, t)), {
                        onUpdate: function (t) {
                          var e;
                          r.onUpdate(t),
                            null === (e = a.onUpdate) ||
                              void 0 === e ||
                              e.call(a, t);
                        },
                        onComplete: function () {
                          var t;
                          r.onComplete(),
                            null === (t = a.onComplete) ||
                              void 0 === t ||
                              t.call(a);
                        },
                      })
                    );
              }
            : function () {
                var t,
                  r,
                  i = Yr(n);
                return (
                  e.set(i),
                  o(),
                  null ===
                    (t = null === a || void 0 === a ? void 0 : a.onUpdate) ||
                    void 0 === t ||
                    t.call(a, i),
                  null ===
                    (r = null === a || void 0 === a ? void 0 : a.onComplete) ||
                    void 0 === r ||
                    r.call(a),
                  { stop: function () {} }
                );
              }
        );
      }
      function Kr(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function qr(t) {
        return "number" === typeof t ? 0 : Hr("", t);
      }
      function Jr(t, e) {
        return t[e] || t.default || t;
      }
      function Qr(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          Xr && (r = { type: !1 }),
          e.start(function (o) {
            var i,
              a,
              s = Zr(t, e, n, r, o),
              u = (function (t, e) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (Jr(t, e) || {}).delay) && void 0 !== n
                      ? n
                      : t.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, t),
              l = function () {
                return (a = s());
              };
            return (
              u ? (i = window.setTimeout(l, xr(u))) : l(),
              function () {
                clearTimeout(i), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      var to = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        eo = to.length,
        no = function (t) {
          return "string" === typeof t ? parseFloat(t) : t;
        },
        ro = function (t) {
          return "number" === typeof t || xn.test(t);
        };
      function oo(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var io = so(0, 0.5, ir),
        ao = so(0.5, 0.95, Qn);
      function so(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(Qe(t, e, r));
        };
      }
      function uo(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function lo(t, e) {
        uo(t.x, e.x), uo(t.y, e.y);
      }
      function co(t) {
        return void 0 === t || 1 === t;
      }
      function fo(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !co(e) || !co(n) || !co(r);
      }
      function vo(t) {
        return (
          fo(t) ||
          po(t.x) ||
          po(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function po(t) {
        return t && "0%" !== t;
      }
      function mo(t, e, n) {
        return n + e * (t - n);
      }
      function ho(t, e, n, r, o) {
        return void 0 !== o && (t = mo(t, o, r)), mo(t, n, r) + e;
      }
      function yo(t, e, n, r, o) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = ho(t.min, e, n, r, o)),
          (t.max = ho(t.max, e, n, r, o));
      }
      function go(t, e) {
        var n = e.x,
          r = e.y;
        yo(t.x, n.translate, n.scale, n.originPoint),
          yo(t.y, r.translate, r.scale, r.originPoint);
      }
      function xo(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function bo(t, e, n) {
        var r = w(n, 3),
          o = r[0],
          i = r[1],
          a = r[2],
          s = void 0 !== e[a] ? e[a] : 0.5,
          u = De(t.min, t.max, s);
        yo(t, e[o], e[i], u, e.scale);
      }
      var Eo = ["x", "scaleX", "originX"],
        wo = ["y", "scaleY", "originY"];
      function Po(t, e) {
        bo(t.x, e, Eo), bo(t.y, e, wo);
      }
      const Co = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        So = (t) => Co(t) && t.hasOwnProperty("z"),
        To = (t, e) => Math.abs(t - e);
      function Ao(t, e) {
        if (Bn(t) && Bn(e)) return To(t, e);
        if (Co(t) && Co(e)) {
          const n = To(t.x, e.x),
            r = To(t.y, e.y),
            o = So(t) && So(e) ? To(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2));
        }
      }
      function ko(t) {
        return t.max - t.min;
      }
      function Oo(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), Ao(t, e) < n
        );
      }
      function Mo(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = De(e.min, e.max, t.origin)),
          (t.scale = ko(n) / ko(e)),
          (Oo(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = De(n.min, n.max, t.origin) - t.originPoint),
          (Oo(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function Ro(t, e, n, r) {
        Mo(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          Mo(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function Vo(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + ko(e));
      }
      function No(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + ko(e));
      }
      function Lo(t, e, n) {
        No(t.x, e.x, n.x), No(t.y, e.y, n.y);
      }
      function Fo(t, e, n, r, o) {
        return (
          (t = mo((t -= e), 1 / n, r)), void 0 !== o && (t = mo(t, 1 / o, r)), t
        );
      }
      function Do(t, e, n, r, o) {
        var i = w(n, 3),
          a = i[0],
          s = i[1],
          u = i[2];
        !(function (t, e, n, r, o, i, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === i && (i = t),
            void 0 === a && (a = t),
            gn.test(e) &&
              ((e = parseFloat(e)), (e = De(a.min, a.max, e / 100) - a.min)),
            "number" === typeof e)
          ) {
            var s = De(i.min, i.max, r);
            t === i && (s -= e),
              (t.min = Fo(t.min, e, n, s, o)),
              (t.max = Fo(t.max, e, n, s, o));
          }
        })(t, e[a], e[s], e[u], e.scale, r, o);
      }
      var jo = ["x", "scaleX", "originX"],
        Io = ["y", "scaleY", "originY"];
      function Bo(t, e, n, r) {
        Do(
          t.x,
          e,
          jo,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          Do(
            t.y,
            e,
            Io,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function _o(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function Uo(t) {
        return _o(t.x) && _o(t.y);
      }
      function Go(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var Wo = (function () {
          function t() {
            this.members = [];
          }
          return (
            (t.prototype.add = function (t) {
              Ie(this.members, t), t.scheduleRender();
            }),
            (t.prototype.remove = function (t) {
              if (
                (Be(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead)
              ) {
                var e = this.members[this.members.length - 1];
                e && this.promote(e);
              }
            }),
            (t.prototype.relegate = function (t) {
              var e,
                n = this.members.findIndex(function (e) {
                  return t === e;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var o = this.members[r];
                if (!1 !== o.isPresent) {
                  e = o;
                  break;
                }
              }
              return !!e && (this.promote(e), !0);
            }),
            (t.prototype.promote = function (t, e) {
              var n,
                r = this.lead;
              t !== r &&
                ((this.prevLead = r),
                (this.lead = t),
                t.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = r),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (t.snapshot.isShared = !0)),
                  (null === (n = t.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && r.hide()));
            }),
            (t.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (t) {
                var e, n, r, o, i;
                null === (n = (e = t.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e),
                  null ===
                    (i =
                      null === (r = t.resumingFrom) || void 0 === r
                        ? void 0
                        : (o = r.options).onExitComplete) ||
                    void 0 === i ||
                    i.call(o);
              });
            }),
            (t.prototype.scheduleRender = function () {
              this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1);
              });
            }),
            (t.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            t
          );
        })(),
        Ho = {};
      function Xo(t, e, n) {
        var r = t.x.translate / e.x,
          o = t.y.translate / e.y,
          i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
        if (n) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (i += "rotate(".concat(a, "deg) ")),
            s && (i += "rotateX(".concat(s, "deg) ")),
            u && (i += "rotateY(".concat(u, "deg) "));
        }
        return "translate3d(0px, 0px, 0) scale(1, 1)" ===
          (i += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")"))
          ? "none"
          : i;
      }
      function Yo(t) {
        return [t("x"), t("y")];
      }
      var zo = ["", "X", "Y", "Z"],
        $o = ["transformPerspective", "x", "y", "z"];
      function Zo(t, e) {
        return $o.indexOf(t) - $o.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return zo.forEach(function (e) {
          return $o.push(t + e);
        });
      });
      var Ko = new Set($o);
      function qo(t) {
        return Ko.has(t);
      }
      var Jo = new Set(["originX", "originY", "originZ"]);
      function Qo(t) {
        return Jo.has(t);
      }
      var ti = function (t, e) {
          return t.depth - e.depth;
        },
        ei = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              Ie(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              Be(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(ti),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      function ni(t) {
        var e,
          n = We(t) ? t.get() : t;
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        );
      }
      var ri = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function oi(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          r = t.measureScroll,
          o = t.resetTransform;
        return (function () {
          function t(t, e, r) {
            var o = this;
            void 0 === e && (e = {}),
              void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                o.nodes.forEach(di), o.nodes.forEach(fi);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? P(P([], w(r.path), !1), [r], !1) : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var i = 0; i < this.path.length; i++)
              this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ei());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) ||
                  this.eventHandlers.set(t, new _e()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var r = this.eventHandlers.get(t);
              null === r || void 0 === r || r.notify.apply(r, P([], w(e), !1));
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, n) {
              var r,
                o = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var i = this.options,
                  a = i.layoutId,
                  s = i.layout,
                  u = i.visualElement;
                if (
                  (u && !u.getInstance() && u.mount(t),
                  this.root.nodes.add(this),
                  null === (r = this.parent) ||
                    void 0 === r ||
                    r.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (s || a) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var l,
                    c = function () {
                      return (o.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (o.root.updateBlockedByResize = !0),
                      clearTimeout(l),
                      (l = window.setTimeout(c, 250)),
                      ri.hasAnimatedSinceResize &&
                        ((ri.hasAnimatedSinceResize = !1), o.nodes.forEach(ci));
                  });
                }
                a && this.root.registerSharedNode(a, this),
                  !1 !== this.options.animate &&
                    u &&
                    (a || s) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        r,
                        i,
                        a,
                        s = t.delta,
                        l = t.hasLayoutChanged,
                        c = t.hasRelativeTargetChanged,
                        d = t.layout;
                      if (o.isTreeAnimationBlocked())
                        return (
                          (o.target = void 0), void (o.relativeTarget = void 0)
                        );
                      var f =
                          null !==
                            (n =
                              null !== (e = o.options.transition) &&
                              void 0 !== e
                                ? e
                                : u.getDefaultTransition()) && void 0 !== n
                            ? n
                            : gi,
                        v = u.getProps(),
                        p = v.onLayoutAnimationStart,
                        m = v.onLayoutAnimationComplete,
                        h = !o.targetLayout || !Go(o.targetLayout, d) || c,
                        y = !l && c;
                      if (
                        (null === (r = o.resumeFrom) || void 0 === r
                          ? void 0
                          : r.instance) ||
                        y ||
                        (l && (h || !o.currentAnimation))
                      ) {
                        o.resumeFrom &&
                          ((o.resumingFrom = o.resumeFrom),
                          (o.resumingFrom.resumingFrom = void 0)),
                          o.setAnimationOrigin(s, y);
                        var g = x(x({}, Jr(f, "layout")), {
                          onPlay: p,
                          onComplete: m,
                        });
                        u.shouldReduceMotion && ((g.delay = 0), (g.type = !1)),
                          o.startAnimation(g);
                      } else l || 0 !== o.animationProgress || o.finishAnimation(), o.isLead() && (null === (a = (i = o.options).onExitComplete) || void 0 === a || a.call(i));
                      o.targetLayout = d;
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                Zt.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(vi));
            }),
            (t.prototype.willUpdate = function (t) {
              var e, n, r;
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var o = 0; o < this.path.length; o++) {
                  var i = this.path[o];
                  (i.shouldResetTransform = !0), i.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var l =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === l || void 0 === l
                      ? void 0
                      : l(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(ui)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(xi),
                  this.potentialNodes.clear()),
                this.nodes.forEach(li),
                this.nodes.forEach(ii),
                this.nodes.forEach(ai),
                this.clearAllSnapshots(),
                Kt.update(),
                Kt.preRender(),
                Kt.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(si), this.sharedNodes.forEach(pi);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              ee.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              ee.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                Ei(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (t.prototype.updateLayout = function () {
              var t;
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll();
                  }
                var n = this.measure();
                Ei(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    );
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = r(this.instance));
            }),
            (t.prototype.resetTransform = function () {
              var t;
              if (o) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !Uo(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  i =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  a = i !== this.prevTransformTemplateValue;
                e &&
                  (n || vo(this.latestValues) || a) &&
                  (o(this.instance, i),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (xo(e.x, n.x), xo(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              lo(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  o = r.scroll,
                  i = r.options;
                r !== this.root &&
                  o &&
                  i.layoutScroll &&
                  (xo(e.x, o.x), xo(e.y, o.y));
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              lo(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var o = this.path[r];
                !e &&
                  o.options.layoutScroll &&
                  o.scroll &&
                  o !== o.root &&
                  Po(n, { x: -o.scroll.x, y: -o.scroll.y }),
                  vo(o.latestValues) && Po(n, o.latestValues);
              }
              return vo(this.latestValues) && Po(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              lo(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var o = this.path[r];
                if (o.instance && vo(o.latestValues)) {
                  fo(o.latestValues) && o.updateSnapshot();
                  var i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  lo(i, o.measure()),
                    Bo(
                      n,
                      o.latestValues,
                      null === (e = o.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      i
                    );
                }
              }
              return vo(this.latestValues) && Bo(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = x(x(x({}, this.options), t), {
                crossfade: null === (e = t.crossfade) || void 0 === e || e,
              });
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                o = this.options,
                i = o.layout,
                a = o.layoutId;
              this.layout &&
                (i || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    Lo(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    lo(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target)
                    ? ((e = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      Vo(e.x, n.x, r.x),
                      Vo(e.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : lo(this.target, this.layout.actual),
                      go(this.target, this.targetDelta))
                    : lo(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      Lo(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      lo(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !vo(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var o = this.getLead();
                lo(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    var o, i;
                    void 0 === r && (r = !1);
                    var a = n.length;
                    if (a) {
                      var s, u;
                      e.x = e.y = 1;
                      for (var l = 0; l < a; l++)
                        (u = (s = n[l]).projectionDelta),
                          "contents" !==
                            (null ===
                              (i =
                                null === (o = s.instance) || void 0 === o
                                  ? void 0
                                  : o.style) || void 0 === i
                              ? void 0
                              : i.display) &&
                            (r &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              Po(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            u &&
                              ((e.x *= u.x.scale),
                              (e.y *= u.y.scale),
                              go(t, u)),
                            r && vo(s.latestValues) && Po(t, s.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== o
                  );
                var i = o.target;
                if (i) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  Ro(
                    this.projectionDelta,
                    this.layoutCorrected,
                    i,
                    this.latestValues
                  ),
                    (this.projectionTransform = Xo(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === u &&
                      this.treeScale.x === a &&
                      this.treeScale.y === s) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", i));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                r = this;
              void 0 === e && (e = !1);
              var o = this.snapshot,
                i =
                  (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                a = x({}, this.latestValues),
                s = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var u = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                l = null === o || void 0 === o ? void 0 : o.isShared,
                c =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                d = Boolean(
                  l &&
                    !c &&
                    !0 === this.options.crossfade &&
                    !this.path.some(yi)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var n,
                    o,
                    f,
                    v,
                    p,
                    m = e / 1e3;
                  mi(s.x, t.x, m),
                    mi(s.y, t.y, m),
                    r.setTargetDelta(s),
                    r.relativeTarget &&
                      r.relativeTargetOrigin &&
                      r.layout &&
                      (null === (n = r.relativeParent) || void 0 === n
                        ? void 0
                        : n.layout) &&
                      (Lo(u, r.layout.actual, r.relativeParent.layout.actual),
                      (o = r.relativeTarget),
                      (f = r.relativeTargetOrigin),
                      (v = u),
                      (p = m),
                      hi(o.x, f.x, v.x, p),
                      hi(o.y, f.y, v.y, p)),
                    l &&
                      ((r.animationValues = a),
                      (function (t, e, n, r, o, i) {
                        var a, s, u, l;
                        o
                          ? ((t.opacity = De(
                              0,
                              null !== (a = n.opacity) && void 0 !== a ? a : 1,
                              io(r)
                            )),
                            (t.opacityExit = De(
                              null !== (s = e.opacity) && void 0 !== s ? s : 1,
                              0,
                              ao(r)
                            )))
                          : i &&
                            (t.opacity = De(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (l = n.opacity) && void 0 !== l ? l : 1,
                              r
                            ));
                        for (var c = 0; c < eo; c++) {
                          var d = "border".concat(to[c], "Radius"),
                            f = oo(e, d),
                            v = oo(n, d);
                          (void 0 === f && void 0 === v) ||
                            (f || (f = 0),
                            v || (v = 0),
                            0 === f || 0 === v || ro(f) === ro(v)
                              ? ((t[d] = Math.max(De(no(f), no(v), r), 0)),
                                (gn.test(v) || gn.test(f)) && (t[d] += "%"))
                              : (t[d] = v));
                        }
                        (e.rotate || n.rotate) &&
                          (t.rotate = De(e.rotate || 0, n.rotate || 0, r));
                      })(a, i, r.latestValues, m, d, c)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender(),
                    (r.animationProgress = m);
                }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                r = this;
              this.notifyListeners("animationStart"),
                null === (e = this.currentAnimation) ||
                  void 0 === e ||
                  e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (Zt.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = ee.update(function () {
                  (ri.hasAnimatedSinceResize = !0),
                    (r.currentAnimation = (function (t, e, n) {
                      void 0 === n && (n = {});
                      var r = We(t) ? t : Ge(t);
                      return (
                        Qr("", r, e, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      x(x({}, t), {
                        onUpdate: function (e) {
                          var n;
                          r.mixTargetDelta(e),
                            null === (n = t.onUpdate) ||
                              void 0 === n ||
                              n.call(t, e);
                        },
                        onComplete: function () {
                          var e;
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            r.completeAnimation();
                        },
                      })
                    )),
                    r.resumingFrom &&
                      (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                o = t.latestValues;
              e &&
                n &&
                r &&
                (lo(e, n),
                Po(e, o),
                Ro(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  o
                ));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, o;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new Wo()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (o =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === o
                      ? void 0
                      : o.call(r, e),
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                o = e.preserveFollowOpacity,
                i = this.getStack();
              i && i.promote(this, o),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < zo.length; r++) {
                  var o = "rotate" + zo[r];
                  t.getStaticValue(o) &&
                    ((e = !0),
                    (n[o] = t.getStaticValue(o)),
                    t.setStaticValue(o, 0));
                }
                if (e) {
                  for (var o in (null === t || void 0 === t || t.syncRender(),
                  n))
                    t.setStaticValue(o, n[o]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              var e, n, r, o, i, a;
              void 0 === t && (t = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = ni(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                );
              var l = this.getLead();
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = ni(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !vo(this.latestValues) &&
                    ((c.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var d = l.animationValues || l.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = Xo(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                u && (s.transform = u(d, s.transform));
              var f = this.projectionDelta,
                v = f.x,
                p = f.y;
              for (var m in ((s.transformOrigin = ""
                .concat(100 * v.origin, "% ")
                .concat(100 * p.origin, "% 0")),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !==
                          (o =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== o
                        ? o
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (i = d.opacity) && void 0 !== i
                        ? i
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              Ho))
                if (void 0 !== d[m]) {
                  var h = Ho[m],
                    y = h.correct,
                    g = h.applyTo,
                    x = y(d[m], l);
                  if (g) for (var b = g.length, E = 0; E < b; E++) s[g[E]] = x;
                  else s[m] = x;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    l === this ? ni(t.pointerEvents) || "" : "none"),
                s
              );
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(ui),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function ii(t) {
        t.updateLayout();
      }
      function ai(t) {
        var e,
          n,
          r,
          o,
          i =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType
            ? Yo(function (t) {
                var e = i.isShared ? i.measured[t] : i.layout[t],
                  n = ko(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              Yo(function (t) {
                var e = i.isShared ? i.measured[t] : i.layout[t],
                  n = ko(s[t]);
                e.max = e.min + n;
              });
          var l = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          Ro(l, s, i.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          i.isShared
            ? Ro(c, t.applyTransform(u, !0), i.measured)
            : Ro(c, s, i.layout);
          var d = !Uo(l),
            f = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var v = t.relativeParent,
              p = v.snapshot,
              m = v.layout;
            if (p && m) {
              var h = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Lo(h, i.layout, p.layout);
              var y = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Lo(y, s, m.actual), Go(h, y) || (f = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: i,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: f,
          });
        } else
          t.isLead() &&
            (null === (o = (r = t.options).onExitComplete) ||
              void 0 === o ||
              o.call(r));
        t.options.transition = void 0;
      }
      function si(t) {
        t.clearSnapshot();
      }
      function ui(t) {
        t.clearMeasurements();
      }
      function li(t) {
        var e = t.options.visualElement;
        (null === e || void 0 === e
          ? void 0
          : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform();
      }
      function ci(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function di(t) {
        t.resolveTargetDelta();
      }
      function fi(t) {
        t.calcProjection();
      }
      function vi(t) {
        t.resetRotation();
      }
      function pi(t) {
        t.removeLeadSnapshot();
      }
      function mi(t, e, n) {
        (t.translate = De(e.translate, 0, n)),
          (t.scale = De(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function hi(t, e, n, r) {
        (t.min = De(e.min, n.min, r)), (t.max = De(e.max, n.max, r));
      }
      function yi(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var gi = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function xi(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break;
          }
        var o = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        o && t.mount(o, !0);
      }
      function bi(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function Ei(t) {
        bi(t.x), bi(t.y);
      }
      var wi = 1;
      var Pi = (0, a.createContext)({});
      var Ci = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          g(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n);
          }),
          (e.prototype.render = function () {
            return this.props.children;
          }),
          e
        );
      })(a.Component);
      function Si(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          r = t.projectionNodeConstructor,
          o = t.useRender,
          i = t.useVisualState,
          s = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t)
                null !== t[e] &&
                  ("projectionNodeConstructor" === e
                    ? (ye.projectionNodeConstructor = t[e])
                    : (ye[e].Component = t[e]));
            })(e),
          (0, a.forwardRef)(function (t, e) {
            var u = (function (t) {
              var e,
                n = t.layoutId,
                r =
                  null === (e = (0, a.useContext)(fe)) || void 0 === e
                    ? void 0
                    : e.id;
              return r && void 0 !== n ? r + "-" + n : n;
            })(t);
            t = x(x({}, t), { layoutId: u });
            var l = (0, a.useContext)(Ee),
              c = null,
              d = Le(t),
              f = l.isStatic
                ? void 0
                : ae(function () {
                    if (ri.hasEverUpdated) return wi++;
                  }),
              v = i(t, l.isStatic);
            return (
              !l.isStatic &&
                ne &&
                ((d.visualElement = Te(s, v, x(x({}, l), t), n)),
                (function (t, e, n, r) {
                  var o,
                    i = e.layoutId,
                    s = e.layout,
                    u = e.drag,
                    l = e.dragConstraints,
                    c = e.layoutScroll,
                    d = (0, a.useContext)(Pi);
                  r &&
                    n &&
                    !(null === n || void 0 === n ? void 0 : n.projection) &&
                    ((n.projection = new r(
                      t,
                      n.getLatestValues(),
                      null === (o = n.parent) || void 0 === o
                        ? void 0
                        : o.projection
                    )),
                    n.projection.setOptions({
                      layoutId: i,
                      layout: s,
                      alwaysMeasureLayout: Boolean(u) || (l && Ae(l)),
                      visualElement: n,
                      scheduleRender: function () {
                        return n.scheduleRender();
                      },
                      animationType: "string" === typeof s ? s : "both",
                      initialPromotionConfig: d,
                      layoutScroll: c,
                    }));
                })(f, t, d.visualElement, r || ye.projectionNodeConstructor),
                (c = (function (t, e, n) {
                  var r = [];
                  if (((0, a.useContext)(ge), !e)) return null;
                  for (var o = 0; o < be; o++) {
                    var i = xe[o],
                      s = ye[i],
                      u = s.isEnabled,
                      l = s.Component;
                    u(t) &&
                      l &&
                      r.push(
                        a.createElement(
                          l,
                          x({ key: i }, t, { visualElement: e })
                        )
                      );
                  }
                  return r;
                })(t, d.visualElement))),
              a.createElement(
                Ci,
                { visualElement: d.visualElement, props: x(x({}, l), t) },
                c,
                a.createElement(
                  we.Provider,
                  { value: d },
                  o(
                    s,
                    t,
                    f,
                    (function (t, e, n) {
                      return (0, a.useCallback)(
                        function (r) {
                          var o;
                          r &&
                            (null === (o = t.mount) ||
                              void 0 === o ||
                              o.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : Ae(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(v, d.visualElement, e),
                    v,
                    l.isStatic,
                    d.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function Ti(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), Si(t(e, n));
        }
        if ("undefined" === typeof Proxy) return e;
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var Ai = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ki(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(Ai.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      function Oi(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          qo(t) ||
          Qo(t) ||
          ((n || void 0 !== r) && (!!Ho[t] || "opacity" === t))
        );
      }
      var Mi = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function Ri(t) {
        return t.startsWith("--");
      }
      var Vi = function (t, e) {
        return e && "number" === typeof t ? e.transform(t) : t;
      };
      function Ni(t, e, n, r) {
        var o,
          i = t.style,
          a = t.vars,
          s = t.transform,
          u = t.transformKeys,
          l = t.transformOrigin;
        u.length = 0;
        var c = !1,
          d = !1,
          f = !0;
        for (var v in e) {
          var p = e[v];
          if (Ri(v)) a[v] = p;
          else {
            var m = Ur[v],
              h = Vi(p, m);
            if (qo(v)) {
              if (((c = !0), (s[v] = h), u.push(v), !f)) continue;
              p !== (null !== (o = m.default) && void 0 !== o ? o : 0) &&
                (f = !1);
            } else Qo(v) ? ((l[v] = h), (d = !0)) : (i[v] = h);
          }
        }
        c
          ? (i.transform = (function (t, e, n, r) {
              var o = t.transform,
                i = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = void 0 === a || a,
                u = e.allowTransformNone,
                l = void 0 === u || u,
                c = "";
              i.sort(Zo);
              for (var d = !1, f = i.length, v = 0; v < f; v++) {
                var p = i[v];
                (c += "".concat(Mi[p] || p, "(").concat(o[p], ") ")),
                  "z" === p && (d = !0);
              }
              return (
                !d && s ? (c += "translateZ(0)") : (c = c.trim()),
                r ? (c = r(o, n ? "" : c)) : l && n && (c = "none"),
                c
              );
            })(t, n, f, r))
          : r
          ? (i.transform = r({}, ""))
          : !e.transform && i.transform && (i.transform = "none"),
          d &&
            (i.transformOrigin = (function (t) {
              var e = t.originX,
                n = void 0 === e ? "50%" : e,
                r = t.originY,
                o = void 0 === r ? "50%" : r,
                i = t.originZ,
                a = void 0 === i ? 0 : i;
              return "".concat(n, " ").concat(o, " ").concat(a);
            })(l));
      }
      var Li = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Fi(t, e, n) {
        for (var r in e) We(e[r]) || Oi(r, n) || (t[r] = e[r]);
      }
      function Di(t, e, n) {
        var r = {};
        return (
          Fi(r, t.style || {}, t),
          Object.assign(
            r,
            (function (t, e, n) {
              var r = t.transformTemplate;
              return (0, a.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  Ni(t, e, { enableHardwareAcceleration: !n }, r);
                  var o = t.style;
                  return x(x({}, t.vars), o);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (r = t.transformValues(r)),
          r
        );
      }
      function ji(t, e, n) {
        var r = {},
          o = Di(t, e, n);
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
            (o.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (r.style = o),
          r
        );
      }
      var Ii = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function Bi(t) {
        return Ii.has(t);
      }
      var _i,
        Ui = function (t) {
          return !Bi(t);
        };
      try {
        (_i = require("@emotion/is-prop-valid").default) &&
          (Ui = function (t) {
            return t.startsWith("on") ? !Bi(t) : _i(t);
          });
      } catch (nc) {}
      function Gi(t, e, n) {
        return "string" === typeof t ? t : xn.transform(e + n * t);
      }
      var Wi = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Hi = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function Xi(t, e, n, r) {
        var o = e.attrX,
          i = e.attrY,
          a = e.originX,
          s = e.originY,
          u = e.pathLength,
          l = e.pathSpacing,
          c = void 0 === l ? 1 : l,
          d = e.pathOffset,
          f = void 0 === d ? 0 : d;
        Ni(
          t,
          b(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r
        ),
          (t.attrs = t.style),
          (t.style = {});
        var v = t.attrs,
          p = t.style,
          m = t.dimensions;
        v.transform && (m && (p.transform = v.transform), delete v.transform),
          m &&
            (void 0 !== a || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, n) {
              var r = Gi(e, t.x, t.width),
                o = Gi(n, t.y, t.height);
              return "".concat(r, " ").concat(o);
            })(m, void 0 !== a ? a : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== o && (v.x = o),
          void 0 !== i && (v.y = i),
          void 0 !== u &&
            (function (t, e, n, r, o) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === o && (o = !0),
                (t.pathLength = 1);
              var i = o ? Wi : Hi;
              t[i.offset] = xn.transform(-r);
              var a = xn.transform(e),
                s = xn.transform(n);
              t[i.array] = "".concat(a, " ").concat(s);
            })(v, u, c, f, !1);
      }
      var Yi = function () {
        return x(
          x(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function zi(t, e) {
        var n = (0, a.useMemo)(
          function () {
            var n = Yi();
            return (
              Xi(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              x(x({}, n.attrs), { style: x({}, n.style) })
            );
          },
          [e]
        );
        if (t.style) {
          var r = {};
          Fi(r, t.style, t), (n.style = x(x({}, r), n.style));
        }
        return n;
      }
      function $i(t) {
        void 0 === t && (t = !1);
        return function (e, n, r, o, i, s) {
          var u = i.latestValues,
            l = (ki(e) ? zi : ji)(n, u, s),
            c = (function (t, e, n) {
              var r = {};
              for (var o in t)
                (Ui(o) ||
                  (!0 === n && Bi(o)) ||
                  (!e && !Bi(o)) ||
                  (t.draggable && o.startsWith("onDrag"))) &&
                  (r[o] = t[o]);
              return r;
            })(n, "string" === typeof e, t),
            d = x(x(x({}, c), l), { ref: o });
          return r && (d["data-projection-id"] = r), (0, a.createElement)(e, d);
        };
      }
      var Zi = /([a-z])([A-Z])/g,
        Ki = function (t) {
          return t.replace(Zi, "$1-$2").toLowerCase();
        };
      function qi(t, e, n, r) {
        var o = e.style,
          i = e.vars;
        for (var a in (Object.assign(t.style, o, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(a, i[a]);
      }
      var Ji = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function Qi(t, e, n, r) {
        for (var o in (qi(t, e, void 0, r), e.attrs))
          t.setAttribute(Ji.has(o) ? o : Ki(o), e.attrs[o]);
      }
      function ta(t) {
        var e = t.style,
          n = {};
        for (var r in e) (We(e[r]) || Oi(r, t)) && (n[r] = e[r]);
        return n;
      }
      function ea(t) {
        var e = ta(t);
        for (var n in t) {
          if (We(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function na(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      function ra(t, e, n, r) {
        var o = t.scrapeMotionValuesFromProps,
          i = t.createRenderState,
          a = t.onMount,
          s = { latestValues: ia(e, n, r, o), renderState: i() };
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s);
            }),
          s
        );
      }
      var oa = function (t) {
        return function (e, n) {
          var r = (0, a.useContext)(we),
            o = (0, a.useContext)(ie);
          return n
            ? ra(t, e, r, o)
            : ae(function () {
                return ra(t, e, r, o);
              });
        };
      };
      function ia(t, e, n, r) {
        var o = {},
          i = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          a = r(t);
        for (var s in a) o[s] = ni(a[s]);
        var u = t.initial,
          l = t.animate,
          c = Ve(t),
          d = Ne(t);
        e &&
          d &&
          !c &&
          !1 !== t.inherit &&
          ((null !== u && void 0 !== u) || (u = e.initial),
          (null !== l && void 0 !== l) || (l = e.animate));
        var f = i || !1 === u,
          v = f ? l : u;
        v &&
          "boolean" !== typeof v &&
          !na(v) &&
          (Array.isArray(v) ? v : [v]).forEach(function (e) {
            var n = Me(t, e);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var i = b(n, ["transitionEnd", "transition"]);
              for (var a in i) {
                var s = i[a];
                if (Array.isArray(s)) s = s[f ? s.length - 1 : 0];
                null !== s && (o[a] = s);
              }
              for (var a in r) o[a] = r[a];
            }
          });
        return o;
      }
      var aa,
        sa = {
          useVisualState: oa({
            scrapeMotionValuesFromProps: ea,
            createRenderState: Yi,
            onMount: function (t, e, n) {
              var r = n.renderState,
                o = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (i) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Xi(r, o, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                Qi(e, r);
            },
          }),
        },
        ua = {
          useVisualState: oa({
            scrapeMotionValuesFromProps: ta,
            createRenderState: Li,
          }),
        };
      function la(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r);
          }
        );
      }
      function ca(t, e, n, r) {
        (0, a.useEffect)(
          function () {
            var o = t.current;
            if (n && o) return la(o, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function da(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function fa(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(aa || (aa = {}));
      var va = { pageX: 0, pageY: 0 };
      function pa(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || va;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function ma(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function ha(t, e) {
        return (
          void 0 === e && (e = "page"), { point: fa(t) ? pa(t, e) : ma(t, e) }
        );
      }
      var ya = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, ha(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        ga = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        xa = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function ba(t) {
        return ne && null === window.onpointerdown
          ? t
          : ne && null === window.ontouchstart
          ? xa[t]
          : ne && null === window.onmousedown
          ? ga[t]
          : t;
      }
      function Ea(t, e, n, r) {
        return la(t, ba(e), ya(n, "pointerdown" === e), r);
      }
      function wa(t, e, n, r) {
        return ca(t, ba(e), n && ya(n, "pointerdown" === e), r);
      }
      function Pa(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var Ca = Pa("dragHorizontal"),
        Sa = Pa("dragVertical");
      function Ta(t) {
        var e = !1;
        if ("y" === t) e = Sa();
        else if ("x" === t) e = Ca();
        else {
          var n = Ca(),
            r = Sa();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function Aa() {
        var t = Ta(!0);
        return !t || (t(), !1);
      }
      function ka(t, e, n) {
        return function (r, o) {
          var i;
          da(r) &&
            !Aa() &&
            (null === (i = t.animationState) ||
              void 0 === i ||
              i.setActive(aa.Hover, e),
            null === n || void 0 === n || n(r, o));
        };
      }
      var Oa = function (t, e) {
        return !!e && (t === e || Oa(t, e.parentElement));
      };
      var Ma = new WeakMap(),
        Ra = new WeakMap(),
        Va = function (t) {
          var e;
          null === (e = Ma.get(t.target)) || void 0 === e || e(t);
        },
        Na = function (t) {
          t.forEach(Va);
        };
      function La(t, e, n) {
        var r = (function (t) {
          var e = t.root,
            n = b(t, ["root"]),
            r = e || document;
          Ra.has(r) || Ra.set(r, {});
          var o = Ra.get(r),
            i = JSON.stringify(n);
          return (
            o[i] || (o[i] = new IntersectionObserver(Na, x({ root: e }, n))),
            o[i]
          );
        })(e);
        return (
          Ma.set(t, n),
          r.observe(t),
          function () {
            Ma.delete(t), r.unobserve(t);
          }
        );
      }
      var Fa = { some: 0, all: 1 };
      function Da(t, e, n, r) {
        var o = r.root,
          i = r.margin,
          s = r.amount,
          u = void 0 === s ? "some" : s,
          l = r.once;
        (0, a.useEffect)(
          function () {
            if (t) {
              var r = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: i,
                threshold: "number" === typeof u ? u : Fa[u],
              };
              return La(n.getInstance(), r, function (t) {
                var r,
                  o = t.isIntersecting;
                if (
                  e.isInView !== o &&
                  ((e.isInView = o), !l || o || !e.hasEnteredView)
                ) {
                  o && (e.hasEnteredView = !0),
                    null === (r = n.animationState) ||
                      void 0 === r ||
                      r.setActive(aa.InView, o);
                  var i = n.getProps(),
                    a = o ? i.onViewportEnter : i.onViewportLeave;
                  null === a || void 0 === a || a(t);
                }
              });
            }
          },
          [t, o, i, u]
        );
      }
      function ja(t, e, n, r) {
        var o = r.fallback,
          i = void 0 === o || o;
        (0, a.useEffect)(
          function () {
            t &&
              i &&
              requestAnimationFrame(function () {
                var t;
                e.hasEnteredView = !0;
                var r = n.getProps().onViewportEnter;
                null === r || void 0 === r || r(null),
                  null === (t = n.animationState) ||
                    void 0 === t ||
                    t.setActive(aa.InView, !0);
              });
          },
          [t]
        );
      }
      var Ia = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        Ba = {
          inView: Ia(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              o = t.onViewportLeave,
              i = t.viewport,
              s = void 0 === i ? {} : i,
              u = (0, a.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(n || r || o);
            s.once && u.current.hasEnteredView && (l = !1),
              ("undefined" === typeof IntersectionObserver ? ja : Da)(
                l,
                u.current,
                e,
                s
              );
          }),
          tap: Ia(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              i = t.visualElement,
              s = e || n || r || o,
              u = (0, a.useRef)(!1),
              l = (0, a.useRef)(null);
            function c() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null);
            }
            function d() {
              var t;
              return (
                c(),
                (u.current = !1),
                null === (t = i.animationState) ||
                  void 0 === t ||
                  t.setActive(aa.Tap, !1),
                !Aa()
              );
            }
            function f(t, n) {
              d() &&
                (Oa(i.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n));
            }
            function v(t, e) {
              d() && (null === r || void 0 === r || r(t, e));
            }
            wa(
              i,
              "pointerdown",
              s
                ? function (t, e) {
                    var r;
                    c(),
                      u.current ||
                        ((u.current = !0),
                        (l.current = Un(
                          Ea(window, "pointerup", f),
                          Ea(window, "pointercancel", v)
                        )),
                        null === (r = i.animationState) ||
                          void 0 === r ||
                          r.setActive(aa.Tap, !0),
                        null === n || void 0 === n || n(t, e));
                  }
                : void 0
            ),
              ve(c);
          }),
          focus: Ia(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            ca(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(aa.Focus, !0);
                  }
                : void 0
            ),
              ca(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(aa.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Ia(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              o = t.visualElement;
            wa(o, "pointerenter", e || r ? ka(o, !0, e) : void 0),
              wa(o, "pointerleave", n || r ? ka(o, !1, n) : void 0);
          }),
        };
      function _a() {
        var t = (0, a.useContext)(ie);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          o = le();
        (0, a.useEffect)(function () {
          return r(o);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(o);
              },
            ]
          : [!0];
      }
      function Ua(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var Ga = function (t) {
          return /^0[^.\s]+$/.test(t);
        },
        Wa = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        Ha = [
          sn,
          xn,
          gn,
          yn,
          En,
          bn,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        Xa = function (t) {
          return Ha.find(Wa(t));
        },
        Ya = P(P([], w(Ha), !1), [Rn, In], !1),
        za = function (t) {
          return Ya.find(Wa(t));
        };
      function $a(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ge(n));
      }
      function Za(t, e) {
        var n = Re(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          o = r.transitionEnd,
          i = void 0 === o ? {} : o;
        r.transition;
        var a = b(r, ["transitionEnd", "transition"]);
        for (var s in (a = x(x({}, a), i))) {
          $a(t, s, Yr(a[s]));
        }
      }
      function Ka(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function qa(t, e, n) {
        var r;
        void 0 === n && (n = {});
        var o = Re(t, e, n.custom),
          i = (o || {}).transition,
          a = void 0 === i ? t.getDefaultTransition() || {} : i;
        n.transitionOverride && (a = n.transitionOverride);
        var s = o
            ? function () {
                return Ja(t, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          u = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var o = a.delayChildren,
                  i = void 0 === o ? 0 : o,
                  s = a.staggerChildren,
                  u = a.staggerDirection;
                return (function (t, e, n, r, o, i) {
                  void 0 === n && (n = 0);
                  void 0 === r && (r = 0);
                  void 0 === o && (o = 1);
                  var a = [],
                    s = (t.variantChildren.size - 1) * r,
                    u =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * r;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), s - t * r;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(Qa)
                      .forEach(function (t, r) {
                        a.push(
                          qa(t, e, x(x({}, i), { delay: n + u(r) })).then(
                            function () {
                              return t.notifyAnimationComplete(e);
                            }
                          )
                        );
                      }),
                    Promise.all(a)
                  );
                })(t, e, i + r, s, u, n);
              }
            : function () {
                return Promise.resolve();
              },
          l = a.when;
        if (l) {
          var c = w("beforeChildren" === l ? [s, u] : [u, s], 2),
            d = c[0],
            f = c[1];
          return d().then(f);
        }
        return Promise.all([s(), u(n.delay)]);
      }
      function Ja(t, e, n) {
        var r,
          o = void 0 === n ? {} : n,
          i = o.delay,
          a = void 0 === i ? 0 : i,
          s = o.transitionOverride,
          u = o.type,
          l = t.makeTargetAnimatable(e),
          c = l.transition,
          d = void 0 === c ? t.getDefaultTransition() : c,
          f = l.transitionEnd,
          v = b(l, ["transition", "transitionEnd"]);
        s && (d = s);
        var p = [],
          m =
            u &&
            (null === (r = t.animationState) || void 0 === r
              ? void 0
              : r.getState()[u]);
        for (var h in v) {
          var y = t.getValue(h),
            g = v[h];
          if (!(!y || void 0 === g || (m && ts(m, h)))) {
            var E = x({ delay: a }, d);
            t.shouldReduceMotion &&
              qo(h) &&
              (E = x(x({}, E), { type: !1, delay: 0 }));
            var w = Qr(h, y, g, E);
            p.push(w);
          }
        }
        return Promise.all(p).then(function () {
          f && Za(t, f);
        });
      }
      function Qa(t, e) {
        return t.sortNodePosition(e);
      }
      function ts(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          o = n.hasOwnProperty(e) && !0 !== r[e];
        return (r[e] = !1), o;
      }
      var es = [
          aa.Animate,
          aa.InView,
          aa.Focus,
          aa.Hover,
          aa.Tap,
          aa.Drag,
          aa.Exit,
        ],
        ns = P([], w(es), !1).reverse(),
        rs = es.length;
      function os(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(e),
                  Array.isArray(e))
                ) {
                  var o = e.map(function (e) {
                    return qa(t, e, n);
                  });
                  r = Promise.all(o);
                } else if ("string" === typeof e) r = qa(t, e, n);
                else {
                  var i = "function" === typeof e ? Re(t, e, n.custom) : e;
                  r = Ja(t, i, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function is(t) {
        var e = os(t),
          n = (function () {
            var t;
            return (
              ((t = {})[aa.Animate] = as(!0)),
              (t[aa.InView] = as()),
              (t[aa.Hover] = as()),
              (t[aa.Tap] = as()),
              (t[aa.Drag] = as()),
              (t[aa.Focus] = as()),
              (t[aa.Exit] = as()),
              t
            );
          })(),
          r = {},
          o = !0,
          i = function (e, n) {
            var r = Re(t, n);
            if (r) {
              r.transition;
              var o = r.transitionEnd,
                i = b(r, ["transition", "transitionEnd"]);
              e = x(x(x({}, e), i), o);
            }
            return e;
          };
        function a(a, s) {
          for (
            var u,
              l = t.getProps(),
              c = t.getVariantContext(!0) || {},
              d = [],
              f = new Set(),
              v = {},
              p = 1 / 0,
              m = function (e) {
                var r = ns[e],
                  m = n[r],
                  h = null !== (u = l[r]) && void 0 !== u ? u : c[r],
                  y = Oe(h),
                  g = r === s ? m.isActive : null;
                !1 === g && (p = e);
                var b = h === c[r] && h !== l[r] && y;
                if (
                  (b && o && t.manuallyAnimateOnMount && (b = !1),
                  (m.protectedKeys = x({}, v)),
                  (!m.isActive && null === g) ||
                    (!h && !m.prevProp) ||
                    na(h) ||
                    "boolean" === typeof h)
                )
                  return "continue";
                var E = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (ke(e)) return !Ua(e, t);
                    return !1;
                  })(m.prevProp, h),
                  C = E || (r === s && m.isActive && !b && y) || (e > p && y),
                  S = Array.isArray(h) ? h : [h],
                  T = S.reduce(i, {});
                !1 === g && (T = {});
                var A = m.prevResolvedValues,
                  k = void 0 === A ? {} : A,
                  O = x(x({}, k), T),
                  M = function (t) {
                    (C = !0), f.delete(t), (m.needsAnimating[t] = !0);
                  };
                for (var R in O) {
                  var V = T[R],
                    N = k[R];
                  v.hasOwnProperty(R) ||
                    (V !== N
                      ? Mr(V) && Mr(N)
                        ? !Ua(V, N) || E
                          ? M(R)
                          : (m.protectedKeys[R] = !0)
                        : void 0 !== V
                        ? M(R)
                        : f.add(R)
                      : void 0 !== V && f.has(R)
                      ? M(R)
                      : (m.protectedKeys[R] = !0));
                }
                (m.prevProp = h),
                  (m.prevResolvedValues = T),
                  m.isActive && (v = x(x({}, v), T)),
                  o && t.blockInitialAnimation && (C = !1),
                  C &&
                    !b &&
                    d.push.apply(
                      d,
                      P(
                        [],
                        w(
                          S.map(function (t) {
                            return { animation: t, options: x({ type: r }, a) };
                          })
                        ),
                        !1
                      )
                    );
              },
              h = 0;
            h < rs;
            h++
          )
            m(h);
          if (((r = x({}, v)), f.size)) {
            var y = {};
            f.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (y[e] = n);
            }),
              d.push({ animation: y });
          }
          var g = Boolean(d.length);
          return (
            o && !1 === l.initial && !t.manuallyAnimateOnMount && (g = !1),
            (o = !1),
            g ? e(d) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== r[t];
          },
          animateChanges: a,
          setActive: function (e, r, o) {
            var i;
            if (n[e].isActive === r) return Promise.resolve();
            null === (i = t.variantChildren) ||
              void 0 === i ||
              i.forEach(function (t) {
                var n;
                return null === (n = t.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(e, r);
              }),
              (n[e].isActive = r);
            var s = a(o, e);
            for (var u in n) n[u].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function as(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var ss = {
          animation: Ia(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = is(e)),
              na(n) &&
                (0, a.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: Ia(function (t) {
            var e = t.custom,
              n = t.visualElement,
              r = w(_a(), 2),
              o = r[0],
              i = r[1],
              s = (0, a.useContext)(ie);
            (0, a.useEffect)(
              function () {
                var t, r;
                n.isPresent = o;
                var a =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(aa.Exit, !o, {
                        custom:
                          null !==
                            (r =
                              null === s || void 0 === s ? void 0 : s.custom) &&
                          void 0 !== r
                            ? r
                            : e,
                      });
                !o && (null === a || void 0 === a || a.then(i));
              },
              [o]
            );
          }),
        },
        us = (function () {
          function t(t, e, n) {
            var r = this,
              o = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                  var t = ds(r.lastMoveEventInfo, r.history),
                    e = null !== r.startEvent,
                    n = Ao(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var o = t.point,
                      i = te().timestamp;
                    r.history.push(x(x({}, o), { timestamp: i }));
                    var a = r.handlers,
                      s = a.onStart,
                      u = a.onMove;
                    e ||
                      (s && s(r.lastMoveEvent, t),
                      (r.startEvent = r.lastMoveEvent)),
                      u && u(r.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, e) {
                (r.lastMoveEvent = t),
                  (r.lastMoveEventInfo = ls(e, r.transformPagePoint)),
                  da(t) && 0 === t.buttons
                    ? r.handlePointerUp(t, e)
                    : ee.update(r.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, e) {
                r.end();
                var n = r.handlers,
                  o = n.onEnd,
                  i = n.onSessionEnd,
                  a = ds(ls(e, r.transformPagePoint), r.history);
                r.startEvent && o && o(t, a), i && i(t, a);
              }),
              !(fa(t) && t.touches.length > 1))
            ) {
              (this.handlers = e), (this.transformPagePoint = o);
              var i = ls(ha(t), this.transformPagePoint),
                a = i.point,
                s = te().timestamp;
              this.history = [x(x({}, a), { timestamp: s })];
              var u = e.onSessionStart;
              u && u(t, ds(i, this.history)),
                (this.removeListeners = Un(
                  Ea(window, "pointermove", this.handlePointerMove),
                  Ea(window, "pointerup", this.handlePointerUp),
                  Ea(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                Zt.update(this.updatePoint);
            }),
            t
          );
        })();
      function ls(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function cs(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function ds(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: cs(n, vs(e)),
          offset: cs(n, fs(e)),
          velocity: ps(e, 0.1),
        };
      }
      function fs(t) {
        return t[0];
      }
      function vs(t) {
        return t[t.length - 1];
      }
      function ps(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, o = vs(t);
          n >= 0 && ((r = t[n]), !(o.timestamp - r.timestamp > xr(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var i = (o.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function ms(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function hs(t, e) {
        var n,
          r = e.min - t.min,
          o = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((r = (n = w([o, r], 2))[0]), (o = n[1])),
          { min: r, max: o }
        );
      }
      var ys = 0.35;
      function gs(t, e, n) {
        return { min: xs(t, e), max: xs(t, n) };
      }
      function xs(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      function bs(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function Es(t, e) {
        return bs(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var ws = new WeakMap(),
        Ps = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                o = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new us(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(),
                        o && n.snapToCursor(ha(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var r,
                        o = n.getProps(),
                        i = o.drag,
                        a = o.dragPropagation,
                        s = o.onDragStart;
                      (!i ||
                        a ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = Ta(i)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        Yo(function (t) {
                          var e,
                            r,
                            o = n.getAxisMotionValue(t).get() || 0;
                          if (gn.test(o)) {
                            var i =
                              null ===
                                (r =
                                  null === (e = n.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t];
                            if (i) o = ko(i) * (parseFloat(o) / 100);
                          }
                          n.originPoint[t] = o;
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(aa.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        o = r.dragPropagation,
                        i = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        s = r.onDrag;
                      if (o || n.openGlobalLock) {
                        var u = e.offset;
                        if (i && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (t, e) {
                              void 0 === e && (e = 10);
                              var n = null;
                              Math.abs(t.y) > e
                                ? (n = "y")
                                : Math.abs(t.x) > e && (n = "x");
                              return n;
                            })(u)),
                            void (
                              null !== n.currentDirection &&
                              (null === a ||
                                void 0 === a ||
                                a(n.currentDirection))
                            )
                          );
                        n.updateAxis("x", e.point, u),
                          n.updateAxis("y", e.point, u),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var o = this.getProps().onDragEnd;
                null === o || void 0 === o || o(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(aa.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag;
              if (n && Cs(t, r, this.currentDirection)) {
                var o = this.getAxisMotionValue(t),
                  i = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  (i = (function (t, e, n) {
                    var r = e.min,
                      o = e.max;
                    return (
                      void 0 !== r && t < r
                        ? (t = n ? De(r, t, n.min) : Math.max(t, r))
                        : void 0 !== o &&
                          t > o &&
                          (t = n ? De(o, t, n.max) : Math.min(t, o)),
                      t
                    );
                  })(i, this.constraints[t], this.elastic[t])),
                  o.set(i);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t = this,
                e = this.getProps(),
                n = e.dragConstraints,
                r = e.dragElastic,
                o = (this.visualElement.projection || {}).layout,
                i = this.constraints;
              n && Ae(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !o) &&
                    (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        o = e.bottom,
                        i = e.right;
                      return { x: ms(t.x, r, i), y: ms(t.y, n, o) };
                    })(o.actual, n)),
                (this.elastic = (function (t) {
                  return (
                    void 0 === t && (t = ys),
                    !1 === t ? (t = 0) : !0 === t && (t = ys),
                    { x: gs(t, "left", "right"), y: gs(t, "top", "bottom") }
                  );
                })(r)),
                i !== this.constraints &&
                  o &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  Yo(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        );
                      })(o.actual[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !Ae(e)) return !1;
              var r = e.current,
                o = this.visualElement.projection;
              if (!o || !o.layout) return !1;
              var i = (function (t, e, n) {
                  var r = Es(t, n),
                    o = e.scroll;
                  return o && (xo(r.x, o.x), xo(r.y, o.y)), r;
                })(r, o.root, this.visualElement.getTransformPagePoint()),
                a = (function (t, e) {
                  return { x: hs(t.x, e.x), y: hs(t.y, e.y) };
                })(o.layout.actual, i);
              if (n) {
                var s = n(
                  (function (t) {
                    var e = t.x,
                      n = t.y;
                    return {
                      top: n.min,
                      right: e.max,
                      bottom: n.max,
                      left: e.min,
                    };
                  })(a)
                );
                (this.hasMutatedConstraints = !!s), s && (a = bs(s));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                r = n.drag,
                o = n.dragMomentum,
                i = n.dragElastic,
                a = n.dragTransition,
                s = n.dragSnapToOrigin,
                u = n.onDragTransitionEnd,
                l = this.constraints || {},
                c = Yo(function (n) {
                  var u;
                  if (Cs(n, r, e.currentDirection)) {
                    var c =
                      null !==
                        (u = null === l || void 0 === l ? void 0 : l[n]) &&
                      void 0 !== u
                        ? u
                        : {};
                    s && (c = { min: 0, max: 0 });
                    var d = i ? 200 : 1e6,
                      f = i ? 40 : 1e7,
                      v = x(
                        x(
                          {
                            type: "inertia",
                            velocity: o ? t[n] : 0,
                            bounceStiffness: d,
                            bounceDamping: f,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          a
                        ),
                        c
                      );
                    return e.startAxisValueAnimation(n, v);
                  }
                });
              return Promise.all(c).then(u);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return Qr(t, this.getAxisMotionValue(t), 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              Yo(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase(),
                o = this.visualElement.getProps()[r];
              return (
                o ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              Yo(function (n) {
                if (Cs(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    o = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var i = r.layout.actual[n],
                      a = i.min,
                      s = i.max;
                    o.set(t[n] - De(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                o = n.dragConstraints,
                i = this.visualElement.projection;
              if (Ae(o) && i && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                Yo(function (t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var r = n.get();
                    a[t] = (function (t, e) {
                      var n = 0.5,
                        r = ko(t),
                        o = ko(e);
                      return (
                        o > r
                          ? (n = Qe(e.min, e.max - r, t.min))
                          : r > o && (n = Qe(t.min, t.max - o, e.min)),
                        He(0, 1, n)
                      );
                    })({ min: r, max: r }, e.constraints[t]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = i.root) || void 0 === t || t.updateScroll(),
                  i.updateLayout(),
                  this.resolveConstraints(),
                  Yo(function (t) {
                    if (Cs(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        o = e.constraints[t],
                        i = o.min,
                        s = o.max;
                      n.set(De(i, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              ws.set(this.visualElement, this);
              var n = Ea(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      o = n.dragListener;
                    r && (void 0 === o || o) && e.start(t);
                  }
                ),
                r = function () {
                  Ae(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                o = this.visualElement.projection,
                i = o.addEventListener("measure", r);
              o &&
                !o.layout &&
                (null === (t = o.root) || void 0 === t || t.updateScroll(),
                o.updateLayout()),
                r();
              var a = la(window, "resize", function () {
                e.scalePositionWithinConstraints();
              });
              return (
                o.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (Yo(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), n(), i();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = void 0 !== e && e,
                r = t.dragDirectionLock,
                o = void 0 !== r && r,
                i = t.dragPropagation,
                a = void 0 !== i && i,
                s = t.dragConstraints,
                u = void 0 !== s && s,
                l = t.dragElastic,
                c = void 0 === l ? ys : l,
                d = t.dragMomentum,
                f = void 0 === d || d;
              return x(x({}, t), {
                drag: n,
                dragDirectionLock: o,
                dragPropagation: a,
                dragConstraints: u,
                dragElastic: c,
                dragMomentum: f,
              });
            }),
            t
          );
        })();
      function Cs(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var Ss = {
          pan: Ia(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              i = t.visualElement,
              s = e || n || r || o,
              u = (0, a.useRef)(null),
              l = (0, a.useContext)(Ee).transformPagePoint,
              c = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (u.current = null), r && r(t, e);
                },
              };
            (0, a.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(c);
            }),
              wa(
                i,
                "pointerdown",
                s &&
                  function (t) {
                    u.current = new us(t, c, { transformPagePoint: l });
                  }
              ),
              ve(function () {
                return u.current && u.current.end();
              });
          }),
          drag: Ia(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = ae(function () {
                return new Ps(n);
              });
            (0, a.useEffect)(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              (0, a.useEffect)(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          }),
        },
        Ts = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var As = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            r = t.build,
            o = t.getBaseTarget,
            i = t.makeTargetAnimatable,
            a = t.measureViewportBox,
            s = t.render,
            u = t.readValueFromInstance,
            l = t.removeValueFromRenderState,
            c = t.sortNodePosition,
            d = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var f = t.parent,
              v = t.props,
              p = t.presenceId,
              m = t.blockInitialAnimation,
              h = t.visualState,
              y = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var g,
              b,
              E = !1,
              C = h.latestValues,
              S = h.renderState,
              T = (function () {
                var t = Ts.map(function () {
                    return new _e();
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear();
                      });
                    },
                    updatePropListeners: function (t) {
                      Ts.forEach(function (r) {
                        var o,
                          i = "on" + r,
                          a = t[i];
                        null === (o = e[r]) || void 0 === o || o.call(e),
                          a && (e[r] = n[i](a));
                      });
                    },
                  };
                return (
                  t.forEach(function (t, e) {
                    (n["on" + Ts[e]] = function (e) {
                      return t.add(e);
                    }),
                      (n["notify" + Ts[e]] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n];
                        return t.notify.apply(t, P([], w(e), !1));
                      });
                  }),
                  n
                );
              })(),
              A = new Map(),
              k = new Map(),
              O = {},
              M = x({}, C);
            function R() {
              g && E && (V(), s(g, S, v.style, _.projection));
            }
            function V() {
              r(_, S, C, e, v);
            }
            function N() {
              T.notifyUpdate(C);
            }
            function L(t, e) {
              var n = e.onChange(function (e) {
                  (C[t] = e), v.onUpdate && ee.update(N, !1, !0);
                }),
                r = e.onRenderRequest(_.scheduleRender);
              k.set(t, function () {
                n(), r();
              });
            }
            var F = d(v);
            for (var D in F) {
              var j = F[D];
              void 0 !== C[D] && We(j) && j.set(C[D], !1);
            }
            var I = Ve(v),
              B = Ne(v),
              _ = x(
                x(
                  {
                    treeType: n,
                    current: null,
                    depth: f ? f.depth + 1 : 0,
                    parent: f,
                    children: new Set(),
                    presenceId: p,
                    shouldReduceMotion: y,
                    variantChildren: B ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === f || void 0 === f ? void 0 : f.isMounted()
                    ),
                    blockInitialAnimation: m,
                    isMounted: function () {
                      return Boolean(g);
                    },
                    mount: function (t) {
                      (E = !0),
                        (g = _.current = t),
                        _.projection && _.projection.mount(t),
                        B &&
                          f &&
                          !I &&
                          (b =
                            null === f || void 0 === f
                              ? void 0
                              : f.addVariantChild(_)),
                        A.forEach(function (t, e) {
                          return L(e, t);
                        }),
                        null === f || void 0 === f || f.children.add(_),
                        _.setProps(v);
                    },
                    unmount: function () {
                      var t;
                      null === (t = _.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        Zt.update(N),
                        Zt.render(R),
                        k.forEach(function (t) {
                          return t();
                        }),
                        null === b || void 0 === b || b(),
                        null === f || void 0 === f || f.children.delete(_),
                        T.clearAllListeners(),
                        (g = void 0),
                        (E = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = _.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return c && n === t.treeType
                        ? c(_.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return B
                        ? _
                        : null === f || void 0 === f
                        ? void 0
                        : f.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return v.layoutId;
                    },
                    getInstance: function () {
                      return g;
                    },
                    getStaticValue: function (t) {
                      return C[t];
                    },
                    setStaticValue: function (t, e) {
                      return (C[t] = e);
                    },
                    getLatestValues: function () {
                      return C;
                    },
                    setVisibility: function (t) {
                      _.isVisible !== t &&
                        ((_.isVisible = t), _.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), i(_, t, v, e);
                    },
                    measureViewportBox: function () {
                      return a(g, v);
                    },
                    addValue: function (t, e) {
                      _.hasValue(t) && _.removeValue(t),
                        A.set(t, e),
                        (C[t] = e.get()),
                        L(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      A.delete(t),
                        null === (e = k.get(t)) || void 0 === e || e(),
                        k.delete(t),
                        delete C[t],
                        l(t, S);
                    },
                    hasValue: function (t) {
                      return A.has(t);
                    },
                    getValue: function (t, e) {
                      var n = A.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = Ge(e)), _.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return A.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = C[t]) && void 0 !== n
                        ? n
                        : u(g, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      M[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(v, t);
                        if (void 0 !== e && !We(e)) return e;
                      }
                      return M[t];
                    },
                  },
                  T
                ),
                {
                  build: function () {
                    return V(), S;
                  },
                  scheduleRender: function () {
                    ee.render(R, !1, !0);
                  },
                  syncRender: R,
                  setProps: function (t) {
                    (t.transformTemplate || v.transformTemplate) &&
                      _.scheduleRender(),
                      (v = t),
                      T.updatePropListeners(t),
                      (O = (function (t, e, n) {
                        var r;
                        for (var o in e) {
                          var i = e[o],
                            a = n[o];
                          if (We(i)) t.addValue(o, i);
                          else if (We(a)) t.addValue(o, Ge(i));
                          else if (a !== i)
                            if (t.hasValue(o)) {
                              var s = t.getValue(o);
                              !s.hasAnimated && s.set(i);
                            } else
                              t.addValue(
                                o,
                                Ge(
                                  null !== (r = t.getStaticValue(o)) &&
                                    void 0 !== r
                                    ? r
                                    : i
                                )
                              );
                        }
                        for (var o in n) void 0 === e[o] && t.removeValue(o);
                        return e;
                      })(_, d(v), O));
                  },
                  getProps: function () {
                    return v;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = v.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return v.transition;
                  },
                  getTransformPagePoint: function () {
                    return v.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null === f || void 0 === f
                        ? void 0
                        : f.getVariantContext();
                    if (!I) {
                      var e =
                        (null === f || void 0 === f
                          ? void 0
                          : f.getVariantContext()) || {};
                      return void 0 !== v.initial && (e.initial = v.initial), e;
                    }
                    for (var n = {}, r = 0; r < Os; r++) {
                      var o = ks[r],
                        i = v[o];
                      (Oe(i) || !1 === i) && (n[o] = i);
                    }
                    return n;
                  },
                }
              );
            return _;
          };
        },
        ks = P(["initial"], w(es), !1),
        Os = ks.length;
      function Ms(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Rs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Vs(t, e, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          );
        var r = w(
            (function (t) {
              var e = Rs.exec(t);
              if (!e) return [,];
              var n = w(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          o = r[0],
          i = r[1];
        if (o) {
          var a = window.getComputedStyle(e).getPropertyValue(o);
          return a ? a.trim() : Ms(i) ? Vs(i, e, n + 1) : i;
        }
      }
      var Ns,
        Ls = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Fs = function (t) {
          return Ls.has(t);
        },
        Ds = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        js = function (t) {
          return t === sn || t === xn;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Ns || (Ns = {}));
      var Is = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        Bs = function (t, e) {
          return function (n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return Is(i[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Is(a[1], t) : 0;
          };
        },
        _s = new Set(["x", "y", "z"]),
        Us = $o.filter(function (t) {
          return !_s.has(t);
        });
      var Gs = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              o = void 0 === r ? "0" : r,
              i = e.paddingRight,
              a = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a);
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              o = void 0 === r ? "0" : r,
              i = e.paddingBottom,
              a = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(o) - parseFloat(a);
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: Bs(4, 13),
          y: Bs(5, 14),
        },
        Ws = function (t, e, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (e = x({}, e)),
            (r = x({}, r));
          var o = Object.keys(e).filter(Fs),
            i = [],
            a = !1,
            s = [];
          if (
            (o.forEach(function (o) {
              var u = t.getValue(o);
              if (t.hasValue(o)) {
                var l,
                  c = n[o],
                  d = Xa(c),
                  f = e[o];
                if (Mr(f)) {
                  var v = f.length,
                    p = null === f[0] ? 1 : 0;
                  (c = f[p]), (d = Xa(c));
                  for (var m = p; m < v; m++)
                    l ? Xa(f[m]) : (l = Xa(f[m])) === d || (js(d) && js(l));
                } else l = Xa(f);
                if (d !== l)
                  if (js(d) && js(l)) {
                    var h = u.get();
                    "string" === typeof h && u.set(parseFloat(h)),
                      "string" === typeof f
                        ? (e[o] = parseFloat(f))
                        : Array.isArray(f) &&
                          l === xn &&
                          (e[o] = f.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === l || void 0 === l ? void 0 : l.transform) &&
                    (0 === c || 0 === f)
                      ? 0 === c
                        ? u.set(l.transform(c))
                        : (e[o] = d.transform(f))
                      : (a ||
                          ((i = (function (t) {
                            var e = [];
                            return (
                              Us.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (a = !0)),
                        s.push(o),
                        (r[o] = void 0 !== r[o] ? r[o] : e[o]),
                        Ds(u, f));
              }
            }),
            s.length)
          ) {
            var u = (function (t, e, n) {
              var r = e.measureViewportBox(),
                o = e.getInstance(),
                i = getComputedStyle(o),
                a = i.display,
                s = {};
              "none" === a && e.setStaticValue("display", t.display || "block"),
                n.forEach(function (t) {
                  s[t] = Gs[t](r, i);
                }),
                e.syncRender();
              var u = e.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = e.getValue(n);
                  Ds(r, s[n]), (t[n] = Gs[n](u, i));
                }),
                t
              );
            })(e, t, s);
            return (
              i.length &&
                i.forEach(function (e) {
                  var n = w(e, 2),
                    r = n[0],
                    o = n[1];
                  t.getValue(r).set(o);
                }),
              t.syncRender(),
              { target: u, transitionEnd: r }
            );
          }
          return { target: e, transitionEnd: r };
        };
      function Hs(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(Fs);
        })(e)
          ? Ws(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var Xs = function (t, e, n, r) {
        var o = (function (t, e, n) {
          var r,
            o = b(e, []),
            i = t.getInstance();
          if (!(i instanceof Element)) return { target: o, transitionEnd: n };
          for (var a in (n && (n = x({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (Ms(e)) {
              var n = Vs(e, i);
              n && t.set(n);
            }
          }),
          o)) {
            var s = o[a];
            if (Ms(s)) {
              var u = Vs(s, i);
              u &&
                ((o[a] = u),
                n && ((null !== (r = n[a]) && void 0 !== r) || (n[a] = s)));
            }
          }
          return { target: o, transitionEnd: n };
        })(t, e, r);
        return Hs(t, (e = o.target), n, (r = o.transitionEnd));
      };
      var Ys = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (qo(e)) {
              var n = Wr(e);
              return (n && n.default) || 0;
            }
            var r,
              o = ((r = t), window.getComputedStyle(r));
            return (Ri(e) ? o.getPropertyValue(e) : o[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return Es(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var o = n.transformValues;
            void 0 === r && (r = !0);
            var i = e.transition,
              a = e.transitionEnd,
              s = b(e, ["transition", "transitionEnd"]),
              u = (function (t, e, n) {
                var r,
                  o,
                  i = {};
                for (var a in t)
                  i[a] =
                    null !== (r = Ka(a, e)) && void 0 !== r
                      ? r
                      : null === (o = n.getValue(a)) || void 0 === o
                      ? void 0
                      : o.get();
                return i;
              })(s, i || {}, t);
            if ((o && (a && (a = o(a)), s && (s = o(s)), u && (u = o(u))), r)) {
              !(function (t, e, n) {
                var r,
                  o,
                  i,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  u = s.length;
                if (u)
                  for (var l = 0; l < u; l++) {
                    var c = s[l],
                      d = e[c],
                      f = null;
                    Array.isArray(d) && (f = d[0]),
                      null === f &&
                        (f =
                          null !==
                            (o =
                              null !== (r = n[c]) && void 0 !== r
                                ? r
                                : t.readValue(c)) && void 0 !== o
                            ? o
                            : e[c]),
                      void 0 !== f &&
                        null !== f &&
                        ("string" === typeof f &&
                        (/^\-?\d*\.?\d+$/.test(f) || Ga(f))
                          ? (f = parseFloat(f))
                          : !za(f) && In.test(d) && (f = Hr(c, d)),
                        t.addValue(c, Ge(f)),
                        (null !== (i = (a = n)[c]) && void 0 !== i) ||
                          (a[c] = f),
                        t.setBaseTarget(c, f));
                  }
              })(t, s, u);
              var l = Xs(t, s, u, a);
              (a = l.transitionEnd), (s = l.target);
            }
            return x({ transition: i, transitionEnd: a }, s);
          },
          scrapeMotionValuesFromProps: ta,
          build: function (t, e, n, r, o) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              Ni(e, n, r, o.transformTemplate);
          },
          render: qi,
        },
        zs = As(Ys),
        $s = As(
          x(x({}, Ys), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return qo(e)
                ? (null === (n = Wr(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = Ji.has(e) ? e : Ki(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: ea,
            build: function (t, e, n, r, o) {
              Xi(e, n, r, o.transformTemplate);
            },
            render: Qi,
          })
        ),
        Zs = function (t, e) {
          return ki(t)
            ? $s(e, { enableHardwareAcceleration: !1 })
            : zs(e, { enableHardwareAcceleration: !0 });
        };
      function Ks(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var qs = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" === typeof t) {
              if (!xn.test(t)) return t;
              t = parseFloat(t);
            }
            var n = Ks(t, e.target.x),
              r = Ks(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Js = "_$css",
        Qs = {
          correct: function (t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              o = t,
              i = t.includes("var("),
              a = [];
            i &&
              (t = t.replace(Rs, function (t) {
                return a.push(t), Js;
              }));
            var s = In.parse(t);
            if (s.length > 5) return o;
            var u = In.createTransformer(t),
              l = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              d = r.y.scale * n.y;
            (s[0 + l] /= c), (s[1 + l] /= d);
            var f = De(c, d, 0.5);
            "number" === typeof s[2 + l] && (s[2 + l] /= f),
              "number" === typeof s[3 + l] && (s[3 + l] /= f);
            var v = u(s);
            if (i) {
              var p = 0;
              v = v.replace(Js, function () {
                var t = a[p];
                return p++, t;
              });
            }
            return v;
          },
        },
        tu = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            g(e, t),
            (e.prototype.componentDidMount = function () {
              var t,
                e = this,
                n = this.props,
                r = n.visualElement,
                o = n.layoutGroup,
                i = n.switchLayoutGroup,
                a = n.layoutId,
                s = r.projection;
              (t = eu),
                Object.assign(Ho, t),
                s &&
                  ((null === o || void 0 === o ? void 0 : o.group) &&
                    o.group.add(s),
                  (null === i || void 0 === i ? void 0 : i.register) &&
                    a &&
                    i.register(s),
                  s.root.didUpdate(),
                  s.addEventListener("animationComplete", function () {
                    e.safeToRemove();
                  }),
                  s.setOptions(
                    x(x({}, s.options), {
                      onExitComplete: function () {
                        return e.safeToRemove();
                      },
                    })
                  )),
                (ri.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                o = n.visualElement,
                i = n.drag,
                a = n.isPresent,
                s = o.projection;
              return s
                ? ((s.isPresent = a),
                  i || t.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        ee.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                o = e.projection;
              o &&
                (o.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(o),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(o));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null === t || void 0 === t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(a.Component);
      var eu = {
          borderRadius: x(x({}, qs), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: qs,
          borderTopRightRadius: qs,
          borderBottomLeftRadius: qs,
          borderBottomRightRadius: qs,
          boxShadow: Qs,
        },
        nu = {
          measureLayout: function (t) {
            var e = w(_a(), 2),
              n = e[0],
              r = e[1],
              o = (0, a.useContext)(fe);
            return a.createElement(
              tu,
              x({}, t, {
                layoutGroup: o,
                switchLayoutGroup: (0, a.useContext)(Pi),
                isPresent: n,
                safeToRemove: r,
              })
            );
          },
        },
        ru = oi({
          attachResizeListener: function (t, e) {
            return (
              t.addEventListener("resize", e, { passive: !0 }),
              function () {
                return t.removeEventListener("resize", e);
              }
            );
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
        }),
        ou = { current: void 0 },
        iu = oi({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!ou.current) {
              var t = new ru(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ou.current = t);
            }
            return ou.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : "none";
          },
        }),
        au = x(x(x(x({}, ss), Ba), Ss), nu),
        su = Ti(function (t, e) {
          return (function (t, e, n, r, o) {
            var i = e.forwardMotionProps,
              a = void 0 !== i && i,
              s = ki(t) ? sa : ua;
            return x(x({}, s), {
              preloadedFeatures: n,
              useRender: $i(a),
              createVisualElement: r,
              projectionNodeConstructor: o,
              Component: t,
            });
          })(t, e, au, Zs, iu);
        });
      function uu(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      function lu() {
        return (
          (lu =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          lu.apply(this, arguments)
        );
      }
      var cu = {
          ease: [0.25, 0.1, 0.25, 1],
          easeIn: [0.4, 0, 1, 1],
          easeOut: [0, 0, 0.2, 1],
          easeInOut: [0.4, 0, 0.2, 1],
        },
        du = {
          position: { left: 0, top: 0, bottom: 0, width: "100%" },
          enter: { x: 0, y: 0 },
          exit: { x: "-100%", y: 0 },
        },
        fu = {
          position: { right: 0, top: 0, bottom: 0, width: "100%" },
          enter: { x: 0, y: 0 },
          exit: { x: "100%", y: 0 },
        },
        vu = {
          position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
          enter: { x: 0, y: 0 },
          exit: { x: 0, y: "-100%" },
        },
        pu = {
          position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
          enter: { x: 0, y: 0 },
          exit: { x: 0, y: "100%" },
        };
      function mu(t) {
        var e;
        switch (null != (e = null == t ? void 0 : t.direction) ? e : "right") {
          case "right":
          default:
            return fu;
          case "left":
            return du;
          case "bottom":
            return pu;
          case "top":
            return vu;
        }
      }
      var hu = {
          enter: { duration: 0.2, ease: cu.easeOut },
          exit: { duration: 0.1, ease: cu.easeIn },
        },
        yu = function (t, e) {
          return lu({}, t, {
            delay: (0, i.hj)(e) ? e : null == e ? void 0 : e.enter,
          });
        },
        gu = function (t, e) {
          return lu({}, t, {
            delay: (0, i.hj)(e) ? e : null == e ? void 0 : e.exit,
          });
        },
        xu = [
          "in",
          "unmountOnExit",
          "animateOpacity",
          "startingHeight",
          "endingHeight",
          "style",
          "className",
          "transition",
          "transitionEnd",
        ],
        bu = {
          exit: {
            height: { duration: 0.2, ease: cu.ease },
            opacity: { duration: 0.3, ease: cu.ease },
          },
          enter: {
            height: { duration: 0.3, ease: cu.ease },
            opacity: { duration: 0.4, ease: cu.ease },
          },
        },
        Eu = {
          exit: function (t) {
            var e,
              n,
              r = t.animateOpacity,
              o = t.startingHeight,
              i = t.transition,
              a = t.transitionEnd,
              s = t.delay;
            return lu(
              {},
              r && {
                opacity:
                  ((n = o),
                  null != n && parseInt(n.toString(), 10) > 0 ? 1 : 0),
              },
              {
                height: o,
                transitionEnd: null == a ? void 0 : a.exit,
                transition:
                  null != (e = null == i ? void 0 : i.exit)
                    ? e
                    : gu(bu.exit, s),
              }
            );
          },
          enter: function (t) {
            var e,
              n = t.animateOpacity,
              r = t.endingHeight,
              o = t.transition,
              i = t.transitionEnd,
              a = t.delay;
            return lu({}, n && { opacity: 1 }, {
              height: r,
              transitionEnd: null == i ? void 0 : i.enter,
              transition:
                null != (e = null == o ? void 0 : o.enter)
                  ? e
                  : yu(bu.enter, a),
            });
          },
        },
        wu = a.forwardRef(function (t, e) {
          var n = t.in,
            r = t.unmountOnExit,
            o = t.animateOpacity,
            s = void 0 === o || o,
            u = t.startingHeight,
            l = void 0 === u ? 0 : u,
            c = t.endingHeight,
            d = void 0 === c ? "auto" : c,
            f = t.style,
            v = t.className,
            p = t.transition,
            m = t.transitionEnd,
            h = uu(t, xu),
            y = a.useState(!1),
            g = y[0],
            x = y[1];
          a.useEffect(function () {
            var t = setTimeout(function () {
              x(!0);
            });
            return function () {
              return clearTimeout(t);
            };
          }, []),
            (0, i.ZK)({
              condition: Boolean(l > 0 && r),
              message:
                "startingHeight and unmountOnExit are mutually exclusive. You can't use them together",
            });
          var b = parseFloat(l.toString()) > 0,
            E = {
              startingHeight: l,
              endingHeight: d,
              animateOpacity: s,
              transition: g ? p : { enter: { duration: 0 } },
              transitionEnd: It()(m, {
                exit: r ? void 0 : { display: b ? "block" : "none" },
              }),
            },
            w = !r || n,
            P = n || r ? "enter" : "exit";
          return a.createElement(
            me,
            { initial: !1, custom: E },
            w &&
              a.createElement(
                su.div,
                lu({ ref: e }, h, {
                  className: (0, i.cx)("chakra-collapse", v),
                  style: lu({ overflow: "hidden", display: "block" }, f),
                  custom: E,
                  variants: Eu,
                  initial: !!r && "exit",
                  animate: P,
                  exit: "exit",
                })
              )
          );
        });
      i.Ts && (wu.displayName = "Collapse");
      var Pu = [
          "unmountOnExit",
          "in",
          "className",
          "transition",
          "transitionEnd",
          "delay",
        ],
        Cu = {
          enter: function (t) {
            var e,
              n = void 0 === t ? {} : t,
              r = n.transition,
              o = n.transitionEnd,
              i = n.delay;
            return {
              opacity: 1,
              transition:
                null != (e = null == r ? void 0 : r.enter)
                  ? e
                  : yu(hu.enter, i),
              transitionEnd: null == o ? void 0 : o.enter,
            };
          },
          exit: function (t) {
            var e,
              n = void 0 === t ? {} : t,
              r = n.transition,
              o = n.transitionEnd,
              i = n.delay;
            return {
              opacity: 0,
              transition:
                null != (e = null == r ? void 0 : r.exit) ? e : gu(hu.exit, i),
              transitionEnd: null == o ? void 0 : o.exit,
            };
          },
        },
        Su = { initial: "exit", animate: "enter", exit: "exit", variants: Cu },
        Tu = a.forwardRef(function (t, e) {
          var n = t.unmountOnExit,
            r = t.in,
            o = t.className,
            s = t.transition,
            u = t.transitionEnd,
            l = t.delay,
            c = uu(t, Pu),
            d = r || n ? "enter" : "exit",
            f = !n || (r && n),
            v = { transition: s, transitionEnd: u, delay: l };
          return a.createElement(
            me,
            { custom: v },
            f &&
              a.createElement(
                su.div,
                lu(
                  { ref: e, className: (0, i.cx)("chakra-fade", o), custom: v },
                  Su,
                  { animate: d },
                  c
                )
              )
          );
        });
      i.Ts && (Tu.displayName = "Fade");
      var Au = [
          "unmountOnExit",
          "in",
          "reverse",
          "initialScale",
          "className",
          "transition",
          "transitionEnd",
          "delay",
        ],
        ku = {
          exit: function (t) {
            var e,
              n = t.reverse,
              r = t.initialScale,
              o = t.transition,
              i = t.transitionEnd,
              a = t.delay;
            return lu(
              { opacity: 0 },
              n
                ? { scale: r, transitionEnd: null == i ? void 0 : i.exit }
                : {
                    transitionEnd: lu(
                      { scale: r },
                      null == i ? void 0 : i.exit
                    ),
                  },
              {
                transition:
                  null != (e = null == o ? void 0 : o.exit)
                    ? e
                    : gu(hu.exit, a),
              }
            );
          },
          enter: function (t) {
            var e,
              n = t.transitionEnd,
              r = t.transition,
              o = t.delay;
            return {
              opacity: 1,
              scale: 1,
              transition:
                null != (e = null == r ? void 0 : r.enter)
                  ? e
                  : yu(hu.enter, o),
              transitionEnd: null == n ? void 0 : n.enter,
            };
          },
        },
        Ou = { initial: "exit", animate: "enter", exit: "exit", variants: ku },
        Mu = a.forwardRef(function (t, e) {
          var n = t.unmountOnExit,
            r = t.in,
            o = t.reverse,
            s = void 0 === o || o,
            u = t.initialScale,
            l = void 0 === u ? 0.95 : u,
            c = t.className,
            d = t.transition,
            f = t.transitionEnd,
            v = t.delay,
            p = uu(t, Au),
            m = !n || (r && n),
            h = r || n ? "enter" : "exit",
            y = {
              initialScale: l,
              reverse: s,
              transition: d,
              transitionEnd: f,
              delay: v,
            };
          return a.createElement(
            me,
            { custom: y },
            m &&
              a.createElement(
                su.div,
                lu(
                  { ref: e, className: (0, i.cx)("chakra-offset-slide", c) },
                  Ou,
                  { animate: h, custom: y },
                  p
                )
              )
          );
        });
      i.Ts && (Mu.displayName = "ScaleFade");
      var Ru = [
          "direction",
          "style",
          "unmountOnExit",
          "in",
          "className",
          "transition",
          "transitionEnd",
          "delay",
        ],
        Vu = {
          exit: { duration: 0.15, ease: cu.easeInOut },
          enter: { type: "spring", damping: 25, stiffness: 180 },
        },
        Nu = {
          exit: function (t) {
            var e,
              n = t.direction,
              r = t.transition,
              o = t.transitionEnd,
              i = t.delay;
            return lu({}, mu({ direction: n }).exit, {
              transition:
                null != (e = null == r ? void 0 : r.exit) ? e : gu(Vu.exit, i),
              transitionEnd: null == o ? void 0 : o.exit,
            });
          },
          enter: function (t) {
            var e,
              n = t.direction,
              r = t.transitionEnd,
              o = t.transition,
              i = t.delay;
            return lu({}, mu({ direction: n }).enter, {
              transition:
                null != (e = null == o ? void 0 : o.enter)
                  ? e
                  : yu(Vu.enter, i),
              transitionEnd: null == r ? void 0 : r.enter,
            });
          },
        },
        Lu = a.forwardRef(function (t, e) {
          var n = t.direction,
            r = void 0 === n ? "right" : n,
            o = t.style,
            s = t.unmountOnExit,
            u = t.in,
            l = t.className,
            c = t.transition,
            d = t.transitionEnd,
            f = t.delay,
            v = uu(t, Ru),
            p = mu({ direction: r }),
            m = Object.assign({ position: "fixed" }, p.position, o),
            h = !s || (u && s),
            y = u || s ? "enter" : "exit",
            g = { transitionEnd: d, transition: c, direction: r, delay: f };
          return a.createElement(
            me,
            { custom: g },
            h &&
              a.createElement(
                su.div,
                lu({}, v, {
                  ref: e,
                  initial: "exit",
                  className: (0, i.cx)("chakra-slide", l),
                  animate: y,
                  exit: "exit",
                  custom: g,
                  variants: Nu,
                  style: m,
                })
              )
          );
        });
      i.Ts && (Lu.displayName = "Slide");
      var Fu = [
          "unmountOnExit",
          "in",
          "reverse",
          "className",
          "offsetX",
          "offsetY",
          "transition",
          "transitionEnd",
          "delay",
        ],
        Du = {
          initial: function (t) {
            var e,
              n = t.offsetX,
              r = t.offsetY,
              o = t.transition,
              i = t.transitionEnd,
              a = t.delay;
            return {
              opacity: 0,
              x: n,
              y: r,
              transition:
                null != (e = null == o ? void 0 : o.exit) ? e : gu(hu.exit, a),
              transitionEnd: null == i ? void 0 : i.exit,
            };
          },
          enter: function (t) {
            var e,
              n = t.transition,
              r = t.transitionEnd,
              o = t.delay;
            return {
              opacity: 1,
              x: 0,
              y: 0,
              transition:
                null != (e = null == n ? void 0 : n.enter)
                  ? e
                  : yu(hu.enter, o),
              transitionEnd: null == r ? void 0 : r.enter,
            };
          },
          exit: function (t) {
            var e,
              n = t.offsetY,
              r = t.offsetX,
              o = t.transition,
              i = t.transitionEnd,
              a = t.reverse,
              s = t.delay,
              u = { x: r, y: n };
            return lu(
              {
                opacity: 0,
                transition:
                  null != (e = null == o ? void 0 : o.exit)
                    ? e
                    : gu(hu.exit, s),
              },
              a
                ? lu({}, u, { transitionEnd: null == i ? void 0 : i.exit })
                : { transitionEnd: lu({}, u, null == i ? void 0 : i.exit) }
            );
          },
        },
        ju = {
          initial: "initial",
          animate: "enter",
          exit: "exit",
          variants: Du,
        },
        Iu = a.forwardRef(function (t, e) {
          var n = t.unmountOnExit,
            r = t.in,
            o = t.reverse,
            s = void 0 === o || o,
            u = t.className,
            l = t.offsetX,
            c = void 0 === l ? 0 : l,
            d = t.offsetY,
            f = void 0 === d ? 8 : d,
            v = t.transition,
            p = t.transitionEnd,
            m = t.delay,
            h = uu(t, Fu),
            y = !n || (r && n),
            g = r || n ? "enter" : "exit",
            x = {
              offsetX: c,
              offsetY: f,
              reverse: s,
              transition: v,
              transitionEnd: p,
              delay: m,
            };
          return a.createElement(
            me,
            { custom: x },
            y &&
              a.createElement(
                su.div,
                lu(
                  {
                    ref: e,
                    className: (0, i.cx)("chakra-offset-slide", u),
                    custom: x,
                  },
                  ju,
                  { animate: g },
                  h
                )
              )
          );
        });
      i.Ts && (Iu.displayName = "SlideFade");
      var Bu = n(6450);
      var _u = function () {
        return (
          (_u =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }),
          _u.apply(this, arguments)
        );
      };
      var Uu = "right-scroll-bar-position",
        Gu = "width-before-scroll-bar",
        Wu = A(),
        Hu = function () {},
        Xu = a.forwardRef(function (t, e) {
          var n = a.useRef(null),
            r = a.useState({
              onScrollCapture: Hu,
              onWheelCapture: Hu,
              onTouchMoveCapture: Hu,
            }),
            o = r[0],
            i = r[1],
            s = t.forwardProps,
            u = t.children,
            l = t.className,
            c = t.removeScrollBar,
            d = t.enabled,
            f = t.shards,
            v = t.sideCar,
            m = t.noIsolation,
            h = t.inert,
            y = t.allowPinchZoom,
            g = t.as,
            x = void 0 === g ? "div" : g,
            b = (function (t, e) {
              var n = {};
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) &&
                  e.indexOf(r) < 0 &&
                  (n[r] = t[r]);
              if (
                null != t &&
                "function" === typeof Object.getOwnPropertySymbols
              ) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
                  e.indexOf(r[o]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                    (n[r[o]] = t[r[o]]);
              }
              return n;
            })(t, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            E = v,
            w = p([n, e]),
            P = _u({}, b, o);
          return a.createElement(
            a.Fragment,
            null,
            d &&
              a.createElement(E, {
                sideCar: Wu,
                removeScrollBar: c,
                shards: f,
                noIsolation: m,
                inert: h,
                setCallbacks: i,
                allowPinchZoom: !!y,
                lockRef: n,
              }),
            s
              ? a.cloneElement(a.Children.only(u), _u({}, P, { ref: w }))
              : a.createElement(x, _u({}, P, { className: l, ref: w }), u)
          );
        });
      (Xu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (Xu.classNames = { fullWidth: Gu, zeroRight: Uu });
      var Yu,
        zu = function (t) {
          var e = t.sideCar,
            n = b(t, ["sideCar"]);
          if (!e)
            throw new Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var r = e.read();
          if (!r) throw new Error("Sidecar medium not found");
          return a.createElement(r, x({}, n));
        };
      zu.isSideCarExport = !0;
      function $u() {
        if (!document) return null;
        var t = document.createElement("style");
        t.type = "text/css";
        var e = Yu || n.nc;
        return e && t.setAttribute("nonce", e), t;
      }
      var Zu = function () {
          var t = 0,
            e = null;
          return {
            add: function (n) {
              var r, o;
              0 == t &&
                (e = $u()) &&
                ((o = n),
                (r = e).styleSheet
                  ? (r.styleSheet.cssText = o)
                  : r.appendChild(document.createTextNode(o)),
                (function (t) {
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(t);
                })(e)),
                t++;
            },
            remove: function () {
              !--t &&
                e &&
                (e.parentNode && e.parentNode.removeChild(e), (e = null));
            },
          };
        },
        Ku = function () {
          var t = (function () {
            var t = Zu();
            return function (e) {
              a.useEffect(
                function () {
                  return (
                    t.add(e),
                    function () {
                      t.remove();
                    }
                  );
                },
                [e]
              );
            };
          })();
          return function (e) {
            var n = e.styles;
            return t(n), null;
          };
        },
        qu = { left: 0, top: 0, right: 0, gap: 0 },
        Ju = function (t) {
          return parseInt(t || "", 10) || 0;
        },
        Qu = function (t) {
          if ((void 0 === t && (t = "margin"), "undefined" === typeof window))
            return qu;
          var e = (function (t) {
              var e = window.getComputedStyle(document.body),
                n = e["padding" === t ? "paddingLeft" : "marginLeft"],
                r = e["padding" === t ? "paddingTop" : "marginTop"],
                o = e["padding" === t ? "paddingRight" : "marginRight"];
              return [Ju(n), Ju(r), Ju(o)];
            })(t),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: e[0],
            top: e[1],
            right: e[2],
            gap: Math.max(0, r - n + e[2] - e[0]),
          };
        },
        tl = Ku(),
        el = function (t, e, n, r) {
          var o = t.left,
            i = t.top,
            a = t.right,
            s = t.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  e && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(s, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(s, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(Uu, " {\n    right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(Gu, " {\n    margin-right: ")
              .concat(s, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(Uu, " .")
              .concat(Uu, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(Gu, " .")
              .concat(Gu, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(s, "px;\n  }\n")
          );
        },
        nl = function (t) {
          var e = a.useState(Qu(t.gapMode)),
            n = e[0],
            r = e[1];
          a.useEffect(
            function () {
              r(Qu(t.gapMode));
            },
            [t.gapMode]
          );
          var o = t.noRelative,
            i = t.noImportant,
            s = t.gapMode,
            u = void 0 === s ? "margin" : s;
          return a.createElement(tl, {
            styles: el(n, !o, u, i ? "" : "!important"),
          });
        },
        rl = function (t, e) {
          var n = e;
          do {
            if (ol(t, n)) {
              var r = il(t, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        ol = function (t, e) {
          return "v" === t
            ? (function (t) {
                var e = window.getComputedStyle(t);
                return (
                  "hidden" !== e.overflowY &&
                  !(e.overflowY === e.overflowX && "visible" === e.overflowY)
                );
              })(e)
            : (function (t) {
                var e = window.getComputedStyle(t);
                return (
                  "hidden" !== e.overflowX &&
                  !(e.overflowY === e.overflowX && "visible" === e.overflowX)
                );
              })(e);
        },
        il = function (t, e) {
          return "v" === t
            ? [(n = e).scrollTop, n.scrollHeight, n.clientHeight]
            : (function (t) {
                return [t.scrollLeft, t.scrollWidth, t.clientWidth];
              })(e);
          var n;
        },
        al = !1;
      if ("undefined" !== typeof window)
        try {
          var sl = Object.defineProperty({}, "passive", {
            get: function () {
              return (al = !0), !0;
            },
          });
          window.addEventListener("test", sl, sl),
            window.removeEventListener("test", sl, sl);
        } catch (rc) {
          al = !1;
        }
      var ul = !!al && { passive: !1 },
        ll = function (t) {
          return "changedTouches" in t
            ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
            : [0, 0];
        },
        cl = function (t) {
          return [t.deltaX, t.deltaY];
        },
        dl = function (t) {
          return t && "current" in t ? t.current : t;
        },
        fl = function (t) {
          return (
            "\n  .block-interactivity-" +
            t +
            " {pointer-events: none;}\n  .allow-interactivity-" +
            t +
            " {pointer-events: all;}\n"
          );
        },
        vl = 0,
        pl = [];
      var ml,
        hl =
          ((ml = function (t) {
            var e = a.useRef([]),
              n = a.useRef([0, 0]),
              r = a.useRef(),
              o = a.useState(vl++)[0],
              i = a.useState(function () {
                return Ku();
              })[0],
              s = a.useRef(t);
            a.useEffect(
              function () {
                s.current = t;
              },
              [t]
            ),
              a.useEffect(
                function () {
                  if (t.inert) {
                    document.body.classList.add("block-interactivity-" + o);
                    var e = [t.lockRef.current]
                      .concat((t.shards || []).map(dl))
                      .filter(Boolean);
                    return (
                      e.forEach(function (t) {
                        return t.classList.add("allow-interactivity-" + o);
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-" + o
                        ),
                          e.forEach(function (t) {
                            return t.classList.remove(
                              "allow-interactivity-" + o
                            );
                          });
                      }
                    );
                  }
                },
                [t.inert, t.lockRef.current, t.shards]
              );
            var u = a.useCallback(function (t, e) {
                if ("touches" in t && 2 === t.touches.length)
                  return !s.current.allowPinchZoom;
                var o,
                  i = ll(t),
                  a = n.current,
                  u = "deltaX" in t ? t.deltaX : a[0] - i[0],
                  l = "deltaY" in t ? t.deltaY : a[1] - i[1],
                  c = t.target,
                  d = Math.abs(u) > Math.abs(l) ? "h" : "v",
                  f = rl(d, c);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = rl(d, c))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in t &&
                    (u || l) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var v = r.current || o;
                return (function (t, e, n, r, o) {
                  var i = r,
                    a = n.target,
                    s = e.contains(a),
                    u = !1,
                    l = i > 0,
                    c = 0,
                    d = 0;
                  do {
                    var f = il(t, a),
                      v = f[0],
                      p = f[1] - f[2] - v;
                    (v || p) && ol(t, a) && ((c += p), (d += v)),
                      (a = a.parentNode);
                  } while ((!s && a !== document.body) || (s && (e.contains(a) || e === a)));
                  return (
                    ((l && ((o && 0 === c) || (!o && i > c))) ||
                      (!l && ((o && 0 === d) || (!o && -i > d)))) &&
                      (u = !0),
                    u
                  );
                })(v, e, t, "h" === v ? u : l, !0);
              }, []),
              l = a.useCallback(function (t) {
                var n = t;
                if (pl.length && pl[pl.length - 1] === i) {
                  var r = "deltaY" in n ? cl(n) : ll(n),
                    o = e.current.filter(function (t) {
                      return (
                        t.name === n.type &&
                        t.target === n.target &&
                        ((e = t.delta), (o = r), e[0] === o[0] && e[1] === o[1])
                      );
                      var e, o;
                    })[0];
                  if (o && o.should) n.preventDefault();
                  else if (!o) {
                    var a = (s.current.shards || [])
                      .map(dl)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(n.target);
                      });
                    (a.length > 0 ? u(n, a[0]) : !s.current.noIsolation) &&
                      n.preventDefault();
                  }
                }
              }, []),
              c = a.useCallback(function (t, n, r, o) {
                var i = { name: t, delta: n, target: r, should: o };
                e.current.push(i),
                  setTimeout(function () {
                    e.current = e.current.filter(function (t) {
                      return t !== i;
                    });
                  }, 1);
              }, []),
              d = a.useCallback(function (t) {
                (n.current = ll(t)), (r.current = void 0);
              }, []),
              f = a.useCallback(function (e) {
                c(e.type, cl(e), e.target, u(e, t.lockRef.current));
              }, []),
              v = a.useCallback(function (e) {
                c(e.type, ll(e), e.target, u(e, t.lockRef.current));
              }, []);
            a.useEffect(function () {
              return (
                pl.push(i),
                t.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: v,
                }),
                document.addEventListener("wheel", l, ul),
                document.addEventListener("touchmove", l, ul),
                document.addEventListener("touchstart", d, ul),
                function () {
                  (pl = pl.filter(function (t) {
                    return t !== i;
                  })),
                    document.removeEventListener("wheel", l, ul),
                    document.removeEventListener("touchmove", l, ul),
                    document.removeEventListener("touchstart", d, ul);
                }
              );
            }, []);
            var p = t.removeScrollBar,
              m = t.inert;
            return a.createElement(
              a.Fragment,
              null,
              m ? a.createElement(i, { styles: fl(o) }) : null,
              p ? a.createElement(nl, { gapMode: "margin" }) : null
            );
          }),
          Wu.useMedium(ml),
          zu),
        yl = a.forwardRef(function (t, e) {
          return a.createElement(Xu, _u({}, t, { ref: e, sideCar: hl }));
        });
      yl.classNames = Xu.classNames;
      var gl = yl,
        xl = n(7375),
        bl = new WeakMap(),
        El = new WeakMap(),
        wl = {},
        Pl = 0,
        Cl = function (t, e, n) {
          void 0 === e &&
            (e = (function (t) {
              return "undefined" === typeof document
                ? null
                : (Array.isArray(t) ? t[0] : t).ownerDocument.body;
            })(t)),
            void 0 === n && (n = "data-aria-hidden");
          var r = Array.isArray(t) ? t : [t];
          wl[n] || (wl[n] = new WeakMap());
          var o = wl[n],
            i = [],
            a = new Set(),
            s = function (t) {
              t && !a.has(t) && (a.add(t), s(t.parentNode));
            };
          r.forEach(s);
          var u = function (t) {
            !t ||
              r.indexOf(t) >= 0 ||
              Array.prototype.forEach.call(t.children, function (t) {
                if (a.has(t)) u(t);
                else {
                  var e = t.getAttribute("aria-hidden"),
                    r = null !== e && "false" !== e,
                    s = (bl.get(t) || 0) + 1,
                    l = (o.get(t) || 0) + 1;
                  bl.set(t, s),
                    o.set(t, l),
                    i.push(t),
                    1 === s && r && El.set(t, !0),
                    1 === l && t.setAttribute(n, "true"),
                    r || t.setAttribute("aria-hidden", "true");
                }
              });
          };
          return (
            u(e),
            a.clear(),
            Pl++,
            function () {
              i.forEach(function (t) {
                var e = bl.get(t) - 1,
                  r = o.get(t) - 1;
                bl.set(t, e),
                  o.set(t, r),
                  e ||
                    (El.has(t) || t.removeAttribute("aria-hidden"),
                    El.delete(t)),
                  r || t.removeAttribute(n);
              }),
                --Pl ||
                  ((bl = new WeakMap()),
                  (bl = new WeakMap()),
                  (El = new WeakMap()),
                  (wl = {}));
            }
          );
        };
      function Sl(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      function Tl() {
        return (
          (Tl =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          Tl.apply(this, arguments)
        );
      }
      var Al = ["preset"],
        kl = {
          slideInBottom: Tl({}, ju, { custom: { offsetY: 16, reverse: !0 } }),
          slideInRight: Tl({}, ju, { custom: { offsetX: 16, reverse: !0 } }),
          scale: Tl({}, Ou, { custom: { initialScale: 0.95, reverse: !0 } }),
          none: {},
        },
        Ol = (0, o.m$)(su.section),
        Ml = a.forwardRef(function (t, e) {
          var n = t.preset,
            r = Sl(t, Al),
            o = kl[n];
          return a.createElement(Ol, Tl({ ref: e }, o, r));
        }),
        Rl = new ((function () {
          function t() {
            (this.modals = void 0), (this.modals = []);
          }
          var e = t.prototype;
          return (
            (e.add = function (t) {
              this.modals.push(t);
            }),
            (e.remove = function (t) {
              this.modals = this.modals.filter(function (e) {
                return e !== t;
              });
            }),
            (e.isTopModal = function (t) {
              return this.modals[this.modals.length - 1] === t;
            }),
            t
          );
        })())();
      function Vl(t) {
        var e = t.isOpen,
          n = t.onClose,
          r = t.id,
          o = t.closeOnOverlayClick,
          s = void 0 === o || o,
          u = t.closeOnEsc,
          l = void 0 === u || u,
          c = t.useInert,
          d = void 0 === c || c,
          f = t.onOverlayClick,
          v = t.onEsc,
          p = (0, a.useRef)(null),
          m = (0, a.useRef)(null),
          h = (0, xl.ZS)(
            r,
            "chakra-modal",
            "chakra-modal--header",
            "chakra-modal--body"
          ),
          y = h[0],
          g = h[1],
          x = h[2];
        !(function (t, e) {
          var n = t.current;
          (0, a.useEffect)(
            function () {
              if (t.current && e) return Cl(t.current);
            },
            [e, t, n]
          );
        })(p, e && d),
          (function (t, e) {
            (0, a.useEffect)(
              function () {
                return (
                  e && Rl.add(t),
                  function () {
                    Rl.remove(t);
                  }
                );
              },
              [e, t]
            );
          })(p, e);
        var b = (0, a.useRef)(null),
          E = (0, a.useCallback)(function (t) {
            b.current = t.target;
          }, []),
          w = (0, a.useCallback)(
            function (t) {
              "Escape" === t.key &&
                (t.stopPropagation(),
                l && (null == n || n()),
                null == v || v());
            },
            [l, n, v]
          ),
          P = (0, a.useState)(!1),
          C = P[0],
          S = P[1],
          T = (0, a.useState)(!1),
          A = T[0],
          k = T[1],
          O = (0, a.useCallback)(
            function (t, e) {
              return (
                void 0 === t && (t = {}),
                void 0 === e && (e = null),
                Tl({ role: "dialog" }, t, {
                  ref: (0, Bu.lq)(e, p),
                  id: y,
                  tabIndex: -1,
                  "aria-modal": !0,
                  "aria-labelledby": C ? g : void 0,
                  "aria-describedby": A ? x : void 0,
                  onClick: (0, i.v0)(t.onClick, function (t) {
                    return t.stopPropagation();
                  }),
                })
              );
            },
            [x, A, y, g, C]
          ),
          M = (0, a.useCallback)(
            function (t) {
              t.stopPropagation(),
                b.current === t.target &&
                  Rl.isTopModal(p) &&
                  (s && (null == n || n()), null == f || f());
            },
            [n, s, f]
          ),
          R = (0, a.useCallback)(
            function (t, e) {
              return (
                void 0 === t && (t = {}),
                void 0 === e && (e = null),
                Tl({}, t, {
                  ref: (0, Bu.lq)(e, m),
                  onClick: (0, i.v0)(t.onClick, M),
                  onKeyDown: (0, i.v0)(t.onKeyDown, w),
                  onMouseDown: (0, i.v0)(t.onMouseDown, E),
                })
              );
            },
            [w, E, M]
          );
        return {
          isOpen: e,
          onClose: n,
          headerId: g,
          bodyId: x,
          setBodyMounted: k,
          setHeaderMounted: S,
          dialogRef: p,
          overlayRef: m,
          getDialogProps: O,
          getDialogContainerProps: R,
        };
      }
      var Nl = ["className", "children", "containerProps"],
        Ll = ["className", "transition"],
        Fl = ["className"],
        Dl = ["className"],
        jl = ["className"],
        Il = ["onClick", "className"],
        Bl = (0, Bu.kr)({
          strict: !0,
          name: "ModalContext",
          errorMessage:
            "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
        }),
        _l = Bl[0],
        Ul = Bl[1],
        Gl = function (t) {
          var e = t.portalProps,
            n = t.children,
            r = t.autoFocus,
            i = t.trapFocus,
            s = t.initialFocusRef,
            u = t.finalFocusRef,
            l = t.returnFocusOnClose,
            c = t.blockScrollOnMount,
            d = t.allowPinchZoom,
            f = t.preserveScrollBarGap,
            v = t.motionPreset,
            p = t.lockFocusAcrossFrames,
            m = t.onCloseComplete,
            h = (0, o.jC)("Modal", t),
            y = Tl({}, Vl(t), {
              autoFocus: r,
              trapFocus: i,
              initialFocusRef: s,
              finalFocusRef: u,
              returnFocusOnClose: l,
              blockScrollOnMount: c,
              allowPinchZoom: d,
              preserveScrollBarGap: f,
              motionPreset: v,
              lockFocusAcrossFrames: p,
            });
          return a.createElement(
            _l,
            { value: y },
            a.createElement(
              o.Fo,
              { value: h },
              a.createElement(
                me,
                { onExitComplete: m },
                y.isOpen && a.createElement(Dt.h_, e, n)
              )
            )
          );
        };
      (Gl.defaultProps = {
        lockFocusAcrossFrames: !0,
        returnFocusOnClose: !0,
        scrollBehavior: "outside",
        trapFocus: !0,
        autoFocus: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        motionPreset: "scale",
      }),
        i.Ts && (Gl.displayName = "Modal");
      var Wl = (0, o.m$)(su.div),
        Hl = (0, o.Gp)(function (t, e) {
          var n = t.className,
            r = t.children,
            s = t.containerProps,
            u = Sl(t, Nl),
            l = Ul(),
            c = l.getDialogProps,
            d = l.getDialogContainerProps,
            f = c(u, e),
            v = d(s),
            p = (0, i.cx)("chakra-modal__content", n),
            m = (0, o.yK)(),
            h = Tl(
              {
                display: "flex",
                flexDirection: "column",
                position: "relative",
                width: "100%",
                outline: 0,
              },
              m.dialog
            ),
            y = Tl(
              {
                display: "flex",
                width: "100vw",
                height: "100vh",
                "@supports(height: -webkit-fill-available)": {
                  height: "-webkit-fill-available",
                },
                position: "fixed",
                left: 0,
                top: 0,
              },
              m.dialogContainer
            ),
            g = Ul().motionPreset;
          return a.createElement(
            Xl,
            null,
            a.createElement(
              o.m$.div,
              Tl({}, v, {
                className: "chakra-modal__content-container",
                tabIndex: -1,
                __css: y,
              }),
              a.createElement(
                Ml,
                Tl({ preset: g, className: p }, f, { __css: h }),
                r
              )
            )
          );
        });
      function Xl(t) {
        var e = Ul(),
          n = e.autoFocus,
          r = e.trapFocus,
          o = e.dialogRef,
          i = e.initialFocusRef,
          s = e.blockScrollOnMount,
          u = e.allowPinchZoom,
          l = e.finalFocusRef,
          c = e.returnFocusOnClose,
          d = e.preserveScrollBarGap,
          f = e.lockFocusAcrossFrames,
          v = _a(),
          p = v[0],
          m = v[1];
        return (
          a.useEffect(
            function () {
              !p && m && setTimeout(m);
            },
            [p, m]
          ),
          a.createElement(
            Ft,
            {
              autoFocus: n,
              isDisabled: !r,
              initialFocusRef: i,
              finalFocusRef: l,
              restoreFocus: c,
              contentRef: o,
              lockFocusAcrossFrames: f,
            },
            a.createElement(
              gl,
              {
                removeScrollBar: !d,
                allowPinchZoom: u,
                enabled: s,
                forwardProps: !0,
              },
              t.children
            )
          )
        );
      }
      i.Ts && (Hl.displayName = "ModalContent");
      var Yl = (0, o.Gp)(function (t, e) {
        var n = t.className;
        t.transition;
        var r = Sl(t, Ll),
          s = (0, i.cx)("chakra-modal__overlay", n),
          u = Tl(
            { pos: "fixed", left: "0", top: "0", w: "100vw", h: "100vh" },
            (0, o.yK)().overlay
          ),
          l = "none" === Ul().motionPreset ? {} : Su;
        return a.createElement(
          Wl,
          Tl({}, l, { __css: u, ref: e, className: s }, r)
        );
      });
      i.Ts && (Yl.displayName = "ModalOverlay");
      var zl = (0, o.Gp)(function (t, e) {
        var n = t.className,
          r = Sl(t, Fl),
          s = Ul(),
          u = s.headerId,
          l = s.setHeaderMounted;
        a.useEffect(
          function () {
            return (
              l(!0),
              function () {
                return l(!1);
              }
            );
          },
          [l]
        );
        var c = (0, i.cx)("chakra-modal__header", n),
          d = Tl({ flex: 0 }, (0, o.yK)().header);
        return a.createElement(
          o.m$.header,
          Tl({ ref: e, className: c, id: u }, r, { __css: d })
        );
      });
      i.Ts && (zl.displayName = "ModalHeader");
      var $l = (0, o.Gp)(function (t, e) {
        var n = t.className,
          r = Sl(t, Dl),
          s = Ul(),
          u = s.bodyId,
          l = s.setBodyMounted;
        a.useEffect(
          function () {
            return (
              l(!0),
              function () {
                return l(!1);
              }
            );
          },
          [l]
        );
        var c = (0, i.cx)("chakra-modal__body", n),
          d = (0, o.yK)();
        return a.createElement(
          o.m$.div,
          Tl({ ref: e, className: c, id: u }, r, { __css: d.body })
        );
      });
      i.Ts && ($l.displayName = "ModalBody");
      var Zl = (0, o.Gp)(function (t, e) {
        var n = t.className,
          r = Sl(t, jl),
          s = (0, i.cx)("chakra-modal__footer", n),
          u = Tl(
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            },
            (0, o.yK)().footer
          );
        return a.createElement(
          o.m$.footer,
          Tl({ ref: e }, r, { __css: u, className: s })
        );
      });
      i.Ts && (Zl.displayName = "ModalFooter");
      var Kl = (0, o.Gp)(function (t, e) {
        var n = t.onClick,
          r = t.className,
          s = Sl(t, Il),
          u = Ul().onClose,
          l = (0, i.cx)("chakra-modal__close-btn", r),
          d = (0, o.yK)();
        return a.createElement(
          c,
          Tl(
            {
              ref: e,
              __css: d.closeButton,
              className: l,
              onClick: (0, i.v0)(n, function (t) {
                t.stopPropagation(), u();
              }),
            },
            s
          )
        );
      });
      i.Ts && (Kl.displayName = "ModalCloseButton");
      var ql = ["className", "children"],
        Jl = (0, Bu.kr)(),
        Ql = (Jl[0], Jl[1]);
      var tc = (0, o.m$)(Lu),
        ec = (0, o.Gp)(function (t, e) {
          var n = t.className,
            r = t.children,
            s = Sl(t, ql),
            u = Ul(),
            l = u.getDialogProps,
            c = u.getDialogContainerProps,
            d = u.isOpen,
            f = l(s, e),
            v = c(),
            p = (0, i.cx)("chakra-modal__content", n),
            m = (0, o.yK)(),
            h = Tl(
              {
                display: "flex",
                flexDirection: "column",
                position: "relative",
                width: "100%",
                outline: 0,
              },
              m.dialog
            ),
            y = Tl(
              {
                display: "flex",
                width: "100vw",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
              },
              m.dialogContainer
            ),
            g = Ql().placement;
          return a.createElement(
            o.m$.div,
            Tl({}, v, {
              className: "chakra-modal__content-container",
              __css: y,
            }),
            a.createElement(
              Xl,
              null,
              a.createElement(
                tc,
                Tl({ direction: g, in: d, className: p }, f, { __css: h }),
                r
              )
            )
          );
        });
      i.Ts && (ec.displayName = "DrawerContent");
    },
    9042: function (t, e, n) {
      "use strict";
      n.d(e, {
        Td: function () {
          return g;
        },
        Th: function () {
          return h;
        },
        Tr: function () {
          return y;
        },
        hr: function () {
          return p;
        },
        iA: function () {
          return f;
        },
        p3: function () {
          return m;
        },
      });
      var r = n(1604),
        o = n(9703),
        i = n(7294);
      function a() {
        return (
          (a =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          a.apply(this, arguments)
        );
      }
      function s(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      var u = ["className"],
        l = ["placement"],
        c = ["isNumeric"],
        d = ["isNumeric"],
        f = (0, r.Gp)(function (t, e) {
          var n = (0, r.jC)("Table", t),
            l = (0, r.Lr)(t),
            c = l.className,
            d = s(l, u);
          return i.createElement(
            r.Fo,
            { value: n },
            i.createElement(
              r.m$.table,
              a(
                {
                  role: "table",
                  ref: e,
                  __css: n.table,
                  className: (0, o.cx)("chakra-table", c),
                },
                d
              )
            )
          );
        });
      o.Ts && (f.displayName = "Table");
      var v = (0, r.Gp)(function (t, e) {
        var n = t.placement,
          o = void 0 === n ? "bottom" : n,
          u = s(t, l),
          c = (0, r.yK)();
        return i.createElement(
          r.m$.caption,
          a({}, u, { ref: e, __css: a({}, c.caption, { captionSide: o }) })
        );
      });
      o.Ts && (v.displayName = "TableCaption");
      var p = (0, r.Gp)(function (t, e) {
          var n = (0, r.yK)();
          return i.createElement(
            r.m$.thead,
            a({}, t, { ref: e, __css: n.thead })
          );
        }),
        m = (0, r.Gp)(function (t, e) {
          var n = (0, r.yK)();
          return i.createElement(
            r.m$.tbody,
            a({}, t, { ref: e, __css: n.tbody })
          );
        }),
        h = (0, r.Gp)(function (t, e) {
          var n = t.isNumeric,
            o = s(t, c),
            u = (0, r.yK)();
          return i.createElement(
            r.m$.th,
            a({}, o, { ref: e, __css: u.th, "data-is-numeric": n })
          );
        }),
        y = (0, r.Gp)(function (t, e) {
          var n = (0, r.yK)();
          return i.createElement(
            r.m$.tr,
            a({ role: "row" }, t, { ref: e, __css: n.tr })
          );
        }),
        g = (0, r.Gp)(function (t, e) {
          var n = t.isNumeric,
            o = s(t, d),
            u = (0, r.yK)();
          return i.createElement(
            r.m$.td,
            a({ role: "gridcell" }, o, {
              ref: e,
              __css: u.td,
              "data-is-numeric": n,
            })
          );
        });
    },
    2746: function (t, e, n) {
      const r = n(5893);
      t.exports.c = r;
    },
    4942: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    3659: function (t, e, n) {
      "use strict";
      n.d(e, {
        R: function () {
          return d;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          MDXContext: function () {
            return a;
          },
          MDXProvider: function () {
            return c;
          },
          useMDXComponents: function () {
            return u;
          },
          withMDXComponents: function () {
            return s;
          },
        });
      var o = n(7294),
        i = n(2746);
      const a = o.createContext({});
      function s(t) {
        return function (e) {
          const n = u(e.components);
          return o.createElement(t, { ...e, allComponents: n });
        };
      }
      function u(t) {
        const e = o.useContext(a);
        return o.useMemo(
          () => ("function" === typeof t ? t(e) : { ...e, ...t }),
          [e, t]
        );
      }
      const l = {};
      function c({ components: t, children: e, disableParentContext: n }) {
        let r = u(t);
        return n && (r = t || l), o.createElement(a.Provider, { value: r }, e);
      }
      function d({
        compiledSource: t,
        frontmatter: e,
        scope: n,
        components: a = {},
        lazy: s,
      }) {
        const [u, l] = (0, o.useState)(!s || "undefined" === typeof window);
        (0, o.useEffect)(() => {
          if (s) {
            const t = window.requestIdleCallback(() => {
              l(!0);
            });
            return () => window.cancelIdleCallback(t);
          }
        }, []);
        const d = (0, o.useMemo)(() => {
          const o = Object.assign(
              { opts: { ...r, ...i.c } },
              { frontmatter: e },
              n
            ),
            a = Object.keys(o),
            s = Object.values(o),
            u = Reflect.construct(Function, a.concat(`${t}`));
          return u.apply(u, s).default;
        }, [n, t]);
        if (!u)
          return o.createElement("div", {
            dangerouslySetInnerHTML: { __html: "" },
            suppressHydrationWarning: !0,
          });
        const f = o.createElement(
          c,
          { components: a },
          o.createElement(d, null)
        );
        return s ? o.createElement("div", null, f) : f;
      }
      "undefined" !== typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          }));
    },
    4730: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              o = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
  },
]);
