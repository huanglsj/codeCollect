(function() {
	var h = {},
		mt = {},
		c = {
			id: "84c5b2688d39b4e3c23d132b53b4e79b",
			dm: ["yaochufa.com", "yaochufa.com", "you.yaochufa.com", "m.yaochufa.com", "activity.yaochufa.com", "about.yaochufa.com"],
			js: "tongji.baidu.com/hm-web/js/",
			etrk: [],
			icon: '',
			ctrk: true,
			align: 1,
			nv: 1,
			vdur: 1800000,
			age: 31536000000,
			rec: 0,
			rp: [],
			trust: 0,
			vcard: 0,
			qiao: 0,
			lxb: 0,
			conv: 0,
			comm: 0,
			apps: ''
		};
	var p = !0,
		q = null,
		r = !1;
	mt.h = {};
	mt.h.va = /msie (\d+\.\d+)/i.test(navigator.userAgent);
	mt.h.cookieEnabled = navigator.cookieEnabled;
	mt.h.javaEnabled = navigator.javaEnabled();
	mt.h.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
	mt.h.ya = (window.screen.width || 0) + "x" + (window.screen.height || 0);
	mt.h.colorDepth = window.screen.colorDepth || 0;
	mt.cookie = {};
	mt.cookie.set = function(a, b, f) {
		var d;
		f.D && (d = new Date, d.setTime(d.getTime() + f.D));
		document.cookie = a + "=" + b + (f.domain ? "; domain=" + f.domain : "") + (f.path ? "; path=" + f.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (f.Na ? "; secure" : "")
	};
	mt.cookie.get = function(a) {
		return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : q
	};
	mt.o = {};
	mt.o.Ga = function(a) {
		return document.getElementById(a)
	};
	mt.o.ha = function(a) {
		var b;
		for (b = "A";
			(a = a.parentNode) && 1 == a.nodeType;)
			if (a.tagName == b) return a;
		return q
	};
	(mt.o.wa = function() {
		function a() {
			if (!a.t) {
				a.t = p;
				for (var b = 0, f = d.length; b < f; b++) d[b]()
			}
		}

		function b() {
			try {
				document.documentElement.doScroll("left")
			} catch (d) {
				setTimeout(b, 1);
				return
			}
			a()
		}
		var f = r,
			d = [],
			g;
		document.addEventListener ? g = function() {
			document.removeEventListener("DOMContentLoaded", g, r);
			a()
		} : document.attachEvent && (g = function() {
			"complete" === document.readyState && (document.detachEvent("onreadystatechange", g), a())
		});
		(function() {
			if (!f)
				if (f = p, "complete" === document.readyState) a.t = p;
				else if (document.addEventListener) document.addEventListener("DOMContentLoaded",
				g, r), window.addEventListener("load", a, r);
			else if (document.attachEvent) {
				document.attachEvent("onreadystatechange", g);
				window.attachEvent("onload", a);
				var d = r;
				try {
					d = window.frameElement == q
				} catch (n) {}
				document.documentElement.doScroll && d && b()
			}
		})();
		return function(b) {
			a.t ? b() : d.push(b)
		}
	}()).t = r;
	mt.event = {};
	mt.event.d = function(a, b, f) {
		a.attachEvent ? a.attachEvent("on" + b, function(d) {
			f.call(a, d)
		}) : a.addEventListener && a.addEventListener(b, f, r)
	};
	mt.event.preventDefault = function(a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = r
	};
	mt.l = {};
	mt.l.parse = function() {
		return (new Function('return (" + source + ")'))()
	};
	mt.l.stringify = function() {
		function a(a) {
			/["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a) {
				var b = f[a];
				if (b) return b;
				b = a.charCodeAt();
				return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
			}));
			return '"' + a + '"'
		}

		function b(a) {
			return 10 > a ? "0" + a : a
		}
		var f = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		};
		return function(d) {
			switch (typeof d) {
				case "undefined":
					return "undefined";
				case "number":
					return isFinite(d) ? String(d) : "null";
				case "string":
					return a(d);
				case "boolean":
					return String(d);
				default:
					if (d === q) return "null";
					if (d instanceof Array) {
						var f = ["["],
							l = d.length,
							n, e, k;
						for (e = 0; e < l; e++) switch (k = d[e], typeof k) {
							case "undefined":
							case "function":
							case "unknown":
								break;
							default:
								n && f.push(","), f.push(mt.l.stringify(k)), n = 1
						}
						f.push("]");
						return f.join("")
					}
					if (d instanceof Date) return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
					n = ["{"];
					e = mt.l.stringify;
					for (l in d)
						if (Object.prototype.hasOwnProperty.call(d, l)) switch (k =
							d[l], typeof k) {
							case "undefined":
							case "unknown":
							case "function":
								break;
							default:
								f && n.push(","), f = 1, n.push(e(l) + ":" + e(k))
						}
						n.push("}");
					return n.join("")
			}
		}
	}();
	mt.lang = {};
	mt.lang.e = function(a, b) {
		return "[object " + b + "]" === {}.toString.call(a)
	};
	mt.lang.Ka = function(a) {
		return mt.lang.e(a, "Number") && isFinite(a)
	};
	mt.lang.Ma = function(a) {
		return mt.lang.e(a, "String")
	};
	mt.localStorage = {};
	mt.localStorage.B = function() {
		if (!mt.localStorage.f) try {
			mt.localStorage.f = document.createElement("input"), mt.localStorage.f.type = "hidden", mt.localStorage.f.style.display = "none", mt.localStorage.f.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)
		} catch (a) {
			return r
		}
		return p
	};
	mt.localStorage.set = function(a, b, f) {
		var d = new Date;
		d.setTime(d.getTime() + f || 31536E6);
		try {
			window.localStorage ? (b = d.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.B() && (mt.localStorage.f.expires = d.toUTCString(), mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.setAttribute(a, b), mt.localStorage.f.save(document.location.hostname))
		} catch (g) {}
	};
	mt.localStorage.get = function(a) {
		if (window.localStorage) {
			if (a = window.localStorage.getItem(a)) {
				var b = a.indexOf("|"),
					f = a.substring(0, b) - 0;
				if (f && f > (new Date).getTime()) return a.substring(b + 1)
			}
		} else if (mt.localStorage.B()) try {
			return mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.getAttribute(a)
		} catch (d) {}
		return q
	};
	mt.localStorage.remove = function(a) {
		if (window.localStorage) window.localStorage.removeItem(a);
		else if (mt.localStorage.B()) try {
			mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.removeAttribute(a), mt.localStorage.f.save(document.location.hostname)
		} catch (b) {}
	};
	mt.sessionStorage = {};
	mt.sessionStorage.set = function(a, b) {
		if (window.sessionStorage) try {
			window.sessionStorage.setItem(a, b)
		} catch (f) {}
	};
	mt.sessionStorage.get = function(a) {
		return window.sessionStorage ? window.sessionStorage.getItem(a) : q
	};
	mt.sessionStorage.remove = function(a) {
		window.sessionStorage && window.sessionStorage.removeItem(a)
	};
	mt.T = {};
	mt.T.log = function(a, b) {
		var f = new Image,
			d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
		window[d] = f;
		f.onload = f.onerror = f.onabort = function() {
			f.onload = f.onerror = f.onabort = q;
			f = window[d] = q;
			b && b(a)
		};
		f.src = a
	};
	mt.L = {};
	mt.L.oa = function() {
		var a = "";
		if (navigator.plugins && navigator.mimeTypes.length) {
			var b = navigator.plugins["Shockwave Flash"];
			b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
		} else if (window.ActiveXObject) try {
			if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
		} catch (f) {}
		return a
	};
	mt.L.Ea = function(a, b, f, d, g) {
		return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + f + '" height="' + d + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + f + '" height="' + d + '" src="' + b + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
	};
	mt.url = {};
	mt.url.i = function(a, b) {
		var f = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
		return f ? f[3] : q
	};
	mt.url.Ia = function(a) {
		return (a = a.match(/^(https?:)\/\//)) ? a[1] : q
	};
	mt.url.la = function(a) {
		return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : q
	};
	mt.url.O = function(a) {
		return (a = mt.url.la(a)) ? a.replace(/:\d+$/, "") : a
	};
	mt.url.Ha = function(a) {
		return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : q
	};
	h.n = {
		Ja: "http://tongji.baidu.com/hm-web/welcome/ico",
		J: "hm.baidu.com/hm.gif",
		X: "baidu.com",
		ra: "hmmd",
		sa: "hmpl",
		qa: "hmkw",
		pa: "hmci",
		ta: "hmsr",
		m: 0,
		j: Math.round(+new Date / 1E3),
		protocol: "https:" == document.location.protocol ? "https:" : "http:",
		La: 0,
		ba: 6E5,
		ca: 10,
		M: 1024,
		aa: 1,
		w: 2147483647,
		U: "cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")
	};
	(function() {
		var a = {
			k: {},
			d: function(a, f) {
				this.k[a] = this.k[a] || [];
				this.k[a].push(f)
			},
			q: function(a, f) {
				this.k[a] = this.k[a] || [];
				for (var d = this.k[a].length, g = 0; g < d; g++) this.k[a][g](f)
			}
		};
		return h.r = a
	})();
	(function() {
		function a(a, d) {
			var g = document.createElement("script");
			g.charset = "utf-8";
			b.e(d, "Function") && (g.readyState ? g.onreadystatechange = function() {
				if ("loaded" === g.readyState || "complete" === g.readyState) g.onreadystatechange = q, d()
			} : g.onload = function() {
				d()
			});
			g.src = a;
			var l = document.getElementsByTagName("script")[0];
			l.parentNode.insertBefore(g, l)
		}
		var b = mt.lang;
		return h.load = a
	})();
	(function() {
		var a = mt.o,
			b = mt.event,
			f = mt.h,
			d = h.n,
			g = [],
			l = {
				V: function() {
					c.ctrk && (b.d(document, "mouseup", l.$()), b.d(window, "unload", function() {
						l.z()
					}), setInterval(function() {
						l.z()
					}, d.ba))
				},
				$: function() {
					return function(a) {
						a = l.ia(a);
						if ("" !== a) {
							var b = (d.protocol + "//" + d.J + "?" + h.b.S().replace(/ep=[^&]*/, "ep=" + encodeURIComponent("[" + a + "]"))).length;
							b + (d.w + "").length > d.M || (b + encodeURIComponent(g.join(",") + (g.length ? "," : "")).length + (d.w + "").length > d.M && l.z(), g.push(a), (g.length >= d.ca || /t:a/.test(a)) && l.z())
						}
					}
				},
				ia: function(b) {
					if (0 === d.aa) {
						var e = b.target || b.srcElement,
							k = e.tagName.toLowerCase();
						if ("embed" == k || "object" == k) return ""
					}
					f.va ? (e = Math.max(document.documentElement.scrollTop, document.body.scrollTop), k = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), k = b.clientX + k, e = b.clientY + e) : (k = b.pageX, e = b.pageY);
					var m = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
					switch (c.align) {
						case 1:
							k -= m / 2;
							break;
						case 2:
							k -= m
					}
					k = "{x:" + k + ",y:" + e + ",";
					e = b.target || b.srcElement;
					return k = (b = "a" == e.tagName.toLowerCase() ? e : a.ha(e)) ? k + ("t:a,u:" + encodeURIComponent(b.href) + "}") : k + "t:b}"
				},
				z: function() {
					0 !== g.length && (h.b.a.et = 2, h.b.a.ep = "[" + g.join(",") + "]", h.b.g(), g = [])
				}
			};
		h.r.d("pv-b", l.V);
		return l
	})();
	(function() {
		function a() {
			return function() {
				h.b.a.nv = 0;
				h.b.a.st = 4;
				h.b.a.et = 3;
				h.b.a.ep = h.C.ma() + "," + h.C.ka();
				h.b.g()
			}
		}

		function b() {
			clearTimeout(x);
			var a;
			w && (a = "visible" == document[w]);
			y && (a = !document[y]);
			e = "undefined" == typeof a ? p : a;
			if ((!n || !k) && e && m) v = p, t = +new Date;
			else if (n && k && (!e || !m)) v = r, s += +new Date - t;
			n = e;
			k = m;
			x = setTimeout(b, 100)
		}

		function f(a) {
			var k = document,
				t = "";
			if (a in k) t = a;
			else
				for (var b = ["webkit", "ms", "moz", "o"], s = 0; s < b.length; s++) {
					var d = b[s] + a.charAt(0).toUpperCase() + a.slice(1);
					if (d in k) {
						t =
							d;
						break
					}
				}
			return t
		}

		function d(a) {
			if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) m = "focus" == a.type || "focusin" == a.type ? p : r, b()
		}
		var g = mt.event,
			l = h.r,
			n = p,
			e = p,
			k = p,
			m = p,
			u = +new Date,
			t = u,
			s = 0,
			v = p,
			w = f("visibilityState"),
			y = f("hidden"),
			x;
		b();
		(function() {
			var a = w.replace(/[vV]isibilityState/, "visibilitychange");
			g.d(document, a, b);
			g.d(window, "pageshow", b);
			g.d(window, "pagehide", b);
			"object" == typeof document.onfocusin ? (g.d(document, "focusin", d), g.d(document, "focusout", d)) : (g.d(window, "focus", d),
				g.d(window, "blur", d))
		})();
		h.C = {
			ma: function() {
				return +new Date - u
			},
			ka: function() {
				return v ? +new Date - t + s : s
			}
		};
		l.d("pv-b", function() {
			g.d(window, "unload", a())
		});
		return h.C
	})();
	(function() {
		var a = mt.lang,
			b = h.n,
			f = h.load,
			d = {
				ua: function(d) {
					if ((void 0 === window._dxt || a.e(window._dxt, "Array")) && "undefined" !== typeof h.b) {
						var l = h.b.F();
						f([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(l)].join(""), d)
					}
				},
				Da: function(b) {
					if (a.e(b, "String") || a.e(b, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", b])
				}
			};
		return h.da = d
	})();
	(function() {
		function a(k) {
			for (var b in k)
				if ({}.hasOwnProperty.call(k, b)) {
					var d = k[b];
					f.e(d, "Object") || f.e(d, "Array") ? a(d) : k[b] = String(d)
				}
		}

		function b(a) {
			return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
		}
		var f = mt.lang,
			d = mt.l,
			g = h.n,
			l = h.r,
			n = h.da,
			e = {
				P: q,
				p: [],
				A: 0,
				Q: r,
				init: function() {
					e.c = 0;
					e.P = {
						push: function() {
							e.I.apply(e, arguments)
						}
					};
					l.d("pv-b", function() {
						e.ea();
						e.fa()
					});
					l.d("pv-d", e.ga);
					l.d("stag-b", function() {
						h.b.a.api = e.c || e.A ? e.c + "_" + e.A : ""
					});
					l.d("stag-d", function() {
						h.b.a.api =
							0;
						e.c = 0;
						e.A = 0
					})
				},
				ea: function() {
					var a = window._hmt;
					if (a && a.length)
						for (var b = 0; b < a.length; b++) {
							var d = a[b];
							switch (d[0]) {
								case "_setAccount":
									1 < d.length && /^[0-9a-z]{32}$/.test(d[1]) && (e.c |= 1, window._bdhm_account = d[1]);
									break;
								case "_setAutoPageview":
									if (1 < d.length && (d = d[1], r === d || p === d)) e.c |= 2, window._bdhm_autoPageview = d
							}
						}
				},
				fa: function() {
					if ("undefined" === typeof window._bdhm_account || window._bdhm_account === c.id) {
						window._bdhm_account = c.id;
						var a = window._hmt;
						if (a && a.length)
							for (var b = 0, d = a.length; b < d; b++) f.e(a[b],
								"Array") && "_trackEvent" !== a[b][0] && "_trackRTEvent" !== a[b][0] ? e.I(a[b]) : e.p.push(a[b]);
						window._hmt = e.P
					}
				},
				ga: function() {
					if (0 < e.p.length)
						for (var a = 0, b = e.p.length; a < b; a++) e.I(e.p[a]);
					e.p = q
				},
				I: function(a) {
					if (f.e(a, "Array")) {
						var b = a[0];
						if (e.hasOwnProperty(b) && f.e(e[b], "Function")) e[b](a)
					}
				},
				_trackPageview: function(a) {
					if (1 < a.length && a[1].charAt && "/" == a[1].charAt(0)) {
						e.c |= 4;
						h.b.a.et = 0;
						h.b.a.ep = "";
						h.b.G ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.G = p;
						var b = h.b.a.u,
							d = h.b.a.su;
						h.b.a.u = g.protocol + "//" + document.location.host +
							a[1];
						e.Q || (h.b.a.su = document.location.href);
						h.b.g();
						h.b.a.u = b;
						h.b.a.su = d
					}
				},
				_trackEvent: function(a) {
					2 < a.length && (e.c |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = b(a[1]) + "*" + b(a[2]) + (a[3] ? "*" + b(a[3]) : "") + (a[4] ? "*" + b(a[4]) : ""), h.b.g())
				},
				_setCustomVar: function(a) {
					if (!(4 > a.length)) {
						var d = a[1],
							f = a[4] || 3;
						if (0 < d && 6 > d && 0 < f && 4 > f) {
							e.A++;
							for (var t = (h.b.a.cv || "*").split("!"), s = t.length; s < d - 1; s++) t.push("*");
							t[d - 1] = f + "*" + b(a[2]) + "*" + b(a[3]);
							h.b.a.cv = t.join("!");
							a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g,
								"");
							"" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.xa("Hm_cv_" + c.id)
						}
					}
				},
				_setReferrerOverride: function(a) {
					1 < a.length && (h.b.a.su = a[1].charAt && "/" == a[1].charAt(0) ? g.protocol + "//" + window.location.host + a[1] : a[1], e.Q = p)
				},
				_trackOrder: function(b) {
					b = b[1];
					f.e(b, "Object") && (a(b), e.c |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = d.stringify(b), h.b.g())
				},
				_trackMobConv: function(a) {
					if (a = {
						webim: 1,
						tel: 2,
						map: 3,
						sms: 4,
						callback: 5,
						share: 6
					}[a[1]]) e.c |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.g()
				},
				_trackRTPageview: function(b) {
					b =
						b[1];
					f.e(b, "Object") && (a(b), b = d.stringify(b), 512 >= encodeURIComponent(b).length && (e.c |= 64, h.b.a.rt = b))
				},
				_trackRTEvent: function(b) {
					b = b[1];
					if (f.e(b, "Object")) {
						a(b);
						b = encodeURIComponent(d.stringify(b));
						var m = function(a) {
								var b = h.b.a.rt;
								e.c |= 128;
								h.b.a.et = 90;
								h.b.a.rt = a;
								h.b.g();
								h.b.a.rt = b
							},
							u = b.length;
						if (900 >= u) m.call(this, b);
						else
							for (var u = Math.ceil(u / 900), t = "block|" + Math.round(Math.random() * g.w).toString(16) + "|" + u + "|", s = [], v = 0; v < u; v++) s.push(v), s.push(b.substring(900 * v, 900 * v + 900)), m.call(this, t + s.join("|")),
								s = []
					}
				},
				_setUserId: function(a) {
					a = a[1];
					n.ua();
					n.Da(a)
				}
			};
		e.init();
		h.Y = e;
		return h.Y
	})();
	(function() {
		function a() {
			"undefined" == typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = p, this.a = {}, this.G = r, this.init())
		}
		var b = mt.url,
			f = mt.T,
			d = mt.L,
			g = mt.lang,
			l = mt.cookie,
			n = mt.h,
			e = mt.localStorage,
			k = mt.sessionStorage,
			m = h.n,
			u = h.r;
		a.prototype = {
			H: function(a, b) {
				a = "." + a.replace(/:\d+/, "");
				b = "." + b.replace(/:\d+/, "");
				var d = a.indexOf(b);
				return -1 < d && d + b.length == a.length
			},
			R: function(a, b) {
				a = a.replace(/^https?:\/\//, "");
				return 0 === a.indexOf(b)
			},
			s: function(a) {
				for (var d = 0; d < c.dm.length; d++)
					if (-1 <
						c.dm[d].indexOf("/")) {
						if (this.R(a, c.dm[d])) return p
					} else {
						var f = b.O(a);
						if (f && this.H(f, c.dm[d])) return p
					}
				return r
			},
			F: function() {
				for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
					if (this.H(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
				return a
			},
			N: function() {
				for (var a = 0, b = c.dm.length; a < b; a++) {
					var d = c.dm[a];
					if (-1 < d.indexOf("/") && this.R(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
				}
				return "/"
			},
			na: function() {
				if (!document.referrer) return m.j - m.m > c.vdur ? 1 : 4;
				var a =
					r;
				this.s(document.referrer) && this.s(document.location.href) ? a = p : (a = b.O(document.referrer), a = this.H(a || "", document.location.hostname));
				return a ? m.j - m.m > c.vdur ? 1 : 4 : 3
			},
			getData: function(a) {
				try {
					return l.get(a) || k.get(a) || e.get(a)
				} catch (b) {}
			},
			setData: function(a, b, d) {
				try {
					l.set(a, b, {
						domain: this.F(),
						path: this.N(),
						D: d
					}), d ? e.set(a, b, d) : k.set(a, b)
				} catch (f) {}
			},
			xa: function(a) {
				try {
					l.set(a, "", {
						domain: this.F(),
						path: this.N(),
						D: -1
					}), k.remove(a), e.remove(a)
				} catch (b) {}
			},
			Ba: function() {
				var a, b, d, f, e;
				m.m = this.getData("Hm_lpvt_" +
					c.id) || 0;
				13 == m.m.length && (m.m = Math.round(m.m / 1E3));
				b = this.na();
				a = 4 != b ? 1 : 0;
				if (d = this.getData("Hm_lvt_" + c.id)) {
					f = d.split(",");
					for (e = f.length - 1; 0 <= e; e--) 13 == f[e].length && (f[e] = "" + Math.round(f[e] / 1E3));
					for (; 2592E3 < m.j - f[0];) f.shift();
					e = 4 > f.length ? 2 : 3;
					for (1 === a && f.push(m.j); 4 < f.length;) f.shift();
					d = f.join(",");
					f = f[f.length - 1]
				} else d = m.j, f = "", e = 1;
				this.setData("Hm_lvt_" + c.id, d, c.age);
				this.setData("Hm_lpvt_" + c.id, m.j);
				d = m.j == this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
				if (0 === c.nv && this.s(document.location.href) &&
					("" === document.referrer || this.s(document.referrer))) a = 0, b = 4;
				this.a.nv = a;
				this.a.st = b;
				this.a.cc = d;
				this.a.lt = f;
				this.a.lv = e
			},
			S: function() {
				for (var a = [], b = 0, d = m.U.length; b < d; b++) {
					var f = m.U[b],
						e = this.a[f];
					"undefined" != typeof e && "" !== e && a.push(f + "=" + encodeURIComponent(e))
				}
				b = this.a.et;
				this.a.rt && (0 === b ? a.push("rt=" + encodeURIComponent(this.a.rt)) : 90 === b && a.push("rt=" + this.a.rt));
				return a.join("&")
			},
			Ca: function() {
				this.Ba();
				this.a.si = c.id;
				this.a.su = document.referrer;
				this.a.ds = n.ya;
				this.a.cl = n.colorDepth + "-bit";
				this.a.ln = n.language;
				this.a.ja = n.javaEnabled ? 1 : 0;
				this.a.ck = n.cookieEnabled ? 1 : 0;
				this.a.lo = "number" == typeof _bdhm_top ? 1 : 0;
				this.a.fl = d.oa();
				this.a.v = "1.0.89";
				this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
				1 == this.a.nv && (this.a.tt = document.title || "");
				var a = document.location.href;
				this.a.cm = b.i(a, m.ra) || "";
				this.a.cp = b.i(a, m.sa) || "";
				this.a.cw = b.i(a, m.qa) || "";
				this.a.ci = b.i(a, m.pa) || "";
				this.a.cf = b.i(a, m.ta) || ""
			},
			init: function() {
				try {
					this.Ca(), 0 === this.a.nv ? this.Aa() : this.K(".*"), h.b = this, this.Z(),
						u.q("pv-b"), this.za()
				} catch (a) {
					var b = [];
					b.push("si=" + c.id);
					b.push("n=" + encodeURIComponent(a.name));
					b.push("m=" + encodeURIComponent(a.message));
					b.push("r=" + encodeURIComponent(document.referrer));
					f.log(m.protocol + "//" + m.J + "?" + b.join("&"))
				}
			},
			za: function() {
				function a() {
					u.q("pv-d")
				}
				"undefined" === typeof window._bdhm_autoPageview || window._bdhm_autoPageview === p ? (this.G = p, this.a.et = 0, this.a.ep = "", this.g(a)) : a()
			},
			g: function(a) {
				var b = this;
				b.a.rnd = Math.round(Math.random() * m.w);
				u.q("stag-b");
				var d = m.protocol + "//" +
					m.J + "?" + b.S();
				u.q("stag-d");
				b.W(d);
				f.log(d, function(d) {
					b.K(d);
					g.e(a, "Function") && a.call(b)
				})
			},
			Z: function() {
				var a = document.location.hash.substring(1),
					d = RegExp(c.id),
					f = -1 < document.referrer.indexOf(m.X) ? p : r,
					e = b.i(a, "jn"),
					g = /^heatlink$|^select$/.test(e);
				a && (d.test(a) && f && g) && (a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", m.protocol + "//" + c.js + e + ".js?" + this.a.rnd), e = document.getElementsByTagName("script")[0], e.parentNode.insertBefore(a,
					e))
			},
			W: function(a) {
				var b = k.get("Hm_unsent_" + c.id) || "",
					d = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href),
					b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
				k.set("Hm_unsent_" + c.id, b)
			},
			K: function(a) {
				var b = k.get("Hm_unsent_" + c.id) || "";
				b && ((b = b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//, "")).replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), "").replace(/,$/, "")) ? k.set("Hm_unsent_" + c.id, b) : k.remove("Hm_unsent_" + c.id))
			},
			Aa: function() {
				var a = this,
					b = k.get("Hm_unsent_" +
						c.id);
				if (b)
					for (var b = b.split(","), d = function(b) {
						f.log(m.protocol + "//" + decodeURIComponent(b).replace(/^https?:\/\//, ""), function(b) {
							a.K(b)
						})
					}, e = 0, g = b.length; e < g; e++) d(b[e])
			}
		};
		return new a
	})();
	(function() {
		var a = mt.o,
			b = mt.event,
			f = mt.url,
			d = mt.l;
		try {
			if (window.performance && performance.timing && "undefined" !== typeof h.b) {
				var g = +new Date,
					l = function(a) {
						var b = performance.timing,
							d = b[a + "Start"] ? b[a + "Start"] : 0;
						a = b[a + "End"] ? b[a + "End"] : 0;
						return {
							start: d,
							end: a,
							value: 0 < a - d ? a - d : 0
						}
					},
					n = q;
				a.wa(function() {
					n = +new Date
				});
				var e = function() {
					var a, b, e;
					e = l("navigation");
					b = l("request");
					e = {
						netAll: b.start - e.start,
						netDns: l("domainLookup").value,
						netTcp: l("connect").value,
						srv: l("response").start - b.start,
						dom: performance.timing.domInteractive -
							performance.timing.fetchStart,
						loadEvent: l("loadEvent").end - e.start
					};
					a = document.referrer;
					var k = q;
					b = q;
					if ("www.baidu.com" === (a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/) || [])[2]) k = f.i(a, "qid"), b = f.i(a, "click_t");
					a = k;
					e.qid = a != q ? a : "";
					b != q ? (e.bdDom = n ? n - b : 0, e.bdRun = g - b) : (e.bdDom = 0, e.bdRun = 0);
					h.b.a.et = 87;
					h.b.a.ep = d.stringify(e);
					h.b.g()
				};
				b.d(window, "load", function() {
					setTimeout(e, 500)
				})
			}
		} catch (k) {}
	})();
	(function() {
		var a = h.n,
			b = {
				init: function() {
					try {
						if ("http:" === a.protocol) {
							var b = document.createElement("IFRAME");
							b.setAttribute("src", "http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");
							b.style.display = "none";
							b.style.width = "1";
							b.style.height = "1";
							b.Fa = "0";
							document.body.appendChild(b)
						}
					} catch (f) {}
				}
			},
			f = navigator.userAgent.toLowerCase(); - 1 < f.indexOf("android") && -1 === f.indexOf("micromessenger") && b.init()
	})();
	(function() {
		var a = mt.lang,
			b = mt.event;
		if (c.comm && "undefined" !== typeof h.b) {
			var f = function(a) {
					if (a.item) {
						for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
						return d
					}
					return [].slice.call(a)
				},
				d = /.*\/swt(\/)?([\?|#].*)?$/i,
				g = {
					click: function() {
						for (var a = [], b = f(document.getElementsByTagName("a")), b = [].concat.apply(b, f(document.getElementsByTagName("area"))), b = [].concat.apply(b, f(document.getElementsByTagName("img"))), e = /openZoosUrl\(/, g = /\/LR\/Chatpre\.aspx/, k = 0, m = b.length; k < m; k++) {
							var l = b[k],
								n = l.getAttribute("onclick"),
								l = l.getAttribute("href");
							(e.test(n) || g.test(l) || d.test(l)) && a.push(b[k])
						}
						return a
					}
				},
				l = function(a, b) {
					for (var d in a)
						if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === r) return r
				},
				n = function(a, b) {
					if (b && d.test(b.getAttribute("href"))) {
						var e = b.getAttribute("href");
						a = ["swt", e.replace ? e.replace(/'/g, "'0").replace(/\*/g, "'1") : e, a].join("*")
					}
					h.b.a.et = 86;
					h.b.a.ep = a;
					h.b.g();
					for (e = +new Date; 500 >= +new Date - e;);
				},
				e, k = "/zoosnet" + (/\/$/.test("/zoosnet") ? "" : "/"),
				m = function(b, d) {
					if (e === d) return n(k + b, d), r;
					if (a.e(d, "Array") ||
						a.e(d, "NodeList"))
						for (var f = 0, g = d.length; f < g; f++)
							if (e === d[f]) return n(k + b + "/" + (f + 1), d[f]), r
				};
			b.d(document, "click", function(b) {
				b = b || window.event;
				e = b.target || b.srcElement;
				var d = {};
				for (l(g, function(b, e) {
					d[b] = a.e(e, "Function") ? e() : document.getElementById(e)
				}); e && e !== document && l(d, m) !== r;) e = e.parentNode
			})
		}
	})();
})();