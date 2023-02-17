(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [692],
  {
    6311: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(7294),
        r = t(1664),
        o = t.n(r),
        s = t(1691),
        a = t(2165),
        c = t(8527),
        u = t(1604),
        l = t(100),
        d = t(5572),
        m = t(5893),
        p = (0, u.m$)("video"),
        v = function () {
          var e = (0, s.g)().t,
            n = (0, i.useRef)(null);
          (0, i.useEffect)(function () {
            var e;
            0 ==
              window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
              (null === n ||
                void 0 === n ||
                null === (e = n.current) ||
                void 0 === e ||
                e.play());
          }, []);
          return (0, m.jsxs)(p, {
            title: e("altTexts.logoAsset"),
            ref: n,
            controls: !1,
            autoPlay: !1,
            playsInline: !0,
            muted: !0,
            loop: !0,
            poster: (0, d.w)("logo/png/block_400.png"),
            sx: {
              width: { base: "120px", sm: "200px" },
              height: { base: "120px", sm: "200px" },
              transform: { base: "translate(-16px, 25px)", sm: "none" },
            },
            children: [
              (0, m.jsx)("source", {
                src: (0, d.w)("logo/png/block_400.png"),
                media: "(prefers-reduced-motion: reduce)",
                type: "image/png",
              }),
              (0, m.jsx)("source", {
                src: (0, d.w)("logo/hevc/block_400.mov"),
                type: 'video/quicktime; codecs="hvc1"',
              }),
              (0, m.jsx)("source", {
                src: (0, d.w)("logo/webm/block_400.webm"),
                type: "video/webm",
              }),
            ],
          });
        },
        h = { base: 818, sm: 386 };
      var f = function (e) {
        var n = e.background,
          t = void 0 === n ? "transparent" : n,
          r = (0, s.g)(),
          d = r.t,
          p = r.get,
          f = (0, i.useRef)(null),
          x = (0, i.useMemo)(function () {
            return new Date().getFullYear().toString();
          }, []),
          y = function (e) {
            return (0, m.jsx)(c.xv, {
              as: "span",
              fontFamily: "heading",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "20px",
              letterSpacing: "normal",
              paddingBottom: "8px",
              children: e,
            });
          },
          g = function (e) {
            return (0, m.jsx)(
              c.xu,
              {
                paddingTop: "12px",
                children: (0, m.jsx)(c.rU, {
                  href: e.href,
                  fontFamily: "body",
                  lineHeight: "160%",
                  variant: "dynamicUnderline",
                  colorScheme: "darkWhite",
                  fontWeight: "400",
                  isExternal: !0,
                  children: e.label,
                }),
              },
              e.label
            );
          };
        return (0, m.jsxs)(c.xu, {
          as: "footer",
          ref: f,
          height: h,
          position: "relative",
          overflow: "hidden",
          children: [
            "gradient" === t &&
              (0, m.jsx)(a.Z, { variant: "static", containerRef: f }),
            (0, m.jsx)(c.xu, {
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              children: (0, m.jsx)(l.W2, {
                children: (0, m.jsxs)(l.X2, {
                  children: [
                    (0, m.jsx)(c.P4, {
                      colSpan: { base: 4, sm: 2 },
                      colStart: { base: 1, sm: 2 },
                      paddingTop: { base: "40px", sm: "80px" },
                      children: (0, m.jsx)(o(), {
                        href: "/",
                        passHref: !0,
                        children: (0, m.jsx)(u.m$.a, {
                          display: "inline-block",
                          "aria-label": "Link to homepage",
                          children: (0, m.jsx)(v, {}),
                        }),
                      }),
                    }),
                    (0, m.jsxs)(c.P4, {
                      colSpan: { base: 4, sm: 3 },
                      colStart: { base: 1, sm: 7 },
                      paddingTop: { base: "64px", sm: "90px" },
                      children: [
                        y(d("footer.firstLinksList.title")),
                        p("footer.firstLinksList.list", []).map(g),
                      ],
                    }),
                    (0, m.jsxs)(c.P4, {
                      colSpan: { base: 3, sm: 3 },
                      colStart: { base: 1, sm: 10 },
                      paddingTop: { base: "80px", sm: "90px" },
                      children: [
                        y(d("footer.secondLinksList.title")),
                        p("footer.secondLinksList.list", []).map(g),
                        (0, m.jsx)(c.xv, {
                          as: "span",
                          color: "black",
                          display: "block",
                          fontFamily: "body",
                          fontSize: "8px",
                          lineHeight: "16px",
                          fontWeight: "400",
                          maxW: { base: "none", sm: "120px" },
                          marginTop: { base: "80px", sm: "24px" },
                          children: d("copyright", { currentYear: x }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
    },
    5683: function (e, n, t) {
      "use strict";
      t.d(n, {
        V: function () {
          return s;
        },
        H: function () {
          return m;
        },
      });
      t(7294);
      var i = t(100),
        r = t(5893),
        o = { base: 500, sm: 660 };
      function s(e) {
        var n = e.children,
          t = e.height,
          s = void 0 === t ? o : t;
        return (0, r.jsx)(i.W2, {
          as: "header",
          height: s,
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          children: n,
        });
      }
      var a = t(1664),
        c = t.n(a),
        u = t(1691),
        l = t(8527),
        d = t(1739);
      var m = function (e) {
        var n = e.currentPage,
          t = e.sx,
          i = (0, u.g)().t;
        return (0, r.jsxs)(d.aG, {
          sx: t,
          children: [
            (0, r.jsx)(
              d.gN,
              {
                children: (0, r.jsx)(c(), {
                  href: "/",
                  passHref: !0,
                  children: (0, r.jsx)(l.rU, {
                    fontFamily: "body",
                    fontWeight: "normal",
                    colorScheme: "darkWhite",
                    variant: "dynamicUnderline",
                    children: i("brand"),
                  }),
                }),
              },
              "/"
            ),
            (0, r.jsx)(d.gN, {
              children: (0, r.jsx)(l.xv, {
                color: "black",
                fontFamily: "body",
                fontSize: "16px",
                lineHeight: "22.4px",
                fontWeight: "normal",
                children: n,
              }),
            }),
          ],
        });
      };
    },
    100: function (e, n, t) {
      "use strict";
      t.d(n, {
        W2: function () {
          return m;
        },
        X2: function () {
          return p;
        },
        im: function () {
          return o;
        },
      });
      t(7294);
      var i = t(8527),
        r = t(5893);
      function o(e) {
        var n = e.children;
        return (0, r.jsx)(i.xu, { minHeight: "100vh", children: n });
      }
      var s = t(9499),
        a = t(4730),
        c = t(695),
        u = ["children"];
      function l(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function d(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? l(Object(t), !0).forEach(function (n) {
                (0, s.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function m(e) {
        var n = e.children,
          t = (0, a.Z)(e, u);
        return (0, r.jsx)(
          i.xu,
          d(
            d(
              {
                margin: "0 auto",
                width: "100%",
                paddingX: 0,
                maxWidth: { base: "100%", sm: "container.sm" },
              },
              t
            ),
            {},
            {
              children: (0, r.jsx)(i.xu, {
                paddingX: c.Z.grid.container.px,
                children: n,
              }),
            }
          )
        );
      }
      function p(e) {
        var n = e.columnsSm,
          t = void 0 === n ? 12 : n,
          o = e.sx,
          s = void 0 === o ? void 0 : o,
          a = e.children;
        return (0, r.jsx)(i.rj, {
          templateColumns: {
            base: "repeat(4, minmax(0, 1fr))",
            sm: "repeat(".concat(t, ", minmax(0, 1fr))"),
          },
          columnGap: c.Z.grid.row.columnGap,
          rowGap: 0,
          sx: s,
          children: a,
        });
      }
    },
    8792: function (e, n, t) {
      "use strict";
      var i = t(9008),
        r = t.n(i),
        o = t(1691),
        s = t(5572),
        a = t(5893);
      n.Z = function (e) {
        var n = e.title,
          t = e.includeSiteTitle,
          i = void 0 === t || t,
          c = e.description,
          u = e.path,
          l = (0, o.g)().t,
          d = i ? "".concat(n, " | ").concat(l("meta.siteTitle")) : n,
          m = c || l("meta.description"),
          p = "".concat(l("meta.domain"), "/").concat(u),
          v = ""
            .concat(l("meta.domain"))
            .concat((0, s.w)("images/shared/social-share.png"));
        return (0, a.jsxs)(r(), {
          children: [
            (0, a.jsx)("title", { children: d }),
            (0, a.jsx)("meta", { name: "description", content: m }),
            (0, a.jsx)("meta", { property: "og:type", content: "website" }),
            (0, a.jsx)("meta", { property: "og:url", content: p }),
            (0, a.jsx)("meta", { property: "og:site_name", content: d }),
            (0, a.jsx)("meta", { property: "og:title", content: d }),
            (0, a.jsx)("meta", { property: "og:description", content: m }),
            (0, a.jsx)("meta", { property: "og:image", content: v }),
            (0, a.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, a.jsx)("link", {
              rel: "apple-touch-icon",
              href: "/apple-touch-icon.png",
            }),
            (0, a.jsx)("meta", {
              name: "apple-mobile-web-app-capable",
              content: "yes",
            }),
            (0, a.jsx)("meta", {
              name: "apple-mobile-web-app-status-bar-style",
              content: "black",
            }),
            (0, a.jsx)("link", { rel: "canonical", href: p }),
          ],
        });
      };
    },
    2778: function (e, n, t) {
      "use strict";
      t.d(n, {
        v: function () {
          return o;
        },
        y: function () {
          return s;
        },
      });
      var i = t(695),
        r = t(5100);
      function o(e, n) {
        return (0, r.Z)(
          e,
          n,
          (0, r.w)(i.Z.breakpoints.sm),
          (0, r.w)(i.Z.sizes.container.sm)
        );
      }
      function s(e, n) {
        return (0, r.Z)(
          e,
          n,
          (0, r.w)(i.Z.sizes.xsMin),
          (0, r.w)(i.Z.breakpoints.sm)
        );
      }
    },
    937: function (e, n, t) {
      "use strict";
      t(7294);
      var i = t(2134),
        r = t(5893);
      n.Z = function (e) {
        var n = e.defaultPreset,
          t = void 0 === n ? "primary" : n,
          o = e.switchToPreset,
          s = void 0 === o ? "secondary" : o,
          a = e.children,
          c = (0, i.Z)().setPreset;
        return (0, r.jsx)("div", {
          onMouseEnter: function () {
            return c(s);
          },
          onMouseLeave: function () {
            return c(t);
          },
          style: { display: "inline-block" },
          children: a,
        });
      };
    },
    2134: function (e, n, t) {
      "use strict";
      var i = t(7294),
        r = t(4910);
      n.Z = function () {
        return (0, i.useContext)(r.Z);
      };
    },
    2165: function (e, n, t) {
      "use strict";
      t.d(n, {
        u: function () {
          return y.Z;
        },
        Z: function () {
          return g;
        },
      });
      var i = t(2777),
        r = t(2262),
        o = t(9499),
        s = t(7294),
        a = t(990),
        c = t(5317),
        u = t(2212),
        l = t(2134),
        d = t(3231),
        m = t.n(d),
        p = t(5893),
        v =
          "\n  vec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;}\n  vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;}\n  vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);}\n  float snoise(vec2 v) {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n  0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n  -0.577350269189626,  // -1.0 + 2.0 * C.x\n  0.024390243902439); // 1.0 / 41.0\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n  + i.x + vec3(0.0, i1.x, 1.0 ));\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m;\n  m = m*m;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n",
        h = {
          primary: {
            colors: ["#ff4f00", "#13BBAF", "#ff4f00", "#13BBAF"],
            intensity: [1, 1, 4, 1.5],
          },
          secondary: {
            colors: ["#f8be2c", "#8ff8ec", "#ff9261", "#f8be2c"],
            intensity: [1, 3, 1.5, 0],
          },
        };
      function f(e) {
        var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return new u.Vector3(
          parseInt(n[1], 16),
          parseInt(n[2], 16),
          parseInt(n[3], 16)
        );
      }
      var x = (function () {
        function e(n, t, r) {
          (0, i.Z)(this, e),
            (0, o.Z)(this, "presetName", void 0),
            (0, o.Z)(this, "preset", void 0),
            (0, o.Z)(this, "containerEl", void 0),
            (0, o.Z)(this, "renderer", void 0),
            (0, o.Z)(this, "scene", void 0),
            (0, o.Z)(this, "camera", void 0),
            (0, o.Z)(this, "randomisePosition", void 0),
            (0, o.Z)(this, "geometry", void 0),
            (0, o.Z)(this, "material", void 0),
            (0, o.Z)(this, "mesh", void 0),
            (0, o.Z)(this, "shouldAnimate", !0),
            (this.presetName = n),
            (this.preset = h[n]),
            (this.containerEl = r),
            (this.renderer = new u.WebGLRenderer()),
            this.renderer.setSize(t.width, t.height),
            (this.scene = new u.Scene()),
            (this.camera = new u.PerspectiveCamera(
              50,
              e.cameraAspectFrom(t),
              0.1,
              2e3
            )),
            (this.camera.position.z = 5),
            (this.randomisePosition = new u.Vector2(1, 2)),
            (this.geometry = new u.PlaneGeometry(800, 800, 20, 20)),
            (this.material = new u.ShaderMaterial({
              uniforms: {
                u_color0: { type: "v3", value: f(this.preset.colors[0]) },
                u_color1: { type: "v3", value: f(this.preset.colors[1]) },
                u_color2: { type: "v3", value: f(this.preset.colors[2]) },
                u_color3: { type: "v3", value: f(this.preset.colors[3]) },
                u_time: { type: "f", value: 30 },
                u_randomisePosition: {
                  type: "v2",
                  value: this.randomisePosition,
                },
                u_intensity_1: { type: "f", value: this.preset.intensity[1] },
                u_intensity_2: { type: "f", value: this.preset.intensity[2] },
                u_intensity_3: { type: "f", value: this.preset.intensity[3] },
                u_ripples: { type: "f", value: 3 },
                u_warp_x: { type: "f", value: 10 },
                u_warp_y: { type: "f", value: 2 },
              },
              fragmentShader:
                v +
                "\nvec3 rgb(float r, float g, float b) {\n  return vec3(r / 255., g / 255., b / 255.);\n}\nvec3 rgb(float c) {\n  return vec3(c / 255., c / 255., c / 255.);\n}\nuniform vec3 u_color0;\nuniform vec3 u_color1;\nuniform vec3 u_color2;\nuniform vec3 u_color3;\nuniform float u_time;\nuniform float u_intensity_1;\nuniform float u_intensity_2;\nuniform float u_intensity_3;\nuniform float u_ripples;\nvarying vec2 vUv;\nvarying float vDistortion;\nvoid main() {\n  vec3 c0 = rgb(u_color0.r, u_color0.g, u_color0.b);\n  vec3 c1 = rgb(u_color1.r, u_color1.g, u_color1.b);\n  vec3 c2 = rgb(u_color2.r, u_color2.g, u_color2.b);\n  vec3 c3 = rgb(u_color3.r, u_color3.g, u_color3.b);\n  float noise = (snoise((vUv * u_ripples) + (u_time * 0.1)));\n  vec3 color = mix(c0, c1, noise * u_intensity_1);\n  color = mix(color, c2, noise * u_intensity_2);\n  color = mix(color, c3, noise * u_intensity_3);\n  gl_FragColor = vec4(color, 1.0);\n}\n",
              vertexShader:
                v +
                "\n  uniform float u_time;\n  uniform vec2 u_randomisePosition;\n  uniform float u_warp_x;\n  uniform float u_warp_y;\n  varying float vDistortion;\n  varying float xDistortion;\n  varying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  vDistortion = snoise((vUv.xx * u_warp_y) - (u_randomisePosition * 0.1));\n  xDistortion = snoise((vUv.yy * u_warp_y) - (u_randomisePosition * 0.1));\n  vec3 pos = position;\n  pos.z += (vDistortion * u_warp_x);\n  pos.x += (xDistortion * u_warp_x);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n",
            })),
            (this.mesh = new u.Mesh(this.geometry, this.material)),
            this.mesh.position.set(-240, -100, -400),
            this.mesh.scale.multiplyScalar(3);
        }
        return (
          (0, r.Z)(
            e,
            [
              {
                key: "initScene",
                value: function () {
                  this.containerEl.appendChild(this.renderer.domElement),
                    this.scene.add(this.mesh),
                    this.renderer.render(this.scene, this.camera),
                    this.animate();
                },
              },
              {
                key: "resize",
                value: function (n) {
                  (this.camera.aspect = e.cameraAspectFrom(n)),
                    this.camera.updateProjectionMatrix(),
                    this.renderer.setSize(n.width, n.height);
                },
              },
              {
                key: "animate",
                value: function () {
                  this.renderer.render(this.scene, this.camera);
                  var e = this.mesh.material;
                  0 ==
                  window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? (e.uniforms.u_time.value += -0.005)
                    : (e.uniforms.u_time.value = 24.4),
                    this.shouldAnimate &&
                      window.requestAnimationFrame(this.animate.bind(this));
                },
              },
              {
                key: "setPreset",
                value: function (e) {
                  (this.presetName = e), (this.preset = h[e]);
                  var n = this.mesh.material,
                    t = this.preset.colors.map(f);
                  a.ZP.to(n.uniforms.u_color0.value, 2, {
                    ease: c.EA.easeInOut,
                    x: t[0].x,
                    y: t[0].y,
                    z: t[0].z,
                  }),
                    a.ZP.to(n.uniforms.u_color1.value, 2, {
                      ease: c.EA.easeInOut,
                      x: t[1].x,
                      y: t[1].y,
                      z: t[1].z,
                    }),
                    a.ZP.to(n.uniforms.u_color2.value, 2, {
                      ease: c.EA.easeInOut,
                      x: t[2].x,
                      y: t[2].y,
                      z: t[2].z,
                    }),
                    a.ZP.to(n.uniforms.u_color3.value, 2, {
                      ease: c.EA.easeInOut,
                      x: t[3].x,
                      y: t[3].y,
                      z: t[3].z,
                    }),
                    a.ZP.to(n.uniforms.u_intensity_1, 2, {
                      ease: c.EA.easeInOut,
                      value: this.preset.intensity[1],
                    }),
                    a.ZP.to(n.uniforms.u_intensity_2, 2, {
                      ease: c.EA.easeInOut,
                      value: this.preset.intensity[2],
                    }),
                    a.ZP.to(n.uniforms.u_intensity_3, 2, {
                      ease: c.EA.easeInOut,
                      value: this.preset.intensity[3],
                    });
                },
              },
              {
                key: "cleanup",
                value: function () {
                  (this.shouldAnimate = !1),
                    this.scene.clear(),
                    this.renderer.clear();
                },
              },
            ],
            [
              {
                key: "cameraAspectFrom",
                value: function (n) {
                  return Math.min(n.width / n.height, e.MAX_CAMERA_ASPECT);
                },
              },
            ]
          ),
          e
        );
      })();
      (0, o.Z)(x, "MAX_CAMERA_ASPECT", 4);
      var y = t(937),
        g = function (e) {
          var n = e.variant,
            t = void 0 === n ? "fixed" : n,
            i = e.containerRef;
          "static" !== t ||
            i ||
            console.error("containerRef is required when variant is static");
          var r = (0, s.useRef)(null),
            o = (0, s.useState)(null),
            a = o[0],
            c = o[1],
            u = (0, l.Z)().preset;
          function d() {
            var e, n, r, o;
            return "fixed" === t
              ? { width: window.innerWidth, height: window.innerHeight }
              : {
                  width:
                    null !==
                      (e =
                        null === i ||
                        void 0 === i ||
                        null === (n = i.current) ||
                        void 0 === n
                          ? void 0
                          : n.clientWidth) && void 0 !== e
                      ? e
                      : 0,
                  height:
                    null !==
                      (r =
                        null === i ||
                        void 0 === i ||
                        null === (o = i.current) ||
                        void 0 === o
                          ? void 0
                          : o.clientHeight) && void 0 !== r
                      ? r
                      : 0,
                };
          }
          return (
            (0, s.useEffect)(function () {
              if (null !== r && void 0 !== r && r.current) {
                var e = new x(
                  u,
                  d(),
                  null === r || void 0 === r ? void 0 : r.current
                );
                return (
                  c(e),
                  e.initScene(),
                  window.addEventListener("resize", n),
                  function () {
                    e.cleanup(), window.removeEventListener("resize", n);
                  }
                );
              }
              function n() {
                null === e || void 0 === e || e.resize(d());
              }
            }, []),
            (0, s.useEffect)(
              function () {
                (null === a || void 0 === a ? void 0 : a.presetName) !== u &&
                  (null === a || void 0 === a || a.setPreset(u));
              },
              [null === a || void 0 === a ? void 0 : a.presetName, u]
            ),
            (0, p.jsx)("div", {
              ref: r,
              className: "fixed" === t ? m().backgroundContainer : "",
            })
          );
        };
    },
    5572: function (e, n, t) {
      "use strict";
      t.d(n, {
        w: function () {
          return i;
        },
      });
      var i = function (e) {
        return "".concat(("", ""), "/").concat(e);
      };
    },
    5100: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return r;
        },
        w: function () {
          return i;
        },
      });
      var i = function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "px";
          return Number(e.replace(n, ""));
        },
        r = function (e, n, t, i) {
          return "calc("
            .concat(e, "px + (")
            .concat(n, " - ")
            .concat(e, ") *  min(1px, ((100vw - ")
            .concat(t, "px) / (")
            .concat(i, " - ")
            .concat(t, "))))");
        };
    },
    3231: function (e) {
      e.exports = {
        backgroundContainer: "KettlebellBackground_backgroundContainer__gFhDl",
      };
    },
  },
]);
