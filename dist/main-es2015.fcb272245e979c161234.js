(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(t, e, n) {
      t.exports = n('zUnb');
    },
    '0QMH': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var r = n('fXoL'),
        s = n('rB/T');
      function i(t, e) {
        let n;
        t.hot.accept(),
          e()
            .then(t => (n = t))
            .catch(t => console.error(t)),
          t.hot.dispose(() => {
            const t = n.injector.get(r.g).components.map(t => t.location.nativeElement),
              e = Object(s.createNewHosts)(t);
            n.destroy(), e();
          });
      }
    },
    '2QA8': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = (() => ('function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random()))();
    },
    '2fFW': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      });
      let r = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + t.stack
            );
          } else r && console.log('RxJS: Back to a better error behavior. Thank you. <3');
          r = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        }
      };
    },
    '3UD+': function(t, e) {
      t.exports = function(t) {
        if (!t.webpackPolyfill) {
          var e = Object.create(t);
          e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            Object.defineProperty(e, 'exports', { enumerable: !0 }),
            (e.webpackPolyfill = 1);
        }
        return e;
      };
    },
    '5+tZ': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return l;
      });
      var r = n('ZUHj'),
        s = n('l7GE'),
        i = n('51Dv'),
        o = n('lJxs'),
        a = n('Cfvw');
      function l(t, e, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof e
          ? r => r.pipe(l((n, r) => Object(a.a)(t(n, r)).pipe(Object(o.a)((t, s) => e(n, t, r, s))), n))
          : ('number' == typeof e && (n = e), e => e.lift(new c(t, n)));
      }
      class c {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new u(t, this.project, this.concurrent));
        }
      }
      class u extends s.a {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const s = new i.a(this, e, n),
            o = this.destination;
          o.add(s);
          const a = Object(r.a)(this, t, void 0, void 0, s);
          a !== s && o.add(a);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyComplete(t) {
          const e = this.buffer;
          this.remove(t),
            this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
    },
    '51Dv': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      class s extends r.a {
        constructor(t, e, n) {
          super(), (this.parent = t), (this.outerValue = e), (this.outerIndex = n), (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
    },
    '7o/Q': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return c;
      });
      var r = n('n6bG'),
        s = n('gRHU'),
        i = n('quSY'),
        o = n('2QA8'),
        a = n('2fFW'),
        l = n('NJ4a');
      class c extends i.a {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = s.a;
              break;
            case 1:
              if (!t) {
                this.destination = s.a;
                break;
              }
              if ('object' == typeof t) {
                t instanceof c
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable), (this.destination = t), t.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new u(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new u(this, t, e, n));
          }
        }
        [o.a]() {
          return this;
        }
        static create(t, e, n) {
          const r = new c(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: t } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = t),
            this
          );
        }
      }
      class u extends c {
        constructor(t, e, n, i) {
          let o;
          super(), (this._parentSubscriber = t);
          let a = this;
          Object(r.a)(e)
            ? (o = e)
            : e &&
              ((o = e.next),
              (n = e.error),
              (i = e.complete),
              e !== s.a &&
                ((a = Object.create(e)),
                Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
                (a.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = a),
            (this._next = o),
            (this._error = n),
            (this._complete = i);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = a.a;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : Object(l.a)(t), this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              Object(l.a)(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling)) throw n;
            Object(l.a)(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            e.call(this._context, n);
          } catch (r) {
            return a.a.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (Object(l.a)(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
        }
      }
    },
    '9ppp': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = (() => {
        function t() {
          return (
            Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    'A/Ql': function(t) {
      t.exports = JSON.parse(
        '{"Choose operator":"Choose operator","Pay":"Pay","Phone number":"Phone number","Payment amount":"Payment amount","Phone number is required":"Phone number is required","Payment amount is required":"Phone number is required","Payment amount must be less than":"Payment amount must be less than","Payment amount must be more than":"Payment amount must be more than","Payment was successfully sent":"Payment was successfully sent","Error. Try again":"Error. Try again"}'
      );
    },
    AytR: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = {
        production: !0,
        hmr: !1,
        version: '1.0.0',
        serverUrl: 'https://api.chucknorris.io',
        defaultLanguage: 'en-US',
        supportedLanguages: ['en-US', 'ru-RU']
      };
    },
    Cfvw: function(t, e, n) {
      'use strict';
      var r = n('HDdC'),
        s = n('SeVD'),
        i = n('quSY'),
        o = n('kJWO'),
        a = n('jZKg'),
        l = n('Lhse'),
        c = n('c2HN'),
        u = n('I55L');
      function h(t, e) {
        return e
          ? (function(t, e) {
              if (null != t) {
                if (
                  (function(t) {
                    return t && 'function' == typeof t[o.a];
                  })(t)
                )
                  return (function(t, e) {
                    return new r.a(n => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() => {
                            const s = t[o.a]();
                            r.add(
                              s.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(c.a)(t))
                  return (function(t, e) {
                    return new r.a(n => {
                      const r = new i.a();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              t => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t), r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              t => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (Object(u.a)(t)) return Object(a.a)(t, e);
                if (
                  (function(t) {
                    return t && 'function' == typeof t[l.a];
                  })(t) ||
                  'string' == typeof t
                )
                  return (function(t, e) {
                    if (!t) throw new Error('Iterable cannot be null');
                    return new r.a(n => {
                      const r = new i.a();
                      let s;
                      return (
                        r.add(() => {
                          s && 'function' == typeof s.return && s.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (s = t[l.a]()),
                              r.add(
                                e.schedule(function() {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = s.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e ? n.complete() : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(((null !== t && typeof t) || t) + ' is not observable');
            })(t, e)
          : t instanceof r.a
          ? t
          : new r.a(Object(s.a)(t));
      }
      n.d(e, 'a', function() {
        return h;
      });
    },
    DH7j: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = (() => Array.isArray || (t => t && 'number' == typeof t.length))();
    },
    HDdC: function(t, e, n) {
      'use strict';
      var r = n('7o/Q'),
        s = n('2QA8'),
        i = n('gRHU'),
        o = n('kJWO'),
        a = n('mCNh'),
        l = n('2fFW');
      n.d(e, 'a', function() {
        return c;
      });
      let c = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: o } = this,
              a = (function(t, e, n) {
                if (t) {
                  if (t instanceof r.a) return t;
                  if (t[s.a]) return t[s.a]();
                }
                return t || e || n ? new r.a(t, e, n) : new r.a(i.a);
              })(t, e, n);
            if (
              (a.add(
                o
                  ? o.call(a, this.source)
                  : this.source || (l.a.useDeprecatedSynchronousErrorHandling && !a.syncErrorThrowable)
                  ? this._subscribe(a)
                  : this._trySubscribe(a)
              ),
              l.a.useDeprecatedSynchronousErrorHandling &&
                a.syncErrorThrowable &&
                ((a.syncErrorThrowable = !1), a.syncErrorThrown))
            )
              throw a.syncErrorValue;
            return a;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              l.a.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function(t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: s } = t;
                    if (e || s) return !1;
                    t = n && n instanceof r.a ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = u(e))((e, n) => {
              let r;
              r = this.subscribe(
                e => {
                  try {
                    t(e);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [o.a]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length ? this : Object(a.b)(t)(this);
          }
          toPromise(t) {
            return new (t = u(t))((t, e) => {
              let n;
              this.subscribe(
                t => (n = t),
                t => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = e => new t(e)), t;
      })();
      function u(t) {
        if ((t || (t = l.a.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
    },
    I55L: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = t => t && 'number' == typeof t.length && 'function' != typeof t;
    },
    KqfI: function(t, e, n) {
      'use strict';
      function r() {}
      n.d(e, 'a', function() {
        return r;
      });
    },
    LbVS: function(t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      function s() {
        var t = document.querySelectorAll('input');
        return Array.prototype.slice.call(t).map(function(t) {
          return t.value;
        });
      }
      function i(t) {
        var e = document.querySelectorAll('input');
        t &&
          e.length === t.length &&
          (t.forEach(function(t, n) {
            var r = e[n];
            (r.value = t), r.dispatchEvent(new CustomEvent('input', { detail: r.value }));
          }),
          (t.length = 0));
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.bootloader = function(t, e, n) {
          'object' == typeof t && ((e = t.before), (n = t.after), (t = t.main)), (e = e || r), (n = n || r);
          var s = document.readyState;
          switch (s) {
            case 'loading':
              document.addEventListener('DOMContentLoaded', function r() {
                document.removeEventListener('DOMContentLoaded', r), n(t(e(s)));
              });
              break;
            case 'interactive':
            case 'complete':
            default:
              n(t(e(s)));
          }
        }),
        (e.createNewHosts = function(t) {
          var e = Array.prototype.map.call(t, function(t) {
            var e = document.createElement(t.tagName),
              n = t.parentNode,
              r = e.style.display;
            return (
              (e.style.display = 'none'),
              n.insertBefore(e, t),
              function() {
                e.style.display = r;
                try {
                  n.removeChild(t);
                } catch (s) {}
              }
            );
          });
          return function() {
            e.forEach(function(t) {
              return t();
            });
          };
        }),
        (e.removeNgStyles = function() {
          var t = document.head,
            e = t.querySelectorAll('style');
          Array.prototype.slice
            .call(e)
            .filter(function(t) {
              return -1 !== t.innerText.indexOf('_ng');
            })
            .map(function(e) {
              return t.removeChild(e);
            });
        }),
        (e.getInputValues = s),
        (e.setInputValues = i),
        (e.createInputTransfer = function() {
          var t = s();
          return function() {
            return i(t);
          };
        });
    },
    Lhse: function(t, e, n) {
      'use strict';
      function r() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      n.d(e, 'a', function() {
        return s;
      });
      const s = r();
    },
    NJ4a: function(t, e, n) {
      'use strict';
      function r(t) {
        setTimeout(() => {
          throw t;
        }, 0);
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    PsNa: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.MODULE_CONFIG = {
          OnInit: 'hmrOnInit',
          OnStatus: 'hmrOnStatus',
          OnCheck: 'hmrOnCheck',
          OnDecline: 'hmrOnDecline',
          OnDestroy: 'hmrOnDestroy',
          AfterDestroy: 'hmrAfterDestroy'
        }),
        (e.hmrModule = function(t, n, r) {
          return (
            void 0 === r && (r = e.MODULE_CONFIG),
            n.hot &&
              (n.hot.accept(),
              t.instance[e.MODULE_CONFIG.OnInit] && n.hot.data && t.instance[e.MODULE_CONFIG.OnInit](n.hot.data),
              t.instance[e.MODULE_CONFIG.OnStatus] &&
                n.hot.apply(function(n) {
                  t.instance[e.MODULE_CONFIG.OnStatus](n);
                }),
              t.instance[e.MODULE_CONFIG.OnCheck] &&
                n.hot.check(function(n, r) {
                  t.instance[e.MODULE_CONFIG.OnCheck](n, r);
                }),
              t.instance[e.MODULE_CONFIG.OnDecline] &&
                n.hot.decline(function(n) {
                  t.instance[e.MODULE_CONFIG.OnDecline](n);
                }),
              n.hot.dispose(function(n) {
                t.instance[e.MODULE_CONFIG.OnDestroy] && t.instance[e.MODULE_CONFIG.OnDestroy](n),
                  t.destroy(),
                  t.instance[e.MODULE_CONFIG.AfterDestroy] && t.instance[e.MODULE_CONFIG.AfterDestroy](n);
              })),
            t
          );
        });
    },
    SeVD: function(t, e, n) {
      'use strict';
      var r = n('ngJS'),
        s = n('NJ4a'),
        i = n('Lhse'),
        o = n('kJWO'),
        a = n('I55L'),
        l = n('c2HN'),
        c = n('XoHu');
      n.d(e, 'a', function() {
        return u;
      });
      const u = t => {
        if (t && 'function' == typeof t[o.a])
          return (
            (u = t),
            t => {
              const e = u[o.a]();
              if ('function' != typeof e.subscribe)
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
              return e.subscribe(t);
            }
          );
        if (Object(a.a)(t)) return Object(r.a)(t);
        if (Object(l.a)(t))
          return (
            (n = t),
            t => (
              n
                .then(
                  e => {
                    t.closed || (t.next(e), t.complete());
                  },
                  e => t.error(e)
                )
                .then(null, s.a),
              t
            )
          );
        if (t && 'function' == typeof t[i.a])
          return (
            (e = t),
            t => {
              const n = e[i.a]();
              for (;;) {
                const e = n.next();
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                'function' == typeof n.return &&
                  t.add(() => {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        {
          const e = Object(c.a)(t) ? 'an invalid object' : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected.` +
              ' You can provide an Observable, Promise, Array, or Iterable.'
          );
        }
        var e, n, u;
      };
    },
    SpAZ: function(t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    VRyK: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return a;
      });
      var r = n('HDdC'),
        s = n('z+Ro'),
        i = n('bHdf'),
        o = n('yCtX');
      function a(...t) {
        let e = Number.POSITIVE_INFINITY,
          n = null,
          a = t[t.length - 1];
        return (
          Object(s.a)(a)
            ? ((n = t.pop()), t.length > 1 && 'number' == typeof t[t.length - 1] && (e = t.pop()))
            : 'number' == typeof a && (e = t.pop()),
          null === n && 1 === t.length && t[0] instanceof r.a ? t[0] : Object(i.a)(e)(Object(o.a)(t, n))
        );
      }
    },
    XNiG: function(t, e, n) {
      'use strict';
      var r = n('HDdC'),
        s = n('7o/Q'),
        i = n('quSY'),
        o = n('9ppp');
      class a extends i.a {
        constructor(t, e) {
          super(), (this.subject = t), (this.subscriber = e), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (((this.subject = null), !e || 0 === e.length || t.isStopped || t.closed)) return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      var l = n('2QA8');
      n.d(e, 'b', function() {
        return c;
      }),
        n.d(e, 'a', function() {
          return u;
        });
      class c extends s.a {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let u = (() => {
        class t extends r.a {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [l.a]() {
            return new c(this);
          }
          lift(t) {
            const e = new h(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new o.a();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let s = 0; s < n; s++) r[s].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new o.a();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let s = 0; s < n; s++) r[s].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new o.a();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new o.a();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new o.a();
            return this.hasError
              ? (t.error(this.thrownError), i.a.EMPTY)
              : this.isStopped
              ? (t.complete(), i.a.EMPTY)
              : (this.observers.push(t), new a(this, t));
          }
          asObservable() {
            const t = new r.a();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new h(t, e)), t;
      })();
      class h extends u {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : i.a.EMPTY;
        }
      }
    },
    XoHu: function(t, e, n) {
      'use strict';
      function r(t) {
        return null !== t && 'object' == typeof t;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    ZAI4: function(t, e, n) {
      'use strict';
      var r = n('jhN1'),
        s = n('fXoL'),
        i = n('ofXK'),
        o = n('HDdC'),
        a = n('DH7j'),
        l = n('lJxs'),
        c = n('XoHu'),
        u = n('Cfvw');
      function h(t, e) {
        return new o.a(n => {
          const r = t.length;
          if (0 === r) return void n.complete();
          const s = new Array(r);
          let i = 0,
            o = 0;
          for (let a = 0; a < r; a++) {
            const l = Object(u.a)(t[a]);
            let c = !1;
            n.add(
              l.subscribe({
                next: t => {
                  c || ((c = !0), o++), (s[a] = t);
                },
                error: t => n.error(t),
                complete: () => {
                  i++,
                    (i !== r && c) ||
                      (o === r && n.next(e ? e.reduce((t, e, n) => ((t[e] = s[n]), t), {}) : s), n.complete());
                }
              })
            );
          }
        });
      }
      const d = new s.q('NgValueAccessor'),
        p = { provide: d, useExisting: Object(s.S)(() => f), multi: !0 };
      let f = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = t => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', t);
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['input', 'type', 'checkbox', 'formControlName', ''],
              ['input', 'type', 'checkbox', 'formControl', ''],
              ['input', 'type', 'checkbox', 'ngModel', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target.checked);
                })('blur', function(t) {
                  return e.onTouched();
                });
            },
            features: [s.yb([p])]
          })),
          t
        );
      })();
      const g = { provide: d, useExisting: Object(s.S)(() => b), multi: !0 },
        m = new s.q('CompositionEventMode');
      let b = (() => {
          class t {
            constructor(t, e, n) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._compositionMode = n),
                (this.onChange = t => {}),
                (this.onTouched = () => {}),
                (this._composing = !1),
                null == this._compositionMode &&
                  (this._compositionMode = !(function() {
                    const t = Object(i.w)() ? Object(i.w)().getUserAgent() : '';
                    return /android (\d+)/.test(t.toLowerCase());
                  })());
            }
            writeValue(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }
            _handleInput(t) {
              (!this._compositionMode || (this._compositionMode && !this._composing)) && this.onChange(t);
            }
            _compositionStart() {
              this._composing = !0;
            }
            _compositionEnd(t) {
              (this._composing = !1), this._compositionMode && this.onChange(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.D), s.Mb(s.l), s.Mb(m, 8));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['input', 'formControlName', '', 3, 'type', 'checkbox'],
                ['textarea', 'formControlName', ''],
                ['input', 'formControl', '', 3, 'type', 'checkbox'],
                ['textarea', 'formControl', ''],
                ['input', 'ngModel', '', 3, 'type', 'checkbox'],
                ['textarea', 'ngModel', ''],
                ['', 'ngDefaultControl', '']
              ],
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('input', function(t) {
                    return e._handleInput(t.target.value);
                  })('blur', function(t) {
                    return e.onTouched();
                  })('compositionstart', function(t) {
                    return e._compositionStart();
                  })('compositionend', function(t) {
                    return e._compositionEnd(t.target.value);
                  });
              },
              features: [s.yb([g])]
            })),
            t
          );
        })(),
        y = (() => {
          class t {
            get value() {
              return this.control ? this.control.value : null;
            }
            get valid() {
              return this.control ? this.control.valid : null;
            }
            get invalid() {
              return this.control ? this.control.invalid : null;
            }
            get pending() {
              return this.control ? this.control.pending : null;
            }
            get disabled() {
              return this.control ? this.control.disabled : null;
            }
            get enabled() {
              return this.control ? this.control.enabled : null;
            }
            get errors() {
              return this.control ? this.control.errors : null;
            }
            get pristine() {
              return this.control ? this.control.pristine : null;
            }
            get dirty() {
              return this.control ? this.control.dirty : null;
            }
            get touched() {
              return this.control ? this.control.touched : null;
            }
            get status() {
              return this.control ? this.control.status : null;
            }
            get untouched() {
              return this.control ? this.control.untouched : null;
            }
            get statusChanges() {
              return this.control ? this.control.statusChanges : null;
            }
            get valueChanges() {
              return this.control ? this.control.valueChanges : null;
            }
            get path() {
              return null;
            }
            reset(t) {
              this.control && this.control.reset(t);
            }
            hasError(t, e) {
              return !!this.control && this.control.hasError(t, e);
            }
            getError(t, e) {
              return this.control ? this.control.getError(t, e) : null;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({ type: t })),
            t
          );
        })(),
        v = (() => {
          class t extends y {
            get formDirective() {
              return null;
            }
            get path() {
              return null;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return _(e || t);
            }),
            (t.ɵdir = s.Hb({ type: t, features: [s.wb] })),
            t
          );
        })();
      const _ = s.Tb(v);
      function w() {
        throw new Error('unimplemented');
      }
      class C extends y {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {
          return w();
        }
        get asyncValidator() {
          return w();
        }
      }
      class S {
        constructor(t) {
          this._cd = t;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      let x = (() => {
          class t extends S {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(C, 2));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', '']
              ],
              hostVars: 14,
              hostBindings: function(t, e) {
                2 & t &&
                  s.Eb('ng-untouched', e.ngClassUntouched)('ng-touched', e.ngClassTouched)(
                    'ng-pristine',
                    e.ngClassPristine
                  )('ng-dirty', e.ngClassDirty)('ng-valid', e.ngClassValid)('ng-invalid', e.ngClassInvalid)(
                    'ng-pending',
                    e.ngClassPending
                  );
              },
              features: [s.wb]
            })),
            t
          );
        })(),
        k = (() => {
          class t extends S {
            constructor(t) {
              super(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(v, 2));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', '']
              ],
              hostVars: 14,
              hostBindings: function(t, e) {
                2 & t &&
                  s.Eb('ng-untouched', e.ngClassUntouched)('ng-touched', e.ngClassTouched)(
                    'ng-pristine',
                    e.ngClassPristine
                  )('ng-dirty', e.ngClassDirty)('ng-valid', e.ngClassValid)('ng-invalid', e.ngClassInvalid)(
                    'ng-pending',
                    e.ngClassPending
                  );
              },
              features: [s.wb]
            })),
            t
          );
        })();
      function E(t) {
        return null == t || 0 === t.length;
      }
      const O = new s.q('NgValidators'),
        A = new s.q('NgAsyncValidators'),
        T = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class I {
        static min(t) {
          return e => {
            if (E(e.value) || E(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null;
          };
        }
        static max(t) {
          return e => {
            if (E(e.value) || E(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null;
          };
        }
        static required(t) {
          return E(t.value) ? { required: !0 } : null;
        }
        static requiredTrue(t) {
          return !0 === t.value ? null : { required: !0 };
        }
        static email(t) {
          return E(t.value) ? null : T.test(t.value) ? null : { email: !0 };
        }
        static minLength(t) {
          return e => {
            if (E(e.value)) return null;
            const n = e.value ? e.value.length : 0;
            return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null;
          };
        }
        static maxLength(t) {
          return e => {
            const n = e.value ? e.value.length : 0;
            return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null;
          };
        }
        static pattern(t) {
          if (!t) return I.nullValidator;
          let e, n;
          return (
            'string' == typeof t
              ? ((n = ''),
                '^' !== t.charAt(0) && (n += '^'),
                (n += t),
                '$' !== t.charAt(t.length - 1) && (n += '$'),
                (e = new RegExp(n)))
              : ((n = t.toString()), (e = t)),
            t => {
              if (E(t.value)) return null;
              const r = t.value;
              return e.test(r) ? null : { pattern: { requiredPattern: n, actualValue: r } };
            }
          );
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          if (!t) return null;
          const e = t.filter(P);
          return 0 == e.length
            ? null
            : function(t) {
                return R(
                  (function(t, e) {
                    return e.map(e => e(t));
                  })(t, e)
                );
              };
        }
        static composeAsync(t) {
          if (!t) return null;
          const e = t.filter(P);
          return 0 == e.length
            ? null
            : function(t) {
                return (function(...t) {
                  if (1 === t.length) {
                    const e = t[0];
                    if (Object(a.a)(e)) return h(e, null);
                    if (Object(c.a)(e) && Object.getPrototypeOf(e) === Object.prototype) {
                      const t = Object.keys(e);
                      return h(
                        t.map(t => e[t]),
                        t
                      );
                    }
                  }
                  if ('function' == typeof t[t.length - 1]) {
                    const e = t.pop();
                    return h((t = 1 === t.length && Object(a.a)(t[0]) ? t[0] : t), null).pipe(
                      Object(l.a)(t => e(...t))
                    );
                  }
                  return h(t, null);
                })(
                  (function(t, e) {
                    return e.map(e => e(t));
                  })(t, e).map(M)
                ).pipe(Object(l.a)(R));
              };
        }
      }
      function P(t) {
        return null != t;
      }
      function M(t) {
        const e = Object(s.qb)(t) ? Object(u.a)(t) : t;
        if (!Object(s.pb)(e)) throw new Error('Expected validator to return Promise or Observable.');
        return e;
      }
      function R(t) {
        const e = t.reduce((t, e) => (null != e ? Object.assign(Object.assign({}, t), e) : t), {});
        return 0 === Object.keys(e).length ? null : e;
      }
      function j(t) {
        return t.validate ? e => t.validate(e) : t;
      }
      function N(t) {
        return t.validate ? e => t.validate(e) : t;
      }
      const D = { provide: d, useExisting: Object(s.S)(() => V), multi: !0 };
      let V = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = t => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
          }
          registerOnChange(t) {
            this.onChange = e => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['input', 'type', 'number', 'formControlName', ''],
              ['input', 'type', 'number', 'formControl', ''],
              ['input', 'type', 'number', 'ngModel', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target.value);
                })('input', function(t) {
                  return e.onChange(t.target.value);
                })('blur', function(t) {
                  return e.onTouched();
                });
            },
            features: [s.yb([D])]
          })),
          t
        );
      })();
      const L = { provide: d, useExisting: Object(s.S)(() => H), multi: !0 };
      let F = (() => {
          class t {
            constructor() {
              this._accessors = [];
            }
            add(t, e) {
              this._accessors.push([t, e]);
            }
            remove(t) {
              for (let e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1);
            }
            select(t) {
              this._accessors.forEach(e => {
                this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value);
              });
            }
            _isSameGroup(t, e) {
              return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        H = (() => {
          class t {
            constructor(t, e, n, r) {
              (this._renderer = t),
                (this._elementRef = e),
                (this._registry = n),
                (this._injector = r),
                (this.onChange = () => {}),
                (this.onTouched = () => {});
            }
            ngOnInit() {
              (this._control = this._injector.get(C)), this._checkName(), this._registry.add(this._control, this);
            }
            ngOnDestroy() {
              this._registry.remove(this);
            }
            writeValue(t) {
              (this._state = t === this.value),
                this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
            }
            registerOnChange(t) {
              (this._fn = t),
                (this.onChange = () => {
                  t(this.value), this._registry.select(this);
                });
            }
            fireUncheck(t) {
              this.writeValue(t);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            setDisabledState(t) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
            }
            _checkName() {
              this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(),
                !this.name && this.formControlName && (this.name = this.formControlName);
            }
            _throwNameError() {
              throw new Error(
                '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.D), s.Mb(s.l), s.Mb(F), s.Mb(s.r));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['input', 'type', 'radio', 'formControlName', ''],
                ['input', 'type', 'radio', 'formControl', ''],
                ['input', 'type', 'radio', 'ngModel', '']
              ],
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('change', function(t) {
                    return e.onChange();
                  })('blur', function(t) {
                    return e.onTouched();
                  });
              },
              inputs: { name: 'name', formControlName: 'formControlName', value: 'value' },
              features: [s.yb([L])]
            })),
            t
          );
        })();
      const U = { provide: d, useExisting: Object(s.S)(() => $), multi: !0 };
      let $ = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = t => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(t));
          }
          registerOnChange(t) {
            this.onChange = e => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['input', 'type', 'range', 'formControlName', ''],
              ['input', 'type', 'range', 'formControl', ''],
              ['input', 'type', 'range', 'ngModel', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target.value);
                })('input', function(t) {
                  return e.onChange(t.target.value);
                })('blur', function(t) {
                  return e.onTouched();
                });
            },
            features: [s.yb([U])]
          })),
          t
        );
      })();
      const B =
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        z =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });';
      class q {
        static controlParentException() {
          throw new Error(
            `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${B}`
          );
        }
        static ngModelGroupException() {
          throw new Error(
            `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${z}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`
          );
        }
        static missingFormException() {
          throw new Error(
            `formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${B}`
          );
        }
        static groupParentException() {
          throw new Error(
            `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${z}`
          );
        }
        static arrayParentException() {
          throw new Error(
            'formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });'
          );
        }
        static disabledAttrWarning() {
          console.warn(
            "\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    "
          );
        }
        static ngModelWarning(t) {
          console.warn(
            `\n    It looks like you're using ngModel on the same form field as ${t}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${
              'formControl' === t ? 'FormControlDirective' : 'FormControlName'
            }#use-with-ngmodel\n    `
          );
        }
      }
      const Z = { provide: d, useExisting: Object(s.S)(() => G), multi: !0 };
      let G = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = t => {}),
              (this.onTouched = () => {}),
              (this._compareWith = s.rb);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
            this._compareWith = t;
          }
          writeValue(t) {
            this.value = t;
            const e = this._getOptionId(t);
            null == e && this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            const n = (function(t, e) {
              return null == t ? `${e}` : (e && 'object' == typeof e && (e = 'Object'), `${t}: ${e}`.slice(0, 50));
            })(e, t);
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', n);
          }
          registerOnChange(t) {
            this.onChange = e => {
              (this.value = this._getOptionValue(e)), t(this.value);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e), t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function(t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e) : t;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['select', 'formControlName', '', 3, 'multiple', ''],
              ['select', 'formControl', '', 3, 'multiple', ''],
              ['select', 'ngModel', '', 3, 'multiple', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target.value);
                })('blur', function(t) {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [s.yb([Z])]
          })),
          t
        );
      })();
      const W = { provide: d, useExisting: Object(s.S)(() => K), multi: !0 };
      let K = (() => {
        class t {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = t => {}),
              (this.onTouched = () => {}),
              (this._compareWith = s.rb);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
            this._compareWith = t;
          }
          writeValue(t) {
            let e;
            if (((this.value = t), Array.isArray(t))) {
              const n = t.map(t => this._getOptionId(t));
              e = (t, e) => {
                t._setSelected(n.indexOf(e.toString()) > -1);
              };
            } else
              e = (t, e) => {
                t._setSelected(!1);
              };
            this._optionMap.forEach(e);
          }
          registerOnChange(t) {
            this.onChange = e => {
              const n = [];
              if (e.hasOwnProperty('selectedOptions')) {
                const t = e.selectedOptions;
                for (let e = 0; e < t.length; e++) {
                  const r = t.item(e),
                    s = this._getOptionValue(r.value);
                  n.push(s);
                }
              } else {
                const t = e.options;
                for (let e = 0; e < t.length; e++) {
                  const r = t.item(e);
                  if (r.selected) {
                    const t = this._getOptionValue(r.value);
                    n.push(t);
                  }
                }
              }
              (this.value = n), t(n);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption(t) {
            const e = (this._idCounter++).toString();
            return this._optionMap.set(e, t), e;
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function(t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(s.D), s.Mb(s.l));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['select', 'multiple', '', 'formControlName', ''],
              ['select', 'multiple', '', 'formControl', ''],
              ['select', 'multiple', '', 'ngModel', '']
            ],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('change', function(t) {
                  return e.onChange(t.target);
                })('blur', function(t) {
                  return e.onTouched();
                });
            },
            inputs: { compareWith: 'compareWith' },
            features: [s.yb([W])]
          })),
          t
        );
      })();
      function Q(t, e) {
        return [...e.path, t];
      }
      function J(t, e) {
        t || et(e, 'Cannot find control with'),
          e.valueAccessor || et(e, 'No value accessor for form control with'),
          (t.validator = I.compose([t.validator, e.validator])),
          (t.asyncValidator = I.composeAsync([t.asyncValidator, e.asyncValidator])),
          e.valueAccessor.writeValue(t.value),
          (function(t, e) {
            e.valueAccessor.registerOnChange(n => {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                'change' === t.updateOn && Y(t, e);
            });
          })(t, e),
          (function(t, e) {
            t.registerOnChange((t, n) => {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            });
          })(t, e),
          (function(t, e) {
            e.valueAccessor.registerOnTouched(() => {
              (t._pendingTouched = !0),
                'blur' === t.updateOn && t._pendingChange && Y(t, e),
                'submit' !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          e.valueAccessor.setDisabledState &&
            t.registerOnDisabledChange(t => {
              e.valueAccessor.setDisabledState(t);
            }),
          e._rawValidators.forEach(e => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity());
          }),
          e._rawAsyncValidators.forEach(e => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity());
          });
      }
      function Y(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function X(t, e) {
        null == t && et(e, 'Cannot find control with'),
          (t.validator = I.compose([t.validator, e.validator])),
          (t.asyncValidator = I.composeAsync([t.asyncValidator, e.asyncValidator]));
      }
      function tt(t) {
        return et(t, 'There is no FormControl instance attached to form control element with');
      }
      function et(t, e) {
        let n;
        throw ((n =
          t.path.length > 1
            ? `path: '${t.path.join(' -> ')}'`
            : t.path[0]
            ? `name: '${t.path}'`
            : 'unspecified name attribute'),
        new Error(`${e} ${n}`));
      }
      function nt(t) {
        return null != t ? I.compose(t.map(j)) : null;
      }
      function rt(t) {
        return null != t ? I.composeAsync(t.map(N)) : null;
      }
      const st = [f, $, V, G, K, H];
      function it(t) {
        const e = at(t) ? t.validators : t;
        return Array.isArray(e) ? nt(e) : e || null;
      }
      function ot(t, e) {
        const n = at(e) ? e.asyncValidators : t;
        return Array.isArray(n) ? rt(n) : n || null;
      }
      function at(t) {
        return null != t && !Array.isArray(t) && 'object' == typeof t;
      }
      class lt {
        constructor(t, e) {
          (this.validator = t),
            (this.asyncValidator = e),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return 'VALID' === this.status;
        }
        get invalid() {
          return 'INVALID' === this.status;
        }
        get pending() {
          return 'PENDING' == this.status;
        }
        get disabled() {
          return 'DISABLED' === this.status;
        }
        get enabled() {
          return 'DISABLED' !== this.status;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(t) {
          this.validator = it(t);
        }
        setAsyncValidators(t) {
          this.asyncValidator = ot(t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0), this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild(t => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(t => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1), this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(t => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = 'PENDING'),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'DISABLED'),
            (this.errors = null),
            this._forEachChild(e => {
              e.disable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign(Object.assign({}, t), { skipPristineCheck: e })),
            this._onDisabledChange.forEach(t => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'VALID'),
            this._forEachChild(e => {
              e.enable(Object.assign(Object.assign({}, t), { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
            this._updateAncestors(Object.assign(Object.assign({}, t), { skipPristineCheck: e })),
            this._onDisabledChange.forEach(t => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              ('VALID' !== this.status && 'PENDING' !== this.status) || this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild(e => e._updateTreeValidity(t)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            this.status = 'PENDING';
            const e = M(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe(e => this.setErrors(e, { emitEvent: t }));
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function(t, e, n) {
            return null == e
              ? null
              : (Array.isArray(e) || (e = e.split('.')),
                Array.isArray(e) && 0 === e.length
                  ? null
                  : e.reduce(
                      (t, e) =>
                        t instanceof ut
                          ? t.controls.hasOwnProperty(e)
                            ? t.controls[e]
                            : null
                          : (t instanceof ht && t.at(e)) || null,
                      t
                    ));
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new s.n()), (this.statusChanges = new s.n());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? 'DISABLED'
            : this.errors
            ? 'INVALID'
            : this._anyControlsHaveStatus('PENDING')
            ? 'PENDING'
            : this._anyControlsHaveStatus('INVALID')
            ? 'INVALID'
            : 'VALID';
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls(e => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls(t => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(t => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()), this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()), this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return 'object' == typeof t && null !== t && 2 === Object.keys(t).length && 'value' in t && 'disabled' in t;
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          at(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
        }
      }
      class ct extends lt {
        constructor(t = null, e, n) {
          super(it(e), ot(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach(t => t(this.value, !1 !== e.emitViewToModelChange)),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _clearChangeFns() {
          (this._onChange = []), (this._onDisabledChange = []), (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class ut extends lt {
        constructor(t, e, n) {
          super(it(e), ot(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e), e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e);
        }
        addControl(t, e) {
          this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, e) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach(n => {
              this._throwIfControlMissing(n), this.controls[n].setValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          Object.keys(t).forEach(n => {
            this.controls[n] && this.controls[n].patchValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren({}, (t, e, n) => ((t[n] = e instanceof ct ? e.value : e.getRawValue()), t));
        }
        _syncPendingControls() {
          let t = this._reduceChildren(!1, (t, e) => !!e._syncPendingControls() || t);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach(e => t(this.controls[e], e));
        }
        _setUpControls() {
          this._forEachChild(t => {
            t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          let e = !1;
          return (
            this._forEachChild((n, r) => {
              e = e || (this.contains(r) && t(n));
            }),
            e
          );
        }
        _reduceValue() {
          return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t));
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, r) => {
              n = e(n, t, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls)) if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n]) throw new Error(`Must supply a value for form control with name: '${n}'.`);
          });
        }
      }
      class ht extends lt {
        constructor(t, e, n) {
          super(it(e), ot(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange();
        }
        insert(t, e) {
          this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, e) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n), this.at(n).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          t.forEach((t, n) => {
            this.at(n) && this.at(n).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, r) => {
            n.reset(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map(t => (t instanceof ct ? t.value : t.getRawValue()));
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild(t => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce((t, e) => !!e._syncPendingControls() || t, !1);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t)) throw new Error(`Cannot find form control at index ${t}`);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value);
        }
        _anyControls(t) {
          return this.controls.some(e => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild(t => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n]) throw new Error(`Must supply a value for form control at index: ${n}.`);
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      let dt = (() => {
        class t extends v {
          ngOnInit() {
            this._checkParentType(), this.formDirective.addFormGroup(this);
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeFormGroup(this);
          }
          get control() {
            return this.formDirective.getFormGroup(this);
          }
          get path() {
            return Q(null == this.name ? this.name : this.name.toString(), this._parent);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get validator() {
            return nt(this._validators);
          }
          get asyncValidator() {
            return rt(this._asyncValidators);
          }
          _checkParentType() {}
        }
        return (
          (t.ɵfac = function(e) {
            return pt(e || t);
          }),
          (t.ɵdir = s.Hb({ type: t, features: [s.wb] })),
          t
        );
      })();
      const pt = s.Tb(dt);
      let ft = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
            hostAttrs: ['novalidate', '']
          })),
          t
        );
      })();
      const gt = new s.q('NgModelWithFormControlWarning'),
        mt = { provide: v, useExisting: Object(s.S)(() => bt) };
      let bt = (() => {
        class t extends v {
          constructor(t, e) {
            super(),
              (this._validators = t),
              (this._asyncValidators = e),
              (this.submitted = !1),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new s.n());
          }
          ngOnChanges(t) {
            this._checkFormPresent(),
              t.hasOwnProperty('form') &&
                (this._updateValidators(), this._updateDomValue(), this._updateRegistrations());
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(t) {
            const e = this.form.get(t.path);
            return J(e, t), e.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(t), e;
          }
          getControl(t) {
            return this.form.get(t.path);
          }
          removeControl(t) {
            !(function(t, e) {
              const n = t.indexOf(e);
              n > -1 && t.splice(n, 1);
            })(this.directives, t);
          }
          addFormGroup(t) {
            const e = this.form.get(t.path);
            X(e, t), e.updateValueAndValidity({ emitEvent: !1 });
          }
          removeFormGroup(t) {}
          getFormGroup(t) {
            return this.form.get(t.path);
          }
          addFormArray(t) {
            const e = this.form.get(t.path);
            X(e, t), e.updateValueAndValidity({ emitEvent: !1 });
          }
          removeFormArray(t) {}
          getFormArray(t) {
            return this.form.get(t.path);
          }
          updateModel(t, e) {
            this.form.get(t.path).setValue(e);
          }
          onSubmit(t) {
            return (
              (this.submitted = !0),
              (e = this.directives),
              this.form._syncPendingControls(),
              e.forEach(t => {
                const e = t.control;
                'submit' === e.updateOn &&
                  e._pendingChange &&
                  (t.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
              }),
              this.ngSubmit.emit(t),
              !1
            );
            var e;
          }
          onReset() {
            this.resetForm();
          }
          resetForm(t) {
            this.form.reset(t), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach(t => {
              const e = this.form.get(t.path);
              t.control !== e &&
                ((function(t, e) {
                  e.valueAccessor.registerOnChange(() => tt(e)),
                    e.valueAccessor.registerOnTouched(() => tt(e)),
                    e._rawValidators.forEach(t => {
                      t.registerOnValidatorChange && t.registerOnValidatorChange(null);
                    }),
                    e._rawAsyncValidators.forEach(t => {
                      t.registerOnValidatorChange && t.registerOnValidatorChange(null);
                    }),
                    t && t._clearChangeFns();
                })(t.control, t),
                e && J(e, t),
                (t.control = e));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(() => this._updateDomValue()),
              this._oldForm && this._oldForm._registerOnCollectionChange(() => {}),
              (this._oldForm = this.form);
          }
          _updateValidators() {
            const t = nt(this._validators);
            this.form.validator = I.compose([this.form.validator, t]);
            const e = rt(this._asyncValidators);
            this.form.asyncValidator = I.composeAsync([this.form.asyncValidator, e]);
          }
          _checkFormPresent() {
            this.form || q.missingFormException();
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(O, 10), s.Mb(A, 10));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'formGroup', '']],
            hostBindings: function(t, e) {
              1 & t &&
                s.dc('submit', function(t) {
                  return e.onSubmit(t);
                })('reset', function(t) {
                  return e.onReset();
                });
            },
            inputs: { form: ['formGroup', 'form'] },
            outputs: { ngSubmit: 'ngSubmit' },
            exportAs: ['ngForm'],
            features: [s.yb([mt]), s.wb, s.xb()]
          })),
          t
        );
      })();
      const yt = { provide: v, useExisting: Object(s.S)(() => vt) };
      let vt = (() => {
        class t extends dt {
          constructor(t, e, n) {
            super(), (this._parent = t), (this._validators = e), (this._asyncValidators = n);
          }
          _checkParentType() {
            Ct(this._parent) && q.groupParentException();
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(v, 13), s.Mb(O, 10), s.Mb(A, 10));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'formGroupName', '']],
            inputs: { name: ['formGroupName', 'name'] },
            features: [s.yb([yt]), s.wb]
          })),
          t
        );
      })();
      const _t = { provide: v, useExisting: Object(s.S)(() => wt) };
      let wt = (() => {
        class t extends v {
          constructor(t, e, n) {
            super(), (this._parent = t), (this._validators = e), (this._asyncValidators = n);
          }
          ngOnInit() {
            this._checkParentType(), this.formDirective.addFormArray(this);
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeFormArray(this);
          }
          get control() {
            return this.formDirective.getFormArray(this);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get path() {
            return Q(null == this.name ? this.name : this.name.toString(), this._parent);
          }
          get validator() {
            return nt(this._validators);
          }
          get asyncValidator() {
            return rt(this._asyncValidators);
          }
          _checkParentType() {
            Ct(this._parent) && q.arrayParentException();
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(v, 13), s.Mb(O, 10), s.Mb(A, 10));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'formArrayName', '']],
            inputs: { name: ['formArrayName', 'name'] },
            features: [s.yb([_t]), s.wb]
          })),
          t
        );
      })();
      function Ct(t) {
        return !(t instanceof vt || t instanceof bt || t instanceof wt);
      }
      const St = { provide: C, useExisting: Object(s.S)(() => xt) };
      let xt = (() => {
        class t extends C {
          constructor(t, e, n, r, i) {
            super(),
              (this._ngModelWarningConfig = i),
              (this._added = !1),
              (this.update = new s.n()),
              (this._ngModelWarningSent = !1),
              (this._parent = t),
              (this._rawValidators = e || []),
              (this._rawAsyncValidators = n || []),
              (this.valueAccessor = (function(t, e) {
                if (!e) return null;
                Array.isArray(e) || et(t, 'Value accessor was not provided as an array for form control with');
                let n = void 0,
                  r = void 0,
                  s = void 0;
                return (
                  e.forEach(e => {
                    var i;
                    e.constructor === b
                      ? (n = e)
                      : ((i = e),
                        st.some(t => i.constructor === t)
                          ? (r && et(t, 'More than one built-in value accessor matches form control with'), (r = e))
                          : (s && et(t, 'More than one custom value accessor matches form control with'), (s = e)));
                  }),
                  s || r || n || (et(t, 'No valid value accessor for form control with'), null)
                );
              })(this, r));
          }
          set isDisabled(t) {
            q.disabledAttrWarning();
          }
          ngOnChanges(e) {
            var n, r;
            this._added || this._setUpControl(),
              (function(t, e) {
                if (!t.hasOwnProperty('model')) return !1;
                const n = t.model;
                return !!n.isFirstChange() || !Object(s.rb)(e, n.currentValue);
              })(e, this.viewModel) &&
                ('formControlName',
                (n = t),
                this,
                (r = this._ngModelWarningConfig),
                Object(s.T)() &&
                  'never' !== r &&
                  ((((null !== r && 'once' !== r) || n._ngModelWarningSentOnce) &&
                    ('always' !== r || this._ngModelWarningSent)) ||
                    (q.ngModelWarning('formControlName'),
                    (n._ngModelWarningSentOnce = !0),
                    (this._ngModelWarningSent = !0))),
                (this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(t) {
            (this.viewModel = t), this.update.emit(t);
          }
          get path() {
            return Q(null == this.name ? this.name : this.name.toString(), this._parent);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get validator() {
            return nt(this._rawValidators);
          }
          get asyncValidator() {
            return rt(this._rawAsyncValidators);
          }
          _checkParentType() {
            !(this._parent instanceof vt) && this._parent instanceof dt
              ? q.ngModelGroupException()
              : this._parent instanceof vt ||
                this._parent instanceof bt ||
                this._parent instanceof wt ||
                q.controlParentException();
          }
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0),
              (this._added = !0);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(v, 13), s.Mb(O, 10), s.Mb(A, 10), s.Mb(d, 10), s.Mb(gt, 8));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'formControlName', '']],
            inputs: {
              isDisabled: ['disabled', 'isDisabled'],
              name: ['formControlName', 'name'],
              model: ['ngModel', 'model']
            },
            outputs: { update: 'ngModelChange' },
            features: [s.yb([St]), s.wb, s.xb()]
          })),
          (t._ngModelWarningSentOnce = !1),
          t
        );
      })();
      const kt = { provide: O, useExisting: Object(s.S)(() => Et), multi: !0 };
      let Et = (() => {
        class t {
          get required() {
            return this._required;
          }
          set required(t) {
            (this._required = null != t && !1 !== t && 'false' !== `${t}`), this._onChange && this._onChange();
          }
          validate(t) {
            return this.required ? I.required(t) : null;
          }
          registerOnValidatorChange(t) {
            this._onChange = t;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['', 'required', '', 'formControlName', '', 3, 'type', 'checkbox'],
              ['', 'required', '', 'formControl', '', 3, 'type', 'checkbox'],
              ['', 'required', '', 'ngModel', '', 3, 'type', 'checkbox']
            ],
            hostVars: 1,
            hostBindings: function(t, e) {
              2 & t && s.Ab('required', e.required ? '' : null);
            },
            inputs: { required: 'required' },
            features: [s.yb([kt])]
          })),
          t
        );
      })();
      const Ot = { provide: O, useExisting: Object(s.S)(() => At), multi: !0 };
      let At = (() => {
        class t {
          ngOnChanges(t) {
            'minlength' in t && (this._createValidator(), this._onChange && this._onChange());
          }
          validate(t) {
            return null == this.minlength ? null : this._validator(t);
          }
          registerOnValidatorChange(t) {
            this._onChange = t;
          }
          _createValidator() {
            this._validator = I.minLength(
              'number' == typeof this.minlength ? this.minlength : parseInt(this.minlength, 10)
            );
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [
              ['', 'minlength', '', 'formControlName', ''],
              ['', 'minlength', '', 'formControl', ''],
              ['', 'minlength', '', 'ngModel', '']
            ],
            hostVars: 1,
            hostBindings: function(t, e) {
              2 & t && s.Ab('minlength', e.minlength ? e.minlength : null);
            },
            inputs: { minlength: 'minlength' },
            features: [s.yb([Ot]), s.xb()]
          })),
          t
        );
      })();
      const Tt = { provide: O, useExisting: Object(s.S)(() => It), multi: !0 };
      let It = (() => {
          class t {
            ngOnChanges(t) {
              'maxlength' in t && (this._createValidator(), this._onChange && this._onChange());
            }
            validate(t) {
              return null != this.maxlength ? this._validator(t) : null;
            }
            registerOnValidatorChange(t) {
              this._onChange = t;
            }
            _createValidator() {
              this._validator = I.maxLength(
                'number' == typeof this.maxlength ? this.maxlength : parseInt(this.maxlength, 10)
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['', 'maxlength', '', 'formControlName', ''],
                ['', 'maxlength', '', 'formControl', ''],
                ['', 'maxlength', '', 'ngModel', '']
              ],
              hostVars: 1,
              hostBindings: function(t, e) {
                2 & t && s.Ab('maxlength', e.maxlength ? e.maxlength : null);
              },
              inputs: { maxlength: 'maxlength' },
              features: [s.yb([Tt]), s.xb()]
            })),
            t
          );
        })(),
        Pt = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        Mt = (() => {
          class t {
            group(t, e = null) {
              const n = this._reduceControls(t);
              let r = null,
                s = null,
                i = void 0;
              return (
                null != e &&
                  ((function(t) {
                    return void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn;
                  })(e)
                    ? ((r = null != e.validators ? e.validators : null),
                      (s = null != e.asyncValidators ? e.asyncValidators : null),
                      (i = null != e.updateOn ? e.updateOn : void 0))
                    : ((r = null != e.validator ? e.validator : null),
                      (s = null != e.asyncValidator ? e.asyncValidator : null))),
                new ut(n, { asyncValidators: s, updateOn: i, validators: r })
              );
            }
            control(t, e, n) {
              return new ct(t, e, n);
            }
            array(t, e, n) {
              const r = t.map(t => this._createControl(t));
              return new ht(r, e, n);
            }
            _reduceControls(t) {
              const e = {};
              return (
                Object.keys(t).forEach(n => {
                  e[n] = this._createControl(t[n]);
                }),
                e
              );
            }
            _createControl(t) {
              return t instanceof ct || t instanceof ut || t instanceof ht
                ? t
                : Array.isArray(t)
                ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null)
                : this.control(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Rt = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [F],
              imports: [Pt]
            })),
            t
          );
        })(),
        jt = (() => {
          class t {
            static withConfig(e) {
              return { ngModule: t, providers: [{ provide: gt, useValue: e.warnOnNgModelWithFormControl }] };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [Mt, F],
              imports: [Pt]
            })),
            t
          );
        })();
      var Nt = n('z+Ro'),
        Dt = n('yCtX'),
        Vt = n('jZKg');
      function Lt(...t) {
        let e = t[t.length - 1];
        return Object(Nt.a)(e) ? (t.pop(), Object(Vt.a)(t, e)) : Object(Dt.a)(t);
      }
      var Ft = n('5+tZ');
      function Ht(t, e) {
        return Object(Ft.a)(t, e, 1);
      }
      var Ut = n('7o/Q');
      function $t(t, e) {
        return function(n) {
          return n.lift(new Bt(t, e));
        };
      }
      class Bt {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new zt(t, this.predicate, this.thisArg));
        }
      }
      class zt extends Ut.a {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      class qt {}
      class Zt {}
      class Gt {
        constructor(t) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            t
              ? (this.lazyInit =
                  'string' == typeof t
                    ? () => {
                        (this.headers = new Map()),
                          t.split('\n').forEach(t => {
                            const e = t.indexOf(':');
                            if (e > 0) {
                              const n = t.slice(0, e),
                                r = n.toLowerCase(),
                                s = t.slice(e + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r) ? this.headers.get(r).push(s) : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(t).forEach(e => {
                            let n = t[e];
                            const r = e.toLowerCase();
                            'string' == typeof n && (n = [n]),
                              n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(e, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(t) {
          return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
          this.init();
          const e = this.headers.get(t.toLowerCase());
          return e && e.length > 0 ? e[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
          return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
          return this.clone({ name: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ name: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ name: t, value: e, op: 'd' });
        }
        maybeSetNormalizedName(t, e) {
          this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Gt ? this.copyFrom(this.lazyInit) : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), (this.lazyUpdate = null)));
        }
        copyFrom(t) {
          t.init(),
            Array.from(t.headers.keys()).forEach(e => {
              this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e));
            });
        }
        clone(t) {
          const e = new Gt();
          return (
            (e.lazyInit = this.lazyInit && this.lazyInit instanceof Gt ? this.lazyInit : this),
            (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
            e
          );
        }
        applyUpdate(t) {
          const e = t.name.toLowerCase();
          switch (t.op) {
            case 'a':
            case 's':
              let n = t.value;
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(t.name, e);
              const r = ('a' === t.op ? this.headers.get(e) : void 0) || [];
              r.push(...n), this.headers.set(e, r);
              break;
            case 'd':
              const s = t.value;
              if (s) {
                let t = this.headers.get(e);
                if (!t) return;
                (t = t.filter(t => -1 === s.indexOf(t))),
                  0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t);
              } else this.headers.delete(e), this.normalizedNames.delete(e);
          }
        }
        forEach(t) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach(e => t(this.normalizedNames.get(e), this.headers.get(e)));
        }
      }
      class Wt {
        encodeKey(t) {
          return Kt(t);
        }
        encodeValue(t) {
          return Kt(t);
        }
        decodeKey(t) {
          return decodeURIComponent(t);
        }
        decodeValue(t) {
          return decodeURIComponent(t);
        }
      }
      function Kt(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      class Qt {
        constructor(t = {}) {
          if (((this.updates = null), (this.cloneFrom = null), (this.encoder = t.encoder || new Wt()), t.fromString)) {
            if (t.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function(t, e) {
              const n = new Map();
              return (
                t.length > 0 &&
                  t.split('&').forEach(t => {
                    const r = t.indexOf('='),
                      [s, i] =
                        -1 == r ? [e.decodeKey(t), ''] : [e.decodeKey(t.slice(0, r)), e.decodeValue(t.slice(r + 1))],
                      o = n.get(s) || [];
                    o.push(i), n.set(s, o);
                  }),
                n
              );
            })(t.fromString, this.encoder);
          } else
            t.fromObject
              ? ((this.map = new Map()),
                Object.keys(t.fromObject).forEach(e => {
                  const n = t.fromObject[e];
                  this.map.set(e, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(t) {
          return this.init(), this.map.has(t);
        }
        get(t) {
          this.init();
          const e = this.map.get(t);
          return e ? e[0] : null;
        }
        getAll(t) {
          return this.init(), this.map.get(t) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(t, e) {
          return this.clone({ param: t, value: e, op: 'a' });
        }
        set(t, e) {
          return this.clone({ param: t, value: e, op: 's' });
        }
        delete(t, e) {
          return this.clone({ param: t, value: e, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(t => {
                const e = this.encoder.encodeKey(t);
                return this.map
                  .get(t)
                  .map(t => e + '=' + this.encoder.encodeValue(t))
                  .join('&');
              })
              .filter(t => '' !== t)
              .join('&')
          );
        }
        clone(t) {
          const e = new Qt({ encoder: this.encoder });
          return (e.cloneFrom = this.cloneFrom || this), (e.updates = (this.updates || []).concat([t])), e;
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))),
              this.updates.forEach(t => {
                switch (t.op) {
                  case 'a':
                  case 's':
                    const e = ('a' === t.op ? this.map.get(t.param) : void 0) || [];
                    e.push(t.value), this.map.set(t.param, e);
                    break;
                  case 'd':
                    if (void 0 === t.value) {
                      this.map.delete(t.param);
                      break;
                    }
                    {
                      let e = this.map.get(t.param) || [];
                      const n = e.indexOf(t.value);
                      -1 !== n && e.splice(n, 1), e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function Jt(t) {
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer;
      }
      function Yt(t) {
        return 'undefined' != typeof Blob && t instanceof Blob;
      }
      function Xt(t) {
        return 'undefined' != typeof FormData && t instanceof FormData;
      }
      class te {
        constructor(t, e, n, r) {
          let s;
          if (
            ((this.url = e),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = t.toUpperCase()),
            (function(t) {
              switch (t) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new Gt()),
            this.params)
          ) {
            const t = this.params.toString();
            if (0 === t.length) this.urlWithParams = e;
            else {
              const n = e.indexOf('?');
              this.urlWithParams = e + (-1 === n ? '?' : n < e.length - 1 ? '&' : '') + t;
            }
          } else (this.params = new Qt()), (this.urlWithParams = e);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Jt(this.body) || Yt(this.body) || Xt(this.body) || 'string' == typeof this.body
            ? this.body
            : this.body instanceof Qt
            ? this.body.toString()
            : 'object' == typeof this.body || 'boolean' == typeof this.body || Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body
            ? null
            : Xt(this.body)
            ? null
            : Yt(this.body)
            ? this.body.type || null
            : Jt(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof Qt
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body || 'number' == typeof this.body || Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(t = {}) {
          const e = t.method || this.method,
            n = t.url || this.url,
            r = t.responseType || this.responseType,
            s = void 0 !== t.body ? t.body : this.body,
            i = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
            o = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
          let a = t.headers || this.headers,
            l = t.params || this.params;
          return (
            void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)),
            t.setParams && (l = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), l)),
            new te(e, n, s, { params: l, headers: a, reportProgress: o, responseType: r, withCredentials: i })
          );
        }
      }
      const ee = (function() {
        var t = { Sent: 0, UploadProgress: 1, ResponseHeader: 2, DownloadProgress: 3, Response: 4, User: 5 };
        return (
          (t[t.Sent] = 'Sent'),
          (t[t.UploadProgress] = 'UploadProgress'),
          (t[t.ResponseHeader] = 'ResponseHeader'),
          (t[t.DownloadProgress] = 'DownloadProgress'),
          (t[t.Response] = 'Response'),
          (t[t.User] = 'User'),
          t
        );
      })();
      class ne {
        constructor(t, e = 200, n = 'OK') {
          (this.headers = t.headers || new Gt()),
            (this.status = void 0 !== t.status ? t.status : e),
            (this.statusText = t.statusText || n),
            (this.url = t.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class re extends ne {
        constructor(t = {}) {
          super(t), (this.type = ee.ResponseHeader);
        }
        clone(t = {}) {
          return new re({
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0
          });
        }
      }
      class se extends ne {
        constructor(t = {}) {
          super(t), (this.type = ee.Response), (this.body = void 0 !== t.body ? t.body : null);
        }
        clone(t = {}) {
          return new se({
            body: void 0 !== t.body ? t.body : this.body,
            headers: t.headers || this.headers,
            status: void 0 !== t.status ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0
          });
        }
      }
      class ie extends ne {
        constructor(t) {
          super(t, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${t.url || '(unknown url)'}`
                : `Http failure response for ${t.url || '(unknown url)'}: ${t.status} ${t.statusText}`),
            (this.error = t.error || null);
        }
      }
      function oe(t, e) {
        return {
          body: e,
          headers: t.headers,
          observe: t.observe,
          params: t.params,
          reportProgress: t.reportProgress,
          responseType: t.responseType,
          withCredentials: t.withCredentials
        };
      }
      let ae = (() => {
        class t {
          constructor(t) {
            this.handler = t;
          }
          request(t, e, n = {}) {
            let r;
            if (t instanceof te) r = t;
            else {
              let s = void 0;
              s = n.headers instanceof Gt ? n.headers : new Gt(n.headers);
              let i = void 0;
              n.params && (i = n.params instanceof Qt ? n.params : new Qt({ fromObject: n.params })),
                (r = new te(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || 'json',
                  withCredentials: n.withCredentials
                }));
            }
            const s = Lt(r).pipe(Ht(t => this.handler.handle(t)));
            if (t instanceof te || 'events' === n.observe) return s;
            const i = s.pipe($t(t => t instanceof se));
            switch (n.observe || 'body') {
              case 'body':
                switch (r.responseType) {
                  case 'arraybuffer':
                    return i.pipe(
                      Object(l.a)(t => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return t.body;
                      })
                    );
                  case 'blob':
                    return i.pipe(
                      Object(l.a)(t => {
                        if (null !== t.body && !(t.body instanceof Blob)) throw new Error('Response is not a Blob.');
                        return t.body;
                      })
                    );
                  case 'text':
                    return i.pipe(
                      Object(l.a)(t => {
                        if (null !== t.body && 'string' != typeof t.body) throw new Error('Response is not a string.');
                        return t.body;
                      })
                    );
                  case 'json':
                  default:
                    return i.pipe(Object(l.a)(t => t.body));
                }
              case 'response':
                return i;
              default:
                throw new Error(`Unreachable: unhandled observe type ${n.observe}}`);
            }
          }
          delete(t, e = {}) {
            return this.request('DELETE', t, e);
          }
          get(t, e = {}) {
            return this.request('GET', t, e);
          }
          head(t, e = {}) {
            return this.request('HEAD', t, e);
          }
          jsonp(t, e) {
            return this.request('JSONP', t, {
              params: new Qt().append(e, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json'
            });
          }
          options(t, e = {}) {
            return this.request('OPTIONS', t, e);
          }
          patch(t, e, n = {}) {
            return this.request('PATCH', t, oe(n, e));
          }
          post(t, e, n = {}) {
            return this.request('POST', t, oe(n, e));
          }
          put(t, e, n = {}) {
            return this.request('PUT', t, oe(n, e));
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(qt));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class le {
        constructor(t, e) {
          (this.next = t), (this.interceptor = e);
        }
        handle(t) {
          return this.interceptor.intercept(t, this.next);
        }
      }
      const ce = new s.q('HTTP_INTERCEPTORS');
      let ue = (() => {
        class t {
          intercept(t, e) {
            return e.handle(t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const he = /^\)\]\}',?\n/;
      class de {}
      let pe = (() => {
          class t {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        fe = (() => {
          class t {
            constructor(t) {
              this.xhrFactory = t;
            }
            handle(t) {
              if ('JSONP' === t.method)
                throw new Error('Attempted to construct Jsonp request without JsonpClientModule installed.');
              return new o.a(e => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(t.method, t.urlWithParams),
                  t.withCredentials && (n.withCredentials = !0),
                  t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(','))),
                  t.headers.has('Accept') || n.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                  !t.headers.has('Content-Type'))
                ) {
                  const e = t.detectContentTypeHeader();
                  null !== e && n.setRequestHeader('Content-Type', e);
                }
                if (t.responseType) {
                  const e = t.responseType.toLowerCase();
                  n.responseType = 'json' !== e ? e : 'text';
                }
                const r = t.serializeBody();
                let s = null;
                const i = () => {
                    if (null !== s) return s;
                    const e = 1223 === n.status ? 204 : n.status,
                      r = n.statusText || 'OK',
                      i = new Gt(n.getAllResponseHeaders()),
                      o =
                        (function(t) {
                          return 'responseURL' in t && t.responseURL
                            ? t.responseURL
                            : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
                            ? t.getResponseHeader('X-Request-URL')
                            : null;
                        })(n) || t.url;
                    return (s = new re({ headers: i, status: e, statusText: r, url: o })), s;
                  },
                  o = () => {
                    let { headers: r, status: s, statusText: o, url: a } = i(),
                      l = null;
                    204 !== s && (l = void 0 === n.response ? n.responseText : n.response),
                      0 === s && (s = l ? 200 : 0);
                    let c = s >= 200 && s < 300;
                    if ('json' === t.responseType && 'string' == typeof l) {
                      const t = l;
                      l = l.replace(he, '');
                      try {
                        l = '' !== l ? JSON.parse(l) : null;
                      } catch (u) {
                        (l = t), c && ((c = !1), (l = { error: u, text: l }));
                      }
                    }
                    c
                      ? (e.next(new se({ body: l, headers: r, status: s, statusText: o, url: a || void 0 })),
                        e.complete())
                      : e.error(new ie({ error: l, headers: r, status: s, statusText: o, url: a || void 0 }));
                  },
                  a = t => {
                    const { url: r } = i(),
                      s = new ie({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || 'Unknown Error',
                        url: r || void 0
                      });
                    e.error(s);
                  };
                let l = !1;
                const c = r => {
                    l || (e.next(i()), (l = !0));
                    let s = { type: ee.DownloadProgress, loaded: r.loaded };
                    r.lengthComputable && (s.total = r.total),
                      'text' === t.responseType && n.responseText && (s.partialText = n.responseText),
                      e.next(s);
                  },
                  u = t => {
                    let n = { type: ee.UploadProgress, loaded: t.loaded };
                    t.lengthComputable && (n.total = t.total), e.next(n);
                  };
                return (
                  n.addEventListener('load', o),
                  n.addEventListener('error', a),
                  t.reportProgress &&
                    (n.addEventListener('progress', c),
                    null !== r && n.upload && n.upload.addEventListener('progress', u)),
                  n.send(r),
                  e.next({ type: ee.Sent }),
                  () => {
                    n.removeEventListener('error', a),
                      n.removeEventListener('load', o),
                      t.reportProgress &&
                        (n.removeEventListener('progress', c),
                        null !== r && n.upload && n.upload.removeEventListener('progress', u)),
                      n.abort();
                  }
                );
              });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(de));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const ge = new s.q('XSRF_COOKIE_NAME'),
        me = new s.q('XSRF_HEADER_NAME');
      class be {}
      let ye = (() => {
          class t {
            constructor(t, e, n) {
              (this.doc = t),
                (this.platform = e),
                (this.cookieName = n),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const t = this.doc.cookie || '';
              return (
                t !== this.lastCookieString &&
                  (this.parseCount++, (this.lastToken = Object(i.x)(t, this.cookieName)), (this.lastCookieString = t)),
                this.lastToken
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(i.c), s.Zb(s.B), s.Zb(ge));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        ve = (() => {
          class t {
            constructor(t, e) {
              (this.tokenService = t), (this.headerName = e);
            }
            intercept(t, e) {
              const n = t.url.toLowerCase();
              if ('GET' === t.method || 'HEAD' === t.method || n.startsWith('http://') || n.startsWith('https://'))
                return e.handle(t);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  t.headers.has(this.headerName) ||
                  (t = t.clone({ headers: t.headers.set(this.headerName, r) })),
                e.handle(t)
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(be), s.Zb(me));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        _e = (() => {
          class t {
            constructor(t, e) {
              (this.backend = t), (this.injector = e), (this.chain = null);
            }
            handle(t) {
              if (null === this.chain) {
                const t = this.injector.get(ce, []);
                this.chain = t.reduceRight((t, e) => new le(t, e), this.backend);
              }
              return this.chain.handle(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Zt), s.Zb(s.r));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        we = (() => {
          class t {
            static disable() {
              return { ngModule: t, providers: [{ provide: ve, useClass: ue }] };
            }
            static withOptions(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.cookieName ? { provide: ge, useValue: e.cookieName } : [],
                  e.headerName ? { provide: me, useValue: e.headerName } : []
                ]
              };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [
                ve,
                { provide: ce, useExisting: ve, multi: !0 },
                { provide: be, useClass: ye },
                { provide: ge, useValue: 'XSRF-TOKEN' },
                { provide: me, useValue: 'X-XSRF-TOKEN' }
              ]
            })),
            t
          );
        })(),
        Ce = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [
                ae,
                { provide: qt, useClass: _e },
                fe,
                { provide: Zt, useExisting: fe },
                pe,
                { provide: de, useExisting: pe }
              ],
              imports: [[we.withOptions({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' })]]
            })),
            t
          );
        })();
      const Se = new o.a(t => t.complete());
      function xe(t) {
        return t
          ? (function(t) {
              return new o.a(e => t.schedule(() => e.complete()));
            })(t)
          : Se;
      }
      function ke(t) {
        return new o.a(e => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? Object(u.a)(n) : xe()).subscribe(e);
        });
      }
      function Ee(t, e) {
        return new o.a(e ? n => e.schedule(Oe, 0, { error: t, subscriber: n }) : e => e.error(t));
      }
      function Oe({ error: t, subscriber: e }) {
        e.error(t);
      }
      var Ae = n('n6bG');
      function Te(t, e, n, r) {
        return (
          Object(Ae.a)(n) && ((r = n), (n = void 0)),
          r
            ? Te(t, e, n).pipe(Object(l.a)(t => (Object(a.a)(t) ? r(...t) : r(t))))
            : new o.a(r => {
                !(function t(e, n, r, s, i) {
                  let o;
                  if (
                    (function(t) {
                      return t && 'function' == typeof t.addEventListener && 'function' == typeof t.removeEventListener;
                    })(e)
                  ) {
                    const t = e;
                    e.addEventListener(n, r, i), (o = () => t.removeEventListener(n, r, i));
                  } else if (
                    (function(t) {
                      return t && 'function' == typeof t.on && 'function' == typeof t.off;
                    })(e)
                  ) {
                    const t = e;
                    e.on(n, r), (o = () => t.off(n, r));
                  } else if (
                    (function(t) {
                      return t && 'function' == typeof t.addListener && 'function' == typeof t.removeListener;
                    })(e)
                  ) {
                    const t = e;
                    e.addListener(n, r), (o = () => t.removeListener(n, r));
                  } else {
                    if (!e || !e.length) throw new TypeError('Invalid event target');
                    for (let o = 0, a = e.length; o < a; o++) t(e[o], n, r, s, i);
                  }
                  s.add(o);
                })(
                  t,
                  e,
                  function(t) {
                    r.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t);
                  },
                  r,
                  n
                );
              })
        );
      }
      var Ie = n('bHdf');
      function Pe() {
        return Object(Ie.a)(1);
      }
      function Me(...t) {
        return Pe()(Lt(...t));
      }
      var Re = n('XNiG'),
        je = n('KqfI');
      const Ne = new o.a(je.a);
      var De = n('VRyK'),
        Ve = n('l7GE'),
        Le = n('51Dv'),
        Fe = n('ZUHj');
      function He(t, e) {
        return 'function' == typeof e
          ? n => n.pipe(He((n, r) => Object(u.a)(t(n, r)).pipe(Object(l.a)((t, s) => e(n, t, r, s)))))
          : e => e.lift(new Ue(t));
      }
      class Ue {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new $e(t, this.project));
        }
      }
      class $e extends Ve.a {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const s = new Le.a(this, e, n),
            i = this.destination;
          i.add(s),
            (this.innerSubscription = Object(Fe.a)(this, t, void 0, void 0, s)),
            this.innerSubscription !== s && i.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(t) {
          this.destination.remove(t), (this.innerSubscription = null), this.isStopped && super._complete();
        }
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
      }
      var Be = n('oB13');
      const ze = (() => {
        function t() {
          return (
            Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function qe(t) {
        return e => (0 === t ? xe() : e.lift(new Ze(t)));
      }
      class Ze {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new ze();
        }
        call(t, e) {
          return e.subscribe(new Ge(t, this.total));
        }
      }
      class Ge extends Ut.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function We(t, e, n) {
        return function(r) {
          return r.lift(new Ke(t, e, n));
        };
      }
      class Ke {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(new Qe(t, this.nextOrObserver, this.error, this.complete));
        }
      }
      class Qe extends Ut.a {
        constructor(t, e, n, r) {
          super(t),
            (this._tapNext = je.a),
            (this._tapError = je.a),
            (this._tapComplete = je.a),
            (this._tapError = n || je.a),
            (this._tapComplete = r || je.a),
            Object(Ae.a)(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || je.a),
                (this._tapError = e.error || je.a),
                (this._tapComplete = e.complete || je.a));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      var Je = n('quSY');
      class Ye extends Je.a {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      class Xe extends Ye {
        constructor(t, e) {
          super(t, e), (this.scheduler = t), (this.work = e), (this.pending = !1);
        }
        schedule(t, e = 0) {
          if (this.closed) return this;
          this.state = t;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(r, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, n = 0) {
          return setInterval(t.flush.bind(t, this), n);
        }
        recycleAsyncId(t, e, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let n = !1,
            r = void 0;
          try {
            this.work(t);
          } catch (s) {
            (n = !0), (r = (!!s && s) || new Error(s));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const t = this.id,
            e = this.scheduler,
            n = e.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            (this.delay = null);
        }
      }
      let tn = (() => {
        class t {
          constructor(e, n = t.now) {
            (this.SchedulerAction = e), (this.now = n);
          }
          schedule(t, e = 0, n) {
            return new this.SchedulerAction(this, t).schedule(n, e);
          }
        }
        return (t.now = () => Date.now()), t;
      })();
      class en extends tn {
        constructor(t, e = tn.now) {
          super(t, () => (en.delegate && en.delegate !== this ? en.delegate.now() : e())),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(t, e = 0, n) {
          return en.delegate && en.delegate !== this ? en.delegate.schedule(t, e, n) : super.schedule(t, e, n);
        }
        flush(t) {
          const { actions: e } = this;
          if (this.active) return void e.push(t);
          let n;
          this.active = !0;
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), n)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
      const nn = new en(Xe);
      let rn = (() => {
        class t {
          constructor(t, e, n) {
            (this.kind = t), (this.value = e), (this.error = n), (this.hasValue = 'N' === t);
          }
          observe(t) {
            switch (this.kind) {
              case 'N':
                return t.next && t.next(this.value);
              case 'E':
                return t.error && t.error(this.error);
              case 'C':
                return t.complete && t.complete();
            }
          }
          do(t, e, n) {
            switch (this.kind) {
              case 'N':
                return t && t(this.value);
              case 'E':
                return e && e(this.error);
              case 'C':
                return n && n();
            }
          }
          accept(t, e, n) {
            return t && 'function' == typeof t.next ? this.observe(t) : this.do(t, e, n);
          }
          toObservable() {
            switch (this.kind) {
              case 'N':
                return Lt(this.value);
              case 'E':
                return Ee(this.error);
              case 'C':
                return xe();
            }
            throw new Error('unexpected notification kind value');
          }
          static createNext(e) {
            return void 0 !== e ? new t('N', e) : t.undefinedValueNotification;
          }
          static createError(e) {
            return new t('E', void 0, e);
          }
          static createComplete() {
            return t.completeNotification;
          }
        }
        return (t.completeNotification = new t('C')), (t.undefinedValueNotification = new t('N', void 0)), t;
      })();
      function sn(t, e = nn) {
        var n;
        const r = (n = t) instanceof Date && !isNaN(+n) ? +t - e.now() : Math.abs(t);
        return t => t.lift(new on(r, e));
      }
      class on {
        constructor(t, e) {
          (this.delay = t), (this.scheduler = e);
        }
        call(t, e) {
          return e.subscribe(new an(t, this.delay, this.scheduler));
        }
      }
      class an extends Ut.a {
        constructor(t, e, n) {
          super(t), (this.delay = e), (this.scheduler = n), (this.queue = []), (this.active = !1), (this.errored = !1);
        }
        static dispatch(t) {
          const e = t.source,
            n = e.queue,
            r = t.scheduler,
            s = t.destination;
          for (; n.length > 0 && n[0].time - r.now() <= 0; ) n.shift().notification.observe(s);
          if (n.length > 0) {
            const e = Math.max(0, n[0].time - r.now());
            this.schedule(t, e);
          } else this.unsubscribe(), (e.active = !1);
        }
        _schedule(t) {
          (this.active = !0),
            this.destination.add(
              t.schedule(an.dispatch, this.delay, { source: this, destination: this.destination, scheduler: t })
            );
        }
        scheduleNotification(t) {
          if (!0 === this.errored) return;
          const e = this.scheduler,
            n = new ln(e.now() + this.delay, t);
          this.queue.push(n), !1 === this.active && this._schedule(e);
        }
        _next(t) {
          this.scheduleNotification(rn.createNext(t));
        }
        _error(t) {
          (this.errored = !0), (this.queue = []), this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(rn.createComplete()), this.unsubscribe();
        }
      }
      class ln {
        constructor(t, e) {
          (this.time = t), (this.notification = e);
        }
      }
      const cn = 'Service workers are disabled or not supported by this browser';
      class un {
        constructor(t) {
          if (((this.serviceWorker = t), t)) {
            const e = Te(t, 'controllerchange').pipe(Object(l.a)(() => t.controller)),
              n = Me(
                ke(() => Lt(t.controller)),
                e
              );
            (this.worker = n.pipe($t(t => !!t))), (this.registration = this.worker.pipe(He(() => t.getRegistration())));
            const r = Te(t, 'message')
              .pipe(Object(l.a)(t => t.data))
              .pipe($t(t => t && t.type))
              .pipe(Object(Be.a)(new Re.a()));
            r.connect(), (this.events = r);
          } else
            this.worker = this.events = this.registration = ke(() =>
              Ee(new Error('Service workers are disabled or not supported by this browser'))
            );
        }
        postMessage(t, e) {
          return this.worker
            .pipe(
              qe(1),
              We(n => {
                n.postMessage(Object.assign({ action: t }, e));
              })
            )
            .toPromise()
            .then(() => {});
        }
        postMessageWithStatus(t, e, n) {
          const r = this.waitForStatus(n),
            s = this.postMessage(t, e);
          return Promise.all([r, s]).then(() => {});
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(t) {
          return this.events.pipe($t(e => e.type === t));
        }
        nextEventOfType(t) {
          return this.eventsOfType(t).pipe(qe(1));
        }
        waitForStatus(t) {
          return this.eventsOfType('STATUS')
            .pipe(
              $t(e => e.nonce === t),
              qe(1),
              Object(l.a)(t => {
                if (!t.status) throw new Error(t.error);
              })
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      let hn = (() => {
          class t {
            constructor(t) {
              if (((this.sw = t), (this.subscriptionChanges = new Re.a()), !t.isEnabled))
                return (this.messages = Ne), (this.notificationClicks = Ne), void (this.subscription = Ne);
              (this.messages = this.sw.eventsOfType('PUSH').pipe(Object(l.a)(t => t.data))),
                (this.notificationClicks = this.sw.eventsOfType('NOTIFICATION_CLICK').pipe(Object(l.a)(t => t.data))),
                (this.pushManager = this.sw.registration.pipe(Object(l.a)(t => t.pushManager)));
              const e = this.pushManager.pipe(He(t => t.getSubscription()));
              this.subscription = Object(De.a)(e, this.subscriptionChanges);
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            requestSubscription(t) {
              if (!this.sw.isEnabled) return Promise.reject(new Error(cn));
              const e = { userVisibleOnly: !0 };
              let n = this.decodeBase64(t.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+')),
                r = new Uint8Array(new ArrayBuffer(n.length));
              for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
              return (
                (e.applicationServerKey = r),
                this.pushManager
                  .pipe(
                    He(t => t.subscribe(e)),
                    qe(1)
                  )
                  .toPromise()
                  .then(t => (this.subscriptionChanges.next(t), t))
              );
            }
            unsubscribe() {
              return this.sw.isEnabled
                ? this.subscription
                    .pipe(
                      qe(1),
                      He(t => {
                        if (null === t) throw new Error('Not subscribed to push notifications.');
                        return t.unsubscribe().then(t => {
                          if (!t) throw new Error('Unsubscribe failed!');
                          this.subscriptionChanges.next(null);
                        });
                      })
                    )
                    .toPromise()
                : Promise.reject(new Error(cn));
            }
            decodeBase64(t) {
              return atob(t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(un));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        dn = (() => {
          class t {
            constructor(t) {
              if (((this.sw = t), !t.isEnabled)) return (this.available = Ne), void (this.activated = Ne);
              (this.available = this.sw.eventsOfType('UPDATE_AVAILABLE')),
                (this.activated = this.sw.eventsOfType('UPDATE_ACTIVATED'));
            }
            get isEnabled() {
              return this.sw.isEnabled;
            }
            checkForUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(cn));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus('CHECK_FOR_UPDATES', { statusNonce: t }, t);
            }
            activateUpdate() {
              if (!this.sw.isEnabled) return Promise.reject(new Error(cn));
              const t = this.sw.generateNonce();
              return this.sw.postMessageWithStatus('ACTIVATE_UPDATE', { statusNonce: t }, t);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(un));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class pn {}
      const fn = new s.q('NGSW_REGISTER_SCRIPT');
      function gn(t, e, n, r) {
        return () => {
          if (!(Object(i.t)(r) && 'serviceWorker' in navigator && !1 !== n.enabled)) return;
          let o;
          if (
            (navigator.serviceWorker.addEventListener('controllerchange', () => {
              null !== navigator.serviceWorker.controller &&
                navigator.serviceWorker.controller.postMessage({ action: 'INITIALIZE' });
            }),
            'function' == typeof n.registrationStrategy)
          )
            o = n.registrationStrategy();
          else {
            const [e, ...r] = (n.registrationStrategy || 'registerWhenStable').split(':');
            switch (e) {
              case 'registerImmediately':
                o = Lt(null);
                break;
              case 'registerWithDelay':
                o = Lt(null).pipe(sn(+r[0] || 0));
                break;
              case 'registerWhenStable':
                o = t.get(s.g).isStable.pipe($t(t => t));
                break;
              default:
                throw new Error(`Unknown ServiceWorker registration strategy: ${n.registrationStrategy}`);
            }
          }
          o.pipe(qe(1)).subscribe(() =>
            navigator.serviceWorker
              .register(e, { scope: n.scope })
              .catch(t => console.error('Service worker registration failed with:', t))
          );
        };
      }
      function mn(t, e) {
        return new un(Object(i.t)(e) && !1 !== t.enabled ? navigator.serviceWorker : void 0);
      }
      let bn = (() => {
        class t {
          static register(e, n = {}) {
            return {
              ngModule: t,
              providers: [
                { provide: fn, useValue: e },
                { provide: pn, useValue: n },
                { provide: un, useFactory: mn, deps: [pn, s.B] },
                { provide: s.d, useFactory: gn, deps: [s.r, fn, pn, s.B], multi: !0 }
              ]
            };
          }
        }
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [hn, dn]
          })),
          t
        );
      })();
      var yn = n('w1tV');
      function vn(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function(r) {
            return r.lift(new _n(t, e, n));
          }
        );
      }
      class _n {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(new wn(t, this.accumulator, this.seed, this.hasSeed));
        }
      }
      class wn extends Ut.a {
        constructor(t, e, n, r) {
          super(t), (this.accumulator = e), (this._seed = n), (this.hasSeed = r), (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Cn(t) {
        return function(e) {
          return 0 === t ? xe() : e.lift(new Sn(t));
        };
      }
      class Sn {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new ze();
        }
        call(t, e) {
          return e.subscribe(new xn(t, this.total));
        }
      }
      class xn extends Ut.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.ring = new Array()), (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = e++ % n;
              t.next(r[s]);
            }
          }
          t.complete();
        }
      }
      function kn(t = null) {
        return e => e.lift(new En(t));
      }
      class En {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new On(t, this.defaultValue));
        }
      }
      class On extends Ut.a {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }
      }
      var An = n('mCNh');
      function Tn(t, e) {
        return arguments.length >= 2
          ? function(n) {
              return Object(An.a)(vn(t, e), Cn(1), kn(e))(n);
            }
          : function(e) {
              return Object(An.a)(
                vn((e, n, r) => t(e, n, r + 1)),
                Cn(1)
              )(e);
            };
      }
      function In(t, e, n) {
        return 0 === n ? [e] : (t.push(e), t);
      }
      class Pn {}
      let Mn = (() => {
        class t extends Pn {
          getTranslation(t) {
            return Lt({});
          }
        }
        return (
          (t.ɵfac = function(e) {
            return Rn(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Rn = s.Tb(Mn);
      class jn {}
      let Nn = (() => {
        class t {
          handle(t) {
            return t.key;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class Dn {}
      let Vn = (() => {
        class t extends Dn {
          compile(t, e) {
            return t;
          }
          compileTranslations(t, e) {
            return t;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return Ln(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Ln = s.Tb(Vn);
      function Fn(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t != t && e != e) return !0;
        let n,
          r,
          s,
          i = typeof t;
        if (i == typeof e && 'object' == i) {
          if (!Array.isArray(t)) {
            if (Array.isArray(e)) return !1;
            for (r in ((s = Object.create(null)), t)) {
              if (!Fn(t[r], e[r])) return !1;
              s[r] = !0;
            }
            for (r in e) if (!(r in s) && void 0 !== e[r]) return !1;
            return !0;
          }
          if (!Array.isArray(e)) return !1;
          if ((n = t.length) == e.length) {
            for (r = 0; r < n; r++) if (!Fn(t[r], e[r])) return !1;
            return !0;
          }
        }
        return !1;
      }
      function Hn(t) {
        return null != t;
      }
      function Un(t) {
        return t && 'object' == typeof t && !Array.isArray(t);
      }
      class $n {}
      let Bn = (() => {
        class t extends $n {
          constructor() {
            super(...arguments), (this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g);
          }
          interpolate(t, e) {
            let n;
            return (
              (n =
                'string' == typeof t
                  ? this.interpolateString(t, e)
                  : 'function' == typeof t
                  ? this.interpolateFunction(t, e)
                  : t),
              n
            );
          }
          getValue(t, e) {
            let n = e.split('.');
            e = '';
            do {
              (e += n.shift()),
                !Hn(t) || !Hn(t[e]) || ('object' != typeof t[e] && n.length)
                  ? n.length
                    ? (e += '.')
                    : (t = void 0)
                  : ((t = t[e]), (e = ''));
            } while (n.length);
            return t;
          }
          interpolateFunction(t, e) {
            return t(e);
          }
          interpolateString(t, e) {
            return e
              ? t.replace(this.templateMatcher, (t, n) => {
                  let r = this.getValue(e, n);
                  return Hn(r) ? r : t;
                })
              : t;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return zn(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const zn = s.Tb(Bn);
      class qn {
        constructor() {
          (this.currentLang = this.defaultLang),
            (this.translations = {}),
            (this.langs = []),
            (this.onTranslationChange = new s.n()),
            (this.onLangChange = new s.n()),
            (this.onDefaultLangChange = new s.n());
        }
      }
      const Zn = new s.q('USE_STORE'),
        Gn = new s.q('USE_DEFAULT_LANG');
      let Wn = (() => {
          class t {
            constructor(t, e, n, r, i, o = !0, a = !1) {
              (this.store = t),
                (this.currentLoader = e),
                (this.compiler = n),
                (this.parser = r),
                (this.missingTranslationHandler = i),
                (this.useDefaultLang = o),
                (this.isolate = a),
                (this.pending = !1),
                (this._onTranslationChange = new s.n()),
                (this._onLangChange = new s.n()),
                (this._onDefaultLangChange = new s.n()),
                (this._langs = []),
                (this._translations = {}),
                (this._translationRequests = {});
            }
            get onTranslationChange() {
              return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
            }
            get onLangChange() {
              return this.isolate ? this._onLangChange : this.store.onLangChange;
            }
            get onDefaultLangChange() {
              return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
            }
            get defaultLang() {
              return this.isolate ? this._defaultLang : this.store.defaultLang;
            }
            set defaultLang(t) {
              this.isolate ? (this._defaultLang = t) : (this.store.defaultLang = t);
            }
            get currentLang() {
              return this.isolate ? this._currentLang : this.store.currentLang;
            }
            set currentLang(t) {
              this.isolate ? (this._currentLang = t) : (this.store.currentLang = t);
            }
            get langs() {
              return this.isolate ? this._langs : this.store.langs;
            }
            set langs(t) {
              this.isolate ? (this._langs = t) : (this.store.langs = t);
            }
            get translations() {
              return this.isolate ? this._translations : this.store.translations;
            }
            set translations(t) {
              this.isolate ? (this._translations = t) : (this.store.translations = t);
            }
            setDefaultLang(t) {
              if (t === this.defaultLang) return;
              let e = this.retrieveTranslations(t);
              void 0 !== e
                ? (this.defaultLang || (this.defaultLang = t),
                  e.pipe(qe(1)).subscribe(e => {
                    this.changeDefaultLang(t);
                  }))
                : this.changeDefaultLang(t);
            }
            getDefaultLang() {
              return this.defaultLang;
            }
            use(t) {
              if (t === this.currentLang) return Lt(this.translations[t]);
              let e = this.retrieveTranslations(t);
              return void 0 !== e
                ? (this.currentLang || (this.currentLang = t),
                  e.pipe(qe(1)).subscribe(e => {
                    this.changeLang(t);
                  }),
                  e)
                : (this.changeLang(t), Lt(this.translations[t]));
            }
            retrieveTranslations(t) {
              let e;
              return (
                void 0 === this.translations[t] &&
                  ((this._translationRequests[t] = this._translationRequests[t] || this.getTranslation(t)),
                  (e = this._translationRequests[t])),
                e
              );
            }
            getTranslation(t) {
              this.pending = !0;
              const e = this.currentLoader.getTranslation(t).pipe(Object(yn.a)());
              return (
                (this.loadingTranslations = e.pipe(
                  qe(1),
                  Object(l.a)(e => this.compiler.compileTranslations(e, t)),
                  Object(yn.a)()
                )),
                this.loadingTranslations.subscribe(
                  e => {
                    (this.translations[t] = e), this.updateLangs(), (this.pending = !1);
                  },
                  t => {
                    this.pending = !1;
                  }
                ),
                e
              );
            }
            setTranslation(t, e, n = !1) {
              (e = this.compiler.compileTranslations(e, t)),
                (this.translations[t] =
                  n && this.translations[t]
                    ? (function t(e, n) {
                        let r = Object.assign({}, e);
                        return (
                          Un(e) &&
                            Un(n) &&
                            Object.keys(n).forEach(s => {
                              Un(n[s]) && s in e ? (r[s] = t(e[s], n[s])) : Object.assign(r, { [s]: n[s] });
                            }),
                          r
                        );
                      })(this.translations[t], e)
                    : e),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: t, translations: this.translations[t] });
            }
            getLangs() {
              return this.langs;
            }
            addLangs(t) {
              t.forEach(t => {
                -1 === this.langs.indexOf(t) && this.langs.push(t);
              });
            }
            updateLangs() {
              this.addLangs(Object.keys(this.translations));
            }
            getParsedResult(t, e, n) {
              let r;
              if (e instanceof Array) {
                let r = {},
                  s = !1;
                for (let i of e)
                  (r[i] = this.getParsedResult(t, i, n)), 'function' == typeof r[i].subscribe && (s = !0);
                if (s) {
                  let t;
                  for (let n of e) {
                    let e = 'function' == typeof r[n].subscribe ? r[n] : Lt(r[n]);
                    t = void 0 === t ? e : Object(De.a)(t, e);
                  }
                  return t.pipe(
                    Tn(In, []),
                    Object(l.a)(t => {
                      let n = {};
                      return (
                        t.forEach((t, r) => {
                          n[e[r]] = t;
                        }),
                        n
                      );
                    })
                  );
                }
                return r;
              }
              if (
                (t && (r = this.parser.interpolate(this.parser.getValue(t, e), n)),
                void 0 === r &&
                  this.defaultLang &&
                  this.defaultLang !== this.currentLang &&
                  this.useDefaultLang &&
                  (r = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], e), n)),
                void 0 === r)
              ) {
                let t = { key: e, translateService: this };
                void 0 !== n && (t.interpolateParams = n), (r = this.missingTranslationHandler.handle(t));
              }
              return void 0 !== r ? r : e;
            }
            get(t, e) {
              if (!Hn(t) || !t.length) throw new Error('Parameter "key" required');
              if (this.pending)
                return o.a.create(n => {
                  let r = t => {
                      n.next(t), n.complete();
                    },
                    s = t => {
                      n.error(t);
                    };
                  this.loadingTranslations.subscribe(n => {
                    'function' == typeof (n = this.getParsedResult(n, t, e)).subscribe ? n.subscribe(r, s) : r(n);
                  }, s);
                });
              {
                let n = this.getParsedResult(this.translations[this.currentLang], t, e);
                return 'function' == typeof n.subscribe ? n : Lt(n);
              }
            }
            stream(t, e) {
              if (!Hn(t) || !t.length) throw new Error('Parameter "key" required');
              return Me(
                this.get(t, e),
                this.onLangChange.pipe(
                  He(n => {
                    const r = this.getParsedResult(n.translations, t, e);
                    return 'function' == typeof r.subscribe ? r : Lt(r);
                  })
                )
              );
            }
            instant(t, e) {
              if (!Hn(t) || !t.length) throw new Error('Parameter "key" required');
              let n = this.getParsedResult(this.translations[this.currentLang], t, e);
              if (void 0 !== n.subscribe) {
                if (t instanceof Array) {
                  let e = {};
                  return (
                    t.forEach((n, r) => {
                      e[t[r]] = t[r];
                    }),
                    e
                  );
                }
                return t;
              }
              return n;
            }
            set(t, e, n = this.currentLang) {
              (this.translations[n][t] = this.compiler.compile(e, n)),
                this.updateLangs(),
                this.onTranslationChange.emit({ lang: n, translations: this.translations[n] });
            }
            changeLang(t) {
              (this.currentLang = t),
                this.onLangChange.emit({ lang: t, translations: this.translations[t] }),
                this.defaultLang || this.changeDefaultLang(t);
            }
            changeDefaultLang(t) {
              (this.defaultLang = t), this.onDefaultLangChange.emit({ lang: t, translations: this.translations[t] });
            }
            reloadLang(t) {
              return this.resetLang(t), this.getTranslation(t);
            }
            resetLang(t) {
              (this._translationRequests[t] = void 0), (this.translations[t] = void 0);
            }
            getBrowserLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              let t = window.navigator.languages ? window.navigator.languages[0] : null;
              return (
                (t =
                  t || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage),
                -1 !== t.indexOf('-') && (t = t.split('-')[0]),
                -1 !== t.indexOf('_') && (t = t.split('_')[0]),
                t
              );
            }
            getBrowserCultureLang() {
              if ('undefined' == typeof window || void 0 === window.navigator) return;
              let t = window.navigator.languages ? window.navigator.languages[0] : null;
              return (
                (t =
                  t || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage),
                t
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(qn), s.Zb(Pn), s.Zb(Dn), s.Zb($n), s.Zb(jn), s.Zb(Gn), s.Zb(Zn));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Kn = (() => {
          class t {
            constructor(t, e, n) {
              (this.translateService = t),
                (this.element = e),
                (this._ref = n),
                this.onTranslationChangeSub ||
                  (this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(t => {
                    t.lang === this.translateService.currentLang && this.checkNodes(!0, t.translations);
                  })),
                this.onLangChangeSub ||
                  (this.onLangChangeSub = this.translateService.onLangChange.subscribe(t => {
                    this.checkNodes(!0, t.translations);
                  })),
                this.onDefaultLangChangeSub ||
                  (this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(t => {
                    this.checkNodes(!0);
                  }));
            }
            set translate(t) {
              t && ((this.key = t), this.checkNodes());
            }
            set translateParams(t) {
              Fn(this.currentParams, t) || ((this.currentParams = t), this.checkNodes(!0));
            }
            ngAfterViewChecked() {
              this.checkNodes();
            }
            checkNodes(t = !1, e) {
              let n = this.element.nativeElement.childNodes;
              n.length ||
                (this.setContent(this.element.nativeElement, this.key), (n = this.element.nativeElement.childNodes));
              for (let r = 0; r < n.length; ++r) {
                let s = n[r];
                if (3 === s.nodeType) {
                  let n;
                  if (this.key) (n = this.key), t && (s.lastKey = null);
                  else {
                    let e = this.getContent(s),
                      r = e.trim();
                    r.length &&
                      (e !== s.currentValue
                        ? ((n = r), (s.originalContent = this.getContent(s)))
                        : s.originalContent && t && ((s.lastKey = null), (n = s.originalContent.trim())));
                  }
                  this.updateValue(n, s, e);
                }
              }
            }
            updateValue(t, e, n) {
              if (t) {
                if (e.lastKey === t && this.lastParams === this.currentParams) return;
                this.lastParams = this.currentParams;
                let r = n => {
                  n !== t && (e.lastKey = t),
                    e.originalContent || (e.originalContent = this.getContent(e)),
                    (e.currentValue = Hn(n) ? n : e.originalContent || t),
                    this.setContent(e, this.key ? e.currentValue : e.originalContent.replace(t, e.currentValue)),
                    this._ref.markForCheck();
                };
                if (Hn(n)) {
                  let e = this.translateService.getParsedResult(n, t, this.currentParams);
                  'function' == typeof e.subscribe ? e.subscribe(r) : r(e);
                } else this.translateService.get(t, this.currentParams).subscribe(r);
              }
            }
            getContent(t) {
              return Hn(t.textContent) ? t.textContent : t.data;
            }
            setContent(t, e) {
              Hn(t.textContent) ? (t.textContent = e) : (t.data = e);
            }
            ngOnDestroy() {
              this.onLangChangeSub && this.onLangChangeSub.unsubscribe(),
                this.onDefaultLangChangeSub && this.onDefaultLangChangeSub.unsubscribe(),
                this.onTranslationChangeSub && this.onTranslationChangeSub.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Wn), s.Mb(s.l), s.Mb(s.h));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['', 'translate', ''],
                ['', 'ngx-translate', '']
              ],
              inputs: { translate: 'translate', translateParams: 'translateParams' }
            })),
            t
          );
        })(),
        Qn = (() => {
          class t {
            constructor(t, e) {
              (this.translate = t), (this._ref = e), (this.value = '');
            }
            updateValue(t, e, n) {
              let r = e => {
                (this.value = void 0 !== e ? e : t), (this.lastKey = t), this._ref.markForCheck();
              };
              if (n) {
                let s = this.translate.getParsedResult(n, t, e);
                'function' == typeof s.subscribe ? s.subscribe(r) : r(s);
              }
              this.translate.get(t, e).subscribe(r);
            }
            transform(t, ...e) {
              if (!t || 0 === t.length) return t;
              if (Fn(t, this.lastKey) && Fn(e, this.lastParams)) return this.value;
              let n;
              if (Hn(e[0]) && e.length)
                if ('string' == typeof e[0] && e[0].length) {
                  let t = e[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                  try {
                    n = JSON.parse(t);
                  } catch (r) {
                    throw new SyntaxError(
                      `Wrong parameter in TranslatePipe. Expected a valid Object, received: ${e[0]}`
                    );
                  }
                } else 'object' != typeof e[0] || Array.isArray(e[0]) || (n = e[0]);
              return (
                (this.lastKey = t),
                (this.lastParams = e),
                this.updateValue(t, n),
                this._dispose(),
                this.onTranslationChange ||
                  (this.onTranslationChange = this.translate.onTranslationChange.subscribe(e => {
                    this.lastKey &&
                      e.lang === this.translate.currentLang &&
                      ((this.lastKey = null), this.updateValue(t, n, e.translations));
                  })),
                this.onLangChange ||
                  (this.onLangChange = this.translate.onLangChange.subscribe(e => {
                    this.lastKey && ((this.lastKey = null), this.updateValue(t, n, e.translations));
                  })),
                this.onDefaultLangChange ||
                  (this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => {
                    this.lastKey && ((this.lastKey = null), this.updateValue(t, n));
                  })),
                this.value
              );
            }
            _dispose() {
              void 0 !== this.onTranslationChange &&
                (this.onTranslationChange.unsubscribe(), (this.onTranslationChange = void 0)),
                void 0 !== this.onLangChange && (this.onLangChange.unsubscribe(), (this.onLangChange = void 0)),
                void 0 !== this.onDefaultLangChange &&
                  (this.onDefaultLangChange.unsubscribe(), (this.onDefaultLangChange = void 0));
            }
            ngOnDestroy() {
              this._dispose();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Wn), s.bc());
            }),
            (t.ɵpipe = s.Lb({ name: 'translate', type: t, pure: !1 })),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Jn = (() => {
          class t {
            static forRoot(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.loader || { provide: Pn, useClass: Mn },
                  e.compiler || { provide: Dn, useClass: Vn },
                  e.parser || { provide: $n, useClass: Bn },
                  e.missingTranslationHandler || { provide: jn, useClass: Nn },
                  qn,
                  { provide: Zn, useValue: e.isolate },
                  { provide: Gn, useValue: e.useDefaultLang },
                  Wn
                ]
              };
            }
            static forChild(e = {}) {
              return {
                ngModule: t,
                providers: [
                  e.loader || { provide: Pn, useClass: Mn },
                  e.compiler || { provide: Dn, useClass: Vn },
                  e.parser || { provide: $n, useClass: Bn },
                  e.missingTranslationHandler || { provide: jn, useClass: Nn },
                  { provide: Zn, useValue: e.isolate },
                  { provide: Gn, useValue: e.useDefaultLang },
                  Wn
                ]
              };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })();
      var Yn = n('9ppp');
      class Xn extends Re.a {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new Yn.a();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      const tr = {};
      class er {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new nr(t, this.resultSelector));
        }
      }
      class nr extends Ve.a {
        constructor(t, e) {
          super(t), (this.resultSelector = e), (this.active = 0), (this.values = []), (this.observables = []);
        }
        _next(t) {
          this.values.push(tr), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) {
              const e = t[n];
              this.add(Object(Fe.a)(this, e, e, n));
            }
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n, r, s) {
          const i = this.values,
            o = this.toRespond ? (i[n] === tr ? --this.toRespond : this.toRespond) : 0;
          (i[n] = e), 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      class rr {
        call(t, e) {
          return e.subscribe(new sr(t));
        }
      }
      class sr extends Ve.a {
        constructor(t) {
          super(t), (this.hasFirst = !1), (this.observables = []), (this.subscriptions = []);
        }
        _next(t) {
          this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            for (let n = 0; n < e && !this.hasFirst; n++) {
              let e = t[n],
                r = Object(Fe.a)(this, e, e, n);
              this.subscriptions && this.subscriptions.push(r), this.add(r);
            }
            this.observables = null;
          }
        }
        notifyNext(t, e, n, r, s) {
          if (!this.hasFirst) {
            this.hasFirst = !0;
            for (let t = 0; t < this.subscriptions.length; t++)
              if (t !== n) {
                let e = this.subscriptions[t];
                e.unsubscribe(), this.remove(e);
              }
            this.subscriptions = null;
          }
          this.destination.next(e);
        }
      }
      function ir(t) {
        return e => e.lift(new or(t));
      }
      class or {
        constructor(t) {
          this.notifier = t;
        }
        call(t, e) {
          const n = new ar(t),
            r = Object(Fe.a)(n, this.notifier);
          return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n;
        }
      }
      class ar extends Ve.a {
        constructor(t) {
          super(t), (this.seenValue = !1);
        }
        notifyNext(t, e, n, r, s) {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      function lr(...t) {
        return e => {
          let n;
          return 'function' == typeof t[t.length - 1] && (n = t.pop()), e.lift(new cr(t, n));
        };
      }
      class cr {
        constructor(t, e) {
          (this.observables = t), (this.project = e);
        }
        call(t, e) {
          return e.subscribe(new ur(t, this.observables, this.project));
        }
      }
      class ur extends Ve.a {
        constructor(t, e, n) {
          super(t), (this.observables = e), (this.project = n), (this.toRespond = []);
          const r = e.length;
          this.values = new Array(r);
          for (let s = 0; s < r; s++) this.toRespond.push(s);
          for (let s = 0; s < r; s++) {
            let t = e[s];
            this.add(Object(Fe.a)(this, t, t, s));
          }
        }
        notifyNext(t, e, n, r, s) {
          this.values[n] = e;
          const i = this.toRespond;
          if (i.length > 0) {
            const t = i.indexOf(n);
            -1 !== t && i.splice(t, 1);
          }
        }
        notifyComplete() {}
        _next(t) {
          if (0 === this.toRespond.length) {
            const e = [t, ...this.values];
            this.project ? this._tryProject(e) : this.destination.next(e);
          }
        }
        _tryProject(t) {
          let e;
          try {
            e = this.project.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      $localize`:@@ngb.alert.close␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`;
      const hr = ['*'];
      $localize`:@@ngb.carousel.previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`,
        $localize`:@@ngb.carousel.next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`,
        $localize`:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`,
        $localize`:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`,
        $localize`:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`,
        $localize`:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`,
        $localize`:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`,
        $localize`:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`,
        $localize`:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`,
        $localize`:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`;
      const dr = ['dialog'];
      function pr(t) {
        return null != t;
      }
      $localize`:@@ngb.pagination.first␟656506dfd46380956a655f919f1498d018f75ca0␟6867721956102594380:««`,
        $localize`:@@ngb.pagination.previous␟6e52b6ee77a4848d899dd21b591c6fd499e3aef3␟6479320895410098858:«`,
        $localize`:@@ngb.pagination.next␟ba9cbb4ff311464308a3627e4f1c3345d9fe6d7d␟5458177150283468089:»`,
        $localize`:@@ngb.pagination.last␟49f27a460bc97e7e00be5b37098bfa79884fc7d9␟5277020320267646988:»»`,
        $localize`:@@ngb.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`,
        $localize`:@@ngb.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`,
        $localize`:@@ngb.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`,
        $localize`:@@ngb.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`,
        $localize`:@@ngb.progressbar.value␟04d611d19c117c60c9e14d0a04399a027184bc77␟5214781723415385277:${'\ufffd0\ufffd'}:INTERPOLATION:%`,
        $localize`:@@ngb.timepicker.HH␟ce676ab1d6d98f85c836381cf100a4a91ef95a1f␟4043638465245303811:HH`,
        $localize`:@@ngb.timepicker.hours␟3bbce5fef7e1151da052a4e529453edb340e3912␟8070396816726827304:Hours`,
        $localize`:@@ngb.timepicker.MM␟72c8edf6a50068a05bde70991e36b1e881f4ca54␟1647282246509919852:MM`,
        $localize`:@@ngb.timepicker.minutes␟41e62daa962947c0d23ded0981975d1bddf0bf38␟5531237363767747080:Minutes`,
        $localize`:@@ngb.timepicker.increment-hours␟cb74bc1d625a6c1742f0d7d47306cf495780c218␟5939278348542933629:Increment hours`,
        $localize`:@@ngb.timepicker.decrement-hours␟147c7a19429da7d999e247d22e33fee370b1691b␟3651829882940481818:Decrement hours`,
        $localize`:@@ngb.timepicker.increment-minutes␟f5a4a3bc05e053f6732475d0e74875ec01c3a348␟180147720391025024:Increment minutes`,
        $localize`:@@ngb.timepicker.decrement-minutes␟c1a6899e529c096da5b660385d4e77fe1f7ad271␟7447789825403243588:Decrement minutes`,
        $localize`:@@ngb.timepicker.SS␟ebe38d36a40a2383c5fefa9b4608ffbda08bd4a3␟3628127143071124194:SS`,
        $localize`:@@ngb.timepicker.seconds␟4f2ed9e71a7c981db3e50ae2fedb28aff2ec4e6c␟8874012390997067175:Seconds`,
        $localize`:@@ngb.timepicker.increment-seconds␟912322ecee7d659d04dcf494a70e22e49d334b26␟5364772110539092174:Increment seconds`,
        $localize`:@@ngb.timepicker.decrement-seconds␟5db47ac104294243a70eb9124fbea9d0004ddf69␟753633511487974857:Decrement seconds`,
        $localize`:@@ngb.timepicker.PM␟8d6e691e10306c1b34c6b26805151aaea320ef7f␟3564199131264287502:${'\ufffd0\ufffd'}:INTERPOLATION:`,
        $localize`:@@ngb.timepicker.AM␟69a1f176a93998876952adac57c3bc3863b6105e␟4592818992509942761:${'\ufffd0\ufffd'}:INTERPOLATION:`,
        $localize`:@@ngb.toast.close-aria␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`,
        'undefined' == typeof Element ||
          Element.prototype.closest ||
          (Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
          (Element.prototype.closest = function(t) {
            let e = this;
            if (!document.documentElement.contains(e)) return null;
            do {
              if (e.matches(t)) return e;
              e = e.parentElement || e.parentNode;
            } while (null !== e && 1 === e.nodeType);
            return null;
          }));
      let fr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        gr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        mr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        br = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        yr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })();
      const vr = (function() {
          var t = {
            Tab: 9,
            Enter: 13,
            Escape: 27,
            Space: 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            ArrowLeft: 37,
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40
          };
          return (
            (t[t.Tab] = 'Tab'),
            (t[t.Enter] = 'Enter'),
            (t[t.Escape] = 'Escape'),
            (t[t.Space] = 'Space'),
            (t[t.PageUp] = 'PageUp'),
            (t[t.PageDown] = 'PageDown'),
            (t[t.End] = 'End'),
            (t[t.Home] = 'Home'),
            (t[t.ArrowLeft] = 'ArrowLeft'),
            (t[t.ArrowUp] = 'ArrowUp'),
            (t[t.ArrowRight] = 'ArrowRight'),
            (t[t.ArrowDown] = 'ArrowDown'),
            t
          );
        })(),
        _r = (t, e) => !!e && e.some(e => e.contains(t)),
        wr = (t, e) =>
          !e ||
          null !=
            (function(t, e) {
              return e ? t.closest(e) : null;
            })(t, e);
      let Cr = !1;
      'undefined' != typeof navigator && (Cr = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent));
      const Sr = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled]):not([type="hidden"])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[contenteditable]',
        '[tabindex]:not([tabindex="-1"])'
      ].join(', ');
      function xr(t) {
        const e = Array.from(t.querySelectorAll(Sr)).filter(t => -1 !== t.tabIndex);
        return [e[0], e[e.length - 1]];
      }
      class kr {
        getAllStyles(t) {
          return window.getComputedStyle(t);
        }
        getStyle(t, e) {
          return this.getAllStyles(t)[e];
        }
        isStaticPositioned(t) {
          return 'static' === (this.getStyle(t, 'position') || 'static');
        }
        offsetParent(t) {
          let e = t.offsetParent || document.documentElement;
          for (; e && e !== document.documentElement && this.isStaticPositioned(e); ) e = e.offsetParent;
          return e || document.documentElement;
        }
        position(t, e = !0) {
          let n,
            r = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
          if ('fixed' === this.getStyle(t, 'position'))
            (n = t.getBoundingClientRect()),
              (n = { top: n.top, bottom: n.bottom, left: n.left, right: n.right, height: n.height, width: n.width });
          else {
            const e = this.offsetParent(t);
            (n = this.offset(t, !1)),
              e !== document.documentElement && (r = this.offset(e, !1)),
              (r.top += e.clientTop),
              (r.left += e.clientLeft);
          }
          return (
            (n.top -= r.top),
            (n.bottom -= r.top),
            (n.left -= r.left),
            (n.right -= r.left),
            e &&
              ((n.top = Math.round(n.top)),
              (n.bottom = Math.round(n.bottom)),
              (n.left = Math.round(n.left)),
              (n.right = Math.round(n.right))),
            n
          );
        }
        offset(t, e = !0) {
          const n = t.getBoundingClientRect(),
            r = window.pageYOffset - document.documentElement.clientTop,
            s = window.pageXOffset - document.documentElement.clientLeft;
          let i = {
            height: n.height || t.offsetHeight,
            width: n.width || t.offsetWidth,
            top: n.top + r,
            bottom: n.bottom + r,
            left: n.left + s,
            right: n.right + s
          };
          return (
            e &&
              ((i.height = Math.round(i.height)),
              (i.width = Math.round(i.width)),
              (i.top = Math.round(i.top)),
              (i.bottom = Math.round(i.bottom)),
              (i.left = Math.round(i.left)),
              (i.right = Math.round(i.right))),
            i
          );
        }
        positionElements(t, e, n, r) {
          const [s = 'top', i = 'center'] = n.split('-'),
            o = r ? this.offset(t, !1) : this.position(t, !1),
            a = this.getAllStyles(e),
            l = parseFloat(a.marginTop),
            c = parseFloat(a.marginBottom),
            u = parseFloat(a.marginLeft),
            h = parseFloat(a.marginRight);
          let d = 0,
            p = 0;
          switch (s) {
            case 'top':
              d = o.top - (e.offsetHeight + l + c);
              break;
            case 'bottom':
              d = o.top + o.height;
              break;
            case 'left':
              p = o.left - (e.offsetWidth + u + h);
              break;
            case 'right':
              p = o.left + o.width;
          }
          switch (i) {
            case 'top':
              d = o.top;
              break;
            case 'bottom':
              d = o.top + o.height - e.offsetHeight;
              break;
            case 'left':
              p = o.left;
              break;
            case 'right':
              p = o.left + o.width - e.offsetWidth;
              break;
            case 'center':
              'top' === s || 'bottom' === s
                ? (p = o.left + o.width / 2 - e.offsetWidth / 2)
                : (d = o.top + o.height / 2 - e.offsetHeight / 2);
          }
          e.style.transform = `translate(${Math.round(p)}px, ${Math.round(d)}px)`;
          const f = e.getBoundingClientRect(),
            g = document.documentElement,
            m = window.innerHeight || g.clientHeight,
            b = window.innerWidth || g.clientWidth;
          return f.left >= 0 && f.top >= 0 && f.right <= b && f.bottom <= m;
        }
      }
      const Er = /\s+/,
        Or = new kr();
      let Ar = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, Rt]]
            })),
            t
          );
        })(),
        Tr = (() => {
          class t {
            constructor() {
              (this.autoClose = !0), (this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right']);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            (t.ngInjectableDef = Object(s.Ib)({
              factory: function() {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Ir = (() => {
          class t {}
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵdir = s.Hb({ type: t, selectors: [['', 8, 'navbar']] })),
            t
          );
        })(),
        Pr = (() => {
          class t {
            constructor(t) {
              (this.elementRef = t), (this._disabled = !1);
            }
            set disabled(t) {
              this._disabled = '' === t || !0 === t;
            }
            get disabled() {
              return this._disabled;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdownItem', '']],
              hostAttrs: [1, 'dropdown-item'],
              hostVars: 2,
              hostBindings: function(t, e) {
                2 & t && s.Eb('disabled', e.disabled);
              },
              inputs: { disabled: 'disabled' }
            })),
            t
          );
        })(),
        Mr = (() => {
          class t {
            constructor(t) {
              (this.dropdown = t), (this.placement = 'bottom'), (this.isOpen = !1);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Object(s.S)(() => Nr)));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdownMenu', '']],
              contentQueries: function(t, e, n) {
                var r;
                1 & t && s.Fb(n, Pr, !1), 2 & t && s.rc((r = s.ec())) && (e.menuItems = r);
              },
              hostVars: 5,
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('keydown.ArrowUp', function(t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.ArrowDown', function(t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Home', function(t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.End', function(t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Enter', function(t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Space', function(t) {
                    return e.dropdown.onKeyDown(t);
                  }),
                  2 & t && (s.Ab('x-placement', e.placement), s.Eb('dropdown-menu', !0)('show', e.dropdown.isOpen()));
              }
            })),
            t
          );
        })(),
        Rr = (() => {
          class t {
            constructor(t, e) {
              (this.dropdown = t), (this._elementRef = e), (this.anchorEl = e.nativeElement);
            }
            getNativeElement() {
              return this._elementRef.nativeElement;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Object(s.S)(() => Nr)), s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdownAnchor', '']],
              hostAttrs: ['aria-haspopup', 'true', 1, 'dropdown-toggle'],
              hostVars: 1,
              hostBindings: function(t, e) {
                2 & t && s.Ab('aria-expanded', e.dropdown.isOpen());
              }
            })),
            t
          );
        })(),
        jr = (() => {
          class t extends Rr {
            constructor(t, e) {
              super(t, e);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Object(s.S)(() => Nr)), s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdownToggle', '']],
              hostAttrs: ['aria-haspopup', 'true', 1, 'dropdown-toggle'],
              hostVars: 1,
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('click', function(t) {
                    return e.dropdown.toggle();
                  })('keydown.ArrowUp', function(t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.ArrowDown', function(t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.Home', function(t) {
                    return e.dropdown.onKeyDown(t);
                  })('keydown.End', function(t) {
                    return e.dropdown.onKeyDown(t);
                  }),
                  2 & t && s.Ab('aria-expanded', e.dropdown.isOpen());
              },
              features: [s.yb([{ provide: Rr, useExisting: Object(s.S)(() => t) }]), s.wb]
            })),
            t
          );
        })(),
        Nr = (() => {
          class t {
            constructor(t, e, n, r, i, o, a) {
              (this._changeDetector = t),
                (this._document = n),
                (this._ngZone = r),
                (this._elementRef = i),
                (this._renderer = o),
                (this._closed$ = new Re.a()),
                (this._open = !1),
                (this.openChange = new s.n()),
                (this.placement = e.placement),
                (this.container = e.container),
                (this.autoClose = e.autoClose),
                (this.display = a ? 'static' : 'dynamic'),
                (this._zoneSubscription = r.onStable.subscribe(() => {
                  this._positionMenu();
                }));
            }
            ngAfterContentInit() {
              this._ngZone.onStable.pipe(qe(1)).subscribe(() => {
                this._applyPlacementClasses(), this._open && this._setCloseHandlers();
              });
            }
            ngOnChanges(t) {
              t.container && this._open && this._applyContainer(this.container),
                t.placement && !t.placement.isFirstChange && this._applyPlacementClasses();
            }
            isOpen() {
              return this._open;
            }
            open() {
              this._open ||
                ((this._open = !0),
                this._applyContainer(this.container),
                this.openChange.emit(!0),
                this._setCloseHandlers());
            }
            _setCloseHandlers() {
              const t = this._anchor;
              !(function(t, e, n, r, s, i, o, c) {
                var u;
                n &&
                  t.runOutsideAngular(
                    ((u = () => {
                      const c = Te(e, 'keydown').pipe(
                          ir(s),
                          $t(t => t.which === vr.Escape),
                          We(t => t.preventDefault())
                        ),
                        u = Te(e, 'mousedown').pipe(
                          Object(l.a)(t => {
                            const e = t.target;
                            return (
                              2 !== t.button &&
                              !_r(e, o) &&
                              ('inside' === n
                                ? _r(e, i) && wr(e, '.dropdown-item,.dropdown-divider')
                                : 'outside' === n
                                ? !_r(e, i)
                                : wr(e, '.dropdown-item,.dropdown-divider') || !_r(e, i))
                            );
                          }),
                          ir(s)
                        );
                      (function(...t) {
                        if (1 === t.length) {
                          if (!Object(a.a)(t[0])) return t[0];
                          t = t[0];
                        }
                        return Object(Dt.a)(t, void 0).lift(new rr());
                      })([
                        c,
                        Te(e, 'mouseup').pipe(
                          lr(u),
                          $t(([t, e]) => e),
                          sn(0),
                          ir(s)
                        )
                      ]).subscribe(() => t.run(r));
                    }),
                    Cr ? () => setTimeout(() => u(), 100) : u)
                  );
              })(
                this._ngZone,
                this._document,
                this.autoClose,
                () => this.close(),
                this._closed$,
                this._menu ? [this._menuElement.nativeElement] : [],
                t ? [t.getNativeElement()] : []
              );
            }
            close() {
              this._open &&
                ((this._open = !1),
                this._resetContainer(),
                this._closed$.next(),
                this.openChange.emit(!1),
                this._changeDetector.markForCheck());
            }
            toggle() {
              this.isOpen() ? this.close() : this.open();
            }
            ngOnDestroy() {
              this._resetContainer(), this._closed$.next(), this._zoneSubscription.unsubscribe();
            }
            onKeyDown(t) {
              const e = t.which,
                n = this._getMenuElements();
              let r = -1,
                s = !1;
              const i = this._isEventFromToggle(t);
              if (
                (!i &&
                  n.length &&
                  n.forEach((e, n) => {
                    e.contains(t.target) && (s = !0), e === this._document.activeElement && (r = n);
                  }),
                e !== vr.Space && e !== vr.Enter)
              ) {
                if (i || s) {
                  if ((this.open(), n.length)) {
                    switch (e) {
                      case vr.ArrowDown:
                        r = Math.min(r + 1, n.length - 1);
                        break;
                      case vr.ArrowUp:
                        if (this._isDropup() && -1 === r) {
                          r = n.length - 1;
                          break;
                        }
                        r = Math.max(r - 1, 0);
                        break;
                      case vr.Home:
                        r = 0;
                        break;
                      case vr.End:
                        r = n.length - 1;
                    }
                    n[r].focus();
                  }
                  t.preventDefault();
                }
              } else !s || (!0 !== this.autoClose && 'inside' !== this.autoClose) || this.close();
            }
            _isDropup() {
              return this._elementRef.nativeElement.classList.contains('dropup');
            }
            _isEventFromToggle(t) {
              return this._anchor.getNativeElement().contains(t.target);
            }
            _getMenuElements() {
              const t = this._menu;
              return null == t ? [] : t.menuItems.filter(t => !t.disabled).map(t => t.elementRef.nativeElement);
            }
            _positionMenu() {
              const t = this._menu;
              this.isOpen() &&
                t &&
                this._applyPlacementClasses(
                  'dynamic' === this.display
                    ? (function(t, e, n, r, s) {
                        let i = Array.isArray(n) ? n : n.split(Er);
                        const o = [
                            'top',
                            'bottom',
                            'left',
                            'right',
                            'top-left',
                            'top-right',
                            'bottom-left',
                            'bottom-right',
                            'left-top',
                            'left-bottom',
                            'right-top',
                            'right-bottom'
                          ],
                          a = t => {
                            const [e, n] = t.split('-'),
                              r = [];
                            return r;
                          };
                        let l = i.findIndex(t => 'auto' === t);
                        l >= 0 &&
                          o.forEach(function(t) {
                            null == i.find(e => -1 !== e.search('^' + t)) && i.splice(l++, 1, t);
                          });
                        const c = e.style;
                        let u;
                        (c.position = 'absolute'), (c.top = '0'), (c.left = '0'), (c['will-change'] = 'transform');
                        let h = !1;
                        for (u of i) {
                          a(u);
                          if (Or.positionElements(t, e, u, r)) {
                            h = !0;
                            break;
                          }
                        }
                        return h || ((u = i[0]), a(u), Or.positionElements(t, e, u, r)), u;
                      })(
                        this._anchor.anchorEl,
                        this._bodyContainer || this._menuElement.nativeElement,
                        this.placement,
                        'body' === this.container
                      )
                    : this._getFirstPlacement(this.placement)
                );
            }
            _getFirstPlacement(t) {
              return Array.isArray(t) ? t[0] : t.split(' ')[0];
            }
            _resetContainer() {
              const t = this._renderer,
                e = this._menuElement;
              if (e) {
                const n = e.nativeElement;
                t.appendChild(this._elementRef.nativeElement, n),
                  t.removeStyle(n, 'position'),
                  t.removeStyle(n, 'transform');
              }
              this._bodyContainer &&
                (t.removeChild(this._document.body, this._bodyContainer), (this._bodyContainer = null));
            }
            _applyContainer(t = null) {
              if ((this._resetContainer(), 'body' === t)) {
                const t = this._renderer,
                  e = this._menuElement.nativeElement,
                  n = (this._bodyContainer = this._bodyContainer || t.createElement('div'));
                t.setStyle(n, 'position', 'absolute'),
                  t.setStyle(e, 'position', 'static'),
                  t.setStyle(n, 'z-index', '1050'),
                  t.appendChild(n, e),
                  t.appendChild(this._document.body, n);
              }
            }
            _applyPlacementClasses(t) {
              const e = this._menu;
              if (e) {
                t || (t = this._getFirstPlacement(this.placement));
                const n = this._renderer,
                  r = this._elementRef.nativeElement;
                n.removeClass(r, 'dropup'),
                  n.removeClass(r, 'dropdown'),
                  (e.placement = 'static' === this.display ? null : t);
                const s = -1 !== t.search('^top') ? 'dropup' : 'dropdown';
                n.addClass(r, s);
                const i = this._bodyContainer;
                i && (n.removeClass(i, 'dropup'), n.removeClass(i, 'dropdown'), n.addClass(i, s));
              }
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(s.h), s.Mb(Tr), s.Mb(i.c), s.Mb(s.z), s.Mb(s.l), s.Mb(s.D), s.Mb(Ir, 8));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'ngbDropdown', '']],
              contentQueries: function(t, e, n) {
                var r;
                1 & t && (s.Fb(n, Mr, !0), s.Fb(n, Mr, !0, s.l), s.Fb(n, Rr, !0)),
                  2 & t &&
                    (s.rc((r = s.ec())) && (e._menu = r.first),
                    s.rc((r = s.ec())) && (e._menuElement = r.first),
                    s.rc((r = s.ec())) && (e._anchor = r.first));
              },
              hostVars: 2,
              hostBindings: function(t, e) {
                2 & t && s.Eb('show', e.isOpen());
              },
              inputs: {
                _open: ['open', '_open'],
                placement: 'placement',
                container: 'container',
                autoClose: 'autoClose',
                display: 'display'
              },
              outputs: { openChange: 'openChange' },
              exportAs: ['ngbDropdown'],
              features: [s.xb()]
            })),
            t
          );
        })(),
        Dr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        Vr = (() => {
          class t {
            constructor() {
              (this.backdrop = !0), (this.keyboard = !0);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            (t.ngInjectableDef = Object(s.Ib)({
              factory: function() {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })();
      class Lr {
        constructor(t, e, n) {
          (this.nodes = t), (this.viewRef = e), (this.componentRef = n);
        }
      }
      const Fr = () => {};
      let Hr = (() => {
          class t {
            constructor(t) {
              this._document = t;
            }
            compensate() {
              const t = this._getWidth();
              return this._isPresent(t) ? this._adjustBody(t) : Fr;
            }
            _adjustBody(t) {
              const e = this._document.body,
                n = e.style.paddingRight,
                r = parseFloat(window.getComputedStyle(e)['padding-right']);
              return (e.style['padding-right'] = `${r + t}px`), () => (e.style['padding-right'] = n);
            }
            _isPresent(t) {
              const e = this._document.body.getBoundingClientRect();
              return window.innerWidth - (e.left + e.right) >= t - 0.1 * t;
            }
            _getWidth() {
              const t = this._document.createElement('div');
              t.className = 'modal-scrollbar-measure';
              const e = this._document.body;
              e.appendChild(t);
              const n = t.getBoundingClientRect().width - t.clientWidth;
              return e.removeChild(t), n;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(i.c));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            (t.ngInjectableDef = Object(s.Ib)({
              factory: function() {
                return new t(Object(s.Zb)(i.c));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Ur = (() => {
          class t {}
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['ngb-modal-backdrop']],
              hostAttrs: [2, 'z-index', '1050'],
              hostVars: 2,
              hostBindings: function(t, e) {
                2 & t && s.Bb('modal-backdrop fade show' + (e.backdropClass ? ' ' + e.backdropClass : ''));
              },
              inputs: { backdropClass: 'backdropClass' },
              decls: 0,
              vars: 0,
              template: function(t, e) {},
              encapsulation: 2
            })),
            t
          );
        })();
      class $r {
        close(t) {}
        dismiss(t) {}
      }
      class Br {
        constructor(t, e, n, r) {
          (this._windowCmptRef = t),
            (this._contentRef = e),
            (this._backdropCmptRef = n),
            (this._beforeDismiss = r),
            t.instance.dismissEvent.subscribe(t => {
              this.dismiss(t);
            }),
            (this.result = new Promise((t, e) => {
              (this._resolve = t), (this._reject = e);
            })),
            this.result.then(null, () => {});
        }
        get componentInstance() {
          if (this._contentRef && this._contentRef.componentRef) return this._contentRef.componentRef.instance;
        }
        close(t) {
          this._windowCmptRef && (this._resolve(t), this._removeModalElements());
        }
        _dismiss(t) {
          this._reject(t), this._removeModalElements();
        }
        dismiss(t) {
          if (this._windowCmptRef)
            if (this._beforeDismiss) {
              const e = this._beforeDismiss();
              e && e.then
                ? e.then(
                    e => {
                      !1 !== e && this._dismiss(t);
                    },
                    () => {}
                  )
                : !1 !== e && this._dismiss(t);
            } else this._dismiss(t);
        }
        _removeModalElements() {
          const t = this._windowCmptRef.location.nativeElement;
          if ((t.parentNode.removeChild(t), this._windowCmptRef.destroy(), this._backdropCmptRef)) {
            const t = this._backdropCmptRef.location.nativeElement;
            t.parentNode.removeChild(t), this._backdropCmptRef.destroy();
          }
          this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(),
            (this._windowCmptRef = null),
            (this._backdropCmptRef = null),
            (this._contentRef = null);
        }
      }
      const zr = (function() {
        var t = { BACKDROP_CLICK: 0, ESC: 1 };
        return (t[t.BACKDROP_CLICK] = 'BACKDROP_CLICK'), (t[t.ESC] = 'ESC'), t;
      })();
      let qr = (() => {
          class t {
            constructor(t, e, n) {
              (this._document = t),
                (this._elRef = e),
                (this._zone = n),
                (this._closed$ = new Re.a()),
                (this.backdrop = !0),
                (this.keyboard = !0),
                (this.dismissEvent = new s.n());
            }
            dismiss(t) {
              this.dismissEvent.emit(t);
            }
            ngOnInit() {
              this._elWithFocus = this._document.activeElement;
            }
            ngAfterViewInit() {
              const { nativeElement: t } = this._elRef;
              if (
                (this._zone.runOutsideAngular(() => {
                  Te(t, 'keydown')
                    .pipe(
                      ir(this._closed$),
                      $t(t => t.which === vr.Escape && this.keyboard)
                    )
                    .subscribe(t =>
                      requestAnimationFrame(() => {
                        t.defaultPrevented || this._zone.run(() => this.dismiss(zr.ESC));
                      })
                    );
                  let e = !1;
                  Te(this._dialogEl.nativeElement, 'mousedown')
                    .pipe(
                      ir(this._closed$),
                      We(() => (e = !1)),
                      He(() => Te(t, 'mouseup').pipe(ir(this._closed$), qe(1))),
                      $t(({ target: e }) => t === e)
                    )
                    .subscribe(() => {
                      e = !0;
                    }),
                    Te(t, 'click')
                      .pipe(ir(this._closed$))
                      .subscribe(({ target: n }) => {
                        !0 !== this.backdrop || t !== n || e || this._zone.run(() => this.dismiss(zr.BACKDROP_CLICK)),
                          (e = !1);
                      });
                }),
                !t.contains(document.activeElement))
              ) {
                const e = t.querySelector('[ngbAutofocus]'),
                  n = xr(t)[0];
                (e || n || t).focus();
              }
            }
            ngOnDestroy() {
              const t = this._document.body,
                e = this._elWithFocus;
              let n;
              (n = e && e.focus && t.contains(e) ? e : t),
                this._zone.runOutsideAngular(() => {
                  setTimeout(() => n.focus()), (this._elWithFocus = null);
                }),
                this._closed$.next();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(i.c), s.Mb(s.l), s.Mb(s.z));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['ngb-modal-window']],
              viewQuery: function(t, e) {
                var n;
                1 & t && s.xc(dr, !0), 2 & t && s.rc((n = s.ec())) && (e._dialogEl = n.first);
              },
              hostAttrs: ['role', 'dialog', 'tabindex', '-1'],
              hostVars: 4,
              hostBindings: function(t, e) {
                2 & t &&
                  (s.Ab('aria-modal', !0)('aria-labelledby', e.ariaLabelledBy),
                  s.Bb('modal fade show d-block' + (e.windowClass ? ' ' + e.windowClass : '')));
              },
              inputs: {
                backdrop: 'backdrop',
                keyboard: 'keyboard',
                ariaLabelledBy: 'ariaLabelledBy',
                centered: 'centered',
                scrollable: 'scrollable',
                size: 'size',
                windowClass: 'windowClass'
              },
              outputs: { dismissEvent: 'dismiss' },
              ngContentSelectors: hr,
              decls: 4,
              vars: 2,
              consts: [
                ['role', 'document'],
                ['dialog', ''],
                [1, 'modal-content']
              ],
              template: function(t, e) {
                1 & t && (s.jc(), s.Rb(0, 'div', 0, 1), s.Rb(2, 'div', 2), s.ic(3), s.Qb(), s.Qb()),
                  2 & t &&
                    s.Bb(
                      'modal-dialog' +
                        (e.size ? ' modal-' + e.size : '') +
                        (e.centered ? ' modal-dialog-centered' : '') +
                        (e.scrollable ? ' modal-dialog-scrollable' : '')
                    );
              },
              styles: [
                'ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}'
              ],
              encapsulation: 2
            })),
            t
          );
        })(),
        Zr = (() => {
          class t {
            constructor(t, e, n, r, s, i) {
              (this._applicationRef = t),
                (this._injector = e),
                (this._document = n),
                (this._scrollBar = r),
                (this._rendererFactory = s),
                (this._ngZone = i),
                (this._activeWindowCmptHasChanged = new Re.a()),
                (this._ariaHiddenValues = new Map()),
                (this._backdropAttributes = ['backdropClass']),
                (this._modalRefs = []),
                (this._windowAttributes = [
                  'ariaLabelledBy',
                  'backdrop',
                  'centered',
                  'keyboard',
                  'scrollable',
                  'size',
                  'windowClass'
                ]),
                (this._windowCmpts = []),
                this._activeWindowCmptHasChanged.subscribe(() => {
                  if (this._windowCmpts.length) {
                    const t = this._windowCmpts[this._windowCmpts.length - 1];
                    ((t, e, n, r = !1) => {
                      this._ngZone.runOutsideAngular(() => {
                        const t = Te(e, 'focusin').pipe(
                          ir(n),
                          Object(l.a)(t => t.target)
                        );
                        Te(e, 'keydown')
                          .pipe(
                            ir(n),
                            $t(t => t.which === vr.Tab),
                            lr(t)
                          )
                          .subscribe(([t, n]) => {
                            const [r, s] = xr(e);
                            (n !== r && n !== e) || !t.shiftKey || (s.focus(), t.preventDefault()),
                              n !== s || t.shiftKey || (r.focus(), t.preventDefault());
                          }),
                          r &&
                            Te(e, 'click')
                              .pipe(
                                ir(n),
                                lr(t),
                                Object(l.a)(t => t[1])
                              )
                              .subscribe(t => t.focus());
                      });
                    })(0, t.location.nativeElement, this._activeWindowCmptHasChanged),
                      this._revertAriaHidden(),
                      this._setAriaHidden(t.location.nativeElement);
                  }
                });
            }
            open(t, e, n, r) {
              const s = pr(r.container) ? this._document.querySelector(r.container) : this._document.body,
                i = this._rendererFactory.createRenderer(null, null),
                o = this._scrollBar.compensate(),
                a = () => {
                  this._modalRefs.length ||
                    (i.removeClass(this._document.body, 'modal-open'), this._revertAriaHidden());
                };
              if (!s)
                throw new Error(`The specified modal container "${r.container || 'body'}" was not found in the DOM.`);
              const l = new $r(),
                c = this._getContentRef(t, r.injector || e, n, l, r);
              let u = !1 !== r.backdrop ? this._attachBackdrop(t, s) : null,
                h = this._attachWindowComponent(t, s, c),
                d = new Br(h, c, u, r.beforeDismiss);
              return (
                this._registerModalRef(d),
                this._registerWindowCmpt(h),
                d.result.then(o, o),
                d.result.then(a, a),
                (l.close = t => {
                  d.close(t);
                }),
                (l.dismiss = t => {
                  d.dismiss(t);
                }),
                this._applyWindowOptions(h.instance, r),
                1 === this._modalRefs.length && i.addClass(this._document.body, 'modal-open'),
                u && u.instance && this._applyBackdropOptions(u.instance, r),
                d
              );
            }
            dismissAll(t) {
              this._modalRefs.forEach(e => e.dismiss(t));
            }
            hasOpenModals() {
              return this._modalRefs.length > 0;
            }
            _attachBackdrop(t, e) {
              let n = t.resolveComponentFactory(Ur).create(this._injector);
              return this._applicationRef.attachView(n.hostView), e.appendChild(n.location.nativeElement), n;
            }
            _attachWindowComponent(t, e, n) {
              let r = t.resolveComponentFactory(qr).create(this._injector, n.nodes);
              return this._applicationRef.attachView(r.hostView), e.appendChild(r.location.nativeElement), r;
            }
            _applyWindowOptions(t, e) {
              this._windowAttributes.forEach(n => {
                pr(e[n]) && (t[n] = e[n]);
              });
            }
            _applyBackdropOptions(t, e) {
              this._backdropAttributes.forEach(n => {
                pr(e[n]) && (t[n] = e[n]);
              });
            }
            _getContentRef(t, e, n, r, i) {
              return n
                ? n instanceof s.K
                  ? this._createFromTemplateRef(n, r)
                  : 'string' == typeof n
                  ? this._createFromString(n)
                  : this._createFromComponent(t, e, n, r, i)
                : new Lr([]);
            }
            _createFromTemplateRef(t, e) {
              const n = t.createEmbeddedView({
                $implicit: e,
                close(t) {
                  e.close(t);
                },
                dismiss(t) {
                  e.dismiss(t);
                }
              });
              return this._applicationRef.attachView(n), new Lr([n.rootNodes], n);
            }
            _createFromString(t) {
              const e = this._document.createTextNode(`${t}`);
              return new Lr([[e]]);
            }
            _createFromComponent(t, e, n, r, i) {
              const o = t.resolveComponentFactory(n),
                a = s.r.create({ providers: [{ provide: $r, useValue: r }], parent: e }),
                l = o.create(a),
                c = l.location.nativeElement;
              return (
                i.scrollable && c.classList.add('component-host-scrollable'),
                this._applicationRef.attachView(l.hostView),
                new Lr([[c]], l.hostView, l)
              );
            }
            _setAriaHidden(t) {
              const e = t.parentElement;
              e &&
                t !== this._document.body &&
                (Array.from(e.children).forEach(e => {
                  e !== t &&
                    'SCRIPT' !== e.nodeName &&
                    (this._ariaHiddenValues.set(e, e.getAttribute('aria-hidden')),
                    e.setAttribute('aria-hidden', 'true'));
                }),
                this._setAriaHidden(e));
            }
            _revertAriaHidden() {
              this._ariaHiddenValues.forEach((t, e) => {
                t ? e.setAttribute('aria-hidden', t) : e.removeAttribute('aria-hidden');
              }),
                this._ariaHiddenValues.clear();
            }
            _registerModalRef(t) {
              const e = () => {
                const e = this._modalRefs.indexOf(t);
                e > -1 && this._modalRefs.splice(e, 1);
              };
              this._modalRefs.push(t), t.result.then(e, e);
            }
            _registerWindowCmpt(t) {
              this._windowCmpts.push(t),
                this._activeWindowCmptHasChanged.next(),
                t.onDestroy(() => {
                  const e = this._windowCmpts.indexOf(t);
                  e > -1 && (this._windowCmpts.splice(e, 1), this._activeWindowCmptHasChanged.next());
                });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(s.g), s.Zb(s.r), s.Zb(i.c), s.Zb(Hr), s.Zb(s.E), s.Zb(s.z));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            (t.ngInjectableDef = Object(s.Ib)({
              factory: function() {
                return new t(
                  Object(s.Zb)(s.g),
                  Object(s.Zb)(s.o),
                  Object(s.Zb)(i.c),
                  Object(s.Zb)(Hr),
                  Object(s.Zb)(s.E),
                  Object(s.Zb)(s.z)
                );
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Gr = (() => {
          class t {
            constructor(t, e, n, r) {
              (this._moduleCFR = t), (this._injector = e), (this._modalStack = n), (this._config = r);
            }
            open(t, e = {}) {
              const n = Object.assign({}, this._config, e);
              return this._modalStack.open(this._moduleCFR, this._injector, t, n);
            }
            dismissAll(t) {
              this._modalStack.dismissAll(t);
            }
            hasOpenModals() {
              return this._modalStack.hasOpenModals();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(s.j), s.Zb(s.r), s.Zb(Zr), s.Zb(Vr));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            (t.ngInjectableDef = Object(s.Ib)({
              factory: function() {
                return new t(Object(s.Zb)(s.j), Object(s.Zb)(s.o), Object(s.Zb)(Zr), Object(s.Zb)(Vr));
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        Wr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [Gr]
            })),
            t
          );
        })(),
        Kr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Qr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Jr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Yr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        Xr = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        ts = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, Kr]]
            })),
            t
          );
        })(),
        es = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        ns = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        rs = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })(),
        ss = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })();
      const is = [fr, gr, mr, br, yr, Ar, Dr, Wr, Kr, Qr, Jr, Yr, Xr, ts, es, ns, rs, ss];
      let os = (() => {
        class t {}
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)();
            },
            imports: [is, fr, gr, mr, br, yr, Ar, Dr, Wr, Kr, Qr, Jr, Yr, Xr, ts, es, ns, rs, ss]
          })),
          t
        );
      })();
      var as = n('AytR');
      const ls = (() => {
        function t() {
          return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      function cs(t = ds) {
        return e => e.lift(new us(t));
      }
      class us {
        constructor(t) {
          this.errorFactory = t;
        }
        call(t, e) {
          return e.subscribe(new hs(t, this.errorFactory));
        }
      }
      class hs extends Ut.a {
        constructor(t, e) {
          super(t), (this.errorFactory = e), (this.hasValue = !1);
        }
        _next(t) {
          (this.hasValue = !0), this.destination.next(t);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let e;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }
        }
      }
      function ds() {
        return new ls();
      }
      var ps = n('SpAZ');
      function fs(t, e) {
        const n = arguments.length >= 2;
        return r => r.pipe(t ? $t((e, n) => t(e, n, r)) : ps.a, Cn(1), n ? kn(e) : cs(() => new ls()));
      }
      function gs(t) {
        return function(e) {
          const n = new ms(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class ms {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new bs(t, this.selector, this.caught));
        }
      }
      class bs extends Ve.a {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new Le.a(this, void 0, void 0);
            this.add(r);
            const s = Object(Fe.a)(this, n, void 0, void 0, r);
            s !== r && this.add(s);
          }
        }
      }
      function ys(t, e) {
        const n = arguments.length >= 2;
        return r => r.pipe(t ? $t((e, n) => t(e, n, r)) : ps.a, qe(1), n ? kn(e) : cs(() => new ls()));
      }
      class vs {
        constructor(t, e, n) {
          (this.predicate = t), (this.thisArg = e), (this.source = n);
        }
        call(t, e) {
          return e.subscribe(new _s(t, this.predicate, this.thisArg, this.source));
        }
      }
      class _s extends Ut.a {
        constructor(t, e, n, r) {
          super(t),
            (this.predicate = e),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(t) {
          this.destination.next(t), this.destination.complete();
        }
        _next(t) {
          let e = !1;
          try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          e || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      class ws {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new Cs(t, this.callback));
        }
      }
      class Cs extends Ut.a {
        constructor(t, e) {
          super(t), this.add(new Je.a(e));
        }
      }
      class Ss {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class xs extends Ss {
        constructor(t, e, n = 'imperative', r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ks extends Ss {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Es extends Ss {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Os extends Ss {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class As extends Ss {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ts extends Ss {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Is extends Ss {
        constructor(t, e, n, r, s) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r), (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Ps extends Ss {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ms extends Ss {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Rs {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class js {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Ns {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Ds {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Vs {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Ls {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Fs {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let Hs = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵcmp = s.Gb({
            type: t,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function(t, e) {
              1 & t && s.Nb(0, 'router-outlet');
            },
            directives: function() {
              return [Go];
            },
            encapsulation: 2
          })),
          t
        );
      })();
      class Us {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return this.params.hasOwnProperty(t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function $s(t) {
        return new Us(t);
      }
      function Bs(t) {
        const e = Error('NavigationCancelingError: ' + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function zs(t, e, n) {
        const r = n.path.split('/');
        if (r.length > t.length) return null;
        if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const e = r[i],
            n = t[i];
          if (e.startsWith(':')) s[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: s };
      }
      class qs {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function Zs(t, e = '') {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          Gs(r, Ws(e, r));
        }
      }
      function Gs(t, e) {
        if (!t)
          throw new Error(
            `\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(t)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);
        if (!t.component && !t.children && !t.loadChildren && t.outlet && 'primary' !== t.outlet)
          throw new Error(
            `Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (t.redirectTo && t.children)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);
        if (t.redirectTo && t.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);
        if (t.children && t.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);
        if (t.redirectTo && t.component)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);
        if (t.path && t.matcher)
          throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);
        if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof t.path && '/' === t.path.charAt(0))
          throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);
        if ('' === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (void 0 !== t.pathMatch && 'full' !== t.pathMatch && 'prefix' !== t.pathMatch)
          throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
        t.children && Zs(t.children, e);
      }
      function Ws(t, e) {
        return e ? (t || e.path ? (t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}`) : '') : t;
      }
      function Ks(t) {
        const e = t.children && t.children.map(Ks),
          n = e ? Object.assign(Object.assign({}, t), { children: e }) : Object.assign({}, t);
        return !n.component && (e || n.loadChildren) && n.outlet && 'primary' !== n.outlet && (n.component = Hs), n;
      }
      function Qs(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++) if (((s = n[i]), !Js(t[s], e[s]))) return !1;
        return !0;
      }
      function Js(t, e) {
        return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every(t => e.indexOf(t) > -1) : t === e;
      }
      function Ys(t) {
        return Array.prototype.concat.apply([], t);
      }
      function Xs(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function ti(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function ei(t) {
        return Object(s.pb)(t) ? t : Object(s.qb)(t) ? Object(u.a)(Promise.resolve(t)) : Lt(t);
      }
      function ni(t, e, n) {
        return n
          ? (function(t, e) {
              return Qs(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!oi(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!e.children[r]) return !1;
                  if (!t(e.children[r], n.children[r])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function(t, e) {
              return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => Js(t[n], e[n]));
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, r, s) {
                  if (n.segments.length > s.length) return !!oi(n.segments.slice(0, s.length), s) && !r.hasChildren();
                  if (n.segments.length === s.length) {
                    if (!oi(n.segments, s)) return !1;
                    for (const e in r.children) {
                      if (!n.children[e]) return !1;
                      if (!t(n.children[e], r.children[e])) return !1;
                    }
                    return !0;
                  }
                  {
                    const t = s.slice(0, n.segments.length),
                      i = s.slice(n.segments.length);
                    return !!oi(n.segments, t) && !!n.children.primary && e(n.children.primary, r, i);
                  }
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      class ri {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = $s(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return ui.serialize(this);
        }
      }
      class si {
        constructor(t, e) {
          (this.segments = t), (this.children = e), (this.parent = null), ti(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return hi(this);
        }
      }
      class ii {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return this._parameterMap || (this._parameterMap = $s(this.parameters)), this._parameterMap;
        }
        toString() {
          return bi(this);
        }
      }
      function oi(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      function ai(t, e) {
        let n = [];
        return (
          ti(t.children, (t, r) => {
            'primary' === r && (n = n.concat(e(t, r)));
          }),
          ti(t.children, (t, r) => {
            'primary' !== r && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      class li {}
      class ci {
        parse(t) {
          const e = new Ci(t);
          return new ri(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
        }
        serialize(t) {
          var e;
          return `${`/${(function t(e, n) {
            if (!e.hasChildren()) return hi(e);
            if (n) {
              const n = e.children.primary ? t(e.children.primary, !1) : '',
                r = [];
              return (
                ti(e.children, (e, n) => {
                  'primary' !== n && r.push(`${n}:${t(e, !1)}`);
                }),
                r.length > 0 ? `${n}(${r.join('//')})` : n
              );
            }
            {
              const n = ai(e, (n, r) => ('primary' === r ? [t(e.children.primary, !1)] : [`${r}:${t(n, !1)}`]));
              return `${hi(e)}/(${n.join('//')})`;
            }
          })(t.root, !0)}`}${(function(t) {
            const e = Object.keys(t).map(e => {
              const n = t[e];
              return Array.isArray(n) ? n.map(t => `${pi(e)}=${pi(t)}`).join('&') : `${pi(e)}=${pi(n)}`;
            });
            return e.length ? `?${e.join('&')}` : '';
          })(t.queryParams)}${'string' == typeof t.fragment ? `#${((e = t.fragment), encodeURI(e))}` : ''}`;
        }
      }
      const ui = new ci();
      function hi(t) {
        return t.segments.map(t => bi(t)).join('/');
      }
      function di(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function pi(t) {
        return di(t).replace(/%3B/gi, ';');
      }
      function fi(t) {
        return di(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function gi(t) {
        return decodeURIComponent(t);
      }
      function mi(t) {
        return gi(t.replace(/\+/g, '%20'));
      }
      function bi(t) {
        return `${fi(t.path)}${((e = t.parameters),
        Object.keys(e)
          .map(t => `;${fi(t)}=${fi(e[t])}`)
          .join(''))}`;
        var e;
      }
      const yi = /^[^\/()?;=#]+/;
      function vi(t) {
        const e = t.match(yi);
        return e ? e[0] : '';
      }
      const _i = /^[^=?&#]+/,
        wi = /^[^?&#]+/;
      class Ci {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new si([], {})
              : new si([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          return t;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new si(t, e)),
            n
          );
        }
        parseSegment() {
          const t = vi(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(t), new ii(gi(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = vi(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = vi(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[gi(e)] = gi(n);
        }
        parseQueryParam(t) {
          const e = (function(t) {
            const e = t.match(_i);
            return e ? e[0] : '';
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = (function(t) {
              const e = t.match(wi);
              return e ? e[0] : '';
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = mi(e),
            s = mi(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(s);
          } else t[r] = s;
        }
        parseParens(t) {
          const e = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const n = vi(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r) throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(':') > -1
              ? ((s = n.substr(0, n.indexOf(':'))), this.capture(s), this.capture(':'))
              : t && (s = 'primary');
            const i = this.parseChildren();
            (e[s] = 1 === Object.keys(i).length ? i.primary : new si([], i)), this.consumeOptional('//');
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return !!this.peekStartsWith(t) && ((this.remaining = this.remaining.substring(t.length)), !0);
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class Si {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = xi(t, this._root);
          return e ? e.children.map(t => t.value) : [];
        }
        firstChild(t) {
          const e = xi(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = ki(t, this._root);
          return e.length < 2 ? [] : e[e.length - 2].children.map(t => t.value).filter(e => e !== t);
        }
        pathFromRoot(t) {
          return ki(t, this._root).map(t => t.value);
        }
      }
      function xi(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = xi(t, n);
          if (e) return e;
        }
        return null;
      }
      function ki(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = ki(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class Ei {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Oi(t) {
        const e = {};
        return t && t.children.forEach(t => (e[t.value.outlet] = t)), e;
      }
      class Ai extends Si {
        constructor(t, e) {
          super(t), (this.snapshot = e), ji(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function Ti(t, e) {
        const n = (function(t, e) {
            const n = new Mi([], {}, {}, '', {}, 'primary', e, null, t.root, -1, {});
            return new Ri('', new Ei(n, []));
          })(t, e),
          r = new Xn([new ii('', {})]),
          s = new Xn({}),
          i = new Xn({}),
          o = new Xn({}),
          a = new Xn(''),
          l = new Ii(r, s, o, a, i, 'primary', e, n.root);
        return (l.snapshot = n.root), new Ai(new Ei(l, []), n);
      }
      class Ii {
        constructor(t, e, n, r, s, i, o, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = this.params.pipe(Object(l.a)(t => $s(t)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Object(l.a)(t => $s(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Pi(t, e = 'emptyOnly') {
        const n = t.pathFromRoot;
        let r = 0;
        if ('always' !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && '' === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function(t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign(Object.assign({}, t.params), e.params),
              data: Object.assign(Object.assign({}, t.data), e.data),
              resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData)
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Mi {
        constructor(t, e, n, r, s, i, o, a, l, c, u) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = $s(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = $s(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map(t => t.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Ri extends Si {
        constructor(t, e) {
          super(e), (this.url = t), ji(this, e);
        }
        toString() {
          return Ni(this._root);
        }
      }
      function ji(t, e) {
        (e.value._routerState = t), e.children.forEach(e => ji(t, e));
      }
      function Ni(t) {
        const e = t.children.length > 0 ? ` { ${t.children.map(Ni).join(', ')} } ` : '';
        return `${t.value}${e}`;
      }
      function Di(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            Qs(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            Qs(e.params, n.params) || t.params.next(n.params),
            (function(t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!Qs(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            Qs(e.data, n.data) || t.data.next(n.data);
        } else (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function Vi(t, e) {
        var n, r;
        return (
          Qs(t.params, e.params) &&
          oi((n = t.url), (r = e.url)) &&
          n.every((t, e) => Qs(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || Vi(t.parent, e.parent))
        );
      }
      function Li(t) {
        return 'object' == typeof t && null != t && !t.outlets && !t.segmentPath;
      }
      function Fi(t, e, n, r, s) {
        let i = {};
        return (
          r &&
            ti(r, (t, e) => {
              i[e] = Array.isArray(t) ? t.map(t => `${t}`) : `${t}`;
            }),
          new ri(
            n.root === t
              ? e
              : (function t(e, n, r) {
                  const s = {};
                  return (
                    ti(e.children, (e, i) => {
                      s[i] = e === n ? r : t(e, n, r);
                    }),
                    new si(e.segments, s)
                  );
                })(n.root, t, e),
            i,
            s
          )
        );
      }
      class Hi {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t), (this.numberOfDoubleDots = e), (this.commands = n), t && n.length > 0 && Li(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find(t => 'object' == typeof t && null != t && t.outlets);
          if (r && r !== Xs(n)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Ui {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function $i(t) {
        return 'object' == typeof t && null != t && t.outlets ? t.outlets.primary : `${t}`;
      }
      function Bi(t, e, n) {
        if ((t || (t = new si([], {})), 0 === t.segments.length && t.hasChildren())) return zi(t, e, n);
        const r = (function(t, e, n) {
            let r = 0,
              s = e;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < t.segments.length; ) {
              if (r >= n.length) return i;
              const e = t.segments[s],
                o = $i(n[r]),
                a = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === o) break;
              if (o && a && 'object' == typeof a && void 0 === a.outlets) {
                if (!Wi(o, a, e)) return i;
                r += 2;
              } else {
                if (!Wi(o, {}, e)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(t, e, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new si(t.segments.slice(0, r.pathIndex), {});
          return (e.children.primary = new si(t.segments.slice(r.pathIndex), t.children)), zi(e, 0, s);
        }
        return r.match && 0 === s.length
          ? new si(t.segments, {})
          : r.match && !t.hasChildren()
          ? qi(t, e, n)
          : r.match
          ? zi(t, 0, s)
          : qi(t, e, n);
      }
      function zi(t, e, n) {
        if (0 === n.length) return new si(t.segments, {});
        {
          const r = (function(t) {
              return 'object' != typeof t[0] ? { primary: t } : void 0 === t[0].outlets ? { primary: t } : t[0].outlets;
            })(n),
            s = {};
          return (
            ti(r, (n, r) => {
              null !== n && (s[r] = Bi(t.children[r], e, n));
            }),
            ti(t.children, (t, e) => {
              void 0 === r[e] && (s[e] = t);
            }),
            new si(t.segments, s)
          );
        }
      }
      function qi(t, e, n) {
        const r = t.segments.slice(0, e);
        let s = 0;
        for (; s < n.length; ) {
          if ('object' == typeof n[s] && void 0 !== n[s].outlets) {
            const t = Zi(n[s].outlets);
            return new si(r, t);
          }
          if (0 === s && Li(n[0])) {
            r.push(new ii(t.segments[e].path, n[0])), s++;
            continue;
          }
          const i = $i(n[s]),
            o = s < n.length - 1 ? n[s + 1] : null;
          i && o && Li(o) ? (r.push(new ii(i, Gi(o))), (s += 2)) : (r.push(new ii(i, {})), s++);
        }
        return new si(r, {});
      }
      function Zi(t) {
        const e = {};
        return (
          ti(t, (t, n) => {
            null !== t && (e[n] = qi(new si([], {}), 0, t));
          }),
          e
        );
      }
      function Gi(t) {
        const e = {};
        return ti(t, (t, n) => (e[n] = `${t}`)), e;
      }
      function Wi(t, e, n) {
        return t == n.path && Qs(e, n.parameters);
      }
      class Ki {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t), (this.futureState = e), (this.currState = n), (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t), Di(this.futureState.root), this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = Oi(e);
          t.children.forEach(t => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            ti(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(t, e, s.children);
            } else this.deactivateChildRoutes(t, e, n);
          else s && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, { componentRef: e, route: t, contexts: r });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n) {
            const r = Oi(t),
              s = t.value.component ? n.children : e;
            ti(r, (t, e) => this.deactivateRouteAndItsChildren(t, s)),
              n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, e, n) {
          const r = Oi(e);
          t.children.forEach(t => {
            this.activateRoutes(t, r[t.value.outlet], n), this.forwardEvent(new Ls(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new Ds(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            s = e ? e.value : null;
          if ((Di(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, s.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                Qi(t.route);
            } else {
              const n = (function(t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = s),
                e.outlet && e.outlet.activateWith(r, s),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function Qi(t) {
        Di(t.value), t.children.forEach(Qi);
      }
      function Ji(t) {
        return 'function' == typeof t;
      }
      function Yi(t) {
        return t instanceof ri;
      }
      class Xi {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class to {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function eo(t) {
        return new o.a(e => e.error(new Xi(t)));
      }
      function no(t) {
        return new o.a(e => e.error(new to(t)));
      }
      function ro(t) {
        return new o.a(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)));
      }
      class so {
        constructor(t, e, n, r, i) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(s.x));
        }
        apply() {
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, 'primary')
            .pipe(Object(l.a)(t => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              gs(t => {
                if (t instanceof to) return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof Xi) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, 'primary')
            .pipe(Object(l.a)(e => this.createUrlTree(e, t.queryParams, t.fragment)))
            .pipe(
              gs(t => {
                if (t instanceof Xi) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`);
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new si([], { primary: t }) : t;
          return new ri(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(Object(l.a)(t => new si([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          return (function(t, e) {
            if (0 === Object.keys(t).length) return Lt({});
            const n = [],
              r = [],
              s = {};
            return (
              ti(t, (t, i) => {
                const o = e(i, t).pipe(Object(l.a)(t => (s[i] = t)));
                'primary' === i ? n.push(o) : r.push(o);
              }),
              Lt.apply(null, n.concat(r)).pipe(
                Pe(),
                fs(),
                Object(l.a)(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n));
        }
        expandSegment(t, e, n, r, s, i) {
          return Lt(...n).pipe(
            Object(l.a)(o =>
              this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(
                gs(t => {
                  if (t instanceof Xi) return Lt(null);
                  throw t;
                })
              )
            ),
            Pe(),
            ys(t => !!t),
            gs((t, n) => {
              if (t instanceof ls || 'EmptyError' === t.name) {
                if (this.noLeftoversInUrl(e, r, s)) return Lt(new si([], {}));
                throw new Xi(e);
              }
              throw t;
            })
          );
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
          return lo(r) !== i
            ? eo(e)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, r, s)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
            : eo(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? no(s)
            : this.lineralizeSegments(n, s).pipe(
                Object(Ft.a)(n => {
                  const s = new si(n, {});
                  return this.expandSegment(t, s, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
          const { matched: o, consumedSegments: a, lastChild: l, positionalParamSegments: c } = io(e, r, s);
          if (!o) return eo(e);
          const u = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith('/')
            ? no(u)
            : this.lineralizeSegments(r, u).pipe(
                Object(Ft.a)(r => this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1))
              );
        }
        matchSegmentAgainstRoute(t, e, n, r) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader.load(t.injector, n).pipe(Object(l.a)(t => ((n._loadedConfig = t), new si(r, {}))))
              : Lt(new si(r, {}));
          const { matched: s, consumedSegments: i, lastChild: o } = io(e, n, r);
          if (!s) return eo(e);
          const a = r.slice(o);
          return this.getChildConfig(t, n, r).pipe(
            Object(Ft.a)(t => {
              const n = t.module,
                r = t.routes,
                { segmentGroup: s, slicedSegments: o } = (function(t, e, n, r) {
                  return n.length > 0 &&
                    (function(t, e, n) {
                      return n.some(n => ao(t, e, n) && 'primary' !== lo(n));
                    })(t, n, r)
                    ? {
                        segmentGroup: oo(
                          new si(
                            e,
                            (function(t, e) {
                              const n = {};
                              n.primary = e;
                              for (const r of t) '' === r.path && 'primary' !== lo(r) && (n[lo(r)] = new si([], {}));
                              return n;
                            })(r, new si(n, t.children))
                          )
                        ),
                        slicedSegments: []
                      }
                    : 0 === n.length &&
                      (function(t, e, n) {
                        return n.some(n => ao(t, e, n));
                      })(t, n, r)
                    ? {
                        segmentGroup: oo(
                          new si(
                            t.segments,
                            (function(t, e, n, r) {
                              const s = {};
                              for (const i of n) ao(t, e, i) && !r[lo(i)] && (s[lo(i)] = new si([], {}));
                              return Object.assign(Object.assign({}, r), s);
                            })(t, n, r, t.children)
                          )
                        ),
                        slicedSegments: n
                      }
                    : { segmentGroup: t, slicedSegments: n };
                })(e, i, a, r);
              return 0 === o.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe(Object(l.a)(t => new si(i, t)))
                : 0 === r.length && 0 === o.length
                ? Lt(new si(i, {}))
                : this.expandSegment(n, s, r, o, 'primary', !0).pipe(
                    Object(l.a)(t => new si(i.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Lt(new qs(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Lt(e._loadedConfig)
              : (function(t, e, n) {
                  const r = e.canLoad;
                  return r && 0 !== r.length
                    ? Object(u.a)(r)
                        .pipe(
                          Object(l.a)(r => {
                            const s = t.get(r);
                            let i;
                            if (
                              (function(t) {
                                return t && Ji(t.canLoad);
                              })(s)
                            )
                              i = s.canLoad(e, n);
                            else {
                              if (!Ji(s)) throw new Error('Invalid CanLoad guard');
                              i = s(e, n);
                            }
                            return ei(i);
                          })
                        )
                        .pipe(Pe(), ((s = t => !0 === t), t => t.lift(new vs(s, void 0, t))))
                    : Lt(!0);
                  var s;
                })(t.injector, e, n).pipe(
                  Object(Ft.a)(n =>
                    n
                      ? this.configLoader.load(t.injector, e).pipe(Object(l.a)(t => ((e._loadedConfig = t), t)))
                      : (function(t) {
                          return new o.a(e =>
                            e.error(
                              Bs(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : Lt(new qs([], t));
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return Lt(n);
            if (r.numberOfChildren > 1 || !r.children.primary) return ro(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n);
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const s = this.createSegmentGroup(t, e.root, n, r);
          return new ri(s, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            ti(t, (t, r) => {
              if ('string' == typeof t && t.startsWith(':')) {
                const s = t.substring(1);
                n[r] = e[s];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const s = this.createSegments(t, e.segments, n, r);
          let i = {};
          return (
            ti(e.children, (e, s) => {
              i[s] = this.createSegmentGroup(t, e, n, r);
            }),
            new si(s, i)
          );
        }
        createSegments(t, e, n, r) {
          return e.map(e => (e.path.startsWith(':') ? this.findPosParam(t, e, r) : this.findOrReturn(e, n)));
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function io(t, e, n) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        const r = (e.matcher || zs)(n, t, e);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function oo(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary;
          return new si(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function ao(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 !== n.redirectTo
        );
      }
      function lo(t) {
        return t.outlet || 'primary';
      }
      class co {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class uo {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function ho(t, e, n) {
        const r = t._root;
        return (function t(e, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
          const o = Oi(n);
          return (
            e.children.forEach(e => {
              !(function(e, n, r, s, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
                const o = e.value,
                  a = n ? n.value : null,
                  l = r ? r.getContext(e.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const c = (function(t, e, n) {
                    if ('function' == typeof n) return n(t, e);
                    switch (n) {
                      case 'pathParamsChange':
                        return !oi(t.url, e.url);
                      case 'pathParamsOrQueryParamsChange':
                        return !oi(t.url, e.url) || !Qs(t.queryParams, e.queryParams);
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !Vi(t, e) || !Qs(t.queryParams, e.queryParams);
                      case 'paramsChange':
                      default:
                        return !Vi(t, e);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  c ? i.canActivateChecks.push(new co(s)) : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    t(e, n, o.component ? (l ? l.children : null) : r, s, i),
                    c && i.canDeactivateChecks.push(new uo((l && l.outlet && l.outlet.component) || null, a));
                } else
                  a && fo(n, l, i),
                    i.canActivateChecks.push(new co(s)),
                    t(e, null, o.component ? (l ? l.children : null) : r, s, i);
              })(e, o[e.value.outlet], r, s.concat([e.value]), i),
                delete o[e.value.outlet];
            }),
            ti(o, (t, e) => fo(t, r.getContext(e), i)),
            i
          );
        })(r, e ? e._root : null, n, [r.value]);
      }
      function po(t, e, n) {
        const r = (function(t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function fo(t, e, n) {
        const r = Oi(t),
          s = t.value;
        ti(r, (t, r) => {
          fo(t, s.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new uo(s.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, s)
          );
      }
      const go = Symbol('INITIAL_VALUE');
      function mo() {
        return He(t =>
          (function(...t) {
            let e = null,
              n = null;
            return (
              Object(Nt.a)(t[t.length - 1]) && (n = t.pop()),
              'function' == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && Object(a.a)(t[0]) && (t = t[0]),
              Object(Dt.a)(t, n).lift(new er(e))
            );
          })(
            ...t.map(t =>
              t.pipe(
                qe(1),
                (function(...t) {
                  const e = t[t.length - 1];
                  return Object(Nt.a)(e) ? (t.pop(), n => Me(t, n, e)) : e => Me(t, e);
                })(go)
              )
            )
          ).pipe(
            vn((t, e) => {
              let n = !1;
              return e.reduce((t, r, s) => {
                if (t !== go) return t;
                if ((r === go && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === e.length - 1 || Yi(r)) return r;
                }
                return t;
              }, t);
            }, go),
            $t(t => t !== go),
            Object(l.a)(t => (Yi(t) ? t : !0 === t)),
            qe(1)
          )
        );
      }
      function bo(t, e) {
        return null !== t && e && e(new Vs(t)), Lt(!0);
      }
      function yo(t, e) {
        return null !== t && e && e(new Ns(t)), Lt(!0);
      }
      function vo(t, e, n) {
        const r = e.routeConfig ? e.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Lt(
              r.map(r =>
                ke(() => {
                  const s = po(r, e, n);
                  let i;
                  if (
                    (function(t) {
                      return t && Ji(t.canActivate);
                    })(s)
                  )
                    i = ei(s.canActivate(e, t));
                  else {
                    if (!Ji(s)) throw new Error('Invalid CanActivate guard');
                    i = ei(s(e, t));
                  }
                  return i.pipe(ys());
                })
              )
            ).pipe(mo())
          : Lt(!0);
      }
      function _o(t, e, n) {
        const r = e[e.length - 1],
          s = e
            .slice(0, e.length - 1)
            .reverse()
            .map(t =>
              (function(t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t)
            )
            .filter(t => null !== t)
            .map(e =>
              ke(() =>
                Lt(
                  e.guards.map(s => {
                    const i = po(s, e.node, n);
                    let o;
                    if (
                      (function(t) {
                        return t && Ji(t.canActivateChild);
                      })(i)
                    )
                      o = ei(i.canActivateChild(r, t));
                    else {
                      if (!Ji(i)) throw new Error('Invalid CanActivateChild guard');
                      o = ei(i(r, t));
                    }
                    return o.pipe(ys());
                  })
                ).pipe(mo())
              )
            );
        return Lt(s).pipe(mo());
      }
      class wo {}
      class Co {
        constructor(t, e, n, r, s, i) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const t = ko(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
              e = this.processSegmentGroup(this.config, t, 'primary'),
              n = new Mi(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                'primary',
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new Ei(n, e),
              s = new Ri(this.url, r);
            return this.inheritParamsAndData(s._root), Lt(s);
          } catch (t) {
            return new o.a(e => e.error(t));
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = Pi(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach(t => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = ai(e, (e, n) => this.processSegmentGroup(t, e, n));
          return (
            (function(t) {
              const e = {};
              t.forEach(t => {
                const n = e[t.value.outlet];
                if (n) {
                  const e = n.url.map(t => t.toString()).join('/'),
                    r = t.value.url.map(t => t.toString()).join('/');
                  throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`);
                }
                e[t.value.outlet] = t.value;
              });
            })(n),
            n.sort((t, e) =>
              'primary' === t.value.outlet
                ? -1
                : 'primary' === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          );
        }
        processSegment(t, e, n, r) {
          for (const i of t)
            try {
              return this.processSegmentAgainstRoute(i, e, n, r);
            } catch (s) {
              if (!(s instanceof wo)) throw s;
            }
          if (this.noLeftoversInUrl(e, n, r)) return [];
          throw new wo();
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo) throw new wo();
          if ((t.outlet || 'primary') !== r) throw new wo();
          let s,
            i = [],
            o = [];
          if ('**' === t.path) {
            const i = n.length > 0 ? Xs(n).parameters : {};
            s = new Mi(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Ao(t),
              r,
              t.component,
              t,
              So(e),
              xo(e) + n.length,
              To(t)
            );
          } else {
            const a = (function(t, e, n) {
              if ('' === e.path) {
                if ('full' === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new wo();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (e.matcher || zs)(n, t, e);
              if (!r) throw new wo();
              const s = {};
              ti(r.posParams, (t, e) => {
                s[e] = t.path;
              });
              const i =
                r.consumed.length > 0
                  ? Object.assign(Object.assign({}, s), r.consumed[r.consumed.length - 1].parameters)
                  : s;
              return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: i };
            })(e, t, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (s = new Mi(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Ao(t),
                r,
                t.component,
                t,
                So(e),
                xo(e) + i.length,
                To(t)
              ));
          }
          const a = (function(t) {
              return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [];
            })(t),
            { segmentGroup: l, slicedSegments: c } = ko(e, i, o, a, this.relativeLinkResolution);
          if (0 === c.length && l.hasChildren()) {
            const t = this.processChildren(a, l);
            return [new Ei(s, t)];
          }
          if (0 === a.length && 0 === c.length) return [new Ei(s, [])];
          const u = this.processSegment(a, l, c, 'primary');
          return [new Ei(s, u)];
        }
      }
      function So(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function xo(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; ) (e = e._sourceSegment), (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function ko(t, e, n, r, s) {
        if (
          n.length > 0 &&
          (function(t, e, n) {
            return n.some(n => Eo(t, e, n) && 'primary' !== Oo(n));
          })(t, n, r)
        ) {
          const s = new si(
            e,
            (function(t, e, n, r) {
              const s = {};
              (s.primary = r), (r._sourceSegment = t), (r._segmentIndexShift = e.length);
              for (const i of n)
                if ('' === i.path && 'primary' !== Oo(i)) {
                  const n = new si([], {});
                  (n._sourceSegment = t), (n._segmentIndexShift = e.length), (s[Oo(i)] = n);
                }
              return s;
            })(t, e, r, new si(n, t.children))
          );
          return (s._sourceSegment = t), (s._segmentIndexShift = e.length), { segmentGroup: s, slicedSegments: [] };
        }
        if (
          0 === n.length &&
          (function(t, e, n) {
            return n.some(n => Eo(t, e, n));
          })(t, n, r)
        ) {
          const i = new si(
            t.segments,
            (function(t, e, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (Eo(t, n, a) && !s[Oo(a)]) {
                  const n = new si([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = 'legacy' === i ? t.segments.length : e.length),
                    (o[Oo(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(t, e, n, r, t.children, s)
          );
          return (i._sourceSegment = t), (i._segmentIndexShift = e.length), { segmentGroup: i, slicedSegments: n };
        }
        const i = new si(t.segments, t.children);
        return (i._sourceSegment = t), (i._segmentIndexShift = e.length), { segmentGroup: i, slicedSegments: n };
      }
      function Eo(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 === n.redirectTo
        );
      }
      function Oo(t) {
        return t.outlet || 'primary';
      }
      function Ao(t) {
        return t.data || {};
      }
      function To(t) {
        return t.resolve || {};
      }
      function Io(t, e, n, r) {
        const s = po(t, e, r);
        return ei(s.resolve ? s.resolve(e, n) : s(e, n));
      }
      function Po(t) {
        return function(e) {
          return e.pipe(
            He(e => {
              const n = t(e);
              return n ? Object(u.a)(n).pipe(Object(l.a)(() => e)) : Object(u.a)([e]);
            })
          );
        };
      }
      class Mo {}
      class Ro {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      }
      const jo = new s.q('ROUTES');
      class No {
        constructor(t, e, n, r) {
          (this.loader = t), (this.compiler = e), (this.onLoadStartListener = n), (this.onLoadEndListener = r);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              Object(l.a)(n => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const r = n.create(t);
                return new qs(Ys(r.injector.get(jo)).map(Ks), r);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return 'string' == typeof t
            ? Object(u.a)(this.loader.load(t))
            : ei(t()).pipe(
                Object(Ft.a)(t => (t instanceof s.v ? Lt(t) : Object(u.a)(this.compiler.compileModuleAsync(t))))
              );
        }
      }
      class Do {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function Vo(t) {
        throw t;
      }
      function Lo(t, e, n) {
        return e.parse('/');
      }
      function Fo(t, e) {
        return Lt(null);
      }
      let Ho = (() => {
          class t {
            constructor(t, e, n, r, i, o, a, l) {
              (this.rootComponentType = t),
                (this.urlSerializer = e),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = l),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new Re.a()),
                (this.errorHandler = Vo),
                (this.malformedUriErrorHandler = Lo),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = { beforePreactivation: Fo, afterPreactivation: Fo }),
                (this.urlHandlingStrategy = new Do()),
                (this.routeReuseStrategy = new Ro()),
                (this.onSameUrlNavigation = 'ignore'),
                (this.paramsInheritanceStrategy = 'emptyOnly'),
                (this.urlUpdateStrategy = 'deferred'),
                (this.relativeLinkResolution = 'legacy'),
                (this.ngModule = i.get(s.x)),
                (this.console = i.get(s.W));
              const c = i.get(s.z);
              (this.isNgZoneEnabled = c instanceof s.z),
                this.resetConfig(l),
                (this.currentUrlTree = new ri(new si([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new No(
                  o,
                  a,
                  t => this.triggerEvent(new Rs(t)),
                  t => this.triggerEvent(new js(t))
                )),
                (this.routerState = Ti(this.currentUrlTree, this.rootComponentType)),
                (this.transitions = new Xn({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: 'imperative',
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(t) {
              const e = this.events;
              return t.pipe(
                $t(t => 0 !== t.id),
                Object(l.a)(t =>
                  Object.assign(Object.assign({}, t), { extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl) })
                ),
                He(t => {
                  let n = !1,
                    r = !1;
                  return Lt(t).pipe(
                    We(t => {
                      this.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                              previousNavigation: null
                            })
                          : null
                      };
                    }),
                    He(t => {
                      const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
                      if (
                        ('reload' === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return Lt(t).pipe(
                          He(t => {
                            const n = this.transitions.getValue();
                            return (
                              e.next(new xs(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)),
                              n !== this.transitions.getValue() ? Se : [t]
                            );
                          }),
                          He(t => Promise.resolve(t)),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (o = this.config),
                          function(t) {
                            return t.pipe(
                              He(t =>
                                (function(t, e, n, r, s) {
                                  return new so(t, e, n, r, s).apply();
                                })(r, s, i, t.extractedUrl, o).pipe(
                                  Object(l.a)(e => Object.assign(Object.assign({}, t), { urlAfterRedirects: e }))
                                )
                              )
                            );
                          }),
                          We(t => {
                            this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                              finalUrl: t.urlAfterRedirects
                            });
                          }),
                          (function(t, e, n, r, s) {
                            return function(i) {
                              return i.pipe(
                                Object(Ft.a)(i =>
                                  (function(t, e, n, r, s = 'emptyOnly', i = 'legacy') {
                                    return new Co(t, e, n, r, s, i).recognize();
                                  })(t, e, i.urlAfterRedirects, n(i.urlAfterRedirects), r, s).pipe(
                                    Object(l.a)(t => Object.assign(Object.assign({}, i), { targetSnapshot: t }))
                                  )
                                )
                              );
                            };
                          })(
                            this.rootComponentType,
                            this.config,
                            t => this.serializeUrl(t),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          We(t => {
                            'eager' === this.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state),
                              (this.browserUrlTree = t.urlAfterRedirects));
                          }),
                          We(t => {
                            const n = new As(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.next(n);
                          })
                        );
                      var r, s, i, o;
                      if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                        const { id: n, extractedUrl: r, source: s, restoredState: i, extras: o } = t,
                          a = new xs(n, this.serializeUrl(r), s, i);
                        e.next(a);
                        const l = Ti(r, this.rootComponentType).snapshot;
                        return Lt(
                          Object.assign(Object.assign({}, t), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), { skipLocationChange: !1, replaceUrl: !1 })
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = t.rawUrl), (this.browserUrlTree = t.urlAfterRedirects), t.resolve(null), Se
                      );
                    }),
                    Po(t => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o }
                      } = t;
                      return this.hooks.beforePreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o
                      });
                    }),
                    We(t => {
                      const e = new Ts(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      this.triggerEvent(e);
                    }),
                    Object(l.a)(t =>
                      Object.assign(Object.assign({}, t), {
                        guards: ho(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
                      })
                    ),
                    (function(t, e) {
                      return function(n) {
                        return n.pipe(
                          Object(Ft.a)(n => {
                            const {
                              targetSnapshot: r,
                              currentSnapshot: s,
                              guards: { canActivateChecks: i, canDeactivateChecks: o }
                            } = n;
                            return 0 === o.length && 0 === i.length
                              ? Lt(Object.assign(Object.assign({}, n), { guardsResult: !0 }))
                              : (function(t, e, n, r) {
                                  return Object(u.a)(t).pipe(
                                    Object(Ft.a)(t =>
                                      (function(t, e, n, r, s) {
                                        const i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                        return i && 0 !== i.length
                                          ? Lt(
                                              i.map(i => {
                                                const o = po(i, e, s);
                                                let a;
                                                if (
                                                  (function(t) {
                                                    return t && Ji(t.canDeactivate);
                                                  })(o)
                                                )
                                                  a = ei(o.canDeactivate(t, e, n, r));
                                                else {
                                                  if (!Ji(o)) throw new Error('Invalid CanDeactivate guard');
                                                  a = ei(o(t, e, n, r));
                                                }
                                                return a.pipe(ys());
                                              })
                                            ).pipe(mo())
                                          : Lt(!0);
                                      })(t.component, t.route, n, e, r)
                                    ),
                                    ys(t => !0 !== t, !0)
                                  );
                                })(o, r, s, t).pipe(
                                  Object(Ft.a)(n =>
                                    n && 'boolean' == typeof n
                                      ? (function(t, e, n, r) {
                                          return Object(u.a)(e).pipe(
                                            Ht(e =>
                                              Object(u.a)([
                                                yo(e.route.parent, r),
                                                bo(e.route, r),
                                                _o(t, e.path, n),
                                                vo(t, e.route, n)
                                              ]).pipe(
                                                Pe(),
                                                ys(t => !0 !== t, !0)
                                              )
                                            ),
                                            ys(t => !0 !== t, !0)
                                          );
                                        })(r, i, t, e)
                                      : Lt(n)
                                  ),
                                  Object(l.a)(t => Object.assign(Object.assign({}, n), { guardsResult: t }))
                                );
                          })
                        );
                      };
                    })(this.ngModule.injector, t => this.triggerEvent(t)),
                    We(t => {
                      if (Yi(t.guardsResult)) {
                        const e = Bs(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
                        throw ((e.url = t.guardsResult), e);
                      }
                    }),
                    We(t => {
                      const e = new Is(
                        t.id,
                        this.serializeUrl(t.extractedUrl),
                        this.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      this.triggerEvent(e);
                    }),
                    $t(t => {
                      if (!t.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new Es(t.id, this.serializeUrl(t.extractedUrl), '');
                        return e.next(n), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    Po(t => {
                      if (t.guards.canActivateChecks.length)
                        return Lt(t).pipe(
                          We(t => {
                            const e = new Ps(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          }),
                          ((e = this.paramsInheritanceStrategy),
                          (n = this.ngModule.injector),
                          function(t) {
                            return t.pipe(
                              Object(Ft.a)(t => {
                                const {
                                  targetSnapshot: r,
                                  guards: { canActivateChecks: s }
                                } = t;
                                return s.length
                                  ? Object(u.a)(s).pipe(
                                      Ht(t =>
                                        (function(t, e, n, r) {
                                          return (function(t, e, n, r) {
                                            const s = Object.keys(t);
                                            if (0 === s.length) return Lt({});
                                            if (1 === s.length) {
                                              const i = s[0];
                                              return Io(t[i], e, n, r).pipe(Object(l.a)(t => ({ [i]: t })));
                                            }
                                            const i = {};
                                            return Object(u.a)(s)
                                              .pipe(
                                                Object(Ft.a)(s =>
                                                  Io(t[s], e, n, r).pipe(Object(l.a)(t => ((i[s] = t), t)))
                                                )
                                              )
                                              .pipe(
                                                fs(),
                                                Object(l.a)(() => i)
                                              );
                                          })(t._resolve, t, e, r).pipe(
                                            Object(l.a)(
                                              e => (
                                                (t._resolvedData = e),
                                                (t.data = Object.assign(Object.assign({}, t.data), Pi(t, n).resolve)),
                                                null
                                              )
                                            )
                                          );
                                        })(t.route, r, e, n)
                                      ),
                                      Tn((t, e) => t),
                                      Object(l.a)(e => t)
                                    )
                                  : Lt(t);
                              })
                            );
                          }),
                          We(t => {
                            const e = new Ms(
                              t.id,
                              this.serializeUrl(t.extractedUrl),
                              this.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            this.triggerEvent(e);
                          })
                        );
                      var e, n;
                    }),
                    Po(t => {
                      const {
                        targetSnapshot: e,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o }
                      } = t;
                      return this.hooks.afterPreactivation(e, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o
                      });
                    }),
                    Object(l.a)(t => {
                      const e = (function(t, e, n) {
                        const r = (function t(e, n, r) {
                          if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                            const s = r.value;
                            s._futureSnapshot = n.value;
                            const i = (function(e, n, r) {
                              return n.children.map(n => {
                                for (const s of r.children)
                                  if (e.shouldReuseRoute(s.value.snapshot, n.value)) return t(e, n, s);
                                return t(e, n);
                              });
                            })(e, n, r);
                            return new Ei(s, i);
                          }
                          {
                            const r = e.retrieve(n.value);
                            if (r) {
                              const t = r.route;
                              return (
                                (function t(e, n) {
                                  if (e.value.routeConfig !== n.value.routeConfig)
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                    );
                                  if (e.children.length !== n.children.length)
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                    );
                                  n.value._futureSnapshot = e.value;
                                  for (let r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r]);
                                })(n, t),
                                t
                              );
                            }
                            {
                              const r = new Ii(
                                  new Xn((s = n.value).url),
                                  new Xn(s.params),
                                  new Xn(s.queryParams),
                                  new Xn(s.fragment),
                                  new Xn(s.data),
                                  s.outlet,
                                  s.component,
                                  s
                                ),
                                i = n.children.map(n => t(e, n));
                              return new Ei(r, i);
                            }
                          }
                          var s;
                        })(t, e._root, n ? n._root : void 0);
                        return new Ai(r, e);
                      })(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                      return Object.assign(Object.assign({}, t), { targetRouterState: e });
                    }),
                    We(t => {
                      (this.currentUrlTree = t.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl)),
                        (this.routerState = t.targetRouterState),
                        'deferred' === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state),
                          (this.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((i = this.rootContexts),
                    (o = this.routeReuseStrategy),
                    (a = t => this.triggerEvent(t)),
                    Object(l.a)(t => (new Ki(o, t.targetRouterState, t.currentRouterState, a).activate(i), t))),
                    We({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      }
                    }),
                    ((s = () => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new Es(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        e.next(n), t.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    t => t.lift(new ws(s))),
                    gs(n => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = Yi(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                        const s = new Es(t.id, this.serializeUrl(t.extractedUrl), n.message);
                        e.next(s),
                          r
                            ? setTimeout(() => {
                                const e = this.urlHandlingStrategy.merge(n.url, this.rawUrlTree);
                                return this.scheduleNavigation(
                                  e,
                                  'imperative',
                                  null,
                                  {
                                    skipLocationChange: t.extras.skipLocationChange,
                                    replaceUrl: 'eager' === this.urlUpdateStrategy
                                  },
                                  { resolve: t.resolve, reject: t.reject, promise: t.promise }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                        const r = new Os(t.id, this.serializeUrl(t.extractedUrl), n);
                        e.next(r);
                        try {
                          t.resolve(this.errorHandler(n));
                        } catch (i) {
                          t.reject(i);
                        }
                      }
                      var s;
                      return Se;
                    })
                  );
                  var s, i, o, a;
                })
              );
            }
            resetRootComponentType(t) {
              (this.rootComponentType = t), (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }
            setTransition(t) {
              this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t));
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe(t => {
                  let e = this.parseUrl(t.url);
                  const n = 'popstate' === t.type ? 'popstate' : 'hashchange',
                    r = t.state && t.state.navigationId ? t.state : null;
                  setTimeout(() => {
                    this.scheduleNavigation(e, n, r, { replaceUrl: !0 });
                  }, 0);
                }));
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(t) {
              this.events.next(t);
            }
            resetConfig(t) {
              Zs(t), (this.config = t.map(Ks)), (this.navigated = !1), (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
            }
            createUrlTree(t, e = {}) {
              const {
                relativeTo: n,
                queryParams: r,
                fragment: i,
                preserveQueryParams: o,
                queryParamsHandling: a,
                preserveFragment: l
              } = e;
              Object(s.T)() &&
                o &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
              const c = n || this.routerState.root,
                u = l ? this.currentUrlTree.fragment : i;
              let h = null;
              if (a)
                switch (a) {
                  case 'merge':
                    h = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
                    break;
                  case 'preserve':
                    h = this.currentUrlTree.queryParams;
                    break;
                  default:
                    h = r || null;
                }
              else h = o ? this.currentUrlTree.queryParams : r || null;
              return (
                null !== h && (h = this.removeEmptyProps(h)),
                (function(t, e, n, r, s) {
                  if (0 === n.length) return Fi(e.root, e.root, e, r, s);
                  const i = (function(t) {
                    if ('string' == typeof t[0] && 1 === t.length && '/' === t[0]) return new Hi(!0, 0, t);
                    let e = 0,
                      n = !1;
                    const r = t.reduce((t, r, s) => {
                      if ('object' == typeof r && null != r) {
                        if (r.outlets) {
                          const e = {};
                          return (
                            ti(r.outlets, (t, n) => {
                              e[n] = 'string' == typeof t ? t.split('/') : t;
                            }),
                            [...t, { outlets: e }]
                          );
                        }
                        if (r.segmentPath) return [...t, r.segmentPath];
                      }
                      return 'string' != typeof r
                        ? [...t, r]
                        : 0 === s
                        ? (r.split('/').forEach((r, s) => {
                            (0 == s && '.' === r) ||
                              (0 == s && '' === r ? (n = !0) : '..' === r ? e++ : '' != r && t.push(r));
                          }),
                          t)
                        : [...t, r];
                    }, []);
                    return new Hi(n, e, r);
                  })(n);
                  if (i.toRoot()) return Fi(e.root, new si([], {}), e, r, s);
                  const o = (function(t, e, n) {
                      if (t.isAbsolute) return new Ui(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) return new Ui(n.snapshot._urlSegment, !0, 0);
                      const r = Li(t.commands[0]) ? 0 : 1;
                      return (function(t, e, n) {
                        let r = t,
                          s = e,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r)) throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new Ui(r, !1, s - i);
                      })(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots);
                    })(i, e, t),
                    a = o.processChildren
                      ? zi(o.segmentGroup, o.index, i.commands)
                      : Bi(o.segmentGroup, o.index, i.commands);
                  return Fi(o.segmentGroup, a, e, r, s);
                })(c, this.currentUrlTree, t, h, u)
              );
            }
            navigateByUrl(t, e = { skipLocationChange: !1 }) {
              Object(s.T)() &&
                this.isNgZoneEnabled &&
                !s.z.isInAngularZone() &&
                this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
              const n = Yi(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, 'imperative', null, e);
            }
            navigate(t, e = { skipLocationChange: !1 }) {
              return (
                (function(t) {
                  for (let e = 0; e < t.length; e++) {
                    const n = t[e];
                    if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`);
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              let e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }
            isActive(t, e) {
              if (Yi(t)) return ni(this.currentUrlTree, t, e);
              const n = this.parseUrl(t);
              return ni(this.currentUrlTree, n, e);
            }
            removeEmptyProps(t) {
              return Object.keys(t).reduce((e, n) => {
                const r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                t => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = t.id),
                    this.events.next(
                      new ks(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    (this.currentNavigation = null),
                    t.resolve(!0);
                },
                t => {
                  this.console.warn('Unhandled Navigation Error: ');
                }
              );
            }
            scheduleNavigation(t, e, n, r, s) {
              const i = this.getTransition();
              if (i && 'imperative' !== e && 'imperative' === i.source && i.rawUrl.toString() === t.toString())
                return Promise.resolve(!0);
              if (i && 'hashchange' == e && 'popstate' === i.source && i.rawUrl.toString() === t.toString())
                return Promise.resolve(!0);
              if (i && 'popstate' == e && 'hashchange' === i.source && i.rawUrl.toString() === t.toString())
                return Promise.resolve(!0);
              let o, a, l;
              s
                ? ((o = s.resolve), (a = s.reject), (l = s.promise))
                : (l = new Promise((t, e) => {
                    (o = t), (a = e);
                  }));
              const c = ++this.navigationId;
              return (
                this.setTransition({
                  id: c,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: o,
                  reject: a,
                  promise: l,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState
                }),
                l.catch(t => Promise.reject(t))
              );
            }
            setBrowserUrl(t, e, n, r) {
              const s = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || e
                  ? this.location.replaceState(s, '', Object.assign(Object.assign({}, r), { navigationId: n }))
                  : this.location.go(s, '', Object.assign(Object.assign({}, r), { navigationId: n }));
            }
            resetStateAndUrl(t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
                navigationId: this.lastSuccessfulId
              });
            }
          }
          return (
            (t.ɵfac = function(t) {
              s.cc();
            }),
            (t.ɵdir = s.Hb({ type: t })),
            t
          );
        })(),
        Uo = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.route = e),
                (this.commands = []),
                null == n && r.setAttribute(s.nativeElement, 'tabindex', '0');
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Object(s.T)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.'),
                (this.preserve = t);
            }
            onClick() {
              const t = { skipLocationChange: Bo(this.skipLocationChange), replaceUrl: Bo(this.replaceUrl) };
              return this.router.navigateByUrl(this.urlTree, t), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Bo(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Bo(this.preserveFragment)
              });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Ho), s.Mb(Ii), s.ac('tabindex'), s.Mb(s.D), s.Mb(s.l));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'routerLink', '', 5, 'a', 5, 'area']],
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('click', function(t) {
                    return e.onClick();
                  });
              },
              inputs: {
                routerLink: 'routerLink',
                preserveQueryParams: 'preserveQueryParams',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                state: 'state'
              }
            })),
            t
          );
        })(),
        $o = (() => {
          class t {
            constructor(t, e, n) {
              (this.router = t),
                (this.route = e),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.subscription = t.events.subscribe(t => {
                  t instanceof ks && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(t) {
              this.commands = null != t ? (Array.isArray(t) ? t : [t]) : [];
            }
            set preserveQueryParams(t) {
              Object(s.T)() &&
                console &&
                console.warn &&
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.'),
                (this.preserve = t);
            }
            ngOnChanges(t) {
              this.updateTargetUrlAndHref();
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(t, e, n, r) {
              if (0 !== t || e || n || r) return !0;
              if ('string' == typeof this.target && '_self' != this.target) return !0;
              const s = {
                skipLocationChange: Bo(this.skipLocationChange),
                replaceUrl: Bo(this.replaceUrl),
                state: this.state
              };
              return this.router.navigateByUrl(this.urlTree, s), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: Bo(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Bo(this.preserveFragment)
              });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Ho), s.Mb(Ii), s.Mb(i.h));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [
                ['a', 'routerLink', ''],
                ['area', 'routerLink', '']
              ],
              hostVars: 2,
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('click', function(t) {
                    return e.onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey);
                  }),
                  2 & t && (s.Ub('href', e.href, s.uc), s.Ab('target', e.target));
              },
              inputs: {
                routerLink: 'routerLink',
                preserveQueryParams: 'preserveQueryParams',
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                state: 'state'
              },
              features: [s.xb()]
            })),
            t
          );
        })();
      function Bo(t) {
        return '' === t || !!t;
      }
      let zo = (() => {
        class t {
          constructor(t, e, n, r, s) {
            (this.router = t),
              (this.element = e),
              (this.renderer = n),
              (this.link = r),
              (this.linkWithHref = s),
              (this.classes = []),
              (this.isActive = !1),
              (this.routerLinkActiveOptions = { exact: !1 }),
              (this.subscription = t.events.subscribe(t => {
                t instanceof ks && this.update();
              }));
          }
          ngAfterContentInit() {
            this.links.changes.subscribe(t => this.update()),
              this.linksWithHrefs.changes.subscribe(t => this.update()),
              this.update();
          }
          set routerLinkActive(t) {
            const e = Array.isArray(t) ? t : t.split(' ');
            this.classes = e.filter(t => !!t);
          }
          ngOnChanges(t) {
            this.update();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          update() {
            this.links &&
              this.linksWithHrefs &&
              this.router.navigated &&
              Promise.resolve().then(() => {
                const t = this.hasActiveLinks();
                this.isActive !== t &&
                  ((this.isActive = t),
                  this.classes.forEach(e => {
                    t
                      ? this.renderer.addClass(this.element.nativeElement, e)
                      : this.renderer.removeClass(this.element.nativeElement, e);
                  }));
              });
          }
          isLinkActive(t) {
            return e => t.isActive(e.urlTree, this.routerLinkActiveOptions.exact);
          }
          hasActiveLinks() {
            const t = this.isLinkActive(this.router);
            return (
              (this.link && t(this.link)) ||
              (this.linkWithHref && t(this.linkWithHref)) ||
              this.links.some(t) ||
              this.linksWithHrefs.some(t)
            );
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(Ho), s.Mb(s.l), s.Mb(s.D), s.Mb(Uo, 8), s.Mb($o, 8));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['', 'routerLinkActive', '']],
            contentQueries: function(t, e, n) {
              var r;
              1 & t && (s.Fb(n, Uo, !0), s.Fb(n, $o, !0)),
                2 & t && (s.rc((r = s.ec())) && (e.links = r), s.rc((r = s.ec())) && (e.linksWithHrefs = r));
            },
            inputs: { routerLinkActiveOptions: 'routerLinkActiveOptions', routerLinkActive: 'routerLinkActive' },
            exportAs: ['routerLinkActive'],
            features: [s.xb()]
          })),
          t
        );
      })();
      class qo {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Zo()),
            (this.attachRef = null);
        }
      }
      class Zo {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new qo()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      let Go = (() => {
        class t {
          constructor(t, e, n, r, i) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = i),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new s.n()),
              (this.deactivateEvents = new s.n()),
              (this.name = r || 'primary'),
              t.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const t = this.parentContexts.getContext(this.name);
              t &&
                t.route &&
                (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new Error('Outlet is not activated');
            this.location.detach();
            const t = this.activated;
            return (this.activated = null), (this._activatedRoute = null), t;
          }
          attach(t, e) {
            (this.activated = t), (this._activatedRoute = e), this.location.insert(t.hostView);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, e) {
            if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = t;
            const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              s = new Wo(t, r, this.location.injector);
            (this.activated = this.location.createComponent(n, this.location.length, s)),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(Zo), s.Mb(s.N), s.Mb(s.j), s.ac('name'), s.Mb(s.h));
          }),
          (t.ɵdir = s.Hb({
            type: t,
            selectors: [['router-outlet']],
            outputs: { activateEvents: 'activate', deactivateEvents: 'deactivate' },
            exportAs: ['outlet']
          })),
          t
        );
      })();
      class Wo {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === Ii ? this.route : t === Zo ? this.childContexts : this.parent.get(t, e);
        }
      }
      class Ko {}
      class Qo {
        preload(t, e) {
          return Lt(null);
        }
      }
      let Jo = (() => {
          class t {
            constructor(t, e, n, r, s) {
              (this.router = t),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new No(
                  e,
                  n,
                  e => t.triggerEvent(new Rs(e)),
                  e => t.triggerEvent(new js(e))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  $t(t => t instanceof ks),
                  Ht(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const t = this.injector.get(s.x);
              return this.processRoutes(t, this.router.config);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            processRoutes(t, e) {
              const n = [];
              for (const r of e)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const t = r._loadedConfig;
                  n.push(this.processRoutes(t.module, t.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(t, r))
                    : r.children && n.push(this.processRoutes(t, r.children));
              return Object(u.a)(n).pipe(
                Object(Ie.a)(),
                Object(l.a)(t => {})
              );
            }
            preloadConfig(t, e) {
              return this.preloadingStrategy.preload(e, () =>
                this.loader
                  .load(t.injector, e)
                  .pipe(Object(Ft.a)(t => ((e._loadedConfig = t), this.processRoutes(t.module, t.routes))))
              );
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Ho), s.Zb(s.w), s.Zb(s.i), s.Zb(s.r), s.Zb(Ko));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Yo = (() => {
          class t {
            constructor(t, e, n = {}) {
              (this.router = t),
                (this.viewportScroller = e),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = 'imperative'),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration = n.scrollPositionRestoration || 'disabled'),
                (n.anchorScrolling = n.anchorScrolling || 'disabled');
            }
            init() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe(t => {
                t instanceof xs
                  ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = t.navigationTrigger),
                    (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
                  : t instanceof ks &&
                    ((this.lastId = t.id),
                    this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe(t => {
                t instanceof Fs &&
                  (t.position
                    ? 'top' === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(t.position)
                    : t.anchor && 'enabled' === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(t.anchor)
                    : 'disabled' !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(t, e) {
              this.router.triggerEvent(
                new Fs(t, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, e)
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (t.ɵfac = function(t) {
              s.cc();
            }),
            (t.ɵdir = s.Hb({ type: t })),
            t
          );
        })();
      const Xo = new s.q('ROUTER_CONFIGURATION'),
        ta = new s.q('ROUTER_FORROOT_GUARD'),
        ea = [
          i.g,
          { provide: li, useClass: ci },
          {
            provide: Ho,
            useFactory: function(t, e, n, r, s, o, a, l, c = {}, u, h) {
              const d = new Ho(null, e, n, r, s, o, a, Ys(l));
              if (
                (u && (d.urlHandlingStrategy = u),
                h && (d.routeReuseStrategy = h),
                c.errorHandler && (d.errorHandler = c.errorHandler),
                c.malformedUriErrorHandler && (d.malformedUriErrorHandler = c.malformedUriErrorHandler),
                c.enableTracing)
              ) {
                const t = Object(i.w)();
                d.events.subscribe(e => {
                  t.logGroup(`Router Event: ${e.constructor.name}`), t.log(e.toString()), t.log(e), t.logGroupEnd();
                });
              }
              return (
                c.onSameUrlNavigation && (d.onSameUrlNavigation = c.onSameUrlNavigation),
                c.paramsInheritanceStrategy && (d.paramsInheritanceStrategy = c.paramsInheritanceStrategy),
                c.urlUpdateStrategy && (d.urlUpdateStrategy = c.urlUpdateStrategy),
                c.relativeLinkResolution && (d.relativeLinkResolution = c.relativeLinkResolution),
                d
              );
            },
            deps: [s.g, li, Zo, i.g, s.r, s.w, s.i, jo, Xo, [class {}, new s.A()], [Mo, new s.A()]]
          },
          Zo,
          {
            provide: Ii,
            useFactory: function(t) {
              return t.routerState.root;
            },
            deps: [Ho]
          },
          { provide: s.w, useClass: s.J },
          Jo,
          Qo,
          class {
            preload(t, e) {
              return e().pipe(gs(() => Lt(null)));
            }
          },
          { provide: Xo, useValue: { enableTracing: !1 } }
        ];
      function na() {
        return new s.y('Router', Ho);
      }
      let ra = (() => {
        class t {
          constructor(t, e) {}
          static forRoot(e, n) {
            return {
              ngModule: t,
              providers: [
                ea,
                aa(e),
                { provide: ta, useFactory: oa, deps: [[Ho, new s.A(), new s.I()]] },
                { provide: Xo, useValue: n || {} },
                { provide: i.h, useFactory: ia, deps: [i.m, [new s.p(i.a), new s.A()], Xo] },
                { provide: Yo, useFactory: sa, deps: [Ho, i.o, Xo] },
                { provide: Ko, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Qo },
                { provide: s.y, multi: !0, useFactory: na },
                [
                  la,
                  { provide: s.d, multi: !0, useFactory: ca, deps: [la] },
                  { provide: ha, useFactory: ua, deps: [la] },
                  { provide: s.b, multi: !0, useExisting: ha }
                ]
              ]
            };
          }
          static forChild(e) {
            return { ngModule: t, providers: [aa(e)] };
          }
        }
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)(s.Zb(ta, 8), s.Zb(Ho, 8));
            }
          })),
          t
        );
      })();
      function sa(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Yo(t, e, n);
      }
      function ia(t, e, n = {}) {
        return n.useHash ? new i.e(t, e) : new i.l(t, e);
      }
      function oa(t) {
        if (t)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function aa(t) {
        return [
          { provide: s.a, multi: !0, useValue: t },
          { provide: jo, multi: !0, useValue: t }
        ];
      }
      let la = (() => {
        class t {
          constructor(t) {
            (this.injector = t), (this.initNavigation = !1), (this.resultOfPreactivationDone = new Re.a());
          }
          appInitializer() {
            return this.injector.get(i.f, Promise.resolve(null)).then(() => {
              let t = null;
              const e = new Promise(e => (t = e)),
                n = this.injector.get(Ho),
                r = this.injector.get(Xo);
              if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) t(!0);
              else if ('disabled' === r.initialNavigation) n.setUpLocationChangeListener(), t(!0);
              else {
                if ('enabled' !== r.initialNavigation)
                  throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
                (n.hooks.afterPreactivation = () =>
                  this.initNavigation ? Lt(null) : ((this.initNavigation = !0), t(!0), this.resultOfPreactivationDone)),
                  n.initialNavigation();
              }
              return e;
            });
          }
          bootstrapListener(t) {
            const e = this.injector.get(Xo),
              n = this.injector.get(Jo),
              r = this.injector.get(Yo),
              i = this.injector.get(Ho),
              o = this.injector.get(s.g);
            t === o.components[0] &&
              (this.isLegacyEnabled(e)
                ? i.initialNavigation()
                : this.isLegacyDisabled(e) && i.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              i.resetRootComponentType(o.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          isLegacyEnabled(t) {
            return (
              'legacy_enabled' === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
            );
          }
          isLegacyDisabled(t) {
            return 'legacy_disabled' === t.initialNavigation || !1 === t.initialNavigation;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(s.r));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function ca(t) {
        return t.appInitializer.bind(t);
      }
      function ua(t) {
        return t.bootstrapListener.bind(t);
      }
      const ha = new s.q('Router Initializer');
      let da = (() => {
        class t extends Mo {
          shouldDetach(t) {
            return !1;
          }
          store(t, e) {}
          shouldAttach(t) {
            return !1;
          }
          retrieve(t) {
            return null;
          }
          shouldReuseRoute(t, e) {
            return t.routeConfig === e.routeConfig || t.data.reuse;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return pa(e || t);
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const pa = s.Tb(da);
      let fa = (() => {
          class t {
            sendPayment(t) {
              return this.isRequestSuccess
                ? Lt(new se({ status: 200, body: t }))
                : Ee(new ie({ status: 502, statusText: 'Bad Gateway' }));
            }
            get isRequestSuccess() {
              return 1 === Math.round(Math.random());
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        ga = (() => {
          class t {
            constructor(t) {
              if (t) throw new Error(`${t} has already been loaded. Import Core module in the AppModule only.`);
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)(s.Zb(t, 12));
              },
              providers: [fa, { provide: Mo, useClass: da }],
              imports: [[i.b, Jn, ra]]
            })),
            t
          );
        })();
      var ma = (function(t) {
        return (
          (t[(t.Off = 0)] = 'Off'),
          (t[(t.Error = 1)] = 'Error'),
          (t[(t.Warning = 2)] = 'Warning'),
          (t[(t.Info = 3)] = 'Info'),
          (t[(t.Debug = 4)] = 'Debug'),
          t
        );
      })({});
      let ba = (() => {
        class t {
          constructor(t) {
            this.source = t;
          }
          static enableProductionMode() {
            t.level = ma.Warning;
          }
          debug(...t) {
            this.log(console.log, ma.Debug, t);
          }
          info(...t) {
            this.log(console.info, ma.Info, t);
          }
          warn(...t) {
            this.log(console.warn, ma.Warning, t);
          }
          error(...t) {
            this.log(console.error, ma.Error, t);
          }
          log(e, n, r) {
            if (n <= t.level) {
              const s = this.source ? ['[' + this.source + ']'].concat(r) : r;
              e.apply(console, s), t.outputs.forEach(t => t.apply(t, [this.source, n, ...r]));
            }
          }
        }
        return (t.level = ma.Debug), (t.outputs = []), t;
      })();
      var ya = n('A/Ql'),
        va = n('wywo');
      const _a = new ba('I18nService');
      let wa = (() => {
        class t {
          constructor(t) {
            (this.translateService = t), t.setTranslation('en-US', ya), t.setTranslation('ru-RU', va);
          }
          init(t, e) {
            (this.defaultLanguage = t),
              (this.supportedLanguages = e),
              (this.language = ''),
              (this.langChangeSubscription = this.translateService.onLangChange.subscribe(t => {
                localStorage.setItem('language', t.lang);
              }));
          }
          destroy() {
            this.langChangeSubscription && this.langChangeSubscription.unsubscribe();
          }
          set language(t) {
            t = t || localStorage.getItem('language') || this.translateService.getBrowserCultureLang();
            let e = this.supportedLanguages.includes(t);
            t &&
              !e &&
              ((t = t.split('-')[0]), (t = this.supportedLanguages.find(e => e.startsWith(t)) || ''), (e = Boolean(t))),
              e || (t = this.defaultLanguage),
              _a.debug(`Language set to ${t}`),
              this.translateService.use(t);
          }
          get language() {
            return this.translateService.currentLang;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(Wn));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
      const Ca = Symbol('untilDestroyed');
      let Sa = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b]]
            })),
            t
          );
        })(),
        xa = (() => {
          class t {}
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-loader']],
              decls: 2,
              vars: 0,
              consts: [[1, 'fas', 'fa-cog', 'fa-spin', 'fa-3x', 'text-light']],
              template: function(t, e) {
                1 & t && (s.Nb(0, 'i', 0), s.Bc(1, '\n'));
              },
              styles: [
                '[_nghost-%COMP%]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.fa[_ngcontent-%COMP%]{vertical-align:middle}'
              ],
              changeDetection: 0
            })),
            t
          );
        })(),
        ka = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[i.b, Jn, os, ra, Sa]]
            })),
            t
          );
        })();
      const Ea = new s.q('config'),
        Oa = new s.q('NEW_CONFIG'),
        Aa = new s.q('INITIAL_CONFIG'),
        Ta = {
          suffix: '',
          prefix: '',
          thousandSeparator: ' ',
          decimalMarker: '.',
          clearIfNotMatch: !1,
          showTemplate: !1,
          showMaskTyped: !1,
          placeHolderCharacter: '_',
          dropSpecialCharacters: !0,
          hiddenInput: void 0,
          shownMaskExpression: '',
          separatorLimit: '',
          validation: !0,
          specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
          patterns: {
            0: { pattern: new RegExp('\\d') },
            9: { pattern: new RegExp('\\d'), optional: !0 },
            X: { pattern: new RegExp('\\d'), symbol: '*' },
            A: { pattern: new RegExp('[a-zA-Z0-9]') },
            S: { pattern: new RegExp('[a-zA-Z]') },
            d: { pattern: new RegExp('\\d') },
            m: { pattern: new RegExp('\\d') },
            M: { pattern: new RegExp('\\d') },
            H: { pattern: new RegExp('\\d') },
            h: { pattern: new RegExp('\\d') },
            s: { pattern: new RegExp('\\d') }
          }
        },
        Ia = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'],
        Pa = ['percent', 'Hh', 's0', 'm0', 'separator', 'd0/M0/0000', 'd0/M0', 'd0', 'M0'];
      let Ma = (() => {
          class t {
            constructor(t) {
              (this._config = t),
                (this.maskExpression = ''),
                (this.actualValue = ''),
                (this.shownMaskExpression = ''),
                (this._formatWithSeparators = (t, e, n, r) => {
                  const s = t.split(n),
                    i = s.length > 1 ? `${n}${s[1]}` : '';
                  let o = s[0];
                  const a = this.separatorLimit.replace(/\s/g, '');
                  a && +a && (o = '-' === o[0] ? `-${o.slice(1, o.length).slice(0, a.length)}` : o.slice(0, a.length));
                  const l = /(\d+)(\d{3})/;
                  for (; l.test(o); ) o = o.replace(l, '$1' + e + '$2');
                  return void 0 === r ? o + i : 0 === r ? o : o + i.substr(0, r + 1);
                }),
                (this.percentage = t => Number(t) >= 0 && Number(t) <= 100),
                (this.getPrecision = t => {
                  const e = t.split('.');
                  return e.length > 1 ? Number(e[e.length - 1]) : 1 / 0;
                }),
                (this.checkInputPrecision = (t, e, n) => {
                  if (e < 1 / 0) {
                    const r = new RegExp(this._charToRegExpExpression(n) + `\\d{${e}}.*$`),
                      s = t.match(r);
                    s && s[0].length - 1 > e
                      ? (t = t.substring(0, t.length - 1))
                      : 0 === e && t.endsWith(n) && (t = t.substring(0, t.length - 1));
                  }
                  return t;
                }),
                (this._shift = new Set()),
                (this.clearIfNotMatch = this._config.clearIfNotMatch),
                (this.dropSpecialCharacters = this._config.dropSpecialCharacters),
                (this.maskSpecialCharacters = this._config.specialCharacters),
                (this.maskAvailablePatterns = this._config.patterns),
                (this.prefix = this._config.prefix),
                (this.suffix = this._config.suffix),
                (this.thousandSeparator = this._config.thousandSeparator),
                (this.decimalMarker = this._config.decimalMarker),
                (this.hiddenInput = this._config.hiddenInput),
                (this.showMaskTyped = this._config.showMaskTyped),
                (this.placeHolderCharacter = this._config.placeHolderCharacter),
                (this.validation = this._config.validation),
                (this.separatorLimit = this._config.separatorLimit);
            }
            applyMaskWithPattern(t, e) {
              const [n, r] = e;
              return (this.customPattern = r), this.applyMask(t, n);
            }
            applyMask(t, e, n = 0, r = () => {}) {
              if (null == t || void 0 === e) return '';
              let s = 0,
                i = '',
                o = !1,
                a = !1,
                l = 1,
                c = !1;
              t.slice(0, this.prefix.length) === this.prefix && (t = t.slice(this.prefix.length, t.length)),
                this.suffix && t.endsWith(this.suffix) && (t = t.slice(0, t.length - this.suffix.length));
              const u = t.toString().split('');
              if (
                ('IP' === e &&
                  ((this.ipError = !!(u.filter(t => '.' === t).length < 3 && u.length < 7)), (e = '099.099.099.099')),
                e.startsWith('percent'))
              ) {
                if (t.match('[a-z]|[A-Z]') || t.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
                  t = this._stripToDecimal(t);
                  const n = this.getPrecision(e);
                  t = this.checkInputPrecision(t, n, '.');
                }
                if (t.indexOf('.') > 0 && !this.percentage(t.substring(0, t.indexOf('.')))) {
                  const e = t.substring(0, t.indexOf('.') - 1);
                  t = `${e}${t.substring(t.indexOf('.'), t.length)}`;
                }
                i = this.percentage(t) ? t : t.substring(0, t.length - 1);
              } else if (e.startsWith('separator')) {
                (t.match('[w\u0430-\u044f\u0410-\u042f]') ||
                  t.match('[\u0401\u0451\u0410-\u044f]') ||
                  t.match('[a-z]|[A-Z]') ||
                  t.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/) ||
                  t.match('[^A-Za-z0-9,]')) &&
                  (t = this._stripToDecimal(t)),
                  (t = t.length > 1 && '0' === t[0] && t[1] !== this.decimalMarker ? t.slice(1, t.length) : t);
                const r = this._charToRegExpExpression(this.thousandSeparator),
                  s = this._charToRegExpExpression(this.decimalMarker),
                  o = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,";<>?\\/'.replace(r, '').replace(s, ''),
                  c = new RegExp('[' + o + ']');
                t.match(c) && (t = t.substring(0, t.length - 1));
                const u = this.getPrecision(e),
                  h = (t = this.checkInputPrecision(t, u, this.decimalMarker)).replace(new RegExp(r, 'g'), '');
                i = this._formatWithSeparators(h, this.thousandSeparator, this.decimalMarker, u);
                const d = i.indexOf(',') - t.indexOf(','),
                  p = i.length - t.length;
                if (p > 0 && ',' !== i[n]) {
                  a = !0;
                  let t = 0;
                  do {
                    this._shift.add(n + t), t++;
                  } while (t < p);
                } else
                  (0 !== d && n > 0 && !(i.indexOf(',') >= n && n > 3)) || (!(i.indexOf('.') >= n && n > 3) && p <= 0)
                    ? (this._shift.clear(), (a = !0), (l = p), this._shift.add((n += p)))
                    : this._shift.clear();
              } else
                for (let f = 0, g = u[0]; f < u.length && s !== e.length; f++, g = u[f])
                  if (this._checkSymbolMask(g, e[s]) && '?' === e[s + 1]) (i += g), (s += 2);
                  else if ('*' === e[s + 1] && o && this._checkSymbolMask(g, e[s + 2])) (i += g), (s += 3), (o = !1);
                  else if (this._checkSymbolMask(g, e[s]) && '*' === e[s + 1]) (i += g), (o = !0);
                  else if ('?' === e[s + 1] && this._checkSymbolMask(g, e[s + 2])) (i += g), (s += 3);
                  else if (
                    this._checkSymbolMask(g, e[s]) ||
                    (this.hiddenInput &&
                      this.maskAvailablePatterns[e[s]] &&
                      this.maskAvailablePatterns[e[s]].symbol === g)
                  ) {
                    if ('H' === e[s] && Number(g) > 2) {
                      s += 1;
                      const t = /[*?]/g.test(e.slice(0, s)) ? u.length : s;
                      this._shift.add(t + this.prefix.length || 0), f--;
                      continue;
                    }
                    if ('h' === e[s] && '2' === i && Number(g) > 3) {
                      (s += 1), f--;
                      continue;
                    }
                    if ('m' === e[s] && Number(g) > 5) {
                      s += 1;
                      const t = /[*?]/g.test(e.slice(0, s)) ? u.length : s;
                      this._shift.add(t + this.prefix.length || 0), f--;
                      continue;
                    }
                    if ('s' === e[s] && Number(g) > 5) {
                      s += 1;
                      const t = /[*?]/g.test(e.slice(0, s)) ? u.length : s;
                      this._shift.add(t + this.prefix.length || 0), f--;
                      continue;
                    }
                    const n = 31;
                    if ('d' === e[s] && (Number(t.slice(s, s + 2)) > n || '/' === t[s + 1])) {
                      s += 1;
                      const t = /[*?]/g.test(e.slice(0, s)) ? u.length : s;
                      this._shift.add(t + this.prefix.length || 0), f--;
                      continue;
                    }
                    if ('M' === e[s]) {
                      const r = 12,
                        i = 0 === s && (Number(g) > 2 || Number(t.slice(s, s + 2)) > r || '/' === t[s + 1]),
                        o =
                          t.slice(s - 3, s - 1).includes('/') &&
                          (('/' === t[s - 2] && Number(t.slice(s - 1, s + 1)) > r && '/' !== t[s]) ||
                            '/' === t[s] ||
                            ('/' === t[s - 3] && Number(t.slice(s - 2, s)) > r && '/' !== t[s - 1]) ||
                            '/' === t[s - 1]),
                        a =
                          Number(t.slice(s - 3, s - 1)) <= n &&
                          !t.slice(s - 3, s - 1).includes('/') &&
                          '/' === t[s - 1] &&
                          (Number(t.slice(s, s + 2)) > r || '/' === t[s + 1]),
                        l =
                          Number(t.slice(s - 3, s - 1)) > n &&
                          !t.slice(s - 3, s - 1).includes('/') &&
                          !t.slice(s - 2, s).includes('/') &&
                          Number(t.slice(s - 2, s)) > r,
                        c =
                          Number(t.slice(s - 3, s - 1)) <= n &&
                          !t.slice(s - 3, s - 1).includes('/') &&
                          '/' !== t[s - 1] &&
                          Number(t.slice(s - 1, s + 1)) > r;
                      if (i || o || a || l || c) {
                        s += 1;
                        const t = /[*?]/g.test(e.slice(0, s)) ? u.length : s;
                        this._shift.add(t + this.prefix.length || 0), f--;
                        continue;
                      }
                    }
                    (i += g), s++;
                  } else if (-1 !== this.maskSpecialCharacters.indexOf(e[s])) {
                    (i += e[s]), s++;
                    const t = /[*?]/g.test(e.slice(0, s)) ? u.length : s;
                    this._shift.add(t + this.prefix.length || 0), f--;
                  } else
                    this.maskSpecialCharacters.indexOf(g) > -1 &&
                    this.maskAvailablePatterns[e[s]] &&
                    this.maskAvailablePatterns[e[s]].optional
                      ? (u[s] && '099.099.099.099' !== e && (i += u[s]), s++, f--)
                      : '*' === this.maskExpression[s + 1] &&
                        this._findSpecialChar(this.maskExpression[s + 2]) &&
                        this._findSpecialChar(g) === this.maskExpression[s + 2] &&
                        o
                      ? ((s += 3), (i += g))
                      : '?' === this.maskExpression[s + 1] &&
                        this._findSpecialChar(this.maskExpression[s + 2]) &&
                        this._findSpecialChar(g) === this.maskExpression[s + 2] &&
                        o
                      ? ((s += 3), (i += g))
                      : this.showMaskTyped &&
                        this.maskSpecialCharacters.indexOf(g) < 0 &&
                        g !== this.placeHolderCharacter &&
                        (c = !0);
              i.length + 1 === e.length &&
                -1 !== this.maskSpecialCharacters.indexOf(e[e.length - 1]) &&
                (i += e[e.length - 1]);
              let h = n + 1;
              for (; this._shift.has(h); ) l++, h++;
              let d = this._shift.has(n) ? l : 0;
              c && d--, r(d, a), l < 0 && this._shift.clear();
              let p = `${this.prefix}${i}${this.suffix}`;
              return 0 === i.length && (p = `${this.prefix}${i}`), p;
            }
            _findSpecialChar(t) {
              return this.maskSpecialCharacters.find(e => e === t);
            }
            _checkSymbolMask(t, e) {
              return (
                (this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns),
                this.maskAvailablePatterns[e] &&
                  this.maskAvailablePatterns[e].pattern &&
                  this.maskAvailablePatterns[e].pattern.test(t)
              );
            }
            _stripToDecimal(t) {
              return t
                .split('')
                .filter((t, e) => t.match('^-?\\d') || '.' === t || ',' === t || ('-' === t && 0 === e))
                .join('');
            }
            _charToRegExpExpression(t) {
              return ' ' === t ? '\\s' : '[\\^$.|?*+()'.indexOf(t) >= 0 ? '\\' + t : t;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(Ea));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        Ra = (() => {
          class t extends Ma {
            constructor(t, e, n, r) {
              super(e),
                (this.document = t),
                (this._config = e),
                (this._elementRef = n),
                (this._renderer = r),
                (this.maskExpression = ''),
                (this.isNumberValue = !1),
                (this.showMaskTyped = !1),
                (this.placeHolderCharacter = '_'),
                (this.maskIsShown = ''),
                (this.selStart = null),
                (this.selEnd = null),
                (this.onChange = t => {}),
                (this._formElement = this._elementRef.nativeElement);
            }
            applyMask(t, e, n = 0, r = () => {}) {
              if (!e) return t;
              if (
                ((this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : ''),
                'IP' === this.maskExpression &&
                  this.showMaskTyped &&
                  (this.maskIsShown = this.showMaskInInput(t || '#')),
                !t && this.showMaskTyped)
              )
                return this.formControlResult(this.prefix), this.prefix + this.maskIsShown;
              const s = t && 'number' == typeof this.selStart ? t[this.selStart] : '';
              let i = '';
              if (void 0 !== this.hiddenInput) {
                let e = this.actualValue.split('');
                '' !== t && e.length
                  ? 'number' == typeof this.selStart &&
                    'number' == typeof this.selEnd &&
                    (t.length > e.length
                      ? e.splice(this.selStart, 0, s)
                      : t.length < e.length &&
                        (e.length - t.length == 1
                          ? e.splice(this.selStart - 1, 1)
                          : e.splice(this.selStart, this.selEnd - this.selStart)))
                  : (e = []),
                  (i = this.actualValue.length ? this.shiftTypedSymbols(e.join('')) : t);
              }
              i = Boolean(i) && i.length ? i : t;
              const o = super.applyMask(i, e, n, r);
              if (
                ((this.actualValue = this.getActualValue(o)),
                '.' === this.thousandSeparator && '.' === this.decimalMarker && (this.decimalMarker = ','),
                this.maskExpression.startsWith('separator') &&
                  !0 === this.dropSpecialCharacters &&
                  (this.maskSpecialCharacters = this.maskSpecialCharacters.filter(t => t !== this.decimalMarker)),
                this.formControlResult(o),
                !this.showMaskTyped)
              )
                return this.hiddenInput && o && o.length ? this.hideInput(o, this.maskExpression) : o;
              const a = this.prefix + this.maskIsShown;
              return o + ('IP' === this.maskExpression ? a : a.slice(o.length));
            }
            applyValueChanges(t = 0, e = () => {}) {
              (this._formElement.value = this.applyMask(this._formElement.value, this.maskExpression, t, e)),
                this._formElement !== this.document.activeElement && this.clearIfNotMatchFn();
            }
            hideInput(t, e) {
              return t
                .split('')
                .map((t, n) =>
                  this.maskAvailablePatterns &&
                  this.maskAvailablePatterns[e[n]] &&
                  this.maskAvailablePatterns[e[n]].symbol
                    ? this.maskAvailablePatterns[e[n]].symbol
                    : t
                )
                .join('');
            }
            getActualValue(t) {
              const e = t
                .split('')
                .filter(
                  (t, e) =>
                    this._checkSymbolMask(t, this.maskExpression[e]) ||
                    (this.maskSpecialCharacters.includes(this.maskExpression[e]) && t === this.maskExpression[e])
                );
              return e.join('') === t ? e.join('') : t;
            }
            shiftTypedSymbols(t) {
              let e = '';
              return (
                (t &&
                  t.split('').map((n, r) => {
                    if (this.maskSpecialCharacters.includes(t[r + 1]) && t[r + 1] !== this.maskExpression[r + 1])
                      return (e = n), t[r + 1];
                    if (e.length) {
                      const t = e;
                      return (e = ''), t;
                    }
                    return n;
                  })) ||
                []
              ).join('');
            }
            showMaskInInput(t) {
              if (this.showMaskTyped && this.shownMaskExpression) {
                if (this.maskExpression.length !== this.shownMaskExpression.length)
                  throw new Error('Mask expression must match mask placeholder length');
                return this.shownMaskExpression;
              }
              return this.showMaskTyped
                ? t
                  ? this._checkForIp(t)
                  : this.maskExpression.replace(/\w/g, this.placeHolderCharacter)
                : '';
            }
            clearIfNotMatchFn() {
              this.clearIfNotMatch &&
                this.prefix.length + this.maskExpression.length + this.suffix.length !==
                  this._formElement.value.replace(/_/g, '').length &&
                ((this.formElementProperty = ['value', '']),
                this.applyMask(this._formElement.value, this.maskExpression));
            }
            set formElementProperty([t, e]) {
              this._renderer.setProperty(this._formElement, t, e);
            }
            checkSpecialCharAmount(t) {
              return t.split('').filter(t => this._findSpecialChar(t)).length;
            }
            _checkForIp(t) {
              if ('#' === t)
                return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
              const e = [];
              for (let n = 0; n < t.length; n++) t[n].match('\\d') && e.push(t[n]);
              return e.length <= 3
                ? `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`
                : e.length > 3 && e.length <= 6
                ? `${this.placeHolderCharacter}.${this.placeHolderCharacter}`
                : e.length > 6 && e.length <= 9
                ? this.placeHolderCharacter
                : '';
            }
            formControlResult(t) {
              Array.isArray(this.dropSpecialCharacters)
                ? this.onChange(this._removeMask(this._removeSuffix(this._removePrefix(t)), this.dropSpecialCharacters))
                : this.onChange(
                    this.dropSpecialCharacters ? this._checkSymbols(t) : this._removeSuffix(this._removePrefix(t))
                  );
            }
            _removeMask(t, e) {
              return t ? t.replace(this._regExpForRemove(e), '') : t;
            }
            _removePrefix(t) {
              return this.prefix && t ? t.replace(this.prefix, '') : t;
            }
            _removeSuffix(t) {
              return this.suffix && t ? t.replace(this.suffix, '') : t;
            }
            _retrieveSeparatorValue(t) {
              return this._removeMask(this._removeSuffix(this._removePrefix(t)), this.maskSpecialCharacters);
            }
            _regExpForRemove(t) {
              return new RegExp(t.map(t => `\\${t}`).join('|'), 'gi');
            }
            _checkSymbols(t) {
              if ('' === t) return t;
              const e = this._retrieveSeparatorPrecision(this.maskExpression);
              let n = this._retrieveSeparatorValue(t);
              return (
                '.' !== this.decimalMarker && (n = n.replace(this.decimalMarker, '.')),
                this.isNumberValue
                  ? e
                    ? t === this.decimalMarker
                      ? null
                      : this._checkPrecision(this.maskExpression, n)
                    : Number(n)
                  : n
              );
            }
            _retrieveSeparatorPrecision(t) {
              const e = t.match(new RegExp('^separator\\.([^d]*)'));
              return e ? Number(e[1]) : null;
            }
            _checkPrecision(t, e) {
              return t.indexOf('2') > 0 ? Number(e).toFixed(2) : Number(e);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(i.c), s.Zb(Ea), s.Zb(s.l), s.Zb(s.D));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        ja = (() => {
          class t {
            constructor(t, e, n) {
              (this.document = t),
                (this._maskService = e),
                (this._config = n),
                (this.maskExpression = ''),
                (this.specialCharacters = []),
                (this.patterns = {}),
                (this.prefix = ''),
                (this.suffix = ''),
                (this.thousandSeparator = ' '),
                (this.decimalMarker = '.'),
                (this.dropSpecialCharacters = null),
                (this.hiddenInput = null),
                (this.showMaskTyped = null),
                (this.placeHolderCharacter = null),
                (this.shownMaskExpression = null),
                (this.showTemplate = null),
                (this.clearIfNotMatch = null),
                (this.validation = null),
                (this.separatorLimit = null),
                (this._maskValue = ''),
                (this._position = null),
                (this.onChange = t => {}),
                (this.onTouch = () => {});
            }
            ngOnChanges(t) {
              const {
                maskExpression: e,
                specialCharacters: n,
                patterns: r,
                prefix: s,
                suffix: i,
                thousandSeparator: o,
                decimalMarker: a,
                dropSpecialCharacters: l,
                hiddenInput: c,
                showMaskTyped: u,
                placeHolderCharacter: h,
                shownMaskExpression: d,
                showTemplate: p,
                clearIfNotMatch: f,
                validation: g,
                separatorLimit: m
              } = t;
              if ((e && (this._maskValue = t.maskExpression.currentValue || ''), n)) {
                if (!n.currentValue || !Array.isArray(n.currentValue)) return;
                this._maskService.maskSpecialCharacters = t.specialCharacters.currentValue || [];
              }
              r && r.currentValue && (this._maskService.maskAvailablePatterns = r.currentValue),
                s && (this._maskService.prefix = s.currentValue),
                i && (this._maskService.suffix = i.currentValue),
                o && (this._maskService.thousandSeparator = o.currentValue),
                a && (this._maskService.decimalMarker = a.currentValue),
                l && (this._maskService.dropSpecialCharacters = l.currentValue),
                c && (this._maskService.hiddenInput = c.currentValue),
                u && (this._maskService.showMaskTyped = u.currentValue),
                h && (this._maskService.placeHolderCharacter = h.currentValue),
                d && (this._maskService.shownMaskExpression = d.currentValue),
                p && (this._maskService.showTemplate = p.currentValue),
                f && (this._maskService.clearIfNotMatch = f.currentValue),
                g && (this._maskService.validation = g.currentValue),
                m && (this._maskService.separatorLimit = m.currentValue),
                this._applyMask();
            }
            validate({ value: t }) {
              if (!this._maskService.validation) return null;
              if (this._maskService.ipError) return { 'Mask error': !0 };
              if (this._maskValue.startsWith('separator')) return null;
              if (Pa.includes(this._maskValue)) return null;
              if (this._maskService.clearIfNotMatch) return null;
              if (Ia.includes(this._maskValue)) return this._validateTime(t);
              if (t && t.toString().length >= 1) {
                let e = 0;
                for (const n in this._maskService.maskAvailablePatterns)
                  if (
                    this._maskService.maskAvailablePatterns[n].optional &&
                    !0 === this._maskService.maskAvailablePatterns[n].optional
                  ) {
                    if (
                      (this._maskValue.indexOf(n) !== this._maskValue.lastIndexOf(n)
                        ? (e += this._maskValue
                            .split('')
                            .filter(t => t === n)
                            .join('').length)
                        : -1 !== this._maskValue.indexOf(n) && e++,
                      -1 !== this._maskValue.indexOf(n) && t.toString().length >= this._maskValue.indexOf(n))
                    )
                      return null;
                    if (e === this._maskValue.length) return null;
                  }
                if (
                  1 === this._maskValue.indexOf('{') &&
                  t.toString().length ===
                    this._maskValue.length + Number(this._maskValue.split('{')[1].split('}')[0]) - 4
                )
                  return null;
                if (1 === this._maskValue.indexOf('*') || 1 === this._maskValue.indexOf('?')) return null;
                if (
                  (this._maskValue.indexOf('*') > 1 && t.toString().length < this._maskValue.indexOf('*')) ||
                  (this._maskValue.indexOf('?') > 1 && t.toString().length < this._maskValue.indexOf('?')) ||
                  1 === this._maskValue.indexOf('{')
                )
                  return { 'Mask error': !0 };
                if (-1 === this._maskValue.indexOf('*') || -1 === this._maskValue.indexOf('?')) {
                  const n = this._maskService.dropSpecialCharacters
                    ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - e
                    : this._maskValue.length - e;
                  if (t.toString().length < n) return { 'Mask error': !0 };
                }
              }
              return null;
            }
            onInput(t) {
              const e = t.target;
              if (((this._inputValue = e.value), !this._maskValue)) return void this.onChange(e.value);
              const n = 1 === e.selectionStart ? e.selectionStart + this._maskService.prefix.length : e.selectionStart;
              let r = 0,
                s = !1;
              if (
                (this._maskService.applyValueChanges(n, (t, e) => {
                  (r = t), (s = e);
                }),
                this.document.activeElement !== e)
              )
                return;
              this._position = 1 === this._position && 1 === this._inputValue.length ? null : this._position;
              const i = this._position
                ? this._inputValue.length + n + r
                : n + ('Backspace' !== this._code || s ? r : 0);
              e.setSelectionRange(i, i),
                (this.maskExpression.includes('H') || this.maskExpression.includes('M')) &&
                  0 === r &&
                  e.setSelectionRange(e.selectionStart + 1, e.selectionStart + 1),
                (this._position = null);
            }
            onBlur() {
              this._maskService.clearIfNotMatchFn(), this.onTouch();
            }
            onFocus(t) {
              const e = t.target;
              null !== e &&
                null !== e.selectionStart &&
                e.selectionStart === e.selectionEnd &&
                e.selectionStart > this._maskService.prefix.length &&
                38 !== t.keyCode &&
                this._maskService.showMaskTyped &&
                ((this._maskService.maskIsShown = this._maskService.showMaskInInput()),
                e.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === e.value
                  ? (e.focus(), e.setSelectionRange(0, 0))
                  : e.selectionStart > this._maskService.actualValue.length &&
                    e.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length));
              const n =
                e.value && e.value !== this._maskService.prefix
                  ? e.value
                  : this._maskService.prefix + this._maskService.maskIsShown;
              e.value !== n && (e.value = n),
                (e.selectionStart || e.selectionEnd) <= this._maskService.prefix.length &&
                  (e.selectionStart = this._maskService.prefix.length);
            }
            onKeyDown(t) {
              this._code = t.code ? t.code : t.key;
              const e = t.target;
              if (
                ((this._inputValue = e.value),
                38 === t.keyCode && t.preventDefault(),
                37 === t.keyCode || 8 === t.keyCode || 46 === t.keyCode)
              ) {
                if (
                  (8 === t.keyCode && 0 === e.value.length && (e.selectionStart = e.selectionEnd),
                  8 === t.keyCode && 0 !== e.selectionStart)
                )
                  if (
                    ((this.specialCharacters = this.specialCharacters || this._config.specialCharacters),
                    this.prefix.length > 1 && e.selectionStart <= this.prefix.length)
                  )
                    e.setSelectionRange(this.prefix.length, this.prefix.length);
                  else {
                    if (this._inputValue.length !== e.selectionStart && 1 !== e.selectionStart)
                      for (
                        ;
                        this.specialCharacters.includes(this._inputValue[e.selectionStart - 1].toString()) &&
                        ((this.prefix.length >= 1 && e.selectionStart > this.prefix.length) ||
                          0 === this.prefix.length);

                      )
                        e.setSelectionRange(e.selectionStart - 1, e.selectionStart - 1);
                    this.suffixCheckOnPressDelete(t.keyCode, e);
                  }
                this.suffixCheckOnPressDelete(t.keyCode, e),
                  this._maskService.prefix.length &&
                    e.selectionStart <= this._maskService.prefix.length &&
                    e.selectionEnd <= this._maskService.prefix.length &&
                    t.preventDefault();
                const n = e.selectionStart;
                8 !== t.keyCode ||
                  e.readOnly ||
                  0 !== n ||
                  e.selectionEnd !== e.value.length ||
                  0 === e.value.length ||
                  ((this._position = this._maskService.prefix ? this._maskService.prefix.length : 0),
                  this._maskService.applyMask(
                    this._maskService.prefix,
                    this._maskService.maskExpression,
                    this._position
                  ));
              }
              this.suffix &&
                this.suffix.length > 1 &&
                this._inputValue.length - this.suffix.length < e.selectionStart &&
                e.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length),
                (this._maskService.selStart = e.selectionStart),
                (this._maskService.selEnd = e.selectionEnd);
            }
            writeValue(t) {
              return (
                (e = this),
                (r = function*() {
                  void 0 === t && (t = ''),
                    'number' == typeof t &&
                      ((t = String(t)),
                      (t = '.' !== this.decimalMarker ? t.replace('.', this.decimalMarker) : t),
                      (this._maskService.isNumberValue = !0)),
                    (this._maskService.formElementProperty =
                      (t && this._maskService.maskExpression) ||
                      (this._maskService.maskExpression &&
                        (this._maskService.prefix || this._maskService.showMaskTyped))
                        ? ['value', this._maskService.applyMask(t, this._maskService.maskExpression)]
                        : ['value', t]),
                    (this._inputValue = t);
                }),
                new ((n = void 0) || (n = Promise))(function(t, s) {
                  function i(t) {
                    try {
                      a(r.next(t));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function o(t) {
                    try {
                      a(r.throw(t));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function a(e) {
                    e.done
                      ? t(e.value)
                      : new n(function(t) {
                          t(e.value);
                        }).then(i, o);
                  }
                  a((r = r.apply(e, [])).next());
                })
              );
              var e, n, r;
            }
            registerOnChange(t) {
              (this.onChange = t), (this._maskService.onChange = this.onChange);
            }
            registerOnTouched(t) {
              this.onTouch = t;
            }
            suffixCheckOnPressDelete(t, e) {
              46 === t &&
                this.suffix.length > 0 &&
                this._inputValue.length - this.suffix.length <= e.selectionStart &&
                e.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length),
                8 === t &&
                  (this.suffix.length > 1 &&
                    this._inputValue.length - this.suffix.length < e.selectionStart &&
                    e.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length),
                  1 === this.suffix.length &&
                    this._inputValue.length === e.selectionStart &&
                    e.setSelectionRange(e.selectionStart - 1, e.selectionStart - 1));
            }
            setDisabledState(t) {
              this._maskService.formElementProperty = ['disabled', t];
            }
            onModelChange(t) {
              t || (this._maskService.actualValue = '');
            }
            _repeatPatternSymbols(t) {
              return (
                (t.match(/{[0-9]+}/) &&
                  t.split('').reduce((e, n, r) => {
                    if (((this._start = '{' === n ? r : this._start), '}' !== n))
                      return this._maskService._findSpecialChar(n) ? e + n : e;
                    this._end = r;
                    const s = Number(t.slice(this._start + 1, this._end));
                    return e + new Array(s + 1).join(t[this._start - 1]);
                  }, '')) ||
                t
              );
            }
            _applyMask() {
              (this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '')),
                (this._maskService.formElementProperty = [
                  'value',
                  this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)
                ]);
            }
            _validateTime(t) {
              const e = this._maskValue.split('').filter(t => ':' !== t).length;
              return 0 == +t[t.length - 1] && t.length < e
                ? { 'Mask error': !0 }
                : t.length <= e - 2
                ? { 'Mask error': !0 }
                : null;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(i.c), s.Mb(Ra), s.Mb(Ea));
            }),
            (t.ɵdir = s.Hb({
              type: t,
              selectors: [['', 'mask', '']],
              hostBindings: function(t, e) {
                1 & t &&
                  s.dc('input', function(t) {
                    return e.onInput(t);
                  })('blur', function(t) {
                    return e.onBlur();
                  })('click', function(t) {
                    return e.onFocus(t);
                  })('keydown', function(t) {
                    return e.onKeyDown(t);
                  })('ngModelChange', function(t) {
                    return e.onModelChange(t);
                  });
              },
              inputs: {
                maskExpression: ['mask', 'maskExpression'],
                specialCharacters: 'specialCharacters',
                patterns: 'patterns',
                prefix: 'prefix',
                suffix: 'suffix',
                thousandSeparator: 'thousandSeparator',
                decimalMarker: 'decimalMarker',
                dropSpecialCharacters: 'dropSpecialCharacters',
                hiddenInput: 'hiddenInput',
                showMaskTyped: 'showMaskTyped',
                placeHolderCharacter: 'placeHolderCharacter',
                shownMaskExpression: 'shownMaskExpression',
                showTemplate: 'showTemplate',
                clearIfNotMatch: 'clearIfNotMatch',
                validation: 'validation',
                separatorLimit: 'separatorLimit'
              },
              features: [
                s.yb([
                  { provide: d, useExisting: Object(s.S)(() => t), multi: !0 },
                  { provide: O, useExisting: Object(s.S)(() => t), multi: !0 },
                  Ra
                ]),
                s.xb()
              ]
            })),
            t
          );
        })(),
        Na = (() => {
          class t {
            static forRoot(e) {
              return {
                ngModule: t,
                providers: [
                  { provide: Oa, useValue: e },
                  { provide: Aa, useValue: Ta },
                  { provide: Ea, useFactory: Da, deps: [Aa, Oa] },
                  Ma
                ]
              };
            }
            static forChild(e) {
              return { ngModule: t };
            }
          }
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              }
            })),
            t
          );
        })();
      function Da(t, e) {
        return Object.assign({}, t, e instanceof Function ? e() : e);
      }
      function Va(t, e) {
        if (1 & t) {
          const t = s.Sb();
          s.Rb(0, 'button', 6),
            s.dc('click', function(n) {
              s.tc(t);
              const r = e.$implicit;
              return s.fc().setLanguage(r);
            }),
            s.Bc(1),
            s.Qb();
        }
        if (2 & t) {
          const t = e.$implicit;
          s.zb(1), s.Dc('\n      ', t, '\n    ');
        }
      }
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self && self;
      let La = (() => {
          class t {
            constructor(t, e) {
              (this.router = t), (this.i18nService = e);
            }
            setLanguage(t) {
              this.i18nService.language = t;
            }
            get currentLanguage() {
              return this.i18nService.language;
            }
            get languages() {
              return this.i18nService.supportedLanguages;
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Ho), s.Mb(wa));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-header']],
              decls: 16,
              vars: 2,
              consts: [
                ['href', '/', 1, 'navbar-brand', 'text-dark', 'logo'],
                [1, 'fas', 'fa-meteor', 'main-color', 'logo__icon'],
                ['ngbDropdown', '', 'placement', 'bottom-right'],
                ['id', 'language-dropdown', 'ngbDropdownToggle', '', 1, 'nav-link', 'text-dark'],
                ['ngbDropdownMenu', '', 'aria-labelledby', 'language-dropdown'],
                ['class', 'dropdown-item', 3, 'click', 4, 'ngFor', 'ngForOf'],
                [1, 'dropdown-item', 3, 'click']
              ],
              template: function(t, e) {
                1 & t &&
                  (s.Rb(0, 'a', 0),
                  s.Bc(1, '\n  meteorPay\n  '),
                  s.Nb(2, 'i', 1),
                  s.Bc(3, '\n'),
                  s.Qb(),
                  s.Bc(4, '\n\n'),
                  s.Rb(5, 'div', 2),
                  s.Bc(6, '\n  '),
                  s.Rb(7, 'a', 3),
                  s.Bc(8),
                  s.Qb(),
                  s.Bc(9, '\n\n  '),
                  s.Rb(10, 'div', 4),
                  s.Bc(11, '\n    '),
                  s.zc(12, Va, 2, 1, 'button', 5),
                  s.Bc(13, '\n  '),
                  s.Qb(),
                  s.Bc(14, '\n'),
                  s.Qb(),
                  s.Bc(15, '\n')),
                  2 & t && (s.zb(8), s.Dc('\n    ', e.currentLanguage, '\n  '), s.zb(4), s.kc('ngForOf', e.languages));
              },
              directives: [Nr, jr, Mr, i.i],
              styles: [
                '[_nghost-%COMP%]{-webkit-box-pack:justify;justify-content:space-between;margin-bottom:30px}.logo[_ngcontent-%COMP%], [_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.logo__icon[_ngcontent-%COMP%]{font-size:35px;-webkit-transform:rotate(185deg);transform:rotate(185deg);margin-left:10px}.navbar[_ngcontent-%COMP%]{margin-bottom:1rem}.nav-link.dropdown-toggle[_ngcontent-%COMP%]{cursor:pointer}'
              ],
              changeDetection: 0
            })),
            t
          );
        })(),
        Fa = (() => {
          class t {}
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-shell']],
              decls: 4,
              vars: 0,
              template: function(t, e) {
                1 & t && (s.Nb(0, 'app-header'), s.Bc(1, '\n'), s.Nb(2, 'router-outlet'), s.Bc(3, '\n'));
              },
              directives: [La, Go],
              styles: [
                '[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:40px;background-color:#fff;border-radius:16px;box-shadow:10px 10px 5px -8px rgba(0,0,0,.75);max-width:1000px}'
              ],
              changeDetection: 0
            })),
            t
          );
        })(),
        Ha = (() => {
          class t {
            constructor(t, e, n) {
              (this.formBuilder = t),
                (this.activatedRoute = e),
                (this.paymentsApiService = n),
                (this.minValueOfPaymentAmount = 1),
                (this.maxValueOfPaymentAmount = 1e3),
                (this.isSuccessMessageHidden = !0),
                (this.isErrorHidden = !0),
                this.activatedRoute.queryParams.subscribe(t => {
                  this.operatorParams = t;
                }),
                this.createForm();
            }
            pay() {
              const t = Object.assign(Object.assign({}, this.operatorParams), this.paymentForm.value);
              this.paymentsApiService.sendPayment(t).subscribe(
                t => {
                  (this.isSuccessMessageHidden = !1), (this.isErrorHidden = !0), console.info(t);
                },
                t => {
                  throw ((this.isSuccessMessageHidden = !0), (this.isErrorHidden = !1), t);
                }
              );
            }
            get isPhoneNumberValid() {
              return this.paymentForm.controls.phoneNumber.valid && this.paymentForm.controls.phoneNumber.touched;
            }
            get isPhoneNumberInvalid() {
              return this.paymentForm.controls.phoneNumber.invalid && this.paymentForm.controls.phoneNumber.touched;
            }
            get isPhoneNumberRequiredErrorVisible() {
              var t;
              return (
                (null === (t = this.paymentForm.controls.phoneNumber.errors) || void 0 === t ? void 0 : t.required) &&
                this.paymentForm.controls.phoneNumber.touched
              );
            }
            get isPaymentAmountValid() {
              return this.paymentForm.controls.paymentAmount.valid && this.paymentForm.controls.paymentAmount.touched;
            }
            get isPaymentAmountInvalid() {
              return this.paymentForm.controls.paymentAmount.invalid && this.paymentForm.controls.paymentAmount.touched;
            }
            get isPaymentAmountRequiredErrorVisible() {
              var t;
              return (
                (null === (t = this.paymentForm.controls.paymentAmount.errors) || void 0 === t ? void 0 : t.required) &&
                this.paymentForm.controls.paymentAmount.touched
              );
            }
            get isPaymentAmountMaxValueErrorVisible() {
              var t;
              return (
                (null === (t = this.paymentForm.controls.paymentAmount.errors) || void 0 === t ? void 0 : t.max) &&
                this.paymentForm.controls.paymentAmount.touched
              );
            }
            get isPaymentAmountMinValueErrorVisible() {
              var t;
              return (
                (null === (t = this.paymentForm.controls.paymentAmount.errors) || void 0 === t ? void 0 : t.min) &&
                this.paymentForm.controls.paymentAmount.touched
              );
            }
            get isPaymentFormValid() {
              return this.paymentForm.valid;
            }
            createForm() {
              this.paymentForm = this.formBuilder.group({
                phoneNumber: ['', I.required],
                paymentAmount: [
                  '',
                  [I.required, I.min(this.minValueOfPaymentAmount), I.max(this.maxValueOfPaymentAmount)]
                ]
              });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Mb(Mt), s.Mb(Ii), s.Mb(fa));
            }),
            (t.ɵcmp = s.Gb({
              type: t,
              selectors: [['app-payment-form']],
              decls: 69,
              vars: 31,
              consts: [
                ['novalidate', '', 3, 'formGroup', 'ngSubmit'],
                [1, 'form-group', 'text-center'],
                [1, 'd-block'],
                [1, 'input-group'],
                [
                  'type',
                  'text',
                  'formControlName',
                  'phoneNumber',
                  'aria-label',
                  "'Phone number' | translate",
                  'prefix',
                  '+7',
                  'mask',
                  '(000) 000-00-00',
                  'placeHolderCharacter',
                  '*',
                  'required',
                  '',
                  1,
                  'form-control',
                  3,
                  'placeholder',
                  'showMaskTyped'
                ],
                [1, 'input-group-append'],
                [1, 'input-group-text'],
                [1, 'fas', 'fa-mobile-alt'],
                ['translate', '', 1, 'text-danger', 3, 'hidden'],
                [
                  'type',
                  'text',
                  'formControlName',
                  'paymentAmount',
                  'aria-label',
                  "'Payment amount' | translate",
                  'minlength',
                  '1',
                  'maxlength',
                  '4',
                  'required',
                  '',
                  1,
                  'form-control',
                  3,
                  'placeholder'
                ],
                [1, 'fas', 'fa-ruble-sign'],
                [1, 'button-container'],
                ['translate', '', 1, 'text-success', 3, 'hidden'],
                ['type', 'submit', 1, 'btn', 'btn-dark', 'btn-lg', 3, 'disabled'],
                ['translate', '']
              ],
              template: function(t, e) {
                1 & t &&
                  (s.Rb(0, 'form', 0),
                  s.dc('ngSubmit', function(t) {
                    return e.pay();
                  }),
                  s.Bc(1, '\n  '),
                  s.Rb(2, 'div', 1),
                  s.Bc(3, '\n    '),
                  s.Rb(4, 'label', 2),
                  s.Bc(5, '\n      '),
                  s.Rb(6, 'div', 3),
                  s.Bc(7, '\n        '),
                  s.Nb(8, 'input', 4),
                  s.gc(9, 'translate'),
                  s.Bc(10, '\n\n        '),
                  s.Rb(11, 'div', 5),
                  s.Bc(12, '\n          '),
                  s.Rb(13, 'span', 6),
                  s.Bc(14, '\n            '),
                  s.Nb(15, 'i', 7),
                  s.Bc(16, '\n          '),
                  s.Qb(),
                  s.Bc(17, '\n        '),
                  s.Qb(),
                  s.Bc(18, '\n      '),
                  s.Qb(),
                  s.Bc(19, '\n\n      '),
                  s.Rb(20, 'small', 8),
                  s.Bc(21, '\n        Phone number is required\n      '),
                  s.Qb(),
                  s.Bc(22, '\n    '),
                  s.Qb(),
                  s.Bc(23, '\n\n    '),
                  s.Rb(24, 'label', 2),
                  s.Bc(25, '\n      '),
                  s.Rb(26, 'div', 3),
                  s.Bc(27, '\n        '),
                  s.Nb(28, 'input', 9),
                  s.gc(29, 'translate'),
                  s.Bc(30, '\n\n        '),
                  s.Rb(31, 'div', 5),
                  s.Bc(32, '\n          '),
                  s.Rb(33, 'span', 6),
                  s.Bc(34, '\n            '),
                  s.Nb(35, 'i', 10),
                  s.Bc(36, '\n          '),
                  s.Qb(),
                  s.Bc(37, '\n        '),
                  s.Qb(),
                  s.Bc(38, '\n      '),
                  s.Qb(),
                  s.Bc(39, '\n\n      '),
                  s.Rb(40, 'small', 8),
                  s.Bc(41, '\n        Payment amount is required\n      '),
                  s.Qb(),
                  s.Bc(42, '\n\n      '),
                  s.Rb(43, 'small', 8),
                  s.Bc(44),
                  s.gc(45, 'translate'),
                  s.Qb(),
                  s.Bc(46, '\n\n      '),
                  s.Rb(47, 'small', 8),
                  s.Bc(48),
                  s.gc(49, 'translate'),
                  s.Qb(),
                  s.Bc(50, '\n    '),
                  s.Qb(),
                  s.Bc(51, '\n  '),
                  s.Qb(),
                  s.Bc(52, '\n\n  '),
                  s.Rb(53, 'div', 11),
                  s.Bc(54, '\n    '),
                  s.Rb(55, 'div', 8),
                  s.Bc(56, '\n      Error. Try again\n    '),
                  s.Qb(),
                  s.Bc(57, '\n\n    '),
                  s.Rb(58, 'div', 12),
                  s.Bc(59, '\n      Payment was successfully sent\n    '),
                  s.Qb(),
                  s.Bc(60, '\n\n    '),
                  s.Rb(61, 'button', 13),
                  s.Bc(62, '\n      '),
                  s.Rb(63, 'span', 14),
                  s.Bc(64, 'Pay'),
                  s.Qb(),
                  s.Bc(65, '\n    '),
                  s.Qb(),
                  s.Bc(66, '\n  '),
                  s.Qb(),
                  s.Bc(67, '\n'),
                  s.Qb(),
                  s.Bc(68, '\n')),
                  2 & t &&
                    (s.kc('formGroup', e.paymentForm),
                    s.zb(8),
                    s.Eb('is-valid', e.isPhoneNumberValid)('is-invalid', e.isPhoneNumberInvalid),
                    s.kc('placeholder', s.hc(9, 23, 'Phone number'))('showMaskTyped', !0),
                    s.zb(12),
                    s.kc('hidden', !e.isPhoneNumberRequiredErrorVisible),
                    s.zb(8),
                    s.Eb('is-invalid', e.isPaymentAmountInvalid)('is-valid', e.isPaymentAmountValid),
                    s.kc('placeholder', s.hc(29, 25, 'Payment amount')),
                    s.zb(12),
                    s.kc('hidden', !e.isPaymentAmountRequiredErrorVisible),
                    s.zb(3),
                    s.kc('hidden', !e.isPaymentAmountMaxValueErrorVisible),
                    s.zb(1),
                    s.Ec(
                      '\n        ',
                      s.hc(45, 27, 'Payment amount must be less than'),
                      ' ',
                      e.maxValueOfPaymentAmount + 1,
                      '\n      '
                    ),
                    s.zb(3),
                    s.kc('hidden', !e.isPaymentAmountMinValueErrorVisible),
                    s.zb(1),
                    s.Ec(
                      '\n        ',
                      s.hc(49, 29, 'Payment amount must be more than'),
                      ' ',
                      e.minValueOfPaymentAmount - 1,
                      '\n      '
                    ),
                    s.zb(7),
                    s.kc('hidden', e.isErrorHidden),
                    s.zb(3),
                    s.kc('hidden', e.isSuccessMessageHidden),
                    s.zb(3),
                    s.kc('disabled', !e.isPaymentFormValid));
              },
              directives: [ft, k, bt, b, x, xt, ja, Et, Kn, At, It],
              pipes: [Qn],
              styles: [
                '.button-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;-webkit-box-align:center;align-items:center}.btn[_ngcontent-%COMP%]{margin-left:20px}'
              ],
              changeDetection: 0
            })),
            t
          );
        })();
      const Ua = function() {
          return { operator: 'beeline' };
        },
        $a = function() {
          return { operator: 'megafon' };
        },
        Ba = function() {
          return { operator: 'mts' };
        },
        za = [
          class {
            static childRoutes(t) {
              return { path: '', component: Fa, children: t, data: { reuse: !0 } };
            }
          }.childRoutes([
            {
              path: '',
              component: (() => {
                class t {}
                return (
                  (t.ɵfac = function(e) {
                    return new (e || t)();
                  }),
                  (t.ɵcmp = s.Gb({
                    type: t,
                    selectors: [['app-operators']],
                    decls: 23,
                    vars: 6,
                    consts: [
                      ['translate', '', 1, 'text-center', 'text-dark'],
                      [1, 'operators-list'],
                      [
                        'routerLink',
                        '/pay',
                        'routerLinkActive',
                        'operators-list__link--active',
                        1,
                        'operators-list__link',
                        3,
                        'queryParams'
                      ],
                      ['src', 'assets/operators-logos/beeline.png', 'alt', 'beeline logo', 1, 'operators-list__logo'],
                      ['src', 'assets/operators-logos/megafon.png', 'alt', 'megafon logo', 1, 'operators-list__logo'],
                      ['src', 'assets/operators-logos/mts.png', 'alt', 'mts logo', 1, 'operators-list__logo']
                    ],
                    template: function(t, e) {
                      1 & t &&
                        (s.Rb(0, 'h1', 0),
                        s.Bc(1, '\n  Choose operator\n'),
                        s.Qb(),
                        s.Bc(2, '\n\n'),
                        s.Rb(3, 'div', 1),
                        s.Bc(4, '\n  '),
                        s.Rb(5, 'a', 2),
                        s.Bc(6, '\n    '),
                        s.Nb(7, 'img', 3),
                        s.Bc(8, '\n  '),
                        s.Qb(),
                        s.Bc(9, '\n\n  '),
                        s.Rb(10, 'a', 2),
                        s.Bc(11, '\n    '),
                        s.Nb(12, 'img', 4),
                        s.Bc(13, '\n  '),
                        s.Qb(),
                        s.Bc(14, '\n\n  '),
                        s.Rb(15, 'a', 2),
                        s.Bc(16, '\n    '),
                        s.Nb(17, 'img', 5),
                        s.Bc(18, '\n  '),
                        s.Qb(),
                        s.Bc(19, '\n'),
                        s.Qb(),
                        s.Bc(20, '\n\n'),
                        s.Nb(21, 'router-outlet'),
                        s.Bc(22, '\n')),
                        2 & t &&
                          (s.zb(5),
                          s.kc('queryParams', s.nc(3, Ua)),
                          s.zb(5),
                          s.kc('queryParams', s.nc(4, $a)),
                          s.zb(5),
                          s.kc('queryParams', s.nc(5, Ba)));
                    },
                    directives: [Kn, $o, zo, Go],
                    styles: [
                      '.operators-list[_ngcontent-%COMP%]{flex-wrap:wrap;margin:60px auto}.operators-list[_ngcontent-%COMP%], .operators-list__link[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.operators-list__link[_ngcontent-%COMP%]{margin:0 20px;border:2px solid transparent;border-radius:10px;width:170px;height:100px;overflow:hidden;-webkit-transition:border-color .3s linear;transition:border-color .3s linear;background-color:#fff}.operators-list__link[_ngcontent-%COMP%]:hover{border-color:#ccc}.operators-list__link--active[_ngcontent-%COMP%], .operators-list__link--active[_ngcontent-%COMP%]:hover{border-color:#28a745;cursor:default}.operators-list__logo[_ngcontent-%COMP%]{display:block;width:150px;height:auto}'
                    ],
                    changeDetection: 0
                  })),
                  t
                );
              })(),
              children: [{ path: 'pay', component: Ha }]
            }
          ])
        ];
      let qa = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[ra.forChild(za)], ra]
            })),
            t
          );
        })(),
        Za = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[jt, Jn, Na.forRoot(), qa]]
            })),
            t
          );
        })(),
        Ga = (() => {
          class t {}
          return (
            (t.ɵmod = s.Kb({ type: t })),
            (t.ɵinj = s.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              imports: [[Za]]
            })),
            t
          );
        })();
      function Wa(t, e) {
        1 & t && s.Nb(0, 'app-loader');
      }
      function Ka(t, e) {
        1 & t && s.Nb(0, 'router-outlet');
      }
      const Qa = new ba('App');
      let Ja = (() => {
        class t {
          constructor(t, e, n, r, s, i) {
            (this.router = t),
              (this.activatedRoute = e),
              (this.titleService = n),
              (this.translateService = r),
              (this.i18nService = s),
              (this.cd = i),
              (this.isLoading = !0);
          }
          ngOnInit() {
            as.a.production && ba.enableProductionMode(),
              Qa.debug('init'),
              this.i18nService.init(as.a.defaultLanguage, as.a.supportedLanguages);
            const t = this.router.events.pipe($t(t => t instanceof ks));
            Object(De.a)(this.translateService.onLangChange, t)
              .pipe(
                Object(l.a)(() => {
                  let t = this.activatedRoute;
                  for (; t.firstChild; ) t = t.firstChild;
                  return t;
                }),
                $t(t => 'primary' === t.outlet),
                He(t => t.data),
                (function(t, e = 'ngOnDestroy') {
                  return n => {
                    const r = t[e],
                      s = 'function' == typeof r;
                    if (!s) throw new Error(`${t.constructor.name} is using untilDestroyed but doesn't implement ${e}`);
                    return (
                      t[Ca] ||
                        ((t[Ca] = new Re.a()),
                        (t[e] = function() {
                          s && r.apply(this, arguments), t[Ca].next(), t[Ca].complete();
                        })),
                      n.pipe(ir(t[Ca]))
                    );
                  };
                })(this)
              )
              .subscribe(t => {
                const e = t.title;
                e && this.titleService.setTitle(this.translateService.instant(e));
              }),
              setTimeout(() => {
                (this.isLoading = !1), this.cd.markForCheck();
              }, 1e3);
          }
          ngOnDestroy() {
            this.i18nService.destroy();
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Mb(Ho), s.Mb(Ii), s.Mb(r.b), s.Mb(Wn), s.Mb(wa), s.Mb(s.h));
          }),
          (t.ɵcmp = s.Gb({
            type: t,
            selectors: [['app-root']],
            decls: 4,
            vars: 2,
            consts: [[4, 'ngIf']],
            template: function(t, e) {
              1 & t &&
                (s.zc(0, Wa, 1, 0, 'app-loader', 0),
                s.Bc(1, '\n'),
                s.zc(2, Ka, 1, 0, 'router-outlet', 0),
                s.Bc(3, '\n')),
                2 & t && (s.kc('ngIf', e.isLoading), s.zb(2), s.kc('ngIf', !e.isLoading));
            },
            directives: [i.j, xa, Go],
            styles: [
              '[_nghost-%COMP%]{height:100%;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;background:url(main-background.3e1c8cdbf966ab00c444.jpg)}'
            ],
            changeDetection: 0
          })),
          t
        );
      })();
      const Ya = [{ path: '**', redirectTo: '', pathMatch: 'full' }];
      let Xa = (() => {
        class t {}
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [],
            imports: [[ra.forRoot(Ya)], ra]
          })),
          t
        );
      })();
      n.d(e, 'a', function() {
        return tl;
      });
      let tl = (() => {
        class t {}
        return (
          (t.ɵmod = s.Kb({ type: t, bootstrap: [Ja] })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)();
            },
            providers: [],
            imports: [
              [
                r.a,
                bn.register('./ngsw-worker.js', { enabled: as.a.production }),
                Rt,
                Ce,
                Jn.forRoot(),
                os,
                ga,
                Sa,
                ka,
                Ga,
                Xa
              ]
            ]
          })),
          t
        );
      })();
    },
    ZUHj: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return o;
      });
      var r = n('51Dv'),
        s = n('SeVD'),
        i = n('HDdC');
      function o(t, e, n, o, a = new r.a(t, n, o)) {
        if (!a.closed) return e instanceof i.a ? e.subscribe(a) : Object(s.a)(e)(a);
      }
    },
    bHdf: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var r = n('5+tZ'),
        s = n('SpAZ');
      function i(t = Number.POSITIVE_INFINITY) {
        return Object(r.a)(s.a, t);
      }
    },
    c2HN: function(t, e, n) {
      'use strict';
      function r(t) {
        return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    fXoL: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return vi;
      }),
        n.d(e, 'b', function() {
          return uc;
        }),
        n.d(e, 'c', function() {
          return ic;
        }),
        n.d(e, 'd', function() {
          return rc;
        }),
        n.d(e, 'e', function() {
          return sc;
        }),
        n.d(e, 'f', function() {
          return nu;
        }),
        n.d(e, 'g', function() {
          return Zc;
        }),
        n.d(e, 'h', function() {
          return ni;
        }),
        n.d(e, 'i', function() {
          return wc;
        }),
        n.d(e, 'j', function() {
          return ra;
        }),
        n.d(e, 'k', function() {
          return pc;
        }),
        n.d(e, 'l', function() {
          return sa;
        }),
        n.d(e, 'm', function() {
          return nn;
        }),
        n.d(e, 'n', function() {
          return Nl;
        }),
        n.d(e, 'o', function() {
          return q;
        }),
        n.d(e, 'p', function() {
          return c;
        }),
        n.d(e, 'q', function() {
          return z;
        }),
        n.d(e, 'r', function() {
          return yi;
        }),
        n.d(e, 's', function() {
          return Sa;
        }),
        n.d(e, 't', function() {
          return xa;
        }),
        n.d(e, 'u', function() {
          return dc;
        }),
        n.d(e, 'v', function() {
          return it;
        }),
        n.d(e, 'w', function() {
          return Wc;
        }),
        n.d(e, 'x', function() {
          return st;
        }),
        n.d(e, 'y', function() {
          return Uc;
        }),
        n.d(e, 'z', function() {
          return kc;
        }),
        n.d(e, 'A', function() {
          return u;
        }),
        n.d(e, 'B', function() {
          return cc;
        }),
        n.d(e, 'C', function() {
          return lc;
        }),
        n.d(e, 'D', function() {
          return la;
        }),
        n.d(e, 'E', function() {
          return oa;
        }),
        n.d(e, 'F', function() {
          return aa;
        }),
        n.d(e, 'G', function() {
          return ua;
        }),
        n.d(e, 'H', function() {
          return qn;
        }),
        n.d(e, 'I', function() {
          return d;
        }),
        n.d(e, 'J', function() {
          return Jc;
        }),
        n.d(e, 'K', function() {
          return Aa;
        }),
        n.d(e, 'L', function() {
          return Rc;
        }),
        n.d(e, 'M', function() {
          return ha;
        }),
        n.d(e, 'N', function() {
          return Ia;
        }),
        n.d(e, 'O', function() {
          return gt;
        }),
        n.d(e, 'P', function() {
          return Oi;
        }),
        n.d(e, 'Q', function() {
          return $c;
        }),
        n.d(e, 'R', function() {
          return wn;
        }),
        n.d(e, 'S', function() {
          return T;
        }),
        n.d(e, 'T', function() {
          return _n;
        }),
        n.d(e, 'U', function() {
          return tu;
        }),
        n.d(e, 'V', function() {
          return Dc;
        }),
        n.d(e, 'W', function() {
          return hc;
        }),
        n.d(e, 'X', function() {
          return si;
        }),
        n.d(e, 'Y', function() {
          return qa;
        }),
        n.d(e, 'Z', function() {
          return Bn;
        }),
        n.d(e, 'ab', function() {
          return Wn;
        }),
        n.d(e, 'bb', function() {
          return kn;
        }),
        n.d(e, 'cb', function() {
          return hn;
        }),
        n.d(e, 'db', function() {
          return pn;
        }),
        n.d(e, 'eb', function() {
          return bn;
        }),
        n.d(e, 'fb', function() {
          return gn;
        }),
        n.d(e, 'gb', function() {
          return fn;
        }),
        n.d(e, 'hb', function() {
          return mn;
        }),
        n.d(e, 'ib', function() {
          return Ua;
        }),
        n.d(e, 'jb', function() {
          return Xc;
        }),
        n.d(e, 'kb', function() {
          return $a;
        }),
        n.d(e, 'lb', function() {
          return Ba;
        }),
        n.d(e, 'mb', function() {
          return dn;
        }),
        n.d(e, 'nb', function() {
          return D;
        }),
        n.d(e, 'ob', function() {
          return Ai;
        }),
        n.d(e, 'pb', function() {
          return Qi;
        }),
        n.d(e, 'qb', function() {
          return Ki;
        }),
        n.d(e, 'rb', function() {
          return Ei;
        }),
        n.d(e, 'sb', function() {
          return Ha;
        }),
        n.d(e, 'tb', function() {
          return ve;
        }),
        n.d(e, 'ub', function() {
          return E;
        }),
        n.d(e, 'vb', function() {
          return un;
        }),
        n.d(e, 'wb', function() {
          return Lo;
        }),
        n.d(e, 'xb', function() {
          return zo;
        }),
        n.d(e, 'yb', function() {
          return ta;
        }),
        n.d(e, 'zb', function() {
          return Cr;
        }),
        n.d(e, 'Ab', function() {
          return ji;
        }),
        n.d(e, 'Bb', function() {
          return yo;
        }),
        n.d(e, 'Cb', function() {
          return jo;
        }),
        n.d(e, 'Db', function() {
          return No;
        }),
        n.d(e, 'Eb', function() {
          return bo;
        }),
        n.d(e, 'Fb', function() {
          return Wl;
        }),
        n.d(e, 'Gb', function() {
          return _t;
        }),
        n.d(e, 'Hb', function() {
          return Ot;
        }),
        n.d(e, 'Ib', function() {
          return m;
        }),
        n.d(e, 'Jb', function() {
          return b;
        }),
        n.d(e, 'Kb', function() {
          return xt;
        }),
        n.d(e, 'Lb', function() {
          return At;
        }),
        n.d(e, 'Mb', function() {
          return Li;
        }),
        n.d(e, 'Nb', function() {
          return qi;
        }),
        n.d(e, 'Ob', function() {
          return Gi;
        }),
        n.d(e, 'Pb', function() {
          return Zi;
        }),
        n.d(e, 'Qb', function() {
          return zi;
        }),
        n.d(e, 'Rb', function() {
          return Bi;
        }),
        n.d(e, 'Sb', function() {
          return Wi;
        }),
        n.d(e, 'Tb', function() {
          return Ye;
        }),
        n.d(e, 'Ub', function() {
          return Do;
        }),
        n.d(e, 'Vb', function() {
          return hl;
        }),
        n.d(e, 'Wb', function() {
          return ml;
        }),
        n.d(e, 'Xb', function() {
          return dl;
        }),
        n.d(e, 'Yb', function() {
          return gl;
        }),
        n.d(e, 'Zb', function() {
          return tt;
        }),
        n.d(e, 'ac', function() {
          return Fi;
        }),
        n.d(e, 'bc', function() {
          return nc;
        }),
        n.d(e, 'cc', function() {
          return Hi;
        }),
        n.d(e, 'dc', function() {
          return Ji;
        }),
        n.d(e, 'ec', function() {
          return Jl;
        }),
        n.d(e, 'fc', function() {
          return to;
        }),
        n.d(e, 'gc', function() {
          return Rl;
        }),
        n.d(e, 'hc', function() {
          return jl;
        }),
        n.d(e, 'ic', function() {
          return io;
        }),
        n.d(e, 'jc', function() {
          return no;
        }),
        n.d(e, 'kc', function() {
          return Ui;
        }),
        n.d(e, 'lc', function() {
          return oo;
        }),
        n.d(e, 'mc', function() {
          return ao;
        }),
        n.d(e, 'nc', function() {
          return Al;
        }),
        n.d(e, 'oc', function() {
          return Tl;
        }),
        n.d(e, 'pc', function() {
          return Il;
        }),
        n.d(e, 'qc', function() {
          return Pl;
        }),
        n.d(e, 'rc', function() {
          return Zl;
        }),
        n.d(e, 'sc', function() {
          return Vi;
        }),
        n.d(e, 'tc', function() {
          return Bt;
        }),
        n.d(e, 'uc', function() {
          return Kn;
        }),
        n.d(e, 'vc', function() {
          return kt;
        }),
        n.d(e, 'wc', function() {
          return Kl;
        }),
        n.d(e, 'xc', function() {
          return Gl;
        }),
        n.d(e, 'yc', function() {
          return mo;
        }),
        n.d(e, 'zc', function() {
          return Di;
        }),
        n.d(e, 'Ac', function() {
          return ec;
        }),
        n.d(e, 'Bc', function() {
          return Io;
        }),
        n.d(e, 'Cc', function() {
          return Po;
        }),
        n.d(e, 'Dc', function() {
          return Mo;
        }),
        n.d(e, 'Ec', function() {
          return Ro;
        });
      var r = n('XNiG'),
        s = n('quSY'),
        i = n('HDdC'),
        o = n('VRyK'),
        a = n('w1tV');
      function l(t, e, n) {
        const r = (function(t) {
          return function(...e) {
            if (t) {
              const n = t(...e);
              for (const t in n) this[t] = n[t];
            }
          };
        })(e);
        function s(...t) {
          if (this instanceof s) return r.apply(this, t), this;
          const e = new s(...t);
          return (n.annotation = e), n;
          function n(t, n, r) {
            const s = t.hasOwnProperty('__parameters__')
              ? t.__parameters__
              : Object.defineProperty(t, '__parameters__', { value: [] }).__parameters__;
            for (; s.length <= r; ) s.push(null);
            return (s[r] = s[r] || []).push(e), t;
          }
        }
        return (
          n && (s.prototype = Object.create(n.prototype)), (s.prototype.ngMetadataName = t), (s.annotationCls = s), s
        );
      }
      const c = l('Inject', t => ({ token: t })),
        u = l('Optional'),
        h = l('Self'),
        d = l('SkipSelf');
      var p = (function(t) {
        return (
          (t[(t.Default = 0)] = 'Default'),
          (t[(t.Host = 1)] = 'Host'),
          (t[(t.Self = 2)] = 'Self'),
          (t[(t.SkipSelf = 4)] = 'SkipSelf'),
          (t[(t.Optional = 8)] = 'Optional'),
          t
        );
      })({});
      function f(t) {
        for (let e in t) if (t[e] === f) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function g(t, e) {
        for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
      }
      function m(t) {
        return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 };
      }
      function b(t) {
        return { factory: t.factory, providers: t.providers || [], imports: t.imports || [] };
      }
      function y(t) {
        return v(t, t[w]) || v(t, t[x]);
      }
      function v(t, e) {
        return e && e.token === t ? e : null;
      }
      function _(t) {
        return t && (t.hasOwnProperty(C) || t.hasOwnProperty(k)) ? t[C] : null;
      }
      const w = f({ ɵprov: f }),
        C = f({ ɵinj: f }),
        S = f({ ɵprovFallback: f }),
        x = f({ ngInjectableDef: f }),
        k = f({ ngInjectorDef: f });
      function E(t) {
        if ('string' == typeof t) return t;
        if (Array.isArray(t)) return '[' + t.map(E).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return `${t.overriddenName}`;
        if (t.name) return `${t.name}`;
        const e = t.toString();
        if (null == e) return '' + e;
        const n = e.indexOf('\n');
        return -1 === n ? e : e.substring(0, n);
      }
      function O(t, e) {
        return null == t || '' === t ? (null === e ? '' : e) : null == e || '' === e ? t : t + ' ' + e;
      }
      const A = f({ __forward_ref__: f });
      function T(t) {
        return (
          (t.__forward_ref__ = T),
          (t.toString = function() {
            return E(this());
          }),
          t
        );
      }
      function I(t) {
        return P(t) ? t() : t;
      }
      function P(t) {
        return 'function' == typeof t && t.hasOwnProperty(A) && t.__forward_ref__ === T;
      }
      const M = 'undefined' != typeof globalThis && globalThis,
        R = 'undefined' != typeof window && window,
        j =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        N = 'undefined' != typeof global && global,
        D = M || N || R || j,
        V = f({ ɵcmp: f }),
        L = f({ ɵdir: f }),
        F = f({ ɵpipe: f }),
        H = f({ ɵmod: f }),
        U = f({ ɵloc: f }),
        $ = f({ ɵfac: f }),
        B = f({ __NG_ELEMENT_ID__: f });
      class z {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ɵprov = m({ token: this, providedIn: e.providedIn || 'root', factory: e.factory }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const q = new z('INJECTOR', -1),
        Z = {},
        G = /\n/gm,
        W = f({ provide: String, useValue: f });
      let K,
        Q = void 0;
      function J(t) {
        const e = Q;
        return (Q = t), e;
      }
      function Y(t) {
        const e = K;
        return (K = t), e;
      }
      function X(t, e = p.Default) {
        if (void 0 === Q) throw new Error('inject() must be called from an injection context');
        return null === Q ? et(t, void 0, e) : Q.get(t, e & p.Optional ? null : void 0, e);
      }
      function tt(t, e = p.Default) {
        return (K || X)(I(t), e);
      }
      function et(t, e, n) {
        const r = y(t);
        if (r && 'root' == r.providedIn) return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & p.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error(`Injector: NOT_FOUND [${E(t)}]`);
      }
      function nt(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const r = I(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new Error('Arguments array must have arguments.');
            let t = void 0,
              n = p.Default;
            for (let e = 0; e < r.length; e++) {
              const s = r[e];
              s instanceof u || 'Optional' === s.ngMetadataName || s === u
                ? (n |= p.Optional)
                : s instanceof d || 'SkipSelf' === s.ngMetadataName || s === d
                ? (n |= p.SkipSelf)
                : s instanceof h || 'Self' === s.ngMetadataName || s === h
                ? (n |= p.Self)
                : (t = s instanceof c || s === c ? s.token : s);
            }
            e.push(tt(t, n));
          } else e.push(tt(r));
        }
        return e;
      }
      class rt {
        get(t, e = Z) {
          if (e === Z) {
            const e = new Error(`NullInjectorError: No provider for ${E(t)}!`);
            throw ((e.name = 'NullInjectorError'), e);
          }
          return e;
        }
      }
      class st {}
      class it {}
      function ot(t, e) {
        for (let n = 0; n < t.length; n++) e.push(t[n]);
      }
      function at(t, e) {
        t.forEach(t => (Array.isArray(t) ? at(t, e) : e(t)));
      }
      function lt(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function ct(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function ut(t, e) {
        const n = [];
        for (let r = 0; r < t; r++) n.push(e);
        return n;
      }
      function ht(t, e, n) {
        let r = pt(t, e);
        return (
          r >= 0
            ? (t[1 | r] = n)
            : ((r = ~r),
              (function(t, e, n, r) {
                let s = t.length;
                if (s == e) t.push(n, r);
                else if (1 === s) t.push(r, t[0]), (t[0] = n);
                else {
                  for (s--, t.push(t[s - 1], t[s]); s > e; ) (t[s] = t[s - 2]), s--;
                  (t[e] = n), (t[e + 1] = r);
                }
              })(t, r, e, n)),
          r
        );
      }
      function dt(t, e) {
        const n = pt(t, e);
        if (n >= 0) return t[1 | n];
      }
      function pt(t, e) {
        return (function(t, e, n) {
          let r = 0,
            s = t.length >> 1;
          for (; s !== r; ) {
            const n = r + ((s - r) >> 1),
              i = t[n << 1];
            if (e === i) return n << 1;
            i > e ? (s = n) : (r = n + 1);
          }
          return ~(s << 1);
        })(t, e);
      }
      const ft = (function() {
          var t = { OnPush: 0, Default: 1 };
          return (t[t.OnPush] = 'OnPush'), (t[t.Default] = 'Default'), t;
        })(),
        gt = (function() {
          var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (t[t.Emulated] = 'Emulated'),
            (t[t.Native] = 'Native'),
            (t[t.None] = 'None'),
            (t[t.ShadowDom] = 'ShadowDom'),
            t
          );
        })();
      function mt(t) {
        return '' + { toString: t };
      }
      const bt = {},
        yt = [];
      let vt = 0;
      function _t(t) {
        const e = t.type,
          n = e.prototype,
          r = {},
          s = {
            type: e,
            providersResolver: null,
            decls: t.decls,
            vars: t.vars,
            factory: null,
            template: t.template || null,
            consts: t.consts || null,
            ngContentSelectors: t.ngContentSelectors,
            hostBindings: t.hostBindings || null,
            hostVars: t.hostVars || 0,
            hostAttrs: t.hostAttrs || null,
            contentQueries: t.contentQueries || null,
            declaredInputs: r,
            inputs: null,
            outputs: null,
            exportAs: t.exportAs || null,
            onChanges: null,
            onInit: n.ngOnInit || null,
            doCheck: n.ngDoCheck || null,
            afterContentInit: n.ngAfterContentInit || null,
            afterContentChecked: n.ngAfterContentChecked || null,
            afterViewInit: n.ngAfterViewInit || null,
            afterViewChecked: n.ngAfterViewChecked || null,
            onDestroy: n.ngOnDestroy || null,
            onPush: t.changeDetection === ft.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            selectors: t.selectors || yt,
            viewQuery: t.viewQuery || null,
            features: t.features || null,
            data: t.data || {},
            encapsulation: t.encapsulation || gt.Emulated,
            id: 'c',
            styles: t.styles || yt,
            _: null,
            setInput: null,
            schemas: t.schemas || null,
            tView: null
          };
        return (
          (s._ = mt(() => {
            const e = t.directives,
              n = t.features,
              i = t.pipes;
            (s.id += vt++),
              (s.inputs = Et(t.inputs, r)),
              (s.outputs = Et(t.outputs)),
              n && n.forEach(t => t(s)),
              (s.directiveDefs = e ? () => ('function' == typeof e ? e() : e).map(wt) : null),
              (s.pipeDefs = i ? () => ('function' == typeof i ? i() : i).map(Ct) : null);
          })),
          s
        );
      }
      function wt(t) {
        return (
          Tt(t) ||
          (function(t) {
            return t[L] || null;
          })(t)
        );
      }
      function Ct(t) {
        return (function(t) {
          return t[F] || null;
        })(t);
      }
      const St = {};
      function xt(t) {
        const e = {
          type: t.type,
          bootstrap: t.bootstrap || yt,
          declarations: t.declarations || yt,
          imports: t.imports || yt,
          exports: t.exports || yt,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null
        };
        return (
          null != t.id &&
            mt(() => {
              St[t.id] = t.type;
            }),
          e
        );
      }
      function kt(t, e) {
        return mt(() => {
          const n = Pt(t, !0);
          (n.declarations = e.declarations || yt), (n.imports = e.imports || yt), (n.exports = e.exports || yt);
        });
      }
      function Et(t, e) {
        if (null == t) return bt;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let s = t[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])), (n[s] = r), e && (e[s] = i);
          }
        return n;
      }
      const Ot = _t;
      function At(t) {
        return {
          type: t.type,
          name: t.name,
          factory: null,
          pure: !1 !== t.pure,
          onDestroy: t.type.prototype.ngOnDestroy || null
        };
      }
      function Tt(t) {
        return t[V] || null;
      }
      function It(t, e) {
        return t.hasOwnProperty($) ? t[$] : null;
      }
      function Pt(t, e) {
        const n = t[H] || null;
        if (!n && !0 === e) throw new Error(`Type ${E(t)} does not have '\u0275mod' property.`);
        return n;
      }
      function Mt(t) {
        return Array.isArray(t) && 'object' == typeof t[1];
      }
      function Rt(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function jt(t) {
        return 0 != (8 & t.flags);
      }
      function Nt(t) {
        return 2 == (2 & t.flags);
      }
      function Dt(t) {
        return 1 == (1 & t.flags);
      }
      function Vt(t) {
        return null !== t.template;
      }
      function Lt(t) {
        return 0 != (512 & t[2]);
      }
      const Ft = { lFrame: ae(null), bindingsEnabled: !0, checkNoChangesMode: !1 };
      function Ht() {
        return Ft.bindingsEnabled;
      }
      function Ut() {
        return Ft.lFrame.lView;
      }
      function $t() {
        return Ft.lFrame.tView;
      }
      function Bt(t) {
        Ft.lFrame.contextLView = t;
      }
      function zt() {
        return Ft.lFrame.previousOrParentTNode;
      }
      function qt(t, e) {
        (Ft.lFrame.previousOrParentTNode = t), (Ft.lFrame.isParent = e);
      }
      function Zt() {
        return Ft.lFrame.isParent;
      }
      function Gt() {
        Ft.lFrame.isParent = !1;
      }
      function Wt() {
        return Ft.checkNoChangesMode;
      }
      function Kt(t) {
        Ft.checkNoChangesMode = t;
      }
      function Qt() {
        const t = Ft.lFrame;
        let e = t.bindingRootIndex;
        return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e;
      }
      function Jt() {
        return Ft.lFrame.bindingIndex;
      }
      function Yt() {
        return Ft.lFrame.bindingIndex++;
      }
      function Xt(t) {
        const e = Ft.lFrame,
          n = e.bindingIndex;
        return (e.bindingIndex = e.bindingIndex + t), n;
      }
      function te(t, e) {
        const n = Ft.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t), (n.currentDirectiveIndex = e);
      }
      function ee() {
        return Ft.lFrame.currentQueryIndex;
      }
      function ne(t) {
        Ft.lFrame.currentQueryIndex = t;
      }
      function re(t, e) {
        const n = oe();
        (Ft.lFrame = n), (n.previousOrParentTNode = e), (n.lView = t);
      }
      const se = le;
      function ie(t, e) {
        const n = oe(),
          r = t[1];
        (Ft.lFrame = n),
          (n.previousOrParentTNode = e),
          (n.isParent = !0),
          (n.lView = t),
          (n.tView = r),
          (n.selectedIndex = 0),
          (n.contextLView = t),
          (n.elementDepthCount = 0),
          (n.currentDirectiveIndex = -1),
          (n.currentNamespace = null),
          (n.currentSanitizer = null),
          (n.bindingRootIndex = -1),
          (n.bindingIndex = r.bindingStartIndex),
          (n.currentQueryIndex = 0);
      }
      function oe() {
        const t = Ft.lFrame,
          e = null === t ? null : t.child;
        return null === e ? ae(t) : e;
      }
      function ae(t) {
        const e = {
          previousOrParentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentSanitizer: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null
        };
        return null !== t && (t.child = e), e;
      }
      function le() {
        Ft.lFrame = Ft.lFrame.parent;
      }
      function ce() {
        return Ft.lFrame.selectedIndex;
      }
      function ue(t) {
        Ft.lFrame.selectedIndex = t;
      }
      function he(t, e) {
        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          const e = t.data[n];
          e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, e.afterContentInit),
            e.afterContentChecked &&
              ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked)),
            e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit),
            e.afterViewChecked &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked)),
            null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy);
        }
      }
      function de(t, e, n) {
        ge(t, e, 3, n);
      }
      function pe(t, e, n, r) {
        (3 & t[2]) === n && ge(t, e, n, r);
      }
      function fe(t, e) {
        let n = t[2];
        (3 & n) === e && ((n &= 1023), (n += 1), (t[2] = n));
      }
      function ge(t, e, n, r) {
        const s = null != r ? r : -1;
        let i = 0;
        for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
          if ('number' == typeof e[o + 1]) {
            if (((i = e[o]), null != r && i >= r)) break;
          } else
            e[o] < 0 && (t[18] += 65536),
              (i < s || -1 == s) && (me(t, n, e, o), (t[18] = (4294901760 & t[18]) + o + 2)),
              o++;
      }
      function me(t, e, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = t[s ? -n[r] : n[r]];
        s ? t[2] >> 10 < t[18] >> 16 && (3 & t[2]) === e && ((t[2] += 1024), i.call(o)) : i.call(o);
      }
      class be {
        constructor(t, e, n) {
          (this.factory = t), (this.resolving = !1), (this.canSeeViewProviders = e), (this.injectImpl = n);
        }
      }
      let ye = void 0;
      function ve(t) {
        ye = t;
      }
      function _e() {
        return void 0 !== ye ? ye : 'undefined' != typeof document ? document : void 0;
      }
      function we(t) {
        return !!t.listen;
      }
      const Ce = { createRenderer: (t, e) => _e() };
      function Se(t, e, n) {
        const r = we(t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ('number' == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              l = n[s++];
            r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++s];
            ke(o) ? r && t.setProperty(e, o, a) : r ? t.setAttribute(e, o, a) : e.setAttribute(o, a), s++;
          }
        }
        return s;
      }
      function xe(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function ke(t) {
        return 64 === t.charCodeAt(0);
      }
      function Ee(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else {
          let n = -1;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            'number' == typeof s ? (n = s) : 0 === n || Oe(t, n, s, null, -1 === n || 2 === n ? e[++r] : null);
          }
        }
        return t;
      }
      function Oe(t, e, n, r, s) {
        let i = 0,
          o = t.length;
        if (-1 === e) o = -1;
        else
          for (; i < t.length; ) {
            const n = t[i++];
            if ('number' == typeof n) {
              if (n === e) {
                o = -1;
                break;
              }
              if (n > e) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < t.length; ) {
          const e = t[i];
          if ('number' == typeof e) break;
          if (e === n) {
            if (null === r) return void (null !== s && (t[i + 1] = s));
            if (r === t[i + 1]) return void (t[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (t.splice(o, 0, e), (i = o + 1)),
          t.splice(i++, 0, n),
          null !== r && t.splice(i++, 0, r),
          null !== s && t.splice(i++, 0, s);
      }
      function Ae(t) {
        return -1 !== t;
      }
      function Te(t) {
        return 32767 & t;
      }
      function Ie(t) {
        return t >> 16;
      }
      function Pe(t, e) {
        let n = Ie(t),
          r = e;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      function Me(t) {
        return 'string' == typeof t ? t : null == t ? '' : '' + t;
      }
      function Re(t) {
        return 'function' == typeof t
          ? t.name || t.toString()
          : 'object' == typeof t && null != t && 'function' == typeof t.type
          ? t.type.name || t.type.toString()
          : Me(t);
      }
      const je = (() =>
        (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(D))();
      function Ne(t) {
        return t instanceof Function ? t() : t;
      }
      let De = !0;
      function Ve(t) {
        const e = De;
        return (De = t), e;
      }
      let Le = 0;
      function Fe(t, e) {
        const n = Ue(t, e);
        if (-1 !== n) return n;
        const r = e[1];
        r.firstCreatePass && ((t.injectorIndex = e.length), He(r.data, t), He(e, null), He(r.blueprint, null));
        const s = $e(t, e),
          i = t.injectorIndex;
        if (Ae(s)) {
          const t = Te(s),
            n = Pe(s, e),
            r = n[1].data;
          for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s];
        }
        return (e[i + 8] = s), i;
      }
      function He(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function Ue(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null == e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function $e(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
        let n = e[6],
          r = 1;
        for (; n && -1 === n.injectorIndex; ) (n = (e = e[15]) ? e[6] : null), r++;
        return n ? n.injectorIndex | (r << 16) : -1;
      }
      function Be(t, e, n) {
        !(function(t, e, n) {
          let r = 'string' != typeof n ? n[B] : n.charCodeAt(0) || 0;
          null == r && (r = n[B] = Le++);
          const s = 255 & r,
            i = 1 << s,
            o = 64 & s,
            a = 32 & s,
            l = e.data;
          128 & s
            ? o
              ? a
                ? (l[t + 7] |= i)
                : (l[t + 6] |= i)
              : a
              ? (l[t + 5] |= i)
              : (l[t + 4] |= i)
            : o
            ? a
              ? (l[t + 3] |= i)
              : (l[t + 2] |= i)
            : a
            ? (l[t + 1] |= i)
            : (l[t] |= i);
        })(t, e, n);
      }
      function ze(t, e, n, r = p.Default, s) {
        if (null !== t) {
          const s = (function(t) {
            if ('string' == typeof t) return t.charCodeAt(0) || 0;
            const e = t[B];
            return 'number' == typeof e && e > 0 ? 255 & e : e;
          })(n);
          if ('function' == typeof s) {
            re(e, t);
            try {
              const t = s();
              if (null != t || r & p.Optional) return t;
              throw new Error(`No provider for ${Re(n)}!`);
            } finally {
              se();
            }
          } else if ('number' == typeof s) {
            if (-1 === s) return new Je(t, e);
            let i = null,
              o = Ue(t, e),
              a = -1,
              l = r & p.Host ? e[16][6] : null;
            for (
              (-1 === o || r & p.SkipSelf) &&
              ((a = -1 === o ? $e(t, e) : e[o + 8]), Qe(r, !1) ? ((i = e[1]), (o = Te(a)), (e = Pe(a, e))) : (o = -1));
              -1 !== o;

            ) {
              a = e[o + 8];
              const t = e[1];
              if (Ke(s, o, t.data)) {
                const t = Ze(o, e, n, i, r, l);
                if (t !== qe) return t;
              }
              Qe(r, e[1].data[o + 8] === l) && Ke(s, o, e) ? ((i = t), (o = Te(a)), (e = Pe(a, e))) : (o = -1);
            }
          }
        }
        if ((r & p.Optional && void 0 === s && (s = null), 0 == (r & (p.Self | p.Host)))) {
          const t = e[9],
            i = Y(void 0);
          try {
            return t ? t.get(n, s, r & p.Optional) : et(n, s, r & p.Optional);
          } finally {
            Y(i);
          }
        }
        if (r & p.Optional) return s;
        throw new Error(`NodeInjector: NOT_FOUND [${Re(n)}]`);
      }
      const qe = {};
      function Ze(t, e, n, r, s, i) {
        const o = e[1],
          a = o.data[t + 8],
          l = Ge(a, o, n, null == r ? Nt(a) && De : r != o && 3 === a.type, s & p.Host && i === a);
        return null !== l ? We(e, o, l, a) : qe;
      }
      function Ge(t, e, n, r, s) {
        const i = t.providerIndexes,
          o = e.data,
          a = 65535 & i,
          l = t.directiveStart,
          c = i >> 16,
          u = s ? a + c : t.directiveEnd;
        for (let h = r ? a : a + c; h < u; h++) {
          const t = o[h];
          if ((h < l && n === t) || (h >= l && t.type === n)) return h;
        }
        if (s) {
          const t = o[l];
          if (t && Vt(t) && t.type === n) return l;
        }
        return null;
      }
      function We(t, e, n, r) {
        let s = t[n];
        const i = e.data;
        if (s instanceof be) {
          const o = s;
          if (o.resolving) throw new Error(`Circular dep for ${Re(i[n])}`);
          const a = Ve(o.canSeeViewProviders);
          let l;
          (o.resolving = !0), o.injectImpl && (l = Y(o.injectImpl)), re(t, r);
          try {
            (s = t[n] = o.factory(void 0, i, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function(t, e, n) {
                  const { onChanges: r, onInit: s, doCheck: i } = e;
                  r &&
                    ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)),
                    s && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i),
                      (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i));
                })(n, i[n], e);
          } finally {
            o.injectImpl && Y(l), Ve(a), (o.resolving = !1), se();
          }
        }
        return s;
      }
      function Ke(t, e, n) {
        const r = 64 & t,
          s = 32 & t;
        let i;
        return (
          (i =
            128 & t
              ? r
                ? s
                  ? n[e + 7]
                  : n[e + 6]
                : s
                ? n[e + 5]
                : n[e + 4]
              : r
              ? s
                ? n[e + 3]
                : n[e + 2]
              : s
              ? n[e + 1]
              : n[e]),
          !!(i & (1 << t))
        );
      }
      function Qe(t, e) {
        return !(t & p.Self || (t & p.Host && e));
      }
      class Je {
        constructor(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        get(t, e) {
          return ze(this._tNode, this._lView, t, void 0, e);
        }
      }
      function Ye(t) {
        const e = Object.getPrototypeOf(t.prototype).constructor,
          n =
            e[$] ||
            (function t(e) {
              const n = e;
              if (P(e))
                return () => {
                  const e = t(I(n));
                  return e ? e() : null;
                };
              let r = It(n);
              if (null === r) {
                const t = _(n);
                r = t && t.factory;
              }
              return r || null;
            })(e);
        return null !== n ? n : t => new t();
      }
      function Xe(t) {
        return t.ngDebugContext;
      }
      function tn(t) {
        return t.ngOriginalError;
      }
      function en(t, ...e) {
        t.error(...e);
      }
      class nn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function(t) {
              return t.ngErrorLogger || en;
            })(t);
          r(this._console, 'ERROR', t),
            e && r(this._console, 'ORIGINAL ERROR', e),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(t) {
          return t ? (Xe(t) ? Xe(t) : this._findContext(tn(t))) : null;
        }
        _findOriginalError(t) {
          let e = tn(t);
          for (; e && tn(e); ) e = tn(e);
          return e;
        }
      }
      class rn {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class sn extends rn {
        getTypeName() {
          return 'HTML';
        }
      }
      class on extends rn {
        getTypeName() {
          return 'Style';
        }
      }
      class an extends rn {
        getTypeName() {
          return 'Script';
        }
      }
      class ln extends rn {
        getTypeName() {
          return 'URL';
        }
      }
      class cn extends rn {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function un(t) {
        return t instanceof rn ? t.changingThisBreaksApplicationSecurity : t;
      }
      function hn(t, e) {
        const n = dn(t);
        if (null != n && n !== e) {
          if ('ResourceURL' === n && 'URL' === e) return !0;
          throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`);
        }
        return n === e;
      }
      function dn(t) {
        return (t instanceof rn && t.getTypeName()) || null;
      }
      function pn(t) {
        return new sn(t);
      }
      function fn(t) {
        return new on(t);
      }
      function gn(t) {
        return new an(t);
      }
      function mn(t) {
        return new ln(t);
      }
      function bn(t) {
        return new cn(t);
      }
      let yn = !0,
        vn = !1;
      function _n() {
        return (vn = !0), yn;
      }
      function wn() {
        if (vn) throw new Error('Cannot enable prod mode after platform setup.');
        yn = !1;
      }
      class Cn {
        constructor(t) {
          (this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert'));
          let e = this.inertDocument.body;
          if (null == e) {
            const t = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(t), (e = this.inertDocument.createElement('body')), t.appendChild(e);
          }
          (e.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !e.querySelector || e.querySelector('svg')
              ? ((e.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  e.querySelector &&
                  e.querySelector('svg img') &&
                  (function() {
                    try {
                      return !!window.DOMParser;
                    } catch (t) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            t = encodeURI(t);
          } catch (r) {
            return null;
          }
          const e = new XMLHttpRequest();
          (e.responseType = 'document'), e.open('GET', 'data:text/html;charset=utf-8,' + t, !1), e.send(void 0);
          const n = e.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            const e = new window.DOMParser().parseFromString(t, 'text/html').body;
            return e.removeChild(e.firstChild), e;
          } catch (e) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(t) {
          const e = this.inertDocument.createElement('template');
          if ('content' in e) return (e.innerHTML = t), e;
          const n = this.inertDocument.createElement('body');
          return (n.innerHTML = t), this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n;
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let r = e.length - 1; 0 < r; r--) {
            const n = e.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) || t.removeAttribute(n);
          }
          let n = t.firstChild;
          for (; n; ) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), (n = n.nextSibling);
        }
      }
      const Sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        xn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function kn(t) {
        return (t = String(t)).match(Sn) || t.match(xn)
          ? t
          : (_n() && console.warn(`WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`),
            'unsafe:' + t);
      }
      function En(t) {
        return (t = String(t))
          .split(',')
          .map(t => kn(t.trim()))
          .join(', ');
      }
      function On(t) {
        const e = {};
        for (const n of t.split(',')) e[n] = !0;
        return e;
      }
      function An(...t) {
        const e = {};
        for (const n of t) for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
        return e;
      }
      const Tn = On('area,br,col,hr,img,wbr'),
        In = On('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Pn = On('rp,rt'),
        Mn = An(Pn, In),
        Rn = An(
          Tn,
          An(
            In,
            On(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          An(
            Pn,
            On(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          Mn
        ),
        jn = On('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Nn = On('srcset'),
        Dn = An(
          jn,
          Nn,
          On(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          On(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        Vn = On('script,style,template');
      class Ln {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let t = this.checkClobberedElement(e, e.nextSibling);
                if (t) {
                  e = t;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!Rn.hasOwnProperty(e)) return (this.sanitizedSomething = !0), !Vn.hasOwnProperty(e);
          this.buf.push('<'), this.buf.push(e);
          const n = t.attributes;
          for (let r = 0; r < n.length; r++) {
            const t = n.item(r),
              e = t.name,
              s = e.toLowerCase();
            if (!Dn.hasOwnProperty(s)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let i = t.value;
            jn[s] && (i = kn(i)), Nn[s] && (i = En(i)), this.buf.push(' ', e, '="', Un(i), '"');
          }
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          Rn.hasOwnProperty(e) && !Tn.hasOwnProperty(e) && (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(Un(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);
          return e;
        }
      }
      const Fn = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Hn = /([^\#-~ |!])/g;
      function Un(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(Fn, function(t) {
            return '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';';
          })
          .replace(Hn, function(t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let $n;
      function Bn(t, e) {
        let n = null;
        try {
          $n = $n || new Cn(t);
          let r = e ? String(e) : '';
          n = $n.getInertBodyElement(r);
          let s = 5,
            i = r;
          do {
            if (0 === s) throw new Error('Failed to sanitize html because the input is unstable');
            s--, (r = i), (i = n.innerHTML), (n = $n.getInertBodyElement(r));
          } while (r !== i);
          const o = new Ln(),
            a = o.sanitizeChildren(zn(n) || n);
          return (
            _n() &&
              o.sanitizedSomething &&
              console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'),
            a
          );
        } finally {
          if (n) {
            const t = zn(n) || n;
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
        }
      }
      function zn(t) {
        return 'content' in t &&
          (function(t) {
            return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName;
          })(t)
          ? t.content
          : null;
      }
      const qn = (function() {
          var t = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
          return (
            (t[t.NONE] = 'NONE'),
            (t[t.HTML] = 'HTML'),
            (t[t.STYLE] = 'STYLE'),
            (t[t.SCRIPT] = 'SCRIPT'),
            (t[t.URL] = 'URL'),
            (t[t.RESOURCE_URL] = 'RESOURCE_URL'),
            t
          );
        })(),
        Zn = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        Gn = /^url\(([^)]+)\)$/;
      function Wn(t) {
        if (!(t = String(t).trim())) return '';
        const e = t.match(Gn);
        return (e && kn(e[1]) === e[1]) ||
          (t.match(Zn) &&
            (function(t) {
              let e = !0,
                n = !0;
              for (let r = 0; r < t.length; r++) {
                const s = t.charAt(r);
                "'" === s && n ? (e = !e) : '"' === s && e && (n = !n);
              }
              return e && n;
            })(t))
          ? t
          : (_n() && console.warn(`WARNING: sanitizing unsafe style value ${t} (see http://g.co/ng/security#xss).`),
            'unsafe');
      }
      function Kn(t) {
        const e = (function() {
          const t = Ut();
          return t && t[12];
        })();
        return e ? e.sanitize(qn.URL, t) || '' : hn(t, 'URL') ? un(t) : kn(Me(t));
      }
      function Qn(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function Jn(t, e) {
        return Qn(e[t + 19]);
      }
      function Yn(t, e) {
        return Qn(e[t.index]);
      }
      function Xn(t, e) {
        return t.data[e + 19];
      }
      function tr(t, e) {
        return t[e + 19];
      }
      function er(t, e) {
        const n = e[t];
        return Mt(n) ? n : n[0];
      }
      function nr(t) {
        const e = (function(t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function rr(t) {
        return 4 == (4 & t[2]);
      }
      function sr(t) {
        return 128 == (128 & t[2]);
      }
      function ir(t, e) {
        return null === t || null == e ? null : t[e];
      }
      function or(t) {
        t[18] = 0;
      }
      function ar(t, e) {
        t.__ngContext__ = e;
      }
      function lr(t) {
        throw new Error(`Multiple components match node with tagname ${t.tagName}`);
      }
      function cr() {
        throw new Error('Cannot mix multi providers and regular providers');
      }
      function ur(t, e, n) {
        let r = t.length;
        for (;;) {
          const s = t.indexOf(e, n);
          if (-1 === s) return s;
          if (0 === s || t.charCodeAt(s - 1) <= 32) {
            const n = e.length;
            if (s + n === r || t.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function hr(t, e, n) {
        let r = 0;
        for (; r < t.length; ) {
          let s = t[r++];
          if (n && 'class' === s) {
            if (((s = t[r]), -1 !== ur(s.toLowerCase(), e, 0))) return !0;
          } else if (1 === s) {
            for (; r < t.length && 'string' == typeof (s = t[r++]); ) if (s.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function dr(t, e, n) {
        return e === (0 !== t.type || n ? t.tagName : 'ng-template');
      }
      function pr(t, e, n) {
        let r = 4;
        const s = t.attrs || [],
          i = (function(t) {
            for (let e = 0; e < t.length; e++) if (xe(t[e])) return e;
            return t.length;
          })(s);
        let o = !1;
        for (let a = 0; a < e.length; a++) {
          const l = e[a];
          if ('number' != typeof l) {
            if (!o)
              if (4 & r) {
                if (((r = 2 | (1 & r)), ('' !== l && !dr(t, l, n)) || ('' === l && 1 === e.length))) {
                  if (fr(r)) return !1;
                  o = !0;
                }
              } else {
                const c = 8 & r ? l : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!hr(t.attrs, c, n)) {
                    if (fr(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const u = gr(8 & r ? 'class' : l, s, 0 == t.type && 'ng-template' !== t.tagName, n);
                if (-1 === u) {
                  if (fr(r)) return !1;
                  o = !0;
                  continue;
                }
                if ('' !== c) {
                  let t;
                  t = u > i ? '' : s[u + 1].toLowerCase();
                  const e = 8 & r ? t : null;
                  if ((e && -1 !== ur(e, c, 0)) || (2 & r && c !== t)) {
                    if (fr(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !fr(r) && !fr(l)) return !1;
            if (o && fr(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return fr(r) || o;
      }
      function fr(t) {
        return 0 == (1 & t);
      }
      function gr(t, e, n, r) {
        if (null === e) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < e.length; ) {
            const r = e[s];
            if (r === t) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let t = e[++s];
                for (; 'string' == typeof t; ) t = e[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function(t, e) {
          let n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              if (t[n] === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function mr(t, e, n = !1) {
        for (let r = 0; r < e.length; r++) if (pr(t, e[r], n)) return !0;
        return !1;
      }
      function br(t, e) {
        t: for (let n = 0; n < e.length; n++) {
          const r = e[n];
          if (t.length === r.length) {
            for (let e = 0; e < t.length; e++) if (t[e] !== r[e]) continue t;
            return !0;
          }
        }
        return !1;
      }
      function yr(t, e) {
        return t ? ':not(' + e.trim() + ')' : e;
      }
      function vr(t) {
        let e = t[0],
          n = 1,
          r = 2,
          s = '',
          i = !1;
        for (; n < t.length; ) {
          let o = t[n];
          if ('string' == typeof o)
            if (2 & r) {
              const e = t[++n];
              s += '[' + o + (e.length > 0 ? '="' + e + '"' : '') + ']';
            } else 8 & r ? (s += '.' + o) : 4 & r && (s += ' ' + o);
          else '' === s || fr(o) || ((e += yr(i, s)), (s = '')), (r = o), (i = i || !fr(r));
          n++;
        }
        return '' !== s && (e += yr(i, s)), e;
      }
      const _r = {};
      function wr(t) {
        const e = t[3];
        return Rt(e) ? e[3] : e;
      }
      function Cr(t) {
        Sr($t(), Ut(), ce() + t, Wt());
      }
      function Sr(t, e, n, r) {
        if (!r)
          if (3 == (3 & e[2])) {
            const r = t.preOrderCheckHooks;
            null !== r && de(e, r, n);
          } else {
            const r = t.preOrderHooks;
            null !== r && pe(e, r, 0, n);
          }
        ue(n);
      }
      const xr = { marker: 'element' },
        kr = { marker: 'comment' };
      function Er(t, e) {
        return (t << 17) | (e << 2);
      }
      function Or(t) {
        return (t >> 17) & 32767;
      }
      function Ar(t) {
        return 2 | t;
      }
      function Tr(t) {
        return (131068 & t) >> 2;
      }
      function Ir(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function Pr(t) {
        return 1 | t;
      }
      function Mr(t, e) {
        const n = t.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = t.data[i];
              ne(s), n.contentQueries(2, e[i], i);
            }
          }
      }
      function Rr(t, e, n) {
        return we(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t);
      }
      function jr(t, e, n, r, s, i, o, a, l, c) {
        const u = e.blueprint.slice();
        return (
          (u[0] = s),
          (u[2] = 140 | r),
          or(u),
          (u[3] = u[15] = t),
          (u[8] = n),
          (u[10] = o || (t && t[10])),
          (u[11] = a || (t && t[11])),
          (u[12] = l || (t && t[12]) || null),
          (u[9] = c || (t && t[9]) || null),
          (u[6] = i),
          (u[16] = 2 == e.type ? t[16] : u),
          u
        );
      }
      function Nr(t, e, n, r, s, i) {
        const o = n + 19,
          a =
            t.data[o] ||
            (function(t, e, n, r, s, i) {
              const o = zt(),
                a = Zt(),
                l = a ? o : o && o.parent,
                c = (t.data[n] = qr(0, l && l !== e ? l : null, r, n, s, i));
              return (
                null === t.firstChild && (t.firstChild = c),
                o && (!a || null != o.child || (null === c.parent && 2 !== o.type) ? a || (o.next = c) : (o.child = c)),
                c
              );
            })(t, e, o, r, s, i);
        return qt(a, !0), a;
      }
      function Dr(t, e, n) {
        ie(e, e[6]);
        try {
          const r = t.viewQuery;
          null !== r && gs(1, r, n);
          const s = t.template;
          null !== s && Fr(t, e, s, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && Mr(t, e),
            t.staticViewQueries && gs(2, t.viewQuery, n);
          const i = t.components;
          null !== i &&
            (function(t, e) {
              for (let n = 0; n < e.length; n++) us(t, e[n]);
            })(e, i);
        } finally {
          (e[2] &= -5), le();
        }
      }
      function Vr(t, e, n, r) {
        const s = e[2];
        if (256 == (256 & s)) return;
        ie(e, e[6]);
        const i = Wt();
        try {
          or(e), (Ft.lFrame.bindingIndex = t.bindingStartIndex), null !== n && Fr(t, e, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = t.preOrderCheckHooks;
              null !== n && de(e, n, null);
            } else {
              const n = t.preOrderHooks;
              null !== n && pe(e, n, 0, null), fe(e, 0);
            }
          if (
            ((function(t) {
              let e = t[13];
              for (; null !== e; ) {
                let n;
                if (Rt(e) && (n = e[2]) >> 1 == -1) {
                  for (let t = 9; t < e.length; t++) {
                    const n = e[t],
                      r = n[1];
                    sr(n) && Vr(r, n, r.template, n[8]);
                  }
                  0 != (1 & n) && ls(e, t[16]);
                }
                e = e[4];
              }
            })(e),
            null !== t.contentQueries && Mr(t, e),
            !i)
          )
            if (o) {
              const n = t.contentCheckHooks;
              null !== n && de(e, n);
            } else {
              const n = t.contentHooks;
              null !== n && pe(e, n, 1), fe(e, 1);
            }
          !(function(t, e) {
            try {
              const n = t.expandoInstructions;
              if (null !== n) {
                let r = t.expandoStartIndex,
                  s = -1,
                  i = -1;
                for (let t = 0; t < n.length; t++) {
                  const o = n[t];
                  'number' == typeof o
                    ? o <= 0
                      ? ((i = 0 - o), ue(i), (r += 9 + n[++t]), (s = r))
                      : (r += o)
                    : (null !== o && (te(r, s), o(2, e[s])), s++);
                }
              }
            } finally {
              ue(-1);
            }
          })(t, e);
          const a = t.components;
          null !== a &&
            (function(t, e) {
              for (let n = 0; n < e.length; n++) cs(t, e[n]);
            })(e, a);
          const l = t.viewQuery;
          if ((null !== l && gs(2, l, r), !i))
            if (o) {
              const n = t.viewCheckHooks;
              null !== n && de(e, n);
            } else {
              const n = t.viewHooks;
              null !== n && pe(e, n, 2), fe(e, 2);
            }
          !0 === t.firstUpdatePass && (t.firstUpdatePass = !1), i || (e[2] &= -73);
        } finally {
          le();
        }
      }
      function Lr(t, e, n, r) {
        const s = e[10],
          i = !Wt(),
          o = rr(e);
        try {
          i && !o && s.begin && s.begin(), o && Dr(t, e, r), Vr(t, e, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function Fr(t, e, n, r, s) {
        const i = ce();
        try {
          ue(-1), 2 & r && e.length > 19 && Sr(t, e, 0, Wt()), n(r, s);
        } finally {
          ue(i);
        }
      }
      function Hr(t, e, n) {
        if (jt(e)) {
          const r = e.directiveEnd;
          for (let s = e.directiveStart; s < r; s++) {
            const e = t.data[s];
            e.contentQueries && e.contentQueries(1, n[s], s);
          }
        }
      }
      function Ur(t, e, n) {
        Ht() &&
          ((function(t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || Fe(n, e), ar(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = Vt(r);
              i && rs(e, n, r);
              const l = We(e, t, a, n);
              ar(l, e), null !== o && is(0, a - s, l, r, 0, o), i && (er(n.index, e)[8] = l);
            }
          })(t, e, n, Yn(n, e)),
          128 == (128 & n.flags) &&
            (function(t, e, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = t.expandoInstructions,
                o = t.firstCreatePass,
                a = n.index - 19;
              try {
                ue(a);
                for (let n = r; n < s; n++) {
                  const r = t.data[n],
                    s = e[n];
                  null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs ? Jr(r, s) : o && i.push(null);
                }
              } finally {
                ue(-1);
              }
            })(t, e, n));
      }
      function $r(t, e, n = Yn) {
        const r = e.localNames;
        if (null !== r) {
          let s = e.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(e, t) : t[o];
            t[s++] = a;
          }
        }
      }
      function Br(t) {
        return (
          t.tView ||
          (t.tView = zr(
            1,
            -1,
            t.template,
            t.decls,
            t.vars,
            t.directiveDefs,
            t.pipeDefs,
            t.viewQuery,
            t.schemas,
            t.consts
          ))
        );
      }
      function zr(t, e, n, r, s, i, o, a, l, c) {
        const u = 19 + r,
          h = u + s,
          d = (function(t, e) {
            const n = [];
            for (let r = 0; r < e; r++) n.push(r < t ? null : _r);
            return n;
          })(u, h);
        return (d[1] = {
          type: t,
          id: e,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          node: null,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: c
        });
      }
      function qr(t, e, n, r, s, i) {
        return {
          type: n,
          index: r,
          injectorIndex: e ? e.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: s,
          attrs: i,
          mergedAttrs: null,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: e,
          projection: null,
          styles: null,
          residualStyles: void 0,
          classes: null,
          residualClasses: void 0,
          classBindings: 0,
          styleBindings: 0
        };
      }
      function Zr(t, e, n) {
        for (let r in t)
          if (t.hasOwnProperty(r)) {
            const s = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, s) : (n[r] = [e, s]);
          }
        return n;
      }
      function Gr(t, e, n, r, s, i, o, a) {
        const l = Jn(n, e),
          c = Xn(t, n);
        let u,
          h = c.inputs;
        if (!o && null != h && (u = h[r]))
          _s(t, e, u, r, s),
            Nt(c) &&
              (function(t, e) {
                const n = er(e, t);
                16 & n[2] || (n[2] |= 64);
              })(e, n + 19);
        else if (3 === c.type) {
          r =
            'class' === (d = r)
              ? 'className'
              : 'for' === d
              ? 'htmlFor'
              : 'formaction' === d
              ? 'formAction'
              : 'innerHtml' === d
              ? 'innerHTML'
              : 'readonly' === d
              ? 'readOnly'
              : 'tabindex' === d
              ? 'tabIndex'
              : d;
          const t = a ? a(c, e) : e[11];
          (s = null != i ? i(s, c.tagName || '', r) : s),
            we(t) ? t.setProperty(l, r, s) : ke(r) || (l.setProperty ? l.setProperty(r, s) : (l[r] = s));
        }
        var d;
      }
      function Wr(t, e, n, r) {
        let s = !1;
        if (Ht()) {
          const i = (function(t, e, n) {
              const r = t.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  mr(n, o.selectors, !1) &&
                    (s || (s = []),
                    Be(Fe(n, e), t, o.type),
                    Vt(o) ? (2 & n.flags && lr(n), Xr(t, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(t, e, n),
            o = null === r ? null : { '': -1 };
          if (null !== i) {
            let r = 0;
            (s = !0), es(n, t.data.length, i.length);
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.providersResolver && e.providersResolver(e);
            }
            Yr(t, n, i.length);
            let a = !1,
              l = !1;
            for (let s = 0; s < i.length; s++) {
              const c = i[s];
              (n.mergedAttrs = Ee(n.mergedAttrs, c.hostAttrs)),
                ns(t, e, c),
                ts(t.data.length - 1, c, o),
                null !== c.contentQueries && (n.flags |= 8),
                (null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars) || (n.flags |= 128),
                !a &&
                  (c.onChanges || c.onInit || c.doCheck) &&
                  ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 19), (a = !0)),
                l ||
                  (!c.onChanges && !c.doCheck) ||
                  ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 19), (l = !0)),
                Kr(t, c),
                (r += c.hostVars);
            }
            !(function(t, e) {
              const n = e.directiveEnd,
                r = t.data,
                s = e.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = e.directiveStart; l < n; l++) {
                const t = r[l],
                  e = t.inputs;
                i.push(null !== s ? os(e, s) : null), (o = Zr(e, l, o)), (a = Zr(t.outputs, l, a));
              }
              null !== o &&
                ((o.hasOwnProperty('class') || o.hasOwnProperty('className')) && (e.flags |= 16),
                o.hasOwnProperty('style') && (e.flags |= 32)),
                (e.initialInputs = i),
                (e.inputs = o),
                (e.outputs = a);
            })(t, n),
              Qr(t, e, r);
          }
          o &&
            (function(t, e, n) {
              if (e) {
                const r = (t.localNames = []);
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s) throw new Error(`Export of name '${e[t + 1]}' not found!`);
                  r.push(e[t], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = Ee(n.mergedAttrs, n.attrs)), s;
      }
      function Kr(t, e) {
        const n = t.expandoInstructions;
        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars);
      }
      function Qr(t, e, n) {
        for (let r = 0; r < n; r++) e.push(_r), t.blueprint.push(_r), t.data.push(null);
      }
      function Jr(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function Yr(t, e, n) {
        const r = 19 - e.index,
          s = t.data.length - (65535 & e.providerIndexes);
        (t.expandoInstructions || (t.expandoInstructions = [])).push(r, s, n);
      }
      function Xr(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function ts(t, e, n) {
        if (n) {
          if (e.exportAs) for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          Vt(e) && (n[''] = t);
        }
      }
      function es(t, e, n) {
        (t.flags |= 1), (t.directiveStart = e), (t.directiveEnd = e + n), (t.providerIndexes = e);
      }
      function ns(t, e, n) {
        t.data.push(n);
        const r = n.factory || (n.factory = It(n.type)),
          s = new be(r, Vt(n), null);
        t.blueprint.push(s), e.push(s);
      }
      function rs(t, e, n) {
        const r = Yn(e, t),
          s = Br(n),
          i = t[10],
          o = hs(t, jr(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n)));
        t[e.index] = o;
      }
      function ss(t, e, n, r, s, i, o) {
        const a = Jn(t, s),
          l = s[11];
        if (null == n) we(l) ? l.removeAttribute(a, e, o) : a.removeAttribute(e);
        else {
          const s = Xn(r, t),
            c = null == i ? Me(n) : i(n, s.tagName || '', e);
          we(l) ? l.setAttribute(a, e, c, o) : o ? a.setAttributeNS(o, e, c) : a.setAttribute(e, c);
        }
      }
      function is(t, e, n, r, s, i) {
        const o = i[e];
        if (null !== o) {
          const t = r.setInput;
          for (let e = 0; e < o.length; ) {
            const s = o[e++],
              i = o[e++],
              a = o[e++];
            null !== t ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function os(t, e) {
        let n = null,
          r = 0;
        for (; r < e.length; ) {
          const s = e[r];
          if (0 !== s)
            if (5 !== s) {
              if ('number' == typeof s) break;
              t.hasOwnProperty(s) && (null === n && (n = []), n.push(s, t[s], e[r + 1])), (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function as(t, e, n, r) {
        return new Array(t, !0, -2, e, null, null, r, n, null);
      }
      function ls(t, e) {
        const n = t[5];
        for (let r = 0; r < n.length; r++) {
          const t = n[r],
            s = t[3][3][16];
          if (s !== e && 0 == (16 & s[2])) {
            const e = t[1];
            Vr(e, t, e.template, t[8]);
          }
        }
      }
      function cs(t, e) {
        const n = er(e, t);
        if (sr(n) && 80 & n[2]) {
          const t = n[1];
          Vr(t, n, t.template, n[8]);
        }
      }
      function us(t, e) {
        const n = er(e, t),
          r = n[1];
        !(function(t, e) {
          for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n]);
        })(r, n),
          Dr(r, n, n[8]);
      }
      function hs(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function ds(t) {
        for (; t; ) {
          t[2] |= 64;
          const e = wr(t);
          if (Lt(t) && !e) return t;
          t = e;
        }
        return null;
      }
      function ps(t, e, n) {
        const r = e[10];
        r.begin && r.begin();
        try {
          Vr(t, e, t.template, n);
        } catch (s) {
          throw (vs(e, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function fs(t) {
        !(function(t) {
          for (let e = 0; e < t.components.length; e++) {
            const n = t.components[e],
              r = nr(n),
              s = r[1];
            Lr(s, r, s.template, n);
          }
        })(t[8]);
      }
      function gs(t, e, n) {
        ne(0), e(t, n);
      }
      const ms = (() => Promise.resolve(null))();
      function bs(t) {
        return t[7] || (t[7] = []);
      }
      function ys(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function vs(t, e) {
        const n = t[9],
          r = n ? n.get(nn, null) : null;
        r && r.handleError(e);
      }
      function _s(t, e, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = e[o],
            c = t.data[o];
          null !== c.setInput ? c.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function ws(t, e, n) {
        const r = Jn(e, t),
          s = t[11];
        we(s) ? s.setValue(r, n) : (r.textContent = n);
      }
      function Cs(t, e) {
        const n = e[3];
        return -1 === t.index ? (Rt(n) ? n : null) : n;
      }
      function Ss(t, e) {
        const n = Cs(t, e);
        return n ? Ds(e[11], n[7]) : null;
      }
      function xs(t, e, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          Rt(r) ? (i = r) : Mt(r) && ((o = !0), (r = r[0]));
          const a = Qn(r);
          0 === t && null !== n
            ? null == s
              ? js(e, n, a)
              : Rs(e, n, a, s || null)
            : 1 === t && null !== n
            ? Rs(e, n, a, s || null)
            : 2 === t
            ? Hs(e, a, o)
            : 3 === t && e.destroyNode(a),
            null != i &&
              (function(t, e, n, r, s) {
                const i = n[7];
                i !== Qn(n) && xs(e, t, r, i, s);
                for (let o = 9; o < n.length; o++) {
                  const s = n[o];
                  $s(s[1], s, t, e, r, i);
                }
              })(e, t, i, n, s);
        }
      }
      function ks(t, e) {
        return we(e) ? e.createText(t) : e.createTextNode(t);
      }
      function Es(t, e, n, r) {
        const s = Ss(t.node, e);
        s && $s(t, e, e[11], n ? 1 : 2, s, r);
      }
      function Os(t, e) {
        const n = t[5],
          r = n.indexOf(e);
        n.splice(r, 1);
      }
      function As(t, e) {
        if (t.length <= 9) return;
        const n = 9 + e,
          r = t[n];
        if (r) {
          const s = r[17];
          null !== s && s !== t && Os(s, r), e > 0 && (t[n - 1][4] = r[4]);
          const i = ct(t, 9 + e);
          Es(r[1], r, !1, null);
          const o = i[5];
          null !== o && o.detachView(i[1]), (r[3] = null), (r[4] = null), (r[2] &= -129);
        }
        return r;
      }
      function Ts(t, e) {
        if (!(256 & e[2])) {
          const n = e[11];
          we(n) && n.destroyNode && $s(t, e, n, 3, null, null),
            (function(t) {
              let e = t[13];
              if (!e) return Ps(t[1], t);
              for (; e; ) {
                let n = null;
                if (Mt(e)) n = e[13];
                else {
                  const t = e[9];
                  t && (n = t);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; ) Mt(e) && Ps(e[1], e), (e = Is(e, t));
                  null === e && (e = t), Mt(e) && Ps(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function Is(t, e) {
        let n;
        return Mt(t) && (n = t[6]) && 2 === n.type ? Cs(n, t) : t[3] === e ? null : t[3];
      }
      function Ps(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function(t, e) {
              let n;
              if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const t = e[n[r]];
                  t instanceof be || n[r + 1].call(t);
                }
            })(t, e),
            (function(t, e) {
              const n = t.cleanup;
              if (null !== n) {
                const t = e[7];
                for (let r = 0; r < n.length - 1; r += 2)
                  if ('string' == typeof n[r]) {
                    const s = n[r + 1],
                      i = 'function' == typeof s ? s(e) : Qn(e[s]),
                      o = t[n[r + 2]],
                      a = n[r + 3];
                    'boolean' == typeof a ? i.removeEventListener(n[r], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(),
                      (r += 2);
                  } else n[r].call(t[n[r + 1]]);
                e[7] = null;
              }
            })(t, e);
          const n = e[6];
          n && 3 === n.type && we(e[11]) && e[11].destroy();
          const r = e[17];
          if (null !== r && Rt(e[3])) {
            r !== e[3] && Os(r, e);
            const n = e[5];
            null !== n && n.detachView(t);
          }
        }
      }
      function Ms(t, e, n) {
        let r = e.parent;
        for (; null != r && (4 === r.type || 5 === r.type); ) r = (e = r).parent;
        if (null == r) {
          const t = n[6];
          return 2 === t.type ? Ss(t, n) : n[0];
        }
        if (e && 5 === e.type && 4 & e.flags) return Yn(e, n).parentNode;
        if (2 & r.flags) {
          const e = t.data,
            n = e[e[r.index].directiveStart].encapsulation;
          if (n !== gt.ShadowDom && n !== gt.Native) return null;
        }
        return Yn(r, n);
      }
      function Rs(t, e, n, r) {
        we(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0);
      }
      function js(t, e, n) {
        we(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function Ns(t, e, n, r) {
        null !== r ? Rs(t, e, n, r) : js(t, e, n);
      }
      function Ds(t, e) {
        return we(t) ? t.parentNode(e) : e.parentNode;
      }
      function Vs(t, e) {
        if (2 === t.type) {
          const n = Cs(t, e);
          return null === n ? null : Fs(n.indexOf(e, 9) - 9, n);
        }
        return 4 === t.type || 5 === t.type ? Yn(t, e) : null;
      }
      function Ls(t, e, n, r) {
        const s = Ms(t, r, e);
        if (null != s) {
          const t = e[11],
            i = Vs(r.parent || e[6], e);
          if (Array.isArray(n)) for (let e = 0; e < n.length; e++) Ns(t, s, n[e], i);
          else Ns(t, s, n, i);
        }
      }
      function Fs(t, e) {
        const n = 9 + t + 1;
        if (n < e.length) {
          const t = e[n],
            r = t[1].firstChild;
          if (null !== r)
            return (function t(e, n) {
              if (null !== n) {
                const r = n.type;
                if (3 === r) return Yn(n, e);
                if (0 === r) return Fs(-1, e[n.index]);
                if (4 === r || 5 === r) {
                  const r = n.child;
                  if (null !== r) return t(e, r);
                  {
                    const t = e[n.index];
                    return Rt(t) ? Fs(-1, t) : Qn(t);
                  }
                }
                {
                  const r = e[16],
                    s = r[6],
                    i = wr(r),
                    o = s.projection[n.projection];
                  return null != o ? t(i, o) : t(e, n.next);
                }
              }
              return null;
            })(t, r);
        }
        return e[7];
      }
      function Hs(t, e, n) {
        const r = Ds(t, e);
        r &&
          (function(t, e, n, r) {
            we(t) ? t.removeChild(e, n, r) : e.removeChild(n);
          })(t, r, e, n);
      }
      function Us(t, e, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          o && 0 === e && (a && ar(Qn(a), r), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (4 === l || 5 === l
                ? (Us(t, e, n.child, r, s, i, !1), xs(e, t, s, a, i))
                : 1 === l
                ? zs(t, e, r, n, s, i)
                : xs(e, t, s, a, i)),
            (n = o ? n.projectionNext : n.next);
        }
      }
      function $s(t, e, n, r, s, i) {
        Us(n, r, t.node.child, e, s, i, !1);
      }
      function Bs(t, e, n) {
        zs(e[11], 0, e, n, Ms(t, n, e), Vs(n.parent || e[6], e));
      }
      function zs(t, e, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a)) for (let l = 0; l < a.length; l++) xs(e, t, s, a[l], i);
        else Us(t, e, a, o[3], s, i, !0);
      }
      function qs(t, e, n) {
        we(t) ? t.setAttribute(e, 'style', n) : (e.style.cssText = n);
      }
      function Zs(t, e, n) {
        we(t) ? ('' === n ? t.removeAttribute(e, 'class') : t.setAttribute(e, 'class', n)) : (e.className = n);
      }
      class Gs {
        constructor(t, e) {
          (this._lView = t),
            (this._cdRefInjectingView = e),
            (this._appRef = null),
            (this._viewContainerRef = null),
            (this._tViewNode = null);
        }
        get rootNodes() {
          const t = this._lView;
          return null == t[0]
            ? (function t(e, n, r, s, i = !1) {
                for (; null !== r; ) {
                  const o = n[r.index];
                  if ((null !== o && s.push(Qn(o)), Rt(o)))
                    for (let e = 9; e < o.length; e++) {
                      const n = o[e],
                        r = n[1].firstChild;
                      null !== r && t(n[1], n, r, s);
                    }
                  const a = r.type;
                  if (4 === a || 5 === a) t(e, n, r.child, s);
                  else if (1 === a) {
                    const e = n[16],
                      i = e[6],
                      o = wr(e);
                    let a = i.projection[r.projection];
                    null !== a && null !== o && t(o[1], o, a, s, !0);
                  }
                  r = i ? r.projectionNext : r.next;
                }
                return s;
              })(t[1], t, t[6].child, [])
            : [];
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const t = this._viewContainerRef.indexOf(this);
            t > -1 && this._viewContainerRef.detach(t), (this._viewContainerRef = null);
          }
          Ts(this._lView[1], this._lView);
        }
        onDestroy(t) {
          var e, n, r;
          (e = this._lView[1]),
            (r = t),
            bs((n = this._lView)).push(r),
            e.firstCreatePass && ys(e).push(n[7].length - 1, null);
        }
        markForCheck() {
          ds(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          ps(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function(t, e, n) {
            Kt(!0);
            try {
              ps(t, e, n);
            } finally {
              Kt(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef(t) {
          if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
          this._viewContainerRef = t;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null), $s(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = t;
        }
      }
      class Ws extends Gs {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          fs(this._view);
        }
        checkNoChanges() {
          !(function(t) {
            Kt(!0);
            try {
              fs(t);
            } finally {
              Kt(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      let Ks, Qs, Js;
      function Ys(t, e, n) {
        return Ks || (Ks = class extends t {}), new Ks(Yn(e, n));
      }
      function Xs(t, e, n, r) {
        return (
          Qs ||
            (Qs = class extends t {
              constructor(t, e, n) {
                super(), (this._declarationView = t), (this._declarationTContainer = e), (this.elementRef = n);
              }
              createEmbeddedView(t) {
                const e = this._declarationTContainer.tViews,
                  n = jr(this._declarationView, e, t, 16, null, e.node);
                n[17] = this._declarationView[this._declarationTContainer.index];
                const r = this._declarationView[5];
                null !== r && (n[5] = r.createEmbeddedView(e)), Dr(e, n, t);
                const s = new Gs(n);
                return (s._tViewNode = n[6]), s;
              }
            }),
          0 === n.type ? new Qs(r, n, Ys(e, n, r)) : null
        );
      }
      function ti(t, e, n, r) {
        let s;
        Js ||
          (Js = class extends t {
            constructor(t, e, n) {
              super(), (this._lContainer = t), (this._hostTNode = e), (this._hostView = n);
            }
            get element() {
              return Ys(e, this._hostTNode, this._hostView);
            }
            get injector() {
              return new Je(this._hostTNode, this._hostView);
            }
            get parentInjector() {
              const t = $e(this._hostTNode, this._hostView),
                e = Pe(t, this._hostView),
                n = (function(t, e, n) {
                  if (n.parent && -1 !== n.parent.injectorIndex) {
                    const t = n.parent.injectorIndex;
                    let e = n.parent;
                    for (; null != e.parent && t == e.parent.injectorIndex; ) e = e.parent;
                    return e;
                  }
                  let r = Ie(t),
                    s = e,
                    i = e[6];
                  for (; r > 1; ) (s = s[15]), (i = s[6]), r--;
                  return i;
                })(t, this._hostView, this._hostTNode);
              return Ae(t) && null != n ? new Je(n, e) : new Je(null, this._hostView);
            }
            clear() {
              for (; this.length > 0; ) this.remove(this.length - 1);
            }
            get(t) {
              return (null !== this._lContainer[8] && this._lContainer[8][t]) || null;
            }
            get length() {
              return this._lContainer.length - 9;
            }
            createEmbeddedView(t, e, n) {
              const r = t.createEmbeddedView(e || {});
              return this.insert(r, n), r;
            }
            createComponent(t, e, n, r, s) {
              const i = n || this.parentInjector;
              if (!s && null == t.ngModule && i) {
                const t = i.get(st, null);
                t && (s = t);
              }
              const o = t.create(i, r, void 0, s);
              return this.insert(o.hostView, e), o;
            }
            insert(t, e) {
              const n = t._lView,
                r = n[1];
              if (t.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
              if ((this.allocateContainerIfNeeded(), Rt(n[3]))) {
                const e = this.indexOf(t);
                if (-1 !== e) this.detach(e);
                else {
                  const e = n[3],
                    r = new Js(e, e[6], e[3]);
                  r.detach(r.indexOf(t));
                }
              }
              const s = this._adjustIndex(e);
              return (
                (function(t, e, n, r) {
                  const s = 9 + r,
                    i = n.length;
                  r > 0 && (n[s - 1][4] = e),
                    r < i - 9 ? ((e[4] = n[s]), lt(n, 9 + r, e)) : (n.push(e), (e[4] = null)),
                    (e[3] = n);
                  const o = e[17];
                  null !== o &&
                    n !== o &&
                    (function(t, e) {
                      const n = t[5],
                        r = e[3][3][16];
                      16 != (16 & r[2]) && e[16] !== r && (t[2] |= 1), null === n ? (t[5] = [e]) : n.push(e);
                    })(o, e);
                  const a = e[5];
                  null !== a && a.insertView(t), (e[2] |= 128);
                })(r, n, this._lContainer, s),
                Es(r, n, !0, Fs(s, this._lContainer)),
                t.attachToViewContainerRef(this),
                lt(this._lContainer[8], s, t),
                t
              );
            }
            move(t, e) {
              if (t.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
              return this.insert(t, e);
            }
            indexOf(t) {
              const e = this._lContainer[8];
              return null !== e ? e.indexOf(t) : -1;
            }
            remove(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1);
              (function(t, e) {
                const n = As(t, e);
                n && Ts(n[1], n);
              })(this._lContainer, e),
                ct(this._lContainer[8], e);
            }
            detach(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = As(this._lContainer, e);
              return n && null != ct(this._lContainer[8], e) ? new Gs(n) : null;
            }
            _adjustIndex(t, e = 0) {
              return null == t ? this.length + e : t;
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = []);
            }
          });
        const i = r[n.index];
        if (Rt(i))
          (s = i),
            (function(t, e) {
              t[2] = -2;
            })(s);
        else {
          let t;
          if (4 === n.type) t = Qn(i);
          else if (((t = r[11].createComment('')), Lt(r))) {
            const e = r[11],
              s = Yn(n, r);
            Rs(
              e,
              Ds(e, s),
              t,
              (function(t, e) {
                return we(t) ? t.nextSibling(e) : e.nextSibling;
              })(e, s)
            );
          } else Ls(r[1], r, t, n);
          (r[n.index] = s = as(i, r, t, n)), hs(r, s);
        }
        return new Js(s, n, r);
      }
      function ei(t = !1) {
        return (function(t, e, n) {
          if (!n && Nt(t)) {
            const n = er(t.index, e);
            return new Gs(n, n);
          }
          return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new Gs(e[16], e) : null;
        })(zt(), Ut(), t);
      }
      let ni = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => ri()), t;
      })();
      const ri = ei,
        si = new z('Set Injector scope.'),
        ii = {},
        oi = {},
        ai = [];
      let li = void 0;
      function ci() {
        return void 0 === li && (li = new rt()), li;
      }
      function ui(t, e = null, n = null, r) {
        return (e = e || ci()), new hi(t, n, e, r);
      }
      class hi {
        constructor(t, e, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          e && at(e, n => this.processProvider(n, t, e)),
            at([t], t => this.processInjectorType(t, [], s)),
            this.records.set(q, fi(void 0, this));
          const i = this.records.get(si);
          (this.scope = null != i ? i.value : null),
            this.injectorDefTypes.forEach(t => this.get(t)),
            (this.source = r || ('object' == typeof t ? null : E(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach(t => t.ngOnDestroy());
          } finally {
            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
          }
        }
        get(t, e = Z, n = p.Default) {
          this.assertNotDestroyed();
          const r = J(this);
          try {
            if (!(n & p.SkipSelf)) {
              let e = this.records.get(t);
              if (void 0 === e) {
                const n = ('function' == typeof (s = t) || ('object' == typeof s && s instanceof z)) && y(t);
                (e = n && this.injectableDefInScope(n) ? fi(di(t), ii) : null), this.records.set(t, e);
              }
              if (null != e) return this.hydrate(t, e);
            }
            return (n & p.Self ? ci() : this.parent).get(t, (e = n & p.Optional && e === Z ? null : e));
          } catch (i) {
            if ('NullInjectorError' === i.name) {
              if (((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(E(t)), r)) throw i;
              return (function(t, e, n, r) {
                const s = t.ngTempTokenPath;
                throw (e.__source && s.unshift(e.__source),
                (t.message = (function(t, e, n, r = null) {
                  t = t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1) ? t.substr(2) : t;
                  let s = E(e);
                  if (Array.isArray(e)) s = e.map(E).join(' -> ');
                  else if ('object' == typeof e) {
                    let t = [];
                    for (let n in e)
                      if (e.hasOwnProperty(n)) {
                        let r = e[n];
                        t.push(n + ':' + ('string' == typeof r ? JSON.stringify(r) : E(r)));
                      }
                    s = `{${t.join(', ')}}`;
                  }
                  return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${t.replace(G, '\n  ')}`;
                })('\n' + t.message, s, n, r)),
                (t.ngTokenPath = s),
                (t.ngTempTokenPath = null),
                t);
              })(i, t, 'R3InjectorError', this.source);
            }
            throw i;
          } finally {
            J(r);
          }
          var s;
        }
        toString() {
          const t = [];
          return this.records.forEach((e, n) => t.push(E(n))), `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Error('Injector has already been destroyed.');
        }
        processInjectorType(t, e, n) {
          if (!(t = I(t))) return !1;
          let r = _(t);
          const s = (null == r && t.ngModule) || void 0,
            i = void 0 === s ? t : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = _(s)), null == r)) return !1;
          if ((this.injectorDefTypes.add(i), this.records.set(i, fi(r.factory, ii)), null != r.imports && !o)) {
            let t;
            n.push(i);
            try {
              at(r.imports, r => {
                this.processInjectorType(r, e, n) && (void 0 === t && (t = []), t.push(r));
              });
            } finally {
            }
            if (void 0 !== t)
              for (let e = 0; e < t.length; e++) {
                const { ngModule: n, providers: r } = t[e];
                at(r, t => this.processProvider(t, n, r || ai));
              }
          }
          const a = r.providers;
          if (null != a && !o) {
            const e = t;
            at(a, t => this.processProvider(t, e, a));
          }
          return void 0 !== s && void 0 !== t.providers;
        }
        processProvider(t, e, n) {
          let r = mi((t = I(t))) ? t : I(t && t.provide);
          const s = (function(t, e, n) {
            return gi(t) ? fi(void 0, t.useValue) : fi(pi(t, e, n), ii);
          })(t, e, n);
          if (mi(t) || !0 !== t.multi) {
            const t = this.records.get(r);
            t && void 0 !== t.multi && cr();
          } else {
            let e = this.records.get(r);
            e
              ? void 0 === e.multi && cr()
              : ((e = fi(void 0, ii, !0)), (e.factory = () => nt(e.multi)), this.records.set(r, e)),
              (r = t),
              e.multi.push(t);
          }
          this.records.set(r, s);
        }
        hydrate(t, e) {
          var n;
          return (
            e.value === oi
              ? (function(t) {
                  throw new Error(`Cannot instantiate cyclic dependency! ${t}`);
                })(E(t))
              : e.value === ii && ((e.value = oi), (e.value = e.factory())),
            'object' == typeof e.value &&
              e.value &&
              null !== (n = e.value) &&
              'object' == typeof n &&
              'function' == typeof n.ngOnDestroy &&
              this.onDestroy.add(e.value),
            e.value
          );
        }
        injectableDefInScope(t) {
          return (
            !!t.providedIn &&
            ('string' == typeof t.providedIn
              ? 'any' === t.providedIn || t.providedIn === this.scope
              : this.injectorDefTypes.has(t.providedIn))
          );
        }
      }
      function di(t) {
        const e = y(t),
          n = null !== e ? e.factory : It(t);
        if (null !== n) return n;
        const r = _(t);
        if (null !== r) return r.factory;
        if (t instanceof z) throw new Error(`Token ${E(t)} is missing a \u0275prov definition.`);
        if (t instanceof Function)
          return (function(t) {
            const e = t.length;
            if (e > 0) {
              const n = ut(e, '?');
              throw new Error(`Can't resolve all parameters for ${E(t)}: (${n.join(', ')}).`);
            }
            const n = (function(t) {
              const e = t && (t[w] || t[x] || (t[S] && t[S]()));
              if (e) {
                const n = (function(t) {
                  if (t.hasOwnProperty('name')) return t.name;
                  const e = ('' + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? '' : e[1];
                })(t);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n` +
                      `This will become an error in v10. Please add @Injectable() to the "${n}" class.`
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== n ? () => n.factory(t) : () => new t();
          })(t);
        throw new Error('unreachable');
      }
      function pi(t, e, n) {
        let r = void 0;
        if (mi(t)) return di(I(t));
        if (gi(t)) r = () => I(t.useValue);
        else if ((s = t) && s.useFactory) r = () => t.useFactory(...nt(t.deps || []));
        else if (
          (function(t) {
            return !(!t || !t.useExisting);
          })(t)
        )
          r = () => tt(I(t.useExisting));
        else {
          const s = I(t && (t.useClass || t.provide));
          if (
            (s ||
              (function(t, e, n) {
                let r = '';
                throw (t &&
                  e &&
                  (r = ` - only instances of Provider and Type are allowed, got: [${e
                    .map(t => (t == n ? '?' + n + '?' : '...'))
                    .join(', ')}]`),
                new Error(`Invalid provider for the NgModule '${E(t)}'` + r));
              })(e, n, t),
            !(function(t) {
              return !!t.deps;
            })(t))
          )
            return di(s);
          r = () => new s(...nt(t.deps));
        }
        var s;
        return r;
      }
      function fi(t, e, n = !1) {
        return { factory: t, value: e, multi: n ? [] : void 0 };
      }
      function gi(t) {
        return null !== t && 'object' == typeof t && W in t;
      }
      function mi(t) {
        return 'function' == typeof t;
      }
      const bi = function(t, e, n) {
        return ui({ name: n }, e, t, n);
      };
      let yi = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t) ? bi(t, e, '') : bi(t.providers, t.parent, t.name || '');
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = Z),
          (t.NULL = new rt()),
          (t.ɵprov = m({ token: t, providedIn: 'any', factory: () => tt(q) })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      const vi = new z('AnalyzeForEntryComponents');
      let _i = new Map();
      const wi = new Set();
      function Ci(t) {
        return 'string' == typeof t ? t : t.text();
      }
      function Si(t, e) {
        let n = t.styles,
          r = t.classes,
          s = 0;
        for (let i = 0; i < e.length; i++) {
          const t = e[i];
          'number' == typeof t ? (s = t) : 1 == s ? (r = O(r, t)) : 2 == s && (n = O(n, t + ': ' + e[++i] + ';'));
        }
        null !== n && (t.styles = n), null !== r && (t.classes = r);
      }
      let xi = null;
      function ki() {
        if (!xi) {
          const t = D.Symbol;
          if (t && t.iterator) xi = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              'entries' !== n && 'size' !== n && Map.prototype[n] === Map.prototype.entries && (xi = n);
            }
          }
        }
        return xi;
      }
      function Ei(t, e) {
        return t === e || ('number' == typeof t && 'number' == typeof e && isNaN(t) && isNaN(e));
      }
      class Oi {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new Oi(t);
        }
        static unwrap(t) {
          return Oi.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof Oi;
        }
      }
      function Ai(t) {
        return !!Ti(t) && (Array.isArray(t) || (!(t instanceof Map) && ki() in t));
      }
      function Ti(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function Ii(t, e, n) {
        return (t[e] = n);
      }
      function Pi(t, e) {
        return t[e];
      }
      function Mi(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function Ri(t, e, n, r) {
        const s = Mi(t, e, n);
        return Mi(t, e + 1, r) || s;
      }
      function ji(t, e, n, r) {
        const s = Ut();
        return Mi(s, Yt(), e) && ss(ce(), t, e, $t(), s, n, r), ji;
      }
      function Ni(t, e, n, r) {
        return Mi(t, Yt(), n) ? e + Me(n) + r : _r;
      }
      function Di(t, e, n, r, s, i, o, a) {
        const l = Ut(),
          c = $t(),
          u = t + 19,
          h = c.firstCreatePass
            ? (function(t, e, n, r, s, i, o, a, l) {
                const c = e.consts,
                  u = Nr(e, n[6], t, 0, o || null, ir(c, a));
                Wr(e, n, u, ir(c, l)), he(e, u);
                const h = (u.tViews = zr(2, -1, r, s, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c)),
                  d = qr(0, null, 2, -1, null, null);
                return (
                  (d.injectorIndex = u.injectorIndex),
                  (h.node = d),
                  null !== e.queries && (e.queries.template(e, u), (h.queries = e.queries.embeddedTView(u))),
                  u
                );
              })(t, c, l, e, n, r, s, i, o)
            : c.data[u];
        qt(h, !1);
        const d = l[11].createComment('');
        Ls(c, l, d, h), ar(d, l), hs(l, (l[u] = as(d, l, d, h))), Dt(h) && Ur(c, l, h), null != o && $r(l, h, a);
      }
      function Vi(t) {
        return tr(Ft.lFrame.contextLView, t);
      }
      function Li(t, e = p.Default) {
        const n = Ut();
        return null == n ? tt(t, e) : ze(zt(), n, I(t), e);
      }
      function Fi(t) {
        return (function(t, e) {
          if ('class' === e) return t.classes;
          if ('style' === e) return t.styles;
          const n = t.attrs;
          if (n) {
            const t = n.length;
            let r = 0;
            for (; r < t; ) {
              const s = n[r];
              if (xe(s)) break;
              if (0 === s) r += 2;
              else if ('number' == typeof s) for (r++; r < t && 'string' == typeof n[r]; ) r++;
              else {
                if (s === e) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(zt(), t);
      }
      function Hi() {
        throw new Error('invalid');
      }
      function Ui(t, e, n) {
        const r = Ut();
        if (Mi(r, Yt(), e)) {
          const s = ce();
          Gr($t(), r, s, t, e, n);
        }
        return Ui;
      }
      function $i(t, e, n, r, s) {
        const i = e.inputs,
          o = s ? 'class' : 'style';
        _s(t, n, i[o] || (s && i.className), o, r);
      }
      function Bi(t, e, n, r) {
        const s = Ut(),
          i = $t(),
          o = 19 + t,
          a = s[11],
          l = (s[o] = Rr(e, a, Ft.lFrame.currentNamespace)),
          c = i.firstCreatePass
            ? (function(t, e, n, r, s, i, o) {
                const a = e.consts,
                  l = ir(a, i),
                  c = Nr(e, n[6], t, 3, s, l);
                return (
                  Wr(e, n, c, ir(a, o)),
                  null !== c.mergedAttrs && Si(c, c.mergedAttrs),
                  null !== e.queries && e.queries.elementStart(e, c),
                  c
                );
              })(t, i, s, 0, e, n, r)
            : i.data[o];
        qt(c, !0);
        const u = c.mergedAttrs;
        null !== u && Se(a, l, u);
        const h = c.classes;
        null !== h && Zs(a, l, h);
        const d = c.styles;
        null !== d && qs(a, l, d),
          Ls(i, s, l, c),
          0 === Ft.lFrame.elementDepthCount && ar(l, s),
          Ft.lFrame.elementDepthCount++,
          Dt(c) && (Ur(i, s, c), Hr(i, c, s)),
          null !== r && $r(s, c);
      }
      function zi() {
        let t = zt();
        Zt() ? Gt() : ((t = t.parent), qt(t, !1));
        const e = t;
        Ft.lFrame.elementDepthCount--;
        const n = $t();
        n.firstCreatePass && (he(n, t), jt(t) && n.queries.elementEnd(t)),
          null !== e.classes &&
            (function(t) {
              return 0 != (16 & t.flags);
            })(e) &&
            $i(n, e, Ut(), e.classes, !0),
          null !== e.styles &&
            (function(t) {
              return 0 != (32 & t.flags);
            })(e) &&
            $i(n, e, Ut(), e.styles, !1);
      }
      function qi(t, e, n, r) {
        Bi(t, e, n, r), zi();
      }
      function Zi(t, e, n) {
        const r = Ut(),
          s = $t(),
          i = t + 19,
          o = s.firstCreatePass
            ? (function(t, e, n, r, s) {
                const i = e.consts,
                  o = ir(i, r),
                  a = Nr(e, n[6], t, 4, 'ng-container', o);
                return (
                  null !== o && Si(a, o), Wr(e, n, a, ir(i, s)), null !== e.queries && e.queries.elementStart(e, a), a
                );
              })(t, s, r, e, n)
            : s.data[i];
        qt(o, !0);
        const a = (r[i] = r[11].createComment(''));
        Ls(s, r, a, o), ar(a, r), Dt(o) && (Ur(s, r, o), Hr(s, o, r)), null != n && $r(r, o);
      }
      function Gi() {
        let t = zt();
        const e = $t();
        Zt() ? Gt() : ((t = t.parent), qt(t, !1)), e.firstCreatePass && (he(e, t), jt(t) && e.queries.elementEnd(t));
      }
      function Wi() {
        return Ut();
      }
      function Ki(t) {
        return !!t && 'function' == typeof t.then;
      }
      function Qi(t) {
        return !!t && 'function' == typeof t.subscribe;
      }
      function Ji(t, e, n = !1, r) {
        const s = Ut(),
          i = $t(),
          o = zt();
        return (
          (function(t, e, n, r, s, i, o = !1, a) {
            const l = Dt(r),
              c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              u = bs(e);
            let h = !0;
            if (3 === r.type) {
              const d = Yn(r, e),
                p = a ? a(d) : bt,
                f = p.target || d,
                g = u.length,
                m = a ? t => a(Qn(t[r.index])).target : r.index;
              if (we(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function(t, e, n, r) {
                      const s = t.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const t = s[i];
                          if (t === n && s[i + 1] === r) {
                            const t = e[7],
                              n = s[i + 2];
                            return t.length > n ? t[n] : null;
                          }
                          'string' == typeof t && (i += 2);
                        }
                      return null;
                    })(t, e, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i), (o.__ngLastListenerFn__ = i), (h = !1);
                else {
                  i = Xi(r, e, i, !1);
                  const t = n.listen(p.name || f, s, i);
                  u.push(i, t), c && c.push(s, m, g, g + 1);
                }
              } else (i = Xi(r, e, i, !0)), f.addEventListener(s, i, o), u.push(i), c && c.push(s, m, g, o);
            }
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, t), c && c.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, t, e, n, r),
          Ji
        );
      }
      function Yi(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return vs(t, r), !1;
        }
      }
      function Xi(t, e, n, r) {
        return function s(i) {
          if (i === Function) return n;
          const o = 2 & t.flags ? er(t.index, e) : e;
          0 == (32 & e[2]) && ds(o);
          let a = Yi(e, n, i),
            l = s.__ngNextListenerFn__;
          for (; l; ) (a = Yi(e, l, i) && a), (l = l.__ngNextListenerFn__);
          return r && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function to(t = 1) {
        return (function(t) {
          return (Ft.lFrame.contextLView = (function(t, e) {
            for (; t > 0; ) (e = e[15]), t--;
            return e;
          })(t, Ft.lFrame.contextLView))[8];
        })(t);
      }
      function eo(t, e) {
        let n = null;
        const r = (function(t) {
          const e = t.attrs;
          if (null != e) {
            const t = e.indexOf(5);
            if (0 == (1 & t)) return e[t + 1];
          }
          return null;
        })(t);
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          if ('*' !== i) {
            if (null === r ? mr(t, i, !0) : br(r, i)) return s;
          } else n = s;
        }
        return n;
      }
      function no(t) {
        const e = Ut()[16][6];
        if (!e.projection) {
          const n = (e.projection = ut(t ? t.length : 1, null)),
            r = n.slice();
          let s = e.child;
          for (; null !== s; ) {
            const e = t ? eo(s, t) : 0;
            null !== e && (r[e] ? (r[e].projectionNext = s) : (n[e] = s), (r[e] = s)), (s = s.next);
          }
        }
      }
      let ro = !1;
      function so(t) {
        ro = t;
      }
      function io(t, e = 0, n) {
        const r = Ut(),
          s = $t(),
          i = Nr(s, r[6], t, 1, null, n || null);
        null === i.projection && (i.projection = e), Gt(), ro || Bs(s, r, i);
      }
      function oo(t, e, n) {
        return ao(t, '', e, '', n), oo;
      }
      function ao(t, e, n, r, s) {
        const i = Ut(),
          o = Ni(i, e, n, r);
        if (o !== _r) {
          const e = ce();
          Gr($t(), i, e, t, o, s);
        }
        return ao;
      }
      const lo = [];
      function co(t, e, n, r, s) {
        const i = t[n + 1],
          o = null === e;
        let a = r ? Or(i) : Tr(i),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const n = t[a + 1];
          uo(t[a], e) && ((l = !0), (t[a + 1] = r ? Pr(n) : Ar(n))), (a = r ? Or(n) : Tr(n));
        }
        l && (t[n + 1] = r ? Ar(i) : Pr(i));
      }
      function uo(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || 'string' != typeof e) && pt(t, e) >= 0)
        );
      }
      const ho = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function po(t) {
        return t.substring(ho.key, ho.keyEnd);
      }
      function fo(t, e) {
        const n = ho.textEnd;
        return n === e
          ? -1
          : ((e = ho.keyEnd = (function(t, e, n) {
              for (; e < n && t.charCodeAt(e) > 32; ) e++;
              return e;
            })(t, (ho.key = e), n)),
            go(t, e, n));
      }
      function go(t, e, n) {
        for (; e < n && t.charCodeAt(e) <= 32; ) e++;
        return e;
      }
      function mo(t, e, n) {
        return _o(t, e, n, !1), mo;
      }
      function bo(t, e) {
        return _o(t, e, null, !0), bo;
      }
      function yo(t) {
        wo(ht, vo, t, !0);
      }
      function vo(t, e) {
        for (
          let n = (function(t) {
            return (
              (function(t) {
                (ho.key = 0), (ho.keyEnd = 0), (ho.value = 0), (ho.valueEnd = 0), (ho.textEnd = t.length);
              })(t),
              fo(t, go(t, 0, ho.textEnd))
            );
          })(e);
          n >= 0;
          n = fo(e, n)
        )
          ht(t, po(e), !0);
      }
      function _o(t, e, n, r) {
        const s = Ut(),
          i = $t(),
          o = Xt(2);
        if ((i.firstUpdatePass && So(i, t, o, r), e !== _r && Mi(s, o, e))) {
          let a;
          null == n &&
            (a = (function() {
              const t = Ft.lFrame;
              return null === t ? null : t.currentSanitizer;
            })()) &&
            (n = a),
            Eo(
              i,
              i.data[ce() + 19],
              s,
              s[11],
              t,
              (s[o + 1] = (function(t, e) {
                return (
                  null == t ||
                    ('function' == typeof e
                      ? (t = e(t))
                      : 'string' == typeof e
                      ? (t += e)
                      : 'object' == typeof t && (t = E(un(t)))),
                  t
                );
              })(e, n)),
              r,
              o
            );
        }
      }
      function wo(t, e, n, r) {
        const s = $t(),
          i = Xt(2);
        s.firstUpdatePass && So(s, null, i, r);
        const o = Ut();
        if (n !== _r && Mi(o, i, n)) {
          const a = s.data[ce() + 19];
          if (To(a, r) && !Co(s, i)) {
            let t = r ? a.classes : a.styles;
            'string' == typeof n && (n = O(t, n)), $i(s, a, o, n, r);
          } else
            !(function(t, e, n, r, s, i, o, a) {
              s === _r && (s = lo);
              let l = 0,
                c = 0,
                u = 0 < s.length ? s[0] : null,
                h = 0 < i.length ? i[0] : null;
              for (; null !== u || null !== h; ) {
                const d = l < s.length ? s[l + 1] : void 0,
                  p = c < i.length ? i[c + 1] : void 0;
                let f = null,
                  g = void 0;
                u === h
                  ? ((l += 2), (c += 2), d !== p && ((f = h), (g = p)))
                  : null === h || (null !== u && u < h)
                  ? ((l += 2), (f = u))
                  : ((c += 2), (f = h), (g = p)),
                  null !== f && Eo(t, e, n, r, f, g, o, a),
                  (u = l < s.length ? s[l] : null),
                  (h = c < i.length ? i[c] : null);
              }
            })(
              s,
              a,
              o,
              o[11],
              o[i + 1],
              (o[i + 1] = (function(t, e, n) {
                if (null == n || '' === n) return lo;
                const r = [];
                if (Array.isArray(n)) for (let s = 0; s < n.length; s++) t(r, n[s], !0);
                else if ('object' == typeof n)
                  if (n instanceof Map) n.forEach((e, n) => t(r, n, e));
                  else if (n instanceof Set) n.forEach(e => t(r, e, !0));
                  else for (const s in n) n.hasOwnProperty(s) && t(r, s, n[s]);
                else 'string' == typeof n && e(r, n);
                return r;
              })(t, e, n)),
              r,
              i
            );
        }
      }
      function Co(t, e) {
        return e >= t.expandoStartIndex;
      }
      function So(t, e, n, r) {
        const s = t.data;
        if (null === s[n + 1]) {
          const i = s[ce() + 19],
            o = Co(t, n);
          To(i, r) && null === e && !o && (e = !1),
            (e = (function(t, e, n, r) {
              const s = (function(t) {
                const e = Ft.lFrame.currentDirectiveIndex;
                return -1 === e ? null : t[e];
              })(t);
              let i = r ? e.residualClasses : e.residualStyles;
              if (null === s)
                0 === (r ? e.classBindings : e.styleBindings) &&
                  ((n = ko((n = xo(null, t, e, n, r)), e.attrs, r)), (i = null));
              else {
                const o = e.directiveStylingLast;
                if (-1 === o || t[o] !== s)
                  if (((n = xo(s, t, e, n, r)), null === i)) {
                    let n = (function(t, e, n) {
                      const r = n ? e.classBindings : e.styleBindings;
                      if (0 !== Tr(r)) return t[Or(r)];
                    })(t, e, r);
                    void 0 !== n &&
                      Array.isArray(n) &&
                      ((n = xo(null, t, e, n[1], r)),
                      (n = ko(n, e.attrs, r)),
                      (function(t, e, n, r) {
                        t[Or(n ? e.classBindings : e.styleBindings)] = r;
                      })(t, e, r, n));
                  } else
                    i = (function(t, e, n) {
                      let r = void 0;
                      const s = e.directiveEnd;
                      for (let i = 1 + e.directiveStylingLast; i < s; i++) r = ko(r, t[i].hostAttrs, n);
                      return ko(r, e.attrs, n);
                    })(t, e, r);
              }
              return void 0 !== i && (r ? (e.residualClasses = i) : (e.residualStyles = i)), n;
            })(s, i, e, r)),
            (function(t, e, n, r, s, i) {
              let o = i ? e.classBindings : e.styleBindings,
                a = Or(o),
                l = Tr(o);
              t[r] = n;
              let c,
                u = !1;
              if (Array.isArray(n)) {
                const t = n;
                (c = t[1]), (null === c || pt(t, c) > 0) && (u = !0);
              } else c = n;
              if (s)
                if (0 !== l) {
                  const e = Or(t[a + 1]);
                  (t[r + 1] = Er(e, a)),
                    0 !== e && (t[e + 1] = Ir(t[e + 1], r)),
                    (t[a + 1] = (131071 & t[a + 1]) | (r << 17));
                } else (t[r + 1] = Er(a, 0)), 0 !== a && (t[a + 1] = Ir(t[a + 1], r)), (a = r);
              else (t[r + 1] = Er(l, 0)), 0 === a ? (a = r) : (t[l + 1] = Ir(t[l + 1], r)), (l = r);
              u && (t[r + 1] = Ar(t[r + 1])),
                co(t, c, r, !0),
                co(t, c, r, !1),
                (function(t, e, n, r, s) {
                  const i = s ? t.residualClasses : t.residualStyles;
                  null != i && 'string' == typeof e && pt(i, e) >= 0 && (n[r + 1] = Pr(n[r + 1]));
                })(e, c, t, r, i),
                (o = Er(a, l)),
                i ? (e.classBindings = o) : (e.styleBindings = o);
            })(s, i, e, n, o, r);
        }
      }
      function xo(t, e, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (-1 === a ? (a = n.directiveStart) : a++; a < o && ((i = e[a]), (r = ko(r, i.hostAttrs, s)), i !== t); )
          a++;
        return null !== t && (n.directiveStylingLast = a), r;
      }
      function ko(t, e, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== e)
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            'number' == typeof o
              ? (s = o)
              : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ['', t]), ht(t, o, !!n || e[++i]));
          }
        return void 0 === t ? null : t;
      }
      function Eo(t, e, n, r, s, i, o, a) {
        if (3 !== e.type) return;
        const l = t.data,
          c = l[a + 1];
        Ao(1 == (1 & c) ? Oo(l, e, n, s, Tr(c), o) : void 0) ||
          (Ao(i) ||
            ((function(t) {
              return 2 == (2 & t);
            })(c) &&
              (i = Oo(l, null, n, s, a, o))),
          (function(t, e, n, r, s) {
            const i = we(t);
            if (e) s ? (i ? t.addClass(n, r) : n.classList.add(r)) : i ? t.removeClass(n, r) : n.classList.remove(r);
            else {
              const e = -1 == r.indexOf('-') ? void 0 : 2;
              null == s
                ? i
                  ? t.removeStyle(n, r, e)
                  : n.style.removeProperty(r)
                : i
                ? t.setStyle(n, r, s, e)
                : n.style.setProperty(r, s);
            }
          })(r, o, Jn(ce(), n), s, i));
      }
      function Oo(t, e, n, r, s, i) {
        const o = null === e;
        let a = void 0;
        for (; s > 0; ) {
          const e = t[s],
            i = Array.isArray(e),
            l = i ? e[1] : e,
            c = null === l;
          let u = n[s + 1];
          u === _r && (u = c ? lo : void 0);
          let h = c ? dt(u, r) : l === r ? u : void 0;
          if ((i && !Ao(h) && (h = dt(e, r)), Ao(h) && ((a = h), o))) return a;
          const d = t[s + 1];
          s = o ? Or(d) : Tr(d);
        }
        if (null !== e) {
          let t = i ? e.residualClasses : e.residualStyles;
          null != t && (a = dt(t, r));
        }
        return a;
      }
      function Ao(t) {
        return void 0 !== t;
      }
      function To(t, e) {
        return 0 != (t.flags & (e ? 16 : 32));
      }
      function Io(t, e = '') {
        const n = Ut(),
          r = $t(),
          s = t + 19,
          i = r.firstCreatePass ? Nr(r, n[6], t, 3, null, null) : r.data[s],
          o = (n[s] = ks(e, n[11]));
        Ls(r, n, o, i), qt(i, !1);
      }
      function Po(t) {
        return Mo('', t, ''), Po;
      }
      function Mo(t, e, n) {
        const r = Ut(),
          s = Ni(r, t, e, n);
        return s !== _r && ws(r, ce(), s), Mo;
      }
      function Ro(t, e, n, r, s) {
        const i = Ut(),
          o = (function(t, e, n, r, s, i) {
            const o = Ri(t, Jt(), n, s);
            return Xt(2), o ? e + Me(n) + r + Me(s) + i : _r;
          })(i, t, e, n, r, s);
        return o !== _r && ws(i, ce(), o), Ro;
      }
      function jo(t, e, n) {
        wo(ht, vo, Ni(Ut(), t, e, n), !0);
      }
      function No(t, e, n, r, s, i, o, a, l) {
        wo(
          ht,
          vo,
          (function(t, e, n, r, s, i, o, a, l, c) {
            const u = (function(t, e, n, r, s, i) {
              const o = Ri(t, e, n, r);
              return Ri(t, e + 2, s, i) || o;
            })(t, Jt(), n, s, o, l);
            return Xt(4), u ? e + Me(n) + r + Me(s) + i + Me(o) + a + Me(l) + c : _r;
          })(Ut(), t, e, n, r, s, i, o, a, l),
          !0
        );
      }
      function Do(t, e, n) {
        const r = Ut();
        if (Mi(r, Yt(), e)) {
          const s = ce();
          Gr($t(), r, s, t, e, n, !0);
        }
        return Do;
      }
      function Vo(t, e) {
        const n = nr(t)[1],
          r = n.data.length - 1;
        he(n, { directiveStart: r, directiveEnd: r + 1 });
      }
      function Lo(t) {
        let e = Object.getPrototypeOf(t.type.prototype).constructor,
          n = !0;
        const r = [t];
        for (; e; ) {
          let s = void 0;
          if (Vt(t)) s = e.ɵcmp || e.ɵdir;
          else {
            if (e.ɵcmp) throw new Error('Directives cannot inherit Components');
            s = e.ɵdir;
          }
          if (s) {
            if (n) {
              r.push(s);
              const e = t;
              (e.inputs = Fo(t.inputs)), (e.declaredInputs = Fo(t.declaredInputs)), (e.outputs = Fo(t.outputs));
              const n = s.hostBindings;
              n && $o(t, n);
              const i = s.viewQuery,
                o = s.contentQueries;
              i && Ho(t, i),
                o && Uo(t, o),
                g(t.inputs, s.inputs),
                g(t.declaredInputs, s.declaredInputs),
                g(t.outputs, s.outputs),
                (e.afterContentChecked = e.afterContentChecked || s.afterContentChecked),
                (e.afterContentInit = t.afterContentInit || s.afterContentInit),
                (e.afterViewChecked = t.afterViewChecked || s.afterViewChecked),
                (e.afterViewInit = t.afterViewInit || s.afterViewInit),
                (e.doCheck = t.doCheck || s.doCheck),
                (e.onDestroy = t.onDestroy || s.onDestroy),
                (e.onInit = t.onInit || s.onInit);
            }
            const e = s.features;
            if (e)
              for (let r = 0; r < e.length; r++) {
                const s = e[r];
                s && s.ngInherit && s(t), s === Lo && (n = !1);
              }
          }
          e = Object.getPrototypeOf(e);
        }
        !(function(t) {
          let e = 0,
            n = null;
          for (let r = t.length - 1; r >= 0; r--) {
            const s = t[r];
            (s.hostVars = e += s.hostVars), (s.hostAttrs = Ee(s.hostAttrs, (n = Ee(n, s.hostAttrs))));
          }
        })(r);
      }
      function Fo(t) {
        return t === bt ? {} : t === yt ? [] : t;
      }
      function Ho(t, e) {
        const n = t.viewQuery;
        t.viewQuery = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      function Uo(t, e) {
        const n = t.contentQueries;
        t.contentQueries = n
          ? (t, r, s) => {
              e(t, r, s), n(t, r, s);
            }
          : e;
      }
      function $o(t, e) {
        const n = t.hostBindings;
        t.hostBindings = n
          ? (t, r) => {
              e(t, r), n(t, r);
            }
          : e;
      }
      class Bo {
        constructor(t, e, n) {
          (this.previousValue = t), (this.currentValue = e), (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function zo() {
        return (qo.ngInherit = !0), qo;
      }
      function qo(t) {
        t.type.prototype.ngOnChanges &&
          ((t.setInput = Zo),
          (t.onChanges = function() {
            const t = Go(this),
              e = t && t.current;
            if (e) {
              const n = t.previous;
              if (n === bt) t.previous = e;
              else for (let t in e) n[t] = e[t];
              (t.current = null), this.ngOnChanges(e);
            }
          }));
      }
      function Zo(t, e, n, r) {
        const s =
            Go(t) ||
            (function(t, e) {
              return (t.__ngSimpleChanges__ = e);
            })(t, { previous: bt, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new Bo(l && l.currentValue, e, o === bt)), (t[r] = e);
      }
      function Go(t) {
        return t.__ngSimpleChanges__ || null;
      }
      function Wo(t, e, n, r, s) {
        if (((t = I(t)), Array.isArray(t))) for (let i = 0; i < t.length; i++) Wo(t[i], e, n, r, s);
        else {
          const i = $t(),
            o = Ut();
          let a = mi(t) ? t : I(t.provide),
            l = pi(t);
          const c = zt(),
            u = 65535 & c.providerIndexes,
            h = c.directiveStart,
            d = c.providerIndexes >> 16;
          if (t.useClass || mi(t)) {
            const n = (t.useClass || t).prototype.ngOnDestroy;
            n && (i.destroyHooks || (i.destroyHooks = [])).push(e.length, n);
          }
          if (mi(t) || !t.multi) {
            const t = new be(l, s, Li),
              r = Qo(a, e, s ? u : u + d, h);
            -1 == r
              ? (Be(Fe(c, o), i, a),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                s && (c.providerIndexes += 65536),
                n.push(t),
                o.push(t))
              : ((n[r] = t), (o[r] = t));
          } else {
            const t = Qo(a, e, u + d, h),
              p = Qo(a, e, u, u + d),
              f = t >= 0 && n[t],
              g = p >= 0 && n[p];
            if ((s && !g) || (!s && !f)) {
              Be(Fe(c, o), i, a);
              const t = (function(t, e, n, r, s) {
                const i = new be(t, n, Li);
                return (i.multi = []), (i.index = e), (i.componentProviders = 0), Ko(i, s, r && !n), i;
              })(s ? Yo : Jo, n.length, s, r, l);
              !s && g && (n[p].providerFactory = t),
                e.push(a),
                c.directiveStart++,
                c.directiveEnd++,
                s && (c.providerIndexes += 65536),
                n.push(t),
                o.push(t);
            } else Ko(n[s ? p : t], l, !s && r);
            !s && r && g && n[p].componentProviders++;
          }
        }
      }
      function Ko(t, e, n) {
        t.multi.push(e), n && t.componentProviders++;
      }
      function Qo(t, e, n, r) {
        for (let s = n; s < r; s++) if (e[s] === t) return s;
        return -1;
      }
      function Jo(t, e, n, r) {
        return Xo(this.multi, []);
      }
      function Yo(t, e, n, r) {
        const s = this.multi;
        let i;
        if (this.providerFactory) {
          const t = this.providerFactory.componentProviders,
            e = We(n, n[1], this.providerFactory.index, r);
          (i = e.slice(0, t)), Xo(s, i);
          for (let n = t; n < e.length; n++) i.push(e[n]);
        } else (i = []), Xo(s, i);
        return i;
      }
      function Xo(t, e) {
        for (let n = 0; n < t.length; n++) e.push((0, t[n])());
        return e;
      }
      function ta(t, e = []) {
        return n => {
          n.providersResolver = (n, r) =>
            (function(t, e, n) {
              const r = $t();
              if (r.firstCreatePass) {
                const s = Vt(t);
                Wo(n, r.data, r.blueprint, s, !0), Wo(e, r.data, r.blueprint, s, !1);
              }
            })(n, r ? r(t) : t, e);
        };
      }
      class ea {}
      class na {
        resolveComponentFactory(t) {
          throw (function(t) {
            const e = Error(`No component factory found for ${E(t)}. Did you add it to @NgModule.entryComponents?`);
            return (e.ngComponent = t), e;
          })(t);
        }
      }
      let ra = (() => {
          class t {}
          return (t.NULL = new na()), t;
        })(),
        sa = (() => {
          class t {
            constructor(t) {
              this.nativeElement = t;
            }
          }
          return (t.__NG_ELEMENT_ID__ = () => ia(t)), t;
        })();
      const ia = function(t) {
        return Ys(t, zt(), Ut());
      };
      class oa {}
      const aa = (function() {
        var t = { Important: 1, DashCase: 2 };
        return (t[t.Important] = 'Important'), (t[t.DashCase] = 'DashCase'), t;
      })();
      let la = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => ca()), t;
      })();
      const ca = function() {
        const t = Ut(),
          e = er(zt().index, t);
        return (function(t) {
          const e = t[11];
          if (we(e)) return e;
          throw new Error('Cannot inject Renderer2 when the application uses Renderer3!');
        })(Mt(e) ? e : t);
      };
      let ua = (() => {
        class t {}
        return (t.ɵprov = m({ token: t, providedIn: 'root', factory: () => null })), t;
      })();
      class ha {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t
              .split('.')
              .slice(2)
              .join('.'));
        }
      }
      const da = new ha('9.0.0');
      class pa {
        constructor() {}
        supports(t) {
          return Ai(t);
        }
        create(t) {
          return new ga(t);
        }
      }
      const fa = (t, e) => e;
      class ga {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || fa);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; e || n; ) {
            const i = !n || (e && e.currentIndex < va(n, r, s)) ? e : n,
              o = va(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const t = o - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  e <= i && i < t && (s[n] = r + 1);
                }
                s[i.previousIndex] = e - t;
              }
            }
            o !== a && t(i, o, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !Ai(t)))
            throw new Error(`Error trying to diff '${E(t)}'. Only arrays and iterables are allowed`);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== s && Ei(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, e)), Ei(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, e)), (i = !0)),
                (s = s._next);
          } else
            (e = 0),
              (function(t, e) {
                if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[ki()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, t => {
                (r = this._trackByFn(e, t)),
                  null !== s && Ei(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, t, r, e)), Ei(s.item, t) || this._addIdentityChange(s, t))
                    : ((s = this._mismatch(s, t, r, e)), (i = !0)),
                  (s = s._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(s), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t, e;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e)
              (t.previousIndex = t.currentIndex), (e = t._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
              ? (Ei(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r))
              : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
              ? (Ei(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r))
              : (t = this._addAfter(new ma(e, n), s, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r && ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t;
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = t) : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new ya()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return null === e ? (this._itHead = n) : (e._next = n), null === n ? (this._itTail = e) : (n._prev = e), t;
        }
        _addToMoves(t, e) {
          return t.previousIndex === e
            ? t
            : ((this._movesTail = null === this._movesTail ? (this._movesHead = t) : (this._movesTail._nextMoved = t)),
              t);
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new ya()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class ma {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class ba {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
            : ((this._tail._nextDup = t), (t._prevDup = this._tail), (t._nextDup = null), (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === e || e <= n.currentIndex) && Ei(n.trackById, t)) return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class ya {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new ba()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function va(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + e + s;
      }
      class _a {
        constructor() {}
        supports(t) {
          return t instanceof Map || Ti(t);
        }
        create() {
          return new wa();
        }
      }
      class wa {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Ti(t)))
              throw new Error(`Error trying to diff '${E(t)}'. Only maps and objects are allowed`);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n) this._maybeAddToChanges(e, t), (this._appendAfter = e), (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter ? ((this._appendAfter._next = e), (e._prev = this._appendAfter)) : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              s = n._next;
            return r && (r._next = s), s && (s._prev = r), (n._next = null), (n._prev = null), n;
          }
          const n = new Ca(t);
          return this._records.set(t, n), (n.currentValue = e), this._addToAdditions(n), n;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next)
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          Ei(e, t.currentValue) || ((t.previousValue = t.currentValue), (t.currentValue = e), this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n));
        }
      }
      class Ca {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Sa = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: n => {
                  if (!n) throw new Error('Cannot extend IterableDiffers without a parent injector');
                  return t.create(e, n);
                },
                deps: [[t, new d(), new u()]]
              };
            }
            find(t) {
              const e = this.factories.find(e => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${((n = t), n.name || typeof n)}'`
              );
              var n;
            }
          }
          return (t.ɵprov = m({ token: t, providedIn: 'root', factory: () => new t([new pa()]) })), t;
        })(),
        xa = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: n => {
                  if (!n) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                  return t.create(e, n);
                },
                deps: [[t, new d(), new u()]]
              };
            }
            find(t) {
              const e = this.factories.find(e => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (t.ɵprov = m({ token: t, providedIn: 'root', factory: () => new t([new _a()]) })), t;
        })();
      const ka = [new _a()],
        Ea = new Sa([new pa()]),
        Oa = new xa(ka);
      let Aa = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Ta(t, sa)), t;
      })();
      const Ta = function(t, e) {
        return Xs(t, e, zt(), Ut());
      };
      let Ia = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Pa(t, sa)), t;
      })();
      const Pa = function(t, e) {
          return ti(t, e, zt(), Ut());
        },
        Ma = {};
      function Ra(t) {
        const e = [];
        for (let n in t) t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      const ja = new z('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => je });
      class Na extends ea {
        constructor(t, e) {
          super(),
            (this.componentDef = t),
            (this.ngModule = e),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(vr).join(',')),
            (this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : []),
            (this.isBoundToModule = !!e);
        }
        get inputs() {
          return Ra(this.componentDef.inputs);
        }
        get outputs() {
          return Ra(this.componentDef.outputs);
        }
        create(t, e, n, r) {
          const s = (r = r || this.ngModule)
              ? (function(t, e) {
                  return {
                    get: (n, r, s) => {
                      const i = t.get(n, Ma, s);
                      return i !== Ma || r === Ma ? i : e.get(n, r, s);
                    }
                  };
                })(t, r.injector)
              : t,
            i = s.get(oa, Ce),
            o = s.get(ua, null),
            a = i.createRenderer(null, this.componentDef),
            l = n
              ? (function(t, e, n) {
                  if (we(t)) return t.selectRootElement(e, n === gt.ShadowDom);
                  let r = 'string' == typeof e ? t.querySelector(e) : e;
                  return (r.textContent = ''), r;
                })(a, n, this.componentDef.encapsulation)
              : Rr(this.componentDef.selectors[0][0] || 'div', i.createRenderer(null, this.componentDef), null),
            c = this.componentDef.onPush ? 576 : 528,
            u = 'string' == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
            h = { components: [], scheduler: je, clean: ms, playerHandler: null, flags: 0 },
            d = zr(0, -1, null, 1, 0, null, null, null, null, null),
            p = jr(null, d, h, c, null, null, i, a, o, s),
            f = n && l ? da.full : null;
          let g, m;
          ie(p, null);
          try {
            const t = (function(t, e, n, r, s, i, o) {
              const a = n[1];
              n[19] = t;
              const l = Nr(a, null, 0, 3, null, null),
                c = (l.mergedAttrs = e.hostAttrs);
              null !== c &&
                (Si(l, c),
                null !== t &&
                  (Se(s, t, c), null !== l.classes && Zs(s, t, l.classes), null !== l.styles && qs(s, t, l.styles)));
              const u = r.createRenderer(t, e);
              null !== t && i && (we(s) ? s.setAttribute(t, 'ng-version', i) : t.setAttribute('ng-version', i));
              const h = jr(n, Br(e), null, e.onPush ? 64 : 16, n[19], l, r, u, null);
              return (
                a.firstCreatePass && (Be(Fe(l, n), a, e.type), Xr(a, l), es(l, n.length, 1)), hs(n, h), (n[19] = h)
              );
            })(l, this.componentDef, p, i, a, f);
            (m = Xn(p[1], 0)),
              e && (m.projection = e.map(t => Array.from(t))),
              (g = (function(t, e, n, r, s) {
                const i = n[1],
                  o = (function(t, e, n) {
                    const r = zt();
                    t.firstCreatePass && (n.providersResolver && n.providersResolver(n), Yr(t, r, 1), ns(t, e, n));
                    const s = We(e, t, e.length - 1, r);
                    ar(s, e);
                    const i = Yn(r, e);
                    return i && ar(i, e), s;
                  })(i, n, e);
                r.components.push(o),
                  (t[8] = o),
                  s && s.forEach(t => t(o, e)),
                  e.contentQueries && e.contentQueries(1, o, n.length - 1);
                const a = zt();
                if (i.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                  ue(a.index - 19);
                  const t = n[1];
                  Kr(t, e), Qr(t, n, e.hostVars), Jr(e, o);
                }
                return o;
              })(t, this.componentDef, p, h, [Vo])),
              Dr(d, p, null);
          } finally {
            le();
          }
          const b = new Da(this.componentType, g, Ys(sa, m, p), p, m);
          return (n && !u) || (b.hostView._tViewNode.child = m), b;
        }
      }
      class Da extends class {} {
        constructor(t, e, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.destroyCbs = []),
            (this.instance = e),
            (this.hostView = this.changeDetectorRef = new Ws(r)),
            (this.hostView._tViewNode = (function(t, e, n, r) {
              let s = t.node;
              return null == s && (t.node = s = qr(0, null, 2, -1, null, null)), (r[6] = s);
            })(r[1], 0, 0, r)),
            (this.componentType = t);
        }
        get injector() {
          return new Je(this._tNode, this._rootLView);
        }
        destroy() {
          this.destroyCbs &&
            (this.destroyCbs.forEach(t => t()),
            (this.destroyCbs = null),
            !this.hostView.destroyed && this.hostView.destroy());
        }
        onDestroy(t) {
          this.destroyCbs && this.destroyCbs.push(t);
        }
      }
      const Va = void 0;
      var La = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Va],
        [['AM', 'PM'], Va, Va],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        Va,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        Va,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Va, "{1} 'at' {0}", Va],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        function(t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === e && 0 === n ? 1 : 5;
        }
      ];
      let Fa = {};
      function Ha(t, e, n) {
        'string' != typeof e && ((n = e), (e = t[qa.LocaleId])),
          (e = e.toLowerCase().replace(/_/g, '-')),
          (Fa[e] = t),
          n && (Fa[e][qa.ExtraData] = n);
      }
      function Ua(t) {
        const e = (function(t) {
          return t.toLowerCase().replace(/_/g, '-');
        })(t);
        let n = za(e);
        if (n) return n;
        const r = e.split('-')[0];
        if (((n = za(r)), n)) return n;
        if ('en' === r) return La;
        throw new Error(`Missing locale data for the locale "${t}".`);
      }
      function $a(t) {
        return Ua(t)[qa.CurrencyCode] || null;
      }
      function Ba(t) {
        return Ua(t)[qa.PluralCase];
      }
      function za(t) {
        return t in Fa || (Fa[t] = D.ng && D.ng.common && D.ng.common.locales && D.ng.common.locales[t]), Fa[t];
      }
      const qa = (function() {
          var t = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencyCode: 15,
            CurrencySymbol: 16,
            CurrencyName: 17,
            Currencies: 18,
            PluralCase: 19,
            ExtraData: 20
          };
          return (
            (t[t.LocaleId] = 'LocaleId'),
            (t[t.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (t[t.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (t[t.DaysFormat] = 'DaysFormat'),
            (t[t.DaysStandalone] = 'DaysStandalone'),
            (t[t.MonthsFormat] = 'MonthsFormat'),
            (t[t.MonthsStandalone] = 'MonthsStandalone'),
            (t[t.Eras] = 'Eras'),
            (t[t.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (t[t.WeekendRange] = 'WeekendRange'),
            (t[t.DateFormat] = 'DateFormat'),
            (t[t.TimeFormat] = 'TimeFormat'),
            (t[t.DateTimeFormat] = 'DateTimeFormat'),
            (t[t.NumberSymbols] = 'NumberSymbols'),
            (t[t.NumberFormats] = 'NumberFormats'),
            (t[t.CurrencyCode] = 'CurrencyCode'),
            (t[t.CurrencySymbol] = 'CurrencySymbol'),
            (t[t.CurrencyName] = 'CurrencyName'),
            (t[t.Currencies] = 'Currencies'),
            (t[t.PluralCase] = 'PluralCase'),
            (t[t.ExtraData] = 'ExtraData'),
            t
          );
        })(),
        Za = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,
        Ga = /\ufffd\/?\*(\d+:\d+)\ufffd/gi,
        Wa = /\ufffd(\/?[#*!]\d+):?\d*\ufffd/gi,
        Ka = /\ufffd(\d+):?\d*\ufffd/gi,
        Qa = /({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi;
      function Ja(t) {
        if (!t) return [];
        let e = 0;
        const n = [],
          r = [],
          s = /[{}]/g;
        let i;
        for (s.lastIndex = 0; (i = s.exec(t)); ) {
          const s = i.index;
          if ('}' == i[0]) {
            if ((n.pop(), 0 == n.length)) {
              const n = t.substring(e, s);
              Za.test(n) ? r.push(Ya(n)) : r.push(n), (e = s + 1);
            }
          } else {
            if (0 == n.length) {
              const n = t.substring(e, s);
              r.push(n), (e = s + 1);
            }
            n.push('{');
          }
        }
        const o = t.substring(e);
        return r.push(o), r;
      }
      function Ya(t) {
        const e = [],
          n = [];
        let r = 1,
          s = 0;
        const i = Ja(
          (t = t.replace(Za, function(t, e, n) {
            return (r = 'select' === n ? 0 : 1), (s = parseInt(e.substr(1), 10)), '';
          }))
        );
        for (let o = 0; o < i.length; ) {
          let t = i[o++].trim();
          1 === r && (t = t.replace(/\s*(?:=)?(\w+)\s*/, '$1')), t.length && e.push(t);
          const s = Ja(i[o++]);
          e.length > n.length && n.push(s);
        }
        return { type: r, mainBinding: s, cases: e, values: n };
      }
      function Xa(t) {
        let e,
          n,
          r = '',
          s = 0,
          i = !1;
        for (; null !== (e = Ga.exec(t)); )
          i
            ? e[0] === `\ufffd/*${n}\ufffd` && ((s = e.index), (i = !1))
            : ((r += t.substring(s, e.index + e[0].length)), (n = e[1]), (i = !0));
        return (r += t.substr(s)), r;
      }
      function tl(t, e, n, r = null) {
        const s = [null, null],
          i = t.split(Ka);
        let o = 0;
        for (let a = 0; a < i.length; a++) {
          const t = i[a];
          if (1 & a) {
            const e = parseInt(t, 10);
            s.push(-1 - e), (o |= sl(e));
          } else '' !== t && s.push(t);
        }
        return s.push((e << 2) | (n ? 1 : 0)), n && s.push(n, r), (s[0] = o), (s[1] = s.length - 2), s;
      }
      function el(t, e = 0) {
        let n;
        e |= sl(t.mainBinding);
        for (let r = 0; r < t.values.length; r++) {
          const s = t.values[r];
          for (let t = 0; t < s.length; t++) {
            const r = s[t];
            if ('string' == typeof r) for (; (n = Ka.exec(r)); ) e |= sl(parseInt(n[1], 10));
            else e = el(r, e);
          }
        }
        return e;
      }
      const nl = [];
      let rl = -1;
      function sl(t) {
        return 1 << Math.min(t, 31);
      }
      const il = [];
      let ol;
      function al(t, e, n, r, s) {
        const i = e.next;
        r || (r = n),
          r === n && e !== n.child
            ? ((e.next = n.child), (n.child = e))
            : r !== n && e !== r.next
            ? ((e.next = r.next), (r.next = e))
            : (e.next = null),
          n !== s[6] && (e.parent = n);
        let o = e.next;
        for (; o; ) o.next === e && (o.next = i), (o = o.next);
        if (1 === e.type) return Bs(t, s, e), e;
        Ls(t, s, Yn(e, s), e);
        const a = s[e.index];
        return 0 !== e.type && Rt(a) && Ls(t, s, a[7], e), e;
      }
      function ll(t, e, n, r, s, i) {
        const o = zt();
        e[n + 19] = s;
        const a = Nr(t, e[6], n, r, i, null);
        return o && o.next === a && (o.next = null), a;
      }
      function cl(t, e, n, r) {
        const s = r[11];
        let i = null,
          o = null;
        const a = [];
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          if ('string' == typeof c) {
            const t = ks(c, s),
              u = e[++l];
            (o = i), (i = ll(n, r, u, 3, t, null)), a.push(u), Gt();
          } else if ('number' == typeof c)
            switch (7 & c) {
              case 1:
                const s = c >>> 17;
                let u;
                (u = s === t ? r[6] : Xn(n, s)), (o = al(n, i, u, o, r));
                break;
              case 0:
                const h = c >>> 3;
                a.push(h), (o = i), (i = Xn(n, h)), i && qt(i, 3 === i.type);
                break;
              case 5:
                (o = i = Xn(n, c >>> 3)), qt(i, !1);
                break;
              case 4:
                ss(c >>> 3, e[++l], e[++l], n, r);
                break;
              default:
                throw new Error(`Unable to determine the type of mutate operation for "${c}"`);
            }
          else
            switch (c) {
              case kr:
                const t = e[++l],
                  u = e[++l],
                  h = s.createComment(t);
                (o = i), (i = ll(n, r, u, 5, h, null)), a.push(u), ar(h, r), (i.activeCaseIndex = null), Gt();
                break;
              case xr:
                const d = e[++l],
                  p = e[++l];
                (o = i), (i = ll(n, r, p, 3, s.createElement(d), d)), a.push(p);
                break;
              default:
                throw new Error(`Unable to determine the type of mutate operation for "${c}"`);
            }
        }
        return Gt(), a;
      }
      function ul(t, e, n, r) {
        const s = Xn(t, n),
          i = Jn(n, e);
        i && Hs(e[11], i);
        const o = tr(e, n);
        if (Rt(o)) {
          const t = o;
          0 !== s.type && Hs(e[11], t[7]);
        }
        r && (s.flags |= 64);
      }
      function hl(t, e, n) {
        (function(t, e, n) {
          const r = $t();
          (nl[++rl] = t),
            so(!0),
            r.firstCreatePass &&
              null === r.data[t + 19] &&
              (function(t, e, n, r, s) {
                const i = e.blueprint.length - 19;
                ol = 0;
                const o = zt(),
                  a = Zt() ? o : o && o.parent;
                let l = a && a !== t[6] ? a.index - 19 : n,
                  c = 0;
                il[c] = l;
                const u = [];
                n > 0 && o !== a && u.push((o.index << 3) | 0);
                const h = [],
                  d = [],
                  p = ((f = (function(t, e) {
                    if ('number' != typeof e) return Xa(t);
                    {
                      const n = t.indexOf(`:${e}\ufffd`) + 2 + e.toString().length,
                        r = t.search(new RegExp(`\ufffd\\/\\*\\d+:${e}\ufffd`));
                      return Xa(t.substring(n, r));
                    }
                  })(r, s)),
                  f.replace(wl, ' ')).split(Wa);
                var f;
                for (let g = 0; g < p.length; g++) {
                  let t = p[g];
                  if (1 & g)
                    if ('/' === t.charAt(0)) {
                      if ('#' === t.charAt(1)) {
                        const e = parseInt(t.substr(2), 10);
                        (l = il[--c]), u.push((e << 3) | 5);
                      }
                    } else {
                      const e = parseInt(t.substr(1), 10);
                      u.push((e << 3) | 0, (l << 17) | 1), '#' === t.charAt(0) && (il[++c] = l = e);
                    }
                  else {
                    const e = Ja(t);
                    for (let t = 0; t < e.length; t++)
                      if (1 & t) {
                        const n = i + ol++;
                        u.push(kr, '', n, (l << 17) | 1);
                        const r = e[t],
                          s = el(r);
                        yl(d, r, n, n);
                        const o = d.length - 1;
                        h.push(sl(r.mainBinding), 3, -1 - r.mainBinding, (n << 2) | 2, o, s, 2, (n << 2) | 3, o);
                      } else if ('' !== e[t]) {
                        const n = e[t],
                          r = n.match(Ka),
                          s = i + ol++;
                        u.push(r ? '' : n, s, (l << 17) | 1), r && ot(tl(n, s), h);
                      }
                  }
                }
                ol > 0 &&
                  (function(t, e, n) {
                    if (n > 0 && t.firstCreatePass) {
                      for (let r = 0; r < n; r++) t.blueprint.push(null), t.data.push(null), e.push(null);
                      t.expandoInstructions ? t.expandoInstructions.push(n) : (t.expandoStartIndex += n);
                    }
                  })(e, t, ol),
                  (e.data[n + 19] = { vars: ol, create: u, update: h, icus: d.length ? d : null });
              })(Ut(), r, t, e, n);
        })(t, e, n),
          (function() {
            const t = Ut();
            !(function(t, e) {
              const n = nl[rl--],
                r = t.data[n + 19],
                s = zt(),
                i = cl(n, r.create, t, e);
              let o = n + 1;
              for (; o <= s.index - 19; ) {
                -1 === i.indexOf(o) && ul(t, e, o, !0);
                const n = Xn(t, o);
                !n || (3 !== n.type && 4 !== n.type) || null === n.localNames || (o += n.localNames.length >> 1), o++;
              }
            })($t(), t),
              so(!1);
          })();
      }
      function dl(t, e) {
        !(function(t, e, n, r) {
          const s = zt().index - 19,
            i = [];
          for (let o = 0; o < r.length; o += 2) {
            const a = r[o],
              l = r[o + 1].split(Qa);
            for (let r = 0; r < l.length; r++) {
              const o = l[r];
              if (1 & r) throw new Error('ICU expressions are not yet supported in attributes');
              if ('' !== o)
                if (o.match(Ka)) e.firstCreatePass && null === e.data[n + 19] && ot(tl(o, s, a), i);
                else {
                  const n = Xn(e, s);
                  3 === n.type && ss(s, a, o, e, t);
                  const r = null !== n.inputs && n.inputs[a];
                  r && _s(e, t, r, a, o);
                }
            }
          }
          e.firstCreatePass && null === e.data[n + 19] && (e.data[n + 19] = i);
        })(Ut(), $t(), t, e);
      }
      let pl = 0,
        fl = 0;
      function gl(t) {
        return Mi(Ut(), Yt(), t) && (pl |= 1 << fl), fl++, gl;
      }
      function ml(t) {
        if (fl) {
          const e = $t(),
            n = e.data[t + 19];
          let r,
            s = null;
          Array.isArray(n) ? (r = n) : ((r = n.update), (s = n.icus));
          const i = Jt() - fl - 1,
            o = Ut();
          !(function t(e, n, r, s, i, o, a = !1) {
            let l = !1;
            for (let c = 0; c < e.length; c++) {
              const u = e[c],
                h = e[++c];
              if (a || u & s) {
                let a = '';
                for (let u = c + 1; u <= c + h; u++) {
                  const c = e[u];
                  if ('string' == typeof c) a += c;
                  else if ('number' == typeof c)
                    if (c < 0) a += Me(o[r - c]);
                    else {
                      const h = c >>> 2;
                      let d, p, f;
                      switch (3 & c) {
                        case 1:
                          Gr(i, o, h, e[++u], a, e[++u]);
                          break;
                        case 0:
                          ws(o, h, a);
                          break;
                        case 2:
                          if (((d = e[++u]), (p = n[d]), (f = Xn(i, h)), null !== f.activeCaseIndex)) {
                            const t = p.remove[f.activeCaseIndex];
                            for (let e = 0; e < t.length; e++) {
                              const r = t[e];
                              switch (7 & r) {
                                case 3:
                                  ul(i, o, r >>> 3, !1);
                                  break;
                                case 6:
                                  const s = Xn(i, t[e + 1] >>> 3).activeCaseIndex;
                                  null !== s && ot(n[r >>> 3].remove[s], t);
                              }
                            }
                          }
                          const c = bl(p, a);
                          (f.activeCaseIndex = -1 !== c ? c : null), c > -1 && (cl(-1, p.create[c], i, o), (l = !0));
                          break;
                        case 3:
                          (d = e[++u]),
                            (p = n[d]),
                            (f = Xn(i, h)),
                            null !== f.activeCaseIndex && t(p.update[f.activeCaseIndex], n, r, s, i, o, l);
                      }
                    }
                }
              }
              c += h;
            }
          })(r, s, i, pl, e, o),
            (pl = 0),
            (fl = 0);
        }
      }
      function bl(t, e) {
        let n = t.cases.indexOf(e);
        if (-1 === n)
          switch (t.type) {
            case 1: {
              const r = (function(t, e) {
                switch (Ba(e)(t)) {
                  case 0:
                    return 'zero';
                  case 1:
                    return 'one';
                  case 2:
                    return 'two';
                  case 3:
                    return 'few';
                  case 4:
                    return 'many';
                  default:
                    return 'other';
                }
              })(e, Cl);
              (n = t.cases.indexOf(r)), -1 === n && 'other' !== r && (n = t.cases.indexOf('other'));
              break;
            }
            case 0:
              n = t.cases.indexOf('other');
          }
        return n;
      }
      function yl(t, e, n, r) {
        const s = [],
          i = [],
          o = [],
          a = [],
          l = [];
        for (let c = 0; c < e.values.length; c++) {
          const u = e.values[c],
            h = [];
          for (let t = 0; t < u.length; t++) {
            const e = u[t];
            if ('string' != typeof e) {
              const n = h.push(e) - 1;
              u[t] = `\x3c!--\ufffd${n}\ufffd--\x3e`;
            }
          }
          const d = vl(u.join(''), n, h, t, r);
          s.push(d.create), i.push(d.remove), o.push(d.update), a.push(d.vars), l.push(d.childIcus);
        }
        t.push({ type: e.type, vars: a, childIcus: l, cases: e.cases, create: s, remove: i, update: o }),
          (ol += Math.max(...a));
      }
      function vl(t, e, n, r, s) {
        const i = new Cn(_e()).getInertBodyElement(t);
        if (!i) throw new Error('Unable to generate inert body element');
        const o = { vars: 0, childIcus: [], create: [], remove: [], update: [] };
        return (
          (function t(e, n, r, s, i, o) {
            if (e) {
              const a = [];
              for (; e; ) {
                const l = e.nextSibling,
                  c = o + ++n.vars;
                switch (e.nodeType) {
                  case Node.ELEMENT_NODE:
                    const l = e,
                      u = l.tagName.toLowerCase();
                    if (Rn.hasOwnProperty(u)) {
                      n.create.push(xr, u, c, (r << 17) | 1);
                      const a = l.attributes;
                      for (let t = 0; t < a.length; t++) {
                        const e = a.item(t),
                          r = e.name.toLowerCase();
                        e.value.match(Ka)
                          ? Dn.hasOwnProperty(r) &&
                            ot(
                              jn[r]
                                ? tl(e.value, c, e.name, kn)
                                : Nn[r]
                                ? tl(e.value, c, e.name, En)
                                : tl(e.value, c, e.name),
                              n.update
                            )
                          : n.create.push((c << 3) | 4, e.name, e.value);
                      }
                      t(e.firstChild, n, c, s, i, o), n.remove.push((c << 3) | 3);
                    } else n.vars--;
                    break;
                  case Node.TEXT_NODE:
                    const h = e.textContent || '',
                      d = h.match(Ka);
                    n.create.push(d ? '' : h, c, (r << 17) | 1),
                      n.remove.push((c << 3) | 3),
                      d && ot(tl(h, c), n.update);
                    break;
                  case Node.COMMENT_NODE:
                    const p = _l.exec(e.textContent || '');
                    if (p) {
                      const t = parseInt(p[1], 10);
                      n.create.push(kr, '', c, (r << 17) | 1), a.push([s[t], c]);
                    } else n.vars--;
                    break;
                  default:
                    n.vars--;
                }
                e = l;
              }
              for (let t = 0; t < a.length; t++) {
                const e = a[t][0],
                  r = a[t][1];
                yl(i, e, r, o + n.vars);
                const s = i.length - 1;
                (n.vars += Math.max(...i[s].vars)), n.childIcus.push(s);
                const l = el(e);
                n.update.push(sl(e.mainBinding), 3, -1 - e.mainBinding, (r << 2) | 2, s, l, 2, (r << 2) | 3, s),
                  n.remove.push((s << 3) | 6, (r << 3) | 3);
              }
            }
          })((zn(i) || i).firstChild, o, e, n, r, s),
          o
        );
      }
      const _l = /\ufffd(\d+)\ufffd/,
        wl = /\uE500/g;
      let Cl = 'en-US';
      function Sl(t) {
        var e, n;
        (n = 'Expected localeId to be defined'),
          null == (e = t) &&
            (function(t, e, n, r) {
              throw new Error(`ASSERTION ERROR: ${t}` + ` [Expected=> null != ${e} <=Actual]`);
            })(n, e),
          'string' == typeof t && (Cl = t.toLowerCase().replace(/_/g, '-'));
      }
      const xl = new Map(),
        kl = {
          provide: ra,
          useClass: class extends ra {
            constructor(t) {
              super(), (this.ngModule = t);
            }
            resolveComponentFactory(t) {
              const e = Tt(t);
              return new Na(e, this.ngModule);
            }
          },
          deps: [st]
        };
      class El extends st {
        constructor(t, e) {
          super(), (this._parent = e), (this._bootstrapComponents = []), (this.injector = this), (this.destroyCbs = []);
          const n = Pt(t),
            r = t[U] || null;
          r && Sl(r),
            (this._bootstrapComponents = Ne(n.bootstrap)),
            (this._r3Injector = ui(t, e, [{ provide: st, useValue: this }, kl], E(t))),
            (this.instance = this.get(t));
        }
        get(t, e = yi.THROW_IF_NOT_FOUND, n = p.Default) {
          return t === yi || t === st || t === q ? this : this._r3Injector.get(t, e, n);
        }
        get componentFactoryResolver() {
          return this.get(ra);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Ol extends it {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== Pt(t) &&
              (function t(e) {
                if (null !== e.ɵmod.id) {
                  const t = e.ɵmod.id;
                  (function(t, e, n) {
                    if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${E(e)} vs ${E(e.name)}`);
                  })(t, xl.get(t), e),
                    xl.set(t, e);
                }
                let n = e.ɵmod.imports;
                n instanceof Function && (n = n()), n && n.forEach(e => t(e));
              })(t);
        }
        create(t) {
          return new El(this.moduleType, t);
        }
      }
      function Al(t, e, n) {
        const r = Qt() + t,
          s = Ut();
        return s[r] === _r ? Ii(s, r, n ? e.call(n) : e()) : Pi(s, r);
      }
      function Tl(t, e, n, r) {
        return Ml(Ut(), Qt(), t, e, n, r);
      }
      function Il(t, e, n, r, s) {
        return (function(t, e, n, r, s, i, o) {
          const a = e + n;
          return Ri(t, a, s, i) ? Ii(t, a + 2, o ? r.call(o, s, i) : r(s, i)) : Pi(t, a + 2);
        })(Ut(), Qt(), t, e, n, r, s);
      }
      function Pl(t, e, n, r, s, i) {
        return (function(t, e, n, r, s, i, o, a) {
          const l = e + n;
          return (function(t, e, n, r, s) {
            const i = Ri(t, e, n, r);
            return Mi(t, e + 2, s) || i;
          })(t, l, s, i, o)
            ? Ii(t, l + 3, a ? r.call(a, s, i, o) : r(s, i, o))
            : Pi(t, l + 3);
        })(Ut(), Qt(), t, e, n, r, s, i);
      }
      function Ml(t, e, n, r, s, i) {
        const o = e + n;
        return Mi(t, o, s) ? Ii(t, o + 1, i ? r.call(i, s) : r(s)) : Pi(t, o + 1);
      }
      function Rl(t, e) {
        const n = $t();
        let r;
        const s = t + 19;
        n.firstCreatePass
          ? ((r = (function(t, e) {
              if (e)
                for (let n = e.length - 1; n >= 0; n--) {
                  const r = e[n];
                  if (t === r.name) return r;
                }
              throw new Error(`The pipe '${t}' could not be found!`);
            })(e, n.pipeRegistry)),
            (n.data[s] = r),
            r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy))
          : (r = n.data[s]);
        const i = (r.factory || (r.factory = It(r.type)))();
        return (
          (function(t, e, n, r) {
            const s = n + 19;
            s >= t.data.length && ((t.data[s] = null), (t.blueprint[s] = null)), (e[s] = r);
          })(n, Ut(), t, i),
          i
        );
      }
      function jl(t, e, n) {
        const r = Ut(),
          s = tr(r, t);
        return (function(t, e) {
          return Oi.isWrapped(e) && ((e = Oi.unwrap(e)), (t[Jt()] = _r)), e;
        })(
          r,
          (function(t, e) {
            return t[1].data[e + 19].pure;
          })(r, t)
            ? Ml(r, Qt(), e, s.transform, n, s)
            : s.transform(n)
        );
      }
      class Nl extends r.a {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            i = t => null,
            o = () => null;
          t && 'object' == typeof t
            ? ((r = this.__isAsync
                ? e => {
                    setTimeout(() => t.next(e));
                  }
                : e => {
                    t.next(e);
                  }),
              t.error &&
                (i = this.__isAsync
                  ? e => {
                      setTimeout(() => t.error(e));
                    }
                  : e => {
                      t.error(e);
                    }),
              t.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? e => {
                    setTimeout(() => t(e));
                  }
                : e => {
                    t(e);
                  }),
              e &&
                (i = this.__isAsync
                  ? t => {
                      setTimeout(() => e(t));
                    }
                  : t => {
                      e(t);
                    }),
              n &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const a = super.subscribe(r, i, o);
          return t instanceof s.a && t.add(a), a;
        }
      }
      function Dl() {
        return this._results[ki()]();
      }
      class Vl {
        constructor() {
          (this.dirty = !0), (this._results = []), (this.changes = new Nl()), (this.length = 0);
          const t = ki(),
            e = Vl.prototype;
          e[t] || (e[t] = Dl);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = (function t(e, n) {
            void 0 === n && (n = e);
            for (let r = 0; r < e.length; r++) {
              let s = e[r];
              Array.isArray(s) ? (n === e && (n = e.slice(0, r)), t(s, n)) : n !== e && n.push(s);
            }
            return n;
          })(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class Ll {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Ll(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Fl {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const e = t.queries;
          if (null !== e) {
            const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
              r = [];
            for (let t = 0; t < n; t++) {
              const n = e.getByIndex(t);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new Fl(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let e = 0; e < this.queries.length; e++) null !== tc(t, e).matches && this.queries[e].setDirty();
        }
      }
      class Hl {
        constructor(t, e, n, r = null) {
          (this.predicate = t), (this.descendants = e), (this.isStatic = n), (this.read = r);
        }
      }
      class Ul {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, e) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e);
        }
        elementEnd(t) {
          for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t);
        }
        embeddedTView(t) {
          let e = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== e ? e.length : 0,
              s = this.getByIndex(n).embeddedTView(t, r);
            s && ((s.indexInDeclarationView = n), null !== e ? e.push(s) : (e = [s]));
          }
          return null !== e ? new Ul(e) : null;
        }
        template(t, e) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class $l {
        constructor(t, e = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = e);
        }
        elementStart(t, e) {
          this.isApplyingToNode(e) && this.matchTNode(t, e);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
        }
        template(t, e) {
          this.elementStart(t, e);
        }
        embeddedTView(t, e) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0), this.addMatch(-t.index, e), new $l(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          return this._appliesToNextNode && !1 === this.metadata.descendants
            ? this._declarationNodeIndex === (t.parent ? t.parent.index : -1)
            : this._appliesToNextNode;
        }
        matchTNode(t, e) {
          if (Array.isArray(this.metadata.predicate)) {
            const n = this.metadata.predicate;
            for (let r = 0; r < n.length; r++) this.matchTNodeWithReadOption(t, e, Bl(e, n[r]));
          } else {
            const n = this.metadata.predicate;
            n === Aa
              ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1)
              : this.matchTNodeWithReadOption(t, e, Ge(e, t, n, !1, !1));
          }
        }
        matchTNodeWithReadOption(t, e, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === sa || r === Ia || (r === Aa && 0 === e.type)) this.addMatch(e.index, -2);
              else {
                const n = Ge(e, t, r, !1, !1);
                null !== n && this.addMatch(e.index, n);
              }
            else this.addMatch(e.index, n);
          }
        }
        addMatch(t, e) {
          null === this.matches ? (this.matches = [t, e]) : this.matches.push(t, e);
        }
      }
      function Bl(t, e) {
        const n = t.localNames;
        if (null !== n) for (let r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function zl(t, e, n, r) {
        return -1 === n
          ? (function(t, e) {
              return 3 === t.type || 4 === t.type ? Ys(sa, t, e) : 0 === t.type ? Xs(Aa, sa, t, e) : null;
            })(e, t)
          : -2 === n
          ? (function(t, e, n) {
              return n === sa ? Ys(sa, e, t) : n === Aa ? Xs(Aa, sa, e, t) : n === Ia ? ti(Ia, sa, e, t) : void 0;
            })(t, e, r)
          : We(t, t[1], n, e);
      }
      function ql(t, e, n, r) {
        const s = e[5].queries[r];
        if (null === s.matches) {
          const r = t.data,
            i = n.matches,
            o = [];
          for (let t = 0; t < i.length; t += 2) {
            const s = i[t];
            o.push(s < 0 ? null : zl(e, r[s], i[t + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function Zl(t) {
        const e = Ut(),
          n = $t(),
          r = ee();
        ne(r + 1);
        const s = tc(n, r);
        if (t.dirty && rr(e) === s.metadata.isStatic) {
          if (null === s.matches) t.reset([]);
          else {
            const i = s.crossesNgTemplate
              ? (function t(e, n, r, s) {
                  const i = e.queries.getByIndex(r),
                    o = i.matches;
                  if (null !== o) {
                    const a = ql(e, n, i, r);
                    for (let e = 0; e < o.length; e += 2) {
                      const r = o[e];
                      if (r > 0) s.push(a[e / 2]);
                      else {
                        const i = o[e + 1],
                          a = n[-r];
                        for (let e = 9; e < a.length; e++) {
                          const n = a[e];
                          n[17] === n[3] && t(n[1], n, i, s);
                        }
                        if (null !== a[5]) {
                          const e = a[5];
                          for (let n = 0; n < e.length; n++) {
                            const r = e[n];
                            t(r[1], r, i, s);
                          }
                        }
                      }
                    }
                  }
                  return s;
                })(n, e, r, [])
              : ql(n, e, s, r);
            t.reset(i), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Gl(t, e, n) {
        !(function(t, e, n, r, s, i) {
          t.firstCreatePass && (Xl(t, new Hl(n, r, !0, s), -1), (t.staticViewQueries = !0)), Yl(t, e);
        })($t(), Ut(), t, e, n);
      }
      function Wl(t, e, n, r) {
        Ql($t(), Ut(), e, n, r, !1, zt(), t);
      }
      function Kl(t, e, n, r) {
        Ql($t(), Ut(), e, n, r, !0, zt(), t);
      }
      function Ql(t, e, n, r, s, i, o, a) {
        t.firstCreatePass &&
          (Xl(t, new Hl(n, r, i, s), o.index),
          (function(t, e) {
            const n = t.contentQueries || (t.contentQueries = []);
            e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e);
          })(t, a),
          i && (t.staticContentQueries = !0)),
          Yl(t, e);
      }
      function Jl() {
        return (t = Ut()), (e = ee()), t[5].queries[e].queryList;
        var t, e;
      }
      function Yl(t, e) {
        const n = new Vl();
        !(function(t, e, n, r) {
          const s = bs(e);
          s.push(n), t.firstCreatePass && ys(t).push(r, s.length - 1);
        })(t, e, n, n.destroy),
          null === e[5] && (e[5] = new Fl()),
          e[5].queries.push(new Ll(n));
      }
      function Xl(t, e, n) {
        null === t.queries && (t.queries = new Ul()), t.queries.track(new $l(e, n));
      }
      function tc(t, e) {
        return t.queries.getByIndex(e);
      }
      function ec(t, e) {
        return Xs(Aa, sa, t, e);
      }
      function nc(t = p.Default) {
        const e = ei(!0);
        if (null != e || t & p.Optional) return e;
        throw new Error('No provider for ChangeDetectorRef!');
      }
      const rc = new z('Application Initializer');
      let sc = (() => {
        class t {
          constructor(t) {
            (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, e) => {
                (this.resolve = t), (this.reject = e);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [],
              e = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const e = this.appInits[n]();
                Ki(e) && t.push(e);
              }
            Promise.all(t)
              .then(() => {
                e();
              })
              .catch(t => {
                this.reject(t);
              }),
              0 === t.length && e(),
              (this.initialized = !0);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(tt(rc, 8));
          }),
          (t.ɵprov = m({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const ic = new z('AppId'),
        oc = {
          provide: ic,
          useFactory: function() {
            return `${ac()}${ac()}${ac()}`;
          },
          deps: []
        };
      function ac() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const lc = new z('Platform Initializer'),
        cc = new z('Platform ID'),
        uc = new z('appBootstrapListener');
      let hc = (() => {
        class t {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = m({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const dc = new z('LocaleId'),
        pc = new z('DefaultCurrencyCode');
      class fc {
        constructor(t, e) {
          (this.ngModuleFactory = t), (this.componentFactories = e);
        }
      }
      const gc = function(t) {
          return new Ol(t);
        },
        mc = gc,
        bc = function(t) {
          return Promise.resolve(gc(t));
        },
        yc = function(t) {
          const e = gc(t),
            n = Ne(Pt(t).declarations).reduce((t, e) => {
              const n = Tt(e);
              return n && t.push(new Na(n)), t;
            }, []);
          return new fc(e, n);
        },
        vc = yc,
        _c = function(t) {
          return Promise.resolve(yc(t));
        };
      let wc = (() => {
        class t {
          constructor() {
            (this.compileModuleSync = mc),
              (this.compileModuleAsync = bc),
              (this.compileModuleAndAllComponentsSync = vc),
              (this.compileModuleAndAllComponentsAsync = _c);
          }
          clearCache() {}
          clearCacheFor(t) {}
          getModuleId(t) {}
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = m({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const Cc = new z('compilerOptions'),
        Sc = (() => Promise.resolve(0))();
      function xc(t) {
        'undefined' == typeof Zone
          ? Sc.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      class kc {
        constructor({ enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: e = !1 }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Nl(!1)),
            (this.onMicrotaskEmpty = new Nl(!1)),
            (this.onStable = new Nl(!1)),
            (this.onError = new Nl(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = e),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function() {
              let t = D.requestAnimationFrame,
                e = D.cancelAnimationFrame;
              if ('undefined' != typeof Zone && t && e) {
                const n = t[Zone.__symbol__('OriginalDelegate')];
                n && (t = n);
                const r = e[Zone.__symbol__('OriginalDelegate')];
                r && (e = r);
              }
              return { nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: e };
            })().nativeRequestAnimationFrame),
            (function(t) {
              const e =
                !!t.shouldCoalesceEventChangeDetection &&
                t.nativeRequestAnimationFrame &&
                (() => {
                  !(function(t) {
                    -1 === t.lastRequestAnimationFrameId &&
                      ((t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(D, () => {
                        (t.lastRequestAnimationFrameId = -1), Tc(t), Ac(t);
                      })),
                      Tc(t));
                  })(t);
                });
              t._inner = t._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0, maybeDelayChangeDetection: e },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return Ic(t), n.invokeTask(s, i, o, a);
                  } finally {
                    e && 'eventTask' === i.type && e(), Pc(t);
                  }
                },
                onInvoke: (e, n, r, s, i, o, a) => {
                  try {
                    return Ic(t), e.invoke(r, s, i, o, a);
                  } finally {
                    Pc(t);
                  }
                },
                onHasTask: (e, n, r, s) => {
                  e.hasTask(r, s),
                    n === r &&
                      ('microTask' == s.change
                        ? ((t._hasPendingMicrotasks = s.microTask), Tc(t), Ac(t))
                        : 'macroTask' == s.change && (t.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1)
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!kc.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (kc.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask('NgZoneEvent: ' + r, t, Oc, Ec, Ec);
          try {
            return s.runTask(i, e, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function Ec() {}
      const Oc = {};
      function Ac(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Tc(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function Ic(t) {
        t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Pc(t) {
        t._nesting--, Ac(t);
      }
      class Mc {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Nl()),
            (this.onMicrotaskEmpty = new Nl()),
            (this.onStable = new Nl()),
            (this.onError = new Nl());
        }
        run(t, e, n) {
          return t.apply(e, n);
        }
        runGuarded(t, e, n) {
          return t.apply(e, n);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, e, n, r) {
          return t.apply(e, n);
        }
      }
      let Rc = (() => {
          class t {
            constructor(t) {
              (this._ngZone = t),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                t.run(() => {
                  this.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                }
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      kc.assertNotInAngularZone(),
                        xc(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    }
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                xc(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(t => ({
                    source: t.source,
                    creationLocation: t.creationLocation,
                    data: t.data
                  }))
                : [];
            }
            addCallback(t, e, n) {
              let r = -1;
              e &&
                e > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(t => t.timeoutId !== r)),
                    t(this._didWork, this.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
            }
            whenStable(t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(t, e, n) {
              return [];
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(tt(kc));
            }),
            (t.ɵprov = m({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        jc = (() => {
          class t {
            constructor() {
              (this._applications = new Map()), Lc.addToWindow(this);
            }
            registerApplication(t, e) {
              this._applications.set(t, e);
            }
            unregisterApplication(t) {
              this._applications.delete(t);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(t) {
              return this._applications.get(t) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(t, e = !0) {
              return Lc.findTestabilityInTree(this, t, e);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = m({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      class Nc {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      function Dc(t) {
        Lc = t;
      }
      let Vc,
        Lc = new Nc(),
        Fc = function(t, e, n) {
          const r = new Ol(n);
          if (0 === _i.size) return Promise.resolve(r);
          const s = (function(t) {
            const e = [];
            return t.forEach(t => t && e.push(...t)), e;
          })(
            t
              .get(Cc, [])
              .concat(e)
              .map(t => t.providers)
          );
          if (0 === s.length) return Promise.resolve(r);
          const i = (function() {
              const t = D.ng;
              if (!t || !t.ɵcompilerFacade)
                throw new Error(
                  "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
                );
              return t.ɵcompilerFacade;
            })(),
            o = yi.create({ providers: s }).get(i.ResourceLoader);
          return (function(t) {
            const e = [],
              n = new Map();
            function r(t) {
              let e = n.get(t);
              if (!e) {
                const r = (t => Promise.resolve(o.get(t)))(t);
                n.set(t, (e = r.then(Ci)));
              }
              return e;
            }
            return (
              _i.forEach((t, n) => {
                const s = [];
                t.templateUrl &&
                  s.push(
                    r(t.templateUrl).then(e => {
                      t.template = e;
                    })
                  );
                const i = t.styleUrls,
                  o = t.styles || (t.styles = []),
                  a = t.styles.length;
                i &&
                  i.forEach((e, n) => {
                    o.push(''),
                      s.push(
                        r(e).then(r => {
                          (o[a + n] = r), i.splice(i.indexOf(e), 1), 0 == i.length && (t.styleUrls = void 0);
                        })
                      );
                  });
                const l = Promise.all(s).then(() =>
                  (function(t) {
                    wi.delete(t);
                  })(n)
                );
                e.push(l);
              }),
              (_i = new Map()),
              Promise.all(e).then(() => {})
            );
          })().then(() => r);
        };
      const Hc = new z('AllowMultipleToken');
      class Uc {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function $c(t, e, n = []) {
        const r = `Platform: ${e}`,
          s = new z(r);
        return (e = []) => {
          let i = Bc();
          if (!i || i.injector.get(Hc, !1))
            if (t) t(n.concat(e).concat({ provide: s, useValue: !0 }));
            else {
              const t = n.concat(e).concat({ provide: s, useValue: !0 }, { provide: si, useValue: 'platform' });
              !(function(t) {
                if (Vc && !Vc.destroyed && !Vc.injector.get(Hc, !1))
                  throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
                Vc = t.get(zc);
                const e = t.get(lc, null);
                e && e.forEach(t => t());
              })(yi.create({ providers: t, name: r }));
            }
          return (function(t) {
            const e = Bc();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(t, null))
              throw new Error('A platform with a different configuration has been created. Please destroy it first.');
            return e;
          })(s);
        };
      }
      function Bc() {
        return Vc && !Vc.destroyed ? Vc : null;
      }
      let zc = (() => {
        class t {
          constructor(t) {
            (this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
          }
          bootstrapModuleFactory(t, e) {
            const n = (function(t, e) {
                let n;
                return (
                  (n =
                    'noop' === t
                      ? new Mc()
                      : ('zone.js' === t ? void 0 : t) ||
                        new kc({ enableLongStackTrace: _n(), shouldCoalesceEventChangeDetection: e })),
                  n
                );
              })(e ? e.ngZone : void 0, (e && e.ngZoneEventCoalescing) || !1),
              r = [{ provide: kc, useValue: n }];
            return n.run(() => {
              const e = yi.create({ providers: r, parent: this.injector, name: t.moduleType.name }),
                s = t.create(e),
                i = s.injector.get(nn, null);
              if (!i) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
              return (
                s.onDestroy(() => Gc(this._modules, s)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: t => {
                      i.handleError(t);
                    }
                  })
                ),
                (function(t, e, n) {
                  try {
                    const r = n();
                    return Ki(r)
                      ? r.catch(n => {
                          throw (e.runOutsideAngular(() => t.handleError(n)), n);
                        })
                      : r;
                  } catch (r) {
                    throw (e.runOutsideAngular(() => t.handleError(r)), r);
                  }
                })(i, n, () => {
                  const t = s.injector.get(sc);
                  return (
                    t.runInitializers(),
                    t.donePromise.then(
                      () => (Sl(s.injector.get(dc, 'en-US') || 'en-US'), this._moduleDoBootstrap(s), s)
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(t, e = []) {
            const n = qc({}, e);
            return Fc(this.injector, n, t).then(t => this.bootstrapModuleFactory(t, n));
          }
          _moduleDoBootstrap(t) {
            const e = t.injector.get(Zc);
            if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${E(
                    t.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                    'Please define one of these.'
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }
          onDestroy(t) {
            this._destroyListeners.push(t);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach(t => t.destroy()),
              this._destroyListeners.forEach(t => t()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(tt(yi));
          }),
          (t.ɵprov = m({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function qc(t, e) {
        return Array.isArray(e) ? e.reduce(qc, t) : Object.assign(Object.assign({}, t), e);
      }
      let Zc = (() => {
        class t {
          constructor(t, e, n, r, s, l) {
            (this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = l),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = _n()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              });
            const c = new i.a(t => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              u = new i.a(t => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    kc.assertNotInAngularZone(),
                      xc(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  kc.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = Object(o.a)(c, u.pipe(Object(a.a)()));
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n = t instanceof ea ? t : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(st),
              s = n.create(yi.NULL, [], e || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get(Rc, null);
            return (
              i && s.injector.get(jc).registerApplication(s.location.nativeElement, i),
              this._loadComponent(s),
              _n() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              s
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges) for (let t of this._views) t.checkNoChanges();
            } catch (t) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t));
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            Gc(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(uc, [])
                .concat(this._bootstrapListeners)
                .forEach(e => e(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), Gc(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach(t => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(tt(kc), tt(hc), tt(yi), tt(nn), tt(ra), tt(sc));
          }),
          (t.ɵprov = m({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Gc(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class Wc {}
      class Kc {}
      const Qc = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      let Jc = (() => {
        class t {
          constructor(t, e) {
            (this._compiler = t), (this._config = e || Qc);
          }
          load(t) {
            return this.loadAndCompile(t);
          }
          loadAndCompile(t) {
            let [e, r] = t.split('#');
            return (
              void 0 === r && (r = 'default'),
              n('zn8P')(e)
                .then(t => t[r])
                .then(t => Yc(t, e, r))
                .then(t => this._compiler.compileModuleAsync(t))
            );
          }
          loadFactory(t) {
            let [e, r] = t.split('#'),
              s = 'NgFactory';
            return (
              void 0 === r && ((r = 'default'), (s = '')),
              n('zn8P')(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix)
                .then(t => t[r + s])
                .then(t => Yc(t, e, r))
            );
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(tt(wc), tt(Kc, 8));
          }),
          (t.ɵprov = m({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function Yc(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      const Xc = function(t) {
          return null;
        },
        tu = $c(null, 'core', [
          { provide: cc, useValue: 'unknown' },
          { provide: zc, deps: [yi] },
          { provide: jc, deps: [] },
          { provide: hc, deps: [] }
        ]),
        eu = [
          { provide: Zc, useClass: Zc, deps: [kc, hc, yi, nn, ra, sc] },
          {
            provide: ja,
            deps: [kc],
            useFactory: function(t) {
              let e = [];
              return (
                t.onStable.subscribe(() => {
                  for (; e.length; ) e.pop()();
                }),
                function(t) {
                  e.push(t);
                }
              );
            }
          },
          { provide: sc, useClass: sc, deps: [[new u(), rc]] },
          { provide: wc, useClass: wc, deps: [] },
          oc,
          {
            provide: Sa,
            useFactory: function() {
              return Ea;
            },
            deps: []
          },
          {
            provide: xa,
            useFactory: function() {
              return Oa;
            },
            deps: []
          },
          {
            provide: dc,
            useFactory: function(t) {
              return Sl((t = t || ('undefined' != typeof $localize && $localize.locale) || 'en-US')), t;
            },
            deps: [[new c(dc), new u(), new d()]]
          },
          { provide: pc, useValue: 'USD' }
        ];
      let nu = (() => {
        class t {
          constructor(t) {}
        }
        return (
          (t.ɵmod = xt({ type: t })),
          (t.ɵinj = b({
            factory: function(e) {
              return new (e || t)(tt(Zc));
            },
            providers: eu
          })),
          t
        );
      })();
    },
    gRHU: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var r = n('2fFW'),
        s = n('NJ4a');
      const i = {
        closed: !0,
        next(t) {},
        error(t) {
          if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
          Object(s.a)(t);
        },
        complete() {}
      };
    },
    jZKg: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return i;
      });
      var r = n('HDdC'),
        s = n('quSY');
      function i(t, e) {
        return new r.a(n => {
          const r = new s.a();
          let i = 0;
          return (
            r.add(
              e.schedule(function() {
                i !== t.length ? (n.next(t[i++]), n.closed || r.add(this.schedule())) : n.complete();
              })
            ),
            r
          );
        });
      }
    },
    jhN1: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return j;
      }),
        n.d(e, 'b', function() {
          return D;
        }),
        n.d(e, 'c', function() {
          return M;
        });
      var r = n('ofXK'),
        s = n('fXoL');
      class i extends r.u {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      }
      class o extends i {
        static makeCurrent() {
          Object(r.y)(new o());
        }
        getProperty(t, e) {
          return t[e];
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd();
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        getValue(t) {
          return t.value;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
          return 'window' === e ? window : 'document' === e ? t : 'body' === e ? t.body : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e = l || ((l = document.querySelector('base')), l) ? l.getAttribute('href') : null;
          return null == e
            ? null
            : ((n = e),
              a || (a = document.createElement('a')),
              a.setAttribute('href', n),
              '/' === a.pathname.charAt(0) ? a.pathname : '/' + a.pathname);
          var n;
        }
        resetBaseElement() {
          l = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return Object(r.x)(document.cookie, t);
        }
      }
      let a,
        l = null;
      const c = new s.q('TRANSITION_ID'),
        u = [
          {
            provide: s.d,
            useFactory: function(t, e, n) {
              return () => {
                n.get(s.e).donePromise.then(() => {
                  const n = Object(r.w)();
                  Array.prototype.slice
                    .apply(e.querySelectorAll('style[ng-transition]'))
                    .filter(e => e.getAttribute('ng-transition') === t)
                    .forEach(t => n.remove(t));
                });
              };
            },
            deps: [c, r.c, s.r],
            multi: !0
          }
        ];
      class h {
        static init() {
          Object(s.V)(new h());
        }
        addToWindow(t) {
          (s.nb.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r) throw new Error('Could not find testability for element.');
            return r;
          }),
            (s.nb.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (s.nb.getAllAngularRootElements = () => t.getAllRootElements()),
            s.nb.frameworkStabilizers || (s.nb.frameworkStabilizers = []),
            s.nb.frameworkStabilizers.push(t => {
              const e = s.nb.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const i = function(e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function(t) {
                t.whenStable(i);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const s = t.getTestability(e);
          return null != s
            ? s
            : n
            ? Object(r.w)().isShadowRoot(e)
              ? this.findTestabilityInTree(t, e.host, !0)
              : this.findTestabilityInTree(t, e.parentElement, !0)
            : null;
        }
      }
      const d = new s.q('EventManagerPlugins');
      let p = (() => {
        class t {
          constructor(t, e) {
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach(t => (t.manager = this)),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, e, n) {
            return this._findPluginFor(e).addEventListener(t, e, n);
          }
          addGlobalEventListener(t, e, n) {
            return this._findPluginFor(e).addGlobalEventListener(t, e, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            const e = this._eventNameToPlugin.get(t);
            if (e) return e;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const e = n[r];
              if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
            }
            throw new Error(`No event manager plugin found for event ${t}`);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(d), s.Zb(s.z));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class f {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const s = Object(r.w)().getGlobalEventTarget(this._doc, t);
          if (!s) throw new Error(`Unsupported event target ${s} for event ${e}`);
          return this.addEventListener(s, e, n);
        }
      }
      let g = (() => {
          class t {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(t) {
              const e = new Set();
              t.forEach(t => {
                this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
              }),
                this.onStylesAdded(e);
            }
            onStylesAdded(t) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)();
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        m = (() => {
          class t extends g {
            constructor(t) {
              super(),
                (this._doc = t),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(t.head);
            }
            _addStylesToHost(t, e) {
              t.forEach(t => {
                const n = this._doc.createElement('style');
                (n.textContent = t), this._styleNodes.add(e.appendChild(n));
              });
            }
            addHost(t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }
            removeHost(t) {
              this._hostNodes.delete(t);
            }
            onStylesAdded(t) {
              this._hostNodes.forEach(e => this._addStylesToHost(t, e));
            }
            ngOnDestroy() {
              this._styleNodes.forEach(t => Object(r.w)().remove(t));
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(s.Zb(r.c));
            }),
            (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })();
      const b = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        y = /%COMP%/g;
      function v(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          Array.isArray(s) ? v(t, s, n) : ((s = s.replace(y, t)), n.push(s));
        }
        return n;
      }
      function _(t) {
        return e => {
          if ('__ngUnwrap__' === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      let w = (() => {
        class t {
          constructor(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new C(t));
          }
          createRenderer(t, e) {
            if (!t || !e) return this.defaultRenderer;
            switch (e.encapsulation) {
              case s.O.Emulated: {
                let n = this.rendererByCompId.get(e.id);
                return (
                  n ||
                    ((n = new S(this.eventManager, this.sharedStylesHost, e, this.appId)),
                    this.rendererByCompId.set(e.id, n)),
                  n.applyToHost(t),
                  n
                );
              }
              case s.O.Native:
              case s.O.ShadowDom:
                return new x(this.eventManager, this.sharedStylesHost, t, e);
              default:
                if (!this.rendererByCompId.has(e.id)) {
                  const t = v(e.id, e.styles, []);
                  this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(p), s.Zb(m), s.Zb(s.c));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      class C {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e ? document.createElementNS(b[e] || e, t) : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = 'string' == typeof t ? document.querySelector(t) : t;
          if (!n) throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ''), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ':' + e;
            const s = b[r];
            s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = b[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & s.F.DashCase ? t.style.setProperty(e, n, r & s.F.Important ? 'important' : '') : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & s.F.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return 'string' == typeof t
            ? this.eventManager.addGlobalEventListener(t, e, _(n))
            : this.eventManager.addEventListener(t, e, _(n));
        }
      }
      class S extends C {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const s = v(r + '-' + n.id, n.styles, []);
          e.addStyles(s),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(y, r + '-' + n.id)),
            (this.hostAttr = (function(t) {
              return '_nghost-%COMP%'.replace(y, t);
            })(r + '-' + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class x extends C {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === s.O.ShadowDom ? n.attachShadow({ mode: 'open' }) : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const i = v(r.id, r.styles, []);
          for (let s = 0; s < i.length; s++) {
            const t = document.createElement('style');
            (t.textContent = i[s]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
        }
      }
      let k = (() => {
        class t extends f {
          constructor(t) {
            super(t);
          }
          supports(t) {
            return !0;
          }
          addEventListener(t, e, n) {
            return t.addEventListener(e, n, !1), () => this.removeEventListener(t, e, n);
          }
          removeEventListener(t, e, n) {
            return t.removeEventListener(e, n);
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(r.c));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const E = ['alt', 'control', 'meta', 'shift'],
        O = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        A = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        },
        T = { alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey };
      let I = (() => {
        class t extends f {
          constructor(t) {
            super(t);
          }
          supports(e) {
            return null != t.parseEventName(e);
          }
          addEventListener(e, n, s) {
            const i = t.parseEventName(n),
              o = t.eventCallback(i.fullKey, s, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(() => Object(r.w)().onAndCancel(e, i.domEventName, o));
          }
          static parseEventName(e) {
            const n = e.toLowerCase().split('.'),
              r = n.shift();
            if (0 === n.length || ('keydown' !== r && 'keyup' !== r)) return null;
            const s = t._normalizeKey(n.pop());
            let i = '';
            if (
              (E.forEach(t => {
                const e = n.indexOf(t);
                e > -1 && (n.splice(e, 1), (i += t + '.'));
              }),
              (i += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const o = {};
            return (o.domEventName = r), (o.fullKey = i), o;
          }
          static getEventFullKey(t) {
            let e = '',
              n = (function(t) {
                let e = t.key;
                if (null == e) {
                  if (((e = t.keyIdentifier), null == e)) return 'Unidentified';
                  e.startsWith('U+') &&
                    ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                    3 === t.location && A.hasOwnProperty(e) && (e = A[e]));
                }
                return O[e] || e;
              })(t);
            return (
              (n = n.toLowerCase()),
              ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
              E.forEach(r => {
                r != n && (0, T[r])(t) && (e += r + '.');
              }),
              (e += n),
              e
            );
          }
          static eventCallback(e, n, r) {
            return s => {
              t.getEventFullKey(s) === e && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(t) {
            switch (t) {
              case 'esc':
                return 'escape';
              default:
                return t;
            }
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(r.c));
          }),
          (t.ɵprov = s.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const P = [
          { provide: s.B, useValue: r.v },
          {
            provide: s.C,
            useValue: function() {
              o.makeCurrent(), h.init();
            },
            multi: !0
          },
          {
            provide: r.c,
            useFactory: function() {
              return Object(s.tb)(document), document;
            },
            deps: []
          }
        ],
        M = Object(s.Q)(s.U, 'browser', P),
        R = [
          [],
          { provide: s.X, useValue: 'root' },
          {
            provide: s.m,
            useFactory: function() {
              return new s.m();
            },
            deps: []
          },
          { provide: d, useClass: k, multi: !0, deps: [r.c, s.z, s.B] },
          { provide: d, useClass: I, multi: !0, deps: [r.c] },
          [],
          { provide: w, useClass: w, deps: [p, m, s.c] },
          { provide: s.E, useExisting: w },
          { provide: g, useExisting: m },
          { provide: m, useClass: m, deps: [r.c] },
          { provide: s.L, useClass: s.L, deps: [s.z] },
          { provide: p, useClass: p, deps: [d, s.z] },
          []
        ];
      let j = (() => {
        class t {
          constructor(t) {
            if (t)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          static withServerTransition(e) {
            return {
              ngModule: t,
              providers: [{ provide: s.c, useValue: e.appId }, { provide: c, useExisting: s.c }, u]
            };
          }
        }
        return (
          (t.ɵmod = s.Kb({ type: t })),
          (t.ɵinj = s.Jb({
            factory: function(e) {
              return new (e || t)(s.Zb(t, 12));
            },
            providers: R,
            imports: [r.b, s.f]
          })),
          t
        );
      })();
      function N() {
        return new D(Object(s.Zb)(r.c));
      }
      let D = (() => {
        class t {
          constructor(t) {
            this._doc = t;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(t) {
            this._doc.title = t || '';
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(s.Zb(r.c));
          }),
          (t.ɵprov = Object(s.Ib)({ factory: N, token: t, providedIn: 'root' })),
          t
        );
      })();
      'undefined' != typeof window && window;
    },
    kJWO: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = (() => ('function' == typeof Symbol && Symbol.observable) || '@@observable')();
    },
    l7GE: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      class s extends r.a {
        notifyNext(t, e, n, r, s) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
    },
    lJxs: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      function s(t, e) {
        return function(n) {
          if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new i(t, e));
        };
      }
      class i {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new o(t, this.project, this.thisArg));
        }
      }
      class o extends r.a {
        constructor(t, e, n) {
          super(t), (this.project = e), (this.count = 0), (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
    },
    mCNh: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      }),
        n.d(e, 'b', function() {
          return i;
        });
      var r = n('KqfI');
      function s(...t) {
        return i(t);
      }
      function i(t) {
        return t
          ? 1 === t.length
            ? t[0]
            : function(e) {
                return t.reduce((t, e) => e(t), e);
              }
          : r.a;
      }
    },
    n6bG: function(t, e, n) {
      'use strict';
      function r(t) {
        return 'function' == typeof t;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    ngJS: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return r;
      });
      const r = t => e => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.complete();
      };
    },
    oB13: function(t, e, n) {
      'use strict';
      var r = n('XNiG'),
        s = n('HDdC'),
        i = (n('7o/Q'), n('quSY')),
        o = n('x+ZX');
      class a extends s.a {
        constructor(t, e) {
          super(), (this.source = t), (this.subjectFactory = e), (this._refCount = 0), (this._isComplete = !1);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (t && !t.isStopped) || (this._subject = this.subjectFactory()), this._subject;
        }
        connect() {
          let t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new i.a()),
              t.add(this.source.subscribe(new c(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = i.a.EMPTY))),
            t
          );
        }
        refCount() {
          return Object(o.a)()(this);
        }
      }
      const l = (() => {
        const t = a.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: t._subscribe },
          _isComplete: { value: t._isComplete, writable: !0 },
          getSubject: { value: t.getSubject },
          connect: { value: t.connect },
          refCount: { value: t.refCount }
        };
      })();
      class c extends r.b {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0), (t._subject = null), (t._connection = null), e && e.unsubscribe();
          }
        }
      }
      function u(t, e) {
        return function(n) {
          let r;
          if (
            ((r =
              'function' == typeof t
                ? t
                : function() {
                    return t;
                  }),
            'function' == typeof e)
          )
            return n.lift(new h(r, e));
          const s = Object.create(n, l);
          return (s.source = n), (s.subjectFactory = r), s;
        };
      }
      n.d(e, 'a', function() {
        return u;
      });
      class h {
        constructor(t, e) {
          (this.subjectFactory = t), (this.selector = e);
        }
        call(t, e) {
          const { selector: n } = this,
            r = this.subjectFactory(),
            s = n(r).subscribe(t);
          return s.add(e.subscribe(r)), s;
        }
      }
    },
    ofXK: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return _;
      }),
        n.d(e, 'b', function() {
          return ft;
        }),
        n.d(e, 'c', function() {
          return l;
        }),
        n.d(e, 'd', function() {
          return O;
        }),
        n.d(e, 'e', function() {
          return C;
        }),
        n.d(e, 'f', function() {
          return h;
        }),
        n.d(e, 'g', function() {
          return S;
        }),
        n.d(e, 'h', function() {
          return y;
        }),
        n.d(e, 'i', function() {
          return lt;
        }),
        n.d(e, 'j', function() {
          return ut;
        }),
        n.d(e, 'k', function() {
          return pt;
        }),
        n.d(e, 'l', function() {
          return w;
        }),
        n.d(e, 'm', function() {
          return c;
        }),
        n.d(e, 'n', function() {
          return A;
        }),
        n.d(e, 'o', function() {
          return bt;
        }),
        n.d(e, 'p', function() {
          return W;
        }),
        n.d(e, 'q', function() {
          return M;
        }),
        n.d(e, 'r', function() {
          return P;
        }),
        n.d(e, 's', function() {
          return R;
        }),
        n.d(e, 't', function() {
          return mt;
        }),
        n.d(e, 'u', function() {
          return a;
        }),
        n.d(e, 'v', function() {
          return gt;
        }),
        n.d(e, 'w', function() {
          return i;
        }),
        n.d(e, 'x', function() {
          return ot;
        }),
        n.d(e, 'y', function() {
          return o;
        });
      var r = n('fXoL');
      let s = null;
      function i() {
        return s;
      }
      function o(t) {
        s || (s = t);
      }
      class a {}
      const l = new r.q('DocumentToken');
      let c = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Ib)({ factory: u, token: t, providedIn: 'platform' })),
          t
        );
      })();
      function u() {
        return Object(r.Zb)(d);
      }
      const h = new r.q('Location Initialized');
      let d = (() => {
        class t extends c {
          constructor(t) {
            super(), (this._doc = t), this._init();
          }
          _init() {
            (this.location = i().getLocation()), (this._history = i().getHistory());
          }
          getBaseHrefFromDOM() {
            return i().getBaseHref(this._doc);
          }
          onPopState(t) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('popstate', t, !1);
          }
          onHashChange(t) {
            i()
              .getGlobalEventTarget(this._doc, 'window')
              .addEventListener('hashchange', t, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(t) {
            this.location.pathname = t;
          }
          pushState(t, e, n) {
            p() ? this._history.pushState(t, e, n) : (this.location.hash = n);
          }
          replaceState(t, e, n) {
            p() ? this._history.replaceState(t, e, n) : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Zb(l));
          }),
          (t.ɵprov = Object(r.Ib)({ factory: f, token: t, providedIn: 'platform' })),
          t
        );
      })();
      function p() {
        return !!window.history.pushState;
      }
      function f() {
        return new d(Object(r.Zb)(l));
      }
      function g(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        let n = 0;
        return (
          t.endsWith('/') && n++, e.startsWith('/') && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
        );
      }
      function m(t) {
        const e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function b(t) {
        return t && '?' !== t[0] ? '?' + t : t;
      }
      let y = (() => {
        class t {}
        return (
          (t.ɵfac = function(e) {
            return new (e || t)();
          }),
          (t.ɵprov = Object(r.Ib)({ factory: v, token: t, providedIn: 'root' })),
          t
        );
      })();
      function v(t) {
        const e = Object(r.Zb)(l).location;
        return new w(Object(r.Zb)(c), (e && e.origin) || '');
      }
      const _ = new r.q('appBaseHref');
      let w = (() => {
          class t extends y {
            constructor(t, e) {
              if (
                (super(),
                (this._platformLocation = t),
                null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
                null == e)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
                );
              this._baseHref = e;
            }
            onPopState(t) {
              this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return g(this._baseHref, t);
            }
            path(t = !1) {
              const e = this._platformLocation.pathname + b(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? `${e}${n}` : e;
            }
            pushState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + b(r));
              this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              const s = this.prepareExternalUrl(n + b(r));
              this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Zb(c), r.Zb(_, 8));
            }),
            (t.ɵprov = r.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        C = (() => {
          class t extends y {
            constructor(t, e) {
              super(), (this._platformLocation = t), (this._baseHref = ''), null != e && (this._baseHref = e);
            }
            onPopState(t) {
              this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              let e = this._platformLocation.hash;
              return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
            }
            prepareExternalUrl(t) {
              const e = g(this._baseHref, t);
              return e.length > 0 ? '#' + e : e;
            }
            pushState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + b(r));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, e, s);
            }
            replaceState(t, e, n, r) {
              let s = this.prepareExternalUrl(n + b(r));
              0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Zb(c), r.Zb(_, 8));
            }),
            (t.ɵprov = r.Ib({ token: t, factory: t.ɵfac })),
            t
          );
        })(),
        S = (() => {
          class t {
            constructor(t, e) {
              (this._subject = new r.n()), (this._urlChangeListeners = []), (this._platformStrategy = t);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = e),
                (this._baseHref = m(k(n))),
                this._platformStrategy.onPopState(t => {
                  this._subject.emit({ url: this.path(!0), pop: !0, state: t.state, type: t.type });
                });
            }
            path(t = !1) {
              return this.normalize(this._platformStrategy.path(t));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(t, e = '') {
              return this.path() == this.normalize(t + b(e));
            }
            normalize(e) {
              return t.stripTrailingSlash(
                (function(t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, k(e))
              );
            }
            prepareExternalUrl(t) {
              return t && '/' !== t[0] && (t = '/' + t), this._platformStrategy.prepareExternalUrl(t);
            }
            go(t, e = '', n = null) {
              this._platformStrategy.pushState(n, '', t, e),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + b(e)), n);
            }
            replaceState(t, e = '', n = null) {
              this._platformStrategy.replaceState(n, '', t, e),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + b(e)), n);
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(t) {
              this._urlChangeListeners.push(t),
                this.subscribe(t => {
                  this._notifyUrlChangeListeners(t.url, t.state);
                });
            }
            _notifyUrlChangeListeners(t = '', e) {
              this._urlChangeListeners.forEach(n => n(t, e));
            }
            subscribe(t, e, n) {
              return this._subject.subscribe({ next: t, error: e, complete: n });
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Zb(y), r.Zb(c));
            }),
            (t.normalizeQueryParams = b),
            (t.joinWithSlash = g),
            (t.stripTrailingSlash = m),
            (t.ɵprov = Object(r.Ib)({ factory: x, token: t, providedIn: 'root' })),
            t
          );
        })();
      function x() {
        return new S(Object(r.Zb)(y), Object(r.Zb)(c));
      }
      function k(t) {
        return t.replace(/\/index.html$/, '');
      }
      const E = (function() {
          var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (t[t.Zero] = 'Zero'),
            (t[t.One] = 'One'),
            (t[t.Two] = 'Two'),
            (t[t.Few] = 'Few'),
            (t[t.Many] = 'Many'),
            (t[t.Other] = 'Other'),
            t
          );
        })(),
        O = (function() {
          var t = { Format: 0, Standalone: 1 };
          return (t[t.Format] = 'Format'), (t[t.Standalone] = 'Standalone'), t;
        })(),
        A = (function() {
          var t = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 };
          return (
            (t[t.Narrow] = 'Narrow'),
            (t[t.Abbreviated] = 'Abbreviated'),
            (t[t.Wide] = 'Wide'),
            (t[t.Short] = 'Short'),
            t
          );
        })(),
        T = (function() {
          var t = { Short: 0, Medium: 1, Long: 2, Full: 3 };
          return (t[t.Short] = 'Short'), (t[t.Medium] = 'Medium'), (t[t.Long] = 'Long'), (t[t.Full] = 'Full'), t;
        })(),
        I = (function() {
          var t = {
            Decimal: 0,
            Group: 1,
            List: 2,
            PercentSign: 3,
            PlusSign: 4,
            MinusSign: 5,
            Exponential: 6,
            SuperscriptingExponent: 7,
            PerMille: 8,
            Infinity: 9,
            NaN: 10,
            TimeSeparator: 11,
            CurrencyDecimal: 12,
            CurrencyGroup: 13
          };
          return (
            (t[t.Decimal] = 'Decimal'),
            (t[t.Group] = 'Group'),
            (t[t.List] = 'List'),
            (t[t.PercentSign] = 'PercentSign'),
            (t[t.PlusSign] = 'PlusSign'),
            (t[t.MinusSign] = 'MinusSign'),
            (t[t.Exponential] = 'Exponential'),
            (t[t.SuperscriptingExponent] = 'SuperscriptingExponent'),
            (t[t.PerMille] = 'PerMille'),
            (t[t.Infinity] = 'Infinity'),
            (t[t.NaN] = 'NaN'),
            (t[t.TimeSeparator] = 'TimeSeparator'),
            (t[t.CurrencyDecimal] = 'CurrencyDecimal'),
            (t[t.CurrencyGroup] = 'CurrencyGroup'),
            t
          );
        })();
      function P(t, e, n) {
        const s = Object(r.ib)(t),
          i = H([s[r.Y.DayPeriodsFormat], s[r.Y.DayPeriodsStandalone]], e);
        return H(i, n);
      }
      function M(t, e, n) {
        const s = Object(r.ib)(t),
          i = H([s[r.Y.DaysFormat], s[r.Y.DaysStandalone]], e);
        return H(i, n);
      }
      function R(t, e, n) {
        const s = Object(r.ib)(t),
          i = H([s[r.Y.MonthsFormat], s[r.Y.MonthsStandalone]], e);
        return H(i, n);
      }
      function j(t, e) {
        return H(Object(r.ib)(t)[r.Y.DateFormat], e);
      }
      function N(t, e) {
        return H(Object(r.ib)(t)[r.Y.TimeFormat], e);
      }
      function D(t, e) {
        return H(Object(r.ib)(t)[r.Y.DateTimeFormat], e);
      }
      function V(t, e) {
        const n = Object(r.ib)(t),
          s = n[r.Y.NumberSymbols][e];
        if (void 0 === s) {
          if (e === I.CurrencyDecimal) return n[r.Y.NumberSymbols][I.Decimal];
          if (e === I.CurrencyGroup) return n[r.Y.NumberSymbols][I.Group];
        }
        return s;
      }
      const L = r.lb;
      function F(t) {
        if (!t[r.Y.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              t[r.Y.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function H(t, e) {
        for (let n = e; n > -1; n--) if (void 0 !== t[n]) return t[n];
        throw new Error('Locale data API: locale data undefined');
      }
      function U(t) {
        const [e, n] = t.split(':');
        return { hours: +e, minutes: +n };
      }
      const $ = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        B = {},
        z = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        q = (function() {
          var t = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 };
          return (
            (t[t.Short] = 'Short'), (t[t.ShortGMT] = 'ShortGMT'), (t[t.Long] = 'Long'), (t[t.Extended] = 'Extended'), t
          );
        })(),
        Z = (function() {
          var t = { FullYear: 0, Month: 1, Date: 2, Hours: 3, Minutes: 4, Seconds: 5, FractionalSeconds: 6, Day: 7 };
          return (
            (t[t.FullYear] = 'FullYear'),
            (t[t.Month] = 'Month'),
            (t[t.Date] = 'Date'),
            (t[t.Hours] = 'Hours'),
            (t[t.Minutes] = 'Minutes'),
            (t[t.Seconds] = 'Seconds'),
            (t[t.FractionalSeconds] = 'FractionalSeconds'),
            (t[t.Day] = 'Day'),
            t
          );
        })(),
        G = (function() {
          var t = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 };
          return (
            (t[t.DayPeriods] = 'DayPeriods'), (t[t.Days] = 'Days'), (t[t.Months] = 'Months'), (t[t.Eras] = 'Eras'), t
          );
        })();
      function W(t, e, n, s) {
        let i = (function(t) {
          if (rt(t)) return t;
          if ('number' == typeof t && !isNaN(t)) return new Date(t);
          if ('string' == typeof t) {
            t = t.trim();
            const e = parseFloat(t);
            if (!isNaN(t - e)) return new Date(e);
            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
              const [e, n, r] = t.split('-').map(t => +t);
              return new Date(e, n - 1, r);
            }
            let n;
            if ((n = t.match($)))
              return (function(t) {
                const e = new Date(0);
                let n = 0,
                  r = 0;
                const s = t[8] ? e.setUTCFullYear : e.setFullYear,
                  i = t[8] ? e.setUTCHours : e.setHours;
                t[9] && ((n = Number(t[9] + t[10])), (r = Number(t[9] + t[11]))),
                  s.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                const o = Number(t[4] || 0) - n,
                  a = Number(t[5] || 0) - r,
                  l = Number(t[6] || 0),
                  c = Math.round(1e3 * parseFloat('0.' + (t[7] || 0)));
                return i.call(e, o, a, l, c), e;
              })(n);
          }
          const e = new Date(t);
          if (!rt(e)) throw new Error(`Unable to convert "${t}" into a date`);
          return e;
        })(t);
        e =
          (function t(e, n) {
            const s = (function(t) {
              return Object(r.ib)(t)[r.Y.LocaleId];
            })(e);
            if (((B[s] = B[s] || {}), B[s][n])) return B[s][n];
            let i = '';
            switch (n) {
              case 'shortDate':
                i = j(e, T.Short);
                break;
              case 'mediumDate':
                i = j(e, T.Medium);
                break;
              case 'longDate':
                i = j(e, T.Long);
                break;
              case 'fullDate':
                i = j(e, T.Full);
                break;
              case 'shortTime':
                i = N(e, T.Short);
                break;
              case 'mediumTime':
                i = N(e, T.Medium);
                break;
              case 'longTime':
                i = N(e, T.Long);
                break;
              case 'fullTime':
                i = N(e, T.Full);
                break;
              case 'short':
                const n = t(e, 'shortTime'),
                  r = t(e, 'shortDate');
                i = K(D(e, T.Short), [n, r]);
                break;
              case 'medium':
                const s = t(e, 'mediumTime'),
                  o = t(e, 'mediumDate');
                i = K(D(e, T.Medium), [s, o]);
                break;
              case 'long':
                const a = t(e, 'longTime'),
                  l = t(e, 'longDate');
                i = K(D(e, T.Long), [a, l]);
                break;
              case 'full':
                const c = t(e, 'fullTime'),
                  u = t(e, 'fullDate');
                i = K(D(e, T.Full), [c, u]);
            }
            return i && (B[s][n] = i), i;
          })(n, e) || e;
        let o,
          a = [];
        for (; e; ) {
          if (((o = z.exec(e)), !o)) {
            a.push(e);
            break;
          }
          {
            a = a.concat(o.slice(1));
            const t = a.pop();
            if (!t) break;
            e = t;
          }
        }
        let l = i.getTimezoneOffset();
        s &&
          ((l = nt(s, l)),
          (i = (function(t, e, n) {
            const r = t.getTimezoneOffset();
            return (function(t, e) {
              return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t;
            })(t, -1 * (nt(e, r) - r));
          })(i, s)));
        let c = '';
        return (
          a.forEach(t => {
            const e = (function(t) {
              if (et[t]) return et[t];
              let e;
              switch (t) {
                case 'G':
                case 'GG':
                case 'GGG':
                  e = Y(G.Eras, A.Abbreviated);
                  break;
                case 'GGGG':
                  e = Y(G.Eras, A.Wide);
                  break;
                case 'GGGGG':
                  e = Y(G.Eras, A.Narrow);
                  break;
                case 'y':
                  e = J(Z.FullYear, 1, 0, !1, !0);
                  break;
                case 'yy':
                  e = J(Z.FullYear, 2, 0, !0, !0);
                  break;
                case 'yyy':
                  e = J(Z.FullYear, 3, 0, !1, !0);
                  break;
                case 'yyyy':
                  e = J(Z.FullYear, 4, 0, !1, !0);
                  break;
                case 'M':
                case 'L':
                  e = J(Z.Month, 1, 1);
                  break;
                case 'MM':
                case 'LL':
                  e = J(Z.Month, 2, 1);
                  break;
                case 'MMM':
                  e = Y(G.Months, A.Abbreviated);
                  break;
                case 'MMMM':
                  e = Y(G.Months, A.Wide);
                  break;
                case 'MMMMM':
                  e = Y(G.Months, A.Narrow);
                  break;
                case 'LLL':
                  e = Y(G.Months, A.Abbreviated, O.Standalone);
                  break;
                case 'LLLL':
                  e = Y(G.Months, A.Wide, O.Standalone);
                  break;
                case 'LLLLL':
                  e = Y(G.Months, A.Narrow, O.Standalone);
                  break;
                case 'w':
                  e = tt(1);
                  break;
                case 'ww':
                  e = tt(2);
                  break;
                case 'W':
                  e = tt(1, !0);
                  break;
                case 'd':
                  e = J(Z.Date, 1);
                  break;
                case 'dd':
                  e = J(Z.Date, 2);
                  break;
                case 'E':
                case 'EE':
                case 'EEE':
                  e = Y(G.Days, A.Abbreviated);
                  break;
                case 'EEEE':
                  e = Y(G.Days, A.Wide);
                  break;
                case 'EEEEE':
                  e = Y(G.Days, A.Narrow);
                  break;
                case 'EEEEEE':
                  e = Y(G.Days, A.Short);
                  break;
                case 'a':
                case 'aa':
                case 'aaa':
                  e = Y(G.DayPeriods, A.Abbreviated);
                  break;
                case 'aaaa':
                  e = Y(G.DayPeriods, A.Wide);
                  break;
                case 'aaaaa':
                  e = Y(G.DayPeriods, A.Narrow);
                  break;
                case 'b':
                case 'bb':
                case 'bbb':
                  e = Y(G.DayPeriods, A.Abbreviated, O.Standalone, !0);
                  break;
                case 'bbbb':
                  e = Y(G.DayPeriods, A.Wide, O.Standalone, !0);
                  break;
                case 'bbbbb':
                  e = Y(G.DayPeriods, A.Narrow, O.Standalone, !0);
                  break;
                case 'B':
                case 'BB':
                case 'BBB':
                  e = Y(G.DayPeriods, A.Abbreviated, O.Format, !0);
                  break;
                case 'BBBB':
                  e = Y(G.DayPeriods, A.Wide, O.Format, !0);
                  break;
                case 'BBBBB':
                  e = Y(G.DayPeriods, A.Narrow, O.Format, !0);
                  break;
                case 'h':
                  e = J(Z.Hours, 1, -12);
                  break;
                case 'hh':
                  e = J(Z.Hours, 2, -12);
                  break;
                case 'H':
                  e = J(Z.Hours, 1);
                  break;
                case 'HH':
                  e = J(Z.Hours, 2);
                  break;
                case 'm':
                  e = J(Z.Minutes, 1);
                  break;
                case 'mm':
                  e = J(Z.Minutes, 2);
                  break;
                case 's':
                  e = J(Z.Seconds, 1);
                  break;
                case 'ss':
                  e = J(Z.Seconds, 2);
                  break;
                case 'S':
                  e = J(Z.FractionalSeconds, 1);
                  break;
                case 'SS':
                  e = J(Z.FractionalSeconds, 2);
                  break;
                case 'SSS':
                  e = J(Z.FractionalSeconds, 3);
                  break;
                case 'Z':
                case 'ZZ':
                case 'ZZZ':
                  e = X(q.Short);
                  break;
                case 'ZZZZZ':
                  e = X(q.Extended);
                  break;
                case 'O':
                case 'OO':
                case 'OOO':
                case 'z':
                case 'zz':
                case 'zzz':
                  e = X(q.ShortGMT);
                  break;
                case 'OOOO':
                case 'ZZZZ':
                case 'zzzz':
                  e = X(q.Long);
                  break;
                default:
                  return null;
              }
              return (et[t] = e), e;
            })(t);
            c += e ? e(i, n, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          }),
          c
        );
      }
      function K(t, e) {
        return (
          e &&
            (t = t.replace(/\{([^}]+)}/g, function(t, n) {
              return null != e && n in e ? e[n] : t;
            })),
          t
        );
      }
      function Q(t, e, n = '-', r, s) {
        let i = '';
        (t < 0 || (s && t <= 0)) && (s ? (t = 1 - t) : ((t = -t), (i = n)));
        let o = String(t);
        for (; o.length < e; ) o = '0' + o;
        return r && (o = o.substr(o.length - e)), i + o;
      }
      function J(t, e, n = 0, r = !1, s = !1) {
        return function(i, o) {
          let a = (function(t, e) {
            switch (t) {
              case Z.FullYear:
                return e.getFullYear();
              case Z.Month:
                return e.getMonth();
              case Z.Date:
                return e.getDate();
              case Z.Hours:
                return e.getHours();
              case Z.Minutes:
                return e.getMinutes();
              case Z.Seconds:
                return e.getSeconds();
              case Z.FractionalSeconds:
                return e.getMilliseconds();
              case Z.Day:
                return e.getDay();
              default:
                throw new Error(`Unknown DateType value "${t}".`);
            }
          })(t, i);
          if (((n > 0 || a > -n) && (a += n), t === Z.Hours)) 0 === a && -12 === n && (a = 12);
          else if (t === Z.FractionalSeconds) return (l = e), Q(a, 3).substr(0, l);
          var l;
          const c = V(o, I.MinusSign);
          return Q(a, e, c, r, s);
        };
      }
      function Y(t, e, n = O.Format, s = !1) {
        return function(i, o) {
          return (function(t, e, n, s, i, o) {
            switch (n) {
              case G.Months:
                return R(e, i, s)[t.getMonth()];
              case G.Days:
                return M(e, i, s)[t.getDay()];
              case G.DayPeriods:
                const a = t.getHours(),
                  l = t.getMinutes();
                if (o) {
                  const t = (function(t) {
                      const e = Object(r.ib)(t);
                      return (
                        F(e), (e[r.Y.ExtraData][2] || []).map(t => ('string' == typeof t ? U(t) : [U(t[0]), U(t[1])]))
                      );
                    })(e),
                    n = (function(t, e, n) {
                      const s = Object(r.ib)(t);
                      F(s);
                      const i = H([s[r.Y.ExtraData][0], s[r.Y.ExtraData][1]], e) || [];
                      return H(i, n) || [];
                    })(e, i, s);
                  let o;
                  if (
                    (t.forEach((t, e) => {
                      if (Array.isArray(t)) {
                        const { hours: r, minutes: s } = t[0],
                          { hours: i, minutes: c } = t[1];
                        a >= r && l >= s && (a < i || (a === i && l < c)) && (o = n[e]);
                      } else {
                        const { hours: r, minutes: s } = t;
                        r === a && s === l && (o = n[e]);
                      }
                    }),
                    o)
                  )
                    return o;
                }
                return P(e, i, s)[a < 12 ? 0 : 1];
              case G.Eras:
                return (function(t, e) {
                  return H(Object(r.ib)(t)[r.Y.Eras], e);
                })(e, s)[t.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${n}`);
            }
          })(i, o, t, e, n, s);
        };
      }
      function X(t) {
        return function(e, n, r) {
          const s = -1 * r,
            i = V(n, I.MinusSign),
            o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
          switch (t) {
            case q.Short:
              return (s >= 0 ? '+' : '') + Q(o, 2, i) + Q(Math.abs(s % 60), 2, i);
            case q.ShortGMT:
              return 'GMT' + (s >= 0 ? '+' : '') + Q(o, 1, i);
            case q.Long:
              return 'GMT' + (s >= 0 ? '+' : '') + Q(o, 2, i) + ':' + Q(Math.abs(s % 60), 2, i);
            case q.Extended:
              return 0 === r ? 'Z' : (s >= 0 ? '+' : '') + Q(o, 2, i) + ':' + Q(Math.abs(s % 60), 2, i);
            default:
              throw new Error(`Unknown zone width "${t}"`);
          }
        };
      }
      function tt(t, e = !1) {
        return function(n, r) {
          let s;
          if (e) {
            const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              e = n.getDate();
            s = 1 + Math.floor((e + t) / 7);
          } else {
            const t = (function(t) {
                const e = new Date(t, 0, 1).getDay();
                return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e);
              })(n.getFullYear()),
              e =
                ((i = n), new Date(i.getFullYear(), i.getMonth(), i.getDate() + (4 - i.getDay()))).getTime() -
                t.getTime();
            s = 1 + Math.round(e / 6048e5);
          }
          var i;
          return Q(s, t, V(r, I.MinusSign));
        };
      }
      const et = {};
      function nt(t, e) {
        t = t.replace(/:/g, '');
        const n = Date.parse('Jan 01, 1970 00:00:00 ' + t) / 6e4;
        return isNaN(n) ? e : n;
      }
      function rt(t) {
        return t instanceof Date && !isNaN(t.valueOf());
      }
      class st {}
      let it = (() => {
        class t extends st {
          constructor(t) {
            super(), (this.locale = t);
          }
          getPluralCategory(t, e) {
            switch (L(e || this.locale)(t)) {
              case E.Zero:
                return 'zero';
              case E.One:
                return 'one';
              case E.Two:
                return 'two';
              case E.Few:
                return 'few';
              case E.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Zb(r.u));
          }),
          (t.ɵprov = r.Ib({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      function ot(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(';')) {
          const t = n.indexOf('='),
            [r, s] = -1 == t ? [n, ''] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(s);
        }
        return null;
      }
      class at {
        constructor(t, e, n, r) {
          (this.$implicit = t), (this.ngForOf = e), (this.index = n), (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let lt = (() => {
        class t {
          constructor(t, e, n) {
            (this._viewContainer = t),
              (this._template = e),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            Object(r.T)() &&
              null != t &&
              'function' != typeof t &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(t)}. ` +
                  'See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
              ),
              (this._trackByFn = t);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs.find(n).create(this.ngForTrackBy);
                } catch (e) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${((t = n),
                    t.name || typeof t)}'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var t;
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const e = [];
            t.forEachOperation((t, n, r) => {
              if (null == t.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new at(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new ct(t, n);
                e.push(s);
              } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new ct(t, s);
                e.push(i);
              }
            });
            for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const t = this._viewContainer.get(n);
              (t.context.index = n), (t.context.count = r), (t.context.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange(t => {
              this._viewContainer.get(t.currentIndex).context.$implicit = t.item;
            });
          }
          _perViewChange(t, e) {
            t.context.$implicit = e.item;
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Mb(r.N), r.Mb(r.K), r.Mb(r.s));
          }),
          (t.ɵdir = r.Hb({
            type: t,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: { ngForOf: 'ngForOf', ngForTrackBy: 'ngForTrackBy', ngForTemplate: 'ngForTemplate' }
          })),
          t
        );
      })();
      class ct {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      let ut = (() => {
        class t {
          constructor(t, e) {
            (this._viewContainer = t),
              (this._context = new ht()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = e);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t), this._updateView();
          }
          set ngIfThen(t) {
            dt('ngIfThen', t), (this._thenTemplateRef = t), (this._thenViewRef = null), this._updateView();
          }
          set ngIfElse(t) {
            dt('ngIfElse', t), (this._elseTemplateRef = t), (this._elseViewRef = null), this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
          }
          static ngTemplateContextGuard(t, e) {
            return !0;
          }
        }
        return (
          (t.ɵfac = function(e) {
            return new (e || t)(r.Mb(r.N), r.Mb(r.K));
          }),
          (t.ɵdir = r.Hb({
            type: t,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' }
          })),
          t
        );
      })();
      class ht {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function dt(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(`${t} must be a TemplateRef, but received '${Object(r.ub)(e)}'.`);
      }
      let pt = (() => {
          class t {
            constructor(t) {
              (this._viewContainerRef = t),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null);
            }
            ngOnChanges(t) {
              if (this._shouldRecreateView(t)) {
                const t = this._viewContainerRef;
                this._viewRef && t.remove(t.indexOf(this._viewRef)),
                  (this._viewRef = this.ngTemplateOutlet
                    ? t.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext)
                    : null);
              } else
                this._viewRef &&
                  this.ngTemplateOutletContext &&
                  this._updateExistingContext(this.ngTemplateOutletContext);
            }
            _shouldRecreateView(t) {
              const e = t.ngTemplateOutletContext;
              return !!t.ngTemplateOutlet || (e && this._hasContextShapeChanged(e));
            }
            _hasContextShapeChanged(t) {
              const e = Object.keys(t.previousValue || {}),
                n = Object.keys(t.currentValue || {});
              if (e.length === n.length) {
                for (let t of n) if (-1 === e.indexOf(t)) return !0;
                return !1;
              }
              return !0;
            }
            _updateExistingContext(t) {
              for (let e of Object.keys(t)) this._viewRef.context[e] = this.ngTemplateOutletContext[e];
            }
          }
          return (
            (t.ɵfac = function(e) {
              return new (e || t)(r.Mb(r.N));
            }),
            (t.ɵdir = r.Hb({
              type: t,
              selectors: [['', 'ngTemplateOutlet', '']],
              inputs: { ngTemplateOutletContext: 'ngTemplateOutletContext', ngTemplateOutlet: 'ngTemplateOutlet' },
              features: [r.xb()]
            })),
            t
          );
        })(),
        ft = (() => {
          class t {}
          return (
            (t.ɵmod = r.Kb({ type: t })),
            (t.ɵinj = r.Jb({
              factory: function(e) {
                return new (e || t)();
              },
              providers: [{ provide: st, useClass: it }]
            })),
            t
          );
        })();
      const gt = 'browser';
      function mt(t) {
        return t === gt;
      }
      let bt = (() => {
        class t {}
        return (
          (t.ɵprov = Object(r.Ib)({
            token: t,
            providedIn: 'root',
            factory: () => new yt(Object(r.Zb)(l), window, Object(r.Zb)(r.m))
          })),
          t
        );
      })();
      class yt {
        constructor(t, e, n) {
          (this.document = t), (this.window = e), (this.errorHandler = n), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
        }
        scrollToPosition(t) {
          this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportScrollRestoration()) {
            t =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(t)
                : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const e = this.document.querySelector(`#${t}`);
              if (e) return void this.scrollToElement(e);
              const n = this.document.querySelector(`[name='${t}']`);
              if (n) return void this.scrollToElement(n);
            } catch (e) {
              this.errorHandler.handleError(e);
            }
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
    },
    quSY: function(t, e, n) {
      'use strict';
      var r = n('DH7j'),
        s = n('XoHu'),
        i = n('n6bG');
      const o = (() => {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? `${t.length} errors occurred during unsubscription:\n${t
                  .map((t, e) => `${e + 1}) ${t.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
      n.d(e, 'a', function() {
        return a;
      });
      let a = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t);
          }
          unsubscribe() {
            let e;
            if (this.closed) return;
            let { _parentOrParents: n, _unsubscribe: a, _subscriptions: c } = this;
            if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t))
              n.remove(this);
            else if (null !== n) for (let t = 0; t < n.length; ++t) n[t].remove(this);
            if (Object(i.a)(a))
              try {
                a.call(this);
              } catch (u) {
                e = u instanceof o ? l(u.errors) : [u];
              }
            if (Object(r.a)(c)) {
              let t = -1,
                n = c.length;
              for (; ++t < n; ) {
                const n = c[t];
                if (Object(s.a)(n))
                  try {
                    n.unsubscribe();
                  } catch (u) {
                    (e = e || []), u instanceof o ? (e = e.concat(l(u.errors))) : e.push(u);
                  }
              }
            }
            if (e) throw new o(e);
          }
          add(e) {
            let n = e;
            if (!e) return t.EMPTY;
            switch (typeof e) {
              case 'function':
                n = new t(e);
              case 'object':
                if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof t) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
        }
        var e;
        return (t.EMPTY = (((e = new t()).closed = !0), e)), t;
      })();
      function l(t) {
        return t.reduce((t, e) => t.concat(e instanceof o ? e.errors : e), []);
      }
    },
    'rB/T': function(t, e, n) {
      'use strict';
      function r(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      }
      Object.defineProperty(e, '__esModule', { value: !0 }), r(n('LbVS')), r(n('vauT')), r(n('PsNa'));
    },
    vauT: function(t, e, n) {
      'use strict';
      function r() {
        var t = document.querySelectorAll('input, textarea, select');
        return Array.prototype.slice.call(t).map(function(t) {
          var e = t.tagName.toLowerCase(),
            n = t.type,
            r = t.id && 'string' == typeof t.id ? t.id : null,
            s = t.name && 'string' == typeof t.name ? t.name : null,
            i = t.value && 'string' == typeof t.value ? t.value : null,
            o = t.childNodes,
            a = Boolean(t.selected),
            l = { tag: e, type: null, id: r, name: s, value: '', checked: !1, options: [] };
          if ('input' === e || 'textarea' === e) {
            if (((l.type = n), 'input' !== e)) return (l.value = i), l;
            switch (n) {
              case 'checkbox':
              case 'radio':
                return (l.checked = a), (l.value = i), l;
              case 'image':
              case 'button':
              case 'submit':
              case 'reset':
              default:
                return l;
            }
          } else if ('select' === e) {
            var c = Array.prototype.slice.call(o).map(function(t, e) {
              return { value: t.value, selected: Boolean(t.selected) };
            });
            return (l.options = c), l;
          }
          return l;
        });
      }
      function s(t) {
        var e = document.querySelectorAll('input, textarea');
        t.forEach(function(t, n) {
          if ('input' === t.tag || 'textarea' === t.tag)
            if ('input' !== t.tag || ('checkbox' !== t.type && 'radio' !== t.type))
              ('input' !== t.tagName.toLowerCase() ||
                ('image' !== t.type && 'button' !== t.type && 'submit' !== t.type && 'reset' !== t.type)) &&
                (null === t.id && null === t.name
                  ? !t.value.length ||
                    !e[n] ||
                    e[n].tagName.toLowerCase() !== t.tag ||
                    ('textarea' !== t.tag && e[n].getAttribute('type') !== t.type) ||
                    ('string' == typeof e[n].id && e[n].id.length) ||
                    ('string' == typeof e[n].getAttribute('name') && e[n].getAttribute('name').length) ||
                    ((e[n].value = t.value), e[n].dispatchEvent(new CustomEvent('input', { detail: e[n].value })))
                  : ((r =
                      'input' +
                      (null !== t.id ? '#' + t.id : '') +
                      ('input' === t.tag ? '[type="' + t.type + '"]' : '') +
                      (null !== t.name ? '[name="' + t.name + '"]' : '')),
                    (s = document.body.querySelector(r)) &&
                      t.value.length &&
                      ((s.value = t.value), s.dispatchEvent(new CustomEvent('input', { detail: s.value })))));
            else {
              var r =
                'input' +
                (null !== t.id ? '#' + t.id : '') +
                '[type="' +
                t.type +
                '"]' +
                (null !== t.name ? '[name="' + t.name + '"]' : '') +
                '[value="' +
                t.value +
                '"]';
              (s = document.body.querySelector(r)) &&
                Boolean(t.checked) &&
                ((s.checked = 'checked'), s.dispatchEvent(new CustomEvent('input', { detail: s.checked })));
            }
          else if ('select' === t.tag) {
            var s,
              i = null;
            null === t.id && null === t.name
              ? !e[n] ||
                e[n].tagName.toLowerCase() !== t.tag ||
                ('string' == typeof e[n].id && e[n].id.length) ||
                ('string' == typeof e[n].getAttribute('name') && e[n].getAttribute('name').length) ||
                (i = e[n])
              : ((r =
                  'select' + (null !== t.id ? '#' + t.id : '') + (null !== t.name ? '[name="' + t.name + '"]' : '')),
                (s = document.body.querySelector(r)) && (i = s)),
              i &&
                t.options.forEach(function(t, e) {
                  var n = i.querySelector('option[value="' + t.value + '"]');
                  n ||
                    !i.childNodes[e] ||
                    ('string' == typeof i.childNodes[e].value && i.childNodes[e].value.length) ||
                    (n = i.childNodes[e]),
                    n &&
                      t.selected &&
                      ((n.selected = 'selected'), n.dispatchEvent(new CustomEvent('input', { detail: n.selected })));
                });
          }
        });
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.__getInputValues = r),
        (e.__setInputValues = s),
        (e.__createInputTransfer = function() {
          var t = r();
          return function() {
            return s(t);
          };
        });
    },
    w1tV: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return a;
      });
      var r = n('oB13'),
        s = n('x+ZX'),
        i = n('XNiG');
      function o() {
        return new i.a();
      }
      function a() {
        return t => Object(s.a)()(Object(r.a)(o)(t));
      }
    },
    wywo: function(t) {
      t.exports = JSON.parse(
        '{"Choose operator":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430","Pay":"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c","Phone number":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430","Payment amount":"\u0421\u0443\u043c\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0430","Phone number is required":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d","Payment amount is required":"\u0421\u0443\u043c\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430","Payment amount must be less than":"\u0421\u0443\u043c\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c","Payment amount must be more than":"\u0421\u0443\u043c\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c","Payment was successfully sent":"\u041f\u043b\u0430\u0442\u0435\u0436 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d","Error. Try again":"\u041e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435"}'
      );
    },
    'x+ZX': function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return s;
      });
      var r = n('7o/Q');
      function s() {
        return function(t) {
          return t.lift(new i(t));
        };
      }
      class i {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new o(t, n),
            s = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class o extends r.a {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1)) return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
    },
    yCtX: function(t, e, n) {
      'use strict';
      n.d(e, 'a', function() {
        return o;
      });
      var r = n('HDdC'),
        s = n('ngJS'),
        i = n('jZKg');
      function o(t, e) {
        return e ? Object(i.a)(t, e) : new r.a(Object(s.a)(t));
      }
    },
    'z+Ro': function(t, e, n) {
      'use strict';
      function r(t) {
        return t && 'function' == typeof t.schedule;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    zUnb: function(t, e, n) {
      'use strict';
      n.r(e),
        function(t) {
          var e = n('fXoL'),
            r = n('AytR'),
            s = n('0QMH'),
            i = n('ZAI4'),
            o = n('jhN1');
          r.a.production && Object(e.R)();
          const a = () => o.c().bootstrapModule(i.a);
          r.a.hmr ? Object(s.a)(t, a) : a().catch(t => console.error(t));
        }.call(this, n('3UD+')(t));
    },
    zn8P: function(t, e) {
      function n(t) {
        return Promise.resolve().then(function() {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'zn8P');
    }
  },
  [[0, 0]]
]);
