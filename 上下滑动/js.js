define("com/mobile/page/milan/list_page.js", ["$", "./base_page.js", "com/mobile/lib/storage/storage.js", "com/mobile/lib/underscore/underscore.js", "com/mobile/lib/widget/widget.js"], function(t, e, a) {
	var i = t("com/mobile/lib/widget/widget.js"),
		n = t("./base_page.js"),
		o = t("com/mobile/lib/underscore/underscore.js"),
		r = t("$"),
		s = t("com/mobile/lib/storage/storage.js");
	r.extend(e, n), e.loadMore = i.define({
		events: {
			'tap [data-role="loadMore"]': function() {
				this.loadMore()
			},
			'touchend [data-role="loadMore"]': function(t) {
				t.preventDefault()
			}
		},
		init: function(t) {
			function e() {
				var t = r(window).scrollTop();
				r("body").height() - i - t < 50 && a.loadMore()
			}
			var a = this,
				i = window.screen.height;
			this.render = o.template(r(t.template).html()), this.config = t, this.offset = 0, this.scrollAble = !!t.scrollAble && t.scrollAble, this.listening = !1, this.listenScroll = function() {
				a.listening || (a.listening = !0, r(window).on("scroll", e))
			}, this.removeScrollListener = function() {
				r(window).off("scroll", e), a.listening = !1
			}, t.scrollAble && a.listenScroll()
		},
		loadMore: function() {
			var t = this;
			t.loading || (t.removeScrollListener(), t.loading = !0, t.getData(++t.offset, function(e, a) {
				e ? n.tip(e.message, 1500) : a && 0 !== a.length ? (t.config.$list.append(t.render({
					posts: a
				})), t.loading = !1, t.config.$loadMore.html("查看更多<i></i>"), t.config.scrollAble && t.listenScroll()) : t.config.$loadMore.html("没有更多了")
			}))
		},
		getData: function(t, e) {
			var a = this;
			r.ajax({
				url: a.config.ajaxUrl,
				data: {
					offset: t,
					page: t + 1
				},
				beforeSend: function() {
					a.config.$loadMore.html("加载中...")
				},
				dataType: "json"
			}).done(function(t) {
				e(null, t)
			}).fail(function() {
				e(new Error("network error!"))
			})
		}
	});
	var c = function(t) {
		t || (t = window.location.search);
		var e, a = {};
		return t = t.replace("?", ""), e = t.split("&"), r.each(e, function(t, e) {
			var i = e.split("=");
			2 === i.length && (a[i[0]] = decodeURIComponent(i[1]))
		}), a
	};
	e.listFilter = i.define({
		events: {
			'click [data-role="filterItem"]': "showFilterContent",
			"tap [data-role=checkItem]": "toggleCheckItem",
			"tap .js-sigle [data-ajax]": "showNextCate",
			"tap .js-sigle [data-value]": "sigleUpdate",
			'tap [data-role="moreItem"] li': "showChildFilter",
			'tap [data-role="moreItem"] [data-role="singleCheck"]': "moreSingleCheck",
			'tap [data-role="back"]': "backParentFilter",
			"tap .js-more [data-ajax]": "showNextCate",
			"tap .js-more [data-value]": "moreUpdate",
			'tap [data-role="reset"]': "resetFilter",
			'tap [data-role="submit"]': "submitFilter"
		},
		init: function(t) {
			var e = this;
			this.config = t, this.$el = t.$el, this.$container = null, this.$mask = r("#maskEl"), this.curParams = c(), this.config.params && (this.curParams = this.config.params), this.$mask.on("click", function(t) {
				t.preventDefault(), e.hideFilterContent()
			}), this.noScroll = !1, r("body").on("touchmove", function(t) {
				e.noScroll && t.preventDefault()
			}), r(".filtate-outter").css("position", "sticky"), this.config.$moreChild && this.config.$moreChild.length && this.config.$moreChild.find(".js-filt-child").each(function() {
				var t = r(this),
					e = {};
				t.find("[data-key]").each(function() {
					var t = r(this).data("key"),
						a = r(this).find(".active").data("value");
					a || (a = r(this).find(".active").data("ajax")), e[t] = a
				}), t.data("params", e)
			}), t.$el.on("touchstart", "li", function() {
				r(this).addClass("touch")
			}).on("touchmove, touchcanel, touchend", "li", function() {
				r(this).removeClass("touch")
			});
			var a = .78 * r(window).height();
			this.maxHeight = 41 * (Math.round(a / 41) - 1), t.$el.find(".js-sigle .warpper").css("height", this.maxHeight), t.$moreItem && (t.$moreItem.css("height", this.maxHeight), t.$moreItem.find(".warpper").css("height", this.maxHeight - 43), t.$moreChild.find(".warpper").css("height", this.maxHeight - 41))
		},
		momentum: function(t, e, a, i, n) {
			var o, r, s = Math.abs(t) / a,
				c = 8e-4;
			return o = e + s * s / (2 * c) * (t < 0 ? -1 : 1), r = s / c, o < i ? (o = n ? i - n / 2.5 * (s / 8) : i, t = Math.abs(o - e), r = t / s) : o > 0 && (o = n ? n / 2.5 * (s / 8) : 0, t = Math.abs(e) + o, r = t / s), {
				destination: Math.round(o),
				duration: r
			}
		},
		initScroll: function(t) {
			var e = this;
			t.each(function() {
				var t = this;
				if(!r(this).data("hasScroll")) {
					var a = r(t).find("ul"),
						i = 0,
						n = 0,
						o = r(t).height(),
						s = r(t).height() - r(t).find("ul").height(),
						c = 0,
						l = 0,
						d = !1;
					s > 0 && (s = 0);
					var h = function() {
						n > 0 ? n = 0 : n < 0 && n < s && (n = s), d = !1, a.css({
							"-webkit-transform": "translate3d(0, " + n + "px, 0)",
							"transition-timing-function": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
							"-webkit-transition-duration": "400ms"
						})
					};
					r(t).find("ul").on("touchstart", function(t) {
						i = t.changedTouches[0].screenY - n, c = t.timeStamp, l = t.changedTouches[0].screenY
					}).on("touchmove", function(t) {
						d = !1, n = t.changedTouches[0].screenY - i, n > 0 ? n *= .4 : n < s && (n = s + .4 * (n - s)), r(this).css({
							"-webkit-transform": "translate3d(0," + n + "px, 0)",
							"-webkit-transition-duration": "0"
						});
						var e = t.timeStamp;
						e - c > 280 && (c = e, l = t.changedTouches[0].screenY)
					}).on("touchend", function(t) {
						var a = t.timeStamp - c,
							i = t.changedTouches[0].screenY - l;
						if(d && t.preventDefault(), d = !0, n > 0 || n < s) return void h();
						if(a < 280) {
							var f = e.momentum(i, n, a, s, o);
							n = f.destination, r(this).css({
								"-webkit-transform": "translate3d(0, " + f.destination + "px, 0)",
								"transition-timing-function": "cubic-bezier(0.1, 0.3, 0.5, 1)",
								"-webkit-transition-duration": f.duration + "ms"
							})
						}
					}).on("transitionend", function() {
						return !!d && (d = !1, void h())
					})
				}
				r(this).data("hasScroll", !0)
			})
		},
		toggleCheckItem: function(t) {
			var e = r(t.currentTarget);
			e.find("[data-week]").toggleClass("checked js-check")
		},
		showFilterContent: function(t) {
			t.preventDefault(), this.noScroll = !0;
			var e = r(t.currentTarget);
			if(e.hasClass("active")) return this.hideFilterContent(), !1;
			var a = this.$el,
				i = e.data("id");
			this.$container = r("#" + i), r("body").addClass("body-filt-open"), this.config.$filterItem.removeClass("active"), a.find(".filt-open").removeClass("filt-show"), e.addClass("active"), this.$container.addClass("filt-show"), this.$mask.show();
			var n, o = r("#" + i);
			o.hasClass("js-more") && (o = this.config.$moreItem), n = o.find(".warpper"), this.initScroll(n)
		},
		preventFilterContent: function(t) {
			t.preventDefault()
		},
		showNextCate: function(t) {
			t.preventDefault();
			var e = this,
				a = r(t.currentTarget);
			if(a.hasClass("active")) return !1;
			var i = a.parents(".warpper");
			i.find(".active").removeClass("active"), a.addClass("active");
			var n = i.next();
			if(n.length) {
				n.find(".active").removeClass("active");
				for(var o = n.next();;) {
					if(!o.length) break;
					o.remove(), o = n.next()
				}
			}
			var s = "",
				c = i.parents(".filt-open").data("url"),
				l = a.data("ajax"),
				d = a.data("extra");
			d || (d = {}), c = c.replace("{keyword}", l), r.getJSON(c, d, function(t) {
				var a = t.key;
				if(t.data.length && r.each(t.data, function(t, e) {
						var a = "";
						e.extra && (a = "data-extra='" + JSON.stringify(e.extra) + "'");
						var i = "";
						e.default_name && (i = 'data-name="' + e.default_name + '"'), s += e.hasChild ? "<li " + a + ' data-ajax="' + e.id + '" ' + i + "><a>" + e.name + '</a><i class="filt-arrow"></i></li>' : "<li " + a + ' data-value="' + e.id + '" ' + i + "><a>" + e.name + "</a></li>"
					}), n.length) s = "<ul>" + s + "</ul>", n.html(s).data("key", a).data("hasScroll", !1).show();
				else {
					var o = e.maxHeight;
					i.parents(".js-filt-child").length > 0 && (o -= 41);
					var c = "bg-gray";
					i.closest(".filt-show").find(".warpper").length > 1 && (c = "bg-black"), s = '<div style="height:' + o + 'px" class="warpper box-flex1 ' + c + '" data-key="' + a + '"><ul>' + s + "</ul></div>", i.after(s)
				}
				var l = i.parents(".filt-open").attr("id"),
					d = r("#" + l).find(".warpper");
				e.initScroll(d)
			})
		},
		sigleUpdate: function(t) {
			t.preventDefault();
			var e = r(t.currentTarget),
				a = e.parents(".js-sigle"),
				i = this,
				n = e.find('[type="checkbox"]');
			if(n.length) {
				var o = n.prop("checked");
				n.prop("checked", !o)
			}
			for(var s = e.parents(".warpper"), c = s.next(), l = c;;) {
				if(!l.length) break;
				l.hide(), l.find(".active").removeClass("active"), l = l.next()
			}
			e.parents("ul").find(".active").removeClass("active"), e.addClass("active");
			var d = {};
			a.find("[data-key]").each(function() {
				var t = r(this).data("key"),
					e = r(this).find(".active").data("value"),
					a = r(this).find(".active").data("extra");
				a && (d = r.extend(d, a)), void 0 !== e && "" !== r.trim(e) || (e = r(this).find(".active").data("ajax")), void 0 === e || "" === r.trim(e) ? delete i.curParams[t] : d[t] = e
			});
			var h = a.data("reject");
			h && h.length && r.each(h, function(t, e) {
				delete i.curParams[e]
			}), this.gotoUrl(d)
		},
		showChildFilter: function(t) {
			t.preventDefault();
			var e = r(t.currentTarget),
				a = e.data("id");
			if(a) {
				this.config.$moreChild.find(".js-filt-child").hide(), r("#" + a).show(), this.config.$moreItem.parent().animate({
					left: "-100%"
				}, 300, "ease-in-out");
				var i = r("#" + a).find(".warpper");
				this.initScroll(i)
			} else {
				var n = e.data("curKey"),
					o = e.data("curValue");
				n && void 0 !== o && (e.find(".js-check").hasClass("active") ? (delete this.curParams[n], e.find(".js-check").removeClass("active")) : (this.curParams[n] = o, e.find(".js-check").addClass("active")))
			}
		},
		moreSingleCheck: function(t) {
			t.preventDefault();
			var e = r(t.currentTarget),
				a = e.find("input"),
				i = a.prop("checked");
			a.prop("checked", !i)
		},
		moreUpdate: function(t) {
			t.preventDefault();
			var e = r(t.currentTarget),
				a = this;
			if(e.hasClass("active")) return !1;
			for(var i = e.parents(".warpper"), n = i.next(), o = n;;) {
				if(!o.length) break;
				o.hide(), o.find(".active").removeClass("active"), o = o.next()
			}
			var s = e.text();
			e.data("name") && (s = e.data("name"));
			var c = e.parents(".js-filt-child");
			e.parents("ul").find(".active").removeClass("active"), e.addClass("active");
			var l = c.attr("id"),
				d = c.data("event"),
				h = c.data("refId");
			this.backParnentHandler(l, s);
			var f = {};
			c.find("[data-key]").each(function() {
				var t = r(this).data("key"),
					e = r(this).find(".active").data("value"),
					i = r(this).find(".active").data("extra");
				i && (f = r.extend(f, i)), void 0 !== e && "" !== r.trim(e) || (e = r(this).find(".active").data("ajax")), void 0 === e || "" === r.trim(e) ? delete a.curParams[t] : f[t] = e, f[t] = e
			}), c.data("params", f);
			var u = c.data("reject");
			u && u.length && r.each(u, function(t, e) {
				delete a.curParams[e]
			}), d && r("#" + h).trigger(d, f)
		},
		backParentFilter: function(t) {
			t.preventDefault(), this.backParnentHandler(null, null)
		},
		backParnentHandler: function(t, e) {
			t && e && this.config.$moreItem.find('[data-id="' + t + '"]').find(".js-span").text(e), this.config.$moreItem.parent().animate({
				left: 0
			}, 300, "ease-in-out")
		},
		hideFilterContent: function() {
			r("body").removeClass("body-filt-open"), this.config.$filterItem.removeClass("active"), this.$el.find(".filt-open").removeClass("filt-show"), this.$mask.hide(), this.noScroll = !1
		},
		resetFilter: function(t) {
			t.preventDefault(), this.config.$moreItem.find(".js-span").each(function() {
				r(this).text("不限")
			}), this.config.$moreItem.find(".js-check").each(function() {
				r(this).removeClass("active")
			}), this.curParams = {}, this.config.$moreChild.find(".js-filt-child").each(function() {
				var t = {};
				r(this).find(".warpper").each(function(e) {
					var a = r(this).data("key");
					r(this).data("defaultValue") && (t[a] = r(this).data("defaultValue")), 0 === e ? r(this).find(".active").removeClass("active") : r(this).remove()
				}), r(this).data("params", t)
			}), this.config.$singleCheck.each(function() {
				r(this).find("input").prop("checked", !1)
			})
		},
		submitFilter: function() {
			var t = this,
				e = {},
				a = this.config.$moreChild,
				i = this.config.$checkItem,
				n = this.config.$singleCheck;
			if(a && a.find(".js-filt-child").each(function() {
					var t = r(this).data("params");
					t = t || {}, r.extend(e, t)
				}), i) {
				var o = "";
				i.find(".js-check").each(function() {
					o += r(this).data("week")
				}), o ? e.workday = o : delete this.curParams.workday
			}
			n && n.each(function() {
				var a = r(this).find("input"),
					i = r(this).data("key");
				a.prop("checked") ? e[i] = a.val() : delete t.curParams[i]
			}), this.gotoUrl(e)
		},
		gotoUrl: function(t) {
			t = r.extend({}, this.curParams, t), t.page = 1, delete t.ingore, delete t.ifid, window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), window.location.href = window.location.pathname + "?" + r.param(t)
		}
	}), e.removeField = function(t) {
		var e = r('#filter-more [data-id="filt-more-shoujihao_operator"]'),
			a = r('#filter-more [data-id="filt-more-shoujihao_feature"]');
		return !(!e.length || !a.length) && void i.ready(r(".list-filtrate"), function(i) {
			t.$el.on("click", "li", function() {
				var t = r(this).data("value");
				"shoujihaoma" === t ? (e.show(), a.show(), r("#filt-more-shoujihao_operator").addClass("js-filt-child"), r("#filt-more-shoujihao_feature").addClass("js-filt-child")) : (delete i.curParams.shoujihao_operator, delete i.curParams.shoujihao_feature, e.hide(), a.hide(), r("#filt-more-shoujihao_operator").removeClass("js-filt-child"), r("#filt-more-shoujihao_feature").removeClass("js-filt-child"))
			})
		})
	}, e.geoStatus = function(t) {
		var e, a = t.$el,
			i = t.url,
			n = "";
		i && (i = i.replace(/#./, ""), e = i.split("?"), n = e[0]);
		var l = {};
		if(e && e.length > 1) {
			var d = e[1];
			l = c(d)
		}
		if(t.lat && t.lng) {
			var h = t.lat + "," + t.lng;
			r.getJSON("/latlng/?latlng=" + h, function(e) {
				var i = e.data.currentLocation;
				a.find(".tip1").hide(), t.$addressName.text(i), t.$agree.show()
			})
		}
		var f = new s("nearbyPos"),
			u = function() {
				var e = r.Deferred();
				e.done(function(e) {
					a.find(".tip1").hide(), t.$checking.show(), o.extend(l, c()), l.lat = e.latitude, l.lng = e.longitude, window.location.href = window.location.pathname + "?" + r.param(l), setTimeout(function() {
						a.find(".tip1").hide(), t.$check.show()
					}, 1e3)
				}).fail(function(e) {
					var i = "";
					i = e.code === e.PERMISSION_DENIED ? "浏览器定位授权未打开" : e.code === e.POSITION_UNAVAILABLE ? "定位失败" : "定位超时", a.find(".tip1").hide(), t.$tip.text(i), t.$reject.show()
				}), a.find(".tip1").hide(), t.$checking.show();
				var i = f.get("curPos"),
					n = (new Date).getTime();
				!i || i && n - i.curTime > 18e6 ? (f.remove("curPos"), navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(t) {
					i = {
						latitude: t.coords.latitude,
						longitude: t.coords.longitude,
						curTime: (new Date).getTime()
					}, f.set("curPos", i), e.resolve(i)
				}, function(t) {
					e.reject(t)
				}, {
					timeout: t.timeout || 3e4,
					maximumAge: 6e5,
					enableHighAccuracy: !0
				}) : e.reject()) : e.resolve(i)
			};
		t.$check.on("click", function(t) {
			t.preventDefault(), u()
		}), t.$refresh.on("click", function() {
			f.remove("curPos"), u()
		})
	}, e.initPage = function(t) {
		var e = c(),
			a = t.$select.attr("selectedIndex"),
			i = function() {
				window.location.href = window.location.pathname + "?" + r.param(e)
			};
		e.page = e.page ? parseInt(e.page, 10) : 1, r(t.$prev).on("click", function(t) {
			return t.preventDefault(), !r(this).hasClass("disable") && (e.page ? e.page -= 1 : e.page = 1, void i())
		}), t.$select.on("change", function() {
			var t = r(this).val();
			r(this).prop("selectedIndex", a || 0), setTimeout(function() {
				window.location.href = t
			}, 300)
		}).on("touchstart", function() {
			r(this).addClass("touch")
		}).on("touchend, touchmove, touchcancel", function() {
			r(this).removeClass("touch")
		}).on("touchstart, touchmove, touchend", function(t) {
			t.stoppropagation()
		}), r(t.$next).on("click", function() {
			return !r(this).hasClass("disable") && (e.page ? e.page += 1 : e.page = 1, void i())
		})
	}, e.postList = function(t) {
		if(t.$imState && t.$imState.length) {
			var e = [];
			t.$imState.each(function() {
				var t = r(this).data("userId");
				e.push(t)
			}), e = e.join(","), r.getJSON("http://webim.ganji.com/index.php?op=getuserstatuss&callback=?", {
				userIds: e
			}, function(e) {
				var a = e.data;
				a && t.$imState.each(function() {
					var t = r(this).data("userId");
					a[t] && a[t].status && (r(this).addClass("online").show(), r(this).find("span").text("在线"))
				})
			})
		}
		if(t.$img && t.$img.length) {
			t.$img.each(function() {
				var t = r(this).offset().top;
				r(this).data("offsetTop", t)
			});
			var a = r(window).height(),
				i = null,
				n = 0,
				o = function() {
					clearTimeout(i), i = setTimeout(function() {
						var e = r(window).scrollTop();
						if(t.$img.each(function(t) {
								var i = r(this).data("src");
								if(i) {
									var o = r(this).data("offsetTop");
									if(!(e + a + 300 > o)) return n = t, !1;
									r(this).attr("src", i), r(this).data("src", "")
								}
							}, 0), t.$img = r(t.$img.toArray().splice(n)), 1 === t.$img.length) {
							var i = t.$img.data("src");
							return t.$img.attr("src", i), r(window).off("scroll", o), !1
						}
					})
				};
			r(window).on("scroll", o)
		}
	}, e.init = function() {
		n.init()
	}
});