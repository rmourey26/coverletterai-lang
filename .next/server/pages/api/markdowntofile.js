"use strict";
(() => {
var exports = {};
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 109:
/***/ ((module) => {

module.exports = require("file-saver");

/***/ }),

/***/ 394:
/***/ ((module) => {

module.exports = require("markdown-to-txt");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 134:
/***/ ((module) => {

module.exports = import("isomorphic-unfetch");;

/***/ }),

/***/ 132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var markdown_to_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(394);
/* harmony import */ var markdown_to_txt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_to_txt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(109);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__]);
isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MarkdownToFile = ()=>{
    const [markdown, setMarkdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleClick = async ()=>{
        const res = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/chat");
        const data = await res.json();
        const converter = new (markdown_to_txt__WEBPACK_IMPORTED_MODULE_3___default())();
        const text = converter.parse(data.markdown);
        const blob = new Blob([
            text
        ], {
            type: "text/plain;charset=utf-8"
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(blob, "file.txt");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: handleClick,
            children: "Download"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownToFile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(132));
module.exports = __webpack_exports__;

})();