import t,{useState as r}from"react";function e(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,u,l,a=[],i=!0,c=!1;try{if(u=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;i=!1}else for(;!(i=(n=u.call(e)).done)&&(a.push(n.value),a.length!==r);i=!0);}catch(t){c=!0,o=t}finally{try{if(!i&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var o=function(){var n=e(r(0),2),o=n[0],u=n[1];return t.createElement("div",null,t.createElement("p",null,"Currently, the count is ",o),t.createElement("button",{onClick:function(){return u(o-1)}},"Subtract"),t.createElement("button",{onClick:function(){return u(o+1)}},"Add"))};export{o as CounterComponent};