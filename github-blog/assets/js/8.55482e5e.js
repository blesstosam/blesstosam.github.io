(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{199:function(n,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"优雅捕获-async-错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优雅捕获-async-错误","aria-hidden":"true"}},[n._v("#")]),n._v(" 优雅捕获 async 错误")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function foo() {\n    try {\n        let res = await asyncFunc()\n        try {\n            let res2 = await anyncFunc2()\n        } catch (e1) {\n            // ...\n        }\n    } catch (e2) {\n        // ...\n    }\n}\n")])])]),a("p",[n._v("上述函数如果有多层嵌套, 在try catch 里嵌套 try catch 会变的很难看，可读性也会下降（参考回调地域）")]),n._v(" "),a("p",[n._v("如下，在网上发现的")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function errorCaptured(asyncFunc) {\n    try {\n        let res = await asyncFunc()\n        return [null, res]\n    } catch (e) {\n        return [e, null]\n    }\n} \n")])])]),a("p",[n._v("上述写法就可以变成以下写法")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("async function foo() {\n    let [err, res] = await errorCaptured(asyncFunc)\n    if (err) {\n        // ...\n        return;\n    }\n    \n    let [err, res] = await errorCaptured(asyncFunc2)\n    if (err) {\n        // ...\n        return;\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);