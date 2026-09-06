(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[598],{25305(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.cleanBasicHtml=function(e="",t={}){const r=Object.assign({},{},t)
if(!r.createDocument){const e="undefined"!=typeof DOMParser&&DOMParser||"undefined"!=typeof window&&window.DOMParser
if(!e)throw new Error("cleanBasicHtml() must be passed a `createDocument` function as an option when used in a non-browser environment")
r.createDocument=function(t){return(new e).parseFromString(t,"text/html")}}let a=e
if(r.allowBr&&"<br>"!==a||(a=a.replace(/<br\s?\/?>/g," ")),r.removeCodeWrappers&&(a=function(e){return e.replace(/<code\b[^>]*>((.*?){.*?}(.*?))<\/code>/gi,"$1")}(a)),a=a.replace(/(\s|&nbsp;){2,}/g," ").trim().replace(/^&nbsp;|&nbsp$/g,"").trim(),a){const e=r.createDocument(a)
if(""===e.body.textContent)return""
e.body.querySelectorAll("*").forEach(t=>{if(!t.textContent?.trim().replace(/\u200c+/g,"")){if(r.allowBr&&"BR"===t.tagName)return
if(r.allowBr&&t.querySelector("br"))return t.replaceWith(e.createElement("br"))
if(t.textContent&&t.textContent.length>0){const r=e.createTextNode(" ")
return t.replaceWith(r)}return t.remove()}}),a=r.firstChildInnerContent&&e.body.firstElementChild?e.body.firstElementChild.innerHTML.trim():e.body.innerHTML.trim()}return a}},27929(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.cleanBasicHtml=void 0
var a=r(25305)
Object.defineProperty(t,"cleanBasicHtml",{enumerable:!0,get:function(){return a.cleanBasicHtml}})},90724(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mobiledocToLexical=t.lexicalToMobiledoc=void 0
var a=r(34104)
Object.defineProperty(t,"lexicalToMobiledoc",{enumerable:!0,get:function(){return a.lexicalToMobiledoc}}),Object.defineProperty(t,"mobiledocToLexical",{enumerable:!0,get:function(){return a.mobiledocToLexical}})},34104(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mobiledocToLexical=t.lexicalToMobiledoc=void 0
const a=r(52217)
Object.defineProperty(t,"lexicalToMobiledoc",{enumerable:!0,get:function(){return a.lexicalToMobiledoc}})
const s=r(22297)
Object.defineProperty(t,"mobiledocToLexical",{enumerable:!0,get:function(){return s.mobiledocToLexical}})},52217(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.lexicalToMobiledoc=function(e){if(null==e||""===e)return JSON.stringify(s)
const t=JSON.parse(e)
if(!t.root)return JSON.stringify(s)
const n={version:r,ghostVersion:a,atoms:[],cards:[],markups:[],sections:[]}
return t.root.children?.forEach(e=>function(e,t){"paragraph"===e.type&&p(e,t),o.includes(e.type)&&p(e,t,e.tag),"quote"===e.type&&p(e,t,"blockquote"),"aside"===e.type&&p(e,t,"aside"),"list"===e.type&&function(e,t,r="ul"){const a=function(e,t){const r=[]
return function(e){const t=[];(function e(r){r.children?.forEach(r=>{r.children?.forEach(t=>{"list"===t.type&&(e(t),r.children.splice(r.children.indexOf(t),1))}),"listitem"===r.type&&r.children?.length&&t.push(r)})})(e),e.children=t}(e),e.children?.forEach(e=>{if("listitem"===e.type){const a=m(e,t)
r.push(a)}}),r}(e,t),s=[3,r,a]
t.sections.push(s)}(e,t,e.tag),u.includes(e.type)&&function(e,t){const r=e.type
let a=e.type
l[a]&&(a=l[a])
const s={}
for(const i of Object.keys(e))"type"!==i&&(s[i]=e[i])
if(c[r]){const e=c[r]
for(const[t,r]of Object.entries(e))s[r]=s[t],delete s[t]}const n=[a,s]
t.cards.push(n)
const o=[10,t.cards.length-1]
t.sections.push(o)}(e,t)}(e,n)),JSON.stringify(n)}
const r="0.3.1",a="4.0",s={version:r,ghostVersion:a,markups:[],atoms:[],cards:[],sections:[[1,"p",[[0,[],0,""]]]]},n=new Map([[1,"strong"],[2,"em"],[4,"s"],[8,"u"],[16,"code"],[32,"sub"],[64,"sup"]]),o=["heading","extended-heading"],i=["text","extended-text"],u=["audio","bookmark","button","callout","codeblock","email-cta","email","embed","file","gallery","header","horizontalrule","html","image","markdown","paywall","product","signup","toggle","video"],l={codeblock:"code",horizontalrule:"hr"},c={embed:{embedType:"type"}}
function d(e,t){let r=t.markups.findIndex(t=>t[0]===e)
return-1===r&&(t.markups.push([e]),r=t.markups.length-1),r}function p(e,t,r="p"){const a=[1,r,m(e,t)]
t.sections.push(a)}function m(e,t){const r=[]
if(e.children?.length){let a=[]
e.children.forEach((s,n)=>{if(i.includes(s.type))if(0!==s.format){const o=[]
let u=0
if(f(s.format).forEach(e=>{a.includes(e)||(a.push(e),o.push(e))}),e.children[n+1]&&i.includes(e.children[n+1].type)){const t=f(e.children[n+1].format),r=a.findIndex(e=>!t.includes(e));-1!==r&&(u=a.slice(r).length,a=a.slice(0,r))}else u=a.length,a=[]
const l=o.map(e=>d(e,t))
r.push([0,l,u,s.text])}else{const e=a.length
a=[],r.push([0,[],e,s.text])}if("link"===s.type){const e=["a",["href",s.url]],n=t.markups.push(e)-1
s.children?.forEach((o,i)=>{if(0!==o.format){const u=[],l=[]
0===i&&(a.push(e),u.push(n))
let c=0
if(f(o.format).forEach(e=>{a.includes(e)||(a.push(e),l.push(e))}),s.children[i+1]){const t=f(s.children[i+1].format),r=a.findIndex(r=>!(JSON.stringify(r)===JSON.stringify(e)||t.includes(r)));-1!==r&&(c=a.slice(r).length,a=a.slice(0,r))}else c=a.length,a=[]
u.push(...l.map(e=>d(e,t))),r.push([0,u,c,o.text])}else{const t=[]
0===i&&(a.push(e),t.push(n))
let u=a.length-1
s.children[i+1]||(u+=1,a=[]),r.push([0,t,u,o.text])}})}if("linebreak"===s.type){const e=function(e,t){let r=t.atoms.findIndex(t=>t===e)
return-1===r&&(t.atoms.push(e),r=t.atoms.length-1),r}(["soft-return","",{}],t)
r.push([1,[],0,e])}})}else r.push([0,[],0,""])
return r}function f(e){const t=[]
return n.forEach((r,a)=>{0!==(e&a)&&t.push(r)}),t}},22297(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mobiledocToLexical=function(e){if(null==e||""===e)return JSON.stringify(r)
const t=JSON.parse(e)
if(!t.sections)return JSON.stringify(r)
const a={root:{children:[],direction:null,format:"",indent:0,type:"root",version:1}}
return t.sections.forEach(e=>function(e,t,r){const a=e[0]
if(1===a){const a=function(e,t){const r=e[1],a=e[2],s=d(r)
return l(s,a,t),s}(e,t)
r.root.children.push(a),a.children&&a.children.length>0&&(r.root.direction="ltr")}else if(2===a);else if(3===a){const a=function(e,t){const r=e[1],a=e[2],s=d(r,{tag:r,type:"list",listType:"ul"===r?"bullet":"number",start:1,direction:"ltr"})
return a?.forEach((e,r)=>{const a=d("li",{type:"listitem",value:r+1,direction:"ltr"})
l(a,e,t),s.children.push(a)}),s}(e,t)
r.root.children.push(a),r.root.direction="ltr"}else if(10===a){const a=function(e,t){const r=e[1]
let[a,s]=t.cards[r]
if(a=o[a]||a,i[a]){const e=i[a]
for(const[t,r]of Object.entries(e))s[r]=s[t],delete s[t]}return u[a]&&(s=u[a](s)),delete s.type,{type:a,...s}}(e,t)
r.root.children.push(a)}}(e,t,a)),JSON.stringify(a)}
const r={root:{children:[],direction:null,format:"",indent:0,type:"root",version:1}},a={p:{type:"paragraph"},h1:{type:"heading",tag:"h1"},h2:{type:"heading",tag:"h2"},h3:{type:"heading",tag:"h3"},h4:{type:"heading",tag:"h4"},h5:{type:"heading",tag:"h5"},h6:{type:"heading",tag:"h6"},blockquote:{type:"quote"},aside:{type:"aside"},a:{type:"link",rel:null,target:null,title:null,url:null}},s={"soft-return":{type:"linebreak",version:1}},n={strong:1,b:1,em:2,i:2,s:4,u:8,code:16,sub:32,sup:64},o={code:"codeblock",hr:"horizontalrule"},i={embed:{type:"embedType"}},u={callout:e=>(e.backgroundColor&&!e.backgroundColor.match(/^[a-zA-Z\d-]+$/)&&(e.backgroundColor="white"),e)}
function l(e,t,r){const a=r.markups,n=r.atoms,o=[]
let i,u,l,f=!1
for(let h=0;h<t.length;h++){const[r,g,y,b]=t[h]
if("atom"==(0===r?"markup":"atom")){const t=n[b][0]
p(e,s[t])
continue}if(g.forEach(e=>{const t=a[e]
if("a"===t[0]){f=!0
const e=t[1]
e&&"href"===e[0]&&(u=e[1]),e&&"rel"===e[2]&&(l=e[3])}o.push(t)}),void 0!==b){const t=m(o)
f?(i=void 0!==i?i:d("a",{url:u,rel:l||null}),p(i,c(b,t))):p(e,c(b,t))}for(let t=0;t<y;t++){const t=o.pop()
t&&"a"===t[0]&&(p(e,i),f=!1,u=void 0,i=void 0)}}}function c(e,t){return{detail:0,format:t,mode:"normal",style:"",text:e,type:"text",version:1}}function d(e,t={}){const r=a[e]
return{children:[],direction:"ltr",format:"",indent:0,...r,...t,type:r?.type||t.type||e,version:1}}function p(e,t){t&&(e.children.push(t),t&&"text"in t&&t.text&&(e.direction="ltr"))}function m(e){let t=0
return e.forEach(e=>{const r=e[0]
r in n&&(t|=n[r])}),t}},54551(e,t,r){var a={"./af":1199,"./af.js":1199,"./ar":36347,"./ar-dz":77230,"./ar-dz.js":77230,"./ar-kw":63390,"./ar-kw.js":63390,"./ar-ly":65283,"./ar-ly.js":65283,"./ar-ma":30570,"./ar-ma.js":30570,"./ar-ps":15505,"./ar-ps.js":15505,"./ar-sa":94112,"./ar-sa.js":94112,"./ar-tn":20386,"./ar-tn.js":20386,"./ar.js":36347,"./az":2067,"./az.js":2067,"./be":2405,"./be.js":2405,"./bg":77091,"./bg.js":77091,"./bm":36429,"./bm.js":36429,"./bn":88548,"./bn-bd":62919,"./bn-bd.js":62919,"./bn.js":88548,"./bo":94219,"./bo.js":94219,"./br":89248,"./br.js":89248,"./bs":30551,"./bs.js":30551,"./ca":36e3,"./ca.js":36e3,"./cs":46330,"./cs.js":46330,"./cv":32805,"./cv.js":32805,"./cy":51096,"./cy.js":51096,"./da":96035,"./da.js":96035,"./de":3015,"./de-at":30917,"./de-at.js":30917,"./de-ch":24475,"./de-ch.js":24475,"./de.js":3015,"./dv":29706,"./dv.js":29706,"./el":95637,"./el.js":95637,"./en-au":33146,"./en-au.js":33146,"./en-ca":45800,"./en-ca.js":45800,"./en-gb":2053,"./en-gb.js":2053,"./en-ie":86274,"./en-ie.js":86274,"./en-il":53993,"./en-il.js":53993,"./en-in":2663,"./en-in.js":2663,"./en-nz":38060,"./en-nz.js":38060,"./en-sg":95022,"./en-sg.js":95022,"./eo":14060,"./eo.js":14060,"./es":44920,"./es-do":98508,"./es-do.js":98508,"./es-mx":22604,"./es-mx.js":22604,"./es-us":75269,"./es-us.js":75269,"./es.js":44920,"./et":85773,"./et.js":85773,"./eu":75598,"./eu.js":75598,"./fa":17933,"./fa.js":17933,"./fi":83909,"./fi.js":83909,"./fil":80893,"./fil.js":80893,"./fo":24455,"./fo.js":24455,"./fr":49940,"./fr-ca":53317,"./fr-ca.js":53317,"./fr-ch":77678,"./fr-ch.js":77678,"./fr.js":49940,"./fy":53429,"./fy.js":53429,"./ga":96692,"./ga.js":96692,"./gd":72511,"./gd.js":72511,"./gl":82103,"./gl.js":82103,"./gom-deva":33906,"./gom-deva.js":33906,"./gom-latn":96893,"./gom-latn.js":96893,"./gu":55896,"./gu.js":55896,"./he":98755,"./he.js":98755,"./hi":46639,"./hi.js":46639,"./hr":9130,"./hr.js":9130,"./hu":29171,"./hu.js":29171,"./hy-am":26406,"./hy-am.js":26406,"./id":74694,"./id.js":74694,"./is":24220,"./is.js":24220,"./it":72681,"./it-ch":40757,"./it-ch.js":40757,"./it.js":72681,"./ja":33649,"./ja.js":33649,"./jv":75572,"./jv.js":75572,"./ka":14824,"./ka.js":14824,"./kk":81770,"./kk.js":81770,"./km":35724,"./km.js":35724,"./kn":94005,"./kn.js":94005,"./ko":65814,"./ko.js":65814,"./ku":17028,"./ku-kmr":25683,"./ku-kmr.js":25683,"./ku.js":17028,"./ky":23984,"./ky.js":23984,"./lb":21038,"./lb.js":21038,"./lo":4009,"./lo.js":4009,"./lt":27208,"./lt.js":27208,"./lv":53970,"./lv.js":53970,"./me":13030,"./me.js":13030,"./mi":51413,"./mi.js":51413,"./mk":85336,"./mk.js":85336,"./ml":26189,"./ml.js":26189,"./mn":17227,"./mn.js":17227,"./mr":1975,"./mr.js":1975,"./ms":12256,"./ms-my":87323,"./ms-my.js":87323,"./ms.js":12256,"./mt":36053,"./mt.js":36053,"./my":1042,"./my.js":1042,"./nb":1228,"./nb.js":1228,"./ne":60057,"./ne.js":60057,"./nl":31442,"./nl-be":17014,"./nl-be.js":17014,"./nl.js":31442,"./nn":46152,"./nn.js":46152,"./oc-lnc":62100,"./oc-lnc.js":62100,"./pa-in":41771,"./pa-in.js":41771,"./pl":6300,"./pl.js":6300,"./pt":88340,"./pt-br":20645,"./pt-br.js":20645,"./pt.js":88340,"./ro":15195,"./ro.js":15195,"./ru":75813,"./ru.js":75813,"./sd":62339,"./sd.js":62339,"./se":6876,"./se.js":6876,"./si":41176,"./si.js":41176,"./sk":52930,"./sk.js":52930,"./sl":38891,"./sl.js":38891,"./sq":91392,"./sq.js":91392,"./sr":28025,"./sr-cyrl":50808,"./sr-cyrl.js":50808,"./sr.js":28025,"./ss":38538,"./ss.js":38538,"./sv":50773,"./sv.js":50773,"./sw":22582,"./sw.js":22582,"./ta":23155,"./ta.js":23155,"./te":27863,"./te.js":27863,"./tet":29464,"./tet.js":29464,"./tg":58425,"./tg.js":58425,"./th":9492,"./th.js":9492,"./tk":21341,"./tk.js":21341,"./tl-ph":37317,"./tl-ph.js":37317,"./tlh":59394,"./tlh.js":59394,"./tr":15622,"./tr.js":15622,"./tzl":26952,"./tzl.js":26952,"./tzm":61567,"./tzm-latn":83753,"./tzm-latn.js":83753,"./tzm.js":61567,"./ug-cn":34856,"./ug-cn.js":34856,"./uk":40816,"./uk.js":40816,"./ur":25695,"./ur.js":25695,"./uz":51639,"./uz-latn":15521,"./uz-latn.js":15521,"./uz.js":51639,"./vi":80885,"./vi.js":80885,"./x-pseudo":97765,"./x-pseudo.js":97765,"./yo":93592,"./yo.js":93592,"./zh-cn":71922,"./zh-cn.js":71922,"./zh-hk":37406,"./zh-hk.js":37406,"./zh-mo":81043,"./zh-mo.js":81043,"./zh-tw":72998,"./zh-tw.js":72998}
function s(e){var t=n(e)
return r(t)}function n(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=54551},86147(){},21901(){},32712(e,t){window._eai_r=require,window._eai_d=define},82211(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var a="ConfigResponseType",s=a,n=r(90665).createQuery({dataType:a,path:"/config/"}),o="/pro"
t.DEFAULT_UPGRADE_ROUTE=o,t.configDataType=s,t.hasSendingDomain=e=>{const t=e?.hostSettings?.managedEmail?.sendingDomain
return"string"==typeof t&&t.length>0},t.isManagedEmail=e=>!!e?.hostSettings?.managedEmail?.enabled,t.sendingDomain=e=>e?.hostSettings?.managedEmail?.sendingDomain,t.upgradeRoute=e=>{const t=e?.hostSettings?.billing?.upgradeUrl
return t?t.replace(/^#/,""):o},t.useBrowseConfig=n},48808(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(51184),s=r(79522)
let n=r(6841),o=r(80576)
var i="UsersResponseType",u=s.apiUrl("/users/me/",{include:"roles"}),l=[i,u]
t.currentUserQueryKey=l,t.useCurrentUser=()=>{const e=s.useFetchApi(),t=a(),r=(0,n.useQuery)({queryKey:l,queryFn:()=>e(u),select:e=>e.users[0]})
return(0,o.useEffect)(()=>{r.error&&t(r.error)},[t,r.error]),r},t.usersDataType=i},16757(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(90665),s=r(72215)
var n="InvitesResponseType",o=a.createInfiniteQuery({dataType:n,path:"/invites/",permissions:["Owner","Administrator"],defaultSearchParams:{limit:"100",include:"roles"},defaultNextPageParams:(e,t)=>({...t,page:(e.meta?.pagination.next||1).toString()}),returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.invites),a=t[t.length-1].meta
return{invites:r,meta:a,isEnd:!a||a.pagination.pages===a.pagination.page}}}),i=a.createMutation({method:"POST",path:()=>"/invites/",body:({email:e,roleId:t})=>({invites:[{email:e,role_id:t,expires:null,status:null,token:null}]}),updateQueries:{dataType:n,emberUpdateType:"createOrUpdate",update:s.insertToQueryCache("invites")}}),u=a.createMutation({path:e=>`/invites/${e}/`,method:"DELETE",updateQueries:{dataType:n,emberUpdateType:"delete",update:s.deleteFromQueryCache("invites")}})
t.useAddInvite=i,t.useBrowseInvites=o,t.useDeleteInvite=u},77898(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(79522),s=r(48808),n=r(90665),o=r(28091)
let i=r(6841),u=r(80576)
var l="MembersResponseType",c="/members/",d={limit:"1"},p=()=>[l,a.apiUrl(c,d)],m=n.createQuery({dataType:l,path:c}),f=n.createQuery({dataType:l,path:c,defaultSearchParams:d}),h=n.createMutation({method:"POST",path:()=>"/members/",body:e=>({members:[e]}),invalidateQueries:{dataType:l}}),g=n.createMutation({method:"POST",retry:!1,path:()=>"/members/upload/",body:function({file:e,labels:t=[],mapping:r={}}){const a=new FormData
a.append("membersfile",e)
for(const s of t)a.append("labels",s)
for(const[s,n]of Object.entries(r))"string"==typeof n&&a.append(`mapping[${s}]`,n)
return a},invalidateQueries:{dataType:l}}),y=n.createQueryWithId({dataType:l,path:e=>`/members/${e}/`}),b=n.createMutation({method:"POST",path:({id:e})=>`/members/${e}/commenting/disable`,body:({reason:e,hideComments:t})=>({reason:e,hide_comments:t}),invalidateQueries:{dataType:["CommentsResponseType",l]}}),w=n.createMutation({method:"POST",path:({id:e})=>`/members/${e}/commenting/enable`,body:()=>({}),invalidateQueries:{dataType:["CommentsResponseType",l]}}),v=n.createInfiniteQuery({dataType:l,path:c,defaultSearchParams:{include:"labels,tiers",limit:"100",order:"created_at desc"},defaultNextPageParams:(e,t)=>{if(e.meta?.pagination.next)return{...t,page:e.meta.pagination.next.toString()}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.members),a=t[t.length-1].meta
return{members:r,meta:a,isEnd:!a||a.pagination.pages===a.pagination.page}}})
function j({filter:e,search:t,all:r}){if(!r&&!e&&!t)throw new Error("Bulk operation requires a filter, search, or all flag")
const a={}
return r&&(a.all="true"),e&&(a.filter=e),t&&(a.search=t),a}var T=n.createMutation({method:"PUT",path:()=>"/members/bulk/",body:({action:e})=>({bulk:{action:e.type,meta:e.meta||{},newsletter:e.newsletter}}),searchParams:j,invalidateQueries:{dataType:l}}),E=n.createMutation({method:"DELETE",path:()=>"/members/",searchParams:j,invalidateQueries:{dataType:l}}),S=n.createMutation({method:"PUT",path:({id:e})=>`/members/${e}/`,searchParams:()=>({include:"tiers,metafields"}),body:({id:e,...t})=>({members:[{id:e,...t}]}),invalidateQueries:{dataType:l}}),P=n.createMutation({method:"DELETE",path:({id:e})=>`/members/${e}/`,searchParams:({cancel:e})=>({cancel:e?"true":"false"}),invalidateQueries:{dataType:l}}),M=n.createQueryWithId({dataType:"MemberSigninUrlResponseType",path:e=>`/members/${e}/signin_urls/`,returnData:e=>e.member_signin_urls?.[0]??{member_id:"",url:""}}),k=n.createMutation({method:"DELETE",path:({id:e})=>`/members/${e}/sessions/`,invalidateQueries:{dataType:l}}),O=n.createMutation({method:"PUT",path:({memberId:e,subscriptionId:t})=>`/members/${e}/subscriptions/${t}/`,body:({cancelAtPeriodEnd:e,status:t})=>({...void 0!==e?{cancel_at_period_end:e}:{},...t?{status:t}:{}}),invalidateQueries:{dataType:l}}),x=n.createMutation({method:"DELETE",path:({id:e})=>`/members/${e}/suppression/`,invalidateQueries:{dataType:l}}),U="20"
function _(e){return`data.member_id:'${e}'`}var C=n.createInfiniteQuery({dataType:"MemberActivityFeedResponseType",path:"/members/events/",defaultSearchParams:{limit:U},defaultNextPageParams:(e,t)=>{const r=Number(t.limit??U),a=function(e){const t=e[e.length-1]?.data?.created_at
if(t)return new Date(t).toISOString().slice(0,19).replace("T"," ")}(e.events)
if(a&&!(e.events.length<r))return{...t,filter:`data.created_at:<'${a}'+${t.filter??""}`}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.events),a=t[t.length-1],s=a?.meta?.pagination?.limit,n="number"==typeof s?s:Number(U)
return{events:r,meta:a?.meta,isEnd:(a?.events.length??0)<n}}})
t.getMemberCountQueryKey=p,t.isImportMembersCompleteResponse=function(e){return"number"==typeof e.meta?.stats?.imported},t.useAddMember=h,t.useBrowseMembers=m,t.useBrowseMembersInfinite=function(e={}){const t=v(e)
return function(e,t){const r=(0,i.useQueryClient)(),a=e.data?.meta?.pagination?.total,s=function(e){return!e?.filter&&!e?.search}(t);(0,u.useEffect)(()=>{if(!s||e.isError||e.isPlaceholderData||"number"!=typeof a)return
const t=p(),n=r.getQueryState(t),o=n?.data,i=o?.meta?.pagination
if(!n||!o||!i)return
const u=i.total===a,l=n.dataUpdatedAt<=e.dataUpdatedAt
!u&&l&&r.setQueryData(t,{...o,meta:{...o.meta,pagination:{...i,total:a}}},{updatedAt:e.dataUpdatedAt})},[r,s,a,e.dataUpdatedAt,e.isError,e.isPlaceholderData])}(t,e.searchParams),t},t.useBulkDeleteMembers=E,t.useBulkEditMembers=T,t.useDeleteMember=P,t.useDisableMemberCommenting=b,t.useEditMember=S,t.useEditMemberSubscription=O,t.useEnableMemberCommenting=w,t.useImportMembers=g,t.useMember=y,t.useMemberActivityFeed=function(e,t={}){const{limit:r=U,enabled:a}=t
return C({searchParams:{filter:_(e),limit:r},...void 0!==a?{enabled:a}:{}})},t.useMemberCount=function(){const{data:e}=s.useCurrentUser(),{data:t}=f({enabled:Boolean(e&&o.canManageMembers(e))})
return t?.meta?.pagination.total},t.useMemberLogout=k,t.useMemberSigninUrl=M,t.useMembersFetching=()=>(0,i.useIsFetching)({queryKey:[l]})>0,t.useRemoveMemberEmailSuppression=x},93147(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(90665),s=r(72215)
var n="NewslettersResponseType",o=n,i=a.createInfiniteQuery({dataType:n,path:"/newsletters/",defaultSearchParams:{include:"count.active_members,count.posts",limit:"50"},defaultNextPageParams:(e,t)=>({...t,page:(e.meta?.pagination.next||1).toString()}),returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.newsletters),a=t[t.length-1].meta
return{newsletters:r,meta:a,isEnd:!a||a.pagination.pages===a.pagination.page}}}),u=a.createMutation({method:"POST",path:()=>"/newsletters/",body:({opt_in_existing:e,...t})=>({newsletters:[t]}),searchParams:e=>({opt_in_existing:e.opt_in_existing.toString(),include:"count.active_members,count.posts"}),updateQueries:{dataType:n,emberUpdateType:"createOrUpdate",update:s.insertToQueryCache("newsletters")}}),l=a.createMutation({method:"PUT",path:e=>`/newsletters/${e.id}/`,body:e=>({newsletters:[e]}),defaultSearchParams:{include:"count.active_members,count.posts"},updateQueries:{dataType:n,emberUpdateType:"createOrUpdate",update:s.updateQueryCache("newsletters")}}),c=a.createMutation({method:"PUT",path:()=>"/newsletters/verifications/",body:({token:e})=>({token:e}),defaultSearchParams:{include:"count.active_members,count.posts"},updateQueries:{dataType:n,emberUpdateType:"createOrUpdate",update:s.updateQueryCache("newsletters")}})
t.newslettersDataType=o,t.useAddNewsletter=u,t.useBrowseNewsletters=i,t.useEditNewsletter=l,t.useVerifyNewsletterEmail=c},37380(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(90665),s=r(72215)
let n=r(6841)
var o="OffersResponseType",i=a.createQuery({dataType:o,path:"/offers/",defaultSearchParams:{}}),u=a.createQueryWithId({dataType:o,path:e=>`/offers/${e}/`}),l=a.createMutation({method:"PUT",path:e=>`/offers/${e.id}/`,body:e=>({offers:[e]}),updateQueries:{dataType:o,emberUpdateType:"createOrUpdate",update:s.updateQueryCache("offers")}}),c=a.createMutation({method:"POST",path:()=>"/offers/",body:e=>({offers:[e]}),updateQueries:{dataType:o,emberUpdateType:"createOrUpdate",update:s.insertToQueryCache("offers")}})
t.useAddOffer=c,t.useBrowseOffers=i,t.useBrowseOffersById=u,t.useEditOffer=l,t.useInvalidateOffers=()=>{const e=(0,n.useQueryClient)()
return()=>e.invalidateQueries({queryKey:[o]})}},42262(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(90665)
var s="PostsResponseType",n=a.createQuery({dataType:s,path:"/posts/"}),o=a.createInfiniteQuery({dataType:s,path:"/posts/",defaultNextPageParams:(e,t)=>{if(e.meta?.pagination.next)return{...t,page:e.meta.pagination.next.toString()}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.posts),a=t[t.length-1].meta
return{posts:r,meta:a,isEnd:!a||a.pagination.pages===a.pagination.page}}}),i=a.createQueryWithId({dataType:s,path:e=>`/posts/${e}/`}),u=a.createMutation({method:"DELETE",path:e=>`/posts/${e}/`}),l=a.createMutation({method:"PUT",path:()=>"/posts/bulk/",searchParams:({filter:e})=>({filter:e}),body:({action:e})=>({bulk:{action:e.type,meta:"meta"in e?e.meta:{}}})}),c=a.createMutation({method:"DELETE",path:()=>"/posts/",searchParams:({filter:e})=>({filter:e})}),d=a.createMutation({method:"POST",path:e=>`/posts/${e}/copy/`}),p=a.createMutation({method:"POST",retry:!1,path:()=>"/posts/upload/",body:({file:e,mapping:t})=>{const r=new FormData
r.append("postsfile",e)
for(const[a,s]of Object.entries(t))r.append(`mapping[${a}]`,s)
return r}})
t.useBrowsePosts=n,t.useBrowsePostsInfinite=o,t.useBulkDeletePosts=c,t.useBulkEditPosts=l,t.useCopyPost=d,t.useDeletePost=u,t.useImportContentCSV=p,t.usePost=i},80916(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var a=r(90665).createQuery({dataType:"RolesResponseType",path:"/roles/",defaultSearchParams:{limit:"100"}})
t.useBrowseRoles=a},12098(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(90665)
var s="SettingsResponseType",n=a.createQuery({dataType:s,path:"/settings/",defaultSearchParams:{group:"site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore,transistor"}}),o=a.createMutation({method:"PUT",path:()=>"/settings/",body:e=>({settings:e.map(({key:e,value:t})=>({key:e,value:t}))}),updateQueries:{dataType:s,emberUpdateType:"createOrUpdate",update:e=>({...e,settings:e.settings})},invalidateQueries:{filters:{predicate:e=>e.queryKey[0]!==s}}}),i=a.createMutation({method:"POST",path:()=>"/settings/access_code/regenerate/",updateQueries:{dataType:s,emberUpdateType:"createOrUpdate",update:e=>({...e,settings:e.settings})},invalidateQueries:{filters:{predicate:e=>e.queryKey[0]!==s}}}),u=a.createMutation({method:"DELETE",path:()=>"/settings/stripe/connect/",invalidateQueries:{dataType:s}}),l=a.createMutation({method:"POST",path:()=>"/slack/test/"})
function c(e,t){return e&&e.find(e=>e.key===t)?.value||null}function d(){const{data:e}=n()
return e?.settings}t.checkStripeEnabled=function(e,t){const r=t=>e.some(e=>e.key===t&&e.value),a=r("stripe_secret_key")&&r("stripe_publishable_key"),s=r("stripe_connect_secret_key")&&r("stripe_connect_publishable_key")
return t.stripeDirect?a:s||a},t.getSettingValue=c,t.getSettingValues=function(e,t){return t.map(t=>e?.find(e=>e.key===t)?.value)},t.humanizeSettingKey=function(e){return e.replace(/^[a-z]/,e=>e.toUpperCase()).replace(/_/g," ").replace(new RegExp(`\\b(${["API","CTA","RSS"].join("|")})\\b`,"ig"),e=>e.toUpperCase())},t.isSettingReadOnly=function(e,t){if(e)return e.find(e=>e.key===t)?.is_read_only||!1},t.useBrowseSettings=n,t.useDeleteStripeSettings=u,t.useEditSettings=o,t.useEmailTrackClicks=function(){const e=d()
if(e)return c(e,"email_track_clicks")??!1},t.useEmailTrackOpens=function(){const e=d()
if(e)return c(e,"email_track_opens")??!1},t.useMembersTrackSources=function(){const e=d()
if(e)return c(e,"members_track_sources")??!1},t.useNewslettersEnabled=function(){const e=d()
if(e)return"disabled"!==c(e,"editor_default_email_recipients")},t.usePaidMembersEnabled=function(){const e=d()
if(e)return c(e,"paid_members_enabled")??!1},t.useRegenerateAccessCode=i,t.useTestSlack=l,t.useWebAnalyticsEnabled=function(){const e=d()
return!!e&&!0===c(e,"web_analytics_enabled")}},28091(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(48808),s=r(90665),n=r(72215)
var o=a.usersDataType,i=s.createInfiniteQuery({dataType:o,path:"/users/",defaultSearchParams:{limit:"100",include:"roles"},defaultNextPageParams:(e,t)=>{if(e.meta?.pagination.next)return{...t,page:e.meta.pagination.next.toString()}},returnData:e=>{const{pages:t}=e,r=t.flatMap(e=>e.users),a=t[t.length-1].meta
return{users:r,meta:a,isEnd:!a||a.pagination.pages===a.pagination.page}}}),u=s.createQueryWithId({dataType:o,path:e=>`/users/slug/${e}/`,defaultSearchParams:{include:"roles"}}),l=s.createMutation({method:"PUT",path:e=>`/users/${e.id}/`,body:e=>({users:[e]}),searchParams:()=>({include:"roles"}),updateQueries:{dataType:o,emberUpdateType:"createOrUpdate",update:n.updateQueryCache("users")}}),c=s.createMutation({method:"DELETE",path:e=>`/users/${e}/`,updateQueries:{dataType:o,emberUpdateType:"delete",update:n.deleteFromQueryCache("users")}}),d=s.createMutation({method:"PUT",path:()=>"/users/password/",body:({newPassword:e,confirmNewPassword:t,userId:r,oldPassword:a})=>({password:[{user_id:r,oldPassword:a||"",newPassword:e,ne2Password:t}]})}),p=s.createMutation({method:"PUT",path:()=>"/users/owner/",body:e=>({owner:[{id:e}]}),updateQueries:{dataType:o,emberUpdateType:"createOrUpdate",update:n.updateQueryCache("users")}})
function m(e){return e.roles.some(e=>"Owner"===e.name)}function f(e){return e.roles.some(e=>"Administrator"===e.name)}function h(e){return e.roles.some(e=>"Editor"===e.name)||e.roles.some(e=>"Super Editor"===e.name)}function g(e){return e.roles.some(e=>"Super Editor"===e.name)}function y(e){return e.roles.some(e=>"Author"===e.name)}function b(e){return e.roles.some(e=>"Contributor"===e.name)}t.canAccessSettings=function(e){return m(e)||f(e)||h(e)},t.canManageAutomations=function(e){return m(e)||f(e)},t.canManageGiftLinks=function(e){return m(e)||f(e)||h(e)},t.canManageMembers=function(e){return m(e)||f(e)||g(e)},t.canManageTags=function(e){return m(e)||f(e)||h(e)},t.hasAdminAccess=function(e){return m(e)||f(e)},t.isAdminUser=f,t.isAuthorOrContributor=function(e){return y(e)||b(e)},t.isAuthorUser=y,t.isContributorUser=b,t.isEditorUser=h,t.isOwnerUser=m,t.isSuperEditorUser=g,t.useBrowseUsers=i,t.useDeleteUser=c,t.useEditUser=l,t.useGetUserBySlug=u,t.useMakeOwner=p,t.useUpdatePassword=d},88950(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(51184),s=r(79522),n=r(20031),o=r(27057),i=r(48078),u=r(99767),l=r(77699),c=r(26781),d=r(26322),p=r(4418),m=r(64573),f=r(99489)
t.koenigFileUploadTypes=u.koenigFileUploadTypes,t.useConfirmUnload=n.useConfirmUnload,t.useFeatureFlag=d.useFeatureFlag,t.useFetchApi=s.useFetchApi,t.useFilterableApi=i,t.useForm=o,t.useHandleError=a,t.useHostLimits=p.useHostLimits,t.useKoenigFetchEmbed=l.useKoenigFetchEmbed,t.useKoenigFileUpload=u.useKoenigFileUpload,t.useKoenigLinkSuggestions=c.useKoenigLinkSuggestions,t.useLimiter=m.useLimiter,t.usePinturaConfig=f.usePinturaConfig},20031(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(2940)
let s=r(80576)
s=a.__toESM(s,1),t.useConfirmUnload=function(e){s.useEffect(()=>{if(!e)return
const t=e=>{e.preventDefault(),e.returnValue=""}
return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[e])}},26322(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(82211)
t.useFeatureFlag=e=>{const{data:t}=a.useBrowseConfig({refetchOnMount:!1})
return!0===t?.config.labs?.[e]}},48078(e,t,r){const a=r(79522)
let s=r(80576),n=r(26031)
var o=(e=[],t,r)=>e&&r?e.filter(e=>e[t]?.toLowerCase().includes(r.toLowerCase())):e
e.exports=({path:e,filterKey:t,responseKey:r,limit:i=20})=>{const u=a.useFetchApi(),l=(0,s.useRef)({}),c=async s=>{if((l.current.allLoaded||l.current.lastInput===s)&&l.current.data)return o(l.current.data,t,s)
const c=await u(a.apiUrl(e,{filter:s?`${t}:~${(0,n.escapeNqlString)(s)}`:"",limit:i.toString()}))
return l.current.data=c[r],l.current.allLoaded=!s&&!c.meta?.pagination.next,l.current.lastInput=s,o(c[r],t,s)}
return{loadData:c,loadInitialValues:async(t,s)=>{await c("")
const n=[...l.current.data||[]],o=t.filter(e=>!l.current.data?.find(t=>t[s]===e))
if(o.length){const t=await u(a.apiUrl(e,{filter:`${s}:[${o.join(",")}]`,limit:"100"}))
n.push(...t[r])}return t.map(e=>n.find(t=>t[s]===e))}}}},27057(e,t,r){let a=r(80576)
e.exports=({initialState:e,savingDelay:t,savedDelay:r=2e3,onSave:s,onSaveError:n,onSavedStateReset:o,onValidate:i})=>{const[u,l]=(0,a.useState)(e),[c,d]=(0,a.useState)(""),[p,m]=(0,a.useState)({});(0,a.useEffect)(()=>{"saved"===c&&setTimeout(()=>{o?.(),d(e=>"saved"===e?"":e)},r)},[c,r])
const f=e=>0===Object.values(e).filter(Boolean).length,h=(0,a.useCallback)(()=>{if(!i)return!0
const e=i(u)
return m(e),f(e)},[u,i]),g=(0,a.useCallback)(async(e={})=>{if(!h())return d("error"),!1
if("unsaved"!==c&&!e.force&&!e.fakeWhenUnchanged)return!0
const r=Date.now()
d("saving")
try{("unsaved"===c||e.force)&&await s(u)
const a=Date.now()-r
return t&&a<t&&await new Promise(e=>{setTimeout(e,t-a)}),d("saved"),!0}catch(e){throw await(n?.(e)),d("unsaved"),e}},[u,c,t,s,n,h]),y=(0,a.useCallback)(e=>{l(e),d("unsaved")},[])
let b="default"
"saved"===c?b="default":"error"===c&&(b="destructive")
let w=""
"saved"===c?w="Saved":"saving"===c?w="Saving...":"error"===c&&(w="Retry")
const v={disabled:"saving"===c,variant:b,label:w||void 0}
return{formState:u,saveState:c,handleSave:g,updateForm:y,setFormState:l,reset(){l(e),d("")},validate:h,isValid:f(p),clearError:e=>{m(t=>({...t,[e]:""}))},errors:p,setErrors:m,okProps:v}}},51184(e,t,r){const a=r(2940),s=r(85089),n=r(27621)
let o=r(28219)
o=a.__toESM(o,1)
let i=r(80576),u=r(89860)
function l(e){u.toast.dismiss(),u.toast.error(e)}e.exports=()=>{const{sentryDSN:e}=s.useFramework()
return(0,i.useCallback)((t,{withToast:r=!0}={})=>{console.error(t),!e||t instanceof n.SessionExpiredError||o.withScope(e=>{t instanceof n.APIError&&t.response&&(e.setTag("api_url",t.response.url),e.setTag("api_response_status",t.response.status)),o.captureException(t)}),r&&(t instanceof n.APIError&&418===t.response?.status||t instanceof n.SessionExpiredError?u.toast.dismiss():t instanceof n.APIError?l(n.getErrorMessage(t,t.message)):l("Something went wrong, please try again."))},[e])}},4418(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(82211)
t.useHostLimits=()=>{const{data:e}=a.useBrowseConfig({refetchOnMount:!1})
return e?.config.hostSettings?.limits}},77699(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(65955),s=r(79522)
let n=r(80576)
t.useKoenigFetchEmbed=()=>{const e=s.useFetchApi()
return(0,n.useCallback)(async(t,{type:r}={})=>{const s=new URL(`${a.getGhostPaths().apiRoot}/oembed/`,window.location.origin)
return s.searchParams.set("url",t),r&&s.searchParams.set("type",r),await e(s)},[e])}},99767(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(65955),s=r(79522)
let n=r(80576)
var o={image:{mimeTypes:["image/gif","image/jpg","image/jpeg","image/png","image/svg+xml","image/webp"],extensions:["gif","jpg","jpeg","png","svg","svgz","webp"],endpoint:"/images/upload/",requestMethod:"post",resourceName:"images"},video:{mimeTypes:["video/mp4","video/webm","video/ogg"],extensions:["mp4","webm","ogv"],endpoint:"/media/upload/",requestMethod:"post",resourceName:"media"},audio:{mimeTypes:["audio/mp3","audio/mpeg","audio/ogg","audio/wav","audio/vnd.wav","audio/wave","audio/x-wav","audio/mp4","audio/x-m4a"],extensions:["mp3","wav","ogg","m4a"],endpoint:"/media/upload/",requestMethod:"post",resourceName:"media"},mediaThumbnail:{mimeTypes:["image/gif","image/jpg","image/jpeg","image/png","image/webp"],extensions:["gif","jpg","jpeg","png","webp"],endpoint:"/media/thumbnail/upload/",requestMethod:"put",resourceName:"media"},file:{extensions:[],endpoint:"/files/upload/",requestMethod:"post",resourceName:"files"}},i=(e,t)=>{let r=e
for(const a of t){if(!r||"object"!=typeof r||!(a in r))return null
r=r[a]}return"string"==typeof r?r:null}
t.koenigFileUploadTypes=o,t.useKoenigFileUpload=(e="image")=>{const[t,r]=(0,n.useState)(0),[u,l]=(0,n.useState)(!1),[c,d]=(0,n.useState)([]),[p,m]=(0,n.useState)(0),f=(0,n.useRef)(new Map),h=s.useFetchApi()
function g(){if(0===f.current.size)return void r(0)
let e=0
f.current.forEach(t=>{e+=t}),r(Math.round(e/f.current.size))}const y=t=>{if("file"===e)return!0
const r=o[e].extensions,[,a]=/(?:\.([^.]+))?$/.exec(t.name)??[]
return!r||!(!a||-1===r.indexOf(a.toLowerCase()))||`The file type you uploaded is not supported. Please use .${r.join(", .").toUpperCase()}`},b=async(t,{formData:r={}}={})=>{f.current.set(t,0)
const s=new FormData
s.append("file",t,t.name),Object.keys(r).forEach(e=>{s.append(e,r[e])})
const n=`${a.getGhostPaths().apiRoot}${o[e].endpoint}`
try{const r=await h(n,{method:o[e].requestMethod,body:s,onUploadProgress(e){f.current.set(t,e),g()}})
let a
if(f.current.set(t,100),g(),r){const t=r[o[e].resourceName]
t&&Array.isArray(t)&&t[0]&&(a=t[0].url)}return{url:a,fileName:t.name}}catch(e){console.error(e)
const a=i(e,["data","errors",0,"context"])||"",s=i(e,["data","errors",0,"message"])||i(e,["message"])||""
throw{message:a||s,context:a,fileName:t.name}}}
return{progress:t,isLoading:u,upload:async(e=[],t={})=>{m(e.length),l(!0),d([])
const a=((e=[])=>{const t=[]
for(let r=0;r<e.length;r+=1){const a=e[r],s=y(a)
!0!==s&&t.push({fileName:a.name,message:s})}return t})(e)
if(a.length)return d(a),l(!1),r(100),null
const s=[]
for(let r=0;r<e.length;r+=1){const a=e[r]
s.push(b(a,t))}try{const e=await Promise.all(s)
return r(100),f.current.clear(),l(!1),d([]),e}catch(e){return console.error(e),d([e]),l(!1),r(100),f.current.clear(),null}},errors:c,filesNumber:p}}},26781(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(48078),s=r(37380),n=r(42262)
let o=r(80576)
t.useKoenigLinkSuggestions=({siteUrl:e,membersSignupAccess:t,donationsEnabled:r,recommendationsEnabled:i,includeShareLink:u=!1,shareLinkLabel:l="Share"})=>{const{data:c}=s.useBrowseOffers(),{data:d}=n.useBrowsePosts({searchParams:{filter:"status:published",fields:"id,url,title,visibility,published_at",order:"published_at desc",limit:"5"}}),p=a({path:"/search-index/posts/",filterKey:"title",responseKey:"posts"}),m=a({path:"/search-index/pages/",filterKey:"title",responseKey:"pages"}),f=(0,o.useMemo)(()=>[{label:"Latest posts",items:(d?.posts||[]).map(e=>({id:e.id,title:e.title,url:e.url,visibility:e.visibility,publishedAt:e.published_at}))}],[d?.posts])
return{fetchAutocompleteLinks:(0,o.useCallback)(async()=>[{label:"Homepage",value:e},{label:"Free signup",value:"#/portal/signup/free"},..."all"===t?[{label:"Paid signup",value:"#/portal/signup"},{label:"Upgrade or change plan",value:"#/portal/account/plans"}]:[],...r?[{label:"Tips and donations",value:"#/portal/support"}]:[],...u?[{label:l,value:"#/share"}]:[],...i?[{label:"Recommendations",value:"#/portal/recommendations"}]:[],...(c?.offers||[]).filter(e=>"active"===e.status&&"signup"===e.redemption_type).map(t=>({label:`Offer - ${t.name}`,value:new URL(t.code,e).toString()}))],[r,u,t,c?.offers,i,l,e]),searchLinks:(0,o.useCallback)(async e=>{if(!e)return f
const[t,r]=await Promise.all([p.loadData(e),m.loadData(e)])
return[{label:"Posts",items:t.filter(e=>"published"===e.status).map(e=>({id:e.id,title:e.title,url:e.url,visibility:e.visibility,publishedAt:e.published_at}))},{label:"Pages",items:r.filter(e=>"published"===e.status).map(e=>({id:e.id,title:e.title,url:e.url,visibility:e.visibility,publishedAt:e.published_at}))}].filter(e=>e.items.length>0)},[f,m,p])}}},64573(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(27621),s=r(82211),n=r(16757),o=r(28091),i=r(77898),u=r(93147),l=r(80916)
let c=r(80576)
var d=Promise.resolve().then(r.t.bind(r,91373,23)),p=class extends Error{constructor({message:e}){super(e)}}
t.useLimiter=()=>{const{data:e}=s.useBrowseConfig({refetchOnMount:!1}),t=e?.config,[r,m]=(0,c.useState)(null);(0,c.useEffect)(()=>{d.then(e=>m(()=>e.default))},[])
const{data:{users:f}={users:[]},isLoading:h}=o.useBrowseUsers(),{data:{invites:g}={invites:[]},isLoading:y}=n.useBrowseInvites(),{data:{roles:b}={},isLoading:w}=l.useBrowseRoles(),v=h||y||w,{refetch:j}=i.useBrowseMembers({searchParams:{limit:"1"},enabled:!1}),{refetch:T}=u.useBrowseNewsletters({searchParams:{filter:"status:active",limit:"1"},enabled:!1}),E=(0,c.useMemo)(()=>!0===t?.hostSettings?.billing?.enabled&&t.hostSettings.billing.url?t.hostSettings.billing.url:"https://ghost.org/help/",[t?.hostSettings?.billing])
return(0,c.useMemo)(()=>{const e={isLimited:()=>!1,isDisabled:()=>!1,checkWouldGoOverLimit:()=>Promise.resolve(!1),errorIfWouldGoOverLimit:()=>Promise.resolve(),errorIfIsOverLimit:()=>Promise.resolve()}
if(!r||!t?.hostSettings?.limits||v)return e
const s={...t.hostSettings.limits},n=new r
return s.staff&&(s.staff.currentCountQuery=()=>{const e=f.filter(e=>"inactive"!==e.status&&!e.roles.some(e=>"Contributor"===e.name)),t=g.filter(e=>"Contributor"!==(b?.find(({id:t})=>t===e.role_id))?.name)
return Promise.resolve(e.length+t.length)}),s.members&&(s.members.currentCountQuery=async()=>{const{data:e}=await j()
return e?.meta?.pagination?.total||0}),s.newsletters&&(s.newsletters.currentCountQuery=async()=>{const{data:{pages:e}={pages:[]}}=await T()
return e[0].meta?.pagination.total||0}),n.loadLimits({limits:s,helpLink:E,errors:{HostLimitError:a.HostLimitError,IncorrectUsageError:p}}),{isLimited:e=>n.isLimited(e),isDisabled:e=>n.isDisabled(e),checkWouldGoOverLimit:e=>n.checkWouldGoOverLimit(e),errorIfWouldGoOverLimit:(e,t={})=>n.errorIfWouldGoOverLimit(e,t),errorIfIsOverLimit:e=>n.errorIfIsOverLimit(e)}},[r,t,j,T,E,g,v,b,f])}},63501(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(48808)
t.usePermission=e=>{const{data:t}=a.useCurrentUser()
if(!e||0===e.length)return!0
const r=t?.roles.map(e=>e.name)
return!!r&&e.some(e=>r.includes(e))}},99489(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(65955),s=r(12098),n=r(82211)
let o=r(80576)
var i=e=>{if(null!=e){if("string"==typeof e)return e
throw new TypeError("Expected value to be null, undefined, or a string")}},u=e=>{if(e.startsWith("/")){const{adminRoot:t}=a.getGhostPaths()
return window.location.origin+t.replace(/\/$/,"")+e}return e}
t.usePinturaConfig=function(){const{data:e}=n.useBrowseConfig(),{data:t}=s.useBrowseSettings(),r=(e?.config)?.pintura,[a,l,c]=s.getSettingValues(t?.settings??null,["pintura","pintura_js_url","pintura_css_url"])
let d,p
return a&&(d=r?.js||i(l),p=r?.css||i(c)),(0,o.useMemo)(()=>d&&p?{jsUrl:u(d),cssUrl:u(p)}:null,[d,p])}},85089(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(5852)
let s=r(28219),n=r(6841),o=r(80576),i=r(49628)
var u=(0,o.createContext)({ghostVersion:"",externalNavigate:()=>{},unsplashConfig:{Authorization:"","Accept-Version":"","Content-Type":"","App-Pragma":"","X-Unsplash-Cache":!0},sentryDSN:null,onUpdate:()=>{},onInvalidate:()=>{},onDelete:()=>{}})
t.FrameworkProvider=function({children:e,queryClient:t,...r}){return(0,i.jsx)(s.ErrorBoundary,{children:(0,i.jsx)(n.QueryClientProvider,{client:(0,o.useMemo)(()=>t||a,[t]),children:(0,i.jsx)(u.Provider,{value:r,children:e})})})},t.defaultUnsplashConfig={Authorization:"Client-ID 8672af113b0a8573edae3aa3713886265d9bb741d707f6c01a486cde8c278980","Accept-Version":"v1","Content-Type":"application/json","App-Pragma":"no-cache","X-Unsplash-Cache":!0},t.useFramework=()=>(0,o.useContext)(u)},2940(e,t){var r=Object.create,a=Object.defineProperty,s=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,u=(e,t,u)=>(u=null!=e?r(o(e)):{},((e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(var u,l=n(t),c=0,d=l.length;c<d;c++)u=l[c],i.call(e,u)||void 0===u||a(e,u,{get:(e=>t[e]).bind(null,u),enumerable:!(o=s(t,u))||o.enumerable})
return e})(!t&&e&&e.__esModule?u:a(u,"default",{value:e,enumerable:!0}),e))
Object.defineProperty(t,"__toESM",{enumerable:!0,get:function(){return u}})},79522(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(2940),s=r(85089),n=r(27621),o=r(65955),i=r(95167)
let u=r(28219)
u=a.__toESM(u,1)
let l=r(80576)
var c=e=>{const t=new Headers,r=e.getAllResponseHeaders()?.split("\r\n")||[]
for(const a of r){const e=a.indexOf(":")
if(-1===e)continue
const r=a.slice(0,e),s=a.slice(e+1).trim()
t.append(r,s)}return t},d=/\/ghost\/api\//,p=/\/ghost\/api\/admin\/session([/?#]|$)/,m=/^#\/(?:reset|setup|signin|signup)(?:[/?]|$)/,f=!1,h=e=>{const t=e.toString()
return d.test(t)&&!p.test(t)},g=()=>{const{adminRoot:e}=o.getGhostPaths()
f||(e=>window.location.pathname===e&&(!window.location.hash||"#/"===window.location.hash||m.test(window.location.hash)))(e)||(f=!0,window.location.replace(e))},y=(e,t,{method:r,headers:a,credentials:s,body:n,signal:o})=>new Promise((i,u)=>{const l=()=>{u(new DOMException("Aborted","AbortError"))}
if(o.aborted)return void l()
const d=new XMLHttpRequest
switch(d.open(r,t.toString(),!0),s){case"omit":throw new Error('"omit" credentials cannot be represented with legacy XMLHttpRequest. Consider "same-origin".')
case"same-origin":d.withCredentials=!1
break
case"include":d.withCredentials=!0
break
default:throw new Error(s)}d.responseType="arraybuffer"
for(const[e,t]of Object.entries(a))d.setRequestHeader(e,t)
d.upload.onprogress=t=>{t.lengthComputable&&e(t.loaded/t.total*100)},d.onload=()=>{i((e=>new Response(e.response,{status:e.status,statusText:e.statusText,headers:c(e)}))(d))},d.onerror=()=>{u(new TypeError("Network request failed"))},d.onabort=l
const p=()=>d.abort()
o.addEventListener("abort",p),d.onloadend=()=>{o.removeEventListener("abort",p)},d.send(n)}),{apiRoot:b}=o.getGhostPaths()
t.apiUrl=(e,t={})=>{const r=new URL(`${b}${e}`,window.location.origin)
return r.search=new URLSearchParams(t).toString(),r.toString()},t.useFetchApi=()=>{const{ghostVersion:e,sentryDSN:t}=s.useFramework()
return(0,l.useCallback)(async(r,{method:a="GET",headers:s={},body:o,credentials:l="include",timeout:c,retry:d=!0,responseType:p,onUploadProgress:m}={})=>{const f=new AbortController,b={method:a,headers:{"app-pragma":"no-cache",...e?{"x-ghost-version":e}:{},..."string"==typeof o?{"content-type":"application/json"}:{},...s},credentials:l,mode:"cors",body:o,signal:f.signal}
let w=0,v=0
const j=Date.now(),T=[500,1e3],E=[n.ServerUnreachableError,n.MaintenanceError,TypeError],S=(e,t)=>{const a={errorName:e?.name,attempts:w,totalSeconds:v/1e3,endpoint:r.toString()}
return r.toString().includes("/ghost/api/")&&(a.server=t?.headers.get("server")),a},P=m?y.bind(null,m):fetch,M=c?setTimeout(()=>f.abort(),c):void 0
try{for(;0===w||d;)try{return await i(await P(r,b),{responseType:p})}catch(e){if(v=Date.now()-j,d&&E.some(t=>e instanceof t)&&v<=15e3){await new Promise(e=>{setTimeout(e,T[w]||T[T.length-1])}),w+=1
continue}if(0!==w&&t&&u.captureMessage("Request failed after multiple attempts",{extra:S()}),e&&"object"==typeof e&&"name"in e&&"AbortError"===e.name)throw new n.TimeoutError
if(e instanceof n.UnauthorizedError&&h(r))throw g(),new n.SessionExpiredError(e.response,e.data,{cause:e})
let s=e
throw e instanceof n.APIError||(s=new n.ServerUnreachableError({cause:e})),s}}finally{clearTimeout(M)}},[e,t])}},95167(e,t,r){const a=r(27621)
e.exports=async(e,{responseType:t}={})=>{if(0===e.status)throw new a.ServerUnreachableError
if(503===e.status)throw new a.MaintenanceError(e,await e.text())
if(415===e.status)throw new a.UnsupportedMediaTypeError(e,await e.text())
if(413===e.status)throw new a.RequestEntityTooLargeError(e,await e.text())
if(401===e.status){if(e.headers.get("content-type")?.includes("json"))throw new a.UnauthorizedError(e,await e.json())
throw new a.UnauthorizedError(e,await e.text())}if(e.ok)return 204===e.status?void 0:"blob"===t?await e.blob():"arraybuffer"===t?await e.arrayBuffer():(r=e.headers.get("content-type"))&&(r.startsWith("text/")||r.includes("application/yaml"))?await e.text():await e.json()
{if(!e.headers.get("content-type")?.includes("json"))throw new a.APIError(e,await e.text())
const t=await e.json()
throw 403===e.status&&"Authorization failed"===t.errors?.[0]?.message?new a.UnauthorizedError(e,t):"VersionMismatchError"===t.errors?.[0]?.type?new a.VersionMismatchError(e,t):"ValidationError"===t.errors?.[0]?.type||"NoPermissionError"===t.errors?.[0]?.type?new a.ValidationError(e,t):"ThemeValidationError"===t.errors?.[0]?.type?new a.ThemeValidationError(e,t):"HostLimitError"===t.errors?.[0]?.type?new a.HostLimitError(e,t):"EmailError"===t.errors?.[0]?.type?new a.EmailError(e,t):new a.JSONError(e,t)}var r}},90665(e,t,r){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
const a=r(85089),s=r(51184),n=r(79522),o=r(63501)
let i=r(6841),u=r(80576)
var l=e=>({searchParams:t,...r}={})=>{const a=n.apiUrl(e.path,t||e.defaultSearchParams),l=n.useFetchApi(),c=s(),d=o.usePermission(e.permissions),p=(0,i.useQuery)({...r,enabled:d&&(r.enabled??!0),queryKey:[e.dataType,a],queryFn:()=>l(a,{...e})}),m=(0,u.useMemo)(()=>p.data&&e.returnData?e.returnData(p.data):p.data,[p.data])
return(0,u.useEffect)(()=>{p.error&&!1!==r.defaultErrorHandler&&c(p.error)},[c,p.error,r.defaultErrorHandler]),{...p,data:m}}
t.createInfiniteQuery=e=>({searchParams:t,getNextPageParams:r,...a}={})=>{const l=n.useFetchApi(),c=s(),d=o.usePermission(e.permissions),p=r||e.defaultNextPageParams||(()=>({})),m=(0,i.useInfiniteQuery)({...a,enabled:d&&(a.enabled??!0),queryKey:[e.dataType,n.apiUrl(e.path,t||e.defaultSearchParams)],queryFn:({pageParam:r})=>l(n.apiUrl(e.path,r||t||e.defaultSearchParams),{...e}),initialPageParam:void 0,getNextPageParam:r=>p(r,t||e.defaultSearchParams||{})}),f=(0,u.useMemo)(()=>m.data&&e.returnData(m.data),[m.data])
return(0,u.useEffect)(()=>{m.error&&!1!==a.defaultErrorHandler&&c(m.error)},[c,m.error,a.defaultErrorHandler]),{...m,data:f}},t.createMutation=({path:e,searchParams:t,defaultSearchParams:r,updateQueries:s,invalidateQueries:o,...l})=>()=>{const c=n.useFetchApi(),d=(0,i.useQueryClient)(),{onUpdate:p,onInvalidate:m,onDelete:f}=a.useFramework()
return(0,i.useMutation)({mutationFn:a=>(({fetchApi:e,path:t,payload:r,searchParams:a,options:s})=>{const{defaultSearchParams:o,body:i,...u}=s,l=n.apiUrl(t,a||o),c=r&&i?.(r)
let d
return c instanceof FormData?d=c:c&&(d=JSON.stringify(c)),e(l,{body:d,...u})})({fetchApi:c,path:e(a),payload:a,searchParams:t?.(a)||r,options:l}),onSuccess:(0,u.useCallback)((e,t)=>{if(o&&"dataType"in o){const e=Array.isArray(o.dataType)?o.dataType:[o.dataType]
for(const t of e)d.invalidateQueries({queryKey:[t]}),m(t)}else o&&d.invalidateQueries(o.filters,o.options)
if(s)if(d.setQueriesData({queryKey:[s.dataType]},r=>s.update(e,r,t)),"createOrUpdate"===s.emberUpdateType)p(s.dataType,e)
else if("delete"===s.emberUpdateType){if("string"!=typeof t)throw new Error("Expected delete mutation to have a string (ID) payload. Either change the payload or update the createMutation hook")
f(s.dataType,t)}},[m,p,f,d])})},t.createQuery=l,t.createQueryWithId=e=>(t,{searchParams:r,...a}={})=>l({...e,path:e.path(t)})({searchParams:r||e.defaultSearchParams,...a})},72215(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t.deleteFromQueryCache=(e,t)=>(r,a,s)=>{if(!a)return a
const n=t?.(s)||[s]
if("object"==typeof a&&"pages"in a){const{pages:t}=a
return{...a,pages:t.map(t=>({...t,[e]:t[e].filter(e=>!n.includes(e.id))}))}}return{...a,[e]:a[e].filter(e=>!n.includes(e.id))}},t.insertToQueryCache=(e,t)=>(r,a)=>{if(!a)return a
const s=t||(t=>t[e])
if("object"==typeof a&&"pages"in a){const{pages:t}=a,n=t[t.length-1]
return{...a,pages:t.slice(0,-1).concat({...n,[e]:n[e].concat(s(r))})}}return{...a,[e]:a[e].concat(s(r))}},t.updateQueryCache=(e,t)=>(r,a)=>{if(!a)return a
const s=(t||(t=>t[e].reduce((e,t)=>({...e,[t.id]:t}),{})))(r)
if("object"==typeof a&&"pages"in a){const{pages:t}=a
return{...a,pages:t.map(t=>({...t,[e]:t[e].map(e=>s[e.id]||e)}))}}return{...a,[e]:a[e].map(e=>s[e.id]||e)}}},27621(e,t){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
var r=class extends Error{response
data
constructor(e,t,r,a){!r&&e&&e.url.includes("/ghost/api/admin/")&&(r=`Something went wrong while loading ${e.url.replace(/.+\/ghost\/api\/admin\//,"").replace(/\W.*/,"").replace("_"," ")}, please try again.`),super(r||"Something went wrong, please try again.",a),this.response=e,this.data=t}},a=class extends r{data
constructor(e,t,r,a){super(e,t,r,a),this.data=t}},s=class extends r{constructor(e,t,r){super(e,t,"You are not authorised to make this request.",r)}},n=class extends a{constructor(e,t,r){super(e,t,"Theme is not compatible or contains errors.",r)}},o=class extends a{errorDetails
constructor(e,t,r){e instanceof Response?super(e,t,"A hosting plan limit was reached or exceeded.",r):(super(void 0,void 0,e.message||"A hosting plan limit was reached or exceeded."),this.errorDetails=e.errorDetails)}},i=class extends a{constructor(e,t,r){super(e,t,"Please verify your email settings",r)}},u=class extends a{constructor(e,t,r){super(e,t,t.errors[0].message,r)}},l=[u,n,o,i],c=class extends Error{constructor(e){super(e)}}
t.APIError=r,t.AlreadyExistsError=c,t.EmailError=i,t.HostLimitError=o,t.JSONError=a,t.MaintenanceError=class extends r{constructor(e,t,r){super(e,t,"Ghost is currently undergoing maintenance, please wait a moment then retry.",r)}},t.RequestEntityTooLargeError=class extends r{constructor(e,t,r){super(e,t,"Request is larger than the maximum file size the server allows",r)}},t.ServerUnreachableError=class extends r{constructor(e){super(void 0,void 0,"Something went wrong, please try again.",e)}},t.SessionExpiredError=class extends s{},t.ThemeValidationError=n,t.TimeoutError=class extends r{constructor(e){super(void 0,void 0,"Request timed out, please try again.",e)}},t.UnauthorizedError=s,t.UnsupportedMediaTypeError=class extends r{constructor(e,t,r){super(e,t,"Request contains an unknown or unsupported file type.",r)}},t.ValidationError=u,t.VersionMismatchError=class extends a{constructor(e,t,r){super(e,t,"API server is running a newer version of Ghost, please upgrade.",r)}},t.errorsWithMessage=l,t.getErrorMessage=function(e,t){const r=e instanceof a?e.data?.errors?.[0]:void 0
return r?.context||r?.message||t}},65955(e,t){function r(){const e=window.location.pathname,t=e.substr(0,e.search("/ghost/"))
return{subdir:t,adminRoot:`${t}/ghost/`,assetRoot:`${t}/ghost/assets/`,apiRoot:`${t}/ghost/api/admin`}}function a(e){let t=document.getElementById("iframeDownload")
t||(t=document.createElement("iframe"),t.id="iframeDownload",t.style.display="none",document.body.append(t)),t.setAttribute("src",e)}function s(e){if(!e)return
const t=e.match(/filename\*=([^;]+)/i)
if(t?.[1]){const e="'",r=t[1].trim(),a=r.indexOf(e),s=-1===a?-1:r.indexOf(e,a+1),n=-1===s?r:r.slice(s+1)
try{return decodeURIComponent(n.replace(/^["']|["']$/g,""))}catch{}}const r=e.match(/filename="([^"]*)"/i)
if(r?.[1])return r[1].trim()
const a=e.match(/filename=([^;]+)/i)
return a?.[1]?a[1].trim():void 0}async function n(e,t,{signal:r}={}){const a=await fetch(e,{method:"GET",signal:r})
if(!a.ok)throw new Error(`Download failed: ${a.status} ${a.statusText}`)
const n=s(a.headers.get("content-disposition"))??t??"download",o=await a.blob(),i=window.URL.createObjectURL(o),u=document.createElement("a")
u.href=i,u.download=n,document.body.appendChild(u),u.click(),u.remove(),window.URL.revokeObjectURL(i)}Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t.blobDownload=n,t.blobDownloadFromEndpoint=async function(e,t,a={}){return n(`${r().apiRoot}${e}`,t,a)},t.downloadFile=a,t.downloadFromEndpoint=function(e){a(`${r().apiRoot}${e}`)},t.getFilenameFromContentDisposition=s,t.getGhostPaths=r},5852(e,t,r){let a=r(6841)
var s=window.adminXQueryClient||new a.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:3e5,gcTime:6e5,retry:!1,networkMode:"always"}}})
window.__TANSTACK_QUERY_CLIENT__=s,window.adminXQueryClient||(window.adminXQueryClient=s),e.exports=s},26031(e,t,r){"use strict"
function a(e){return`'${e.replace(/(['"])/g,"\\$1")}'`}r.r(t),r.d(t,{escapeNqlString:()=>a})}}])

//# sourceMappingURL=chunk.598.7e056fabb47ce7dbd73f.map