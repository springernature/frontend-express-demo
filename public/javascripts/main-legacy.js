"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  "use strict";

  var t = Math.ceil,
      e = Math.floor,
      n = function n(_n2) {
    return isNaN(_n2 = +_n2) ? 0 : (_n2 > 0 ? e : t)(_n2);
  },
      r = function r(t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
      o = function o(t) {
    return function (e, o) {
      var a,
          i,
          u = String(r(e)),
          c = n(o),
          s = u.length;
      return c < 0 || c >= s ? t ? "" : void 0 : (a = u.charCodeAt(c)) < 55296 || a > 56319 || c + 1 === s || (i = u.charCodeAt(c + 1)) < 56320 || i > 57343 ? t ? u.charAt(c) : a : t ? u.slice(c, c + 2) : i - 56320 + (a - 55296 << 10) + 65536;
    };
  },
      a = {
    codeAt: o(!1),
    charAt: o(!0)
  },
      i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function u(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }

  var c = function c(t) {
    return t && t.Math == Math && t;
  },
      s = c("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || c("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || c("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || c("object" == _typeof(i) && i) || Function("return this")(),
      f = function f(t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  },
      l = !f(function () {
    return 7 != Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1];
  }),
      h = function h(t) {
    return "object" == _typeof(t) ? null !== t : "function" == typeof t;
  },
      d = s.document,
      g = h(d) && h(d.createElement),
      m = function m(t) {
    return g ? d.createElement(t) : {};
  },
      y = !l && !f(function () {
    return 7 != Object.defineProperty(m("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      p = function p(t) {
    if (!h(t)) throw TypeError(String(t) + " is not an object");
    return t;
  },
      v = function v(t, e) {
    if (!h(t)) return t;
    var n, r;
    if (e && "function" == typeof (n = t.toString) && !h(r = n.call(t))) return r;
    if ("function" == typeof (n = t.valueOf) && !h(r = n.call(t))) return r;
    if (!e && "function" == typeof (n = t.toString) && !h(r = n.call(t))) return r;
    throw TypeError("Can't convert object to primitive value");
  },
      w = Object.defineProperty,
      b = {
    f: l ? w : function (t, e, n) {
      if (p(t), e = v(e, !0), p(n), y) try {
        return w(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (t[e] = n.value), t;
    }
  },
      T = function T(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  },
      x = l ? function (t, e, n) {
    return b.f(t, e, T(1, n));
  } : function (t, e, n) {
    return t[e] = n, t;
  },
      S = function S(t, e) {
    try {
      x(s, t, e);
    } catch (n) {
      s[t] = e;
    }

    return e;
  },
      O = s["__core-js_shared__"] || S("__core-js_shared__", {}),
      M = Function.toString;

  "function" != typeof O.inspectSource && (O.inspectSource = function (t) {
    return M.call(t);
  });

  var C,
      P,
      E,
      k = O.inspectSource,
      j = s.WeakMap,
      D = "function" == typeof j && /native code/.test(k(j)),
      U = {}.hasOwnProperty,
      L = function L(t, e) {
    return U.call(t, e);
  },
      W = u(function (t) {
    (t.exports = function (t, e) {
      return O[t] || (O[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }),
      _ = 0,
      N = Math.random(),
      A = function A(t) {
    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++_ + N).toString(36);
  },
      Y = W("keys"),
      F = function F(t) {
    return Y[t] || (Y[t] = A(t));
  },
      q = {},
      G = s.WeakMap;

  if (D) {
    var z = new G(),
        I = z.get,
        R = z.has,
        X = z.set;
    C = function C(t, e) {
      return X.call(z, t, e), e;
    }, P = function P(t) {
      return I.call(z, t) || {};
    }, E = function E(t) {
      return R.call(z, t);
    };
  } else {
    var H = F("state");
    q[H] = !0, C = function C(t, e) {
      return x(t, H, e), e;
    }, P = function P(t) {
      return L(t, H) ? t[H] : {};
    }, E = function E(t) {
      return L(t, H);
    };
  }

  var Q,
      B,
      J,
      V = {
    set: C,
    get: P,
    has: E,
    enforce: function enforce(t) {
      return E(t) ? P(t) : C(t, {});
    },
    getterFor: function getterFor(t) {
      return function (e) {
        var n;
        if (!h(e) || (n = P(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return n;
      };
    }
  },
      K = {}.propertyIsEnumerable,
      $ = Object.getOwnPropertyDescriptor,
      Z = {
    f: $ && !K.call({
      1: 2
    }, 1) ? function (t) {
      var e = $(this, t);
      return !!e && e.enumerable;
    } : K
  },
      tt = {}.toString,
      et = function et(t) {
    return tt.call(t).slice(8, -1);
  },
      nt = "".split,
      rt = f(function () {
    return !Object("z").propertyIsEnumerable(0);
  }) ? function (t) {
    return "String" == et(t) ? nt.call(t, "") : Object(t);
  } : Object,
      ot = function ot(t) {
    return rt(r(t));
  },
      at = Object.getOwnPropertyDescriptor,
      it = {
    f: l ? at : function (t, e) {
      if (t = ot(t), e = v(e, !0), y) try {
        return at(t, e);
      } catch (t) {}
      if (L(t, e)) return T(!Z.f.call(t, e), t[e]);
    }
  },
      ut = u(function (t) {
    var e = V.get,
        n = V.enforce,
        r = String(String).split("String");
    (t.exports = function (t, e, o, a) {
      var i = !!a && !!a.unsafe,
          u = !!a && !!a.enumerable,
          c = !!a && !!a.noTargetGet;
      "function" == typeof o && ("string" != typeof e || L(o, "name") || x(o, "name", e), n(o).source = r.join("string" == typeof e ? e : "")), t !== s ? (i ? !c && t[e] && (u = !0) : delete t[e], u ? t[e] = o : x(t, e, o)) : u ? t[e] = o : S(e, o);
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && e(this).source || k(this);
    });
  }),
      ct = s,
      st = function st(t) {
    return "function" == typeof t ? t : void 0;
  },
      ft = function ft(t, e) {
    return arguments.length < 2 ? st(ct[t]) || st(s[t]) : ct[t] && ct[t][e] || s[t] && s[t][e];
  },
      lt = Math.min,
      ht = function ht(t) {
    return t > 0 ? lt(n(t), 9007199254740991) : 0;
  },
      dt = Math.max,
      gt = Math.min,
      mt = function mt(t) {
    return function (e, r, o) {
      var a,
          i = ot(e),
          u = ht(i.length),
          c = function (t, e) {
        var r = n(t);
        return r < 0 ? dt(r + e, 0) : gt(r, e);
      }(o, u);

      if (t && r != r) {
        for (; u > c;) {
          if ((a = i[c++]) != a) return !0;
        }
      } else for (; u > c; c++) {
        if ((t || c in i) && i[c] === r) return t || c || 0;
      }

      return !t && -1;
    };
  },
      yt = {
    includes: mt(!0),
    indexOf: mt(!1)
  }.indexOf,
      pt = function pt(t, e) {
    var n,
        r = ot(t),
        o = 0,
        a = [];

    for (n in r) {
      !L(q, n) && L(r, n) && a.push(n);
    }

    for (; e.length > o;) {
      L(r, n = e[o++]) && (~yt(a, n) || a.push(n));
    }

    return a;
  },
      vt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
      wt = vt.concat("length", "prototype"),
      bt = {
    f: Object.getOwnPropertyNames || function (t) {
      return pt(t, wt);
    }
  },
      Tt = {
    f: Object.getOwnPropertySymbols
  },
      xt = ft("Reflect", "ownKeys") || function (t) {
    var e = bt.f(p(t)),
        n = Tt.f;
    return n ? e.concat(n(t)) : e;
  },
      St = function St(t, e) {
    for (var n = xt(e), r = b.f, o = it.f, a = 0; a < n.length; a++) {
      var i = n[a];
      L(t, i) || r(t, i, o(e, i));
    }
  },
      Ot = /#|\.prototype\./,
      Mt = function Mt(t, e) {
    var n = Pt[Ct(t)];
    return n == kt || n != Et && ("function" == typeof e ? f(e) : !!e);
  },
      Ct = Mt.normalize = function (t) {
    return String(t).replace(Ot, ".").toLowerCase();
  },
      Pt = Mt.data = {},
      Et = Mt.NATIVE = "N",
      kt = Mt.POLYFILL = "P",
      jt = Mt,
      Dt = it.f,
      Ut = function Ut(t, e) {
    var n,
        r,
        o,
        a,
        i,
        u = t.target,
        c = t.global,
        f = t.stat;
    if (n = c ? s : f ? s[u] || S(u, {}) : (s[u] || {}).prototype) for (r in e) {
      if (a = e[r], o = t.noTargetGet ? (i = Dt(n, r)) && i.value : n[r], !jt(c ? r : u + (f ? "." : "#") + r, t.forced) && void 0 !== o) {
        if (_typeof(a) == _typeof(o)) continue;
        St(a, o);
      }

      (t.sham || o && o.sham) && x(a, "sham", !0), ut(n, r, a, t);
    }
  },
      Lt = function Lt(t) {
    return Object(r(t));
  },
      Wt = !f(function () {
    function t() {}

    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  }),
      _t = F("IE_PROTO"),
      Nt = Object.prototype,
      At = Wt ? Object.getPrototypeOf : function (t) {
    return t = Lt(t), L(t, _t) ? t[_t] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Nt : null;
  },
      Yt = !!Object.getOwnPropertySymbols && !f(function () {
    return !String(Symbol());
  }),
      Ft = Yt && !Symbol.sham && "symbol" == _typeof(Symbol.iterator),
      qt = W("wks"),
      Gt = s.Symbol,
      zt = Ft ? Gt : Gt && Gt.withoutSetter || A,
      It = function It(t) {
    return L(qt, t) || (Yt && L(Gt, t) ? qt[t] = Gt[t] : qt[t] = zt("Symbol." + t)), qt[t];
  },
      Rt = It("iterator"),
      Xt = !1;

  [].keys && ("next" in (J = [].keys()) ? (B = At(At(J))) !== Object.prototype && (Q = B) : Xt = !0), null == Q && (Q = {}), L(Q, Rt) || x(Q, Rt, function () {
    return this;
  });

  var Ht,
      Qt = {
    IteratorPrototype: Q,
    BUGGY_SAFARI_ITERATORS: Xt
  },
      Bt = Object.keys || function (t) {
    return pt(t, vt);
  },
      Jt = l ? Object.defineProperties : function (t, e) {
    p(t);

    for (var n, r = Bt(e), o = r.length, a = 0; o > a;) {
      b.f(t, n = r[a++], e[n]);
    }

    return t;
  },
      Vt = ft("document", "documentElement"),
      Kt = F("IE_PROTO"),
      $t = function $t() {},
      Zt = function Zt(t) {
    return "<script>" + t + "<\/script>";
  },
      _te = function te() {
    try {
      Ht = document.domain && new ActiveXObject("htmlfile");
    } catch (t) {}

    var t, e;
    _te = Ht ? function (t) {
      t.write(Zt("")), t.close();
      var e = t.parentWindow.Object;
      return t = null, e;
    }(Ht) : ((e = m("iframe")).style.display = "none", Vt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Zt("document.F=Object")), t.close(), t.F);

    for (var n = vt.length; n--;) {
      delete _te.prototype[vt[n]];
    }

    return _te();
  };

  q[Kt] = !0;

  var ee = Object.create || function (t, e) {
    var n;
    return null !== t ? ($t.prototype = p(t), n = new $t(), $t.prototype = null, n[Kt] = t) : n = _te(), void 0 === e ? n : Jt(n, e);
  },
      ne = b.f,
      re = It("toStringTag"),
      oe = function oe(t, e, n) {
    t && !L(t = n ? t : t.prototype, re) && ne(t, re, {
      configurable: !0,
      value: e
    });
  },
      ae = {},
      ie = Qt.IteratorPrototype,
      ue = function ue() {
    return this;
  },
      ce = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t,
        e = !1,
        n = {};

    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array;
    } catch (t) {}

    return function (n, r) {
      return p(n), function (t) {
        if (!h(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      }(r), e ? t.call(n, r) : n.__proto__ = r, n;
    };
  }() : void 0),
      se = Qt.IteratorPrototype,
      fe = Qt.BUGGY_SAFARI_ITERATORS,
      le = It("iterator"),
      he = function he() {
    return this;
  },
      de = a.charAt,
      ge = V.set,
      me = V.getterFor("String Iterator");

  !function (t, e, n, r, o, a, i) {
    !function (t, e, n) {
      var r = e + " Iterator";
      t.prototype = ee(ie, {
        next: T(1, n)
      }), oe(t, r, !1), ae[r] = ue;
    }(n, e, r);

    var u,
        c,
        s,
        f = function f(t) {
      if (t === o && m) return m;
      if (!fe && t in d) return d[t];

      switch (t) {
        case "keys":
        case "values":
        case "entries":
          return function () {
            return new n(this, t);
          };
      }

      return function () {
        return new n(this);
      };
    },
        l = e + " Iterator",
        h = !1,
        d = t.prototype,
        g = d[le] || d["@@iterator"] || o && d[o],
        m = !fe && g || f(o),
        y = "Array" == e && d.entries || g;

    if (y && (u = At(y.call(new t())), se !== Object.prototype && u.next && (At(u) !== se && (ce ? ce(u, se) : "function" != typeof u[le] && x(u, le, he)), oe(u, l, !0))), "values" == o && g && "values" !== g.name && (h = !0, m = function m() {
      return g.call(this);
    }), d[le] !== m && x(d, le, m), ae[e] = m, o) if (c = {
      values: f("values"),
      keys: a ? m : f("keys"),
      entries: f("entries")
    }, i) for (s in c) {
      (fe || h || !(s in d)) && ut(d, s, c[s]);
    } else Ut({
      target: e,
      proto: !0,
      forced: fe || h
    }, c);
  }(String, "String", function (t) {
    ge(this, {
      type: "String Iterator",
      string: String(t),
      index: 0
    });
  }, function () {
    var t,
        e = me(this),
        n = e.string,
        r = e.index;
    return r >= n.length ? {
      value: void 0,
      done: !0
    } : (t = de(n, r), e.index += t.length, {
      value: t,
      done: !1
    });
  });

  var ye = function ye(t, e, n) {
    if (function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
    }(t), void 0 === e) return t;

    switch (n) {
      case 0:
        return function () {
          return t.call(e);
        };

      case 1:
        return function (n) {
          return t.call(e, n);
        };

      case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };

      case 3:
        return function (n, r, o) {
          return t.call(e, n, r, o);
        };
    }

    return function () {
      return t.apply(e, arguments);
    };
  },
      pe = function pe(t, e, n, r) {
    try {
      return r ? e(p(n)[0], n[1]) : e(n);
    } catch (e) {
      var o = t["return"];
      throw void 0 !== o && p(o.call(t)), e;
    }
  },
      ve = It("iterator"),
      we = Array.prototype,
      be = function be(t) {
    return void 0 !== t && (ae.Array === t || we[ve] === t);
  },
      Te = function Te(t, e, n) {
    var r = v(e);
    r in t ? b.f(t, r, T(0, n)) : t[r] = n;
  },
      xe = {};

  xe[It("toStringTag")] = "z";

  var Se = "[object z]" === String(xe),
      Oe = It("toStringTag"),
      Me = "Arguments" == et(function () {
    return arguments;
  }()),
      Ce = Se ? et : function (t) {
    var e, n, r;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
      try {
        return t[e];
      } catch (t) {}
    }(e = Object(t), Oe)) ? n : Me ? et(e) : "Object" == (r = et(e)) && "function" == typeof e.callee ? "Arguments" : r;
  },
      Pe = It("iterator"),
      Ee = function Ee(t) {
    if (null != t) return t[Pe] || t["@@iterator"] || ae[Ce(t)];
  },
      ke = It("iterator"),
      je = !1;

  try {
    var De = 0,
        Ue = {
      next: function next() {
        return {
          done: !!De++
        };
      },
      "return": function _return() {
        je = !0;
      }
    };
    Ue[ke] = function () {
      return this;
    }, Array.from(Ue, function () {
      throw 2;
    });
  } catch (t) {}

  var Le = !function (t, e) {
    if (!e && !je) return !1;
    var n = !1;

    try {
      var r = {};
      r[ke] = function () {
        return {
          next: function next() {
            return {
              done: n = !0
            };
          }
        };
      }, t(r);
    } catch (t) {}

    return n;
  }(function (t) {
    Array.from(t);
  });
  Ut({
    target: "Array",
    stat: !0,
    forced: Le
  }, {
    from: function from(t) {
      var e,
          n,
          r,
          o,
          a,
          i,
          u = Lt(t),
          c = "function" == typeof this ? this : Array,
          s = arguments.length,
          f = s > 1 ? arguments[1] : void 0,
          l = void 0 !== f,
          h = Ee(u),
          d = 0;
      if (l && (f = ye(f, s > 2 ? arguments[2] : void 0, 2)), null == h || c == Array && be(h)) for (n = new c(e = ht(u.length)); e > d; d++) {
        i = l ? f(u[d], d) : u[d], Te(n, d, i);
      } else for (a = (o = h.call(u)).next, n = new c(); !(r = a.call(o)).done; d++) {
        i = l ? pe(o, f, [r.value, d], !0) : r.value, Te(n, d, i);
      }
      return n.length = d, n;
    }
  });
  ct.Array.from, u(function (t) {
    var e = function (t) {
      var e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          a = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";

      function u(t, e, n) {
        return Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), t[e];
      }

      try {
        u({}, "");
      } catch (t) {
        u = function u(t, e, n) {
          return t[e] = n;
        };
      }

      function c(t, e, n, r) {
        var o = e && e.prototype instanceof l ? e : l,
            a = Object.create(o.prototype),
            i = new S(r || []);
        return a._invoke = function (t, e, n) {
          var r = "suspendedStart";
          return function (o, a) {
            if ("executing" === r) throw new Error("Generator is already running");

            if ("completed" === r) {
              if ("throw" === o) throw a;
              return M();
            }

            for (n.method = o, n.arg = a;;) {
              var i = n.delegate;

              if (i) {
                var u = b(i, n);

                if (u) {
                  if (u === f) continue;
                  return u;
                }
              }

              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw r = "completed", n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var c = s(t, e, n);

              if ("normal" === c.type) {
                if (r = n.done ? "completed" : "suspendedYield", c.arg === f) continue;
                return {
                  value: c.arg,
                  done: n.done
                };
              }

              "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
            }
          };
        }(t, n, i), a;
      }

      function s(t, e, n) {
        try {
          return {
            type: "normal",
            arg: t.call(e, n)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }

      t.wrap = c;
      var f = {};

      function l() {}

      function h() {}

      function d() {}

      var g = {};

      g[o] = function () {
        return this;
      };

      var m = Object.getPrototypeOf,
          y = m && m(m(O([])));
      y && y !== e && n.call(y, o) && (g = y);
      var p = d.prototype = l.prototype = Object.create(g);

      function v(t) {
        ["next", "throw", "return"].forEach(function (e) {
          u(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }

      function w(t, e) {
        var r;

        this._invoke = function (o, a) {
          function i() {
            return new e(function (r, i) {
              !function r(o, a, i, u) {
                var c = s(t[o], t, a);

                if ("throw" !== c.type) {
                  var f = c.arg,
                      l = f.value;
                  return l && "object" == _typeof(l) && n.call(l, "__await") ? e.resolve(l.__await).then(function (t) {
                    r("next", t, i, u);
                  }, function (t) {
                    r("throw", t, i, u);
                  }) : e.resolve(l).then(function (t) {
                    f.value = t, i(f);
                  }, function (t) {
                    return r("throw", t, i, u);
                  });
                }

                u(c.arg);
              }(o, a, r, i);
            });
          }

          return r = r ? r.then(i, i) : i();
        };
      }

      function b(t, e) {
        var n = t.iterator[e.method];

        if (void 0 === n) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator["return"] && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return f;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return f;
        }

        var r = s(n, t.iterator, e.arg);
        if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, f;
        var o = r.arg;
        return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f);
      }

      function T(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }

      function x(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }

      function S(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(T, this), this.reset(!0);
      }

      function O(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var r = -1,
                a = function e() {
              for (; ++r < t.length;) {
                if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
              }

              return e.value = void 0, e.done = !0, e;
            };

            return a.next = a;
          }
        }

        return {
          next: M
        };
      }

      function M() {
        return {
          value: void 0,
          done: !0
        };
      }

      return h.prototype = p.constructor = d, d.constructor = h, h.displayName = u(d, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, i, "GeneratorFunction")), t.prototype = Object.create(p), t;
      }, t.awrap = function (t) {
        return {
          __await: t
        };
      }, v(w.prototype), w.prototype[a] = function () {
        return this;
      }, t.AsyncIterator = w, t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new w(c(e, n, r, o), a);
        return t.isGeneratorFunction(n) ? i : i.next().then(function (t) {
          return t.done ? t.value : i.next();
        });
      }, v(p), u(p, i, "Generator"), p[o] = function () {
        return this;
      }, p.toString = function () {
        return "[object Generator]";
      }, t.keys = function (t) {
        var e = [];

        for (var n in t) {
          e.push(n);
        }

        return e.reverse(), function n() {
          for (; e.length;) {
            var r = e.pop();
            if (r in t) return n.value = r, n.done = !1, n;
          }

          return n.done = !0, n;
        };
      }, t.values = O, S.prototype = {
        constructor: S,
        reset: function reset(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t) for (var e in this) {
            "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
          }
        },
        stop: function stop() {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(t) {
          if (this.done) throw t;
          var e = this;

          function r(n, r) {
            return i.type = "throw", i.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r;
          }

          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
                i = a.completion;
            if ("root" === a.tryLoc) return r("end");

            if (a.tryLoc <= this.prev) {
              var u = n.call(a, "catchLoc"),
                  c = n.call(a, "finallyLoc");

              if (u && c) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return r(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return r(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];

            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var a = o;
              break;
            }
          }

          a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
          var i = a ? a.completion : {};
          return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(i);
        },
        complete: function complete(t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f;
        },
        finish: function finish(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), f;
          }
        },
        "catch": function _catch(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];

            if (n.tryLoc === t) {
              var r = n.completion;

              if ("throw" === r.type) {
                var o = r.arg;
                x(n);
              }

              return o;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(t, e, n) {
          return this.delegate = {
            iterator: O(t),
            resultName: e,
            nextLoc: n
          }, "next" === this.method && (this.arg = void 0), f;
        }
      }, t;
    }(t.exports);

    try {
      regeneratorRuntime = e;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(e);
    }
  });

  function We(t) {
    if (null === t || !0 === t || !1 === t) return NaN;
    var e = Number(t);
    return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
  }

  function _e(t, e) {
    if (e.length < t) throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
  }

  function Ne(t) {
    _e(1, arguments);

    var e = Object.prototype.toString.call(t);
    return t instanceof Date || "object" == _typeof(t) && "[object Date]" === e ? new Date(t.getTime()) : "number" == typeof t || "[object Number]" === e ? new Date(t) : ("string" != typeof t && "[object String]" !== e || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)), new Date(NaN));
  }

  function Ae(t, e) {
    _e(2, arguments);

    var n = Ne(t).getTime(),
        r = We(e);
    return new Date(n + r);
  }

  function Ye(t) {
    return t.getTime() % 6e4;
  }

  function Fe(t) {
    var e = new Date(t.getTime()),
        n = Math.ceil(e.getTimezoneOffset());
    return e.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + Ye(e)) % 6e4 : Ye(e));
  }

  function qe(t) {
    _e(1, arguments);

    var e = Ne(t);
    return !isNaN(e);
  }

  var Ge = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };

  function ze(t) {
    return function (e) {
      var n = e || {},
          r = n.width ? String(n.width) : t.defaultWidth;
      return t.formats[r] || t.formats[t.defaultWidth];
    };
  }

  var Ie = {
    date: ze({
      formats: {
        full: "EEEE, MMMM do, y",
        "long": "MMMM do, y",
        medium: "MMM d, y",
        "short": "MM/dd/yyyy"
      },
      defaultWidth: "full"
    }),
    time: ze({
      formats: {
        full: "h:mm:ss a zzzz",
        "long": "h:mm:ss a z",
        medium: "h:mm:ss a",
        "short": "h:mm a"
      },
      defaultWidth: "full"
    }),
    dateTime: ze({
      formats: {
        full: "{{date}} 'at' {{time}}",
        "long": "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        "short": "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  },
      Re = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };

  function Xe(t) {
    return function (e, n) {
      var r,
          o = n || {};

      if ("formatting" === (o.context ? String(o.context) : "standalone") && t.formattingValues) {
        var a = t.defaultFormattingWidth || t.defaultWidth,
            i = o.width ? String(o.width) : a;
        r = t.formattingValues[i] || t.formattingValues[a];
      } else {
        var u = t.defaultWidth,
            c = o.width ? String(o.width) : t.defaultWidth;
        r = t.values[c] || t.values[u];
      }

      return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }

  function He(t) {
    return function (e, n) {
      var r = String(e),
          o = n || {},
          a = o.width,
          i = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth],
          u = r.match(i);
      if (!u) return null;
      var c,
          s = u[0],
          f = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth];
      return c = "[object Array]" === Object.prototype.toString.call(f) ? function (t, e) {
        for (var n = 0; n < t.length; n++) {
          if (e(t[n])) return n;
        }
      }(f, function (t) {
        return t.test(s);
      }) : function (t, e) {
        for (var n in t) {
          if (t.hasOwnProperty(n) && e(t[n])) return n;
        }
      }(f, function (t) {
        return t.test(s);
      }), c = t.valueCallback ? t.valueCallback(c) : c, {
        value: c = o.valueCallback ? o.valueCallback(c) : c,
        rest: r.slice(s.length)
      };
    };
  }

  var Qe,
      Be = {
    code: "en-US",
    formatDistance: function formatDistance(t, e, n) {
      var r;
      return n = n || {}, r = "string" == typeof Ge[t] ? Ge[t] : 1 === e ? Ge[t].one : Ge[t].other.replace("{{count}}", e), n.addSuffix ? n.comparison > 0 ? "in " + r : r + " ago" : r;
    },
    formatLong: Ie,
    formatRelative: function formatRelative(t, e, n, r) {
      return Re[t];
    },
    localize: {
      ordinalNumber: function ordinalNumber(t, e) {
        var n = Number(t),
            r = n % 100;
        if (r > 20 || r < 10) switch (r % 10) {
          case 1:
            return n + "st";

          case 2:
            return n + "nd";

          case 3:
            return n + "rd";
        }
        return n + "th";
      },
      era: Xe({
        values: {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"]
        },
        defaultWidth: "wide"
      }),
      quarter: Xe({
        values: {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
        },
        defaultWidth: "wide",
        argumentCallback: function argumentCallback(t) {
          return Number(t) - 1;
        }
      }),
      month: Xe({
        values: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        defaultWidth: "wide"
      }),
      day: Xe({
        values: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          "short": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        defaultWidth: "wide"
      }),
      dayPeriod: Xe({
        values: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
          }
        },
        defaultWidth: "wide",
        formattingValues: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
          }
        },
        defaultFormattingWidth: "wide"
      })
    },
    match: {
      ordinalNumber: (Qe = {
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: function valueCallback(t) {
          return parseInt(t, 10);
        }
      }, function (t, e) {
        var n = String(t),
            r = e || {},
            o = n.match(Qe.matchPattern);
        if (!o) return null;
        var a = o[0],
            i = n.match(Qe.parsePattern);
        if (!i) return null;
        var u = Qe.valueCallback ? Qe.valueCallback(i[0]) : i[0];
        return {
          value: u = r.valueCallback ? r.valueCallback(u) : u,
          rest: n.slice(a.length)
        };
      }),
      era: He({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          any: [/^b/i, /^(a|c)/i]
        },
        defaultParseWidth: "any"
      }),
      quarter: He({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          any: [/1/i, /2/i, /3/i, /4/i]
        },
        defaultParseWidth: "any",
        valueCallback: function valueCallback(t) {
          return t + 1;
        }
      }),
      month: He({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
          any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        },
        defaultParseWidth: "any"
      }),
      day: He({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          "short": /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
        },
        defaultParseWidth: "any"
      }),
      dayPeriod: He({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
        },
        defaultMatchWidth: "any",
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
          }
        },
        defaultParseWidth: "any"
      })
    },
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };

  function Je(t, e) {
    _e(2, arguments);

    var n = We(e);
    return Ae(t, -n);
  }

  function Ve(t, e) {
    for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e;) {
      r = "0" + r;
    }

    return n + r;
  }

  var Ke = function Ke(t, e) {
    var n = t.getUTCFullYear(),
        r = n > 0 ? n : 1 - n;
    return Ve("yy" === e ? r % 100 : r, e.length);
  },
      $e = function $e(t, e) {
    var n = t.getUTCMonth();
    return "M" === e ? String(n + 1) : Ve(n + 1, 2);
  },
      Ze = function Ze(t, e) {
    return Ve(t.getUTCDate(), e.length);
  },
      tn = function tn(t, e) {
    return Ve(t.getUTCHours() % 12 || 12, e.length);
  },
      en = function en(t, e) {
    return Ve(t.getUTCHours(), e.length);
  },
      nn = function nn(t, e) {
    return Ve(t.getUTCMinutes(), e.length);
  },
      rn = function rn(t, e) {
    return Ve(t.getUTCSeconds(), e.length);
  },
      on = function on(t, e) {
    var n = e.length,
        r = t.getUTCMilliseconds();
    return Ve(Math.floor(r * Math.pow(10, n - 3)), e.length);
  };

  function an(t) {
    _e(1, arguments);

    var e = 1,
        n = Ne(t),
        r = n.getUTCDay(),
        o = (r < e ? 7 : 0) + r - e;
    return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
  }

  function un(t) {
    _e(1, arguments);

    var e = Ne(t),
        n = e.getUTCFullYear(),
        r = new Date(0);
    r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
    var o = an(r),
        a = new Date(0);
    a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
    var i = an(a);
    return e.getTime() >= o.getTime() ? n + 1 : e.getTime() >= i.getTime() ? n : n - 1;
  }

  function cn(t) {
    _e(1, arguments);

    var e = un(t),
        n = new Date(0);
    n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
    var r = an(n);
    return r;
  }

  function sn(t, e) {
    _e(1, arguments);

    var n = e || {},
        r = n.locale,
        o = r && r.options && r.options.weekStartsOn,
        a = null == o ? 0 : We(o),
        i = null == n.weekStartsOn ? a : We(n.weekStartsOn);
    if (!(i >= 0 && i <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var u = Ne(t),
        c = u.getUTCDay(),
        s = (c < i ? 7 : 0) + c - i;
    return u.setUTCDate(u.getUTCDate() - s), u.setUTCHours(0, 0, 0, 0), u;
  }

  function fn(t, e) {
    _e(1, arguments);

    var n = Ne(t, e),
        r = n.getUTCFullYear(),
        o = e || {},
        a = o.locale,
        i = a && a.options && a.options.firstWeekContainsDate,
        u = null == i ? 1 : We(i),
        c = null == o.firstWeekContainsDate ? u : We(o.firstWeekContainsDate);
    if (!(c >= 1 && c <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var s = new Date(0);
    s.setUTCFullYear(r + 1, 0, c), s.setUTCHours(0, 0, 0, 0);
    var f = sn(s, e),
        l = new Date(0);
    l.setUTCFullYear(r, 0, c), l.setUTCHours(0, 0, 0, 0);
    var h = sn(l, e);
    return n.getTime() >= f.getTime() ? r + 1 : n.getTime() >= h.getTime() ? r : r - 1;
  }

  function ln(t, e) {
    _e(1, arguments);

    var n = e || {},
        r = n.locale,
        o = r && r.options && r.options.firstWeekContainsDate,
        a = null == o ? 1 : We(o),
        i = null == n.firstWeekContainsDate ? a : We(n.firstWeekContainsDate),
        u = fn(t, e),
        c = new Date(0);
    c.setUTCFullYear(u, 0, i), c.setUTCHours(0, 0, 0, 0);
    var s = sn(c, e);
    return s;
  }

  var hn = "midnight",
      dn = "noon",
      gn = "morning",
      mn = "afternoon",
      yn = "evening",
      pn = "night",
      vn = {
    G: function G(t, e, n) {
      var r = t.getUTCFullYear() > 0 ? 1 : 0;

      switch (e) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, {
            width: "abbreviated"
          });

        case "GGGGG":
          return n.era(r, {
            width: "narrow"
          });

        case "GGGG":
        default:
          return n.era(r, {
            width: "wide"
          });
      }
    },
    y: function y(t, e, n) {
      if ("yo" === e) {
        var r = t.getUTCFullYear(),
            o = r > 0 ? r : 1 - r;
        return n.ordinalNumber(o, {
          unit: "year"
        });
      }

      return Ke(t, e);
    },
    Y: function Y(t, e, n, r) {
      var o = fn(t, r),
          a = o > 0 ? o : 1 - o;
      return "YY" === e ? Ve(a % 100, 2) : "Yo" === e ? n.ordinalNumber(a, {
        unit: "year"
      }) : Ve(a, e.length);
    },
    R: function R(t, e) {
      return Ve(un(t), e.length);
    },
    u: function u(t, e) {
      return Ve(t.getUTCFullYear(), e.length);
    },
    Q: function Q(t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3);

      switch (e) {
        case "Q":
          return String(r);

        case "QQ":
          return Ve(r, 2);

        case "Qo":
          return n.ordinalNumber(r, {
            unit: "quarter"
          });

        case "QQQ":
          return n.quarter(r, {
            width: "abbreviated",
            context: "formatting"
          });

        case "QQQQQ":
          return n.quarter(r, {
            width: "narrow",
            context: "formatting"
          });

        case "QQQQ":
        default:
          return n.quarter(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    q: function q(t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3);

      switch (e) {
        case "q":
          return String(r);

        case "qq":
          return Ve(r, 2);

        case "qo":
          return n.ordinalNumber(r, {
            unit: "quarter"
          });

        case "qqq":
          return n.quarter(r, {
            width: "abbreviated",
            context: "standalone"
          });

        case "qqqqq":
          return n.quarter(r, {
            width: "narrow",
            context: "standalone"
          });

        case "qqqq":
        default:
          return n.quarter(r, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    M: function M(t, e, n) {
      var r = t.getUTCMonth();

      switch (e) {
        case "M":
        case "MM":
          return $e(t, e);

        case "Mo":
          return n.ordinalNumber(r + 1, {
            unit: "month"
          });

        case "MMM":
          return n.month(r, {
            width: "abbreviated",
            context: "formatting"
          });

        case "MMMMM":
          return n.month(r, {
            width: "narrow",
            context: "formatting"
          });

        case "MMMM":
        default:
          return n.month(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    L: function L(t, e, n) {
      var r = t.getUTCMonth();

      switch (e) {
        case "L":
          return String(r + 1);

        case "LL":
          return Ve(r + 1, 2);

        case "Lo":
          return n.ordinalNumber(r + 1, {
            unit: "month"
          });

        case "LLL":
          return n.month(r, {
            width: "abbreviated",
            context: "standalone"
          });

        case "LLLLL":
          return n.month(r, {
            width: "narrow",
            context: "standalone"
          });

        case "LLLL":
        default:
          return n.month(r, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    w: function w(t, e, n, r) {
      var o = function (t, e) {
        _e(1, arguments);

        var n = Ne(t),
            r = sn(n, e).getTime() - ln(n, e).getTime();
        return Math.round(r / 6048e5) + 1;
      }(t, r);

      return "wo" === e ? n.ordinalNumber(o, {
        unit: "week"
      }) : Ve(o, e.length);
    },
    I: function I(t, e, n) {
      var r = function (t) {
        _e(1, arguments);

        var e = Ne(t),
            n = an(e).getTime() - cn(e).getTime();
        return Math.round(n / 6048e5) + 1;
      }(t);

      return "Io" === e ? n.ordinalNumber(r, {
        unit: "week"
      }) : Ve(r, e.length);
    },
    d: function d(t, e, n) {
      return "do" === e ? n.ordinalNumber(t.getUTCDate(), {
        unit: "date"
      }) : Ze(t, e);
    },
    D: function D(t, e, n) {
      var r = function (t) {
        _e(1, arguments);

        var e = Ne(t),
            n = e.getTime();
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        var r = e.getTime(),
            o = n - r;
        return Math.floor(o / 864e5) + 1;
      }(t);

      return "Do" === e ? n.ordinalNumber(r, {
        unit: "dayOfYear"
      }) : Ve(r, e.length);
    },
    E: function E(t, e, n) {
      var r = t.getUTCDay();

      switch (e) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, {
            width: "abbreviated",
            context: "formatting"
          });

        case "EEEEE":
          return n.day(r, {
            width: "narrow",
            context: "formatting"
          });

        case "EEEEEE":
          return n.day(r, {
            width: "short",
            context: "formatting"
          });

        case "EEEE":
        default:
          return n.day(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    e: function e(t, _e2, n, r) {
      var o = t.getUTCDay(),
          a = (o - r.weekStartsOn + 8) % 7 || 7;

      switch (_e2) {
        case "e":
          return String(a);

        case "ee":
          return Ve(a, 2);

        case "eo":
          return n.ordinalNumber(a, {
            unit: "day"
          });

        case "eee":
          return n.day(o, {
            width: "abbreviated",
            context: "formatting"
          });

        case "eeeee":
          return n.day(o, {
            width: "narrow",
            context: "formatting"
          });

        case "eeeeee":
          return n.day(o, {
            width: "short",
            context: "formatting"
          });

        case "eeee":
        default:
          return n.day(o, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    c: function c(t, e, n, r) {
      var o = t.getUTCDay(),
          a = (o - r.weekStartsOn + 8) % 7 || 7;

      switch (e) {
        case "c":
          return String(a);

        case "cc":
          return Ve(a, e.length);

        case "co":
          return n.ordinalNumber(a, {
            unit: "day"
          });

        case "ccc":
          return n.day(o, {
            width: "abbreviated",
            context: "standalone"
          });

        case "ccccc":
          return n.day(o, {
            width: "narrow",
            context: "standalone"
          });

        case "cccccc":
          return n.day(o, {
            width: "short",
            context: "standalone"
          });

        case "cccc":
        default:
          return n.day(o, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    i: function i(t, e, n) {
      var r = t.getUTCDay(),
          o = 0 === r ? 7 : r;

      switch (e) {
        case "i":
          return String(o);

        case "ii":
          return Ve(o, e.length);

        case "io":
          return n.ordinalNumber(o, {
            unit: "day"
          });

        case "iii":
          return n.day(r, {
            width: "abbreviated",
            context: "formatting"
          });

        case "iiiii":
          return n.day(r, {
            width: "narrow",
            context: "formatting"
          });

        case "iiiiii":
          return n.day(r, {
            width: "short",
            context: "formatting"
          });

        case "iiii":
        default:
          return n.day(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    a: function a(t, e, n) {
      var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";

      switch (e) {
        case "a":
        case "aa":
        case "aaa":
          return n.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting"
          });

        case "aaaaa":
          return n.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });

        case "aaaa":
        default:
          return n.dayPeriod(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    b: function b(t, e, n) {
      var r,
          o = t.getUTCHours();

      switch (r = 12 === o ? dn : 0 === o ? hn : o / 12 >= 1 ? "pm" : "am", e) {
        case "b":
        case "bb":
        case "bbb":
          return n.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting"
          });

        case "bbbbb":
          return n.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });

        case "bbbb":
        default:
          return n.dayPeriod(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    B: function B(t, e, n) {
      var r,
          o = t.getUTCHours();

      switch (r = o >= 17 ? yn : o >= 12 ? mn : o >= 4 ? gn : pn, e) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting"
          });

        case "BBBBB":
          return n.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });

        case "BBBB":
        default:
          return n.dayPeriod(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    h: function h(t, e, n) {
      if ("ho" === e) {
        var r = t.getUTCHours() % 12;
        return 0 === r && (r = 12), n.ordinalNumber(r, {
          unit: "hour"
        });
      }

      return tn(t, e);
    },
    H: function H(t, e, n) {
      return "Ho" === e ? n.ordinalNumber(t.getUTCHours(), {
        unit: "hour"
      }) : en(t, e);
    },
    K: function K(t, e, n) {
      var r = t.getUTCHours() % 12;
      return "Ko" === e ? n.ordinalNumber(r, {
        unit: "hour"
      }) : Ve(r, e.length);
    },
    k: function k(t, e, n) {
      var r = t.getUTCHours();
      return 0 === r && (r = 24), "ko" === e ? n.ordinalNumber(r, {
        unit: "hour"
      }) : Ve(r, e.length);
    },
    m: function m(t, e, n) {
      return "mo" === e ? n.ordinalNumber(t.getUTCMinutes(), {
        unit: "minute"
      }) : nn(t, e);
    },
    s: function s(t, e, n) {
      return "so" === e ? n.ordinalNumber(t.getUTCSeconds(), {
        unit: "second"
      }) : rn(t, e);
    },
    S: function S(t, e) {
      return on(t, e);
    },
    X: function X(t, e, n, r) {
      var o = (r._originalDate || t).getTimezoneOffset();
      if (0 === o) return "Z";

      switch (e) {
        case "X":
          return bn(o);

        case "XXXX":
        case "XX":
          return Tn(o);

        case "XXXXX":
        case "XXX":
        default:
          return Tn(o, ":");
      }
    },
    x: function x(t, e, n, r) {
      var o = (r._originalDate || t).getTimezoneOffset();

      switch (e) {
        case "x":
          return bn(o);

        case "xxxx":
        case "xx":
          return Tn(o);

        case "xxxxx":
        case "xxx":
        default:
          return Tn(o, ":");
      }
    },
    O: function O(t, e, n, r) {
      var o = (r._originalDate || t).getTimezoneOffset();

      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + wn(o, ":");

        case "OOOO":
        default:
          return "GMT" + Tn(o, ":");
      }
    },
    z: function z(t, e, n, r) {
      var o = (r._originalDate || t).getTimezoneOffset();

      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + wn(o, ":");

        case "zzzz":
        default:
          return "GMT" + Tn(o, ":");
      }
    },
    t: function t(_t2, e, n, r) {
      var o = r._originalDate || _t2;
      return Ve(Math.floor(o.getTime() / 1e3), e.length);
    },
    T: function T(t, e, n, r) {
      return Ve((r._originalDate || t).getTime(), e.length);
    }
  };

  function wn(t, e) {
    var n = t > 0 ? "-" : "+",
        r = Math.abs(t),
        o = Math.floor(r / 60),
        a = r % 60;
    if (0 === a) return n + String(o);
    var i = e || "";
    return n + String(o) + i + Ve(a, 2);
  }

  function bn(t, e) {
    return t % 60 == 0 ? (t > 0 ? "-" : "+") + Ve(Math.abs(t) / 60, 2) : Tn(t, e);
  }

  function Tn(t, e) {
    var n = e || "",
        r = t > 0 ? "-" : "+",
        o = Math.abs(t);
    return r + Ve(Math.floor(o / 60), 2) + n + Ve(o % 60, 2);
  }

  function xn(t, e) {
    switch (t) {
      case "P":
        return e.date({
          width: "short"
        });

      case "PP":
        return e.date({
          width: "medium"
        });

      case "PPP":
        return e.date({
          width: "long"
        });

      case "PPPP":
      default:
        return e.date({
          width: "full"
        });
    }
  }

  function Sn(t, e) {
    switch (t) {
      case "p":
        return e.time({
          width: "short"
        });

      case "pp":
        return e.time({
          width: "medium"
        });

      case "ppp":
        return e.time({
          width: "long"
        });

      case "pppp":
      default:
        return e.time({
          width: "full"
        });
    }
  }

  var On = {
    p: Sn,
    P: function P(t, e) {
      var n,
          r = t.match(/(P+)(p+)?/),
          o = r[1],
          a = r[2];
      if (!a) return xn(t, e);

      switch (o) {
        case "P":
          n = e.dateTime({
            width: "short"
          });
          break;

        case "PP":
          n = e.dateTime({
            width: "medium"
          });
          break;

        case "PPP":
          n = e.dateTime({
            width: "long"
          });
          break;

        case "PPPP":
        default:
          n = e.dateTime({
            width: "full"
          });
      }

      return n.replace("{{date}}", xn(o, e)).replace("{{time}}", Sn(a, e));
    }
  },
      Mn = ["D", "DD"],
      Cn = ["YY", "YYYY"];

  function Pn(t) {
    return -1 !== Mn.indexOf(t);
  }

  function En(t) {
    return -1 !== Cn.indexOf(t);
  }

  function kn(t, e, n) {
    if ("YYYY" === t) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
    if ("YY" === t) throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
    if ("D" === t) throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"));
    if ("DD" === t) throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"));
  }

  var jn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      Dn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      Un = /^'([^]*?)'?$/,
      Ln = /''/g,
      Wn = /[a-zA-Z]/;

  function _n(t) {
    return t.match(Un)[1].replace(Ln, "'");
  }

  var Nn = function Nn() {
    Array.from(document.querySelectorAll("[data-component-format-date]")).forEach(function (t) {
      var e = new Date(t.textContent);
      qe(e) && (t.textContent = function (t, e, n) {
        _e(2, arguments);

        var r = String(e),
            o = n || {},
            a = o.locale || Be,
            i = a.options && a.options.firstWeekContainsDate,
            u = null == i ? 1 : We(i),
            c = null == o.firstWeekContainsDate ? u : We(o.firstWeekContainsDate);
        if (!(c >= 1 && c <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var s = a.options && a.options.weekStartsOn,
            f = null == s ? 0 : We(s),
            l = null == o.weekStartsOn ? f : We(o.weekStartsOn);
        if (!(l >= 0 && l <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if (!a.localize) throw new RangeError("locale must contain localize property");
        if (!a.formatLong) throw new RangeError("locale must contain formatLong property");
        var h = Ne(t);
        if (!qe(h)) throw new RangeError("Invalid time value");
        var d = Fe(h),
            g = Je(h, d),
            m = {
          firstWeekContainsDate: c,
          weekStartsOn: l,
          locale: a,
          _originalDate: h
        },
            y = r.match(Dn).map(function (t) {
          var e = t[0];
          return "p" === e || "P" === e ? (0, On[e])(t, a.formatLong, m) : t;
        }).join("").match(jn).map(function (n) {
          if ("''" === n) return "'";
          var r = n[0];
          if ("'" === r) return _n(n);
          var i = vn[r];
          if (i) return !o.useAdditionalWeekYearTokens && En(n) && kn(n, e, t), !o.useAdditionalDayOfYearTokens && Pn(n) && kn(n, e, t), i(g, n, a.localize, m);
          if (r.match(Wn)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + r + "`");
          return n;
        }).join("");
        return y;
      }(e, "dd-MMM-yyyy"));
    });
  },
      An = function An() {
    Nn();
  };

  /complete|interactive/.test(document.readyState) ? An() : document.addEventListener("DOMContentLoaded", An);
}();