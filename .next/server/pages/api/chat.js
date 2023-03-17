"use strict";
(() => {
var exports = {};
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ chat)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/chat.js
// Make sure to add OPENAI_API_KEY as a secret

const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
/* harmony default export */ async function chat(req, res) {
    const completion = await openai.createChatCompletion({
        // You need early access to GPT-4, otherwise use "gpt-3.5-turbo"
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "You generate cover letters for job applications."
            }
        ].concat(req.body.messages),
        stream: true
    });
    res.status(200).json({
        result: completion.data.choices[0].message
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(44));
module.exports = __webpack_exports__;

})();