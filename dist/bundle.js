!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Paragraph=e():t.Paragraph=e()}(self,(function(){return(()=>{var t={966:(t,e,n)=>{function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}n(548).toString();var i=function(){function t(e){var n=e.data,a=e.config,i=e.api,r=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=i,this.config=a,this.readOnly=r,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph",alignment:{left:"ce-paragraph--left",center:"ce-paragraph--center",right:"ce-paragraph--right",justify:"ce-paragraph--justify"}},this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,settingsButtonDisabled:this.api.styles.settingsButtonDisabled},this.settings=[{name:"left",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"center",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z"/></svg>'},{name:"right",icon:'<svg xmlns="http://www.w3.org/2000/svg" id="Layer" enable-background="new 0 0 64 64" height="20" viewBox="0 0 64 64" width="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 19h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path d="m54 41h-28c-1.104 0-2 .896-2 2s.896 2 2 2h28c1.104 0 2-.896 2-2s-.896-2-2-2z"/></svg>'},{name:"justify",icon:'<svg viewBox="0 0 64 64" width="20" height="20"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.867 19 L 10.914 19 C 9.26 19 7.918 19.896 7.918 21 C 7.918 22.104 9.26 23 10.914 23 L 52.867 23 C 54.522 23 55.863 22.104 55.863 21 C 55.863 19.896 54.522 19 52.867 19 Z" style=""></path><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z"></path><path d="M 52.779 41 L 11.113 41 C 9.469 41 8.136 41.896 8.136 43 C 8.136 44.104 9.469 45 11.113 45 L 52.779 45 C 54.421 45 55.754 44.104 55.754 43 C 55.754 41.896 54.421 41 52.779 41 Z" style=""></path></svg>'}],this.onKeyUp=this.onKeyUp.bind(this),this._placeholder=a.placeholder?a.placeholder:t.DEFAULT_PLACEHOLDER,this._data={text:n.text||"",alignment:n.alignment||a.defaultAlignment||t.DEFAULT_ALIGNMENT,lineHeight:n.lineHeight||a.defaultLineHeight||t.DEFAULT_LINE_HEIGHT},this._element=this.drawView(),this.data=n,this._preserveBlank=void 0!==a.preserveBlank&&a.preserveBlank}var e,i,r;return e=t,r=[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}},{key:"ALIGNMENTS",get:function(){return{left:"left",center:"center",right:"right",justify:"justify"}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"DEFAULT_ALIGNMENT",get:function(){return t.ALIGNMENTS.left}},{key:"DEFAULT_LINE_HEIGHT",get:function(){return 1.6}},{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0},alignment:{},lineHeight:1.6}}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:n(95).Z,title:"Text"}}}],(i=[{key:"onKeyUp",value:function(t){"Backspace"!==t.code&&"Delete"!==t.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block,this._CSS.alignment[this.data.alignment]),t.style.lineHeight="".concat(this.data.lineHeight,"em"),t.contentEditable=!this.readOnly,t.dataset.placeholder=this.api.i18n.t(this._placeholder),t.innerHTML=this.data.text,t.addEventListener("keyup",this.onKeyUp),t}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(t){var e={text:this.data.text+=t.text,alignment:this.data.alignment,lineHeight:this.data.lineHeight};this._element.innerHTML=this.data.text,this.data=e}},{key:"validate",value:function(t){return!(""===t.text.trim()&&!this._preserveBlank)}},{key:"save",value:function(t){return Object.assign(this.data,{text:t.innerHTML})}},{key:"onPaste",value:function(e){var n={text:e.detail.data.innerHTML,alignment:this.config.defaultAlignment||t.DEFAULT_ALIGNMENT,lineHeight:this.config.defaultLineHeight||t.DEFAULT_LINE_HEIGHT};this.data=n}},{key:"data",get:function(){return this._data},set:function(e){this._data={text:e.text||"",alignment:e.alignment||this.config.defaultAlignment||t.DEFAULT_ALIGNMENT,lineHeight:e.lineHeight||this.config.defaultLineHeight||t.DEFAULT_LINE_HEIGHT},this._element.innerHTML=this._data.text||""}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");a.classList.add("cdx-settings-button"),a.innerHTML='<svg class="icon icon--arrow-up" width="14px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-up"></use></svg>',a.addEventListener("click",(function(){var e=+t.data.lineHeight+.2;r(e),t._setLineHeight(e)})),n.appendChild(a);var i=document.createElement("div");i.classList.add("cdx-settings-button"),i.innerHTML="<span>".concat(this.data.lineHeight,"</span>");var r=function(t){i.innerHTML="<span>".concat(t,"</span>")};n.appendChild(i);var s=document.createElement("div");return s.classList.add("cdx-settings-button"),s.classList.toggle(this.CSS.settingsButtonDisabled,+this.data.lineHeight<=.2),s.innerHTML='<svg class="icon icon--arrow-down" width="14px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use></svg>',s.addEventListener("click",(function(){if(+t.data.lineHeight>.2){var e=+t.data.lineHeight-.2;r(e),t._setLineHeight(e)}})),n.appendChild(s),e.appendChild(n),this.settings.map((function(n){var a=document.createElement("div");return a.classList.add("cdx-settings-button"),a.innerHTML=n.icon,a.classList.toggle(t.CSS.settingsButtonActive,n.name===t.data.alignment),e.appendChild(a),a})).forEach((function(e,n,a){e.addEventListener("click",(function(){t._toggleTune(t.settings[n].name),a.forEach((function(e,n){var a=t.settings[n].name;e.classList.toggle(t.CSS.settingsButtonActive,a===t.data.alignment),t._element.classList.toggle(t._CSS.alignment[a],a===t.data.alignment)}))}))})),e}},{key:"_toggleTune",value:function(t){this.data.alignment=t}},{key:"_setLineHeight",value:function(t){this.data.lineHeight=t,this._element.style.lineHeight="".concat(t,"em")}}])&&a(e.prototype,i),r&&a(e,r),t}();t.exports=i},424:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var a=n(81),i=n.n(a),r=n(645),s=n.n(r)()(i());s.push([t.id,".ce-paragraph {\n    outline: none;\n}\n.ce-paragraph--right {\n    text-align: right;\n}\n.ce-paragraph--center {\n    text-align: center;\n}\n.ce-paragraph--left {\n    text-align: left;\n}\n\n.ce-paragraph--justify {\n    text-align: justify;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n\n\n.svg-icon {\n    width: 1em;\n    height: 1em;\n}\n\n.svg-icon path,\n.svg-icon polygon,\n.svg-icon rect {\n    fill: #4691f6;\n}\n\n.svg-icon circle {\n    stroke: #4691f6;\n    stroke-width: 1;\n}",""]);const o=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var h=[].concat(t[l]);a&&s[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),e.push(h))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},95:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'},548:(t,e,n)=>{"use strict";var a=n(379),i=n.n(a),r=n(795),s=n.n(r),o=n(569),c=n.n(o),l=n(565),h=n.n(l),d=n(216),p=n.n(d),u=n(589),g=n.n(u),f=n(424),m={};m.styleTagTransform=g(),m.setAttributes=h(),m.insert=c().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=p(),i()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var r={},s=[],o=0;o<t.length;o++){var c=t[o],l=a.base?c[0]+a.base:c[0],h=r[l]||0,d="".concat(l," ").concat(h);r[l]=h+1;var p=n(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var g=i(u,a);a.byIndex=o,e.splice(o,0,{identifier:d,updater:g,references:1})}s.push(d)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=a(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<r.length;s++){var o=n(r[s]);e[o].references--}for(var c=a(t,i),l=0;l<r.length;l++){var h=n(r[l]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}r=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={id:a,exports:{}};return t[a](r,r.exports,n),r.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(966)})()}));