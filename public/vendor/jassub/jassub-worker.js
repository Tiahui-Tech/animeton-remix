'use strict';
var Module = function (f = {}) {
  var f = f,
    h;
  f.ready = new Promise(function (t, r) {
    h = t;
  });
  var C = function (t) {
      return console.log(t);
    },
    y = function (t) {
      return console.error(t);
    };
  function _() {
    h(f);
  }
  function A(t, r) {
    if (!t) throw r;
  }
  var w = null;
  (C = function (t) {
    t ===
    'JASSUB: No usable fontconfig configuration file found, using fallback.'
      ? console.debug(t)
      : console.log(t);
  }),
    (y = function (t) {
      t ===
      'Fontconfig error: Cannot load default config file: No such file: (null)'
        ? console.debug(t)
        : console.error(t);
    }),
    (Y = (function (t) {
      return function () {
        t(),
          (self.wasmMemory = B),
          (self.HEAPU8C = new Uint8ClampedArray(B.buffer)),
          (self.HEAPU8 = new Uint8Array(B.buffer));
      };
    })(Y));
  function F(t) {
    throw t;
  }
  var j, E, M, O, J, k, fe, le, B, ue;
  function Y() {
    var t = B.buffer;
    (j = new Int8Array(t)),
      (E = new Int16Array(t)),
      (M = new Int32Array(t)),
      (O = new Uint8Array(t)),
      (J = new Uint16Array(t)),
      (k = new Uint32Array(t)),
      (fe = new Float32Array(t)),
      (le = new Float64Array(t));
  }
  if (
    ((B = new WebAssembly.Memory({ initial: 256, maximum: 32768 })),
    Y(),
    (!Math.imul || Math.imul(4294967295, 5) !== -5) &&
      (Math.imul = function (t, r) {
        var n = t >>> 16,
          i = t & 65535,
          o = r >>> 16,
          u = r & 65535;
        return (i * u + ((n * u + i * o) << 16)) | 0;
      }),
    !Math.fround)
  ) {
    var ce = new Float32Array(1);
    Math.fround = function (t) {
      return (ce[0] = t), ce[0];
    };
  }
  Math.clz32 ||
    (Math.clz32 = function (t) {
      var r = 32,
        n = t >> 16;
      return (
        n && ((r -= 16), (t = n)),
        (n = t >> 8),
        n && ((r -= 8), (t = n)),
        (n = t >> 4),
        n && ((r -= 4), (t = n)),
        (n = t >> 2),
        n && ((r -= 2), (t = n)),
        (n = t >> 1),
        n ? r - 2 : r - t
      );
    }),
    Math.trunc ||
      (Math.trunc = function (t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t);
      });
  var de = typeof TextDecoder < 'u' ? new TextDecoder('utf8') : void 0;
  function pe(t, r, n) {
    for (var i = r + n, o = r; t[o] && !(o >= i); ) ++o;
    if (o - r > 16 && t.buffer && de) return de.decode(t.subarray(r, o));
    for (var u = ''; r < o; ) {
      var p = t[r++];
      if (!(p & 128)) {
        u += String.fromCharCode(p);
        continue;
      }
      var l = t[r++] & 63;
      if ((p & 224) == 192) {
        u += String.fromCharCode(((p & 31) << 6) | l);
        continue;
      }
      var v = t[r++] & 63;
      if (
        ((p & 240) == 224
          ? (p = ((p & 15) << 12) | (l << 6) | v)
          : (p = ((p & 7) << 18) | (l << 12) | (v << 6) | (t[r++] & 63)),
        p < 65536)
      )
        u += String.fromCharCode(p);
      else {
        var g = p - 65536;
        u += String.fromCharCode(55296 | (g >> 10), 56320 | (g & 1023));
      }
    }
    return u;
  }
  function X(t, r) {
    return t ? pe(O, t, r) : '';
  }
  function Te(t, r, n, i) {
    F(
      'Assertion failed: ' +
        X(t) +
        ', at: ' +
        [r ? X(r) : 'unknown filename', n, i ? X(i) : 'unknown function']
    );
  }
  function Pe(t, r, n) {
    return 0;
  }
  function Ae(t, r) {}
  function Fe(t, r, n, i) {
    if (!(i > 0)) return 0;
    for (var o = n, u = n + i - 1, p = 0; p < t.length; ++p) {
      var l = t.charCodeAt(p);
      if (l >= 55296 && l <= 57343) {
        var v = t.charCodeAt(++p);
        l = (65536 + ((l & 1023) << 10)) | (v & 1023);
      }
      if (l <= 127) {
        if (n >= u) break;
        r[n++] = l;
      } else if (l <= 2047) {
        if (n + 1 >= u) break;
        (r[n++] = 192 | (l >> 6)), (r[n++] = 128 | (l & 63));
      } else if (l <= 65535) {
        if (n + 2 >= u) break;
        (r[n++] = 224 | (l >> 12)),
          (r[n++] = 128 | ((l >> 6) & 63)),
          (r[n++] = 128 | (l & 63));
      } else {
        if (n + 3 >= u) break;
        (r[n++] = 240 | (l >> 18)),
          (r[n++] = 128 | ((l >> 12) & 63)),
          (r[n++] = 128 | ((l >> 6) & 63)),
          (r[n++] = 128 | (l & 63));
      }
    }
    return (r[n] = 0), n - o;
  }
  function at(t, r, n) {
    return Fe(t, O, r, n);
  }
  function st(t, r, n) {}
  function ot(t, r, n) {
    return 0;
  }
  function ft(t, r, n, i) {}
  function lt(t, r, n, i) {}
  function ut(t, r) {}
  function ct(t, r, n, i, o) {}
  function $e(t) {
    switch (t) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError('Unknown type size: ' + t);
    }
  }
  function dt() {
    for (var t = new Array(256), r = 0; r < 256; ++r)
      t[r] = String.fromCharCode(r);
    Le = t;
  }
  var Le = void 0;
  function D(t) {
    for (var r = '', n = t; O[n]; ) r += Le[O[n++]];
    return r;
  }
  var Q = {},
    Z = {},
    ge = {},
    pt = 48,
    gt = 57;
  function Se(t) {
    if (t === void 0) return '_unknown';
    t = t.replace(/[^a-zA-Z0-9_]/g, '$');
    var r = t.charCodeAt(0);
    return r >= pt && r <= gt ? '_' + t : t;
  }
  function je(t, r) {
    t = Se(t);
    var n = {};
    return ((n[t] = function () {
      return r.apply(this, arguments);
    }),
    n)[t];
  }
  function Oe(t, r) {
    var n = je(r, function (i) {
      (this.name = r), (this.message = i);
      var o = new Error(i).stack;
      o !== void 0 &&
        (this.stack =
          this.toString() +
          `
` +
          o.replace(/^Error(:[^\n]*)?\n/, ''));
    });
    return (
      (n.prototype = Object.create(t.prototype)),
      (n.prototype.constructor = n),
      (n.prototype.toString = function () {
        return this.message === void 0
          ? this.name
          : this.name + ': ' + this.message;
      }),
      n
    );
  }
  var N = void 0;
  function T(t) {
    throw new N(t);
  }
  var He = void 0;
  function he(t) {
    throw new He(t);
  }
  function K(t, r, n) {
    t.forEach(function (l) {
      ge[l] = r;
    });
    function i(l) {
      var v = n(l);
      v.length !== t.length && he('Mismatched type converter count');
      for (var g = 0; g < t.length; ++g) x(t[g], v[g]);
    }
    var o = new Array(r.length),
      u = [],
      p = 0;
    r.forEach(function (l, v) {
      Z.hasOwnProperty(l)
        ? (o[v] = Z[l])
        : (u.push(l),
          Q.hasOwnProperty(l) || (Q[l] = []),
          Q[l].push(function () {
            (o[v] = Z[l]), ++p, p === u.length && i(o);
          }));
    }),
      u.length === 0 && i(o);
  }
  function x(t, r, n) {
    if (((n = n === void 0 ? {} : n), !('argPackAdvance' in r)))
      throw new TypeError(
        'registerType registeredInstance requires argPackAdvance'
      );
    var i = r.name;
    if (
      (t || T('type "' + i + '" must have a positive integer typeid pointer'),
      Z.hasOwnProperty(t))
    ) {
      if (n.ignoreDuplicateRegistrations) return;
      T("Cannot register type '" + i + "' twice");
    }
    if (((Z[t] = r), delete ge[t], Q.hasOwnProperty(t))) {
      var o = Q[t];
      delete Q[t],
        o.forEach(function (u) {
          return u();
        });
    }
  }
  function ht(t, r, n, i, o) {
    var u = $e(n);
    (r = D(r)),
      x(t, {
        name: r,
        fromWireType: function (p) {
          return !!p;
        },
        toWireType: function (p, l) {
          return l ? i : o;
        },
        argPackAdvance: 8,
        readValueFromPointer: function (p) {
          var l;
          if (n === 1) l = j;
          else if (n === 2) l = E;
          else if (n === 4) l = M;
          else throw new TypeError('Unknown boolean type size: ' + r);
          return this.fromWireType(l[p >> u]);
        },
        destructorFunction: null,
      });
  }
  function vt(t) {
    if (!(this instanceof G) || !(t instanceof G)) return !1;
    for (
      var r = this.$$.ptrType.registeredClass,
        n = this.$$.ptr,
        i = t.$$.ptrType.registeredClass,
        o = t.$$.ptr;
      r.baseClass;

    )
      (n = r.upcast(n)), (r = r.baseClass);
    for (; i.baseClass; ) (o = i.upcast(o)), (i = i.baseClass);
    return r === i && n === o;
  }
  function yt(t) {
    return {
      count: t.count,
      deleteScheduled: t.deleteScheduled,
      preservePointerOnDelete: t.preservePointerOnDelete,
      ptr: t.ptr,
      ptrType: t.ptrType,
      smartPtr: t.smartPtr,
      smartPtrType: t.smartPtrType,
    };
  }
  function Ee(t) {
    function r(n) {
      return n.$$.ptrType.registeredClass.name;
    }
    T(r(t) + ' instance already deleted');
  }
  var Me = !1;
  function Be(t) {}
  function bt(t) {
    t.smartPtr
      ? t.smartPtrType.rawDestructor(t.smartPtr)
      : t.ptrType.registeredClass.rawDestructor(t.ptr);
  }
  function xe(t) {
    t.count.value -= 1;
    var r = t.count.value === 0;
    r && bt(t);
  }
  function Ve(t, r, n) {
    if (r === n) return t;
    if (n.baseClass === void 0) return null;
    var i = Ve(t, r, n.baseClass);
    return i === null ? null : n.downcast(i);
  }
  var ze = {};
  function mt() {
    return Object.keys(re).length;
  }
  function wt() {
    var t = [];
    for (var r in re) re.hasOwnProperty(r) && t.push(re[r]);
    return t;
  }
  var ee = [];
  function ke() {
    for (; ee.length; ) {
      var t = ee.pop();
      (t.$$.deleteScheduled = !1), t.delete();
    }
  }
  var te = void 0;
  function Ct(t) {
    (te = t), ee.length && te && te(ke);
  }
  function _t() {
    (f.getInheritedInstanceCount = mt),
      (f.getLiveInheritedInstances = wt),
      (f.flushPendingDeletes = ke),
      (f.setDelayFunction = Ct);
  }
  var re = {};
  function Tt(t, r) {
    for (r === void 0 && T('ptr should not be undefined'); t.baseClass; )
      (r = t.upcast(r)), (t = t.baseClass);
    return r;
  }
  function Pt(t, r) {
    return (r = Tt(t, r)), re[r];
  }
  function ve(t, r) {
    (!r.ptrType || !r.ptr) && he('makeClassHandle requires ptr and ptrType');
    var n = !!r.smartPtrType,
      i = !!r.smartPtr;
    return (
      n !== i && he('Both smartPtrType and smartPtr must be specified'),
      (r.count = { value: 1 }),
      ne(Object.create(t, { $$: { value: r } }))
    );
  }
  function At(t) {
    var r = this.getPointee(t);
    if (!r) return this.destructor(t), null;
    var n = Pt(this.registeredClass, r);
    if (n !== void 0) {
      if (n.$$.count.value === 0)
        return (n.$$.ptr = r), (n.$$.smartPtr = t), n.clone();
      var i = n.clone();
      return this.destructor(t), i;
    }
    function o() {
      return this.isSmartPointer
        ? ve(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: r,
            smartPtrType: this,
            smartPtr: t,
          })
        : ve(this.registeredClass.instancePrototype, { ptrType: this, ptr: t });
    }
    var u = this.registeredClass.getActualType(r),
      p = ze[u];
    if (!p) return o.call(this);
    var l;
    this.isConst ? (l = p.constPointerType) : (l = p.pointerType);
    var v = Ve(r, this.registeredClass, l.registeredClass);
    return v === null
      ? o.call(this)
      : this.isSmartPointer
      ? ve(l.registeredClass.instancePrototype, {
          ptrType: l,
          ptr: v,
          smartPtrType: this,
          smartPtr: t,
        })
      : ve(l.registeredClass.instancePrototype, { ptrType: l, ptr: v });
  }
  function ne(t) {
    return typeof FinalizationRegistry > 'u'
      ? ((ne = function (r) {
          return r;
        }),
        t)
      : ((Me = new FinalizationRegistry(function (r) {
          xe(r.$$);
        })),
        (ne = function (r) {
          var n = r.$$,
            i = !!n.smartPtr;
          if (i) {
            var o = { $$: n };
            Me.register(r, o, r);
          }
          return r;
        }),
        (Be = function (r) {
          return Me.unregister(r);
        }),
        ne(t));
  }
  function Ft() {
    if ((this.$$.ptr || Ee(this), this.$$.preservePointerOnDelete))
      return (this.$$.count.value += 1), this;
    var t = ne(
      Object.create(Object.getPrototypeOf(this), { $$: { value: yt(this.$$) } })
    );
    return (t.$$.count.value += 1), (t.$$.deleteScheduled = !1), t;
  }
  function $t() {
    this.$$.ptr || Ee(this),
      this.$$.deleteScheduled &&
        !this.$$.preservePointerOnDelete &&
        T('Object already scheduled for deletion'),
      Be(this),
      xe(this.$$),
      this.$$.preservePointerOnDelete ||
        ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
  }
  function St() {
    return !this.$$.ptr;
  }
  function jt() {
    return (
      this.$$.ptr || Ee(this),
      this.$$.deleteScheduled &&
        !this.$$.preservePointerOnDelete &&
        T('Object already scheduled for deletion'),
      ee.push(this),
      ee.length === 1 && te && te(ke),
      (this.$$.deleteScheduled = !0),
      this
    );
  }
  function Ot() {
    (G.prototype.isAliasOf = vt),
      (G.prototype.clone = Ft),
      (G.prototype.delete = $t),
      (G.prototype.isDeleted = St),
      (G.prototype.deleteLater = jt);
  }
  function G() {}
  function Je(t, r, n) {
    if (t[r].overloadTable === void 0) {
      var i = t[r];
      (t[r] = function () {
        return (
          t[r].overloadTable.hasOwnProperty(arguments.length) ||
            T(
              "Function '" +
                n +
                "' called with an invalid number of arguments (" +
                arguments.length +
                ') - expects one of (' +
                t[r].overloadTable +
                ')!'
            ),
          t[r].overloadTable[arguments.length].apply(this, arguments)
        );
      }),
        (t[r].overloadTable = []),
        (t[r].overloadTable[i.argCount] = i);
    }
  }
  function Et(t, r, n) {
    f.hasOwnProperty(t)
      ? ((n === void 0 ||
          (f[t].overloadTable !== void 0 &&
            f[t].overloadTable[n] !== void 0)) &&
          T("Cannot register public name '" + t + "' twice"),
        Je(f, t, t),
        f.hasOwnProperty(n) &&
          T(
            'Cannot register multiple overloads of a function with the same number of arguments (' +
              n +
              ')!'
          ),
        (f[t].overloadTable[n] = r))
      : ((f[t] = r), n !== void 0 && (f[t].numArguments = n));
  }
  function Mt(t, r, n, i, o, u, p, l) {
    (this.name = t),
      (this.constructor = r),
      (this.instancePrototype = n),
      (this.rawDestructor = i),
      (this.baseClass = o),
      (this.getActualType = u),
      (this.upcast = p),
      (this.downcast = l),
      (this.pureVirtualFunctions = []);
  }
  function ye(t, r, n) {
    for (; r !== n; )
      r.upcast ||
        T(
          'Expected null or instance of ' +
            n.name +
            ', got an instance of ' +
            r.name
        ),
        (t = r.upcast(t)),
        (r = r.baseClass);
    return t;
  }
  function kt(t, r) {
    if (r === null)
      return this.isReference && T('null is not a valid ' + this.name), 0;
    r.$$ || T('Cannot pass "' + Re(r) + '" as a ' + this.name),
      r.$$.ptr ||
        T('Cannot pass deleted object as a pointer of type ' + this.name);
    var n = r.$$.ptrType.registeredClass,
      i = ye(r.$$.ptr, n, this.registeredClass);
    return i;
  }
  function Ut(t, r) {
    var n;
    if (r === null)
      return (
        this.isReference && T('null is not a valid ' + this.name),
        this.isSmartPointer
          ? ((n = this.rawConstructor()),
            t !== null && t.push(this.rawDestructor, n),
            n)
          : 0
      );
    r.$$ || T('Cannot pass "' + Re(r) + '" as a ' + this.name),
      r.$$.ptr ||
        T('Cannot pass deleted object as a pointer of type ' + this.name),
      !this.isConst &&
        r.$$.ptrType.isConst &&
        T(
          'Cannot convert argument of type ' +
            (r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name) +
            ' to parameter type ' +
            this.name
        );
    var i = r.$$.ptrType.registeredClass;
    if (((n = ye(r.$$.ptr, i, this.registeredClass)), this.isSmartPointer))
      switch (
        (r.$$.smartPtr === void 0 &&
          T('Passing raw pointer to smart pointer is illegal'),
        this.sharingPolicy)
      ) {
        case 0:
          r.$$.smartPtrType === this
            ? (n = r.$$.smartPtr)
            : T(
                'Cannot convert argument of type ' +
                  (r.$$.smartPtrType
                    ? r.$$.smartPtrType.name
                    : r.$$.ptrType.name) +
                  ' to parameter type ' +
                  this.name
              );
          break;
        case 1:
          n = r.$$.smartPtr;
          break;
        case 2:
          if (r.$$.smartPtrType === this) n = r.$$.smartPtr;
          else {
            var o = r.clone();
            (n = this.rawShare(
              n,
              Ue.toHandle(function () {
                o.delete();
              })
            )),
              t !== null && t.push(this.rawDestructor, n);
          }
          break;
        default:
          T('Unsupporting sharing policy');
      }
    return n;
  }
  function Rt(t, r) {
    if (r === null)
      return this.isReference && T('null is not a valid ' + this.name), 0;
    r.$$ || T('Cannot pass "' + Re(r) + '" as a ' + this.name),
      r.$$.ptr ||
        T('Cannot pass deleted object as a pointer of type ' + this.name),
      r.$$.ptrType.isConst &&
        T(
          'Cannot convert argument of type ' +
            r.$$.ptrType.name +
            ' to parameter type ' +
            this.name
        );
    var n = r.$$.ptrType.registeredClass,
      i = ye(r.$$.ptr, n, this.registeredClass);
    return i;
  }
  function be(t) {
    return this.fromWireType(M[t >> 2]);
  }
  function Wt(t) {
    return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
  }
  function It(t) {
    this.rawDestructor && this.rawDestructor(t);
  }
  function Dt(t) {
    t !== null && t.delete();
  }
  function Lt() {
    (V.prototype.getPointee = Wt),
      (V.prototype.destructor = It),
      (V.prototype.argPackAdvance = 8),
      (V.prototype.readValueFromPointer = be),
      (V.prototype.deleteObject = Dt),
      (V.prototype.fromWireType = At);
  }
  function V(t, r, n, i, o, u, p, l, v, g, m) {
    (this.name = t),
      (this.registeredClass = r),
      (this.isReference = n),
      (this.isConst = i),
      (this.isSmartPointer = o),
      (this.pointeeType = u),
      (this.sharingPolicy = p),
      (this.rawGetPointee = l),
      (this.rawConstructor = v),
      (this.rawShare = g),
      (this.rawDestructor = m),
      !o && r.baseClass === void 0
        ? i
          ? ((this.toWireType = kt), (this.destructorFunction = null))
          : ((this.toWireType = Rt), (this.destructorFunction = null))
        : (this.toWireType = Ut);
  }
  function Ht(t, r, n) {
    f.hasOwnProperty(t) || he('Replacing nonexistant public symbol'),
      f[t].overloadTable !== void 0 && n !== void 0
        ? (f[t].overloadTable[n] = r)
        : ((f[t] = r), (f[t].argCount = n));
  }
  function Bt(t, r, n) {
    var i = dynCalls[t];
    return n && n.length ? i.apply(null, [r].concat(n)) : i.call(null, r);
  }
  var me = [];
  function ie(t) {
    var r = me[t];
    return (
      r || (t >= me.length && (me.length = t + 1), (me[t] = r = ue.get(t))), r
    );
  }
  function xt(t, r, n) {
    if (t.includes('j')) return Bt(t, r, n);
    var i = ie(r).apply(null, n);
    return i;
  }
  function Vt(t, r) {
    var n = [];
    return function () {
      return (n.length = 0), Object.assign(n, arguments), xt(t, r, n);
    };
  }
  function q(t, r) {
    t = D(t);
    function n() {
      return t.includes('j') ? Vt(t, r) : ie(r);
    }
    var i = n();
    return (
      typeof i != 'function' &&
        T('unknown function pointer with signature ' + t + ': ' + r),
      i
    );
  }
  var Ge = void 0;
  function zt(t) {
    var r = Ne(t),
      n = D(r);
    return z(r), n;
  }
  function ae(t, r) {
    var n = [],
      i = {};
    function o(u) {
      if (!i[u] && !Z[u]) {
        if (ge[u]) {
          ge[u].forEach(o);
          return;
        }
        n.push(u), (i[u] = !0);
      }
    }
    throw (r.forEach(o), new Ge(t + ': ' + n.map(zt).join([', '])));
  }
  function Jt(t, r, n, i, o, u, p, l, v, g, m, P, $) {
    (m = D(m)),
      (u = q(o, u)),
      l && (l = q(p, l)),
      g && (g = q(v, g)),
      ($ = q(P, $));
    var S = Se(m);
    Et(S, function () {
      ae('Cannot construct ' + m + ' due to unbound types', [i]);
    }),
      K([t, r, n], i ? [i] : [], function (U) {
        U = U[0];
        var W, R;
        i
          ? ((W = U.registeredClass), (R = W.instancePrototype))
          : (R = G.prototype);
        var L = je(S, function () {
            if (Object.getPrototypeOf(this) !== oe)
              throw new N("Use 'new' to construct " + m);
            if (I.constructor_body === void 0)
              throw new N(m + ' has no accessible constructor');
            var it = I.constructor_body[arguments.length];
            if (it === void 0)
              throw new N(
                'Tried to invoke ctor of ' +
                  m +
                  ' with invalid number of parameters (' +
                  arguments.length +
                  ') - expected (' +
                  Object.keys(I.constructor_body).toString() +
                  ') parameters instead!'
              );
            return it.apply(this, arguments);
          }),
          oe = Object.create(R, { constructor: { value: L } });
        L.prototype = oe;
        var I = new Mt(m, L, oe, $, W, u, l, g);
        I.baseClass &&
          (I.baseClass.__derivedClasses === void 0 &&
            (I.baseClass.__derivedClasses = []),
          I.baseClass.__derivedClasses.push(I));
        var Hr = new V(m, I, !0, !1, !1),
          rt = new V(m + '*', I, !1, !1, !1),
          nt = new V(m + ' const*', I, !1, !0, !1);
        return (
          (ze[t] = { pointerType: rt, constPointerType: nt }),
          Ht(S, L),
          [Hr, rt, nt]
        );
      });
  }
  function qe(t, r) {
    for (var n = [], i = 0; i < t; i++) n.push(k[(r + i * 4) >> 2]);
    return n;
  }
  function Ke(t) {
    for (; t.length; ) {
      var r = t.pop(),
        n = t.pop();
      n(r);
    }
  }
  function Gt(t, r) {
    if (!(t instanceof Function))
      throw new TypeError(
        'new_ called with constructor type ' +
          typeof t +
          ' which is not a function'
      );
    var n = je(t.name || 'unknownFunctionName', function () {});
    n.prototype = t.prototype;
    var i = new n(),
      o = t.apply(i, r);
    return o instanceof Object ? o : i;
  }
  function Ye(t, r, n, i, o, u) {
    var p = r.length;
    p < 2 &&
      T(
        "argTypes array size mismatch! Must at least get return value and 'this' types!"
      );
    for (var l = r[1] !== null && n !== null, v = !1, g = 1; g < r.length; ++g)
      if (r[g] !== null && r[g].destructorFunction === void 0) {
        v = !0;
        break;
      }
    for (var m = r[0].name !== 'void', P = '', $ = '', g = 0; g < p - 2; ++g)
      (P += (g !== 0 ? ', ' : '') + 'arg' + g),
        ($ += (g !== 0 ? ', ' : '') + 'arg' + g + 'Wired');
    var S =
      `
        return function ` +
      Se(t) +
      '(' +
      P +
      `) {
        if (arguments.length !== ` +
      (p - 2) +
      `) {
          throwBindingError('function ` +
      t +
      ' called with ' +
      arguments.length +
      ' arguments, expected ' +
      (p - 2) +
      ` args!');
        }`;
    v &&
      (S += `var destructors = [];
`);
    var U = v ? 'destructors' : 'null',
      W = [
        'throwBindingError',
        'invoker',
        'fn',
        'runDestructors',
        'retType',
        'classParam',
      ],
      R = [T, i, o, Ke, r[0], r[1]];
    l &&
      (S +=
        'var thisWired = classParam.toWireType(' +
        U +
        `, this);
`);
    for (var g = 0; g < p - 2; ++g)
      (S +=
        'var arg' +
        g +
        'Wired = argType' +
        g +
        '.toWireType(' +
        U +
        ', arg' +
        g +
        '); // ' +
        r[g + 2].name +
        `
`),
        W.push('argType' + g),
        R.push(r[g + 2]);
    if (
      (l && ($ = 'thisWired' + ($.length > 0 ? ', ' : '') + $),
      (S +=
        (m || u ? 'var rv = ' : '') +
        'invoker(fn' +
        ($.length > 0 ? ', ' : '') +
        $ +
        `);
`),
      v)
    )
      S += `runDestructors(destructors);
`;
    else
      for (var g = l ? 1 : 2; g < r.length; ++g) {
        var L = g === 1 ? 'thisWired' : 'arg' + (g - 2) + 'Wired';
        r[g].destructorFunction !== null &&
          ((S +=
            L +
            '_dtor(' +
            L +
            '); // ' +
            r[g].name +
            `
`),
          W.push(L + '_dtor'),
          R.push(r[g].destructorFunction));
      }
    return (
      m &&
        (S += `var ret = retType.fromWireType(rv);
return ret;
`),
      (S += `}
`),
      W.push(S),
      Gt(Function, W).apply(null, R)
    );
  }
  function qt(t, r, n, i, o, u) {
    A(r > 0);
    var p = qe(r, n);
    (o = q(i, o)),
      K([], [t], function (l) {
        l = l[0];
        var v = 'constructor ' + l.name;
        if (
          (l.registeredClass.constructor_body === void 0 &&
            (l.registeredClass.constructor_body = []),
          l.registeredClass.constructor_body[r - 1] !== void 0)
        )
          throw new N(
            'Cannot register multiple constructors with identical number of parameters (' +
              (r - 1) +
              ") for class '" +
              l.name +
              "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
          );
        return (
          (l.registeredClass.constructor_body[r - 1] = function () {
            ae('Cannot construct ' + l.name + ' due to unbound types', p);
          }),
          K([], p, function (g) {
            return (
              g.splice(1, 0, null),
              (l.registeredClass.constructor_body[r - 1] = Ye(
                v,
                g,
                null,
                o,
                u
              )),
              []
            );
          }),
          []
        );
      });
  }
  function Kt(t, r, n, i, o, u, p, l, v) {
    var g = qe(n, i);
    (r = D(r)),
      (u = q(o, u)),
      K([], [t], function (m) {
        m = m[0];
        var P = m.name + '.' + r;
        r.startsWith('@@') && (r = Symbol[r.substring(2)]),
          l && m.registeredClass.pureVirtualFunctions.push(r);
        function $() {
          ae('Cannot call ' + P + ' due to unbound types', g);
        }
        var S = m.registeredClass.instancePrototype,
          U = S[r];
        return (
          U === void 0 ||
          (U.overloadTable === void 0 &&
            U.className !== m.name &&
            U.argCount === n - 2)
            ? (($.argCount = n - 2), ($.className = m.name), (S[r] = $))
            : (Je(S, r, P), (S[r].overloadTable[n - 2] = $)),
          K([], g, function (W) {
            var R = Ye(P, W, m, u, p, v);
            return (
              S[r].overloadTable === void 0
                ? ((R.argCount = n - 2), (S[r] = R))
                : (S[r].overloadTable[n - 2] = R),
              []
            );
          }),
          []
        );
      });
  }
  function Xe(t, r, n) {
    return (
      t instanceof Object || T(n + ' with invalid "this": ' + t),
      t instanceof r.registeredClass.constructor ||
        T(n + ' incompatible with "this" of type ' + t.constructor.name),
      t.$$.ptr ||
        T('cannot call emscripten binding method ' + n + ' on deleted object'),
      ye(t.$$.ptr, t.$$.ptrType.registeredClass, r.registeredClass)
    );
  }
  function Yt(t, r, n, i, o, u, p, l, v, g) {
    (r = D(r)),
      (o = q(i, o)),
      K([], [t], function (m) {
        m = m[0];
        var P = m.name + '.' + r,
          $ = {
            get: function () {
              ae('Cannot access ' + P + ' due to unbound types', [n, p]);
            },
            enumerable: !0,
            configurable: !0,
          };
        return (
          v
            ? ($.set = function () {
                ae('Cannot access ' + P + ' due to unbound types', [n, p]);
              })
            : ($.set = function (S) {
                T(P + ' is a read-only property');
              }),
          Object.defineProperty(m.registeredClass.instancePrototype, r, $),
          K([], v ? [n, p] : [n], function (S) {
            var U = S[0],
              W = {
                get: function () {
                  var L = Xe(this, m, P + ' getter');
                  return U.fromWireType(o(u, L));
                },
                enumerable: !0,
              };
            if (v) {
              v = q(l, v);
              var R = S[1];
              W.set = function (L) {
                var oe = Xe(this, m, P + ' setter'),
                  I = [];
                v(g, oe, R.toWireType(I, L)), Ke(I);
              };
            }
            return (
              Object.defineProperty(m.registeredClass.instancePrototype, r, W),
              []
            );
          }),
          []
        );
      });
  }
  function Xt() {
    (this.allocated = [void 0]),
      (this.freelist = []),
      (this.get = function (t) {
        return this.allocated[t];
      }),
      (this.has = function (t) {
        return this.allocated[t] !== void 0;
      }),
      (this.allocate = function (t) {
        var r = this.freelist.pop() || this.allocated.length;
        return (this.allocated[r] = t), r;
      }),
      (this.free = function (t) {
        (this.allocated[t] = void 0), this.freelist.push(t);
      });
  }
  var H = new Xt();
  function Qt(t) {
    t >= H.reserved && --H.get(t).refcount === 0 && H.free(t);
  }
  function Zt() {
    for (var t = 0, r = H.reserved; r < H.allocated.length; ++r)
      H.allocated[r] !== void 0 && ++t;
    return t;
  }
  function Nt() {
    H.allocated.push(
      { value: void 0 },
      { value: null },
      { value: !0 },
      { value: !1 }
    ),
      (H.reserved = H.allocated.length),
      (f.count_emval_handles = Zt);
  }
  var Ue = {
    toValue: function (t) {
      return t || T('Cannot use deleted val. handle = ' + t), H.get(t).value;
    },
    toHandle: function (t) {
      switch (t) {
        case void 0:
          return 1;
        case null:
          return 2;
        case !0:
          return 3;
        case !1:
          return 4;
        default:
          return H.allocate({ refcount: 1, value: t });
      }
    },
  };
  function er(t, r) {
    (r = D(r)),
      x(t, {
        name: r,
        fromWireType: function (n) {
          var i = Ue.toValue(n);
          return Qt(n), i;
        },
        toWireType: function (n, i) {
          return Ue.toHandle(i);
        },
        argPackAdvance: 8,
        readValueFromPointer: be,
        destructorFunction: null,
      });
  }
  function Re(t) {
    if (t === null) return 'null';
    var r = typeof t;
    return r === 'object' || r === 'array' || r === 'function'
      ? t.toString()
      : '' + t;
  }
  function tr(t, r) {
    switch (r) {
      case 2:
        return function (n) {
          return this.fromWireType(fe[n >> 2]);
        };
      case 3:
        return function (n) {
          return this.fromWireType(le[n >> 3]);
        };
      default:
        throw new TypeError('Unknown float type: ' + t);
    }
  }
  function rr(t, r, n) {
    var i = $e(n);
    (r = D(r)),
      x(t, {
        name: r,
        fromWireType: function (o) {
          return o;
        },
        toWireType: function (o, u) {
          return u;
        },
        argPackAdvance: 8,
        readValueFromPointer: tr(r, i),
        destructorFunction: null,
      });
  }
  function nr(t, r, n) {
    switch (r) {
      case 0:
        return n
          ? function (o) {
              return j[o];
            }
          : function (o) {
              return O[o];
            };
      case 1:
        return n
          ? function (o) {
              return E[o >> 1];
            }
          : function (o) {
              return J[o >> 1];
            };
      case 2:
        return n
          ? function (o) {
              return M[o >> 2];
            }
          : function (o) {
              return k[o >> 2];
            };
      default:
        throw new TypeError('Unknown integer type: ' + t);
    }
  }
  function ir(t, r, n, i, o) {
    r = D(r);
    var u = $e(n),
      p = function (P) {
        return P;
      };
    if (i === 0) {
      var l = 32 - 8 * n;
      p = function (P) {
        return (P << l) >>> l;
      };
    }
    var v = r.includes('unsigned'),
      g = function (P, $) {},
      m;
    v
      ? (m = function (P, $) {
          return g($, this.name), $ >>> 0;
        })
      : (m = function (P, $) {
          return g($, this.name), $;
        }),
      x(t, {
        name: r,
        fromWireType: p,
        toWireType: m,
        argPackAdvance: 8,
        readValueFromPointer: nr(r, u, i !== 0),
        destructorFunction: null,
      });
  }
  function ar(t, r, n) {
    var i = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
      ],
      o = i[r];
    function u(p) {
      p = p >> 2;
      var l = k,
        v = l[p],
        g = l[p + 1];
      return new o(l.buffer, g, v);
    }
    (n = D(n)),
      x(
        t,
        {
          name: n,
          fromWireType: u,
          argPackAdvance: 8,
          readValueFromPointer: u,
        },
        { ignoreDuplicateRegistrations: !0 }
      );
  }
  function sr(t) {
    for (var r = 0, n = 0; n < t.length; ++n) {
      var i = t.charCodeAt(n);
      i <= 127
        ? r++
        : i <= 2047
        ? (r += 2)
        : i >= 55296 && i <= 57343
        ? ((r += 4), ++n)
        : (r += 3);
    }
    return r;
  }
  function or(t, r) {
    r = D(r);
    var n = r === 'std::string';
    x(t, {
      name: r,
      fromWireType: function (i) {
        var o = k[i >> 2],
          u = i + 4,
          p;
        if (n)
          for (var l = u, v = 0; v <= o; ++v) {
            var g = u + v;
            if (v == o || O[g] == 0) {
              var m = g - l,
                P = X(l, m);
              p === void 0
                ? (p = P)
                : ((p += String.fromCharCode(0)), (p += P)),
                (l = g + 1);
            }
          }
        else {
          for (var $ = new Array(o), v = 0; v < o; ++v)
            $[v] = String.fromCharCode(O[u + v]);
          p = $.join('');
        }
        return z(i), p;
      },
      toWireType: function (i, o) {
        o instanceof ArrayBuffer && (o = new Uint8Array(o));
        var u,
          p = typeof o == 'string';
        p ||
          o instanceof Uint8Array ||
          o instanceof Uint8ClampedArray ||
          o instanceof Int8Array ||
          T('Cannot pass non-string to std::string'),
          n && p ? (u = sr(o)) : (u = o.length);
        var l = De(4 + u + 1),
          v = l + 4;
        if (((k[l >> 2] = u), n && p)) at(o, v, u + 1);
        else if (p)
          for (var g = 0; g < u; ++g) {
            var m = o.charCodeAt(g);
            m > 255 &&
              (z(v),
              T('String has UTF-16 code units that do not fit in 8 bits')),
              (O[v + g] = m);
          }
        else for (var g = 0; g < u; ++g) O[v + g] = o[g];
        return i !== null && i.push(z, l), l;
      },
      argPackAdvance: 8,
      readValueFromPointer: be,
      destructorFunction: function (i) {
        z(i);
      },
    });
  }
  var Qe = typeof TextDecoder < 'u' ? new TextDecoder('utf-16le') : void 0;
  function fr(t, r) {
    for (var n = t, i = n >> 1, o = i + r / 2; !(i >= o) && J[i]; ) ++i;
    if (((n = i << 1), n - t > 32 && Qe)) return Qe.decode(O.subarray(t, n));
    for (var u = '', p = 0; !(p >= r / 2); ++p) {
      var l = E[(t + p * 2) >> 1];
      if (l == 0) break;
      u += String.fromCharCode(l);
    }
    return u;
  }
  function lr(t, r, n) {
    if ((n === void 0 && (n = 2147483647), n < 2)) return 0;
    n -= 2;
    for (
      var i = r, o = n < t.length * 2 ? n / 2 : t.length, u = 0;
      u < o;
      ++u
    ) {
      var p = t.charCodeAt(u);
      (E[r >> 1] = p), (r += 2);
    }
    return (E[r >> 1] = 0), r - i;
  }
  function ur(t) {
    return t.length * 2;
  }
  function cr(t, r) {
    for (var n = 0, i = ''; !(n >= r / 4); ) {
      var o = M[(t + n * 4) >> 2];
      if (o == 0) break;
      if ((++n, o >= 65536)) {
        var u = o - 65536;
        i += String.fromCharCode(55296 | (u >> 10), 56320 | (u & 1023));
      } else i += String.fromCharCode(o);
    }
    return i;
  }
  function dr(t, r, n) {
    if ((n === void 0 && (n = 2147483647), n < 4)) return 0;
    for (var i = r, o = i + n - 4, u = 0; u < t.length; ++u) {
      var p = t.charCodeAt(u);
      if (p >= 55296 && p <= 57343) {
        var l = t.charCodeAt(++u);
        p = (65536 + ((p & 1023) << 10)) | (l & 1023);
      }
      if (((M[r >> 2] = p), (r += 4), r + 4 > o)) break;
    }
    return (M[r >> 2] = 0), r - i;
  }
  function pr(t) {
    for (var r = 0, n = 0; n < t.length; ++n) {
      var i = t.charCodeAt(n);
      i >= 55296 && i <= 57343 && ++n, (r += 4);
    }
    return r;
  }
  function gr(t, r, n) {
    n = D(n);
    var i, o, u, p, l;
    r === 2
      ? ((i = fr),
        (o = lr),
        (p = ur),
        (u = function () {
          return J;
        }),
        (l = 1))
      : r === 4 &&
        ((i = cr),
        (o = dr),
        (p = pr),
        (u = function () {
          return k;
        }),
        (l = 2)),
      x(t, {
        name: n,
        fromWireType: function (v) {
          for (var g = k[v >> 2], m = u(), P, $ = v + 4, S = 0; S <= g; ++S) {
            var U = v + 4 + S * r;
            if (S == g || m[U >> l] == 0) {
              var W = U - $,
                R = i($, W);
              P === void 0
                ? (P = R)
                : ((P += String.fromCharCode(0)), (P += R)),
                ($ = U + r);
            }
          }
          return z(v), P;
        },
        toWireType: function (v, g) {
          typeof g != 'string' &&
            T('Cannot pass non-string to C++ string type ' + n);
          var m = p(g),
            P = De(4 + m + r);
          return (
            (k[P >> 2] = m >> l),
            o(g, P + 4, m + r),
            v !== null && v.push(z, P),
            P
          );
        },
        argPackAdvance: 8,
        readValueFromPointer: be,
        destructorFunction: function (v) {
          z(v);
        },
      });
  }
  function hr(t, r) {
    (r = D(r)),
      x(t, {
        isVoid: !0,
        name: r,
        argPackAdvance: 0,
        fromWireType: function () {},
        toWireType: function (n, i) {},
      });
  }
  function vr() {
    throw 1 / 0;
  }
  function yr(t, r, n, i, o, u, p) {
    return -52;
  }
  function br(t, r, n, i, o, u) {}
  function mr() {
    F('');
  }
  var We;
  typeof performance < 'u' && performance.now
    ? (We = function () {
        return performance.now();
      })
    : (We = Date.now);
  function wr() {
    return 2147483648;
  }
  function Cr(t) {
    var r = B.buffer;
    try {
      return B.grow((t - r.byteLength + 65535) >>> 16), Y(), 1;
    } catch {}
  }
  function _r(t) {
    var r = O.length;
    t = t >>> 0;
    var n = wr();
    if (t > n) return !1;
    for (
      var i = function (v, g) {
          return v + ((g - (v % g)) % g);
        },
        o = 1;
      o <= 4;
      o *= 2
    ) {
      var u = r * (1 + 0.2 / o);
      u = Math.min(u, t + 100663296);
      var p = Math.min(n, i(Math.max(t, u), 65536)),
        l = Cr(p);
      if (l) return !0;
    }
    return !1;
  }
  var Ie = {};
  function Tr() {
    return './this.program';
  }
  function se() {
    if (!se.strings) {
      var t =
          (
            (typeof navigator == 'object' &&
              navigator.languages &&
              navigator.languages[0]) ||
            'C'
          ).replace('-', '_') + '.UTF-8',
        r = {
          USER: 'web_user',
          LOGNAME: 'web_user',
          PATH: '/',
          PWD: '/',
          HOME: '/home/web_user',
          LANG: t,
          _: Tr(),
        };
      for (var n in Ie) Ie[n] === void 0 ? delete r[n] : (r[n] = Ie[n]);
      var i = [];
      for (var n in r) i.push(n + '=' + r[n]);
      se.strings = i;
    }
    return se.strings;
  }
  function Pr(t, r) {
    for (var n = 0; n < t.length; ++n) j[r++ >> 0] = t.charCodeAt(n);
    j[r >> 0] = 0;
  }
  function Ar(t, r) {
    var n = 0;
    return (
      se().forEach(function (i, o) {
        var u = r + n;
        (k[(t + o * 4) >> 2] = u), Pr(i, u), (n += i.length + 1);
      }),
      0
    );
  }
  function Fr(t, r) {
    var n = se();
    k[t >> 2] = n.length;
    var i = 0;
    return (
      n.forEach(function (o) {
        i += o.length + 1;
      }),
      (k[r >> 2] = i),
      0
    );
  }
  function $r(t) {
    throw 'exit(' + t + ')';
  }
  var Sr = $r;
  function jr(t) {
    return 52;
  }
  function Or(t, r, n, i) {
    return 52;
  }
  function Er(t, r, n, i, o) {
    return 70;
  }
  var Mr = [null, [], []];
  function kr(t, r) {
    var n = Mr[t];
    r === 0 || r === 10
      ? ((t === 1 ? C : y)(pe(n, 0)), (n.length = 0))
      : n.push(r);
  }
  function Ur(t, r, n, i) {
    for (var o = 0, u = 0; u < n; u++) {
      var p = k[r >> 2],
        l = k[(r + 4) >> 2];
      r += 8;
      for (var v = 0; v < l; v++) kr(t, O[p + v]);
      o += l;
    }
    return (k[i >> 2] = o), 0;
  }
  dt(),
    (N = f.BindingError = Oe(Error, 'BindingError')),
    (He = f.InternalError = Oe(Error, 'InternalError')),
    Ot(),
    _t(),
    Lt(),
    (Ge = f.UnboundTypeError = Oe(Error, 'UnboundTypeError')),
    Nt();
  var Rr = {
    b: Te,
    k: Pe,
    I: Ae,
    B: st,
    K: ot,
    G: ft,
    n: lt,
    H: ut,
    u: ct,
    r: ht,
    j: Jt,
    A: qt,
    d: Kt,
    c: Yt,
    L: er,
    p: rr,
    g: ir,
    e: ar,
    q: or,
    l: gr,
    s: hr,
    y: vr,
    C: yr,
    D: br,
    f: mr,
    m: We,
    z: _r,
    E: Ar,
    F: Fr,
    h: Sr,
    i: jr,
    o: Or,
    t: Er,
    J: Ur,
    x: Wr,
    v: Dr,
    w: Ir,
    a: B,
  };
  function Wr(t, r, n) {
    var i = Ce();
    try {
      return ie(t)(r, n);
    } catch (o) {
      if ((_e(i), o !== o + 0)) throw o;
      we(1, 0);
    }
  }
  function Ir(t, r, n, i, o) {
    var u = Ce();
    try {
      return ie(t)(r, n, i, o);
    } catch (p) {
      if ((_e(u), p !== p + 0)) throw p;
      we(1, 0);
    }
  }
  function Dr(t, r, n, i) {
    var o = Ce();
    try {
      return ie(t)(r, n, i);
    } catch (u) {
      if ((_e(o), u !== u + 0)) throw u;
      we(1, 0);
    }
  }
  (f.getTempRet0 = tt), (f.setTempRet0 = et);
  function Lr(t) {
    t.M();
  }
  var Ze = { a: Rr },
    De,
    z,
    Ne,
    we,
    et,
    tt,
    Ce,
    _e;
  return (
    (WebAssembly.instantiateStreaming
      ? WebAssembly.instantiateStreaming(fetch('jassub-worker-modern.wasm'), Ze)
      : WebAssembly.instantiate(f.wasm, Ze)
    ).then(function (t) {
      (w = (t.instance || t).exports),
        (f._malloc = De = w.N),
        (z = w.O),
        (Ne = w.P),
        (f.__embind_initialize_bindings = w.Q),
        (we = w.S),
        (et = w.T),
        (tt = w.U),
        (Ce = w.V),
        (_e = w.W),
        w.X,
        w.Y,
        w.Z,
        w._,
        (ue = w.R),
        Lr(w),
        _();
    }),
    f.ready
  );
};
String.prototype.startsWith ||
  (String.prototype.startsWith = function (s, f = 0) {
    return this.substring(f, s.length) === s;
  });
