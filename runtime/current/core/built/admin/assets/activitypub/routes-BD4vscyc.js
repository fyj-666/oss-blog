import { A as e, C as t, S as n, T as r, _ as i, a, c as o, d as s, g as c, i as l, l as u, o as d, p as f, r as p, s as m, t as h, u as g, v as _, w as v, x as y } from "./_react-D4KM8XEu.js";
import { S as b, c as x, f as S, h as C, m as w, o as T, r as E, s as D, t as O } from "./chunk-KS7C4IRE-Ck3O4oo2.js";
import { a as k, i as A, o as j } from "./users-BjcoP_HC.js";
import { C as M, _ as N, b as P, c as F, d as I, f as L, g as ee, h as te, i as ne, l as re, m as ie, n as ae, o as R, r as z, t as oe, u as B, v as se, w as V, x as ce, y as H } from "./use-navigate-with-base-path-Bmk5h4lW.js";
import { A as le, C as ue, D as de, F as fe, J as pe, M as U, N as me, P as he, Q as W, R as ge, S as _e, U as ve, X as ye, Z as G, a as be, f as xe, j as Se, p as Ce, t as we, x as Te, y as Ee, z as De } from "./use-activity-pub-queries-CV50qe03.js";
import { a as Oe, c as K, i as ke, l as Ae, n as je, o as Me, r as Ne, s as Pe, t as Fe, u as Ie } from "./avatar-DLPL3Abs.js";
import { a as Le, i as Re, n as ze, r as Be, t as Ve } from "./x-DbQZOLiI.js";
import { c as He, d as Ue, i as We, l as Ge, o as Ke, s as qe, u as q } from "./content-formatters-3rTHg3mp.js";
import { n as Je, t as Ye } from "./onboarding-CSUJJIlh.js";
import "./onboarding-BsJ9E5qf.js";
//#region ../admin-x-framework/dist/utils/lazy-component.js
function J(e) {
	return () => e().then(({ default: e }) => ({ Component: e }));
}
//#endregion
//#region src/lib/feature-flags.tsx
s();
var Y = b(), Xe = [], Ze = o(void 0), Qe = ({ children: e }) => {
	let t = D(), [n, i] = r(() => {
		let e = localStorage.getItem("featureFlags");
		return e ? JSON.parse(e) : $e();
	});
	_(() => {
		let e = et(t.search);
		Object.keys(e).length > 0 && i((t) => {
			let n = {
				...t,
				...e
			};
			return localStorage.setItem("featureFlags", JSON.stringify(n)), n;
		});
	}, [t.search]);
	let a = {
		isEnabled: (e) => n[e] ?? !1,
		flags: n,
		allFlags: Xe
	};
	return /* @__PURE__ */ (0, Y.jsx)(Ze.Provider, {
		value: a,
		children: e
	});
}, $e = () => Xe.reduce((e, t) => ({
	...e,
	[t]: !1
}), {}), et = (e) => {
	let t = new URLSearchParams(e), n = {};
	return Xe.forEach((e) => {
		let r = t.get(e);
		r === "ON" ? n[e] = !0 : r === "OFF" && (n[e] = !1);
	}), n;
}, tt = () => {
	let e = i(Ze);
	if (e === void 0) throw Error("useFeatureFlags must be used within a FeatureFlagsProvider");
	return e;
};
//#endregion
//#region ../shade/es/icon-BJcGsQ4b.js
s();
var nt = Object.defineProperty, rt = (e, t) => {
	let n = {};
	for (var r in e) nt(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || nt(n, Symbol.toStringTag, { value: "Module" }), n;
}, it = /* @__PURE__ */ rt({ default: () => at }), at = (e) => /* @__PURE__ */ (0, Y.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	height: 24,
	width: 24,
	id: "Alert-Triangle--Streamline-Ultimate",
	...e,
	children: [/* @__PURE__ */ (0, Y.jsx)("desc", { children: "Alert Triangle Streamline Icon: https://streamlinehq.com" }), /* @__PURE__ */ (0, Y.jsx)("path", {
		d: "m23.77 20.57 -10 -19A2 2 0 0 0 12 0.5a2 2 0 0 0 -1.77 1.07l-10 19a2 2 0 0 0 0.06 2A2 2 0 0 0 2 23.5h20a2 2 0 0 0 1.77 -2.93ZM11 8.5a1 1 0 0 1 2 0v6a1 1 0 0 1 -2 0ZM12.05 20a1.53 1.53 0 0 1 -1.52 -1.47A1.48 1.48 0 0 1 12 17a1.53 1.53 0 0 1 1.52 1.47A1.48 1.48 0 0 1 12.05 20Z",
		fill: "currentColor",
		strokeWidth: 1
	})]
}), ot = /* @__PURE__ */ rt({ default: () => st }), st = (e) => /* @__PURE__ */ (0, Y.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	height: 24,
	width: 24,
	id: "Information-Circle--Streamline-Ultimate",
	...e,
	children: [/* @__PURE__ */ (0, Y.jsx)("desc", { children: "Information Circle Streamline Icon: https://streamlinehq.com" }), /* @__PURE__ */ (0, Y.jsx)("path", {
		d: "M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm0.25 5a1.5 1.5 0 1 1 -1.5 1.5 1.5 1.5 0 0 1 1.5 -1.5Zm2.25 13.5h-4a1 1 0 0 1 0 -2h0.75a0.25 0.25 0 0 0 0.25 -0.25v-4.5a0.25 0.25 0 0 0 -0.25 -0.25h-0.75a1 1 0 0 1 0 -2h1a2 2 0 0 1 2 2v4.75a0.25 0.25 0 0 0 0.25 0.25h0.75a1 1 0 0 1 0 2Z",
		fill: "currentcolor",
		strokeWidth: 1
	})]
}), ct = /* @__PURE__ */ rt({ default: () => lt }), lt = (e) => /* @__PURE__ */ (0, Y.jsxs)("svg", {
	height: 16,
	id: "Skull-2--Streamline-Ultimate",
	viewBox: "0 0 16 16",
	width: 16,
	xmlns: "http://www.w3.org/2000/svg",
	...e,
	children: [/* @__PURE__ */ (0, Y.jsx)("desc", { children: "\n    Skull 2 Streamline Icon: https://streamlinehq.com\n    " }), /* @__PURE__ */ (0, Y.jsxs)("g", { children: [
		/* @__PURE__ */ (0, Y.jsx)("path", {
			d: "M12.333333333333332 7.333333333333333a4.333333333333333 4.333333333333333 0 1 0 -7.333333333333333 3.126666666666667v1.88a1 1 0 0 0 2 0 1 1 0 0 0 2 0 1 1 0 1 0 2 0v-1.88a4.326666666666666 4.326666666666666 0 0 0 1.3333333333333333 -3.126666666666667Zm-6.253333333333334 1a1 1 0 1 1 1 -1 1 1 0 0 1 -1 1Zm4 0a1 1 0 1 1 1 -1 1 1 0 0 1 -1 1Z",
			fill: "currentColor",
			strokeWidth: .6667
		}),
		/* @__PURE__ */ (0, Y.jsx)("path", {
			d: "m1.8666666666666665 3.28 1.22 1.22a0.3466666666666667 0.3466666666666667 0 0 0 0.26666666666666666 0.09333333333333334 0.35333333333333333 0.35333333333333333 0 0 0 0.24666666666666665 -0.14666666666666667 5.133333333333333 5.133333333333333 0 0 1 0.8066666666666666 -0.9733333333333333 0.3133333333333333 0.3133333333333333 0 0 0 0.09999999999999999 -0.2333333333333333 0.3666666666666667 0.3666666666666667 0 0 0 -0.09333333333333334 -0.24666666666666665L3.28 1.8666666666666665A1.1666666666666665 1.1666666666666665 0 0 0 1.8399999999999999 0.11333333333333334a0.6666666666666666 0.6666666666666666 0 0 0 -0.3666666666666667 0.48l-0.09999999999999999 0.5133333333333333a0.31999999999999995 0.31999999999999995 0 0 1 -0.26 0.26666666666666666l-0.52 0.09999999999999999a0.6666666666666666 0.6666666666666666 0 0 0 -0.48 0.3666666666666667A1.1666666666666665 1.1666666666666665 0 0 0 1.8666666666666665 3.28Z",
			fill: "currentColor",
			strokeWidth: .6667
		}),
		/* @__PURE__ */ (0, Y.jsx)("path", {
			d: "M12.4 4.446666666666666a0.35333333333333333 0.35333333333333333 0 0 0 0.24666666666666665 0.14666666666666667 0.3466666666666667 0.3466666666666667 0 0 0 0.26666666666666666 -0.09333333333333334l1.22 -1.22a1.1666666666666665 1.1666666666666665 0 0 0 1.7533333333333332 -1.44 0.6666666666666666 0.6666666666666666 0 0 0 -0.48 -0.3666666666666667l-0.52 -0.09999999999999999a0.31999999999999995 0.31999999999999995 0 0 1 -0.26 -0.26666666666666666l-0.09999999999999999 -0.5133333333333333a0.6666666666666666 0.6666666666666666 0 0 0 -0.3666666666666667 -0.48 1.1666666666666665 1.1666666666666665 0 0 0 -1.44 1.7533333333333332l-1.1333333333333333 1.1266666666666665a0.3666666666666667 0.3666666666666667 0 0 0 -0.09333333333333334 0.24666666666666665 0.3133333333333333 0.3133333333333333 0 0 0 0.09999999999999999 0.2333333333333333 5.133333333333333 5.133333333333333 0 0 1 0.8066666666666666 0.9733333333333333Z",
			fill: "currentColor",
			strokeWidth: .6667
		}),
		/* @__PURE__ */ (0, Y.jsx)("path", {
			d: "M3.6 11.559999999999999a0.33999999999999997 0.33999999999999997 0 0 0 -0.26666666666666666 -0.15333333333333332 0.3466666666666667 0.3466666666666667 0 0 0 -0.26666666666666666 0.09333333333333334l-1.2 1.22a1.1666666666666665 1.1666666666666665 0 0 0 -1.7533333333333332 1.44 0.6666666666666666 0.6666666666666666 0 0 0 0.48 0.3666666666666667l0.52 0.09999999999999999a0.31999999999999995 0.31999999999999995 0 0 1 0.26 0.26666666666666666l0.09999999999999999 0.5133333333333333a0.6666666666666666 0.6666666666666666 0 0 0 0.3666666666666667 0.48 1.1666666666666665 1.1666666666666665 0 0 0 1.44 -1.7533333333333332l1.1333333333333333 -1.1266666666666665a0.36 0.36 0 0 0 0.09333333333333334 -0.24 0.31999999999999995 0.31999999999999995 0 0 0 -0.09999999999999999 -0.24 5.333333333333333 5.333333333333333 0 0 1 -0.8066666666666666 -0.9666666666666666Z",
			fill: "currentColor",
			strokeWidth: .6667
		}),
		/* @__PURE__ */ (0, Y.jsx)("path", {
			d: "m14.133333333333333 12.719999999999999 -1.22 -1.22a0.3466666666666667 0.3466666666666667 0 0 0 -0.26666666666666666 -0.09333333333333334 0.33999999999999997 0.33999999999999997 0 0 0 -0.24666666666666665 0.15333333333333332 5.333333333333333 5.333333333333333 0 0 1 -0.8066666666666666 0.9666666666666666 0.31999999999999995 0.31999999999999995 0 0 0 -0.09999999999999999 0.24 0.36 0.36 0 0 0 0.09333333333333334 0.24l1.1333333333333333 1.1266666666666665a1.1666666666666665 1.1666666666666665 0 0 0 1.44 1.7533333333333332 0.6666666666666666 0.6666666666666666 0 0 0 0.3666666666666667 -0.48l0.09999999999999999 -0.5133333333333333a0.31999999999999995 0.31999999999999995 0 0 1 0.26 -0.26666666666666666l0.52 -0.09999999999999999a0.6666666666666666 0.6666666666666666 0 0 0 0.48 -0.3666666666666667 1.1666666666666665 1.1666666666666665 0 0 0 -1.7533333333333332 -1.44Z",
			fill: "currentColor",
			strokeWidth: .6667
		})
	] })]
}), ut = /* @__PURE__ */ rt({ default: () => dt }), dt = (e) => /* @__PURE__ */ (0, Y.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	height: 24,
	width: 24,
	id: "Check-Circle-1--Streamline-Ultimate",
	...e,
	children: [/* @__PURE__ */ (0, Y.jsx)("desc", { children: "Check Circle 1 Streamline Icon: https://streamlinehq.com" }), /* @__PURE__ */ (0, Y.jsx)("path", {
		d: "M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm6.93 8.2 -6.85 9.29a1 1 0 0 1 -1.43 0.19l-4.89 -3.91a1 1 0 0 1 -0.15 -1.41A1 1 0 0 1 7 12.21l4.08 3.26L17.32 7a1 1 0 0 1 1.39 -0.21 1 1 0 0 1 0.22 1.41Z",
		fill: "currentcolor",
		strokeWidth: 1
	})]
}), ft = /* @__PURE__ */ rt({ default: () => pt }), pt = (e) => /* @__PURE__ */ (0, Y.jsxs)("svg", {
	viewBox: "-0.75 -0.75 20 20",
	xmlns: "http://www.w3.org/2000/svg",
	height: 24,
	width: 24,
	...e,
	children: [
		/* @__PURE__ */ (0, Y.jsx)("desc", { children: "Typography" }),
		/* @__PURE__ */ (0, Y.jsx)("path", {
			d: "m0.578125 9.827354166666668 8.09375 0",
			fill: "none",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5
		}),
		/* @__PURE__ */ (0, Y.jsx)("path", {
			d: "m12.140625 13.296104166666666 5.78125 0",
			fill: "none",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5
		}),
		/* @__PURE__ */ (0, Y.jsx)("path", {
			d: "M12.140625 16.764854166666666V10.40625a2.890625 2.890625 0 0 1 5.78125 0v6.359375",
			fill: "none",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5
		}),
		/* @__PURE__ */ (0, Y.jsx)("path", {
			d: "M0.578125 16.764854166666666V5.78125a4.046875 4.046875 0 0 1 8.09375 0v10.984375",
			fill: "none",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: 1.5
		})
	]
}), mt = I("", {
	variants: { size: {
		sm: "size-3",
		md: "size-4",
		lg: "size-6",
		xl: "size-8"
	} },
	defaultVariants: { size: "md" }
}), ht = Object.entries(/* @__PURE__ */ Object.assign({
	"../../assets/icons/error-fill.svg": it,
	"../../assets/icons/info-fill.svg": ot,
	"../../assets/icons/skull-and-bones.svg": ct,
	"../../assets/icons/success-fill.svg": ut,
	"../../assets/icons/typography.svg": ft
})).reduce((e, [t, n]) => {
	let r = ce(t.match(/[^/]+(?=\.svg$)/)?.[0] ?? ""), i = (e) => {
		let { size: t, className: r, ...i } = e, o = H(mt({
			size: t,
			className: r
		}));
		return a.createElement(n.default, {
			...i,
			className: o
		});
	};
	return i.displayName = `Icon.${r}`, e[r] = i, e;
}, {}), gt = ht;
//#endregion
//#region ../shade/es/hooks/use-global-dirty-state.js
s();
var _t = a.createContext({
	isDirty: !1,
	setGlobalDirtyState: () => {}
}), vt = ({ children: e }) => {
	let [t, n] = r([]), i = c((e, t) => {
		n((n) => t && !n.includes(e) ? [...n, e] : !t && n.includes(e) ? n.filter((t) => t !== e) : n);
	}, []);
	return /* @__PURE__ */ (0, Y.jsx)(_t.Provider, {
		value: {
			isDirty: t.length > 0,
			setGlobalDirtyState: i
		},
		children: e
	});
}, yt = ({ className: e, style: t, theme: n = "light", toastOptions: r, ...i }) => {
	let { classNames: a, ...o } = r ?? {};
	return /* @__PURE__ */ (0, Y.jsx)(k, {
		className: H("toaster group", e),
		style: {
			"--normal-bg": "var(--background)",
			"--normal-text": "var(--foreground)",
			"--normal-border": "var(--border)",
			...t
		},
		theme: n,
		toastOptions: {
			...o,
			classNames: {
				...a,
				closeButton: H("border-control-border! bg-background! text-foreground! hover:bg-interactive-hover! focus-visible:ring-2! focus-visible:ring-focus-ring! focus-visible:ring-offset-2! focus-visible:ring-offset-background! data-[disabled=true]:opacity-50!", a?.closeButton)
			}
		},
		...i
	});
};
typeof window < "u" && window.document && window.document.createElement;
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-effect-event@0.0.3_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
s();
var bt = d.useEffectEvent, xt = d.useInsertionEffect;
function St(e) {
	if (typeof bt == "function") return bt(e);
	let t = v(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof xt == "function" ? xt(() => {
		t.current = e;
	}) : Me(() => {
		t.current = e;
	}), n(() => ((...e) => t.current?.(...e)), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.14_@types+react-dom@18.3.7_@types+react@18.3.31___b6c2227866b2f3396d59ed392dbd0511/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
s();
var Ct = "DismissableLayer", wt = "dismissableLayer.update", Tt = "dismissableLayer.pointerDownOutside", Et = "dismissableLayer.focusOutside", Dt, Ot = o({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), kt = g((e, t) => {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: a = !1, onEscapeKeyDown: o, onPointerDownOutside: s, onFocusOutside: c, onInteractOutside: l, onDismiss: u, ...d } = e, f = i(Ot), [p, m] = r(null), h = p?.ownerDocument ?? globalThis?.document, [, g] = r({}), y = B(t, m), b = Array.from(f.layers), [x] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), S = b.indexOf(x), C = p ? b.indexOf(p) : -1, w = f.layersWithOutsidePointerEventsDisabled.size > 0, T = C >= S, E = v(!1), D = Nt((e) => {
		let t = e.target;
		if (!(t instanceof Node)) return;
		let n = [...f.branches].some((e) => e.contains(t));
		!T || n || (s?.(e), l?.(e), e.defaultPrevented || u?.());
	}, {
		ownerDocument: h,
		deferPointerDownOutside: a,
		isDeferredPointerDownOutsideRef: E,
		dismissableSurfaces: f.dismissableSurfaces
	}), O = Pt((e) => {
		if (a && E.current) return;
		let t = e.target;
		[...f.branches].some((e) => e.contains(t)) || (c?.(e), l?.(e), e.defaultPrevented || u?.());
	}, h), k = p ? C === b.length - 1 : !1, A = St((e) => {
		e.key === "Escape" && (o?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()));
	});
	return _(() => {
		if (k) return h.addEventListener("keydown", A, { capture: !0 }), () => h.removeEventListener("keydown", A, { capture: !0 });
	}, [h, k]), _(() => {
		if (p) return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Dt = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), Ft(), () => {
			n && (f.layersWithOutsidePointerEventsDisabled.delete(p), f.layersWithOutsidePointerEventsDisabled.size === 0 && (h.body.style.pointerEvents = Dt));
		};
	}, [
		p,
		h,
		n,
		f
	]), _(() => () => {
		p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), Ft());
	}, [p, f]), _(() => {
		let e = () => g({});
		return document.addEventListener(wt, e), () => document.removeEventListener(wt, e);
	}, []), /* @__PURE__ */ (0, Y.jsx)(K.div, {
		...d,
		ref: y,
		style: {
			pointerEvents: w ? T ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: X(e.onFocusCapture, O.onFocusCapture),
		onBlurCapture: X(e.onBlurCapture, O.onBlurCapture),
		onPointerDownCapture: X(e.onPointerDownCapture, D.onPointerDownCapture)
	});
});
kt.displayName = Ct;
var At = "DismissableLayerBranch", jt = g((e, t) => {
	let n = i(Ot), r = v(null), a = B(t, r);
	return _(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ (0, Y.jsx)(K.div, {
		...e,
		ref: a
	});
});
jt.displayName = At;
function Mt() {
	let e = i(Ot), [t, n] = r(null);
	return _(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
function Nt(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a } = t, o = Pe(e), s = v(!1), c = v(!1), l = v(/* @__PURE__ */ new Map()), u = v(() => {});
	return _(() => {
		function e() {
			c.current = !1, i.current = !1, l.current.clear();
		}
		function t() {
			return Array.from(l.current.values()).some(Boolean);
		}
		function d(e) {
			if (!c.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || l.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				c.current && u.current();
			}, 0);
		}
		function f(e) {
			c.current && l.current.set(e.type, !1);
		}
		let p = (a) => {
			if (a.target && !s.current) {
				let s = function() {
					n.removeEventListener("click", u.current);
					let r = t();
					e(), r || It(Tt, o, d, { discrete: !0 });
				}, d = { originalEvent: a };
				c.current = !0, i.current = r && a.button === 0, l.current.clear(), !r || a.button !== 0 ? s() : (n.removeEventListener("click", u.current), u.current = s, n.addEventListener("click", u.current, { once: !0 }));
			} else n.removeEventListener("click", u.current), e();
			s.current = !1;
		}, m = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of m) n.addEventListener(e, d, !0), n.addEventListener(e, f);
		let h = window.setTimeout(() => {
			n.addEventListener("pointerdown", p);
		}, 0);
		return () => {
			window.clearTimeout(h), n.removeEventListener("pointerdown", p), n.removeEventListener("click", u.current);
			for (let e of m) n.removeEventListener(e, d, !0), n.removeEventListener(e, f);
		};
	}, [
		n,
		o,
		r,
		i,
		a
	]), { onPointerDownCapture: () => s.current = !0 };
}
function Pt(e, t = globalThis?.document) {
	let n = Pe(e), r = v(!1);
	return _(() => {
		let e = (e) => {
			e.target && !r.current && It(Et, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function Ft() {
	let e = new CustomEvent(wt);
	document.dispatchEvent(e);
}
function It(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Ae(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-id@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-id/dist/index.mjs
s();
var Lt = d.useId || (() => void 0), Rt = 0;
function zt(e) {
	let [t, n] = r(Lt());
	return Me(() => {
		e || n((e) => e ?? String(Rt++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Bt = [
	"top",
	"right",
	"bottom",
	"left"
], Vt = Math.min, Z = Math.max, Ht = Math.round, Ut = Math.floor, Wt = (e) => ({
	x: e,
	y: e
}), Gt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Kt(e, t, n) {
	return Z(e, Vt(t, n));
}
function qt(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Jt(e) {
	return e.split("-")[0];
}
function Yt(e) {
	return e.split("-")[1];
}
function Xt(e) {
	return e === "x" ? "y" : "x";
}
function Zt(e) {
	return e === "y" ? "height" : "width";
}
function Qt(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function $t(e) {
	return Xt(Qt(e));
}
function en(e, t, n) {
	n === void 0 && (n = !1);
	let r = Yt(e), i = $t(e), a = Zt(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = un(o)), [o, un(o)];
}
function tn(e) {
	let t = un(e);
	return [
		nn(e),
		t,
		nn(t)
	];
}
function nn(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var rn = ["left", "right"], an = ["right", "left"], on = ["top", "bottom"], sn = ["bottom", "top"];
function cn(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? an : rn : t ? rn : an;
		case "left":
		case "right": return t ? on : sn;
		default: return [];
	}
}
function ln(e, t, n, r) {
	let i = Yt(e), a = cn(Jt(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(nn)))), a;
}
function un(e) {
	let t = Jt(e);
	return Gt[t] + e.slice(t.length);
}
function dn(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function fn(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : dn(e);
}
function pn(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+core@1.7.5/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function mn(e, t, n) {
	let { reference: r, floating: i } = e, a = Qt(t), o = $t(t), s = Zt(o), c = Jt(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Yt(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function hn(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = qt(t, e), p = fn(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = pn(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = pn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var gn = 50, _n = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: hn
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = mn(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < gn && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = mn(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, vn = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = qt(e, t) || {};
		if (l == null) return {};
		let d = fn(u), f = {
			x: n,
			y: r
		}, p = $t(i), m = Zt(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Vt(d[_], T), D = Vt(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Kt(O, A, k), M = !c.arrow && Yt(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), yn = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = qt(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Jt(r), _ = Qt(o), v = Jt(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [un(o)] : tn(o)), x = p !== "none";
			!d && x && b.push(...ln(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = en(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Qt(t)) || T.every((e) => Qt(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Qt(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function bn(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function xn(e) {
	return Bt.some((t) => e[t] >= 0);
}
var Sn = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = qt(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = bn(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: xn(e)
					} };
				}
				case "escaped": {
					let e = bn(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: xn(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Cn = /*#__PURE__*/ new Set(["left", "top"]);
async function wn(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Jt(n), s = Yt(n), c = Qt(n) === "y", l = Cn.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = qt(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Tn = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await wn(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, En = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = qt(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Qt(Jt(i)), p = Xt(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Kt(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Kt(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, Dn = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = qt(e, t), u = {
				x: n,
				y: r
			}, d = Qt(i), f = Xt(d), p = u[f], m = u[d], h = qt(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = Cn.has(Jt(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, On = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = qt(e, t), u = await o.detectOverflow(t, l), d = Jt(i), f = Yt(i), p = Qt(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = Vt(h - u[g], v), x = Vt(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = Z(u.left, 0), t = Z(u.right, 0), n = Z(u.top, 0), r = Z(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : Z(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : Z(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function kn() {
	return typeof window < "u";
}
function An(e) {
	return Mn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Q(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jn(e) {
	return ((Mn(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Mn(e) {
	return kn() ? e instanceof Node || e instanceof Q(e).Node : !1;
}
function Nn(e) {
	return kn() ? e instanceof Element || e instanceof Q(e).Element : !1;
}
function Pn(e) {
	return kn() ? e instanceof HTMLElement || e instanceof Q(e).HTMLElement : !1;
}
function Fn(e) {
	return !kn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Q(e).ShadowRoot;
}
function In(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = $(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Ln(e) {
	return /^(table|td|th)$/.test(An(e));
}
function Rn(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var zn = /transform|translate|scale|rotate|perspective|filter/, Bn = /paint|layout|strict|content/, Vn = (e) => !!e && e !== "none", Hn;
function Un(e) {
	let t = Nn(e) ? $(e) : e;
	return Vn(t.transform) || Vn(t.translate) || Vn(t.scale) || Vn(t.rotate) || Vn(t.perspective) || !Gn() && (Vn(t.backdropFilter) || Vn(t.filter)) || zn.test(t.willChange || "") || Bn.test(t.contain || "");
}
function Wn(e) {
	let t = Jn(e);
	for (; Pn(t) && !Kn(t);) {
		if (Un(t)) return t;
		if (Rn(t)) return null;
		t = Jn(t);
	}
	return null;
}
function Gn() {
	return Hn ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Hn;
}
function Kn(e) {
	return /^(html|body|#document)$/.test(An(e));
}
function $(e) {
	return Q(e).getComputedStyle(e);
}
function qn(e) {
	return Nn(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Jn(e) {
	if (An(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Fn(e) && e.host || jn(e);
	return Fn(t) ? t.host : t;
}
function Yn(e) {
	let t = Jn(e);
	return Kn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pn(t) && In(t) ? t : Yn(t);
}
function Xn(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Yn(e), i = r === e.ownerDocument?.body, a = Q(r);
	if (i) {
		let e = Zn(a);
		return t.concat(a, a.visualViewport || [], In(r) ? r : [], e && n ? Xn(e) : []);
	} else return t.concat(r, Xn(r, [], n));
}
function Zn(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Qn(e) {
	let t = $(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Pn(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Ht(n) !== a || Ht(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function $n(e) {
	return Nn(e) ? e : e.contextElement;
}
function er(e) {
	let t = $n(e);
	if (!Pn(t)) return Wt(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Qn(t), o = (a ? Ht(n.width) : n.width) / r, s = (a ? Ht(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var tr = /*#__PURE__*/ Wt(0);
function nr(e) {
	let t = Q(e);
	return !Gn() || !t.visualViewport ? tr : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function rr(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Q(e) ? !1 : t;
}
function ir(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = $n(e), o = Wt(1);
	t && (r ? Nn(r) && (o = er(r)) : o = er(e));
	let s = rr(a, n, r) ? nr(a) : Wt(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Q(a), t = r && Nn(r) ? Q(r) : r, n = e, i = Zn(n);
		for (; i && r && t !== n;) {
			let e = er(i), t = i.getBoundingClientRect(), r = $(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Q(i), i = Zn(n);
		}
	}
	return pn({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function ar(e, t) {
	let n = qn(e).scrollLeft;
	return t ? t.left + n : ir(jn(e)).left + n;
}
function or(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - ar(e, n),
		y: n.top + t.scrollTop
	};
}
function sr(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = jn(r), s = t ? Rn(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Wt(1), u = Wt(0), d = Pn(r);
	if ((d || !d && !a) && ((An(r) !== "body" || In(o)) && (c = qn(r)), d)) {
		let e = ir(r);
		l = er(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? or(o, c) : Wt(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function cr(e) {
	return Array.from(e.getClientRects());
}
function lr(e) {
	let t = jn(e), n = qn(e), r = e.ownerDocument.body, i = Z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + ar(e), s = -n.scrollTop;
	return $(r).direction === "rtl" && (o += Z(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var ur = 25;
function dr(e, t) {
	let n = Q(e), r = jn(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Gn();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = ar(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= ur && (a -= o);
	} else l <= ur && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function fr(e, t) {
	let n = ir(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Pn(e) ? er(e) : Wt(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function pr(e, t, n) {
	let r;
	if (t === "viewport") r = dr(e, n);
	else if (t === "document") r = lr(jn(e));
	else if (Nn(t)) r = fr(t, n);
	else {
		let n = nr(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return pn(r);
}
function mr(e, t) {
	let n = Jn(e);
	return n === t || !Nn(n) || Kn(n) ? !1 : $(n).position === "fixed" || mr(n, t);
}
function hr(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Xn(e, [], !1).filter((e) => Nn(e) && An(e) !== "body"), i = null, a = $(e).position === "fixed", o = a ? Jn(e) : e;
	for (; Nn(o) && !Kn(o);) {
		let t = $(o), n = Un(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || In(o) && !n && mr(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Jn(o);
	}
	return t.set(e, r), r;
}
function gr(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Rn(t) ? [] : hr(t, this._c) : [].concat(n), r], o = pr(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = pr(t, a[e], i);
		s = Z(n.top, s), c = Vt(n.right, c), l = Vt(n.bottom, l), u = Z(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function _r(e) {
	let { width: t, height: n } = Qn(e);
	return {
		width: t,
		height: n
	};
}
function vr(e, t, n) {
	let r = Pn(t), i = jn(t), a = n === "fixed", o = ir(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Wt(0);
	function l() {
		c.x = ar(i);
	}
	if (r || !r && !a) if ((An(t) !== "body" || In(i)) && (s = qn(t)), r) {
		let e = ir(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? or(i, s) : Wt(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function yr(e) {
	return $(e).position === "static";
}
function br(e, t) {
	if (!Pn(e) || $(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return jn(e) === n && (n = n.ownerDocument.body), n;
}
function xr(e, t) {
	let n = Q(e);
	if (Rn(e)) return n;
	if (!Pn(e)) {
		let t = Jn(e);
		for (; t && !Kn(t);) {
			if (Nn(t) && !yr(t)) return t;
			t = Jn(t);
		}
		return n;
	}
	let r = br(e, t);
	for (; r && Ln(r) && yr(r);) r = br(r, t);
	return r && Kn(r) && yr(r) && !Un(r) ? n : r || Wn(e) || n;
}
var Sr = async function(e) {
	let t = this.getOffsetParent || xr, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: vr(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Cr(e) {
	return $(e).direction === "rtl";
}
var wr = {
	convertOffsetParentRelativeRectToViewportRelativeRect: sr,
	getDocumentElement: jn,
	getClippingRect: gr,
	getOffsetParent: xr,
	getElementRects: Sr,
	getClientRects: cr,
	getDimensions: _r,
	getScale: er,
	isElement: Nn,
	isRTL: Cr
};
function Tr(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Er(e, t) {
	let n = null, r, i = jn(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Ut(d), h = Ut(i.clientWidth - (u + f)), g = Ut(i.clientHeight - (d + p)), _ = Ut(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Z(0, Vt(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Tr(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Dr(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = $n(e), u = i || a ? [...l ? Xn(l) : [], ...t ? Xn(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Er(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? ir(e) : null;
	c && g();
	function g() {
		let t = ir(e);
		h && !Tr(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Or = Tn, kr = En, Ar = yn, jr = On, Mr = Sn, Nr = vn, Pr = Dn, Fr = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: wr,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return _n(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+react-dom@2.1.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
s();
var Ir = typeof document < "u" ? y : function() {};
function Lr(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Lr(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Lr(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Rr(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zr(e, t) {
	let n = Rr(e);
	return Math.round(t * n) / n;
}
function Br(e) {
	let t = v(e);
	return Ir(() => {
		t.current = e;
	}), t;
}
function Vr(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: i = "absolute", middleware: a = [], platform: o, elements: { reference: s, floating: l } = {}, transform: u = !0, whileElementsMounted: d, open: f } = e, [p, m] = r({
		x: 0,
		y: 0,
		strategy: i,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [h, g] = r(a);
	Lr(h, a) || g(a);
	let [_, y] = r(null), [b, x] = r(null), S = c((e) => {
		e !== D.current && (D.current = e, y(e));
	}, []), w = c((e) => {
		e !== O.current && (O.current = e, x(e));
	}, []), T = s || _, E = l || b, D = v(null), O = v(null), k = v(p), A = d != null, j = Br(d), M = Br(o), N = Br(f), P = c(() => {
		if (!D.current || !O.current) return;
		let e = {
			placement: t,
			strategy: i,
			middleware: h
		};
		M.current && (e.platform = M.current), Fr(D.current, O.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: N.current !== !1
			};
			F.current && !Lr(k.current, t) && (k.current = t, C(() => {
				m(t);
			}));
		});
	}, [
		h,
		t,
		i,
		M,
		N
	]);
	Ir(() => {
		f === !1 && k.current.isPositioned && (k.current.isPositioned = !1, m((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [f]);
	let F = v(!1);
	Ir(() => (F.current = !0, () => {
		F.current = !1;
	}), []), Ir(() => {
		if (T && (D.current = T), E && (O.current = E), T && E) {
			if (j.current) return j.current(T, E, P);
			P();
		}
	}, [
		T,
		E,
		P,
		j,
		A
	]);
	let I = n(() => ({
		reference: D,
		floating: O,
		setReference: S,
		setFloating: w
	}), [S, w]), L = n(() => ({
		reference: T,
		floating: E
	}), [T, E]), ee = n(() => {
		let e = {
			position: i,
			left: 0,
			top: 0
		};
		if (!L.floating) return e;
		let t = zr(L.floating, p.x), n = zr(L.floating, p.y);
		return u ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Rr(L.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: i,
			left: t,
			top: n
		};
	}, [
		i,
		u,
		L.floating,
		p.x,
		p.y
	]);
	return n(() => ({
		...p,
		update: P,
		refs: I,
		elements: L,
		floatingStyles: ee
	}), [
		p,
		P,
		I,
		L,
		ee
	]);
}
var Hr = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Nr({
				element: r.current,
				padding: i
			}).fn(n) : r ? Nr({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Ur = (e, t) => {
	let n = Or(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Wr = (e, t) => {
	let n = kr(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Gr = (e, t) => ({
	fn: Pr(e).fn,
	options: [e, t]
}), Kr = (e, t) => {
	let n = Ar(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, qr = (e, t) => {
	let n = jr(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Jr = (e, t) => {
	let n = Mr(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Yr = (e, t) => {
	let n = Hr(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-arrow@1.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react_46841099dde2429c8edffbf91fdd0f75/node_modules/@radix-ui/react-arrow/dist/index.mjs
s();
var Xr = "Arrow", Zr = g((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ (0, Y.jsx)(K.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ (0, Y.jsx)("polygon", { points: "0,0 30,0 15,10" })
	});
});
Zr.displayName = Xr;
var Qr = Zr;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs
s();
function $r(e) {
	let [t, n] = r(void 0);
	return Me(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		} else n(void 0);
	}, [e]), t;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-popper@1.3.2_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react_a0606ff9b45d5f58dc53ab0a4ccd697a/node_modules/@radix-ui/react-popper/dist/index.mjs
s();
var ei = "Popper", [ti, ni] = Ie(ei), [ri, ii] = ti(ei), ai = (e) => {
	let { __scopePopper: t, children: n } = e, [i, a] = r(null), [o, s] = r(void 0);
	return /* @__PURE__ */ (0, Y.jsx)(ri, {
		scope: t,
		anchor: i,
		onAnchorChange: a,
		placementState: o,
		setPlacementState: s,
		children: n
	});
};
ai.displayName = ei;
var oi = "PopperAnchor", si = g((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = ii(oi, n), o = v(null), s = a.onAnchorChange, l = B(t, c((e) => {
		o.current = e, e && s(e);
	}, [s])), u = v(null);
	_(() => {
		if (!r) return;
		let e = u.current;
		u.current = r.current, e !== u.current && s(u.current);
	});
	let d = a.placementState && _i(a.placementState), f = d?.[0], p = d?.[1];
	return r ? null : /* @__PURE__ */ (0, Y.jsx)(K.div, {
		"data-radix-popper-side": f,
		"data-radix-popper-align": p,
		...i,
		ref: l
	});
});
si.displayName = oi;
var ci = "PopperContent", [li, ui] = ti(ci), di = g((e, t) => {
	let { __scopePopper: n, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = "partial", hideWhenDetached: p = !1, updatePositionStrategy: m = "optimized", onPlaced: h, ...g } = e, _ = ii(ci, n), [v, y] = r(null), b = B(t, y), [x, S] = r(null), C = $r(x), w = C?.width ?? 0, T = C?.height ?? 0, E = i + (o === "center" ? "" : "-" + o), D = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, O = Array.isArray(u) ? u : [u], k = O.length > 0, A = {
		padding: D,
		boundary: O.filter(hi),
		altBoundary: k
	}, { refs: j, floatingStyles: M, placement: N, isPositioned: P, middlewareData: F } = Vr({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: (...e) => Dr(...e, { animationFrame: m === "always" }),
		elements: { reference: _.anchor },
		middleware: [
			Ur({
				mainAxis: a + T,
				alignmentAxis: s
			}),
			l && Wr({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === "partial" ? Gr() : void 0,
				...A
			}),
			l && Kr({ ...A }),
			qr({
				...A,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			x && Yr({
				element: x,
				padding: c
			}),
			gi({
				arrowWidth: w,
				arrowHeight: T
			}),
			p && Jr({
				strategy: "referenceHidden",
				...A,
				boundary: k ? A.boundary : void 0
			})
		]
	}), I = _.setPlacementState;
	Me(() => (I(N), () => {
		I(void 0);
	}), [N, I]);
	let [L, ee] = _i(N), te = Pe(h);
	Me(() => {
		P && te?.();
	}, [P, te]);
	let ne = F.arrow?.x, re = F.arrow?.y, ie = F.arrow?.centerOffset !== 0, [ae, R] = r();
	return Me(() => {
		v && R(window.getComputedStyle(v).zIndex);
	}, [v]), /* @__PURE__ */ (0, Y.jsx)("div", {
		ref: j.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...M,
			transform: P ? M.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ae,
			"--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
			...F.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, Y.jsx)(li, {
			scope: n,
			placedSide: L,
			placedAlign: ee,
			onArrowChange: S,
			arrowX: ne,
			arrowY: re,
			shouldHideArrow: ie,
			children: /* @__PURE__ */ (0, Y.jsx)(K.div, {
				"data-side": L,
				"data-align": ee,
				...g,
				ref: b,
				style: {
					...g.style,
					animation: P ? void 0 : "none"
				}
			})
		})
	});
});
di.displayName = ci;
var fi = "PopperArrow", pi = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, mi = g(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = ui(fi, n), a = pi[i.placedSide];
	return /* @__PURE__ */ (0, Y.jsx)("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ (0, Y.jsx)(Qr, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
mi.displayName = fi;
function hi(e) {
	return e !== null;
}
var gi = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = _i(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function _i(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var vi = ai, yi = si, bi = di, xi = mi;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-portal@1.1.13_@types+react-dom@18.3.7_@types+react@18.3.31__@types+reac_dc7a74c2058d5b681fc692ae2e26f5cd/node_modules/@radix-ui/react-portal/dist/index.mjs
s();
var Si = "Portal", Ci = g((e, t) => {
	let { container: n, ...i } = e, [a, o] = r(!1);
	Me(() => o(!0), []);
	let s = n || a && globalThis?.document?.body;
	return s ? w(/* @__PURE__ */ (0, Y.jsx)(K.div, {
		...i,
		ref: t
	}), s) : null;
});
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.6_@types+react-dom@18.3.7_@types+react@18.3.31__@types+rea_dc6e30df35507eb8a116c12c3da26e18/node_modules/@radix-ui/react-presence/dist/index.mjs
Ci.displayName = Si, s();
function wi(e, n) {
	return t((e, t) => n[e][t] ?? e, e);
}
var Ti = (e) => {
	let { present: t, children: n } = e, r = Ei(t), i = typeof n == "function" ? n({ present: r.isPresent }) : h.only(n), a = Oi(r.ref, Ai(i));
	return typeof n == "function" || r.isPresent ? m(i, { ref: a }) : null;
};
Ti.displayName = "Presence";
function Ei(e) {
	let [t, n] = r(), i = v(null), a = v(e), o = v("none"), [s, l] = wi(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return _(() => {
		let e = ki(i.current);
		o.current = s === "mounted" ? e : "none";
	}, [s]), Me(() => {
		let t = i.current, n = a.current;
		if (n !== e) {
			let r = o.current, i = ki(t);
			e ? l("MOUNT") : i === "none" || t?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
		}
	}, [e, l]), Me(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, r = (r) => {
				let o = ki(i.current).includes(CSS.escape(r.animationName));
				if (r.target === t && o && (l("ANIMATION_END"), !a.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === t && (o.current = ki(i.current));
			};
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r);
			};
		} else l("ANIMATION_END");
	}, [t, l]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: c((e) => {
			i.current = e ? getComputedStyle(e) : null, n(e);
		}, [])
	};
}
function Di(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function Oi(...e) {
	let t = v(e);
	return t.current = e, c((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = Di(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : Di(n[e], null);
			}
		};
	}, []);
}
function ki(e) {
	return e?.animationName || "none";
}
function Ai(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.3_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
s();
var ji = d.useInsertionEffect || Me;
function Mi({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [i, a, o] = Ni({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0, l = s ? e : i;
	{
		let t = v(e !== void 0);
		_(() => {
			let e = t.current;
			e !== s && console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s;
		}, [s, r]);
	}
	return [l, c((t) => {
		if (s) {
			let n = Pi(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
function Ni({ defaultProp: e, onChange: t }) {
	let [n, i] = r(e), a = v(n), o = v(t);
	return ji(() => {
		o.current = t;
	}, [t]), _(() => {
		a.current !== n && (o.current?.(n), a.current = n);
	}, [n, a]), [
		n,
		i,
		o
	];
}
function Pi(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.7_@types+react-dom@18.3.7_@types+react@18.3.31__@ty_c850badfde3651ed5cb7d90f2934dc1f/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
s();
var Fi = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), Ii = "VisuallyHidden", Li = g((e, t) => /* @__PURE__ */ (0, Y.jsx)(K.span, {
	...e,
	ref: t,
	style: {
		...Fi,
		...e.style
	}
}));
Li.displayName = Ii;
var Ri = Li;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-tooltip@1.2.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+rea_88c151721934f8683fe33b633effbc1c/node_modules/@radix-ui/react-tooltip/dist/index.mjs
s();
var [zi, Bi] = Ie("Tooltip", [ni]), Vi = ni(), Hi = "TooltipProvider", Ui = 700, Wi = "tooltip.open", [Gi, Ki] = zi(Hi), qi = (e) => {
	let { __scopeTooltip: t, delayDuration: n = Ui, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = v(!0), s = v(!1), l = v(0);
	return _(() => {
		let e = l.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ (0, Y.jsx)(Gi, {
		scope: t,
		isOpenDelayedRef: o,
		delayDuration: n,
		onOpen: c(() => {
			r <= 0 || (window.clearTimeout(l.current), o.current = !1);
		}, [r]),
		onClose: c(() => {
			r <= 0 || (window.clearTimeout(l.current), l.current = window.setTimeout(() => o.current = !0, r));
		}, [r]),
		isPointerInTransitRef: s,
		onPointerInTransitChange: c((e) => {
			s.current = e;
		}, []),
		disableHoverableContent: i,
		children: a
	});
};
qi.displayName = Hi;
var Ji = "Tooltip", [Yi, Xi] = zi(Ji), Zi = (e) => {
	let { __scopeTooltip: t, children: i, open: a, defaultOpen: o, onOpenChange: s, disableHoverableContent: l, delayDuration: u } = e, d = Ki(Ji, e.__scopeTooltip), f = Vi(t), [p, m] = r(null), h = zt(), g = v(0), y = l ?? d.disableHoverableContent, b = u ?? d.delayDuration, x = v(!1), [S, C] = Mi({
		prop: a,
		defaultProp: o ?? !1,
		onChange: (e) => {
			e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Wi))) : d.onClose(), s?.(e);
		},
		caller: Ji
	}), w = n(() => S ? x.current ? "delayed-open" : "instant-open" : "closed", [S]), T = c(() => {
		window.clearTimeout(g.current), g.current = 0, x.current = !1, C(!0);
	}, [C]), E = c(() => {
		window.clearTimeout(g.current), g.current = 0, C(!1);
	}, [C]), D = c(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => {
			x.current = !0, C(!0), g.current = 0;
		}, b);
	}, [b, C]);
	return _(() => () => {
		g.current &&= (window.clearTimeout(g.current), 0);
	}, []), /* @__PURE__ */ (0, Y.jsx)(vi, {
		...f,
		children: /* @__PURE__ */ (0, Y.jsx)(Yi, {
			scope: t,
			contentId: h,
			open: S,
			stateAttribute: w,
			trigger: p,
			onTriggerChange: m,
			onTriggerEnter: c(() => {
				d.isOpenDelayedRef.current ? D() : T();
			}, [
				d.isOpenDelayedRef,
				D,
				T
			]),
			onTriggerLeave: c(() => {
				y ? E() : (window.clearTimeout(g.current), g.current = 0);
			}, [E, y]),
			onOpen: T,
			onClose: E,
			disableHoverableContent: y,
			children: i
		})
	});
};
Zi.displayName = Ji;
var Qi = "TooltipTrigger", $i = g((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = Xi(Qi, n), a = Ki(Qi, n), o = Vi(n), s = B(t, v(null), i.onTriggerChange), l = v(!1), u = v(!1), d = c(() => l.current = !1, []);
	return _(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ (0, Y.jsx)(yi, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, Y.jsx)(K.button, {
			"aria-describedby": i.open ? i.contentId : void 0,
			"data-state": i.stateAttribute,
			...r,
			ref: s,
			onPointerMove: X(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), u.current = !0);
			}),
			onPointerLeave: X(e.onPointerLeave, () => {
				i.onTriggerLeave(), u.current = !1;
			}),
			onPointerDown: X(e.onPointerDown, () => {
				i.open && i.onClose(), l.current = !0, document.addEventListener("pointerup", d, { once: !0 });
			}),
			onFocus: X(e.onFocus, () => {
				l.current || i.onOpen();
			}),
			onBlur: X(e.onBlur, i.onClose),
			onClick: X(e.onClick, i.onClose)
		})
	});
});
$i.displayName = Qi;
var ea = "TooltipPortal", [ta, na] = zi(ea, { forceMount: void 0 }), ra = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = Xi(ea, t);
	return /* @__PURE__ */ (0, Y.jsx)(ta, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, Y.jsx)(Ti, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, Y.jsx)(Ci, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
ra.displayName = ea;
var ia = "TooltipContent", aa = g((e, t) => {
	let n = na(ia, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = Xi(ia, e.__scopeTooltip);
	return /* @__PURE__ */ (0, Y.jsx)(Ti, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ (0, Y.jsx)(ua, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ (0, Y.jsx)(oa, {
			side: i,
			...a,
			ref: t
		})
	});
}), oa = g((e, t) => {
	let n = Xi(ia, e.__scopeTooltip), i = Ki(ia, e.__scopeTooltip), a = v(null), o = B(t, a), [s, l] = r(null), { trigger: u, onClose: d } = n, f = a.current, { onPointerInTransitChange: p } = i, m = c(() => {
		l(null), p(!1);
	}, [p]), h = c((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = ma(r, pa(r, n.getBoundingClientRect())), a = ha(t.getBoundingClientRect()), o = _a([...i, ...a]);
		l(o), p(!0);
	}, [p]);
	return _(() => () => m(), [m]), _(() => {
		if (u && f) {
			let e = (e) => h(e, f), t = (e) => h(e, u);
			return u.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
				u.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t);
			};
		}
	}, [
		u,
		f,
		h,
		m
	]), _(() => {
		if (s) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = u?.contains(t) || f?.contains(t), i = !ga(n, s);
				r ? m() : i && (m(), d());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		u,
		f,
		s,
		d,
		m
	]), /* @__PURE__ */ (0, Y.jsx)(ua, {
		...e,
		ref: o
	});
}), [sa, ca] = zi(Ji, { isInside: !1 }), la = re("TooltipContent"), ua = g((e, t) => {
	let { __scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: a, onPointerDownOutside: o, ...s } = e, c = Xi(ia, n), l = Vi(n), { onClose: u } = c;
	return _(() => (document.addEventListener(Wi, u), () => document.removeEventListener(Wi, u)), [u]), _(() => {
		if (c.trigger) {
			let e = (e) => {
				e.target instanceof Node && e.target.contains(c.trigger) && u();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [c.trigger, u]), /* @__PURE__ */ (0, Y.jsx)(kt, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: a,
		onPointerDownOutside: o,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: u,
		children: /* @__PURE__ */ (0, Y.jsxs)(bi, {
			"data-state": c.stateAttribute,
			...l,
			...s,
			ref: t,
			style: {
				...s.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, Y.jsx)(la, { children: r }), /* @__PURE__ */ (0, Y.jsx)(sa, {
				scope: n,
				isInside: !0,
				children: /* @__PURE__ */ (0, Y.jsx)(Ri, {
					id: c.contentId,
					role: "tooltip",
					children: i || r
				})
			})]
		})
	});
});
aa.displayName = ia;
var da = "TooltipArrow", fa = g((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = Vi(n);
	return ca(da, n).isInside ? null : /* @__PURE__ */ (0, Y.jsx)(xi, {
		...i,
		...r,
		ref: t
	});
});
fa.displayName = da;
function pa(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function ma(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function ha(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function ga(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function _a(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), va(t);
}
function va(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var ya = qi, ba = Zi, xa = $i, Sa = ra, Ca = aa;
//#endregion
//#region ../shade/es/shade-app-CcS3f8MZ.js
s();
var wa = ya, Ta = ba, Ea = xa, Da = g(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ (0, Y.jsx)(Sa, { children: /* @__PURE__ */ (0, Y.jsx)("div", {
	className: ja,
	children: /* @__PURE__ */ (0, Y.jsx)(Ca, {
		ref: r,
		className: H("z-50 animate-in overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 dark:bg-popover dark:text-popover-foreground", e),
		sideOffset: t,
		...n
	})
}) }));
Da.displayName = Ca.displayName;
var Oa = o({
	isAnyTextFieldFocused: !1,
	setFocusState: () => {},
	darkMode: !1
}), ka = () => {
	let [e, t] = r(!1);
	return _(() => (t(!0), () => t(!1)), []), e ? w(/* @__PURE__ */ (0, Y.jsx)("div", {
		className: ja,
		style: {
			width: "unset",
			height: "unset"
		},
		children: /* @__PURE__ */ (0, Y.jsx)(yt, {
			duration: 5e3,
			icons: {
				error: /* @__PURE__ */ (0, Y.jsx)(ht.ErrorFill, { className: "text-red" }),
				success: /* @__PURE__ */ (0, Y.jsx)(ht.SuccessFill, { className: "text-green" }),
				info: /* @__PURE__ */ (0, Y.jsx)(ht.InfoFill, { className: "text-text-tertiary" })
			},
			position: "bottom-left",
			toastOptions: {
				classNames: {
					title: "mt-[-1px]! text-md! font-semibold! leading-tighter! tracking-[0.1px]!",
					description: "text-text-primary! text-sm! mt-px!",
					icon: "ml-0!"
				},
				style: {
					alignItems: "flex-start",
					maxWidth: "290px"
				}
			},
			closeButton: !0
		})
	}), document.body) : null;
}, Aa = ({ darkMode: e, children: t }) => {
	let [n, i] = r(!1);
	return /* @__PURE__ */ (0, Y.jsx)(Oa.Provider, {
		value: {
			isAnyTextFieldFocused: n,
			setFocusState: (e) => {
				i(e);
			},
			darkMode: e
		},
		children: /* @__PURE__ */ (0, Y.jsx)(vt, { children: /* @__PURE__ */ (0, Y.jsxs)(wa, { children: [t, /* @__PURE__ */ (0, Y.jsx)(ka, {})] }) })
	});
}, ja = "shade shade-admin shade-activitypub", Ma = ({ darkMode: e, className: t, children: n, ...r }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: M("shade", t),
	...r,
	children: /* @__PURE__ */ (0, Y.jsx)(Aa, {
		darkMode: e,
		children: n
	})
}), Na = (e, t) => {
	t?.(e), e.defaultPrevented || e.stopPropagation();
}, Pa = R("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]), Fa = R("ban", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M4.929 4.929 19.07 19.071",
	key: "196cmz"
}]]), Ia = R("book-open", [["path", {
	d: "M12 7v14",
	key: "1akyts"
}], ["path", {
	d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
	key: "ruj8y"
}]]), La = R("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), Ra = R("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), za = R("cloud-download", [
	["path", {
		d: "M12 13v8l-4-4",
		key: "1f5nwf"
	}],
	["path", {
		d: "m12 21 4-4",
		key: "1lfcce"
	}],
	["path", {
		d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
		key: "ui1hmy"
	}]
]), Ba = R("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]), Va = R("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]), Ha = R("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Ua = R("image-off", [
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}],
	["path", {
		d: "M10.41 10.41a2 2 0 1 1-2.83-2.83",
		key: "1bzlo9"
	}],
	["line", {
		x1: "13.5",
		x2: "6",
		y1: "13.5",
		y2: "21",
		key: "1q0aeu"
	}],
	["line", {
		x1: "18",
		x2: "21",
		y1: "12",
		y2: "15",
		key: "5mozeu"
	}],
	["path", {
		d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
		key: "mmje98"
	}],
	["path", {
		d: "M21 15V5a2 2 0 0 0-2-2H9",
		key: "43el77"
	}]
]), Wa = R("image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]), Ga = R("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]), Ka = R("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]), qa = R("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]), Ja = R("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]), Ya = R("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]), Xa = R("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]), Za = R("search-x", [
	["path", {
		d: "m13.5 8.5-5 5",
		key: "1cs55j"
	}],
	["path", {
		d: "m8.5 8.5 5 5",
		key: "a8mexj"
	}],
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["path", {
		d: "m21 21-4.3-4.3",
		key: "1qie3q"
	}]
]), Qa = R("settings-2", [
	["path", {
		d: "M14 17H5",
		key: "gfn3mx"
	}],
	["path", {
		d: "M19 7h-9",
		key: "6i9tg"
	}],
	["circle", {
		cx: "17",
		cy: "17",
		r: "3",
		key: "18b49y"
	}],
	["circle", {
		cx: "7",
		cy: "7",
		r: "3",
		key: "dfmy0x"
	}]
]), $a = R("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), eo = R("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), to = R("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), no = R("user-round-minus", [
	["path", {
		d: "M2 21a8 8 0 0 1 13.292-6",
		key: "bjp14o"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}]
]), ro = R("user-round-plus", [
	["path", {
		d: "M2 21a8 8 0 0 1 13.292-6",
		key: "bjp14o"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}]
]);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.4_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
s();
var io = 0, ao = null;
function oo() {
	_(() => {
		ao ||= {
			start: so(),
			end: so()
		};
		let { start: e, end: t } = ao;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), io++, () => {
			io === 1 && (ao?.start.remove(), ao?.end.remove(), ao = null), io = Math.max(0, io - 1);
		};
	}, []);
}
function so() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types_3d67843e15cde1f59ec8940982ecbaf3/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
s();
var co = "focusScope.autoFocusOnMount", lo = "focusScope.autoFocusOnUnmount", uo = {
	bubbles: !1,
	cancelable: !0
}, fo = "FocusScope", po = g((e, t) => {
	let { loop: n = !1, trapped: i = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = e, [l, u] = r(null), d = Pe(a), f = Pe(o), p = v(null), m = B(t, u), h = v({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	_(() => {
		if (i) {
			let e = function(e) {
				if (h.paused || !l) return;
				let t = e.target;
				l.contains(t) ? p.current = t : bo(p.current, { select: !0 });
			}, t = function(e) {
				if (h.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (l.contains(t) || bo(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && bo(l);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return l && r.observe(l, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		l,
		h.paused
	]), _(() => {
		if (l) {
			xo.add(h);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(co, uo);
				l.addEventListener(co, d), l.dispatchEvent(t), t.defaultPrevented || (mo(wo(go(l)), { select: !0 }), document.activeElement === e && bo(l));
			}
			return () => {
				l.removeEventListener(co, d), setTimeout(() => {
					let t = new CustomEvent(lo, uo);
					l.addEventListener(lo, f), l.dispatchEvent(t), t.defaultPrevented || bo(e ?? document.body, { select: !0 }), l.removeEventListener(lo, f), xo.remove(h);
				}, 0);
			};
		}
	}, [
		l,
		d,
		f,
		h
	]);
	let g = c((e) => {
		if (!n && !i || h.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, r = document.activeElement;
		if (t && r) {
			let t = e.currentTarget, [i, a] = ho(t);
			i && a ? !e.shiftKey && r === a ? (e.preventDefault(), n && bo(i, { select: !0 })) : e.shiftKey && r === i && (e.preventDefault(), n && bo(a, { select: !0 })) : r === t && e.preventDefault();
		}
	}, [
		n,
		i,
		h.paused
	]);
	return /* @__PURE__ */ (0, Y.jsx)(K.div, {
		tabIndex: -1,
		...s,
		ref: m,
		onKeyDown: g
	});
});
po.displayName = fo;
function mo(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (bo(r, { select: t }), document.activeElement !== n) return;
}
function ho(e) {
	let t = go(e);
	return [_o(t, e), _o(t.reverse(), e)];
}
function go(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function _o(e, t) {
	for (let n of e) if (!vo(n, { upTo: t })) return n;
}
function vo(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function yo(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function bo(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && yo(e) && t && e.select();
	}
}
var xo = So();
function So() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Co(e, t), e.unshift(t);
		},
		remove(t) {
			e = Co(e, t), e[0]?.resume();
		}
	};
}
function Co(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function wo(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var To = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Eo = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new WeakMap(), Oo = {}, ko = 0, Ao = function(e) {
	return e && (e.host || Ao(e.parentNode));
}, jo = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ao(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Mo = function(e, t, n, r) {
	var i = jo(t, Array.isArray(e) ? e : [e]);
	Oo[n] || (Oo[n] = /* @__PURE__ */ new WeakMap());
	var a = Oo[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Eo.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Eo.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Do.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), ko++, function() {
		o.forEach(function(e) {
			var t = Eo.get(e) - 1, i = a.get(e) - 1;
			Eo.set(e, t), a.set(e, i), t || (Do.has(e) || e.removeAttribute(r), Do.delete(e)), i || e.removeAttribute(n);
		}), ko--, ko || (Eo = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new WeakMap(), Oo = {});
	};
}, No = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || To(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Mo(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Po = function() {
	return Po = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Po.apply(this, arguments);
};
function Fo(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Io(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Lo = "right-scroll-bar-position", Ro = "width-before-scroll-bar", zo = "with-scroll-bars-hidden", Bo = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function Vo(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
s();
function Ho(e, t) {
	var n = r(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
s();
var Uo = typeof window < "u" ? y : _, Wo = /* @__PURE__ */ new WeakMap();
function Go(e, t) {
	var n = Ho(t || null, function(t) {
		return e.forEach(function(e) {
			return Vo(e, t);
		});
	});
	return Uo(function() {
		var t = Wo.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Vo(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Vo(e, a);
			});
		}
		Wo.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function Ko(e) {
	return e;
}
function qo(e, t) {
	t === void 0 && (t = Ko);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Jo(e) {
	e === void 0 && (e = {});
	var t = qo(null);
	return t.options = Po({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
s();
var Yo = function(e) {
	var t = e.sideCar, n = Fo(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return u(r, Po({}, n));
};
Yo.isSideCarExport = !0;
function Xo(e, t) {
	return e.useMedium(t), Yo;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var Zo = Jo();
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/UI.js
s();
var Qo = function() {}, $o = g(function(e, t) {
	var n = v(null), i = r({
		onScrollCapture: Qo,
		onWheelCapture: Qo,
		onTouchMoveCapture: Qo
	}), a = i[0], o = i[1], s = e.forwardProps, c = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, g = e.shards, _ = e.sideCar, y = e.noRelative, b = e.noIsolation, x = e.inert, S = e.allowPinchZoom, C = e.as, w = C === void 0 ? "div" : C, T = e.gapMode, E = Fo(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), D = _, O = Go([n, t]), k = Po(Po({}, E), a);
	return u(p, null, f && u(D, {
		sideCar: Zo,
		removeScrollBar: d,
		shards: g,
		noRelative: y,
		noIsolation: b,
		inert: x,
		setCallbacks: o,
		allowPinchZoom: !!S,
		lockRef: n,
		gapMode: T
	}), s ? m(h.only(c), Po(Po({}, k), { ref: O })) : u(w, Po({}, k, {
		className: l,
		ref: O
	}), c));
});
$o.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, $o.classNames = {
	fullWidth: Ro,
	zeroRight: Lo
};
//#endregion
//#region ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var es, ts = function() {
	if (es) return es;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function ns() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = ts();
	return t && e.setAttribute("nonce", t), e;
}
function rs(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function is(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var as = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = ns()) && (rs(t, n), is(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/hook.js
s();
var os = function() {
	var e = as();
	return function(t, n) {
		_(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, ss = function() {
	var e = os();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, cs = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, ls = function(e) {
	return parseInt(e || "", 10) || 0;
}, us = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		ls(n),
		ls(r),
		ls(i)
	];
}, ds = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return cs;
	var t = us(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
};
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/component.js
s();
var fs = ss(), ps = "data-scroll-locked", ms = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${zo} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${ps}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${Lo} {
    right: ${s}px ${r};
  }
  
  .${Ro} {
    margin-right: ${s}px ${r};
  }
  
  .${Lo} .${Lo} {
    right: 0 ${r};
  }
  
  .${Ro} .${Ro} {
    margin-right: 0 ${r};
  }
  
  body[${ps}] {
    ${Bo}: ${s}px;
  }
`;
}, hs = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, gs = function() {
	_(function() {
		return document.body.setAttribute(ps, (hs() + 1).toString()), function() {
			var e = hs() - 1;
			e <= 0 ? document.body.removeAttribute(ps) : document.body.setAttribute(ps, e.toString());
		};
	}, []);
}, _s = function(e) {
	var t = e.noRelative, r = e.noImportant, i = e.gapMode, a = i === void 0 ? "margin" : i;
	return gs(), u(fs, { styles: ms(n(function() {
		return ds(a);
	}, [a]), !t, a, r ? "" : "!important") });
}, vs = !1;
if (typeof window < "u") try {
	var ys = Object.defineProperty({}, "passive", { get: function() {
		return vs = !0, !0;
	} });
	window.addEventListener("test", ys, ys), window.removeEventListener("test", ys, ys);
} catch {
	vs = !1;
}
var bs = vs ? { passive: !1 } : !1, xs = function(e) {
	return e.tagName === "TEXTAREA";
}, Ss = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !xs(e) && n[t] === "visible");
}, Cs = function(e) {
	return Ss(e, "overflowY");
}, ws = function(e) {
	return Ss(e, "overflowX");
}, Ts = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Os(e, r)) {
			var i = ks(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Es = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Ds = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Os = function(e, t) {
	return e === "v" ? Cs(t) : ws(t);
}, ks = function(e, t) {
	return e === "v" ? Es(t) : Ds(t);
}, As = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, js = function(e, t, n, r, i) {
	var a = As(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ks(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Os(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
};
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
s();
var Ms = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ns = function(e) {
	return [e.deltaX, e.deltaY];
}, Ps = function(e) {
	return e && "current" in e ? e.current : e;
}, Fs = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Is = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Ls = 0, Rs = [];
function zs(e) {
	var t = v([]), n = v([0, 0]), i = v(), a = r(Ls++)[0], o = r(ss)[0], s = v(e);
	_(function() {
		s.current = e;
	}, [e]), _(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var t = Io([e.lockRef.current], (e.shards || []).map(Ps), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var l = c(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var r = Ms(e), a = n.current, o = "deltaX" in e ? e.deltaX : a[0] - r[0], c = "deltaY" in e ? e.deltaY : a[1] - r[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Ts(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Ts(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return js(h, t, e, h === "h" ? o : c, !0);
	}, []), d = c(function(e) {
		var n = e;
		if (!(!Rs.length || Rs[Rs.length - 1] !== o)) {
			var r = "deltaY" in n ? Ns(n) : Ms(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && Fs(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(Ps).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(a.length > 0 ? l(n, a[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), f = c(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: Bs(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), m = c(function(e) {
		n.current = Ms(e), i.current = void 0;
	}, []), h = c(function(t) {
		f(t.type, Ns(t), t.target, l(t, e.lockRef.current));
	}, []), g = c(function(t) {
		f(t.type, Ms(t), t.target, l(t, e.lockRef.current));
	}, []);
	_(function() {
		return Rs.push(o), e.setCallbacks({
			onScrollCapture: h,
			onWheelCapture: h,
			onTouchMoveCapture: g
		}), document.addEventListener("wheel", d, bs), document.addEventListener("touchmove", d, bs), document.addEventListener("touchstart", m, bs), function() {
			Rs = Rs.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", d, bs), document.removeEventListener("touchmove", d, bs), document.removeEventListener("touchstart", m, bs);
		};
	}, []);
	var y = e.removeScrollBar, b = e.inert;
	return u(p, null, b ? u(o, { styles: Is(a) }) : null, y ? u(_s, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function Bs(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Vs = Xo(Zo, zs);
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js
s();
var Hs = g(function(e, t) {
	return u($o, Po({}, e, {
		ref: t,
		sideCar: Vs
	}));
});
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.18_@types+react-dom@18.3.7_@types+react@18.3.31__@types+reac_2e1089bf12b8c5f777f8a71849ab93fd/node_modules/@radix-ui/react-dialog/dist/index.mjs
Hs.classNames = $o.classNames, s();
var Us = "Dialog", [Ws, Gs] = Ie(Us), [Ks, qs] = Ws(Us), Js = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, s = v(null), l = v(null), [u, d] = Mi({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Us
	});
	return /* @__PURE__ */ (0, Y.jsx)(Ks, {
		scope: t,
		triggerRef: s,
		contentRef: l,
		contentId: zt(),
		titleId: zt(),
		descriptionId: zt(),
		open: u,
		onOpenChange: d,
		onOpenToggle: c(() => d((e) => !e), [d]),
		modal: o,
		children: n
	});
};
Js.displayName = Us;
var Ys = "DialogTrigger", Xs = g((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = qs(Ys, n), a = B(t, i.triggerRef);
	return /* @__PURE__ */ (0, Y.jsx)(K.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": gc(i.open),
		...r,
		ref: a,
		onClick: X(e.onClick, i.onOpenToggle)
	});
});
Xs.displayName = Ys;
var Zs = "DialogPortal", [Qs, $s] = Ws(Zs, { forceMount: void 0 }), ec = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = qs(Zs, t);
	return /* @__PURE__ */ (0, Y.jsx)(Qs, {
		scope: t,
		forceMount: n,
		children: h.map(r, (e) => /* @__PURE__ */ (0, Y.jsx)(Ti, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, Y.jsx)(Ci, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
ec.displayName = Zs;
var tc = "DialogOverlay", nc = g((e, t) => {
	let n = $s(tc, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = qs(tc, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, Y.jsx)(Ti, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, Y.jsx)(ic, {
			...i,
			ref: t
		})
	}) : null;
});
nc.displayName = tc;
var rc = F("DialogOverlay.RemoveScroll"), ic = g((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = qs(tc, n), a = B(t, Mt());
	return /* @__PURE__ */ (0, Y.jsx)(Hs, {
		as: rc,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ (0, Y.jsx)(K.div, {
			"data-state": gc(i.open),
			...r,
			ref: a,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), ac = "DialogContent", oc = g((e, t) => {
	let n = $s(ac, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = qs(ac, e.__scopeDialog);
	return /* @__PURE__ */ (0, Y.jsx)(Ti, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, Y.jsx)(sc, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, Y.jsx)(cc, {
			...i,
			ref: t
		})
	});
});
oc.displayName = ac;
var sc = g((e, t) => {
	let n = qs(ac, e.__scopeDialog), r = v(null), i = B(t, n.contentRef, r);
	return _(() => {
		let e = r.current;
		if (e) return No(e);
	}, []), /* @__PURE__ */ (0, Y.jsx)(lc, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		onCloseAutoFocus: X(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: X(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: X(e.onFocusOutside, (e) => e.preventDefault())
	});
}), cc = g((e, t) => {
	let n = qs(ac, e.__scopeDialog), r = v(!1), i = v(!1);
	return /* @__PURE__ */ (0, Y.jsx)(lc, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), lc = g((e, t) => {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = qs(ac, n);
	return oo(), /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: /* @__PURE__ */ (0, Y.jsx)(po, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, Y.jsx)(kt, {
			role: "dialog",
			id: s.contentId,
			"aria-describedby": s.descriptionId,
			"aria-labelledby": s.titleId,
			"data-state": gc(s.open),
			...o,
			ref: t,
			deferPointerDownOutside: !0,
			onDismiss: () => s.onOpenChange(!1)
		})
	}) });
}), uc = "DialogTitle", dc = g((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = qs(uc, n);
	return /* @__PURE__ */ (0, Y.jsx)(K.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
dc.displayName = uc;
var fc = "DialogDescription", pc = g((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = qs(fc, n);
	return /* @__PURE__ */ (0, Y.jsx)(K.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
pc.displayName = fc;
var mc = "DialogClose", hc = g((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = qs(mc, n);
	return /* @__PURE__ */ (0, Y.jsx)(K.button, {
		type: "button",
		...r,
		ref: t,
		onClick: X(e.onClick, () => i.onOpenChange(!1))
	});
});
hc.displayName = mc;
function gc(e) {
	return e ? "open" : "closed";
}
//#endregion
//#region ../shade/es/components/ui/dialog.js
s();
var _c = Js, vc = Xs, yc = ec, bc = hc, xc = g(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(nc, {
	ref: n,
	className: H("fixed inset-0 z-50 transform-gpu bg-black/30 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 dark:bg-black/60", e),
	...t
}));
xc.displayName = nc.displayName;
var Sc = g(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, Y.jsx)(yc, { children: /* @__PURE__ */ (0, Y.jsxs)("div", {
	className: ja,
	children: [/* @__PURE__ */ (0, Y.jsx)(xc, {}), /* @__PURE__ */ (0, Y.jsx)(oc, {
		ref: r,
		className: H("fixed top-[8vmin] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] transform-gpu gap-6 bg-surface-elevated-2 p-6 shadow-lg outline-hidden duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:rounded-lg", e),
		...n,
		children: t
	})]
}) }));
Sc.displayName = oc.displayName;
var Cc = ({ className: e, ...t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: H("flex flex-col gap-y-1.5 text-center sm:text-left", e),
	...t
});
Cc.displayName = "DialogHeader";
var wc = ({ className: e, ...t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: H("flex flex-col-reverse sm:flex-row sm:items-end sm:justify-end sm:gap-2 [&_button]:min-w-20", e),
	...t
});
wc.displayName = "DialogFooter";
var Tc = g(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(dc, {
	ref: n,
	className: H("text-xl leading-none font-semibold tracking-tight", e),
	...t
}));
Tc.displayName = dc.displayName;
var Ec = g(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(pc, {
	ref: n,
	className: H("text-muted-foreground", e),
	...t
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-popover@1.1.18_@types+react-dom@18.3.7_@types+react@18.3.31__@types+rea_8a3b109e72d032b35181788743af8841/node_modules/@radix-ui/react-popover/dist/index.mjs
Ec.displayName = pc.displayName, s();
var Dc = "Popover", [Oc, kc] = Ie(Dc, [ni]), Ac = ni(), [jc, Mc] = Oc(Dc), Nc = (e) => {
	let { __scopePopover: t, children: n, open: i, defaultOpen: a, onOpenChange: o, modal: s = !1 } = e, l = Ac(t), u = v(null), [d, f] = r(!1), [p, m] = Mi({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Dc
	});
	return /* @__PURE__ */ (0, Y.jsx)(vi, {
		...l,
		children: /* @__PURE__ */ (0, Y.jsx)(jc, {
			scope: t,
			contentId: zt(),
			triggerRef: u,
			open: p,
			onOpenChange: m,
			onOpenToggle: c(() => m((e) => !e), [m]),
			hasCustomAnchor: d,
			onCustomAnchorAdd: c(() => f(!0), []),
			onCustomAnchorRemove: c(() => f(!1), []),
			modal: s,
			children: n
		})
	});
};
Nc.displayName = Dc;
var Pc = "PopoverAnchor", Fc = g((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Mc(Pc, n), a = Ac(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return _(() => (o(), () => s()), [o, s]), /* @__PURE__ */ (0, Y.jsx)(yi, {
		...a,
		...r,
		ref: t
	});
});
Fc.displayName = Pc;
var Ic = "PopoverTrigger", Lc = g((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Mc(Ic, n), a = Ac(n), o = B(t, i.triggerRef), s = /* @__PURE__ */ (0, Y.jsx)(K.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": Qc(i.open),
		...r,
		ref: o,
		onClick: X(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ (0, Y.jsx)(yi, {
		asChild: !0,
		...a,
		children: s
	});
});
Lc.displayName = Ic;
var Rc = "PopoverPortal", [zc, Bc] = Oc(Rc, { forceMount: void 0 }), Vc = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = Mc(Rc, t);
	return /* @__PURE__ */ (0, Y.jsx)(zc, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, Y.jsx)(Ti, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, Y.jsx)(Ci, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Vc.displayName = Rc;
var Hc = "PopoverContent", Uc = g((e, t) => {
	let n = Bc(Hc, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = Mc(Hc, e.__scopePopover);
	return /* @__PURE__ */ (0, Y.jsx)(Ti, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, Y.jsx)(Gc, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, Y.jsx)(Kc, {
			...i,
			ref: t
		})
	});
});
Uc.displayName = Hc;
var Wc = F("PopoverContent.RemoveScroll"), Gc = g((e, t) => {
	let n = Mc(Hc, e.__scopePopover), r = v(null), i = B(t, r), a = v(!1);
	return _(() => {
		let e = r.current;
		if (e) return No(e);
	}, []), /* @__PURE__ */ (0, Y.jsx)(Hs, {
		as: Wc,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ (0, Y.jsx)(qc, {
			...e,
			ref: i,
			trapFocus: n.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: X(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), a.current || n.triggerRef.current?.focus();
			}),
			onPointerDownOutside: X(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				a.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: X(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), Kc = g((e, t) => {
	let n = Mc(Hc, e.__scopePopover), r = v(!1), i = v(!1);
	return /* @__PURE__ */ (0, Y.jsx)(qc, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), qc = g((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = Mc(Hc, n), p = Ac(n);
	return oo(), /* @__PURE__ */ (0, Y.jsx)(po, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, Y.jsx)(kt, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => f.onOpenChange(!1),
			deferPointerDownOutside: !0,
			children: /* @__PURE__ */ (0, Y.jsx)(bi, {
				"data-state": Qc(f.open),
				role: "dialog",
				id: f.contentId,
				...p,
				...d,
				ref: t,
				style: {
					...d.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), Jc = "PopoverClose", Yc = g((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Mc(Jc, n);
	return /* @__PURE__ */ (0, Y.jsx)(K.button, {
		type: "button",
		...r,
		ref: t,
		onClick: X(e.onClick, () => i.onOpenChange(!1))
	});
});
Yc.displayName = Jc;
var Xc = "PopoverArrow", Zc = g((e, t) => {
	let { __scopePopover: n, ...r } = e, i = Ac(n);
	return /* @__PURE__ */ (0, Y.jsx)(xi, {
		...i,
		...r,
		ref: t
	});
});
Zc.displayName = Xc;
function Qc(e) {
	return e ? "open" : "closed";
}
var $c = Nc, el = Lc, tl = Vc, nl = Uc, rl = Yc;
//#endregion
//#region ../shade/es/components/ui/popover.js
s();
var il = $c, al = el, ol = rl, sl = g(({ className: e, align: t = "center", onEscapeKeyDown: n, sideOffset: r = 4, ...i }, a) => /* @__PURE__ */ (0, Y.jsx)(tl, { children: /* @__PURE__ */ (0, Y.jsx)("div", {
	className: ja,
	children: /* @__PURE__ */ (0, Y.jsx)(nl, {
		ref: a,
		align: t,
		className: H("z-50 origin-(--radix-popover-content-transform-origin) rounded-md border border-border/60 bg-surface-elevated-2 p-5 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-border/30", e),
		sideOffset: r,
		onEscapeKeyDown: (e) => Na(e, n),
		...i
	})
}) }));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-alert-dialog@1.1.18_@types+react-dom@18.3.7_@types+react@18.3.31__@type_6219ffd5c85ad0b85061ea739c6eab31/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
sl.displayName = nl.displayName, s();
var cl = "AlertDialog", [ll, ul] = Ie(cl, [Gs]), dl = Gs(), fl = (e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = dl(t);
	return /* @__PURE__ */ (0, Y.jsx)(Js, {
		...r,
		...n,
		modal: !0
	});
};
fl.displayName = cl;
var pl = "AlertDialogTrigger", ml = g((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = dl(n);
	return /* @__PURE__ */ (0, Y.jsx)(Xs, {
		...i,
		...r,
		ref: t
	});
});
ml.displayName = pl;
var hl = "AlertDialogPortal", gl = (e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = dl(t);
	return /* @__PURE__ */ (0, Y.jsx)(ec, {
		...r,
		...n
	});
};
gl.displayName = hl;
var _l = "AlertDialogOverlay", vl = g((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = dl(n);
	return /* @__PURE__ */ (0, Y.jsx)(nc, {
		...i,
		...r,
		ref: t
	});
});
vl.displayName = _l;
var yl = "AlertDialogContent", [bl, xl] = ll(yl), Sl = g((e, t) => {
	let { __scopeAlertDialog: n, children: r, ...i } = e, a = dl(n), o = B(t, v(null)), s = v(null);
	return /* @__PURE__ */ (0, Y.jsx)(bl, {
		scope: n,
		cancelRef: s,
		children: /* @__PURE__ */ (0, Y.jsx)(oc, {
			role: "alertdialog",
			...a,
			...i,
			ref: o,
			onOpenAutoFocus: X(i.onOpenAutoFocus, (e) => {
				e.preventDefault(), s.current?.focus({ preventScroll: !0 });
			}),
			onPointerDownOutside: (e) => e.preventDefault(),
			onInteractOutside: (e) => e.preventDefault(),
			children: r
		})
	});
});
Sl.displayName = yl;
var Cl = "AlertDialogTitle", wl = g((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = dl(n);
	return /* @__PURE__ */ (0, Y.jsx)(dc, {
		...i,
		...r,
		ref: t
	});
});
wl.displayName = Cl;
var Tl = "AlertDialogDescription", El = g((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = dl(n);
	return /* @__PURE__ */ (0, Y.jsx)(pc, {
		...i,
		...r,
		ref: t
	});
});
El.displayName = Tl;
var Dl = "AlertDialogAction", Ol = g((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = dl(n);
	return /* @__PURE__ */ (0, Y.jsx)(hc, {
		...i,
		...r,
		ref: t
	});
});
Ol.displayName = Dl;
var kl = "AlertDialogCancel", Al = g((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = xl(kl, n), a = dl(n), o = B(t, i);
	return /* @__PURE__ */ (0, Y.jsx)(hc, {
		...a,
		...r,
		ref: o
	});
});
Al.displayName = kl;
var jl = fl, Ml = ml, Nl = gl, Pl = vl, Fl = Sl, Il = Ol, Ll = Al, Rl = wl, zl = El;
//#endregion
//#region ../shade/es/components/ui/alert-dialog.js
s();
var Bl = jl, Vl = Ml, Hl = Nl, Ul = g(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(Pl, {
	className: H("fixed inset-0 z-50 transform-gpu bg-black/30 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 dark:bg-black/60", e),
	...t,
	ref: n
}));
Ul.displayName = Pl.displayName;
var Wl = g(({ className: e, overlayClassName: t, ...n }, r) => /* @__PURE__ */ (0, Y.jsx)(Hl, { children: /* @__PURE__ */ (0, Y.jsxs)("div", {
	className: ja,
	children: [/* @__PURE__ */ (0, Y.jsx)(Ul, {
		className: t,
		onClick: (e) => e.stopPropagation()
	}), /* @__PURE__ */ (0, Y.jsx)(Fl, {
		ref: r,
		className: H("fixed top-[20%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-20%] gap-6 bg-surface-elevated-2 p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-[18%] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-[18%] sm:rounded-lg", e),
		...n
	})]
}) }));
Wl.displayName = Fl.displayName;
var Gl = ({ className: e, ...t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: H("flex flex-col gap-y-2 text-center sm:text-left", e),
	...t
});
Gl.displayName = "AlertDialogHeader";
var Kl = ({ className: e, ...t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: H("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2", e),
	...t
});
Kl.displayName = "AlertDialogFooter";
var ql = g(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(Rl, {
	ref: n,
	className: H("text-xl font-semibold", e),
	...t
}));
ql.displayName = Rl.displayName;
var Jl = g(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(zl, {
	ref: n,
	className: H("text-base", e),
	...t
}));
Jl.displayName = zl.displayName;
var Yl = g(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(Il, {
	ref: n,
	className: H(ne(), e),
	...t
}));
Yl.displayName = Il.displayName;
var Xl = g(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(Ll, {
	ref: n,
	className: H(ne({ variant: "outline" }), "mt-2 sm:mt-0", e),
	...t
}));
Xl.displayName = Ll.displayName;
//#endregion
//#region ../shade/es/components/ui/input-surface.js
var Zl = {
	base: "rounded-md border border-control-border bg-control-surface transition-colors",
	focusSelf: "focus-visible:outline-hidden focus-visible:border-focus-ring focus-visible:ring-2 focus-visible:ring-focus-ring/25",
	focusWithin: "has-[:focus-visible]:outline-hidden has-[:focus-visible]:border-focus-ring has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-focus-ring/25",
	invalidSelf: "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40",
	invalidWithin: "has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:ring-destructive/20 dark:has-[[aria-invalid=true]]:ring-destructive/40",
	disabledSelf: "disabled:cursor-not-allowed disabled:opacity-50",
	disabledFieldSelf: "disabled:bg-control-disabled-surface disabled:text-muted-foreground disabled:opacity-100 disabled:hover:bg-control-disabled-surface"
};
function Ql(e = "self") {
	return e === "self" ? H(Zl.base, Zl.focusSelf, Zl.invalidSelf, Zl.disabledSelf) : H(Zl.base, Zl.focusWithin, Zl.invalidWithin);
}
//#endregion
//#region ../shade/es/components/ui/input.js
s();
var $l = g(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ (0, Y.jsx)("input", {
	ref: r,
	className: H(Ql("self"), Zl.disabledFieldSelf, "flex h-(--control-height) w-full px-3 py-1 text-control file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground", e),
	type: t,
	...n
}));
//#endregion
//#region ../shade/es/components/ui/loading-indicator.js
$l.displayName = "Input", s();
var eu = ({ size: e = "md", color: t = "dark", className: n = "" }) => {
	let r = "relative mx-0 my-[-0.5] box-border inline-block animate-spin rounded-full before:z-10 before:block before:rounded-full before:content-['']";
	switch (e) {
		case "sm":
			r += " h-[16px] w-[16px] border-2 before:mt-[10px] before:h-[3px] before:w-[3px]";
			break;
		case "md":
			r += " h-[20px] w-[20px] border-2 before:mt-[13px] before:h-[3px] before:w-[3px]";
			break;
		default:
			r += " h-[50px] w-[50px] border before:mt-[7px] before:h-[7px] before:w-[7px]";
			break;
	}
	switch (t) {
		case "current":
			r += " border-current/20 before:bg-current";
			break;
		case "light":
			r += " border-white/20 before:bg-white dark:border-black/10 dark:before:bg-black";
			break;
		default:
			r += " border-black/10 before:bg-black dark:border-white/20 dark:before:bg-white";
			break;
	}
	return /* @__PURE__ */ (0, Y.jsx)("div", { className: `${r} ${n}` });
};
//#endregion
//#region ../shade/es/components/ui/animated-number.js
s();
var tu = f(() => import("./dist-ByFmDSNP.js")), nu = (e) => /* @__PURE__ */ (0, Y.jsx)(l, {
	fallback: /* @__PURE__ */ (0, Y.jsx)("div", {}),
	children: /* @__PURE__ */ (0, Y.jsx)(tu, { ...e })
});
//#endregion
//#region ../shade/es/components/ui/badge.js
s();
var ru = I("inline-flex items-center rounded-xs border px-1.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:outline-hidden", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground",
		secondary: "border-transparent bg-secondary text-secondary-foreground/70",
		destructive: "border-transparent bg-destructive/20 text-destructive",
		success: "border-transparent bg-green/20 text-green",
		warning: "border-transparent bg-state-warning/20 text-yellow-600",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function iu({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ (0, Y.jsx)("div", {
		className: H(ru({ variant: t }), e),
		...n
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-label@2.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react_b52ba80fbc885fa57ca9a4089e26a791/node_modules/@radix-ui/react-label/dist/index.mjs
s();
var au = "Label", ou = g((e, t) => /* @__PURE__ */ (0, Y.jsx)(K.label, {
	...e,
	ref: t,
	onMouseDown: (t) => {
		t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
	}
}));
ou.displayName = au;
var su = ou;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-hover-card@1.1.18_@types+react-dom@18.3.7_@types+react@18.3.31__@types+_5116cc60c827801c0ce163cced83a480/node_modules/@radix-ui/react-hover-card/dist/index.mjs
s();
var cu, lu = "HoverCard", [uu, du] = Ie(lu, [ni]), fu = ni(), [pu, mu] = uu(lu), hu = (e) => {
	let { __scopeHoverCard: t, children: n, open: r, defaultOpen: i, onOpenChange: a, openDelay: o = 700, closeDelay: s = 300 } = e, l = fu(t), u = v(0), d = v(0), f = v(!1), p = v(!1), [m, h] = Mi({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: lu
	}), g = c(() => {
		clearTimeout(d.current), u.current = window.setTimeout(() => h(!0), o);
	}, [o, h]), y = c(() => {
		clearTimeout(u.current), !f.current && !p.current && (d.current = window.setTimeout(() => h(!1), s));
	}, [s, h]), b = c(() => h(!1), [h]);
	return _(() => () => {
		clearTimeout(u.current), clearTimeout(d.current);
	}, []), /* @__PURE__ */ (0, Y.jsx)(pu, {
		scope: t,
		open: m,
		onOpenChange: h,
		onOpen: g,
		onClose: y,
		onDismiss: b,
		hasSelectionRef: f,
		isPointerDownOnContentRef: p,
		children: /* @__PURE__ */ (0, Y.jsx)(vi, {
			...l,
			children: n
		})
	});
};
hu.displayName = lu;
var gu = "HoverCardTrigger", _u = g((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = mu(gu, n), a = fu(n);
	return /* @__PURE__ */ (0, Y.jsx)(yi, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ (0, Y.jsx)(K.a, {
			"data-state": i.open ? "open" : "closed",
			...r,
			ref: t,
			onPointerEnter: X(e.onPointerEnter, Du(i.onOpen)),
			onPointerLeave: X(e.onPointerLeave, Du(i.onClose)),
			onFocus: X(e.onFocus, i.onOpen),
			onBlur: X(e.onBlur, i.onClose),
			onTouchStart: X(e.onTouchStart, (e) => e.preventDefault())
		})
	});
});
_u.displayName = gu;
var vu = "HoverCardPortal", [yu, bu] = uu(vu, { forceMount: void 0 }), xu = (e) => {
	let { __scopeHoverCard: t, forceMount: n, children: r, container: i } = e, a = mu(vu, t);
	return /* @__PURE__ */ (0, Y.jsx)(yu, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, Y.jsx)(Ti, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, Y.jsx)(Ci, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
xu.displayName = vu;
var Su = "HoverCardContent", Cu = g((e, t) => {
	let n = bu(Su, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...i } = e, a = mu(Su, e.__scopeHoverCard);
	return /* @__PURE__ */ (0, Y.jsx)(Ti, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, Y.jsx)(wu, {
			"data-state": a.open ? "open" : "closed",
			...i,
			onPointerEnter: X(e.onPointerEnter, Du(a.onOpen)),
			onPointerLeave: X(e.onPointerLeave, Du(a.onClose)),
			ref: t
		})
	});
});
Cu.displayName = Su;
var wu = g((e, t) => {
	let { __scopeHoverCard: n, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, ...c } = e, l = mu(Su, n), u = fu(n), d = v(null), f = B(t, d), [p, m] = r(!1);
	return _(() => {
		if (p) {
			let e = document.body;
			return cu = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
				e.style.userSelect = cu, e.style.webkitUserSelect = cu;
			};
		}
	}, [p]), _(() => {
		if (d.current) {
			let e = () => {
				m(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
					document.getSelection()?.toString() !== "" && (l.hasSelectionRef.current = !0);
				});
			};
			return document.addEventListener("pointerup", e), () => {
				document.removeEventListener("pointerup", e), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
			};
		}
	}, [l.isPointerDownOnContentRef, l.hasSelectionRef]), _(() => {
		d.current && Ou(d.current).forEach((e) => e.setAttribute("tabindex", "-1"));
	}), /* @__PURE__ */ (0, Y.jsx)(kt, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onInteractOutside: s,
		onEscapeKeyDown: i,
		onPointerDownOutside: a,
		onFocusOutside: X(o, (e) => {
			e.preventDefault();
		}),
		onDismiss: l.onDismiss,
		children: /* @__PURE__ */ (0, Y.jsx)(bi, {
			...u,
			...c,
			onPointerDown: X(c.onPointerDown, (e) => {
				e.currentTarget.contains(e.target) && m(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
			}),
			ref: f,
			style: {
				...c.style,
				userSelect: p ? "text" : void 0,
				WebkitUserSelect: p ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}), Tu = "HoverCardArrow", Eu = g((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = fu(n);
	return /* @__PURE__ */ (0, Y.jsx)(xi, {
		...i,
		...r,
		ref: t
	});
});
Eu.displayName = Tu;
function Du(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function Ou(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
var ku = hu, Au = _u, ju = xu, Mu = Cu;
//#endregion
//#region ../shade/es/components/ui/hover-card.js
s();
var Nu = ku, Pu = Au, Fu = g(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, i) => /* @__PURE__ */ (0, Y.jsx)(ju, { children: /* @__PURE__ */ (0, Y.jsx)("div", {
	className: ja,
	children: /* @__PURE__ */ (0, Y.jsx)(Mu, {
		ref: i,
		align: t,
		className: H("pointer-events-auto z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		sideOffset: n,
		...r
	})
}) }));
//#endregion
//#region ../shade/es/components/ui/no-value-label.js
Fu.displayName = Mu.displayName, s();
var Iu = ({ className: e = "", children: t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: `my-10 flex flex-col items-center gap-1 text-sm text-text-secondary ${e}`,
	children: t
}), Lu = ({ className: e = "", children: t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: `text-text-tertiary [&>svg]:size-8 [&>svg]:stroke-[1px] ${e}`,
	children: t
});
//#endregion
//#region src/components/global/back-button.tsx
s();
var Ru = ({ className: e, onClick: t }) => {
	let n = oe(), { previousPath: r } = V();
	return /* @__PURE__ */ (0, Y.jsx)(z, {
		className: H("size-8 rounded-full bg-white/85 px-2 backdrop-blur-md focus-visible:ring-0 dark:bg-transparent dark:text-white [&_svg]:size-6", e),
		variant: "ghost",
		onClick: () => {
			if (t) {
				t();
				return;
			}
			n(r ? -1 : "/");
		},
		children: /* @__PURE__ */ (0, Y.jsx)(Pa, {
			size: 20,
			strokeWidth: 1.25
		})
	});
}, zu = () => {
	let e = T(jf, D().pathname);
	if (!e) return null;
	let t = e.map((e) => e.route).filter((e) => e.pageTitle);
	return t[t.length - 1] || e[e.length - 1].route;
};
//#endregion
//#region src/hooks/use-current-page.ts
function Bu() {
	let e = x(), t = e.findIndex((e) => e.handle === "activitypub-basepath");
	if (t === -1) return "";
	let n = e[t + 1];
	if (!n) return "";
	let r = e[t].pathname, i = n.pathname, a = i.startsWith(r) ? i.slice(r.length) : i;
	return a = a.replace(/^\//, ""), a.split("/")[0];
}
//#endregion
//#region src/components/layout/header/header.tsx
s();
var Vu = ({ title: e, backIcon: t }) => t ? /* @__PURE__ */ (0, Y.jsx)(Ru, { className: "-ml-2" }) : /* @__PURE__ */ (0, Y.jsx)(pe, {
	className: "!text-[1.5rem] font-semibold tracking-normal",
	children: e
}), Hu = ({ onToggleMobileSidebar: e }) => /* @__PURE__ */ (0, Y.jsx)(z, {
	className: "px:0 mr-[-9px] w-[34px] rounded-full bg-white/85 backdrop-blur-md lg:hidden dark:bg-black/85 dark:text-white",
	variant: "ghost",
	onClick: e,
	children: /* @__PURE__ */ (0, Y.jsx)(Ka, { className: "size-5!" })
}), Uu = ({ onToggleMobileSidebar: e, showBorder: t = !0 }) => {
	let { canGoBack: n } = V(), r = Bu(), i = N(), a = zu(), o = !1;
	r === "profile" && (o = !0), r === "notes" && n && (o = !0);
	let s = n && i || a?.showBackButton === !0;
	return /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: o ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "sticky top-5 left-0 z-50 inline-block max-lg:flex max-lg:items-center max-lg:justify-between max-lg:pr-[15.5px] max-md:top-4",
		children: [/* @__PURE__ */ (0, Y.jsx)("div", { children: s && /* @__PURE__ */ (0, Y.jsx)(Ru, { className: "ml-6 max-md:ml-[10px]" }) }), !s && /* @__PURE__ */ (0, Y.jsx)(Hu, { onToggleMobileSidebar: e })]
	}) : /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "sticky top-0 z-50 bg-white/85 backdrop-blur-md dark:bg-background",
		"data-network-header": "header",
		children: /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: `relative flex h-[72px] items-center justify-between gap-5 px-[min(4vw,24px)] max-md:h-[68px] ${t ? "before:absolute before:inset-x-[min(4vw,24px)] before:bottom-0 before:block before:border-b before:border-gray-200 before:content-[\"\"] dark:before:border-gray-950" : ""}`,
			children: [/* @__PURE__ */ (0, Y.jsx)(Vu, {
				backIcon: s,
				title: a?.pageTitle || ""
			}), /* @__PURE__ */ (0, Y.jsx)(Hu, { onToggleMobileSidebar: e })]
		})
	}) });
};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-form@0.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react@_f82e31d0dd301bb9df24fd3128bc88e8/node_modules/@radix-ui/react-form/dist/index.mjs
s();
var [Wu, Gu] = Ie("Form"), Ku = "Form", [qu, Ju] = Wu(Ku), [Yu, Xu] = Wu(Ku), Zu = g((e, t) => {
	let { __scopeForm: n, onClearServerErrors: i = () => {}, ...a } = e, o = B(t, v(null)), [s, l] = r({}), u = c((e) => s[e], [s]), d = c((e, t) => l((n) => ({
		...n,
		[e]: {
			...n[e] ?? {},
			...t
		}
	})), []), f = c((e) => {
		l((t) => ({
			...t,
			[e]: void 0
		})), b((t) => ({
			...t,
			[e]: {}
		}));
	}, []), [p, m] = r({}), h = c((e) => p[e] ?? [], [p]), g = c((e, t) => {
		m((n) => ({
			...n,
			[e]: [...n[e] ?? [], t]
		}));
	}, []), _ = c((e, t) => {
		m((n) => ({
			...n,
			[e]: (n[e] ?? []).filter((e) => e.id !== t)
		}));
	}, []), [y, b] = r({}), x = c((e) => y[e] ?? {}, [y]), S = c((e, t) => {
		b((n) => ({
			...n,
			[e]: {
				...n[e] ?? {},
				...t
			}
		}));
	}, []), [C, w] = r({});
	return /* @__PURE__ */ (0, Y.jsx)(qu, {
		scope: n,
		getFieldValidity: u,
		onFieldValidityChange: d,
		getFieldCustomMatcherEntries: h,
		onFieldCustomMatcherEntryAdd: g,
		onFieldCustomMatcherEntryRemove: _,
		getFieldCustomErrors: x,
		onFieldCustomErrorsChange: S,
		onFieldValiditionClear: f,
		children: /* @__PURE__ */ (0, Y.jsx)(Yu, {
			scope: n,
			onFieldMessageIdAdd: c((e, t) => {
				w((n) => {
					let r = new Set(n[e]).add(t);
					return {
						...n,
						[e]: r
					};
				});
			}, []),
			onFieldMessageIdRemove: c((e, t) => {
				w((n) => {
					let r = new Set(n[e]);
					return r.delete(t), {
						...n,
						[e]: r
					};
				});
			}, []),
			getFieldDescription: c((e) => Array.from(C[e] ?? []).join(" ") || void 0, [C]),
			children: /* @__PURE__ */ (0, Y.jsx)(K.form, {
				...a,
				ref: o,
				onInvalid: X(e.onInvalid, (e) => {
					let t = xd(e.currentTarget);
					t === e.target && t.focus(), e.preventDefault();
				}),
				onSubmit: X(e.onSubmit, i, { checkForDefaultPrevented: !1 }),
				onReset: X(e.onReset, i)
			})
		})
	});
});
Zu.displayName = Ku;
var Qu = "FormField", [$u, ed] = Wu(Qu), td = g((e, t) => {
	let { __scopeForm: n, name: r, serverInvalid: i = !1, ...a } = e, o = Ju(Qu, n).getFieldValidity(r);
	return /* @__PURE__ */ (0, Y.jsx)($u, {
		scope: n,
		id: zt(),
		name: r,
		serverInvalid: i,
		children: /* @__PURE__ */ (0, Y.jsx)(K.div, {
			"data-valid": Ed(o, i),
			"data-invalid": Dd(o, i),
			...a,
			ref: t
		})
	});
});
td.displayName = Qu;
var nd = "FormLabel", rd = g((e, t) => {
	let { __scopeForm: n, ...r } = e, i = Ju(nd, n), a = ed(nd, n), o = r.htmlFor || a.id, s = i.getFieldValidity(a.name);
	return /* @__PURE__ */ (0, Y.jsx)(ou, {
		"data-valid": Ed(s, a.serverInvalid),
		"data-invalid": Dd(s, a.serverInvalid),
		...r,
		ref: t,
		htmlFor: o
	});
});
rd.displayName = nd;
var id = "FormControl", ad = g((e, t) => {
	let { __scopeForm: n, ...r } = e, i = Ju(id, n), a = ed(id, n), o = Xu(id, n), s = v(null), l = B(t, s), u = r.name || a.name, d = r.id || a.id, f = i.getFieldCustomMatcherEntries(u), { onFieldValidityChange: p, onFieldCustomErrorsChange: m, onFieldValiditionClear: h } = i, g = c(async (e) => {
		if (Td(e.validity)) {
			let t = _d(e.validity);
			p(u, t);
			return;
		}
		let t = e.form ? new FormData(e.form) : new FormData(), n = [e.value, t], r = [], i = [];
		f.forEach((e) => {
			Sd(e, n) ? i.push(e) : Cd(e) && r.push(e);
		});
		let a = r.map(({ id: e, match: t }) => [e, t(...n)]), o = Object.fromEntries(a), s = Object.values(o).some(Boolean), c = s;
		e.setCustomValidity(c ? od : "");
		let l = _d(e.validity);
		if (p(u, l), m(u, o), !s && i.length > 0) {
			let t = i.map(({ id: e, match: t }) => t(...n).then((t) => [e, t])), r = await Promise.all(t), a = Object.fromEntries(r), o = Object.values(a).some(Boolean);
			e.setCustomValidity(o ? od : "");
			let s = _d(e.validity);
			p(u, s), m(u, a);
		}
	}, [
		f,
		u,
		m,
		p
	]);
	_(() => {
		let e = s.current;
		if (e) {
			let t = () => g(e);
			return e.addEventListener("change", t), () => e.removeEventListener("change", t);
		}
	}, [g]);
	let y = c(() => {
		let e = s.current;
		e && (e.setCustomValidity(""), h(u));
	}, [u, h]);
	_(() => {
		let e = s.current?.form;
		if (e) return e.addEventListener("reset", y), () => e.removeEventListener("reset", y);
	}, [y]), _(() => {
		let e = s.current, t = e?.closest("form");
		if (t && a.serverInvalid) {
			let n = xd(t);
			n === e && n.focus();
		}
	}, [a.serverInvalid]);
	let b = i.getFieldValidity(u);
	return /* @__PURE__ */ (0, Y.jsx)(K.input, {
		"data-valid": Ed(b, a.serverInvalid),
		"data-invalid": Dd(b, a.serverInvalid),
		"aria-invalid": a.serverInvalid ? !0 : void 0,
		"aria-describedby": o.getFieldDescription(u),
		title: "",
		...r,
		ref: l,
		id: d,
		name: u,
		onInvalid: X(e.onInvalid, (e) => {
			let t = e.currentTarget;
			g(t);
		}),
		onChange: X(e.onChange, (e) => {
			y();
		})
	});
});
ad.displayName = id;
var od = "This value is not valid", sd = {
	badInput: od,
	patternMismatch: "This value does not match the required pattern",
	rangeOverflow: "This value is too large",
	rangeUnderflow: "This value is too small",
	stepMismatch: "This value does not match the required step",
	tooLong: "This value is too long",
	tooShort: "This value is too short",
	typeMismatch: "This value does not match the required type",
	valid: void 0,
	valueMissing: "This value is missing"
}, cd = "FormMessage", ld = g((e, t) => {
	let { match: n, name: r, ...i } = e, a = ed(cd, e.__scopeForm), o = r ?? a.name;
	return n === void 0 ? /* @__PURE__ */ (0, Y.jsx)(fd, {
		...i,
		ref: t,
		name: o,
		children: e.children || od
	}) : typeof n == "function" ? /* @__PURE__ */ (0, Y.jsx)(dd, {
		match: n,
		...i,
		ref: t,
		name: o
	}) : /* @__PURE__ */ (0, Y.jsx)(ud, {
		match: n,
		...i,
		ref: t,
		name: o
	});
});
ld.displayName = cd;
var ud = g((e, t) => {
	let { match: n, forceMatch: r = !1, name: i, children: a, ...o } = e, s = Ju(cd, o.__scopeForm).getFieldValidity(i);
	return r || s?.[n] ? /* @__PURE__ */ (0, Y.jsx)(fd, {
		ref: t,
		...o,
		name: i,
		children: a ?? sd[n]
	}) : null;
}), dd = g((e, t) => {
	let { match: r, forceMatch: i = !1, name: a, id: o, children: s, ...c } = e, l = Ju(cd, c.__scopeForm), u = B(t, v(null)), d = zt(), f = o ?? d, p = n(() => ({
		id: f,
		match: r
	}), [f, r]), { onFieldCustomMatcherEntryAdd: m, onFieldCustomMatcherEntryRemove: h } = l;
	_(() => (m(a, p), () => h(a, p.id)), [
		p,
		a,
		m,
		h
	]);
	let g = l.getFieldValidity(a), y = l.getFieldCustomErrors(a)[f];
	return i || g && !Td(g) && y ? /* @__PURE__ */ (0, Y.jsx)(fd, {
		id: f,
		ref: u,
		...c,
		name: a,
		children: s ?? od
	}) : null;
}), fd = g((e, t) => {
	let { __scopeForm: n, id: r, name: i, ...a } = e, o = Xu(cd, n), s = zt(), c = r ?? s, { onFieldMessageIdAdd: l, onFieldMessageIdRemove: u } = o;
	return _(() => (l(i, c), () => u(i, c)), [
		i,
		c,
		l,
		u
	]), /* @__PURE__ */ (0, Y.jsx)(K.span, {
		id: c,
		...a,
		ref: t
	});
}), pd = "FormValidityState", md = (e) => {
	let { __scopeForm: t, name: n, children: r } = e, i = Ju(pd, t), a = ed(pd, t), o = n ?? a.name;
	return /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: r(i.getFieldValidity(o)) });
};
md.displayName = pd;
var hd = "FormSubmit", gd = g((e, t) => {
	let { __scopeForm: n, ...r } = e;
	return /* @__PURE__ */ (0, Y.jsx)(K.button, {
		type: "submit",
		...r,
		ref: t
	});
});
gd.displayName = hd;
function _d(e) {
	let t = {};
	for (let n in e) t[n] = e[n];
	return t;
}
function vd(e) {
	return e instanceof HTMLElement;
}
function yd(e) {
	return "validity" in e;
}
function bd(e) {
	return yd(e) && (e.validity.valid === !1 || e.getAttribute("aria-invalid") === "true");
}
function xd(e) {
	let t = e.elements, [n] = Array.from(t).filter(vd).filter(bd);
	return n;
}
function Sd(e, t) {
	return e.match.constructor.name === "AsyncFunction" || wd(e.match, t);
}
function Cd(e) {
	return e.match.constructor.name === "Function";
}
function wd(e, t) {
	return e(...t) instanceof Promise;
}
function Td(e) {
	let t = !1;
	for (let n in e) {
		let r = n;
		if (r !== "valid" && r !== "customError" && e[r]) {
			t = !0;
			break;
		}
	}
	return t;
}
function Ed(e, t) {
	if (e?.valid === !0 && !t) return !0;
}
function Dd(e, t) {
	if (e?.valid === !1 || t) return !0;
}
var Od = Zu, kd = td, Ad = ad, jd = ({ trigger: e, onCopyLink: t, onDelete: n, allowDelete: r = !1, disabled: i = !1, layout: a, followedByMe: o = !1, authoredByMe: s = !1, onFollow: c = () => {}, onUnfollow: l = () => {} }) => /* @__PURE__ */ (0, Y.jsxs)(Bl, { children: [/* @__PURE__ */ (0, Y.jsxs)(il, { children: [/* @__PURE__ */ (0, Y.jsx)(al, {
	disabled: i,
	asChild: !0,
	onClick: (e) => e.stopPropagation(),
	children: e
}), /* @__PURE__ */ (0, Y.jsx)(sl, {
	align: `${a === "modal" ? "start" : "end"}`,
	alignOffset: a === "modal" ? -12 : 0,
	className: "p-2",
	children: /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex w-48 flex-col",
		children: [
			(!r || a === "inbox") && /* @__PURE__ */ (0, Y.jsx)(ol, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsxs)(z, {
					className: "justify-start",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), t();
					},
					children: [/* @__PURE__ */ (0, Y.jsx)(Ga, {}), "Copy link"]
				})
			}),
			!s && /* @__PURE__ */ (0, Y.jsx)(ol, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsxs)(z, {
					className: "justify-start",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), o ? l() : c();
					},
					children: [o ? /* @__PURE__ */ (0, Y.jsx)(no, {}) : /* @__PURE__ */ (0, Y.jsx)(ro, {}), o ? "Unfollow" : "Follow"]
				})
			}),
			r && /* @__PURE__ */ (0, Y.jsx)(Vl, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)(ol, {
					asChild: !0,
					children: /* @__PURE__ */ (0, Y.jsxs)(z, {
						className: "justify-start text-red hover:bg-red/5 hover:text-red",
						variant: "ghost",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, Y.jsx)(eo, {}), "Delete"]
					})
				})
			})
		]
	})
})] }), /* @__PURE__ */ (0, Y.jsxs)(Wl, {
	onClick: (e) => e.stopPropagation(),
	children: [/* @__PURE__ */ (0, Y.jsxs)(Gl, { children: [/* @__PURE__ */ (0, Y.jsx)(ql, { children: "Delete this post?" }), /* @__PURE__ */ (0, Y.jsx)(Jl, { children: a === "inbox" ? "This will remove the post from the Ghost social web, but it will remain on your website." : /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: "If you delete this post, you won't be able to restore it." }) })] }), /* @__PURE__ */ (0, Y.jsxs)(Kl, { children: [/* @__PURE__ */ (0, Y.jsx)(Xl, {
		onClick: (e) => e.stopPropagation(),
		children: "Cancel"
	}), /* @__PURE__ */ (0, Y.jsx)(Yl, {
		className: ne({ variant: "destructive" }),
		onClick: (e) => {
			e.stopPropagation(), n();
		},
		children: "Delete"
	})] })]
})] });
//#endregion
//#region src/components/global/image-lightbox.tsx
s();
function Md(e) {
	let [t, n] = r({
		images: [],
		currentIndex: 0,
		isOpen: !1
	}), i = (e) => {
		let t = Jd(e);
		if (!t) return [];
		if (Array.isArray(t)) return t.map((e, t) => ({
			url: e.url,
			alt: e.name || `Image-${t}`
		}));
		if (t.mediaType?.startsWith("image/") || t.type === "Image") return [{
			url: t.url,
			alt: t.name || "Image"
		}];
		if (e.image) {
			let t;
			if (t = typeof e.image == "string" ? e.image : e.image?.url, t) return [{
				url: t,
				alt: "Image"
			}];
		}
		return [];
	};
	return {
		lightboxState: t,
		openLightbox: (t) => {
			if (!e) return;
			let r = i(e), a = r.findIndex((e) => e.url === t);
			a !== -1 && n({
				images: r,
				currentIndex: a,
				isOpen: !0
			});
		},
		closeLightbox: () => {
			n((e) => ({
				...e,
				isOpen: !1
			}));
		},
		navigateToIndex: (e) => {
			n((t) => ({
				...t,
				currentIndex: e
			}));
		}
	};
}
var Nd = ({ images: e, currentIndex: t, isOpen: n, onClose: r, onNavigate: i }) => {
	let a = t === 0, o = t === e.length - 1, s = c(() => {
		e.length <= 1 || o || i((t + 1) % e.length);
	}, [
		e.length,
		o,
		t,
		i
	]), l = c(() => {
		e.length <= 1 || a || i((t - 1 + e.length) % e.length);
	}, [
		e.length,
		a,
		t,
		i
	]);
	return _(() => {
		let e = (e) => {
			n && (e.key === "ArrowRight" && !o ? s() : e.key === "ArrowLeft" && !a && l());
		};
		return window.addEventListener("keydown", e), () => {
			window.removeEventListener("keydown", e);
		};
	}, [
		n,
		t,
		e.length,
		s,
		l,
		o,
		a
	]), !n || e.length === 0 ? null : /* @__PURE__ */ (0, Y.jsx)(_c, {
		open: n,
		onOpenChange: (e) => {
			e || r();
		},
		children: /* @__PURE__ */ (0, Y.jsxs)(Sc, {
			className: "top-[50%] h-[100vh] max-h-[100vh] w-[100vw] max-w-[100vw] translate-y-[-50%] items-center border-none bg-transparent p-0 shadow-none data-[state=closed]:zoom-out-100 data-[state=closed]:slide-out-to-top-[50%] data-[state=open]:zoom-in-100 data-[state=open]:slide-in-from-top-[50%]",
			onClick: () => r(),
			children: [
				/* @__PURE__ */ (0, Y.jsx)("img", {
					alt: e[t].alt,
					className: "mx-auto max-h-[90vh] max-w-[90vw] object-contain",
					src: e[t].url,
					onClick: (e) => e.stopPropagation()
				}),
				e.length > 1 && /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)(z, {
					className: "absolute top-1/2 left-5 size-11 -translate-y-1/2 rounded-full bg-black/50 p-0 pr-0.5 hover:bg-black/70",
					disabled: a,
					onClick: (e) => {
						e.stopPropagation(), l();
					},
					children: [/* @__PURE__ */ (0, Y.jsx)(La, { className: "size-6!" }), /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "sr-only",
						children: "Previous image"
					})]
				}), /* @__PURE__ */ (0, Y.jsxs)(z, {
					className: "absolute top-1/2 right-5 size-11 -translate-y-1/2 rounded-full bg-black/50 p-0 pl-0.5 hover:bg-black/70",
					disabled: o,
					onClick: (e) => {
						e.stopPropagation(), s();
					},
					children: [/* @__PURE__ */ (0, Y.jsx)(Ra, { className: "size-6!" }), /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "sr-only",
						children: "Next image"
					})]
				})] }),
				/* @__PURE__ */ (0, Y.jsx)(bc, {
					asChild: !0,
					children: /* @__PURE__ */ (0, Y.jsxs)(z, {
						className: "absolute top-5 right-5 size-11 rounded-full bg-black/50 p-0 hover:bg-black/70",
						children: [/* @__PURE__ */ (0, Y.jsx)(Ve, { className: "size-5!" }), /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "sr-only",
							children: "Close"
						})]
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/global/follow-button.tsx
s();
var Pd = () => {}, Fd = ({ className: e, following: t, handle: n, variant: i = "default", onFollow: a = Pd, onUnfollow: o = Pd, "data-testid": s }) => {
	let [c, l] = r(t), u = ge("index", () => {}, () => {
		l(!0);
	}), d = Ee("index", () => {}, () => {
		l(!1);
	}), f = async () => {
		c ? (l(!1), o(), u.mutate(n)) : (l(!0), a(), d.mutate(n));
	};
	_(() => {
		l(t);
	}, [t]);
	let p = c ? "Following" : "Follow";
	return i === "link" ? /* @__PURE__ */ (0, Y.jsx)(z, {
		className: M("p-0 font-medium", c ? "text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white" : "text-purple hover:text-black dark:hover:text-white", e),
		"data-testid": s,
		variant: "link",
		onClick: (e) => {
			e?.preventDefault(), e?.stopPropagation(), f();
		},
		children: p
	}) : /* @__PURE__ */ (0, Y.jsx)(z, {
		className: M("min-w-[90px]", e),
		"data-testid": s,
		title: c ? "Click to unfollow" : "",
		variant: c ? "outline" : "default",
		onClick: (e) => {
			e?.preventDefault(), e?.stopPropagation(), f();
		},
		children: p
	});
};
//#endregion
//#region src/components/global/profile-preview-hover-card.tsx
s();
var Id = (e) => "preferredUsername" in e, Ld = ({ actor: e, children: t, disabled: n = !1, side: i = "bottom", align: a = "start", isCurrentUser: o = !1 }) => {
	let [s, c] = r(!1), l = oe(), u = e?.handle;
	!u && e && Id(e) && (u = Ge(e));
	let d = n || !u && !e, f = be("index", u || "", { enabled: s && !!u }), p = f.isFetching || f.isLoading, m = f.error, h = f.data ? typeof f.data.followerCount == "number" && typeof f.data.followingCount == "number" && f.data.bio !== void 0 : !1;
	if (_(() => {
		!s || !u || !h && !p && !m && f.refetch({ cancelRefetch: !1 });
	}, [
		f,
		p,
		m,
		h,
		s,
		u
	]), d) return /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: t });
	let g = f.data || e, v = g?.handle ?? u ?? "", y = g?.name ?? "", b = g?.avatarUrl ?? (e && Id(e) ? e.icon?.url : null) ?? null, x = !!g?.followsMe, S = typeof g?.followingCount == "number" ? g.followingCount : Number(g?.followingCount) || 0, C = typeof g?.followerCount == "number" ? g.followerCount : Number(g?.followerCount) || 0, w = g?.bio ? We(qe(g.bio, ["a"])) : void 0, T = () => {
		v && l(`/profile/${v}`);
	};
	return /* @__PURE__ */ (0, Y.jsxs)(Nu, {
		onOpenChange: c,
		children: [/* @__PURE__ */ (0, Y.jsx)(Pu, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ (0, Y.jsx)(Fu, {
			align: a,
			className: "w-[320px] cursor-default rounded-2xl border-0 p-5 text-left text-gray-900 shadow-lg outline-hidden dark:bg-surface-elevated-2",
			side: i,
			sideOffset: 12,
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, Y.jsxs)(Fe, {
								className: "size-14 cursor-pointer",
								onClick: T,
								children: [b && /* @__PURE__ */ (0, Y.jsx)(Ne, {
									alt: y,
									className: "rounded-full outline-[0.5px] outline-offset-[-0.5px] outline-black/10",
									src: b,
									onError: (e) => {
										e.target.src = "", e.target.style.display = "none";
									}
								}), /* @__PURE__ */ (0, Y.jsx)(je, {
									className: "bg-gray-200 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200",
									children: /* @__PURE__ */ (0, Y.jsx)(Ue, {
										className: "size-5 text-gray-500 dark:text-gray-400",
										strokeWidth: 1.5
									})
								})]
							}), !o && /* @__PURE__ */ (0, Y.jsx)(Fd, {
								following: !!g?.followedByMe,
								handle: v,
								type: "primary"
							})]
						}), /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex cursor-pointer flex-col items-start",
							onClick: T,
							children: [/* @__PURE__ */ (0, Y.jsx)(ye, {
								className: "w-full truncate",
								children: y
							}), /* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "flex w-full gap-2",
								children: [/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "truncate text-gray-700 dark:text-gray-600",
									children: v
								}), x && !o && /* @__PURE__ */ (0, Y.jsx)(iu, {
									className: "mt-px whitespace-nowrap",
									variant: "secondary",
									children: "Follows you"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, Y.jsx)("div", {
						className: "flex gap-3 dark:text-gray-300",
						children: p ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "h-4 w-32" }) : !m && /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)("span", {
							className: "cursor-pointer hover:underline",
							onClick: () => {
								v && l(`/profile/${v}/following`);
							},
							children: [
								/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "font-bold text-black dark:text-white",
									children: se(S)
								}),
								" ",
								"Following"
							]
						}), /* @__PURE__ */ (0, Y.jsxs)("span", {
							className: "cursor-pointer hover:underline",
							onClick: () => {
								v && l(`/profile/${v}/followers`);
							},
							children: [
								/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "font-bold text-black dark:text-white",
									children: se(C)
								}),
								" ",
								"Followers"
							]
						})] })
					}),
					p ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "h-4 w-48" }) : !m && w ? /* @__PURE__ */ (0, Y.jsx)("div", {
						dangerouslySetInnerHTML: { __html: Ke(w) },
						className: "leading-tight dark:text-gray-300 [&_.invisible]:hidden [&_a]:text-[#00a4eb] [&_a:hover]:underline"
					}) : null
				]
			})
		})]
	});
};
//#endregion
//#region src/hooks/use-keyboard-shortcuts.tsx
s();
var Rd = (e = {}) => {
	let [t, n] = r(!1), i = D();
	return _(() => {
		let t = (t) => {
			if (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement || t.target instanceof HTMLElement && t.target.isContentEditable || t.target instanceof HTMLSelectElement || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return;
			let r = document.querySelector("[role=\"dialog\"][data-state=\"open\"]");
			if (!(r && (e.componentRef?.current)?.closest("[role=\"dialog\"]") !== r)) switch (t.key.toLowerCase()) {
				case "n":
					r || (t.preventDefault(), e.onOpenNewNote ? e.onOpenNewNote() : n(!0));
					break;
				case "r":
					e.isReplyAvailable && e.onOpenReply && (i.pathname.includes("/notes/") || i.pathname.includes("/reader/")) && (t.preventDefault(), e.onOpenReply());
					break;
			}
		};
		return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t);
	}, [e, i.pathname]), {
		isNewNoteModalOpen: t,
		setIsNewNoteModalOpen: n
	};
};
//#endregion
//#region src/components/feed/feed-item-stats.tsx
s();
var zd = ({ actor: e, object: t, likeCount: n, commentCount: i, repostCount: a, layout: o, disabled: s = !1, buttonClassName: c = "", onLikeClick: l, onCommentClick: u, onReplyCountChange: d }) => {
	let [f, p] = r(t.liked), [m, h] = r(t.reposted), [g, y] = r(!1), b = v(null);
	Rd({
		isReplyAvailable: !u && o !== "reply",
		onOpenReply: () => y(!0),
		componentRef: b
	}), _(() => {
		p(t.liked), h(t.reposted);
	}, [t.liked, t.reposted]), _(() => {
		E(a);
	}, [a]);
	let x = Te("index"), S = De("index"), C = Se("index"), w = Ce("index"), [T, E] = r(a), D = async (e) => {
		e.stopPropagation(), f ? S.mutate(t.id) : x.mutate(t.id, { onError() {
			p(!1);
		} }), p(!f), l();
	}, O = (e) => {
		e.stopPropagation(), u ? u() : y(!0);
	}, k = `px-2 gap-1.5 font-normal text-md [&_svg]:size-[18px] transition-color ap-action-button text-gray-900 hover:text-gray-900 hover:bg-black/[3%] dark:hover:bg-gray-950 dark:text-gray-600 ${c}`;
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
		ref: b,
		className: `flex ${o !== "inbox" && "gap-1"}`,
		children: [
			/* @__PURE__ */ (0, Y.jsxs)(z, {
				className: `${k} ${f && "text-pink-500 hover:text-pink-500"}`,
				"data-testid": "like-button",
				disabled: s,
				id: "like",
				title: `${f ? "Undo like" : "Like"}`,
				variant: "ghost",
				onClick: (e) => {
					e?.stopPropagation(), e && D(e);
				},
				children: [/* @__PURE__ */ (0, Y.jsx)(Oe, { className: `${f && "fill-pink-500 text-pink-500"}` }), o !== "inbox" && /* @__PURE__ */ (0, Y.jsx)(nu, {
					className: n === 0 ? "-ml-1.5 w-0 overflow-hidden" : "",
					spinTiming: { duration: 300 },
					value: n
				})]
			}),
			/* @__PURE__ */ (0, Y.jsxs)(z, {
				className: `${k}`,
				"data-testid": "reply-button",
				disabled: s,
				id: "comment",
				title: "Reply",
				variant: "ghost",
				onClick: O,
				children: [/* @__PURE__ */ (0, Y.jsx)(qa, { className: "-mr-px" }), o !== "inbox" && i > 0 && P(i)]
			}),
			/* @__PURE__ */ (0, Y.jsxs)(z, {
				className: `${k} ${m && "text-green-500 hover:text-green-500"}`,
				"data-testid": "repost-button",
				disabled: s,
				id: "repost",
				title: `${m ? "Undo repost" : "Repost"}`,
				variant: "ghost",
				onClick: (e) => {
					e?.stopPropagation(), m ? (w.mutate(t.id), E(T - 1)) : (C.mutate(t.id, { onError() {
						h(!1), E(T - 1);
					} }), E(T + 1)), h(!m);
				},
				children: [/* @__PURE__ */ (0, Y.jsx)(Xa, { className: `${m && "text-green-500"}` }), o !== "inbox" && /* @__PURE__ */ (0, Y.jsx)(nu, {
					className: T === 0 ? "-ml-1.5 w-0 overflow-hidden" : "",
					spinTiming: { duration: 300 },
					value: T
				})]
			})
		]
	}), g && /* @__PURE__ */ (0, Y.jsx)(lf, {
		open: g,
		replyTo: {
			object: t,
			actor: e
		},
		onOpenChange: (e) => {
			y(e);
		},
		onReply: () => {
			d?.(1), y(!1);
		},
		onReplyError: () => {
			d?.(-1);
		}
	})] });
};
//#endregion
//#region src/utils/get-reading-time.ts
function Bd(e) {
	let t = e.replace(/<[^>]*>/g, "").split(/\s+/).filter((e) => e.length > 0).length;
	return `${Math.ceil(t / 275)} min read`;
}
//#endregion
//#region src/utils/handle-profile-click.ts
var Vd = (e, t, n) => {
	n?.stopPropagation(), t(typeof e == "string" ? `/profile/${e}` : `/profile/${Ge(e)}`);
}, Hd = (e) => {
	let t = /* @__PURE__ */ new Date(), n = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()), r = n(t), i = n(/* @__PURE__ */ new Date(t.getTime() - 1440 * 60 * 1e3)), a = n(e);
	return a.getTime() === r.getTime() ? Ud(e) : a.getTime() === i.getTime() ? "Yesterday" : Wd(e);
}, Ud = (e) => {
	let t = Math.floor(((/* @__PURE__ */ new Date()).getTime() - e.getTime()) / 1e3);
	if (t < 1) return "Just now";
	if (t < 60) return `${t}s`;
	let n = Math.floor(t / 60);
	return n < 60 ? `${n}m` : `${Math.floor(n / 60)}h`;
}, Wd = (e) => {
	let t = /* @__PURE__ */ new Date(), n = e.getDate(), r = e.toLocaleString("default", { month: "short" });
	return e.getFullYear() === t.getFullYear() ? `${n} ${r}` : `${n} ${r} ${e.getFullYear()}`;
};
//#endregion
//#region src/utils/render-timestamp.tsx
function Gd(e) {
	return new Date(e).toLocaleDateString("default", {
		year: "numeric",
		month: "short",
		day: "2-digit"
	}) + ", " + new Date(e).toLocaleTimeString("default", {
		hour: "2-digit",
		minute: "2-digit"
	});
}
function Kd(e, t = !0) {
	let n = new Date(e?.published ?? e?.createdAt ?? /* @__PURE__ */ new Date()), r = Gd(n), i = Hd(n);
	return t && !e.url?.includes("/.ghost/activitypub") ? /* @__PURE__ */ (0, Y.jsx)("a", {
		className: "whitespace-nowrap text-gray-700 hover:underline",
		href: e.url,
		rel: "noreferrer",
		target: "_blank",
		title: r,
		onClick: (e) => e.stopPropagation(),
		children: i
	}) : /* @__PURE__ */ (0, Y.jsx)("span", {
		className: "whitespace-nowrap text-gray-700",
		children: i
	});
}
//#endregion
//#region src/hooks/use-sensitive-media-disclosure.ts
s();
function qd({ contentWarning: e, sensitive: t, hasMedia: n, resetKey: i }) {
	let { data: a } = de(), o = a?.showSensitiveMedia ?? !1, [s, c] = r(!1), [l, u] = r(!1), [d, f] = r(!1), [p, m] = r(!0), [h, g] = r(void 0), b = v(null);
	_(() => {
		c(!1), u(!1), f(!1), m(!0), g(void 0);
	}, [i]), y(() => {
		!d || !p || (m(!1), g(void 0));
	}, [d, p]);
	let x = e?.trim() || null, S = x !== null, C = t === !0 && n && !S && !o, w = C && (l || !s);
	return {
		contentWarning: x,
		shouldHideContentWarning: S && !d,
		shouldHideSensitiveMedia: w,
		canHideSensitiveMedia: C && !w,
		isContentWarningRevealed: d,
		showContentWarningOverlay: p,
		contentWarningMinHeight: h,
		contentWarningWrapperRef: b,
		revealSensitiveMedia: (e) => {
			e.stopPropagation(), u(!1), c(!0);
		},
		hideSensitiveMedia: (e) => {
			e.stopPropagation(), u(!0), c(!1);
		},
		revealContentWarning: (e) => {
			e.stopPropagation();
			let t = b.current?.offsetHeight;
			t && g(t), f(!0);
		}
	};
}
//#endregion
//#region src/components/feed/feed-item.tsx
s();
function Jd(e) {
	let t;
	if (e.image && (t = typeof e.image == "string" ? {
		type: "Image",
		url: e.image
	} : {
		type: e.image.type ?? "Image",
		mediaType: e.image.mediaType,
		url: e.image.url
	}), e.type === "Note" && !t && (t = e.attachment), !t) return null;
	if (Array.isArray(t)) {
		if (t.length === 0) return null;
		if (t.length === 1) return t[0];
	}
	return t;
}
function Yd(e, t, n, r) {
	let i = Jd(e);
	if (!i) return null;
	let a = (e) => (n) => {
		n.stopPropagation(), t && t(e);
	}, o = (e) => {
		r && r(e);
	}, s = (e, t = !1) => /* @__PURE__ */ (0, Y.jsx)("div", {
		className: `${e} ${t ? "min-h-[200px]" : ""} flex w-full items-center justify-center bg-gray-100 dark:bg-gray-950/30`,
		children: /* @__PURE__ */ (0, Y.jsx)(Ua, {
			className: "text-gray-400",
			size: 24,
			strokeWidth: 1.5
		})
	});
	if (Array.isArray(i)) {
		let e = i.length, r = "";
		return e === 1 ? r = "grid-cols-1" : e >= 2 && e <= 4 ? r = "grid-cols-2 auto-rows-[150px]" : e > 4 && (r = "grid-cols-3 auto-rows-[150px]"), /* @__PURE__ */ (0, Y.jsx)("div", {
			className: `attachment-gallery mt-3 grid w-full ${r} gap-2`,
			children: i.map((r, i) => {
				let c = `size-full rounded-md outline-1 -outline-offset-1 outline-black/10 ${e === 3 && i === 0 ? "row-span-2" : ""}`;
				return n && n.has(r.url) ? s(c, e === 1) : /* @__PURE__ */ (0, Y.jsx)("img", {
					alt: r.name || `Image-${i}`,
					className: `${c} cursor-pointer object-cover`,
					referrerPolicy: "no-referrer",
					src: r.url,
					onClick: t ? a(r.url) : void 0,
					onError: () => o(r.url)
				}, r.url);
			})
		});
	}
	switch (i.mediaType) {
		case "image/jpeg":
		case "image/png":
		case "image/gif":
		case "image/webp": return n && n.has(i.url) ? s(`${e.type === "Article" ? "w-full rounded-t-md" : "mt-3 max-h-[420px] rounded-md outline-1 -outline-offset-1 outline-black/10"}`, !0) : /* @__PURE__ */ (0, Y.jsx)("img", {
			alt: i.name || "Image",
			className: `cursor-pointer ${e.type === "Article" ? "w-full rounded-t-md" : "mt-3 max-h-[420px] rounded-md outline-1 -outline-offset-1 outline-black/10"}`,
			referrerPolicy: "no-referrer",
			src: i.url,
			onClick: t ? a(i.url) : void 0,
			onError: () => o(i.url)
		});
		case "video/mp4":
		case "video/webm": return /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "relative mt-3 mb-4",
			children: /* @__PURE__ */ (0, Y.jsx)("video", {
				className: "h-[300px] w-full rounded object-cover",
				src: i.url,
				controls: !0
			})
		});
		case "audio/mpeg":
		case "audio/ogg": return /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "relative mt-2 mb-4 w-full",
			children: /* @__PURE__ */ (0, Y.jsx)("audio", {
				className: "w-full",
				src: i.url,
				controls: !0
			})
		});
		default:
			if (e.image || i.type === "Image") {
				let r = e.type === "Article" ? "cursor-pointer aspect-[16/7.55] w-full rounded-t-md object-cover" : "cursor-pointer mt-3 max-h-[420px] rounded-md outline-1 -outline-offset-1 outline-black/10", c;
				return c = e.image ? typeof e.image == "string" ? e.image : e.image?.url : i.url, n && n.has(c) ? s(r, !0) : /* @__PURE__ */ (0, Y.jsx)("img", {
					alt: i.name || "Image",
					className: r,
					referrerPolicy: "no-referrer",
					src: c,
					onClick: t ? a(c) : void 0,
					onError: () => o(c)
				});
			}
			return null;
	}
}
function Xd({ className: e = "", isLayered: t = !1, size: n = "default", showLabel: r = !0, onReveal: i }) {
	let a = n === "compact";
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: M("flex items-center justify-center overflow-hidden bg-foreground/45 text-background backdrop-blur-xl", a ? "p-2" : "[container-type:size] p-[clamp(0.75rem,6cqh,2rem)]", t ? "absolute inset-0 rounded-none" : a ? "relative rounded-md" : "relative mt-3 min-h-[300px] w-full rounded-md", e),
		"data-testid": "sensitive-media-overlay",
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, Y.jsx)("div", { className: "absolute inset-0 bg-foreground/35" }), a ? /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 flex flex-col items-center justify-center gap-0.5 text-center",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(Ha, {
					"aria-hidden": "true",
					className: "size-5",
					strokeWidth: 2.25
				}),
				r && /* @__PURE__ */ (0, Y.jsx)(W, {
					className: "text-sm leading-none text-background",
					weight: "bold",
					children: "Sensitive media"
				}),
				/* @__PURE__ */ (0, Y.jsx)(z, {
					"aria-label": "Show media",
					className: "mt-0.5 h-6 rounded-full bg-background/35 px-3 text-xs font-bold text-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)] hover:bg-background/25 hover:text-background",
					size: "sm",
					type: "button",
					variant: "ghost",
					onClick: i,
					children: "Show"
				})
			]
		}) : /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 grid size-full max-w-[520px] grid-rows-[minmax(0,1fr)_auto_minmax(0.5rem,6cqh)_auto_minmax(0.75rem,8cqh)_auto_minmax(0,1fr)] justify-items-center text-center",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(Ha, {
					"aria-hidden": "true",
					className: "row-start-2 size-[clamp(1.5rem,14cqh,2.25rem)]",
					strokeWidth: 2.25
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "row-start-4 flex flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, Y.jsx)(W, {
						className: "text-background",
						weight: "bold",
						children: "Sensitive media"
					}), /* @__PURE__ */ (0, Y.jsx)(W, {
						className: "leading-tight text-background",
						children: "The following may contain sensitive material"
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(z, {
					"aria-label": "Show media",
					className: "row-start-6 rounded-full bg-background/35 px-8 font-bold text-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)] hover:bg-background/25 hover:text-background",
					size: "default",
					type: "button",
					variant: "ghost",
					onClick: i,
					children: "Show"
				})
			]
		})]
	});
}
function Zd({ label: e = "Hide media", layout: t = "overlay", onHide: n }) {
	return /* @__PURE__ */ (0, Y.jsx)(z, {
		"aria-label": "Hide sensitive media",
		className: M("z-20 rounded-full bg-foreground/80 px-6 font-bold text-background hover:bg-foreground/90 hover:text-background", t === "overlay" && "absolute top-5 right-5"),
		size: "default",
		type: "button",
		variant: "ghost",
		onClick: n,
		children: e
	});
}
function Qd({ className: e = "", isLayered: t = !1, label: n, size: r = "default", onReveal: i }) {
	let a = r === "compact";
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: M("flex w-full items-center justify-center overflow-hidden bg-foreground/45 text-background backdrop-blur-xl", a ? "p-4" : "[container-type:inline-size] p-[clamp(0.75rem,6cqw,2rem)]", t ? "absolute inset-0 rounded-none" : a ? "relative min-h-[73px] w-full rounded-md" : "relative min-h-[300px] w-full rounded-md", e),
		"data-testid": "content-warning-overlay",
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, Y.jsx)("div", { className: "absolute inset-0 bg-foreground/35" }), a ? /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 flex w-full max-w-[520px] flex-col items-center justify-center gap-2 text-center",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(Ha, {
					"aria-hidden": "true",
					className: "size-5",
					strokeWidth: 2.25
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex flex-col items-center gap-0.5",
					children: [/* @__PURE__ */ (0, Y.jsx)(W, {
						className: "text-sm text-background",
						weight: "bold",
						children: "Content warning:"
					}), /* @__PURE__ */ (0, Y.jsx)(W, {
						className: "text-sm leading-tight text-background",
						children: n
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(z, {
					"aria-label": "Show post",
					className: "rounded-full bg-background/35 px-6 text-sm font-bold text-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)] hover:bg-background/25 hover:text-background",
					size: "sm",
					type: "button",
					variant: "ghost",
					onClick: i,
					children: "Show"
				})
			]
		}) : /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 grid size-full max-w-[520px] grid-rows-[minmax(0,1fr)_auto_clamp(1.25rem,3.85cqw,1.8rem)_auto_clamp(1.5rem,5.15cqw,2.4rem)_auto_minmax(0,1fr)] justify-items-center text-center",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(Ha, {
					"aria-hidden": "true",
					className: "row-start-2 size-[clamp(1.5rem,4.85cqw,2.25rem)]",
					strokeWidth: 2.25
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "row-start-4 flex flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, Y.jsx)(W, {
						className: "text-background",
						weight: "bold",
						children: "Content warning:"
					}), /* @__PURE__ */ (0, Y.jsx)(W, {
						className: "leading-tight text-background",
						children: n
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(z, {
					"aria-label": "Show post",
					className: "row-start-6 rounded-full bg-background/35 px-8 font-bold text-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)] hover:bg-background/25 hover:text-background",
					size: "default",
					type: "button",
					variant: "ghost",
					onClick: i,
					children: "Show"
				})
			]
		})]
	});
}
function $d(e, t) {
	let n = Jd(e), r = "ml-8 md:ml-9 shrink-0 rounded-md h-[91px] w-[121px] relative hidden @md/inbox-item:block", i = M("object-cover outline-1 -outline-offset-1 outline-black/[0.05]", r);
	if (t) return /* @__PURE__ */ (0, Y.jsx)(q, { className: `${i} outline-0` });
	if (!n) return null;
	if (Array.isArray(n)) return /* @__PURE__ */ (0, Y.jsx)("img", {
		className: i,
		referrerPolicy: "no-referrer",
		src: n[0].url
	});
	switch (n.mediaType) {
		case "image/jpeg":
		case "image/png":
		case "image/gif": return /* @__PURE__ */ (0, Y.jsx)("img", {
			className: i,
			referrerPolicy: "no-referrer",
			src: n.url
		});
		case "video/mp4":
		case "video/webm": return /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: r,
			children: [
				/* @__PURE__ */ (0, Y.jsx)("video", {
					className: "h-[80px] w-full rounded object-cover",
					src: n.url
				}),
				/* @__PURE__ */ (0, Y.jsx)("div", { className: "absolute inset-0 rounded bg-gray-900 opacity-50" }),
				/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (0, Y.jsx)(Ya, {
						color: "white",
						fill: "white",
						size: 40
					})
				})
			]
		});
		case "audio/mpeg":
		case "audio/ogg": return /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "ml-8 w-[120px]",
			children: /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "relative mt-2 mb-4 w-full",
				children: /* @__PURE__ */ (0, Y.jsx)("audio", {
					className: "w-full",
					src: n.url,
					controls: !0
				})
			})
		});
		default: return e.image ? /* @__PURE__ */ (0, Y.jsx)("img", {
			className: i,
			referrerPolicy: "no-referrer",
			src: typeof e.image == "string" ? e.image : e.image?.url
		}) : null;
	}
}
var ef = () => {}, tf = /* @__PURE__ */ (0, Y.jsx)(Xa, {
	className: "shrink-0 text-gray-700 dark:text-gray-600",
	size: 16,
	strokeWidth: 1.5
}), nf = ({ actor: e, allowDelete: t = !1, object: n, parentId: i = void 0, layout: a, type: o, commentCount: s = 0, repostCount: c = 0, likeCount: l = 0, showHeader: u = !0, last: d, isLoading: f, isPending: p = !1, isCompact: m = !1, isChainContinuation: h = !1, isChainParent: g = !1, onClick: y = ef, onDelete: b = ef, showStats: x = !0 }) => {
	let S = new Date(n?.published ?? /* @__PURE__ */ new Date()).toLocaleDateString("default", {
		year: "numeric",
		month: "short",
		day: "2-digit"
	}) + ", " + new Date(n?.published ?? /* @__PURE__ */ new Date()).toLocaleTimeString("default", {
		hour: "2-digit",
		minute: "2-digit"
	}), [, C] = r(!1), [w, T] = r(/* @__PURE__ */ new Set()), E = v(null), [D, O] = r(!1), k = xe("index"), A = oe(), { contentWarning: N, shouldHideContentWarning: P, shouldHideSensitiveMedia: F, canHideSensitiveMedia: I, isContentWarningRevealed: L, showContentWarningOverlay: ee, contentWarningMinHeight: te, contentWarningWrapperRef: ne, revealSensitiveMedia: re, hideSensitiveMedia: ie, revealContentWarning: ae } = qd({
		contentWarning: n?.contentWarning,
		sensitive: n?.sensitive,
		hasMedia: Jd(n) !== null,
		resetKey: n?.id
	}), R = Ee("index", () => {
		j.success(`Followed ${U?.name}`);
	}, () => {
		j.error("Failed to follow");
	}), B = ge("index", () => {
		j.info(`Unfollowed ${U?.name}`);
	}, () => {
		j.error("Failed to unfollow");
	});
	_(() => {
		let e = E.current;
		e && O(e.scrollHeight > e.clientHeight);
	}, [n?.content]), _(() => {
		let e = E.current;
		if (!e) return;
		let t = (e) => {
			let t = e.target.closest("a[data-profile]");
			if (t) {
				let n = t.getAttribute("data-profile")?.trim();
				/^@([\w.-]+)@([\w-]+\.[\w.-]+[a-zA-Z])$/.test(n || "") && n && (e.preventDefault(), e.stopPropagation(), Vd(n, A));
			}
		};
		return e.addEventListener("click", t), () => {
			e.removeEventListener("click", t);
		};
	}, [A, n?.content]);
	let se = () => {}, V = () => {
		p || y();
	}, ce = () => {
		k.mutate({
			id: n.id,
			parentId: i
		}), b();
	}, H = async () => {
		n?.url && (await navigator.clipboard.writeText(n.url), C(!0), j.success("Link copied"), setTimeout(() => C(!1), 2e3));
	}, le = (e) => {
		T((t) => new Set(t).add(e));
	}, ue = (e) => {
		if (F) {
			let e = Yd(n, void 0, w, le);
			return e ? /* @__PURE__ */ (0, Y.jsxs)("div", {
				className: M("relative mt-3 overflow-hidden rounded-md [&>.attachment-gallery]:mt-0 [&>img]:mt-0 [&>img]:block", Array.isArray(Jd(n)) ? "w-full" : "w-fit max-w-full"),
				children: [e, /* @__PURE__ */ (0, Y.jsx)(Xd, {
					isLayered: !0,
					onReveal: re
				})]
			}) : /* @__PURE__ */ (0, Y.jsx)(Xd, { onReveal: re });
		}
		let t = Yd(n, e, w, le);
		return t ? I ? /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: M("relative mt-3 [&>.attachment-gallery]:mt-0 [&>img]:mt-0 [&>img]:block", Array.isArray(Jd(n)) ? "w-full" : "w-fit max-w-full"),
			children: [t, /* @__PURE__ */ (0, Y.jsx)(Zd, {
				label: "Hide",
				onHide: ie
			})]
		}) : t : null;
	}, de = (e = !1) => N ? /* @__PURE__ */ (0, Y.jsx)(Qd, {
		isLayered: e,
		label: N,
		size: a === "inbox" || a === "reply" ? "compact" : "default",
		onReveal: ae
	}) : null, fe = (e) => {
		let { contentClassName: t = "ap-note-content break-anywhere line-clamp-[10] leading-[1.4285714286] tracking-[-0.006em] text-pretty text-gray-900 dark:text-gray-300 [&_p+p]:mt-3", mediaClickHandler: r = Ce, showName: i = !1 } = e ?? {};
		return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
			i && n.name && /* @__PURE__ */ (0, Y.jsx)(G, {
				className: "break-anywhere mb-1 leading-tight",
				"data-test-activity-heading": !0,
				children: n.name
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				className: t,
				children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { count: 2 }) : /* @__PURE__ */ (0, Y.jsx)("div", {
					dangerouslySetInnerHTML: { __html: Ke(We(n.content || "") ?? "") },
					ref: E,
					onClick: (e) => {
						let t = e.target;
						(t.tagName === "A" || t.closest("a")) && e.stopPropagation();
					}
				})
			}),
			D && /* @__PURE__ */ (0, Y.jsx)("button", {
				className: "mt-1 text-blue-600",
				type: "button",
				children: "Show more"
			}),
			ue(r)
		] });
	}, pe = (e) => N ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		ref: ne,
		className: "relative w-full",
		style: te ? { minHeight: te } : void 0,
		children: [L && fe(e), ee && de(L)]
	}) : fe(e), U = e;
	o === "Announce" && (U = typeof n.attributedTo == "object" ? n.attributedTo : e);
	let me = U ? Ge(U) : null, he = U?.followedByMe || !1, W = o === "Announce" ? typeof n.attributedTo == "object" && n.attributedTo && !Array.isArray(n.attributedTo) && "authored" in n.attributedTo ? n.attributedTo.authored : typeof n.attributedTo == "object" && n.attributedTo && !Array.isArray(n.attributedTo) && typeof e == "object" && e && n.attributedTo.id === e.id : n.authored, _e = o === "Announce" ? n.reposted ?? !1 : n.authored, ve = () => {
		me && R.mutate(me);
	}, ye = () => {
		me && B.mutate(me);
	}, be = /* @__PURE__ */ (0, Y.jsx)(z, {
		className: `relative z-10 size-[34px] rounded-md ${a === "inbox" || a === "modal" ? "text-gray-900 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-600" : "text-gray-500 hover:text-gray-500"} dark:hover:bg-gray-950 [&_svg]:size-5`,
		"data-testid": "menu-button",
		variant: "ghost",
		children: /* @__PURE__ */ (0, Y.jsx)(Ba, {})
	}), { lightboxState: Se, openLightbox: Ce, closeLightbox: we, navigateToIndex: Te } = Md(n);
	return a === "feed" ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [n && /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: `group/article relative -mx-4 ${p ? "pointer-events-none" : "cursor-pointer"} rounded-lg p-6 px-4 pb-[18px]`,
		"data-layout": "feed",
		"data-object-id": n.id,
		onClick: V,
		children: [o === "Announce" && /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "z-10 mb-2 flex items-center gap-1.5 text-gray-700 dark:text-gray-600",
			children: [tf, /* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex min-w-0 items-center gap-1 text-sm",
				children: [/* @__PURE__ */ (0, Y.jsx)(Ld, {
					actor: e,
					align: "center",
					isCurrentUser: _e,
					children: /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "break-anywhere truncate hover:underline",
						onClick: (t) => {
							Vd(e, A, t);
						},
						children: e.name
					})
				}), "reposted"]
			})]
		}), /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "flex flex-col gap-2.5",
			"data-test-activity": !0,
			children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, Y.jsx)(Ld, {
					actor: U,
					isCurrentUser: W,
					children: /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex min-w-0 grow items-center gap-3",
						children: [/* @__PURE__ */ (0, Y.jsx)(He, {
							author: U,
							disabled: p,
							showFollowButton: !W && !he
						}), /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex min-w-0 grow flex-col",
							onClick: (e) => {
								p || Vd(U, A, e);
							},
							children: [/* @__PURE__ */ (0, Y.jsx)("span", {
								className: `break-anywhere min-w-0 truncate font-semibold ${m ? "text-lg" : "text-md"} ${p ? "" : "hover-underline"} dark:text-white`,
								"data-test-activity-heading": !0,
								children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-24" }) : U.name
							}), /* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "flex w-full text-md text-gray-700 dark:text-gray-600",
								children: [/* @__PURE__ */ (0, Y.jsx)("span", {
									className: `truncate ${p ? "" : "hover-underline"}`,
									children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-56" }) : Ge(U)
								}), /* @__PURE__ */ (0, Y.jsx)("div", {
									className: `ml-1 before:mr-1 ${!f && "before:content-[\"·\"]"}`,
									title: `${S}`,
									children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-4" }) : Kd(n, p === !1 && !n.authored)
								})]
							})]
						})]
					})
				}), /* @__PURE__ */ (0, Y.jsx)(jd, {
					allowDelete: t,
					authoredByMe: W,
					disabled: p,
					followedByMe: he,
					layout: "feed",
					trigger: be,
					onCopyLink: H,
					onDelete: ce,
					onFollow: ve,
					onUnfollow: ye
				})]
			}), /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "relative col-start-2 col-end-3 w-full gap-4 pl-[52px]",
				children: /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ (0, Y.jsx)("div", {
						className: "",
						children: n.type === "Article" ? P ? de() : /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "rounded-md border border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-950 dark:hover:bg-gray-950",
							children: [ue(V), /* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "p-5",
								children: [/* @__PURE__ */ (0, Y.jsx)("div", {
									className: "break-anywhere mb-1 line-clamp-2 text-lg leading-tight font-semibold tracking-tight text-pretty",
									"data-test-activity-heading": !0,
									children: n.name
								}), /* @__PURE__ */ (0, Y.jsx)("div", {
									className: "break-anywhere line-clamp-3 leading-[1.4em]",
									children: n.preview?.content
								})]
							})]
						}) : /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "relative",
							children: pe()
						})
					}), /* @__PURE__ */ (0, Y.jsx)("div", {
						className: "space-between relative z-[30] mt-1 ml-[-8px] flex",
						children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "ml-2 w-18" }) : x && /* @__PURE__ */ (0, Y.jsx)(zd, {
							actor: U,
							commentCount: s,
							disabled: p,
							layout: a,
							likeCount: l,
							object: n,
							repostCount: c,
							onLikeClick: se
						})
					})]
				})
			})]
		})]
	}), /* @__PURE__ */ (0, Y.jsx)(Nd, {
		currentIndex: Se.currentIndex,
		images: Se.images,
		isOpen: Se.isOpen,
		onClose: we,
		onNavigate: Te
	})] }) : a === "modal" ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [n && /* @__PURE__ */ (0, Y.jsxs)("div", {
		"data-object-id": n.id,
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "group/article relative",
			"data-layout": "modal",
			onClick: V,
			children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "z-10 -my-1 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-3 pt-4 pb-3",
				"data-test-activity": !0,
				children: [u && /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "relative z-10 pt-[3px]",
					children: /* @__PURE__ */ (0, Y.jsx)(He, {
						author: U,
						showFollowButton: !W && !he
					})
				}), /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "relative z-10 flex w-full min-w-0 cursor-pointer flex-col overflow-visible text-[1.5rem]",
					onClick: (e) => {
						p || Vd(U, A, e);
					},
					children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex w-full",
						children: [/* @__PURE__ */ (0, Y.jsx)("span", {
							className: "break-anywhere min-w-0 truncate font-semibold whitespace-nowrap after:mx-1 after:font-normal after:text-gray-700 after:content-[\"·\"] after:dark:text-gray-600",
							"data-test-activity-heading": !0,
							children: U.name
						}), /* @__PURE__ */ (0, Y.jsx)("div", { children: Kd(n, !n.authored) })]
					}), /* @__PURE__ */ (0, Y.jsx)("div", {
						className: "flex w-full",
						children: /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "min-w-0 truncate text-gray-700 dark:text-gray-600",
							children: Ge(U)
						})
					})]
				})] }), /* @__PURE__ */ (0, Y.jsx)("div", {
					className: "relative z-10 col-start-1 col-end-3 w-full gap-4",
					children: /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex flex-col items-start",
						children: [pe({
							contentClassName: "ap-note-content-large break-anywhere text-[1.6rem] tracking-[-0.011em] text-pretty text-gray-900 dark:text-gray-300 [&_p+p]:mt-3",
							showName: !0
						}), /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "space-between mt-3 ml-[-8px] flex",
							children: x && /* @__PURE__ */ (0, Y.jsx)(zd, {
								actor: U,
								commentCount: s,
								layout: a,
								likeCount: l,
								object: n,
								repostCount: c,
								onLikeClick: se
							})
						})]
					})
				})]
			}), /* @__PURE__ */ (0, Y.jsx)("div", { className: "absolute -inset-x-3 -inset-y-0 z-0 rounded transition-colors max-lg:hidden" })]
		}), /* @__PURE__ */ (0, Y.jsx)("div", { className: "mt-3 h-px bg-gray-200 dark:bg-gray-950" })]
	}), /* @__PURE__ */ (0, Y.jsx)(Nd, {
		currentIndex: Se.currentIndex,
		images: Se.images,
		isOpen: Se.isOpen,
		onClose: we,
		onNavigate: Te
	})] }) : a === "reply" ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [n && /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: `group/article relative ${m ? "pb-6" : h ? "pb-5" : "py-5"} ${p ? "pointer-events-none" : "cursor-pointer"}`,
		"data-layout": "reply",
		"data-object-id": n.id,
		onClick: V,
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "flex flex-col gap-2.5 border-b-gray-200",
			"data-test-activity": !0,
			children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, Y.jsx)(Ld, {
					actor: U,
					isCurrentUser: W,
					children: /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex min-w-0 grow items-center gap-3",
						children: [/* @__PURE__ */ (0, Y.jsx)(He, {
							author: U,
							disabled: p,
							showFollowButton: !W && !he
						}), /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex min-w-0 grow flex-col",
							onClick: (e) => {
								p || Vd(U, A, e);
							},
							children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "flex",
								children: [/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "break-anywhere min-w-0 truncate font-semibold whitespace-nowrap text-black after:mx-1 after:font-normal after:text-gray-700 after:content-[\"·\"] dark:text-white",
									"data-test-activity-heading": !0,
									children: U.name
								}), /* @__PURE__ */ (0, Y.jsx)("div", { children: Kd(n, p === !1 && !n.authored) })]
							}), /* @__PURE__ */ (0, Y.jsx)("div", {
								className: "flex",
								children: /* @__PURE__ */ (0, Y.jsx)("span", {
									className: "truncate text-gray-700",
									children: Ge(U)
								})
							})]
						})]
					})
				}), !m && /* @__PURE__ */ (0, Y.jsx)(jd, {
					allowDelete: t,
					authoredByMe: W,
					disabled: p,
					followedByMe: he,
					layout: "reply",
					trigger: be,
					onCopyLink: H,
					onDelete: ce,
					onFollow: ve,
					onUnfollow: ye
				})]
			}), /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "relative z-10 col-start-2 col-end-3 w-full gap-4 pl-[52px]",
				children: /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex flex-col items-start",
					children: [P ? de() : /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
						n.type === "Article" && ue(V),
						n.name && /* @__PURE__ */ (0, Y.jsx)(G, {
							className: "break-anywhere mt-2.5 leading-tight text-pretty",
							"data-test-activity-heading": !0,
							children: n.name
						}),
						n.preview && n.type === "Article" ? /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "mt-1 line-clamp-3 leading-tight",
							children: n.preview.content
						}) : /* @__PURE__ */ (0, Y.jsx)("div", {
							dangerouslySetInnerHTML: { __html: Ke(We(n.content || "") ?? "") },
							ref: E,
							className: "ap-note-content break-anywhere tracking-[-0.006em] text-pretty text-gray-900 dark:text-gray-300 [&_p+p]:mt-3"
						}),
						n.type === "Note" && ue(Ce),
						n.type === "Article" && /* @__PURE__ */ (0, Y.jsx)(z, {
							className: "mt-3 w-full",
							id: "read-more",
							variant: "secondary",
							children: "Read more"
						})
					] }), !m && /* @__PURE__ */ (0, Y.jsx)("div", {
						className: "space-between mt-2 ml-[-8px] flex",
						children: x && /* @__PURE__ */ (0, Y.jsx)(zd, {
							actor: U,
							commentCount: s,
							disabled: p,
							layout: a,
							likeCount: l,
							object: n,
							repostCount: c,
							onLikeClick: se
						})
					})]
				})
			})]
		}), !d && /* @__PURE__ */ (0, Y.jsx)("div", { className: `absolute left-[19px] ${m ? "top-[51px] bottom-[8px]" : h ? "top-[51px] bottom-[5px]" : g ? "top-[71px] bottom-[5px]" : "top-[71px] bottom-[-7px]"} z-0 w-[2px] rounded-sm bg-gray-200 dark:bg-gray-950` })]
	}), /* @__PURE__ */ (0, Y.jsx)(Nd, {
		currentIndex: Se.currentIndex,
		images: Se.images,
		isOpen: Se.isOpen,
		onClose: we,
		onNavigate: Te
	})] }) : a === "inbox" ? /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: n && /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "group/article @container/inbox-item relative -mx-4 -my-px flex min-h-[112px] min-w-0 cursor-pointer items-center justify-between rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-950/50",
		"data-layout": "inbox",
		"data-object-id": n.id,
		onClick: V,
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "w-full min-w-0",
			children: [/* @__PURE__ */ (0, Y.jsx)("div", {
				className: "z-10 mb-1.5 flex w-full min-w-0 items-center gap-1.5 text-sm group-hover/article:border-transparent",
				children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-24" }) : /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
					/* @__PURE__ */ (0, Y.jsx)(Ld, {
						actor: U,
						isCurrentUser: W,
						children: /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, Y.jsx)(He, {
								author: U,
								size: "2xs"
							}), /* @__PURE__ */ (0, Y.jsx)("span", {
								className: "min-w-0 truncate font-semibold text-gray-900 hover:underline dark:text-gray-600",
								"data-test-activity-heading": !0,
								onClick: (e) => {
									Vd(U, A, e);
								},
								children: U.name
							})]
						})
					}),
					o === "Announce" && /* @__PURE__ */ (0, Y.jsxs)("span", {
						className: "z-10 flex items-center gap-1 text-gray-700 dark:text-gray-600",
						children: [
							tf,
							/* @__PURE__ */ (0, Y.jsx)(Ld, {
								actor: e,
								align: "center",
								isCurrentUser: _e,
								children: /* @__PURE__ */ (0, Y.jsx)("span", {
									className: "line-clamp-1 hover:underline",
									onClick: (t) => {
										Vd(e, A, t);
									},
									children: e.name
								})
							}),
							" ",
							"reposted"
						]
					}),
					/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "shrink-0 whitespace-nowrap text-gray-600 before:mr-1 before:content-[\"·\"]",
						title: `${S}`,
						children: Kd(n, !n.authored)
					})
				] })
			}), /* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex",
				children: [/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "flex min-h-[73px] w-full min-w-0 flex-col items-start justify-start gap-1",
					children: P ? de() : /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
						/* @__PURE__ */ (0, Y.jsx)(G, {
							className: "break-anywhere line-clamp-2 w-full max-w-[600px] leading-tight text-pretty",
							"data-test-activity-heading": !0,
							children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-full max-w-96" }) : n.name ? n.name : /* @__PURE__ */ (0, Y.jsx)("span", { dangerouslySetInnerHTML: { __html: Ke(qe(n.content || "")) } })
						}),
						/* @__PURE__ */ (0, Y.jsx)("div", {
							className: "ap-note-content break-anywhere line-clamp-2 w-full max-w-[600px] text-base leading-normal text-pretty text-gray-900 dark:text-gray-300 [&_p+p]:mt-3",
							children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { count: 2 }) : /* @__PURE__ */ (0, Y.jsx)("div", { dangerouslySetInnerHTML: { __html: Ke(qe(n.preview?.content ?? n.content ?? "")) } })
						}),
						/* @__PURE__ */ (0, Y.jsx)("span", {
							className: "mt-1 shrink-0 text-sm leading-none whitespace-nowrap text-gray-600",
							children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-16" }) : n.content && `${Bd(n.content)}`
						})
					] })
				}), /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "invisible absolute top-8 right-3 z-[49] flex -translate-y-1/2 rounded-lg bg-white p-1 shadow-md group-hover/article:visible dark:bg-black",
					children: [x && /* @__PURE__ */ (0, Y.jsx)(zd, {
						actor: U,
						commentCount: s,
						layout: a,
						likeCount: l,
						object: n,
						repostCount: c,
						onLikeClick: se
					}), /* @__PURE__ */ (0, Y.jsx)(jd, {
						allowDelete: t,
						authoredByMe: W,
						followedByMe: he,
						layout: "inbox",
						trigger: be,
						onCopyLink: H,
						onDelete: ce,
						onFollow: ve,
						onUnfollow: ye
					})]
				})]
			})]
		}), P ? null : F ? /* @__PURE__ */ (0, Y.jsx)(Xd, {
			className: "ml-8 hidden h-[91px] w-[121px] shrink-0 md:ml-9 @md/inbox-item:flex",
			size: "compact",
			onReveal: re
		}) : $d(n, f)]
	}) }) : /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, {});
}, rf = 5 * 1024 * 1024, af = "Image must be less than 5MB in size.", of = async (e) => {
	try {
		let t = await fetch(e, { mode: "cors" });
		if (!t.ok) throw Error(`Failed to fetch image: ${t.status}`);
		let n = await t.blob();
		return new Promise((e, t) => {
			let r = new FileReader();
			r.onload = () => e(r.result), r.onerror = t, r.readAsDataURL(n);
		});
	} catch {
		return e;
	}
}, sf = (e) => new Promise((t) => {
	let n = new Image();
	n.onload = () => {
		URL.revokeObjectURL(n.src), t(n.width === n.height);
	}, n.src = URL.createObjectURL(e);
}), cf = "Image must be square.";
//#endregion
//#region src/components/modals/new-note-modal.tsx
s();
var lf = ({ children: e, replyTo: t, onReply: n, onReplyError: i, onOpenChange: a, ...o }) => {
	let { data: s } = ve("index"), l = _e("index", s), u = le("index", s), { data: d, isLoading: f } = be("index", "me"), [p, m] = r(!1), h = v(null), g = v(null), [y, b] = r(null), [x, S] = r(!1), C = v(null), [w, T] = r(""), [E, D] = r(null), [O, k] = r(""), [A, M] = r(!1), [N, P] = r(!1), [F, I] = r(!1), L = oe();
	_(() => {
		o.open !== void 0 && m(o.open);
	}, [o.open]), _(() => {
		if (o.open === void 0 ? p : o.open) {
			let e = setTimeout(() => {
				I(!0);
			}, 300);
			return () => clearTimeout(e);
		} else I(!1);
	}, [p, o.open]);
	let ee = !w.trim() || !s || N || w.length > 500, te = c(async () => {
		let e = w.trim();
		if (!(!e || !s)) try {
			P(!0), t ? (await u.mutateAsync({
				inReplyTo: t.object.id,
				content: e,
				imageUrl: E || void 0,
				altText: O || void 0
			}), n?.()) : (await l.mutateAsync({
				content: e,
				imageUrl: E || void 0,
				altText: O || void 0
			}), L("/notes")), m(!1), a && a(!1), j.success(t ? "Reply posted" : "Note posted");
		} catch {
			t && i?.();
		} finally {
			P(!1);
		}
	}, [
		w,
		s,
		t,
		u,
		l,
		E,
		O,
		n,
		i,
		m,
		L,
		a
	]), ne = (e) => {
		T(e.target.value);
	};
	_(() => {
		h.current && (h.current.style.height = "auto", h.current.style.height = `${h.current.scrollHeight}px`);
	}, [w]), _(() => {
		if ((o.open === void 0 ? p : o.open) && h.current) {
			let e = setTimeout(() => {
				h.current?.focus();
			}, 100);
			return () => clearTimeout(e);
		}
	}, [p, o.open]), _(() => {
		if (A && g.current) {
			let e = setTimeout(() => {
				g.current?.focus();
			}, 100);
			return () => clearTimeout(e);
		}
	}, [A]), _(() => {
		let e = (e) => {
			(e.metaKey || e.ctrlKey) && e.key === "Enter" && (e.preventDefault(), !ee && !x && te());
		};
		if (o.open === void 0 ? p : o.open) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [
		p,
		o.open,
		ee,
		x,
		te
	]);
	let re = c(async (e) => {
		let t = e.clipboardData?.items;
		if (t) for (let n = 0; n < t.length; n++) {
			let r = t[n];
			if (r.type.indexOf("image") !== -1) {
				e.preventDefault();
				let t = r.getAsFile();
				if (t) {
					if (t.size > 5242880) {
						j.error(af);
						return;
					}
					let e = URL.createObjectURL(t);
					b(e), await ie(t);
				}
				break;
			}
		}
	}, []);
	_(() => {
		if (o.open === void 0 ? p : o.open) return document.addEventListener("paste", re), () => document.removeEventListener("paste", re);
	}, [
		p,
		o.open,
		re
	]);
	let ie = async (e) => {
		try {
			S(!0);
			let t = await we(e);
			D(t);
		} catch (e) {
			b(null);
			let t = "Failed to upload image. Try again.";
			if (e && typeof e == "object" && "statusCode" in e) switch (e.statusCode) {
				case 413:
					t = "Image size exceeds limit.";
					break;
				case 415:
					t = "The file type is not supported.";
					break;
				default:
			}
			j.error(t);
		} finally {
			S(!1);
		}
	}, ae = async (e) => {
		let t = e.target.files;
		if (t && t.length > 0) {
			let n = t[0];
			if (n.size > 5242880) {
				j.error(af), e.target.value = "";
				return;
			}
			let r = URL.createObjectURL(n);
			b(r), await ie(n);
		}
	}, R = (e) => {
		e.stopPropagation(), b(null), D(null), k(""), M(!1), y && URL.revokeObjectURL(y), C.current && (C.current.value = "");
	}, B = (e) => {
		e.stopPropagation(), M(!A);
	}, se = () => {
		h.current?.focus();
	};
	_(() => () => {
		y && URL.revokeObjectURL(y);
	}, [y]);
	let V = "What's new?";
	if (t) {
		let e = t.object.attributedTo || {};
		typeof e == "object" && "preferredUsername" in e && "id" in e && (V = `Reply to ${Ge(e)}...`);
	}
	return /* @__PURE__ */ (0, Y.jsxs)(_c, {
		open: o.open === void 0 ? p : o.open,
		onOpenChange: (e) => {
			e && (T(""), b(null), D(null), k(""), M(!1), y && URL.revokeObjectURL(y), C.current && (C.current.value = "")), m(e), a && a(e);
		},
		...o.open === void 0 ? o : {},
		children: [/* @__PURE__ */ (0, Y.jsx)(vc, {
			asChild: !0,
			children: e
		}), /* @__PURE__ */ (0, Y.jsxs)(Sc, {
			className: "max-h-[80vh] min-h-[240px] gap-0 overflow-y-auto pb-0",
			"data-testid": "new-note-modal",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, Y.jsxs)(Cc, {
					className: "hidden",
					children: [/* @__PURE__ */ (0, Y.jsx)(Tc, { children: t ? "Reply" : "New note" }), /* @__PURE__ */ (0, Y.jsx)(Ec, { children: "Post your thoughts to the Social web" })]
				}),
				t && /* @__PURE__ */ (0, Y.jsx)(nf, {
					actor: t.actor,
					allowDelete: !1,
					commentCount: t.object.replyCount ?? 0,
					isCompact: !0,
					layout: "reply",
					likeCount: t.object.likeCount ?? 0,
					object: t.object,
					repostCount: t.object.repostCount ?? 0,
					type: t.object.type === "Article" ? "Article" : "Note",
					onClick: () => {}
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: `flex ${y ? "" : "min-h-36"} cursor-text items-start gap-3`,
					onClick: se,
					children: [/* @__PURE__ */ (0, Y.jsx)("div", {
						className: "sticky top-0",
						children: /* @__PURE__ */ (0, Y.jsx)(He, { author: s })
					}), /* @__PURE__ */ (0, Y.jsx)(Od, {
						asChild: !0,
						children: /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "-mt-0.5 flex w-full flex-col gap-0.5",
							children: [
								f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-10" }) : /* @__PURE__ */ (0, Y.jsx)("span", {
									className: "break-anywhere min-w-0 truncate font-semibold whitespace-nowrap text-black dark:text-white",
									children: d?.name
								}),
								/* @__PURE__ */ (0, Y.jsx)(kd, {
									name: "content",
									asChild: !0,
									children: /* @__PURE__ */ (0, Y.jsx)(Ad, {
										asChild: !0,
										children: /* @__PURE__ */ (0, Y.jsx)("textarea", {
											ref: h,
											autoFocus: !0,
											className: "ap-textarea break-anywhere w-full resize-none bg-transparent text-[1.5rem] dark:placeholder:text-gray-700",
											"data-testid": "note-textarea",
											placeholder: V,
											rows: 1,
											value: w,
											onChange: ne,
											onPaste: re
										})
									})
								}),
								/* @__PURE__ */ (0, Y.jsx)(kd, {
									name: "image",
									asChild: !0,
									children: /* @__PURE__ */ (0, Y.jsx)(Ad, {
										asChild: !0,
										children: /* @__PURE__ */ (0, Y.jsx)("input", {
											ref: C,
											accept: "image/jpeg,image/png,image/webp,image/gif",
											className: "hidden",
											type: "file",
											onChange: ae
										})
									})
								})
							]
						})
					})]
				}),
				y && /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "group relative mt-6 flex min-h-[200px] w-full items-center justify-center",
					children: [
						/* @__PURE__ */ (0, Y.jsx)("img", {
							alt: "Image attachment preview",
							className: `max-h-[320px] w-full rounded-sm object-cover outline-1 -outline-offset-1 outline-black/10 ${x && "opacity-10"}`,
							src: y
						}),
						x && /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "absolute leading-[0]",
							children: /* @__PURE__ */ (0, Y.jsx)(eu, { size: "md" })
						}),
						/* @__PURE__ */ (0, Y.jsx)(z, {
							className: "absolute top-3 right-3 size-8 bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-black/80",
							onClick: R,
							children: /* @__PURE__ */ (0, Y.jsx)(eo, {})
						}),
						!x && /* @__PURE__ */ (0, Y.jsx)(z, {
							className: `absolute bottom-3 left-3 h-6 px-2 py-0 text-white ${A ? "bg-green-500 hover:bg-green-500" : "bg-black/60 hover:bg-black/80"}`,
							onClick: B,
							children: "Alt"
						})
					]
				}),
				y && !x && A && /* @__PURE__ */ (0, Y.jsx)("div", {
					className: "mt-1",
					children: /* @__PURE__ */ (0, Y.jsx)($l, {
						ref: g,
						className: "w-full border-0 bg-transparent px-0 focus-visible:border-0 focus-visible:bg-transparent focus-visible:shadow-none focus-visible:outline-0 dark:bg-(--color-popover) dark:text-white dark:placeholder:text-gray-800",
						placeholder: "Type alt text for image (optional)",
						type: "text",
						value: O,
						onChange: (e) => k(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, Y.jsxs)(wc, {
					className: `${F ? "sticky" : "static"} bottom-0 flex-row bg-background py-6 dark:bg-surface-elevated-2`,
					children: [/* @__PURE__ */ (0, Y.jsx)(z, {
						className: "mr-auto w-[34px] min-w-0!",
						variant: "outline",
						onClick: () => C.current?.click(),
						children: /* @__PURE__ */ (0, Y.jsx)(Wa, {})
					}), /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
							className: `text-sm ${w.length >= 500 ? "text-red-500" : w.length >= 500 * .9 ? "text-yellow-600" : "text-gray-500"}`,
							children: [
								w.length,
								"/",
								500
							]
						}), /* @__PURE__ */ (0, Y.jsx)(z, {
							className: "min-w-16",
							"data-testid": "post-button",
							disabled: ee || x,
							onClick: te,
							children: N ? /* @__PURE__ */ (0, Y.jsx)(eu, {
								color: "light",
								size: "sm"
							}) : "Post"
						})]
					})]
				})
			]
		})]
	});
};
//#endregion
//#region src/components/layout/sidebar/feedback-box.tsx
s();
var uf = () => {
	let e = oe();
	function t() {
		e("/notes/https%3A%2F%2Factivitypub.ghost.org%2F.ghost%2Factivitypub%2Fnote%2F6d6d7f57-b656-4caa-ba9e-efa1d9a4b3fb");
	}
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "z-20 w-full bg-white dark:bg-background",
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "flex w-full flex-col gap-0.5 border-t border-gray-200 bg-white px-3 pt-6 dark:border-gray-950 dark:bg-background",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, Y.jsx)(Ja, {
						className: "text-purple-500",
						size: 20,
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, Y.jsx)(G, { children: "Beta feedback" })]
				}),
				/* @__PURE__ */ (0, Y.jsx)("span", {
					className: "text-sm text-gray-700 dark:text-gray-600",
					children: "Something not working? Let us know"
				}),
				/* @__PURE__ */ (0, Y.jsx)(z, {
					className: "mt-2 dark:bg-gray-950/70 dark:hover:bg-gray-900",
					variant: "secondary",
					onClick: t,
					children: "Send feedback"
				})
			]
		}), /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "-mb-1 ml-3 flex items-center gap-1.5 pt-4 pb-2 text-xs text-gray-400",
			children: [
				/* @__PURE__ */ (0, Y.jsx)("a", {
					className: "text-xs font-medium text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white",
					href: "https://ghost.org/help/social-web/",
					rel: "noreferrer",
					target: "_blank",
					children: "Help"
				}),
				"⋅",
				/* @__PURE__ */ (0, Y.jsx)("a", {
					className: "text-xs font-medium text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white",
					href: "https://activitypub.ghost.org/archive",
					rel: "noreferrer",
					target: "_blank",
					children: "Updates"
				})
			]
		})]
	});
};
//#endregion
//#region src/components/activities/activity-item.tsx
s();
var df = ({ children: e, url: t = null, onClick: n, "data-testid": r, isSelected: i = !1 }) => {
	let o = a.Children.toArray(e), s = /* @__PURE__ */ (0, Y.jsx)("div", {
		className: `relative flex w-full max-w-[620px] cursor-pointer flex-col before:absolute before:inset-x-[-16px] before:inset-y-[-1px] before:rounded-md before:bg-gray-50 before:transition-opacity hover:z-10 hover:cursor-pointer hover:border-b-transparent hover:before:opacity-100 dark:before:bg-gray-950 ${i ? "z-10 before:opacity-100" : "before:opacity-0"}`,
		"data-testid": r,
		onClick: () => {
			!t && n && n();
		},
		children: /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 flex w-full items-center gap-3 py-3",
			children: [
				o[0],
				o[1],
				o[2]
			]
		})
	});
	return t ? /* @__PURE__ */ (0, Y.jsx)("a", {
		href: t,
		rel: "noreferrer",
		target: "_blank",
		onClick: (e) => {
			n && (e.preventDefault(), n());
		},
		children: s
	}) : s;
};
//#endregion
//#region src/components/layout/sidebar/recommendations.tsx
s();
var ff = () => {
	let e = oe(), { suggestedProfilesQuery: t } = he("index", 3), { data: n, isLoading: r } = t, i = r ? [
		,
		,
		,
	].fill(null) : n || [], { resetStack: a } = V();
	return !r && (!n || n.length === 0) ? null : /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "border-t border-gray-200 px-3 pt-6 dark:border-gray-950 [@media(max-height:740px)]:hidden",
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "mb-3 flex flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, Y.jsx)(Be, {
						className: "text-purple-500",
						size: 20,
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, Y.jsx)(G, { children: "Follow suggestions" })]
				}), /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "text-sm text-gray-700 dark:text-gray-600",
					children: "Accounts you might be interested in"
				})]
			}),
			/* @__PURE__ */ (0, Y.jsx)("ul", {
				className: "grow",
				children: i.map((t, n) => {
					let i = t?.id || `loading-${n}`, a = t?.name || "", o = t?.handle || "", s = t?.avatarUrl || "", c;
					switch (n) {
						case 0:
							c = "[@media(max-height:740px)]:hidden";
							break;
						case 1:
							c = "[@media(max-height:800px)]:hidden";
							break;
						case 2:
							c = "[@media(max-height:860px)]:hidden";
							break;
					}
					return /* @__PURE__ */ (0, Y.jsx)(p, { children: /* @__PURE__ */ (0, Y.jsx)("li", {
						className: c,
						children: /* @__PURE__ */ (0, Y.jsx)(Ld, {
							actor: t,
							align: "center",
							isCurrentUser: !1,
							side: "left",
							children: /* @__PURE__ */ (0, Y.jsx)("div", { children: /* @__PURE__ */ (0, Y.jsxs)(df, {
								onClick: () => {
									!r && t && Vd(t, e);
								},
								children: [r ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "z-10 size-10" }) : /* @__PURE__ */ (0, Y.jsx)(He, {
									author: {
										icon: { url: s },
										name: a,
										handle: o
									},
									showFollowButton: !0
								}), /* @__PURE__ */ (0, Y.jsxs)("div", {
									className: "flex min-w-0  flex-col",
									children: [/* @__PURE__ */ (0, Y.jsx)("span", {
										className: "block max-w-[190px] truncate font-semibold text-black dark:text-white",
										children: r ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-24" }) : a
									}), /* @__PURE__ */ (0, Y.jsx)("span", {
										className: "block max-w-[190px] truncate text-sm text-gray-700 dark:text-gray-600",
										children: r ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-40" }) : o
									})]
								})]
							}) })
						})
					}, i) }, i);
				})
			}),
			/* @__PURE__ */ (0, Y.jsx)(z, {
				className: "p-0 font-medium text-purple hover:text-black dark:hover:text-white",
				variant: "link",
				onClick: () => {
					a(), e("/explore");
				},
				children: "Find more →"
			})
		]
	});
};
//#endregion
//#region src/components/global/suggested-profiles.tsx
s();
var pf = ({ profile: e, update: t, isLoading: n, onOpenChange: r }) => {
	let i = () => {
		t(e.id, { followedByMe: !0 });
	}, a = () => {
		t(e.id, { followedByMe: !1 });
	}, o = oe();
	return /* @__PURE__ */ (0, Y.jsx)(Ld, {
		actor: e,
		align: "center",
		isCurrentUser: !1,
		side: "left",
		children: /* @__PURE__ */ (0, Y.jsx)("div", { children: /* @__PURE__ */ (0, Y.jsxs)(df, {
			onClick: () => {
				r?.(!1), o(`/profile/${e.handle}`);
			},
			children: [
				/* @__PURE__ */ (0, Y.jsx)(He, {
					author: {
						icon: { url: e.avatarUrl },
						name: e.name,
						handle: e.handle
					},
					onClick: () => r?.(!1)
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "break-anywhere flex grow flex-col",
					children: [/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "line-clamp-1 font-semibold text-black dark:text-white",
						children: n ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-full max-w-64" }) : e.name
					}), /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "line-clamp-1 text-sm text-gray-700 dark:text-gray-600",
						children: n ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-24" }) : e.handle
					})]
				}),
				n ? /* @__PURE__ */ (0, Y.jsx)("div", {
					className: "inline-flex items-center",
					children: /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-12" })
				}) : /* @__PURE__ */ (0, Y.jsx)(Fd, {
					className: "ml-auto",
					following: e.followedByMe,
					handle: e.handle,
					type: "secondary",
					onFollow: i,
					onUnfollow: a
				})
			]
		}, e.id) })
	});
}, mf = ({ onOpenChange: e }) => {
	let { suggestedProfilesQuery: t, updateSuggestedProfile: n } = he("index", 5), { data: r = [], isLoading: i } = t;
	return !i && (!r || r.length === 0) ? null : /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "mb-[-15px] flex flex-col gap-3 pt-2",
		children: /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "flex flex-col",
			children: (i ? [
				,
				,
				,
				,
				,
			].fill(null) : r || []).map((t, r) => /* @__PURE__ */ (0, Y.jsx)(a.Fragment, { children: /* @__PURE__ */ (0, Y.jsx)(pf, {
				isLoading: i,
				profile: t || {
					id: "",
					name: "",
					handle: "",
					avatarUrl: "",
					bio: "",
					followerCount: 0,
					followingCount: 0,
					followedByMe: !1
				},
				update: n,
				onOpenChange: e
			}) }, t?.id || `loading-${r}`))
		})
	});
};
//#endregion
//#region ../../node_modules/.pnpm/use-debounce@10.1.1_react@18.3.1/node_modules/use-debounce/dist/index.module.js
s();
function hf(e, t, r, i) {
	var a = this, o = v(null), s = v(0), c = v(0), l = v(null), u = v([]), d = v(), f = v(), p = v(e), m = v(!0), h = v(), g = v();
	p.current = e;
	var y = typeof window < "u", b = !t && t !== 0 && y;
	if (typeof e != "function") throw TypeError("Expected a function");
	t = +t || 0;
	var x = !!(r ||= {}).leading, S = !("trailing" in r) || !!r.trailing, C = !!r.flushOnExit && S, w = "maxWait" in r, T = "debounceOnServer" in r && !!r.debounceOnServer, E = w ? Math.max(+r.maxWait || 0, t) : null, D = n(function() {
		var e = function(e) {
			var t = u.current, n = d.current;
			return u.current = d.current = null, s.current = e, c.current = c.current || e, f.current = p.current.apply(n, t);
		}, n = function(e, t) {
			b && cancelAnimationFrame(l.current), l.current = b ? requestAnimationFrame(e) : setTimeout(e, t);
		}, r = function(e) {
			if (!m.current) return !1;
			var n = e - o.current;
			return !o.current || n >= t || n < 0 || w && e - s.current >= E;
		}, _ = function(t) {
			return l.current = null, S && u.current ? e(t) : (u.current = d.current = null, f.current);
		}, v = function e() {
			var i = Date.now();
			if (x && c.current === s.current && D(), r(i)) return _(i);
			if (m.current) {
				var a = t - (i - o.current);
				n(e, w ? Math.min(a, E - (i - s.current)) : a);
			}
		}, D = function() {
			i && i({});
		}, O = function() {
			if (y || T) {
				var i, c = Date.now(), p = r(c);
				if (u.current = [].slice.call(arguments), d.current = a, o.current = c, C && !h.current && (h.current = function() {
					globalThis.document?.visibilityState === "hidden" && g.current.flush();
				}, (i = globalThis.document) == null || i.addEventListener == null || i.addEventListener("visibilitychange", h.current)), p) {
					if (!l.current && m.current) return s.current = o.current, n(v, t), x ? e(o.current) : f.current;
					if (w) return n(v, t), e(o.current);
				}
				return l.current || n(v, t), f.current;
			}
		};
		return O.cancel = function() {
			var e = l.current;
			e && (b ? cancelAnimationFrame(l.current) : clearTimeout(l.current)), s.current = 0, u.current = o.current = d.current = l.current = null, e && i && i({});
		}, O.isPending = function() {
			return !!l.current;
		}, O.flush = function() {
			return l.current ? _(Date.now()) : f.current;
		}, O;
	}, [
		x,
		w,
		t,
		E,
		S,
		C,
		b,
		y,
		T,
		i
	]);
	return g.current = D, _(function() {
		return m.current = !0, function() {
			var e;
			C && g.current.flush(), h.current &&= ((e = globalThis.document) == null || e.removeEventListener == null || e.removeEventListener("visibilitychange", h.current), null), m.current = !1;
		};
	}, [C]), D;
}
function gf(e, t) {
	return e === t;
}
function _f(e, t, n) {
	var i = n && n.equalityFn || gf, a = v(e), o = r({})[1], s = hf(c(function(e) {
		a.current = e, o({});
	}, [o]), t, n, o), l = v(e);
	return i(l.current, e) || (s(e), l.current = e), [a.current, s];
}
//#endregion
//#region src/components/modals/search.tsx
s();
var vf = 80, yf = ({ onOpenChange: e, query: t, setQuery: i }) => {
	let a = v(null), o = v([]), s = v(0), c = oe(), [l] = _f(t, 300), u = t.length >= 2, { searchQuery: d, updateAccountSearchResult: f } = me("index", u ? l : ""), { data: p, isFetching: m, isFetched: h } = d, { suggestedProfilesQuery: g } = he("index", 5), { data: y, isLoading: b } = g, x = b || y && y.length > 0, { topicsQuery: S } = fe(), { data: C } = S, { data: w } = be("index", "me"), [T, E] = r([]), [D, O] = r(null), [k, A] = r(0), j = n(() => {
		let e = C?.topics || [];
		if (!u || e.length === 0) return [];
		let n = t.toLowerCase();
		return e.filter((e) => e.slug === "following" ? !1 : e.name.toLowerCase().startsWith(n) || e.slug.toLowerCase().startsWith(n));
	}, [
		t,
		u,
		C?.topics
	]), M = n(() => [...j.map((e) => ({
		type: "topic",
		data: e
	})), ...T.map((e) => ({
		type: "account",
		data: e
	}))], [j, T]);
	_(() => {
		if (!u) {
			E([]), O(null);
			return;
		}
		h && (p?.accounts && p.accounts.length > 0 ? (E(p.accounts), O("results"), A(0)) : (E([]), O("none"), A(0)));
	}, [
		p?.accounts,
		h,
		u
	]);
	let N = m && u, P = t.length < 2 || !D && u && j.length === 0, F = !P && D === "none" && j.length === 0, I = !P && (T.length > 0 || j.length > 0);
	return _(() => {
		a.current?.focus();
	}, []), _(() => {
		let e = o.current[k];
		if (!e) return;
		let t = e.closest("[data-radix-scroll-area-viewport]") || e.closest(".overflow-y-auto");
		if (!t) {
			e.scrollIntoView({ block: "nearest" });
			return;
		}
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
		r.top < n.top + vf ? t.scrollTo({
			top: t.scrollTop - (n.top + vf - r.top),
			behavior: "smooth"
		}) : r.bottom > n.bottom - vf && t.scrollTo({
			top: t.scrollTop + (r.bottom - n.bottom + vf),
			behavior: "smooth"
		});
	}, [k]), /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "sticky -top-6 z-30 -mt-6 flex h-[72px] shrink-0 items-center gap-2 bg-white pt-3 pb-2 before:pointer-events-none before:absolute before:-inset-x-6 before:bottom-0 before:h-0 before:border-b before:border-b-gray-200 before:content-[\"\"] dark:bg-surface-elevated-2 dark:before:border-b-gray-950",
		children: [
			/* @__PURE__ */ (0, Y.jsx)(ze, {
				className: "text-gray-600",
				size: 18,
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ (0, Y.jsx)($l, {
				ref: a,
				autoComplete: "off",
				className: "flex h-10 w-full items-center rounded-lg border-0 bg-transparent px-0 py-1.5 text-lg !shadow-none !outline-none focus-visible:!border-0 focus-visible:bg-transparent focus-visible:!shadow-none focus-visible:!ring-0 focus-visible:!outline-0 dark:bg-surface-elevated-2 dark:text-white dark:placeholder:text-gray-800",
				placeholder: "Search by name, handle, or URL...",
				title: "Search",
				type: "text",
				value: t,
				onChange: (e) => i(e.target.value),
				onKeyDown: (t) => {
					if (!(!I || M.length === 0)) {
						if (t.key === "ArrowDown" || t.key === "ArrowUp") {
							t.preventDefault();
							let e = Date.now();
							if (e - s.current < 50) return;
							s.current = e, t.key === "ArrowDown" ? A((e) => (e + 1) % M.length) : A((e) => (e - 1 + M.length) % M.length);
						} else if (t.key === "Enter") {
							let n = M[k];
							if (!n) return;
							t.preventDefault(), e?.(!1), n.type === "topic" ? c(`/explore/${n.data.slug}`) : c(`/profile/${n.data.handle}`);
						}
					}
				}
			}),
			N && /* @__PURE__ */ (0, Y.jsx)(eu, {
				className: "absolute! right-0 mr-0.5 shrink-0",
				size: "sm"
			})
		]
	}), /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "h-full",
		children: [
			F && /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "flex h-full items-center justify-center pb-14",
				children: /* @__PURE__ */ (0, Y.jsxs)(Iu, { children: [/* @__PURE__ */ (0, Y.jsx)(Lu, { children: /* @__PURE__ */ (0, Y.jsx)(Ue, {}) }), "No users matching this handle or account URL"] })
			}),
			I && /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "mt-[-14px] pb-2",
				children: M.map((t, n) => {
					let r = n === k;
					if (t.type === "topic") return /* @__PURE__ */ (0, Y.jsx)("div", {
						ref: (e) => o.current[n] = e,
						children: /* @__PURE__ */ (0, Y.jsxs)(df, {
							isSelected: r,
							onClick: () => {
								e?.(!1), c(`/explore/${t.data.slug}`);
							},
							children: [/* @__PURE__ */ (0, Y.jsx)("div", {
								className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900",
								children: /* @__PURE__ */ (0, Y.jsx)(Be, {
									className: "text-gray-700 dark:text-gray-500",
									size: 18,
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "font-semibold text-black dark:text-white",
									children: t.data.name
								}), /* @__PURE__ */ (0, Y.jsx)("span", {
									className: "text-sm text-gray-700 dark:text-gray-600",
									children: "Topic"
								})]
							})]
						})
					}, t.data.slug);
					let i = t.data, a = i.handle === w?.handle;
					return /* @__PURE__ */ (0, Y.jsx)(Ld, {
						actor: i,
						align: "center",
						isCurrentUser: a,
						side: "left",
						children: /* @__PURE__ */ (0, Y.jsx)("div", {
							ref: (e) => o.current[n] = e,
							children: /* @__PURE__ */ (0, Y.jsxs)(df, {
								isSelected: r,
								onClick: () => {
									e?.(!1), c(`/profile/${i.handle}`);
								},
								children: [
									/* @__PURE__ */ (0, Y.jsx)(He, { author: {
										icon: { url: i.avatarUrl },
										name: i.name,
										handle: i.handle
									} }),
									/* @__PURE__ */ (0, Y.jsxs)("div", {
										className: "break-anywhere flex flex-col",
										children: [/* @__PURE__ */ (0, Y.jsx)("span", {
											className: "line-clamp-1 font-semibold text-black dark:text-white",
											children: i.name
										}), /* @__PURE__ */ (0, Y.jsx)("span", {
											className: "line-clamp-1 text-sm text-gray-700 dark:text-gray-600",
											children: i.handle
										})]
									}),
									i.blockedByMe || i.domainBlockedByMe ? /* @__PURE__ */ (0, Y.jsx)(z, {
										className: "pointer-events-none ml-auto min-w-[90px]",
										variant: "destructive",
										children: "Blocked"
									}) : a ? null : /* @__PURE__ */ (0, Y.jsx)(Fd, {
										className: "ml-auto",
										following: i.followedByMe,
										handle: i.handle,
										type: "secondary",
										onFollow: () => f(i.id, { followedByMe: !0 }),
										onUnfollow: () => f(i.id, { followedByMe: !1 })
									})
								]
							})
						})
					}, i.id);
				})
			}),
			P && x && /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(G, { children: "More people to follow" }), /* @__PURE__ */ (0, Y.jsx)(mf, { onOpenChange: e })] })
		]
	})] });
};
//#endregion
//#region src/components/layout/header/search-input.tsx
s();
var bf = () => /* @__PURE__ */ (0, Y.jsxs)("div", {
	className: "inline-flex h-9 w-full items-center justify-start gap-2 rounded-full bg-gray-100 px-3 font-normal text-gray-600 hover:bg-gray-200 hover:text-gray-600 dark:bg-gray-950/70 dark:text-gray-700 dark:hover:bg-gray-950 [&_svg]:size-[18px]",
	children: [/* @__PURE__ */ (0, Y.jsx)(ze, {
		size: 18,
		strokeWidth: 1.5
	}), " Search the social web"]
});
//#endregion
//#region src/components/layout/sidebar/sidebar-menu-link.tsx
s();
var xf = g(({ to: e, children: t, count: n, ...r }, i) => {
	let a = D(), { resetStack: o } = V(), s = ae(), c = e && e.startsWith("/") ? `${s}${e}` : e, l = H("h-8 justify-start font-medium text-gray-800 dark:text-gray-500 dark:hover:bg-gray-950/70 [&_svg]:size-[18px]", c && (a.pathname === c || a.pathname.startsWith(`${c}/`)) && "bg-gray-100 font-semibold text-black dark:bg-gray-950/70 dark:text-white"), u = n && n > 0 ? /* @__PURE__ */ (0, Y.jsx)("span", {
		className: H("ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-purple-500 px-1.5 py-1 text-xs font-semibold text-white"),
		children: P(n)
	}) : null;
	return c ? /* @__PURE__ */ (0, Y.jsx)(z, {
		className: l,
		variant: "ghost",
		asChild: !0,
		children: /* @__PURE__ */ (0, Y.jsxs)(O, {
			to: c,
			onClick: () => {
				o(), te(c);
			},
			children: [t, u]
		})
	}) : /* @__PURE__ */ (0, Y.jsxs)(z, {
		ref: i,
		className: l,
		variant: "ghost",
		onClick: r.onClick,
		...r,
		children: [t, u]
	});
});
//#endregion
//#region src/components/layout/sidebar/sidebar.tsx
xf.displayName = "SidebarMenuLink", s();
var Sf = ({ isMobileSidebarOpen: e }) => {
	let { allFlags: t, flags: n } = tt(), [i, a] = r(!1), [o, s] = r(""), { data: l } = A(), u = D(), d = ae(), { data: f } = ue(l?.slug || ""), p = U(l?.slug || ""), { topicsQuery: m } = fe(), { data: h, isLoading: g } = m, v = !g && h && h.topics.length === 0;
	_(() => {
		u.pathname === `${d}/notifications` && f && f > 0 && p.mutate();
	}, [
		u.pathname,
		d,
		f,
		p
	]);
	let y = c(() => {
		f && f > 0 && p.mutate();
	}, [f, p]);
	return /* @__PURE__ */ (0, Y.jsx)("div", {
		className: `sticky top-0 flex min-h-screen w-[320px] flex-col border-l border-gray-200 pr-[var(--network-gutter,1.5rem)] transition-transform duration-300 ease-in-out max-lg:fixed max-lg:inset-y-0 max-lg:right-0 max-lg:z-50 max-lg:border-0 max-lg:bg-white max-lg:shadow-xl max-md:bottom-[72px] max-md:min-h-[auto] max-md:overflow-y-scroll dark:border-gray-950 max-lg:dark:bg-black ${e ? "max-lg:translate-x-0" : "max-lg:translate-x-full"}`,
		children: /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "flex grow flex-col justify-between",
			children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "isolate flex w-full flex-col items-start gap-6 pt-5 pl-6",
				children: [
					/* @__PURE__ */ (0, Y.jsx)("div", {
						className: "flex w-full items-center",
						children: /* @__PURE__ */ (0, Y.jsxs)(_c, {
							open: i,
							onOpenChange: a,
							children: [/* @__PURE__ */ (0, Y.jsx)(vc, {
								className: "mt-0.5 w-full",
								children: /* @__PURE__ */ (0, Y.jsx)(bf, {})
							}), /* @__PURE__ */ (0, Y.jsx)(Sc, {
								className: "flex h-full max-h-[452px] flex-col overflow-y-auto pb-0",
								children: /* @__PURE__ */ (0, Y.jsx)(yf, {
									query: o,
									setQuery: s,
									onOpenChange: a
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex w-full flex-col gap-px",
						children: [
							/* @__PURE__ */ (0, Y.jsxs)(xf, {
								to: "/reader",
								children: [/* @__PURE__ */ (0, Y.jsx)(Ia, {
									size: 18,
									strokeWidth: 1.5
								}), "Reader"]
							}),
							/* @__PURE__ */ (0, Y.jsxs)(xf, {
								to: "/notes",
								children: [/* @__PURE__ */ (0, Y.jsx)(qa, {
									size: 18,
									strokeWidth: 1.5
								}), "Notes"]
							}),
							/* @__PURE__ */ (0, Y.jsxs)(xf, {
								count: u.pathname === `${d}/notifications` ? void 0 : f,
								to: "/notifications",
								onClick: y,
								children: [/* @__PURE__ */ (0, Y.jsx)(Le, {
									size: 18,
									strokeWidth: 1.5
								}), "Notifications"]
							}),
							v ? /* @__PURE__ */ (0, Y.jsx)(z, {
								className: "inline-flex w-full items-center gap-2 rounded-sm px-3 py-2.5 text-left font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-950/70",
								variant: "ghost",
								asChild: !0,
								children: /* @__PURE__ */ (0, Y.jsxs)("a", {
									href: "https://explore.ghost.org/social-web",
									rel: "noopener noreferrer",
									target: "_blank",
									children: [
										/* @__PURE__ */ (0, Y.jsx)(Be, {
											size: 18,
											strokeWidth: 1.5
										}),
										"Explore",
										/* @__PURE__ */ (0, Y.jsx)(Va, {
											className: "ml-auto",
											size: 14,
											strokeWidth: 1.5
										})
									]
								})
							}) : /* @__PURE__ */ (0, Y.jsxs)(xf, {
								to: "/explore",
								children: [/* @__PURE__ */ (0, Y.jsx)(Be, {
									size: 18,
									strokeWidth: 1.5
								}), "Explore"]
							}),
							/* @__PURE__ */ (0, Y.jsxs)(xf, {
								to: "/profile",
								children: [/* @__PURE__ */ (0, Y.jsx)(ke, {
									size: 18,
									strokeWidth: 1.5
								}), "Profile"]
							}),
							/* @__PURE__ */ (0, Y.jsxs)(xf, {
								to: "/preferences",
								children: [/* @__PURE__ */ (0, Y.jsx)(Qa, {
									size: 18,
									strokeWidth: 1.5
								}), "Preferences"]
							})
						]
					}),
					/* @__PURE__ */ (0, Y.jsx)(lf, { children: /* @__PURE__ */ (0, Y.jsxs)(z, {
						className: "h-9 rounded-full bg-purple-500 px-3 text-white hover:bg-purple-600 dark:hover:bg-purple-600",
						children: [/* @__PURE__ */ (0, Y.jsx)(Re, {}), "New note"]
					}) }),
					/* @__PURE__ */ (0, Y.jsx)(ff, {}),
					t.map((e) => n[e] ? /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex items-center justify-between gap-1 pl-3 opacity-50",
						children: [/* @__PURE__ */ (0, Y.jsx)("span", {
							className: "font-mono text-xs",
							children: e
						}), /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "inline-flex items-center rounded bg-green-100 px-1 py-0.5 text-xs font-medium text-green-800",
							children: "ON"
						})]
					}, e) : /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, {}))
				]
			}), /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "sticky bottom-0 flex items-center gap-2 bg-white pb-4 pl-4 dark:bg-background",
				children: /* @__PURE__ */ (0, Y.jsx)(uf, {})
			})]
		})
	});
};
//#endregion
//#region src/components/layout/host-context.tsx
Sf.displayName = "Sidebar", s();
var Cf = o(void 0), wf = Cf.Provider, Tf = () => i(Cf);
//#endregion
//#region src/components/layout/layout.tsx
s();
var Ef = ({ children: e, className: t, style: n, ...i }) => {
	let a = Tf(), { isOnboarded: o } = Je(), s = ae(), { data: c, isLoading: l } = A(), u = v(null), [d, f] = r(!1), p = Bu(), { topicsQuery: m } = fe(), { data: h } = m, g = h && h.topics.length > 0, { isNewNoteModalOpen: _, setIsNewNoteModalOpen: y } = Rd(), b = () => {
		f(!d);
	}, x = () => {
		f(!1);
	};
	return l || !c ? null : o ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		ref: u,
		className: `h-screen w-full ${o && "overflow-y-auto"}`,
		"data-scrollable-container": !0,
		children: [
			/* @__PURE__ */ (0, Y.jsx)(ie, { containerRef: u }),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				className: H("relative mx-auto flex max-w-page flex-col", t, a?.contentClassName),
				style: {
					...n,
					"--network-gutter": a?.contentGutter
				},
				...i,
				children: o ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "block grid-cols-[auto_320px] items-start lg:grid",
					children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "z-0 min-w-0",
						children: [/* @__PURE__ */ (0, Y.jsx)(Uu, {
							showBorder: !(p === "reader" && g) && p !== "explore",
							onToggleMobileSidebar: b
						}), /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "px-[var(--network-gutter,min(4vw,24px))]",
							children: e
						})]
					}), /* @__PURE__ */ (0, Y.jsx)(Sf, {
						isMobileSidebarOpen: d,
						onCloseMobileSidebar: x
					})]
				}), d && /* @__PURE__ */ (0, Y.jsx)("div", {
					className: "fixed inset-0 z-40 lg:hidden",
					onClick: x
				})] }) : /* @__PURE__ */ (0, Y.jsx)(Ye, {})
			}),
			/* @__PURE__ */ (0, Y.jsx)(lf, {
				open: _,
				onOpenChange: y
			})
		]
	}) : /* @__PURE__ */ (0, Y.jsx)(L, {
		to: `${s}/welcome`,
		replace: !0
	});
};
//#endregion
//#region src/components/global/empty-view-indicator.tsx
s();
var Df = ({ children: e }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: "flex max-h-12 max-w-12 grow-0 items-center justify-center rounded-full bg-gray-100 p-3 text-gray-700 dark:bg-gray-950/70 [&_svg]:size-8 [&_svg]:stroke-1",
	children: e
}), Of = ({ children: e, className: t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: `mx-auto mt-[24vh] flex max-w-[500px] flex-col items-center gap-5 text-center text-gray-700 ${t || ""}`,
	children: e
}), kf = ({ statusCode: e, errorCode: t }) => {
	let n = S(), r = ee();
	return n ? /* @__PURE__ */ (0, Y.jsx)(Ef, { children: /* @__PURE__ */ (0, Y.jsxs)(Of, { children: [
		/* @__PURE__ */ (0, Y.jsx)(Df, { children: /* @__PURE__ */ (0, Y.jsx)(Za, {}) }),
		/* @__PURE__ */ (0, Y.jsx)(G, {
			className: "-mb-4",
			children: "Oops, page not found!"
		}),
		/* @__PURE__ */ (0, Y.jsx)("div", { children: "We couldn't find the page you were looking for. It may have been moved, deleted, or never existed in the first place." })
	] }) }) : e === 429 ? /* @__PURE__ */ (0, Y.jsxs)(Of, {
		className: "mt-[50vh] -translate-y-1/2",
		children: [
			/* @__PURE__ */ (0, Y.jsx)(Df, { children: /* @__PURE__ */ (0, Y.jsx)(to, {}) }),
			/* @__PURE__ */ (0, Y.jsx)(G, {
				className: "-mb-4",
				children: "Rate limit exceeded"
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", { children: "You've made too many requests. Please try again in a moment." }),
			/* @__PURE__ */ (0, Y.jsx)(z, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)("a", {
					href: "https://ghost.org/help/social-web/",
					rel: "noopener noreferrer",
					target: "_blank",
					children: "Learn more →"
				})
			})
		]
	}) : e === 403 ? t === "ROLE_MISSING" || t === "SITE_MISSING" ? /* @__PURE__ */ (0, Y.jsxs)(Of, {
		className: "mt-[50vh] -translate-y-1/2",
		children: [
			/* @__PURE__ */ (0, Y.jsx)(Df, { children: /* @__PURE__ */ (0, Y.jsx)($a, {}) }),
			/* @__PURE__ */ (0, Y.jsx)(G, {
				className: "-mb-4",
				children: "Site not configured correctly"
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", { children: "This feature can't be used because the site isn't set up correctly. If you manage this site, check your settings or server logs, or contact support." }),
			/* @__PURE__ */ (0, Y.jsx)(z, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)("a", {
					href: "https://ghost.org/help/social-web/",
					rel: "noopener noreferrer",
					target: "_blank",
					children: "Learn more →"
				})
			})
		]
	}) : /* @__PURE__ */ (0, Y.jsxs)(Of, {
		className: "mt-[50vh] -translate-y-1/2",
		children: [
			/* @__PURE__ */ (0, Y.jsx)(Df, { children: /* @__PURE__ */ (0, Y.jsx)(Fa, {}) }),
			/* @__PURE__ */ (0, Y.jsx)(G, {
				className: "-mb-4",
				children: "Account suspended"
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", { children: "Your account has been suspended due to policy violations." }),
			/* @__PURE__ */ (0, Y.jsx)(z, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)("a", {
					href: "https://ghost.org/help/social-web/",
					rel: "noopener noreferrer",
					target: "_blank",
					children: "Learn more →"
				})
			})
		]
	}) : e === 410 && t === "INVALID_VERSION" ? /* @__PURE__ */ (0, Y.jsxs)(Of, {
		className: "mt-[50vh] -translate-y-1/2",
		children: [
			/* @__PURE__ */ (0, Y.jsx)(Df, { children: /* @__PURE__ */ (0, Y.jsx)(za, {}) }),
			/* @__PURE__ */ (0, Y.jsx)(G, {
				className: "-mb-4",
				children: "New version available"
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", { children: "We've made some updates! Refresh your page to see what's new" }),
			/* @__PURE__ */ (0, Y.jsx)(z, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)("button", {
					type: "button",
					onClick: () => window.location.reload(),
					children: "Refresh your page"
				})
			})
		]
	}) : /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "admin-x-container-error",
		children: /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "admin-x-error max-w-xl",
			children: [
				/* @__PURE__ */ (0, Y.jsx)("h1", { children: "Loading interrupted" }),
				/* @__PURE__ */ (0, Y.jsx)("p", { children: "They say life is a series of trials and tribulations. This moment right here? It's a tribulation. Our app was supposed to load, and yet here we are. Loadless. Click back to the dashboard to try again." }),
				/* @__PURE__ */ (0, Y.jsx)("a", {
					className: "cursor-pointer text-green",
					onClick: (e) => {
						e.preventDefault(), r("/analytics/", { crossApp: !0 });
					},
					children: "← Back to the homepage"
				})
			]
		})
	});
}, Af = /* @__PURE__ */ e({ default: () => kf }), jf = [{
	path: "activitypub",
	element: /* @__PURE__ */ (0, Y.jsx)(E, {}),
	errorElement: /* @__PURE__ */ (0, Y.jsx)(kf, {}),
	handle: "activitypub-basepath",
	children: [
		{
			index: !0,
			element: /* @__PURE__ */ (0, Y.jsx)(L, { to: "reader" })
		},
		{
			path: "inbox",
			element: /* @__PURE__ */ (0, Y.jsx)(L, {
				to: "../reader",
				replace: !0
			})
		},
		{
			path: "feed",
			element: /* @__PURE__ */ (0, Y.jsx)(L, {
				to: "../notes",
				replace: !0
			})
		},
		{
			path: "reader",
			lazy: J(() => import("./inbox-CCjkuow2.js")),
			pageTitle: "Reader"
		},
		{
			path: "reader/:postId",
			lazy: J(() => import("./inbox-CCjkuow2.js")),
			pageTitle: "Reader"
		},
		{
			path: "notes",
			lazy: J(() => import("./feed-BM1TcksA.js")),
			pageTitle: "Notes"
		},
		{
			path: "notes/:postId",
			lazy: J(() => import("./note-ZKc_Bnba.js")),
			pageTitle: "Note"
		},
		{
			path: "notifications",
			lazy: J(() => import("./notifications-CB2tJZau.js")),
			pageTitle: "Notifications"
		},
		{
			path: "explore",
			lazy: J(() => import("./explore-BxuJd-J4.js")),
			pageTitle: "Explore"
		},
		{
			path: "explore/:topic",
			lazy: J(() => import("./explore-BxuJd-J4.js")),
			pageTitle: "Explore"
		},
		{
			path: "profile",
			lazy: J(() => import("./profile-C35cFIhM.js")),
			pageTitle: "Profile"
		},
		{
			path: "profile/likes",
			lazy: J(() => import("./profile-C35cFIhM.js")),
			pageTitle: "Profile"
		},
		{
			path: "profile/following",
			lazy: J(() => import("./profile-C35cFIhM.js")),
			pageTitle: "Profile"
		},
		{
			path: "profile/followers",
			lazy: J(() => import("./profile-C35cFIhM.js")),
			pageTitle: "Profile"
		},
		{
			path: "profile/:handle/:tab?",
			lazy: J(() => import("./profile-C35cFIhM.js")),
			pageTitle: "Profile"
		},
		{
			path: "preferences",
			lazy: J(() => import("./preferences-0-JZnUkI.js")),
			pageTitle: "Preferences"
		},
		{
			path: "preferences/moderation",
			lazy: J(() => import("./moderation-CnmxEB8w.js")),
			pageTitle: "Moderation",
			showBackButton: !0
		},
		{
			path: "preferences/bluesky-sharing",
			lazy: J(() => import("./bluesky-sharing-BJcPMrDd.js")),
			showBackButton: !0
		},
		{
			path: "preferences/move",
			lazy: J(() => import("./account-migration-By69CgCp.js")),
			pageTitle: "Account migration",
			showBackButton: !0
		},
		{
			path: "preferences/handle",
			lazy: J(() => import("./domain-DUR4xSkV.js")),
			pageTitle: "Handle",
			showBackButton: !0
		},
		{
			path: "welcome",
			lazy: J(() => import("./onboarding-BsJ9E5qf.js").then((e) => e.t)),
			pageTitle: "Welcome",
			children: [
				{
					path: "",
					element: /* @__PURE__ */ (0, Y.jsx)(L, {
						to: "1",
						replace: !0
					})
				},
				{
					path: "1",
					lazy: J(() => import("./step-1-BMSx7c_X.js"))
				},
				{
					path: "2",
					lazy: J(() => import("./step-2-DtPQzlTH.js"))
				},
				{
					path: "3",
					lazy: J(() => import("./step-3-CLlOZTyt.js"))
				},
				{
					path: "*",
					element: /* @__PURE__ */ (0, Y.jsx)(L, {
						to: "1",
						replace: !0
					})
				}
			]
		},
		{
			path: "*",
			lazy: J(() => Promise.resolve().then(() => Af))
		}
	]
}];
//#endregion
export { Ec as $, Lu as A, $r as At, Wl as B, Vd as C, Ti as Ct, Fd as D, bi as Dt, Ld as E, xi as Et, Ql as F, Qe as Ft, Vl as G, Kl as H, Zl as I, sl as J, il as K, Bl as L, iu as M, kt as Mt, eu as N, X as Nt, Ru as O, vi as Ot, $l as P, gt as Pt, Sc as Q, Yl as R, Kd as S, Mi as St, zd as T, yi as Tt, Gl as U, Jl as V, ql as W, _c as X, al as Y, bc as Z, Zd as _, Ma as _t, Ef as a, No as at, Yd as b, wa as bt, df as c, ro as ct, rf as d, Ba as dt, wc as et, cf as f, Ra as ft, nf as g, ja as gt, Qd as h, Na as ht, Of as i, Hs as it, su as j, zt as jt, Iu as k, ni as kt, lf as l, eo as lt, sf as m, Fa as mt, kf as n, Tc as nt, wf as o, po as ot, of as p, La as pt, ol as q, Df as r, vc as rt, _f as s, oo as st, jf as t, Cc as tt, af as u, Va as ut, Xd as v, Ta as vt, Bd as w, Ci as wt, qd as x, Ea as xt, Jd as y, Da as yt, Xl as z };

//# sourceMappingURL=routes-BD4vscyc.js.map