"use strict";
(() => {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 247:
/***/ ((module) => {

module.exports = require("docx");

/***/ }),

/***/ 544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(docx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_1__]);
node_fetch__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// pages/api/markdown-to-docx.js


async function handler(req, res) {
    try {
        // Fetch markdown content from an API
        const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/chat");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const markdownContent = await response.text();
        // Create a new Word document
        const doc = new docx__WEBPACK_IMPORTED_MODULE_0__.Document();
        // Split the markdown content into paragraphs
        const paragraphs = markdownContent.split("\n\n");
        // Add each paragraph to the Word document
        paragraphs.forEach((paragraph)=>{
            doc.addSection({
                children: [
                    new docx__WEBPACK_IMPORTED_MODULE_0__.Paragraph({
                        text: paragraph.replace(/\n/g, " ")
                    })
                ]
            });
        });
        // Convert the Word document to a binary buffer
        const buffer = await docx__WEBPACK_IMPORTED_MODULE_0__.Packer.toBuffer(doc);
        // Set the response headers
        res.setHeader("Content-Disposition", "attachment; filename=markdown-content.docx");
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        // Send the buffer as the response
        res.status(200).send(buffer);
        console.log("Successful conversion to docx");
    } catch (error) {
        console.error("Error fetching markdown content:", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(646));
module.exports = __webpack_exports__;

})();