String.prototype.includes ||
  (String.prototype.includes = function (s, f) {
    return this.indexOf(s, f) !== -1;
  });
Uint8Array.prototype.slice ||
  (Uint8Array.prototype.slice = function (s, f) {
    return new Uint8Array(this.subarray(s, f));
  });
function toAbsoluteIndex(s, f) {
  const h = s >> 0;
  return h < 0 ? Math.max(h + f, 0) : Math.min(h, f);
}
Uint8Array.prototype.fill ||
  (Int8Array.prototype.fill =
    Int16Array.prototype.fill =
    Int32Array.prototype.fill =
    Uint8Array.prototype.fill =
    Uint16Array.prototype.fill =
    Uint32Array.prototype.fill =
    Float32Array.prototype.fill =
    Float64Array.prototype.fill =
    Array.prototype.fill =
      function (s) {
        if (this == null) throw new TypeError('this is null or not defined');
        const f = Object(this),
          h = f.length >>> 0,
          C = arguments.length;
        let y = toAbsoluteIndex(C > 1 ? arguments[1] : void 0, h);
        const _ = C > 2 ? arguments[2] : void 0,
          A = _ === void 0 ? h : toAbsoluteIndex(_, h);
        for (; A > y; ) f[y++] = s;
        return f;
      });
