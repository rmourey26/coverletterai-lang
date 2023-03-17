"use strict";
(() => {
var exports = {};
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 94:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformStreamToFile)
/* harmony export */ });
async function fetchDataAsStream(url, payload, apiKey, signal) {
    const response = await fetch("api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload),
        signal
    });
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.body;
}
async function transformStreamToFile(stream, fileName, mimeType = "application/json") {
    const reader = stream.getReader();
    const chunks = [];
    while(true){
        const { done , value  } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
    }
    const data = new Blob(chunks, {
        type: mimeType
    });
    const previewUrl = URL.createObjectURL(data);
    return {
        name: fileName,
        data,
        previewUrl
    };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(94));
module.exports = __webpack_exports__;

})();