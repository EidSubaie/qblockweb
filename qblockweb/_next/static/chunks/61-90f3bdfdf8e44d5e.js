(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [61],
  {
    3758: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return i;
        },
      });
      var r = n(7294),
        o = n(9251);
      function i({ pixelated: e }) {
        const t = (0, o.Ky)((e) => e.gl),
          n = (0, o.Ky)((e) => e.internal.active),
          i = (0, o.Ky)((e) => e.performance.current),
          a = (0, o.Ky)((e) => e.viewport.initialDpr),
          l = (0, o.Ky)((e) => e.setDpr);
        return (
          r.useEffect(() => {
            const r = t.domElement;
            return () => {
              n && l(a), e && r && (r.style.imageRendering = "auto");
            };
          }, []),
          r.useEffect(() => {
            l(i * a),
              e &&
                t.domElement &&
                (t.domElement.style.imageRendering =
                  1 === i ? "auto" : "pixelated");
          }, [i]),
          null
        );
      }
    },
    3520: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return i;
        },
      });
      var r = n(7294),
        o = n(9251);
      function i() {
        const e = (0, o.Ky)((e) => e.get),
          t = (0, o.Ky)((e) => e.performance.current);
        return (
          r.useEffect(() => {
            const t = e().raycaster.enabled;
            return () => {
              e().raycaster.enabled = t;
            };
          }, []),
          r.useEffect(() => {
            e().raycaster.enabled = 1 === t;
          }, [t]),
          null
        );
      }
    },
    9888: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return c;
        },
      });
      var r = n(7462),
        o = n(9251),
        i = n(7294),
        a = n(4942),
        l = n(2212);
      const u = (e, t) => ((e % t) + t) % t;
      class s extends l.EventDispatcher {
        constructor(e, t) {
          super(),
            (0, a.Z)(this, "object", void 0),
            (0, a.Z)(this, "domElement", void 0),
            (0, a.Z)(this, "enabled", !0),
            (0, a.Z)(this, "target", new l.Vector3()),
            (0, a.Z)(this, "minDistance", 0),
            (0, a.Z)(this, "maxDistance", 1 / 0),
            (0, a.Z)(this, "minZoom", 0),
            (0, a.Z)(this, "maxZoom", 1 / 0),
            (0, a.Z)(this, "minPolarAngle", 0),
            (0, a.Z)(this, "maxPolarAngle", Math.PI),
            (0, a.Z)(this, "minAzimuthAngle", -1 / 0),
            (0, a.Z)(this, "maxAzimuthAngle", 1 / 0),
            (0, a.Z)(this, "enableDamping", !1),
            (0, a.Z)(this, "dampingFactor", 0.05),
            (0, a.Z)(this, "enableZoom", !0),
            (0, a.Z)(this, "zoomSpeed", 1),
            (0, a.Z)(this, "enableRotate", !0),
            (0, a.Z)(this, "rotateSpeed", 1),
            (0, a.Z)(this, "enablePan", !0),
            (0, a.Z)(this, "panSpeed", 1),
            (0, a.Z)(this, "screenSpacePanning", !0),
            (0, a.Z)(this, "keyPanSpeed", 7),
            (0, a.Z)(this, "autoRotate", !1),
            (0, a.Z)(this, "autoRotateSpeed", 2),
            (0, a.Z)(this, "reverseOrbit", !1),
            (0, a.Z)(this, "keys", {
              LEFT: "ArrowLeft",
              UP: "ArrowUp",
              RIGHT: "ArrowRight",
              BOTTOM: "ArrowDown",
            }),
            (0, a.Z)(this, "mouseButtons", {
              LEFT: l.MOUSE.ROTATE,
              MIDDLE: l.MOUSE.DOLLY,
              RIGHT: l.MOUSE.PAN,
            }),
            (0, a.Z)(this, "touches", {
              ONE: l.TOUCH.ROTATE,
              TWO: l.TOUCH.DOLLY_PAN,
            }),
            (0, a.Z)(this, "target0", void 0),
            (0, a.Z)(this, "position0", void 0),
            (0, a.Z)(this, "zoom0", void 0),
            (0, a.Z)(this, "_domElementKeyEvents", null),
            (0, a.Z)(this, "getPolarAngle", void 0),
            (0, a.Z)(this, "getAzimuthalAngle", void 0),
            (0, a.Z)(this, "setPolarAngle", void 0),
            (0, a.Z)(this, "setAzimuthalAngle", void 0),
            (0, a.Z)(this, "getDistance", void 0),
            (0, a.Z)(this, "listenToKeyEvents", void 0),
            (0, a.Z)(this, "saveState", void 0),
            (0, a.Z)(this, "reset", void 0),
            (0, a.Z)(this, "update", void 0),
            (0, a.Z)(this, "connect", void 0),
            (0, a.Z)(this, "dispose", void 0),
            (this.object = e),
            (this.domElement = t),
            (this.target0 = this.target.clone()),
            (this.position0 = this.object.position.clone()),
            (this.zoom0 =
              this.object instanceof l.PerspectiveCamera
                ? this.object.zoom
                : 1),
            (this.getPolarAngle = () => d.phi),
            (this.getAzimuthalAngle = () => d.theta),
            (this.setPolarAngle = (e) => {
              let t = u(e, 2 * Math.PI),
                r = d.phi;
              r < 0 && (r += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
              let o = Math.abs(t - r);
              2 * Math.PI - o < o &&
                (t < r ? (t += 2 * Math.PI) : (r += 2 * Math.PI)),
                (p.phi = t - r),
                n.update();
            }),
            (this.setAzimuthalAngle = (e) => {
              let t = u(e, 2 * Math.PI),
                r = d.theta;
              r < 0 && (r += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
              let o = Math.abs(t - r);
              2 * Math.PI - o < o &&
                (t < r ? (t += 2 * Math.PI) : (r += 2 * Math.PI)),
                (p.theta = t - r),
                n.update();
            }),
            (this.getDistance = () => n.object.position.distanceTo(n.target)),
            (this.listenToKeyEvents = (e) => {
              e.addEventListener("keydown", Y), (this._domElementKeyEvents = e);
            }),
            (this.saveState = () => {
              n.target0.copy(n.target),
                n.position0.copy(n.object.position),
                (n.zoom0 =
                  n.object instanceof l.PerspectiveCamera ? n.object.zoom : 1);
            }),
            (this.reset = () => {
              n.target.copy(n.target0),
                n.object.position.copy(n.position0),
                n.object instanceof l.PerspectiveCamera &&
                  ((n.object.zoom = n.zoom0),
                  n.object.updateProjectionMatrix()),
                n.dispatchEvent(r),
                n.update(),
                (c = s.NONE);
            }),
            (this.update = (() => {
              const t = new l.Vector3(),
                o = new l.Quaternion().setFromUnitVectors(
                  e.up,
                  new l.Vector3(0, 1, 0)
                ),
                i = o.clone().invert(),
                a = new l.Vector3(),
                u = new l.Quaternion(),
                _ = 2 * Math.PI;
              return function () {
                const e = n.object.position;
                t.copy(e).sub(n.target),
                  t.applyQuaternion(o),
                  d.setFromVector3(t),
                  n.autoRotate &&
                    c === s.NONE &&
                    O(((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed),
                  n.enableDamping
                    ? ((d.theta += p.theta * n.dampingFactor),
                      (d.phi += p.phi * n.dampingFactor))
                    : ((d.theta += p.theta), (d.phi += p.phi));
                let l = n.minAzimuthAngle,
                  g = n.maxAzimuthAngle;
                return (
                  isFinite(l) &&
                    isFinite(g) &&
                    (l < -Math.PI ? (l += _) : l > Math.PI && (l -= _),
                    g < -Math.PI ? (g += _) : g > Math.PI && (g -= _),
                    (d.theta =
                      l <= g
                        ? Math.max(l, Math.min(g, d.theta))
                        : d.theta > (l + g) / 2
                        ? Math.max(l, d.theta)
                        : Math.min(g, d.theta))),
                  (d.phi = Math.max(
                    n.minPolarAngle,
                    Math.min(n.maxPolarAngle, d.phi)
                  )),
                  d.makeSafe(),
                  (d.radius *= h),
                  (d.radius = Math.max(
                    n.minDistance,
                    Math.min(n.maxDistance, d.radius)
                  )),
                  !0 === n.enableDamping
                    ? n.target.addScaledVector(m, n.dampingFactor)
                    : n.target.add(m),
                  t.setFromSpherical(d),
                  t.applyQuaternion(i),
                  e.copy(n.target).add(t),
                  n.object.lookAt(n.target),
                  !0 === n.enableDamping
                    ? ((p.theta *= 1 - n.dampingFactor),
                      (p.phi *= 1 - n.dampingFactor),
                      m.multiplyScalar(1 - n.dampingFactor))
                    : (p.set(0, 0, 0), m.set(0, 0, 0)),
                  (h = 1),
                  !!(
                    v ||
                    a.distanceToSquared(n.object.position) > f ||
                    8 * (1 - u.dot(n.object.quaternion)) > f
                  ) &&
                    (n.dispatchEvent(r),
                    a.copy(n.object.position),
                    u.copy(n.object.quaternion),
                    (v = !1),
                    !0)
                );
              };
            })()),
            (this.connect = (e) => {
              e === document &&
                console.error(
                  'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
                ),
                (n.domElement = e),
                (n.domElement.style.touchAction = "none"),
                n.domElement.addEventListener("contextmenu", q),
                n.domElement.addEventListener("pointerdown", W),
                n.domElement.addEventListener("pointercancel", Q),
                n.domElement.addEventListener("wheel", $);
            }),
            (this.dispose = () => {
              var e, t, r, o, i, a;
              null === (e = n.domElement) ||
                void 0 === e ||
                e.removeEventListener("contextmenu", q),
                null === (t = n.domElement) ||
                  void 0 === t ||
                  t.removeEventListener("pointerdown", W),
                null === (r = n.domElement) ||
                  void 0 === r ||
                  r.removeEventListener("pointercancel", Q),
                null === (o = n.domElement) ||
                  void 0 === o ||
                  o.removeEventListener("wheel", $),
                null === (i = n.domElement) ||
                  void 0 === i ||
                  i.ownerDocument.removeEventListener("pointermove", Z),
                null === (a = n.domElement) ||
                  void 0 === a ||
                  a.ownerDocument.removeEventListener("pointerup", G),
                null !== n._domElementKeyEvents &&
                  n._domElementKeyEvents.removeEventListener("keydown", Y);
            });
          const n = this,
            r = { type: "change" },
            o = { type: "start" },
            i = { type: "end" },
            s = {
              NONE: -1,
              ROTATE: 0,
              DOLLY: 1,
              PAN: 2,
              TOUCH_ROTATE: 3,
              TOUCH_PAN: 4,
              TOUCH_DOLLY_PAN: 5,
              TOUCH_DOLLY_ROTATE: 6,
            };
          let c = s.NONE;
          const f = 1e-6,
            d = new l.Spherical(),
            p = new l.Spherical();
          let h = 1;
          const m = new l.Vector3();
          let v = !1;
          const _ = new l.Vector2(),
            g = new l.Vector2(),
            y = new l.Vector2(),
            b = new l.Vector2(),
            w = new l.Vector2(),
            E = new l.Vector2(),
            x = new l.Vector2(),
            S = new l.Vector2(),
            A = new l.Vector2(),
            T = [],
            k = {};
          function P() {
            return Math.pow(0.95, n.zoomSpeed);
          }
          function O(e) {
            n.reverseOrbit ? (p.theta += e) : (p.theta -= e);
          }
          function C(e) {
            n.reverseOrbit ? (p.phi += e) : (p.phi -= e);
          }
          const M = (() => {
              const e = new l.Vector3();
              return function (t, n) {
                e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), m.add(e);
              };
            })(),
            z = (() => {
              const e = new l.Vector3();
              return function (t, r) {
                !0 === n.screenSpacePanning
                  ? e.setFromMatrixColumn(r, 1)
                  : (e.setFromMatrixColumn(r, 0),
                    e.crossVectors(n.object.up, e)),
                  e.multiplyScalar(t),
                  m.add(e);
              };
            })(),
            L = (() => {
              const e = new l.Vector3();
              return function (t, r) {
                const o = n.domElement;
                if (
                  o &&
                  n.object instanceof l.PerspectiveCamera &&
                  n.object.isPerspectiveCamera
                ) {
                  const i = n.object.position;
                  e.copy(i).sub(n.target);
                  let a = e.length();
                  (a *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
                    M((2 * t * a) / o.clientHeight, n.object.matrix),
                    z((2 * r * a) / o.clientHeight, n.object.matrix);
                } else
                  o &&
                  n.object instanceof l.OrthographicCamera &&
                  n.object.isOrthographicCamera
                    ? (M(
                        (t * (n.object.right - n.object.left)) /
                          n.object.zoom /
                          o.clientWidth,
                        n.object.matrix
                      ),
                      z(
                        (r * (n.object.top - n.object.bottom)) /
                          n.object.zoom /
                          o.clientHeight,
                        n.object.matrix
                      ))
                    : (console.warn(
                        "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                      ),
                      (n.enablePan = !1));
              };
            })();
          function I(e) {
            n.object instanceof l.PerspectiveCamera &&
            n.object.isPerspectiveCamera
              ? (h /= e)
              : n.object instanceof l.OrthographicCamera &&
                n.object.isOrthographicCamera
              ? ((n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom * e)
                )),
                n.object.updateProjectionMatrix(),
                (v = !0))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                ),
                (n.enableZoom = !1));
          }
          function N(e) {
            n.object instanceof l.PerspectiveCamera &&
            n.object.isPerspectiveCamera
              ? (h *= e)
              : n.object instanceof l.OrthographicCamera &&
                n.object.isOrthographicCamera
              ? ((n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom / e)
                )),
                n.object.updateProjectionMatrix(),
                (v = !0))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                ),
                (n.enableZoom = !1));
          }
          function R(e) {
            _.set(e.clientX, e.clientY);
          }
          function j(e) {
            b.set(e.clientX, e.clientY);
          }
          function D() {
            if (1 == T.length) _.set(T[0].pageX, T[0].pageY);
            else {
              const e = 0.5 * (T[0].pageX + T[1].pageX),
                t = 0.5 * (T[0].pageY + T[1].pageY);
              _.set(e, t);
            }
          }
          function H() {
            if (1 == T.length) b.set(T[0].pageX, T[0].pageY);
            else {
              const e = 0.5 * (T[0].pageX + T[1].pageX),
                t = 0.5 * (T[0].pageY + T[1].pageY);
              b.set(e, t);
            }
          }
          function F() {
            const e = T[0].pageX - T[1].pageX,
              t = T[0].pageY - T[1].pageY,
              n = Math.sqrt(e * e + t * t);
            x.set(0, n);
          }
          function U(e) {
            if (1 == T.length) g.set(e.pageX, e.pageY);
            else {
              const t = J(e),
                n = 0.5 * (e.pageX + t.x),
                r = 0.5 * (e.pageY + t.y);
              g.set(n, r);
            }
            y.subVectors(g, _).multiplyScalar(n.rotateSpeed);
            const t = n.domElement;
            t &&
              (O((2 * Math.PI * y.x) / t.clientHeight),
              C((2 * Math.PI * y.y) / t.clientHeight)),
              _.copy(g);
          }
          function B(e) {
            if (1 == T.length) w.set(e.pageX, e.pageY);
            else {
              const t = J(e),
                n = 0.5 * (e.pageX + t.x),
                r = 0.5 * (e.pageY + t.y);
              w.set(n, r);
            }
            E.subVectors(w, b).multiplyScalar(n.panSpeed),
              L(E.x, E.y),
              b.copy(w);
          }
          function V(e) {
            const t = J(e),
              r = e.pageX - t.x,
              o = e.pageY - t.y,
              i = Math.sqrt(r * r + o * o);
            S.set(0, i),
              A.set(0, Math.pow(S.y / x.y, n.zoomSpeed)),
              I(A.y),
              x.copy(S);
          }
          function W(e) {
            if (!1 !== n.enabled) {
              var t, r;
              if (0 === T.length)
                null === (t = n.domElement) ||
                  void 0 === t ||
                  t.ownerDocument.addEventListener("pointermove", Z),
                  null === (r = n.domElement) ||
                    void 0 === r ||
                    r.ownerDocument.addEventListener("pointerup", G);
              !(function (e) {
                T.push(e);
              })(e),
                "touch" === e.pointerType
                  ? (function (e) {
                      switch ((K(e), T.length)) {
                        case 1:
                          switch (n.touches.ONE) {
                            case l.TOUCH.ROTATE:
                              if (!1 === n.enableRotate) return;
                              D(), (c = s.TOUCH_ROTATE);
                              break;
                            case l.TOUCH.PAN:
                              if (!1 === n.enablePan) return;
                              H(), (c = s.TOUCH_PAN);
                              break;
                            default:
                              c = s.NONE;
                          }
                          break;
                        case 2:
                          switch (n.touches.TWO) {
                            case l.TOUCH.DOLLY_PAN:
                              if (!1 === n.enableZoom && !1 === n.enablePan)
                                return;
                              n.enableZoom && F(),
                                n.enablePan && H(),
                                (c = s.TOUCH_DOLLY_PAN);
                              break;
                            case l.TOUCH.DOLLY_ROTATE:
                              if (!1 === n.enableZoom && !1 === n.enableRotate)
                                return;
                              n.enableZoom && F(),
                                n.enableRotate && D(),
                                (c = s.TOUCH_DOLLY_ROTATE);
                              break;
                            default:
                              c = s.NONE;
                          }
                          break;
                        default:
                          c = s.NONE;
                      }
                      c !== s.NONE && n.dispatchEvent(o);
                    })(e)
                  : (function (e) {
                      let t;
                      switch (e.button) {
                        case 0:
                          t = n.mouseButtons.LEFT;
                          break;
                        case 1:
                          t = n.mouseButtons.MIDDLE;
                          break;
                        case 2:
                          t = n.mouseButtons.RIGHT;
                          break;
                        default:
                          t = -1;
                      }
                      switch (t) {
                        case l.MOUSE.DOLLY:
                          if (!1 === n.enableZoom) return;
                          !(function (e) {
                            x.set(e.clientX, e.clientY);
                          })(e),
                            (c = s.DOLLY);
                          break;
                        case l.MOUSE.ROTATE:
                          if (e.ctrlKey || e.metaKey || e.shiftKey) {
                            if (!1 === n.enablePan) return;
                            j(e), (c = s.PAN);
                          } else {
                            if (!1 === n.enableRotate) return;
                            R(e), (c = s.ROTATE);
                          }
                          break;
                        case l.MOUSE.PAN:
                          if (e.ctrlKey || e.metaKey || e.shiftKey) {
                            if (!1 === n.enableRotate) return;
                            R(e), (c = s.ROTATE);
                          } else {
                            if (!1 === n.enablePan) return;
                            j(e), (c = s.PAN);
                          }
                          break;
                        default:
                          c = s.NONE;
                      }
                      c !== s.NONE && n.dispatchEvent(o);
                    })(e);
            }
          }
          function Z(e) {
            !1 !== n.enabled &&
              ("touch" === e.pointerType
                ? (function (e) {
                    switch ((K(e), c)) {
                      case s.TOUCH_ROTATE:
                        if (!1 === n.enableRotate) return;
                        U(e), n.update();
                        break;
                      case s.TOUCH_PAN:
                        if (!1 === n.enablePan) return;
                        B(e), n.update();
                        break;
                      case s.TOUCH_DOLLY_PAN:
                        if (!1 === n.enableZoom && !1 === n.enablePan) return;
                        !(function (e) {
                          n.enableZoom && V(e), n.enablePan && B(e);
                        })(e),
                          n.update();
                        break;
                      case s.TOUCH_DOLLY_ROTATE:
                        if (!1 === n.enableZoom && !1 === n.enableRotate)
                          return;
                        !(function (e) {
                          n.enableZoom && V(e), n.enableRotate && U(e);
                        })(e),
                          n.update();
                        break;
                      default:
                        c = s.NONE;
                    }
                  })(e)
                : (function (e) {
                    if (!1 === n.enabled) return;
                    switch (c) {
                      case s.ROTATE:
                        if (!1 === n.enableRotate) return;
                        !(function (e) {
                          g.set(e.clientX, e.clientY),
                            y.subVectors(g, _).multiplyScalar(n.rotateSpeed);
                          const t = n.domElement;
                          t &&
                            (O((2 * Math.PI * y.x) / t.clientHeight),
                            C((2 * Math.PI * y.y) / t.clientHeight)),
                            _.copy(g),
                            n.update();
                        })(e);
                        break;
                      case s.DOLLY:
                        if (!1 === n.enableZoom) return;
                        !(function (e) {
                          S.set(e.clientX, e.clientY),
                            A.subVectors(S, x),
                            A.y > 0 ? I(P()) : A.y < 0 && N(P()),
                            x.copy(S),
                            n.update();
                        })(e);
                        break;
                      case s.PAN:
                        if (!1 === n.enablePan) return;
                        !(function (e) {
                          w.set(e.clientX, e.clientY),
                            E.subVectors(w, b).multiplyScalar(n.panSpeed),
                            L(E.x, E.y),
                            b.copy(w),
                            n.update();
                        })(e);
                    }
                  })(e));
          }
          function G(e) {
            var t, r, o;
            (X(e), 0 === T.length) &&
              (null === (t = n.domElement) ||
                void 0 === t ||
                t.releasePointerCapture(e.pointerId),
              null === (r = n.domElement) ||
                void 0 === r ||
                r.ownerDocument.removeEventListener("pointermove", Z),
              null === (o = n.domElement) ||
                void 0 === o ||
                o.ownerDocument.removeEventListener("pointerup", G));
            n.dispatchEvent(i), (c = s.NONE);
          }
          function Q(e) {
            X(e);
          }
          function $(e) {
            !1 === n.enabled ||
              !1 === n.enableZoom ||
              (c !== s.NONE && c !== s.ROTATE) ||
              (e.preventDefault(),
              n.dispatchEvent(o),
              (function (e) {
                e.deltaY < 0 ? N(P()) : e.deltaY > 0 && I(P()), n.update();
              })(e),
              n.dispatchEvent(i));
          }
          function Y(e) {
            !1 !== n.enabled &&
              !1 !== n.enablePan &&
              (function (e) {
                let t = !1;
                switch (e.code) {
                  case n.keys.UP:
                    L(0, n.keyPanSpeed), (t = !0);
                    break;
                  case n.keys.BOTTOM:
                    L(0, -n.keyPanSpeed), (t = !0);
                    break;
                  case n.keys.LEFT:
                    L(n.keyPanSpeed, 0), (t = !0);
                    break;
                  case n.keys.RIGHT:
                    L(-n.keyPanSpeed, 0), (t = !0);
                }
                t && (e.preventDefault(), n.update());
              })(e);
          }
          function q(e) {
            !1 !== n.enabled && e.preventDefault();
          }
          function X(e) {
            delete k[e.pointerId];
            for (let t = 0; t < T.length; t++)
              if (T[t].pointerId == e.pointerId) return void T.splice(t, 1);
          }
          function K(e) {
            let t = k[e.pointerId];
            void 0 === t && ((t = new l.Vector2()), (k[e.pointerId] = t)),
              t.set(e.pageX, e.pageY);
          }
          function J(e) {
            const t = e.pointerId === T[0].pointerId ? T[1] : T[0];
            return k[t.pointerId];
          }
          void 0 !== t && this.connect(t), this.update();
        }
      }
      const c = i.forwardRef(
        (
          {
            makeDefault: e,
            camera: t,
            regress: n,
            domElement: a,
            enableDamping: l = !0,
            onChange: u,
            onStart: c,
            onEnd: f,
            ...d
          },
          p
        ) => {
          const h = (0, o.Ky)((e) => e.invalidate),
            m = (0, o.Ky)((e) => e.camera),
            v = (0, o.Ky)((e) => e.gl),
            _ = (0, o.Ky)((e) => e.events),
            g = (0, o.Ky)((e) => e.set),
            y = (0, o.Ky)((e) => e.get),
            b = (0, o.Ky)((e) => e.performance),
            w = t || m,
            E = a || _.connected || v.domElement,
            x = i.useMemo(() => new s(w), [w]);
          return (
            (0, o.xQ)(() => {
              x.enabled && x.update();
            }),
            i.useEffect(
              () => (
                x.connect(E),
                () => {
                  x.dispose();
                }
              ),
              [E, n, x, h]
            ),
            i.useEffect(() => {
              const e = (e) => {
                h(), n && b.regress(), u && u(e);
              };
              return (
                x.addEventListener("change", e),
                c && x.addEventListener("start", c),
                f && x.addEventListener("end", f),
                () => {
                  c && x.removeEventListener("start", c),
                    f && x.removeEventListener("end", f),
                    x.removeEventListener("change", e);
                }
              );
            }, [u, c, f]),
            i.useEffect(() => {
              if (e) {
                const e = y().controls;
                return g({ controls: x }), () => g({ controls: e });
              }
            }, [e, x]),
            i.createElement(
              "primitive",
              (0, r.Z)({ ref: p, object: x, enableDamping: l }, d)
            )
          );
        }
      );
    },
    9040: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return l;
        },
      });
      var r = n(7462),
        o = n(7294),
        i = n(9251),
        a = n(5878);
      const l = o.forwardRef(({ makeDefault: e, ...t }, n) => {
        const l = (0, i.Ky)(({ set: e }) => e),
          u = (0, i.Ky)(({ camera: e }) => e),
          s = (0, i.Ky)(({ size: e }) => e),
          c = o.useRef();
        return (
          o.useLayoutEffect(() => {
            c.current && !t.manual && c.current.updateProjectionMatrix();
          }, [s, t]),
          o.useLayoutEffect(() => {
            if (e && c.current) {
              const e = u;
              return (
                l(() => ({ camera: c.current })), () => l(() => ({ camera: e }))
              );
            }
          }, [u, c, e, l]),
          o.createElement(
            "orthographicCamera",
            (0, r.Z)(
              {
                left: s.width / -2,
                right: s.width / 2,
                top: s.height / 2,
                bottom: s.height / -2,
                ref: (0, a.Z)([c, n]),
              },
              t
            )
          )
        );
      });
    },
    587: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return a;
        },
      });
      var r = n(2212),
        o = n(7294),
        i = n(9251);
      function a({ all: e, scene: t, camera: n }) {
        const a = (0, i.Ky)(({ gl: e }) => e),
          l = (0, i.Ky)(({ camera: e }) => e),
          u = (0, i.Ky)(({ scene: e }) => e);
        return (
          o.useLayoutEffect(() => {
            const o = [];
            e &&
              (t || u).traverse((e) => {
                !1 === e.visible && (o.push(e), (e.visible = !0));
              }),
              a.compile(t || u, n || l);
            const i = new r.WebGLCubeRenderTarget(128);
            new r.CubeCamera(0.01, 1e5, i).update(a, t || u),
              i.dispose(),
              o.forEach((e) => (e.visible = !1));
          }, []),
          null
        );
      }
    },
    7854: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return _;
        },
      });
      var r = n(7462),
        o = n(7294),
        i = n(3935),
        a = n(2212),
        l = n(9251);
      const u = new a.Vector3(),
        s = new a.Vector3(),
        c = new a.Vector3();
      function f(e, t, n) {
        const r = u.setFromMatrixPosition(e.matrixWorld);
        r.project(t);
        const o = n.width / 2,
          i = n.height / 2;
        return [r.x * o + o, -r.y * i + i];
      }
      const d = (e) => (Math.abs(e) < 1e-10 ? 0 : e);
      function p(e, t, n = "") {
        let r = "matrix3d(";
        for (let o = 0; 16 !== o; o++)
          r += d(t[o] * e.elements[o]) + (15 !== o ? "," : ")");
        return n + r;
      }
      const h =
        ((m = [1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]),
        (e) => p(e, m));
      var m;
      const v = (e, t) => {
          return p(
            e,
            [
              1 / (n = t),
              1 / n,
              1 / n,
              1,
              -1 / n,
              -1 / n,
              -1 / n,
              -1,
              1 / n,
              1 / n,
              1 / n,
              1,
              1,
              1,
              1,
              1,
            ],
            "translate(-50%,-50%)"
          );
          var n;
        },
        _ = o.forwardRef(
          (
            {
              children: e,
              eps: t = 0.001,
              style: n,
              className: p,
              prepend: m,
              center: _,
              fullscreen: g,
              portal: y,
              distanceFactor: b,
              sprite: w = !1,
              transform: E = !1,
              occlude: x,
              onOcclude: S,
              zIndexRange: A = [16777271, 0],
              calculatePosition: T = f,
              as: k = "div",
              wrapperClass: P,
              pointerEvents: O = "auto",
              ...C
            },
            M
          ) => {
            var z;
            const L = (0, l.Ky)(({ gl: e }) => e),
              I = (0, l.Ky)(({ camera: e }) => e),
              N = (0, l.Ky)(({ scene: e }) => e),
              R = (0, l.Ky)(({ size: e }) => e),
              j = (0, l.Ky)(({ raycaster: e }) => e),
              [D] = o.useState(() => document.createElement(k)),
              H = o.useRef(null),
              F = o.useRef(0),
              U = o.useRef([0, 0]),
              B = o.useRef(null),
              V = o.useRef(null),
              W =
                null !== (z = null == y ? void 0 : y.current) && void 0 !== z
                  ? z
                  : L.domElement.parentNode;
            o.useEffect(() => {
              if (H.current) {
                if ((N.updateMatrixWorld(), E))
                  D.style.cssText =
                    "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
                else {
                  const e = T(H.current, I, R);
                  D.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`;
                }
                return (
                  W && (m ? W.prepend(D) : W.appendChild(D)),
                  () => {
                    W && W.removeChild(D), i.unmountComponentAtNode(D);
                  }
                );
              }
            }, [W, E]),
              o.useLayoutEffect(() => {
                P && (D.className = P);
              }, [P]);
            const Z = o.useMemo(
                () =>
                  E
                    ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: R.width,
                        height: R.height,
                        transformStyle: "preserve-3d",
                        pointerEvents: "none",
                      }
                    : {
                        position: "absolute",
                        transform: _ ? "translate3d(-50%,-50%,0)" : "none",
                        ...(g && {
                          top: -R.height / 2,
                          left: -R.width / 2,
                          width: R.width,
                          height: R.height,
                        }),
                        ...n,
                      },
                [n, _, g, R, E]
              ),
              G = o.useMemo(
                () => ({ position: "absolute", pointerEvents: O }),
                [O]
              );
            o.useLayoutEffect(() => {
              E
                ? i.render(
                    o.createElement(
                      "div",
                      { ref: B, style: Z },
                      o.createElement(
                        "div",
                        { ref: V, style: G },
                        o.createElement("div", {
                          ref: M,
                          className: p,
                          style: n,
                          children: e,
                        })
                      )
                    ),
                    D
                  )
                : i.render(
                    o.createElement("div", {
                      ref: M,
                      style: Z,
                      className: p,
                      children: e,
                    }),
                    D
                  );
            });
            const Q = o.useRef(!0);
            return (
              (0, l.xQ)(() => {
                if (H.current) {
                  I.updateMatrixWorld(), H.current.updateWorldMatrix(!0, !1);
                  const e = E ? U.current : T(H.current, I, R);
                  if (
                    E ||
                    Math.abs(F.current - I.zoom) > t ||
                    Math.abs(U.current[0] - e[0]) > t ||
                    Math.abs(U.current[1] - e[1]) > t
                  ) {
                    const t = (function (e, t) {
                      const n = u.setFromMatrixPosition(e.matrixWorld),
                        r = s.setFromMatrixPosition(t.matrixWorld),
                        o = n.sub(r),
                        i = t.getWorldDirection(c);
                      return o.angleTo(i) > Math.PI / 2;
                    })(H.current, I);
                    let n = !1;
                    "boolean" === typeof x
                      ? !0 === x && (n = [N])
                      : Array.isArray(x) && (n = x.map((e) => e.current));
                    const r = Q.current;
                    if (n) {
                      const e = (function (e, t, n, r) {
                        const o = u.setFromMatrixPosition(e.matrixWorld),
                          i = o.clone();
                        i.project(t), n.setFromCamera(i, t);
                        const a = n.intersectObjects(r, !0);
                        if (a.length) {
                          const e = a[0].distance;
                          return o.distanceTo(n.ray.origin) < e;
                        }
                        return !0;
                      })(H.current, I, j, n);
                      Q.current = e && !t;
                    } else Q.current = !t;
                    if (
                      (r !== Q.current &&
                        (S
                          ? S(!Q.current)
                          : (D.style.display = Q.current ? "block" : "none")),
                      (D.style.zIndex = `${(function (e, t, n) {
                        if (
                          t instanceof a.PerspectiveCamera ||
                          t instanceof a.OrthographicCamera
                        ) {
                          const r = u.setFromMatrixPosition(e.matrixWorld),
                            o = s.setFromMatrixPosition(t.matrixWorld),
                            i = r.distanceTo(o),
                            a = (n[1] - n[0]) / (t.far - t.near),
                            l = n[1] - a * t.far;
                          return Math.round(a * i + l);
                        }
                      })(H.current, I, A)}`),
                      E)
                    ) {
                      const [e, t] = [R.width / 2, R.height / 2],
                        n = I.projectionMatrix.elements[5] * t,
                        {
                          isOrthographicCamera: r,
                          top: o,
                          left: i,
                          bottom: a,
                          right: l,
                        } = I,
                        u = h(I.matrixWorldInverse),
                        s = r
                          ? `scale(${n})translate(${d(-(l + i) / 2)}px,${d(
                              (o + a) / 2
                            )}px)`
                          : `translateZ(${n}px)`;
                      let c = H.current.matrixWorld;
                      w &&
                        ((c = I.matrixWorldInverse
                          .clone()
                          .transpose()
                          .copyPosition(c)
                          .scale(H.current.scale)),
                        (c.elements[3] = c.elements[7] = c.elements[11] = 0),
                        (c.elements[15] = 1)),
                        (D.style.width = R.width + "px"),
                        (D.style.height = R.height + "px"),
                        (D.style.perspective = r ? "" : `${n}px`),
                        B.current &&
                          V.current &&
                          ((B.current.style.transform = `${s}${u}translate(${e}px,${t}px)`),
                          (V.current.style.transform = v(
                            c,
                            1 / ((b || 10) / 400)
                          )));
                    } else {
                      const t =
                        void 0 === b
                          ? 1
                          : (function (e, t) {
                              if (t instanceof a.OrthographicCamera)
                                return t.zoom;
                              if (t instanceof a.PerspectiveCamera) {
                                const n = u.setFromMatrixPosition(
                                    e.matrixWorld
                                  ),
                                  r = s.setFromMatrixPosition(t.matrixWorld),
                                  o = (t.fov * Math.PI) / 180,
                                  i = n.distanceTo(r);
                                return 1 / (2 * Math.tan(o / 2) * i);
                              }
                              return 1;
                            })(H.current, I) * b;
                      D.style.transform = `translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`;
                    }
                    (U.current = e), (F.current = I.zoom);
                  }
                }
              }),
              o.createElement("group", (0, r.Z)({}, C, { ref: H }))
            );
          }
        );
    },
    1758: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fq: function () {
          return u;
        },
        vO: function () {
          return l;
        },
      });
      var r = n(2212),
        o = n(7294),
        i = (n(3935), n(9251));
      const a = o.createContext(null);
      function l() {
        return o.useContext(a);
      }
      function u({
        eps: e = 1e-5,
        enabled: t = !0,
        infinite: n,
        horizontal: l,
        pages: u = 1,
        distance: s = 1,
        damping: c = 4,
        style: f = {},
        children: d,
      }) {
        const {
            gl: p,
            size: h,
            invalidate: m,
            events: v,
            raycaster: _,
          } = (0, i.Ky)(),
          [g] = o.useState(() => document.createElement("div")),
          [y] = o.useState(() => document.createElement("div")),
          [b] = o.useState(() => document.createElement("div")),
          w = p.domElement.parentNode,
          E = o.useRef(0),
          x = o.useMemo(() => {
            const t = {
              el: g,
              eps: e,
              fill: y,
              fixed: b,
              horizontal: l,
              damping: c,
              offset: 0,
              delta: 0,
              scroll: E,
              pages: u,
              range(e, t, n = 0) {
                const r = e - n,
                  o = r + t + 2 * n;
                return this.offset < r
                  ? 0
                  : this.offset > o
                  ? 1
                  : (this.offset - r) / (o - r);
              },
              curve(e, t, n = 0) {
                return Math.sin(this.range(e, t, n) * Math.PI);
              },
              visible(e, t, n = 0) {
                const r = e - n,
                  o = r + t + 2 * n;
                return this.offset >= r && this.offset <= o;
              },
            };
            return t;
          }, [e, c, l, u]);
        o.useEffect(() => {
          (g.style.position = "absolute"),
            (g.style.width = "100%"),
            (g.style.height = "100%"),
            (g.style[l ? "overflowX" : "overflowY"] = "auto"),
            (g.style[l ? "overflowY" : "overflowX"] = "hidden"),
            (g.style.top = "0px"),
            (g.style.left = "0px");
          for (const n in f) g.style[n] = f[n];
          (b.style.position = "sticky"),
            (b.style.top = "0px"),
            (b.style.left = "0px"),
            (b.style.width = "100%"),
            (b.style.height = "100%"),
            (b.style.overflow = "hidden"),
            g.appendChild(b),
            (y.style.height = l ? "100%" : u * s * 100 + "%"),
            (y.style.width = l ? u * s * 100 + "%" : "100%"),
            (y.style.pointerEvents = "none"),
            g.appendChild(y),
            w.appendChild(g),
            (g[l ? "scrollLeft" : "scrollTop"] = 1);
          const e = v.connected || p.domElement;
          requestAnimationFrame(() =>
            null == v.connect ? void 0 : v.connect(g)
          );
          const t = _.computeOffsets;
          return (
            (_.computeOffsets = ({ clientX: e, clientY: t }) => ({
              offsetX: e - w.offsetLeft,
              offsetY: t - w.offsetTop,
            })),
            () => {
              w.removeChild(g),
                (_.computeOffsets = t),
                null == v.connect || v.connect(e);
            }
          );
        }, [u, s, l, g, y, b, w]),
          o.useEffect(() => {
            const e = h[l ? "width" : "height"],
              r = g[l ? "scrollWidth" : "scrollHeight"],
              o = r - e;
            let i = 0,
              a = !0,
              u = !0;
            const s = () => {
              if (
                t &&
                !u &&
                (m(),
                (i = g[l ? "scrollLeft" : "scrollTop"]),
                (E.current = i / o),
                n)
              ) {
                if (!a)
                  if (i >= o) {
                    const e = 1 - x.offset;
                    (g[l ? "scrollLeft" : "scrollTop"] = 1),
                      (E.current = x.offset = -e),
                      (a = !0);
                  } else if (i <= 0) {
                    const e = 1 + x.offset;
                    (g[l ? "scrollLeft" : "scrollTop"] = r),
                      (E.current = x.offset = e),
                      (a = !0);
                  }
                a && setTimeout(() => (a = !1), 40);
              }
            };
            g.addEventListener("scroll", s, { passive: !0 }),
              requestAnimationFrame(() => (u = !1));
            const c = (e) => (g.scrollLeft += e.deltaY / 2);
            return (
              l && g.addEventListener("wheel", c, { passive: !0 }),
              () => {
                g.removeEventListener("scroll", s),
                  l && g.removeEventListener("wheel", c);
              }
            );
          }, [g, h, n, x, m, l, t]);
        let S = 0;
        return (
          (0, i.xQ)((t, n) => {
            (x.offset = r.MathUtils.damp((S = x.offset), E.current, c, n)),
              (x.delta = r.MathUtils.damp(
                x.delta,
                Math.abs(S - x.offset),
                c,
                n
              )),
              x.delta > e && m();
          }),
          o.createElement(a.Provider, { value: x }, d)
        );
      }
    },
    9251: function (e, t, n) {
      "use strict";
      n.d(t, {
        Xz: function () {
          return $;
        },
        l7: function () {
          return z;
        },
        xQ: function () {
          return X;
        },
        Ky: function () {
          return q;
        },
      });
      var r = n(2212),
        o = n(7294);
      function i(e) {
        let t;
        const n = new Set(),
          r = (e, r) => {
            const o = "function" === typeof e ? e(t) : e;
            if (o !== t) {
              const e = t;
              (t = r ? o : Object.assign({}, t, o)), n.forEach((n) => n(t, e));
            }
          },
          o = () => t,
          i = {
            setState: r,
            getState: o,
            subscribe: (e, r, i) =>
              r || i
                ? ((e, r = o, i = Object.is) => {
                    console.warn(
                      "[DEPRECATED] Please use `subscribeWithSelector` middleware"
                    );
                    let a = r(t);
                    function l() {
                      const n = r(t);
                      if (!i(a, n)) {
                        const t = a;
                        e((a = n), t);
                      }
                    }
                    return n.add(l), () => n.delete(l);
                  })(e, r, i)
                : (n.add(e), () => n.delete(e)),
            destroy: () => n.clear(),
          };
        return (t = e(r, o, i)), i;
      }
      const a =
        "undefined" === typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? o.useEffect
          : o.useLayoutEffect;
      var l = n(6525),
        u = n.n(l),
        s = n(3840),
        c = n(4063),
        f = n.n(c);
      const d = [];
      function p(e, t, n, r = 0, o = !1) {
        for (const a of t)
          if (f()(n, a.args)) {
            if (o) return;
            if (a.error) throw a.error;
            if (a.response) return a.response;
            throw a.promise;
          }
        const i = {
          args: n,
          promise: e(...n)
            .then((e) => (i.response = null == e || e))
            .catch((e) => (i.error = null != e ? e : "unknown error"))
            .then(() => {
              r > 0 &&
                setTimeout(() => {
                  const e = t.indexOf(i);
                  -1 !== e && t.splice(e, 1);
                }, r);
            }),
        };
        if ((t.push(i), !o)) throw i.promise;
      }
      function h(e, ...t) {
        if (void 0 === t || 0 === t.length) e.splice(0, e.length);
        else {
          const n = e.find((e) => f()(t, e.args));
          if (n) {
            const t = e.indexOf(n);
            -1 !== t && e.splice(t, 1);
          }
        }
      }
      function m(e, ...t) {
        return p(e, d, t, m.lifespan);
      }
      (m.lifespan = 0),
        (m.clear = (...e) => h(d, ...e)),
        (m.preload = (e, ...t) => {
          p(e, d, t, m.lifespan, !0);
        }),
        (m.peek = (...e) => {
          var t;
          return null == (t = d.find((t) => f()(e, t.args)))
            ? void 0
            : t.response;
        });
      var v = n(5878),
        _ = n(296),
        g = n.n(_);
      function y(e) {
        let {
          debounce: t,
          scroll: n,
          polyfill: r,
          offsetSize: i,
        } = void 0 === e ? { debounce: 0, scroll: !1, offsetSize: !1 } : e;
        const a =
          r ||
          ("undefined" === typeof window ? class {} : window.ResizeObserver);
        if (!a)
          throw new Error(
            "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
          );
        const [l, u] = (0, o.useState)({
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
          }),
          s = (0, o.useRef)({
            element: null,
            scrollContainers: null,
            resizeObserver: null,
            lastBounds: l,
          }),
          c = t ? ("number" === typeof t ? t : t.scroll) : null,
          f = t ? ("number" === typeof t ? t : t.resize) : null,
          d = (0, o.useRef)(!1);
        (0, o.useEffect)(
          () => (
            (d.current = !0),
            () => {
              d.current = !1;
            }
          )
        );
        const [p, h, m] = (0, o.useMemo)(() => {
          const e = () => {
            if (!s.current.element) return;
            const {
                left: e,
                top: t,
                width: n,
                height: r,
                bottom: o,
                right: a,
                x: l,
                y: c,
              } = s.current.element.getBoundingClientRect(),
              f = {
                left: e,
                top: t,
                width: n,
                height: r,
                bottom: o,
                right: a,
                x: l,
                y: c,
              };
            s.current.element instanceof HTMLElement &&
              i &&
              ((f.height = s.current.element.offsetHeight),
              (f.width = s.current.element.offsetWidth)),
              Object.freeze(f),
              d.current &&
                !E(s.current.lastBounds, f) &&
                u((s.current.lastBounds = f));
          };
          return [e, f ? g()(e, f) : e, c ? g()(e, c) : e];
        }, [u, i, c, f]);
        function v() {
          s.current.scrollContainers &&
            (s.current.scrollContainers.forEach((e) =>
              e.removeEventListener("scroll", m, !0)
            ),
            (s.current.scrollContainers = null)),
            s.current.resizeObserver &&
              (s.current.resizeObserver.disconnect(),
              (s.current.resizeObserver = null));
        }
        function _() {
          s.current.element &&
            ((s.current.resizeObserver = new a(m)),
            s.current.resizeObserver.observe(s.current.element),
            n &&
              s.current.scrollContainers &&
              s.current.scrollContainers.forEach((e) =>
                e.addEventListener("scroll", m, { capture: !0, passive: !0 })
              ));
        }
        var y, w, x;
        return (
          (y = m),
          (w = Boolean(n)),
          (0, o.useEffect)(() => {
            if (w) {
              const e = y;
              return (
                window.addEventListener("scroll", e, {
                  capture: !0,
                  passive: !0,
                }),
                () => {
                  window.removeEventListener("scroll", e, !0);
                }
              );
            }
          }, [y, w]),
          (x = h),
          (0, o.useEffect)(() => {
            const e = x;
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, [x]),
          (0, o.useEffect)(() => {
            v(), _();
          }, [n, m, h]),
          (0, o.useEffect)(() => v, []),
          [
            (e) => {
              e &&
                e !== s.current.element &&
                (v(),
                (s.current.element = e),
                (s.current.scrollContainers = b(e)),
                _());
            },
            l,
            p,
          ]
        );
      }
      function b(e) {
        const t = [];
        if (!e || e === document.body) return t;
        const {
          overflow: n,
          overflowX: r,
          overflowY: o,
        } = window.getComputedStyle(e);
        return (
          [n, r, o].some((e) => "auto" === e || "scroll" === e) && t.push(e),
          [...t, ...b(e.parentElement)]
        );
      }
      const w = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        E = (e, t) => w.every((n) => e[n] === t[n]);
      const x = {
        obj: (e) => e === Object(e) && !x.arr(e) && "function" !== typeof e,
        fun: (e) => "function" === typeof e,
        str: (e) => "string" === typeof e,
        num: (e) => "number" === typeof e,
        und: (e) => void 0 === e,
        arr: (e) => Array.isArray(e),
        equ(e, t) {
          if (typeof e !== typeof t || !!e !== !!t) return !1;
          if (x.str(e) || x.num(e) || x.obj(e)) return e === t;
          if (x.arr(e) && e == t) return !0;
          let n;
          for (n in e) if (!(n in t)) return !1;
          for (n in t) if (e[n] !== t[n]) return !1;
          return !x.und(n) || e === t;
        },
      };
      function S(e) {
        return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId;
      }
      function A(e, t, n, r) {
        const o = n.get(t);
        o &&
          (n.delete(t),
          0 === n.size && (e.delete(r), o.target.releasePointerCapture(r)));
      }
      function T(e) {
        const t = new r.Vector3();
        function n(e) {
          return e.filter((e) =>
            ["Move", "Over", "Enter", "Out", "Leave"].some((t) => {
              var n;
              return null == (n = e.__r3f)
                ? void 0
                : n.handlers["onPointer" + t];
            })
          );
        }
        function o(t) {
          const { internal: n } = e.getState();
          Array.from(n.hovered.values()).forEach((e) => {
            if (
              !t.length ||
              !t.find(
                (t) =>
                  t.object === e.object &&
                  t.index === e.index &&
                  t.instanceId === e.instanceId
              )
            ) {
              const r = e.eventObject.__r3f,
                o = null == r ? void 0 : r.handlers;
              if ((n.hovered.delete(S(e)), null != r && r.eventCount)) {
                const n = { ...e, intersections: t || [] };
                null == o.onPointerOut || o.onPointerOut(n),
                  null == o.onPointerLeave || o.onPointerLeave(n);
              }
            }
          });
        }
        function i(e, t) {
          t.forEach((t) => {
            var n;
            return null == (n = t.__r3f) || null == n.handlers.onPointerMissed
              ? void 0
              : n.handlers.onPointerMissed(e);
          });
        }
        return {
          handlePointer: (r) => {
            switch (r) {
              case "onPointerLeave":
              case "onPointerCancel":
                return () => o([]);
              case "onLostPointerCapture":
                return (t) => {
                  const { internal: n } = e.getState();
                  "pointerId" in t &&
                    !n.capturedMap.has(t.pointerId) &&
                    (n.capturedMap.delete(t.pointerId), o([]));
                };
            }
            return (a) => {
              const { onPointerMissed: l, internal: u } = e.getState();
              !(function (t) {
                var n, r, o, i;
                const a = e.getState(),
                  { raycaster: l, mouse: u, camera: s, size: c } = a,
                  f =
                    null == l.computeOffsets ? void 0 : l.computeOffsets(t, a),
                  d =
                    null != (n = null == f ? void 0 : f.offsetX)
                      ? n
                      : t.offsetX,
                  p =
                    null != (r = null == f ? void 0 : f.offsetY)
                      ? r
                      : t.offsetY,
                  h = null != (o = null == f ? void 0 : f.width) ? o : c.width,
                  m =
                    null != (i = null == f ? void 0 : f.height) ? i : c.height;
                u.set((d / h) * 2 - 1, (-p / m) * 2 + 1), l.setFromCamera(u, s);
              })(a),
                (u.lastEvent.current = a);
              const s = "onPointerMove" === r,
                c =
                  "onClick" === r ||
                  "onContextMenu" === r ||
                  "onDoubleClick" === r,
                f = (function (t, n) {
                  const { internal: r } = e.getState();
                  if ("pointerId" in n && r.capturedMap.has(n.pointerId))
                    for (let e of r.capturedMap.get(n.pointerId).values())
                      t.push(e.intersection);
                  return t;
                })(
                  (function (t) {
                    const n = e.getState(),
                      { raycaster: r, internal: o } = n;
                    if (!r.enabled) return [];
                    const i = new Set(),
                      a = [],
                      l = t ? t(o.interaction) : o.interaction;
                    let u = r.intersectObjects(l, !0).filter((e) => {
                      const t = S(e);
                      return !i.has(t) && (i.add(t), !0);
                    });
                    r.filter && (u = r.filter(u, n));
                    for (const e of u) {
                      let t = e.object;
                      for (; t; ) {
                        var s;
                        null != (s = t.__r3f) &&
                          s.eventCount &&
                          a.push({ ...e, eventObject: t }),
                          (t = t.parent);
                      }
                    }
                    return a;
                  })(s ? n : void 0),
                  a
                ),
                d = c
                  ? (function (t) {
                      const { internal: n } = e.getState(),
                        r = t.offsetX - n.initialClick[0],
                        o = t.offsetY - n.initialClick[1];
                      return Math.round(Math.sqrt(r * r + o * o));
                    })(a)
                  : 0;
              "onPointerDown" === r &&
                ((u.initialClick = [a.offsetX, a.offsetY]),
                (u.initialHits = f.map((e) => e.eventObject))),
                c && !f.length && d <= 2 && (i(a, u.interaction), l && l(a)),
                s && o(f),
                (function (n, r, i, a) {
                  const {
                    raycaster: l,
                    mouse: u,
                    camera: s,
                    internal: c,
                  } = e.getState();
                  if (n.length) {
                    const e = t.set(u.x, u.y, 0).unproject(s),
                      f = { stopped: !1 };
                    for (const t of n) {
                      const d = (e) => {
                          var n, r;
                          return (
                            null !=
                              (n =
                                null == (r = c.capturedMap.get(e))
                                  ? void 0
                                  : r.has(t.eventObject)) && n
                          );
                        },
                        p = (e) => {
                          const n = { intersection: t, target: r.target };
                          c.capturedMap.has(e)
                            ? c.capturedMap.get(e).set(t.eventObject, n)
                            : c.capturedMap.set(
                                e,
                                new Map([[t.eventObject, n]])
                              ),
                            r.target.setPointerCapture(e);
                        },
                        h = (e) => {
                          const n = c.capturedMap.get(e);
                          n && A(c.capturedMap, t.eventObject, n, e);
                        };
                      let m = {};
                      for (let e in r) {
                        let t = r[e];
                        "function" !== typeof t && (m[e] = t);
                      }
                      let v = {
                        ...t,
                        ...m,
                        spaceX: u.x,
                        spaceY: u.y,
                        intersections: n,
                        stopped: f.stopped,
                        delta: i,
                        unprojectedPoint: e,
                        ray: l.ray,
                        camera: s,
                        stopPropagation: () => {
                          const e =
                            "pointerId" in r && c.capturedMap.get(r.pointerId);
                          (!e || e.has(t.eventObject)) &&
                            ((v.stopped = f.stopped = !0),
                            c.hovered.size &&
                              Array.from(c.hovered.values()).find(
                                (e) => e.eventObject === t.eventObject
                              )) &&
                            o([...n.slice(0, n.indexOf(t)), t]);
                        },
                        target: {
                          hasPointerCapture: d,
                          setPointerCapture: p,
                          releasePointerCapture: h,
                        },
                        currentTarget: {
                          hasPointerCapture: d,
                          setPointerCapture: p,
                          releasePointerCapture: h,
                        },
                        sourceEvent: r,
                        nativeEvent: r,
                      };
                      if ((a(v), !0 === f.stopped)) break;
                    }
                  }
                })(f, a, d, (e) => {
                  const t = e.eventObject,
                    n = t.__r3f,
                    o = null == n ? void 0 : n.handlers;
                  if (null != n && n.eventCount)
                    if (s) {
                      if (
                        o.onPointerOver ||
                        o.onPointerEnter ||
                        o.onPointerOut ||
                        o.onPointerLeave
                      ) {
                        const t = S(e),
                          n = u.hovered.get(t);
                        n
                          ? n.stopped && e.stopPropagation()
                          : (u.hovered.set(t, e),
                            null == o.onPointerOver || o.onPointerOver(e),
                            null == o.onPointerEnter || o.onPointerEnter(e));
                      }
                      null == o.onPointerMove || o.onPointerMove(e);
                    } else {
                      const n = o[r];
                      n
                        ? (c && !u.initialHits.includes(t)) ||
                          (i(
                            a,
                            u.interaction.filter(
                              (e) => !u.initialHits.includes(e)
                            )
                          ),
                          n(e))
                        : c &&
                          u.initialHits.includes(t) &&
                          i(
                            a,
                            u.interaction.filter(
                              (e) => !u.initialHits.includes(e)
                            )
                          );
                    }
                });
            };
          },
        };
      }
      const k = (e) => e && !!e.getState,
        P = (e, t) => {
          var n, r;
          return {
            root: k(e)
              ? e
              : null != (n = null == (r = e.__r3f) ? void 0 : r.root)
              ? n
              : t.__r3f.root,
            container: k(e) ? e.getState().scene : e,
          };
        },
        O = "__default",
        C = {};
      let M = {},
        z = (e) => {
          M = { ...M, ...e };
        };
      function L(e, t) {
        const n = e;
        return (
          ((null != t && t.primitive) || !n.__r3f) &&
            (n.__r3f = {
              root: null,
              memoizedProps: {},
              eventCount: 0,
              handlers: {},
              objects: [],
              parent: null,
              ...t,
            }),
          e
        );
      }
      const I = (e) => e && e.isOrthographicCamera;
      function N(e) {
        return Array.isArray(e)
          ? Math.min(Math.max(e[0], window.devicePixelRatio), e[1])
          : e;
      }
      const R = o.createContext(null),
        j = (e, t, n, l) => {
          const {
            gl: u,
            size: s,
            shadows: c = !1,
            linear: f = !1,
            flat: d = !1,
            vr: p = !1,
            orthographic: h = !1,
            frameloop: m = "always",
            dpr: v = 1,
            performance: _,
            clock: g = new r.Clock(),
            raycaster: y,
            camera: b,
            onPointerMissed: w,
          } = l;
          c &&
            ((u.shadowMap.enabled = !0),
            "object" === typeof c
              ? Object.assign(u.shadowMap, c)
              : (u.shadowMap.type = r.PCFSoftShadowMap)),
            f && (u.outputEncoding = r.LinearEncoding),
            d && (u.toneMapping = r.NoToneMapping),
            "never" === m && (g.stop(), (g.elapsedTime = 0));
          const E = (function (e) {
              const t = "function" === typeof e ? i(e) : e,
                n = (e = t.getState, n = Object.is) => {
                  const [, r] = (0, o.useReducer)((e) => e + 1, 0),
                    i = t.getState(),
                    l = (0, o.useRef)(i),
                    u = (0, o.useRef)(e),
                    s = (0, o.useRef)(n),
                    c = (0, o.useRef)(!1),
                    f = (0, o.useRef)();
                  let d;
                  void 0 === f.current && (f.current = e(i));
                  let p = !1;
                  (l.current !== i ||
                    u.current !== e ||
                    s.current !== n ||
                    c.current) &&
                    ((d = e(i)), (p = !n(f.current, d))),
                    a(() => {
                      p && (f.current = d),
                        (l.current = i),
                        (u.current = e),
                        (s.current = n),
                        (c.current = !1);
                    });
                  const h = (0, o.useRef)(i);
                  a(() => {
                    const e = () => {
                        try {
                          const e = t.getState(),
                            n = u.current(e);
                          s.current(f.current, n) ||
                            ((l.current = e), (f.current = n), r());
                        } catch (e) {
                          (c.current = !0), r();
                        }
                      },
                      n = t.subscribe(e);
                    return t.getState() !== h.current && e(), n;
                  }, []);
                  const m = p ? d : f.current;
                  return (0, o.useDebugValue)(m), m;
                };
              return (
                Object.assign(n, t),
                (n[Symbol.iterator] = function () {
                  console.warn(
                    "[useStore, api] = create() is deprecated and will be removed in v4"
                  );
                  const e = [n, t];
                  return {
                    next() {
                      const t = e.length <= 0;
                      return { value: e.shift(), done: t };
                    },
                  };
                }),
                n
              );
            })((i, a) => {
              const s = new r.Raycaster(),
                { params: c, ...E } = y || {};
              e(s, { enabled: !0, ...E, params: { ...s.params, ...c } });
              const x = b instanceof r.Camera,
                S = x
                  ? b
                  : h
                  ? new r.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3)
                  : new r.PerspectiveCamera(75, 0, 0.1, 1e3);
              x ||
                ((S.position.z = 5),
                b && e(S, b),
                (null != b && b.rotation) || S.lookAt(0, 0, 0));
              const A = N(v),
                T = new r.Vector3(),
                k = new r.Vector3(),
                P = new r.Vector3();
              function O(e = a().camera, t = k, n = a().size) {
                const { width: o, height: i } = n,
                  l = o / i;
                t instanceof r.Vector3 ? P.copy(t) : P.set(...t);
                const u = e.getWorldPosition(T).distanceTo(P);
                if (I(e))
                  return {
                    width: o / e.zoom,
                    height: i / e.zoom,
                    factor: 1,
                    distance: u,
                    aspect: l,
                  };
                {
                  const t = (e.fov * Math.PI) / 180,
                    n = 2 * Math.tan(t / 2) * u,
                    r = n * (o / i);
                  return {
                    width: r,
                    height: n,
                    factor: o / r,
                    distance: u,
                    aspect: l,
                  };
                }
              }
              let C;
              const M = (e) =>
                i((t) => ({ performance: { ...t.performance, current: e } }));
              return {
                gl: u,
                set: i,
                get: a,
                invalidate: () => t(a()),
                advance: (e, t) => n(e, t, a()),
                linear: f,
                flat: d,
                scene: L(new r.Scene()),
                camera: S,
                controls: null,
                raycaster: s,
                clock: g,
                mouse: new r.Vector2(),
                vr: p,
                frameloop: m,
                onPointerMissed: w,
                performance: {
                  current: 1,
                  min: 0.5,
                  max: 1,
                  debounce: 200,
                  ..._,
                  regress: () => {
                    const e = a();
                    C && clearTimeout(C),
                      e.performance.current !== e.performance.min &&
                        M(e.performance.min),
                      (C = setTimeout(
                        () => M(a().performance.max),
                        e.performance.debounce
                      ));
                  },
                },
                size: { width: 0, height: 0 },
                viewport: {
                  initialDpr: A,
                  dpr: A,
                  width: 0,
                  height: 0,
                  aspect: 0,
                  distance: 0,
                  factor: 0,
                  getCurrentViewport: O,
                },
                setSize: (e, t) => {
                  const n = { width: e, height: t };
                  i((e) => ({
                    size: n,
                    viewport: { ...e.viewport, ...O(S, k, n) },
                  }));
                },
                setDpr: (e) =>
                  i((t) => ({ viewport: { ...t.viewport, dpr: N(e) } })),
                setFrameloop: (e = "always") => i(() => ({ frameloop: e })),
                events: { connected: !1 },
                internal: {
                  active: !1,
                  priority: 0,
                  frames: 0,
                  lastProps: l,
                  lastEvent: o.createRef(),
                  interaction: [],
                  hovered: new Map(),
                  subscribers: [],
                  initialClick: [0, 0],
                  initialHits: [],
                  capturedMap: new Map(),
                  subscribe: (e, t = 0) => (
                    i(({ internal: n }) => ({
                      internal: {
                        ...n,
                        priority: n.priority + (t > 0 ? 1 : 0),
                        subscribers: [
                          ...n.subscribers,
                          { ref: e, priority: t },
                        ].sort((e, t) => e.priority - t.priority),
                      },
                    })),
                    () => {
                      i(({ internal: n }) => ({
                        internal: {
                          ...n,
                          priority: n.priority - (t > 0 ? 1 : 0),
                          subscribers: n.subscribers.filter((t) => t.ref !== e),
                        },
                      }));
                    }
                  ),
                },
              };
            }),
            x = E.getState();
          let S = x.size,
            A = x.viewport.dpr;
          return (
            E.subscribe(() => {
              const {
                camera: e,
                size: t,
                viewport: n,
                internal: o,
              } = E.getState();
              (t === S && n.dpr === A) ||
                (e.manual ||
                  o.lastProps.camera instanceof r.Camera ||
                  (I(e)
                    ? ((e.left = t.width / -2),
                      (e.right = t.width / 2),
                      (e.top = t.height / 2),
                      (e.bottom = t.height / -2))
                    : (e.aspect = t.width / t.height),
                  e.updateProjectionMatrix(),
                  e.updateMatrixWorld()),
                u.setPixelRatio(n.dpr),
                u.setSize(t.width, t.height),
                (S = t),
                (A = n.dpr));
            }),
            s && x.setSize(s.width, s.height),
            E.subscribe((e) => t(e)),
            E
          );
        };
      let D,
        H = [],
        F = [],
        U = [];
      function B(e, t) {
        for (D = 0; D < e.length; D++) e[D](t);
      }
      function V(e, t) {
        let n = t.clock.getDelta();
        for (
          "never" === t.frameloop &&
            "number" === typeof e &&
            ((n = e - t.clock.elapsedTime),
            (t.clock.oldTime = t.clock.elapsedTime),
            (t.clock.elapsedTime = e)),
            D = 0;
          D < t.internal.subscribers.length;
          D++
        )
          t.internal.subscribers[D].ref.current(t, n);
        return (
          !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera),
          (t.internal.frames = Math.max(0, t.internal.frames - 1)),
          "always" === t.frameloop ? 1 : t.internal.frames
        );
      }
      function W(e) {
        const { handlePointer: t } = T(e),
          n = {
            onClick: ["click", !1],
            onContextMenu: ["contextmenu", !1],
            onDoubleClick: ["dblclick", !1],
            onWheel: ["wheel", !0],
            onPointerDown: ["pointerdown", !0],
            onPointerUp: ["pointerup", !0],
            onPointerLeave: ["pointerleave", !0],
            onPointerMove: ["pointermove", !0],
            onPointerCancel: ["pointercancel", !0],
            onLostPointerCapture: ["lostpointercapture", !0],
          };
        return {
          connected: !1,
          handlers: Object.keys(n).reduce((e, n) => ({ ...e, [n]: t(n) }), {}),
          connect: (t) => {
            var r;
            const { set: o, events: i } = e.getState();
            null == i.disconnect || i.disconnect(),
              o((e) => ({ events: { ...e.events, connected: t } })),
              Object.entries(
                null != (r = null == i ? void 0 : i.handlers) ? r : []
              ).forEach(([e, r]) => {
                const [o, i] = n[e];
                t.addEventListener(o, r, { passive: i });
              });
          },
          disconnect: () => {
            const { set: t, events: r } = e.getState();
            var o;
            r.connected &&
              (Object.entries(null != (o = r.handlers) ? o : []).forEach(
                ([e, t]) => {
                  if (r && r.connected instanceof HTMLElement) {
                    const [o] = n[e];
                    r.connected.removeEventListener(o, t);
                  }
                }
              ),
              t((e) => ({ events: { ...e.events, connected: !1 } })));
          },
        };
      }
      const Z = "undefined" !== typeof window ? o.useLayoutEffect : o.useEffect;
      function G({ set: e }) {
        return Z(() => (e(new Promise(() => null)), () => e(!1)), []), null;
      }
      class Q extends o.Component {
        constructor(...e) {
          super(...e), (this.state = { error: !1 });
        }
        componentDidCatch(e) {
          this.props.set(e);
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }
      Q.getDerivedStateFromError = () => ({ error: !0 });
      const $ = o.forwardRef(function (
        {
          children: e,
          fallback: t,
          tabIndex: n,
          resize: i,
          id: a,
          style: l,
          className: u,
          events: s,
          ...c
        },
        f
      ) {
        const d = (function (e) {
            const t = o.useRef(e);
            return (
              o.useLayoutEffect(() => {
                t.current = e;
              }, [e]),
              (...e) => (null == t.current ? void 0 : t.current(...e))
            );
          })(c.onPointerMissed),
          [p, { width: h, height: m }] = y({
            scroll: !0,
            debounce: { scroll: 50, resize: 0 },
            ...i,
          }),
          _ = o.useRef(null),
          [g, b] = o.useState(!1),
          [w, E] = o.useState(!1);
        if (g) throw g;
        if (w) throw w;
        return (
          Z(() => {
            h > 0 &&
              m > 0 &&
              (function (
                e,
                t,
                {
                  gl: n,
                  size: i,
                  mode: a = ne[1],
                  events: l,
                  onCreated: u,
                  ...s
                } = {}
              ) {
                var c, f, d, p, h;
                i ||
                  (i = {
                    width:
                      null !=
                      (f =
                        null == (d = t.parentElement) ? void 0 : d.clientWidth)
                        ? f
                        : 0,
                    height:
                      null !=
                      (p =
                        null == (h = t.parentElement) ? void 0 : h.clientHeight)
                        ? p
                        : 0,
                  });
                let m = te.get(t),
                  v = null == m ? void 0 : m.fiber,
                  _ = null == m ? void 0 : m.store,
                  g = null == (c = _) ? void 0 : c.getState();
                if (v && g) {
                  void 0 === s.dpr ||
                    x.equ(g.viewport.dpr, N(s.dpr)) ||
                    g.setDpr(s.dpr),
                    (g.size.width === i.width && g.size.height === i.height) ||
                      g.setSize(i.width, i.height),
                    g.frameloop !== s.frameloop && g.setFrameloop(s.frameloop);
                  s.linear !== g.internal.lastProps.linear &&
                    (ue(t), (v = void 0));
                }
                if (!v) {
                  const e = ((e, t) => {
                    const n = "function" === typeof e ? e(t) : e;
                    if (((o = n), null != o && o.render)) return n;
                    var o;
                    const i = new r.WebGLRenderer({
                      powerPreference: "high-performance",
                      canvas: t,
                      antialias: !0,
                      alpha: !0,
                      ...e,
                    });
                    (i.outputEncoding = r.sRGBEncoding),
                      (i.toneMapping = r.ACESFilmicToneMapping),
                      e && ae(i, e);
                    return i;
                  })(n, t);
                  s.vr &&
                    ((e.xr.enabled = !0), e.setAnimationLoop((e) => oe(e, !0))),
                    (_ = j(ae, re, oe, { gl: e, size: i, ...s }));
                  const o = _.getState();
                  (v = ie.createContainer(_, ne.indexOf(a), !1, null)),
                    te.set(t, { fiber: v, store: _ }),
                    l && o.set({ events: l(_) });
                }
                if (_ && v)
                  return (
                    ie.updateContainer(
                      o.createElement(le, {
                        store: _,
                        element: e,
                        onCreated: u,
                        target: t,
                      }),
                      v,
                      null,
                      () => {}
                    ),
                    _
                  );
                throw "Error creating root!";
              })(
                o.createElement(
                  Q,
                  { set: E },
                  o.createElement(
                    o.Suspense,
                    { fallback: o.createElement(G, { set: b }) },
                    e
                  )
                ),
                _.current,
                {
                  ...c,
                  size: { width: h, height: m },
                  onPointerMissed: d,
                  events: s || W,
                }
              );
          }, [h, m, e, d]),
          Z(() => {
            const e = _.current;
            return () => ue(e);
          }, []),
          o.createElement(
            "div",
            {
              ref: p,
              id: a,
              className: u,
              tabIndex: n,
              style: {
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                ...l,
              },
            },
            o.createElement(
              "canvas",
              { ref: (0, v.Z)([_, f]), style: { display: "block" } },
              t
            )
          )
        );
      });
      function Y() {
        const e = o.useContext(R);
        if (!e) throw "R3F hooks can only be used within the Canvas component!";
        return e;
      }
      function q(e = (e) => e, t) {
        return Y()(e, t);
      }
      function X(e, t = 0) {
        const n = Y().getState().internal.subscribe,
          r = o.useRef(e);
        return (
          o.useLayoutEffect(() => {
            r.current = e;
          }, [e]),
          o.useLayoutEffect(() => n(r, t), [t, n]),
          null
        );
      }
      function K(e) {
        const t = { nodes: {}, materials: {} };
        return (
          e &&
            e.traverse((e) => {
              e.name && (t.nodes[e.name] = e),
                e.material &&
                  !t.materials[e.material.name] &&
                  (t.materials[e.material.name] = e.material);
            }),
          t
        );
      }
      function J(e, t) {
        return function (n, ...r) {
          const o = new n();
          return (
            e && e(o),
            Promise.all(
              r.map(
                (e) =>
                  new Promise((n, r) =>
                    o.load(
                      e,
                      (e) => {
                        e.scene && Object.assign(e, K(e.scene)), n(e);
                      },
                      t,
                      (t) => r(`Could not load ${e}: ${t.message}`)
                    )
                  )
              )
            )
          );
        };
      }
      function ee(e, t, n, r) {
        const o = Array.isArray(t) ? t : [t],
          i = m(J(n, r), e, ...o);
        return Array.isArray(t) ? i : i[0];
      }
      (ee.preload = function (e, t, n) {
        const r = Array.isArray(t) ? t : [t];
        return m.preload(J(n), e, ...r);
      }),
        (ee.clear = function (e, t) {
          const n = Array.isArray(t) ? t : [t];
          return m.clear(e, ...n);
        });
      const te = new Map(),
        ne = ["legacy", "blocking", "concurrent"],
        { invalidate: re, advance: oe } = (function (e) {
          let t,
            n = !1;
          function r(o) {
            if (
              ((n = !0),
              (t = 0),
              B(H, o),
              e.forEach((e) => {
                const n = e.store.getState();
                n.internal.active &&
                  ("always" === n.frameloop || n.internal.frames > 0) &&
                  (t += V(o, n));
              }),
              B(F, o),
              t > 0)
            )
              return requestAnimationFrame(r);
            B(U, o), (n = !1);
          }
          return {
            loop: r,
            invalidate: function t(o) {
              if (!o) return e.forEach((e) => t(e.store.getState()));
              !o.vr &&
                o.internal.active &&
                "never" !== o.frameloop &&
                ((o.internal.frames = Math.min(60, o.internal.frames + 1)),
                n || ((n = !0), requestAnimationFrame(r)));
            },
            advance: function (t, n = !0, r) {
              n && B(H, t),
                r ? V(t, r) : e.forEach((e) => V(t, e.store.getState())),
                n && B(F, t);
            },
          };
        })(te),
        { reconciler: ie, applyProps: ae } = (function (e) {
          function t(
            e,
            { children: t, key: n, ref: r, ...o },
            { children: i, key: a, ref: l, ...u } = {},
            s = !1
          ) {
            var c;
            const f = null != (c = null == e ? void 0 : e.__r3f) ? c : {},
              d = Object.entries(o),
              p = [];
            if (s) {
              const e = Object.keys(u);
              for (let t = 0; t < e.length; t++)
                o.hasOwnProperty(e[t]) || d.unshift([e[t], O + "remove"]);
            }
            d.forEach(([t, n]) => {
              var r, o, i;
              if (null != (r = e.__r3f) && r.primitive && "object" === t)
                return;
              if (((o = n), (i = u[t]), (x.arr(o) && x.equ(o, i)) || o === i))
                return;
              if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t))
                return p.push([t, n, !0, []]);
              let a = [];
              t.includes("-") && (a = t.split("-")), p.push([t, n, !1, a]);
            });
            const h = { ...o };
            return (
              f.memoizedProps &&
                f.memoizedProps.args &&
                (h.args = f.memoizedProps.args),
              f.memoizedProps &&
                f.memoizedProps.attach &&
                (h.attach = f.memoizedProps.attach),
              { accumulative: s, memoized: h, changes: p }
            );
          }
          function n(e, n) {
            var a, l, u;
            const s = null != (a = null == e ? void 0 : e.__r3f) ? a : {},
              c = s.root,
              f =
                null !=
                (l = null == c || null == c.getState ? void 0 : c.getState())
                  ? l
                  : {},
              { memoized: d, changes: p } =
                (h = n) && h.memoized && h.changes ? n : t(e, n);
            var h;
            const m = s.eventCount;
            if (
              (e.__r3f && (e.__r3f.memoizedProps = d),
              p.forEach(([t, n, i, a]) => {
                var l;
                let u = e,
                  c = u[t];
                if (
                  a.length &&
                  ((c = a.reduce((e, t) => e[t], e)), !c || !c.set)
                ) {
                  const [n, ...r] = a.reverse();
                  (u = r.reverse().reduce((e, t) => e[t], e)), (t = n);
                }
                if (n === O + "remove")
                  if (c && c.constructor) n = new c.constructor(d.args);
                  else if (u.constructor) {
                    const e = new u.constructor(u.__r3f.memoizedProps.args);
                    (n = e[c]), e.dispose && e.dispose();
                  } else n = 0;
                const p =
                  (null == f || null == (l = f.gl)
                    ? void 0
                    : l.outputEncoding) === r.LinearEncoding;
                if (i)
                  n ? (s.handlers[t] = n) : delete s.handlers[t],
                    (s.eventCount = Object.keys(s.handlers).length);
                else if (c && c.set && (c.copy || c instanceof r.Layers)) {
                  if (Array.isArray(n))
                    c.fromArray ? c.fromArray(n) : c.set(...n);
                  else if (
                    c.copy &&
                    n &&
                    n.constructor &&
                    c.constructor.name === n.constructor.name
                  )
                    c.copy(n);
                  else if (void 0 !== n) {
                    const e = c instanceof r.Color;
                    !e && c.setScalar
                      ? c.setScalar(n)
                      : c instanceof r.Layers && n instanceof r.Layers
                      ? (c.mask = n.mask)
                      : c.set(n),
                      !p && e && c.convertSRGBToLinear();
                  }
                } else
                  (u[t] = n),
                    !p &&
                      u[t] instanceof r.Texture &&
                      (u[t].encoding = r.sRGBEncoding);
                o(e);
              }),
              s.parent && f.internal && e.raycast && m !== s.eventCount)
            ) {
              const t = f.internal.interaction.indexOf(e);
              t > -1 && f.internal.interaction.splice(t, 1),
                s.eventCount && f.internal.interaction.push(e);
            }
            return p.length && null != (u = e.__r3f) && u.parent && i(e), e;
          }
          function o(e) {
            var t, n;
            const r =
              null == (t = e.__r3f) ||
              null == (n = t.root) ||
              null == n.getState
                ? void 0
                : n.getState();
            r && 0 === r.internal.frames && r.invalidate();
          }
          function i(e) {
            null == e.onUpdate || e.onUpdate(e);
          }
          function a(e, { args: t = [], ...o }, i, a, l) {
            let u,
              s = `${e[0].toUpperCase()}${e.slice(1)}`;
            if (!k(i) && l) {
              const e = (t) =>
                t.return
                  ? e(t.return)
                  : t.stateNode && t.stateNode.containerInfo;
              i = e(l);
            }
            if (!i || !k(i)) throw `No valid root for ${s}!`;
            if ("primitive" === e) {
              if (void 0 === o.object)
                throw "Primitives without 'object' are invalid!";
              u = L(o.object, { root: i, primitive: !0 });
            } else {
              const e = M[s] || r[s];
              if (!e)
                throw `${s} is not part of the THREE namespace! Did you forget to extend? See: https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#using-3rd-party-objects-declaratively`;
              if (!Array.isArray(t)) throw "The args prop must be an array!";
              u = L(new e(...t), {
                root: i,
                memoizedProps: { args: 0 === t.length ? null : t },
              });
            }
            return (
              "attachFns" in o ||
                (s.endsWith("Geometry")
                  ? (o = { attach: "geometry", ...o })
                  : s.endsWith("Material") &&
                    (o = { attach: "material", ...o })),
              n(u, o),
              u
            );
          }
          function l(e, t) {
            let n = !1;
            if (t) {
              if (t.attachArray)
                x.arr(e[t.attachArray]) || (e[t.attachArray] = []),
                  e[t.attachArray].push(t);
              else if (t.attachObject)
                x.obj(e[t.attachObject[0]]) || (e[t.attachObject[0]] = {}),
                  (e[t.attachObject[0]][t.attachObject[1]] = t);
              else if (t.attach && !x.fun(t.attach)) e[t.attach] = t;
              else if (x.arr(t.attachFns)) {
                const [n] = t.attachFns;
                x.str(n) && x.fun(e[n]) ? e[n](t) : x.fun(n) && n(t, e);
              } else t.isObject3D && e.isObject3D && (e.add(t), (n = !0));
              n || e.__r3f.objects.push(t),
                t.__r3f || L(t, {}),
                (t.__r3f.parent = e),
                i(t),
                o(t);
            }
          }
          function c(e, t, n) {
            let r = !1;
            if (t) {
              if (t.attachArray) {
                let r = e[t.attachArray];
                x.arr(r) || ((e[t.attachArray] = []), (r = e[t.attachArray])),
                  r.splice(r.indexOf(n), 0, t);
              } else {
                if (t.attachObject || (t.attach && !x.fun(t.attach)))
                  return l(e, t);
                if (t.isObject3D && e.isObject3D) {
                  (t.parent = e), t.dispatchEvent({ type: "added" });
                  const o = e.children.filter((e) => e !== t),
                    i = o.indexOf(n);
                  (e.children = [...o.slice(0, i), t, ...o.slice(i)]), (r = !0);
                }
              }
              r || e.__r3f.objects.push(t),
                t.__r3f || L(t, {}),
                (t.__r3f.parent = e),
                i(t),
                o(t);
            }
          }
          function f(e, t, n = !1) {
            e && [...e].forEach((e) => d(t, e, n));
          }
          function d(e, t, n) {
            if (t) {
              var r, i;
              if (
                (t.__r3f && (t.__r3f.parent = null),
                null != (r = e.__r3f) &&
                  r.objects &&
                  (e.__r3f.objects = e.__r3f.objects.filter((e) => e !== t)),
                t.attachArray)
              )
                e[t.attachArray] = e[t.attachArray].filter((e) => e !== t);
              else if (t.attachObject)
                delete e[t.attachObject[0]][t.attachObject[1]];
              else if (t.attach && !x.fun(t.attach) && e[t.attach] === t)
                e[t.attach] = null;
              else if (x.arr(t.attachFns)) {
                const [, n] = t.attachFns;
                x.str(n) && x.fun(e[n]) ? e[n](t) : x.fun(n) && n(t, e);
              } else if (t.isObject3D && e.isObject3D) {
                var a;
                e.remove(t),
                  null != (a = t.__r3f) &&
                    a.root &&
                    (function (e, t) {
                      const { internal: n } = e.getState();
                      (n.interaction = n.interaction.filter((e) => e !== t)),
                        (n.initialHits = n.initialHits.filter((e) => e !== t)),
                        n.hovered.forEach((e, r) => {
                          (e.eventObject !== t && e.object !== t) ||
                            n.hovered.delete(r);
                        }),
                        n.capturedMap.forEach((e, r) => {
                          A(n.capturedMap, t, e, r);
                        });
                    })(t.__r3f.root, t);
              }
              const u = null == (i = t.__r3f) ? void 0 : i.primitive,
                c = void 0 === n ? null !== t.dispose && !u : n;
              var l;
              if (!u)
                f(null == (l = t.__r3f) ? void 0 : l.objects, t, c),
                  f(t.children, t, c);
              t.__r3f &&
                (delete t.__r3f.root,
                delete t.__r3f.objects,
                delete t.__r3f.handlers,
                delete t.__r3f.memoizedProps,
                u || delete t.__r3f),
                c &&
                  t.dispose &&
                  "Scene" !== t.type &&
                  (0, s.unstable_runWithPriority)(
                    s.unstable_IdlePriority,
                    () => {
                      try {
                        t.dispose();
                      } catch (e) {}
                    }
                  ),
                o(e);
            }
          }
          return {
            reconciler: u()({
              now: s.unstable_now,
              createInstance: a,
              removeChild: d,
              appendChild: l,
              appendInitialChild: l,
              insertBefore: c,
              warnsIfNotActing: !0,
              supportsMutation: !0,
              isPrimaryRenderer: !1,
              scheduleTimeout: x.fun(setTimeout) ? setTimeout : void 0,
              cancelTimeout: x.fun(clearTimeout) ? clearTimeout : void 0,
              setTimeout: x.fun(setTimeout) ? setTimeout : void 0,
              clearTimeout: x.fun(clearTimeout) ? clearTimeout : void 0,
              noTimeout: -1,
              appendChildToContainer: (e, t) => {
                const { container: n, root: r } = P(e, t);
                (n.__r3f.root = r), l(n, t);
              },
              removeChildFromContainer: (e, t) => d(P(e, t).container, t),
              insertInContainerBefore: (e, t, n) => c(P(e, t).container, t, n),
              prepareUpdate(e, n, r, o) {
                if (e.__r3f.primitive && o.object && o.object !== e)
                  return [!0];
                {
                  const { args: n = [], children: i, ...a } = o,
                    { args: u = [], children: s, ...c } = r;
                  if (!Array.isArray(n))
                    throw "The args prop must be an array!";
                  if (n.some((e, t) => e !== u[t])) return [!0];
                  const f = t(e, a, c, !0);
                  if (f.changes.length) return [!1, f];
                  if (e.attach && "function" !== typeof e.attach) {
                    const t = e.__r3f.parent;
                    t && t[e.attach] !== e && l(t, e);
                  }
                  return null;
                }
              },
              commitUpdate(e, [t, r], o, i, u, s) {
                t
                  ? (function (e, t, n, r) {
                      var o;
                      const i = null == (o = e.__r3f) ? void 0 : o.parent;
                      if (!i) return;
                      const u = a(t, n, e.__r3f.root);
                      "primitive" !== t &&
                        e.children &&
                        (e.children.forEach((e) => l(u, e)), (e.children = [])),
                        e.__r3f.objects.forEach((e) => l(u, e)),
                        (e.__r3f.objects = []),
                        d(i, e),
                        l(i, u),
                        u.raycast &&
                          u.__r3f.eventCount &&
                          u.__r3f.root.getState().internal.interaction.push(u);
                      [r, r.alternate].forEach((e) => {
                        null !== e &&
                          ((e.stateNode = u),
                          e.ref &&
                            ("function" === typeof e.ref
                              ? e.ref(u)
                              : (e.ref.current = u)));
                      });
                    })(e, o, u, s)
                  : n(e, r);
              },
              hideInstance(e) {
                e.isObject3D && ((e.visible = !1), o(e));
              },
              unhideInstance(e, t) {
                ((e.isObject3D && null == t.visible) || t.visible) &&
                  ((e.visible = !0), o(e));
              },
              hideTextInstance() {
                throw new Error("Text is not allowed in the R3F tree.");
              },
              getPublicInstance: (e) => e,
              getRootHostContext: (e) => C,
              getChildHostContext: (e) => e,
              createTextInstance() {},
              finalizeInitialChildren(e) {
                var t;
                return !!(null != (t = null == e ? void 0 : e.__r3f) ? t : {})
                  .handlers;
              },
              commitMount(e) {
                var t;
                const n = null != (t = null == e ? void 0 : e.__r3f) ? t : {};
                e.raycast &&
                  n.handlers &&
                  n.eventCount &&
                  e.__r3f.root.getState().internal.interaction.push(e);
              },
              shouldDeprioritizeSubtree: () => !1,
              prepareForCommit: () => null,
              preparePortalMount(e) {
                L(e);
              },
              resetAfterCommit() {},
              shouldSetTextContent: () => !1,
              clearContainer: () => !1,
            }),
            applyProps: n,
          };
        })();
      function le({ store: e, element: t, onCreated: n, target: r }) {
        return (
          o.useEffect(() => {
            const t = e.getState();
            t.set((e) => ({ internal: { ...e.internal, active: !0 } })),
              null == t.events.connect || t.events.connect(r),
              n && n(t);
          }, []),
          o.createElement(R.Provider, { value: e }, t)
        );
      }
      function ue(e, t) {
        const n = te.get(e),
          r = null == n ? void 0 : n.fiber;
        if (r) {
          const o = null == n ? void 0 : n.store.getState();
          o && (o.internal.active = !1),
            ie.updateContainer(null, r, null, () => {
              o &&
                setTimeout(() => {
                  var n, r, i;
                  null == o.events.disconnect || o.events.disconnect(),
                    null == (n = o.gl) ||
                      null == (r = n.renderLists) ||
                      null == r.dispose ||
                      r.dispose(),
                    null == (i = o.gl) ||
                      null == i.forceContextLoss ||
                      i.forceContextLoss(),
                    (function (e) {
                      e.dispose && "Scene" !== e.type && e.dispose();
                      for (const t in e)
                        null == t.dispose || t.dispose(), delete e[t];
                    })(o),
                    te.delete(e),
                    t && t(e);
                }, 500);
            });
        }
      }
      ie.act;
      ie.injectIntoDevTools({
        bundleType: 0,
        rendererPackageName: "@react-three/fiber",
        version: "17.0.2",
      });
    },
    4184: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var i = typeof n;
              if ("string" === i || "number" === i) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var a = o.apply(null, n);
                  a && e.push(a);
                }
              } else if ("object" === i)
                if (n.toString === Object.prototype.toString)
                  for (var l in n) r.call(n, l) && n[l] && e.push(l);
                else e.push(n.toString());
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    296: function (e) {
      function t(e, t, n) {
        var r, o, i, a, l;
        function u() {
          var s = Date.now() - a;
          s < t && s >= 0
            ? (r = setTimeout(u, t - s))
            : ((r = null), n || ((l = e.apply(i, o)), (i = o = null)));
        }
        null == t && (t = 100);
        var s = function () {
          (i = this), (o = arguments), (a = Date.now());
          var s = n && !r;
          return (
            r || (r = setTimeout(u, t)),
            s && ((l = e.apply(i, o)), (i = o = null)),
            l
          );
        };
        return (
          (s.clear = function () {
            r && (clearTimeout(r), (r = null));
          }),
          (s.flush = function () {
            r &&
              ((l = e.apply(i, o)),
              (i = o = null),
              clearTimeout(r),
              (r = null));
          }),
          s
        );
      }
      (t.debounce = t), (e.exports = t);
    },
    4063: function (e) {
      "use strict";
      e.exports = function e(t, n) {
        if (t === n) return !0;
        if (t && n && "object" == typeof t && "object" == typeof n) {
          if (t.constructor !== n.constructor) return !1;
          var r, o, i;
          if (Array.isArray(t)) {
            if ((r = t.length) != n.length) return !1;
            for (o = r; 0 !== o--; ) if (!e(t[o], n[o])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === n.source && t.flags === n.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === n.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === n.toString();
          if ((r = (i = Object.keys(t)).length) !== Object.keys(n).length)
            return !1;
          for (o = r; 0 !== o--; )
            if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
          for (o = r; 0 !== o--; ) {
            var a = i[o];
            if (!e(t[a], n[a])) return !1;
          }
          return !0;
        }
        return t !== t && n !== n;
      };
    },
    1766: function (e, t, n) {
      var r;
      !(function () {
        "use strict";
        var o = function () {
          this.init();
        };
        o.prototype = {
          init: function () {
            var e = this || i;
            return (
              (e._counter = 1e3),
              (e._html5AudioPool = []),
              (e.html5PoolSize = 10),
              (e._codecs = {}),
              (e._howls = []),
              (e._muted = !1),
              (e._volume = 1),
              (e._canPlayEvent = "canplaythrough"),
              (e._navigator =
                "undefined" !== typeof window && window.navigator
                  ? window.navigator
                  : null),
              (e.masterGain = null),
              (e.noAudio = !1),
              (e.usingWebAudio = !0),
              (e.autoSuspend = !0),
              (e.ctx = null),
              (e.autoUnlock = !0),
              e._setup(),
              e
            );
          },
          volume: function (e) {
            var t = this || i;
            if (
              ((e = parseFloat(e)),
              t.ctx || p(),
              "undefined" !== typeof e && e >= 0 && e <= 1)
            ) {
              if (((t._volume = e), t._muted)) return t;
              t.usingWebAudio &&
                t.masterGain.gain.setValueAtTime(e, i.ctx.currentTime);
              for (var n = 0; n < t._howls.length; n++)
                if (!t._howls[n]._webAudio)
                  for (
                    var r = t._howls[n]._getSoundIds(), o = 0;
                    o < r.length;
                    o++
                  ) {
                    var a = t._howls[n]._soundById(r[o]);
                    a && a._node && (a._node.volume = a._volume * e);
                  }
              return t;
            }
            return t._volume;
          },
          mute: function (e) {
            var t = this || i;
            t.ctx || p(),
              (t._muted = e),
              t.usingWebAudio &&
                t.masterGain.gain.setValueAtTime(
                  e ? 0 : t._volume,
                  i.ctx.currentTime
                );
            for (var n = 0; n < t._howls.length; n++)
              if (!t._howls[n]._webAudio)
                for (
                  var r = t._howls[n]._getSoundIds(), o = 0;
                  o < r.length;
                  o++
                ) {
                  var a = t._howls[n]._soundById(r[o]);
                  a && a._node && (a._node.muted = !!e || a._muted);
                }
            return t;
          },
          stop: function () {
            for (var e = this || i, t = 0; t < e._howls.length; t++)
              e._howls[t].stop();
            return e;
          },
          unload: function () {
            for (var e = this || i, t = e._howls.length - 1; t >= 0; t--)
              e._howls[t].unload();
            return (
              e.usingWebAudio &&
                e.ctx &&
                "undefined" !== typeof e.ctx.close &&
                (e.ctx.close(), (e.ctx = null), p()),
              e
            );
          },
          codecs: function (e) {
            return (this || i)._codecs[e.replace(/^x-/, "")];
          },
          _setup: function () {
            var e = this || i;
            if (
              ((e.state = (e.ctx && e.ctx.state) || "suspended"),
              e._autoSuspend(),
              !e.usingWebAudio)
            )
              if ("undefined" !== typeof Audio)
                try {
                  "undefined" === typeof new Audio().oncanplaythrough &&
                    (e._canPlayEvent = "canplay");
                } catch (t) {
                  e.noAudio = !0;
                }
              else e.noAudio = !0;
            try {
              new Audio().muted && (e.noAudio = !0);
            } catch (t) {}
            return e.noAudio || e._setupCodecs(), e;
          },
          _setupCodecs: function () {
            var e = this || i,
              t = null;
            try {
              t = "undefined" !== typeof Audio ? new Audio() : null;
            } catch (c) {
              return e;
            }
            if (!t || "function" !== typeof t.canPlayType) return e;
            var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
              r = e._navigator ? e._navigator.userAgent : "",
              o = r.match(/OPR\/([0-6].)/g),
              a = o && parseInt(o[0].split("/")[1], 10) < 33,
              l = -1 !== r.indexOf("Safari") && -1 === r.indexOf("Chrome"),
              u = r.match(/Version\/(.*?) /),
              s = l && u && parseInt(u[1], 10) < 15;
            return (
              (e._codecs = {
                mp3: !(
                  a ||
                  (!n && !t.canPlayType("audio/mp3;").replace(/^no$/, ""))
                ),
                mpeg: !!n,
                opus: !!t
                  .canPlayType('audio/ogg; codecs="opus"')
                  .replace(/^no$/, ""),
                ogg: !!t
                  .canPlayType('audio/ogg; codecs="vorbis"')
                  .replace(/^no$/, ""),
                oga: !!t
                  .canPlayType('audio/ogg; codecs="vorbis"')
                  .replace(/^no$/, ""),
                wav: !!(
                  t.canPlayType('audio/wav; codecs="1"') ||
                  t.canPlayType("audio/wav")
                ).replace(/^no$/, ""),
                aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(
                  t.canPlayType("audio/x-m4a;") ||
                  t.canPlayType("audio/m4a;") ||
                  t.canPlayType("audio/aac;")
                ).replace(/^no$/, ""),
                m4b: !!(
                  t.canPlayType("audio/x-m4b;") ||
                  t.canPlayType("audio/m4b;") ||
                  t.canPlayType("audio/aac;")
                ).replace(/^no$/, ""),
                mp4: !!(
                  t.canPlayType("audio/x-mp4;") ||
                  t.canPlayType("audio/mp4;") ||
                  t.canPlayType("audio/aac;")
                ).replace(/^no$/, ""),
                weba: !(
                  s ||
                  !t
                    .canPlayType('audio/webm; codecs="vorbis"')
                    .replace(/^no$/, "")
                ),
                webm: !(
                  s ||
                  !t
                    .canPlayType('audio/webm; codecs="vorbis"')
                    .replace(/^no$/, "")
                ),
                dolby: !!t
                  .canPlayType('audio/mp4; codecs="ec-3"')
                  .replace(/^no$/, ""),
                flac: !!(
                  t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")
                ).replace(/^no$/, ""),
              }),
              e
            );
          },
          _unlockAudio: function () {
            var e = this || i;
            if (!e._audioUnlocked && e.ctx) {
              (e._audioUnlocked = !1),
                (e.autoUnlock = !1),
                e._mobileUnloaded ||
                  44100 === e.ctx.sampleRate ||
                  ((e._mobileUnloaded = !0), e.unload()),
                (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
              var t = function (n) {
                for (; e._html5AudioPool.length < e.html5PoolSize; )
                  try {
                    var r = new Audio();
                    (r._unlocked = !0), e._releaseHtml5Audio(r);
                  } catch (n) {
                    e.noAudio = !0;
                    break;
                  }
                for (var o = 0; o < e._howls.length; o++)
                  if (!e._howls[o]._webAudio)
                    for (
                      var i = e._howls[o]._getSoundIds(), a = 0;
                      a < i.length;
                      a++
                    ) {
                      var l = e._howls[o]._soundById(i[a]);
                      l &&
                        l._node &&
                        !l._node._unlocked &&
                        ((l._node._unlocked = !0), l._node.load());
                    }
                e._autoResume();
                var u = e.ctx.createBufferSource();
                (u.buffer = e._scratchBuffer),
                  u.connect(e.ctx.destination),
                  "undefined" === typeof u.start ? u.noteOn(0) : u.start(0),
                  "function" === typeof e.ctx.resume && e.ctx.resume(),
                  (u.onended = function () {
                    u.disconnect(0),
                      (e._audioUnlocked = !0),
                      document.removeEventListener("touchstart", t, !0),
                      document.removeEventListener("touchend", t, !0),
                      document.removeEventListener("click", t, !0),
                      document.removeEventListener("keydown", t, !0);
                    for (var n = 0; n < e._howls.length; n++)
                      e._howls[n]._emit("unlock");
                  });
              };
              return (
                document.addEventListener("touchstart", t, !0),
                document.addEventListener("touchend", t, !0),
                document.addEventListener("click", t, !0),
                document.addEventListener("keydown", t, !0),
                e
              );
            }
          },
          _obtainHtml5Audio: function () {
            var e = this || i;
            if (e._html5AudioPool.length) return e._html5AudioPool.pop();
            var t = new Audio().play();
            return (
              t &&
                "undefined" !== typeof Promise &&
                (t instanceof Promise || "function" === typeof t.then) &&
                t.catch(function () {
                  console.warn(
                    "HTML5 Audio pool exhausted, returning potentially locked audio object."
                  );
                }),
              new Audio()
            );
          },
          _releaseHtml5Audio: function (e) {
            var t = this || i;
            return e._unlocked && t._html5AudioPool.push(e), t;
          },
          _autoSuspend: function () {
            var e = this;
            if (
              e.autoSuspend &&
              e.ctx &&
              "undefined" !== typeof e.ctx.suspend &&
              i.usingWebAudio
            ) {
              for (var t = 0; t < e._howls.length; t++)
                if (e._howls[t]._webAudio)
                  for (var n = 0; n < e._howls[t]._sounds.length; n++)
                    if (!e._howls[t]._sounds[n]._paused) return e;
              return (
                e._suspendTimer && clearTimeout(e._suspendTimer),
                (e._suspendTimer = setTimeout(function () {
                  if (e.autoSuspend) {
                    (e._suspendTimer = null), (e.state = "suspending");
                    var t = function () {
                      (e.state = "suspended"),
                        e._resumeAfterSuspend &&
                          (delete e._resumeAfterSuspend, e._autoResume());
                    };
                    e.ctx.suspend().then(t, t);
                  }
                }, 3e4)),
                e
              );
            }
          },
          _autoResume: function () {
            var e = this;
            if (e.ctx && "undefined" !== typeof e.ctx.resume && i.usingWebAudio)
              return (
                "running" === e.state &&
                "interrupted" !== e.ctx.state &&
                e._suspendTimer
                  ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                  : "suspended" === e.state ||
                    ("running" === e.state && "interrupted" === e.ctx.state)
                  ? (e.ctx.resume().then(function () {
                      e.state = "running";
                      for (var t = 0; t < e._howls.length; t++)
                        e._howls[t]._emit("resume");
                    }),
                    e._suspendTimer &&
                      (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                  : "suspending" === e.state && (e._resumeAfterSuspend = !0),
                e
              );
          },
        };
        var i = new o(),
          a = function (e) {
            e.src && 0 !== e.src.length
              ? this.init(e)
              : console.error(
                  "An array of source files must be passed with any new Howl."
                );
          };
        a.prototype = {
          init: function (e) {
            var t = this;
            return (
              i.ctx || p(),
              (t._autoplay = e.autoplay || !1),
              (t._format =
                "string" !== typeof e.format ? e.format : [e.format]),
              (t._html5 = e.html5 || !1),
              (t._muted = e.mute || !1),
              (t._loop = e.loop || !1),
              (t._pool = e.pool || 5),
              (t._preload =
                ("boolean" !== typeof e.preload && "metadata" !== e.preload) ||
                e.preload),
              (t._rate = e.rate || 1),
              (t._sprite = e.sprite || {}),
              (t._src = "string" !== typeof e.src ? e.src : [e.src]),
              (t._volume = void 0 !== e.volume ? e.volume : 1),
              (t._xhr = {
                method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                withCredentials:
                  !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
              }),
              (t._duration = 0),
              (t._state = "unloaded"),
              (t._sounds = []),
              (t._endTimers = {}),
              (t._queue = []),
              (t._playLock = !1),
              (t._onend = e.onend ? [{ fn: e.onend }] : []),
              (t._onfade = e.onfade ? [{ fn: e.onfade }] : []),
              (t._onload = e.onload ? [{ fn: e.onload }] : []),
              (t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
              (t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
              (t._onpause = e.onpause ? [{ fn: e.onpause }] : []),
              (t._onplay = e.onplay ? [{ fn: e.onplay }] : []),
              (t._onstop = e.onstop ? [{ fn: e.onstop }] : []),
              (t._onmute = e.onmute ? [{ fn: e.onmute }] : []),
              (t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
              (t._onrate = e.onrate ? [{ fn: e.onrate }] : []),
              (t._onseek = e.onseek ? [{ fn: e.onseek }] : []),
              (t._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
              (t._onresume = []),
              (t._webAudio = i.usingWebAudio && !t._html5),
              "undefined" !== typeof i.ctx &&
                i.ctx &&
                i.autoUnlock &&
                i._unlockAudio(),
              i._howls.push(t),
              t._autoplay &&
                t._queue.push({
                  event: "play",
                  action: function () {
                    t.play();
                  },
                }),
              t._preload && "none" !== t._preload && t.load(),
              t
            );
          },
          load: function () {
            var e = this,
              t = null;
            if (i.noAudio) e._emit("loaderror", null, "No audio support.");
            else {
              "string" === typeof e._src && (e._src = [e._src]);
              for (var n = 0; n < e._src.length; n++) {
                var r, o;
                if (e._format && e._format[n]) r = e._format[n];
                else {
                  if ("string" !== typeof (o = e._src[n])) {
                    e._emit(
                      "loaderror",
                      null,
                      "Non-string found in selected audio sources - ignoring."
                    );
                    continue;
                  }
                  (r = /^data:audio\/([^;,]+);/i.exec(o)) ||
                    (r = /\.([^.]+)$/.exec(o.split("?", 1)[0])),
                    r && (r = r[1].toLowerCase());
                }
                if (
                  (r ||
                    console.warn(
                      'No file extension was found. Consider using the "format" property or specify an extension.'
                    ),
                  r && i.codecs(r))
                ) {
                  t = e._src[n];
                  break;
                }
              }
              if (t)
                return (
                  (e._src = t),
                  (e._state = "loading"),
                  "https:" === window.location.protocol &&
                    "http:" === t.slice(0, 5) &&
                    ((e._html5 = !0), (e._webAudio = !1)),
                  new l(e),
                  e._webAudio && s(e),
                  e
                );
              e._emit(
                "loaderror",
                null,
                "No codec support for selected audio sources."
              );
            }
          },
          play: function (e, t) {
            var n = this,
              r = null;
            if ("number" === typeof e) (r = e), (e = null);
            else {
              if (
                "string" === typeof e &&
                "loaded" === n._state &&
                !n._sprite[e]
              )
                return null;
              if (
                "undefined" === typeof e &&
                ((e = "__default"), !n._playLock)
              ) {
                for (var o = 0, a = 0; a < n._sounds.length; a++)
                  n._sounds[a]._paused &&
                    !n._sounds[a]._ended &&
                    (o++, (r = n._sounds[a]._id));
                1 === o ? (e = null) : (r = null);
              }
            }
            var l = r ? n._soundById(r) : n._inactiveSound();
            if (!l) return null;
            if (
              (r && !e && (e = l._sprite || "__default"), "loaded" !== n._state)
            ) {
              (l._sprite = e), (l._ended = !1);
              var u = l._id;
              return (
                n._queue.push({
                  event: "play",
                  action: function () {
                    n.play(u);
                  },
                }),
                u
              );
            }
            if (r && !l._paused) return t || n._loadQueue("play"), l._id;
            n._webAudio && i._autoResume();
            var s = Math.max(0, l._seek > 0 ? l._seek : n._sprite[e][0] / 1e3),
              c = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - s),
              f = (1e3 * c) / Math.abs(l._rate),
              d = n._sprite[e][0] / 1e3,
              p = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
            (l._sprite = e), (l._ended = !1);
            var h = function () {
              (l._paused = !1),
                (l._seek = s),
                (l._start = d),
                (l._stop = p),
                (l._loop = !(!l._loop && !n._sprite[e][2]));
            };
            if (!(s >= p)) {
              var m = l._node;
              if (n._webAudio) {
                var v = function () {
                  (n._playLock = !1), h(), n._refreshBuffer(l);
                  var e = l._muted || n._muted ? 0 : l._volume;
                  m.gain.setValueAtTime(e, i.ctx.currentTime),
                    (l._playStart = i.ctx.currentTime),
                    "undefined" === typeof m.bufferSource.start
                      ? l._loop
                        ? m.bufferSource.noteGrainOn(0, s, 86400)
                        : m.bufferSource.noteGrainOn(0, s, c)
                      : l._loop
                      ? m.bufferSource.start(0, s, 86400)
                      : m.bufferSource.start(0, s, c),
                    f !== 1 / 0 &&
                      (n._endTimers[l._id] = setTimeout(
                        n._ended.bind(n, l),
                        f
                      )),
                    t ||
                      setTimeout(function () {
                        n._emit("play", l._id), n._loadQueue();
                      }, 0);
                };
                "running" === i.state && "interrupted" !== i.ctx.state
                  ? v()
                  : ((n._playLock = !0),
                    n.once("resume", v),
                    n._clearTimer(l._id));
              } else {
                var _ = function () {
                  (m.currentTime = s),
                    (m.muted = l._muted || n._muted || i._muted || m.muted),
                    (m.volume = l._volume * i.volume()),
                    (m.playbackRate = l._rate);
                  try {
                    var r = m.play();
                    if (
                      (r &&
                      "undefined" !== typeof Promise &&
                      (r instanceof Promise || "function" === typeof r.then)
                        ? ((n._playLock = !0),
                          h(),
                          r
                            .then(function () {
                              (n._playLock = !1),
                                (m._unlocked = !0),
                                t ? n._loadQueue() : n._emit("play", l._id);
                            })
                            .catch(function () {
                              (n._playLock = !1),
                                n._emit(
                                  "playerror",
                                  l._id,
                                  "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                                ),
                                (l._ended = !0),
                                (l._paused = !0);
                            }))
                        : t ||
                          ((n._playLock = !1), h(), n._emit("play", l._id)),
                      (m.playbackRate = l._rate),
                      m.paused)
                    )
                      return void n._emit(
                        "playerror",
                        l._id,
                        "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                      );
                    "__default" !== e || l._loop
                      ? (n._endTimers[l._id] = setTimeout(
                          n._ended.bind(n, l),
                          f
                        ))
                      : ((n._endTimers[l._id] = function () {
                          n._ended(l),
                            m.removeEventListener(
                              "ended",
                              n._endTimers[l._id],
                              !1
                            );
                        }),
                        m.addEventListener("ended", n._endTimers[l._id], !1));
                  } catch (o) {
                    n._emit("playerror", l._id, o);
                  }
                };
                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" ===
                  m.src && ((m.src = n._src), m.load());
                var g =
                  (window && window.ejecta) ||
                  (!m.readyState && i._navigator.isCocoonJS);
                if (m.readyState >= 3 || g) _();
                else {
                  (n._playLock = !0), (n._state = "loading");
                  var y = function () {
                    (n._state = "loaded"),
                      _(),
                      m.removeEventListener(i._canPlayEvent, y, !1);
                  };
                  m.addEventListener(i._canPlayEvent, y, !1),
                    n._clearTimer(l._id);
                }
              }
              return l._id;
            }
            n._ended(l);
          },
          pause: function (e) {
            var t = this;
            if ("loaded" !== t._state || t._playLock)
              return (
                t._queue.push({
                  event: "pause",
                  action: function () {
                    t.pause(e);
                  },
                }),
                t
              );
            for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
              t._clearTimer(n[r]);
              var o = t._soundById(n[r]);
              if (
                o &&
                !o._paused &&
                ((o._seek = t.seek(n[r])),
                (o._rateSeek = 0),
                (o._paused = !0),
                t._stopFade(n[r]),
                o._node)
              )
                if (t._webAudio) {
                  if (!o._node.bufferSource) continue;
                  "undefined" === typeof o._node.bufferSource.stop
                    ? o._node.bufferSource.noteOff(0)
                    : o._node.bufferSource.stop(0),
                    t._cleanBuffer(o._node);
                } else
                  (isNaN(o._node.duration) && o._node.duration !== 1 / 0) ||
                    o._node.pause();
              arguments[1] || t._emit("pause", o ? o._id : null);
            }
            return t;
          },
          stop: function (e, t) {
            var n = this;
            if ("loaded" !== n._state || n._playLock)
              return (
                n._queue.push({
                  event: "stop",
                  action: function () {
                    n.stop(e);
                  },
                }),
                n
              );
            for (var r = n._getSoundIds(e), o = 0; o < r.length; o++) {
              n._clearTimer(r[o]);
              var i = n._soundById(r[o]);
              i &&
                ((i._seek = i._start || 0),
                (i._rateSeek = 0),
                (i._paused = !0),
                (i._ended = !0),
                n._stopFade(r[o]),
                i._node &&
                  (n._webAudio
                    ? i._node.bufferSource &&
                      ("undefined" === typeof i._node.bufferSource.stop
                        ? i._node.bufferSource.noteOff(0)
                        : i._node.bufferSource.stop(0),
                      n._cleanBuffer(i._node))
                    : (isNaN(i._node.duration) && i._node.duration !== 1 / 0) ||
                      ((i._node.currentTime = i._start || 0),
                      i._node.pause(),
                      i._node.duration === 1 / 0 && n._clearSound(i._node))),
                t || n._emit("stop", i._id));
            }
            return n;
          },
          mute: function (e, t) {
            var n = this;
            if ("loaded" !== n._state || n._playLock)
              return (
                n._queue.push({
                  event: "mute",
                  action: function () {
                    n.mute(e, t);
                  },
                }),
                n
              );
            if ("undefined" === typeof t) {
              if ("boolean" !== typeof e) return n._muted;
              n._muted = e;
            }
            for (var r = n._getSoundIds(t), o = 0; o < r.length; o++) {
              var a = n._soundById(r[o]);
              a &&
                ((a._muted = e),
                a._interval && n._stopFade(a._id),
                n._webAudio && a._node
                  ? a._node.gain.setValueAtTime(
                      e ? 0 : a._volume,
                      i.ctx.currentTime
                    )
                  : a._node && (a._node.muted = !!i._muted || e),
                n._emit("mute", a._id));
            }
            return n;
          },
          volume: function () {
            var e,
              t,
              n,
              r = this,
              o = arguments;
            if (0 === o.length) return r._volume;
            if (
              1 === o.length ||
              (2 === o.length && "undefined" === typeof o[1])
            ) {
              var a = r._getSoundIds(),
                l = a.indexOf(o[0]);
              l >= 0 ? (t = parseInt(o[0], 10)) : (e = parseFloat(o[0]));
            } else
              o.length >= 2 &&
                ((e = parseFloat(o[0])), (t = parseInt(o[1], 10)));
            if (!("undefined" !== typeof e && e >= 0 && e <= 1))
              return (n = t ? r._soundById(t) : r._sounds[0]) ? n._volume : 0;
            if ("loaded" !== r._state || r._playLock)
              return (
                r._queue.push({
                  event: "volume",
                  action: function () {
                    r.volume.apply(r, o);
                  },
                }),
                r
              );
            "undefined" === typeof t && (r._volume = e),
              (t = r._getSoundIds(t));
            for (var u = 0; u < t.length; u++)
              (n = r._soundById(t[u])) &&
                ((n._volume = e),
                o[2] || r._stopFade(t[u]),
                r._webAudio && n._node && !n._muted
                  ? n._node.gain.setValueAtTime(e, i.ctx.currentTime)
                  : n._node && !n._muted && (n._node.volume = e * i.volume()),
                r._emit("volume", n._id));
            return r;
          },
          fade: function (e, t, n, r) {
            var o = this;
            if ("loaded" !== o._state || o._playLock)
              return (
                o._queue.push({
                  event: "fade",
                  action: function () {
                    o.fade(e, t, n, r);
                  },
                }),
                o
              );
            (e = Math.min(Math.max(0, parseFloat(e)), 1)),
              (t = Math.min(Math.max(0, parseFloat(t)), 1)),
              (n = parseFloat(n)),
              o.volume(e, r);
            for (var a = o._getSoundIds(r), l = 0; l < a.length; l++) {
              var u = o._soundById(a[l]);
              if (u) {
                if ((r || o._stopFade(a[l]), o._webAudio && !u._muted)) {
                  var s = i.ctx.currentTime,
                    c = s + n / 1e3;
                  (u._volume = e),
                    u._node.gain.setValueAtTime(e, s),
                    u._node.gain.linearRampToValueAtTime(t, c);
                }
                o._startFadeInterval(
                  u,
                  e,
                  t,
                  n,
                  a[l],
                  "undefined" === typeof r
                );
              }
            }
            return o;
          },
          _startFadeInterval: function (e, t, n, r, o, i) {
            var a = this,
              l = t,
              u = n - t,
              s = Math.abs(u / 0.01),
              c = Math.max(4, s > 0 ? r / s : r),
              f = Date.now();
            (e._fadeTo = n),
              (e._interval = setInterval(function () {
                var o = (Date.now() - f) / r;
                (f = Date.now()),
                  (l += u * o),
                  (l = Math.round(100 * l) / 100),
                  (l = u < 0 ? Math.max(n, l) : Math.min(n, l)),
                  a._webAudio ? (e._volume = l) : a.volume(l, e._id, !0),
                  i && (a._volume = l),
                  ((n < t && l <= n) || (n > t && l >= n)) &&
                    (clearInterval(e._interval),
                    (e._interval = null),
                    (e._fadeTo = null),
                    a.volume(n, e._id),
                    a._emit("fade", e._id));
              }, c));
          },
          _stopFade: function (e) {
            var t = this,
              n = t._soundById(e);
            return (
              n &&
                n._interval &&
                (t._webAudio &&
                  n._node.gain.cancelScheduledValues(i.ctx.currentTime),
                clearInterval(n._interval),
                (n._interval = null),
                t.volume(n._fadeTo, e),
                (n._fadeTo = null),
                t._emit("fade", e)),
              t
            );
          },
          loop: function () {
            var e,
              t,
              n,
              r = this,
              o = arguments;
            if (0 === o.length) return r._loop;
            if (1 === o.length) {
              if ("boolean" !== typeof o[0])
                return !!(n = r._soundById(parseInt(o[0], 10))) && n._loop;
              (e = o[0]), (r._loop = e);
            } else 2 === o.length && ((e = o[0]), (t = parseInt(o[1], 10)));
            for (var i = r._getSoundIds(t), a = 0; a < i.length; a++)
              (n = r._soundById(i[a])) &&
                ((n._loop = e),
                r._webAudio &&
                  n._node &&
                  n._node.bufferSource &&
                  ((n._node.bufferSource.loop = e),
                  e &&
                    ((n._node.bufferSource.loopStart = n._start || 0),
                    (n._node.bufferSource.loopEnd = n._stop),
                    r.playing(i[a]) && (r.pause(i[a], !0), r.play(i[a], !0)))));
            return r;
          },
          rate: function () {
            var e,
              t,
              n,
              r = this,
              o = arguments;
            if (0 === o.length) t = r._sounds[0]._id;
            else if (1 === o.length) {
              var a = r._getSoundIds(),
                l = a.indexOf(o[0]);
              l >= 0 ? (t = parseInt(o[0], 10)) : (e = parseFloat(o[0]));
            } else
              2 === o.length &&
                ((e = parseFloat(o[0])), (t = parseInt(o[1], 10)));
            if ("number" !== typeof e)
              return (n = r._soundById(t)) ? n._rate : r._rate;
            if ("loaded" !== r._state || r._playLock)
              return (
                r._queue.push({
                  event: "rate",
                  action: function () {
                    r.rate.apply(r, o);
                  },
                }),
                r
              );
            "undefined" === typeof t && (r._rate = e), (t = r._getSoundIds(t));
            for (var u = 0; u < t.length; u++)
              if ((n = r._soundById(t[u]))) {
                r.playing(t[u]) &&
                  ((n._rateSeek = r.seek(t[u])),
                  (n._playStart = r._webAudio
                    ? i.ctx.currentTime
                    : n._playStart)),
                  (n._rate = e),
                  r._webAudio && n._node && n._node.bufferSource
                    ? n._node.bufferSource.playbackRate.setValueAtTime(
                        e,
                        i.ctx.currentTime
                      )
                    : n._node && (n._node.playbackRate = e);
                var s = r.seek(t[u]),
                  c =
                    (r._sprite[n._sprite][0] + r._sprite[n._sprite][1]) / 1e3 -
                    s,
                  f = (1e3 * c) / Math.abs(n._rate);
                (!r._endTimers[t[u]] && n._paused) ||
                  (r._clearTimer(t[u]),
                  (r._endTimers[t[u]] = setTimeout(r._ended.bind(r, n), f))),
                  r._emit("rate", n._id);
              }
            return r;
          },
          seek: function () {
            var e,
              t,
              n = this,
              r = arguments;
            if (0 === r.length) n._sounds.length && (t = n._sounds[0]._id);
            else if (1 === r.length) {
              var o = n._getSoundIds(),
                a = o.indexOf(r[0]);
              a >= 0
                ? (t = parseInt(r[0], 10))
                : n._sounds.length &&
                  ((t = n._sounds[0]._id), (e = parseFloat(r[0])));
            } else
              2 === r.length &&
                ((e = parseFloat(r[0])), (t = parseInt(r[1], 10)));
            if ("undefined" === typeof t) return 0;
            if ("number" === typeof e && ("loaded" !== n._state || n._playLock))
              return (
                n._queue.push({
                  event: "seek",
                  action: function () {
                    n.seek.apply(n, r);
                  },
                }),
                n
              );
            var l = n._soundById(t);
            if (l) {
              if (!("number" === typeof e && e >= 0)) {
                if (n._webAudio) {
                  var u = n.playing(t) ? i.ctx.currentTime - l._playStart : 0,
                    s = l._rateSeek ? l._rateSeek - l._seek : 0;
                  return l._seek + (s + u * Math.abs(l._rate));
                }
                return l._node.currentTime;
              }
              var c = n.playing(t);
              c && n.pause(t, !0),
                (l._seek = e),
                (l._ended = !1),
                n._clearTimer(t),
                n._webAudio ||
                  !l._node ||
                  isNaN(l._node.duration) ||
                  (l._node.currentTime = e);
              var f = function () {
                c && n.play(t, !0), n._emit("seek", t);
              };
              if (c && !n._webAudio) {
                var d = function () {
                  n._playLock ? setTimeout(d, 0) : f();
                };
                setTimeout(d, 0);
              } else f();
            }
            return n;
          },
          playing: function (e) {
            var t = this;
            if ("number" === typeof e) {
              var n = t._soundById(e);
              return !!n && !n._paused;
            }
            for (var r = 0; r < t._sounds.length; r++)
              if (!t._sounds[r]._paused) return !0;
            return !1;
          },
          duration: function (e) {
            var t = this,
              n = t._duration,
              r = t._soundById(e);
            return r && (n = t._sprite[r._sprite][1] / 1e3), n;
          },
          state: function () {
            return this._state;
          },
          unload: function () {
            for (var e = this, t = e._sounds, n = 0; n < t.length; n++)
              t[n]._paused || e.stop(t[n]._id),
                e._webAudio ||
                  (e._clearSound(t[n]._node),
                  t[n]._node.removeEventListener("error", t[n]._errorFn, !1),
                  t[n]._node.removeEventListener(
                    i._canPlayEvent,
                    t[n]._loadFn,
                    !1
                  ),
                  t[n]._node.removeEventListener("ended", t[n]._endFn, !1),
                  i._releaseHtml5Audio(t[n]._node)),
                delete t[n]._node,
                e._clearTimer(t[n]._id);
            var r = i._howls.indexOf(e);
            r >= 0 && i._howls.splice(r, 1);
            var o = !0;
            for (n = 0; n < i._howls.length; n++)
              if (
                i._howls[n]._src === e._src ||
                e._src.indexOf(i._howls[n]._src) >= 0
              ) {
                o = !1;
                break;
              }
            return (
              u && o && delete u[e._src],
              (i.noAudio = !1),
              (e._state = "unloaded"),
              (e._sounds = []),
              (e = null),
              null
            );
          },
          on: function (e, t, n, r) {
            var o = this["_on" + e];
            return (
              "function" === typeof t &&
                o.push(r ? { id: n, fn: t, once: r } : { id: n, fn: t }),
              this
            );
          },
          off: function (e, t, n) {
            var r = this,
              o = r["_on" + e],
              i = 0;
            if (("number" === typeof t && ((n = t), (t = null)), t || n))
              for (i = 0; i < o.length; i++) {
                var a = n === o[i].id;
                if ((t === o[i].fn && a) || (!t && a)) {
                  o.splice(i, 1);
                  break;
                }
              }
            else if (e) r["_on" + e] = [];
            else {
              var l = Object.keys(r);
              for (i = 0; i < l.length; i++)
                0 === l[i].indexOf("_on") &&
                  Array.isArray(r[l[i]]) &&
                  (r[l[i]] = []);
            }
            return r;
          },
          once: function (e, t, n) {
            return this.on(e, t, n, 1), this;
          },
          _emit: function (e, t, n) {
            for (var r = this, o = r["_on" + e], i = o.length - 1; i >= 0; i--)
              (o[i].id && o[i].id !== t && "load" !== e) ||
                (setTimeout(
                  function (e) {
                    e.call(this, t, n);
                  }.bind(r, o[i].fn),
                  0
                ),
                o[i].once && r.off(e, o[i].fn, o[i].id));
            return r._loadQueue(e), r;
          },
          _loadQueue: function (e) {
            var t = this;
            if (t._queue.length > 0) {
              var n = t._queue[0];
              n.event === e && (t._queue.shift(), t._loadQueue()),
                e || n.action();
            }
            return t;
          },
          _ended: function (e) {
            var t = this,
              n = e._sprite;
            if (
              !t._webAudio &&
              e._node &&
              !e._node.paused &&
              !e._node.ended &&
              e._node.currentTime < e._stop
            )
              return setTimeout(t._ended.bind(t, e), 100), t;
            var r = !(!e._loop && !t._sprite[n][2]);
            if (
              (t._emit("end", e._id),
              !t._webAudio && r && t.stop(e._id, !0).play(e._id),
              t._webAudio && r)
            ) {
              t._emit("play", e._id),
                (e._seek = e._start || 0),
                (e._rateSeek = 0),
                (e._playStart = i.ctx.currentTime);
              var o = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
              t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), o);
            }
            return (
              t._webAudio &&
                !r &&
                ((e._paused = !0),
                (e._ended = !0),
                (e._seek = e._start || 0),
                (e._rateSeek = 0),
                t._clearTimer(e._id),
                t._cleanBuffer(e._node),
                i._autoSuspend()),
              t._webAudio || r || t.stop(e._id, !0),
              t
            );
          },
          _clearTimer: function (e) {
            var t = this;
            if (t._endTimers[e]) {
              if ("function" !== typeof t._endTimers[e])
                clearTimeout(t._endTimers[e]);
              else {
                var n = t._soundById(e);
                n &&
                  n._node &&
                  n._node.removeEventListener("ended", t._endTimers[e], !1);
              }
              delete t._endTimers[e];
            }
            return t;
          },
          _soundById: function (e) {
            for (var t = this, n = 0; n < t._sounds.length; n++)
              if (e === t._sounds[n]._id) return t._sounds[n];
            return null;
          },
          _inactiveSound: function () {
            var e = this;
            e._drain();
            for (var t = 0; t < e._sounds.length; t++)
              if (e._sounds[t]._ended) return e._sounds[t].reset();
            return new l(e);
          },
          _drain: function () {
            var e = this,
              t = e._pool,
              n = 0,
              r = 0;
            if (!(e._sounds.length < t)) {
              for (r = 0; r < e._sounds.length; r++) e._sounds[r]._ended && n++;
              for (r = e._sounds.length - 1; r >= 0; r--) {
                if (n <= t) return;
                e._sounds[r]._ended &&
                  (e._webAudio &&
                    e._sounds[r]._node &&
                    e._sounds[r]._node.disconnect(0),
                  e._sounds.splice(r, 1),
                  n--);
              }
            }
          },
          _getSoundIds: function (e) {
            if ("undefined" === typeof e) {
              for (var t = [], n = 0; n < this._sounds.length; n++)
                t.push(this._sounds[n]._id);
              return t;
            }
            return [e];
          },
          _refreshBuffer: function (e) {
            return (
              (e._node.bufferSource = i.ctx.createBufferSource()),
              (e._node.bufferSource.buffer = u[this._src]),
              e._panner
                ? e._node.bufferSource.connect(e._panner)
                : e._node.bufferSource.connect(e._node),
              (e._node.bufferSource.loop = e._loop),
              e._loop &&
                ((e._node.bufferSource.loopStart = e._start || 0),
                (e._node.bufferSource.loopEnd = e._stop || 0)),
              e._node.bufferSource.playbackRate.setValueAtTime(
                e._rate,
                i.ctx.currentTime
              ),
              this
            );
          },
          _cleanBuffer: function (e) {
            var t = i._navigator && i._navigator.vendor.indexOf("Apple") >= 0;
            if (
              i._scratchBuffer &&
              e.bufferSource &&
              ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), t)
            )
              try {
                e.bufferSource.buffer = i._scratchBuffer;
              } catch (n) {}
            return (e.bufferSource = null), this;
          },
          _clearSound: function (e) {
            /MSIE |Trident\//.test(i._navigator && i._navigator.userAgent) ||
              (e.src =
                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
          },
        };
        var l = function (e) {
          (this._parent = e), this.init();
        };
        l.prototype = {
          init: function () {
            var e = this,
              t = e._parent;
            return (
              (e._muted = t._muted),
              (e._loop = t._loop),
              (e._volume = t._volume),
              (e._rate = t._rate),
              (e._seek = 0),
              (e._paused = !0),
              (e._ended = !0),
              (e._sprite = "__default"),
              (e._id = ++i._counter),
              t._sounds.push(e),
              e.create(),
              e
            );
          },
          create: function () {
            var e = this,
              t = e._parent,
              n = i._muted || e._muted || e._parent._muted ? 0 : e._volume;
            return (
              t._webAudio
                ? ((e._node =
                    "undefined" === typeof i.ctx.createGain
                      ? i.ctx.createGainNode()
                      : i.ctx.createGain()),
                  e._node.gain.setValueAtTime(n, i.ctx.currentTime),
                  (e._node.paused = !0),
                  e._node.connect(i.masterGain))
                : i.noAudio ||
                  ((e._node = i._obtainHtml5Audio()),
                  (e._errorFn = e._errorListener.bind(e)),
                  e._node.addEventListener("error", e._errorFn, !1),
                  (e._loadFn = e._loadListener.bind(e)),
                  e._node.addEventListener(i._canPlayEvent, e._loadFn, !1),
                  (e._endFn = e._endListener.bind(e)),
                  e._node.addEventListener("ended", e._endFn, !1),
                  (e._node.src = t._src),
                  (e._node.preload = !0 === t._preload ? "auto" : t._preload),
                  (e._node.volume = n * i.volume()),
                  e._node.load()),
              e
            );
          },
          reset: function () {
            var e = this,
              t = e._parent;
            return (
              (e._muted = t._muted),
              (e._loop = t._loop),
              (e._volume = t._volume),
              (e._rate = t._rate),
              (e._seek = 0),
              (e._rateSeek = 0),
              (e._paused = !0),
              (e._ended = !0),
              (e._sprite = "__default"),
              (e._id = ++i._counter),
              e
            );
          },
          _errorListener: function () {
            var e = this;
            e._parent._emit(
              "loaderror",
              e._id,
              e._node.error ? e._node.error.code : 0
            ),
              e._node.removeEventListener("error", e._errorFn, !1);
          },
          _loadListener: function () {
            var e = this,
              t = e._parent;
            (t._duration = Math.ceil(10 * e._node.duration) / 10),
              0 === Object.keys(t._sprite).length &&
                (t._sprite = { __default: [0, 1e3 * t._duration] }),
              "loaded" !== t._state &&
                ((t._state = "loaded"), t._emit("load"), t._loadQueue()),
              e._node.removeEventListener(i._canPlayEvent, e._loadFn, !1);
          },
          _endListener: function () {
            var e = this,
              t = e._parent;
            t._duration === 1 / 0 &&
              ((t._duration = Math.ceil(10 * e._node.duration) / 10),
              t._sprite.__default[1] === 1 / 0 &&
                (t._sprite.__default[1] = 1e3 * t._duration),
              t._ended(e)),
              e._node.removeEventListener("ended", e._endFn, !1);
          },
        };
        var u = {},
          s = function (e) {
            var t = e._src;
            if (u[t]) return (e._duration = u[t].duration), void d(e);
            if (/^data:[^;]+;base64,/.test(t)) {
              for (
                var n = atob(t.split(",")[1]),
                  r = new Uint8Array(n.length),
                  o = 0;
                o < n.length;
                ++o
              )
                r[o] = n.charCodeAt(o);
              f(r.buffer, e);
            } else {
              var i = new XMLHttpRequest();
              i.open(e._xhr.method, t, !0),
                (i.withCredentials = e._xhr.withCredentials),
                (i.responseType = "arraybuffer"),
                e._xhr.headers &&
                  Object.keys(e._xhr.headers).forEach(function (t) {
                    i.setRequestHeader(t, e._xhr.headers[t]);
                  }),
                (i.onload = function () {
                  var t = (i.status + "")[0];
                  "0" === t || "2" === t || "3" === t
                    ? f(i.response, e)
                    : e._emit(
                        "loaderror",
                        null,
                        "Failed loading audio file with status: " +
                          i.status +
                          "."
                      );
                }),
                (i.onerror = function () {
                  e._webAudio &&
                    ((e._html5 = !0),
                    (e._webAudio = !1),
                    (e._sounds = []),
                    delete u[t],
                    e.load());
                }),
                c(i);
            }
          },
          c = function (e) {
            try {
              e.send();
            } catch (t) {
              e.onerror();
            }
          },
          f = function (e, t) {
            var n = function () {
                t._emit("loaderror", null, "Decoding audio data failed.");
              },
              r = function (e) {
                e && t._sounds.length > 0 ? ((u[t._src] = e), d(t, e)) : n();
              };
            "undefined" !== typeof Promise && 1 === i.ctx.decodeAudioData.length
              ? i.ctx.decodeAudioData(e).then(r).catch(n)
              : i.ctx.decodeAudioData(e, r, n);
          },
          d = function (e, t) {
            t && !e._duration && (e._duration = t.duration),
              0 === Object.keys(e._sprite).length &&
                (e._sprite = { __default: [0, 1e3 * e._duration] }),
              "loaded" !== e._state &&
                ((e._state = "loaded"), e._emit("load"), e._loadQueue());
          },
          p = function () {
            if (i.usingWebAudio) {
              try {
                "undefined" !== typeof AudioContext
                  ? (i.ctx = new AudioContext())
                  : "undefined" !== typeof webkitAudioContext
                  ? (i.ctx = new webkitAudioContext())
                  : (i.usingWebAudio = !1);
              } catch (o) {
                i.usingWebAudio = !1;
              }
              i.ctx || (i.usingWebAudio = !1);
              var e = /iP(hone|od|ad)/.test(
                  i._navigator && i._navigator.platform
                ),
                t =
                  i._navigator &&
                  i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                n = t ? parseInt(t[1], 10) : null;
              if (e && n && n < 9) {
                var r = /safari/.test(
                  i._navigator && i._navigator.userAgent.toLowerCase()
                );
                i._navigator && !r && (i.usingWebAudio = !1);
              }
              i.usingWebAudio &&
                ((i.masterGain =
                  "undefined" === typeof i.ctx.createGain
                    ? i.ctx.createGainNode()
                    : i.ctx.createGain()),
                i.masterGain.gain.setValueAtTime(
                  i._muted ? 0 : i._volume,
                  i.ctx.currentTime
                ),
                i.masterGain.connect(i.ctx.destination)),
                i._setup();
            }
          };
        void 0 ===
          (r = function () {
            return { Howler: i, Howl: a };
          }.apply(t, [])) || (e.exports = r),
          (t.Howler = i),
          (t.Howl = a),
          "undefined" !== typeof n.g
            ? ((n.g.HowlerGlobal = o),
              (n.g.Howler = i),
              (n.g.Howl = a),
              (n.g.Sound = l))
            : "undefined" !== typeof window &&
              ((window.HowlerGlobal = o),
              (window.Howler = i),
              (window.Howl = a),
              (window.Sound = l));
      })(),
        (function () {
          "use strict";
          var e;
          (HowlerGlobal.prototype._pos = [0, 0, 0]),
            (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
            (HowlerGlobal.prototype.stereo = function (e) {
              var t = this;
              if (!t.ctx || !t.ctx.listener) return t;
              for (var n = t._howls.length - 1; n >= 0; n--)
                t._howls[n].stereo(e);
              return t;
            }),
            (HowlerGlobal.prototype.pos = function (e, t, n) {
              var r = this;
              return r.ctx && r.ctx.listener
                ? ((t = "number" !== typeof t ? r._pos[1] : t),
                  (n = "number" !== typeof n ? r._pos[2] : n),
                  "number" !== typeof e
                    ? r._pos
                    : ((r._pos = [e, t, n]),
                      "undefined" !== typeof r.ctx.listener.positionX
                        ? (r.ctx.listener.positionX.setTargetAtTime(
                            r._pos[0],
                            Howler.ctx.currentTime,
                            0.1
                          ),
                          r.ctx.listener.positionY.setTargetAtTime(
                            r._pos[1],
                            Howler.ctx.currentTime,
                            0.1
                          ),
                          r.ctx.listener.positionZ.setTargetAtTime(
                            r._pos[2],
                            Howler.ctx.currentTime,
                            0.1
                          ))
                        : r.ctx.listener.setPosition(
                            r._pos[0],
                            r._pos[1],
                            r._pos[2]
                          ),
                      r))
                : r;
            }),
            (HowlerGlobal.prototype.orientation = function (e, t, n, r, o, i) {
              var a = this;
              if (!a.ctx || !a.ctx.listener) return a;
              var l = a._orientation;
              return (
                (t = "number" !== typeof t ? l[1] : t),
                (n = "number" !== typeof n ? l[2] : n),
                (r = "number" !== typeof r ? l[3] : r),
                (o = "number" !== typeof o ? l[4] : o),
                (i = "number" !== typeof i ? l[5] : i),
                "number" !== typeof e
                  ? l
                  : ((a._orientation = [e, t, n, r, o, i]),
                    "undefined" !== typeof a.ctx.listener.forwardX
                      ? (a.ctx.listener.forwardX.setTargetAtTime(
                          e,
                          Howler.ctx.currentTime,
                          0.1
                        ),
                        a.ctx.listener.forwardY.setTargetAtTime(
                          t,
                          Howler.ctx.currentTime,
                          0.1
                        ),
                        a.ctx.listener.forwardZ.setTargetAtTime(
                          n,
                          Howler.ctx.currentTime,
                          0.1
                        ),
                        a.ctx.listener.upX.setTargetAtTime(
                          r,
                          Howler.ctx.currentTime,
                          0.1
                        ),
                        a.ctx.listener.upY.setTargetAtTime(
                          o,
                          Howler.ctx.currentTime,
                          0.1
                        ),
                        a.ctx.listener.upZ.setTargetAtTime(
                          i,
                          Howler.ctx.currentTime,
                          0.1
                        ))
                      : a.ctx.listener.setOrientation(e, t, n, r, o, i),
                    a)
              );
            }),
            (Howl.prototype.init =
              ((e = Howl.prototype.init),
              function (t) {
                var n = this;
                return (
                  (n._orientation = t.orientation || [1, 0, 0]),
                  (n._stereo = t.stereo || null),
                  (n._pos = t.pos || null),
                  (n._pannerAttr = {
                    coneInnerAngle:
                      "undefined" !== typeof t.coneInnerAngle
                        ? t.coneInnerAngle
                        : 360,
                    coneOuterAngle:
                      "undefined" !== typeof t.coneOuterAngle
                        ? t.coneOuterAngle
                        : 360,
                    coneOuterGain:
                      "undefined" !== typeof t.coneOuterGain
                        ? t.coneOuterGain
                        : 0,
                    distanceModel:
                      "undefined" !== typeof t.distanceModel
                        ? t.distanceModel
                        : "inverse",
                    maxDistance:
                      "undefined" !== typeof t.maxDistance
                        ? t.maxDistance
                        : 1e4,
                    panningModel:
                      "undefined" !== typeof t.panningModel
                        ? t.panningModel
                        : "HRTF",
                    refDistance:
                      "undefined" !== typeof t.refDistance ? t.refDistance : 1,
                    rolloffFactor:
                      "undefined" !== typeof t.rolloffFactor
                        ? t.rolloffFactor
                        : 1,
                  }),
                  (n._onstereo = t.onstereo ? [{ fn: t.onstereo }] : []),
                  (n._onpos = t.onpos ? [{ fn: t.onpos }] : []),
                  (n._onorientation = t.onorientation
                    ? [{ fn: t.onorientation }]
                    : []),
                  e.call(this, t)
                );
              })),
            (Howl.prototype.stereo = function (e, n) {
              var r = this;
              if (!r._webAudio) return r;
              if ("loaded" !== r._state)
                return (
                  r._queue.push({
                    event: "stereo",
                    action: function () {
                      r.stereo(e, n);
                    },
                  }),
                  r
                );
              var o =
                "undefined" === typeof Howler.ctx.createStereoPanner
                  ? "spatial"
                  : "stereo";
              if ("undefined" === typeof n) {
                if ("number" !== typeof e) return r._stereo;
                (r._stereo = e), (r._pos = [e, 0, 0]);
              }
              for (var i = r._getSoundIds(n), a = 0; a < i.length; a++) {
                var l = r._soundById(i[a]);
                if (l) {
                  if ("number" !== typeof e) return l._stereo;
                  (l._stereo = e),
                    (l._pos = [e, 0, 0]),
                    l._node &&
                      ((l._pannerAttr.panningModel = "equalpower"),
                      (l._panner && l._panner.pan) || t(l, o),
                      "spatial" === o
                        ? "undefined" !== typeof l._panner.positionX
                          ? (l._panner.positionX.setValueAtTime(
                              e,
                              Howler.ctx.currentTime
                            ),
                            l._panner.positionY.setValueAtTime(
                              0,
                              Howler.ctx.currentTime
                            ),
                            l._panner.positionZ.setValueAtTime(
                              0,
                              Howler.ctx.currentTime
                            ))
                          : l._panner.setPosition(e, 0, 0)
                        : l._panner.pan.setValueAtTime(
                            e,
                            Howler.ctx.currentTime
                          )),
                    r._emit("stereo", l._id);
                }
              }
              return r;
            }),
            (Howl.prototype.pos = function (e, n, r, o) {
              var i = this;
              if (!i._webAudio) return i;
              if ("loaded" !== i._state)
                return (
                  i._queue.push({
                    event: "pos",
                    action: function () {
                      i.pos(e, n, r, o);
                    },
                  }),
                  i
                );
              if (
                ((n = "number" !== typeof n ? 0 : n),
                (r = "number" !== typeof r ? -0.5 : r),
                "undefined" === typeof o)
              ) {
                if ("number" !== typeof e) return i._pos;
                i._pos = [e, n, r];
              }
              for (var a = i._getSoundIds(o), l = 0; l < a.length; l++) {
                var u = i._soundById(a[l]);
                if (u) {
                  if ("number" !== typeof e) return u._pos;
                  (u._pos = [e, n, r]),
                    u._node &&
                      ((u._panner && !u._panner.pan) || t(u, "spatial"),
                      "undefined" !== typeof u._panner.positionX
                        ? (u._panner.positionX.setValueAtTime(
                            e,
                            Howler.ctx.currentTime
                          ),
                          u._panner.positionY.setValueAtTime(
                            n,
                            Howler.ctx.currentTime
                          ),
                          u._panner.positionZ.setValueAtTime(
                            r,
                            Howler.ctx.currentTime
                          ))
                        : u._panner.setPosition(e, n, r)),
                    i._emit("pos", u._id);
                }
              }
              return i;
            }),
            (Howl.prototype.orientation = function (e, n, r, o) {
              var i = this;
              if (!i._webAudio) return i;
              if ("loaded" !== i._state)
                return (
                  i._queue.push({
                    event: "orientation",
                    action: function () {
                      i.orientation(e, n, r, o);
                    },
                  }),
                  i
                );
              if (
                ((n = "number" !== typeof n ? i._orientation[1] : n),
                (r = "number" !== typeof r ? i._orientation[2] : r),
                "undefined" === typeof o)
              ) {
                if ("number" !== typeof e) return i._orientation;
                i._orientation = [e, n, r];
              }
              for (var a = i._getSoundIds(o), l = 0; l < a.length; l++) {
                var u = i._soundById(a[l]);
                if (u) {
                  if ("number" !== typeof e) return u._orientation;
                  (u._orientation = [e, n, r]),
                    u._node &&
                      (u._panner ||
                        (u._pos || (u._pos = i._pos || [0, 0, -0.5]),
                        t(u, "spatial")),
                      "undefined" !== typeof u._panner.orientationX
                        ? (u._panner.orientationX.setValueAtTime(
                            e,
                            Howler.ctx.currentTime
                          ),
                          u._panner.orientationY.setValueAtTime(
                            n,
                            Howler.ctx.currentTime
                          ),
                          u._panner.orientationZ.setValueAtTime(
                            r,
                            Howler.ctx.currentTime
                          ))
                        : u._panner.setOrientation(e, n, r)),
                    i._emit("orientation", u._id);
                }
              }
              return i;
            }),
            (Howl.prototype.pannerAttr = function () {
              var e,
                n,
                r,
                o = this,
                i = arguments;
              if (!o._webAudio) return o;
              if (0 === i.length) return o._pannerAttr;
              if (1 === i.length) {
                if ("object" !== typeof i[0])
                  return (r = o._soundById(parseInt(i[0], 10)))
                    ? r._pannerAttr
                    : o._pannerAttr;
                (e = i[0]),
                  "undefined" === typeof n &&
                    (e.pannerAttr ||
                      (e.pannerAttr = {
                        coneInnerAngle: e.coneInnerAngle,
                        coneOuterAngle: e.coneOuterAngle,
                        coneOuterGain: e.coneOuterGain,
                        distanceModel: e.distanceModel,
                        maxDistance: e.maxDistance,
                        refDistance: e.refDistance,
                        rolloffFactor: e.rolloffFactor,
                        panningModel: e.panningModel,
                      }),
                    (o._pannerAttr = {
                      coneInnerAngle:
                        "undefined" !== typeof e.pannerAttr.coneInnerAngle
                          ? e.pannerAttr.coneInnerAngle
                          : o._coneInnerAngle,
                      coneOuterAngle:
                        "undefined" !== typeof e.pannerAttr.coneOuterAngle
                          ? e.pannerAttr.coneOuterAngle
                          : o._coneOuterAngle,
                      coneOuterGain:
                        "undefined" !== typeof e.pannerAttr.coneOuterGain
                          ? e.pannerAttr.coneOuterGain
                          : o._coneOuterGain,
                      distanceModel:
                        "undefined" !== typeof e.pannerAttr.distanceModel
                          ? e.pannerAttr.distanceModel
                          : o._distanceModel,
                      maxDistance:
                        "undefined" !== typeof e.pannerAttr.maxDistance
                          ? e.pannerAttr.maxDistance
                          : o._maxDistance,
                      refDistance:
                        "undefined" !== typeof e.pannerAttr.refDistance
                          ? e.pannerAttr.refDistance
                          : o._refDistance,
                      rolloffFactor:
                        "undefined" !== typeof e.pannerAttr.rolloffFactor
                          ? e.pannerAttr.rolloffFactor
                          : o._rolloffFactor,
                      panningModel:
                        "undefined" !== typeof e.pannerAttr.panningModel
                          ? e.pannerAttr.panningModel
                          : o._panningModel,
                    }));
              } else 2 === i.length && ((e = i[0]), (n = parseInt(i[1], 10)));
              for (var a = o._getSoundIds(n), l = 0; l < a.length; l++)
                if ((r = o._soundById(a[l]))) {
                  var u = r._pannerAttr;
                  u = {
                    coneInnerAngle:
                      "undefined" !== typeof e.coneInnerAngle
                        ? e.coneInnerAngle
                        : u.coneInnerAngle,
                    coneOuterAngle:
                      "undefined" !== typeof e.coneOuterAngle
                        ? e.coneOuterAngle
                        : u.coneOuterAngle,
                    coneOuterGain:
                      "undefined" !== typeof e.coneOuterGain
                        ? e.coneOuterGain
                        : u.coneOuterGain,
                    distanceModel:
                      "undefined" !== typeof e.distanceModel
                        ? e.distanceModel
                        : u.distanceModel,
                    maxDistance:
                      "undefined" !== typeof e.maxDistance
                        ? e.maxDistance
                        : u.maxDistance,
                    refDistance:
                      "undefined" !== typeof e.refDistance
                        ? e.refDistance
                        : u.refDistance,
                    rolloffFactor:
                      "undefined" !== typeof e.rolloffFactor
                        ? e.rolloffFactor
                        : u.rolloffFactor,
                    panningModel:
                      "undefined" !== typeof e.panningModel
                        ? e.panningModel
                        : u.panningModel,
                  };
                  var s = r._panner;
                  s
                    ? ((s.coneInnerAngle = u.coneInnerAngle),
                      (s.coneOuterAngle = u.coneOuterAngle),
                      (s.coneOuterGain = u.coneOuterGain),
                      (s.distanceModel = u.distanceModel),
                      (s.maxDistance = u.maxDistance),
                      (s.refDistance = u.refDistance),
                      (s.rolloffFactor = u.rolloffFactor),
                      (s.panningModel = u.panningModel))
                    : (r._pos || (r._pos = o._pos || [0, 0, -0.5]),
                      t(r, "spatial"));
                }
              return o;
            }),
            (Sound.prototype.init = (function (e) {
              return function () {
                var t = this,
                  n = t._parent;
                (t._orientation = n._orientation),
                  (t._stereo = n._stereo),
                  (t._pos = n._pos),
                  (t._pannerAttr = n._pannerAttr),
                  e.call(this),
                  t._stereo
                    ? n.stereo(t._stereo)
                    : t._pos && n.pos(t._pos[0], t._pos[1], t._pos[2], t._id);
              };
            })(Sound.prototype.init)),
            (Sound.prototype.reset = (function (e) {
              return function () {
                var t = this,
                  n = t._parent;
                return (
                  (t._orientation = n._orientation),
                  (t._stereo = n._stereo),
                  (t._pos = n._pos),
                  (t._pannerAttr = n._pannerAttr),
                  t._stereo
                    ? n.stereo(t._stereo)
                    : t._pos
                    ? n.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
                    : t._panner &&
                      (t._panner.disconnect(0),
                      (t._panner = void 0),
                      n._refreshBuffer(t)),
                  e.call(this)
                );
              };
            })(Sound.prototype.reset));
          var t = function (e, t) {
            "spatial" === (t = t || "spatial")
              ? ((e._panner = Howler.ctx.createPanner()),
                (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
                (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
                (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
                (e._panner.distanceModel = e._pannerAttr.distanceModel),
                (e._panner.maxDistance = e._pannerAttr.maxDistance),
                (e._panner.refDistance = e._pannerAttr.refDistance),
                (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
                (e._panner.panningModel = e._pannerAttr.panningModel),
                "undefined" !== typeof e._panner.positionX
                  ? (e._panner.positionX.setValueAtTime(
                      e._pos[0],
                      Howler.ctx.currentTime
                    ),
                    e._panner.positionY.setValueAtTime(
                      e._pos[1],
                      Howler.ctx.currentTime
                    ),
                    e._panner.positionZ.setValueAtTime(
                      e._pos[2],
                      Howler.ctx.currentTime
                    ))
                  : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
                "undefined" !== typeof e._panner.orientationX
                  ? (e._panner.orientationX.setValueAtTime(
                      e._orientation[0],
                      Howler.ctx.currentTime
                    ),
                    e._panner.orientationY.setValueAtTime(
                      e._orientation[1],
                      Howler.ctx.currentTime
                    ),
                    e._panner.orientationZ.setValueAtTime(
                      e._orientation[2],
                      Howler.ctx.currentTime
                    ))
                  : e._panner.setOrientation(
                      e._orientation[0],
                      e._orientation[1],
                      e._orientation[2]
                    ))
              : ((e._panner = Howler.ctx.createStereoPanner()),
                e._panner.pan.setValueAtTime(
                  e._stereo,
                  Howler.ctx.currentTime
                )),
              e._panner.connect(e._node),
              e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
          };
        })();
    },
    5878: function (e, t) {
      "use strict";
      t.Z = function (e) {
        return function (t) {
          e.forEach(function (e) {
            "function" === typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      };
    },
    7287: function (e, t, n) {
      (e = n.nmd(e)).exports = function (t) {
        var r = {},
          o = n(6086),
          i = n(7294),
          a = n(3840);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          s = 60103,
          c = 60106,
          f = 60107,
          d = 60108,
          p = 60114,
          h = 60109,
          m = 60110,
          v = 60112,
          _ = 60113,
          g = 60120,
          y = 60115,
          b = 60116,
          w = 60121,
          E = 60129,
          x = 60130,
          S = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var A = Symbol.for;
          (s = A("react.element")),
            (c = A("react.portal")),
            (f = A("react.fragment")),
            (d = A("react.strict_mode")),
            (p = A("react.profiler")),
            (h = A("react.provider")),
            (m = A("react.context")),
            (v = A("react.forward_ref")),
            (_ = A("react.suspense")),
            (g = A("react.suspense_list")),
            (y = A("react.memo")),
            (b = A("react.lazy")),
            (w = A("react.block")),
            A("react.scope"),
            (E = A("react.debug_trace_mode")),
            (x = A("react.offscreen")),
            (S = A("react.legacy_hidden"));
        }
        var T = "function" === typeof Symbol && Symbol.iterator;
        function k(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (T && e[T]) || e["@@iterator"])
            ? e
            : null;
        }
        function P(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case f:
              return "Fragment";
            case c:
              return "Portal";
            case p:
              return "Profiler";
            case d:
              return "StrictMode";
            case _:
              return "Suspense";
            case g:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case m:
                return (e.displayName || "Context") + ".Consumer";
              case h:
                return (e._context.displayName || "Context") + ".Provider";
              case v:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case y:
                return P(e.type);
              case w:
                return P(e._render);
              case b:
                (t = e._payload), (e = e._init);
                try {
                  return P(e(t));
                } catch (n) {}
            }
          return null;
        }
        function O(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function C(e) {
          if (O(e) !== e) throw Error(l(188));
        }
        function M(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = O(e))) throw Error(l(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var o = n.return;
            if (null === o) break;
            var i = o.alternate;
            if (null === i) {
              if (null !== (r = o.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (o.child === i.child) {
              for (i = o.child; i; ) {
                if (i === n) return C(o), e;
                if (i === r) return C(o), t;
                i = i.sibling;
              }
              throw Error(l(188));
            }
            if (n.return !== r.return) (n = o), (r = i);
            else {
              for (var a = !1, u = o.child; u; ) {
                if (u === n) {
                  (a = !0), (n = o), (r = i);
                  break;
                }
                if (u === r) {
                  (a = !0), (r = o), (n = i);
                  break;
                }
                u = u.sibling;
              }
              if (!a) {
                for (u = i.child; u; ) {
                  if (u === n) {
                    (a = !0), (n = i), (r = o);
                    break;
                  }
                  if (u === r) {
                    (a = !0), (r = i), (n = o);
                    break;
                  }
                  u = u.sibling;
                }
                if (!a) throw Error(l(189));
              }
            }
            if (n.alternate !== r) throw Error(l(190));
          }
          if (3 !== n.tag) throw Error(l(188));
          return n.stateNode.current === n ? e : t;
        }
        function z(e) {
          if (!(e = M(e))) return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function L(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var I,
          N = t.getPublicInstance,
          R = t.getRootHostContext,
          j = t.getChildHostContext,
          D = t.prepareForCommit,
          H = t.resetAfterCommit,
          F = t.createInstance,
          U = t.appendInitialChild,
          B = t.finalizeInitialChildren,
          V = t.prepareUpdate,
          W = t.shouldSetTextContent,
          Z = t.createTextInstance,
          G = t.scheduleTimeout,
          Q = t.cancelTimeout,
          $ = t.noTimeout,
          Y = t.isPrimaryRenderer,
          q = t.supportsMutation,
          X = t.supportsPersistence,
          K = t.supportsHydration,
          J = t.getInstanceFromNode,
          ee = t.makeOpaqueHydratingObject,
          te = t.makeClientId,
          ne = t.beforeActiveInstanceBlur,
          re = t.afterActiveInstanceBlur,
          oe = t.preparePortalMount,
          ie = t.supportsTestSelectors,
          ae = t.findFiberRoot,
          le = t.getBoundingRect,
          ue = t.getTextContent,
          se = t.isHiddenSubtree,
          ce = t.matchAccessibilityRole,
          fe = t.setFocusIfFocusable,
          de = t.setupIntersectionObserver,
          pe = t.appendChild,
          he = t.appendChildToContainer,
          me = t.commitTextUpdate,
          ve = t.commitMount,
          _e = t.commitUpdate,
          ge = t.insertBefore,
          ye = t.insertInContainerBefore,
          be = t.removeChild,
          we = t.removeChildFromContainer,
          Ee = t.resetTextContent,
          xe = t.hideInstance,
          Se = t.hideTextInstance,
          Ae = t.unhideInstance,
          Te = t.unhideTextInstance,
          ke = t.clearContainer,
          Pe = t.cloneInstance,
          Oe = t.createContainerChildSet,
          Ce = t.appendChildToContainerChildSet,
          Me = t.finalizeContainerChildren,
          ze = t.replaceContainerChildren,
          Le = t.cloneHiddenInstance,
          Ie = t.cloneHiddenTextInstance,
          Ne = t.canHydrateInstance,
          Re = t.canHydrateTextInstance,
          je = t.isSuspenseInstancePending,
          De = t.isSuspenseInstanceFallback,
          He = t.getNextHydratableSibling,
          Fe = t.getFirstHydratableChild,
          Ue = t.hydrateInstance,
          Be = t.hydrateTextInstance,
          Ve = t.getNextHydratableInstanceAfterSuspenseInstance,
          We = t.commitHydratedContainer,
          Ze = t.commitHydratedSuspenseInstance;
        function Ge(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var Qe = !1;
        function $e(e, t) {
          if (!e || Qe) return "";
          Qe = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var o = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  a = o.length - 1,
                  l = i.length - 1;
                1 <= a && 0 <= l && o[a] !== i[l];

              )
                l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== i[l]) {
                  if (1 !== a || 1 !== l)
                    do {
                      if ((a--, 0 > --l || o[a] !== i[l]))
                        return "\n" + o[a].replace(" at new ", " at ");
                    } while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            (Qe = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? Ge(e) : "";
        }
        var Ye = [],
          qe = -1;
        function Xe(e) {
          return { current: e };
        }
        function Ke(e) {
          0 > qe || ((e.current = Ye[qe]), (Ye[qe] = null), qe--);
        }
        function Je(e, t) {
          qe++, (Ye[qe] = e.current), (e.current = t);
        }
        var et = {},
          tt = Xe(et),
          nt = Xe(!1),
          rt = et;
        function ot(e, t) {
          var n = e.type.contextTypes;
          if (!n) return et;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function it(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function at() {
          Ke(nt), Ke(tt);
        }
        function lt(e, t, n) {
          if (tt.current !== et) throw Error(l(168));
          Je(tt, t), Je(nt, n);
        }
        function ut(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in e)) throw Error(l(108, P(t) || "Unknown", i));
          return o({}, n, r);
        }
        function st(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              et),
            (rt = tt.current),
            Je(tt, e),
            Je(nt, nt.current),
            !0
          );
        }
        function ct(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = ut(e, t, rt)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ke(nt),
              Ke(tt),
              Je(tt, e))
            : Ke(nt),
            Je(nt, n);
        }
        var ft = null,
          dt = null;
        (0, a.unstable_now)();
        var pt = 0,
          ht = 8;
        function mt(e) {
          if (0 !== (1 & e)) return (ht = 15), 1;
          if (0 !== (2 & e)) return (ht = 14), 2;
          if (0 !== (4 & e)) return (ht = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((ht = 12), t)
            : 0 !== (32 & e)
            ? ((ht = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((ht = 10), t)
            : 0 !== (256 & e)
            ? ((ht = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((ht = 8), t)
            : 0 !== (4096 & e)
            ? ((ht = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((ht = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((ht = 5), t)
            : 67108864 & e
            ? ((ht = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((ht = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((ht = 2), t)
            : 0 !== (1073741824 & e)
            ? ((ht = 1), 1073741824)
            : ((ht = 8), e);
        }
        function vt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (ht = 0);
          var r = 0,
            o = 0,
            i = e.expiredLanes,
            a = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== i) (r = i), (o = ht = 15);
          else if (0 !== (i = 134217727 & n)) {
            var u = i & ~a;
            0 !== u
              ? ((r = mt(u)), (o = ht))
              : 0 !== (l &= i) && ((r = mt(l)), (o = ht));
          } else
            0 !== (i = n & ~a)
              ? ((r = mt(i)), (o = ht))
              : 0 !== l && ((r = mt(l)), (o = ht));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Et(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & a))
          ) {
            if ((mt(t), o <= ht)) return t;
            ht = o;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - Et(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function _t(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gt(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = yt(24 & ~t)) ? gt(10, t) : e;
            case 10:
              return 0 === (e = yt(192 & ~t)) ? gt(8, t) : e;
            case 8:
              return (
                0 === (e = yt(3584 & ~t)) &&
                  0 === (e = yt(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = yt(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(l(358, e));
        }
        function yt(e) {
          return e & -e;
        }
        function bt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function wt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Et(t))] = n);
        }
        var Et = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((xt(e) / St) | 0)) | 0;
              },
          xt = Math.log,
          St = Math.LN2;
        var At = a.unstable_runWithPriority,
          Tt = a.unstable_scheduleCallback,
          kt = a.unstable_cancelCallback,
          Pt = a.unstable_shouldYield,
          Ot = a.unstable_requestPaint,
          Ct = a.unstable_now,
          Mt = a.unstable_getCurrentPriorityLevel,
          zt = a.unstable_ImmediatePriority,
          Lt = a.unstable_UserBlockingPriority,
          It = a.unstable_NormalPriority,
          Nt = a.unstable_LowPriority,
          Rt = a.unstable_IdlePriority,
          jt = {},
          Dt = void 0 !== Ot ? Ot : function () {},
          Ht = null,
          Ft = null,
          Ut = !1,
          Bt = Ct(),
          Vt =
            1e4 > Bt
              ? Ct
              : function () {
                  return Ct() - Bt;
                };
        function Wt() {
          switch (Mt()) {
            case zt:
              return 99;
            case Lt:
              return 98;
            case It:
              return 97;
            case Nt:
              return 96;
            case Rt:
              return 95;
            default:
              throw Error(l(332));
          }
        }
        function Zt(e) {
          switch (e) {
            case 99:
              return zt;
            case 98:
              return Lt;
            case 97:
              return It;
            case 96:
              return Nt;
            case 95:
              return Rt;
            default:
              throw Error(l(332));
          }
        }
        function Gt(e, t) {
          return (e = Zt(e)), At(e, t);
        }
        function Qt(e, t, n) {
          return (e = Zt(e)), Tt(e, t, n);
        }
        function $t() {
          if (null !== Ft) {
            var e = Ft;
            (Ft = null), kt(e);
          }
          Yt();
        }
        function Yt() {
          if (!Ut && null !== Ht) {
            Ut = !0;
            var e = 0;
            try {
              var t = Ht;
              Gt(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Ht = null);
            } catch (n) {
              throw (null !== Ht && (Ht = Ht.slice(e + 1)), Tt(zt, $t), n);
            } finally {
              Ut = !1;
            }
          }
        }
        var qt = u.ReactCurrentBatchConfig;
        var Xt =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          Kt = Object.prototype.hasOwnProperty;
        function Jt(e, t) {
          if (Xt(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!Kt.call(t, n[r]) || !Xt(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function en(e) {
          switch (e.tag) {
            case 5:
              return Ge(e.type);
            case 16:
              return Ge("Lazy");
            case 13:
              return Ge("Suspense");
            case 19:
              return Ge("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = $e(e.type, !1));
            case 11:
              return (e = $e(e.type.render, !1));
            case 22:
              return (e = $e(e.type._render, !1));
            case 1:
              return (e = $e(e.type, !0));
            default:
              return "";
          }
        }
        function tn(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var nn = Xe(null),
          rn = null,
          on = null,
          an = null;
        function ln() {
          an = on = rn = null;
        }
        function un(e, t) {
          (e = e.type._context),
            Y
              ? (Je(nn, e._currentValue), (e._currentValue = t))
              : (Je(nn, e._currentValue2), (e._currentValue2 = t));
        }
        function sn(e) {
          var t = nn.current;
          Ke(nn),
            (e = e.type._context),
            Y ? (e._currentValue = t) : (e._currentValue2 = t);
        }
        function cn(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function fn(e, t) {
          (rn = e),
            (an = on = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Br = !0), (e.firstContext = null));
        }
        function dn(e, t) {
          if (an !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) ||
                ((an = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === on)
            ) {
              if (null === rn) throw Error(l(308));
              (on = t),
                (rn.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else on = on.next = t;
          return Y ? e._currentValue : e._currentValue2;
        }
        var pn = !1;
        function hn(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function mn(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function vn(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function _n(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function gn(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function yn(e, t, n, r) {
          var i = e.updateQueue;
          pn = !1;
          var a = i.firstBaseUpdate,
            l = i.lastBaseUpdate,
            u = i.shared.pending;
          if (null !== u) {
            i.shared.pending = null;
            var s = u,
              c = s.next;
            (s.next = null), null === l ? (a = c) : (l.next = c), (l = s);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== l &&
                (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
                (f.lastBaseUpdate = s));
            }
          }
          if (null !== a) {
            for (d = i.baseState, l = 0, f = c = s = null; ; ) {
              u = a.lane;
              var p = a.eventTime;
              if ((r & u) === u) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = a;
                  switch (((u = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, u);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (u =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, u)
                              : h) ||
                        void 0 === u
                      )
                        break e;
                      d = o({}, d, u);
                      break e;
                    case 2:
                      pn = !0;
                  }
                }
                null !== a.callback &&
                  ((e.flags |= 32),
                  null === (u = i.effects) ? (i.effects = [a]) : u.push(a));
              } else
                (p = {
                  eventTime: p,
                  lane: u,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                }),
                  null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                  (l |= u);
              if (null === (a = a.next)) {
                if (null === (u = i.shared.pending)) break;
                (a = u.next),
                  (u.next = null),
                  (i.lastBaseUpdate = u),
                  (i.shared.pending = null);
              }
            }
            null === f && (s = d),
              (i.baseState = s),
              (i.firstBaseUpdate = c),
              (i.lastBaseUpdate = f),
              (di |= l),
              (e.lanes = l),
              (e.memoizedState = d);
          }
        }
        function bn(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(l(191, o));
                o.call(r);
              }
            }
        }
        var wn = new i.Component().refs;
        function En(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var xn = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && O(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ji(),
              o = Di(e),
              i = vn(r, o);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              _n(e, i),
              Hi(e, o, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ji(),
              o = Di(e),
              i = vn(r, o);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              _n(e, i),
              Hi(e, o, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ji(),
              r = Di(e),
              o = vn(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              _n(e, o),
              Hi(e, r, n);
          },
        };
        function Sn(e, t, n, r, o, i, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Jt(n, r) ||
                !Jt(o, i);
        }
        function An(e, t, n) {
          var r = !1,
            o = et,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = dn(i))
              : ((o = it(t) ? rt : tt.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? ot(e, o)
                  : et)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = xn),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Tn(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && xn.enqueueReplaceState(t, t.state, null);
        }
        function kn(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = wn), hn(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (o.context = dn(i))
            : ((i = it(t) ? rt : tt.current), (o.context = ot(e, i))),
            yn(e, n, o, r),
            (o.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (En(e, t, i, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && xn.enqueueReplaceState(o, o.state, null),
              yn(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4);
        }
        var Pn = Array.isArray;
        function On(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === wn && (t = r.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function Cn(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              l(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Mn(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Sa(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function a(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Pa(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = On(e, t, n)), (r.return = e), r)
              : (((r = Aa(n.type, n.key, n.props, null, e.mode, r)).ref = On(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function p(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Oa(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function h(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Ta(n, e.mode, r, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function m(e, t, n) {
            if ("string" === typeof t || "number" === typeof t)
              return ((t = Pa("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case s:
                  return (
                    ((n = Aa(t.type, t.key, t.props, null, e.mode, n)).ref = On(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case c:
                  return ((t = Oa(t, e.mode, n)).return = e), t;
              }
              if (Pn(t) || k(t))
                return ((t = Ta(t, e.mode, n, null)).return = e), t;
              Cn(e, t);
            }
            return null;
          }
          function v(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n)
              return null !== o ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case s:
                  return n.key === o
                    ? n.type === f
                      ? h(e, t, n.props.children, r, o)
                      : d(e, t, n, r)
                    : null;
                case c:
                  return n.key === o ? p(e, t, n, r) : null;
              }
              if (Pn(n) || k(n)) return null !== o ? null : h(e, t, n, r, null);
              Cn(e, n);
            }
            return null;
          }
          function _(e, t, n, r, o) {
            if ("string" === typeof r || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case s:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === f
                      ? h(t, e, r.props.children, o, r.key)
                      : d(t, e, r, o)
                  );
                case c:
                  return p(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
              }
              if (Pn(r) || k(r))
                return h(t, (e = e.get(n) || null), r, o, null);
              Cn(t, r);
            }
            return null;
          }
          function g(o, a, l, u) {
            for (
              var s = null, c = null, f = a, d = (a = 0), p = null;
              null !== f && d < l.length;
              d++
            ) {
              f.index > d ? ((p = f), (f = null)) : (p = f.sibling);
              var h = v(o, f, l[d], u);
              if (null === h) {
                null === f && (f = p);
                break;
              }
              e && f && null === h.alternate && t(o, f),
                (a = i(h, a, d)),
                null === c ? (s = h) : (c.sibling = h),
                (c = h),
                (f = p);
            }
            if (d === l.length) return n(o, f), s;
            if (null === f) {
              for (; d < l.length; d++)
                null !== (f = m(o, l[d], u)) &&
                  ((a = i(f, a, d)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return s;
            }
            for (f = r(o, f); d < l.length; d++)
              null !== (p = _(f, o, d, l[d], u)) &&
                (e &&
                  null !== p.alternate &&
                  f.delete(null === p.key ? d : p.key),
                (a = i(p, a, d)),
                null === c ? (s = p) : (c.sibling = p),
                (c = p));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              s
            );
          }
          function y(o, a, u, s) {
            var c = k(u);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (u = c.call(u))) throw Error(l(151));
            for (
              var f = (c = null), d = a, p = (a = 0), h = null, g = u.next();
              null !== d && !g.done;
              p++, g = u.next()
            ) {
              d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
              var y = v(o, d, g.value, s);
              if (null === y) {
                null === d && (d = h);
                break;
              }
              e && d && null === y.alternate && t(o, d),
                (a = i(y, a, p)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y),
                (d = h);
            }
            if (g.done) return n(o, d), c;
            if (null === d) {
              for (; !g.done; p++, g = u.next())
                null !== (g = m(o, g.value, s)) &&
                  ((a = i(g, a, p)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return c;
            }
            for (d = r(o, d); !g.done; p++, g = u.next())
              null !== (g = _(d, o, p, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? p : g.key),
                (a = i(g, a, p)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          return function (e, r, i, u) {
            var d =
              "object" === typeof i &&
              null !== i &&
              i.type === f &&
              null === i.key;
            d && (i = i.props.children);
            var p = "object" === typeof i && null !== i;
            if (p)
              switch (i.$$typeof) {
                case s:
                  e: {
                    for (p = i.key, d = r; null !== d; ) {
                      if (d.key === p) {
                        if (7 === d.tag) {
                          if (i.type === f) {
                            n(e, d.sibling),
                              ((r = o(d, i.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (d.elementType === i.type) {
                          n(e, d.sibling),
                            ((r = o(d, i.props)).ref = On(e, d, i)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, d);
                        break;
                      }
                      t(e, d), (d = d.sibling);
                    }
                    i.type === f
                      ? (((r = Ta(i.props.children, e.mode, u, i.key)).return =
                          e),
                        (e = r))
                      : (((u = Aa(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          e.mode,
                          u
                        )).ref = On(e, r, i)),
                        (u.return = e),
                        (e = u));
                  }
                  return a(e);
                case c:
                  e: {
                    for (d = i.key; null !== r; ) {
                      if (r.key === d) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === i.containerInfo &&
                          r.stateNode.implementation === i.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = o(r, i.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Oa(i, e.mode, u)).return = e), (e = r);
                  }
                  return a(e);
              }
            if ("string" === typeof i || "number" === typeof i)
              return (
                (i = "" + i),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r))
                  : (n(e, r), ((r = Pa(i, e.mode, u)).return = e), (e = r)),
                a(e)
              );
            if (Pn(i)) return g(e, r, i, u);
            if (k(i)) return y(e, r, i, u);
            if ((p && Cn(e, i), "undefined" === typeof i && !d))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(l(152, P(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var zn = Mn(!0),
          Ln = Mn(!1),
          In = {},
          Nn = Xe(In),
          Rn = Xe(In),
          jn = Xe(In);
        function Dn(e) {
          if (e === In) throw Error(l(174));
          return e;
        }
        function Hn(e, t) {
          Je(jn, t), Je(Rn, e), Je(Nn, In), (e = R(t)), Ke(Nn), Je(Nn, e);
        }
        function Fn() {
          Ke(Nn), Ke(Rn), Ke(jn);
        }
        function Un(e) {
          var t = Dn(jn.current),
            n = Dn(Nn.current);
          n !== (t = j(n, e.type, t)) && (Je(Rn, e), Je(Nn, t));
        }
        function Bn(e) {
          Rn.current === e && (Ke(Nn), Ke(Rn));
        }
        var Vn = Xe(0);
        function Wn(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || je(n) || De(n)))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Zn = null,
          Gn = null,
          Qn = !1;
        function $n(e, t) {
          var n = Ea(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Yn(e, t) {
          switch (e.tag) {
            case 5:
              return (
                null !== (t = Ne(t, e.type, e.pendingProps)) &&
                ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !== (t = Re(t, e.pendingProps)) && ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function qn(e) {
          if (Qn) {
            var t = Gn;
            if (t) {
              var n = t;
              if (!Yn(e, t)) {
                if (!(t = He(n)) || !Yn(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Qn = !1), void (Zn = e)
                  );
                $n(Zn, n);
              }
              (Zn = e), (Gn = Fe(t));
            } else (e.flags = (-1025 & e.flags) | 2), (Qn = !1), (Zn = e);
          }
        }
        function Xn(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Zn = e;
        }
        function Kn(e) {
          if (!K || e !== Zn) return !1;
          if (!Qn) return Xn(e), (Qn = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !W(t, e.memoizedProps))
          )
            for (t = Gn; t; ) $n(e, t), (t = He(t));
          if ((Xn(e), 13 === e.tag)) {
            if (!K) throw Error(l(316));
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            Gn = Ve(e);
          } else Gn = Zn ? He(e.stateNode) : null;
          return !0;
        }
        function Jn() {
          K && ((Gn = Zn = null), (Qn = !1));
        }
        var er = [];
        function tr() {
          for (var e = 0; e < er.length; e++) {
            var t = er[e];
            Y
              ? (t._workInProgressVersionPrimary = null)
              : (t._workInProgressVersionSecondary = null);
          }
          er.length = 0;
        }
        var nr = u.ReactCurrentDispatcher,
          rr = u.ReactCurrentBatchConfig,
          or = 0,
          ir = null,
          ar = null,
          lr = null,
          ur = !1,
          sr = !1;
        function cr() {
          throw Error(l(321));
        }
        function fr(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Xt(e[n], t[n])) return !1;
          return !0;
        }
        function dr(e, t, n, r, o, i) {
          if (
            ((or = i),
            (ir = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (nr.current = null === e || null === e.memoizedState ? Dr : Hr),
            (e = n(r, o)),
            sr)
          ) {
            i = 0;
            do {
              if (((sr = !1), !(25 > i))) throw Error(l(301));
              (i += 1),
                (lr = ar = null),
                (t.updateQueue = null),
                (nr.current = Fr),
                (e = n(r, o));
            } while (sr);
          }
          if (
            ((nr.current = jr),
            (t = null !== ar && null !== ar.next),
            (or = 0),
            (lr = ar = ir = null),
            (ur = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function pr() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === lr ? (ir.memoizedState = lr = e) : (lr = lr.next = e), lr
          );
        }
        function hr() {
          if (null === ar) {
            var e = ir.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ar.next;
          var t = null === lr ? ir.memoizedState : lr.next;
          if (null !== t) (lr = t), (ar = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (ar = e).memoizedState,
              baseState: ar.baseState,
              baseQueue: ar.baseQueue,
              queue: ar.queue,
              next: null,
            }),
              null === lr ? (ir.memoizedState = lr = e) : (lr = lr.next = e);
          }
          return lr;
        }
        function mr(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function vr(e) {
          var t = hr(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = ar,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var a = o.next;
              (o.next = i.next), (i.next = a);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var u = (a = i = null),
              s = o;
            do {
              var c = s.lane;
              if ((or & c) === c)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      eagerReducer: s.eagerReducer,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
              else {
                var f = {
                  lane: c,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((a = u = f), (i = r)) : (u = u.next = f),
                  (ir.lanes |= c),
                  (di |= c);
              }
              s = s.next;
            } while (null !== s && s !== o);
            null === u ? (i = r) : (u.next = a),
              Xt(r, t.memoizedState) || (Br = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function _r(e) {
          var t = hr(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var a = (o = o.next);
            do {
              (i = e(i, a.action)), (a = a.next);
            } while (a !== o);
            Xt(i, t.memoizedState) || (Br = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function gr(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = Y
            ? t._workInProgressVersionPrimary
            : t._workInProgressVersionSecondary;
          if (
            (null !== o
              ? (e = o === r)
              : ((e = e.mutableReadLanes),
                (e = (or & e) === e) &&
                  (Y
                    ? (t._workInProgressVersionPrimary = r)
                    : (t._workInProgressVersionSecondary = r),
                  er.push(t))),
            e)
          )
            return n(t._source);
          throw (er.push(t), Error(l(350)));
        }
        function yr(e, t, n, r) {
          var o = oi;
          if (null === o) throw Error(l(349));
          var i = t._getVersion,
            a = i(t._source),
            u = nr.current,
            s = u.useState(function () {
              return gr(o, t, n);
            }),
            c = s[1],
            f = s[0];
          s = lr;
          var d = e.memoizedState,
            p = d.refs,
            h = p.getSnapshot,
            m = d.source;
          d = d.subscribe;
          var v = ir;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            u.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = i(t._source);
                if (!Xt(a, e)) {
                  (e = n(t._source)),
                    Xt(f, e) ||
                      (c(e),
                      (e = Di(v)),
                      (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, l = e; 0 < l; ) {
                    var u = 31 - Et(l),
                      s = 1 << u;
                    (r[u] |= e), (l &= ~s);
                  }
                }
              },
              [n, t, r]
            ),
            u.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = Di(v);
                    o.mutableReadLanes |= r & o.pendingLanes;
                  } catch (i) {
                    n(function () {
                      throw i;
                    });
                  }
                });
              },
              [t, r]
            ),
            (Xt(h, n) && Xt(m, t) && Xt(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: mr,
                lastRenderedState: f,
              }).dispatch = c =
                Rr.bind(null, ir, e)),
              (s.queue = e),
              (s.baseQueue = null),
              (f = gr(o, t, n)),
              (s.memoizedState = s.baseState = f)),
            f
          );
        }
        function br(e, t, n) {
          return yr(hr(), e, t, n);
        }
        function wr(e) {
          var t = pr();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: mr,
                lastRenderedState: e,
              }).dispatch =
              Rr.bind(null, ir, e)),
            [t.memoizedState, e]
          );
        }
        function Er(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ir.updateQueue)
              ? ((t = { lastEffect: null }),
                (ir.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function xr(e) {
          return (e = { current: e }), (pr().memoizedState = e);
        }
        function Sr() {
          return hr().memoizedState;
        }
        function Ar(e, t, n, r) {
          var o = pr();
          (ir.flags |= e),
            (o.memoizedState = Er(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Tr(e, t, n, r) {
          var o = hr();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== ar) {
            var a = ar.memoizedState;
            if (((i = a.destroy), null !== r && fr(r, a.deps)))
              return void Er(t, n, i, r);
          }
          (ir.flags |= e), (o.memoizedState = Er(1 | t, n, i, r));
        }
        function kr(e, t) {
          return Ar(516, 4, e, t);
        }
        function Pr(e, t) {
          return Tr(516, 4, e, t);
        }
        function Or(e, t) {
          return Tr(4, 2, e, t);
        }
        function Cr(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Mr(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Tr(4, 2, Cr.bind(null, t, e), n)
          );
        }
        function zr() {}
        function Lr(e, t) {
          var n = hr();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && fr(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ir(e, t) {
          var n = hr();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && fr(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Nr(e, t) {
          var n = Wt();
          Gt(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Gt(97 < n ? 97 : n, function () {
              var n = rr.transition;
              rr.transition = 1;
              try {
                e(!1), t();
              } finally {
                rr.transition = n;
              }
            });
        }
        function Rr(e, t, n) {
          var r = ji(),
            o = Di(e),
            i = {
              lane: o,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            a = t.pending;
          if (
            (null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)),
            (t.pending = i),
            (a = e.alternate),
            e === ir || (null !== a && a === ir))
          )
            sr = ur = !0;
          else {
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  u = a(l, n);
                if (((i.eagerReducer = a), (i.eagerState = u), Xt(u, l)))
                  return;
              } catch (s) {}
            Hi(e, o, r);
          }
        }
        var jr = {
            readContext: dn,
            useCallback: cr,
            useContext: cr,
            useEffect: cr,
            useImperativeHandle: cr,
            useLayoutEffect: cr,
            useMemo: cr,
            useReducer: cr,
            useRef: cr,
            useState: cr,
            useDebugValue: cr,
            useDeferredValue: cr,
            useTransition: cr,
            useMutableSource: cr,
            useOpaqueIdentifier: cr,
            unstable_isNewReconciler: !1,
          },
          Dr = {
            readContext: dn,
            useCallback: function (e, t) {
              return (pr().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: dn,
            useEffect: kr,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ar(4, 2, Cr.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ar(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = pr();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = pr();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Rr.bind(null, ir, e)),
                [r.memoizedState, e]
              );
            },
            useRef: xr,
            useState: wr,
            useDebugValue: zr,
            useDeferredValue: function (e) {
              var t = wr(e),
                n = t[0],
                r = t[1];
              return (
                kr(
                  function () {
                    var t = rr.transition;
                    rr.transition = 1;
                    try {
                      r(e);
                    } finally {
                      rr.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = wr(!1),
                t = e[0];
              return xr((e = Nr.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = pr();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                yr(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Qn) {
                var e = !1,
                  t = ee(function () {
                    throw (e || ((e = !0), n(te())), Error(l(355)));
                  }),
                  n = wr(t)[1];
                return (
                  0 === (2 & ir.mode) &&
                    ((ir.flags |= 516),
                    Er(
                      5,
                      function () {
                        n(te());
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return wr((t = te())), t;
            },
            unstable_isNewReconciler: !1,
          },
          Hr = {
            readContext: dn,
            useCallback: Lr,
            useContext: dn,
            useEffect: Pr,
            useImperativeHandle: Mr,
            useLayoutEffect: Or,
            useMemo: Ir,
            useReducer: vr,
            useRef: Sr,
            useState: function () {
              return vr(mr);
            },
            useDebugValue: zr,
            useDeferredValue: function (e) {
              var t = vr(mr),
                n = t[0],
                r = t[1];
              return (
                Pr(
                  function () {
                    var t = rr.transition;
                    rr.transition = 1;
                    try {
                      r(e);
                    } finally {
                      rr.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = vr(mr)[0];
              return [Sr().current, e];
            },
            useMutableSource: br,
            useOpaqueIdentifier: function () {
              return vr(mr)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Fr = {
            readContext: dn,
            useCallback: Lr,
            useContext: dn,
            useEffect: Pr,
            useImperativeHandle: Mr,
            useLayoutEffect: Or,
            useMemo: Ir,
            useReducer: _r,
            useRef: Sr,
            useState: function () {
              return _r(mr);
            },
            useDebugValue: zr,
            useDeferredValue: function (e) {
              var t = _r(mr),
                n = t[0],
                r = t[1];
              return (
                Pr(
                  function () {
                    var t = rr.transition;
                    rr.transition = 1;
                    try {
                      r(e);
                    } finally {
                      rr.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = _r(mr)[0];
              return [Sr().current, e];
            },
            useMutableSource: br,
            useOpaqueIdentifier: function () {
              return _r(mr)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ur = u.ReactCurrentOwner,
          Br = !1;
        function Vr(e, t, n, r) {
          t.child = null === e ? Ln(t, null, n, r) : zn(t, e.child, n, r);
        }
        function Wr(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            fn(t, o),
            (r = dr(e, t, n, r, i, o)),
            null === e || Br
              ? ((t.flags |= 1), Vr(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                fo(e, t, o))
          );
        }
        function Zr(e, t, n, r, o, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              xa(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Aa(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Gr(e, t, a, r, o, i));
          }
          return (
            (a = e.child),
            0 === (o & i) &&
            ((o = a.memoizedProps),
            (n = null !== (n = n.compare) ? n : Jt)(o, r) && e.ref === t.ref)
              ? fo(e, t, i)
              : ((t.flags |= 1),
                ((e = Sa(a, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Gr(e, t, n, r, o, i) {
          if (null !== e && Jt(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Br = !1), 0 === (i & o)))
              return (t.lanes = e.lanes), fo(e, t, i);
            0 !== (16384 & e.flags) && (Br = !0);
          }
          return Yr(e, t, n, r, i);
        }
        function Qr(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), Qi(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  Qi(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                Qi(t, null !== i ? i.baseLanes : n);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Qi(t, r);
          return Vr(e, t, o, n), t.child;
        }
        function $r(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Yr(e, t, n, r, o) {
          var i = it(n) ? rt : tt.current;
          return (
            (i = ot(t, i)),
            fn(t, o),
            (n = dr(e, t, n, r, i, o)),
            null === e || Br
              ? ((t.flags |= 1), Vr(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                fo(e, t, o))
          );
        }
        function qr(e, t, n, r, o) {
          if (it(n)) {
            var i = !0;
            st(t);
          } else i = !1;
          if ((fn(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              An(t, n, r),
              kn(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var u = a.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = dn(s))
              : (s = ot(t, (s = it(n) ? rt : tt.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== r || u !== s) && Tn(t, a, r, s)),
              (pn = !1);
            var d = t.memoizedState;
            (a.state = d),
              yn(t, r, a, o),
              (u = t.memoizedState),
              l !== r || d !== u || nt.current || pn
                ? ("function" === typeof c &&
                    (En(t, n, c, r), (u = t.memoizedState)),
                  (l = pn || Sn(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = s),
                  (r = l))
                : ("function" === typeof a.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (a = t.stateNode),
              mn(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : tn(t.type, l)),
              (a.props = s),
              (f = t.pendingProps),
              (d = a.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = dn(u))
                : (u = ot(t, (u = it(n) ? rt : tt.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Tn(t, a, r, u)),
              (pn = !1),
              (d = t.memoizedState),
              (a.state = d),
              yn(t, r, a, o);
            var h = t.memoizedState;
            l !== f || d !== h || nt.current || pn
              ? ("function" === typeof p &&
                  (En(t, n, p, r), (h = t.memoizedState)),
                (s = pn || Sn(t, n, s, r, d, h, u))
                  ? (c ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, u),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = u),
                (r = s))
              : ("function" !== typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Xr(e, t, n, r, i, o);
        }
        function Xr(e, t, n, r, o, i) {
          $r(e, t);
          var a = 0 !== (64 & t.flags);
          if (!r && !a) return o && ct(t, n, !1), fo(e, t, i);
          (r = t.stateNode), (Ur.current = t);
          var l =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = zn(t, e.child, null, i)),
                (t.child = zn(t, null, l, i)))
              : Vr(e, t, l, i),
            (t.memoizedState = r.state),
            o && ct(t, n, !0),
            t.child
          );
        }
        function Kr(e) {
          var t = e.stateNode;
          t.pendingContext
            ? lt(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && lt(0, t.context, !1),
            Hn(e, t.containerInfo);
        }
        var Jr,
          eo,
          to,
          no,
          ro = { dehydrated: null, retryLane: 0 };
        function oo(e, t, n) {
          var r,
            o = t.pendingProps,
            i = Vn.current,
            a = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((a = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (i |= 1),
            Je(Vn, 1 & i),
            null === e
              ? (void 0 !== o.fallback && qn(t),
                (e = o.children),
                (i = o.fallback),
                a
                  ? ((e = io(t, e, i, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = ro),
                    e)
                  : "number" === typeof o.unstable_expectedLoadTime
                  ? ((e = io(t, e, i, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = ro),
                    (t.lanes = 33554432),
                    e)
                  : (((n = ka(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                a
                  ? ((o = lo(e, t, o.children, o.fallback, n)),
                    (a = t.child),
                    (i = e.child.memoizedState),
                    (a.memoizedState =
                      null === i
                        ? { baseLanes: n }
                        : { baseLanes: i.baseLanes | n }),
                    (a.childLanes = e.childLanes & ~n),
                    (t.memoizedState = ro),
                    o)
                  : ((n = ao(e, t, o.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function io(e, t, n, r) {
          var o = e.mode,
            i = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 === (2 & o) && null !== i
              ? ((i.childLanes = 0), (i.pendingProps = t))
              : (i = ka(t, o, 0, null)),
            (n = Ta(n, o, r, null)),
            (i.return = e),
            (n.return = e),
            (i.sibling = n),
            (e.child = i),
            n
          );
        }
        function ao(e, t, n, r) {
          var o = e.child;
          return (
            (e = o.sibling),
            (n = Sa(o, { mode: "visible", children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function lo(e, t, n, r, o) {
          var i = t.mode,
            a = e.child;
          e = a.sibling;
          var l = { mode: "hidden", children: n };
          return (
            0 === (2 & i) && t.child !== a
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (a = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = a),
                    (a.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = Sa(a, l)),
            null !== e ? (r = Sa(e, r)) : ((r = Ta(r, i, o, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function uo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), cn(e.return, t);
        }
        function so(e, t, n, r, o, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
                lastEffect: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o),
              (a.lastEffect = i));
        }
        function co(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((Vr(e, t, r.children, n), 0 !== (2 & (r = Vn.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && uo(e, n);
                else if (19 === e.tag) uo(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Je(Vn, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === Wn(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  so(t, !1, o, n, i, t.lastEffect);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === Wn(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                so(t, !0, n, null, i, t.lastEffect);
                break;
              case "together":
                so(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function fo(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (di |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(l(153));
            if (null !== t.child) {
              for (
                n = Sa((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Sa(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function po(e) {
          e.flags |= 4;
        }
        if (q)
          (Jr = function (e, t) {
            for (var n = t.child; null !== n; ) {
              if (5 === n.tag || 6 === n.tag) U(e, n.stateNode);
              else if (4 !== n.tag && null !== n.child) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break;
              for (; null === n.sibling; ) {
                if (null === n.return || n.return === t) return;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
          }),
            (eo = function () {}),
            (to = function (e, t, n, r, o) {
              if ((e = e.memoizedProps) !== r) {
                var i = t.stateNode,
                  a = Dn(Nn.current);
                (n = V(i, n, e, r, o, a)), (t.updateQueue = n) && po(t);
              }
            }),
            (no = function (e, t, n, r) {
              n !== r && po(t);
            });
        else if (X) {
          Jr = function (e, t, n, r) {
            for (var o = t.child; null !== o; ) {
              if (5 === o.tag) {
                var i = o.stateNode;
                n && r && (i = Le(i, o.type, o.memoizedProps, o)), U(e, i);
              } else if (6 === o.tag)
                (i = o.stateNode),
                  n && r && (i = Ie(i, o.memoizedProps, o)),
                  U(e, i);
              else if (4 !== o.tag) {
                if (
                  13 === o.tag &&
                  0 !== (4 & o.flags) &&
                  (i = null !== o.memoizedState)
                ) {
                  var a = o.child;
                  if (
                    null !== a &&
                    (null !== a.child &&
                      ((a.child.return = a), Jr(e, a, !0, i)),
                    null !== (i = a.sibling))
                  ) {
                    (i.return = o), (o = i);
                    continue;
                  }
                }
                if (null !== o.child) {
                  (o.child.return = o), (o = o.child);
                  continue;
                }
              }
              if (o === t) break;
              for (; null === o.sibling; ) {
                if (null === o.return || o.return === t) return;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            }
          };
          var ho = function (e, t, n, r) {
            for (var o = t.child; null !== o; ) {
              if (5 === o.tag) {
                var i = o.stateNode;
                n && r && (i = Le(i, o.type, o.memoizedProps, o)), Ce(e, i);
              } else if (6 === o.tag)
                (i = o.stateNode),
                  n && r && (i = Ie(i, o.memoizedProps, o)),
                  Ce(e, i);
              else if (4 !== o.tag) {
                if (
                  13 === o.tag &&
                  0 !== (4 & o.flags) &&
                  (i = null !== o.memoizedState)
                ) {
                  var a = o.child;
                  if (
                    null !== a &&
                    (null !== a.child &&
                      ((a.child.return = a), ho(e, a, !0, i)),
                    null !== (i = a.sibling))
                  ) {
                    (i.return = o), (o = i);
                    continue;
                  }
                }
                if (null !== o.child) {
                  (o.child.return = o), (o = o.child);
                  continue;
                }
              }
              if (o === t) break;
              for (; null === o.sibling; ) {
                if (null === o.return || o.return === t) return;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            }
          };
          (eo = function (e) {
            var t = e.stateNode;
            if (null !== e.firstEffect) {
              var n = t.containerInfo,
                r = Oe(n);
              ho(r, e, !1, !1), (t.pendingChildren = r), po(e), Me(n, r);
            }
          }),
            (to = function (e, t, n, r, o) {
              var i = e.stateNode,
                a = e.memoizedProps;
              if ((e = null === t.firstEffect) && a === r) t.stateNode = i;
              else {
                var l = t.stateNode,
                  u = Dn(Nn.current),
                  s = null;
                a !== r && (s = V(l, n, a, r, o, u)),
                  e && null === s
                    ? (t.stateNode = i)
                    : ((i = Pe(i, s, n, a, r, t, e, l)),
                      B(i, n, r, o, u) && po(t),
                      (t.stateNode = i),
                      e ? po(t) : Jr(i, t, !1, !1));
              }
            }),
            (no = function (e, t, n, r) {
              n !== r
                ? ((e = Dn(jn.current)),
                  (n = Dn(Nn.current)),
                  (t.stateNode = Z(r, e, n, t)),
                  po(t))
                : (t.stateNode = e.stateNode);
            });
        } else
          (eo = function () {}), (to = function () {}), (no = function () {});
        function mo(e, t) {
          if (!Qn)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function vo(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return it(t.type) && at(), null;
            case 3:
              return (
                Fn(),
                Ke(nt),
                Ke(tt),
                tr(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Kn(t) ? po(t) : r.hydrate || (t.flags |= 256)),
                eo(t),
                null
              );
            case 5:
              Bn(t);
              var o = Dn(jn.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                to(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return null;
                }
                if (((e = Dn(Nn.current)), Kn(t))) {
                  if (!K) throw Error(l(175));
                  (e = Ue(t.stateNode, t.type, t.memoizedProps, o, e, t)),
                    (t.updateQueue = e),
                    null !== e && po(t);
                } else {
                  var i = F(n, r, o, e, t);
                  Jr(i, t, !1, !1),
                    (t.stateNode = i),
                    B(i, n, r, o, e) && po(t);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) no(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((e = Dn(jn.current)), (o = Dn(Nn.current)), Kn(t))) {
                  if (!K) throw Error(l(176));
                  Be(t.stateNode, t.memoizedProps, t) && po(t);
                } else t.stateNode = Z(r, e, o, t);
              }
              return null;
            case 13:
              return (
                Ke(Vn),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (o = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Kn(t)
                      : (o = null !== e.memoizedState),
                    r &&
                      !o &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & Vn.current)
                        ? 0 === si && (si = 3)
                        : ((0 !== si && 3 !== si) || (si = 4),
                          null === oi ||
                            (0 === (134217727 & di) &&
                              0 === (134217727 & pi)) ||
                            Vi(oi, ai))),
                    X && r && (t.flags |= 4),
                    q && (r || o) && (t.flags |= 4),
                    null)
              );
            case 4:
              return (
                Fn(), eo(t), null === e && oe(t.stateNode.containerInfo), null
              );
            case 10:
              return sn(t), null;
            case 19:
              if ((Ke(Vn), null === (r = t.memoizedState))) return null;
              if (((o = 0 !== (64 & t.flags)), null === (i = r.rendering)))
                if (o) mo(r, !1);
                else {
                  if (0 !== si || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (i = Wn(e))) {
                        for (
                          t.flags |= 64,
                            mo(r, !1),
                            null !== (e = i.updateQueue) &&
                              ((t.updateQueue = e), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            e = n,
                            r = t.child;
                          null !== r;

                        )
                          (n = e),
                            ((o = r).flags &= 2),
                            (o.nextEffect = null),
                            (o.firstEffect = null),
                            (o.lastEffect = null),
                            null === (i = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = n),
                                (o.child = null),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = i.childLanes),
                                (o.lanes = i.lanes),
                                (o.child = i.child),
                                (o.memoizedProps = i.memoizedProps),
                                (o.memoizedState = i.memoizedState),
                                (o.updateQueue = i.updateQueue),
                                (o.type = i.type),
                                (n = i.dependencies),
                                (o.dependencies =
                                  null === n
                                    ? null
                                    : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext,
                                      })),
                            (r = r.sibling);
                        return Je(Vn, (1 & Vn.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Vt() > _i &&
                    ((t.flags |= 64),
                    (o = !0),
                    mo(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!o)
                  if (null !== (e = Wn(i))) {
                    if (
                      ((t.flags |= 64),
                      (o = !0),
                      null !== (e = e.updateQueue) &&
                        ((t.updateQueue = e), (t.flags |= 4)),
                      mo(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !i.alternate &&
                        !Qn)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Vt() - r.renderingStartTime > _i &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (o = !0),
                      mo(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((i.sibling = t.child), (t.child = i))
                  : (null !== (e = r.last) ? (e.sibling = i) : (t.child = i),
                    (r.last = i));
              }
              return null !== r.tail
                ? ((e = r.tail),
                  (r.rendering = e),
                  (r.tail = e.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Vt()),
                  (e.sibling = null),
                  (t = Vn.current),
                  Je(Vn, o ? (1 & t) | 2 : 1 & t),
                  e)
                : null;
            case 23:
            case 24:
              return (
                $i(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(l(156, t.tag));
        }
        function _o(e) {
          switch (e.tag) {
            case 1:
              it(e.type) && at();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Fn(), Ke(nt), Ke(tt), tr(), 0 !== (64 & (t = e.flags))))
                throw Error(l(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Bn(e), null;
            case 13:
              return (
                Ke(Vn),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return Ke(Vn), null;
            case 4:
              return Fn(), null;
            case 10:
              return sn(e), null;
            case 23:
            case 24:
              return $i(), null;
            default:
              return null;
          }
        }
        function go(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += en(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (i) {
            o = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: o };
        }
        function yo(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var bo = "function" === typeof WeakMap ? WeakMap : Map;
        function wo(e, t, n) {
          ((n = vn(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              wi || ((wi = !0), (Ei = r)), yo(0, t);
            }),
            n
          );
        }
        function Eo(e, t, n) {
          (n = vn(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            n.payload = function () {
              return yo(0, t), r(o);
            };
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r &&
                  (null === xi ? (xi = new Set([this])) : xi.add(this),
                  yo(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var xo = "function" === typeof WeakSet ? WeakSet : Set;
        function So(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                fa(e, n);
              }
            else t.current = null;
        }
        function Ao(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : tn(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (q && 256 & t.flags && ke(t.stateNode.containerInfo));
          }
          throw Error(l(163));
        }
        function To(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.destroy;
                (n.destroy = void 0), void 0 !== r && r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ko(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var o = e;
                  (r = o.next),
                    0 !== (4 & (o = o.tag)) &&
                      0 !== (1 & o) &&
                      (ua(n, e), la(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : tn(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && bn(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                      e = N(n.child.stateNode);
                      break;
                    case 1:
                      e = n.child.stateNode;
                  }
                bn(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  ve(e, n.type, n.memoizedProps, n)
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                K &&
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && Ze(n))))
              );
          }
          throw Error(l(163));
        }
        function Po(e, t) {
          if (q)
            for (var n = e; ; ) {
              if (5 === n.tag) {
                var r = n.stateNode;
                t ? xe(r) : Ae(n.stateNode, n.memoizedProps);
              } else if (6 === n.tag)
                (r = n.stateNode), t ? Se(r) : Te(r, n.memoizedProps);
              else if (
                ((23 !== n.tag && 24 !== n.tag) ||
                  null === n.memoizedState ||
                  n === e) &&
                null !== n.child
              ) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === e) break;
              for (; null === n.sibling; ) {
                if (null === n.return || n.return === e) return;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
        }
        function Oo(e, t) {
          if (dt && "function" === typeof dt.onCommitFiberUnmount)
            try {
              dt.onCommitFiberUnmount(ft, t);
            } catch (i) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    o = r.destroy;
                  if (((r = r.tag), void 0 !== o))
                    if (0 !== (4 & r)) ua(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (i) {
                        fa(r, i);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (So(t),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (i) {
                  fa(t, i);
                }
              break;
            case 5:
              So(t);
              break;
            case 4:
              q
                ? Ro(e, t)
                : X &&
                  X &&
                  ((t = t.stateNode.containerInfo), (e = Oe(t)), ze(t, e));
          }
        }
        function Co(e, t) {
          for (var n = t; ; )
            if ((Oo(e, n), null === n.child || (q && 4 === n.tag))) {
              if (n === t) break;
              for (; null === n.sibling; ) {
                if (null === n.return || n.return === t) return;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            } else (n.child.return = n), (n = n.child);
        }
        function Mo(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function zo(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function Lo(e) {
          if (q) {
            e: {
              for (var t = e.return; null !== t; ) {
                if (zo(t)) break e;
                t = t.return;
              }
              throw Error(l(160));
            }
            var n = t;
            switch (((t = n.stateNode), n.tag)) {
              case 5:
                var r = !1;
                break;
              case 3:
              case 4:
                (t = t.containerInfo), (r = !0);
                break;
              default:
                throw Error(l(161));
            }
            16 & n.flags && (Ee(t), (n.flags &= -17));
            e: t: for (n = e; ; ) {
              for (; null === n.sibling; ) {
                if (null === n.return || zo(n.return)) {
                  n = null;
                  break e;
                }
                n = n.return;
              }
              for (
                n.sibling.return = n.return, n = n.sibling;
                5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

              ) {
                if (2 & n.flags) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                (n.child.return = n), (n = n.child);
              }
              if (!(2 & n.flags)) {
                n = n.stateNode;
                break e;
              }
            }
            r ? Io(e, n, t) : No(e, n, t);
          }
        }
        function Io(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t ? ye(n, e, t) : he(n, e);
          else if (4 !== r && null !== (e = e.child))
            for (Io(e, t, n), e = e.sibling; null !== e; )
              Io(e, t, n), (e = e.sibling);
        }
        function No(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t ? ge(n, e, t) : pe(n, e);
          else if (4 !== r && null !== (e = e.child))
            for (No(e, t, n), e = e.sibling; null !== e; )
              No(e, t, n), (e = e.sibling);
        }
        function Ro(e, t) {
          for (var n, r, o = t, i = !1; ; ) {
            if (!i) {
              i = o.return;
              e: for (;;) {
                if (null === i) throw Error(l(160));
                switch (((n = i.stateNode), i.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                i = i.return;
              }
              i = !0;
            }
            if (5 === o.tag || 6 === o.tag)
              Co(e, o), r ? we(n, o.stateNode) : be(n, o.stateNode);
            else if (4 === o.tag) {
              if (null !== o.child) {
                (n = o.stateNode.containerInfo),
                  (r = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((Oo(e, o), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (i = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function jo(e, t) {
          if (q) {
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
              case 22:
                return void To(3, t);
              case 1:
              case 12:
              case 17:
                return;
              case 5:
                var n = t.stateNode;
                if (null != n) {
                  var r = t.memoizedProps;
                  e = null !== e ? e.memoizedProps : r;
                  var o = t.type,
                    i = t.updateQueue;
                  (t.updateQueue = null), null !== i && _e(n, i, o, e, r, t);
                }
                return;
              case 6:
                if (null === t.stateNode) throw Error(l(162));
                return (
                  (n = t.memoizedProps),
                  void me(t.stateNode, null !== e ? e.memoizedProps : n, n)
                );
              case 3:
                return void (
                  K &&
                  ((t = t.stateNode),
                  t.hydrate && ((t.hydrate = !1), We(t.containerInfo)))
                );
              case 13:
                return Do(t), void Ho(t);
              case 19:
                return void Ho(t);
              case 23:
              case 24:
                return void Po(t, null !== t.memoizedState);
            }
            throw Error(l(163));
          }
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              return void To(3, t);
            case 12:
            case 23:
            case 24:
              return;
            case 13:
              return Do(t), void Ho(t);
            case 19:
              return void Ho(t);
            case 3:
              K &&
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), We(n.containerInfo));
          }
          e: if (X) {
            switch (t.tag) {
              case 1:
              case 5:
              case 6:
              case 20:
                break e;
              case 3:
              case 4:
                (t = t.stateNode), ze(t.containerInfo, t.pendingChildren);
                break e;
            }
            throw Error(l(163));
          }
        }
        function Do(e) {
          null !== e.memoizedState && ((vi = Vt()), q && Po(e.child, !0));
        }
        function Ho(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new xo()),
              t.forEach(function (t) {
                var r = pa.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Fo(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Uo = 0,
          Bo = 1,
          Vo = 2,
          Wo = 3,
          Zo = 4;
        if ("function" === typeof Symbol && Symbol.for) {
          var Go = Symbol.for;
          (Uo = Go("selector.component")),
            (Bo = Go("selector.has_pseudo_class")),
            (Vo = Go("selector.role")),
            (Wo = Go("selector.test_id")),
            (Zo = Go("selector.text"));
        }
        function Qo(e) {
          var t = J(e);
          if (null != t) {
            if ("string" !== typeof t.memoizedProps["data-testname"])
              throw Error(l(364));
            return t;
          }
          if (null === (e = ae(e))) throw Error(l(362));
          return e.stateNode.current;
        }
        function $o(e, t) {
          switch (t.$$typeof) {
            case Uo:
              if (e.type === t.value) return !0;
              break;
            case Bo:
              e: {
                (t = t.value), (e = [e, 0]);
                for (var n = 0; n < e.length; ) {
                  var r = e[n++],
                    o = e[n++],
                    i = t[o];
                  if (5 !== r.tag || !se(r)) {
                    for (; null != i && $o(r, i); ) i = t[++o];
                    if (o === t.length) {
                      t = !0;
                      break e;
                    }
                    for (r = r.child; null !== r; )
                      e.push(r, o), (r = r.sibling);
                  }
                }
                t = !1;
              }
              return t;
            case Vo:
              if (5 === e.tag && ce(e.stateNode, t.value)) return !0;
              break;
            case Zo:
              if (
                (5 === e.tag || 6 === e.tag) &&
                null !== (e = ue(e)) &&
                0 <= e.indexOf(t.value)
              )
                return !0;
              break;
            case Wo:
              if (
                5 === e.tag &&
                "string" === typeof (e = e.memoizedProps["data-testname"]) &&
                e.toLowerCase() === t.value.toLowerCase()
              )
                return !0;
              break;
            default:
              throw Error(l(365, t));
          }
          return !1;
        }
        function Yo(e) {
          switch (e.$$typeof) {
            case Uo:
              return "<" + (P(e.value) || "Unknown") + ">";
            case Bo:
              return ":has(" + (Yo(e) || "") + ")";
            case Vo:
              return '[role="' + e.value + '"]';
            case Zo:
              return '"' + e.value + '"';
            case Wo:
              return '[data-testname="' + e.value + '"]';
            default:
              throw Error(l(365, e));
          }
        }
        function qo(e, t) {
          var n = [];
          e = [e, 0];
          for (var r = 0; r < e.length; ) {
            var o = e[r++],
              i = e[r++],
              a = t[i];
            if (5 !== o.tag || !se(o)) {
              for (; null != a && $o(o, a); ) a = t[++i];
              if (i === t.length) n.push(o);
              else
                for (o = o.child; null !== o; ) e.push(o, i), (o = o.sibling);
            }
          }
          return n;
        }
        function Xo(e, t) {
          if (!ie) throw Error(l(363));
          (e = qo((e = Qo(e)), t)), (t = []), (e = Array.from(e));
          for (var n = 0; n < e.length; ) {
            var r = e[n++];
            if (5 === r.tag) se(r) || t.push(r.stateNode);
            else for (r = r.child; null !== r; ) e.push(r), (r = r.sibling);
          }
          return t;
        }
        var Ko = null;
        var Jo = Math.ceil,
          ei = u.ReactCurrentDispatcher,
          ti = u.ReactCurrentOwner,
          ni = u.IsSomeRendererActing,
          ri = 0,
          oi = null,
          ii = null,
          ai = 0,
          li = 0,
          ui = Xe(0),
          si = 0,
          ci = null,
          fi = 0,
          di = 0,
          pi = 0,
          hi = 0,
          mi = null,
          vi = 0,
          _i = 1 / 0;
        function gi() {
          _i = Vt() + 500;
        }
        var yi,
          bi = null,
          wi = !1,
          Ei = null,
          xi = null,
          Si = !1,
          Ai = null,
          Ti = 90,
          ki = [],
          Pi = [],
          Oi = null,
          Ci = 0,
          Mi = null,
          zi = -1,
          Li = 0,
          Ii = 0,
          Ni = null,
          Ri = !1;
        function ji() {
          return 0 !== (48 & ri) ? Vt() : -1 !== zi ? zi : (zi = Vt());
        }
        function Di(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === Wt() ? 1 : 2;
          if ((0 === Li && (Li = fi), 0 !== qt.transition)) {
            0 !== Ii && (Ii = null !== mi ? mi.pendingLanes : 0), (e = Li);
            var t = 4186112 & ~Ii;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Wt()),
            0 !== (4 & ri) && 98 === e
              ? (e = gt(12, Li))
              : (e = gt(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  Li
                )),
            e
          );
        }
        function Hi(e, t, n) {
          if (50 < Ci) throw ((Ci = 0), (Mi = null), Error(l(185)));
          if (null === (e = Fi(e, t))) return null;
          wt(e, t, n), e === oi && ((pi |= t), 4 === si && Vi(e, ai));
          var r = Wt();
          1 === t
            ? 0 !== (8 & ri) && 0 === (48 & ri)
              ? Wi(e)
              : (Ui(e, n), 0 === ri && (gi(), $t()))
            : (0 === (4 & ri) ||
                (98 !== r && 99 !== r) ||
                (null === Oi ? (Oi = new Set([e])) : Oi.add(e)),
              Ui(e, n)),
            (mi = e);
        }
        function Fi(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function Ui(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              o = e.pingedLanes,
              i = e.expirationTimes,
              a = e.pendingLanes;
            0 < a;

          ) {
            var u = 31 - Et(a),
              s = 1 << u,
              c = i[u];
            if (-1 === c) {
              if (0 === (s & r) || 0 !== (s & o)) {
                (c = t), mt(s);
                var f = ht;
                i[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= s);
            a &= ~s;
          }
          if (((r = vt(e, e === oi ? ai : 0)), (t = ht), 0 === r))
            null !== n &&
              (n !== jt && kt(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== jt && kt(n);
            }
            15 === t
              ? ((n = Wi.bind(null, e)),
                null === Ht ? ((Ht = [n]), (Ft = Tt(zt, Yt))) : Ht.push(n),
                (n = jt))
              : 14 === t
              ? (n = Qt(99, Wi.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(l(358, e));
                  }
                })(t)),
                (n = Qt(n, Bi.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function Bi(e) {
          if (((zi = -1), (Ii = Li = 0), 0 !== (48 & ri))) throw Error(l(327));
          var t = e.callbackNode;
          if (aa() && e.callbackNode !== t) return null;
          var n = vt(e, e === oi ? ai : 0);
          if (0 === n) return null;
          var r = n,
            o = ri;
          ri |= 16;
          var i = Xi();
          for ((oi === e && ai === r) || (gi(), Yi(e, r)); ; )
            try {
              ea();
              break;
            } catch (u) {
              qi(e, u);
            }
          if (
            (ln(),
            (ei.current = i),
            (ri = o),
            null !== ii ? (r = 0) : ((oi = null), (ai = 0), (r = si)),
            0 !== (fi & pi))
          )
            Yi(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((ri |= 64),
                e.hydrate && ((e.hydrate = !1), ke(e.containerInfo)),
                0 !== (n = _t(e)) && (r = Ki(e, n))),
              1 === r)
            )
              throw ((t = ci), Yi(e, 0), Vi(e, n), Ui(e, Vt()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(l(345));
              case 2:
              case 5:
                ra(e);
                break;
              case 3:
                if (
                  (Vi(e, n), (62914560 & n) === n && 10 < (r = vi + 500 - Vt()))
                ) {
                  if (0 !== vt(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    ji(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = G(ra.bind(null, e), r);
                  break;
                }
                ra(e);
                break;
              case 4:
                if ((Vi(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var a = 31 - Et(n);
                  (i = 1 << a), (a = r[a]) > o && (o = a), (n &= ~i);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = Vt() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Jo(n / 1960)) - n))
                ) {
                  e.timeoutHandle = G(ra.bind(null, e), n);
                  break;
                }
                ra(e);
                break;
              default:
                throw Error(l(329));
            }
          }
          return Ui(e, Vt()), e.callbackNode === t ? Bi.bind(null, e) : null;
        }
        function Vi(e, t) {
          for (
            t &= ~hi,
              t &= ~pi,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Et(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function Wi(e) {
          if (0 !== (48 & ri)) throw Error(l(327));
          if ((aa(), e === oi && 0 !== (e.expiredLanes & ai))) {
            var t = ai,
              n = Ki(e, t);
            0 !== (fi & pi) && (n = Ki(e, (t = vt(e, t))));
          } else n = Ki(e, (t = vt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((ri |= 64),
              e.hydrate && ((e.hydrate = !1), ke(e.containerInfo)),
              0 !== (t = _t(e)) && (n = Ki(e, t))),
            1 === n)
          )
            throw ((n = ci), Yi(e, 0), Vi(e, t), Ui(e, Vt()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ra(e),
            Ui(e, Vt()),
            null
          );
        }
        function Zi(e, t) {
          var n = ri;
          ri |= 1;
          try {
            return e(t);
          } finally {
            0 === (ri = n) && (gi(), $t());
          }
        }
        function Gi(e, t) {
          var n = ri;
          if (0 !== (48 & n)) return e(t);
          ri |= 1;
          try {
            if (e) return Gt(99, e.bind(null, t));
          } finally {
            (ri = n), $t();
          }
        }
        function Qi(e, t) {
          Je(ui, li), (li |= t), (fi |= t);
        }
        function $i() {
          (li = ui.current), Ke(ui);
        }
        function Yi(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((n !== $ && ((e.timeoutHandle = $), Q(n)), null !== ii))
            for (n = ii.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    at();
                  break;
                case 3:
                  Fn(), Ke(nt), Ke(tt), tr();
                  break;
                case 5:
                  Bn(r);
                  break;
                case 4:
                  Fn();
                  break;
                case 13:
                case 19:
                  Ke(Vn);
                  break;
                case 10:
                  sn(r);
                  break;
                case 23:
                case 24:
                  $i();
              }
              n = n.return;
            }
          (oi = e),
            (ii = Sa(e.current, null)),
            (ai = li = fi = t),
            (si = 0),
            (ci = null),
            (hi = pi = di = 0);
        }
        function qi(e, t) {
          for (;;) {
            var n = ii;
            try {
              if ((ln(), (nr.current = jr), ur)) {
                for (var r = ir.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ur = !1;
              }
              if (
                ((or = 0),
                (lr = ar = ir = null),
                (sr = !1),
                (ti.current = null),
                null === n || null === n.return)
              ) {
                (si = 1), (ci = t), (ii = null);
                break;
              }
              e: {
                var i = e,
                  a = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = ai),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var s = u;
                  if (0 === (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var f = 0 !== (1 & Vn.current),
                    d = a;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var h = d.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var m = d.memoizedProps;
                        p =
                          void 0 !== m.fallback &&
                          (!0 !== m.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var v = d.updateQueue;
                      if (null === v) {
                        var _ = new Set();
                        _.add(s), (d.updateQueue = _);
                      } else v.add(s);
                      if (0 === (2 & d.mode)) {
                        if (
                          ((d.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var g = vn(-1, 1);
                            (g.tag = 2), _n(l, g);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (l = t);
                      var y = i.pingCache;
                      if (
                        (null === y
                          ? ((y = i.pingCache = new bo()),
                            (u = new Set()),
                            y.set(s, u))
                          : void 0 === (u = y.get(s)) &&
                            ((u = new Set()), y.set(s, u)),
                        !u.has(l))
                      ) {
                        u.add(l);
                        var b = da.bind(null, i, s, l);
                        s.then(b, b);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  u = Error(
                    (P(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== si && (si = 2), (u = go(u, l)), (d = a);
                do {
                  switch (d.tag) {
                    case 3:
                      (i = u),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        gn(d, wo(0, i, t));
                      break e;
                    case 1:
                      i = u;
                      var w = d.type,
                        E = d.stateNode;
                      if (
                        0 === (64 & d.flags) &&
                        ("function" === typeof w.getDerivedStateFromError ||
                          (null !== E &&
                            "function" === typeof E.componentDidCatch &&
                            (null === xi || !xi.has(E))))
                      ) {
                        (d.flags |= 4096),
                          (t &= -t),
                          (d.lanes |= t),
                          gn(d, Eo(d, i, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              na(n);
            } catch (x) {
              (t = x), ii === n && null !== n && (ii = n = n.return);
              continue;
            }
            break;
          }
        }
        function Xi() {
          var e = ei.current;
          return (ei.current = jr), null === e ? jr : e;
        }
        function Ki(e, t) {
          var n = ri;
          ri |= 16;
          var r = Xi();
          for ((oi === e && ai === t) || Yi(e, t); ; )
            try {
              Ji();
              break;
            } catch (o) {
              qi(e, o);
            }
          if ((ln(), (ri = n), (ei.current = r), null !== ii))
            throw Error(l(261));
          return (oi = null), (ai = 0), si;
        }
        function Ji() {
          for (; null !== ii; ) ta(ii);
        }
        function ea() {
          for (; null !== ii && !Pt(); ) ta(ii);
        }
        function ta(e) {
          var t = yi(e.alternate, e, li);
          (e.memoizedProps = e.pendingProps),
            null === t ? na(e) : (ii = t),
            (ti.current = null);
        }
        function na(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = vo(n, t, li))) return void (ii = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & li) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, o = n.child; null !== o; )
                  (r |= o.lanes | o.childLanes), (o = o.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = _o(t))) return (n.flags &= 2047), void (ii = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (ii = t);
            ii = t = e;
          } while (null !== t);
          0 === si && (si = 5);
        }
        function ra(e) {
          var t = Wt();
          return Gt(99, oa.bind(null, e, t)), null;
        }
        function oa(e, t) {
          do {
            aa();
          } while (null !== Ai);
          if (0 !== (48 & ri)) throw Error(l(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(l(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            o = r,
            i = e.pendingLanes & ~o;
          (e.pendingLanes = o),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= o),
            (e.mutableReadLanes &= o),
            (e.entangledLanes &= o),
            (o = e.entanglements);
          for (var a = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
            var s = 31 - Et(i),
              c = 1 << s;
            (o[s] = 0), (a[s] = -1), (u[s] = -1), (i &= ~c);
          }
          if (
            (null !== Oi && 0 === (24 & r) && Oi.has(e) && Oi.delete(e),
            e === oi && ((ii = oi = null), (ai = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            (o = ri),
              (ri |= 32),
              (ti.current = null),
              (Ni = D(e.containerInfo)),
              (Ri = !1),
              (bi = r);
            do {
              try {
                ia();
              } catch (g) {
                if (null === bi) throw Error(l(330));
                fa(bi, g), (bi = bi.nextEffect);
              }
            } while (null !== bi);
            (Ni = null), (bi = r);
            do {
              try {
                for (a = e; null !== bi; ) {
                  var f = bi.flags;
                  if ((16 & f && q && Ee(bi.stateNode), 128 & f)) {
                    var d = bi.alternate;
                    if (null !== d) {
                      var p = d.ref;
                      null !== p &&
                        ("function" === typeof p
                          ? p(null)
                          : (p.current = null));
                    }
                  }
                  switch (1038 & f) {
                    case 2:
                      Lo(bi), (bi.flags &= -3);
                      break;
                    case 6:
                      Lo(bi), (bi.flags &= -3), jo(bi.alternate, bi);
                      break;
                    case 1024:
                      bi.flags &= -1025;
                      break;
                    case 1028:
                      (bi.flags &= -1025), jo(bi.alternate, bi);
                      break;
                    case 4:
                      jo(bi.alternate, bi);
                      break;
                    case 8:
                      (u = a), (i = bi), q ? Ro(u, i) : Co(u, i);
                      var h = i.alternate;
                      Mo(i), null !== h && Mo(h);
                  }
                  bi = bi.nextEffect;
                }
              } catch (g) {
                if (null === bi) throw Error(l(330));
                fa(bi, g), (bi = bi.nextEffect);
              }
            } while (null !== bi);
            Ri && re(), H(e.containerInfo), (e.current = n), (bi = r);
            do {
              try {
                for (f = e; null !== bi; ) {
                  var m = bi.flags;
                  if ((36 & m && ko(f, bi.alternate, bi), 128 & m)) {
                    d = void 0;
                    var v = bi.ref;
                    if (null !== v) {
                      var _ = bi.stateNode;
                      if (5 === bi.tag) d = N(_);
                      else d = _;
                      "function" === typeof v ? v(d) : (v.current = d);
                    }
                  }
                  bi = bi.nextEffect;
                }
              } catch (g) {
                if (null === bi) throw Error(l(330));
                fa(bi, g), (bi = bi.nextEffect);
              }
            } while (null !== bi);
            (bi = null), Dt(), (ri = o);
          } else e.current = n;
          if (Si) (Si = !1), (Ai = e), (Ti = t);
          else
            for (bi = r; null !== bi; )
              (t = bi.nextEffect),
                (bi.nextEffect = null),
                8 & bi.flags &&
                  (((m = bi).sibling = null), (m.stateNode = null)),
                (bi = t);
          if (
            (0 === (r = e.pendingLanes) && (xi = null),
            1 === r ? (e === Mi ? Ci++ : ((Ci = 0), (Mi = e))) : (Ci = 0),
            (n = n.stateNode),
            dt && "function" === typeof dt.onCommitFiberRoot)
          )
            try {
              dt.onCommitFiberRoot(
                ft,
                n,
                void 0,
                64 === (64 & n.current.flags)
              );
            } catch (g) {}
          if ((Ui(e, Vt()), wi)) throw ((wi = !1), (e = Ei), (Ei = null), e);
          return 0 !== (8 & ri) || $t(), null;
        }
        function ia() {
          for (; null !== bi; ) {
            var e = bi.alternate;
            Ri ||
              null === Ni ||
              (0 !== (8 & bi.flags)
                ? L(bi, Ni) && ((Ri = !0), ne())
                : 13 === bi.tag && Fo(e, bi) && L(bi, Ni) && ((Ri = !0), ne()));
            var t = bi.flags;
            0 !== (256 & t) && Ao(e, bi),
              0 === (512 & t) ||
                Si ||
                ((Si = !0),
                Qt(97, function () {
                  return aa(), null;
                })),
              (bi = bi.nextEffect);
          }
        }
        function aa() {
          if (90 !== Ti) {
            var e = 97 < Ti ? 97 : Ti;
            return (Ti = 90), Gt(e, sa);
          }
          return !1;
        }
        function la(e, t) {
          ki.push(t, e),
            Si ||
              ((Si = !0),
              Qt(97, function () {
                return aa(), null;
              }));
        }
        function ua(e, t) {
          Pi.push(t, e),
            Si ||
              ((Si = !0),
              Qt(97, function () {
                return aa(), null;
              }));
        }
        function sa() {
          if (null === Ai) return !1;
          var e = Ai;
          if (((Ai = null), 0 !== (48 & ri))) throw Error(l(331));
          var t = ri;
          ri |= 32;
          var n = Pi;
          Pi = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              i = n[r + 1],
              a = o.destroy;
            if (((o.destroy = void 0), "function" === typeof a))
              try {
                a();
              } catch (s) {
                if (null === i) throw Error(l(330));
                fa(i, s);
              }
          }
          for (n = ki, ki = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (i = n[r + 1]);
            try {
              var u = o.create;
              o.destroy = u();
            } catch (s) {
              if (null === i) throw Error(l(330));
              fa(i, s);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (ri = t), $t(), !0;
        }
        function ca(e, t, n) {
          _n(e, (t = wo(0, (t = go(n, t)), 1))),
            (t = ji()),
            null !== (e = Fi(e, 1)) && (wt(e, 1, t), Ui(e, t));
        }
        function fa(e, t) {
          if (3 === e.tag) ca(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                ca(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === xi || !xi.has(r)))
                ) {
                  var o = Eo(n, (e = go(t, e)), 1);
                  if ((_n(n, o), (o = ji()), null !== (n = Fi(n, 1))))
                    wt(n, 1, o), Ui(n, o);
                  else if (
                    "function" === typeof r.componentDidCatch &&
                    (null === xi || !xi.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (i) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function da(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ji()),
            (e.pingedLanes |= e.suspendedLanes & n),
            oi === e &&
              (ai & n) === n &&
              (4 === si ||
              (3 === si && (62914560 & ai) === ai && 500 > Vt() - vi)
                ? Yi(e, 0)
                : (hi |= n)),
            Ui(e, t);
        }
        function pa(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === Wt() ? 1 : 2)
                : (0 === Li && (Li = fi),
                  0 === (t = yt(62914560 & ~Li)) && (t = 4194304))),
            (n = ji()),
            null !== (e = Fi(e, t)) && (wt(e, t, n), Ui(e, n));
        }
        yi = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || nt.current) Br = !0;
            else {
              if (0 === (n & r)) {
                switch (((Br = !1), t.tag)) {
                  case 3:
                    Kr(t), Jn();
                    break;
                  case 5:
                    Un(t);
                    break;
                  case 1:
                    it(t.type) && st(t);
                    break;
                  case 4:
                    Hn(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    un(t, t.memoizedProps.value);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? oo(e, t, n)
                        : (Je(Vn, 1 & Vn.current),
                          null !== (t = fo(e, t, n)) ? t.sibling : null);
                    Je(Vn, 1 & Vn.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return co(e, t, n);
                      t.flags |= 64;
                    }
                    var o = t.memoizedState;
                    if (
                      (null !== o &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                      Je(Vn, Vn.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Qr(e, t, n);
                }
                return fo(e, t, n);
              }
              Br = 0 !== (16384 & e.flags);
            }
          else Br = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = ot(t, tt.current)),
                fn(t, n),
                (o = dr(null, t, r, e, o, n)),
                (t.flags |= 1),
                "object" === typeof o &&
                  null !== o &&
                  "function" === typeof o.render &&
                  void 0 === o.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  it(r))
                ) {
                  var i = !0;
                  st(t);
                } else i = !1;
                (t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                  hn(t);
                var a = r.getDerivedStateFromProps;
                "function" === typeof a && En(t, r, a, e),
                  (o.updater = xn),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  kn(t, r, e, n),
                  (t = Xr(null, t, r, !0, i, n));
              } else (t.tag = 0), Vr(null, t, o, n), (t = t.child);
              return t;
            case 16:
              o = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (o = (i = o._init)(o._payload)),
                  (t.type = o),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return xa(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === v) return 11;
                        if (e === y) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = tn(o, e)),
                  i)
                ) {
                  case 0:
                    t = Yr(null, t, o, e, n);
                    break e;
                  case 1:
                    t = qr(null, t, o, e, n);
                    break e;
                  case 11:
                    t = Wr(null, t, o, e, n);
                    break e;
                  case 14:
                    t = Zr(null, t, o, tn(o.type, e), r, n);
                    break e;
                }
                throw Error(l(306, o, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Yr(e, t, r, (o = t.elementType === r ? o : tn(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                qr(e, t, r, (o = t.elementType === r ? o : tn(r, o)), n)
              );
            case 3:
              if ((Kr(t), (r = t.updateQueue), null === e || null === r))
                throw Error(l(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                mn(e, t),
                yn(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                Jn(), (t = fo(e, t, n));
              else {
                if (
                  ((i = (o = t.stateNode).hydrate) &&
                    (K
                      ? ((Gn = Fe(t.stateNode.containerInfo)),
                        (Zn = t),
                        (i = Qn = !0))
                      : (i = !1)),
                  i)
                ) {
                  if (K && null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2)
                      (i = e[o]),
                        (a = e[o + 1]),
                        Y
                          ? (i._workInProgressVersionPrimary = a)
                          : (i._workInProgressVersionSecondary = a),
                        er.push(i);
                  for (n = Ln(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Vr(e, t, r, n), Jn();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Un(t),
                null === e && qn(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (a = o.children),
                W(r, o) ? (a = null) : null !== i && W(r, i) && (t.flags |= 16),
                $r(e, t),
                Vr(e, t, a, n),
                t.child
              );
            case 6:
              return null === e && qn(t), null;
            case 13:
              return oo(e, t, n);
            case 4:
              return (
                Hn(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = zn(t, null, r, n)) : Vr(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Wr(e, t, r, (o = t.elementType === r ? o : tn(r, o)), n)
              );
            case 7:
              return Vr(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Vr(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (a = t.memoizedProps),
                  un(t, (i = o.value)),
                  null !== a)
                ) {
                  var u = a.value;
                  if (
                    0 ===
                    (i = Xt(u, i)
                      ? 0
                      : 0 |
                        ("function" === typeof r._calculateChangedBits
                          ? r._calculateChangedBits(u, i)
                          : 1073741823))
                  ) {
                    if (a.children === o.children && !nt.current) {
                      t = fo(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var s = u.dependencies;
                      if (null !== s) {
                        a = u.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & i)) {
                            1 === u.tag &&
                              (((c = vn(-1, n & -n)).tag = 2), _n(u, c)),
                              (u.lanes |= n),
                              null !== (c = u.alternate) && (c.lanes |= n),
                              cn(u.return, n),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        a = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== a) a.return = u;
                      else
                        for (a = u; null !== a; ) {
                          if (a === t) {
                            a = null;
                            break;
                          }
                          if (null !== (u = a.sibling)) {
                            (u.return = a.return), (a = u);
                            break;
                          }
                          a = a.return;
                        }
                      u = a;
                    }
                }
                Vr(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (i = t.pendingProps).children),
                fn(t, n),
                (r = r((o = dn(o, i.unstable_observedBits)))),
                (t.flags |= 1),
                Vr(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = tn((o = t.type), t.pendingProps)),
                Zr(e, t, o, (i = tn(o.type, i)), r, n)
              );
            case 15:
              return Gr(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : tn(r, o)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                it(r) ? ((e = !0), st(t)) : (e = !1),
                fn(t, n),
                An(t, r, o),
                kn(t, r, o, n),
                Xr(null, t, r, !0, e, n)
              );
            case 19:
              return co(e, t, n);
            case 23:
            case 24:
              return Qr(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var ha = { current: !1 },
          ma = a.unstable_flushAllWithoutAsserting,
          va = "function" === typeof ma;
        function _a() {
          if (void 0 !== ma) return ma();
          for (var e = !1; aa(); ) e = !0;
          return e;
        }
        function ga(t) {
          try {
            _a(),
              (function (t) {
                if (null === Ko)
                  try {
                    var n = ("require" + Math.random()).slice(0, 7);
                    Ko = (e && e[n]).call(e, "timers").setImmediate;
                  } catch (r) {
                    Ko = function (e) {
                      var t = new MessageChannel();
                      (t.port1.onmessage = e), t.port2.postMessage(void 0);
                    };
                  }
                Ko(t);
              })(function () {
                _a() ? ga(t) : t();
              });
          } catch (n) {
            t(n);
          }
        }
        var ya = 0,
          ba = !1;
        function wa(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ea(e, t, n, r) {
          return new wa(e, t, n, r);
        }
        function xa(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Sa(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ea(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Aa(e, t, n, r, o, i) {
          var a = 2;
          if (((r = e), "function" === typeof e)) xa(e) && (a = 1);
          else if ("string" === typeof e) a = 5;
          else
            e: switch (e) {
              case f:
                return Ta(n.children, o, i, t);
              case E:
                (a = 8), (o |= 16);
                break;
              case d:
                (a = 8), (o |= 1);
                break;
              case p:
                return (
                  ((e = Ea(12, n, t, 8 | o)).elementType = p),
                  (e.type = p),
                  (e.lanes = i),
                  e
                );
              case _:
                return (
                  ((e = Ea(13, n, t, o)).type = _),
                  (e.elementType = _),
                  (e.lanes = i),
                  e
                );
              case g:
                return (
                  ((e = Ea(19, n, t, o)).elementType = g), (e.lanes = i), e
                );
              case x:
                return ka(n, o, i, t);
              case S:
                return (
                  ((e = Ea(24, n, t, o)).elementType = S), (e.lanes = i), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case h:
                      a = 10;
                      break e;
                    case m:
                      a = 9;
                      break e;
                    case v:
                      a = 11;
                      break e;
                    case y:
                      a = 14;
                      break e;
                    case b:
                      (a = 16), (r = null);
                      break e;
                    case w:
                      a = 22;
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ea(a, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ta(e, t, n, r) {
          return ((e = Ea(7, e, r, t)).lanes = n), e;
        }
        function ka(e, t, n, r) {
          return ((e = Ea(23, e, r, t)).elementType = x), (e.lanes = n), e;
        }
        function Pa(e, t, n) {
          return ((e = Ea(6, e, null, t)).lanes = n), e;
        }
        function Oa(e, t, n) {
          return (
            ((t = Ea(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ca(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = $),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = bt(0)),
            (this.expirationTimes = bt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = bt(0)),
            K && (this.mutableSourceEagerHydrationData = null);
        }
        function Ma(e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(l(188));
            throw Error(l(268, Object.keys(e)));
          }
          return null === (e = z(t)) ? null : e.stateNode;
        }
        function za(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function La(e, t) {
          za(e, t), (e = e.alternate) && za(e, t);
        }
        function Ia(e) {
          return null === (e = z(e)) ? null : e.stateNode;
        }
        function Na() {
          return null;
        }
        return (
          (r.IsThisRendererActing = ha),
          (r.act = function (e) {
            function t() {
              ya--, (ni.current = n), (ha.current = r);
            }
            !1 === ba &&
              ((ba = !0),
              console.error(
                "act(...) is not supported in production builds of React, and might not behave as expected."
              )),
              ya++;
            var n = ni.current,
              r = ha.current;
            (ni.current = !0), (ha.current = !0);
            try {
              var o = Zi(e);
            } catch (i) {
              throw (t(), i);
            }
            if (
              null !== o &&
              "object" === typeof o &&
              "function" === typeof o.then
            )
              return {
                then: function (e, r) {
                  o.then(
                    function () {
                      1 < ya || (!0 === va && !0 === n)
                        ? (t(), e())
                        : ga(function (n) {
                            t(), n ? r(n) : e();
                          });
                    },
                    function (e) {
                      t(), r(e);
                    }
                  );
                },
              };
            try {
              1 !== ya || (!1 !== va && !1 !== n) || _a(), t();
            } catch (i) {
              throw (t(), i);
            }
            return {
              then: function (e) {
                e();
              },
            };
          }),
          (r.attemptContinuousHydration = function (e) {
            13 === e.tag && (Hi(e, 67108864, ji()), La(e, 67108864));
          }),
          (r.attemptHydrationAtCurrentPriority = function (e) {
            if (13 === e.tag) {
              var t = ji(),
                n = Di(e);
              Hi(e, n, t), La(e, n);
            }
          }),
          (r.attemptSynchronousHydration = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.hydrate) {
                  var n = mt(t.pendingLanes);
                  (t.expiredLanes |= n & t.pendingLanes),
                    Ui(t, Vt()),
                    0 === (48 & ri) && (gi(), $t());
                }
                break;
              case 13:
                var r = ji();
                Gi(function () {
                  return Hi(e, 1, r);
                }),
                  La(e, 4);
            }
          }),
          (r.attemptUserBlockingHydration = function (e) {
            13 === e.tag && (Hi(e, 4, ji()), La(e, 4));
          }),
          (r.batchedEventUpdates = function (e, t) {
            var n = ri;
            ri |= 2;
            try {
              return e(t);
            } finally {
              0 === (ri = n) && (gi(), $t());
            }
          }),
          (r.batchedUpdates = Zi),
          (r.createComponentSelector = function (e) {
            return { $$typeof: Uo, value: e };
          }),
          (r.createContainer = function (e, t, n) {
            return (
              (e = new Ca(e, t, n)),
              (t = Ea(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
              (e.current = t),
              (t.stateNode = e),
              hn(t),
              e
            );
          }),
          (r.createHasPsuedoClassSelector = function (e) {
            return { $$typeof: Bo, value: e };
          }),
          (r.createPortal = function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: c,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          }),
          (r.createRoleSelector = function (e) {
            return { $$typeof: Vo, value: e };
          }),
          (r.createTestNameSelector = function (e) {
            return { $$typeof: Wo, value: e };
          }),
          (r.createTextSelector = function (e) {
            return { $$typeof: Zo, value: e };
          }),
          (r.deferredUpdates = function (e) {
            return Gt(97, e);
          }),
          (r.discreteUpdates = function (e, t, n, r, o) {
            var i = ri;
            ri |= 4;
            try {
              return Gt(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (ri = i) && (gi(), $t());
            }
          }),
          (r.findAllNodes = Xo),
          (r.findBoundingRects = function (e, t) {
            if (!ie) throw Error(l(363));
            (t = Xo(e, t)), (e = []);
            for (var n = 0; n < t.length; n++) e.push(le(t[n]));
            for (t = e.length - 1; 0 < t; t--)
              for (
                var r = (n = e[t]).x,
                  o = r + n.width,
                  i = n.y,
                  a = i + n.height,
                  u = t - 1;
                0 <= u;
                u--
              )
                if (t !== u) {
                  var s = e[u],
                    c = s.x,
                    f = c + s.width,
                    d = s.y,
                    p = d + s.height;
                  if (r >= c && i >= d && o <= f && a <= p) {
                    e.splice(t, 1);
                    break;
                  }
                  if (!(r !== c || n.width !== s.width || p < i || d > a)) {
                    d > i && ((s.height += d - i), (s.y = i)),
                      p < a && (s.height = a - d),
                      e.splice(t, 1);
                    break;
                  }
                  if (!(i !== d || n.height !== s.height || f < r || c > o)) {
                    c > r && ((s.width += c - r), (s.x = r)),
                      f < o && (s.width = o - c),
                      e.splice(t, 1);
                    break;
                  }
                }
            return e;
          }),
          (r.findHostInstance = Ma),
          (r.findHostInstanceWithNoPortals = function (e) {
            return null ===
              (e = (function (e) {
                if (!(e = M(e))) return null;
                for (var t = e; ; ) {
                  if (5 === t.tag || 6 === t.tag) return t;
                  if (t.child && 4 !== t.tag)
                    (t.child.return = t), (t = t.child);
                  else {
                    if (t === e) break;
                    for (; !t.sibling; ) {
                      if (!t.return || t.return === e) return null;
                      t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                  }
                }
                return null;
              })(e))
              ? null
              : 20 === e.tag
              ? e.stateNode.instance
              : e.stateNode;
          }),
          (r.findHostInstanceWithWarning = function (e) {
            return Ma(e);
          }),
          (r.flushControlled = function (e) {
            var t = ri;
            ri |= 1;
            try {
              Gt(99, e);
            } finally {
              0 === (ri = t) && (gi(), $t());
            }
          }),
          (r.flushDiscreteUpdates = function () {
            0 === (49 & ri) &&
              ((function () {
                if (null !== Oi) {
                  var e = Oi;
                  (Oi = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), Ui(e, Vt());
                    });
                }
                $t();
              })(),
              aa());
          }),
          (r.flushPassiveEffects = aa),
          (r.flushSync = Gi),
          (r.focusWithin = function (e, t) {
            if (!ie) throw Error(l(363));
            for (
              t = qo((e = Qo(e)), t), t = Array.from(t), e = 0;
              e < t.length;

            ) {
              var n = t[e++];
              if (!se(n)) {
                if (5 === n.tag && fe(n.stateNode)) return !0;
                for (n = n.child; null !== n; ) t.push(n), (n = n.sibling);
              }
            }
            return !1;
          }),
          (r.getCurrentUpdateLanePriority = function () {
            return pt;
          }),
          (r.getFindAllNodesFailureDescription = function (e, t) {
            if (!ie) throw Error(l(363));
            var n = 0,
              r = [];
            e = [Qo(e), 0];
            for (var o = 0; o < e.length; ) {
              var i = e[o++],
                a = e[o++],
                u = t[a];
              if (
                (5 !== i.tag || !se(i)) &&
                ($o(i, u) && (r.push(Yo(u)), ++a > n && (n = a)), a < t.length)
              )
                for (i = i.child; null !== i; ) e.push(i, a), (i = i.sibling);
            }
            if (n < t.length) {
              for (e = []; n < t.length; n++) e.push(Yo(t[n]));
              return (
                "findAllNodes was able to match part of the selector:\n  " +
                r.join(" > ") +
                "\n\nNo matching component was found for:\n  " +
                e.join(" > ")
              );
            }
            return null;
          }),
          (r.getPublicRootInstance = function (e) {
            return (e = e.current).child
              ? 5 === e.child.tag
                ? N(e.child.stateNode)
                : e.child.stateNode
              : null;
          }),
          (r.injectIntoDevTools = function (e) {
            if (
              ((e = {
                bundleType: e.bundleType,
                version: e.version,
                rendererPackageName: e.rendererPackageName,
                rendererConfig: e.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: u.ReactCurrentDispatcher,
                findHostInstanceByFiber: Ia,
                findFiberByHostInstance: e.findFiberByHostInstance || Na,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
              }),
              "undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
            )
              e = !1;
            else {
              var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (!t.isDisabled && t.supportsFiber)
                try {
                  (ft = t.inject(e)), (dt = t);
                } catch (n) {}
              e = !0;
            }
            return e;
          }),
          (r.observeVisibleRects = function (e, t, n, r) {
            if (!ie) throw Error(l(363));
            e = Xo(e, t);
            var o = de(e, n, r).disconnect;
            return {
              disconnect: function () {
                o();
              },
            };
          }),
          (r.registerMutableSourceForHydration = function (e, t) {
            var n = t._getVersion;
            (n = n(t._source)),
              null == e.mutableSourceEagerHydrationData
                ? (e.mutableSourceEagerHydrationData = [t, n])
                : e.mutableSourceEagerHydrationData.push(t, n);
          }),
          (r.runWithPriority = function (e, t) {
            var n = pt;
            try {
              return (pt = e), t();
            } finally {
              pt = n;
            }
          }),
          (r.shouldSuspend = function () {
            return !1;
          }),
          (r.unbatchedUpdates = function (e, t) {
            var n = ri;
            (ri &= -2), (ri |= 8);
            try {
              return e(t);
            } finally {
              0 === (ri = n) && (gi(), $t());
            }
          }),
          (r.updateContainer = function (e, t, n, r) {
            var o = t.current,
              i = ji(),
              a = Di(o);
            e: if (n) {
              t: {
                if (O((n = n._reactInternals)) !== n || 1 !== n.tag)
                  throw Error(l(170));
                var u = n;
                do {
                  switch (u.tag) {
                    case 3:
                      u = u.stateNode.context;
                      break t;
                    case 1:
                      if (it(u.type)) {
                        u =
                          u.stateNode.__reactInternalMemoizedMergedChildContext;
                        break t;
                      }
                  }
                  u = u.return;
                } while (null !== u);
                throw Error(l(171));
              }
              if (1 === n.tag) {
                var s = n.type;
                if (it(s)) {
                  n = ut(n, s, u);
                  break e;
                }
              }
              n = u;
            } else n = et;
            return (
              null === t.context ? (t.context = n) : (t.pendingContext = n),
              ((t = vn(i, a)).payload = { element: e }),
              null !== (r = void 0 === r ? null : r) && (t.callback = r),
              _n(o, t),
              Hi(o, a, i),
              a
            );
          }),
          r
        );
      };
    },
    6525: function (e, t, n) {
      "use strict";
      e.exports = n(7287);
    },
    6037: function (e, t, n) {
      !(function (e, t) {
        function n(e) {
          if (e && e.__esModule) return e;
          var t = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (n) {
                if ("default" !== n) {
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  Object.defineProperty(
                    t,
                    n,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[n];
                          },
                        }
                  );
                }
              }),
            (t.default = e),
            t
          );
        }
        var r = n(t);
        function o() {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            o.apply(this, arguments)
          );
        }
        var i = "Left",
          a = "Right",
          l = "Up",
          u = "Down",
          s = {
            delta: 10,
            preventDefaultTouchmoveEvent: !1,
            rotationAngle: 0,
            trackMouse: !1,
            trackTouch: !0,
          },
          c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
          f = "mousemove",
          d = "mouseup",
          p = "touchend",
          h = "touchmove",
          m = "touchstart";
        function v(e, t, n, r) {
          return e > t ? (n > 0 ? a : i) : r > 0 ? u : l;
        }
        function _(e, t) {
          if (0 === t) return e;
          var n = (Math.PI / 180) * t;
          return [
            e[0] * Math.cos(n) + e[1] * Math.sin(n),
            e[1] * Math.cos(n) - e[0] * Math.sin(n),
          ];
        }
        function g(e, t) {
          var n = function (t) {
              (t && "touches" in t && t.touches.length > 1) ||
                e(function (e, n) {
                  n.trackMouse &&
                    (document.addEventListener(f, r),
                    document.addEventListener(d, l));
                  var i = "touches" in t ? t.touches[0] : t,
                    a = _([i.clientX, i.clientY], n.rotationAngle);
                  return o({}, e, c, {
                    initial: [].concat(a),
                    xy: a,
                    start: t.timeStamp || 0,
                  });
                });
            },
            r = function (t) {
              e(function (e, n) {
                if ("touches" in t && t.touches.length > 1) return e;
                var r = "touches" in t ? t.touches[0] : t,
                  i = _([r.clientX, r.clientY], n.rotationAngle),
                  a = i[0],
                  l = i[1],
                  u = a - e.xy[0],
                  c = l - e.xy[1],
                  f = Math.abs(u),
                  d = Math.abs(c),
                  p = (t.timeStamp || 0) - e.start,
                  h = Math.sqrt(f * f + d * d) / (p || 1),
                  m = [u / (p || 1), c / (p || 1)],
                  g = v(f, d, u, c),
                  y =
                    "number" === typeof n.delta
                      ? n.delta
                      : n.delta[g.toLowerCase()] || s.delta;
                if (f < y && d < y && !e.swiping) return e;
                var b = {
                  absX: f,
                  absY: d,
                  deltaX: u,
                  deltaY: c,
                  dir: g,
                  event: t,
                  first: e.first,
                  initial: e.initial,
                  velocity: h,
                  vxvy: m,
                };
                b.first && n.onSwipeStart && n.onSwipeStart(b),
                  n.onSwiping && n.onSwiping(b);
                var w = !1;
                return (
                  (n.onSwiping || n.onSwiped || "onSwiped" + g in n) &&
                    (w = !0),
                  w &&
                    n.preventDefaultTouchmoveEvent &&
                    n.trackTouch &&
                    t.cancelable &&
                    t.preventDefault(),
                  o({}, e, { first: !1, eventData: b, swiping: !0 })
                );
              });
            },
            i = function (t) {
              e(function (e, n) {
                var r;
                if (e.swiping && e.eventData) {
                  (r = o({}, e.eventData, { event: t })),
                    n.onSwiped && n.onSwiped(r);
                  var i = n["onSwiped" + r.dir];
                  i && i(r);
                } else n.onTap && n.onTap({ event: t });
                return o({}, e, c, { eventData: r });
              });
            },
            a = function () {
              document.removeEventListener(f, r),
                document.removeEventListener(d, l);
            },
            l = function (e) {
              a(), i(e);
            },
            u = function (e, t) {
              var o = function () {};
              if (e && e.addEventListener) {
                var a = [
                  [m, n],
                  [h, r],
                  [p, i],
                ];
                a.forEach(function (n) {
                  var r = n[0],
                    o = n[1];
                  return e.addEventListener(r, o, { passive: t });
                }),
                  (o = function () {
                    return a.forEach(function (t) {
                      var n = t[0],
                        r = t[1];
                      return e.removeEventListener(n, r);
                    });
                  });
              }
              return o;
            },
            g = {
              ref: function (t) {
                null !== t &&
                  e(function (e, n) {
                    if (e.el === t) return e;
                    var r = {};
                    return (
                      e.el &&
                        e.el !== t &&
                        e.cleanUpTouch &&
                        (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                      n.trackTouch &&
                        t &&
                        (r.cleanUpTouch = u(
                          t,
                          !n.preventDefaultTouchmoveEvent
                        )),
                      o({}, e, { el: t }, r)
                    );
                  });
              },
            };
          return t.trackMouse && (g.onMouseDown = n), [g, u];
        }
        function y(e, t, n) {
          var r = {};
          return (
            !t.trackTouch && e.cleanUpTouch
              ? (e.cleanUpTouch(), (r.cleanUpTouch = void 0))
              : t.trackTouch &&
                !e.cleanUpTouch &&
                e.el &&
                (r.cleanUpTouch = n(e.el, !t.preventDefaultTouchmoveEvent)),
            o({}, e, r)
          );
        }
        function b(e) {
          var t = e.trackMouse,
            n = r.useRef(o({}, c)),
            i = r.useRef(o({}, s));
          i.current = o({}, s, e, {
            delta: void 0 === e.delta ? s.delta : e.delta,
            rotationAngle:
              void 0 === e.rotationAngle ? s.rotationAngle : e.rotationAngle,
            trackTouch: void 0 === e.trackTouch ? s.trackTouch : e.trackTouch,
          });
          var a = r.useMemo(
              function () {
                return g(
                  function (e) {
                    return (n.current = e(n.current, i.current));
                  },
                  { trackMouse: t }
                );
              },
              [t]
            ),
            l = a[0],
            u = a[1];
          return (n.current = y(n.current, i.current, u)), l;
        }
        (e.DOWN = u),
          (e.LEFT = i),
          (e.RIGHT = a),
          (e.UP = l),
          (e.useSwipeable = b);
      })(t, n(7294));
    },
    1033: function (e, t, n) {
      "use strict";
      var r = (function () {
          if ("undefined" !== typeof Map) return Map;
          function e(e, t) {
            var n = -1;
            return (
              e.some(function (e, r) {
                return e[0] === t && ((n = r), !0);
              }),
              n
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var n = e(this.__entries__, t),
                  r = this.__entries__[n];
                return r && r[1];
              }),
              (t.prototype.set = function (t, n) {
                var r = e(this.__entries__, t);
                ~r
                  ? (this.__entries__[r][1] = n)
                  : this.__entries__.push([t, n]);
              }),
              (t.prototype.delete = function (t) {
                var n = this.__entries__,
                  r = e(n, t);
                ~r && n.splice(r, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                  var o = r[n];
                  e.call(t, o[1], o[0]);
                }
              }),
              t
            );
          })();
        })(),
        o =
          "undefined" !== typeof window &&
          "undefined" !== typeof document &&
          window.document === document,
        i =
          "undefined" !== typeof n.g && n.g.Math === Math
            ? n.g
            : "undefined" !== typeof self && self.Math === Math
            ? self
            : "undefined" !== typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        a =
          "function" === typeof requestAnimationFrame
            ? requestAnimationFrame.bind(i)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              };
      var l = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        u = "undefined" !== typeof MutationObserver,
        s = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var n = !1,
                  r = !1,
                  o = 0;
                function i() {
                  n && ((n = !1), e()), r && u();
                }
                function l() {
                  a(i);
                }
                function u() {
                  var e = Date.now();
                  if (n) {
                    if (e - o < 2) return;
                    r = !0;
                  } else (n = !0), (r = !1), setTimeout(l, t);
                  o = e;
                }
                return u;
              })(this.refresh.bind(this), 20));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                n = t.indexOf(e);
              ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              o &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                u
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              o &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                n = void 0 === t ? "" : t;
              l.some(function (e) {
                return !!~n.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        c = function (e, t) {
          for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            Object.defineProperty(e, o, {
              value: t[o],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        f = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || i;
        },
        d = g(0, 0, 0, 0);
      function p(e) {
        return parseFloat(e) || 0;
      }
      function h(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function (t, n) {
          return t + p(e["border-" + n + "-width"]);
        }, 0);
      }
      function m(e) {
        var t = e.clientWidth,
          n = e.clientHeight;
        if (!t && !n) return d;
        var r = f(e).getComputedStyle(e),
          o = (function (e) {
            for (
              var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
              n < r.length;
              n++
            ) {
              var o = r[n],
                i = e["padding-" + o];
              t[o] = p(i);
            }
            return t;
          })(r),
          i = o.left + o.right,
          a = o.top + o.bottom,
          l = p(r.width),
          u = p(r.height);
        if (
          ("border-box" === r.boxSizing &&
            (Math.round(l + i) !== t && (l -= h(r, "left", "right") + i),
            Math.round(u + a) !== n && (u -= h(r, "top", "bottom") + a)),
          !(function (e) {
            return e === f(e).document.documentElement;
          })(e))
        ) {
          var s = Math.round(l + i) - t,
            c = Math.round(u + a) - n;
          1 !== Math.abs(s) && (l -= s), 1 !== Math.abs(c) && (u -= c);
        }
        return g(o.left, o.top, l, u);
      }
      var v =
        "undefined" !== typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof f(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof f(e).SVGElement && "function" === typeof e.getBBox
              );
            };
      function _(e) {
        return o
          ? v(e)
            ? (function (e) {
                var t = e.getBBox();
                return g(0, 0, t.width, t.height);
              })(e)
            : m(e)
          : d;
      }
      function g(e, t, n, r) {
        return { x: e, y: t, width: n, height: r };
      }
      var y = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = g(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = _(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        b = function (e, t) {
          var n = (function (e) {
            var t = e.x,
              n = e.y,
              r = e.width,
              o = e.height,
              i =
                "undefined" !== typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object,
              a = Object.create(i.prototype);
            return (
              c(a, {
                x: t,
                y: n,
                width: r,
                height: o,
                top: n,
                right: t + r,
                bottom: o + n,
                left: t,
              }),
              a
            );
          })(t);
          c(this, { target: e, contentRect: n });
        },
        w = (function () {
          function e(e, t, n) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new r()),
              "function" !== typeof e)
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = n);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(e instanceof f(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new y(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" !== typeof Element && Element instanceof Object) {
                if (!(e instanceof f(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new b(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        E = "undefined" !== typeof WeakMap ? new WeakMap() : new r(),
        x = function e(t) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var n = s.getInstance(),
            r = new w(t, n, this);
          E.set(this, r);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        x.prototype[e] = function () {
          var t;
          return (t = E.get(this))[e].apply(t, arguments);
        };
      });
      var S = "undefined" !== typeof i.ResizeObserver ? i.ResizeObserver : x;
      t.Z = S;
    },
    8667: function (e, t, n) {
      "use strict";
      n.d(t, {
        qf: function () {
          return o;
        },
      });
      var r = n(2212);
      const o = (e, t) => {
          const n = null !== e[0].index,
            o = new Set(Object.keys(e[0].attributes)),
            a = new Set(Object.keys(e[0].morphAttributes)),
            l = {},
            u = {},
            s = e[0].morphTargetsRelative,
            c = new r.BufferGeometry();
          let f = 0;
          if (
            (e.forEach((e, r) => {
              let i = 0;
              if (n !== (null !== e.index))
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                      r +
                      ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."
                  ),
                  null
                );
              for (let t in e.attributes) {
                if (!o.has(t))
                  return (
                    console.error(
                      "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                        r +
                        '. All geometries must have compatible attributes; make sure "' +
                        t +
                        '" attribute exists among all geometries, or in none of them.'
                    ),
                    null
                  );
                void 0 === l[t] && (l[t] = []), l[t].push(e.attributes[t]), i++;
              }
              if (i !== o.size)
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                      r +
                      ". Make sure all geometries have the same number of attributes."
                  ),
                  null
                );
              if (s !== e.morphTargetsRelative)
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                      r +
                      ". .morphTargetsRelative must be consistent throughout all geometries."
                  ),
                  null
                );
              for (let t in e.morphAttributes) {
                if (!a.has(t))
                  return (
                    console.error(
                      "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                        r +
                        ".  .morphAttributes must be consistent throughout all geometries."
                    ),
                    null
                  );
                void 0 === u[t] && (u[t] = []), u[t].push(e.morphAttributes[t]);
              }
              if (
                ((c.userData.mergedUserData = c.userData.mergedUserData || []),
                c.userData.mergedUserData.push(e.userData),
                t)
              ) {
                let t;
                if (e.index) t = e.index.count;
                else {
                  if (void 0 === e.attributes.position)
                    return (
                      console.error(
                        "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                          r +
                          ". The geometry must have either an index or a position attribute"
                      ),
                      null
                    );
                  t = e.attributes.position.count;
                }
                c.addGroup(f, t, r), (f += t);
              }
            }),
            n)
          ) {
            let t = 0;
            const n = [];
            e.forEach((e) => {
              const r = e.index;
              for (let o = 0; o < r.count; ++o) n.push(r.getX(o) + t);
              t += e.attributes.position.count;
            }),
              c.setIndex(n);
          }
          for (let r in l) {
            const e = i(l[r]);
            if (!e)
              return (
                console.error(
                  "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " +
                    r +
                    " attribute."
                ),
                null
              );
            c.setAttribute(r, e);
          }
          for (let r in u) {
            const e = u[r][0].length;
            if (0 === e) break;
            (c.morphAttributes = c.morphAttributes || {}),
              (c.morphAttributes[r] = []);
            for (let t = 0; t < e; ++t) {
              const e = [];
              for (let o = 0; o < u[r].length; ++o) e.push(u[r][o][t]);
              const n = i(e);
              if (!n)
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " +
                      r +
                      " morphAttribute."
                  ),
                  null
                );
              c.morphAttributes[r].push(n);
            }
          }
          return c;
        },
        i = (e) => {
          let t,
            n,
            o,
            i = 0;
          if (
            (e.forEach(
              (e) => (
                void 0 === t && (t = e.array.constructor),
                t !== e.array.constructor
                  ? (console.error(
                      "THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."
                    ),
                    null)
                  : (void 0 === n && (n = e.itemSize),
                    n !== e.itemSize
                      ? (console.error(
                          "THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."
                        ),
                        null)
                      : (void 0 === o && (o = e.normalized),
                        o !== e.normalized
                          ? (console.error(
                              "THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."
                            ),
                            null)
                          : void (i += e.array.length)))
              )
            ),
            t && n)
          ) {
            const a = new t(i);
            let l = 0;
            return (
              e.forEach((e) => {
                a.set(e.array, l), (l += e.array.length);
              }),
              new r.BufferAttribute(a, n, o)
            );
          }
        };
    },
    4942: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    7247: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          r(e)
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    5959: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          r(e, t)
        );
      }
      function o(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    2179: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(4027);
      function o(e, t) {
        if (t && ("object" === r(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
    },
    7812: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(2587);
      var o = n(2937);
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (0, o.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
  },
]);
