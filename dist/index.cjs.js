"use strict";var t=require("react");function r(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,u,o,l,a=[],i=!0,c=!1;try{if(o=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;i=!1}else for(;!(i=(n=o.call(e)).done)&&(a.push(n.value),a.length!==r);i=!0);}catch(t){c=!0,u=t}finally{try{if(!i&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw u}}return a}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}exports.CounterComponent=function(){var e=r(t.useState(0),2),n=e[0],u=e[1];return t.createElement("div",null,t.createElement("p",null,"Currently, the count is ",n),t.createElement("button",{onClick:function(){return u(n-1)}},"Subtract"),t.createElement("button",{onClick:function(){return u(n+1)}},"Add"))};