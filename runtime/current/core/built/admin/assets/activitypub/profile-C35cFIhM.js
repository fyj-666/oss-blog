import { S as e, T as t, a as n, d as r, g as i, v as a, w as o } from "./_react-D4KM8XEu.js";
import { S as s, d as c, s as l } from "./chunk-KS7C4IRE-Ck3O4oo2.js";
import { o as u } from "./users-BjcoP_HC.js";
import { i as d, o as f, r as p, t as m, v as h, w as g } from "./use-navigate-with-base-path-Bmk5h4lW.js";
import { E as _, I as v, L as y, T as b, Y as ee, Z as x, a as S, c as te, i as C, q as w, s as ne } from "./use-activity-pub-queries-CV50qe03.js";
import { A as T, B as E, C as D, D as re, E as O, G as k, H as A, J as j, K as ie, L as M, M as ae, N, Q as oe, R as se, U as P, V as F, W as I, X as ce, Y as L, a as le, c as R, ct as ue, dt as de, g as z, i as fe, k as B, mt as pe, n as me, nt as he, q as V, r as ge, rt as _e, tt as ve, z as H } from "./routes-BD4vscyc.js";
import { a as U, i as W } from "./avatar-DLPL3Abs.js";
import { r as G } from "./x-DbQZOLiI.js";
import { c as ye, i as be, l as K, o as xe, p as Se, s as Ce, u as q } from "./content-formatters-3rTHg3mp.js";
import { a as J, i as Y, n as X, r as we, t as Te } from "./tabs-Dxk-b9M-.js";
import { t as Ee } from "./copy-DIAOQoCZ.js";
import { t as De } from "./settings-BsMROdqh.js";
import { t as Oe } from "./separator-BbQqTm-p.js";
import { t as ke } from "./edit-profile-BqtfzxCp.js";
import "./layout-2-0bw6HN.js";
var Ae = f("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]), je = f("user-round-x", [
	["path", {
		d: "M2 21a8 8 0 0 1 11.873-7",
		key: "74fkxq"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "m17 17 5 5",
		key: "p7ous7"
	}],
	["path", {
		d: "m22 17-5 5",
		key: "gqnmv0"
	}]
]);
//#endregion
//#region src/utils/get-name.ts
r();
function Me(e) {
	return typeof e.name == "string" ? e.name : typeof e.preferredUsername == "string" ? e.preferredUsername : typeof e.preferredUsername == "object" && e.preferredUsername !== null && "@value" in e.preferredUsername && typeof e.preferredUsername["@value"] == "string" ? e.preferredUsername["@value"] : "Unknown";
}
//#endregion
//#region src/views/profile/components/actor-list.tsx
var Z = s(), Ne = ({ noResultsMessage: e, actors: t, isLoading: r, fetchNextPage: i, hasNextPage: s, isFetchingNextPage: c }) => {
	let { data: l } = S("index", "me"), u = o(null), d = o(null);
	a(() => (u.current && u.current.disconnect(), u.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && s && !c && i();
	}), d.current && u.current.observe(d.current), () => {
		u.current && u.current.disconnect();
	}), [
		s,
		c,
		i
	]);
	let f = m();
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "pt-3",
		"data-testid": "actor-list",
		children: [
			s === !1 && t.length === 0 ? /* @__PURE__ */ (0, Z.jsxs)(B, { children: [/* @__PURE__ */ (0, Z.jsx)(T, { children: /* @__PURE__ */ (0, Z.jsx)(ue, {}) }), e] }) : /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "flex flex-col",
				children: t.map(({ actor: e, isFollowing: t, blockedByMe: r, domainBlockedByMe: i }) => {
					let a = K(e), o = a === l?.handle;
					return /* @__PURE__ */ (0, Z.jsx)(n.Fragment, { children: /* @__PURE__ */ (0, Z.jsx)(O, {
						actor: e,
						align: "center",
						isCurrentUser: o,
						side: "left",
						children: /* @__PURE__ */ (0, Z.jsx)("div", { children: /* @__PURE__ */ (0, Z.jsxs)(R, {
							"data-testid": "actor-item",
							onClick: () => {
								D(e, f);
							},
							children: [
								/* @__PURE__ */ (0, Z.jsx)(ye, { author: e }),
								/* @__PURE__ */ (0, Z.jsx)("div", { children: /* @__PURE__ */ (0, Z.jsxs)("div", {
									className: "break-anywhere text-gray-600",
									children: [/* @__PURE__ */ (0, Z.jsx)("span", {
										className: "mr-1 line-clamp-1 font-bold text-black dark:text-white",
										children: Me(e)
									}), /* @__PURE__ */ (0, Z.jsx)("div", {
										className: "line-clamp-1 text-sm",
										children: a
									})]
								}) }),
								r || i ? /* @__PURE__ */ (0, Z.jsx)(p, {
									className: "pointer-events-none ml-auto min-w-[90px]",
									variant: "destructive",
									children: "Blocked"
								}) : o ? null : /* @__PURE__ */ (0, Z.jsx)(re, {
									className: "ml-auto",
									"data-testid": "follow-button",
									following: t,
									handle: a,
									type: "secondary"
								})
							]
						}, e.id) })
					}) }, e.id);
				})
			}),
			/* @__PURE__ */ (0, Z.jsx)("div", {
				ref: d,
				className: "h-1"
			}),
			(c || r) && /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "mt-6 flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, Z.jsx)(N, { size: "md" })
			})
		]
	});
};
//#endregion
//#region src/views/profile/components/likes.tsx
r();
var Q = ({ posts: e, fetchNextPage: t, hasNextPage: n, isFetchingNextPage: r, isLoading: i }) => {
	let s = o(null), c = o(null), l = o(null), u = Math.max(0, Math.floor(e.length * .75) - 1);
	a(() => (s.current && s.current.disconnect(), s.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && n && !r && t();
	}), c.current && s.current.observe(c.current), l.current && s.current.observe(l.current), () => {
		s.current && s.current.disconnect();
	}), [
		n,
		r,
		t
	]);
	let d = m();
	return /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [
		n === !1 && e.length === 0 && /* @__PURE__ */ (0, Z.jsxs)(B, { children: [/* @__PURE__ */ (0, Z.jsx)(T, { children: /* @__PURE__ */ (0, Z.jsx)(U, {}) }), "You haven't liked anything yet."] }),
		/* @__PURE__ */ (0, Z.jsxs)("ul", {
			className: "mx-auto flex max-w-[640px] flex-col",
			"data-testid": "profile-likes-list",
			children: [e.map((t, n) => /* @__PURE__ */ (0, Z.jsxs)("li", {
				"data-testid": "profile-like-item",
				"data-test-view-article": !0,
				children: [
					/* @__PURE__ */ (0, Z.jsx)(z, {
						actor: t.actor,
						allowDelete: t.object.authored,
						commentCount: t.object.replyCount,
						isLoading: i,
						layout: "feed",
						likeCount: t.object.likeCount,
						object: t.object,
						repostCount: t.object.repostCount,
						type: t.type,
						onClick: () => {
							t.object.type === "Note" ? d(`/notes/${encodeURIComponent(t.object.id)}`) : t.object.type === "Article" && d(`/reader/${encodeURIComponent(t.object.id)}`);
						}
					}),
					n < e.length - 1 && /* @__PURE__ */ (0, Z.jsx)(Oe, {}),
					n === u && /* @__PURE__ */ (0, Z.jsx)("div", {
						ref: c,
						className: "h-1"
					})
				]
			}, `likes-${t.id}`)), r && /* @__PURE__ */ (0, Z.jsx)("li", {
				className: "flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, Z.jsx)(N, { size: "md" })
			})]
		}),
		/* @__PURE__ */ (0, Z.jsx)("div", {
			ref: l,
			className: "h-1"
		})
	] });
};
//#endregion
//#region src/views/profile/components/posts.tsx
r();
var Pe = ({ posts: e, fetchNextPage: t, hasNextPage: n, isFetchingNextPage: r, isLoading: i, noResultsMessage: s }) => {
	let c = o(null), l = o(null), u = o(null), d = Math.max(0, Math.floor(e.length * .75) - 1);
	a(() => (c.current && c.current.disconnect(), c.current = new IntersectionObserver((e) => {
		e[0].isIntersecting && n && !r && t();
	}), l.current && c.current.observe(l.current), u.current && c.current.observe(u.current), () => {
		c.current && c.current.disconnect();
	}), [
		n,
		r,
		t
	]);
	let f = m();
	return /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [
		n === !1 && e.length === 0 && /* @__PURE__ */ (0, Z.jsxs)(B, { children: [/* @__PURE__ */ (0, Z.jsx)(T, { children: /* @__PURE__ */ (0, Z.jsx)(Ae, {}) }), s] }),
		/* @__PURE__ */ (0, Z.jsxs)("ul", {
			className: "mx-auto flex max-w-[640px] flex-col",
			"data-testid": "profile-posts-list",
			children: [e.map((t, n) => /* @__PURE__ */ (0, Z.jsxs)("li", {
				"data-testid": "profile-post-item",
				"data-test-view-article": !0,
				children: [
					/* @__PURE__ */ (0, Z.jsx)(z, {
						actor: t.actor,
						allowDelete: t.object.authored,
						commentCount: t.object.replyCount,
						isLoading: i,
						layout: "feed",
						likeCount: t.object.likeCount,
						object: t.object,
						repostCount: t.object.repostCount,
						type: t.type,
						onClick: () => {
							t.object.type === "Note" ? f(`/notes/${encodeURIComponent(t.object.id)}`) : t.object.type === "Article" && f(`/reader/${encodeURIComponent(t.object.id)}`);
						}
					}),
					n < e.length - 1 && /* @__PURE__ */ (0, Z.jsx)(Oe, {}),
					n === d && /* @__PURE__ */ (0, Z.jsx)("div", {
						ref: l,
						className: "h-1"
					})
				]
			}, `posts-${t.id}`)), r && /* @__PURE__ */ (0, Z.jsx)("li", {
				className: "flex flex-col items-center justify-center gap-4 text-center",
				children: /* @__PURE__ */ (0, Z.jsx)(N, { size: "md" })
			})]
		}),
		/* @__PURE__ */ (0, Z.jsx)("div", {
			ref: u,
			className: "h-1"
		})
	] });
};
//#endregion
//#region src/views/profile/components/unblock-dialog.tsx
r();
var $ = ({ handle: e, isUserBlocked: n, isDomainBlocked: r, onUnblockUser: o, onUnblockDomain: s, trigger: c, onUnblockComplete: l, isOpen: d, onOpenChange: f }) => {
	let [m, h] = t(!1), [g, _] = t(() => {
		let e = n && r, t = n && !r, i = !n && r, a = "idle";
		return e ? a = "dual" : t ? a = "userOnly" : i && (a = "domainOnly"), {
			mode: a,
			userUnblocked: !1,
			domainUnblocked: !1
		};
	}), v = d !== void 0, y = v ? d : m, [b, ee] = t(!1), S = i(() => {
		let e = n && r, t = n && !r, i = !n && r, a = "idle";
		e ? a = "dual" : t ? a = "userOnly" : i && (a = "domainOnly"), _((e) => ({
			...e,
			mode: a,
			userUnblocked: !1,
			domainUnblocked: !1
		}));
	}, [n, r]);
	a(() => {
		y && !b ? (S(), ee(!0)) : y || ee(!1);
	}, [
		y,
		b,
		S
	]);
	let te = () => {
		v ? f?.(!0) : h(!0);
	}, C = (e) => {
		e || (v ? f?.(!1) : h(!1));
	}, w = async () => {
		await o(), _((e) => ({
			...e,
			userUnblocked: !0
		})), (g.mode !== "dual" || g.domainUnblocked) && (C(!1), l?.()), u.success("User unblocked");
	}, ne = async () => {
		await s(), _((e) => ({
			...e,
			domainUnblocked: !0
		})), (g.mode !== "dual" || g.userUnblocked) && (C(!1), l?.()), u.success("Domain unblocked");
	}, T = e.split("@").filter(Boolean)[1];
	return /* @__PURE__ */ (0, Z.jsxs)(M, {
		open: y,
		onOpenChange: C,
		children: [c && /* @__PURE__ */ (0, Z.jsx)(k, {
			asChild: !0,
			onClick: te,
			children: c
		}), /* @__PURE__ */ (0, Z.jsx)(E, {
			className: `${g.mode === "dual" && "max-w-[600px]"}`,
			children: g.mode === "dual" ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)(P, { children: [/* @__PURE__ */ (0, Z.jsx)(I, {
				className: "mb-1 flex flex-col gap-1",
				children: "Unblock"
			}), /* @__PURE__ */ (0, Z.jsx)(F, {
				className: "mt-4!",
				asChild: !0,
				children: /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex flex-col rounded-md border",
					children: [
						/* @__PURE__ */ (0, Z.jsxs)("div", {
							className: "flex justify-between gap-6 p-5",
							children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, Z.jsx)(x, { children: "Unblock user" }), /* @__PURE__ */ (0, Z.jsxs)("p", { children: [/* @__PURE__ */ (0, Z.jsx)("span", {
									className: "font-semibold text-black",
									children: e
								}), " will be able to follow you and engage with your public posts."] })]
							}), /* @__PURE__ */ (0, Z.jsxs)(p, {
								className: `gap-1 ${g.userUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`,
								variant: "outline",
								onClick: w,
								children: [/* @__PURE__ */ (0, Z.jsx)(W, {}), g.userUnblocked ? "User unblocked" : "Unblock user"]
							})]
						}),
						/* @__PURE__ */ (0, Z.jsx)("div", { className: "border-t" }),
						/* @__PURE__ */ (0, Z.jsxs)("div", {
							className: "flex justify-between gap-6 p-5",
							children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, Z.jsx)(x, { children: "Unblock domain" }), /* @__PURE__ */ (0, Z.jsxs)("p", { children: [
									"Users from ",
									/* @__PURE__ */ (0, Z.jsx)("span", {
										className: "font-semibold text-black",
										children: T
									}),
									" will be able to follow you and engage with your public posts."
								] })]
							}), /* @__PURE__ */ (0, Z.jsxs)(p, {
								className: `gap-1 ${g.domainUnblocked ? "pointer-events-none border-green bg-green text-white hover:bg-green hover:text-white" : "text-red hover:text-red-400"}`,
								variant: "outline",
								onClick: ne,
								children: [/* @__PURE__ */ (0, Z.jsx)(G, {}), g.domainUnblocked ? "Domain unblocked" : "Unblock domain"]
							})]
						})
					]
				})
			})] }), /* @__PURE__ */ (0, Z.jsx)(A, { children: /* @__PURE__ */ (0, Z.jsx)(p, {
				onClick: () => C(!1),
				children: "OK"
			}) })] }) : (() => {
				let t = g.mode === "userOnly";
				return /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)(P, { children: [/* @__PURE__ */ (0, Z.jsx)(I, {
					className: "mb-1 flex flex-col gap-1",
					children: t ? "Unblock this user?" : "Unblock this domain?"
				}), /* @__PURE__ */ (0, Z.jsx)(F, { children: t ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "font-semibold text-black",
					children: e
				}), " will be able to follow you and engage with your public posts."] }) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [
					"Users from ",
					/* @__PURE__ */ (0, Z.jsx)("span", {
						className: "font-semibold text-black",
						children: T
					}),
					" will be able to follow you and engage with your public posts."
				] }) })] }), /* @__PURE__ */ (0, Z.jsxs)(A, { children: [/* @__PURE__ */ (0, Z.jsx)(H, { children: "Cancel" }), /* @__PURE__ */ (0, Z.jsx)(p, {
					onClick: t ? w : ne,
					children: "Unblock"
				})] })] });
			})()
		})]
	});
};
//#endregion
//#region src/views/profile/components/profile-menu.tsx
r();
var Fe = ({ account: e, children: n, onCopyHandle: r, onBlockAccount: i, onBlockDomain: a, disabled: o = !1, isBlocked: s = !1, isDomainBlocked: c = !1 }) => {
	let [l, u] = t(null), [f, m] = t(!1), h = (e) => {
		e.stopPropagation(), r();
	}, g = (e) => {
		e.stopPropagation(), i();
	}, _ = (e) => {
		e.stopPropagation(), a();
	}, v = e?.handle, y = v?.split("@").filter(Boolean)[1];
	return /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsxs)(ie, { children: [/* @__PURE__ */ (0, Z.jsx)(L, {
		disabled: o,
		asChild: !0,
		onClick: (e) => e.stopPropagation(),
		children: n
	}), /* @__PURE__ */ (0, Z.jsx)(j, {
		align: "end",
		className: "p-2",
		children: /* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "flex w-48 flex-col",
			children: [/* @__PURE__ */ (0, Z.jsx)(V, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Z.jsx)(p, {
					className: "justify-start",
					variant: "ghost",
					onClick: h,
					children: "Copy handle"
				})
			}), /* @__PURE__ */ (0, Z.jsx)(V, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Z.jsx)(p, {
					className: "justify-start text-red hover:bg-red/5 hover:text-red",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), !s && !c && u("user"), m(!0);
					},
					children: s ? "Unblock user" : c ? "Unblock domain" : "Block user"
				})
			})]
		})
	})] }), s || c ? e && /* @__PURE__ */ (0, Z.jsx)($, {
		handle: e.handle,
		isDomainBlocked: e.domainBlockedByMe,
		isOpen: f,
		isUserBlocked: e.blockedByMe,
		onOpenChange: m,
		onUnblockDomain: a,
		onUnblockUser: i
	}) : /* @__PURE__ */ (0, Z.jsx)(M, {
		open: f,
		onOpenChange: m,
		children: /* @__PURE__ */ (0, Z.jsxs)(E, {
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, Z.jsxs)(P, { children: [/* @__PURE__ */ (0, Z.jsx)(I, {
				className: "mb-1 flex flex-col gap-1",
				children: l === "user" ? "Block this user?" : "Block this domain?"
			}), /* @__PURE__ */ (0, Z.jsx)(F, { children: l === "user" ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)("span", {
				className: "font-semibold text-black",
				children: v
			}), " will be able to see your public posts, but will no longer be able follow you or interact with your content on the social web."] }) : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [
				"All users from ",
				/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "font-semibold text-black",
					children: y
				}),
				" will be able to see your public posts, but won't be able to follow you or interact with your content."
			] }) })] }), /* @__PURE__ */ (0, Z.jsxs)(A, { children: [
				l !== "domain" && /* @__PURE__ */ (0, Z.jsx)(p, {
					className: "mr-auto -ml-3 hover:bg-transparent hover:opacity-80",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), u("domain");
					},
					children: "Block domain instead"
				}),
				/* @__PURE__ */ (0, Z.jsx)(H, {
					onClick: (e) => e.stopPropagation(),
					children: "Cancel"
				}),
				/* @__PURE__ */ (0, Z.jsx)(se, {
					className: d({ variant: "destructive" }),
					onClick: l === "user" ? g : _,
					children: "Block"
				})
			] })]
		})
	})] });
};
//#endregion
//#region src/views/profile/components/unblock-button.tsx
r();
var Ie = ({ account: e, onUnblock: n, onDomainUnblock: r, className: i = "" }) => {
	let [a, o] = t(!1), s = /* @__PURE__ */ (0, Z.jsx)(p, {
		className: `min-w-[90px] ${i}`,
		variant: "destructive",
		onMouseEnter: () => o(!0),
		onMouseLeave: () => o(!1),
		children: a ? "Unblock" : "Blocked"
	});
	return /* @__PURE__ */ (0, Z.jsx)($, {
		handle: e.handle,
		isDomainBlocked: e.domainBlockedByMe,
		isUserBlocked: e.blockedByMe,
		trigger: s,
		onUnblockDomain: r,
		onUnblockUser: n
	});
};
//#endregion
//#region src/views/profile/components/profile-page.tsx
r();
var Le = () => {}, Re = ({ account: n, customFields: r, isLoadingAccount: i, postsTab: s, likesTab: d, followingTab: f, followersTab: _ }) => {
	let b = c(), C = l(), w = m(), { canGoBack: E } = g(), D = b.handle ? `/profile/${b.handle}` : "/profile", O = !b.handle, k = b.handle ? b.tab || "" : C.pathname.split("/").pop() || "", A = e(() => O ? [
		"likes",
		"following",
		"followers"
	] : ["following", "followers"], [O]), j = A.includes(k) ? k : "posts", ie = te("index"), M = y("index"), N = ne("index"), se = v("index"), P = S("index", "me"), { data: F } = b.handle ? P : { data: void 0 }, I = b.handle === F?.handle || !b.handle, L = n?.blockedByMe, R = n?.domainBlockedByMe, [ue, z] = t(!1), [me, V] = t(!1), H = o(null);
	a(() => () => {
		H.current && window.clearTimeout(H.current);
	}, []);
	let U = () => {
		L ? M.mutate(n) : (ie.mutate(n), u.success("User blocked")), z(!1);
	}, W = () => {
		R ? se.mutate({
			url: n.apId,
			handle: n.handle
		}) : (N.mutate({
			url: n.apId,
			handle: n.handle
		}), u.success("Domain blocked")), z(!1);
	}, G = async () => {
		if (!n?.handle || !navigator?.clipboard?.writeText) {
			u.error("Unable to copy handle");
			return;
		}
		try {
			await navigator.clipboard.writeText(n.handle), V(!0), u.success("Handle copied"), H.current && window.clearTimeout(H.current), H.current = window.setTimeout(() => V(!1), 2e3);
		} catch {
			u.error("Failed to copy handle"), V(!1);
		}
	}, [K, Oe] = t(!1), [Ae, Me] = t(!1), Ne = () => {
		Oe(!K);
	}, Q = o(null), [Pe, $] = t(!1);
	a(() => {
		Q.current && $(Q.current.scrollHeight > 160);
	}, [
		K,
		n?.bio,
		r,
		i
	]), a(() => {
		k && (A.includes(k) || w(D, { replace: !0 }));
	}, [
		A,
		D,
		w,
		k
	]);
	let Re = (e) => e === "posts" ? D : `${D}/${e}`, ze = (e) => {
		e !== j && w(Re(e), { replace: !0 });
	};
	return !i && !n ? /* @__PURE__ */ (0, Z.jsx)(le, { children: /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "mx-auto mt-4 flex w-full max-w-[620px] flex-col items-center [&_svg]:translate-x-px",
		children: /* @__PURE__ */ (0, Z.jsxs)(fe, { children: [/* @__PURE__ */ (0, Z.jsx)(ge, { children: /* @__PURE__ */ (0, Z.jsx)(je, {}) }), /* @__PURE__ */ (0, Z.jsx)("div", { children: "Profile not found" })] })
	}) }) : /* @__PURE__ */ (0, Z.jsx)(le, { children: /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "z-0 mx-[max(-4vw,-24px)] -mt-9 flex flex-col items-center pb-16",
		children: /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "mx-auto w-full",
			children: /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [n?.bannerImageUrl ? /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "h-[15vw] min-h-[200px] w-full overflow-hidden bg-gradient-to-tr from-gray-200 to-gray-100",
				children: /* @__PURE__ */ (0, Z.jsx)("img", {
					alt: n?.name,
					className: "size-full object-cover",
					referrerPolicy: "no-referrer",
					src: n?.bannerImageUrl
				})
			}) : /* @__PURE__ */ (0, Z.jsx)("div", { className: "h-[max(8vw,132px)] w-full overflow-hidden bg-gradient-to-tr from-white to-white dark:from-black dark:to-black" }), /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: `mx-auto max-w-[620px] px-6 ${!n?.bannerImageUrl && !E ? "-mt-8" : "-mt-12"}`,
				children: [
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [
							/* @__PURE__ */ (0, Z.jsx)("div", {
								className: "-ml-2 rounded-full bg-white p-1 dark:bg-background",
								children: i ? /* @__PURE__ */ (0, Z.jsx)(q, { className: "size-[92px] rounded-full" }) : /* @__PURE__ */ (0, Z.jsx)(ye, {
									author: {
										icon: { url: n?.avatarUrl },
										name: n?.name,
										handle: n?.handle
									},
									size: "lg"
								})
							}),
							!I && !i && /* @__PURE__ */ (0, Z.jsxs)("div", {
								className: "flex gap-2",
								children: [L || R ? /* @__PURE__ */ (0, Z.jsx)(Ie, {
									account: n,
									onDomainUnblock: W,
									onUnblock: U
								}) : /* @__PURE__ */ (0, Z.jsx)(re, {
									following: n?.followedByMe,
									handle: n?.handle,
									type: "primary",
									onFollow: Le,
									onUnfollow: Le
								}), /* @__PURE__ */ (0, Z.jsx)(Fe, {
									account: n,
									isBlocked: L,
									isDomainBlocked: R,
									onBlockAccount: U,
									onBlockDomain: W,
									onCopyHandle: G,
									children: /* @__PURE__ */ (0, Z.jsx)(p, {
										"aria-label": "Open profile menu",
										variant: "outline",
										children: /* @__PURE__ */ (0, Z.jsx)(de, {})
									})
								})]
							}),
							I && !i && /* @__PURE__ */ (0, Z.jsxs)(ce, {
								open: Ae,
								onOpenChange: Me,
								children: [/* @__PURE__ */ (0, Z.jsx)(_e, { children: /* @__PURE__ */ (0, Z.jsx)(De, { children: /* @__PURE__ */ (0, Z.jsx)(p, {
									variant: "secondary",
									children: "Edit profile"
								}) }) }), /* @__PURE__ */ (0, Z.jsxs)(oe, {
									className: "w-full max-w-[520px]",
									onOpenAutoFocus: (e) => e.preventDefault(),
									children: [/* @__PURE__ */ (0, Z.jsx)(ve, { children: /* @__PURE__ */ (0, Z.jsx)(he, { children: "Profile settings" }) }), n && /* @__PURE__ */ (0, Z.jsx)(ke, {
										account: n,
										setIsEditingProfile: Me
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, Z.jsx)(ee, {
						className: "break-anywhere mt-4 truncate",
						children: i ? /* @__PURE__ */ (0, Z.jsx)(q, { className: "w-32" }) : n?.name
					}),
					/* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "mb-4 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Z.jsx)("a", {
								className: "inline-flex max-w-full truncate text-[1.5rem] text-gray-800 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-500",
								href: n?.url,
								rel: "noopener noreferrer",
								target: "_blank",
								children: /* @__PURE__ */ (0, Z.jsx)("span", {
									className: "truncate",
									children: i ? /* @__PURE__ */ (0, Z.jsx)(q, { className: "w-full max-w-56" }) : n?.handle
								})
							}),
							!i && /* @__PURE__ */ (0, Z.jsx)(p, {
								className: "-ml-1.5 size-6 p-0 text-gray-800 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-600",
								title: "Copy handle",
								variant: "link",
								onClick: G,
								children: me ? /* @__PURE__ */ (0, Z.jsx)(Se, { size: 16 }) : /* @__PURE__ */ (0, Z.jsx)(Ee, { size: 16 })
							}),
							n?.followsMe && !i && /* @__PURE__ */ (0, Z.jsx)(ae, {
								className: "mt-px whitespace-nowrap",
								variant: "secondary",
								children: "Follows you"
							})
						]
					}),
					(n?.bio || r?.length > 0) && /* @__PURE__ */ (0, Z.jsxs)("div", {
						ref: Q,
						className: `ap-profile-content break-anywhere relative text-[1.5rem] [&>p]:mb-3 ${K ? "max-h-none pb-7" : "max-h-[160px] overflow-hidden"} relative`,
						children: [
							i ? /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(q, {}), /* @__PURE__ */ (0, Z.jsx)(q, { className: "w-full max-w-48" })] }) : /* @__PURE__ */ (0, Z.jsx)("div", { dangerouslySetInnerHTML: { __html: xe(be(Ce(n?.bio ?? "", ["a", "br"]))) } }),
							r?.map((e) => /* @__PURE__ */ (0, Z.jsxs)("span", {
								className: "mt-3 line-clamp-1 flex flex-col text-[1.5rem]",
								children: [/* @__PURE__ */ (0, Z.jsx)("span", {
									className: "text-xs font-semibold",
									children: e.name
								}), /* @__PURE__ */ (0, Z.jsx)("span", {
									dangerouslySetInnerHTML: { __html: xe(e.value) },
									className: "ap-profile-content truncate"
								})]
							}, e.name)),
							!K && Pe && /* @__PURE__ */ (0, Z.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/100 via-60% to-transparent dark:from-black dark:via-black/100" }),
							Pe && /* @__PURE__ */ (0, Z.jsx)(p, {
								className: "absolute bottom-0 h-auto p-0 text-md",
								variant: "link",
								onClick: Ne,
								children: K ? "Show less" : "Show all"
							})
						]
					}),
					/* @__PURE__ */ (0, Z.jsxs)(Te, {
						className: "mt-5",
						value: j,
						variant: "underline",
						onValueChange: (e) => ze(e),
						children: [
							/* @__PURE__ */ (0, Z.jsxs)(we, { children: [
								/* @__PURE__ */ (0, Z.jsx)(Y, {
									value: "posts",
									children: "Posts"
								}),
								O && /* @__PURE__ */ (0, Z.jsxs)(Y, {
									value: "likes",
									children: ["Likes", /* @__PURE__ */ (0, Z.jsx)(J, { children: h(n?.likedCount || 0) })]
								}),
								/* @__PURE__ */ (0, Z.jsxs)(Y, {
									value: "following",
									children: ["Following", /* @__PURE__ */ (0, Z.jsx)(J, { children: h(n?.followingCount || 0) })]
								}),
								/* @__PURE__ */ (0, Z.jsxs)(Y, {
									value: "followers",
									children: ["Followers", /* @__PURE__ */ (0, Z.jsx)(J, { children: h(n?.followerCount || 0) })]
								})
							] }),
							/* @__PURE__ */ (0, Z.jsx)(X, {
								value: "posts",
								children: (L || R) && !ue ? /* @__PURE__ */ (0, Z.jsxs)(B, { children: [/* @__PURE__ */ (0, Z.jsx)(T, { children: /* @__PURE__ */ (0, Z.jsx)(pe, {}) }), /* @__PURE__ */ (0, Z.jsxs)("div", {
									className: "mt-2 flex flex-col items-center gap-0.5",
									children: [
										/* @__PURE__ */ (0, Z.jsxs)(x, { children: [n.name, " is blocked"] }),
										/* @__PURE__ */ (0, Z.jsx)("p", { children: "You can view the posts, but it won't unblock the user." }),
										/* @__PURE__ */ (0, Z.jsx)(p, {
											className: "mt-4",
											variant: "secondary",
											onClick: () => z(!0),
											children: "View posts"
										})
									]
								})] }) : s
							}),
							O && /* @__PURE__ */ (0, Z.jsx)(X, {
								value: "likes",
								children: d
							}),
							/* @__PURE__ */ (0, Z.jsx)(X, {
								value: "following",
								children: f
							}),
							/* @__PURE__ */ (0, Z.jsx)(X, {
								value: "followers",
								children: _
							})
						]
					}, b.handle || n?.handle || "current-user")
				]
			})] })
		})
	}) });
};
//#endregion
//#region src/views/profile/profile.tsx
r();
var ze = ({ handle: e }) => {
	let { postsByAccountQuery: t } = b(e || "me", { enabled: !0 }), { data: n, fetchNextPage: r, hasNextPage: i, isFetchingNextPage: a, isLoading: o } = t, s = n?.pages.flatMap((e) => e.posts) ?? Array.from({ length: 5 }, (e, t) => ({
		id: `placeholder-${t}`,
		object: {}
	}));
	return /* @__PURE__ */ (0, Z.jsx)(Pe, {
		fetchNextPage: r,
		hasNextPage: i,
		isFetchingNextPage: a,
		isLoading: o,
		noResultsMessage: e ? `${e} hasn't posted anything yet` : "You haven't posted anything yet.",
		posts: s
	});
}, Be = () => {
	let { postsLikedByAccountQuery: e } = _({ enabled: !0 }), { data: t, fetchNextPage: n, hasNextPage: r, isFetchingNextPage: i, isLoading: a } = e;
	return /* @__PURE__ */ (0, Z.jsx)(Q, {
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
		isLoading: a,
		posts: t?.pages.flatMap((e) => e.posts) ?? Array.from({ length: 5 }, (e, t) => ({
			id: `placeholder-${t}`,
			object: {}
		}))
	});
}, Ve = ({ handle: e }) => {
	let { data: t, fetchNextPage: n, hasNextPage: r, isFetchingNextPage: i, isLoading: a } = C(e === "" ? "me" : e, "following");
	return /* @__PURE__ */ (0, Z.jsx)(Ne, {
		actors: t?.pages.flatMap((e) => "following" in e ? e.following : "accounts" in e ? e.accounts.map((e) => ({
			actor: {
				id: e.id,
				name: e.name,
				handle: e.handle,
				icon: { url: e.avatarUrl }
			},
			isFollowing: e.isFollowing,
			blockedByMe: e.blockedByMe,
			domainBlockedByMe: e.domainBlockedByMe
		})) : []) ?? [],
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
		isLoading: a,
		noResultsMessage: `${e || "You"} have no following`
	});
}, He = ({ handle: e }) => {
	let { data: t, fetchNextPage: n, hasNextPage: r, isFetchingNextPage: i, isLoading: a } = C(e === "" ? "me" : e, "followers");
	return /* @__PURE__ */ (0, Z.jsx)(Ne, {
		actors: t?.pages.flatMap((e) => "followers" in e ? e.followers : "accounts" in e ? e.accounts.map((e) => ({
			actor: {
				id: e.id,
				name: e.name,
				handle: e.handle,
				icon: { url: e.avatarUrl }
			},
			isFollowing: e.isFollowing
		})) : []) ?? [],
		fetchNextPage: n,
		hasNextPage: r,
		isFetchingNextPage: i,
		isLoading: a,
		noResultsMessage: `${e || "You"} have no followers yet`
	});
}, Ue = () => {
	let e = c(), { data: t, isLoading: n, error: r, refetch: i } = S("index", e.handle || "me");
	if (a(() => {
		i();
	}, [e.handle, i]), r && w(r) && r.statusCode !== 404) return /* @__PURE__ */ (0, Z.jsx)(me, {
		errorCode: r.code,
		statusCode: r.statusCode
	});
	let o = Object.keys(t?.customFields || {}).map((e) => ({
		name: e,
		value: t.customFields[e]
	})) || [], s = /* @__PURE__ */ (0, Z.jsx)(ze, { handle: e.handle || "" }), l = /* @__PURE__ */ (0, Z.jsx)(Be, {}), u = /* @__PURE__ */ (0, Z.jsx)(Ve, { handle: e.handle || "" });
	return /* @__PURE__ */ (0, Z.jsx)(Re, {
		account: t,
		customFields: o,
		followersTab: /* @__PURE__ */ (0, Z.jsx)(He, { handle: e.handle || "" }),
		followingTab: u,
		isLoadingAccount: n,
		likesTab: l,
		postsTab: s
	});
};
//#endregion
export { Ue as default };

//# sourceMappingURL=profile-C35cFIhM.js.map