Uint8Array.prototype.copyWithin ||
  (Int8Array.prototype.copyWithin =
    Int16Array.prototype.copyWithin =
    Int32Array.prototype.copyWithin =
    Uint8Array.prototype.copyWithin =
    Uint16Array.prototype.copyWithin =
    Uint32Array.prototype.copyWithin =
    Float32Array.prototype.copyWithin =
    Float64Array.prototype.copyWithin =
    Array.prototype.copyWithin =
      function (s, f) {
        const h = Object(this),
          C = h.length >>> 0;
        let y = toAbsoluteIndex(s, C),
          _ = toAbsoluteIndex(f, C);
        const A = arguments.length > 2 ? arguments[2] : void 0;
        let w = Math.min((A === void 0 ? C : toAbsoluteIndex(A, C)) - _, C - y),
          F = 1;
        for (
          _ < y && y < _ + w && ((F = -1), (_ += w - 1), (y += w - 1));
          w-- > 0;

        )
          _ in h ? (h[y] = h[_]) : delete h[y], (y += F), (_ += F);
        return h;
      });
Date.now || (Date.now = () => new Date().getTime());
'performance' in self || (self.performance = { now: () => Date.now() });
if (typeof console > 'u') {
  const s = (f, h) => {
    postMessage({
      target: 'console',
      command: f,
      content: JSON.stringify(Array.prototype.slice.call(h)),
    });
  };
  (self.console = {
    log: function () {
      s('log', arguments);
    },
    debug: function () {
      s('debug', arguments);
    },
    info: function () {
      s('info', arguments);
    },
    warn: function () {
      s('warn', arguments);
    },
    error: function () {
      s('error', arguments);
    },
  }),
    console.log('Detected lack of console, overridden console');
}
let promiseSupported = typeof Promise < 'u';
if (promiseSupported)
  try {
    let s;
    new Promise((f) => {
      s = f;
    }),
      s();
  } catch {
    promiseSupported = !1;
  }
