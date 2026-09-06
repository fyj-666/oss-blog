import { D as e, M as t, O as n, S as r, T as i, _ as a, c as o, d as s, f as c, g as l, h as u, l as d, m as f, n as p, o as m, r as h, u as g, v as _, w as v, x as y } from "./_react-D4KM8XEu.js";
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/subscribable.js
var b = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
	}
	subscribe(e) {
		return this.listeners.add(e), this.onSubscribe(), () => {
			this.listeners.delete(e), this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
}, x = new class extends b {
	#e;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e();
				return window.addEventListener("visibilitychange", t, !1), () => {
					window.removeEventListener("visibilitychange", t);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e((e) => {
			typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
		});
	}
	setFocused(e) {
		this.#e !== e && (this.#e = e, this.onFocus());
	}
	onFocus() {
		let e = this.isFocused();
		this.listeners.forEach((t) => {
			t(e);
		});
	}
	isFocused() {
		return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
	}
}(), S = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, C = new class {
	#e = S;
	setTimeoutProvider(e) {
		this.#e = e;
	}
	setTimeout(e, t) {
		return this.#e.setTimeout(e, t);
	}
	clearTimeout(e) {
		this.#e.clearTimeout(e);
	}
	setInterval(e, t) {
		return this.#e.setInterval(e, t);
	}
	clearInterval(e) {
		this.#e.clearInterval(e);
	}
}();
function w(e) {
	setTimeout(e, 0);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/utils.js
var T = typeof window > "u" || "Deno" in globalThis;
function E() {}
function D(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function O(e) {
	return typeof e == "number" && e >= 0 && e !== Infinity;
}
function k(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function A(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function j(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function M(e, t) {
	let { type: n = "all", exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
	if (o) {
		if (r) {
			if (t.queryHash !== te(o, t.options)) return !1;
		} else if (!ne(t.queryKey, o)) return !1;
	}
	if (n !== "all") {
		let e = t.isActive();
		if (n === "active" && !e || n === "inactive" && e) return !1;
	}
	return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t));
}
function ee(e, t) {
	let { exact: n, status: r, predicate: i, mutationKey: a } = e;
	if (a) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (N(t.options.mutationKey) !== N(a)) return !1;
		} else if (!ne(t.options.mutationKey, a)) return !1;
	}
	return !(r && t.state.status !== r || i && !i(t));
}
function te(e, t) {
	return (t?.queryKeyHashFn || N)(e);
}
function N(e) {
	return JSON.stringify(e, (e, t) => oe(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function ne(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && typeof e == "object" && typeof t == "object") {
		if (Array.isArray(e) && Array.isArray(t)) {
			for (let n = 0; n < t.length; n++) if (!ne(e[n], t[n])) return !1;
			return !0;
		}
		let n = Object.keys(t);
		for (let r of n) if (!ne(e[r], t[r])) return !1;
		return !0;
	}
	return !1;
}
var re = Object.prototype.hasOwnProperty;
function P(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	let r = ae(e) && ae(t);
	if (!r && !(oe(e) && oe(t))) return t;
	let i = (r ? e : Object.keys(e)).length, a = r ? t : Object.keys(t), o = a.length, s = r ? Array(o) : {}, c = 0;
	for (let l = 0; l < o; l++) {
		let o = r ? l : a[l], u = e[o], d = t[o];
		if (u === d) {
			s[o] = u, (r ? l < i : re.call(e, o)) && c++;
			continue;
		}
		if (u === null || d === null || typeof u != "object" || typeof d != "object") {
			s[o] = d;
			continue;
		}
		let f = P(u, d, n + 1);
		s[o] = f, f === u && c++;
	}
	return i === o && c === i ? e : s;
}
function ie(e, t) {
	if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function ae(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function oe(e) {
	if (!F(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!F(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function F(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function I(e) {
	return new Promise((t) => {
		C.setTimeout(t, e);
	});
}
function se(e, t, n) {
	return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing === !1 ? t : P(e, t);
}
function ce(e, t, n = 0) {
	let r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function le(e, t, n = 0) {
	let r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var ue = /* @__PURE__ */ Symbol();
function de(e, t) {
	return !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === ue ? () => Promise.reject(/* @__PURE__ */ Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function L(e, t) {
	return typeof e == "function" ? e(...t) : !!e;
}
function fe(e, t, n) {
	let r = !1, i;
	return Object.defineProperty(e, "signal", {
		enumerable: !0,
		get: () => (i ??= t(), r ? i : (r = !0, i.aborted ? n() : i.addEventListener("abort", n, { once: !0 }), i))
	}), e;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/environmentManager.js
var pe = /* @__PURE__ */ (() => {
	let e = () => T;
	return {
		isServer() {
			return e();
		},
		setIsServer(t) {
			e = t;
		}
	};
})();
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/thenable.js
function me() {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	n.status = "pending", n.catch(() => {});
	function r(e) {
		Object.assign(n, e), delete n.resolve, delete n.reject;
	}
	return n.resolve = (t) => {
		r({
			status: "fulfilled",
			value: t
		}), e(t);
	}, n.reject = (e) => {
		r({
			status: "rejected",
			reason: e
		}), t(e);
	}, n;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js
var he = w;
function ge() {
	let e = [], t = 0, n = (e) => {
		e();
	}, r = (e) => {
		e();
	}, i = he, a = (r) => {
		t ? e.push(r) : i(() => {
			n(r);
		});
	}, o = () => {
		let t = e;
		e = [], t.length && i(() => {
			r(() => {
				t.forEach((e) => {
					n(e);
				});
			});
		});
	};
	return {
		batch: (e) => {
			let n;
			t++;
			try {
				n = e();
			} finally {
				t--, t || o();
			}
			return n;
		},
		batchCalls: (e) => (...t) => {
			a(() => {
				e(...t);
			});
		},
		schedule: a,
		setNotifyFunction: (e) => {
			n = e;
		},
		setBatchNotifyFunction: (e) => {
			r = e;
		},
		setScheduler: (e) => {
			i = e;
		}
	};
}
var R = ge(), _e = new class extends b {
	#e = !0;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e(!0), n = () => e(!1);
				return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
					window.removeEventListener("online", t), window.removeEventListener("offline", n);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e(this.setOnline.bind(this));
	}
	setOnline(e) {
		this.#e !== e && (this.#e = e, this.listeners.forEach((t) => {
			t(e);
		}));
	}
	isOnline() {
		return this.#e;
	}
}();
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/retryer.js
function ve(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function ye(e) {
	return (e ?? "online") === "online" ? _e.isOnline() : !0;
}
var be = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function xe(e) {
	let t = !1, n = 0, r, i = me(), a = () => i.status !== "pending", o = (t) => {
		if (!a()) {
			let n = new be(t);
			f(n), e.onCancel?.(n);
		}
	}, s = () => {
		t = !0;
	}, c = () => {
		t = !1;
	}, l = () => x.isFocused() && (e.networkMode === "always" || _e.isOnline()) && e.canRun(), u = () => ye(e.networkMode) && e.canRun(), d = (e) => {
		a() || (r?.(), i.resolve(e));
	}, f = (e) => {
		a() || (r?.(), i.reject(e));
	}, p = () => new Promise((t) => {
		r = (e) => {
			(a() || l()) && t(e);
		}, e.onPause?.();
	}).then(() => {
		r = void 0, a() || e.onContinue?.();
	}), m = () => {
		if (a()) return;
		let r, i = n === 0 ? e.initialPromise : void 0;
		try {
			r = i ?? e.fn();
		} catch (e) {
			r = Promise.reject(e);
		}
		Promise.resolve(r).then(d).catch((r) => {
			if (a()) return;
			let i = e.retry ?? (pe.isServer() ? 0 : 3), o = e.retryDelay ?? ve, s = typeof o == "function" ? o(n, r) : o, c = i === !0 || typeof i == "number" && n < i || typeof i == "function" && i(n, r);
			if (t || !c) {
				f(r);
				return;
			}
			n++, e.onFail?.(n, r), I(s).then(() => l() ? void 0 : p()).then(() => {
				t ? f(r) : m();
			});
		});
	};
	return {
		promise: i,
		status: () => i.status,
		cancel: o,
		continue: () => (r?.(), i),
		cancelRetry: s,
		continueRetry: c,
		canStart: u,
		start: () => (u() ? m() : p().then(m), i)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/removable.js
var Se = class {
	#e;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(), O(this.gcTime) && (this.#e = C.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (pe.isServer() ? Infinity : 300 * 1e3));
	}
	clearGcTimeout() {
		this.#e !== void 0 && (C.clearTimeout(this.#e), this.#e = void 0);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function Ce(e) {
	return { onFetch: (t, n) => {
		let r = t.options, i = t.fetchOptions?.meta?.fetchMore?.direction, a = t.state.data?.pages || [], o = t.state.data?.pageParams || [], s = {
			pages: [],
			pageParams: []
		}, c = 0, l = async () => {
			let n = !1, l = (e) => {
				fe(e, () => t.signal, () => n = !0);
			}, u = de(t.options, t.fetchOptions), d = async (e, r, i) => {
				if (n) return Promise.reject(t.signal.reason);
				if (r == null && e.pages.length) return Promise.resolve(e);
				let a = (() => {
					let e = {
						client: t.client,
						queryKey: t.queryKey,
						pageParam: r,
						direction: i ? "backward" : "forward",
						meta: t.options.meta
					};
					return l(e), e;
				})(), o = await u(a), { maxPages: s } = t.options, c = i ? le : ce;
				return {
					pages: c(e.pages, o, s),
					pageParams: c(e.pageParams, r, s)
				};
			};
			if (i && a.length) {
				let e = i === "backward", t = e ? Te : we, n = {
					pages: a,
					pageParams: o
				};
				s = await d(n, t(r, n), e);
			} else {
				let t = e ?? a.length;
				do {
					let e = c === 0 ? o[0] ?? r.initialPageParam : we(r, s);
					if (c > 0 && e == null) break;
					s = await d(s, e), c++;
				} while (c < t);
			}
			return s;
		};
		t.options.persister ? t.fetchFn = () => t.options.persister?.(l, {
			client: t.client,
			queryKey: t.queryKey,
			meta: t.options.meta,
			signal: t.signal
		}, n) : t.fetchFn = l;
	} };
}
function we(e, { pages: t, pageParams: n }) {
	let r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Te(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
function Ee(e, t) {
	return t ? we(e, t) != null : !1;
}
function De(e, t) {
	return !t || !e.getPreviousPageParam ? !1 : Te(e, t) != null;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/query.js
var Oe = class extends Se {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e) {
		super(), this.#s = !1, this.#o = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#i = e.client, this.#r = this.#i.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = je(this.options), this.state = e.state ?? this.#t, this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get queryType() {
		return this.#e;
	}
	get promise() {
		return this.#a?.promise;
	}
	setOptions(e) {
		if (this.options = {
			...this.#o,
			...e
		}, e?._type && (this.#e = e._type), this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
			let e = je(this.options);
			e.data !== void 0 && (this.setState(Ae(e.data, e.dataUpdatedAt)), this.#t = e);
		}
	}
	optionalRemove() {
		!this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
	}
	setData(e, t) {
		let n = se(this.state.data, e, this.options);
		return this.#l({
			data: n,
			type: "success",
			dataUpdatedAt: t?.updatedAt,
			manual: t?.manual
		}), n;
	}
	setState(e) {
		this.#l({
			type: "setState",
			state: e
		});
	}
	cancel(e) {
		let t = this.#a?.promise;
		return this.#a?.cancel(e), t ? t.then(E).catch(E) : Promise.resolve();
	}
	destroy() {
		super.destroy(), this.cancel({ silent: !0 });
	}
	get resetState() {
		return this.#t;
	}
	reset() {
		this.destroy(), this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((e) => j(e.options.enabled, this) !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ue || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => A(e.options.staleTime, this) === "static") : !1;
	}
	isStale() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(e = 0) {
		return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !k(this.state.dataUpdatedAt, e);
	}
	onFocus() {
		this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
	}
	onOnline() {
		this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
	}
	addObserver(e) {
		this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#r.notify({
			type: "observerAdded",
			query: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.observers.includes(e) && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (this.#a && (this.#s || this.#c() ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()), this.scheduleGc()), this.#r.notify({
			type: "observerRemoved",
			query: this,
			observer: e
		}));
	}
	getObserversCount() {
		return this.observers.length;
	}
	#c() {
		return this.state.fetchStatus === "paused" && this.state.status === "pending";
	}
	invalidate() {
		this.state.isInvalidated || this.#l({ type: "invalidate" });
	}
	async fetch(e, t) {
		if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
			if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
			else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
		}
		if (e && this.setOptions(e), !this.options.queryFn) {
			let e = this.observers.find((e) => e.options.queryFn);
			e && this.setOptions(e.options);
		}
		let n = new AbortController(), r = (e) => {
			Object.defineProperty(e, "signal", {
				enumerable: !0,
				get: () => (this.#s = !0, n.signal)
			});
		}, i = () => {
			let e = de(this.options, t), n = (() => {
				let e = {
					client: this.#i,
					queryKey: this.queryKey,
					meta: this.meta
				};
				return r(e), e;
			})();
			return this.#s = !1, this.options.persister ? this.options.persister(e, n, this) : e(n);
		}, a = (() => {
			let e = {
				fetchOptions: t,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#i,
				state: this.state,
				fetchFn: i
			};
			return r(e), e;
		})();
		(this.#e === "infinite" ? Ce(this.options.pages) : this.options.behavior)?.onFetch(a, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#l({
			type: "fetch",
			meta: a.fetchOptions?.meta
		}), this.#a = xe({
			initialPromise: t?.initialPromise,
			fn: a.fetchFn,
			onCancel: (e) => {
				e instanceof be && e.revert && this.setState({
					...this.#n,
					fetchStatus: "idle"
				}), n.abort();
			},
			onFail: (e, t) => {
				this.#l({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#l({ type: "pause" });
			},
			onContinue: () => {
				this.#l({ type: "continue" });
			},
			retry: a.options.retry,
			retryDelay: a.options.retryDelay,
			networkMode: a.options.networkMode,
			canRun: () => !0
		});
		try {
			let e = await this.#a.start();
			if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
			return this.setData(e), this.#r.config.onSuccess?.(e, this), this.#r.config.onSettled?.(e, this.state.error, this), e;
		} catch (e) {
			if (e instanceof be) {
				if (e.silent) return this.#a.promise;
				if (e.revert) {
					if (this.state.data === void 0) throw e;
					return this.state.data;
				}
			}
			throw this.#l({
				type: "error",
				error: e
			}), this.#r.config.onError?.(e, this), this.#r.config.onSettled?.(this.state.data, e, this), e;
		} finally {
			this.scheduleGc();
		}
	}
	#l(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					fetchFailureCount: e.failureCount,
					fetchFailureReason: e.error
				};
				case "pause": return {
					...t,
					fetchStatus: "paused"
				};
				case "continue": return {
					...t,
					fetchStatus: "fetching"
				};
				case "fetch": return {
					...t,
					...ke(t.data, this.options),
					fetchMeta: e.meta ?? null
				};
				case "success":
					let n = {
						...t,
						...Ae(e.data, e.dataUpdatedAt),
						dataUpdateCount: t.dataUpdateCount + 1,
						...!e.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					return this.#n = e.manual ? n : void 0, n;
				case "error":
					let r = e.error;
					return {
						...t,
						error: r,
						errorUpdateCount: t.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: t.fetchFailureCount + 1,
						fetchFailureReason: r,
						fetchStatus: "idle",
						status: "error",
						isInvalidated: !0
					};
				case "invalidate": return {
					...t,
					isInvalidated: !0
				};
				case "setState": return {
					...t,
					...e.state
				};
			}
		};
		this.state = t(this.state), R.batch(() => {
			this.observers.forEach((e) => {
				e.onQueryUpdate();
			}), this.#r.notify({
				query: this,
				type: "updated",
				action: e
			});
		});
	}
};
function ke(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: ye(t.networkMode) ? "fetching" : "paused",
		...e === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function Ae(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function je(e) {
	let t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? r ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "pending",
		fetchStatus: "idle"
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/mutation.js
var Me = class extends Se {
	#e;
	#t;
	#n;
	#r;
	constructor(e) {
		super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || Ne(), this.setOptions(e.options), this.scheduleGc();
	}
	setOptions(e) {
		this.options = e, this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(e) {
		this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#n.notify({
			type: "observerAdded",
			mutation: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.#t = this.#t.filter((t) => t !== e), this.scheduleGc(), this.#n.notify({
			type: "observerRemoved",
			mutation: this,
			observer: e
		});
	}
	optionalRemove() {
		this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this));
	}
	continue() {
		return this.#r?.continue() ?? this.execute(this.state.variables);
	}
	async execute(e) {
		let t = () => {
			this.#i({ type: "continue" });
		}, n = {
			client: this.#e,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		this.#r = xe({
			fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(/* @__PURE__ */ Error("No mutationFn found")),
			onFail: (e, t) => {
				this.#i({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#i({ type: "pause" });
			},
			onContinue: t,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#n.canRun(this)
		});
		let r = this.state.status === "pending", i = !this.#r.canStart();
		try {
			if (r) t();
			else {
				this.#i({
					type: "pending",
					variables: e,
					isPaused: i
				}), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
				let t = await this.options.onMutate?.(e, n);
				t !== this.state.context && this.#i({
					type: "pending",
					context: t,
					variables: e,
					isPaused: i
				});
			}
			let a = await this.#r.start();
			return await this.#n.config.onSuccess?.(a, e, this.state.context, this, n), await this.options.onSuccess?.(a, e, this.state.context, n), await this.#n.config.onSettled?.(a, null, this.state.variables, this.state.context, this, n), await this.options.onSettled?.(a, null, e, this.state.context, n), this.#i({
				type: "success",
				data: a
			}), a;
		} catch (t) {
			try {
				await this.#n.config.onError?.(t, e, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(void 0, t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			throw this.#i({
				type: "error",
				error: t
			}), t;
		} finally {
			this.#n.runNext(this);
		}
	}
	#i(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					failureCount: e.failureCount,
					failureReason: e.error
				};
				case "pause": return {
					...t,
					isPaused: !0
				};
				case "continue": return {
					...t,
					isPaused: !1
				};
				case "pending": return {
					...t,
					context: e.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: e.isPaused,
					status: "pending",
					variables: e.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...t,
					data: e.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: !1
				};
				case "error": return {
					...t,
					data: void 0,
					error: e.error,
					failureCount: t.failureCount + 1,
					failureReason: e.error,
					isPaused: !1,
					status: "error"
				};
			}
		};
		this.state = t(this.state), R.batch(() => {
			this.#t.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#n.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
};
function Ne() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/mutationCache.js
var Pe = class extends b {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#n = 0;
	}
	#e;
	#t;
	#n;
	build(e, t, n) {
		let r = new Me({
			client: e,
			mutationCache: this,
			mutationId: ++this.#n,
			options: e.defaultMutationOptions(t),
			state: n
		});
		return this.add(r), r;
	}
	add(e) {
		this.#e.add(e);
		let t = Fe(e);
		if (typeof t == "string") {
			let n = this.#t.get(t);
			n ? n.push(e) : this.#t.set(t, [e]);
		}
		this.notify({
			type: "added",
			mutation: e
		});
	}
	remove(e) {
		if (this.#e.delete(e)) {
			let t = Fe(e);
			if (typeof t == "string") {
				let n = this.#t.get(t);
				if (n) if (n.length > 1) {
					let t = n.indexOf(e);
					t !== -1 && n.splice(t, 1);
				} else n[0] === e && this.#t.delete(t);
			}
		}
		this.notify({
			type: "removed",
			mutation: e
		});
	}
	canRun(e) {
		let t = Fe(e);
		if (typeof t == "string") {
			let n = this.#t.get(t)?.find((e) => e.state.status === "pending");
			return !n || n === e;
		} else return !0;
	}
	runNext(e) {
		let t = Fe(e);
		return typeof t == "string" ? (this.#t.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		R.batch(() => {
			this.#e.forEach((e) => {
				this.notify({
					type: "removed",
					mutation: e
				});
			}), this.#e.clear(), this.#t.clear();
		});
	}
	getAll() {
		return Array.from(this.#e);
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => ee(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => ee(e, t));
	}
	notify(e) {
		R.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		let e = this.getAll().filter((e) => e.state.isPaused);
		return R.batch(() => Promise.all(e.map((e) => e.continue().catch(E))));
	}
};
function Fe(e) {
	return e.options.scope?.id;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/queryCache.js
var Ie = class extends b {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Map();
	}
	#e;
	build(e, t, n) {
		let r = t.queryKey, i = t.queryHash ?? te(r, t), a = this.get(i);
		return a || (a = new Oe({
			client: e,
			queryKey: r,
			queryHash: i,
			options: e.defaultQueryOptions(t),
			state: n,
			defaultOptions: e.getQueryDefaults(r)
		}), this.add(a)), a;
	}
	add(e) {
		this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
			type: "added",
			query: e
		}));
	}
	remove(e) {
		let t = this.#e.get(e.queryHash);
		t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
			type: "removed",
			query: e
		}));
	}
	clear() {
		R.batch(() => {
			this.getAll().forEach((e) => {
				this.remove(e);
			});
		});
	}
	get(e) {
		return this.#e.get(e);
	}
	getAll() {
		return [...this.#e.values()];
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => M(t, e));
	}
	findAll(e = {}) {
		let t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => M(e, t)) : t;
	}
	notify(e) {
		R.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		R.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		R.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
}, Le = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e = {}) {
		this.#e = e.queryCache || new Ie(), this.#t = e.mutationCache || new Pe(), this.#n = e.defaultOptions || {}, this.#r = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#a = 0;
	}
	mount() {
		this.#a++, this.#a === 1 && (this.#o = x.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onFocus());
		}), this.#s = _e.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onOnline());
		}));
	}
	unmount() {
		this.#a--, this.#a === 0 && (this.#o?.(), this.#o = void 0, this.#s?.(), this.#s = void 0);
	}
	isFetching(e) {
		return this.#e.findAll({
			...e,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(e) {
		return this.#t.findAll({
			...e,
			status: "pending"
		}).length;
	}
	getQueryData(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state.data;
	}
	ensureQueryData(e) {
		let t = this.defaultQueryOptions(e), n = this.#e.build(this, t), r = n.state.data;
		return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(A(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
	}
	getQueriesData(e) {
		return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
	}
	setQueryData(e, t, n) {
		let r = this.defaultQueryOptions({ queryKey: e }), i = this.#e.get(r.queryHash)?.state.data, a = D(t, i);
		if (a !== void 0) return this.#e.build(this, r).setData(a, {
			...n,
			manual: !0
		});
	}
	setQueriesData(e, t, n) {
		return R.batch(() => this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		let t = this.#e;
		R.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		let n = this.#e;
		return R.batch(() => (n.findAll(e).forEach((e) => {
			e.reset();
		}), this.refetchQueries({
			type: "active",
			...e
		}, t)));
	}
	cancelQueries(e, t = {}) {
		let n = {
			revert: !0,
			...t
		}, r = R.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(r).then(E).catch(E);
	}
	invalidateQueries(e, t = {}) {
		return R.batch(() => (this.#e.findAll(e).forEach((e) => {
			e.invalidate();
		}), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
			...e,
			type: e?.refetchType ?? e?.type ?? "active"
		}, t)));
	}
	refetchQueries(e, t = {}) {
		let n = {
			...t,
			cancelRefetch: t.cancelRefetch ?? !0
		}, r = R.batch(() => this.#e.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(E)), e.state.fetchStatus === "paused" ? Promise.resolve() : t;
		}));
		return Promise.all(r).then(E);
	}
	fetchQuery(e) {
		let t = this.defaultQueryOptions(e);
		t.retry === void 0 && (t.retry = !1);
		let n = this.#e.build(this, t);
		return n.isStaleByTime(A(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(E).catch(E);
	}
	fetchInfiniteQuery(e) {
		return e._type = "infinite", this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(E).catch(E);
	}
	ensureInfiniteQueryData(e) {
		return e._type = "infinite", this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return _e.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
	}
	getQueryCache() {
		return this.#e;
	}
	getMutationCache() {
		return this.#t;
	}
	getDefaultOptions() {
		return this.#n;
	}
	setDefaultOptions(e) {
		this.#n = e;
	}
	setQueryDefaults(e, t) {
		this.#r.set(N(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		let t = [...this.#r.values()], n = {};
		return t.forEach((t) => {
			ne(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#i.set(N(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		let t = [...this.#i.values()], n = {};
		return t.forEach((t) => {
			ne(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	defaultQueryOptions(e) {
		if (e._defaulted) return e;
		let t = {
			...this.#n.queries,
			...this.getQueryDefaults(e.queryKey),
			...e,
			_defaulted: !0
		};
		return t.queryHash ||= te(t.queryKey, t), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === ue && (t.enabled = !1), t;
	}
	defaultMutationOptions(e) {
		return e?._defaulted ? e : {
			...this.#n.mutations,
			...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
			...e,
			_defaulted: !0
		};
	}
	clear() {
		this.#e.clear(), this.#t.clear();
	}
}, Re = /* @__PURE__ */ n(((e) => {
	var n = (s(), t(m)), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function l(e, t, n) {
		var i, s = {}, l = null, u = null;
		for (i in n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) a.call(t, i) && !c.hasOwnProperty(i) && (s[i] = t[i]);
		if (e && e.defaultProps) for (i in t = e.defaultProps, t) s[i] === void 0 && (s[i] = t[i]);
		return {
			$$typeof: r,
			type: e,
			key: l,
			ref: u,
			props: s,
			_owner: o.current
		};
	}
	e.Fragment = i, e.jsx = l, e.jsxs = l;
})), ze = /* @__PURE__ */ n(((e, t) => {
	t.exports = Re();
}));
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
s();
var Be = ze(), Ve = o(void 0), He = (e) => {
	let t = a(Ve);
	if (e) return e;
	if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
	return t;
}, Ue = ({ client: e, children: t }) => (_(() => (e.mount(), () => {
	e.unmount();
}), [e]), /* @__PURE__ */ (0, Be.jsx)(Ve.Provider, {
	value: e,
	children: t
})), We = window.adminXQueryClient || new Le({ defaultOptions: { queries: {
	refetchOnWindowFocus: !1,
	staleTime: 60 * 1e3 * 5,
	gcTime: 60 * 1e3 * 10,
	retry: !1,
	networkMode: "always"
} } });
window.__TANSTACK_QUERY_CLIENT__ = We, window.adminXQueryClient || (window.adminXQueryClient = We);
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/is.js
var Ge = Object.prototype.toString;
function Ke(e) {
	switch (Ge.call(e)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]": return !0;
		default: return st(e, Error);
	}
}
function qe(e, t) {
	return Ge.call(e) === `[object ${t}]`;
}
function Je(e) {
	return qe(e, "ErrorEvent");
}
function Ye(e) {
	return qe(e, "DOMError");
}
function Xe(e) {
	return qe(e, "DOMException");
}
function Ze(e) {
	return qe(e, "String");
}
function Qe(e) {
	return typeof e == "object" && !!e && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function $e(e) {
	return e === null || Qe(e) || typeof e != "object" && typeof e != "function";
}
function et(e) {
	return qe(e, "Object");
}
function tt(e) {
	return typeof Event < "u" && st(e, Event);
}
function nt(e) {
	return typeof Element < "u" && st(e, Element);
}
function rt(e) {
	return qe(e, "RegExp");
}
function it(e) {
	return !!(e && e.then && typeof e.then == "function");
}
function at(e) {
	return et(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function ot(e) {
	return typeof e == "number" && e !== e;
}
function st(e, t) {
	try {
		return e instanceof t;
	} catch {
		return !1;
	}
}
function ct(e) {
	return !!(typeof e == "object" && e && (e.__isVue || e._isVue));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/string.js
function lt(e, t = 0) {
	return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function ut(e, t) {
	if (!Array.isArray(e)) return "";
	let n = [];
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		try {
			ct(r) ? n.push("[VueViewModel]") : n.push(String(r));
		} catch {
			n.push("[value cannot be serialized]");
		}
	}
	return n.join(t);
}
function dt(e, t, n = !1) {
	return Ze(e) ? rt(t) ? t.test(e) : Ze(t) ? n ? e === t : e.includes(t) : !1 : !1;
}
function ft(e, t = [], n = !1) {
	return t.some((t) => dt(e, t, n));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/aggregate-errors.js
function pt(e, t, n = 250, r, i, a, o) {
	if (!a.exception || !a.exception.values || !o || !st(o.originalException, Error)) return;
	let s = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0;
	s && (a.exception.values = _t(mt(e, t, i, o.originalException, r, a.exception.values, s, 0), n));
}
function mt(e, t, n, r, i, a, o, s) {
	if (a.length >= n + 1) return a;
	let c = [...a];
	if (st(r[i], Error)) {
		ht(o, s);
		let a = e(t, r[i]), l = c.length;
		gt(a, i, l, s), c = mt(e, t, n, r[i], i, [a, ...c], a, l);
	}
	return Array.isArray(r.errors) && r.errors.forEach((r, a) => {
		if (st(r, Error)) {
			ht(o, s);
			let l = e(t, r), u = c.length;
			gt(l, `errors[${a}]`, u, s), c = mt(e, t, n, r, i, [l, ...c], l, u);
		}
	}), c;
}
function ht(e, t) {
	e.mechanism = e.mechanism || {
		type: "generic",
		handled: !0
	}, e.mechanism = {
		...e.mechanism,
		...e.type === "AggregateError" && { is_exception_group: !0 },
		exception_id: t
	};
}
function gt(e, t, n, r) {
	e.mechanism = e.mechanism || {
		type: "generic",
		handled: !0
	}, e.mechanism = {
		...e.mechanism,
		type: "chained",
		source: t,
		exception_id: n,
		parent_id: r
	};
}
function _t(e, t) {
	return e.map((e) => (e.value &&= lt(e.value, t), e));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/worldwide.js
function vt(e) {
	return e && e.Math == Math ? e : void 0;
}
var z = typeof globalThis == "object" && vt(globalThis) || typeof window == "object" && vt(window) || typeof self == "object" && vt(self) || typeof global == "object" && vt(global) || (function() {
	return this;
})() || {};
function yt() {
	return z;
}
function bt(e, t, n) {
	let r = n || z, i = r.__SENTRY__ = r.__SENTRY__ || {};
	return i[e] || (i[e] = t());
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/browser.js
var xt = yt(), St = 80;
function Ct(e, t = {}) {
	if (!e) return "<unknown>";
	try {
		let n = e, r = [], i = 0, a = 0, o, s = Array.isArray(t) ? t : t.keyAttrs, c = !Array.isArray(t) && t.maxStringLength || St;
		for (; n && i++ < 5 && (o = wt(n, s), !(o === "html" || i > 1 && a + r.length * 3 + o.length >= c));) r.push(o), a += o.length, n = n.parentNode;
		return r.reverse().join(" > ");
	} catch {
		return "<unknown>";
	}
}
function wt(e, t) {
	let n = e, r = [], i, a, o, s, c;
	if (!n || !n.tagName) return "";
	if (xt.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent) return n.dataset.sentryComponent;
	r.push(n.tagName.toLowerCase());
	let l = t && t.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null;
	if (l && l.length) l.forEach((e) => {
		r.push(`[${e[0]}="${e[1]}"]`);
	});
	else if (n.id && r.push(`#${n.id}`), i = n.className, i && Ze(i)) for (a = i.split(/\s+/), c = 0; c < a.length; c++) r.push(`.${a[c]}`);
	let u = [
		"aria-label",
		"type",
		"name",
		"title",
		"alt"
	];
	for (c = 0; c < u.length; c++) o = u[c], s = n.getAttribute(o), s && r.push(`[${o}="${s}"]`);
	return r.join("");
}
function Tt() {
	try {
		return xt.document.location.href;
	} catch {
		return "";
	}
}
function Et(e) {
	if (!xt.HTMLElement) return null;
	let t = e;
	for (let e = 0; e < 5; e++) {
		if (!t) return null;
		if (t instanceof HTMLElement && t.dataset.sentryComponent) return t.dataset.sentryComponent;
		t = t.parentNode;
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/debug-build.js
var Dt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Ot = "Sentry Logger ", kt = [
	"debug",
	"info",
	"warn",
	"error",
	"log",
	"assert",
	"trace"
], At = {};
function jt(e) {
	if (!("console" in z)) return e();
	let t = z.console, n = {}, r = Object.keys(At);
	r.forEach((e) => {
		let r = At[e];
		n[e] = t[e], t[e] = r;
	});
	try {
		return e();
	} finally {
		r.forEach((e) => {
			t[e] = n[e];
		});
	}
}
function Mt() {
	let e = !1, t = {
		enable: () => {
			e = !0;
		},
		disable: () => {
			e = !1;
		},
		isEnabled: () => e
	};
	return Dt ? kt.forEach((n) => {
		t[n] = (...t) => {
			e && jt(() => {
				z.console[n](`${Ot}[${n}]:`, ...t);
			});
		};
	}) : kt.forEach((e) => {
		t[e] = () => void 0;
	}), t;
}
var B = Mt(), Nt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Pt(e) {
	return e === "http" || e === "https";
}
function Ft(e, t = !1) {
	let { host: n, path: r, pass: i, port: a, projectId: o, protocol: s, publicKey: c } = e;
	return `${s}://${c}${t && i ? `:${i}` : ""}@${n}${a ? `:${a}` : ""}/${r && `${r}/`}${o}`;
}
function It(e) {
	let t = Nt.exec(e);
	if (!t) {
		jt(() => {
			console.error(`Invalid Sentry Dsn: ${e}`);
		});
		return;
	}
	let [n, r, i = "", a, o = "", s] = t.slice(1), c = "", l = s, u = l.split("/");
	if (u.length > 1 && (c = u.slice(0, -1).join("/"), l = u.pop()), l) {
		let e = l.match(/^\d+/);
		e && (l = e[0]);
	}
	return Lt({
		host: a,
		pass: i,
		path: c,
		projectId: l,
		port: o,
		protocol: n,
		publicKey: r
	});
}
function Lt(e) {
	return {
		protocol: e.protocol,
		publicKey: e.publicKey || "",
		pass: e.pass || "",
		host: e.host,
		port: e.port || "",
		path: e.path || "",
		projectId: e.projectId
	};
}
function Rt(e) {
	if (!Dt) return !0;
	let { port: t, projectId: n, protocol: r } = e;
	return [
		"protocol",
		"publicKey",
		"host",
		"projectId"
	].find((t) => e[t] ? !1 : (B.error(`Invalid Sentry Dsn: ${t} missing`), !0)) ? !1 : n.match(/^\d+$/) ? Pt(r) ? t && isNaN(parseInt(t, 10)) ? (B.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (B.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : (B.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function zt(e) {
	let t = typeof e == "string" ? It(e) : Lt(e);
	if (!(!t || !Rt(t))) return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/object.js
function V(e, t, n) {
	if (!(t in e)) return;
	let r = e[t], i = n(r);
	typeof i == "function" && Vt(i, r), e[t] = i;
}
function Bt(e, t, n) {
	try {
		Object.defineProperty(e, t, {
			value: n,
			writable: !0,
			configurable: !0
		});
	} catch {
		Dt && B.log(`Failed to add non-enumerable property "${t}" to object`, e);
	}
}
function Vt(e, t) {
	try {
		e.prototype = t.prototype = t.prototype || {}, Bt(e, "__sentry_original__", t);
	} catch {}
}
function Ht(e) {
	return e.__sentry_original__;
}
function Ut(e) {
	if (Ke(e)) return {
		message: e.message,
		name: e.name,
		stack: e.stack,
		...Gt(e)
	};
	if (tt(e)) {
		let t = {
			type: e.type,
			target: Wt(e.target),
			currentTarget: Wt(e.currentTarget),
			...Gt(e)
		};
		return typeof CustomEvent < "u" && st(e, CustomEvent) && (t.detail = e.detail), t;
	} else return e;
}
function Wt(e) {
	try {
		return nt(e) ? Ct(e) : Object.prototype.toString.call(e);
	} catch {
		return "<unknown>";
	}
}
function Gt(e) {
	if (typeof e == "object" && e) {
		let t = {};
		for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t;
	} else return {};
}
function Kt(e, t = 40) {
	let n = Object.keys(Ut(e));
	if (n.sort(), !n.length) return "[object has no keys]";
	if (n[0].length >= t) return lt(n[0], t);
	for (let e = n.length; e > 0; e--) {
		let r = n.slice(0, e).join(", ");
		if (!(r.length > t)) return e === n.length ? r : lt(r, t);
	}
	return "";
}
function qt(e) {
	return Jt(e, /* @__PURE__ */ new Map());
}
function Jt(e, t) {
	if (Yt(e)) {
		let n = t.get(e);
		if (n !== void 0) return n;
		let r = {};
		t.set(e, r);
		for (let n of Object.keys(e)) e[n] !== void 0 && (r[n] = Jt(e[n], t));
		return r;
	}
	if (Array.isArray(e)) {
		let n = t.get(e);
		if (n !== void 0) return n;
		let r = [];
		return t.set(e, r), e.forEach((e) => {
			r.push(Jt(e, t));
		}), r;
	}
	return e;
}
function Yt(e) {
	if (!et(e)) return !1;
	try {
		let t = Object.getPrototypeOf(e).constructor.name;
		return !t || t === "Object";
	} catch {
		return !0;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/stacktrace.js
var Xt = "<anonymous>";
function Zt(e) {
	try {
		return !e || typeof e != "function" ? Xt : e.name || Xt;
	} catch {
		return Xt;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/_handlers.js
var Qt = {}, $t = {};
function en(e, t) {
	Qt[e] = Qt[e] || [], Qt[e].push(t);
}
function tn(e, t) {
	$t[e] || (t(), $t[e] = !0);
}
function nn(e, t) {
	let n = e && Qt[e];
	if (n) for (let r of n) try {
		r(t);
	} catch (t) {
		Dt && B.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${Zt(r)}\nError:`, t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/console.js
function rn(e) {
	let t = "console";
	en(t, e), tn(t, an);
}
function an() {
	"console" in z && kt.forEach(function(e) {
		e in z.console && V(z.console, e, function(t) {
			return At[e] = t, function(...t) {
				nn("console", {
					args: t,
					level: e
				});
				let n = At[e];
				n && n.apply(z.console, t);
			};
		});
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/misc.js
function on() {
	let e = z, t = e.crypto || e.msCrypto, n = () => Math.random() * 16;
	try {
		if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
		t && t.getRandomValues && (n = () => {
			let e = /* @__PURE__ */ new Uint8Array(1);
			return t.getRandomValues(e), e[0];
		});
	} catch {}
	return "10000000100040008000100000000000".replace(/[018]/g, (e) => (e ^ (n() & 15) >> e / 4).toString(16));
}
function sn(e) {
	return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function cn(e) {
	let { message: t, event_id: n } = e;
	if (t) return t;
	let r = sn(e);
	return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function ln(e, t, n) {
	let r = e.exception = e.exception || {}, i = r.values = r.values || [], a = i[0] = i[0] || {};
	a.value ||= t || "", a.type ||= n || "Error";
}
function un(e, t) {
	let n = sn(e);
	if (!n) return;
	let r = {
		type: "generic",
		handled: !0
	}, i = n.mechanism;
	if (n.mechanism = {
		...r,
		...i,
		...t
	}, t && "data" in t) {
		let e = {
			...i && i.data,
			...t.data
		};
		n.mechanism.data = e;
	}
}
function dn(e) {
	return Array.isArray(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/dom.js
var fn = z, pn = 1e3, mn, hn, gn;
function _n(e) {
	en("dom", e), tn("dom", vn);
}
function vn() {
	if (!fn.document) return;
	let e = nn.bind(null, "dom"), t = xn(e, !0);
	fn.document.addEventListener("click", t, !1), fn.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((t) => {
		let n = fn[t] && fn[t].prototype;
		!n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (V(n, "addEventListener", function(t) {
			return function(n, r, i) {
				if (n === "click" || n == "keypress") try {
					let r = this, a = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}, o = a[n] = a[n] || { refCount: 0 };
					if (!o.handler) {
						let r = xn(e);
						o.handler = r, t.call(this, n, r, i);
					}
					o.refCount++;
				} catch {}
				return t.call(this, n, r, i);
			};
		}), V(n, "removeEventListener", function(e) {
			return function(t, n, r) {
				if (t === "click" || t == "keypress") try {
					let n = this, i = n.__sentry_instrumentation_handlers__ || {}, a = i[t];
					a && (a.refCount--, a.refCount <= 0 && (e.call(this, t, a.handler, r), a.handler = void 0, delete i[t]), Object.keys(i).length === 0 && delete n.__sentry_instrumentation_handlers__);
				} catch {}
				return e.call(this, t, n, r);
			};
		}));
	});
}
function yn(e) {
	if (e.type !== hn) return !1;
	try {
		if (!e.target || e.target._sentryId !== gn) return !1;
	} catch {}
	return !0;
}
function bn(e, t) {
	return e === "keypress" ? !t || !t.tagName ? !0 : !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) : !1;
}
function xn(e, t = !1) {
	return (n) => {
		if (!n || n._sentryCaptured) return;
		let r = Sn(n);
		if (bn(n.type, r)) return;
		Bt(n, "_sentryCaptured", !0), r && !r._sentryId && Bt(r, "_sentryId", on());
		let i = n.type === "keypress" ? "input" : n.type;
		yn(n) || (e({
			event: n,
			name: i,
			global: t
		}), hn = n.type, gn = r ? r._sentryId : void 0), clearTimeout(mn), mn = fn.setTimeout(() => {
			gn = void 0, hn = void 0;
		}, pn);
	};
}
function Sn(e) {
	try {
		return e.target;
	} catch {
		return null;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/supports.js
var Cn = yt();
function wn() {
	if (!("fetch" in Cn)) return !1;
	try {
		return new Headers(), new Request("http://www.example.com"), new Response(), !0;
	} catch {
		return !1;
	}
}
function Tn(e) {
	return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function En() {
	if (typeof EdgeRuntime == "string") return !0;
	if (!wn()) return !1;
	if (Tn(Cn.fetch)) return !0;
	let e = !1, t = Cn.document;
	if (t && typeof t.createElement == "function") try {
		let n = t.createElement("iframe");
		n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = Tn(n.contentWindow.fetch)), t.head.removeChild(n);
	} catch (e) {
		Dt && B.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/fetch.js
function Dn(e) {
	let t = "fetch";
	en(t, e), tn(t, On);
}
function On() {
	En() && V(z, "fetch", function(e) {
		return function(...t) {
			let { method: n, url: r } = jn(t), i = {
				args: t,
				fetchData: {
					method: n,
					url: r
				},
				startTimestamp: Date.now()
			};
			return nn("fetch", { ...i }), e.apply(z, t).then((e) => (nn("fetch", {
				...i,
				endTimestamp: Date.now(),
				response: e
			}), e), (e) => {
				throw nn("fetch", {
					...i,
					endTimestamp: Date.now(),
					error: e
				}), e;
			});
		};
	});
}
function kn(e, t) {
	return !!e && typeof e == "object" && !!e[t];
}
function An(e) {
	return typeof e == "string" ? e : e ? kn(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
function jn(e) {
	if (e.length === 0) return {
		method: "GET",
		url: ""
	};
	if (e.length === 2) {
		let [t, n] = e;
		return {
			url: An(t),
			method: kn(n, "method") ? String(n.method).toUpperCase() : "GET"
		};
	}
	let t = e[0];
	return {
		url: An(t),
		method: kn(t, "method") ? String(t.method).toUpperCase() : "GET"
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/globalError.js
var Mn = null;
function Nn(e) {
	let t = "error";
	en(t, e), tn(t, Pn);
}
function Pn() {
	Mn = z.onerror, z.onerror = function(e, t, n, r, i) {
		return nn("error", {
			column: r,
			error: i,
			line: n,
			msg: e,
			url: t
		}), Mn && !Mn.__SENTRY_LOADER__ ? Mn.apply(this, arguments) : !1;
	}, z.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/globalUnhandledRejection.js
var Fn = null;
function In(e) {
	let t = "unhandledrejection";
	en(t, e), tn(t, Ln);
}
function Ln() {
	Fn = z.onunhandledrejection, z.onunhandledrejection = function(e) {
		return nn("unhandledrejection", e), Fn && !Fn.__SENTRY_LOADER__ ? Fn.apply(this, arguments) : !0;
	}, z.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/vendor/supportsHistory.js
var Rn = yt();
function zn() {
	let e = Rn.chrome, t = e && e.app && e.app.runtime, n = "history" in Rn && !!Rn.history.pushState && !!Rn.history.replaceState;
	return !t && n;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/history.js
var Bn = z, Vn;
function Hn(e) {
	let t = "history";
	en(t, e), tn(t, Un);
}
function Un() {
	if (!zn()) return;
	let e = Bn.onpopstate;
	Bn.onpopstate = function(...t) {
		let n = Bn.location.href, r = Vn;
		if (Vn = n, nn("history", {
			from: r,
			to: n
		}), e) try {
			return e.apply(this, t);
		} catch {}
	};
	function t(e) {
		return function(...t) {
			let n = t.length > 2 ? t[2] : void 0;
			if (n) {
				let e = Vn, t = String(n);
				Vn = t, nn("history", {
					from: e,
					to: t
				});
			}
			return e.apply(this, t);
		};
	}
	V(Bn.history, "pushState", t), V(Bn.history, "replaceState", t);
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/xhr.js
var Wn = z, Gn = "__sentry_xhr_v3__";
function Kn(e) {
	en("xhr", e), tn("xhr", qn);
}
function qn() {
	if (!Wn.XMLHttpRequest) return;
	let e = XMLHttpRequest.prototype;
	V(e, "open", function(e) {
		return function(...t) {
			let n = Date.now(), r = Ze(t[0]) ? t[0].toUpperCase() : void 0, i = Jn(t[1]);
			if (!r || !i) return e.apply(this, t);
			this[Gn] = {
				method: r,
				url: i,
				request_headers: {}
			}, r === "POST" && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
			let a = () => {
				let e = this[Gn];
				if (e && this.readyState === 4) {
					try {
						e.status_code = this.status;
					} catch {}
					nn("xhr", {
						args: [r, i],
						endTimestamp: Date.now(),
						startTimestamp: n,
						xhr: this
					});
				}
			};
			return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? V(this, "onreadystatechange", function(e) {
				return function(...t) {
					return a(), e.apply(this, t);
				};
			}) : this.addEventListener("readystatechange", a), V(this, "setRequestHeader", function(e) {
				return function(...t) {
					let [n, r] = t, i = this[Gn];
					return i && Ze(n) && Ze(r) && (i.request_headers[n.toLowerCase()] = r), e.apply(this, t);
				};
			}), e.apply(this, t);
		};
	}), V(e, "send", function(e) {
		return function(...t) {
			let n = this[Gn];
			return n ? (t[0] !== void 0 && (n.body = t[0]), nn("xhr", {
				args: [n.method, n.url],
				startTimestamp: Date.now(),
				xhr: this
			}), e.apply(this, t)) : e.apply(this, t);
		};
	});
}
function Jn(e) {
	if (Ze(e)) return e;
	try {
		return e.toString();
	} catch {}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/memo.js
function Yn() {
	let e = typeof WeakSet == "function", t = e ? /* @__PURE__ */ new WeakSet() : [];
	function n(n) {
		if (e) return t.has(n) ? !0 : (t.add(n), !1);
		for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
		return t.push(n), !1;
	}
	function r(n) {
		if (e) t.delete(n);
		else for (let e = 0; e < t.length; e++) if (t[e] === n) {
			t.splice(e, 1);
			break;
		}
	}
	return [n, r];
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/normalize.js
function Xn(e, t = 100, n = Infinity) {
	try {
		return Qn("", e, t, n);
	} catch (e) {
		return { ERROR: `**non-serializable** (${e})` };
	}
}
function Zn(e, t = 3, n = 100 * 1024) {
	let r = Xn(e, t);
	return nr(r) > n ? Zn(e, t - 1, n) : r;
}
function Qn(e, t, n = Infinity, r = Infinity, i = Yn()) {
	let [a, o] = i;
	if (t == null || [
		"number",
		"boolean",
		"string"
	].includes(typeof t) && !ot(t)) return t;
	let s = $n(e, t);
	if (!s.startsWith("[object ")) return s;
	if (t.__sentry_skip_normalization__) return t;
	let c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
	if (c === 0) return s.replace("object ", "");
	if (a(t)) return "[Circular ~]";
	let l = t;
	if (l && typeof l.toJSON == "function") try {
		return Qn("", l.toJSON(), c - 1, r, i);
	} catch {}
	let u = Array.isArray(t) ? [] : {}, d = 0, f = Ut(t);
	for (let e in f) {
		if (!Object.prototype.hasOwnProperty.call(f, e)) continue;
		if (d >= r) {
			u[e] = "[MaxProperties ~]";
			break;
		}
		let t = f[e];
		u[e] = Qn(e, t, c - 1, r, i), d++;
	}
	return o(t), u;
}
function $n(e, t) {
	try {
		if (e === "domain" && t && typeof t == "object" && t._events) return "[Domain]";
		if (e === "domainEmitter") return "[DomainEmitter]";
		if (typeof global < "u" && t === global) return "[Global]";
		if (typeof window < "u" && t === window) return "[Window]";
		if (typeof document < "u" && t === document) return "[Document]";
		if (ct(t)) return "[VueViewModel]";
		if (at(t)) return "[SyntheticEvent]";
		if (typeof t == "number" && t !== t) return "[NaN]";
		if (typeof t == "function") return `[Function: ${Zt(t)}]`;
		if (typeof t == "symbol") return `[${String(t)}]`;
		if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
		let n = er(t);
		return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
	} catch (e) {
		return `**non-serializable** (${e})`;
	}
}
function er(e) {
	let t = Object.getPrototypeOf(e);
	return t ? t.constructor.name : "null prototype";
}
function tr(e) {
	return ~-encodeURI(e).split(/%..|./).length;
}
function nr(e) {
	return tr(JSON.stringify(e));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/syncpromise.js
var rr;
(function(e) {
	e[e.PENDING = 0] = "PENDING", e[e.RESOLVED = 1] = "RESOLVED", e[e.REJECTED = 2] = "REJECTED";
})(rr ||= {});
var ir = class e {
	constructor(t) {
		e.prototype.__init.call(this), e.prototype.__init2.call(this), e.prototype.__init3.call(this), e.prototype.__init4.call(this), this._state = rr.PENDING, this._handlers = [];
		try {
			t(this._resolve, this._reject);
		} catch (e) {
			this._reject(e);
		}
	}
	then(t, n) {
		return new e((e, r) => {
			this._handlers.push([
				!1,
				(n) => {
					if (!t) e(n);
					else try {
						e(t(n));
					} catch (e) {
						r(e);
					}
				},
				(t) => {
					if (!n) r(t);
					else try {
						e(n(t));
					} catch (e) {
						r(e);
					}
				}
			]), this._executeHandlers();
		});
	}
	catch(e) {
		return this.then((e) => e, e);
	}
	finally(t) {
		return new e((e, n) => {
			let r, i;
			return this.then((e) => {
				i = !1, r = e, t && t();
			}, (e) => {
				i = !0, r = e, t && t();
			}).then(() => {
				if (i) {
					n(r);
					return;
				}
				e(r);
			});
		});
	}
	__init() {
		this._resolve = (e) => {
			this._setResult(rr.RESOLVED, e);
		};
	}
	__init2() {
		this._reject = (e) => {
			this._setResult(rr.REJECTED, e);
		};
	}
	__init3() {
		this._setResult = (e, t) => {
			if (this._state === rr.PENDING) {
				if (it(t)) {
					t.then(this._resolve, this._reject);
					return;
				}
				this._state = e, this._value = t, this._executeHandlers();
			}
		};
	}
	__init4() {
		this._executeHandlers = () => {
			if (this._state === rr.PENDING) return;
			let e = this._handlers.slice();
			this._handlers = [], e.forEach((e) => {
				e[0] ||= (this._state === rr.RESOLVED && e[1](this._value), this._state === rr.REJECTED && e[2](this._value), !0);
			});
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/url.js
function ar(e) {
	if (!e) return {};
	let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
	if (!t) return {};
	let n = t[6] || "", r = t[8] || "";
	return {
		host: t[4],
		path: t[5],
		protocol: t[2],
		search: n,
		hash: r,
		relative: t[5] + n + r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/severity.js
var or = [
	"fatal",
	"error",
	"warning",
	"log",
	"info",
	"debug"
];
function sr(e) {
	return e === "warn" ? "warning" : or.includes(e) ? e : "log";
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/time.js
var cr = 1e3;
function lr() {
	return Date.now() / cr;
}
function ur() {
	let { performance: e } = z;
	if (!e || !e.now) return lr;
	let t = Date.now() - e.now(), n = e.timeOrigin == null ? t : e.timeOrigin;
	return () => (n + e.now()) / cr;
}
var dr = ur();
(() => {
	let { performance: e } = z;
	if (!e || !e.now) return;
	let t = 3600 * 1e3, n = e.now(), r = Date.now(), i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t, a = i < t, o = e.timing && e.timing.navigationStart, s = typeof o == "number" ? Math.abs(o + n - r) : t;
	return a || s < t ? i <= s ? e.timeOrigin : o : r;
})();
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/debug-build.js
var fr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, pr = "production";
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/eventProcessors.js
function mr() {
	return bt("globalEventProcessors", () => []);
}
function hr(e, t, n, r = 0) {
	return new ir((i, a) => {
		let o = e[r];
		if (t === null || typeof o != "function") i(t);
		else {
			let s = o({ ...t }, n);
			fr && o.id && s === null && B.log(`Event processor "${o.id}" dropped event`), it(s) ? s.then((t) => hr(e, t, n, r + 1).then(i)).then(null, a) : hr(e, s, n, r + 1).then(i).then(null, a);
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/session.js
function gr(e) {
	let t = dr(), n = {
		sid: on(),
		init: !0,
		timestamp: t,
		started: t,
		duration: 0,
		status: "ok",
		errors: 0,
		ignoreDuration: !1,
		toJSON: () => yr(n)
	};
	return e && _r(n, e), n;
}
function _r(e, t = {}) {
	if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || dr(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : on()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
	else if (typeof t.duration == "number") e.duration = t.duration;
	else {
		let t = e.timestamp - e.started;
		e.duration = t >= 0 ? t : 0;
	}
	t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
function vr(e, t) {
	let n = {};
	t ? n = { status: t } : e.status === "ok" && (n = { status: "exited" }), _r(e, n);
}
function yr(e) {
	return qt({
		sid: `${e.sid}`,
		init: e.init,
		started: (/* @__PURE__ */ new Date(e.started * 1e3)).toISOString(),
		timestamp: (/* @__PURE__ */ new Date(e.timestamp * 1e3)).toISOString(),
		status: e.status,
		errors: e.errors,
		did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
		duration: e.duration,
		abnormal_mechanism: e.abnormal_mechanism,
		attrs: {
			release: e.release,
			environment: e.environment,
			ip_address: e.ipAddress,
			user_agent: e.userAgent
		}
	});
}
function br(e) {
	let { spanId: t, traceId: n } = e.spanContext(), { data: r, op: i, parent_span_id: a, status: o, tags: s, origin: c } = xr(e);
	return qt({
		data: r,
		op: i,
		parent_span_id: a,
		span_id: t,
		status: o,
		tags: s,
		trace_id: n,
		origin: c
	});
}
function xr(e) {
	return Sr(e) ? e.getSpanJSON() : typeof e.toJSON == "function" ? e.toJSON() : {};
}
function Sr(e) {
	return typeof e.getSpanJSON == "function";
}
function Cr(e) {
	let { traceFlags: t } = e.spanContext();
	return !!(t & 1);
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/utils/prepareEvent.js
function wr(e) {
	if (e) return Tr(e) || Dr(e) ? { captureContext: e } : e;
}
function Tr(e) {
	return e instanceof Wr || typeof e == "function";
}
var Er = [
	"user",
	"level",
	"extra",
	"contexts",
	"tags",
	"fingerprint",
	"requestSession",
	"propagationContext"
];
function Dr(e) {
	return Object.keys(e).some((e) => Er.includes(e));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/exports.js
function Or(e, t) {
	return Zr().captureException(e, wr(t));
}
function kr(e, t) {
	let n = typeof t == "string" ? t : void 0, r = typeof t == "string" ? void 0 : { captureContext: t };
	return Zr().captureMessage(e, n, r);
}
function Ar(e, t) {
	return Zr().captureEvent(e, t);
}
function jr(e, t) {
	Zr().addBreadcrumb(e, t);
}
function Mr(...e) {
	let t = Zr();
	if (e.length === 2) {
		let [n, r] = e;
		return n ? t.withScope(() => (t.getStackTop().scope = n, r(n))) : t.withScope(r);
	}
	return t.withScope(e[0]);
}
function H() {
	return Zr().getClient();
}
function Nr() {
	return Zr().getScope();
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/utils/getRootSpan.js
function Pr(e) {
	return e.transaction;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/tracing/dynamicSamplingContext.js
function Fr(e, t, n) {
	let r = t.getOptions(), { publicKey: i } = t.getDsn() || {}, { segment: a } = n && n.getUser() || {}, o = qt({
		environment: r.environment || "production",
		release: r.release,
		user_segment: a,
		public_key: i,
		trace_id: e
	});
	return t.emit && t.emit("createDsc", o), o;
}
function Ir(e) {
	let t = H();
	if (!t) return {};
	let n = Fr(xr(e).trace_id || "", t, Nr()), r = Pr(e);
	if (!r) return n;
	let i = r && r._frozenDynamicSamplingContext;
	if (i) return i;
	let { sampleRate: a, source: o } = r.metadata;
	a != null && (n.sample_rate = `${a}`);
	let s = xr(r);
	return o && o !== "url" && (n.transaction = s.description), n.sampled = String(Cr(r)), t.emit && t.emit("createDsc", n), n;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/utils/applyScopeDataToEvent.js
function Lr(e, t) {
	let { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: a } = t;
	Rr(e, t), r && Vr(e, r), Hr(e, n), zr(e, i), Br(e, a);
}
function Rr(e, t) {
	let { extra: n, tags: r, user: i, contexts: a, level: o, transactionName: s } = t, c = qt(n);
	c && Object.keys(c).length && (e.extra = {
		...c,
		...e.extra
	});
	let l = qt(r);
	l && Object.keys(l).length && (e.tags = {
		...l,
		...e.tags
	});
	let u = qt(i);
	u && Object.keys(u).length && (e.user = {
		...u,
		...e.user
	});
	let d = qt(a);
	d && Object.keys(d).length && (e.contexts = {
		...d,
		...e.contexts
	}), o && (e.level = o), s && (e.transaction = s);
}
function zr(e, t) {
	let n = [...e.breadcrumbs || [], ...t];
	e.breadcrumbs = n.length ? n : void 0;
}
function Br(e, t) {
	e.sdkProcessingMetadata = {
		...e.sdkProcessingMetadata,
		...t
	};
}
function Vr(e, t) {
	e.contexts = {
		trace: br(t),
		...e.contexts
	};
	let n = Pr(t);
	if (n) {
		e.sdkProcessingMetadata = {
			dynamicSamplingContext: Ir(t),
			...e.sdkProcessingMetadata
		};
		let r = xr(n).description;
		r && (e.tags = {
			transaction: r,
			...e.tags
		});
	}
}
function Hr(e, t) {
	e.fingerprint = e.fingerprint ? dn(e.fingerprint) : [], t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/scope.js
var Ur = 100, Wr = class e {
	constructor() {
		this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Gr();
	}
	static clone(t) {
		return t ? t.clone() : new e();
	}
	clone() {
		let t = new e();
		return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags }, t._extra = { ...this._extra }, t._contexts = { ...this._contexts }, t._user = this._user, t._level = this._level, t._span = this._span, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t._propagationContext = { ...this._propagationContext }, t._client = this._client, t;
	}
	setClient(e) {
		this._client = e;
	}
	getClient() {
		return this._client;
	}
	addScopeListener(e) {
		this._scopeListeners.push(e);
	}
	addEventProcessor(e) {
		return this._eventProcessors.push(e), this;
	}
	setUser(e) {
		return this._user = e || {
			email: void 0,
			id: void 0,
			ip_address: void 0,
			segment: void 0,
			username: void 0
		}, this._session && _r(this._session, { user: e }), this._notifyScopeListeners(), this;
	}
	getUser() {
		return this._user;
	}
	getRequestSession() {
		return this._requestSession;
	}
	setRequestSession(e) {
		return this._requestSession = e, this;
	}
	setTags(e) {
		return this._tags = {
			...this._tags,
			...e
		}, this._notifyScopeListeners(), this;
	}
	setTag(e, t) {
		return this._tags = {
			...this._tags,
			[e]: t
		}, this._notifyScopeListeners(), this;
	}
	setExtras(e) {
		return this._extra = {
			...this._extra,
			...e
		}, this._notifyScopeListeners(), this;
	}
	setExtra(e, t) {
		return this._extra = {
			...this._extra,
			[e]: t
		}, this._notifyScopeListeners(), this;
	}
	setFingerprint(e) {
		return this._fingerprint = e, this._notifyScopeListeners(), this;
	}
	setLevel(e) {
		return this._level = e, this._notifyScopeListeners(), this;
	}
	setTransactionName(e) {
		return this._transactionName = e, this._notifyScopeListeners(), this;
	}
	setContext(e, t) {
		return t === null ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this;
	}
	setSpan(e) {
		return this._span = e, this._notifyScopeListeners(), this;
	}
	getSpan() {
		return this._span;
	}
	getTransaction() {
		let e = this._span;
		return e && e.transaction;
	}
	setSession(e) {
		return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
	}
	getSession() {
		return this._session;
	}
	update(t) {
		if (!t) return this;
		let n = typeof t == "function" ? t(this) : t;
		if (n instanceof e) {
			let e = n.getScopeData();
			this._tags = {
				...this._tags,
				...e.tags
			}, this._extra = {
				...this._extra,
				...e.extra
			}, this._contexts = {
				...this._contexts,
				...e.contexts
			}, e.user && Object.keys(e.user).length && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint.length && (this._fingerprint = e.fingerprint), n.getRequestSession() && (this._requestSession = n.getRequestSession()), e.propagationContext && (this._propagationContext = e.propagationContext);
		} else if (et(n)) {
			let e = t;
			this._tags = {
				...this._tags,
				...e.tags
			}, this._extra = {
				...this._extra,
				...e.extra
			}, this._contexts = {
				...this._contexts,
				...e.contexts
			}, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext);
		}
		return this;
	}
	clear() {
		return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = Gr(), this;
	}
	addBreadcrumb(e, t) {
		let n = typeof t == "number" ? t : Ur;
		if (n <= 0) return this;
		let r = {
			timestamp: lr(),
			...e
		}, i = this._breadcrumbs;
		return i.push(r), this._breadcrumbs = i.length > n ? i.slice(-n) : i, this._notifyScopeListeners(), this;
	}
	getLastBreadcrumb() {
		return this._breadcrumbs[this._breadcrumbs.length - 1];
	}
	clearBreadcrumbs() {
		return this._breadcrumbs = [], this._notifyScopeListeners(), this;
	}
	addAttachment(e) {
		return this._attachments.push(e), this;
	}
	getAttachments() {
		return this.getScopeData().attachments;
	}
	clearAttachments() {
		return this._attachments = [], this;
	}
	getScopeData() {
		let { _breadcrumbs: e, _attachments: t, _contexts: n, _tags: r, _extra: i, _user: a, _level: o, _fingerprint: s, _eventProcessors: c, _propagationContext: l, _sdkProcessingMetadata: u, _transactionName: d, _span: f } = this;
		return {
			breadcrumbs: e,
			attachments: t,
			contexts: n,
			tags: r,
			extra: i,
			user: a,
			level: o,
			fingerprint: s || [],
			eventProcessors: c,
			propagationContext: l,
			sdkProcessingMetadata: u,
			transactionName: d,
			span: f
		};
	}
	applyToEvent(e, t = {}, n = []) {
		return Lr(e, this.getScopeData()), hr([
			...n,
			...mr(),
			...this._eventProcessors
		], e, t);
	}
	setSDKProcessingMetadata(e) {
		return this._sdkProcessingMetadata = {
			...this._sdkProcessingMetadata,
			...e
		}, this;
	}
	setPropagationContext(e) {
		return this._propagationContext = e, this;
	}
	getPropagationContext() {
		return this._propagationContext;
	}
	captureException(e, t) {
		let n = t && t.event_id ? t.event_id : on();
		if (!this._client) return B.warn("No client configured on scope - will not capture exception!"), n;
		let r = /* @__PURE__ */ Error("Sentry syntheticException");
		return this._client.captureException(e, {
			originalException: e,
			syntheticException: r,
			...t,
			event_id: n
		}, this), n;
	}
	captureMessage(e, t, n) {
		let r = n && n.event_id ? n.event_id : on();
		if (!this._client) return B.warn("No client configured on scope - will not capture message!"), r;
		let i = Error(e);
		return this._client.captureMessage(e, t, {
			originalException: e,
			syntheticException: i,
			...n,
			event_id: r
		}, this), r;
	}
	captureEvent(e, t) {
		let n = t && t.event_id ? t.event_id : on();
		return this._client ? (this._client.captureEvent(e, {
			...t,
			event_id: n
		}, this), n) : (B.warn("No client configured on scope - will not capture event!"), n);
	}
	_notifyScopeListeners() {
		this._notifyingListeners ||= (this._notifyingListeners = !0, this._scopeListeners.forEach((e) => {
			e(this);
		}), !1);
	}
};
function Gr() {
	return {
		traceId: on(),
		spanId: on().substring(16)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/hub.js
var Kr = 7.12, qr = 100, Jr = class {
	constructor(e, t, n, r = Kr) {
		this._version = r;
		let i;
		t ? i = t : (i = new Wr(), i.setClient(e));
		let a;
		n ? a = n : (a = new Wr(), a.setClient(e)), this._stack = [{ scope: i }], e && this.bindClient(e), this._isolationScope = a;
	}
	isOlderThan(e) {
		return this._version < e;
	}
	bindClient(e) {
		let t = this.getStackTop();
		t.client = e, t.scope.setClient(e), e && e.setupIntegrations && e.setupIntegrations();
	}
	pushScope() {
		let e = this.getScope().clone();
		return this.getStack().push({
			client: this.getClient(),
			scope: e
		}), e;
	}
	popScope() {
		return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
	}
	withScope(e) {
		let t = this.pushScope(), n;
		try {
			n = e(t);
		} catch (e) {
			throw this.popScope(), e;
		}
		return it(n) ? n.then((e) => (this.popScope(), e), (e) => {
			throw this.popScope(), e;
		}) : (this.popScope(), n);
	}
	getClient() {
		return this.getStackTop().client;
	}
	getScope() {
		return this.getStackTop().scope;
	}
	getIsolationScope() {
		return this._isolationScope;
	}
	getStack() {
		return this._stack;
	}
	getStackTop() {
		return this._stack[this._stack.length - 1];
	}
	captureException(e, t) {
		let n = this._lastEventId = t && t.event_id ? t.event_id : on(), r = /* @__PURE__ */ Error("Sentry syntheticException");
		return this.getScope().captureException(e, {
			originalException: e,
			syntheticException: r,
			...t,
			event_id: n
		}), n;
	}
	captureMessage(e, t, n) {
		let r = this._lastEventId = n && n.event_id ? n.event_id : on(), i = Error(e);
		return this.getScope().captureMessage(e, t, {
			originalException: e,
			syntheticException: i,
			...n,
			event_id: r
		}), r;
	}
	captureEvent(e, t) {
		let n = t && t.event_id ? t.event_id : on();
		return e.type || (this._lastEventId = n), this.getScope().captureEvent(e, {
			...t,
			event_id: n
		}), n;
	}
	lastEventId() {
		return this._lastEventId;
	}
	addBreadcrumb(e, t) {
		let { scope: n, client: r } = this.getStackTop();
		if (!r) return;
		let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = qr } = r.getOptions && r.getOptions() || {};
		if (a <= 0) return;
		let o = {
			timestamp: lr(),
			...e
		}, s = i ? jt(() => i(o, t)) : o;
		s !== null && (r.emit && r.emit("beforeAddBreadcrumb", s, t), n.addBreadcrumb(s, a));
	}
	setUser(e) {
		this.getScope().setUser(e), this.getIsolationScope().setUser(e);
	}
	setTags(e) {
		this.getScope().setTags(e), this.getIsolationScope().setTags(e);
	}
	setExtras(e) {
		this.getScope().setExtras(e), this.getIsolationScope().setExtras(e);
	}
	setTag(e, t) {
		this.getScope().setTag(e, t), this.getIsolationScope().setTag(e, t);
	}
	setExtra(e, t) {
		this.getScope().setExtra(e, t), this.getIsolationScope().setExtra(e, t);
	}
	setContext(e, t) {
		this.getScope().setContext(e, t), this.getIsolationScope().setContext(e, t);
	}
	configureScope(e) {
		let { scope: t, client: n } = this.getStackTop();
		n && e(t);
	}
	run(e) {
		let t = Xr(this);
		try {
			e(this);
		} finally {
			Xr(t);
		}
	}
	getIntegration(e) {
		let t = this.getClient();
		if (!t) return null;
		try {
			return t.getIntegration(e);
		} catch {
			return fr && B.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null;
		}
	}
	startTransaction(e, t) {
		let n = this._callExtensionMethod("startTransaction", e, t);
		return fr && !n && (this.getClient() ? B.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : B.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")), n;
	}
	traceHeaders() {
		return this._callExtensionMethod("traceHeaders");
	}
	captureSession(e = !1) {
		if (e) return this.endSession();
		this._sendSessionUpdate();
	}
	endSession() {
		let e = this.getStackTop().scope, t = e.getSession();
		t && vr(t), this._sendSessionUpdate(), e.setSession();
	}
	startSession(e) {
		let { scope: t, client: n } = this.getStackTop(), { release: r, environment: i = pr } = n && n.getOptions() || {}, { userAgent: a } = z.navigator || {}, o = gr({
			release: r,
			environment: i,
			user: t.getUser(),
			...a && { userAgent: a },
			...e
		}), s = t.getSession && t.getSession();
		return s && s.status === "ok" && _r(s, { status: "exited" }), this.endSession(), t.setSession(o), o;
	}
	shouldSendDefaultPii() {
		let e = this.getClient(), t = e && e.getOptions();
		return !!(t && t.sendDefaultPii);
	}
	_sendSessionUpdate() {
		let { scope: e, client: t } = this.getStackTop(), n = e.getSession();
		n && t && t.captureSession && t.captureSession(n);
	}
	_callExtensionMethod(e, ...t) {
		let n = Yr().__SENTRY__;
		if (n && n.extensions && typeof n.extensions[e] == "function") return n.extensions[e].apply(this, t);
		fr && B.warn(`Extension method ${e} couldn't be found, doing nothing.`);
	}
};
function Yr() {
	return z.__SENTRY__ = z.__SENTRY__ || {
		extensions: {},
		hub: void 0
	}, z;
}
function Xr(e) {
	let t = Yr(), n = ei(t);
	return ti(t, e), n;
}
function Zr() {
	let e = Yr();
	if (e.__SENTRY__ && e.__SENTRY__.acs) {
		let t = e.__SENTRY__.acs.getCurrentHub();
		if (t) return t;
	}
	return Qr(e);
}
function Qr(e = Yr()) {
	return (!$r(e) || ei(e).isOlderThan(Kr)) && ti(e, new Jr()), ei(e);
}
function $r(e) {
	return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function ei(e) {
	return bt("hub", () => new Jr(), e);
}
function ti(e, t) {
	if (!e) return !1;
	let n = e.__SENTRY__ = e.__SENTRY__ || {};
	return n.hub = t, !0;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/api.js
function ni(e) {
	let t = e.protocol ? `${e.protocol}:` : "", n = e.port ? `:${e.port}` : "";
	return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function ri(e, t) {
	let n = zt(e);
	if (!n) return "";
	let r = `${ni(n)}embed/error-page/`, i = `dsn=${Ft(n)}`;
	for (let e in t) if (e !== "dsn" && e !== "onClose") if (e === "user") {
		let e = t.user;
		if (!e) continue;
		e.name && (i += `&name=${encodeURIComponent(e.name)}`), e.email && (i += `&email=${encodeURIComponent(e.email)}`);
	} else i += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
	return `${r}?${i}`;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/integration.js
function ii(e, t) {
	let n = function(...e) {
		return t(...e);
	};
	return n.id = e, n;
}
function ai(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/integrations/inboundfilters.js
var oi = [
	/^Script error\.?$/,
	/^Javascript error: Script error\.? on line 0$/,
	/^ResizeObserver loop completed with undelivered notifications.$/,
	/^Cannot redefine property: googletag$/
], si = [
	/^.*\/healthcheck$/,
	/^.*\/healthy$/,
	/^.*\/live$/,
	/^.*\/ready$/,
	/^.*\/heartbeat$/,
	/^.*\/health$/,
	/^.*\/healthz$/
], ci = "InboundFilters", li = ai(((e = {}) => ({
	name: ci,
	setupOnce() {},
	processEvent(t, n, r) {
		return di(t, ui(e, r.getOptions())) ? null : t;
	}
})));
ii(ci, li);
function ui(e = {}, t = {}) {
	return {
		allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
		denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
		ignoreErrors: [
			...e.ignoreErrors || [],
			...t.ignoreErrors || [],
			...e.disableErrorDefaults ? [] : oi
		],
		ignoreTransactions: [
			...e.ignoreTransactions || [],
			...t.ignoreTransactions || [],
			...e.disableTransactionDefaults ? [] : si
		],
		ignoreInternal: e.ignoreInternal === void 0 ? !0 : e.ignoreInternal
	};
}
function di(e, t) {
	return t.ignoreInternal && _i(e) ? (fr && B.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${cn(e)}`), !0) : fi(e, t.ignoreErrors) ? (fr && B.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${cn(e)}`), !0) : pi(e, t.ignoreTransactions) ? (fr && B.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${cn(e)}`), !0) : mi(e, t.denyUrls) ? (fr && B.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${cn(e)}.\nUrl: ${yi(e)}`), !0) : hi(e, t.allowUrls) ? !1 : (fr && B.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${cn(e)}.\nUrl: ${yi(e)}`), !0);
}
function fi(e, t) {
	return e.type || !t || !t.length ? !1 : gi(e).some((e) => ft(e, t));
}
function pi(e, t) {
	if (e.type !== "transaction" || !t || !t.length) return !1;
	let n = e.transaction;
	return n ? ft(n, t) : !1;
}
function mi(e, t) {
	if (!t || !t.length) return !1;
	let n = yi(e);
	return n ? ft(n, t) : !1;
}
function hi(e, t) {
	if (!t || !t.length) return !0;
	let n = yi(e);
	return n ? ft(n, t) : !0;
}
function gi(e) {
	let t = [];
	e.message && t.push(e.message);
	let n;
	try {
		n = e.exception.values[e.exception.values.length - 1];
	} catch {}
	return n && n.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)), fr && t.length === 0 && B.error(`Could not extract message for event ${cn(e)}`), t;
}
function _i(e) {
	try {
		return e.exception.values[0].type === "SentryError";
	} catch {}
	return !1;
}
function vi(e = []) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
	}
	return null;
}
function yi(e) {
	try {
		let t;
		try {
			t = e.exception.values[0].stacktrace.frames;
		} catch {}
		return t ? vi(t) : null;
	} catch {
		return fr && B.error(`Cannot extract url for event ${cn(e)}`), null;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/integrations/functiontostring.js
var bi, xi = "FunctionToString", Si = /* @__PURE__ */ new WeakMap(), Ci = ai((() => ({
	name: xi,
	setupOnce() {
		bi = Function.prototype.toString;
		try {
			Function.prototype.toString = function(...e) {
				let t = Ht(this), n = Si.has(H()) && t !== void 0 ? t : this;
				return bi.apply(n, e);
			};
		} catch {}
	},
	setup(e) {
		Si.set(e, !0);
	}
})));
ii(xi, Ci);
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/helpers.js
var U = z, wi = 0;
function Ti() {
	return wi > 0;
}
function Ei() {
	wi++, setTimeout(() => {
		wi--;
	});
}
function Di(e, t = {}, n) {
	if (typeof e != "function") return e;
	try {
		let t = e.__sentry_wrapped__;
		if (t) return typeof t == "function" ? t : e;
		if (Ht(e)) return e;
	} catch {
		return e;
	}
	let r = function() {
		let r = Array.prototype.slice.call(arguments);
		try {
			n && typeof n == "function" && n.apply(this, arguments);
			let i = r.map((e) => Di(e, t));
			return e.apply(this, i);
		} catch (e) {
			throw Ei(), Mr((n) => {
				n.addEventProcessor((e) => (t.mechanism && (ln(e, void 0, void 0), un(e, t.mechanism)), e.extra = {
					...e.extra,
					arguments: r
				}, e)), Or(e);
			}), e;
		}
	};
	try {
		for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
	} catch {}
	Vt(r, e), Bt(e, "__sentry_wrapped__", r);
	try {
		Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", { get() {
			return e.name;
		} });
	} catch {}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/debug-build.js
var Oi = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/eventbuilder.js
function ki(e, t) {
	let n = Mi(e, t), r = {
		type: t && t.name,
		value: Fi(t)
	};
	return n.length && (r.stacktrace = { frames: n }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
}
function Ai(e, t, n, r) {
	let i = H(), a = i && i.getOptions().normalizeDepth, o = {
		exception: { values: [{
			type: tt(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
			value: Ri(t, { isUnhandledRejection: r })
		}] },
		extra: { __serialized__: Zn(t, a) }
	};
	if (n) {
		let t = Mi(e, n);
		t.length && (o.exception.values[0].stacktrace = { frames: t });
	}
	return o;
}
function ji(e, t) {
	return { exception: { values: [ki(e, t)] } };
}
function Mi(e, t) {
	let n = t.stacktrace || t.stack || "", r = Pi(t);
	try {
		return e(n, r);
	} catch {}
	return [];
}
var Ni = /Minified React error #\d+;/i;
function Pi(e) {
	if (e) {
		if (typeof e.framesToPop == "number") return e.framesToPop;
		if (Ni.test(e.message)) return 1;
	}
	return 0;
}
function Fi(e) {
	let t = e && e.message;
	return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message";
}
function Ii(e, t, n, r, i) {
	let a;
	if (Je(t) && t.error) return ji(e, t.error);
	if (Ye(t) || Xe(t)) {
		let i = t;
		if ("stack" in t) a = ji(e, t);
		else {
			let t = i.name || (Ye(i) ? "DOMError" : "DOMException"), o = i.message ? `${t}: ${i.message}` : t;
			a = Li(e, o, n, r), ln(a, o);
		}
		return "code" in i && (a.tags = {
			...a.tags,
			"DOMException.code": `${i.code}`
		}), a;
	}
	return Ke(t) ? ji(e, t) : et(t) || tt(t) ? (a = Ai(e, t, n, i), un(a, { synthetic: !0 }), a) : (a = Li(e, t, n, r), ln(a, `${t}`, void 0), un(a, { synthetic: !0 }), a);
}
function Li(e, t, n, r) {
	let i = {};
	if (r && n) {
		let r = Mi(e, n);
		r.length && (i.exception = { values: [{
			value: t,
			stacktrace: { frames: r }
		}] });
	}
	if (Qe(t)) {
		let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
		return i.logentry = {
			message: e,
			params: n
		}, i;
	}
	return i.message = t, i;
}
function Ri(e, { isUnhandledRejection: t }) {
	let n = Kt(e), r = t ? "promise rejection" : "exception";
	return Je(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : tt(e) ? `Event \`${zi(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`;
}
function zi(e) {
	try {
		let t = Object.getPrototypeOf(e);
		return t ? t.constructor.name : void 0;
	} catch {}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/breadcrumbs.js
var Bi = 1024, Vi = "Breadcrumbs", Hi = ai(((e = {}) => {
	let t = {
		console: !0,
		dom: !0,
		fetch: !0,
		history: !0,
		sentry: !0,
		xhr: !0,
		...e
	};
	return {
		name: Vi,
		setupOnce() {},
		setup(e) {
			t.console && rn(Gi(e)), t.dom && _n(Wi(e, t.dom)), t.xhr && Kn(Ki(e)), t.fetch && Dn(qi(e)), t.history && Hn(Ji(e)), t.sentry && e.on && e.on("beforeSendEvent", Ui(e));
		}
	};
}));
ii(Vi, Hi);
function Ui(e) {
	return function(t) {
		H() === e && jr({
			category: `sentry.${t.type === "transaction" ? "transaction" : "event"}`,
			event_id: t.event_id,
			level: t.level,
			message: cn(t)
		}, { event: t });
	};
}
function Wi(e, t) {
	return function(n) {
		if (H() !== e) return;
		let r, i, a = typeof t == "object" ? t.serializeAttribute : void 0, o = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
		o && o > Bi && (Oi && B.warn(`\`dom.maxStringLength\` cannot exceed ${Bi}, but a value of ${o} was configured. Sentry will use ${Bi} instead.`), o = Bi), typeof a == "string" && (a = [a]);
		try {
			let e = n.event, t = Yi(e) ? e.target : e;
			r = Ct(t, {
				keyAttrs: a,
				maxStringLength: o
			}), i = Et(t);
		} catch {
			r = "<unknown>";
		}
		if (r.length === 0) return;
		let s = {
			category: `ui.${n.name}`,
			message: r
		};
		i && (s.data = { "ui.component_name": i }), jr(s, {
			event: n.event,
			name: n.name,
			global: n.global
		});
	};
}
function Gi(e) {
	return function(t) {
		if (H() !== e) return;
		let n = {
			category: "console",
			data: {
				arguments: t.args,
				logger: "console"
			},
			level: sr(t.level),
			message: ut(t.args, " ")
		};
		if (t.level === "assert") if (t.args[0] === !1) n.message = `Assertion failed: ${ut(t.args.slice(1), " ") || "console.assert"}`, n.data.arguments = t.args.slice(1);
		else return;
		jr(n, {
			input: t.args,
			level: t.level
		});
	};
}
function Ki(e) {
	return function(t) {
		if (H() !== e) return;
		let { startTimestamp: n, endTimestamp: r } = t, i = t.xhr[Gn];
		if (!n || !r || !i) return;
		let { method: a, url: o, status_code: s, body: c } = i, l = {
			method: a,
			url: o,
			status_code: s
		}, u = {
			xhr: t.xhr,
			input: c,
			startTimestamp: n,
			endTimestamp: r
		};
		jr({
			category: "xhr",
			data: l,
			type: "http"
		}, u);
	};
}
function qi(e) {
	return function(t) {
		if (H() !== e) return;
		let { startTimestamp: n, endTimestamp: r } = t;
		if (r && !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST")) if (t.error) {
			let e = t.fetchData, i = {
				data: t.error,
				input: t.args,
				startTimestamp: n,
				endTimestamp: r
			};
			jr({
				category: "fetch",
				data: e,
				level: "error",
				type: "http"
			}, i);
		} else {
			let e = t.response, i = {
				...t.fetchData,
				status_code: e && e.status
			}, a = {
				input: t.args,
				response: e,
				startTimestamp: n,
				endTimestamp: r
			};
			jr({
				category: "fetch",
				data: i,
				type: "http"
			}, a);
		}
	};
}
function Ji(e) {
	return function(t) {
		if (H() !== e) return;
		let n = t.from, r = t.to, i = ar(U.location.href), a = n ? ar(n) : void 0, o = ar(r);
		(!a || !a.path) && (a = i), i.protocol === o.protocol && i.host === o.host && (r = o.relative), i.protocol === a.protocol && i.host === a.host && (n = a.relative), jr({
			category: "navigation",
			data: {
				from: n,
				to: r
			}
		});
	};
}
function Yi(e) {
	return !!e && !!e.target;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/dedupe.js
var Xi = "Dedupe", Zi = ai((() => {
	let e;
	return {
		name: Xi,
		setupOnce() {},
		processEvent(t) {
			if (t.type) return t;
			try {
				if (Qi(t, e)) return Oi && B.warn("Event dropped due to being a duplicate of previously captured event."), null;
			} catch {}
			return e = t;
		}
	};
}));
ii(Xi, Zi);
function Qi(e, t) {
	return t ? !!($i(e, t) || ea(e, t)) : !1;
}
function $i(e, t) {
	let n = e.message, r = t.message;
	return !(!n && !r || n && !r || !n && r || n !== r || !na(e, t) || !ta(e, t));
}
function ea(e, t) {
	let n = ra(t), r = ra(e);
	return !(!n || !r || n.type !== r.type || n.value !== r.value || !na(e, t) || !ta(e, t));
}
function ta(e, t) {
	let n = ia(e), r = ia(t);
	if (!n && !r) return !0;
	if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
	for (let e = 0; e < r.length; e++) {
		let t = r[e], i = n[e];
		if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1;
	}
	return !0;
}
function na(e, t) {
	let n = e.fingerprint, r = t.fingerprint;
	if (!n && !r) return !0;
	if (n && !r || !n && r) return !1;
	n = n, r = r;
	try {
		return n.join("") === r.join("");
	} catch {
		return !1;
	}
}
function ra(e) {
	return e.exception && e.exception.values && e.exception.values[0];
}
function ia(e) {
	let t = e.exception;
	if (t) try {
		return t.values[0].stacktrace.frames;
	} catch {
		return;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/globalhandlers.js
var aa = "GlobalHandlers", oa = ai(((e = {}) => {
	let t = {
		onerror: !0,
		onunhandledrejection: !0,
		...e
	};
	return {
		name: aa,
		setupOnce() {
			Error.stackTraceLimit = 50;
		},
		setup(e) {
			t.onerror && (sa(e), pa("onerror")), t.onunhandledrejection && (ca(e), pa("onunhandledrejection"));
		}
	};
}));
ii(aa, oa);
function sa(e) {
	Nn((t) => {
		let { stackParser: n, attachStacktrace: r } = ma();
		if (H() !== e || Ti()) return;
		let { msg: i, url: a, line: o, column: s, error: c } = t, l = c === void 0 && Ze(i) ? da(i, a, o, s) : fa(Ii(n, c || i, void 0, r, !1), a, o, s);
		l.level = "error", Ar(l, {
			originalException: c,
			mechanism: {
				handled: !1,
				type: "onerror"
			}
		});
	});
}
function ca(e) {
	In((t) => {
		let { stackParser: n, attachStacktrace: r } = ma();
		if (H() !== e || Ti()) return;
		let i = la(t), a = $e(i) ? ua(i) : Ii(n, i, void 0, r, !0);
		a.level = "error", Ar(a, {
			originalException: i,
			mechanism: {
				handled: !1,
				type: "onunhandledrejection"
			}
		});
	});
}
function la(e) {
	if ($e(e)) return e;
	let t = e;
	try {
		if ("reason" in t) return t.reason;
		if ("detail" in t && "reason" in t.detail) return t.detail.reason;
	} catch {}
	return e;
}
function ua(e) {
	return { exception: { values: [{
		type: "UnhandledRejection",
		value: `Non-Error promise rejection captured with value: ${String(e)}`
	}] } };
}
function da(e, t, n, r) {
	let i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, a = Je(e) ? e.message : e, o = "Error", s = a.match(i);
	return s && (o = s[1], a = s[2]), fa({ exception: { values: [{
		type: o,
		value: a
	}] } }, t, n, r);
}
function fa(e, t, n, r) {
	let i = e.exception = e.exception || {}, a = i.values = i.values || [], o = a[0] = a[0] || {}, s = o.stacktrace = o.stacktrace || {}, c = s.frames = s.frames || [], l = isNaN(parseInt(r, 10)) ? void 0 : r, u = isNaN(parseInt(n, 10)) ? void 0 : n, d = Ze(t) && t.length > 0 ? t : Tt();
	return c.length === 0 && c.push({
		colno: l,
		filename: d,
		function: "?",
		in_app: !0,
		lineno: u
	}), e;
}
function pa(e) {
	Oi && B.log(`Global Handler attached: ${e}`);
}
function ma() {
	let e = H();
	return e && e.getOptions() || {
		stackParser: () => [],
		attachStacktrace: !1
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/httpcontext.js
var ha = "HttpContext", ga = ai((() => ({
	name: ha,
	setupOnce() {},
	preprocessEvent(e) {
		if (!U.navigator && !U.location && !U.document) return;
		let t = e.request && e.request.url || U.location && U.location.href, { referrer: n } = U.document || {}, { userAgent: r } = U.navigator || {}, i = {
			...e.request && e.request.headers,
			...n && { Referer: n },
			...r && { "User-Agent": r }
		};
		e.request = {
			...e.request,
			...t && { url: t },
			headers: i
		};
	}
})));
ii(ha, ga);
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/linkederrors.js
var _a = "cause", va = 5, ya = "LinkedErrors", ba = ai(((e = {}) => {
	let t = e.limit || va, n = e.key || _a;
	return {
		name: ya,
		setupOnce() {},
		preprocessEvent(e, r, i) {
			let a = i.getOptions();
			pt(ki, a.stackParser, a.maxValueLength, n, t, e, r);
		}
	};
}));
ii(ya, ba);
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/trycatch.js
var xa = /* @__PURE__ */ "EventTarget.Window.Node.ApplicationCache.AudioTrackList.BroadcastChannel.ChannelMergerNode.CryptoOperation.EventSource.FileReader.HTMLUnknownElement.IDBDatabase.IDBRequest.IDBTransaction.KeyOperation.MediaController.MessagePort.ModalWindow.Notification.SVGElementInstance.Screen.SharedWorker.TextTrack.TextTrackCue.TextTrackList.WebSocket.WebSocketWorker.Worker.XMLHttpRequest.XMLHttpRequestEventTarget.XMLHttpRequestUpload".split("."), Sa = "TryCatch", Ca = ai(((e = {}) => {
	let t = {
		XMLHttpRequest: !0,
		eventTarget: !0,
		requestAnimationFrame: !0,
		setInterval: !0,
		setTimeout: !0,
		...e
	};
	return {
		name: Sa,
		setupOnce() {
			t.setTimeout && V(U, "setTimeout", wa), t.setInterval && V(U, "setInterval", wa), t.requestAnimationFrame && V(U, "requestAnimationFrame", Ta), t.XMLHttpRequest && "XMLHttpRequest" in U && V(XMLHttpRequest.prototype, "send", Ea);
			let e = t.eventTarget;
			e && (Array.isArray(e) ? e : xa).forEach(Da);
		}
	};
}));
ii(Sa, Ca);
function wa(e) {
	return function(...t) {
		let n = t[0];
		return t[0] = Di(n, { mechanism: {
			data: { function: Zt(e) },
			handled: !1,
			type: "instrument"
		} }), e.apply(this, t);
	};
}
function Ta(e) {
	return function(t) {
		return e.apply(this, [Di(t, { mechanism: {
			data: {
				function: "requestAnimationFrame",
				handler: Zt(e)
			},
			handled: !1,
			type: "instrument"
		} })]);
	};
}
function Ea(e) {
	return function(...t) {
		let n = this;
		return [
			"onload",
			"onerror",
			"onprogress",
			"onreadystatechange"
		].forEach((e) => {
			e in n && typeof n[e] == "function" && V(n, e, function(t) {
				let n = { mechanism: {
					data: {
						function: e,
						handler: Zt(t)
					},
					handled: !1,
					type: "instrument"
				} }, r = Ht(t);
				return r && (n.mechanism.data.handler = Zt(r)), Di(t, n);
			});
		}), e.apply(this, t);
	};
}
function Da(e) {
	let t = U, n = t[e] && t[e].prototype;
	!n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (V(n, "addEventListener", function(t) {
		return function(n, r, i) {
			try {
				typeof r.handleEvent == "function" && (r.handleEvent = Di(r.handleEvent, { mechanism: {
					data: {
						function: "handleEvent",
						handler: Zt(r),
						target: e
					},
					handled: !1,
					type: "instrument"
				} }));
			} catch {}
			return t.apply(this, [
				n,
				Di(r, { mechanism: {
					data: {
						function: "addEventListener",
						handler: Zt(r),
						target: e
					},
					handled: !1,
					type: "instrument"
				} }),
				i
			]);
		};
	}), V(n, "removeEventListener", function(e) {
		return function(t, n, r) {
			let i = n;
			try {
				let n = i && i.__sentry_wrapped__;
				n && e.call(this, t, n, r);
			} catch {}
			return e.call(this, t, i, r);
		};
	}));
}
li(), Ci(), Ca(), Hi(), oa(), ba(), Zi(), ga();
var Oa = (e = {}, t = Zr()) => {
	if (!U.document) {
		Oi && B.error("Global document not defined in showReportDialog call");
		return;
	}
	let { client: n, scope: r } = t.getStackTop(), i = e.dsn || n && n.getDsn();
	if (!i) {
		Oi && B.error("DSN not configured for showReportDialog call");
		return;
	}
	r && (e.user = {
		...r.getUser(),
		...e.user
	}), e.eventId ||= t.lastEventId();
	let a = U.document.createElement("script");
	a.async = !0, a.crossOrigin = "anonymous", a.src = ri(i, e), e.onLoad && (a.onload = e.onLoad);
	let { onClose: o } = e;
	if (o) {
		let e = (t) => {
			if (t.data === "__sentry_reportdialog_closed__") try {
				o();
			} finally {
				U.removeEventListener("message", e);
			}
		};
		U.addEventListener("message", e);
	}
	let s = U.document.head || U.document.body;
	s ? s.appendChild(a) : Oi && B.error("Not injecting report dialog. No injection point found in HTML");
}, ka = /* @__PURE__ */ n(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), Aa = /* @__PURE__ */ n(((e, t) => {
	t.exports = ka();
}));
(/* @__PURE__ */ n(((e, t) => {
	var n = Aa(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})))();
var ja = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
//#endregion
//#region ../../node_modules/.pnpm/@sentry+react@7.120.4_react@18.3.1/node_modules/@sentry/react/esm/errorboundary.js
s();
function Ma(e) {
	let t = e.match(/^([^.]+)/);
	return t !== null && parseInt(t[0]) >= 17;
}
var Na = {
	componentStack: null,
	error: null,
	eventId: null
};
function Pa(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	function r(e, t) {
		if (!n.has(e)) {
			if (e.cause) return n.set(e, !0), r(e.cause, t);
			e.cause = t;
		}
	}
	r(e, t);
}
var Fa = class t extends p {
	constructor(e) {
		super(e), t.prototype.__init.call(this), this.state = Na, this._openFallbackReportDialog = !0;
		let n = H();
		n && n.on && e.showDialog && (this._openFallbackReportDialog = !1, n.on("afterSendEvent", (t) => {
			!t.type && t.event_id === this._lastEventId && Oa({
				...e.dialogOptions,
				eventId: this._lastEventId
			});
		}));
	}
	componentDidCatch(t, { componentStack: n }) {
		let { beforeCapture: r, onError: i, showDialog: a, dialogOptions: o } = this.props;
		Mr((s) => {
			if (Ma(e) && Ke(t)) {
				let e = Error(t.message);
				e.name = `React ErrorBoundary ${t.name}`, e.stack = n, Pa(t, e);
			}
			r && r(s, t, n);
			let c = Or(t, {
				captureContext: { contexts: { react: { componentStack: n } } },
				mechanism: { handled: !!this.props.fallback }
			});
			i && i(t, n, c), a && (this._lastEventId = c, this._openFallbackReportDialog && Oa({
				...o,
				eventId: c
			})), this.setState({
				error: t,
				componentStack: n,
				eventId: c
			});
		});
	}
	componentDidMount() {
		let { onMount: e } = this.props;
		e && e();
	}
	componentWillUnmount() {
		let { error: e, componentStack: t, eventId: n } = this.state, { onUnmount: r } = this.props;
		r && r(e, t, n);
	}
	__init() {
		this.resetErrorBoundary = () => {
			let { onReset: e } = this.props, { error: t, componentStack: n, eventId: r } = this.state;
			e && e(t, n, r), this.setState(Na);
		};
	}
	render() {
		let { fallback: e, children: t } = this.props, n = this.state;
		if (n.error) {
			let t;
			return t = typeof e == "function" ? e({
				error: n.error,
				componentStack: n.componentStack,
				resetError: this.resetErrorBoundary,
				eventId: n.eventId
			}) : e, c(t) ? t : (e && ja && B.warn("fallback did not produce a valid ReactElement"), null);
		}
		return typeof t == "function" ? t() : t;
	}
};
//#endregion
//#region ../admin-x-framework/dist/providers/framework-provider.js
s();
var Ia = o({
	ghostVersion: "",
	externalNavigate: () => {},
	unsplashConfig: {
		Authorization: "",
		"Accept-Version": "",
		"Content-Type": "",
		"App-Pragma": "",
		"X-Unsplash-Cache": !0
	},
	sentryDSN: null,
	onUpdate: () => {},
	onInvalidate: () => {},
	onDelete: () => {}
});
function La({ children: e, queryClient: t, ...n }) {
	return /* @__PURE__ */ (0, Be.jsx)(Fa, { children: /* @__PURE__ */ (0, Be.jsx)(Ue, {
		client: r(() => t || We, [t]),
		children: /* @__PURE__ */ (0, Be.jsx)(Ia.Provider, {
			value: n,
			children: e
		})
	}) });
}
var Ra = () => a(Ia);
ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var za = ReactDOM.createPortal;
ReactDOM.createRoot;
var Ba = ReactDOM;
ReactDOM.findDOMNode;
var Va = ReactDOM.flushSync;
//#endregion
//#region ../../node_modules/.pnpm/react-router@7.18.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router/dist/development/chunk-KS7C4IRE.mjs
ReactDOM.hydrate, ReactDOM.hydrateRoot, ReactDOM.render, ReactDOM.unmountComponentAtNode, ReactDOM.unstable_batchedUpdates, ReactDOM.unstable_renderSubtreeIntoContainer, ReactDOM.version, s();
var Ha = (e) => {
	throw TypeError(e);
}, Ua = (e, t, n) => t.has(e) || Ha("Cannot " + n), W = (e, t, n) => (Ua(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Wa = (e, t, n) => t.has(e) ? Ha("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ga = (e, t, n, r) => (Ua(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ka = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, qa = /^[\\/]{2}/;
function Ja(e, t) {
	return t + e.replace(/\\/g, "/");
}
var Ya = "popstate";
function Xa(e) {
	return typeof e == "object" && !!e && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
}
function Za(e = {}) {
	function t(e, t) {
		let { pathname: n = "/", search: r = "", hash: i = "" } = q(e.location.hash.substring(1));
		return !n.startsWith("/") && !n.startsWith(".") && (n = "/" + n), eo("", {
			pathname: n,
			search: r,
			hash: i
		}, t.state && t.state.usr || null, t.state && t.state.key || "default");
	}
	function n(e, t) {
		let n = e.document.querySelector("base"), r = "";
		if (n && n.getAttribute("href")) {
			let t = e.location.href, n = t.indexOf("#");
			r = n === -1 ? t : t.slice(0, n);
		}
		return r + "#" + (typeof t == "string" ? t : to(t));
	}
	function r(e, t) {
		K(e.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`);
	}
	return no(t, n, r, e);
}
function G(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function K(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function Qa() {
	return Math.random().toString(36).substring(2, 10);
}
function $a(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t,
		masked: e.mask ? {
			pathname: e.pathname,
			search: e.search,
			hash: e.hash
		} : void 0
	};
}
function eo(e, t, n = null, r, i) {
	return {
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: "",
		...typeof t == "string" ? q(t) : t,
		state: n,
		key: t && t.key || r || Qa(),
		mask: i
	};
}
function to({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function q(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function no(e, t, n, r = {}) {
	let { window: i = document.defaultView, v5Compat: a = !1 } = r, o = i.history, s = "POP", c = null, l = u();
	l ?? (l = 0, o.replaceState({
		...o.state,
		idx: l
	}, ""));
	function u() {
		return (o.state || { idx: null }).idx;
	}
	function d() {
		s = "POP";
		let e = u(), t = e == null ? null : e - l;
		l = e, c && c({
			action: s,
			location: h.location,
			delta: t
		});
	}
	function f(e, t) {
		s = "PUSH";
		let r = Xa(e) ? e : eo(h.location, e, t);
		n && n(r, e), l = u() + 1;
		let d = $a(r, l), f = h.createHref(r.mask || r);
		try {
			o.pushState(d, "", f);
		} catch (e) {
			if (e instanceof DOMException && e.name === "DataCloneError") throw e;
			i.location.assign(f);
		}
		a && c && c({
			action: s,
			location: h.location,
			delta: 1
		});
	}
	function p(e, t) {
		s = "REPLACE";
		let r = Xa(e) ? e : eo(h.location, e, t);
		n && n(r, e), l = u();
		let i = $a(r, l), d = h.createHref(r.mask || r);
		o.replaceState(i, "", d), a && c && c({
			action: s,
			location: h.location,
			delta: 0
		});
	}
	function m(e) {
		return ro(i, e);
	}
	let h = {
		get action() {
			return s;
		},
		get location() {
			return e(i, o);
		},
		listen(e) {
			if (c) throw Error("A history only accepts one active listener");
			return i.addEventListener(Ya, d), c = e, () => {
				i.removeEventListener(Ya, d), c = null;
			};
		},
		createHref(e) {
			return t(i, e);
		},
		createURL: m,
		encodeLocation(e) {
			let t = m(e);
			return {
				pathname: t.pathname,
				search: t.search,
				hash: t.hash
			};
		},
		push: f,
		replace: p,
		go(e) {
			return o.go(e);
		}
	};
	return h;
}
function ro(e, t, n = !1) {
	let r = "http://localhost";
	e && (r = e.location.origin === "null" ? e.location.href : e.location.origin), G(r, "No window.location.(origin|href) available to create URL");
	let i = typeof t == "string" ? t : to(t);
	return i = i.replace(/ $/, "%20"), !n && qa.test(i) && (i = r + i), new URL(i, r);
}
var io, ao = class {
	constructor(e) {
		if (Wa(this, io, /* @__PURE__ */ new Map()), e) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		if (W(this, io).has(e)) return W(this, io).get(e);
		if (e.defaultValue !== void 0) return e.defaultValue;
		throw Error("No value found for context");
	}
	set(e, t) {
		W(this, io).set(e, t);
	}
};
io = /* @__PURE__ */ new WeakMap();
var oo = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children"
]);
function so(e) {
	return oo.has(e);
}
var co = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"middleware",
	"children"
]);
function lo(e) {
	return co.has(e);
}
function uo(e) {
	return e.index === !0;
}
function fo(e, t, n = [], r = {}, i = !1) {
	return e.map((e, a) => {
		let o = [...n, String(a)], s = typeof e.id == "string" ? e.id : o.join("-");
		if (G(e.index !== !0 || !e.children, "Cannot specify children on an index route"), G(i || !r[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), uo(e)) {
			let n = {
				...e,
				id: s
			};
			return r[s] = po(n, t(n)), n;
		} else {
			let n = {
				...e,
				id: s,
				children: void 0
			};
			return r[s] = po(n, t(n)), e.children && (n.children = fo(e.children, t, o, r, i)), n;
		}
	});
}
function po(e, t) {
	return Object.assign(e, {
		...t,
		...typeof t.lazy == "object" && t.lazy != null ? { lazy: {
			...e.lazy,
			...t.lazy
		} } : {}
	});
}
function mo(e, t, n = "/") {
	return ho(e, t, n, !1);
}
function ho(e, t, n, r, i) {
	let a = J((typeof t == "string" ? q(t) : t).pathname || "/", n);
	if (a == null) return null;
	let o = i ?? _o(e), s = null, c = Po(a);
	for (let e = 0; s == null && e < o.length; ++e) s = Ao(o[e], c, r);
	return s;
}
function go(e, t) {
	let { route: n, pathname: r, params: i } = e;
	return {
		id: n.id,
		pathname: r,
		params: i,
		data: t[n.id],
		loaderData: t[n.id],
		handle: n.handle
	};
}
function _o(e) {
	let t = vo(e);
	return bo(t), t;
}
function vo(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, s) => {
		let c = {
			relativePath: s === void 0 ? e.path || "" : s,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (c.relativePath.startsWith("/")) {
			if (!c.relativePath.startsWith(r) && o) return;
			G(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(r.length);
		}
		let l = Wo([r, c.relativePath]), u = n.concat(c);
		e.children && e.children.length > 0 && (G(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), vo(e.children, t, u, l, o)), !(e.path == null && !e.index) && t.push({
			path: l,
			score: Oo(l, e.index),
			routesMeta: u.map((e, t) => {
				let [n, r] = No(e.relativePath, e.caseSensitive, t === u.length - 1);
				return {
					...e,
					matcher: n,
					compiledParams: r
				};
			})
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) a(e, t);
		else for (let n of yo(e.path)) a(e, t, !0, n);
	}), t;
}
function yo(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = yo(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function bo(e) {
	e.sort((e, t) => e.score === t.score ? ko(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var xo = /^:[\w-]+$/, So = 3, Co = 2, wo = 1, To = 10, Eo = -2, Do = (e) => e === "*";
function Oo(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(Do) && (r += Eo), t && (r += Co), n.filter((e) => !Do(e)).reduce((e, t) => e + (xo.test(t) ? So : t === "" ? wo : To), r);
}
function ko(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Ao(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = {
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, d = s.matcher && s.compiledParams ? Mo(u, l, s.matcher, s.compiledParams) : jo(u, l), f = s.route;
		if (!d && c && n && !r[r.length - 1].route.index && (d = jo({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !d) return null;
		Object.assign(i, d.params), o.push({
			params: i,
			pathname: Wo([a, d.pathname]),
			pathnameBase: Ko(Wo([a, d.pathnameBase])),
			route: f
		}), d.pathnameBase !== "/" && (a = Wo([a, d.pathnameBase]));
	}
	return o;
}
function jo(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = No(e.path, e.caseSensitive, e.end);
	return Mo(e, t, n, r);
}
function Mo(e, t, n, r) {
	let i = t.match(n);
	if (!i) return null;
	let a = i[0], o = a.replace(/(.)\/+$/, "$1"), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
			}
			let i = s[r];
			return n && !i ? e[t] = void 0 : e[t] = (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function No(e, t = !1, n = !0) {
	K(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
	let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
		if (r.push({
			paramName: t,
			isOptional: n != null
		}), n) {
			let t = a.charAt(i + e.length);
			return t && t !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function Po(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return K(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function J(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function Fo({ basename: e, pathname: t }) {
	return t === "/" ? e : Wo([e, t]);
}
var Io = (e) => Ka.test(e);
function Lo(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? q(e) : e, a;
	return n ? (n = Uo(n), a = n.startsWith("/") ? Ro(n.substring(1), "/") : Ro(n, t)) : a = t, {
		pathname: a,
		search: qo(r),
		hash: Jo(i)
	};
}
function Ro(e, t) {
	let n = Go(t).split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function zo(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Bo(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function Vo(e) {
	let t = Bo(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function Ho(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = q(e) : (i = { ...e }, G(!i.pathname || !i.pathname.includes("?"), zo("?", "pathname", "search", i)), G(!i.pathname || !i.pathname.includes("#"), zo("#", "pathname", "hash", i)), G(!i.search || !i.search.includes("#"), zo("#", "search", "hash", i)));
	let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
	if (o == null) s = n;
	else {
		let e = t.length - 1;
		if (!r && o.startsWith("..")) {
			let t = o.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			i.pathname = t.join("/");
		}
		s = e >= 0 ? t[e] : "/";
	}
	let c = Lo(i, s), l = o && o !== "/" && o.endsWith("/"), u = (a || o === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
var Uo = (e) => e.replace(/[\\/]{2,}/g, "/"), Wo = (e) => Uo(e.join("/")), Go = (e) => e.replace(/\/+$/, ""), Ko = (e) => Go(e).replace(/^\/*/, "/"), qo = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Jo = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Yo = [
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError"
], Xo = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function Zo(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Qo(e) {
	return Wo(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
var $o = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function es(e, t) {
	let n = e;
	if (typeof n != "string" || !Ka.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if ($o) try {
		let e = new URL(window.location.href), r = qa.test(n) ? new URL(Ja(n, e.protocol)) : new URL(n), a = J(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		K(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
var ts = Symbol("Uninstrumented");
function ns(e, t) {
	let n = {
		lazy: [],
		"lazy.loader": [],
		"lazy.action": [],
		"lazy.middleware": [],
		middleware: [],
		loader: [],
		action: []
	};
	e.forEach((e) => e({
		id: t.id,
		index: t.index,
		path: t.path,
		instrument(e) {
			let t = Object.keys(n);
			for (let r of t) e[r] && n[r].push(e[r]);
		}
	}));
	let r = {};
	if (typeof t.lazy == "function" && n.lazy.length > 0) {
		let e = is(n.lazy, t.lazy, () => void 0);
		e && (r.lazy = e);
	}
	if (typeof t.lazy == "object") {
		let e = t.lazy;
		[
			"middleware",
			"loader",
			"action"
		].forEach((t) => {
			let i = e[t], a = n[`lazy.${t}`];
			if (typeof i == "function" && a.length > 0) {
				let e = is(a, i, () => void 0);
				e && (r.lazy = Object.assign(r.lazy || {}, { [t]: e }));
			}
		});
	}
	return ["loader", "action"].forEach((e) => {
		let i = t[e];
		if (typeof i == "function" && n[e].length > 0) {
			let t = i[ts] ?? i, a = is(n[e], t, (...e) => os(e[0]));
			a && (e === "loader" && t.hydrate === !0 && (a.hydrate = !0), a[ts] = t, r[e] = a);
		}
	}), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((e) => {
		let t = e[ts] ?? e, r = is(n.middleware, t, (...e) => os(e[0]));
		return r ? (r[ts] = t, r) : e;
	})), r;
}
function rs(e, t) {
	let n = {
		navigate: [],
		fetch: []
	};
	if (t.forEach((e) => e({ instrument(e) {
		let t = Object.keys(e);
		for (let r of t) e[r] && n[r].push(e[r]);
	} })), n.navigate.length > 0) {
		let t = e.navigate[ts] ?? e.navigate, r = is(n.navigate, t, (...t) => {
			let [n, r] = t;
			return {
				to: typeof n == "number" || typeof n == "string" ? n : n ? to(n) : ".",
				...ss(e, r ?? {})
			};
		});
		r && (r[ts] = t, e.navigate = r);
	}
	if (n.fetch.length > 0) {
		let t = e.fetch[ts] ?? e.fetch, r = is(n.fetch, t, (...t) => {
			let [n, , r, i] = t;
			return {
				href: r ?? ".",
				fetcherKey: n,
				...ss(e, i ?? {})
			};
		});
		r && (r[ts] = t, e.fetch = r);
	}
	return e;
}
function is(e, t, n) {
	return e.length === 0 ? null : async (...r) => {
		let i = await as(e, n(...r), () => t(...r), e.length - 1);
		if (i.type === "error") throw i.value;
		return i.value;
	};
}
async function as(e, t, n, r) {
	let i = e[r], a;
	if (i) {
		let o, s = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = as(e, t, n, r - 1), a = await o, G(a, "Expected a result"), a.type === "error" && a.value instanceof Error ? {
			status: "error",
			error: a.value
		} : {
			status: "success",
			error: void 0
		});
		try {
			await i(s, t);
		} catch (e) {
			console.error("An instrumentation function threw an error:", e);
		}
		o || await s(), await o;
	} else try {
		a = {
			type: "success",
			value: await n()
		};
	} catch (e) {
		a = {
			type: "error",
			value: e
		};
	}
	return a || {
		type: "error",
		value: /* @__PURE__ */ Error("No result assigned in instrumentation chain.")
	};
}
function os(e) {
	let { request: t, context: n, params: r, pattern: i } = e;
	return {
		request: cs(t),
		params: { ...r },
		pattern: i,
		context: ls(n)
	};
}
function ss(e, t) {
	return {
		currentUrl: to(e.state.location),
		..."formMethod" in t ? { formMethod: t.formMethod } : {},
		..."formEncType" in t ? { formEncType: t.formEncType } : {},
		..."formData" in t ? { formData: t.formData } : {},
		..."body" in t ? { body: t.body } : {}
	};
}
function cs(e) {
	return {
		method: e.method,
		url: e.url,
		headers: { get: (...t) => e.headers.get(...t) }
	};
}
function ls(e) {
	if (ds(e)) {
		let t = { ...e };
		return Object.freeze(t), t;
	} else return { get: (t) => e.get(t) };
}
var us = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ds(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === us;
}
var fs = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
], ps = new Set(fs), ms = ["GET", ...fs], hs = new Set(ms), gs = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]), _s = /* @__PURE__ */ new Set([307, 308]), vs = {
	state: "idle",
	location: void 0,
	matches: void 0,
	historyAction: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, ys = {
	state: "idle",
	data: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, bs = {
	state: "unblocked",
	proceed: void 0,
	reset: void 0,
	location: void 0
}, xs = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }), Ss = "remix-router-transitions", Cs = Symbol("ResetLoaderData"), ws, Ts, Es, Ds, Os = class {
	constructor(e) {
		Wa(this, ws), Wa(this, Ts), Wa(this, Es), Wa(this, Ds), Ga(this, ws, e), Ga(this, Ts, _o(e));
	}
	get stableRoutes() {
		return W(this, ws);
	}
	get activeRoutes() {
		return W(this, Es) ?? W(this, ws);
	}
	get branches() {
		return W(this, Ds) ?? W(this, Ts);
	}
	get hasHMRRoutes() {
		return W(this, Es) != null;
	}
	setRoutes(e) {
		Ga(this, ws, e), Ga(this, Ts, _o(e));
	}
	setHmrRoutes(e) {
		Ga(this, Es, e), Ga(this, Ds, _o(e));
	}
	commitHmrRoutes() {
		W(this, Es) && (Ga(this, ws, W(this, Es)), Ga(this, Ts, W(this, Ds)), Ga(this, Es, void 0), Ga(this, Ds, void 0));
	}
};
ws = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap();
function ks(e) {
	let t = e.window ? e.window : typeof window < "u" ? window : void 0, n = t !== void 0 && t.document !== void 0 && t.document.createElement !== void 0;
	G(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || xs, a = i;
	if (e.instrumentations) {
		let t = e.instrumentations;
		a = (e) => ({
			...i(e),
			...ns(t.map((e) => e.route).filter(Boolean), e)
		});
	}
	let o = {}, s = new Os(fo(e.routes, a, void 0, o)), c = e.basename || "/";
	c.startsWith("/") || (c = `/${c}`);
	let l = e.dataStrategy || Ks, u = { ...e.future }, d = null, f = /* @__PURE__ */ new Set(), p = null, m = null, h = null, g = null, _ = e.hydrationData != null, v = ho(s.activeRoutes, e.history.location, c, !1, s.branches), y = !1, b = null, x, S;
	if (v == null && !e.patchRoutesOnNavigation) {
		let t = _c(404, { pathname: e.history.location.pathname }), { matches: n, route: r } = gc(s.activeRoutes);
		x = !0, S = !x, v = n, b = { [r.id]: t };
	} else if (v && !e.hydrationData && Ge(v, s.activeRoutes, e.history.location.pathname).active && (v = null), !v) {
		x = !1, S = !x, v = [];
		let t = Ge(null, s.activeRoutes, e.history.location.pathname);
		t.active && t.matches && (y = !0, v = t.matches);
	} else if (v.some((e) => e.route.lazy)) x = !1, S = !x;
	else if (!v.some((e) => Ps(e.route))) x = !0, S = !x;
	else {
		let t = e.hydrationData ? e.hydrationData.loaderData : null, n = e.hydrationData ? e.hydrationData.errors : null, r = v;
		if (n) {
			let e = v.findIndex((e) => n[e.route.id] !== void 0);
			r = r.slice(0, e + 1);
		}
		S = !1, x = !0, r.forEach((e) => {
			let r = Fs(e.route, t, n);
			S ||= r.renderFallback, x &&= !r.shouldLoad;
		});
	}
	let C, w = {
		historyAction: e.history.action,
		location: e.history.location,
		matches: v,
		initialized: x,
		renderFallback: S,
		navigation: vs,
		restoreScrollPosition: e.hydrationData == null ? null : !1,
		preventScrollReset: !1,
		revalidation: "idle",
		loaderData: e.hydrationData && e.hydrationData.loaderData || {},
		actionData: e.hydrationData && e.hydrationData.actionData || null,
		errors: e.hydrationData && e.hydrationData.errors || b,
		fetchers: /* @__PURE__ */ new Map(),
		blockers: /* @__PURE__ */ new Map()
	}, T = "POP", E = null, D = !1, O, k = !1, A = /* @__PURE__ */ new Map(), j = null, M = !1, ee = !1, te = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), ne = 0, re = -1, P = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Set(), ae = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Map(), se, ce = null;
	function le() {
		if (d = e.history.listen(({ action: t, location: n, delta: r }) => {
			if (se) {
				se(), se = void 0;
				return;
			}
			K(I.size === 0 || r != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let i = ze({
				currentLocation: w.location,
				nextLocation: n,
				historyAction: t
			});
			if (i && r != null) {
				let t = new Promise((e) => {
					se = e;
				});
				e.history.go(r * -1), Re(i, {
					state: "blocked",
					location: n,
					proceed() {
						Re(i, {
							state: "proceeding",
							proceed: void 0,
							reset: void 0,
							location: n
						}), t.then(() => e.history.go(r));
					},
					reset() {
						let e = new Map(w.blockers);
						e.set(i, bs), L({ blockers: e });
					}
				}), E?.resolve(), E = null;
				return;
			}
			return he(t, n);
		}), n) {
			zc(t, A);
			let e = () => Bc(t, A);
			t.addEventListener("pagehide", e), j = () => t.removeEventListener("pagehide", e);
		}
		return w.initialized || he("POP", w.location, { initialHydration: !0 }), C;
	}
	function ue() {
		d && d(), j && j(), f.clear(), O && O.abort(), w.fetchers.forEach((e, t) => Ae(w.fetchers, t)), w.blockers.forEach((e, t) => Le(t));
	}
	function de(e) {
		if (f.add(e), p) {
			let { newErrors: t } = p;
			p = null, e(w, {
				deletedFetchers: [],
				newErrors: t,
				viewTransitionOpts: void 0,
				flushSync: !1
			});
		}
		return () => f.delete(e);
	}
	function L(e, t = {}) {
		e.matches &&= e.matches.map((e) => {
			let t = o[e.route.id], n = e.route;
			return n.element !== t.element || n.errorElement !== t.errorElement || n.hydrateFallbackElement !== t.hydrateFallbackElement ? {
				...e,
				route: t
			} : e;
		}), w = {
			...w,
			...e
		};
		let n = [], r = [];
		w.fetchers.forEach((e, t) => {
			e.state === "idle" && (F.has(t) ? n.push(t) : r.push(t));
		}), F.forEach((e) => {
			!w.fetchers.has(e) && !N.has(e) && n.push(e);
		}), f.size === 0 && (p = { newErrors: e.errors ?? null }), [...f].forEach((r) => r(w, {
			deletedFetchers: n,
			newErrors: e.errors ?? null,
			viewTransitionOpts: t.viewTransitionOpts,
			flushSync: t.flushSync === !0
		})), n.forEach((e) => Ae(w.fetchers, e)), r.forEach((e) => w.fetchers.delete(e));
	}
	function fe(t, n, { flushSync: r } = {}) {
		let i = w.actionData != null && w.navigation.formMethod != null && X(w.navigation.formMethod) && w.navigation.state === "loading" && t.state?._isRedirect !== !0, a;
		a = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : i ? w.actionData : null;
		let o = n.loaderData ? pc(w.loaderData, n.loaderData, n.matches || [], n.errors) : w.loaderData, c = w.blockers;
		c.size > 0 && (c = new Map(c), c.forEach((e, t) => c.set(t, bs)));
		let l = M ? !1 : We(t, n.matches || w.matches), u = D === !0 || w.navigation.formMethod != null && X(w.navigation.formMethod) && t.state?._isRedirect !== !0;
		s.commitHmrRoutes(), M || T === "POP" || (T === "PUSH" ? e.history.push(t, t.state) : T === "REPLACE" && e.history.replace(t, t.state));
		let d;
		if (T === "POP") {
			let e = A.get(w.location.pathname);
			e && e.has(t.pathname) ? d = {
				currentLocation: w.location,
				nextLocation: t
			} : A.has(t.pathname) && (d = {
				currentLocation: t,
				nextLocation: w.location
			});
		} else if (k) {
			let e = A.get(w.location.pathname);
			e ? e.add(t.pathname) : (e = /* @__PURE__ */ new Set([t.pathname]), A.set(w.location.pathname, e)), d = {
				currentLocation: w.location,
				nextLocation: t
			};
		}
		L({
			...n,
			actionData: a,
			loaderData: o,
			historyAction: T,
			location: t,
			initialized: !0,
			renderFallback: !1,
			navigation: vs,
			revalidation: "idle",
			restoreScrollPosition: l,
			preventScrollReset: u,
			blockers: c
		}, {
			viewTransitionOpts: d,
			flushSync: r === !0
		}), T = "POP", D = !1, k = !1, M = !1, ee = !1, E?.resolve(), E = null, ce?.resolve(), ce = null;
	}
	async function pe(t, n) {
		if (E?.resolve(), E = null, typeof t == "number") {
			E ||= Vc();
			let n = E.promise;
			return e.history.go(t), n;
		}
		let { path: r, submission: i, error: a } = Ms(!1, js(w.location, w.matches, c, t, n?.fromRouteId, n?.relative), n), o;
		n?.mask && (o = {
			pathname: "",
			search: "",
			hash: "",
			...typeof n.mask == "string" ? q(n.mask) : {
				...w.location.mask,
				...n.mask
			}
		});
		let s = w.location, l = eo(s, r, n && n.state, void 0, o);
		l = {
			...l,
			...e.history.encodeLocation(l)
		};
		let u = n && n.replace != null ? n.replace : void 0, d = "PUSH";
		u === !0 ? d = "REPLACE" : u === !1 || i != null && X(i.formMethod) && i.formAction === w.location.pathname + w.location.search && (d = "REPLACE");
		let f = n && "preventScrollReset" in n ? n.preventScrollReset === !0 : void 0, p = (n && n.flushSync) === !0, m = ze({
			currentLocation: s,
			nextLocation: l,
			historyAction: d
		});
		if (m) {
			Re(m, {
				state: "blocked",
				location: l,
				proceed() {
					Re(m, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: l
					}), pe(t, n);
				},
				reset() {
					let e = new Map(w.blockers);
					e.set(m, bs), L({ blockers: e });
				}
			});
			return;
		}
		await he(d, l, {
			submission: i,
			pendingError: a,
			preventScrollReset: f,
			replace: n && n.replace,
			enableViewTransition: n && n.viewTransition,
			flushSync: p,
			callSiteDefaultShouldRevalidate: n && n.defaultShouldRevalidate
		});
	}
	function me() {
		ce ||= Vc(), Te(), L({ revalidation: "loading" });
		let e = ce.promise;
		return w.navigation.state === "submitting" ? e : w.navigation.state === "idle" ? (he(w.historyAction, w.location, { startUninterruptedRevalidation: !0 }), e) : (he(T || w.historyAction, w.navigation.location, {
			overrideNavigation: w.navigation,
			enableViewTransition: k === !0
		}), e);
	}
	async function he(t, n, r) {
		O && O.abort(), O = null, T = t, M = (r && r.startUninterruptedRevalidation) === !0, Ue(w.location, w.matches), D = (r && r.preventScrollReset) === !0, k = (r && r.enableViewTransition) === !0;
		let i = s.activeRoutes, a = r?.initialHydration && w.matches && w.matches.length > 0 && !y ? w.matches : ho(i, n, c, !1, s.branches), o = (r && r.flushSync) === !0;
		if (a && w.initialized && !ee && bc(w.location, n) && !(r && r.submission && X(r.submission.formMethod))) {
			fe(n, { matches: a }, { flushSync: o });
			return;
		}
		let l = Ge(a, i, n.pathname);
		if (l.active && l.matches && (a = l.matches), !a) {
			let { error: e, notFoundMatches: t, route: r } = Be(n.pathname);
			fe(n, {
				matches: t,
				loaderData: {},
				errors: { [r.id]: e }
			}, { flushSync: o });
			return;
		}
		let u = r && r.overrideNavigation ? {
			...r.overrideNavigation,
			matches: a,
			historyAction: t
		} : void 0;
		O = new AbortController();
		let d = sc(e.history, n, O.signal, r && r.submission), f = e.getContext ? await e.getContext() : new ao(), p;
		if (r && r.pendingError) p = [hc(a).route.id, {
			type: "error",
			error: r.pendingError
		}];
		else if (r && r.submission && X(r.submission.formMethod)) {
			let i = await ge(d, n, r.submission, a, t, f, l.active, r && r.initialHydration === !0, {
				replace: r.replace,
				flushSync: o
			});
			if (i.shortCircuited) return;
			if (i.pendingActionResult) {
				let [e, t] = i.pendingActionResult;
				if (Y(t) && Zo(t.error) && t.error.status === 404) {
					O = null, fe(n, {
						matches: i.matches,
						loaderData: {},
						errors: { [e]: t.error }
					});
					return;
				}
			}
			a = i.matches || a, p = i.pendingActionResult, u = Pc(n, a, t, r.submission), o = !1, l.active = !1, d = sc(e.history, d.url, d.signal);
		}
		let { shortCircuited: m, matches: h, loaderData: g, errors: _, workingFetchers: v } = await R(d, n, a, t, f, l.active, u, r && r.submission, r && r.fetcherSubmission, r && r.replace, r && r.initialHydration === !0, o, p, r && r.callSiteDefaultShouldRevalidate);
		m || (O = null, fe(n, {
			matches: h || a,
			...mc(p),
			loaderData: g,
			errors: _,
			...v ? { fetchers: v } : {}
		}));
	}
	async function ge(t, n, i, l, u, d, f, p, m = {}) {
		if (Te(), L({ navigation: Fc(n, l, u, i) }, { flushSync: m.flushSync === !0 }), f) {
			let e = await Ke(l, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = gc(s.activeRoutes);
					return {
						matches: t,
						pendingActionResult: [n.id, {
							type: "error",
							error: e.error
						}]
					};
				}
				let t = hc(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					pendingActionResult: [t, {
						type: "error",
						error: e.error
					}]
				};
			} else if (e.matches) l = e.matches;
			else {
				let { notFoundMatches: e, error: t, route: r } = Be(n.pathname);
				return {
					matches: e,
					pendingActionResult: [r.id, {
						type: "error",
						error: t
					}]
				};
			}
		}
		let h, g = Mc(l, n);
		if (!g.route.action && !g.route.lazy) h = {
			type: "error",
			error: _c(405, {
				method: t.method,
				pathname: n.pathname,
				routeId: g.route.id
			})
		};
		else {
			let e = await Ce(t, n, Qs(a, o, t, n, l, g, p ? [] : r, d), d, null);
			if (h = e[g.route.id], !h) {
				for (let t of l) if (e[t.route.id]) {
					h = e[t.route.id];
					break;
				}
			}
			if (t.signal.aborted) return { shortCircuited: !0 };
		}
		if (Tc(h)) {
			let n;
			return n = m && m.replace != null ? m.replace : oc(h.response.headers.get("Location"), new URL(t.url), c, e.history) === w.location.pathname + w.location.search, await Se(t, h, !0, {
				submission: i,
				replace: n
			}), { shortCircuited: !0 };
		}
		if (Y(h)) {
			let e = hc(l, g.route.id);
			return (m && m.replace) !== !0 && (T = "PUSH"), {
				matches: l,
				pendingActionResult: [
					e.route.id,
					h,
					g.route.id
				]
			};
		}
		return {
			matches: l,
			pendingActionResult: [g.route.id, h]
		};
	}
	async function R(t, n, i, l, u, d, f, p, m, h, g, _, v, y) {
		let b = f || Pc(n, i, l, p), x = p || m || Nc(b), S = !M && !g;
		if (d) {
			if (S) {
				let e = _e(v);
				L({
					navigation: b,
					...e === void 0 ? {} : { actionData: e }
				}, { flushSync: _ });
			}
			let e = await Ke(i, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = gc(s.activeRoutes);
					return {
						matches: t,
						loaderData: {},
						errors: { [n.id]: e.error }
					};
				}
				let t = hc(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					loaderData: {},
					errors: { [t]: e.error }
				};
			} else if (e.matches) i = e.matches;
			else {
				let { error: e, notFoundMatches: t, route: r } = Be(n.pathname);
				return {
					matches: t,
					loaderData: {},
					errors: { [r.id]: e }
				};
			}
		}
		let C = s.activeRoutes, { dsMatches: T, revalidatingFetchers: E } = Ns(t, u, a, o, e.history, w, i, x, n, g ? [] : r, g === !0, ee, te, F, ae, ie, C, c, e.patchRoutesOnNavigation != null, s.branches, v, y);
		if (re = ++ne, !e.dataStrategy && !T.some((e) => e.shouldLoad) && !T.some((e) => e.route.middleware && e.route.middleware.length > 0) && E.length === 0) {
			let e = new Map(w.fetchers), t = Pe(e);
			return fe(n, {
				matches: i,
				loaderData: {},
				errors: v && Y(v[1]) ? { [v[0]]: v[1].error } : null,
				...mc(v),
				...t ? { fetchers: e } : {}
			}, { flushSync: _ }), { shortCircuited: !0 };
		}
		if (S) {
			let e = {};
			if (!d) {
				e.navigation = b;
				let t = _e(v);
				t !== void 0 && (e.actionData = t);
			}
			E.length > 0 && (e.fetchers = ve(E)), L(e, { flushSync: _ });
		}
		E.forEach((e) => {
			Me(e.key), e.controller && N.set(e.key, e.controller);
		});
		let D = () => E.forEach((e) => Me(e.key));
		O && O.signal.addEventListener("abort", D);
		let { loaderResults: k, fetcherResults: A } = await we(T, E, t, n, u);
		if (t.signal.aborted) return { shortCircuited: !0 };
		O && O.signal.removeEventListener("abort", D), E.forEach((e) => N.delete(e.key));
		let j = vc(k);
		if (j) return await Se(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		if (j = vc(A), j) return ie.add(j.key), await Se(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		let P = new Map(w.fetchers), { loaderData: oe, errors: I } = fc(w, i, k, v, E, A, P);
		g && w.errors && (I = {
			...w.errors,
			...I
		});
		let se = Pe(P), ce = Fe(re, P), le = se || ce || E.length > 0;
		return {
			matches: i,
			loaderData: oe,
			errors: I,
			...le ? { workingFetchers: P } : {}
		};
	}
	function _e(e) {
		if (e && !Y(e[1])) return { [e[0]]: e[1].data };
		if (w.actionData) return Object.keys(w.actionData).length === 0 ? null : w.actionData;
	}
	function ve(e) {
		let t = new Map(w.fetchers);
		return e.forEach((e) => {
			let n = t.get(e.key), r = Ic(void 0, n ? n.data : void 0);
			t.set(e.key, r);
		}), t;
	}
	async function ye(t, n, r, i) {
		Me(t);
		let a = (i && i.flushSync) === !0, o = s.activeRoutes, l = js(w.location, w.matches, c, r, n, i?.relative), u = ho(o, l, c, !1, s.branches), d = Ge(u, o, l);
		if (d.active && d.matches && (u = d.matches), !u) {
			De(t, n, _c(404, { pathname: l }), { flushSync: a });
			return;
		}
		let { path: f, submission: p, error: m } = Ms(!0, l, i);
		if (m) {
			De(t, n, m, { flushSync: a });
			return;
		}
		let h = e.getContext ? await e.getContext() : new ao(), g = (i && i.preventScrollReset) === !0;
		if (p && X(p.formMethod)) {
			await be(t, n, f, u, h, d.active, a, g, p, i && i.defaultShouldRevalidate);
			return;
		}
		ae.set(t, {
			routeId: n,
			path: f
		}), await xe(t, n, f, u, h, d.active, a, g, p);
	}
	async function be(t, n, i, l, u, d, f, p, m, h) {
		Te(), ae.delete(t), Ee(t, Lc(m, w.fetchers.get(t)), { flushSync: f });
		let g = new AbortController(), _ = sc(e.history, i, g.signal, m);
		if (d) {
			let e = await Ke(l, new URL(_.url).pathname, _.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				De(t, n, e.error, { flushSync: f });
				return;
			} else if (e.matches) l = e.matches;
			else {
				De(t, n, _c(404, { pathname: i }), { flushSync: f });
				return;
			}
		}
		let v = Mc(l, i);
		if (!v.route.action && !v.route.lazy) {
			De(t, n, _c(405, {
				method: m.formMethod,
				pathname: i,
				routeId: n
			}), { flushSync: f });
			return;
		}
		N.set(t, g);
		let y = ne, b = Qs(a, o, _, i, l, v, r, u), x = await Ce(_, i, b, u, t), S = x[v.route.id];
		if (!S) {
			for (let e of b) if (x[e.route.id]) {
				S = x[e.route.id];
				break;
			}
		}
		if (_.signal.aborted) {
			N.get(t) === g && N.delete(t);
			return;
		}
		if (F.has(t)) {
			if (Tc(S) || Y(S)) {
				Ee(t, Rc(void 0));
				return;
			}
		} else {
			if (Tc(S)) if (N.delete(t), re > y) {
				Ee(t, Rc(void 0));
				return;
			} else return ie.add(t), Ee(t, Ic(m)), Se(_, S, !1, {
				fetcherSubmission: m,
				preventScrollReset: p
			});
			if (Y(S)) {
				De(t, n, S.error);
				return;
			}
		}
		let C = w.navigation.location || w.location, E = sc(e.history, C, g.signal), D = s.activeRoutes, k = w.navigation.state === "idle" ? w.matches : ho(D, w.navigation.location, c, !1, s.branches);
		G(k, "Didn't find any matches after fetcher action");
		let A = ++ne;
		P.set(t, A);
		let { dsMatches: j, revalidatingFetchers: M } = Ns(E, u, a, o, e.history, w, k, m, C, r, !1, ee, te, F, ae, ie, D, c, e.patchRoutesOnNavigation != null, s.branches, [v.route.id, S], h), oe = Ic(m, S.data), I = new Map(w.fetchers);
		I.set(t, oe), M.filter((e) => e.key !== t).forEach((e) => {
			let t = e.key, n = I.get(t), r = Ic(void 0, n ? n.data : void 0);
			I.set(t, r), Me(t), e.controller && N.set(t, e.controller);
		}), L({ fetchers: I });
		let se = () => M.forEach((e) => Me(e.key));
		g.signal.addEventListener("abort", se);
		let { loaderResults: ce, fetcherResults: le } = await we(j, M, E, C, u);
		if (g.signal.aborted) return;
		g.signal.removeEventListener("abort", se), P.delete(t), N.delete(t), M.forEach((e) => N.delete(e.key));
		let ue = w.fetchers.has(t), de = (e) => {
			if (!ue) return e;
			let n = new Map(e.fetchers);
			return n.set(t, Rc(S.data)), {
				...e,
				fetchers: n
			};
		}, pe = vc(ce);
		if (pe) return w = de(w), Se(E, pe.result, !1, { preventScrollReset: p });
		if (pe = vc(le), pe) return ie.add(pe.key), w = de(w), Se(E, pe.result, !1, { preventScrollReset: p });
		let me = new Map(w.fetchers);
		ue && me.set(t, Rc(S.data));
		let { loaderData: he, errors: ge } = fc(w, k, ce, void 0, M, le, me);
		Fe(A, me), w.navigation.state === "loading" && A > re ? (G(T, "Expected pending action"), O && O.abort(), fe(w.navigation.location, {
			matches: k,
			loaderData: he,
			errors: ge,
			fetchers: me
		})) : (L({
			errors: ge,
			loaderData: pc(w.loaderData, he, k, ge),
			fetchers: me
		}), ee = !1);
	}
	async function xe(t, n, i, s, c, l, u, d, f) {
		let p = w.fetchers.get(t);
		Ee(t, Ic(f, p ? p.data : void 0), { flushSync: u });
		let m = new AbortController(), h = sc(e.history, i, m.signal);
		if (l) {
			let e = await Ke(s, new URL(h.url).pathname, h.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				De(t, n, e.error, { flushSync: u });
				return;
			} else if (e.matches) s = e.matches;
			else {
				De(t, n, _c(404, { pathname: i }), { flushSync: u });
				return;
			}
		}
		let g = Mc(s, i);
		N.set(t, m);
		let _ = ne, v = await Ce(h, i, Qs(a, o, h, i, s, g, r, c), c, t), y = v[g.route.id];
		if (!y) {
			for (let e of s) if (v[e.route.id]) {
				y = v[e.route.id];
				break;
			}
		}
		if (N.get(t) === m && N.delete(t), !h.signal.aborted) {
			if (F.has(t)) {
				Ee(t, Rc(void 0));
				return;
			}
			if (Tc(y)) if (re > _) {
				Ee(t, Rc(void 0));
				return;
			} else {
				ie.add(t), await Se(h, y, !1, { preventScrollReset: d });
				return;
			}
			if (Y(y)) {
				De(t, n, y.error);
				return;
			}
			Ee(t, Rc(y.data));
		}
	}
	async function Se(r, i, a, { submission: o, fetcherSubmission: s, preventScrollReset: l, replace: u } = {}) {
		a || (E?.resolve(), E = null), i.response.headers.has("X-Remix-Revalidate") && (ee = !0);
		let d = i.response.headers.get("Location");
		G(d, "Expected a Location header on the redirect Response"), d = oc(d, new URL(r.url), c, e.history);
		let f = eo(w.location, d, { _isRedirect: !0 });
		if (n) {
			let e = !1;
			if (i.response.headers.has("X-Remix-Reload-Document")) e = !0;
			else if (Io(d)) {
				let n = ro(t, d, !0);
				e = n.origin !== t.location.origin || J(n.pathname, c) == null;
			}
			if (e) {
				u ? t.location.replace(d) : t.location.assign(d);
				return;
			}
		}
		O = null;
		let p = u === !0 || i.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: m, formAction: h, formEncType: g } = w.navigation;
		!o && !s && m && h && g && (o = Nc(w.navigation));
		let _ = o || s;
		_s.has(i.response.status) && _ && X(_.formMethod) ? await he(p, f, {
			submission: {
				..._,
				formAction: d
			},
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		}) : await he(p, f, {
			overrideNavigation: Pc(f, [], p, o),
			fetcherSubmission: s,
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		});
	}
	async function Ce(e, t, n, r, i) {
		let a, o = {};
		try {
			a = await $s(l, e, t, n, i, r, !1);
		} catch (e) {
			return n.filter((e) => e.shouldLoad).forEach((t) => {
				o[t.route.id] = {
					type: "error",
					error: e
				};
			}), o;
		}
		if (e.signal.aborted) return o;
		if (!X(e.method)) for (let e of n) {
			if (a[e.route.id]?.type === "error") break;
			!a.hasOwnProperty(e.route.id) && !w.loaderData.hasOwnProperty(e.route.id) && (!w.errors || !w.errors.hasOwnProperty(e.route.id)) && e.shouldCallHandler() && (a[e.route.id] = {
				type: "error",
				result: /* @__PURE__ */ Error(`No result returned from dataStrategy for route ${e.route.id}`)
			});
		}
		for (let [t, r] of Object.entries(a)) if (wc(r)) {
			let i = r.result;
			o[t] = {
				type: "redirect",
				response: rc(i, e, t, n, c)
			};
		} else o[t] = await nc(r);
		return o;
	}
	async function we(e, t, n, r, i) {
		let a = Ce(n, r, e, i, null), o = Promise.all(t.map(async (e) => {
			if (e.matches && e.match && e.request && e.controller) {
				let t = (await Ce(e.request, e.path, e.matches, i, e.key))[e.match.route.id];
				return { [e.key]: t };
			} else return Promise.resolve({ [e.key]: {
				type: "error",
				error: _c(404, { pathname: e.path })
			} });
		}));
		return {
			loaderResults: await a,
			fetcherResults: (await o).reduce((e, t) => Object.assign(e, t), {})
		};
	}
	function Te() {
		ee = !0, ae.forEach((e, t) => {
			N.has(t) && te.add(t), Me(t);
		});
	}
	function Ee(e, t, n = {}) {
		let r = new Map(w.fetchers);
		r.set(e, t), L({ fetchers: r }, { flushSync: (n && n.flushSync) === !0 });
	}
	function De(e, t, n, r = {}) {
		let i = hc(w.matches, t), a = new Map(w.fetchers);
		Ae(a, e), L({
			errors: { [i.route.id]: n },
			fetchers: a
		}, { flushSync: (r && r.flushSync) === !0 });
	}
	function Oe(e) {
		return oe.set(e, (oe.get(e) || 0) + 1), F.has(e) && F.delete(e), w.fetchers.get(e) || ys;
	}
	function ke(e, t) {
		Me(e, t?.reason), Ee(e, Rc(null));
	}
	function Ae(e, t) {
		let n = w.fetchers.get(t);
		N.has(t) && !(n && n.state === "loading" && P.has(t)) && Me(t), ae.delete(t), P.delete(t), ie.delete(t), F.delete(t), te.delete(t), e.delete(t);
	}
	function je(e) {
		let t = (oe.get(e) || 0) - 1;
		t <= 0 ? (oe.delete(e), F.add(e)) : oe.set(e, t), L({ fetchers: new Map(w.fetchers) });
	}
	function Me(e, t) {
		let n = N.get(e);
		n && (n.abort(t), N.delete(e));
	}
	function Ne(e, t) {
		for (let n of e) {
			let e = t.get(n);
			G(e, `Expected fetcher: ${n}`);
			let r = Rc(e.data);
			t.set(n, r);
		}
	}
	function Pe(e) {
		let t = [], n = !1;
		for (let r of ie) {
			let i = e.get(r);
			G(i, `Expected fetcher: ${r}`), i.state === "loading" && (ie.delete(r), t.push(r), n = !0);
		}
		return Ne(t, e), n;
	}
	function Fe(e, t) {
		let n = [];
		for (let [r, i] of P) if (i < e) {
			let e = t.get(r);
			G(e, `Expected fetcher: ${r}`), e.state === "loading" && (Me(r), P.delete(r), n.push(r));
		}
		return Ne(n, t), n.length > 0;
	}
	function Ie(e, t) {
		let n = w.blockers.get(e) || bs;
		return I.get(e) !== t && I.set(e, t), n;
	}
	function Le(e) {
		w.blockers.delete(e), I.delete(e);
	}
	function Re(e, t) {
		let n = w.blockers.get(e) || bs;
		G(n.state === "unblocked" && t.state === "blocked" || n.state === "blocked" && t.state === "blocked" || n.state === "blocked" && t.state === "proceeding" || n.state === "blocked" && t.state === "unblocked" || n.state === "proceeding" && t.state === "unblocked", `Invalid blocker state transition: ${n.state} -> ${t.state}`);
		let r = new Map(w.blockers);
		r.set(e, t), L({ blockers: r });
	}
	function ze({ currentLocation: e, nextLocation: t, historyAction: n }) {
		if (I.size === 0) return;
		I.size > 1 && K(!1, "A router only supports one blocker at a time");
		let r = Array.from(I.entries()), [i, a] = r[r.length - 1], o = w.blockers.get(i);
		if (!(o && o.state === "proceeding") && a({
			currentLocation: e,
			nextLocation: t,
			historyAction: n
		})) return i;
	}
	function Be(e) {
		let t = _c(404, { pathname: e }), n = s.activeRoutes, { matches: r, route: i } = gc(n);
		return {
			notFoundMatches: r,
			route: i,
			error: t
		};
	}
	function Ve(e, t, n) {
		if (m = e, g = t, h = n || null, !_ && w.navigation === vs) {
			_ = !0;
			let e = We(w.location, w.matches);
			e != null && L({ restoreScrollPosition: e });
		}
		return () => {
			m = null, g = null, h = null;
		};
	}
	function He(e, t) {
		return h && h(e, t.map((e) => go(e, w.loaderData))) || e.key;
	}
	function Ue(e, t) {
		if (m && g) {
			let n = He(e, t);
			m[n] = g();
		}
	}
	function We(e, t) {
		if (m) {
			let n = He(e, t), r = m[n];
			if (typeof r == "number") return r;
		}
		return null;
	}
	function Ge(t, n, r) {
		if (e.patchRoutesOnNavigation) {
			let e = s.branches;
			if (!t) return {
				active: !0,
				matches: ho(n, r, c, !0, e) || []
			};
			if (Object.keys(t[0].params).length > 0) return {
				active: !0,
				matches: ho(n, r, c, !0, e)
			};
		}
		return {
			active: !1,
			matches: null
		};
	}
	async function Ke(t, n, r, i) {
		if (!e.patchRoutesOnNavigation) return {
			type: "success",
			matches: t
		};
		let l = t;
		for (;;) {
			let t = o;
			try {
				await e.patchRoutesOnNavigation({
					signal: r,
					path: n,
					matches: l,
					fetcherKey: i,
					patch: (e, n) => {
						r.aborted || zs(e, n, s, t, a, !1);
					}
				});
			} catch (e) {
				return {
					type: "error",
					error: e,
					partialMatches: l
				};
			}
			if (r.aborted) return { type: "aborted" };
			let u = s.branches, d = ho(s.activeRoutes, n, c, !1, u), f = null;
			if (d && (Object.keys(d[0].params).length === 0 || (f = ho(s.activeRoutes, n, c, !0, u), !(f && l.length < f.length && qe(l, f.slice(0, l.length)))))) return {
				type: "success",
				matches: d
			};
			if (f ||= ho(s.activeRoutes, n, c, !0, u), !f || qe(l, f)) return {
				type: "success",
				matches: null
			};
			l = f;
		}
	}
	function qe(e, t) {
		return e.length === t.length && e.every((e, n) => e.route.id === t[n].route.id);
	}
	function Je(e) {
		o = {}, s.setHmrRoutes(fo(e, a, void 0, o));
	}
	function Ye(e, t, n = !1) {
		zs(e, t, s, o, a, n), s.hasHMRRoutes || L({});
	}
	return C = {
		get basename() {
			return c;
		},
		get future() {
			return u;
		},
		get state() {
			return w;
		},
		get routes() {
			return s.stableRoutes;
		},
		get branches() {
			return s.branches;
		},
		get manifest() {
			return o;
		},
		get window() {
			return t;
		},
		initialize: le,
		subscribe: de,
		enableScrollRestoration: Ve,
		navigate: pe,
		fetch: ye,
		revalidate: me,
		createHref: (t) => e.history.createHref(t),
		encodeLocation: (t) => e.history.encodeLocation(t),
		getFetcher: Oe,
		resetFetcher: ke,
		deleteFetcher: je,
		dispose: ue,
		getBlocker: Ie,
		deleteBlocker: Le,
		patchRoutes: Ye,
		_internalFetchControllers: N,
		_internalSetRoutes: Je,
		_internalSetStateDoNotUseOrYouWillBreakYourApp(e) {
			L(e);
		}
	}, e.instrumentations && (C = rs(C, e.instrumentations.map((e) => e.router).filter(Boolean))), C;
}
function As(e) {
	return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function js(e, t, n, r, i, a) {
	let o, s;
	if (i) {
		o = [];
		for (let e of t) if (o.push(e), e.route.id === i) {
			s = e;
			break;
		}
	} else o = t, s = t[t.length - 1];
	let c = Ho(r || ".", Vo(o), J(e.pathname, n) || e.pathname, a === "path");
	if (r ?? (c.search = e.search, c.hash = e.hash), (r == null || r === "" || r === ".") && s) {
		let e = jc(c.search);
		if (s.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
		else if (!s.route.index && e) {
			let e = new URLSearchParams(c.search), t = e.getAll("index");
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			c.search = n ? `?${n}` : "";
		}
	}
	return n !== "/" && (c.pathname = Fo({
		basename: n,
		pathname: c.pathname
	})), to(c);
}
function Ms(e, t, n) {
	if (!n || !As(n)) return { path: t };
	if (n.formMethod && !Ac(n.formMethod)) return {
		path: t,
		error: _c(405, { method: n.formMethod })
	};
	let r = () => ({
		path: t,
		error: _c(400, { type: "invalid-body" })
	}), i = (n.formMethod || "get").toUpperCase(), a = yc(t);
	if (n.body !== void 0) {
		if (n.formEncType === "text/plain") {
			if (!X(i)) return r();
			let e = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce((e, [t, n]) => `${e}${t}=${n}
`, "") : String(n.body);
			return {
				path: t,
				submission: {
					formMethod: i,
					formAction: a,
					formEncType: n.formEncType,
					formData: void 0,
					json: void 0,
					text: e
				}
			};
		} else if (n.formEncType === "application/json") {
			if (!X(i)) return r();
			try {
				let e = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
				return {
					path: t,
					submission: {
						formMethod: i,
						formAction: a,
						formEncType: n.formEncType,
						formData: void 0,
						json: e,
						text: void 0
					}
				};
			} catch {
				return r();
			}
		}
	}
	G(typeof FormData == "function", "FormData is not available in this environment");
	let o, s;
	if (n.formData) o = lc(n.formData), s = n.formData;
	else if (n.body instanceof FormData) o = lc(n.body), s = n.body;
	else if (n.body instanceof URLSearchParams) o = n.body, s = uc(o);
	else if (n.body == null) o = new URLSearchParams(), s = new FormData();
	else try {
		o = new URLSearchParams(n.body), s = uc(o);
	} catch {
		return r();
	}
	let c = {
		formMethod: i,
		formAction: a,
		formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
		formData: s,
		json: void 0,
		text: void 0
	};
	if (X(c.formMethod)) return {
		path: t,
		submission: c
	};
	let l = q(t);
	return e && l.search && jc(l.search) && o.append("index", ""), l.search = `?${o}`, {
		path: to(l),
		submission: c
	};
}
function Ns(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x) {
	let S = b ? Y(b[1]) ? b[1].error : b[1].data : void 0, C = i.createURL(a.location), w = i.createURL(c), T;
	if (u && a.errors) {
		let e = Object.keys(a.errors)[0];
		T = o.findIndex((t) => t.route.id === e);
	} else if (b && Y(b[1])) {
		let e = b[0];
		T = o.findIndex((t) => t.route.id === e) - 1;
	}
	let E = b ? b[1].statusCode : void 0, D = E && E >= 400, O = {
		currentUrl: C,
		currentParams: a.matches[0]?.params || {},
		nextUrl: w,
		nextParams: o[0].params,
		...s,
		actionResult: S,
		actionStatus: E
	}, k = Qo(o), A = o.map((i, o) => {
		let { route: s } = i, f = null;
		if (T != null && o > T) f = !1;
		else if (s.lazy) f = !0;
		else if (!Ps(s)) f = !1;
		else if (u) {
			let { shouldLoad: e } = Fs(s, a.loaderData, a.errors);
			f = e;
		} else Is(a.loaderData, a.matches[o], i) && (f = !0);
		if (f !== null) return Zs(n, r, e, c, k, i, l, t, f);
		let p = !1;
		typeof x == "boolean" ? p = x : D ? p = !1 : d || C.pathname + C.search === w.pathname + w.search ? p = !0 : C.search === w.search ? Ls(a.matches[o], i) && (p = !0) : p = !0;
		let m = {
			...O,
			defaultShouldRevalidate: p
		}, h = Rs(i, m);
		return Zs(n, r, e, c, k, i, l, t, h, m, x);
	}), j = [];
	return m.forEach((e, s) => {
		if (u || !o.some((t) => t.route.id === e.routeId) || p.has(s)) return;
		let c = a.fetchers.get(s), m = c && c.state !== "idle" && c.data === void 0, b = ho(g, e.path, _ ?? "/", !1, y);
		if (!b) {
			if (v && m) return;
			j.push({
				key: s,
				routeId: e.routeId,
				path: e.path,
				matches: null,
				match: null,
				request: null,
				controller: null
			});
			return;
		}
		if (h.has(s)) return;
		let S = Mc(b, e.path), C = new AbortController(), w = sc(i, e.path, C.signal), T = null;
		if (f.has(s)) f.delete(s), T = Qs(n, r, w, e.path, b, S, l, t);
		else if (m) d && (T = Qs(n, r, w, e.path, b, S, l, t));
		else {
			let i;
			i = typeof x == "boolean" ? x : D ? !1 : d;
			let a = {
				...O,
				defaultShouldRevalidate: i
			};
			Rs(S, a) && (T = Qs(n, r, w, e.path, b, S, l, t, a));
		}
		T && j.push({
			key: s,
			routeId: e.routeId,
			path: e.path,
			matches: T,
			match: S,
			request: w,
			controller: C
		});
	}), {
		dsMatches: A,
		revalidatingFetchers: j
	};
}
function Ps(e) {
	return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function Fs(e, t, n) {
	if (e.lazy) return {
		shouldLoad: !0,
		renderFallback: !0
	};
	if (!Ps(e)) return {
		shouldLoad: !1,
		renderFallback: !1
	};
	let r = t != null && e.id in t, i = n != null && n[e.id] !== void 0;
	if (!r && i) return {
		shouldLoad: !1,
		renderFallback: !1
	};
	if (typeof e.loader == "function" && e.loader.hydrate === !0) return {
		shouldLoad: !0,
		renderFallback: !r
	};
	let a = !r && !i;
	return {
		shouldLoad: a,
		renderFallback: a
	};
}
function Is(e, t, n) {
	let r = !t || n.route.id !== t.route.id, i = !e.hasOwnProperty(n.route.id);
	return r || i;
}
function Ls(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"];
}
function Rs(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
function zs(e, t, n, r, i, a) {
	let o;
	if (e) {
		let t = r[e];
		G(t, `No route found to patch children into: routeId = ${e}`), t.children ||= [], o = t.children;
	} else o = n.activeRoutes;
	let s = [], c = [];
	if (t.forEach((e) => {
		let t = o.find((t) => Bs(e, t));
		t ? c.push({
			existingRoute: t,
			newRoute: e
		}) : s.push(e);
	}), s.length > 0) {
		let t = fo(s, i, [
			e || "_",
			"patch",
			String(o?.length || "0")
		], r);
		o.push(...t);
	}
	if (a && c.length > 0) for (let e = 0; e < c.length; e++) {
		let { existingRoute: t, newRoute: n } = c[e], r = t, [a] = fo([n], i, [], {}, !0);
		Object.assign(r, {
			element: a.element ? a.element : r.element,
			errorElement: a.errorElement ? a.errorElement : r.errorElement,
			hydrateFallbackElement: a.hydrateFallbackElement ? a.hydrateFallbackElement : r.hydrateFallbackElement
		});
	}
	n.hasHMRRoutes || n.setRoutes([...n.activeRoutes]);
}
function Bs(e, t) {
	return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children?.every((e, n) => t.children?.some((t) => Bs(e, t))) ?? !1 : !1;
}
var Vs = /* @__PURE__ */ new WeakMap(), Hs = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
	let i = n[t.id];
	if (G(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object") return;
	let a = i.lazy[e];
	if (!a) return;
	let o = Vs.get(i);
	o || (o = {}, Vs.set(i, o));
	let s = o[e];
	if (s) return s;
	let c = (async () => {
		let t = so(e), n = i[e] !== void 0 && e !== "hasErrorBoundary";
		if (t) K(!t, "Route property " + e + " is not a supported lazy route property. This property will be ignored."), o[e] = Promise.resolve();
		else if (n) K(!1, `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);
		else {
			let t = await a();
			t != null && (Object.assign(i, { [e]: t }), Object.assign(i, r(i)));
		}
		typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((e) => e === void 0) && (i.lazy = void 0));
	})();
	return o[e] = c, c;
}, Us = /* @__PURE__ */ new WeakMap();
function Ws(e, t, n, r, i) {
	let a = n[e.id];
	if (G(a, "No route found in manifest"), !e.lazy) return {
		lazyRoutePromise: void 0,
		lazyHandlerPromise: void 0
	};
	if (typeof e.lazy == "function") {
		let t = Us.get(a);
		if (t) return {
			lazyRoutePromise: t,
			lazyHandlerPromise: t
		};
		let n = (async () => {
			G(typeof e.lazy == "function", "No lazy route function found");
			let t = await e.lazy(), n = {};
			for (let e in t) {
				let r = t[e];
				if (r === void 0) continue;
				let i = lo(e), o = a[e] !== void 0 && e !== "hasErrorBoundary";
				i ? K(!i, "Route property " + e + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : o ? K(!o, `Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`) : n[e] = r;
			}
			Object.assign(a, n), Object.assign(a, {
				...r(a),
				lazy: void 0
			});
		})();
		return Us.set(a, n), n.catch(() => {}), {
			lazyRoutePromise: n,
			lazyHandlerPromise: n
		};
	}
	let o = Object.keys(e.lazy), s = [], c;
	for (let a of o) {
		if (i && i.includes(a)) continue;
		let o = Hs({
			key: a,
			route: e,
			manifest: n,
			mapRouteProperties: r
		});
		o && (s.push(o), a === t && (c = o));
	}
	let l = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
	return l?.catch(() => {}), c?.catch(() => {}), {
		lazyRoutePromise: l,
		lazyHandlerPromise: c
	};
}
async function Gs(e) {
	let t = e.matches.filter((e) => e.shouldLoad), n = {};
	return (await Promise.all(t.map((e) => e.resolve()))).forEach((e, r) => {
		n[t[r].route.id] = e;
	}), n;
}
async function Ks(e) {
	return e.matches.some((e) => e.route.middleware) ? qs(e, () => Gs(e)) : Gs(e);
}
function qs(e, t) {
	return Js(e, t, (e) => {
		if (kc(e)) throw e;
		return e;
	}, Sc, n);
	function n(t, n, r) {
		if (r) return Promise.resolve(Object.assign(r.value, { [n]: {
			type: "error",
			result: t
		} }));
		{
			let { matches: r } = e, i = hc(r, r[Math.min(Math.max(r.findIndex((e) => e.route.id === n), 0), Math.max(r.findIndex((e) => e.shouldCallHandler()), 0))].route.id).route.id;
			return Promise.resolve({ [i]: {
				type: "error",
				result: t
			} });
		}
	}
}
async function Js(e, t, n, r, i) {
	let { matches: a, ...o } = e;
	return await Ys(o, a.flatMap((e) => e.route.middleware ? e.route.middleware.map((t) => [e.route.id, t]) : []), t, n, r, i);
}
async function Ys(e, t, n, r, i, a, o = 0) {
	let { request: s } = e;
	if (s.signal.aborted) throw s.signal.reason ?? /* @__PURE__ */ Error(`Request aborted: ${s.method} ${s.url}`);
	let c = t[o];
	if (!c) return await n();
	let [l, u] = c, d, f = async () => {
		if (d) throw Error("You may only call `next()` once per middleware");
		try {
			return d = { value: await Ys(e, t, n, r, i, a, o + 1) }, d.value;
		} catch (e) {
			return d = { value: await a(e, l, d) }, d.value;
		}
	};
	try {
		let t = await u(e, f), n = t == null ? void 0 : r(t);
		return i(n) ? n : d ? n ?? d.value : (d = { value: await f() }, d.value);
	} catch (e) {
		return await a(e, l, d);
	}
}
function Xs(e, t, n, r, i) {
	let a = Hs({
		key: "middleware",
		route: r.route,
		manifest: t,
		mapRouteProperties: e
	}), o = Ws(r.route, X(n.method) ? "action" : "loader", t, e, i);
	return {
		middleware: a,
		route: o.lazyRoutePromise,
		handler: o.lazyHandlerPromise
	};
}
function Zs(e, t, n, r, i, a, o, s, c, l = null, u) {
	let d = !1, f = Xs(e, t, n, a, o);
	return {
		...a,
		_lazyPromises: f,
		shouldLoad: c,
		shouldRevalidateArgs: l,
		shouldCallHandler(e) {
			return d = !0, l ? typeof u == "boolean" ? Rs(a, {
				...l,
				defaultShouldRevalidate: u
			}) : typeof e == "boolean" ? Rs(a, {
				...l,
				defaultShouldRevalidate: e
			}) : Rs(a, l) : c;
		},
		resolve(e) {
			let { lazy: t, loader: o, middleware: l } = a.route, u = d || c || e && !X(n.method) && (t || o), p = l && l.length > 0 && !o && !t;
			return u && (X(n.method) || !p) ? ec({
				request: n,
				path: r,
				pattern: i,
				match: a,
				lazyHandlerPromise: f?.handler,
				lazyRoutePromise: f?.route,
				handlerOverride: e,
				scopedContext: s
			}) : Promise.resolve({
				type: "data",
				result: void 0
			});
		}
	};
}
function Qs(e, t, n, r, i, a, o, s, c = null) {
	return i.map((l) => l.route.id === a.route.id ? Zs(e, t, n, r, Qo(i), l, o, s, !0, c) : {
		...l,
		shouldLoad: !1,
		shouldRevalidateArgs: c,
		shouldCallHandler: () => !1,
		_lazyPromises: Xs(e, t, n, l, o),
		resolve: () => Promise.resolve({
			type: "data",
			result: void 0
		})
	});
}
async function $s(e, t, n, r, i, a, o) {
	r.some((e) => e._lazyPromises?.middleware) && await Promise.all(r.map((e) => e._lazyPromises?.middleware));
	let s = {
		request: t,
		url: cc(t, n),
		pattern: Qo(r),
		params: r[0].params,
		context: a,
		matches: r
	}, c = o ? () => {
		throw Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	} : (e) => {
		let t = s;
		return qs(t, () => e({
			...t,
			fetcherKey: i,
			runClientMiddleware: () => {
				throw Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
			}
		}));
	}, l = await e({
		...s,
		fetcherKey: i,
		runClientMiddleware: c
	});
	try {
		await Promise.all(r.flatMap((e) => [e._lazyPromises?.handler, e._lazyPromises?.route]));
	} catch {}
	return l;
}
async function ec({ request: e, path: t, pattern: n, match: r, lazyHandlerPromise: i, lazyRoutePromise: a, handlerOverride: o, scopedContext: s }) {
	let c, l, u = X(e.method), d = u ? "action" : "loader", f = (i) => {
		let a, c = new Promise((e, t) => a = t);
		l = () => a(), e.signal.addEventListener("abort", l);
		let u = (a) => typeof i == "function" ? i({
			request: e,
			url: cc(e, t),
			pattern: n,
			params: r.params,
			context: s
		}, ...a === void 0 ? [] : [a]) : Promise.reject(/* @__PURE__ */ Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${r.route.id}]`)), f = (async () => {
			try {
				return {
					type: "data",
					result: await (o ? o((e) => u(e)) : u())
				};
			} catch (e) {
				return {
					type: "error",
					result: e
				};
			}
		})();
		return Promise.race([f, c]);
	};
	try {
		let t = u ? r.route.action : r.route.loader;
		if (i || a) if (t) {
			let e, [n] = await Promise.all([
				f(t).catch((t) => {
					e = t;
				}),
				i,
				a
			]);
			if (e !== void 0) throw e;
			c = n;
		} else {
			await i;
			let t = u ? r.route.action : r.route.loader;
			if (t) [c] = await Promise.all([f(t), a]);
			else if (d === "action") {
				let t = new URL(e.url), n = t.pathname + t.search;
				throw _c(405, {
					method: e.method,
					pathname: n,
					routeId: r.route.id
				});
			} else return {
				type: "data",
				result: void 0
			};
		}
		else if (t) c = await f(t);
		else {
			let t = new URL(e.url);
			throw _c(404, { pathname: t.pathname + t.search });
		}
	} catch (e) {
		return {
			type: "error",
			result: e
		};
	} finally {
		l && e.signal.removeEventListener("abort", l);
	}
	return c;
}
async function tc(e) {
	let t = e.headers.get("Content-Type");
	return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function nc(e) {
	let { result: t, type: n } = e;
	if (Dc(t)) {
		let e;
		try {
			e = await tc(t);
		} catch (e) {
			return {
				type: "error",
				error: e
			};
		}
		return n === "error" ? {
			type: "error",
			error: new Xo(t.status, t.statusText, e),
			statusCode: t.status,
			headers: t.headers
		} : {
			type: "data",
			data: e,
			statusCode: t.status,
			headers: t.headers
		};
	}
	return n === "error" ? Ec(t) ? t.data instanceof Error ? {
		type: "error",
		error: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: xc(t),
		statusCode: Zo(t) ? t.status : void 0,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: t,
		statusCode: Zo(t) ? t.status : void 0
	} : Ec(t) ? {
		type: "data",
		data: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "data",
		data: t
	};
}
function rc(e, t, n, r, i) {
	let a = e.headers.get("Location");
	if (G(a, "Redirects returned/thrown from loaders/actions must have a Location header"), !Io(a)) {
		let o = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
		a = js(new URL(t.url), o, i, a), e.headers.set("Location", a);
	}
	return e;
}
var ic = [
	"about:",
	"blob:",
	"chrome:",
	"chrome-untrusted:",
	"content:",
	"data:",
	"devtools:",
	"file:",
	"filesystem:",
	"javascript:"
];
function ac(e) {
	try {
		return ic.includes(new URL(e).protocol);
	} catch {
		return !1;
	}
}
function oc(e, t, n, r) {
	if (Io(e)) {
		let r = e, i = qa.test(r) ? new URL(Ja(r, t.protocol)) : new URL(r);
		if (ac(i.toString())) throw Error("Invalid redirect location");
		let a = J(i.pathname, n) != null;
		if (i.origin === t.origin && a) return Uo(i.pathname) + i.search + i.hash;
	}
	try {
		if (ac(r.createURL(e).toString())) throw Error("Invalid redirect location");
	} catch {}
	return e;
}
function sc(e, t, n, r) {
	let i = e.createURL(yc(t)).toString(), a = { signal: n };
	if (r && X(r.formMethod)) {
		let { formMethod: e, formEncType: t } = r;
		a.method = e.toUpperCase(), t === "application/json" ? (a.headers = new Headers({ "Content-Type": t }), a.body = JSON.stringify(r.json)) : t === "text/plain" ? a.body = r.text : t === "application/x-www-form-urlencoded" && r.formData ? a.body = lc(r.formData) : a.body = r.formData;
	}
	return new Request(i, a);
}
function cc(e, t) {
	let n = new URL(e.url), r = typeof t == "string" ? q(t) : t;
	if (n.pathname = r.pathname || "/", r.search) {
		let e = new URLSearchParams(r.search), t = e.getAll("index");
		e.delete("index");
		for (let n of t.filter(Boolean)) e.append("index", n);
		n.search = e.size ? `?${e.toString()}` : "";
	} else n.search = "";
	return n.hash = r.hash || "", n;
}
function lc(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function uc(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function dc(e, t, n, r = !1, i = !1) {
	let a = {}, o = null, s, c = !1, l = {}, u = n && Y(n[1]) ? n[1].error : void 0;
	return e.forEach((n) => {
		if (!(n.route.id in t)) return;
		let d = n.route.id, f = t[d];
		if (G(!Tc(f), "Cannot handle redirect results in processLoaderData"), Y(f)) {
			let t = f.error;
			if (u !== void 0 && (t = u, u = void 0), o ||= {}, i) o[d] = t;
			else {
				let n = hc(e, d);
				o[n.route.id] ?? (o[n.route.id] = t);
			}
			r || (a[d] = Cs), c || (c = !0, s = Zo(f.error) ? f.error.status : 500), f.headers && (l[d] = f.headers);
		} else a[d] = f.data, f.statusCode && f.statusCode !== 200 && !c && (s = f.statusCode), f.headers && (l[d] = f.headers);
	}), u !== void 0 && n && (o = { [n[0]]: u }, n[2] && (a[n[2]] = void 0)), {
		loaderData: a,
		errors: o,
		statusCode: s || 200,
		loaderHeaders: l
	};
}
function fc(e, t, n, r, i, a, o) {
	let { loaderData: s, errors: c } = dc(t, n, r);
	return i.filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad)).forEach((t) => {
		let { key: n, match: r, controller: i } = t;
		if (i && i.signal.aborted) return;
		let s = a[n];
		if (G(s, "Did not find corresponding fetcher result"), Y(s)) {
			let t = hc(e.matches, r?.route.id);
			c && c[t.route.id] || (c = {
				...c,
				[t.route.id]: s.error
			}), o.delete(n);
		} else if (Tc(s)) G(!1, "Unhandled fetcher revalidation redirect");
		else {
			let e = Rc(s.data);
			o.set(n, e);
		}
	}), {
		loaderData: s,
		errors: c
	};
}
function pc(e, t, n, r) {
	let i = Object.entries(t).filter(([, e]) => e !== Cs).reduce((e, [t, n]) => (e[t] = n, e), {});
	for (let a of n) {
		let n = a.route.id;
		if (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && a.route.loader && (i[n] = e[n]), r && r.hasOwnProperty(n)) break;
	}
	return i;
}
function mc(e) {
	return e ? Y(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } } : {};
}
function hc(e, t) {
	return (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e]).reverse().find((e) => e.route.hasErrorBoundary === !0) || e[0];
}
function gc(e) {
	let t = e.length === 1 ? e[0] : e.find((e) => e.index || !e.path || e.path === "/") || { id: "__shim-error-route__" };
	return {
		matches: [{
			params: {},
			pathname: "",
			pathnameBase: "",
			route: t
		}],
		route: t
	};
}
function _c(e, { pathname: t, routeId: n, method: r, type: i, message: a } = {}) {
	let o = "Unknown Server Error", s = "Unknown @remix-run/router error";
	return e === 400 ? (o = "Bad Request", r && t && n ? s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", s = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (o = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (o = "Method Not Allowed", r && t && n ? s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (s = `Invalid request method "${r.toUpperCase()}"`)), new Xo(e || 500, o, Error(s), !0);
}
function vc(e) {
	let t = Object.entries(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let [n, r] = t[e];
		if (Tc(r)) return {
			key: n,
			result: r
		};
	}
}
function yc(e) {
	return to({
		...typeof e == "string" ? q(e) : e,
		hash: ""
	});
}
function bc(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function xc(e) {
	return new Xo(e.init?.status ?? 500, e.init?.statusText ?? "Internal Server Error", e.data);
}
function Sc(e) {
	return typeof e == "object" && !!e && Object.entries(e).every(([e, t]) => typeof e == "string" && Cc(t));
}
function Cc(e) {
	return typeof e == "object" && !!e && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function wc(e) {
	return Dc(e.result) && gs.has(e.result.status);
}
function Y(e) {
	return e.type === "error";
}
function Tc(e) {
	return (e && e.type) === "redirect";
}
function Ec(e) {
	return typeof e == "object" && !!e && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function Dc(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && e.body !== void 0;
}
function Oc(e) {
	return gs.has(e);
}
function kc(e) {
	return Dc(e) && Oc(e.status) && e.headers.has("Location");
}
function Ac(e) {
	return hs.has(e.toUpperCase());
}
function X(e) {
	return ps.has(e.toUpperCase());
}
function jc(e) {
	return new URLSearchParams(e).getAll("index").some((e) => e === "");
}
function Mc(e, t) {
	let n = typeof t == "string" ? q(t).search : t.search;
	if (e[e.length - 1].route.index && jc(n || "")) return e[e.length - 1];
	let r = Bo(e);
	return r[r.length - 1];
}
function Nc(e) {
	let { formMethod: t, formAction: n, formEncType: r, text: i, formData: a, json: o } = e;
	if (!(!t || !n || !r)) {
		if (i != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: void 0,
			text: i
		};
		if (a != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: a,
			json: void 0,
			text: void 0
		};
		if (o !== void 0) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: o,
			text: void 0
		};
	}
}
function Pc(e, t, n, r) {
	return r ? {
		state: "loading",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: r.formMethod,
		formAction: r.formAction,
		formEncType: r.formEncType,
		formData: r.formData,
		json: r.json,
		text: r.text
	} : {
		state: "loading",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	};
}
function Fc(e, t, n, r) {
	return {
		state: "submitting",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: r.formMethod,
		formAction: r.formAction,
		formEncType: r.formEncType,
		formData: r.formData,
		json: r.json,
		text: r.text
	};
}
function Ic(e, t) {
	return e ? {
		state: "loading",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t
	} : {
		state: "loading",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: t
	};
}
function Lc(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0
	};
}
function Rc(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e
	};
}
function zc(e, t) {
	try {
		let n = e.sessionStorage.getItem(Ss);
		if (n) {
			let e = JSON.parse(n);
			for (let [n, r] of Object.entries(e || {})) r && Array.isArray(r) && t.set(n, new Set(r || []));
		}
	} catch {}
}
function Bc(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [e, r] of t) n[e] = [...r];
		try {
			e.sessionStorage.setItem(Ss, JSON.stringify(n));
		} catch (e) {
			K(!1, `Failed to save applied view transitions in sessionStorage (${e}).`);
		}
	}
}
function Vc() {
	let e, t, n = new Promise((r, i) => {
		e = async (e) => {
			r(e);
			try {
				await n;
			} catch {}
		}, t = async (e) => {
			i(e);
			try {
				await n;
			} catch {}
		};
	});
	return {
		promise: n,
		resolve: e,
		reject: t
	};
}
var Hc = o(null);
Hc.displayName = "DataRouter";
var Uc = o(null);
Uc.displayName = "DataRouterState";
var Wc = o(!1);
function Gc() {
	return a(Wc);
}
var Kc = o({ isTransitioning: !1 });
Kc.displayName = "ViewTransition";
var qc = o(/* @__PURE__ */ new Map());
qc.displayName = "Fetchers";
var Jc = o(null);
Jc.displayName = "Await";
var Z = o(null);
Z.displayName = "Navigation";
var Yc = o(null);
Yc.displayName = "Location";
var Q = o({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
Q.displayName = "Route";
var Xc = o(null);
Xc.displayName = "RouteError";
var Zc = "REACT_ROUTER_ERROR", Qc = "REDIRECT", $c = "ROUTE_ERROR_RESPONSE";
function el(e) {
	if (e.startsWith(`${Zc}:${Qc}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function tl(e) {
	if (e.startsWith(`${Zc}:${$c}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new Xo(t.status, t.statusText, t.data);
	} catch {}
}
function nl(e, { relative: t } = {}) {
	G(rl(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: n, navigator: r } = a(Z), { hash: i, pathname: o, search: s } = fl(e, { relative: t }), c = o;
	return n !== "/" && (c = o === "/" ? n : Wo([n, o])), r.createHref({
		pathname: c,
		search: s,
		hash: i
	});
}
function rl() {
	return a(Yc) != null;
}
function $() {
	return G(rl(), "useLocation() may be used only in the context of a <Router> component."), a(Yc).location;
}
function il() {
	return a(Yc).navigationType;
}
var al = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ol(e) {
	a(Z).static || y(e);
}
function sl() {
	let { isDataRoute: e } = a(Q);
	return e ? Al() : cl();
}
function cl() {
	G(rl(), "useNavigate() may be used only in the context of a <Router> component.");
	let e = a(Hc), { basename: t, navigator: n } = a(Z), { matches: r } = a(Q), { pathname: i } = $(), o = JSON.stringify(Vo(r)), s = v(!1);
	return ol(() => {
		s.current = !0;
	}), l((r, a = {}) => {
		if (K(s.current, al), !s.current) return;
		if (typeof r == "number") {
			n.go(r);
			return;
		}
		let c = Ho(r, JSON.parse(o), i, a.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Wo([t, c.pathname])), (a.replace ? n.replace : n.push)(c, a.state, a);
	}, [
		t,
		n,
		o,
		i,
		e
	]);
}
var ll = o(null);
function ul(e) {
	let t = a(Q).outlet;
	return r(() => t && /* @__PURE__ */ d(ll.Provider, { value: e }, t), [t, e]);
}
function dl() {
	let { matches: e } = a(Q);
	return e[e.length - 1]?.params ?? {};
}
function fl(e, { relative: t } = {}) {
	let { matches: n } = a(Q), { pathname: i } = $(), o = JSON.stringify(Vo(n));
	return r(() => Ho(e, JSON.parse(o), i, t === "path"), [
		e,
		o,
		i,
		t
	]);
}
function pl(e, t, n) {
	G(rl(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: r } = a(Z), { matches: i } = a(Q), o = i[i.length - 1], s = o ? o.params : {}, c = o ? o.pathname : "/", l = o ? o.pathnameBase : "/", u = o && o.route;
	{
		let e = u && u.path || "";
		Ml(c, !u || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let f = $(), p;
	if (t) {
		let e = typeof t == "string" ? q(t) : t;
		G(l === "/" || e.pathname?.startsWith(l), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`), p = e;
	} else p = f;
	let m = p.pathname || "/", h = m;
	if (l !== "/") {
		let e = l.replace(/^\//, "").split("/");
		h = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let g = n && n.state.matches.length ? n.state.matches.map((e) => Object.assign(e, { route: n.manifest[e.route.id] || e.route })) : mo(e, { pathname: h });
	K(u || g != null, `No routes matched location "${p.pathname}${p.search}${p.hash}" `), K(g == null || g[g.length - 1].route.element !== void 0 || g[g.length - 1].route.Component !== void 0 || g[g.length - 1].route.lazy !== void 0, `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let _ = bl(g && g.map((e) => Object.assign({}, e, {
		params: Object.assign({}, s, e.params),
		pathname: Wo([l, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? l : Wo([l, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), i, n);
	return t && _ ? /* @__PURE__ */ d(Yc.Provider, { value: {
		location: {
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default",
			mask: void 0,
			...p
		},
		navigationType: "POP"
	} }, _) : _;
}
function ml() {
	let e = kl(), t = Zo(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
		padding: "0.5rem",
		backgroundColor: r
	}, a = {
		padding: "2px 4px",
		backgroundColor: r
	}, o = null;
	return console.error("Error handled by React Router default ErrorBoundary:", e), o = /* @__PURE__ */ d(h, null, /* @__PURE__ */ d("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ d("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ d("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ d("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ d(h, null, /* @__PURE__ */ d("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ d("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ d("pre", { style: i }, n) : null, o);
}
var hl = /* @__PURE__ */ d(ml, null), gl = class extends p {
	constructor(e) {
		super(e), this.state = {
			location: e.location,
			revalidation: e.revalidation,
			error: e.error
		};
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	static getDerivedStateFromProps(e, t) {
		return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
			error: e.error,
			location: e.location,
			revalidation: e.revalidation
		} : {
			error: e.error === void 0 ? t.error : e.error,
			location: t.location,
			revalidation: e.revalidation || t.revalidation
		};
	}
	componentDidCatch(e, t) {
		this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
	}
	render() {
		let e = this.state.error;
		if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
			let t = tl(e.digest);
			t && (e = t);
		}
		let t = e === void 0 ? this.props.children : /* @__PURE__ */ d(Q.Provider, { value: this.props.routeContext }, /* @__PURE__ */ d(Xc.Provider, {
			value: e,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ d(vl, { error: e }, t) : t;
	}
};
gl.contextType = Wc;
var _l = /* @__PURE__ */ new WeakMap();
function vl({ children: e, error: t }) {
	let { basename: n } = a(Z);
	if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
		let e = el(t.digest);
		if (e) {
			let r = _l.get(t);
			if (r) throw r;
			let i = es(e.location, n), a = i.absoluteURL || i.to;
			if (ac(a)) throw Error("Invalid redirect location");
			if ($o && !_l.get(t)) if (i.isExternal || e.reloadDocument) window.location.href = a;
			else {
				let n = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(i.to, { replace: e.replace }));
				throw _l.set(t, n), n;
			}
			return /* @__PURE__ */ d("meta", {
				httpEquiv: "refresh",
				content: `0;url=${a}`
			});
		}
	}
	return e;
}
function yl({ routeContext: e, match: t, children: n }) {
	let r = a(Hc);
	return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ d(Q.Provider, { value: e }, n);
}
function bl(e, t = [], n) {
	let r = n?.state;
	if (e == null) {
		if (!r) return null;
		if (r.errors) e = r.matches;
		else if (t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
		else return null;
	}
	let i = e, a = r?.errors;
	if (a != null) {
		let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
		G(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`), i = i.slice(0, Math.min(i.length, e + 1));
	}
	let o = !1, s = -1;
	if (n && r) {
		o = r.renderFallback;
		for (let e = 0; e < i.length; e++) {
			let t = i[e];
			if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e), t.route.id) {
				let { loaderData: e, errors: a } = r, c = t.route.loader && !e.hasOwnProperty(t.route.id) && (!a || a[t.route.id] === void 0);
				if (t.route.lazy || c) {
					n.isStatic && (o = !0), i = s >= 0 ? i.slice(0, s + 1) : [i[0]];
					break;
				}
			}
		}
	}
	let c = n?.onError, l = r && c ? (e, t) => {
		c(e, {
			location: r.location,
			params: r.matches?.[0]?.params ?? {},
			pattern: Qo(r.matches),
			errorInfo: t
		});
	} : void 0;
	return i.reduceRight((e, n, c) => {
		let u, f = !1, p = null, m = null;
		r && (u = a && n.route.id ? a[n.route.id] : void 0, p = n.route.errorElement || hl, o && (s < 0 && c === 0 ? (Ml("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, m = null) : s === c && (f = !0, m = n.route.hydrateFallbackElement || null)));
		let h = t.concat(i.slice(0, c + 1)), g = () => {
			let t;
			return t = u ? p : f ? m : n.route.Component ? /* @__PURE__ */ d(n.route.Component, null) : n.route.element ? n.route.element : e, /* @__PURE__ */ d(yl, {
				match: n,
				routeContext: {
					outlet: e,
					matches: h,
					isDataRoute: r != null
				},
				children: t
			});
		};
		return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? /* @__PURE__ */ d(gl, {
			location: r.location,
			revalidation: r.revalidation,
			component: p,
			error: u,
			children: g(),
			routeContext: {
				outlet: null,
				matches: h,
				isDataRoute: !0
			},
			onError: l
		}) : g();
	}, null);
}
function xl(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Sl(e) {
	let t = a(Hc);
	return G(t, xl(e)), t;
}
function Cl(e) {
	let t = a(Uc);
	return G(t, xl(e)), t;
}
function wl(e) {
	let t = a(Q);
	return G(t, xl(e)), t;
}
function Tl(e) {
	let t = wl(e), n = t.matches[t.matches.length - 1];
	return G(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function El() {
	return Tl("useRouteId");
}
function Dl() {
	let e = Cl("useNavigation");
	return r(() => {
		let { matches: t, historyAction: n, ...r } = e.navigation;
		return r;
	}, [e.navigation]);
}
function Ol() {
	let { matches: e, loaderData: t } = Cl("useMatches");
	return r(() => e.map((e) => go(e, t)), [e, t]);
}
function kl() {
	let e = a(Xc), t = Cl("useRouteError"), n = Tl("useRouteError");
	return e === void 0 ? t.errors?.[n] : e;
}
function Al() {
	let { router: e } = Sl("useNavigate"), t = Tl("useNavigate"), n = v(!1);
	return ol(() => {
		n.current = !0;
	}), l(async (r, i = {}) => {
		K(n.current, al), n.current && (typeof r == "number" ? await e.navigate(r) : await e.navigate(r, {
			fromRouteId: t,
			...i
		}));
	}, [e, t]);
}
var jl = {};
function Ml(e, t, n) {
	!t && !jl[e] && (jl[e] = !0, K(!1, n));
}
var Nl = {};
function Pl(e, t) {
	!e && !Nl[t] && (Nl[t] = !0, console.warn(t));
}
var Fl = () => void 0;
function Il(e) {
	return [e, Fl];
}
function Ll(e) {
	let t = { hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null };
	return e.Component && (e.element && K(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, {
		element: d(e.Component),
		Component: void 0
	})), e.HydrateFallback && (e.hydrateFallbackElement && K(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, {
		hydrateFallbackElement: d(e.HydrateFallback),
		HydrateFallback: void 0
	})), e.ErrorBoundary && (e.errorElement && K(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, {
		errorElement: d(e.ErrorBoundary),
		ErrorBoundary: void 0
	})), t;
}
var Rl = ["HydrateFallback", "hydrateFallbackElement"], zl = class {
	constructor() {
		this.status = "pending", this.promise = new Promise((e, t) => {
			this.resolve = (t) => {
				this.status === "pending" && (this.status = "resolved", e(t));
			}, this.reject = (e) => {
				this.status === "pending" && (this.status = "rejected", t(e));
			};
		});
	}
};
function Bl({ router: e, flushSync: t, onError: n, useTransitions: a }) {
	a = Gc() || a;
	let [o, s] = i(e.state), [c, f] = Il(o), [p, m] = i(), [g, b] = i({ isTransitioning: !1 }), [x, S] = i(), [C, w] = i(), [T, E] = i(), D = v(/* @__PURE__ */ new Map()), O = l((r, { deletedFetchers: i, newErrors: o, flushSync: c, viewTransitionOpts: l }) => {
		o && n && Object.values(o).forEach((e) => n(e, {
			location: r.location,
			params: r.matches[0]?.params ?? {},
			pattern: Qo(r.matches)
		})), r.fetchers.forEach((e, t) => {
			e.data !== void 0 && D.current.set(t, e.data);
		}), i.forEach((e) => D.current.delete(e)), Pl(c === !1 || t != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
		let d = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
		if (Pl(l == null || d, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !l || !d) {
			t && c ? t(() => s(r)) : a === !1 ? s(r) : u(() => {
				a === !0 && f((e) => Vl(e, r)), s(r);
			});
			return;
		}
		if (t && c) {
			t(() => {
				C && (x?.resolve(), C.skipTransition()), b({
					isTransitioning: !0,
					flushSync: !0,
					currentLocation: l.currentLocation,
					nextLocation: l.nextLocation
				});
			});
			let n = e.window.document.startViewTransition(() => {
				t(() => s(r));
			});
			n.finished.finally(() => {
				t(() => {
					S(void 0), w(void 0), m(void 0), b({ isTransitioning: !1 });
				});
			}), t(() => w(n));
			return;
		}
		C ? (x?.resolve(), C.skipTransition(), E({
			state: r,
			currentLocation: l.currentLocation,
			nextLocation: l.nextLocation
		})) : (m(r), b({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: l.currentLocation,
			nextLocation: l.nextLocation
		}));
	}, [
		e.window,
		t,
		C,
		x,
		a,
		f,
		n
	]);
	y(() => e.subscribe(O), [e, O]), _(() => {
		g.isTransitioning && !g.flushSync && S(new zl());
	}, [g]), _(() => {
		if (x && p && e.window) {
			let t = p, n = x.promise, r = e.window.document.startViewTransition(async () => {
				a === !1 ? s(t) : u(() => {
					a === !0 && f((e) => Vl(e, t)), s(t);
				}), await n;
			});
			r.finished.finally(() => {
				S(void 0), w(void 0), m(void 0), b({ isTransitioning: !1 });
			}), w(r);
		}
	}, [
		p,
		x,
		e.window,
		a,
		f
	]), _(() => {
		x && p && c.location.key === p.location.key && x.resolve();
	}, [
		x,
		C,
		c.location,
		p
	]), _(() => {
		!g.isTransitioning && T && (m(T.state), b({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: T.currentLocation,
			nextLocation: T.nextLocation
		}), E(void 0));
	}, [g.isTransitioning, T]);
	let k = r(() => ({
		createHref: e.createHref,
		encodeLocation: e.encodeLocation,
		go: (t) => e.navigate(t),
		push: (t, n, r) => e.navigate(t, {
			state: n,
			preventScrollReset: r?.preventScrollReset
		}),
		replace: (t, n, r) => e.navigate(t, {
			replace: !0,
			state: n,
			preventScrollReset: r?.preventScrollReset
		})
	}), [e]), A = e.basename || "/", j = r(() => ({
		router: e,
		navigator: k,
		static: !1,
		basename: A,
		onError: n
	}), [
		e,
		k,
		A,
		n
	]);
	return /* @__PURE__ */ d(h, null, /* @__PURE__ */ d(Hc.Provider, { value: j }, /* @__PURE__ */ d(Uc.Provider, { value: c }, /* @__PURE__ */ d(qc.Provider, { value: D.current }, /* @__PURE__ */ d(Kc.Provider, { value: g }, /* @__PURE__ */ d(Kl, {
		basename: A,
		location: c.location,
		navigationType: c.historyAction,
		navigator: k,
		useTransitions: a
	}, /* @__PURE__ */ d(Hl, {
		routes: e.routes,
		manifest: e.manifest,
		future: e.future,
		state: c,
		isStatic: !1,
		onError: n
	})))))), null);
}
function Vl(e, t) {
	return {
		...e,
		navigation: t.navigation.state === "idle" ? e.navigation : t.navigation,
		revalidation: t.revalidation === "idle" ? e.revalidation : t.revalidation,
		actionData: t.navigation.state === "submitting" ? e.actionData : t.actionData,
		fetchers: t.fetchers
	};
}
var Hl = f(Ul);
function Ul({ routes: e, manifest: t, future: n, state: r, isStatic: i, onError: a }) {
	return pl(e, void 0, {
		manifest: t,
		state: r,
		isStatic: i,
		onError: a,
		future: n
	});
}
function Wl({ to: e, replace: t, state: n, relative: r }) {
	G(rl(), "<Navigate> may be used only in the context of a <Router> component.");
	let { static: i } = a(Z);
	K(!i, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
	let { matches: o } = a(Q), { pathname: s } = $(), c = sl(), l = Ho(e, Vo(o), s, r === "path"), u = JSON.stringify(l);
	return _(() => {
		c(JSON.parse(u), {
			replace: t,
			state: n,
			relative: r
		});
	}, [
		c,
		u,
		r,
		t,
		n
	]), null;
}
function Gl(e) {
	return ul(e.context);
}
function Kl({ basename: e = "/", children: t = null, location: n, navigationType: i = "POP", navigator: a, static: o = !1, useTransitions: s }) {
	G(!rl(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let c = e.replace(/^\/*/, "/"), l = r(() => ({
		basename: c,
		navigator: a,
		static: o,
		useTransitions: s,
		future: {}
	}), [
		c,
		a,
		o,
		s
	]);
	typeof n == "string" && (n = q(n));
	let { pathname: u = "/", search: f = "", hash: p = "", state: m = null, key: h = "default", mask: g } = n, _ = r(() => {
		let e = J(u, c);
		return e == null ? null : {
			location: {
				pathname: e,
				search: f,
				hash: p,
				state: m,
				key: h,
				mask: g
			},
			navigationType: i
		};
	}, [
		c,
		u,
		f,
		p,
		m,
		h,
		i,
		g
	]);
	return K(_ != null, `<Router basename="${c}"> is not able to match the URL "${u}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`), _ == null ? null : /* @__PURE__ */ d(Z.Provider, { value: l }, /* @__PURE__ */ d(Yc.Provider, {
		children: t,
		value: _
	}));
}
var ql = "get", Jl = "application/x-www-form-urlencoded";
function Yl(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Xl(e) {
	return Yl(e) && e.tagName.toLowerCase() === "button";
}
function Zl(e) {
	return Yl(e) && e.tagName.toLowerCase() === "form";
}
function Ql(e) {
	return Yl(e) && e.tagName.toLowerCase() === "input";
}
function $l(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function eu(e, t) {
	return e.button === 0 && (!t || t === "_self") && !$l(e);
}
var tu = null;
function nu() {
	if (tu === null) try {
		new FormData(document.createElement("form"), 0), tu = !1;
	} catch {
		tu = !0;
	}
	return tu;
}
var ru = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function iu(e) {
	return e != null && !ru.has(e) ? (K(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jl}"`), null) : e;
}
function au(e, t) {
	let n, r, i, a, o;
	if (Zl(e)) {
		let o = e.getAttribute("action");
		r = o ? J(o, t) : null, n = e.getAttribute("method") || ql, i = iu(e.getAttribute("enctype")) || Jl, a = new FormData(e);
	} else if (Xl(e) || Ql(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? J(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || ql, i = iu(e.getAttribute("formenctype")) || iu(o.getAttribute("enctype")) || Jl, a = new FormData(o, e), !nu()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (Yl(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = ql, r = null, i = Jl, o = e;
	return a && i === "text/plain" && (o = a, a = void 0), {
		action: r,
		method: n.toLowerCase(),
		encType: i,
		formData: a,
		body: o
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ou = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
}, su = /[&><\u2028\u2029]/g;
function cu(e) {
	return e.replace(su, (e) => ou[e]);
}
function lu(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function uu(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && J(i.pathname, t) === "/" ? i.pathname = `${Go(t)}/_root.${r}` : i.pathname = `${Go(i.pathname)}.${r}`, i;
}
async function du(e, t) {
	if (e.id in t) return t[e.id];
	try {
		let n = await import(
			/* @vite-ignore */
			/* webpackIgnore: true */
			e.module
);
		return t[e.id] = n, n;
	} catch (t) {
		return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(t), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {});
	}
}
function fu(e) {
	return e != null && typeof e.page == "string";
}
function pu(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function mu(e, t, n) {
	return yu((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await du(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(pu).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function hu(e, t, n, r, i, a) {
	let o = (e, t) => n[t] ? e.route.id !== n[t].route.id : !0, s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"];
	return a === "assets" ? t.filter((e, t) => o(e, t) || s(e, t)) : a === "data" ? t.filter((t, a) => {
		let c = r.routes[t.route.id];
		if (!c || !c.hasLoader) return !1;
		if (o(t, a) || s(t, a)) return !0;
		if (t.route.shouldRevalidate) {
			let r = t.route.shouldRevalidate({
				currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
				currentParams: n[0]?.params || {},
				nextUrl: new URL(e, window.origin),
				nextParams: t.params,
				defaultShouldRevalidate: !0
			});
			if (typeof r == "boolean") return r;
		}
		return !0;
	}) : [];
}
function gu(e, t, { includeHydrateFallback: n } = {}) {
	return _u(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function _u(e) {
	return [...new Set(e)];
}
function vu(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function yu(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !fu(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(vu(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function bu() {
	let e = a(Hc);
	return lu(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function xu() {
	let e = a(Uc);
	return lu(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var Su = o(void 0);
Su.displayName = "FrameworkContext";
function Cu() {
	let e = a(Su);
	return lu(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function wu(e, t) {
	let n = a(Su), [r, o] = i(!1), [s, c] = i(!1), { onFocus: l, onBlur: u, onMouseEnter: d, onMouseLeave: f, onTouchStart: p } = t, m = v(null);
	_(() => {
		if (e === "render" && c(!0), e === "viewport") {
			let e = new IntersectionObserver((e) => {
				e.forEach((e) => {
					c(e.isIntersecting);
				});
			}, { threshold: .5 });
			return m.current && e.observe(m.current), () => {
				e.disconnect();
			};
		}
	}, [e]), _(() => {
		if (r) {
			let e = setTimeout(() => {
				c(!0);
			}, 100);
			return () => {
				clearTimeout(e);
			};
		}
	}, [r]);
	let h = () => {
		o(!0);
	}, g = () => {
		o(!1), c(!1);
	};
	return n ? e === "intent" ? [
		s,
		m,
		{
			onFocus: Tu(l, h),
			onBlur: Tu(u, g),
			onMouseEnter: Tu(d, h),
			onMouseLeave: Tu(f, g),
			onTouchStart: Tu(p, h)
		}
	] : [
		s,
		m,
		{}
	] : [
		!1,
		m,
		{}
	];
}
function Tu(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function Eu({ page: e, ...t }) {
	let n = Gc(), { nonce: i } = Cu(), { router: a } = bu(), o = r(() => mo(a.routes, e, a.basename), [
		a.routes,
		e,
		a.basename
	]);
	return o ? (t.nonce == null && i && (t = {
		...t,
		nonce: i
	}), d(n ? Ou : ku, {
		page: e,
		matches: o,
		...t
	})) : null;
}
function Du(e) {
	let { manifest: t, routeModules: n } = Cu(), [r, a] = i([]);
	return _(() => {
		let r = !1;
		return mu(e, t, n).then((e) => {
			r || a(e);
		}), () => {
			r = !0;
		};
	}, [
		e,
		t,
		n
	]), r;
}
function Ou({ page: e, matches: t, ...n }) {
	let i = $(), { future: a } = Cu(), { basename: o } = bu();
	return /* @__PURE__ */ d(h, null, r(() => {
		if (e === i.pathname + i.search + i.hash) return [];
		let n = uu(e, o, a.v8_trailingSlashAwareDataRequests, "rsc"), r = !1, s = [];
		for (let e of t) typeof e.route.shouldRevalidate == "function" ? r = !0 : s.push(e.route.id);
		return r && s.length > 0 && n.searchParams.set("_routes", s.join(",")), [n.pathname + n.search];
	}, [
		o,
		a.v8_trailingSlashAwareDataRequests,
		e,
		i,
		t
	]).map((e) => /* @__PURE__ */ d("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})));
}
function ku({ page: e, matches: t, ...n }) {
	let i = $(), { future: a, manifest: o, routeModules: s } = Cu(), { basename: c } = bu(), { loaderData: l, matches: u } = xu(), f = r(() => hu(e, t, u, o, i, "data"), [
		e,
		t,
		u,
		o,
		i
	]), p = r(() => hu(e, t, u, o, i, "assets"), [
		e,
		t,
		u,
		o,
		i
	]), m = r(() => {
		if (e === i.pathname + i.search + i.hash) return [];
		let n = /* @__PURE__ */ new Set(), r = !1;
		if (t.forEach((e) => {
			let t = o.routes[e.route.id];
			!t || !t.hasLoader || (!f.some((t) => t.route.id === e.route.id) && e.route.id in l && s[e.route.id]?.shouldRevalidate || t.hasClientLoader ? r = !0 : n.add(e.route.id));
		}), n.size === 0) return [];
		let u = uu(e, c, a.v8_trailingSlashAwareDataRequests, "data");
		return r && n.size > 0 && u.searchParams.set("_routes", t.filter((e) => n.has(e.route.id)).map((e) => e.route.id).join(",")), [u.pathname + u.search];
	}, [
		c,
		a.v8_trailingSlashAwareDataRequests,
		l,
		i,
		o,
		f,
		t,
		e,
		s
	]), g = r(() => gu(p, o), [p, o]), _ = Du(p);
	return /* @__PURE__ */ d(h, null, m.map((e) => /* @__PURE__ */ d("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})), g.map((e) => /* @__PURE__ */ d("link", {
		key: e,
		rel: "modulepreload",
		href: e,
		...n
	})), _.map(({ key: e, link: t }) => /* @__PURE__ */ d("link", {
		key: e,
		nonce: n.nonce,
		...t,
		crossOrigin: t.crossOrigin ?? n.crossOrigin
	})));
}
function Au(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
var ju = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	ju && (window.__reactRouterVersion = "7.18.1");
} catch {}
function Mu(e, t) {
	return ks({
		basename: t?.basename,
		getContext: t?.getContext,
		future: t?.future,
		history: Za({ window: t?.window }),
		hydrationData: t?.hydrationData || Nu(),
		routes: e,
		mapRouteProperties: Ll,
		hydrationRouteProperties: Rl,
		dataStrategy: t?.dataStrategy,
		patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
		window: t?.window,
		instrumentations: t?.instrumentations
	}).initialize();
}
function Nu() {
	let e = window?.__staticRouterHydrationData;
	return e && e.errors && (e = {
		...e,
		errors: Pu(e.errors)
	}), e;
}
function Pu(e) {
	if (!e) return null;
	let t = Object.entries(e), n = {};
	for (let [e, r] of t) if (r && r.__type === "RouteErrorResponse") n[e] = new Xo(r.status, r.statusText, r.data, r.internal === !0);
	else if (r && r.__type === "Error") {
		if (typeof r.__subType == "string" && Yo.includes(r.__subType)) {
			let t = window[r.__subType];
			if (typeof t == "function") try {
				let i = new t(r.message);
				i.stack = "", n[e] = i;
			} catch {}
		}
		if (n[e] == null) {
			let t = Error(r.message);
			t.stack = "", n[e] = t;
		}
	} else n[e] = r;
	return n;
}
function Fu({ basename: e, children: t, history: n, useTransitions: r }) {
	let [a, o] = i({
		action: n.action,
		location: n.location
	}), s = l((e) => {
		r === !1 ? o(e) : u(() => o(e));
	}, [r]);
	return y(() => n.listen(s), [n, s]), /* @__PURE__ */ d(Kl, {
		basename: e,
		children: t,
		location: a.location,
		navigationType: a.action,
		navigator: n,
		useTransitions: r
	});
}
Fu.displayName = "unstable_HistoryRouter";
var Iu = g(function({ onClick: e, discover: t = "render", prefetch: n = "none", relative: r, reloadDocument: i, replace: o, mask: s, state: c, target: l, to: u, preventScrollReset: f, viewTransition: p, defaultShouldRevalidate: m, ...g }, _) {
	let { basename: v, navigator: y, useTransitions: b } = a(Z), x = typeof u == "string" && Ka.test(u), S = es(u, v);
	u = S.to;
	let C = nl(u, { relative: r }), w = $(), T = null;
	if (s) {
		let e = Ho(s, [], w.mask ? w.mask.pathname : "/", !0);
		v !== "/" && (e.pathname = e.pathname === "/" ? v : Wo([v, e.pathname])), T = y.createHref(e);
	}
	let [E, D, O] = wu(n, g), k = Uu(u, {
		replace: o,
		mask: s,
		state: c,
		target: l,
		preventScrollReset: f,
		relative: r,
		viewTransition: p,
		defaultShouldRevalidate: m,
		useTransitions: b
	});
	function A(t) {
		e && e(t), t.defaultPrevented || k(t);
	}
	let j = !(S.isExternal || i), M = /* @__PURE__ */ d("a", {
		...g,
		...O,
		href: (j ? T : void 0) || S.absoluteURL || C,
		onClick: j ? A : e,
		ref: Au(_, D),
		target: l,
		"data-discover": !x && t === "render" ? "true" : void 0
	});
	return E && !x ? /* @__PURE__ */ d(h, null, M, /* @__PURE__ */ d(Eu, { page: C })) : M;
});
Iu.displayName = "Link";
var Lu = g(function({ "aria-current": e = "page", caseSensitive: t = !1, className: n = "", end: r = !1, style: i, to: o, viewTransition: s, children: c, ...l }, u) {
	let f = fl(o, { relative: l.relative }), p = $(), m = a(Uc), { navigator: h, basename: g } = a(Z), _ = m != null && $u(f) && s === !0, v = h.encodeLocation ? h.encodeLocation(f).pathname : f.pathname, y = p.pathname, b = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null;
	t || (y = y.toLowerCase(), b = b ? b.toLowerCase() : null, v = v.toLowerCase()), b && g && (b = J(b, g) || b);
	let x = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length, S = y === v || !r && y.startsWith(v) && y.charAt(x) === "/", C = b != null && (b === v || !r && b.startsWith(v) && b.charAt(v.length) === "/"), w = {
		isActive: S,
		isPending: C,
		isTransitioning: _
	}, T = S ? e : void 0, E;
	E = typeof n == "function" ? n(w) : [
		n,
		S ? "active" : null,
		C ? "pending" : null,
		_ ? "transitioning" : null
	].filter(Boolean).join(" ");
	let D = typeof i == "function" ? i(w) : i;
	return /* @__PURE__ */ d(Iu, {
		...l,
		"aria-current": T,
		className: E,
		ref: u,
		style: D,
		to: o,
		viewTransition: s
	}, typeof c == "function" ? c(w) : c);
});
Lu.displayName = "NavLink";
var Ru = g(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: o, method: s = ql, action: c, onSubmit: l, relative: f, preventScrollReset: p, viewTransition: m, defaultShouldRevalidate: h, ...g }, _) => {
	let { useTransitions: v } = a(Z), y = Ku(), b = qu(c, { relative: f }), x = s.toLowerCase() === "get" ? "get" : "post", S = typeof c == "string" && Ka.test(c);
	return /* @__PURE__ */ d("form", {
		ref: _,
		method: x,
		action: b,
		onSubmit: r ? l : (e) => {
			if (l && l(e), e.defaultPrevented) return;
			e.preventDefault();
			let r = e.nativeEvent.submitter, a = r?.getAttribute("formmethod") || s, c = () => y(r || e.currentTarget, {
				fetcherKey: t,
				method: a,
				navigate: n,
				replace: i,
				state: o,
				relative: f,
				preventScrollReset: p,
				viewTransition: m,
				defaultShouldRevalidate: h
			});
			v && n !== !1 ? u(() => c()) : c();
		},
		...g,
		"data-discover": !S && e === "render" ? "true" : void 0
	});
});
Ru.displayName = "Form";
function zu({ getKey: e, storageKey: t, ...n }) {
	let i = a(Su), { basename: o } = a(Z), s = $(), c = Ol();
	Zu({
		getKey: e,
		storageKey: t
	});
	let l = r(() => {
		if (!i || !e) return null;
		let t = Xu(s, c, o, e);
		return t === s.key ? null : t;
	}, []);
	if (!i || i.isSpaMode) return null;
	let u = ((e, t) => {
		if (!window.history.state || !window.history.state.key) {
			let e = Math.random().toString(32).slice(2);
			window.history.replaceState({ key: e }, "");
		}
		try {
			let n = JSON.parse(sessionStorage.getItem(e) || "{}")[t || window.history.state.key];
			typeof n == "number" && window.scrollTo(0, n);
		} catch (t) {
			console.error(t), sessionStorage.removeItem(e);
		}
	}).toString();
	return n.nonce == null && i?.nonce && (n.nonce = i.nonce), /* @__PURE__ */ d("script", {
		...n,
		suppressHydrationWarning: !0,
		dangerouslySetInnerHTML: { __html: `(${u})(${cu(JSON.stringify(t || Ju))}, ${cu(JSON.stringify(l))})` }
	});
}
zu.displayName = "ScrollRestoration";
function Bu(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vu(e) {
	let t = a(Hc);
	return G(t, Bu(e)), t;
}
function Hu(e) {
	let t = a(Uc);
	return G(t, Bu(e)), t;
}
function Uu(e, { target: t, replace: n, mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, defaultShouldRevalidate: c, useTransitions: d } = {}) {
	let f = sl(), p = $(), m = fl(e, { relative: o });
	return l((l) => {
		if (eu(l, t)) {
			l.preventDefault();
			let t = n === void 0 ? to(p) === to(m) : n, h = () => f(e, {
				replace: t,
				mask: r,
				state: i,
				preventScrollReset: a,
				relative: o,
				viewTransition: s,
				defaultShouldRevalidate: c
			});
			d ? u(() => h()) : h();
		}
	}, [
		p,
		f,
		m,
		n,
		r,
		i,
		t,
		e,
		a,
		o,
		s,
		c,
		d
	]);
}
var Wu = 0, Gu = () => `__${String(++Wu)}__`;
function Ku() {
	let { router: e } = Vu("useSubmit"), { basename: t } = a(Z), n = El(), r = e.fetch, i = e.navigate;
	return l(async (e, a = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = au(e, t);
		if (a.navigate === !1) {
			let e = a.fetcherKey || Gu();
			await r(e, n, a.action || o, {
				defaultShouldRevalidate: a.defaultShouldRevalidate,
				preventScrollReset: a.preventScrollReset,
				formData: l,
				body: u,
				formMethod: a.method || s,
				formEncType: a.encType || c,
				flushSync: a.flushSync
			});
		} else await i(a.action || o, {
			defaultShouldRevalidate: a.defaultShouldRevalidate,
			preventScrollReset: a.preventScrollReset,
			formData: l,
			body: u,
			formMethod: a.method || s,
			formEncType: a.encType || c,
			replace: a.replace,
			state: a.state,
			fromRouteId: n,
			flushSync: a.flushSync,
			viewTransition: a.viewTransition
		});
	}, [
		r,
		i,
		t,
		n
	]);
}
function qu(e, { relative: t } = {}) {
	let { basename: n } = a(Z), r = a(Q);
	G(r, "useFormAction must be used inside a RouteContext");
	let [i] = r.matches.slice(-1), o = { ...fl(e || ".", { relative: t }) }, s = $();
	if (e == null) {
		o.search = s.search;
		let e = new URLSearchParams(o.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			o.search = n ? `?${n}` : "";
		}
	}
	return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : Wo([n, o.pathname])), to(o);
}
var Ju = "react-router-scroll-positions", Yu = {};
function Xu(e, t, n, r) {
	let i = null;
	return r && (i = r(n === "/" ? e : {
		...e,
		pathname: J(e.pathname, n) || e.pathname
	}, t)), i ??= e.key, i;
}
function Zu({ getKey: e, storageKey: t } = {}) {
	let { router: n } = Vu("useScrollRestoration"), { restoreScrollPosition: r, preventScrollReset: i } = Hu("useScrollRestoration"), { basename: o } = a(Z), s = $(), c = Ol(), u = Dl();
	_(() => (window.history.scrollRestoration = "manual", () => {
		window.history.scrollRestoration = "auto";
	}), []), Qu(l(() => {
		if (u.state === "idle") {
			let t = Xu(s, c, o, e);
			Yu[t] = window.scrollY;
		}
		try {
			sessionStorage.setItem(t || Ju, JSON.stringify(Yu));
		} catch (e) {
			K(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`);
		}
		window.history.scrollRestoration = "auto";
	}, [
		u.state,
		e,
		o,
		s,
		c,
		t
	])), typeof document < "u" && (y(() => {
		try {
			let e = sessionStorage.getItem(t || Ju);
			e && (Yu = JSON.parse(e));
		} catch {}
	}, [t]), y(() => {
		let t = n?.enableScrollRestoration(Yu, () => window.scrollY, e ? (t, n) => Xu(t, n, o, e) : void 0);
		return () => t && t();
	}, [
		n,
		o,
		e
	]), y(() => {
		if (r !== !1) {
			if (typeof r == "number") {
				window.scrollTo(0, r);
				return;
			}
			try {
				if (s.hash) {
					let e = document.getElementById(decodeURIComponent(s.hash.slice(1)));
					if (e) {
						e.scrollIntoView();
						return;
					}
				}
			} catch {
				K(!1, `"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			i !== !0 && window.scrollTo(0, 0);
		}
	}, [
		s,
		r,
		i
	]));
}
function Qu(e, t) {
	let { capture: n } = t || {};
	_(() => {
		let t = n == null ? void 0 : { capture: n };
		return window.addEventListener("pagehide", e, t), () => {
			window.removeEventListener("pagehide", e, t);
		};
	}, [e, n]);
}
function $u(e, { relative: t } = {}) {
	let n = a(Kc);
	G(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: r } = Vu("useViewTransitionState"), i = fl(e, { relative: t });
	if (!n.isTransitioning) return !1;
	let o = J(n.currentLocation.pathname, r) || n.currentLocation.pathname, s = J(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return jo(i.pathname, s) != null || jo(i.pathname, o) != null;
}
//#endregion
export { N as A, x as B, Ne as C, R as D, De as E, A as F, ie as I, L, E as M, se as N, me as O, j as P, k as R, ze as S, Ee as T, b as V, Ra as _, Mu as a, Mr as b, Ol as c, dl as d, kl as f, La as g, Va as h, Bl as i, O as j, pe as k, sl as l, za as m, Wl as n, mo as o, Ba as p, Gl as r, $ as s, Iu as t, il as u, Or as v, ke as w, He as x, kr as y, C as z };

//# sourceMappingURL=chunk-KS7C4IRE-Ck3O4oo2.js.map