// stimulus_reflex@3.5.2 downloaded from https://ga.jspm.io/npm:stimulus_reflex@3.5.2/dist/stimulus_reflex.js

import{Controller as e}from"@hotwired/stimulus";import t,{Utils as o}from"cable_ready";import{createConsumer as r}from"@rails/actioncable";
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */class Toastify{defaults={oldestFirst:true,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:false,close:false,gravity:"toastify-top",positionLeft:false,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:true,onClick:function(){},offset:{x:0,y:0},escapeMarkup:true,ariaLive:"polite",style:{background:""}};constructor(e){this.version="1.12.0";this.options={};this.toastElement=null;this._rootElement=document.body;this._init(e)}showToast(){this.toastElement=this._buildToast();typeof this.options.selector==="string"?this._rootElement=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||this.options.selector instanceof ShadowRoot?this._rootElement=this.options.selector:this._rootElement=document.body;if(!this._rootElement)throw"Root element is not defined";this._rootElement.insertBefore(this.toastElement,this._rootElement.firstChild);this._reposition();this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((()=>{this._removeElement(this.toastElement)}),this.options.duration));return this}hideToast(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue);this._removeElement(this.toastElement)}_init(e){this.options=Object.assign(this.defaults,e);this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');this.toastElement=null;this.options.gravity=e.gravity==="bottom"?"toastify-bottom":"toastify-top";this.options.stopOnFocus=e.stopOnFocus===void 0||e.stopOnFocus;e.backgroundColor&&(this.options.style.background=e.backgroundColor)}_buildToast(){if(!this.options)throw"Toastify is not initialized";let e=document.createElement("div");e.className=`toastify on ${this.options.className}`;e.className+=` toastify-${this.options.position}`;e.className+=` ${this.options.gravity}`;for(const t in this.options.style)e.style[t]=this.options.style[t];this.options.ariaLive&&e.setAttribute("aria-live",this.options.ariaLive);if(this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)e.appendChild(this.options.node);else{this.options.escapeMarkup?e.innerText=this.options.text:e.innerHTML=this.options.text;if(this.options.avatar!==""){let t=document.createElement("img");t.src=this.options.avatar;t.className="toastify-avatar";this.options.position=="left"?e.appendChild(t):e.insertAdjacentElement("afterbegin",t)}}if(this.options.close===true){let t=document.createElement("button");t.type="button";t.setAttribute("aria-label","Close");t.className="toast-close";t.innerHTML="&#10006;";t.addEventListener("click",(e=>{e.stopPropagation();this._removeElement(this.toastElement);window.clearTimeout(this.toastElement.timeOutValue)}));const o=window.innerWidth>0?window.innerWidth:screen.width;this.options.position=="left"&&o>360?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}if(this.options.stopOnFocus&&this.options.duration>0){e.addEventListener("mouseover",(t=>{window.clearTimeout(e.timeOutValue)}));e.addEventListener("mouseleave",(()=>{e.timeOutValue=window.setTimeout((()=>{this._removeElement(e)}),this.options.duration)}))}typeof this.options.destination!=="undefined"&&e.addEventListener("click",(e=>{e.stopPropagation();this.options.newWindow===true?window.open(this.options.destination,"_blank"):window.location=this.options.destination}));typeof this.options.onClick==="function"&&typeof this.options.destination==="undefined"&&e.addEventListener("click",(e=>{e.stopPropagation();this.options.onClick()}));if(typeof this.options.offset==="object"){const t=this._getAxisOffsetAValue("x",this.options);const o=this._getAxisOffsetAValue("y",this.options);const r=this.options.position=="left"?t:`-${t}`;const s=this.options.gravity=="toastify-top"?o:`-${o}`;e.style.transform=`translate(${r},${s})`}return e}_removeElement(e){e.className=e.className.replace(" on","");window.setTimeout((()=>{this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node);e.parentNode&&e.parentNode.removeChild(e);this.options.callback.call(e);this._reposition()}),400)}_reposition(){let e={top:15,bottom:15};let t={top:15,bottom:15};let o={top:15,bottom:15};let r=this._rootElement.querySelectorAll(".toastify");let s;for(let n=0;n<r.length;n++){s=r[n].classList.contains("toastify-top")===true?"toastify-top":"toastify-bottom";let i=r[n].offsetHeight;s=s.substr(9,s.length-1);let l=15;let a=window.innerWidth>0?window.innerWidth:screen.width;if(a<=360){r[n].style[s]=`${o[s]}px`;o[s]+=i+l}else if(r[n].classList.contains("toastify-left")===true){r[n].style[s]=`${e[s]}px`;e[s]+=i+l}else{r[n].style[s]=`${t[s]}px`;t[s]+=i+l}}}_getAxisOffsetAValue(e,t){return t.offset[e]?isNaN(t.offset[e])?t.offset[e]:`${t.offset[e]}px`:"0px"}}function StartToastifyInstance(e){return new Toastify(e)}t.operations.stimulusReflexVersionMismatch=e=>{const t={info:{},success:{background:"#198754",color:"white"},warn:{background:"#ffc107",color:"black"},error:{background:"#dc3545",color:"white"}};const o={selector:setupToastify(),close:true,duration:3e4,gravity:"bottom",position:"right",newWindow:true,style:t[e.level||"info"]};StartToastifyInstance({...o,...e}).showToast()};function setupToastify(){const e="stimulus-reflex-toast-element";let t=document.querySelector(`#${e}`);if(!t){t=document.createElement("div");t.id=e;document.documentElement.appendChild(t);const o=document.createElement("style");o.innerHTML=`\n      #${e} .toastify {\n         padding: 12px 20px;\n         color: #ffffff;\n         display: inline-block;\n         background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n         background: linear-gradient(135deg, #73a5ff, #5477f5);\n         position: fixed;\n         opacity: 0;\n         transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n         border-radius: 2px;\n         cursor: pointer;\n         text-decoration: none;\n         max-width: calc(50% - 20px);\n         z-index: 2147483647;\n         bottom: -150px;\n         right: 15px;\n      }\n\n      #${e} .toastify.on {\n        opacity: 1;\n      }\n\n      #${e} .toast-close {\n        background: transparent;\n        border: 0;\n        color: white;\n        cursor: pointer;\n        font-family: inherit;\n        font-size: 1em;\n        opacity: 0.4;\n        padding: 0 5px;\n      }\n    `;document.head.appendChild(o)}return t}let s=true;var n={get enabled(){return s},get disabled(){return!s},get value(){return s},set(e){s=!!e},set deprecate(e){s=!!e}};let i=false;var l={get enabled(){return i},get disabled(){return!i},get value(){return i},set(e){i=!!e},set debug(e){i=!!e}};const a={reflexAttribute:"data-reflex",reflexPermanentAttribute:"data-reflex-permanent",reflexRootAttribute:"data-reflex-root",reflexSuppressLoggingAttribute:"data-reflex-suppress-logging",reflexDatasetAttribute:"data-reflex-dataset",reflexDatasetAllAttribute:"data-reflex-dataset-all",reflexSerializeFormAttribute:"data-reflex-serialize-form",reflexFormSelectorAttribute:"data-reflex-form-selector",reflexIncludeInnerHtmlAttribute:"data-reflex-include-inner-html",reflexIncludeTextContentAttribute:"data-reflex-include-text-content"};let c={};var d={set(e){c={...a,...e.schema};for(const e in c){const t=e.slice(0,-9);Object.defineProperty(this,t,{get:()=>c[e],configurable:true})}}};const{debounce:u,dispatch:f,xpathToElement:p,xpathToElementArray:m}=o;const uuidv4=()=>{const e=window.crypto||window.msCrypto;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)))};const serializeForm=(e,t={})=>{if(!e)return"";const o=t.w||window;const{element:r}=t;const s=new o.FormData(e);const n=Array.from(s,(e=>e.map(encodeURIComponent).join("=")));const i=e.querySelector("input[type=submit]");r&&r.name&&r.nodeName==="INPUT"&&r.type==="submit"?n.push(`${encodeURIComponent(r.name)}=${encodeURIComponent(r.value)}`):i&&i.name&&n.push(`${encodeURIComponent(i.name)}=${encodeURIComponent(i.value)}`);return Array.from(n).join("&")};const camelize=(e,t=true)=>{if(typeof e!=="string")return"";e=e.replace(/[\s_](.)/g,(e=>e.toUpperCase())).replace(/[\s_]/g,"").replace(/^(.)/,(e=>e.toLowerCase()));t&&(e=e.substr(0,1).toUpperCase()+e.substr(1));return e};const h=p;const g=m;const emitEvent=(e,t={})=>f(document,e,t);const extractReflexName=e=>{const t=e.match(/(?:.*->)?(.*?)(?:Reflex)?#/);return t?t[1]:""};const elementToXPath=e=>{if(e.id!=="")return"//*[@id='"+e.id+"']";if(e===document.body)return"/html/body";if(e.nodeName==="HTML")return"/html";let t=0;const o=e&&e.parentNode?e.parentNode.childNodes:[];for(var r=0;r<o.length;r++){const s=o[r];if(s===e){const o=elementToXPath(e.parentNode);const r=e.tagName.toLowerCase();const s=t+1;return`${o}/${r}[${s}]`}s.nodeType===1&&s.tagName===e.tagName&&t++}};const elementInvalid=e=>e.type==="number"&&e.validity&&e.validity.badInput;const getReflexElement=(e,t)=>e[0]&&e[0].nodeType===Node.ELEMENT_NODE?e.shift():t;const getReflexOptions=e=>{const t={};if(e[0]&&typeof e[0]==="object"&&Object.keys(e[0]).filter((e=>["id","attrs","selectors","reflexId","resolveLate","serializeForm","suppressLogging","includeInnerHTML","includeTextContent"].includes(e))).length){const o=e.shift();Object.keys(o).forEach((e=>{if(e==="reflexId"){n.enabled&&console.warn("reflexId option will be removed in v4. Use id instead.");t.id=o.reflexId}else t[e]=o[e]}))}return t};const getReflexRoots=e=>{let t=[];while(t.length===0&&e){let o=e.getAttribute(d.reflexRoot);if(o){o.length===0&&e.id&&(o=`#${e.id}`);const r=o.split(",").filter((e=>e.trim().length));l.enabled&&r.length===0&&console.error(`No value found for ${d.reflexRoot}. Add an #id to the element or provide a value for ${d.reflexRoot}.`,e);t=t.concat(r.filter((e=>document.querySelector(e))))}e=e.parentElement?e.parentElement.closest(`[${d.reflexRoot}]`):null}return t};const reflexNameToControllerIdentifier=e=>e.replace(/([a-z0–9])([A-Z])/g,"$1-$2").replace(/(::)/g,"--").replace(/-reflex$/gi,"").toLowerCase();const x=["created","before","delivered","queued","after","finalized","success","error","halted","forbidden"];let b;const v=new Proxy({},{get:function(e,t){return x.includes(t)?Object.fromEntries(Object.entries(e).filter((([e,o])=>o.stage===t))):t==="last"?b:t==="all"?e:Reflect.get(...arguments)},set:function(e,t,o){e[t]=o;b=o;return true}});const invokeLifecycleMethod=(e,t)=>{const o=e.controller[["before","after","finalize"].includes(t)?`${t}${camelize(e.action)}`:`${camelize(e.action,false)}${camelize(t)}`];const r=e.controller[["before","after","finalize"].includes(t)?`${t}Reflex`:`reflex${camelize(t)}`];typeof o==="function"&&o.call(e.controller,e.element,e.target,e.error,e.id,e.payload);typeof r==="function"&&r.call(e.controller,e.element,e.target,e.error,e.id,e.payload)};const dispatchLifecycleEvent=(e,t)=>{if(!e.controller.element.parentElement){if(l.enabled&&!e.warned){console.warn(`StimulusReflex was not able execute callbacks or emit events for "${t}" or later life-cycle stages for this Reflex. The StimulusReflex Controller Element is no longer present in the DOM. Could you move the StimulusReflex Controller to an element higher in your DOM?`);e.warned=true}return}e.stage=t;e.lifecycle.push(t);const o=`stimulus-reflex:${t}`;const r=`${o}:${e.action}`;const s={reflex:e.target,controller:e.controller,id:e.id,element:e.element,payload:e.payload};const n={bubbles:true,cancelable:false,detail:s};e.controller.element.dispatchEvent(new CustomEvent(o,n));e.controller.element.dispatchEvent(new CustomEvent(r,n));if(window.jQuery){window.jQuery(e.controller.element).trigger(o,s);window.jQuery(e.controller.element).trigger(r,s)}};document.addEventListener("stimulus-reflex:before",(e=>invokeLifecycleMethod(v[e.detail.id],"before")),true);document.addEventListener("stimulus-reflex:queued",(e=>invokeLifecycleMethod(v[e.detail.id],"queued")),true);document.addEventListener("stimulus-reflex:delivered",(e=>invokeLifecycleMethod(v[e.detail.id],"delivered")),true);document.addEventListener("stimulus-reflex:success",(e=>{const t=v[e.detail.id];invokeLifecycleMethod(t,"success");dispatchLifecycleEvent(t,"after")}),true);document.addEventListener("stimulus-reflex:nothing",(e=>dispatchLifecycleEvent(v[e.detail.id],"success")),true);document.addEventListener("stimulus-reflex:error",(e=>{const t=v[e.detail.id];invokeLifecycleMethod(t,"error");dispatchLifecycleEvent(t,"after")}),true);document.addEventListener("stimulus-reflex:halted",(e=>invokeLifecycleMethod(v[e.detail.id],"halted")),true);document.addEventListener("stimulus-reflex:forbidden",(e=>invokeLifecycleMethod(v[e.detail.id],"forbidden")),true);document.addEventListener("stimulus-reflex:after",(e=>invokeLifecycleMethod(v[e.detail.id],"after")),true);document.addEventListener("stimulus-reflex:finalize",(e=>invokeLifecycleMethod(v[e.detail.id],"finalize")),true);let y={};var w={get app(){return y},set(e){y=e}};let E=false;var _={get disabled(){return!E},set(e){E=e;n.enabled&&!E&&document.addEventListener("DOMContentLoaded",(()=>console.warn("Deprecation warning: the next version of StimulusReflex will standardize isolation mode, and the isolate option will be removed.\nPlease update your applications to assume that every tab will be isolated. Use CableReady operations to broadcast updates to other tabs and users.")),{once:true})}};class Reflex{constructor(e,t){this.data=e.valueOf();this.controller=t;this.element=e.reflexElement;this.id=e.id;this.error=null;this.payload=null;this.stage="created";this.lifecycle=["created"];this.warned=false;this.target=e.target;this.action=e.target.split("#")[1];this.selector=null;this.morph=null;this.operation=null;this.timestamp=new Date;this.cloned=false}get getPromise(){const e=new Promise(((e,t)=>{this.promise={resolve:e,reject:t,data:this.data}}));e.id=this.id;Object.defineProperty(e,"reflexId",{get(){n.enabled&&console.warn("reflexId is deprecated and will be removed from v4. Use id instead.");return this.id}});e.reflex=this;l.enabled&&e.catch((()=>{}));return e}}const received=e=>{if(!e.cableReady)return;if(e.version.replace(".pre","-pre").replace(".rc","-rc")!==t.version){const o=`CableReady failed to execute your reflex action due to a version mismatch between your gem and JavaScript version. Package versions must match exactly.\n\ncable_ready gem: ${e.version}\ncable_ready npm: ${t.version}`;console.error(o);l.enabled&&t.operations.stimulusReflexVersionMismatch({text:o,level:"error"});return}let o=[];for(let t=e.operations.length-1;t>=0;t--)if(e.operations[t].stimulusReflex){o.push(e.operations[t]);e.operations.splice(t,1)}if(o.some((e=>e.stimulusReflex.url!==location.href))&&l.enabled){console.error("Reflex failed due to mismatched URL.");return}let r;if(o.length){r=o[0].stimulusReflex;r.payload=o[0].payload}if(r){const{id:s,payload:n}=r;let i;if(!v[s]&&_.disabled){const e=h(r.xpathController);const t=h(r.xpathElement);e.reflexController=e.reflexController||{};e.reflexData=e.reflexData||{};e.reflexError=e.reflexError||{};const o=w.app.getControllerForElementAndIdentifier(e,r.reflexController);e.reflexController[s]=o;e.reflexData[s]=r;i=new Reflex(r,o);v[s]=i;i.cloned=true;i.element=t;o.lastReflex=i;dispatchLifecycleEvent(i,"before");i.getPromise}else i=v[s];if(i){i.payload=n;i.totalOperations=o.length;i.pendingOperations=o.length;i.completedOperations=0;i.piggybackOperations=e.operations;t.perform(o)}}else e.operations.length&&v[e.operations[0].reflexId]&&t.perform(e.operations)};let C;let R;let L;let $;const initialize$1=(e,t)=>{C=e;R=t;document.addEventListener("DOMContentLoaded",(()=>{$=false;connectionStatusClass();n.enabled&&e&&console.warn("Deprecation warning: the next version of StimulusReflex will obtain a reference to consumer via the Stimulus application object.\nPlease add 'application.consumer = consumer' to your index.js after your Stimulus application has been established, and remove the consumer key from your StimulusReflex initialize() options object.")}));document.addEventListener("turbolinks:load",connectionStatusClass);document.addEventListener("turbo:load",connectionStatusClass)};const subscribe=e=>{if(L)return;C=C||e.application.consumer||r();const{channel:t}=e.StimulusReflex;const o={channel:t,...R};const s=JSON.stringify(o);L=C.subscriptions.findAll(s)[0]||C.subscriptions.create(o,{received:received,connected:connected,rejected:rejected,disconnected:disconnected})};const connected=()=>{$=true;connectionStatusClass();emitEvent("stimulus-reflex:connected");Object.values(v.queued).forEach((e=>{L.send(e.data);dispatchLifecycleEvent(e,"delivered")}))};const rejected=()=>{$=false;connectionStatusClass();emitEvent("stimulus-reflex:rejected");Debug.enabled&&console.warn("Channel subscription was rejected.")};const disconnected=e=>{$=false;connectionStatusClass();emitEvent("stimulus-reflex:disconnected",e)};const deliver=e=>{if($){L.send(e.data);dispatchLifecycleEvent(e,"delivered")}else dispatchLifecycleEvent(e,"queued")};const connectionStatusClass=()=>{const e=document.body.classList;e.contains("stimulus-reflex-connected")||e.contains("stimulus-reflex-disconnected")?$?e.replace("stimulus-reflex-disconnected","stimulus-reflex-connected"):e.replace("stimulus-reflex-connected","stimulus-reflex-disconnected"):e.add($?"stimulus-reflex-connected":"stimulus-reflex-disconnected")};var A={subscribe:subscribe,deliver:deliver,initialize:initialize$1};const request=e=>{l.disabled||e.data.suppressLogging||console.log(`↑ stimulus ↑ ${e.target}`,{id:e.id,args:e.data.args,controller:e.controller.identifier,element:e.element,controllerElement:e.controller.element})};const success=e=>{if(l.disabled||e.data.suppressLogging)return;const t={id:e.id,morph:e.morph,payload:e.payload};e.operation!=="dispatch_event"&&(t.operation=e.operation);console.log(`↓ reflex ↓ ${e.target} → ${e.selector||"∞"}${progress(e)} ${duration(e)}`,t)};const halted$1=e=>{l.disabled||e.data.suppressLogging||console.log(`↓ reflex ↓ ${e.target} ${duration(e)} %cHALTED`,"color: #ffa500;",{id:e.id,payload:e.payload})};const forbidden$1=e=>{l.disabled||e.data.suppressLogging||console.log(`↓ reflex ↓ ${e.target} ${duration(e)} %cFORBIDDEN`,"color: #BF40BF;",{id:e.id,payload:e.payload})};const error$1=e=>{l.disabled||e.data.suppressLogging||console.log(`↓ reflex ↓ ${e.target} ${duration(e)} %cERROR: ${e.error}`,"color: #f00;",{id:e.id,payload:e.payload})};const duration=e=>e.cloned?"CLONED":`in ${new Date-e.timestamp}ms`;const progress=e=>e.totalOperations>1?` ${e.completedOperations}/${e.totalOperations}`:"";var O={request:request,success:success,halted:halted$1,forbidden:forbidden$1,error:error$1};const multipleInstances=e=>!!["checkbox","radio"].includes(e.type)&&document.querySelectorAll(`input[type="${e.type}"][name="${e.name}"]`).length>1;const collectCheckedOptions=e=>Array.from(e.querySelectorAll("option:checked")).concat(Array.from(document.querySelectorAll(`input[type="${e.type}"][name="${e.name}"]`)).filter((e=>e.checked))).map((e=>e.value));const attributeValue=(e=[])=>{const t=Array.from(new Set(e.filter((e=>e&&String(e).length)).map((e=>e.trim())))).join(" ").trim();return t.length>0?t:null};const attributeValues=e=>e&&e.length?e.split(" ").filter((e=>e.trim().length)):[];const extractElementAttributes=e=>{let t=Array.from(e.attributes).reduce(((e,t)=>{e[t.name]=t.value;return e}),{});t.checked=!!e.checked;t.selected=!!e.selected;t.tag_name=e.tagName;if(e.tagName.match(/select/i)||multipleInstances(e)){const o=collectCheckedOptions(e);t.values=o;t.value=o.join(",")}else t.value=e.value;return t};const getElementsFromTokens=(e,t)=>{if(!t||t.length===0)return[];let o=[e];const r=elementToXPath(e);t.forEach((e=>{try{switch(e){case"combined":n.enabled&&console.warn("In the next version of StimulusReflex, the 'combined' option to data-reflex-dataset will become 'ancestors'.");o=[...o,...g(`${r}/ancestor::*`,true)];break;case"ancestors":o=[...o,...g(`${r}/ancestor::*`,true)];break;case"parent":o=[...o,...g(`${r}/parent::*`)];break;case"siblings":o=[...o,...g(`${r}/preceding-sibling::*|${r}/following-sibling::*`)];break;case"children":o=[...o,...g(`${r}/child::*`)];break;case"descendants":o=[...o,...g(`${r}/descendant::*`)];break;default:o=[...o,...document.querySelectorAll(e)]}}catch(e){l.enabled&&console.error(e)}}));return o};const extractElementDataset=e=>{const t=e.attributes[d.reflexDataset];const o=e.attributes[d.reflexDatasetAll];const r=t&&t.value.split(" ")||[];const s=o&&o.value.split(" ")||[];const n=getElementsFromTokens(e,r);const i=getElementsFromTokens(e,s);const l=n.reduce(((e,t)=>({...extractDataAttributes(t),...e})),{});const a=extractDataAttributes(e);const c={dataset:{...a,...l},datasetAll:{}};i.forEach((e=>{const t=extractDataAttributes(e);Object.keys(t).forEach((e=>{const o=t[e];c.datasetAll[e]&&Array.isArray(c.datasetAll[e])?c.datasetAll[e].push(o):c.datasetAll[e]=[o]}))}));return c};const extractDataAttributes=e=>{let t={};e&&e.attributes&&Array.from(e.attributes).forEach((e=>{e.name.startsWith("data-")&&(t[e.name]=e.value)}));return t};var k="stimulus_reflex";var S="3.5.2";var T="Build reactive applications with the Rails tooling you already know and love.";var j=["ruby","rails","websockets","actioncable","turbolinks","reactive","cable","ujs","ssr","stimulus","reflex","stimulus_reflex","dom","morphdom"];var N="https://docs.stimulusreflex.com";var I="https://github.com/stimulusreflex/stimulus_reflex/issues";var D="https://github.com/stimulusreflex/stimulus_reflex";var z="MIT";var F="Nathan Hopkins <natehop@gmail.com>";var M=["Andrew Mason <andrewmcodes@protonmail.com>","Julian Rubisch <julian@julianrubisch.at>","Marco Roth <marco.roth@intergga.ch>","Nathan Hopkins <natehop@gmail.com>"];var P="./dist/stimulus_reflex.js";var H="./dist/stimulus_reflex.js";var q="./dist/stimulus_reflex.js";var U="./dist/stimulus_reflex.umd.js";var V="./dist/stimulus_reflex.umd.js";var W=["dist/*","javascript/*"];var B={lint:"yarn run format --check",format:"yarn run prettier-standard ./javascript/**/*.js rollup.config.mjs",build:"yarn rollup -c","build:watch":"yarn rollup -wc",watch:"yarn build:watch",test:"web-test-runner javascript/test/**/*.test.js","test:watch":"yarn test --watch","docs:dev":"vitepress dev docs","docs:build":"vitepress build docs && cp docs/_redirects docs/.vitepress/dist","docs:preview":"vitepress preview docs"};var J={"@hotwired/stimulus":">= 3.0"};var Q={"@hotwired/stimulus":"^3","@rails/actioncable":"^6 || ^7",cable_ready:"^5.0.5"};var Z={"@open-wc/testing":"^3.1.7","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.0.1","@rollup/plugin-terser":"^0.4.0","@web/dev-server-esbuild":"^0.3.3","@web/dev-server-rollup":"^0.3.21","@web/test-runner":"^0.15.1","prettier-standard":"^16.4.1",rollup:"^3.19.1","toastify-js":"^1.12.0",vitepress:"^1.0.0-beta.1"};var G={name:k,version:S,description:T,keywords:j,homepage:N,bugs:I,repository:D,license:z,author:F,contributors:M,main:P,module:H,browser:q,import:"./dist/stimulus_reflex.js",unpkg:U,umd:V,files:W,scripts:B,peerDependencies:J,dependencies:Q,devDependencies:Z};class ReflexData{constructor(e,t,o,r,s,n,i,l,a){this.options=e;this.reflexElement=t;this.controllerElement=o;this.reflexController=r;this.permanentAttributeName=s;this.target=n;this.args=i;this.url=l;this.tabId=a}get attrs(){this._attrs=this._attrs||this.options.attrs||extractElementAttributes(this.reflexElement);return this._attrs}get id(){this._id=this._id||this.options.id||uuidv4();return this._id}get selectors(){this._selectors=this._selectors||this.options.selectors||getReflexRoots(this.reflexElement);return typeof this._selectors==="string"?[this._selectors]:this._selectors}get resolveLate(){return this.options.resolveLate||false}get dataset(){this._dataset=this._dataset||extractElementDataset(this.reflexElement);return this._dataset}get innerHTML(){return this.includeInnerHtml?this.reflexElement.innerHTML:""}get textContent(){return this.includeTextContent?this.reflexElement.textContent:""}get xpathController(){return elementToXPath(this.controllerElement)}get xpathElement(){return elementToXPath(this.reflexElement)}get formSelector(){const e=this.reflexElement.attributes[d.reflexFormSelector]?this.reflexElement.attributes[d.reflexFormSelector].value:void 0;return this.options.formSelector||e}get includeInnerHtml(){const e=this.reflexElement.attributes[d.reflexIncludeInnerHtml]||false;return!(!this.options.includeInnerHTML&&!e)&&e.value!=="false"}get includeTextContent(){const e=this.reflexElement.attributes[d.reflexIncludeTextContent]||false;return!(!this.options.includeTextContent&&!e)&&e.value!=="false"}get suppressLogging(){return this.options.suppressLogging||this.reflexElement.attributes[d.reflexSuppressLogging]||false}valueOf(){return{attrs:this.attrs,dataset:this.dataset,selectors:this.selectors,id:this.id,resolveLate:this.resolveLate,suppressLogging:this.suppressLogging,xpathController:this.xpathController,xpathElement:this.xpathElement,inner_html:this.innerHTML,text_content:this.textContent,formSelector:this.formSelector,reflexController:this.reflexController,permanentAttributeName:this.permanentAttributeName,target:this.target,args:this.args,url:this.url,tabId:this.tabId,version:G.version}}}let K={};var X={get plugin(){return K},set(e){K=e}};const beforeDOMUpdate=e=>{const{stimulusReflex:t}=e.detail||{};if(!t)return;const o=v[t.id];o.pendingOperations--;if(!(o.pendingOperations>0)){t.resolveLate||setTimeout((()=>o.promise.resolve({element:o.element,event:e,data:o.data,payload:o.payload,id:o.id,toString:()=>""})));setTimeout((()=>dispatchLifecycleEvent(o,"success")))}};const afterDOMUpdate=e=>{const{stimulusReflex:o}=e.detail||{};if(!o)return;const r=v[o.id];r.completedOperations++;r.selector=e.detail.selector;r.morph=e.detail.stimulusReflex.morph;r.operation=e.type.split(":")[1].split("-").slice(1).join("_");O.success(r);if(!(r.completedOperations<r.totalOperations)){o.resolveLate&&setTimeout((()=>r.promise.resolve({element:r.element,event:e,data:r.data,payload:r.payload,id:r.id,toString:()=>""})));setTimeout((()=>dispatchLifecycleEvent(r,"finalize")));r.piggybackOperations.length&&t.perform(r.piggybackOperations)}};const routeReflexEvent=e=>{const{stimulusReflex:o,name:r}=e.detail||{};const s=r.split("-")[2];const n={nothing:nothing,halted:halted,forbidden:forbidden,error:error};if(!o||!Object.keys(n).includes(s))return;const i=v[o.id];i.completedOperations++;i.pendingOperations--;i.selector=e.detail.selector;i.morph=e.detail.stimulusReflex.morph;i.operation=e.type.split(":")[1].split("-").slice(1).join("_");s==="error"&&(i.error=e.detail.error);n[s](i,e);setTimeout((()=>dispatchLifecycleEvent(i,s)));i.piggybackOperations.length&&t.perform(i.piggybackOperations)};const nothing=(e,t)=>{O.success(e);setTimeout((()=>e.promise.resolve({data:e.data,element:e.element,event:t,payload:e.payload,id:e.id,toString:()=>""})))};const halted=(e,t)=>{O.halted(e,t);setTimeout((()=>e.promise.resolve({data:e.data,element:e.element,event:t,payload:e.payload,id:e.id,toString:()=>""})))};const forbidden=(e,t)=>{O.forbidden(e,t);setTimeout((()=>e.promise.resolve({data:e.data,element:e.element,event:t,payload:e.payload,id:e.id,toString:()=>""})))};const error=(e,t)=>{O.error(e,t);setTimeout((()=>e.promise.reject({data:e.data,element:e.element,event:t,payload:e.payload,id:e.id,error:e.error,toString:()=>e.error})))};const localReflexControllers=e=>{const t=attributeValues(e.getAttribute(d.controller));const o=t.map((t=>w.app.getControllerForElementAndIdentifier(e,t)));return o.filter((e=>e&&e.StimulusReflex))};const allReflexControllers=e=>{let t=[];while(e){t=t.concat(localReflexControllers(e));e=e.parentElement}return t};const findControllerByReflexName=(e,t)=>{const o=t.find((t=>{if(!t||!t.identifier)return;const o=reflexNameToControllerIdentifier(extractReflexName(e));return o===t.identifier}));return o};const Y=u((()=>{const e=document.querySelectorAll(`[${d.reflex}]`);e.forEach((e=>scanForReflexesOnElement(e)))}),20);const scanForReflexesOnElement=(e,t=null)=>{const o=e.getAttribute(d.controller);const r=attributeValues(o).filter((e=>e!=="stimulus-reflex"));const s=e.getAttribute(d.reflex);const n=attributeValues(s);const i=e.getAttribute(d.action);const l=attributeValues(i).filter((e=>!e.includes("#__perform")));n.forEach((o=>{const s=[t].concat(allReflexControllers(e));t=findControllerByReflexName(o,s);const n=t?t.identifier:"stimulus-reflex";l.push(`${o.split("->")[0]}->${n}#__perform`);const i=e.closest(`[data-controller~=${n}]`);const a=e===i&&n==="stimulus-reflex";i&&!a||r.push(n)}));const a=attributeValue(r);const c=attributeValue(l);let u=false;if(a&&e.getAttribute(d.controller)!=a){e.setAttribute(d.controller,a);u=true}if(c&&e.getAttribute(d.action)!=c){e.setAttribute(d.action,c);u=true}u&&f(e,"stimulus-reflex:ready",{reflex:s,controller:a,action:c,element:e})};class StimulusReflexController extends e{constructor(...e){super(...e);register(this)}}const ee=uuidv4();const initialize=(e,{controller:t,consumer:o,debug:r,params:s,isolate:i,deprecate:a,transport:c}={})=>{X.set(c||A);X.plugin.initialize(o,s);_.set(!!i);w.set(e);d.set(e);w.app.register("stimulus-reflex",t||StimulusReflexController);l.set(!!r);typeof a!=="undefined"&&n.set(a);const u=new MutationObserver(Y);u.observe(document.documentElement,{attributeFilter:[d.reflex,d.action],childList:true,subtree:true});emitEvent("stimulus-reflex:initialized")};const register=(e,t={})=>{const o="StimulusReflex::Channel";e.StimulusReflex={...t,channel:o};X.plugin.subscribe(e);Object.assign(e,{stimulate(){const e=location.href;const t=this.element;const o=Array.from(arguments);const r=o.shift()||"StimulusReflex::Reflex#default_reflex";const s=getReflexElement(o,t);if(elementInvalid(s)){l.enabled&&console.warn("Reflex aborted: invalid numeric input");return}const i=getReflexOptions(o);const a=new ReflexData(i,s,t,this.identifier,d.reflexPermanent,r,o,e,ee);const c=a.id;t.reflexController=t.reflexController||{};t.reflexData=t.reflexData||{};t.reflexError=t.reflexError||{};t.reflexController[c]=this;t.reflexData[c]=a.valueOf();const u=new Reflex(a,this);v[c]=u;this.lastReflex=u;dispatchLifecycleEvent(u,"before");setTimeout((()=>{const{params:e}=t.reflexData[c]||{};const o=s.attributes[d.reflexSerializeForm];o&&(i.serializeForm=o.value!=="false");const r=s.closest(a.formSelector)||document.querySelector(a.formSelector)||s.closest("form");n.enabled&&i.serializeForm===void 0&&r&&console.warn(`Deprecation warning: the next version of StimulusReflex will not serialize forms by default.\nPlease set ${d.reflexSerializeForm}="true" on your Reflex Controller Element or pass { serializeForm: true } as an option to stimulate.`);const l=i.serializeForm===false?"":serializeForm(r,{element:s});u.data={...a.valueOf(),params:e,formData:l};t.reflexData[c]=u.data;X.plugin.deliver(u)}));O.request(u);return u.getPromise},__perform(e){let t=e.target;let o;while(t&&!o){o=t.getAttribute(d.reflex);o&&o.trim().length||(t=t.parentElement)}const r=attributeValues(o).find((t=>t.split("->")[0]===e.type));if(r){e.preventDefault();e.stopPropagation();this.stimulate(r.split("->")[1],t)}}});e.reflexes||Object.defineProperty(e,"reflexes",{get(){return new Proxy(v,{get:function(e,t){return t==="last"?this.lastReflex:Object.fromEntries(Object.entries(e[t]).filter((([e,t])=>t.controller===this)))}.bind(this)})}});scanForReflexesOnElement(e.element,e);emitEvent("stimulus-reflex:controller-registered",{detail:{controller:e}})};const useReflex=(e,t={})=>{register(e,t)};document.addEventListener("cable-ready:after-dispatch-event",routeReflexEvent);document.addEventListener("cable-ready:before-inner-html",beforeDOMUpdate);document.addEventListener("cable-ready:before-morph",beforeDOMUpdate);document.addEventListener("cable-ready:after-inner-html",afterDOMUpdate);document.addEventListener("cable-ready:after-morph",afterDOMUpdate);document.addEventListener("readystatechange",(()=>{document.readyState==="complete"&&Y()}));var te=Object.freeze({__proto__:null,StimulusReflexController:StimulusReflexController,initialize:initialize,reflexes:v,register:register,scanForReflexes:Y,scanForReflexesOnElement:scanForReflexesOnElement,useReflex:useReflex});const oe={version:G.version,...te,get debug(){return l.value},set debug(e){l.set(!!e)},get deprecate(){return n.value},set deprecate(e){n.set(!!e)}};window.StimulusReflex=oe;export{StimulusReflexController,oe as default,initialize,v as reflexes,register,Y as scanForReflexes,scanForReflexesOnElement,useReflex};