promiseSupported ||
  (self.Promise = function (s) {
    let f = () => {};
    return s((h) => setTimeout(() => f(h), 0)), { then: (h) => (f = h) };
  });
const read_ = (s, f) => {
    const h = new XMLHttpRequest();
    return (
      h.open('GET', s, !1),
      (h.responseType = f ? 'arraybuffer' : 'text'),
      h.send(null),
      h.response
    );
  },
  readAsync = (s, f, h) => {
    const C = new XMLHttpRequest();
    C.open('GET', s, !0),
      (C.responseType = 'arraybuffer'),
      (C.onload = () => {
        if ((C.status === 200 || C.status === 0) && C.response)
          return f(C.response);
      }),
      (C.onerror = h),
      C.send(null);
  };
let lastCurrentTime = 0;
const rate = 1;
let rafId = null,
  nextIsRaf = !1,
  lastCurrentTimeReceivedAt = Date.now(),
  targetFps = 24,
  useLocalFonts = !1,
  blendMode = 'js',
  availableFonts = {};
const fontMap_ = {};
let fontId = 0,
  debug;
self.width = 0;
self.height = 0;
let asyncRender = !1;
self.addFont = ({ font: s }) => asyncWrite(s);
const findAvailableFonts = (s) => {
    (s = s.trim().toLowerCase()),
      s.startsWith('@') && (s = s.substring(1)),
      !fontMap_[s] &&
        ((fontMap_[s] = !0),
        availableFonts[s]
          ? asyncWrite(availableFonts[s])
          : useLocalFonts && postMessage({ target: 'getLocalFont', font: s }));
  },
  asyncWrite = (s) => {
    typeof s == 'string'
      ? readAsync(
          s,
          (f) => {
            allocFont(new Uint8Array(f));
          },
          console.error
        )
      : allocFont(s);
  },
  allocFont = (s) => {
    const f = _malloc(s.byteLength);
    self.HEAPU8.set(s, f),
      jassubObj.addFont('font-' + fontId++, f, s.byteLength),
      jassubObj.reloadFonts();
  },
  processAvailableFonts = (s) => {
    if (!availableFonts) return;
    const f = parseAss(s);
    for (let y = 0; y < f.length; y++)
      for (let _ = 0; _ < f[y].body.length; _++)
        f[y].body[_].key === 'Style' &&
          findAvailableFonts(f[y].body[_].value.Fontname);
    const h = /\\fn([^\\}]*?)[\\}]/g;
    let C;
    for (; (C = h.exec(s)) !== null; ) findAvailableFonts(C[1]);
  };
