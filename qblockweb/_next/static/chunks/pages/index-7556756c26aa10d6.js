(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8792: function (e, n, t) {
      "use strict";
      var r = t(9008),
        o = t.n(r),
        a = t(1691),
        i = t(5572),
        c = t(5893);
      n.Z = function (e) {
        var n = e.title,
          t = e.includeSiteTitle,
          r = void 0 === t || t,
          l = e.description,
          s = e.path,
          u = (0, a.g)().t,
          f = r ? "".concat(n, " | ").concat(u("meta.siteTitle")) : n,
          d = l || u("meta.description"),
          p = "".concat(u("meta.domain"), "/").concat(s),
          m = ""
            .concat(u("meta.domain"))
            .concat((0, i.w)("images/shared/social-share.png"));
        return (0, c.jsxs)(o(), {
          children: [
            (0, c.jsx)("title", {
              children: f,
            }),
            (0, c.jsx)("meta", {
              name: "description",
              content: d,
            }),
            (0, c.jsx)("meta", {
              property: "og:type",
              content: "website",
            }),
            (0, c.jsx)("meta", {
              property: "og:url",
              content: p,
            }),
            (0, c.jsx)("meta", {
              property: "og:site_name",
              content: f,
            }),
            (0, c.jsx)("meta", {
              property: "og:title",
              content: f,
            }),
            (0, c.jsx)("meta", {
              property: "og:description",
              content: d,
            }),
            (0, c.jsx)("meta", {
              property: "og:image",
              content: m,
            }),
            (0, c.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, c.jsx)("link", {
              rel: "apple-touch-icon",
              href: "/apple-touch-icon.png",
            }),
            (0, c.jsx)("meta", {
              name: "apple-mobile-web-app-capable",
              content: "yes",
            }),
            (0, c.jsx)("meta", {
              name: "apple-mobile-web-app-status-bar-style",
              content: "black",
            }),
            (0, c.jsx)("link", {
              rel: "canonical",
              href: p,
            }),
          ],
        });
      };
    },
    2352: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return yn;
          },
          default: function () {
            return wn;
          },
        });
      var r = t(7294),
        o = t(8792),
        a = t(9499),
        i = t(9251),
        c = t(1033),
        l = t(1758),
        s = t(7854),
        u = t(9040),
        f = t(3758),
        d = t(3520),
        p = t(587),
        m = t(9888),
        v = t(990),
        g = t(5317),
        x = t(4184),
        h = t.n(x),
        b = t(2212),
        y = t(8667);

      function w(e, n, t) {
        var r = Math.sqrt(Math.pow(n, 2) / 2),
          o = e / 2,
          a = o - r,
          i = o - r / 2,
          c = 2 * a,
          l = new b.BufferGeometry(),
          s = new b.Float32BufferAttribute([0, 0, 0, 0, 0, 0]),
          u = [];
        u.push(new b.Vector3(a, o, a)),
          u.push(new b.Vector3(a, a, o)),
          u.push(new b.Vector3(o, a, a));
        var f = new b.BufferGeometry().setFromPoints(u);
        f.computeVertexNormals(),
          f.setAttribute("uv", new b.Float32BufferAttribute(s, 2));
        var d = [];
        d.push(new b.Vector3(-a, o, a)),
          d.push(new b.Vector3(-o, a, a)),
          d.push(new b.Vector3(-a, a, o));
        var p = new b.BufferGeometry().setFromPoints(d);
        p.computeVertexNormals(),
          p.setAttribute("uv", new b.Float32BufferAttribute(s, 2));
        var m = [];
        m.push(new b.Vector3(o, -a, a)),
          m.push(new b.Vector3(a, -a, o)),
          m.push(new b.Vector3(a, -o, a));
        var v = new b.BufferGeometry().setFromPoints(m);
        v.computeVertexNormals(),
          v.setAttribute("uv", new b.Float32BufferAttribute(s, 2));
        var g = [];
        g.push(new b.Vector3(-a, -o, a)),
          g.push(new b.Vector3(-a, -a, o)),
          g.push(new b.Vector3(-o, -a, a));
        var x = new b.BufferGeometry().setFromPoints(g);
        x.computeVertexNormals(),
          x.setAttribute("uv", new b.Float32BufferAttribute(s, 2));
        var h = new b.PlaneBufferGeometry(n, c, 1, t);
        h.rotateZ(0.5 * Math.PI),
          h.rotateX(-0.25 * Math.PI),
          h.translate(0, i, i);
        var w = new b.PlaneBufferGeometry(n, c, 1, t);
        w.rotateY(0.25 * Math.PI), w.translate(i, 0, i);
        var _ = new b.PlaneBufferGeometry(n, c, 1, t);
        _.rotateX(-0.5 * Math.PI),
          _.rotateZ(-0.25 * Math.PI),
          _.translate(i, i, 0);
        var C = new b.PlaneBufferGeometry(n, c, 1, t);
        C.rotateX(0.5 * Math.PI),
          C.rotateZ(0.25 * Math.PI),
          C.translate(i, -i, 0);
        var k = new b.PlaneBufferGeometry(n, c, 1, t);
        k.rotateZ(0.5 * Math.PI),
          k.rotateX(0.25 * Math.PI),
          k.translate(0, -i, i);
        var P = new b.PlaneBufferGeometry(n, c, 1, t);
        P.rotateY(-0.25 * Math.PI), P.translate(-i, 0, i);
        var j = new b.PlaneBufferGeometry(c, c, t, t);
        j.translate(0, 0, o);
        var M = new b.PlaneBufferGeometry(c, c, t, t);
        M.rotateY(0.5 * Math.PI), M.translate(o, 0, 0);
        var O = (l = (0, y.qf)(
          [
            f,
            p,
            v,
            x,
            h.toNonIndexed(),
            w.toNonIndexed(),
            _.toNonIndexed(),
            C.toNonIndexed(),
            k.toNonIndexed(),
            P.toNonIndexed(),
            j.toNonIndexed(),
            M.toNonIndexed(),
          ],
          !0
        )).clone();
        O.rotateY(Math.PI);
        var I = new b.PlaneBufferGeometry(c, c, t, t);
        I.rotateX(0.5 * -Math.PI), I.translate(0, o, 0);
        var N = new b.PlaneBufferGeometry(c, c, t, t);
        return (
          N.rotateX(0.5 * Math.PI),
          N.translate(0, -o, 0),
          (l = (0, y.qf)([l, O, I.toNonIndexed(), N.toNonIndexed()], !0))
        );
      }
      var _ = t(2777),
        C = t(2262),
        k = t(5959),
        P = t(2179),
        j = t(7247);

      function M(e) {
        var n = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = (0, j.Z)(e);
          if (n) {
            var o = (0, j.Z)(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return (0, P.Z)(this, t);
        };
      }
      var O = (function (e) {
        (0, k.Z)(t, e);
        var n = M(t);

        function t(e) {
          (0, _.Z)(this, t);
          var r = t.colorToVec3("#C0C0C0");
          return n.call(this, {
            uniforms: {
              text: {
                value: null,
              },
              matCapText: {
                value: null,
              },
              env: {
                value: null,
              },
              twistDirection: {
                value: [1, 0, 0],
              },
              baseColor: {
                value: r,
              },
            },
            vertexShader:
              "uniform vec3 twistDirection;\n\nvarying vec3 vFakeUVW; //used for texture map cube lookup\nvarying vec4 vPosition; // raw values after twist in model space\nvarying vec4 vPos; // times modelViewMatrix \nvarying vec4 vPosProj; // times projection matrix\nvarying vec3 vNormal; // raw values after twist \nvarying vec3 vNorm; //times normal matrix\nvarying vec3 vNormMod; // times modelMatrix\nvarying vec3 vWorldNormal; //times modelViewMatrix\nvarying vec3 vEyeVec; // vertexWorldPosition - cameraPosition\n\nconst float PI = 3.141592653;\nconst float twistAmount = 1.0;\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    float xs = axis.x * s;\n    float ys = axis.y * s;\n    float zs = axis.z * s;\n    return mat4(oc * axis.x * axis.x + c,   oc * axis.x * axis.y - zs,  oc * axis.z * axis.x + ys,  0.0,\n                oc * axis.x * axis.y + zs,  oc * axis.y * axis.y + c,   oc * axis.y * axis.z - xs,  0.0,\n                oc * axis.z * axis.x - ys,  oc * axis.y * axis.z + xs,  oc * axis.z * axis.z + c,   0.0,\n                0.0,                        0.0,                        0.0,                        1.0);\n}\n\nvoid main() {    \n    vec3 dir = normalize(twistDirection); // +- xyz\n    float dist = dot(dir, position.xyz);  // distance of vertex along the twist direction\n    float twistProp = twistAmount * (-PI / 2.0 * (dist + 0.5));  // amount of rotation around the twist direction\n    mat4 roatation = rotationMatrix(dir, twistProp);  \n\n    vFakeUVW = position;\n    vPosition = roatation * vec4(position, 1.0);\n\n    vNormal = vec4(roatation * vec4( normal, 0.0)).xyz;\n    vWorldNormal = normalize( modelViewMatrix * vec4(normal, 0.0)).xyz;\n\n    vec4 worldPosition = modelMatrix * vPosition; \n\tvEyeVec = normalize(worldPosition.xyz - cameraPosition * .7);\n\n\n    vPos = modelViewMatrix * vPosition; \n    vNorm = normalMatrix * vNormal; \n    vPosProj = projectionMatrix * vPos;\n    vNormMod = vec3(modelMatrix  * vec4(vNormal, 0.0)).xyz;\n\n    gl_Position = vPosProj;\n}\n\n",
            fragmentShader:
              "/* --------------------------\nIncludes code from SubScatter Vertex Shader:\n\nFake sub-surface scatter lighting shader by InvalidPointer 2008.\nhttp://www.gamedev.net/community/forums/topic.asp?topic_id=481494\n \nHLSL > GLSL translation\ntoneburst 2008\n\nGLSL > THREE.JS Comaptible translation\nthisispete 2021\n-------------------------- */\n\nuniform vec3 baseColor;\n\nuniform samplerCube text;\nuniform samplerCube env;\nuniform sampler2D matCapText;\n\nvec3 specColor = vec3(0.92);\nvec3 lightPosition = vec3(0.0, 0.0, -0.1);\nfloat materialThickness = 0.78;\nfloat specPower = 0.1;\nfloat ior = 1.67;\nint sssPow = 2;\nfloat sssMix = 0.33;\nint reflectPow = 1;\nfloat reflectMix = 0.18;\nfloat matCapMix = 0.18;\nfloat tfMix = 2.0;\nvec3 tfLightPos = vec3(0.0, -0.1, -0.65);\nfloat tfThickness = 1234.0; //# Thin film thickness (in nm) 0 3000 \nfloat externalIOR = 1.82; //# External (air) refractive index 0.2 3\nfloat thinfilmIOR = 2.11; //# Layer (thin film) refractive index 0.2 3\nfloat internalIOR = 2.37; //# Internal (object) refractive index 0.2 3\nfloat tfN = 1.6; //# Blinn-Phong microfacet exponent 1 1000\n\nvarying vec3 vFakeUVW;\nvarying vec4 vPosition;\nvarying vec3 vNorm; \nvarying vec3 vEyeVec;\nvarying vec3 vWorldNormal;\nvarying vec3 vNormMod;\nvarying vec4 vPosProj;\n \n  \nconst float PI = 3.14159265; \n\nfloat halfLambert(in vec3 vect1, in vec3 vect2) {\n    float product = dot(vect1, vect2);\n    return product * 0.5 + 0.5;\n}\n \nfloat blinnPhongSpecular(in vec3 normalVec, in vec3 lightVec, in float specPower) {\n    vec3 halfAngle = normalize(normalVec + lightVec);\n    return pow(clamp(0.0,1.0,dot(normalVec, halfAngle)), specPower);\n}\n  \n\nvec4 subScatter(in vec3 vertPos, in vec3 wNorm) {\n    float RimScalar = 0.2;\n    float attenuation = .9 * (1.0 / distance(lightPosition, vertPos));\n    vec3 eVec = normalize(-vertPos);\n    vec3 lVec = normalize( lightPosition - vertPos);\n     \n    vec4 dotLN = vec4(halfLambert(lVec, wNorm) * attenuation);\n     \n    vec3 indirectLightComponent = vec3(materialThickness * max(0.0, dot(-wNorm, lVec)));\n    indirectLightComponent += materialThickness * halfLambert(-eVec, lVec);\n    indirectLightComponent *= attenuation;\n     \n    vec3 rim = vec3(1.0 - max(0.0, dot(wNorm, eVec)));\n    rim *= rim;\n    rim *= max(0.0, dot(wNorm, lVec)) * specColor.rgb;\n     \n    vec4 finalCol = dotLN + vec4(indirectLightComponent, 1.0);\n    finalCol.rgb += (rim * RimScalar * attenuation * finalCol.a);\n    finalCol.rgb += vec3(blinnPhongSpecular(wNorm, lVec, specPower) * attenuation * specColor * finalCol.a * 0.05);\n    finalCol.rgb *= vec3(1.0);\n\n    return finalCol;    \n}\n\n\n\n/* Amplitude reflection coefficient (s-polarized) */ \nfloat rs(float n1, float n2, float cosI, float cosT) { \n    return (n1 * cosI - n2 * cosT) / (n1 * cosI + n2 * cosT); \n} \n\n/* Amplitude reflection coefficient (p-polarized) */ \nfloat rp(float n1, float n2, float cosI, float cosT) { \n    return (n2 * cosI - n1 * cosT) / (n1 * cosT + n2 * cosI); \n} \n\n/* Amplitude transmission coefficient (s-polarized) */ \n\nfloat ts(float n1, float n2, float cosI, float cosT) { \n    return 2.0 * n1 * cosI / (n1 * cosI + n2 * cosT); \n} \n\n/* Amplitude transmission coefficient (p-polarized) */ \nfloat tp(float n1, float n2, float cosI, float cosT) { \n    return 2.0 * n1 * cosI / (n1 * cosT + n2 * cosI); \n} \n\n/* Pass the incident cosine. */ \nvec3 FresnelCoating(float cos0) { \n    /* Precompute the reflection phase changes (depends on IOR) */ \n    float delta10 = (thinfilmIOR < externalIOR) ? PI : 0.0; \n    float delta12 = (thinfilmIOR < internalIOR) ? PI : 0.0; \n    float delta = delta10 + delta12; \n    \n    /* Calculate the thin film layer (and transmitted) angle cosines. */ \n    float sin1 = pow(externalIOR / thinfilmIOR, 2.0) * (1.0 - pow(cos0, 2.0)); \n    float sin2 = pow(externalIOR / internalIOR, 2.0) * (1.0 - pow(cos0, 2.0)); \n    if ((sin1 > 1.0) || (sin2 > 1.0)) return vec3(1.0); \n    \n    /* Account for TIR. */ \n    float cos1 = sqrt(1.0 - sin1), cos2 = sqrt(1.0 - sin2); \n\n    /* Calculate the interference phase change. */ \n    vec3 phi = vec3(2.0 * thinfilmIOR * tfThickness * cos1); \n    phi *= 2.0 * PI / vec3(650.0, 510.0, 475.0); \n    phi += delta; \n    \n    /* Obtain the various Fresnel amplitude coefficients. */ \n    float alpha_s = rs(thinfilmIOR, externalIOR, cos1, cos0) * rs(thinfilmIOR, internalIOR, cos1, cos2); \n    float alpha_p = rp(thinfilmIOR, externalIOR, cos1, cos0) * rp(thinfilmIOR, internalIOR, cos1, cos2); \n    float beta_s = ts(externalIOR, thinfilmIOR, cos0, cos1) * ts(thinfilmIOR, internalIOR, cos1, cos2); \n    float beta_p = tp(externalIOR, thinfilmIOR, cos0, cos1) * tp(thinfilmIOR, internalIOR, cos1, cos2); \n    \n    /* Calculate the s- and p-polarized intensity transmission coefficient. */ \n    vec3 ts = pow(beta_s, 2.0) / (pow(alpha_s, 2.0) - 2.0 * alpha_s * cos(phi) + 1.0); \n    vec3 tp = pow(beta_p, 2.0) / (pow(alpha_p, 2.0) - 2.0 * alpha_p * cos(phi) + 1.0); \n    \n    /* Calculate the transmitted power ratio for medium change. */ \n    float beamRatio = (internalIOR * cos2) / (externalIOR * cos0); \n    \n    /* Calculate the average reflectance. */ \n    return 1.0 - beamRatio * (ts + tp) * 0.5; \n} \n\nvec4 thinFilm(in vec3 vertexPos, in vec3 vertexNormal) { \n    vec3 H = normalize(tfLightPos + normalize(vertexPos)); \n    float val = pow(max(0.0, dot(vertexNormal, H)), tfN); \n    return vec4(vec3(val) * FresnelCoating(dot(vertexPos, H)), 1.0); \n} \n\nvec4 matCap(in vec3 normal, in vec3 eyeVec) {\n  vec3 r = reflect( eyeVec, normal );\n  float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );\n  vec2 vN = r.xy / m + .5;\n\n  return texture2D( matCapText, vN );\n}\n\nvoid main() {\n\n    vec4 baseColor = vec4(baseColor, 1);\n    vec4 textureMapcolor = textureCube(text, vFakeUVW);\n    vec4 refractColor = textureCube(env, refract(vEyeVec, vNormMod, 1.0 / ior));\n    vec4 reflectColor = pow(textureCube(env, reflect(vEyeVec, vNormMod )), vec4(reflectPow));\n    vec4 sssColor = pow(subScatter(vPosProj.xyz, vNorm), vec4(sssPow));\n    vec4 matCapColor = matCap(vNorm, vWorldNormal - vEyeVec);\n    vec4 thinFilmColor = thinFilm(vPosition.xyz, vNormMod);\n\n    vec4 color = baseColor;\n    color = mix(color, textureMapcolor, 0.55);\n    color = mix(color, refractColor, vWorldNormal.z *.8 + .2);\n    color = mix(color, sssColor, sssMix);\n    color = mix(color, reflectColor, reflectMix); \n    color = mix(color, color + matCapColor, matCapMix);\n    color = mix(color, color + thinFilmColor, vWorldNormal.x *.5 +tfMix/2.0); \n\n    gl_FragColor = color;\n}\n",
          });
        }
        return (
          (0, C.Z)(t, [
            {
              key: "text",
              get: function () {
                return this.uniforms.text.value;
              },
              set: function (e) {
                this.uniforms.text.value = e;
              },
            },
            {
              key: "matCapText",
              get: function () {
                return this.uniforms.matCapText.value;
              },
              set: function (e) {
                this.uniforms.matCapText.value = e;
              },
            },
            {
              key: "env",
              get: function () {
                return this.uniforms.env.value;
              },
              set: function (e) {
                this.uniforms.env.value = e;
              },
            },
            {
              key: "twistDirection",
              get: function () {
                return this.uniforms.twistDirection.value;
              },
              set: function (e) {
                this.uniforms.twistDirection.value = [e.x, e.y, e.z];
              },
            },
            {
              key: "baseColor",
              get: function () {
                return this.uniforms.baseColor.value;
              },
              set: function (e) {
                this.uniforms.baseColor.value = t.colorToVec3(e);
              },
            },
          ]),
          t
        );
      })(b.ShaderMaterial);
      (0, a.Z)(O, "colorToVec3", function (e) {
        var n = v.ZP.utils.splitColor(e);
        return new b.Vector3(n[0] / 255, n[1] / 255, n[2] / 255);
      }),
        (0, i.l7)({
          TimeCrystalMaterial: O,
        });
      var I,
        N = "playing",
        B = "paused",
        Z = "uninitialized",
        R = "buffering",
        z = "ready",
        T = "completed",
        S = "play",
        E = "bufffering",
        F = "mute",
        A = "unmute",
        V = "Cyber Goth",
        L = "Darkwave",
        D = "Folkore",
        G = "Avant-garde",
        U = "Acid",
        W = "Lo-Fi",
        q = "Trap",
        X = "Psychedelic",
        Y = "Hardtek",
        H = "Jungle",
        Q = "Witch House",
        K = "Bass",
        J = "Doom Metal",
        $ = "Shoegaze",
        ee = "Synthpop",
        ne = "New Wave",
        te = "Fusion",
        re = "Disco",
        oe = "Garage",
        ae = "Retro",
        ie = "Soul",
        ce = "Vocal",
        le = "Electronic",
        se = "Rave",
        ue = "Trance",
        fe = "Trip-Hop",
        de = "Meditative",
        pe = "staging",
        me =
          ((I = {}),
          (0, a.Z)(I, V, {
            label: "cybergoth 06",
            gradientMap: ["#7300ff", "#13BBAF", "#7300ff", "#13BBAF"],
            gradientMix: [1, 4, 1.5],
            blockColor: "#d2ccdb",
          }),
          (0, a.Z)(I, L, {
            label: "darkwave 07",
            gradientMap: ["#e0d3e3", "#9393a3", "#e0d3e3", "#9393a3"],
            gradientMix: [1.5, 0, 0],
            blockColor: "#7300ff",
          }),
          (0, a.Z)(I, D, {
            label: "folkore 08",
            gradientMap: ["#9f98b3", "#d2ccdb", "#9f98b3", "#d2ccdb"],
            gradientMix: [1.5, 0, 0],
            blockColor: "#7300ff",
          }),
          (0, a.Z)(I, G, {
            label: "avantgarde 09",
            gradientMap: ["#7300ff", "#e0d3e3", "#7300ff", "#e0d3e3"],
            gradientMix: [2, 0, 0],
            blockColor: "#e0d3e3",
          }),
          (0, a.Z)(I, U, {
            label: "acid 19",
            gradientMap: ["#7300ff", "#9f98b3", "#7300ff", "#9f98b3"],
            gradientMix: [1.7, 0, 0],
            blockColor: "#d40000",
          }),
          (0, a.Z)(I, W, {
            label: "lofi 20",
            gradientMap: ["#9f98b3", "#e0d3e3", "#9f98b3", "#e0d3e3"],
            gradientMix: [2, 0, 0],
            blockColor: "#8400d1",
          }),
          (0, a.Z)(I, q, {
            label: "trap 21",
            gradientMap: ["#9393a3", "#ff9261", "#9393a3", "#ff9261"],
            gradientMix: [1.5, 0, 0],
            blockColor: "#4e087d",
          }),
          (0, a.Z)(I, X, {
            label: "psychedelic 22",
            gradientMap: ["#9f98b3", "#9393a3", "#9f98b3", "#9393a3"],
            gradientMix: [1.5, 0, 0],
            blockColor: "#d73500",
          }),
          (0, a.Z)(I, Y, {
            label: "hardtek 27",
            gradientMap: ["#e0d3e3", "#9393a3", "#9f98b3", "#e0d3e3"],
            gradientMix: [2.5, 1.5, 0],
            blockColor: "#9f98b3",
          }),
          (0, a.Z)(I, H, {
            label: "jungle 28",
            gradientMap: ["#9393a3", "#9f98b3", "#7300ff", "#9f98b3"],
            gradientMix: [2.5, 1.5, 0],
            blockColor: "#7300ff",
          }),
          (0, a.Z)(I, Q, {
            label: "witch house 29",
            gradientMap: ["#9f98b3", "#8ff8ec", "#ff9261", "#9f98b3"],
            gradientMix: [3, 1.5, 0],
            blockColor: "#D73500",
          }),
          (0, a.Z)(I, K, {
            label: "bass 30",
            gradientMap: ["#e0d3e3", "#13bbaf", "#7300ff", "#e0d3e3"],
            gradientMix: [2, 1.5, 0],
            blockColor: "#7300ff",
          }),
          (0, a.Z)(I, J, {
            label: "doom metal 35",
            gradientMap: ["#13BBAF", "#9f98b3", "#e0d3e3", "#e0d3e3"],
            gradientMix: [3.5, 2, 0],
            blockColor: "#8400d1",
          }),
          (0, a.Z)(I, $, {
            label: "shoe gaze 36",
            gradientMap: ["#e0d3e3", "#9f98b3", "#7300ff", "#e0d3e3"],
            gradientMix: [2, 1.5, 0],
            blockColor: "#737180",
          }),
          (0, a.Z)(I, ee, {
            label: "synth pop 37",
            gradientMap: ["#e0d3e3", "#13BBAF", "#e0d3e3", "#13BBAF"],
            gradientMix: [1, 0, 0],
            blockColor: "#9f98b3",
          }),
          (0, a.Z)(I, ne, {
            label: "new wave 10",
            gradientMap: ["#d73500", "#4e087d", "#d73500", "#4e087d"],
            gradientMix: [2, 0, 0],
            blockColor: "#4e087d",
          }),
          (0, a.Z)(I, te, {
            label: "fusion 11",
            gradientMap: ["#d40000", "#9b9bbd", "#d40000", "#9b9bbd"],
            gradientMix: [2, 0, 0],
            blockColor: "#9393a3",
          }),
          (0, a.Z)(I, re, {
            label: "disco 13",
            gradientMap: ["#034F4C", "#d40000", "#034F4C", "#d40000"],
            gradientMix: [1.5, 0, 0],
            blockColor: "#D73500",
          }),
          (0, a.Z)(I, oe, {
            label: "garage 18",
            gradientMap: ["#9b9bbd", "#8400d1", "#9b9bbd", "#8400d1"],
            gradientMix: [1.5, 0, 0],
            blockColor: "#a7a1ad",
          }),
          (0, a.Z)(I, ae, {
            label: "retro 23",
            gradientMap: ["#d73500", "#8400d1", "#d73500", "#8400d1"],
            gradientMix: [1, 0, 0],
            blockColor: "#D40000",
          }),
          (0, a.Z)(I, ie, {
            label: "soul 24",
            gradientMap: ["#7d8a8a", "#730d00", "#7d8a8a", "#730d00"],
            gradientMix: [1.5, 0, 0],
            blockColor: "#8400D1",
          }),
          (0, a.Z)(I, ce, {
            label: "vocal 25",
            gradientMap: ["#d40000", "#730d00", "#d40000", "#730d00"],
            gradientMix: [1.5, 0, 0],
            blockColor: "#a7a1ad",
          }),
          (0, a.Z)(I, le, {
            label: "electronic 26",
            gradientMap: ["#9b9bbd", "#730d00", "#9b9bbd", "#730d00"],
            gradientMix: [1.5, 0, 0],
            blockColor: "#a7a1ad",
          }),
          (0, a.Z)(I, se, {
            label: "rave 31",
            gradientMap: ["#D40000", "#9b9bbd", "#8400d1", "#D40000"],
            gradientMix: [2, 1.5, 0],
            blockColor: "#a7a1ad",
          }),
          (0, a.Z)(I, ue, {
            label: "trance 32",
            gradientMap: ["#8400d1", "#d40000", "#4e087d", "#8400d1"],
            gradientMix: [3.5, 2, 0],
            blockColor: "#a7a1ad",
          }),
          (0, a.Z)(I, fe, {
            label: "trip-hop 33",
            gradientMap: ["#9b9bbd", "#8400d1", "#d73500", "#9b9bbd"],
            gradientMix: [3, 1.5, 0],
            blockColor: "#a7a1ad",
          }),
          (0, a.Z)(I, de, {
            label: "meditative 34",
            gradientMap: ["#d73500", "#8400d1", "#4e087d", "#d73500"],
            gradientMix: [1, 1, 0],
            blockColor: "#a7a1ad",
          }),
          I),
        ve = me,
        ge = me[V],
        xe = t(5893);

      function he(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }

      function be(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? he(Object(t), !0).forEach(function (n) {
                (0, a.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : he(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }

      function ye(e) {
        var n = (0, i.Ky)(),
          t = n.camera,
          o = n.gl,
          a = n.scene,
          c = (0, r.useRef)(new w(1, 0.004, 16)),
          l = (0, r.useRef)(),
          s = (0, r.useRef)(),
          u = (0, r.useRef)(),
          f = (0, r.useRef)(),
          d = e.isPlaying,
          p = e.mood,
          m = ge;
        d && (m = ve[p]);
        var x = (0, r.useRef)(),
          h = (0, r.useRef)({
            x: -1,
            y: 0,
            z: 0,
          }),
          y = (0, r.useRef)(0),
          _ = (0, r.useRef)({
            timeScale: 1.5,
          }),
          C = (0, r.useRef)(0);
        return (
          (0, r.useEffect)(function () {
            var e;
            (x.current = v.ZP.timeline()),
              x.current.addLabel("intro"),
              x.current.delay(6),
              x.current.addLabel("vogueing"),
              (e = {
                duration: 2.4 / 3,
                delay: 1.6 / 3,
                ease: g.Yv.easeInOut,
              }),
              x.current
                .fromTo(
                  h.current,
                  {
                    x: -1,
                    y: 0,
                    z: 0,
                  },
                  be(
                    {
                      x: 0,
                      y: 0,
                      z: -1,
                    },
                    e
                  )
                )
                .to(
                  h.current,
                  be(
                    {
                      x: 0,
                      y: 1,
                      z: 0,
                    },
                    e
                  )
                )
                .to(
                  h.current,
                  be(
                    be(
                      {
                        x: -1,
                        y: 0,
                        z: 0,
                      },
                      e
                    ),
                    {},
                    {
                      onComplete: function () {
                        x.current.play(y.current), (C.current = -0.002);
                      },
                    }
                  )
                ),
              x.current.addLabel("grooving"),
              (e = {
                duration: 1,
                ease: g.bJ.easeNone,
              }),
              x.current
                .fromTo(
                  h.current,
                  {
                    x: -1,
                    y: 0,
                    z: 0,
                  },
                  be(
                    {
                      x: 0,
                      y: 0,
                      z: -1,
                    },
                    e
                  )
                )
                .to(
                  h.current,
                  be(
                    {
                      x: 1,
                      y: 0,
                      z: 0,
                    },
                    e
                  )
                )
                .to(
                  h.current,
                  be(
                    {
                      x: 0,
                      y: 0,
                      z: 1,
                    },
                    e
                  )
                )
                .to(
                  h.current,
                  be(
                    be(
                      {
                        x: -1,
                        y: 0,
                        z: 0,
                      },
                      e
                    ),
                    {},
                    {
                      onComplete: function () {
                        x.current.play(y.current);
                      },
                    }
                  )
                ),
              (x.current.smoothChildTiming = !0),
              x.current.timeScale(_.current.timeScale);
          }, []),
          (0, r.useEffect)(function () {
            (f.current = new b.WebGLCubeRenderTarget(256, {
              format: b.RGBFormat,
              generateMipmaps: !0,
              minFilter: b.LinearMipmapLinearFilter,
              encoding: b.sRGBEncoding,
            })),
              (u.current = new b.CubeCamera(0.5, 40, f.current));
          }, []),
          (0, r.useEffect)(
            function () {
              v.ZP.to(_.current, {
                timescale: (1 * e.bpm) / 60,
              }).eventCallback("onUpdate", function () {
                x.current.timeScale(_.current.timescale);
              });
            },
            [e.bpm]
          ),
          (0, r.useEffect)(
            function () {
              v.ZP.to(s.current, {
                baseColor: m.blockColor,
                duration: 2.5,
                ease: g.Yv.easeInOut,
              });
            },
            [m]
          ),
          (0, r.useEffect)(
            function () {
              y.current = d ? "grooving" : "vogueing";
            },
            [d]
          ),
          (0, i.xQ)(function () {
            0 ==
              window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
              (l.current.rotateY(C.current),
              (s.current.twistDirection = h.current)),
              (l.current.matrixWorldNeedsUpdate = !0),
              t.updateProjectionMatrix(),
              u.current.update(o, a),
              (s.current.env = f.current.texture);
          }),
          (0, xe.jsx)(
            "mesh",
            be(
              be(
                {
                  ref: l,
                  geometry: c.current,
                },
                e
              ),
              {},
              {
                children: (0, xe.jsx)("timeCrystalMaterial", {
                  ref: s,
                  text: new b.CubeTextureLoader().load([
                    "./textures/tex1.png",
                    "./textures/tex3.png",
                    "./textures/tex2.png",
                    "./textures/tex5.png",
                    "./textures/tex4.png",
                    "./textures/tex6.png",
                  ]),
                  matCapText: new b.TextureLoader().load(
                    "./textures/matcap.png"
                  ),
                }),
              }
            )
          )
        );
      }

      function we(e) {
        var n = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = (0, j.Z)(e);
          if (n) {
            var o = (0, j.Z)(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return (0, P.Z)(this, t);
        };
      }
      var _e = (function (e) {
        (0, k.Z)(t, e);
        var n = we(t);

        function t(e) {
          var r;
          return (
            (0, _.Z)(this, t),
            ((r = n.call(this, {
              uniforms: {
                time: {
                  value: 0,
                },
                gradientMap: {
                  value: t.fromRGBArray(ge.gradientMap),
                },
                gradientMix: {
                  value: ge.gradientMix,
                },
              },
              vertexShader:
                "    varying vec3 vPos;\n\n    void main() {\n      vPos = position;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n    ",
              fragmentShader:
                "uniform float time;\nuniform vec3 gradientMap[4];\nuniform float gradientMix[3];\n\nvarying vec3 vPos;\nfloat speed = 0.5;\n\n//\tSimplex 4D Noise \n//\tby Ian McEwan, Ashima Arts\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nfloat permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nfloat taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nvec4 grad4(float j, vec4 ip){\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; \n\n  return p;\n}\n\nfloat snoise(vec4 v){\n  const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4\n                        0.309016994374947451); // (sqrt(5) - 1)/4   F4\n\n  vec4 i  = floor(v + dot(v, C.yyyy) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n  // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n  //  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n\n  //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\n  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\n  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\n  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;\n\n  // Permutations\n  i = mod(i, 289.0); \n  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute( permute( permute( permute (\n              i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n  // Gradients\n  // ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)\n  // 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n  vec4 p0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n  // Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt(dot(p4,p4));\n\n  // Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n}\n\nfloat fbm(vec4 p){\n  float sum = 0.0;\n  float amp = 1.0;\n  for(int i = 0; i < 6; i++){\n    sum += snoise(p)*amp;\n    p.w += 144.0;\n    amp *= 0.78;\n  }\n  return sum;\n}\n\nvoid main() {\n  float s1 = speed * 0.04;\n  float s2 = speed * 0.08;\n  float t1 = (time + 8.0) * s1;\n  float t2 = (time + 8.0) * s2;\n\n  float noise = fbm(vec4( vPos.z /4.0 + t2, t1, vPos.yx /10.0 - t2));\n  noise = clamp((noise * 2.7) + .5, 0.0 , 1.0);\n\n  vec3 color = mix(gradientMap[0], gradientMap[1], noise * gradientMix[0]);\n  color = mix(color, gradientMap[2], noise * gradientMix[1]);\n  color = mix(color, gradientMap[3], noise * gradientMix[2] );\n\n  gl_FragColor=vec4(color, 1.0);\n}\n",
            })).side = b.BackSide),
            r
          );
        }
        return (
          (0, C.Z)(t, [
            {
              key: "time",
              get: function () {
                return this.uniforms.time.value;
              },
              set: function (e) {
                this.uniforms.time.value = e;
              },
            },
            {
              key: "gradientMap",
              get: function () {
                return this.uniforms.gradientMap.value;
              },
              set: function (e) {
                this.uniforms.gradientMap.value = t.fromRGBArray(e);
              },
            },
            {
              key: "gradientMix",
              get: function () {
                return this.uniforms.gradientMix.value;
              },
              set: function (e) {
                this.uniforms.gradientMix.value = e;
              },
            },
          ]),
          t
        );
      })(b.ShaderMaterial);

      function Ce(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }

      function ke(e) {
        var n = (0, r.useRef)(),
          t = e.isPlaying,
          o = e.mood,
          c = ge;
        t && (c = ve[o]);
        var l = (0, r.useRef)({
          c1: ge.gradientMap[0],
          c2: ge.gradientMap[1],
          c3: ge.gradientMap[2],
          c4: ge.gradientMap[3],
          m1: ge.gradientMix[0],
          m2: ge.gradientMix[1],
          m3: ge.gradientMix[2],
          map: ge.gradientMap,
          mix: ge.gradientMix,
        });
        return (
          (0, r.useEffect)(
            function () {
              var e = {
                  duration: 2.5,
                  ease: g.Yv.easeInOut,
                },
                n = c.gradientMap,
                t = c.gradientMix;
              v.ZP.to(
                l.current,
                (function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                      ? Ce(Object(t), !0).forEach(function (n) {
                          (0, a.Z)(e, n, t[n]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(t)
                        )
                      : Ce(Object(t)).forEach(function (n) {
                          Object.defineProperty(
                            e,
                            n,
                            Object.getOwnPropertyDescriptor(t, n)
                          );
                        });
                  }
                  return e;
                })(
                  {
                    c1: n[0],
                    c2: n[1],
                    c3: n[2],
                    c4: n[3],
                    m1: t[0],
                    m2: t[1],
                    m3: t[2],
                  },
                  e
                )
              ).eventCallback("onUpdate", function () {
                (l.current.map = [
                  v.ZP.utils.splitColor(l.current.c1),
                  v.ZP.utils.splitColor(l.current.c2),
                  v.ZP.utils.splitColor(l.current.c3),
                  v.ZP.utils.splitColor(l.current.c4),
                ]),
                  (l.current.mix = [l.current.m1, l.current.m2, l.current.m3]);
              });
            },
            [c]
          ),
          (0, i.xQ)(function (e) {
            var t = e.clock;
            0 == window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? (n.current.time = t.elapsedTime)
              : (n.current.time = 0),
              (n.current.gradientMap = l.current.map),
              (n.current.gradientMix = l.current.mix);
          }),
          (0, xe.jsxs)("mesh", {
            children: [
              (0, xe.jsx)("sphereGeometry", {
                args: [6, 30, 30],
              }),
              (0, xe.jsx)("superOrangeMaterial", {
                ref: n,
              }),
            ],
          })
        );
      }
      (0, a.Z)(_e, "fromRGBArray", function (e) {
        return e.map(function (e) {
          if (typeof e == typeof String) {
            var n = v.ZP.utils.splitColor(e);
            return new b.Vector3(n[0] / 255, n[1] / 255, n[2] / 255);
          }
          return new b.Vector3(e[0] / 255, e[1] / 255, e[2] / 255);
        });
      }),
        (0, i.l7)({
          SuperOrangeMaterial: _e,
        });
      var Pe = function e() {
          (0, _.Z)(this, e);
          for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
            t[r] = arguments[r];
          (this.state = t.state || Z),
            (this.shouldPlay = t.shouldPlay || !1),
            (this.title = t.title || ""),
            (this.artist = t.artist || ""),
            (this.bpm = t.bpm || 123),
            (this.mood = t.mood || V);
        },
        je = r.createContext(),
        Me = function e() {
          (0, _.Z)(this, e), (this.open = !1), (this.keyboardNav = !1);
        },
        Oe = r.createContext(),
        Ie = t(4165),
        Ne = t.n(Ie),
        Be = t(6037),
        Ze = function (e) {
          var n = e.playerState,
            t = e.uiState,
            o = e.setUIState,
            c = (function () {
              var e = (0, r.useState)({
                  width: void 0,
                  height: void 0,
                }),
                n = e[0],
                t = e[1];
              return (
                (0, r.useEffect)(function () {
                  function e() {
                    t({
                      width: window.innerWidth,
                      height: window.innerHeight,
                    });
                  }
                  return (
                    window.addEventListener("resize", e),
                    e(),
                    function () {
                      return window.removeEventListener("resize", e);
                    }
                  );
                }, []),
                n
              );
            })(),
            x = (0, r.useState)(!1),
            b = x[0],
            y = x[1],
            w = (0, r.useState)(!1),
            _ = w[0],
            C = w[1],
            k = (0, r.useRef)(0),
            P = (0, r.useRef)({
              offsetRight: 0,
              responsiveOpenTargetRight: 0,
              offsetBottom: 0,
              responsiveOpenTargetBottom: 0,
              zoom: 0,
              responsiveOpenTargetZoom: 0,
            }),
            j = (0, i.Ky)().camera,
            M = (0, l.vO)();
          (0, i.xQ)(function () {
            (j.right =
              c.width / 2 + (c.width / c.height) * P.current.offsetRight),
              (j.bottom =
                -c.height / 2 + (c.width / c.height) * P.current.offsetBottom),
              (j.zoom = P.current.zoom),
              window.matchMedia("(pointer: coarse)").matches ||
                v.ZP.isTweening(P.current) ||
                setTimeout(function () {
                  if (M.offset > 0.5 && k.current < 0.5) {
                    if (!t.open) {
                      var e = Object.assign(
                        Object.create(Object.getPrototypeOf(t)),
                        t
                      );
                      (e.open = !0), o(e);
                    }
                  } else if (M.offset < 0.5 && k.current > 0.5 && t.open) {
                    var n = Object.assign(
                      Object.create(Object.getPrototypeOf(t)),
                      t
                    );
                    (n.open = !1), o(n);
                  }
                  k.current = M.offset;
                }, 0);
          });
          var O = (0, Be.useSwipeable)({
            onSwiped: function (e) {
              if (e.velocity > 1)
                if ("Up" == e.dir) {
                  if (!t.open) {
                    var n = Object.assign(
                      Object.create(Object.getPrototypeOf(t)),
                      t
                    );
                    (n.open = !0), o(n);
                  }
                } else if ("Down" == e.dir && t.open) {
                  var r = Object.assign(
                    Object.create(Object.getPrototypeOf(t)),
                    t
                  );
                  (r.open = !1), o(r);
                }
            },
          }).ref;
          (0, r.useEffect)(function () {
            return (
              (document.querySelector("#__next").className = Ne().root),
              O(document),
              function () {
                document.querySelector("#__next").classList.remove(Ne().root);
              }
            );
          }, []),
            (0, r.useEffect)(
              function () {
                var e;
                document.querySelector("#__next").className = h()(
                  Ne().root,
                  ((e = {}),
                  (0, a.Z)(e, Ne().grabbing, b),
                  (0, a.Z)(e, Ne().grab, _ && !b),
                  e)
                );
              },
              [_, b]
            );
          var I = function () {
            if (c.width) {
              var e = Math.min(c.width, c.height),
                n = c.height / c.width;
              t.open
                ? c.width >= 1024 && n < 0.4
                  ? ((P.current.responsiveOpenTargetRight = 0.5 + n),
                    (P.current.responsiveOpenTargetBottom = 0),
                    (P.current.responsiveOpenTargetZoom = Math.floor(
                      50 / n + e / 4
                    )))
                  : c.width >= 1024 || n < 1
                  ? ((P.current.responsiveOpenTargetRight = 1 + 1 * n),
                    (P.current.responsiveOpenTargetBottom = 0),
                    (P.current.responsiveOpenTargetZoom = Math.floor(
                      50 / n + e / 5
                    )))
                  : c.width <= 320
                  ? ((P.current.responsiveOpenTargetRight = 0.75 + 0.65 * n),
                    (P.current.responsiveOpenTargetBottom =
                      -0.5 / n - 0.5 * Math.pow(n, 2)),
                    (P.current.responsiveOpenTargetZoom = Math.floor(
                      40 + e / 5
                    )))
                  : c.width <= 375
                  ? ((P.current.responsiveOpenTargetRight = 0.4 + 0.75 * n),
                    (P.current.responsiveOpenTargetBottom =
                      -0.6 / n - 0.75 * Math.pow(n, 2)),
                    (P.current.responsiveOpenTargetZoom = Math.floor(
                      40 + e / 4.6
                    )))
                  : ((P.current.responsiveOpenTargetRight = 0.4 + 0.75 * n),
                    (P.current.responsiveOpenTargetBottom =
                      -0.6 / n - 0.85 * Math.pow(n, 2)),
                    (P.current.responsiveOpenTargetZoom = Math.floor(
                      40 + e / 4.3
                    )))
                : c.width >= 1024
                ? ((P.current.responsiveOpenTargetRight = 0),
                  (P.current.responsiveOpenTargetBottom = 0),
                  (P.current.responsiveOpenTargetZoom = Math.floor(
                    120 + e / 4
                  )))
                : ((P.current.responsiveOpenTargetRight = 0),
                  (P.current.responsiveOpenTargetBottom = 0),
                  (P.current.responsiveOpenTargetZoom = Math.floor(
                    70 + e / 4
                  )));
            }
          };
          return (
            (0, r.useEffect)(
              function () {
                I();
                var e = t.open ? 0 : 0.7;
                P.current.zoom > 0
                  ? v.ZP.to(P.current, {
                      overwrite: "all",
                      offsetRight: P.current.responsiveOpenTargetRight,
                      offsetBottom: P.current.responsiveOpenTargetBottom,
                      zoom: P.current.responsiveOpenTargetZoom,
                      duration: 1.3,
                      delay: e,
                      ease: g.gU.easeInOut,
                    }).eventCallback("onComplete", function () {
                      M.el.scroll({
                        top: t.open ? c.height : 0,
                        behavior: "instant",
                      });
                    })
                  : ((P.current.zoom = P.current.responsiveOpenTargetZoom),
                    (P.current.offsetRight =
                      P.current.responsiveOpenTargetRight),
                    (P.current.offsetBottom =
                      P.current.responsiveOpenTargetBottom));
              },
              [t.open]
            ),
            (0, r.useEffect)(
              function () {
                I(),
                  (function () {
                    var e;
                    (e = window.visualViewport
                      ? window.visualViewport.height
                      : c.height),
                      document.documentElement.style.setProperty(
                        "--vh",
                        "".concat(e, "px")
                      );
                  })(),
                  (P.current.zoom = P.current.responsiveOpenTargetZoom),
                  (P.current.offsetRight = P.current.responsiveOpenTargetRight),
                  (P.current.offsetBottom =
                    P.current.responsiveOpenTargetBottom);
              },
              [c.width, c.height]
            ),
            (0, xe.jsxs)(r.Fragment, {
              children: [
                (0, xe.jsxs)(r.Suspense, {
                  fallback: (0, xe.jsx)(s.V, {
                    center: !0,
                    children: "Loading...",
                  }),
                  children: [
                    (0, xe.jsx)(u.i, {
                      makeDefault: !0,
                      position: [-2, 2, 2],
                      zoom: P.current.zoom,
                      near: 1,
                      far: 200,
                      left: -c.width / 2,
                      right:
                        c.width / 2 +
                        (c.width / c.height) * P.current.offsetRight,
                      top: c.height / 2,
                      bottom:
                        -c.height / 2 +
                        (c.width / c.height) * P.current.offsetBottom,
                    }),
                    (0, xe.jsx)(f.S, {
                      pixelated: !0,
                    }),
                    (0, xe.jsx)(d.E, {}),
                    (0, xe.jsx)(ke, {
                      mood: n.mood,
                      isPlaying: n.state == N,
                    }),
                    (0, xe.jsx)(ye, {
                      mood: n.mood,
                      isPlaying: n.state == N,
                      bpm: n.state == N ? n.bpm : 60,
                      onPointerEnter: function (e) {
                        e.stopPropagation(), C(!0);
                      },
                      onPointerLeave: function (e) {
                        e.stopPropagation(), C(!1);
                      },
                      onPointerDown: function (e) {
                        e.stopPropagation(),
                          e.target.setPointerCapture(e.pointerId),
                          y(!0);
                      },
                      onPointerUp: function (e) {
                        e.stopPropagation(),
                          e.target.releasePointerCapture(e.pointerId),
                          y(!1);
                      },
                    }),
                    (0, xe.jsx)(p.q, {
                      all: !0,
                    }),
                  ],
                }),
                (0, xe.jsx)(m.z, {
                  minPolarAngle: 0.25 * Math.PI,
                  maxPolarAngle: 0.75 * Math.PI,
                  enableZoom: !1,
                  enablePan: !1,
                }),
              ],
            })
          );
        };

      function Re(e) {
        var n = (0, r.useContext)(je),
          t = n[0],
          o = (n[1], (0, r.useContext)(Oe)),
          a = o[0],
          s = o[1];
        return (0, xe.jsx)(i.Xz, {
          className: Ne().scene,
          mode: "concurrent",
          linear: !0,
          colorManagement: !1,
          gl: {
            antialias: !0,
          },
          resize: {
            polyfill: c.Z,
          },
          children: (0, xe.jsx)(l.Fq, {
            pages: 1.1,
            children: (0, xe.jsx)(Ze, {
              playerState: t,
              uiState: a,
              setUIState: s,
            }),
          }),
        });
      }
      var ze = t(2143),
        Te = t(6835);

      function Se(e) {
        var n = e.className;
        return (0, xe.jsx)("svg", {
          focusable: "false",
          className: "svgIcon_tidalLogo ".concat(n || ""),
          fill: "none",
          height: "24",
          viewBox: "0 0 24 24",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          children: (0, xe.jsx)("path", {
            d: "m4 4-4 4 4 4 4-4 4 4-4 4 4 4 4-4-4-4 4-4 4 4 4-4-4-4-4 4-4-4-4 4z",
            fill: "#fff",
          }),
        });
      }

      function Ee(e) {
        var n = e.className;
        return (0, xe.jsx)("svg", {
          focusable: "false",
          className: "svgIcon_unmute ".concat(n || ""),
          fill: "none",
          height: "24",
          viewBox: "0 0 24 24",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          children: (0, xe.jsx)("path", {
            d: "m12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8h-4v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9z",
            fill: "#fff",
          }),
        });
      }

      function Fe(e) {
        var n = e.className;
        return (0, xe.jsx)("svg", {
          focusable: "false",
          className: "svgIcon_mute ".concat(n || ""),
          fill: "none",
          height: "24",
          viewBox: "0 0 24 24",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          children: (0, xe.jsx)("path", {
            d: "m12 3.99997c3.87 0 7 3.13 7 7.00003v2h-2.92l4.92 4.92v-6.92c0-4.97003-4.03-9.00003-9-9.00003-1.95 0-3.76.62-5.23 1.68l1.44 1.44c1.09-.71 2.39-1.12 3.79-1.12zm-9.73-2.28-1.27 1.28 3.33 3.32c-.84 1.36-1.33 2.97-1.33 4.68003v7c0 1.66 1.34 3 3 3h3v-8h-4v-2c0-1.17003.29-2.26003.79-3.22003l9.21 9.22003v4h3c.3 0 .59-.06.86-.14l2.14 2.14 1.27-1.27z",
            fill: "#fff",
          }),
        });
      }

      function Ae(e) {
        var n = e.className;
        return (0, xe.jsx)("svg", {
          focusable: "false",
          className: "svgIcon_play ".concat(n || ""),
          fill: "none",
          height: "24",
          viewBox: "0 0 24 24",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          children: (0, xe.jsx)("path", {
            d: "m8 5v14l11-7z",
            fill: "#C0C0C0",
          }),
        });
      }
      var Ve = t(575),
        Le = t.n(Ve);

      function De(e) {
        var n = e.className;
        return (0, xe.jsx)("svg", {
          focusable: "false",
          className: h()("svgIcon_buffering", [Le().buffering], n),
          fill: "none",
          height: "24",
          viewBox: "0 0 24 24",
          width: "24",
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          children: (0, xe.jsx)("circle", {
            className: Le().ring,
            cx: "12",
            cy: "12",
            r: "10",
            fill: "none",
            stroke: "#000000",
            strokeWidth: "1",
          }),
        });
      }
      var Ge = t(6662),
        Ue = t.n(Ge),
        We = t(1691);

      function qe(e, n) {
        var t =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (!e) return;
              if ("string" === typeof e) return Xe(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return Xe(e, n);
            })(e)) ||
            (n && e && "number" === typeof e.length)
          ) {
            t && (e = t);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: e[r++],
                    };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          c = !1;
        return {
          s: function () {
            t = t.call(e);
          },
          n: function () {
            var e = t.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (c = !0), (a = e);
          },
          f: function () {
            try {
              i || null == t.return || t.return();
            } finally {
              if (c) throw a;
            }
          },
        };
      }

      function Xe(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }

      function Ye(e) {
        var n = r.useContext(je),
          t = (0, Te.Z)(n, 2),
          o = t[0],
          i = t[1],
          c = (0, r.useState)(!1),
          l = c[0],
          s = c[1],
          u = (0, r.useState)(!0),
          f = u[0],
          d = u[1],
          p = (0, r.useState)(!1),
          m = p[0],
          v = p[1],
          g = (0, r.useState)(S),
          x = g[0],
          b = g[1],
          y = (0, We.g)().t,
          w = o.title,
          _ = o.artist,
          C = o.shouldPlay,
          k = (o.playState, y("landing.playlist.cta.line1")),
          P = y("landing.playlist.cta.line2"),
          j = y("landing.playlist.tooltip"),
          M = y("landing.playlist.url"),
          O = (0, r.useState)({
            label: "Play ".concat(k, " ").concat(P),
            description: "".concat(k, " ").concat(P),
          }),
          I = O[0],
          N = O[1];
        (0, r.useEffect)(
          function () {
            l
              ? f
                ? (b(S),
                  N({
                    label: "Play ".concat(k, " ").concat(P),
                    description: "",
                  }))
                : o == R || o == Z
                ? (b(E),
                  N({
                    label: "buffering",
                    description: "track is loading",
                  }))
                : C
                ? (b(A),
                  N({
                    label: "playing ".concat(w, " by ").concat(_),
                    description: "click to stop playback",
                  }))
                : (b(F),
                  N({
                    label: "not playing ".concat(w, " by ").concat(_),
                    description: "click to resume playback",
                  }))
              : b(E);
          },
          [l, o, f, C]
        );
        (0, r.useEffect)(function () {
          document.fonts.ready.then(function () {
            return s(!0);
          });
        }, []);
        return (0, xe.jsxs)("div", {
          className: Ue().playbackControls,
          children: [
            (0, xe.jsxs)("button", {
              type: "button",
              className: h()([Ue().left], [Ue().btn]),
              onClick: function (e) {
                e.preventDefault();
                var n = Object.assign(
                  Object.create(Object.getPrototypeOf(o)),
                  o
                );
                (n.shouldPlay = !C), d(!1), i(n);
              },
              tabIndex: 1,
              "aria-label": "".concat(I.label, " - ").concat(I.description),
              children: [
                (0, xe.jsxs)("div", {
                  className: Ue().iconTrack,
                  children: [
                    (0, xe.jsx)(Ae, {
                      className: h()(
                        [Ue().icon],
                        (0, a.Z)({}, Ue().iconVisible, x == S)
                      ),
                    }),
                    (0, xe.jsx)(Ee, {
                      className: h()(
                        [Ue().icon],
                        (0, a.Z)({}, Ue().iconVisible, x == A)
                      ),
                    }),
                    (0, xe.jsx)(Fe, {
                      className: h()(
                        [Ue().icon],
                        (0, a.Z)({}, Ue().iconVisible, x == F)
                      ),
                    }),
                    (0, xe.jsx)(De, {
                      className: h()(
                        [Ue().icon],
                        (0, a.Z)({}, Ue().iconVisible, x == E)
                      ),
                    }),
                  ],
                }),
                l &&
                  (0, xe.jsxs)("div", {
                    className: Ue().trackInfo,
                    children: [
                      (0, xe.jsx)("div", {
                        className: Ue().title,
                        children: m ? j : f ? k : w,
                      }),
                      (0, xe.jsx)("div", {
                        className: Ue().artist,
                        children: m || f ? P : _,
                      }),
                    ],
                  }),
              ],
            }),
            (0, xe.jsx)("a", {
              onClick: function () {
                var e,
                  n = qe(document.getElementsByTagName("a"));
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    e.value.blur();
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                v(!1);
              },
              onMouseOver: function () {
                return v(!0);
              },
              onMouseLeave: function () {
                return v(!1);
              },
              className: h()(
                [Ue().right],
                [Ue().btn],
                (0, a.Z)({}, Ue().btnHover, m)
              ),
              href: M,
              rel: "noopener noreferrer",
              target: "_blank",
              tabIndex: 2,
              "aria-label": "Open ".concat(k, " ").concat(P, " in TIDAL"),
              children: (0, xe.jsx)(Se, {}),
            }),
          ],
        });
      }
      var He = t(7812),
        Qe = t(1664),
        Ke = t.n(Qe),
        Je = t(6634),
        $e = t.n(Je);

      function en() {
        var e = (0, r.useContext)(Oe),
          n = e[0],
          t = (e[1], (0, r.useRef)()),
          o = (0, We.g)().get,
          i = (0, He.Z)(o("landing.mainLinks", []));
        return (
          (0, r.useEffect)(
            function () {
              n.open && n.keyboardNav && t.current.focus();
            },
            [n.open]
          ),
          (0, xe.jsx)("nav", {
            className: $e().navLinks,
            children:
              i.length > 0 &&
              i.map(function (e, r) {
                return (0, xe.jsx)(
                  "div",
                  {
                    className: $e().navRow,
                    children: (0, xe.jsx)(Ke(), {
                      href: e.url,
                      passHref: !0,
                      children: (0, xe.jsx)("a", {
                        className: h()(
                          $e().link,
                          (0, a.Z)({}, $e().hidden, !n.open)
                        ),
                        target: "_blank",
                        rel: "noreferrer noopener",
                        tabIndex: n.open ? 0 : -1,
                        ref: 0 == r ? t : void 0,
                        children: e.text,
                      }),
                    }),
                  },
                  r
                );
              }),
          })
        );
      }
      var nn = t(2931),
        tn = t.n(nn);

      function rn() {
        var e = (0, r.useContext)(Oe),
          n = e[0],
          t = (e[1], (0, We.g)()),
          o = t.t,
          i = t.get,
          c = o("landing.pseudoCode.line1"),
          l = o("landing.pseudoCode.line2"),
          s = (0, He.Z)(i("landing.blockList", []));
        return (0, xe.jsxs)("div", {
          className: tn().codeBlock,
          children: [
            (0, xe.jsxs)("div", {
              className: h()(
                tn().line,
                tn().line1,
                (0, a.Z)({}, tn().hidden, !n.open)
              ),
              children: [
                (0, xe.jsx)("span", {
                  className: tn().normal,
                  children: "def ",
                }),
                (0, xe.jsx)("span", {
                  className: tn().bold,
                  children: "".concat(c, ":"),
                }),
              ],
            }),
            (0, xe.jsxs)("div", {
              className: h()(
                tn().line,
                tn().line2,
                (0, a.Z)({}, tn().hidden, !n.open)
              ),
              children: [
                (0, xe.jsx)("span", {
                  className: tn().normal,
                  children: "".concat(l, " = "),
                }),
                (0, xe.jsx)("span", {
                  className: tn().bold,
                  children: "[",
                }),
              ],
            }),
            s.length > 0 &&
              s.map(function (e, t) {
                var r = "link".concat(t + 1),
                  o = tn()[r],
                  i = t == s.length - 1 ? '"]' : '",';
                return (0, xe.jsxs)(
                  "div",
                  {
                    className: h()(
                      tn().linkWrap,
                      o,
                      (0, a.Z)({}, tn().hidden, !n.open)
                    ),
                    children: [
                      (0, xe.jsx)("span", {
                        className: tn().bold,
                        children: '"',
                      }),
                      (0, xe.jsx)(Ke(), {
                        href: e.url,
                        passHref: !0,
                        children: (0, xe.jsx)("a", {
                          className: tn().link,
                          target: "_blank",
                          rel: "noreferrer noopener",
                          tabIndex: n.open ? 0 : -1,
                          children: e.text,
                        }),
                      }),
                      (0, xe.jsx)("span", {
                        className: tn().bold,
                        children: i,
                      }),
                    ],
                  },
                  t
                );
              }),
          ],
        });
      }
      var on = t(5180),
        an = t.n(on);

      function cn() {
        var e = (0, r.useContext)(Oe),
          n = e[0],
          t =
            (e[1],
            (0, r.useMemo)(function () {
              return new Date().getFullYear().toString();
            }, [])),
          o = (0, We.g)().t;
        return (0, xe.jsxs)("div", {
          className: h()(an().legalFooter, (0, a.Z)({}, an().hidden, !n.open)),
          children: [
            (0, xe.jsxs)("span", {
              children: [
                o("copyright", {
                  currentYear: t,
                }),
                " ",
              ],
            }),
            (0, xe.jsx)(Ke(), {
              href: "/legal",
              passHref: !0,
              children: (0, xe.jsx)("a", {
                className: an().link,
                target: "_blank",
                rel: "noreferrer noopener",
                tabIndex: n.open ? 0 : -1,
                children: o("landing.legalLink.text"),
              }),
            }),
          ],
        });
      }

      function ln(e) {
        var n = e.className;
        return (0, xe.jsx)("svg", {
          className: "svgIcon_arrow ".concat(n || ""),
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          children: (0, xe.jsx)("path", {
            d: "M-6.99382e-07 8L1.41 9.41L7 3.83L7 16L9 16L9 3.83L14.58 9.42L16 8L8 6.99382e-07L-6.99382e-07 8Z",
            fill: "black",
          }),
        });
      }
      var sn = t(5810),
        un = t.n(sn);

      function fn(e) {
        var n = (0, r.useContext)(Oe),
          t = n[0],
          o = n[1];
        return (0, xe.jsx)("button", {
          type: "button",
          className: un().bigCircleArrow,
          onClick: function (e) {
            e.preventDefault();
            var n = Object.assign(Object.create(Object.getPrototypeOf(t)), t);
            (n.open = !t.open), o(n);
          },
          tabIndex: 0,
          "aria-label": "toggle menu",
          children: (0, xe.jsx)(ln, {
            className: h()(un().arrow, (0, a.Z)({}, un().rotate, t.open)),
          }),
        });
      }
      var dn = t(2970),
        pn = t.n(dn);

      function mn(e) {
        var n = (0, r.useContext)(ze.f),
          t = n.onTrackingEnabled,
          o = n.onTrackingDeclined,
          i = e.isCookieBannerOpen,
          c = e.setIsCookieBannerOpen,
          l = (0, We.g)().t;
        return (0, xe.jsxs)("div", {
          className: h()(pn().cookieBanner, (0, a.Z)({}, pn().hidden, !i)),
          "data-cy": "cookie-banner",
          children: [
            (0, xe.jsxs)("div", {
              className: pn().copy,
              children: [
                (0, xe.jsxs)("span", {
                  children: [l("cookies.info"), "\xa0"],
                }),
                (0, xe.jsx)(Ke(), {
                  href: "/cookie-policy",
                  passHref: !0,
                  children: (0, xe.jsx)("a", {
                    className: pn().link,
                    tabIndex: 0,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: l("cookies.more"),
                  }),
                }),
              ],
            }),
            (0, xe.jsx)("a", {
              className: h()([pn().yes], [pn().btn]),
              tabIndex: 0,
              onClick: function () {
                c(!1), t();
              },
              "data-cy": "cookie-approve-btn",
              children: l("cookies.yes"),
            }),
            (0, xe.jsx)("a", {
              className: h()([pn().no], [pn().btn]),
              tabIndex: 0,
              onClick: function () {
                c(!1), o();
              },
              "data-cy": "cookie-decline-btn",
              children: l("cookies.no"),
            }),
          ],
        });
      }
      var vn = t(8924),
        gn = t.n(vn);

      function xn(e) {
        var n = (0, r.useContext)(ze.f).isConsentRequestNeeded,
          t = (0, r.useState)(!1),
          o = t[0],
          i = t[1],
          c = (0, r.useContext)(Oe),
          l = c[0],
          s = c[1];
        (0, r.useEffect)(function () {
          n && i(!0);
        }, []);
        return (0, xe.jsxs)(r.Fragment, {
          children: [
            (0, xe.jsxs)("div", {
              className: h()(
                gn().uiLayer,
                (0, a.Z)({}, gn().cookieBannerOpen, o)
              ),
              onKeyPress: function () {
                var e = Object.assign(
                  Object.create(Object.getPrototypeOf(l)),
                  l
                );
                (e.keyboardNav = !0), s(e);
              },
              children: [
                (0, xe.jsx)("div", {
                  className: gn().player,
                  children: (0, xe.jsx)(Ye, {}),
                }),
                (0, xe.jsx)("div", {
                  className: gn().nav,
                  children: (0, xe.jsx)(en, {}),
                }),
                (0, xe.jsx)("div", {
                  className: gn().codeBlock,
                  children: (0, xe.jsx)(rn, {}),
                }),
                (0, xe.jsx)("div", {
                  className: gn().footer,
                  children: (0, xe.jsx)(cn, {}),
                }),
                (0, xe.jsx)("div", {
                  className: gn().bigArrow,
                  children: (0, xe.jsx)(fn, {}),
                }),
              ],
            }),
            n &&
              (0, xe.jsx)("div", {
                className: gn().cookieBanner,
                children: (0, xe.jsx)(mn, {
                  isCookieBannerOpen: o,
                  setIsCookieBannerOpen: i,
                }),
              }),
          ],
        });
      }
      var hn = t(1766);

      function bn(e) {
        var n = e.trackList,
          t = r.useContext(je),
          o = (0, Te.Z)(t, 2),
          a = o[0],
          i = o[1],
          c = r.useState(),
          l = (0, Te.Z)(c, 2),
          s = l[0],
          u = l[1],
          f = r.useState(Z),
          d = (0, Te.Z)(f, 2),
          p = d[0],
          m = d[1],
          v = r.useRef();
        return (
          (0, r.useEffect)(
            function () {
              if (null !== n && void 0 !== n && n.length) {
                var e = Math.floor(Math.random() * n.length);
                u(e);
              }
            },
            [n]
          ),
          (0, r.useEffect)(
            function () {
              var e = Object.assign(Object.create(Object.getPrototypeOf(a)), a);
              (e.state = p), i(e);
            },
            [p]
          ),
          (0, r.useEffect)(
            function () {
              v.current &&
                (a.shouldPlay
                  ? v.current.playing() || v.current.play()
                  : v.current.playing() && v.current.pause());
            },
            [a.shouldPlay]
          ),
          (0, r.useEffect)(
            function () {
              if (s > -1) {
                var e,
                  t = n[s];
                if ((v.current && v.current.off(), "production" === pe))
                  e = "s3assets/".concat(t.fileName, "?s3=true");
                else e = "./playlist/".concat(t.fileName);
                (v.current = new hn.Howl({
                  src: [e],
                  html5: !0,
                })),
                  v.current.once("load", function () {
                    m(z), a.shouldPlay && v.current.play();
                  }),
                  v.current.on("play", function () {
                    return m(N);
                  }),
                  v.current.on("pause", function () {
                    return m(B);
                  }),
                  v.current.once("end", function () {
                    m(T);
                    var e = s + 1;
                    e >= n.length && (e = 0), u(e);
                  }),
                  m(R);
                var r = Object.assign(
                  Object.create(Object.getPrototypeOf(a)),
                  a
                );
                (r.state = R),
                  (r.artist = t.artist),
                  (r.title = t.title),
                  (r.bpm = t.bpm),
                  (r.mood = t.genre[0]),
                  i(r);
              }
            },
            [s]
          ),
          r.Fragment
        );
      }
      var yn = !0;

      function wn(e) {
        var n = e.trackList,
          t = (0, We.g)(),
          a = t.t,
          i = t.get,
          c = (0, r.useState)(new Pe()),
          l = (0, r.useState)(new Me()),
          s = i("landing.console");
        return (
          (0, r.useEffect)(
            function () {
              s &&
                s.length > 0 &&
                s.forEach(function (e) {
                  console.log(e);
                });
            },
            [s]
          ),
          (0, xe.jsx)(je.Provider, {
            value: c,
            children: (0, xe.jsxs)(Oe.Provider, {
              value: l,
              children: [
                (0, xe.jsx)(o.Z, {
                  title: a("landing.pageTitle"),
                  includeSiteTitle: !1,
                  path: "",
                }),
                (0, xe.jsx)(Re, {}),
                (0, xe.jsx)(bn, {
                  trackList: n,
                }),
                (0, xe.jsx)(xn, {}),
              ],
            }),
          })
        );
      }
    },
    5572: function (e, n, t) {
      "use strict";
      t.d(n, {
        w: function () {
          return r;
        },
      });
      var r = function (e) {
        return "".concat(("", ""), "/").concat(e);
      };
    },
    5728: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(2352);
        },
      ]);
    },
    4165: function (e) {
      e.exports = {
        scene: "Scene_scene__jWWEp",
        root: "Scene_root__hNLnx",
        fadeIn: "Scene_fadeIn__VDNuQ",
        hidden: "Scene_hidden__VfvLN",
        grab: "Scene_grab__k1QkY",
        grabbing: "Scene_grabbing__KoDCP",
      };
    },
    8924: function (e) {
      e.exports = {
        uiLayer: "UI_uiLayer__ThDuU",
        fadeIn: "UI_fadeIn__9eXdo",
        player: "UI_player__Uxw70",
        codeBlock: "UI_codeBlock__2_G9o",
        nav: "UI_nav__HX_ro",
        bigArrow: "UI_bigArrow__v7HXF",
        footer: "UI_footer__FnNjd",
        cookieBanner: "UI_cookieBanner__j5WlM",
        cookieBannerOpen: "UI_cookieBannerOpen__amIXy",
      };
    },
    5810: function (e) {
      e.exports = {
        bigCircleArrow: "BigCircleArrow_bigCircleArrow__IgDoZ",
        arrow: "BigCircleArrow_arrow__4LouA",
        rotate: "BigCircleArrow_rotate__leP8D",
      };
    },
    2931: function (e) {
      e.exports = {
        codeBlock: "CodeBlock_codeBlock__Aq_9M",
        line: "CodeBlock_line__h0TGM",
        linkWrap: "CodeBlock_linkWrap__Gy2pv",
        hidden: "CodeBlock_hidden__tPqvM",
        line1: "CodeBlock_line1__A8Iph",
        line2: "CodeBlock_line2__EanZQ",
        link1: "CodeBlock_link1__DXxAR",
        link2: "CodeBlock_link2__Aq9b9",
        link3: "CodeBlock_link3__PGSSZ",
        link4: "CodeBlock_link4__uxBCa",
        link5: "CodeBlock_link5__M__bd",
        normal: "CodeBlock_normal__7qsYM",
        bold: "CodeBlock_bold__yRITt",
        link: "CodeBlock_link__EDtoO",
      };
    },
    2970: function (e) {
      e.exports = {
        cookieBanner: "CookieBanner_cookieBanner__9O7fw",
        copy: "CookieBanner_copy__ME37Y",
        link: "CookieBanner_link__eybLl",
        btn: "CookieBanner_btn__uG3GE",
        yes: "CookieBanner_yes__IiP0s",
        no: "CookieBanner_no__X2o0d",
        hidden: "CookieBanner_hidden__vwDcy",
      };
    },
    5180: function (e) {
      e.exports = {
        legalFooter: "LegalFooter_legalFooter__7x4Qn",
        link: "LegalFooter_link__vKBws",
        hidden: "LegalFooter_hidden__ruEAG",
      };
    },
    6634: function (e) {
      e.exports = {
        navRow: "NavLinks_navRow__NyE3P",
        link: "NavLinks_link__oO4_g",
        hidden: "NavLinks_hidden__y6ZGz",
      };
    },
    6662: function (e) {
      e.exports = {
        playbackControls: "PlaybackControls_playbackControls__Js7Pj",
        iconTrack: "PlaybackControls_iconTrack__2IRaP",
        icon: "PlaybackControls_icon__V54Je",
        iconVisible: "PlaybackControls_iconVisible__8BBd4",
        btn: "PlaybackControls_btn__MCppa",
        left: "PlaybackControls_left__5EVB0",
        right: "PlaybackControls_right__4kW_r",
        trackInfo: "PlaybackControls_trackInfo__x7mjE",
        title: "PlaybackControls_title__6506m",
        artist: "PlaybackControls_artist__o68Dc",
        pipe: "PlaybackControls_pipe__1VTV6",
        btnHover: "PlaybackControls_btnHover__fnnO_",
      };
    },
    575: function (e) {
      e.exports = {
        buffering: "Buffering_buffering__F_PD_",
        rotate: "Buffering_rotate__3k5ig",
        ring: "Buffering_ring__3SOjo",
        dash: "Buffering_dash__uSa6B",
      };
    },
  },
  function (e) {
    e.O(0, [737, 35, 61, 774, 888, 179], function () {
      return (n = 5728), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
