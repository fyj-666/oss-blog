import { S as e, T as t, _ as n, c as r, d as i, u as a, v as o, w as s, x as c } from "./_react-D4KM8XEu.js";
import { S as l, h as u } from "./chunk-KS7C4IRE-Ck3O4oo2.js";
import { S as d, c as f, o as p, y as m } from "./use-navigate-with-base-path-Bmk5h4lW.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.4_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs
i();
var h = l();
function g(t, i = []) {
	let a = [];
	function o(i, o) {
		let s = r(o);
		s.displayName = i + "Context";
		let c = a.length;
		a = [...a, o];
		let l = (n) => {
			let { scope: r, children: i, ...a } = n, o = r?.[t]?.[c] || s, l = e(() => a, Object.values(a));
			return /* @__PURE__ */ (0, h.jsx)(o.Provider, {
				value: l,
				children: i
			});
		};
		l.displayName = i + "Provider";
		function u(e, r) {
			let a = n(r?.[t]?.[c] || s);
			if (a) return a;
			if (o !== void 0) return o;
			throw Error(`\`${e}\` must be used within \`${i}\``);
		}
		return [l, u];
	}
	let s = () => {
		let n = a.map((e) => r(e));
		return function(r) {
			let i = r?.[t] || n;
			return e(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return s.scopeName = t, [o, _(s, ...i)];
}
function _(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.7_@types+react-dom@18.3.7_@types+react@18.3.31__@types+re_4c60825657fad9e38f0a4d7b31c9e11d/node_modules/@radix-ui/react-primitive/dist/index.mjs
i();
var v = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = f(`Primitive.${t}`), r = a((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, h.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function y(e, t) {
	e && u(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
i();
function b(t) {
	let n = s(t);
	return o(() => {
		n.current = t;
	}), e(() => ((...e) => n.current?.(...e)), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
i();
var x = globalThis?.document ? c : () => {}, S = p("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]), C = p("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-avatar@1.2.1_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react_618495bb42525b350fac96e721ad44e8/node_modules/@radix-ui/react-avatar/dist/index.mjs
i();
var w = "Avatar", [T, E] = g(w), D = [0, () => void 0], [O, k] = T(w), A = a((e, n) => {
	let { __scopeAvatar: r, ...i } = e, [a, o] = t("idle"), [s, c] = L();
	return /* @__PURE__ */ (0, h.jsx)(O, {
		scope: r,
		imageLoadingStatus: a,
		setImageLoadingStatus: o,
		imageCount: s,
		setImageCount: c,
		children: /* @__PURE__ */ (0, h.jsx)(v.span, {
			...i,
			ref: n
		})
	});
});
A.displayName = w;
var j = "AvatarImage", M = a((e, t) => {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: i, ...a } = e, o = k(j, n);
	R(o.setImageCount);
	let c = F(r, {
		referrerPolicy: a.referrerPolicy,
		crossOrigin: a.crossOrigin,
		loadingStatus: o.imageLoadingStatus,
		setLoadingStatus: o.setImageLoadingStatus
	}), l = b((e) => {
		i?.(e);
	}), u = s(c);
	return x(() => {
		let e = u.current;
		u.current = c, c !== e && l(c);
	}, [c, l]), c === "loaded" ? /* @__PURE__ */ (0, h.jsx)(v.img, {
		...a,
		ref: t,
		src: r
	}) : null;
});
M.displayName = j;
var N = "AvatarFallback", P = a((e, n) => {
	let { __scopeAvatar: r, delayMs: i, ...a } = e, s = k(N, r), [c, l] = t(i === void 0);
	return o(() => {
		if (i !== void 0) {
			let e = window.setTimeout(() => l(!0), i);
			return () => window.clearTimeout(e);
		}
	}, [i]), c && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, h.jsx)(v.span, {
		...a,
		ref: n
	}) : null;
});
P.displayName = N;
function F(e, { loadingStatus: t, setLoadingStatus: n, referrerPolicy: r, crossOrigin: i }) {
	return x(() => {
		if (!e) {
			n("error");
			return;
		}
		let t = new window.Image(), a = (e) => {
			let t = e.currentTarget;
			n(I(t));
		}, o = () => n("error");
		return t.addEventListener("load", a), t.addEventListener("error", o), r && (t.referrerPolicy = r), t.crossOrigin = i ?? null, t.src = e, n(I(t)), () => {
			t.removeEventListener("load", a), t.removeEventListener("error", o), n("idle");
		};
	}, [
		e,
		i,
		r,
		n
	]), t;
}
function I(e) {
	return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
function L() {
	let e = D;
	{
		e = t(0);
		let [n] = e, r = s(!1);
		o(() => {
			n > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."));
		}, [n]);
	}
	return e;
}
function R(e) {
	o(() => (e((e) => e + 1), () => {
		e((e) => e - 1);
	}), [e]);
}
//#endregion
//#region ../shade/es/components/ui/avatar.js
i();
var z = a(({ className: e, ...t }, n) => /* @__PURE__ */ (0, h.jsx)(M, {
	ref: n,
	className: m("aspect-square size-full", e),
	...t
}));
z.displayName = M.displayName;
var B = a(({ className: e, ...t }, n) => /* @__PURE__ */ (0, h.jsx)(P, {
	ref: n,
	className: m("flex size-full items-center justify-center rounded-full bg-muted [&_svg]:size-4", e),
	...t
}));
B.displayName = P.displayName;
function V({ src: e }) {
	let [n, r] = t(!1);
	return o(() => {
		r(!1);
	}, [e]), /* @__PURE__ */ (0, h.jsx)("img", {
		alt: "",
		className: m("absolute inset-0 size-full object-cover", !n && "invisible"),
		src: e,
		onLoad: (e) => {
			let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
			t > 1 && n > 1 && r(!0);
		}
	});
}
var H = a(({ className: e, children: t, src: n, initials: r, colorSeed: i, ...a }, o) => {
	let s = !!r, c = s ? d(i || r, "45", "55") : void 0;
	return /* @__PURE__ */ (0, h.jsx)(A, {
		ref: o,
		className: m("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
		...a,
		children: t ?? /* @__PURE__ */ (0, h.jsxs)(h.Fragment, { children: [/* @__PURE__ */ (0, h.jsx)(B, {
			className: m("text-xs text-muted-foreground md:text-sm [&_svg]:size-3 md:[&_svg]:size-4", s && "font-semibold text-white"),
			style: s ? { backgroundColor: c } : void 0,
			children: r ?? /* @__PURE__ */ (0, h.jsx)(C, {})
		}), n && /* @__PURE__ */ (0, h.jsx)(V, { src: n })] })
	});
});
H.displayName = A.displayName;
//#endregion
export { S as a, v as c, C as i, y as l, B as n, x as o, z as r, b as s, H as t, g as u };

//# sourceMappingURL=avatar-DLPL3Abs.js.map