self.setTrack = ({ content: s }) => {
  processAvailableFonts(s),
    dropAllBlur && (s = dropBlur(s)),
    jassubObj.createTrackMem(s),
    (subtitleColorSpace = libassYCbCrMap[jassubObj.trackColorSpace]),
    postMessage({ target: 'verifyColorSpace', subtitleColorSpace });
};
self.getColorSpace = () =>
  postMessage({ target: 'verifyColorSpace', subtitleColorSpace });
self.freeTrack = () => {
  jassubObj.removeTrack();
};
self.setTrackByUrl = ({ url: s }) => {
  self.setTrack({ content: read_(s) });
};
const getCurrentTime = () => {
    const s = (Date.now() - lastCurrentTimeReceivedAt) / 1e3;
    return _isPaused
      ? lastCurrentTime
      : (s > 5 &&
          (console.error(
            "Didn't received currentTime > 5 seconds. Assuming video was paused."
          ),
          setIsPaused(!0)),
        lastCurrentTime + s * rate);
  },
  setCurrentTime = (s) => {
    (lastCurrentTime = s),
      (lastCurrentTimeReceivedAt = Date.now()),
      rafId ||
        (nextIsRaf
          ? (rafId = requestAnimationFrame(renderLoop))
          : (renderLoop(),
            setTimeout(() => {
              nextIsRaf = !1;
            }, 20)));
  };
