import"./assets/modulepreload-polyfill-3cfb730f.js";const o=document.querySelector(".feedback-form");document.querySelector("email");document.querySelector("textarea");o.addEventListener("input",()=>{const t=new FormData(o),e=t.get("email"),a=t.get("message");n("email",e),n("message",a)});window.addEventListener("DOMContentLoaded",()=>{const t=m("email"),e=m("message");o.elements.email.value=t,o.elements.message.value=e});o.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(o),a=e.get("email"),s=e.get("message");!a||!s?alert("Fill please all fields"):(console.log({email:a,message:s}),o.reset(),localStorage.removeItem("email"),localStorage.removeItem("message"))});function n(t,e){const a=JSON.stringify(e);localStorage.setItem(t,a)}function m(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}
//# sourceMappingURL=commonHelpers2.js.map
