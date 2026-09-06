import { T as e, _ as t, c as n, d as r, g as i, r as a, u as o, v as s, w as c } from "./_react-D4KM8XEu.js";
import { S as l } from "./chunk-KS7C4IRE-Ck3O4oo2.js";
import { c as u, d, o as f, u as p, y as m } from "./use-navigate-with-base-path-Bmk5h4lW.js";
import { Ct as h, Dt as ee, Et as te, Mt as ne, Nt as g, Ot as _, St as re, Tt as ie, at as v, ft as y, gt as b, ht as x, it as ae, jt as S, kt as oe, ot as se, st as ce, wt as le } from "./routes-BD4vscyc.js";
import { c as C, l as w, s as T, u as E } from "./avatar-DLPL3Abs.js";
import { p as D } from "./content-formatters-3rTHg3mp.js";
import { c as ue, d as O, l as k, s as A, u as j } from "./settings-BsMROdqh.js";
var M = f("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-menu@2.1.19_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react@_4b5bcf394c29b5d4bc13e7a7b277eeb6/node_modules/@radix-ui/react-menu/dist/index.mjs
r();
var N = l(), P = ["Enter", " "], de = [
	"ArrowDown",
	"PageUp",
	"Home"
], fe = [
	"ArrowUp",
	"PageDown",
	"End"
], pe = [...de, ...fe], me = {
	ltr: [...P, "ArrowRight"],
	rtl: [...P, "ArrowLeft"]
}, F = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, I = "Menu", [L, he, ge] = O(I), [R, _e] = E(I, [
	ge,
	oe,
	k
]), z = oe(), ve = k(), [ye, B] = R(I), [be, V] = R(I), xe = (t) => {
	let { __scopeMenu: n, open: r = !1, children: a, dir: o, onOpenChange: l, modal: u = !0 } = t, d = z(n), [f, p] = e(null), m = c(!1), h = T(l), ee = j(o);
	return s(() => {
		let e = () => {
			m.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => m.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), s(() => {
		if (!r) return;
		let e = () => h(!1);
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [r, h]), /* @__PURE__ */ (0, N.jsx)(_, {
		...d,
		children: /* @__PURE__ */ (0, N.jsx)(ye, {
			scope: n,
			open: r,
			onOpenChange: h,
			content: f,
			onContentChange: p,
			children: /* @__PURE__ */ (0, N.jsx)(be, {
				scope: n,
				onClose: i(() => h(!1), [h]),
				isUsingKeyboardRef: m,
				dir: ee,
				modal: u,
				children: a
			})
		})
	});
};
xe.displayName = I;
var Se = "MenuAnchor", Ce = o((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = z(n);
	return /* @__PURE__ */ (0, N.jsx)(ie, {
		...i,
		...r,
		ref: t
	});
});
Ce.displayName = Se;
var H = "MenuPortal", [we, Te] = R(H, { forceMount: void 0 }), Ee = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = B(H, t);
	return /* @__PURE__ */ (0, N.jsx)(we, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, N.jsx)(h, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, N.jsx)(le, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Ee.displayName = H;
var U = "MenuContent", [De, Oe] = R(U), ke = o((e, t) => {
	let n = Te(U, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = B(U, e.__scopeMenu), o = V(U, e.__scopeMenu);
	return /* @__PURE__ */ (0, N.jsx)(L.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, N.jsx)(h, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, N.jsx)(L.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, N.jsx)(Ae, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, N.jsx)(je, {
					...i,
					ref: t
				})
			})
		})
	});
}), Ae = o((e, t) => {
	let n = B(U, e.__scopeMenu), r = c(null), i = p(t, r);
	return s(() => {
		let e = r.current;
		if (e) return v(e);
	}, []), /* @__PURE__ */ (0, N.jsx)(Ne, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		disableOutsideScroll: !0,
		onFocusOutside: g(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => n.onOpenChange(!1)
	});
}), je = o((e, t) => {
	let n = B(U, e.__scopeMenu);
	return /* @__PURE__ */ (0, N.jsx)(Ne, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), Me = u("MenuContent.ScrollLock"), Ne = o((t, n) => {
	let { __scopeMenu: r, loop: o = !1, trapFocus: l, onOpenAutoFocus: u, onCloseAutoFocus: d, disableOutsidePointerEvents: f, onEntryFocus: m, onEscapeKeyDown: h, onPointerDownOutside: te, onFocusOutside: _, onInteractOutside: re, onDismiss: ie, disableOutsideScroll: v, ...y } = t, b = B(U, r), x = V(U, r), S = z(r), oe = ve(r), le = he(r), [C, w] = e(null), T = c(null), E = p(n, T, b.onContentChange), D = c(0), O = c(""), k = c(0), A = c(null), j = c("right"), M = c(0), P = v ? ae : a, de = v ? {
		as: Me,
		allowPinchZoom: !0
	} : void 0, me = (e) => {
		let t = O.current + e, n = le().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = ft(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			O.current = t, window.clearTimeout(D.current), t !== "" && (D.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	s(() => () => window.clearTimeout(D.current), []), ce();
	let F = i((e) => j.current === A.current?.side && mt(e, A.current?.area), []);
	return /* @__PURE__ */ (0, N.jsx)(De, {
		scope: r,
		searchRef: O,
		onItemEnter: i((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		onItemLeave: i((e) => {
			F(e) || (T.current?.focus(), w(null));
		}, [F]),
		onTriggerLeave: i((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		pointerGraceTimerRef: k,
		onPointerGraceIntentChange: i((e) => {
			A.current = e;
		}, []),
		children: /* @__PURE__ */ (0, N.jsx)(P, {
			...de,
			children: /* @__PURE__ */ (0, N.jsx)(se, {
				asChild: !0,
				trapped: l,
				onMountAutoFocus: g(u, (e) => {
					e.preventDefault(), T.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: d,
				children: /* @__PURE__ */ (0, N.jsx)(ne, {
					asChild: !0,
					disableOutsidePointerEvents: f,
					onEscapeKeyDown: h,
					onPointerDownOutside: te,
					onFocusOutside: _,
					onInteractOutside: re,
					onDismiss: ie,
					children: /* @__PURE__ */ (0, N.jsx)(ue, {
						asChild: !0,
						...oe,
						dir: x.dir,
						orientation: "vertical",
						loop: o,
						currentTabStopId: C,
						onCurrentTabStopIdChange: w,
						onEntryFocus: g(m, (e) => {
							x.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ (0, N.jsx)(ee, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": ct(b.open),
							"data-radix-menu-content": "",
							dir: x.dir,
							...S,
							...y,
							ref: E,
							style: {
								outline: "none",
								...y.style
							},
							onKeyDown: g(y.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && me(e.key));
								let i = T.current;
								if (e.target !== i || !pe.includes(e.key)) return;
								e.preventDefault();
								let a = le().filter((e) => !e.disabled).map((e) => e.ref.current);
								fe.includes(e.key) && a.reverse(), ut(a);
							}),
							onBlur: g(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(D.current), O.current = "");
							}),
							onPointerMove: g(t.onPointerMove, Y((e) => {
								let t = e.target, n = M.current !== e.clientX;
								if (e.currentTarget.contains(t) && n) {
									let t = e.clientX > M.current ? "right" : "left";
									j.current = t, M.current = e.clientX;
								}
							}))
						})
					})
				})
			})
		})
	});
});
ke.displayName = U;
var Pe = "MenuGroup", W = o((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, N.jsx)(C.div, {
		role: "group",
		...r,
		ref: t
	});
});
W.displayName = Pe;
var Fe = "MenuLabel", Ie = o((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, N.jsx)(C.div, {
		...r,
		ref: t
	});
});
Ie.displayName = Fe;
var G = "MenuItem", Le = "menu.itemSelect", K = o((e, t) => {
	let { disabled: n = !1, onSelect: r, ...i } = e, a = c(null), o = V(G, e.__scopeMenu), s = Oe(G, e.__scopeMenu), l = p(t, a), u = c(!1), d = () => {
		let e = a.current;
		if (!n && e) {
			let t = new CustomEvent(Le, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Le, (e) => r?.(e), { once: !0 }), w(e, t), t.defaultPrevented ? u.current = !1 : o.onClose();
		}
	};
	return /* @__PURE__ */ (0, N.jsx)(Re, {
		...i,
		ref: l,
		disabled: n,
		onClick: g(e.onClick, d),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), u.current = !0;
		},
		onPointerUp: g(e.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: g(e.onKeyDown, (e) => {
			let t = s.searchRef.current !== "";
			n || t && e.key === " " || P.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
K.displayName = G;
var Re = o((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, l = Oe(G, r), u = ve(r), d = c(null), f = p(n, d), [m, h] = e(!1), [ee, te] = e("");
	return s(() => {
		let e = d.current;
		e && te((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ (0, N.jsx)(L.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? ee,
		children: /* @__PURE__ */ (0, N.jsx)(A, {
			asChild: !0,
			...u,
			focusable: !i,
			children: /* @__PURE__ */ (0, N.jsx)(C.div, {
				role: "menuitem",
				"data-highlighted": m ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: f,
				onPointerMove: g(t.onPointerMove, Y((e) => {
					i ? l.onItemLeave(e) : (l.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: g(t.onPointerLeave, Y((e) => l.onItemLeave(e))),
				onFocus: g(t.onFocus, () => h(!0)),
				onBlur: g(t.onBlur, () => h(!1))
			})
		})
	});
}), ze = "MenuCheckboxItem", Be = o((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ (0, N.jsx)(Je, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ (0, N.jsx)(K, {
			role: "menuitemcheckbox",
			"aria-checked": J(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": lt(n),
			onSelect: g(i.onSelect, () => r?.(J(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Be.displayName = ze;
var Ve = "MenuRadioGroup", [He, Ue] = R(Ve, {
	value: void 0,
	onValueChange: () => {}
}), We = o((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = T(r);
	return /* @__PURE__ */ (0, N.jsx)(He, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ (0, N.jsx)(W, {
			...i,
			ref: t
		})
	});
});
We.displayName = Ve;
var Ge = "MenuRadioItem", Ke = o((e, t) => {
	let { value: n, ...r } = e, i = Ue(Ge, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ (0, N.jsx)(Je, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ (0, N.jsx)(K, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": lt(a),
			onSelect: g(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
Ke.displayName = Ge;
var qe = "MenuItemIndicator", [Je, Ye] = R(qe, { checked: !1 }), Xe = o((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Ye(qe, n);
	return /* @__PURE__ */ (0, N.jsx)(h, {
		present: r || J(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, N.jsx)(C.span, {
			...i,
			ref: t,
			"data-state": lt(a.checked)
		})
	});
});
Xe.displayName = qe;
var Ze = "MenuSeparator", Qe = o((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, N.jsx)(C.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
Qe.displayName = Ze;
var $e = "MenuArrow", et = o((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = z(n);
	return /* @__PURE__ */ (0, N.jsx)(te, {
		...i,
		...r,
		ref: t
	});
});
et.displayName = $e;
var tt = "MenuSub", [nt, rt] = R(tt), it = (t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = B(tt, n), c = z(n), [l, u] = e(null), [d, f] = e(null), p = T(a);
	return s(() => (o.open === !1 && p(!1), () => p(!1)), [o.open, p]), /* @__PURE__ */ (0, N.jsx)(_, {
		...c,
		children: /* @__PURE__ */ (0, N.jsx)(ye, {
			scope: n,
			open: i,
			onOpenChange: p,
			content: d,
			onContentChange: f,
			children: /* @__PURE__ */ (0, N.jsx)(nt, {
				scope: n,
				contentId: S(),
				triggerId: S(),
				trigger: l,
				onTriggerChange: u,
				children: r
			})
		})
	});
};
it.displayName = tt;
var q = "MenuSubTrigger", at = o((e, t) => {
	let n = B(q, e.__scopeMenu), r = V(q, e.__scopeMenu), a = rt(q, e.__scopeMenu), o = Oe(q, e.__scopeMenu), l = c(null), { pointerGraceTimerRef: u, onPointerGraceIntentChange: d } = o, f = { __scopeMenu: e.__scopeMenu }, m = i(() => {
		l.current && window.clearTimeout(l.current), l.current = null;
	}, []);
	s(() => m, [m]), s(() => {
		let e = u.current;
		return () => {
			window.clearTimeout(e), d(null);
		};
	}, [u, d]);
	let h = p(t, a.onTriggerChange);
	return /* @__PURE__ */ (0, N.jsx)(Ce, {
		asChild: !0,
		...f,
		children: /* @__PURE__ */ (0, N.jsx)(Re, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": n.open,
			"aria-controls": n.open ? a.contentId : void 0,
			"data-state": ct(n.open),
			...e,
			ref: h,
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
			},
			onPointerMove: g(e.onPointerMove, Y((t) => {
				o.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !l.current && (o.onPointerGraceIntentChange(null), l.current = window.setTimeout(() => {
					n.onOpenChange(!0), m();
				}, 100));
			})),
			onPointerLeave: g(e.onPointerLeave, Y((e) => {
				m();
				let t = n.content?.getBoundingClientRect();
				if (t) {
					let r = n.content?.dataset.side, i = r === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], c = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: c,
								y: t.top
							},
							{
								x: c,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: r
					}), window.clearTimeout(u.current), u.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: g(e.onKeyDown, (t) => {
				let i = o.searchRef.current !== "";
				e.disabled || i && t.key === " " || me[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
			})
		})
	});
});
at.displayName = q;
var ot = "MenuSubContent", st = o((e, t) => {
	let n = Te(U, e.__scopeMenu), { forceMount: r = n.forceMount, align: i = "start", ...a } = e, o = B(U, e.__scopeMenu), s = V(U, e.__scopeMenu), l = rt(ot, e.__scopeMenu), u = c(null), d = p(t, u);
	return /* @__PURE__ */ (0, N.jsx)(L.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, N.jsx)(h, {
			present: r || o.open,
			children: /* @__PURE__ */ (0, N.jsx)(L.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ (0, N.jsx)(Ne, {
					id: l.contentId,
					"aria-labelledby": l.triggerId,
					...a,
					ref: d,
					align: i,
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: g(e.onFocusOutside, (e) => {
						e.target !== l.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: g(e.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: g(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = F[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
st.displayName = ot;
function ct(e) {
	return e ? "open" : "closed";
}
function J(e) {
	return e === "indeterminate";
}
function lt(e) {
	return J(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ut(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function dt(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function ft(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = dt(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function pt(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function mt(e, t) {
	return t ? pt({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Y(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ht = xe, gt = Ce, _t = Ee, vt = ke, yt = W, bt = Ie, xt = K, St = Be, Ct = We, wt = Ke, Tt = Xe, Et = Qe, Dt = et, Ot = at, kt = st;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dropdown-menu@2.1.19_@types+react-dom@18.3.7_@types+react@18.3.31__@typ_c9d8b1b7105c5bcf5811c2d38ad25961/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
r();
var X = "DropdownMenu", [At, jt] = E(X, [_e]), Z = _e(), [Mt, Nt] = At(X), Pt = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: a, defaultOpen: o, onOpenChange: s, modal: l = !0 } = e, u = Z(t), d = c(null), [f, p] = re({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: X
	});
	return /* @__PURE__ */ (0, N.jsx)(Mt, {
		scope: t,
		triggerId: S(),
		triggerRef: d,
		contentId: S(),
		open: f,
		onOpenChange: p,
		onOpenToggle: i(() => p((e) => !e), [p]),
		modal: l,
		children: /* @__PURE__ */ (0, N.jsx)(ht, {
			...u,
			open: f,
			onOpenChange: p,
			dir: r,
			modal: l,
			children: n
		})
	});
};
Pt.displayName = X;
var Ft = "DropdownMenuTrigger", It = o((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = Nt(Ft, n), o = Z(n), s = p(t, a.triggerRef);
	return /* @__PURE__ */ (0, N.jsx)(gt, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, N.jsx)(C.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: s,
			onPointerDown: g(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: g(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
It.displayName = Ft;
var Lt = "DropdownMenuPortal", Rt = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = Z(t);
	return /* @__PURE__ */ (0, N.jsx)(_t, {
		...r,
		...n
	});
};
Rt.displayName = Lt;
var zt = "DropdownMenuContent", Bt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Nt(zt, n), a = Z(n), o = c(!1);
	return /* @__PURE__ */ (0, N.jsx)(vt, {
		id: i.contentId,
		"aria-labelledby": i.triggerId,
		...a,
		...r,
		ref: t,
		onCloseAutoFocus: g(e.onCloseAutoFocus, (e) => {
			o.current || i.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
		}),
		onInteractOutside: g(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!i.modal || r) && (o.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Bt.displayName = zt;
var Vt = "DropdownMenuGroup", Ht = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(yt, {
		...i,
		...r,
		ref: t
	});
});
Ht.displayName = Vt;
var Ut = "DropdownMenuLabel", Wt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(bt, {
		...i,
		...r,
		ref: t
	});
});
Wt.displayName = Ut;
var Gt = "DropdownMenuItem", Kt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(xt, {
		...i,
		...r,
		ref: t
	});
});
Kt.displayName = Gt;
var qt = "DropdownMenuCheckboxItem", Jt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(St, {
		...i,
		...r,
		ref: t
	});
});
Jt.displayName = qt;
var Yt = "DropdownMenuRadioGroup", Xt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(Ct, {
		...i,
		...r,
		ref: t
	});
});
Xt.displayName = Yt;
var Zt = "DropdownMenuRadioItem", Qt = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(wt, {
		...i,
		...r,
		ref: t
	});
});
Qt.displayName = Zt;
var $t = "DropdownMenuItemIndicator", en = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(Tt, {
		...i,
		...r,
		ref: t
	});
});
en.displayName = $t;
var tn = "DropdownMenuSeparator", nn = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(Et, {
		...i,
		...r,
		ref: t
	});
});
nn.displayName = tn;
var rn = "DropdownMenuArrow", an = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(Dt, {
		...i,
		...r,
		ref: t
	});
});
an.displayName = rn;
var on = "DropdownMenuSubTrigger", sn = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(Ot, {
		...i,
		...r,
		ref: t
	});
});
sn.displayName = on;
var cn = "DropdownMenuSubContent", ln = o((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Z(n);
	return /* @__PURE__ */ (0, N.jsx)(kt, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
ln.displayName = cn;
var un = It, dn = Rt, fn = Bt, pn = Wt, mn = Kt, hn = Jt, gn = Qt, _n = en, vn = nn, yn = sn, bn = ln;
//#endregion
//#region ../shade/es/components/ui/dropdown-menu.js
r();
var xn = un, Sn = o(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ (0, N.jsxs)(yn, {
	ref: i,
	className: m("flex cursor-default items-center gap-2 rounded-xs px-2 py-1.5 text-control outline-hidden select-none hover:bg-interactive-hover focus:bg-interactive-hover data-[state=open]:bg-interactive-hover [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e),
	...r,
	children: [n, /* @__PURE__ */ (0, N.jsx)(y, { className: "ml-auto" })]
}));
Sn.displayName = yn.displayName;
var Cn = o(({ className: e, onEscapeKeyDown: t, ...n }, r) => /* @__PURE__ */ (0, N.jsx)("div", {
	className: b,
	children: /* @__PURE__ */ (0, N.jsx)(bn, {
		ref: r,
		className: m("z-50 min-w-[8rem] overflow-hidden rounded-md border border-border/60 bg-surface-elevated-2 p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-border/30", e),
		onEscapeKeyDown: (e) => x(e, t),
		...n
	})
}));
Cn.displayName = bn.displayName;
var wn = o(({ className: e, onEscapeKeyDown: t, sideOffset: n = 4, ...r }, i) => /* @__PURE__ */ (0, N.jsx)(dn, { children: /* @__PURE__ */ (0, N.jsx)("div", {
	className: b,
	children: /* @__PURE__ */ (0, N.jsx)(fn, {
		ref: i,
		className: m("z-50 min-w-[8rem] overflow-hidden rounded-md border border-border/60 bg-surface-elevated-2 p-1 text-popover-foreground shadow-md dark:border-border/30", "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		sideOffset: n,
		onEscapeKeyDown: (e) => x(e, t),
		...r
	})
}) }));
wn.displayName = fn.displayName;
var Tn = o(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, N.jsx)(mn, {
	ref: r,
	className: m("relative flex cursor-pointer items-center gap-2 rounded-xs px-2 py-1.5 text-control outline-hidden transition-colors select-none focus:bg-interactive-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", t && "pl-8", e),
	...n
}));
Tn.displayName = mn.displayName;
var En = o(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ (0, N.jsxs)(hn, {
	ref: i,
	checked: n,
	className: m("relative flex cursor-default items-center rounded-xs py-1.5 pr-2 pl-8 text-control outline-hidden transition-colors select-none focus:bg-interactive-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...r,
	children: [/* @__PURE__ */ (0, N.jsx)("span", {
		className: "absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, N.jsx)(_n, { children: /* @__PURE__ */ (0, N.jsx)(D, { className: "size-4" }) })
	}), t]
}));
En.displayName = hn.displayName;
var Dn = o(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, N.jsxs)(gn, {
	ref: r,
	className: m("relative flex cursor-default items-center rounded-xs py-1.5 pr-2 pl-8 text-control outline-hidden transition-colors select-none focus:bg-interactive-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, N.jsx)("span", {
		className: "absolute left-2 flex size-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, N.jsx)(_n, { children: /* @__PURE__ */ (0, N.jsx)(M, { className: "size-2 fill-current" }) })
	}), t]
}));
Dn.displayName = gn.displayName;
var On = o(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, N.jsx)(pn, {
	ref: r,
	className: m("px-2 py-1.5 text-control font-semibold", t && "pl-8", e),
	...n
}));
On.displayName = pn.displayName;
var kn = o(({ className: e, ...t }, n) => /* @__PURE__ */ (0, N.jsx)(vn, {
	ref: n,
	className: m("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
kn.displayName = vn.displayName;
var An = ({ className: e, ...t }) => /* @__PURE__ */ (0, N.jsx)("span", {
	className: m("ml-auto text-xs tracking-wider opacity-60", e),
	...t
});
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-tabs@1.1.16_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react@_80fa082efb8fcddc83bf2006e312ed1e/node_modules/@radix-ui/react-tabs/dist/index.mjs
An.displayName = "DropdownMenuShortcut", r();
var Q = "Tabs", [jn, Mn] = E(Q, [k]), Nn = k(), [Pn, Fn] = jn(Q), In = o((e, t) => {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = j(s), [d, f] = re({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: Q
	});
	return /* @__PURE__ */ (0, N.jsx)(Pn, {
		scope: n,
		baseId: S(),
		value: d,
		onValueChange: f,
		orientation: o,
		dir: u,
		activationMode: c,
		children: /* @__PURE__ */ (0, N.jsx)(C.div, {
			dir: u,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
});
In.displayName = Q;
var Ln = "TabsList", Rn = o((e, t) => {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = Fn(Ln, n), o = Nn(n);
	return /* @__PURE__ */ (0, N.jsx)(ue, {
		asChild: !0,
		...o,
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ (0, N.jsx)(C.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
});
Rn.displayName = Ln;
var zn = "TabsTrigger", Bn = o((e, t) => {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = Fn(zn, n), s = Nn(n), c = Un(o.baseId, r), l = Wn(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ (0, N.jsx)(A, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ (0, N.jsx)(C.button, {
			type: "button",
			role: "tab",
			"aria-selected": u,
			"aria-controls": l,
			"data-state": u ? "active" : "inactive",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			id: c,
			...a,
			ref: t,
			onMouseDown: g(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? o.onValueChange(r) : e.preventDefault();
			}),
			onKeyDown: g(e.onKeyDown, (e) => {
				[" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: g(e.onFocus, () => {
				let e = o.activationMode !== "manual";
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
});
Bn.displayName = zn;
var Vn = "TabsContent", Hn = o((e, t) => {
	let { __scopeTabs: n, value: r, forceMount: i, children: a, ...o } = e, l = Fn(Vn, n), u = Un(l.baseId, r), d = Wn(l.baseId, r), f = r === l.value, p = c(f);
	return s(() => {
		let e = requestAnimationFrame(() => p.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ (0, N.jsx)(h, {
		present: i || f,
		children: ({ present: n }) => /* @__PURE__ */ (0, N.jsx)(C.div, {
			"data-state": f ? "active" : "inactive",
			"data-orientation": l.orientation,
			role: "tabpanel",
			"aria-labelledby": u,
			hidden: !n,
			id: d,
			tabIndex: 0,
			...o,
			ref: t,
			style: {
				...e.style,
				animationDuration: p.current ? "0s" : void 0
			},
			children: n && a
		})
	});
});
Hn.displayName = Vn;
function Un(e, t) {
	return `${e}-trigger-${t}`;
}
function Wn(e, t) {
	return `${e}-content-${t}`;
}
var Gn = In, Kn = Rn, qn = Bn, Jn = Hn;
//#endregion
//#region ../shade/es/components/ui/tabs.js
r();
var $ = n("segmented");
d("", {
	variants: { variant: {
		segmented: "",
		"segmented-sm": "",
		button: "",
		"button-sm": "",
		underline: "",
		navbar: "",
		pill: "",
		kpis: ""
	} },
	defaultVariants: { variant: "segmented" }
});
var Yn = o(({ variant: e = "segmented", ...t }, n) => /* @__PURE__ */ (0, N.jsx)($.Provider, {
	value: e,
	children: /* @__PURE__ */ (0, N.jsx)(Gn, {
		ref: n,
		...t
	})
}));
Yn.displayName = Gn.displayName;
var Xn = d("inline-flex items-center text-muted-foreground", {
	variants: { variant: {
		segmented: "h-(--control-height) rounded-lg bg-muted px-[3px]",
		"segmented-sm": "h-8 rounded-lg bg-muted px-[3px]",
		button: "gap-2",
		"button-sm": "gap-1",
		underline: "no-scrollbar w-full max-w-full gap-5 overflow-x-auto border-b border-border-default",
		navbar: "h-[52px] items-end gap-6",
		pill: "-ml-0.5 h-[30px] gap-px",
		kpis: "border-b ring-0"
	} },
	defaultVariants: { variant: "segmented" }
}), Zn = o(({ className: e, ...n }, r) => {
	let i = t($);
	return /* @__PURE__ */ (0, N.jsx)(Kn, {
		ref: r,
		className: m(Xn({
			variant: i,
			className: e
		})),
		...n
	});
});
Zn.displayName = Kn.displayName;
var Qn = d("inline-flex items-center justify-center px-3 py-1 whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: { variant: {
		segmented: "h-7 rounded-md text-control font-medium data-[state=active]:shadow-md",
		"segmented-sm": "h-[26px] rounded-md text-sm font-medium data-[state=active]:shadow-md",
		button: "h-(--control-height) gap-1.5 rounded-md py-2 text-control font-medium hover:bg-tab-hover data-[state=active]:bg-tab-active data-[state=active]:hover:bg-tab-active",
		"button-sm": "h-6 gap-1.5 rounded-md p-2 text-sm font-medium text-text-secondary hover:bg-tab-hover data-[state=active]:bg-tab-active data-[state=active]:text-foreground data-[state=active]:hover:bg-tab-active",
		underline: "relative h-9 px-0 text-control font-semibold text-text-secondary after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[\"\"] hover:after:opacity-10 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!",
		navbar: "relative h-[52px] px-px text-control font-semibold text-muted-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[\"\"] hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:after:opacity-100!",
		pill: "relative h-[30px] rounded-md px-3 text-control font-medium text-text-secondary hover:bg-tab-hover hover:text-foreground data-[state=active]:bg-tab-active data-[state=active]:text-foreground data-[state=active]:hover:bg-tab-active",
		kpis: "relative h-full! items-start! rounded-none border-border bg-transparent px-6 py-5 text-foreground ring-0 transition-all after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-foreground after:opacity-0 after:content-[\"\"] first:rounded-tl-md last:rounded-tr-md hover:bg-interactive-hover data-[state=active]:bg-transparent data-[state=active]:after:opacity-100 [&:not(:last-child)]:border-r [&[data-state=active]_[data-type=\"value\"]]:text-foreground"
	} },
	defaultVariants: { variant: "segmented" }
}), $n = o(({ className: e, onMouseDownCapture: n, ...r }, i) => {
	let a = t($);
	return /* @__PURE__ */ (0, N.jsx)(qn, {
		ref: i,
		className: m(Qn({
			variant: a,
			className: e
		})),
		onMouseDownCapture: (e) => {
			let t = document.activeElement;
			t instanceof HTMLElement && t.matches("input, textarea, select, [contenteditable=\"true\"]") && t.blur(), n?.(e);
		},
		...r
	});
});
$n.displayName = qn.displayName;
var er = ({ className: e = "", children: t }) => /* @__PURE__ */ (0, N.jsx)("span", {
	className: m("mt-px ml-1.5 flex h-5 items-center justify-center rounded-full bg-secondary px-1.5 py-0 text-xs leading-[21px] font-semibold text-text-secondary", e),
	children: t
});
er.displayName = "TabsTriggerCount";
var tr = d("ring-offset-background focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:outline-hidden", {
	variants: { variant: {
		segmented: "",
		"segmented-sm": "",
		button: "",
		"button-sm": "",
		underline: "",
		navbar: "",
		pill: "",
		kpis: "ring-0"
	} },
	defaultVariants: { variant: "segmented" }
}), nr = o(({ className: e, ...n }, r) => {
	let i = t($);
	return /* @__PURE__ */ (0, N.jsx)(Jn, {
		ref: r,
		className: m(tr({
			variant: i,
			className: e
		})),
		...n
	});
});
nr.displayName = Jn.displayName;
var rr = o(({ children: e, className: n, ...r }, i) => {
	let a = t($);
	return /* @__PURE__ */ (0, N.jsxs)("div", {
		className: "relative rounded-md hover:bg-tab-hover",
		children: [/* @__PURE__ */ (0, N.jsx)(qn, {
			ref: i,
			className: m(Qn({
				variant: a,
				className: n
			})),
			...r,
			children: /* @__PURE__ */ (0, N.jsx)("div", {
				className: "flex items-center gap-2",
				children: e
			})
		}), /* @__PURE__ */ (0, N.jsx)(xn, {
			className: "absolute inset-0 size-full cursor-pointer",
			onClick: (e) => {
				e.preventDefault();
			}
		})]
	});
});
rr.displayName = "TabsDropdownTrigger";
//#endregion
export { er as a, $n as i, nr as n, Zn as r, Yn as t };

//# sourceMappingURL=tabs-Dxk-b9M-.js.map