let _isPaused = !0;
const setIsPaused = (s) => {
    s !== _isPaused &&
      ((_isPaused = s),
      s
        ? rafId && (clearTimeout(rafId), (rafId = null))
        : ((lastCurrentTimeReceivedAt = Date.now()),
          (rafId = requestAnimationFrame(renderLoop))));
  },
  a = 'BT601',
  b = 'BT709',
  c = 'SMPTE240M',
  d = 'FCC',
  libassYCbCrMap = [null, a, null, a, a, b, b, c, c, d, d],
  render = (s, f) => {
    const h = {},
      C = performance.now(),
      y =
        blendMode === 'wasm'
          ? jassubObj.renderBlend(s, f || 0)
          : jassubObj.renderImage(s, f || 0);
    if (debug) {
      const _ = performance.now(),
        A = jassubObj.time;
      (h.WASMRenderTime = A - C),
        (h.WASMBitmapDecodeTime = _ - A),
        (h.JSRenderTime = Date.now());
    }
    if (jassubObj.changed !== 0 || f) {
      const _ = [],
        A = [];
      if (!y) return paintImages({ images: _, buffers: A, times: h });
      if (asyncRender) {
        const w = [];
        for (let F = y, j = 0; j < jassubObj.count; F = F.next, ++j) {
          const E = { w: F.w, h: F.h, x: F.x, y: F.y },
            M = F.image,
            O = hasBitmapBug
              ? self.HEAPU8C.slice(M, M + E.w * E.h * 4)
              : self.HEAPU8C.subarray(M, M + E.w * E.h * 4);
          w.push(createImageBitmap(new ImageData(O, E.w, E.h))), _.push(E);
        }
        Promise.all(w).then((F) => {
          for (let j = 0; j < _.length; j++) _[j].image = F[j];
          debug && (h.JSBitmapGenerationTime = Date.now() - h.JSRenderTime),
            paintImages({ images: _, buffers: F, times: h });
        });
      } else {
        for (let w = y, F = 0; F < jassubObj.count; w = w.next, ++F) {
          const j = { w: w.w, h: w.h, x: w.x, y: w.y, image: w.image };
          if (!offCanvasCtx) {
            const E = self.wasmMemory.buffer.slice(
              w.image,
              w.image + w.w * w.h * 4
            );
            A.push(E), (j.image = E);
          }
          _.push(j);
        }
        paintImages({ images: _, buffers: A, times: h });
      }
    } else postMessage({ target: 'unbusy' });
  };
