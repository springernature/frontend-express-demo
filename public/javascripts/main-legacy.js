"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  "use strict";

  !function (t, e) {
    t(e = {
      exports: {}
    }, e.exports);
  }(function (t) {
    var e = function (t) {
      var e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
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
        var a = e && e.prototype instanceof h ? e : h,
            o = Object.create(a.prototype),
            i = new M(r || []);
        return o._invoke = function (t, e, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r) throw new Error("Generator is already running");

            if ("completed" === r) {
              if ("throw" === a) throw o;
              return P();
            }

            for (n.method = a, n.arg = o;;) {
              var i = n.delegate;

              if (i) {
                var u = b(i, n);

                if (u) {
                  if (u === d) continue;
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
                if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                return {
                  value: c.arg,
                  done: n.done
                };
              }

              "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
            }
          };
        }(t, n, i), o;
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
      var d = {};

      function h() {}

      function l() {}

      function f() {}

      var m = {};

      m[a] = function () {
        return this;
      };

      var g = Object.getPrototypeOf,
          w = g && g(g(C([])));
      w && w !== e && n.call(w, a) && (m = w);
      var v = f.prototype = h.prototype = Object.create(m);

      function y(t) {
        ["next", "throw", "return"].forEach(function (e) {
          u(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }

      function p(t, e) {
        var r;

        this._invoke = function (a, o) {
          function i() {
            return new e(function (r, i) {
              !function r(a, o, i, u) {
                var c = s(t[a], t, o);

                if ("throw" !== c.type) {
                  var d = c.arg,
                      h = d.value;
                  return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                    r("next", t, i, u);
                  }, function (t) {
                    r("throw", t, i, u);
                  }) : e.resolve(h).then(function (t) {
                    d.value = t, i(d);
                  }, function (t) {
                    return r("throw", t, i, u);
                  });
                }

                u(c.arg);
              }(a, o, r, i);
            });
          }

          return r = r ? r.then(i, i) : i();
        };
      }

      function b(t, e) {
        var n = t.iterator[e.method];

        if (void 0 === n) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator["return"] && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return d;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return d;
        }

        var r = s(n, t.iterator, e.arg);
        if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, d;
        var a = r.arg;
        return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d);
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

      function M(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(T, this), this.reset(!0);
      }

      function C(t) {
        if (t) {
          var e = t[a];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var r = -1,
                o = function e() {
              for (; ++r < t.length;) {
                if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
              }

              return e.value = void 0, e.done = !0, e;
            };

            return o.next = o;
          }
        }

        return {
          next: P
        };
      }

      function P() {
        return {
          value: void 0,
          done: !0
        };
      }

      return l.prototype = v.constructor = f, f.constructor = l, l.displayName = u(f, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === l || "GeneratorFunction" === (e.displayName || e.name));
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, u(t, i, "GeneratorFunction")), t.prototype = Object.create(v), t;
      }, t.awrap = function (t) {
        return {
          __await: t
        };
      }, y(p.prototype), p.prototype[o] = function () {
        return this;
      }, t.AsyncIterator = p, t.async = function (e, n, r, a, o) {
        void 0 === o && (o = Promise);
        var i = new p(c(e, n, r, a), o);
        return t.isGeneratorFunction(n) ? i : i.next().then(function (t) {
          return t.done ? t.value : i.next();
        });
      }, y(v), u(v, i, "Generator"), v[a] = function () {
        return this;
      }, v.toString = function () {
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
      }, t.values = C, M.prototype = {
        constructor: M,
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

          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var o = this.tryEntries[a],
                i = o.completion;
            if ("root" === o.tryLoc) return r("end");

            if (o.tryLoc <= this.prev) {
              var u = n.call(o, "catchLoc"),
                  c = n.call(o, "finallyLoc");

              if (u && c) {
                if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                if (this.prev < o.finallyLoc) return r(o.finallyLoc);
              } else if (u) {
                if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < o.finallyLoc) return r(o.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var a = this.tryEntries[r];

            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
              var o = a;
              break;
            }
          }

          o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
          var i = o ? o.completion : {};
          return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(i);
        },
        complete: function complete(t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d;
        },
        finish: function finish(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), d;
          }
        },
        "catch": function _catch(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];

            if (n.tryLoc === t) {
              var r = n.completion;

              if ("throw" === r.type) {
                var a = r.arg;
                x(n);
              }

              return a;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(t, e, n) {
          return this.delegate = {
            iterator: C(t),
            resultName: e,
            nextLoc: n
          }, "next" === this.method && (this.arg = void 0), d;
        }
      }, t;
    }(t.exports);

    try {
      regeneratorRuntime = e;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(e);
    }
  });

  function t(t) {
    if (null === t || !0 === t || !1 === t) return NaN;
    var e = Number(t);
    return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
  }

  function e(t, e) {
    if (e.length < t) throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
  }

  function n(t) {
    e(1, arguments);
    var n = Object.prototype.toString.call(t);
    return t instanceof Date || "object" == _typeof(t) && "[object Date]" === n ? new Date(t.getTime()) : "number" == typeof t || "[object Number]" === n ? new Date(t) : ("string" != typeof t && "[object String]" !== n || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)), new Date(NaN));
  }

  function r(r, a) {
    e(2, arguments);
    var o = n(r).getTime(),
        i = t(a);
    return new Date(o + i);
  }

  function a(t) {
    return t.getTime() % 6e4;
  }

  function o(t) {
    var e = new Date(t.getTime()),
        n = Math.ceil(e.getTimezoneOffset());
    return e.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + a(e)) % 6e4 : a(e));
  }

  function i(t) {
    e(1, arguments);
    var r = n(t);
    return !isNaN(r);
  }

  var u = {
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

  function c(t) {
    return function (e) {
      var n = e || {},
          r = n.width ? String(n.width) : t.defaultWidth;
      return t.formats[r] || t.formats[t.defaultWidth];
    };
  }

  var s = {
    date: c({
      formats: {
        full: "EEEE, MMMM do, y",
        "long": "MMMM do, y",
        medium: "MMM d, y",
        "short": "MM/dd/yyyy"
      },
      defaultWidth: "full"
    }),
    time: c({
      formats: {
        full: "h:mm:ss a zzzz",
        "long": "h:mm:ss a z",
        medium: "h:mm:ss a",
        "short": "h:mm a"
      },
      defaultWidth: "full"
    }),
    dateTime: c({
      formats: {
        full: "{{date}} 'at' {{time}}",
        "long": "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        "short": "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  },
      d = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };

  function h(t) {
    return function (e, n) {
      var r,
          a = n || {};

      if ("formatting" === (a.context ? String(a.context) : "standalone") && t.formattingValues) {
        var o = t.defaultFormattingWidth || t.defaultWidth,
            i = a.width ? String(a.width) : o;
        r = t.formattingValues[i] || t.formattingValues[o];
      } else {
        var u = t.defaultWidth,
            c = a.width ? String(a.width) : t.defaultWidth;
        r = t.values[c] || t.values[u];
      }

      return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }

  function l(t) {
    return function (e, n) {
      var r = String(e),
          a = n || {},
          o = a.width,
          i = o && t.matchPatterns[o] || t.matchPatterns[t.defaultMatchWidth],
          u = r.match(i);
      if (!u) return null;
      var c,
          s = u[0],
          d = o && t.parsePatterns[o] || t.parsePatterns[t.defaultParseWidth];
      return c = "[object Array]" === Object.prototype.toString.call(d) ? function (t, e) {
        for (var n = 0; n < t.length; n++) {
          if (e(t[n])) return n;
        }
      }(d, function (t) {
        return t.test(s);
      }) : function (t, e) {
        for (var n in t) {
          if (t.hasOwnProperty(n) && e(t[n])) return n;
        }
      }(d, function (t) {
        return t.test(s);
      }), c = t.valueCallback ? t.valueCallback(c) : c, {
        value: c = a.valueCallback ? a.valueCallback(c) : c,
        rest: r.slice(s.length)
      };
    };
  }

  var f,
      m = {
    code: "en-US",
    formatDistance: function formatDistance(t, e, n) {
      var r;
      return n = n || {}, r = "string" == typeof u[t] ? u[t] : 1 === e ? u[t].one : u[t].other.replace("{{count}}", e), n.addSuffix ? n.comparison > 0 ? "in " + r : r + " ago" : r;
    },
    formatLong: s,
    formatRelative: function formatRelative(t, e, n, r) {
      return d[t];
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
      era: h({
        values: {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"]
        },
        defaultWidth: "wide"
      }),
      quarter: h({
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
      month: h({
        values: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        defaultWidth: "wide"
      }),
      day: h({
        values: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          "short": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        defaultWidth: "wide"
      }),
      dayPeriod: h({
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
      ordinalNumber: (f = {
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: function valueCallback(t) {
          return parseInt(t, 10);
        }
      }, function (t, e) {
        var n = String(t),
            r = e || {},
            a = n.match(f.matchPattern);
        if (!a) return null;
        var o = a[0],
            i = n.match(f.parsePattern);
        if (!i) return null;
        var u = f.valueCallback ? f.valueCallback(i[0]) : i[0];
        return {
          value: u = r.valueCallback ? r.valueCallback(u) : u,
          rest: n.slice(o.length)
        };
      }),
      era: l({
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
      quarter: l({
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
      month: l({
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
      day: l({
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
      dayPeriod: l({
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

  function g(n, a) {
    e(2, arguments);
    var o = t(a);
    return r(n, -o);
  }

  function _w(t, e) {
    for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e;) {
      r = "0" + r;
    }

    return n + r;
  }

  var v = function v(t, e) {
    var n = t.getUTCFullYear(),
        r = n > 0 ? n : 1 - n;
    return _w("yy" === e ? r % 100 : r, e.length);
  },
      y = function y(t, e) {
    var n = t.getUTCMonth();
    return "M" === e ? String(n + 1) : _w(n + 1, 2);
  },
      p = function p(t, e) {
    return _w(t.getUTCDate(), e.length);
  },
      b = function b(t, e) {
    return _w(t.getUTCHours() % 12 || 12, e.length);
  },
      T = function T(t, e) {
    return _w(t.getUTCHours(), e.length);
  },
      x = function x(t, e) {
    return _w(t.getUTCMinutes(), e.length);
  },
      M = function M(t, e) {
    return _w(t.getUTCSeconds(), e.length);
  },
      C = function C(t, e) {
    var n = e.length,
        r = t.getUTCMilliseconds();
    return _w(Math.floor(r * Math.pow(10, n - 3)), e.length);
  };

  function P(t) {
    e(1, arguments);
    var r = 1,
        a = n(t),
        o = a.getUTCDay(),
        i = (o < r ? 7 : 0) + o - r;
    return a.setUTCDate(a.getUTCDate() - i), a.setUTCHours(0, 0, 0, 0), a;
  }

  function D(t) {
    e(1, arguments);
    var r = n(t),
        a = r.getUTCFullYear(),
        o = new Date(0);
    o.setUTCFullYear(a + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
    var i = P(o),
        u = new Date(0);
    u.setUTCFullYear(a, 0, 4), u.setUTCHours(0, 0, 0, 0);
    var c = P(u);
    return r.getTime() >= i.getTime() ? a + 1 : r.getTime() >= c.getTime() ? a : a - 1;
  }

  function k(t) {
    e(1, arguments);
    var n = D(t),
        r = new Date(0);
    r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0);
    var a = P(r);
    return a;
  }

  function E(r, a) {
    e(1, arguments);
    var o = a || {},
        i = o.locale,
        u = i && i.options && i.options.weekStartsOn,
        c = null == u ? 0 : t(u),
        s = null == o.weekStartsOn ? c : t(o.weekStartsOn);
    if (!(s >= 0 && s <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var d = n(r),
        h = d.getUTCDay(),
        l = (h < s ? 7 : 0) + h - s;
    return d.setUTCDate(d.getUTCDate() - l), d.setUTCHours(0, 0, 0, 0), d;
  }

  function S(r, a) {
    e(1, arguments);
    var o = n(r, a),
        i = o.getUTCFullYear(),
        u = a || {},
        c = u.locale,
        s = c && c.options && c.options.firstWeekContainsDate,
        d = null == s ? 1 : t(s),
        h = null == u.firstWeekContainsDate ? d : t(u.firstWeekContainsDate);
    if (!(h >= 1 && h <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var l = new Date(0);
    l.setUTCFullYear(i + 1, 0, h), l.setUTCHours(0, 0, 0, 0);
    var f = E(l, a),
        m = new Date(0);
    m.setUTCFullYear(i, 0, h), m.setUTCHours(0, 0, 0, 0);
    var g = E(m, a);
    return o.getTime() >= f.getTime() ? i + 1 : o.getTime() >= g.getTime() ? i : i - 1;
  }

  function U(n, r) {
    e(1, arguments);
    var a = r || {},
        o = a.locale,
        i = o && o.options && o.options.firstWeekContainsDate,
        u = null == i ? 1 : t(i),
        c = null == a.firstWeekContainsDate ? u : t(a.firstWeekContainsDate),
        s = S(n, r),
        d = new Date(0);
    d.setUTCFullYear(s, 0, c), d.setUTCHours(0, 0, 0, 0);
    var h = E(d, r);
    return h;
  }

  var L = "midnight",
      O = "noon",
      W = "morning",
      N = "afternoon",
      Y = "evening",
      q = "night",
      j = {
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
            a = r > 0 ? r : 1 - r;
        return n.ordinalNumber(a, {
          unit: "year"
        });
      }

      return v(t, e);
    },
    Y: function Y(t, e, n, r) {
      var a = S(t, r),
          o = a > 0 ? a : 1 - a;
      return "YY" === e ? _w(o % 100, 2) : "Yo" === e ? n.ordinalNumber(o, {
        unit: "year"
      }) : _w(o, e.length);
    },
    R: function R(t, e) {
      return _w(D(t), e.length);
    },
    u: function u(t, e) {
      return _w(t.getUTCFullYear(), e.length);
    },
    Q: function Q(t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3);

      switch (e) {
        case "Q":
          return String(r);

        case "QQ":
          return _w(r, 2);

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
          return _w(r, 2);

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
          return y(t, e);

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
          return _w(r + 1, 2);

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
    w: function w(t, r, a, o) {
      var i = function (t, r) {
        e(1, arguments);
        var a = n(t),
            o = E(a, r).getTime() - U(a, r).getTime();
        return Math.round(o / 6048e5) + 1;
      }(t, o);

      return "wo" === r ? a.ordinalNumber(i, {
        unit: "week"
      }) : _w(i, r.length);
    },
    I: function I(t, r, a) {
      var o = function (t) {
        e(1, arguments);
        var r = n(t),
            a = P(r).getTime() - k(r).getTime();
        return Math.round(a / 6048e5) + 1;
      }(t);

      return "Io" === r ? a.ordinalNumber(o, {
        unit: "week"
      }) : _w(o, r.length);
    },
    d: function d(t, e, n) {
      return "do" === e ? n.ordinalNumber(t.getUTCDate(), {
        unit: "date"
      }) : p(t, e);
    },
    D: function D(t, r, a) {
      var o = function (t) {
        e(1, arguments);
        var r = n(t),
            a = r.getTime();
        r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
        var o = r.getTime(),
            i = a - o;
        return Math.floor(i / 864e5) + 1;
      }(t);

      return "Do" === r ? a.ordinalNumber(o, {
        unit: "dayOfYear"
      }) : _w(o, r.length);
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
    e: function e(t, _e, n, r) {
      var a = t.getUTCDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;

      switch (_e) {
        case "e":
          return String(o);

        case "ee":
          return _w(o, 2);

        case "eo":
          return n.ordinalNumber(o, {
            unit: "day"
          });

        case "eee":
          return n.day(a, {
            width: "abbreviated",
            context: "formatting"
          });

        case "eeeee":
          return n.day(a, {
            width: "narrow",
            context: "formatting"
          });

        case "eeeeee":
          return n.day(a, {
            width: "short",
            context: "formatting"
          });

        case "eeee":
        default:
          return n.day(a, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    c: function c(t, e, n, r) {
      var a = t.getUTCDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;

      switch (e) {
        case "c":
          return String(o);

        case "cc":
          return _w(o, e.length);

        case "co":
          return n.ordinalNumber(o, {
            unit: "day"
          });

        case "ccc":
          return n.day(a, {
            width: "abbreviated",
            context: "standalone"
          });

        case "ccccc":
          return n.day(a, {
            width: "narrow",
            context: "standalone"
          });

        case "cccccc":
          return n.day(a, {
            width: "short",
            context: "standalone"
          });

        case "cccc":
        default:
          return n.day(a, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    i: function i(t, e, n) {
      var r = t.getUTCDay(),
          a = 0 === r ? 7 : r;

      switch (e) {
        case "i":
          return String(a);

        case "ii":
          return _w(a, e.length);

        case "io":
          return n.ordinalNumber(a, {
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
          a = t.getUTCHours();

      switch (r = 12 === a ? O : 0 === a ? L : a / 12 >= 1 ? "pm" : "am", e) {
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
          a = t.getUTCHours();

      switch (r = a >= 17 ? Y : a >= 12 ? N : a >= 4 ? W : q, e) {
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

      return b(t, e);
    },
    H: function H(t, e, n) {
      return "Ho" === e ? n.ordinalNumber(t.getUTCHours(), {
        unit: "hour"
      }) : T(t, e);
    },
    K: function K(t, e, n) {
      var r = t.getUTCHours() % 12;
      return "Ko" === e ? n.ordinalNumber(r, {
        unit: "hour"
      }) : _w(r, e.length);
    },
    k: function k(t, e, n) {
      var r = t.getUTCHours();
      return 0 === r && (r = 24), "ko" === e ? n.ordinalNumber(r, {
        unit: "hour"
      }) : _w(r, e.length);
    },
    m: function m(t, e, n) {
      return "mo" === e ? n.ordinalNumber(t.getUTCMinutes(), {
        unit: "minute"
      }) : x(t, e);
    },
    s: function s(t, e, n) {
      return "so" === e ? n.ordinalNumber(t.getUTCSeconds(), {
        unit: "second"
      }) : M(t, e);
    },
    S: function S(t, e) {
      return C(t, e);
    },
    X: function X(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset();
      if (0 === a) return "Z";

      switch (e) {
        case "X":
          return G(a);

        case "XXXX":
        case "XX":
          return _z(a);

        case "XXXXX":
        case "XXX":
        default:
          return _z(a, ":");
      }
    },
    x: function x(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset();

      switch (e) {
        case "x":
          return G(a);

        case "xxxx":
        case "xx":
          return _z(a);

        case "xxxxx":
        case "xxx":
        default:
          return _z(a, ":");
      }
    },
    O: function O(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset();

      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + F(a, ":");

        case "OOOO":
        default:
          return "GMT" + _z(a, ":");
      }
    },
    z: function z(t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset();

      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + F(a, ":");

        case "zzzz":
        default:
          return "GMT" + _z(a, ":");
      }
    },
    t: function t(_t, e, n, r) {
      var a = r._originalDate || _t;
      return _w(Math.floor(a.getTime() / 1e3), e.length);
    },
    T: function T(t, e, n, r) {
      return _w((r._originalDate || t).getTime(), e.length);
    }
  };

  function F(t, e) {
    var n = t > 0 ? "-" : "+",
        r = Math.abs(t),
        a = Math.floor(r / 60),
        o = r % 60;
    if (0 === o) return n + String(a);
    var i = e || "";
    return n + String(a) + i + _w(o, 2);
  }

  function G(t, e) {
    return t % 60 == 0 ? (t > 0 ? "-" : "+") + _w(Math.abs(t) / 60, 2) : _z(t, e);
  }

  function _z(t, e) {
    var n = e || "",
        r = t > 0 ? "-" : "+",
        a = Math.abs(t);
    return r + _w(Math.floor(a / 60), 2) + n + _w(a % 60, 2);
  }

  function X(t, e) {
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

  function H(t, e) {
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

  var Q = {
    p: H,
    P: function P(t, e) {
      var n,
          r = t.match(/(P+)(p+)?/),
          a = r[1],
          o = r[2];
      if (!o) return X(t, e);

      switch (a) {
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

      return n.replace("{{date}}", X(a, e)).replace("{{time}}", H(o, e));
    }
  },
      _ = ["D", "DD"],
      A = ["YY", "YYYY"];

  function B(t) {
    return -1 !== _.indexOf(t);
  }

  function R(t) {
    return -1 !== A.indexOf(t);
  }

  function I(t, e, n) {
    if ("YYYY" === t) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
    if ("YY" === t) throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
    if ("D" === t) throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"));
    if ("DD" === t) throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"));
  }

  var J = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      V = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      K = /^'([^]*?)'?$/,
      $ = /''/g,
      Z = /[a-zA-Z]/;

  function tt(t) {
    return t.match(K)[1].replace($, "'");
  }

  var et = function et() {
    Array.from(document.querySelectorAll("[data-component-format-date]")).forEach(function (r) {
      var a = new Date(r.textContent);
      i(a) && (r.textContent = function (r, a, u) {
        e(2, arguments);
        var c = String(a),
            s = u || {},
            d = s.locale || m,
            h = d.options && d.options.firstWeekContainsDate,
            l = null == h ? 1 : t(h),
            f = null == s.firstWeekContainsDate ? l : t(s.firstWeekContainsDate);
        if (!(f >= 1 && f <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var w = d.options && d.options.weekStartsOn,
            v = null == w ? 0 : t(w),
            y = null == s.weekStartsOn ? v : t(s.weekStartsOn);
        if (!(y >= 0 && y <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if (!d.localize) throw new RangeError("locale must contain localize property");
        if (!d.formatLong) throw new RangeError("locale must contain formatLong property");
        var p = n(r);
        if (!i(p)) throw new RangeError("Invalid time value");
        var b = o(p),
            T = g(p, b),
            x = {
          firstWeekContainsDate: f,
          weekStartsOn: y,
          locale: d,
          _originalDate: p
        },
            M = c.match(V).map(function (t) {
          var e = t[0];
          return "p" === e || "P" === e ? (0, Q[e])(t, d.formatLong, x) : t;
        }).join("").match(J).map(function (t) {
          if ("''" === t) return "'";
          var e = t[0];
          if ("'" === e) return tt(t);
          var n = j[e];
          if (n) return !s.useAdditionalWeekYearTokens && R(t) && I(t, a, r), !s.useAdditionalDayOfYearTokens && B(t) && I(t, a, r), n(T, t, d.localize, x);
          if (e.match(Z)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
          return t;
        }).join("");
        return M;
      }(a, "dd-MMM-yyyy"));
    });
  },
      nt = function nt() {
    et();
  };

  /complete|interactive/.test(document.readyState) ? nt() : document.addEventListener("DOMContentLoaded", nt);
}();