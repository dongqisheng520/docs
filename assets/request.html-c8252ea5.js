import{c as f,b,x as w,N as v,O as N,P as l,a7 as n,u as a,a1 as u,U as k,V as y,Q as p,_ as z,Y as C,F as x}from"./framework-4112b4b4.js";import{N as q}from"./Select-a636f530.js";import{N as m}from"./Input-968fba7b.js";import{N as d}from"./Button-7a338fd3.js";import{N as h}from"./app-ee2c1560.js";import"./Popover-bd2c2950.js";import"./map-02e109e6.js";import"./getTag-8e421b75.js";import"./Scrollbar-2602c1b5.js";import"./browser-3466804d.js";import"./use-false-until-truthy-dfa957a3.js";import"./utils-fe3d41a0.js";import"./resolve-slot-6658b9ef.js";import"./use-merged-state-11bbb36c.js";import"./Tag-c028f387.js";import"./color-to-class-b0332f36.js";import"./create-657dc0dd.js";const _=i=>(k("data-v-76484c22"),i=i(),y(),i),A=_(()=>p("h4",null,"zone",-1)),P=_(()=>p("h4",null,"client_id",-1)),S=_(()=>p("h4",null,"client_secret",-1)),B=f({__name:"Request",setup(i){const o={global:["https://login.microsoftonline.com","https://graph.microsoft.com","https://portal.azure.com","Global","https://www.office.com/","0a2991a3-1674-4334-8561-671cc7349960","uw67Q~TCMqdJyH35hlcHHclv~mhNOGx.jfPFm"],cn:["https://login.chinacloudapi.cn","https://microsoftgraph.chinacloudapi.cn","https://portal.azure.cn","21vianet(世纪互联)","https://portal.partner.microsoftonline.cn/Home","50ff485b-3bdc-4bd5-92a1-75b178187673","6v426lmVYKGM.bkuFu24-EqJAr_~~5_HKL"],de:["https://login.microsoftonline.de","https://graph.microsoft.de","https://portal.microsoftazure.de","Azure Germany"],us:["https://login.microsoftonline.us","https://graph.microsoft.us","https://portal.azure.us","Azure US GOV"]},e=b({zone:"global",client_id:"",client_secret:""});e.client_id=o[e.zone][5],e.client_secret=o[e.zone][6],w(()=>e.zone,t=>{e.client_id=o[t][5]||"",e.client_secret=o[t][6]||""});const c=()=>{window.open(o[e.zone][2]+"/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade","_blank")},g=()=>{const t=new URL(`${o[e.zone][0]}/common/oauth2/v2.0/authorize`);t.searchParams.set("client_id",e.client_id),t.searchParams.set("response_type","code"),t.searchParams.set("redirect_uri","https://alist.nn.ci/tool/onedrive/callback"),t.searchParams.set("scope","offline_access files.readwrite.all"),t.searchParams.set("state",window.btoa(`${e.client_id}::${e.client_secret}::${e.zone}`)),window.open(t.toString(),"_self")};return(t,r)=>(v(),N(a(h),{vertical:"",size:"large"},{default:l(()=>[A,n(a(q),{value:e.zone,"onUpdate:value":r[0]||(r[0]=s=>e.zone=s),size:"large",options:Object.keys(o).map(s=>({label:o[s][3],value:s}))},null,8,["value","options"]),P,n(a(m),{size:"large",value:e.client_id,"onUpdate:value":r[1]||(r[1]=s=>e.client_id=s)},null,8,["value"]),S,n(a(m),{size:"large",value:e.client_secret,"onUpdate:value":r[2]||(r[2]=s=>e.client_secret=s)},null,8,["value"]),n(a(h),{justify:"center"},{default:l(()=>[n(a(d),{size:"large",secondary:"",onClick:c},{default:l(()=>[u("Create client")]),_:1}),n(a(d),{size:"large",type:"primary",onClick:g},{default:l(()=>[u("Get Refresh Token")]),_:1})]),_:1})]),_:1}))}});const G=z(B,[["__scopeId","data-v-76484c22"],["__file","Request.vue"]]),R=f({__name:"request.html",setup(i){return(o,e)=>{const c=x("NaiveClient");return v(),C("div",null,[n(c,null,{default:l(()=>[n(a(G))]),_:1})])}}}),W=z(R,[["__file","request.html.vue"]]);export{W as default};