self.demand = ({ time: s }) => {
  (lastCurrentTime = s), render(s);
};
const renderLoop = (s) => {
    (rafId = 0),
      render(getCurrentTime(), s),
      _isPaused || (rafId = requestAnimationFrame(renderLoop));
  },
  paintImages = ({ times: s, images: f, buffers: h }) => {
    const C = {
      target: 'render',
      asyncRender,
      images: f,
      times: s,
      width: self.width,
      height: self.height,
      colorSpace: subtitleColorSpace,
    };
    if (offscreenRender) {
      const newWidth = Math.floor(self.width) || 0;
      const newHeight = Math.floor(self.height) || 0;

      if (
        (offCanvas.height !== newHeight || offCanvas.width !== newWidth) &&
        newWidth > 0 &&
        newHeight > 0
      ) {
        try {
          offCanvas.width = newWidth;
          offCanvas.height = newHeight;
        } catch (err) {
          console.error('Failed to resize canvas:', err);
        }
      }

      offCanvasCtx.clearRect(0, 0, offCanvas.width, offCanvas.height);
      for (const y of f)
        y.image &&
          (asyncRender
            ? (offCanvasCtx.drawImage(y.image, y.x, y.y), y.image.close())
            : ((bufferCanvas.width = y.w),
              (bufferCanvas.height = y.h),
              bufferCtx.putImageData(
                new ImageData(
                  self.HEAPU8C.subarray(y.image, y.image + y.w * y.h * 4),
                  y.w,
                  y.h
                ),
                0,
                0
              ),
              offCanvasCtx.drawImage(bufferCanvas, y.x, y.y)));
      if (offscreenRender === 'hybrid') {
        if (!f.length) return postMessage(C);
        debug && (s.bitmaps = f.length);
        try {
          const y = offCanvas.transferToImageBitmap();
          (C.images = [{ image: y, x: 0, y: 0 }]),
            (C.asyncRender = !0),
            postMessage(C, [y]);
        } catch {
          postMessage({ target: 'unbusy' });
        }
      } else {
        if (debug) {
          s.JSRenderTime =
            Date.now() - s.JSRenderTime - (s.JSBitmapGenerationTime || 0);
          let y = 0;
          for (const _ in s) y += s[_];
          console.log('Bitmaps: ' + f.length + ' Total: ' + (y | 0) + 'ms', s);
        }
        postMessage({ target: 'unbusy' });
      }
    } else postMessage(C, h);
  },
  parseAss = (s) => {
    let f, h, C, y, _, A, w, F, j, E;
    const M = [],
      O = s.split(/[\r\n]+/g);
    for (F = 0; F < O.length; F++)
      if (((f = O[F].match(/^\[(.*)\]$/)), f))
        (h = null), M.push({ name: f[1], body: [] });
      else {
        if (/^\s*$/.test(O[F]) || M.length === 0) continue;
        if (((E = M[M.length - 1].body), O[F][0] === ';'))
          E.push({ type: 'comment', value: O[F].substring(1) });
        else {
          if (
            ((y = O[F].split(':')),
            (_ = y[0]),
            (A = y.slice(1).join(':').trim()),
            (h || _ === 'Format') &&
              ((A = A.split(',')),
              h &&
                A.length > h.length &&
                ((C = A.slice(h.length - 1).join(',')),
                (A = A.slice(0, h.length - 1)),
                A.push(C)),
              (A = A.map((J) => J.trim())),
              h))
          ) {
            for (w = {}, j = 0; j < A.length; j++) w[h[j]] = A[j];
            A = w;
          }
          _ === 'Format' && (h = A), E.push({ key: _, value: A });
        }
      }
    return M;
  },
  blurRegex = /\\blur(?:[0-9]+\.)?[0-9]+/gm,
  dropBlur = (s) => s.replace(blurRegex, ''),
  requestAnimationFrame = (() => {
    let s = 0;
    return (f) => {
      const h = Date.now();
      if (s === 0) s = h + 1e3 / targetFps;
      else for (; h + 2 >= s; ) s += 1e3 / targetFps;
      const C = Math.max(s - h, 0);
      return setTimeout(f, C);
    };
  })(),
  _applyKeys = (s, f) => {
    for (const h of Object.keys(s)) f[h] = s[h];
  };
