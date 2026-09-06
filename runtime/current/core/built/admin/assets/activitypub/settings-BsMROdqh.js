import { T as e, _ as t, c as n, d as r, g as i, u as a, v as o, w as s } from "./_react-D4KM8XEu.js";
import { S as c, t as l } from "./chunk-KS7C4IRE-Ck3O4oo2.js";
import { c as u, n as d, r as f, t as p, u as m, y as h } from "./use-navigate-with-base-path-Bmk5h4lW.js";
import { Z as g } from "./use-activity-pub-queries-CV50qe03.js";
import { Nt as _, Q as v, St as y, X as b, ft as x, jt as S, nt as C, rt as w, tt as T, ut as E } from "./routes-BD4vscyc.js";
import { c as D, s as ee, u as O } from "./avatar-DLPL3Abs.js";
import { t as k } from "./edit-profile-BqtfzxCp.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+_d63a01f8f2419583266dd4480c0aa94b/node_modules/@radix-ui/react-collection/dist/index.mjs
r();
var A = c();
function j(e) {
	let t = e + "CollectionProvider", [n, r] = O(t), [c, l] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), d = (e) => {
		let { scope: t, children: n } = e, r = s(null), i = s(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, A.jsx)(c, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	d.displayName = t;
	let f = e + "CollectionSlot", p = u(f), h = a((e, t) => {
		let { scope: n, children: r } = e, i = m(t, l(f, n).collectionRef);
		return /* @__PURE__ */ (0, A.jsx)(p, {
			ref: i,
			children: r
		});
	});
	h.displayName = f;
	let g = e + "CollectionItemSlot", _ = "data-radix-collection-item", v = u(g), y = a((e, t) => {
		let { scope: n, children: r, ...i } = e, a = s(null), c = m(t, a), u = l(g, n);
		return o(() => (u.itemMap.set(a, {
			ref: a,
			...i
		}), () => void u.itemMap.delete(a))), /* @__PURE__ */ (0, A.jsx)(v, {
			[_]: "",
			ref: c,
			children: r
		});
	});
	y.displayName = g;
	function b(t) {
		let n = l(e + "CollectionConsumer", t);
		return i(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${_}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: d,
			Slot: h,
			ItemSlot: y
		},
		b,
		r
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs
r();
var M = n(void 0);
function N(e) {
	let n = t(M);
	return e || n || "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.14_@types+react-dom@18.3.7_@types+react@18.3.31__@type_a513f2abd288270d6d7328308a8fd3e4/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
r();
var P = "rovingFocusGroup.onEntryFocus", te = {
	bubbles: !1,
	cancelable: !0
}, F = "RovingFocusGroup", [I, L, ne] = j(F), [R, z] = O(F, [ne]), [re, ie] = R(F), B = a((e, t) => /* @__PURE__ */ (0, A.jsx)(I.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ (0, A.jsx)(I.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, A.jsx)(ae, {
			...e,
			ref: t
		})
	})
}));
B.displayName = F;
var ae = a((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: a, loop: c = !1, dir: l, currentTabStopId: u, defaultCurrentTabStopId: d, onCurrentTabStopIdChange: f, onEntryFocus: p, preventScrollOnEntryFocus: h = !1, ...g } = t, v = s(null), b = m(n, v), x = N(l), [S, C] = y({
		prop: u,
		defaultProp: d ?? null,
		onChange: f,
		caller: F
	}), [w, T] = e(!1), E = ee(p), O = L(r), k = s(!1), [j, M] = e(0);
	return o(() => {
		let e = v.current;
		if (e) return e.addEventListener(P, E), () => e.removeEventListener(P, E);
	}, [E]), /* @__PURE__ */ (0, A.jsx)(re, {
		scope: r,
		orientation: a,
		dir: x,
		loop: c,
		currentTabStopId: S,
		onItemFocus: i((e) => C(e), [C]),
		onItemShiftTab: i(() => T(!0), []),
		onFocusableItemAdd: i(() => M((e) => e + 1), []),
		onFocusableItemRemove: i(() => M((e) => e - 1), []),
		children: /* @__PURE__ */ (0, A.jsx)(D.div, {
			tabIndex: w || j === 0 ? -1 : 0,
			"data-orientation": a,
			...g,
			ref: b,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: _(t.onMouseDown, () => {
				k.current = !0;
			}),
			onFocus: _(t.onFocus, (e) => {
				let t = !k.current;
				if (e.target === e.currentTarget && t && !w) {
					let t = new CustomEvent(P, te);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = O().filter((e) => e.focusable);
						K([
							e.find((e) => e.active),
							e.find((e) => e.id === S),
							...e
						].filter(Boolean).map((e) => e.ref.current), h);
					}
				}
				k.current = !1;
			}),
			onBlur: _(t.onBlur, () => T(!1))
		})
	});
}), V = "RovingFocusGroupItem", H = a((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: s, ...c } = e, l = S(), u = a || l, d = ie(V, n), f = d.currentTabStopId === u, p = L(n), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d;
	return o(() => {
		if (r) return m(), () => h();
	}, [
		r,
		m,
		h
	]), /* @__PURE__ */ (0, A.jsx)(I.ItemSlot, {
		scope: n,
		id: u,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ (0, A.jsx)(D.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...c,
			ref: t,
			onMouseDown: _(e.onMouseDown, (e) => {
				r ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: _(e.onFocus, () => d.onItemFocus(u)),
			onKeyDown: _(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = G(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? q(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => K(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
});
H.displayName = V;
var U = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function W(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function G(e, t, n) {
	let r = W(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return U[r];
}
function K(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function q(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var oe = B, se = H;
//#endregion
//#region src/views/preferences/components/settings.tsx
r();
var ce = ({ account: t, className: n = "" }) => {
	let [r, i] = e(!1), a = p();
	return /* @__PURE__ */ (0, A.jsxs)("div", {
		className: `flex flex-col ${n}`,
		children: [
			/* @__PURE__ */ (0, A.jsx)($, {}),
			/* @__PURE__ */ (0, A.jsxs)(Q, { children: [/* @__PURE__ */ (0, A.jsxs)(X, { children: [/* @__PURE__ */ (0, A.jsx)(J, { children: "Profile" }), /* @__PURE__ */ (0, A.jsx)(Y, { children: "Edit your profile information and account details" })] }), /* @__PURE__ */ (0, A.jsxs)(b, {
				open: r,
				onOpenChange: i,
				children: [/* @__PURE__ */ (0, A.jsx)(w, { children: /* @__PURE__ */ (0, A.jsx)(Z, { children: /* @__PURE__ */ (0, A.jsx)(f, {
					variant: "secondary",
					children: "Edit"
				}) }) }), /* @__PURE__ */ (0, A.jsxs)(v, {
					onOpenAutoFocus: (e) => e.preventDefault(),
					children: [/* @__PURE__ */ (0, A.jsx)(T, { children: /* @__PURE__ */ (0, A.jsx)(C, { children: "Profile settings" }) }), t && /* @__PURE__ */ (0, A.jsx)(k, {
						account: t,
						setIsEditingProfile: i
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, A.jsxs)(Q, {
				to: "/preferences/handle",
				withHover: !0,
				children: [/* @__PURE__ */ (0, A.jsxs)(X, { children: [/* @__PURE__ */ (0, A.jsx)(J, { children: "Social web handle" }), /* @__PURE__ */ (0, A.jsx)(Y, { children: "Set your account username and domain" })] }), /* @__PURE__ */ (0, A.jsx)(Z, {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, A.jsx)(x, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, A.jsxs)(Q, {
				to: "/preferences/moderation",
				withHover: !0,
				children: [/* @__PURE__ */ (0, A.jsxs)(X, { children: [/* @__PURE__ */ (0, A.jsx)(J, { children: "Moderation" }), /* @__PURE__ */ (0, A.jsx)(Y, { children: "Manage blocked users and domains" })] }), /* @__PURE__ */ (0, A.jsx)(Z, {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, A.jsx)(x, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, A.jsxs)(Q, {
				withHover: !0,
				onClick: () => a("/preferences/bluesky-sharing"),
				children: [/* @__PURE__ */ (0, A.jsxs)(X, { children: [/* @__PURE__ */ (0, A.jsx)(J, { children: "Bluesky sharing" }), /* @__PURE__ */ (0, A.jsx)(Y, { children: "Share content directly on Bluesky" })] }), /* @__PURE__ */ (0, A.jsxs)(Z, {
					className: "flex items-center gap-2",
					children: [t?.blueskyEnabled ? /* @__PURE__ */ (0, A.jsx)("span", {
						className: "font-medium text-black",
						children: "On"
					}) : /* @__PURE__ */ (0, A.jsx)("span", { children: "Off" }), /* @__PURE__ */ (0, A.jsx)(x, { size: 20 })]
				})]
			}),
			/* @__PURE__ */ (0, A.jsxs)(Q, {
				to: "/preferences/move",
				withHover: !0,
				children: [/* @__PURE__ */ (0, A.jsxs)(X, { children: [/* @__PURE__ */ (0, A.jsx)(J, { children: "Account migration" }), /* @__PURE__ */ (0, A.jsx)(Y, { children: "Move another social web account to this one" })] }), /* @__PURE__ */ (0, A.jsx)(Z, {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, A.jsx)(x, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, A.jsx)($, {}),
			/* @__PURE__ */ (0, A.jsxs)(Q, {
				href: "https://ghost.org/help/social-web/",
				withHover: !0,
				children: [/* @__PURE__ */ (0, A.jsxs)(X, { children: [/* @__PURE__ */ (0, A.jsx)(J, { children: "Help" }), /* @__PURE__ */ (0, A.jsx)(Y, { children: "Social web guides and support resources" })] }), /* @__PURE__ */ (0, A.jsx)(Z, { children: /* @__PURE__ */ (0, A.jsx)(E, { size: 18 }) })]
			})
		]
	});
}, J = g, Y = ({ children: e, className: t = "" }) => /* @__PURE__ */ (0, A.jsx)("span", {
	className: `text-sm text-gray-700 ${t}`,
	children: e
}), X = ({ children: e, className: t = "" }) => /* @__PURE__ */ (0, A.jsx)("div", {
	className: `relative flex flex-col gap-0.5 ${t}`,
	children: e
}), Z = ({ children: e, className: t = "" }) => /* @__PURE__ */ (0, A.jsx)("div", {
	className: `relative text-gray-500 ${t}`,
	children: e
}), Q = ({ children: e, className: t = "", withHover: n = !1, to: r, href: i, onClick: a }) => {
	let o = d(), s = h("flex items-center justify-between py-3 gap-4", n ? "relative cursor-pointer before:absolute before:inset-x-[-16px] before:inset-y-[-1px] before:rounded-md before:bg-gray-50 before:opacity-0 before:transition-opacity before:will-change-[opacity] hover:z-10 hover:cursor-pointer hover:border-b-transparent hover:before:opacity-100 dark:before:bg-gray-950" : "", t), c = r && r.startsWith("/") ? `${o}${r}` : r;
	return c ? /* @__PURE__ */ (0, A.jsx)(l, {
		className: s,
		to: c,
		children: e
	}) : i ? /* @__PURE__ */ (0, A.jsx)("a", {
		className: s,
		href: i,
		rel: "noreferrer",
		target: "_blank",
		children: e
	}) : a ? /* @__PURE__ */ (0, A.jsx)("div", {
		className: s,
		role: "button",
		tabIndex: 0,
		onClick: a,
		children: e
	}) : /* @__PURE__ */ (0, A.jsx)("div", {
		className: s,
		children: e
	});
}, $ = () => /* @__PURE__ */ (0, A.jsx)("hr", { className: "my-3 h-px border-0 bg-gray-200 dark:bg-gray-950" });
//#endregion
export { J as a, oe as c, j as d, Q as i, z as l, Y as n, ce as o, X as r, se as s, Z as t, N as u };

//# sourceMappingURL=settings-BsMROdqh.js.map