let offCanvas,
  offCanvasCtx,
  offscreenRender,
  bufferCanvas,
  bufferCtx,
  jassubObj,
  subtitleColorSpace,
  dropAllBlur,
  _malloc,
  hasBitmapBug;
self.init = (data) => {
  hasBitmapBug = data.hasBitmapBug;
  try {
    const s = new WebAssembly.Module(
      Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
    );
    if (
      !(s instanceof WebAssembly.Module) ||
      !(new WebAssembly.Instance(s) instanceof WebAssembly.Instance)
    )
      throw new Error('WASM not supported');
  } catch (e) {
    console.warn(e), eval(read_(data.legacyWasmUrl));
  }
  if (WebAssembly.instantiateStreaming) {
    const s = self.fetch;
    self.fetch = (f) => s(data.wasmUrl);
  }
  Module({
    wasm: !WebAssembly.instantiateStreaming && read_(data.wasmUrl, !0),
  }).then((s) => {
    (_malloc = s._malloc),
      (self.width = data.width),
      (self.height = data.height),
      (blendMode = data.blendMode),
      (asyncRender = data.asyncRender),
      asyncRender &&
        typeof createImageBitmap > 'u' &&
        ((asyncRender = !1),
        console.error(
          "'createImageBitmap' needed for 'asyncRender' unsupported!"
        )),
      (availableFonts = data.availableFonts),
      (debug = data.debug),
      (targetFps = data.targetFps || targetFps),
      (useLocalFonts = data.useLocalFonts),
      (dropAllBlur = data.dropAllBlur);
    const f = data.fallbackFont.toLowerCase();
    (jassubObj = new s.JASSUB(self.width, self.height, f || null, debug)),
      f && findAvailableFonts(f);
    let h = data.subContent;
    h || (h = read_(data.subUrl)),
      processAvailableFonts(h),
      dropAllBlur && (h = dropBlur(h));
    for (const C of data.fonts || []) asyncWrite(C);
    jassubObj.createTrackMem(h),
      (subtitleColorSpace = libassYCbCrMap[jassubObj.trackColorSpace]),
      jassubObj.setDropAnimations(data.dropAllAnimations || 0),
      (data.libassMemoryLimit > 0 || data.libassGlyphLimit > 0) &&
        jassubObj.setMemoryLimits(
          data.libassGlyphLimit || 0,
          data.libassMemoryLimit || 0
        ),
      postMessage({ target: 'ready' }),
      postMessage({ target: 'verifyColorSpace', subtitleColorSpace });
  });
};
self.offscreenCanvas = ({ transferable: s }) => {
  (offCanvas = s[0]),
    (offCanvasCtx = offCanvas.getContext('2d')),
    asyncRender ||
      ((bufferCanvas = new OffscreenCanvas(self.height, self.width)),
      (bufferCtx = bufferCanvas.getContext('2d', { desynchronized: !0 }))),
    (offscreenRender = !0);
};
self.detachOffscreen = () => {
  (offCanvas = new OffscreenCanvas(self.height, self.width)),
    (offCanvasCtx = offCanvas.getContext('2d', { desynchronized: !0 })),
    (offscreenRender = 'hybrid');
};
self.canvas = ({ width: s, height: f, force: h }) => {
  if (s == null) throw new Error('Invalid canvas size specified');
  (self.width = s),
    (self.height = f),
    jassubObj && jassubObj.resizeCanvas(s, f),
    h && render(lastCurrentTime, !0);
};
self.video = ({ currentTime: s, isPaused: f, rate: h }) => {
  s != null && setCurrentTime(s), f != null && setIsPaused(f), (h = h || h);
};
self.destroy = () => {
  jassubObj.quitLibrary();
};
self.createEvent = ({ event: s }) => {
  _applyKeys(s, jassubObj.getEvent(jassubObj.allocEvent()));
};
self.getEvents = () => {
  const s = [];
  for (let f = 0; f < jassubObj.getEventCount(); f++) {
    const {
      Start: h,
      Duration: C,
      ReadOrder: y,
      Layer: _,
      Style: A,
      MarginL: w,
      MarginR: F,
      MarginV: j,
      Name: E,
      Text: M,
      Effect: O,
    } = jassubObj.getEvent(f);
    s.push({
      Start: h,
      Duration: C,
      ReadOrder: y,
      Layer: _,
      Style: A,
      MarginL: w,
      MarginR: F,
      MarginV: j,
      Name: E,
      Text: M,
      Effect: O,
    });
  }
  postMessage({ target: 'getEvents', events: s });
};
self.setEvent = ({ event: s, index: f }) => {
  _applyKeys(s, jassubObj.getEvent(f));
};
self.removeEvent = ({ index: s }) => {
  jassubObj.removeEvent(s);
};
self.createStyle = ({ style: s }) => {
  _applyKeys(s, jassubObj.getStyle(jassubObj.allocStyle()));
};
self.getStyles = () => {
  const s = [];
  for (let f = 0; f < jassubObj.getStyleCount(); f++) {
    const {
      Name: h,
      FontName: C,
      FontSize: y,
      PrimaryColour: _,
      SecondaryColour: A,
      OutlineColour: w,
      BackColour: F,
      Bold: j,
      Italic: E,
      Underline: M,
      StrikeOut: O,
      ScaleX: J,
      ScaleY: k,
      Spacing: fe,
      Angle: le,
      BorderStyle: B,
      Outline: ue,
      Shadow: Y,
      Alignment: ce,
      MarginL: de,
      MarginR: pe,
      MarginV: X,
      Encoding: Te,
      treat_fontname_as_pattern: Pe,
      Blur: Ae,
      Justify: Fe,
    } = jassubObj.getStyle(f);
    s.push({
      Name: h,
      FontName: C,
      FontSize: y,
      PrimaryColour: _,
      SecondaryColour: A,
      OutlineColour: w,
      BackColour: F,
      Bold: j,
      Italic: E,
      Underline: M,
      StrikeOut: O,
      ScaleX: J,
      ScaleY: k,
      Spacing: fe,
      Angle: le,
      BorderStyle: B,
      Outline: ue,
      Shadow: Y,
      Alignment: ce,
      MarginL: de,
      MarginR: pe,
      MarginV: X,
      Encoding: Te,
      treat_fontname_as_pattern: Pe,
      Blur: Ae,
      Justify: Fe,
    });
  }
  postMessage({ target: 'getStyles', time: Date.now(), styles: s });
};
self.setStyle = ({ style: s, index: f }) => {
  _applyKeys(s, jassubObj.getStyle(f));
};
self.removeStyle = ({ index: s }) => {
  jassubObj.removeStyle(s);
};
onmessage = ({ data: s }) => {
  if (self[s.target]) self[s.target](s);
  else throw new Error('Unknown event target ' + s.target);
};