exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 285:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__nLjiQ",
	"header": "Home_header__GCVRv",
	"btn": "Home_btn__UGRT9",
	"topnav": "Home_topnav__BfkuW",
	"navlogo": "Home_navlogo__AhPAx",
	"navlinks": "Home_navlinks__mBPil",
	"apptitle": "Home_apptitle__ajcBb",
	"appdescription": "Home_appdescription__3WT4M",
	"link": "Home_link__mt0ji",
	"cloudform": "Home_cloudform__W4PLJ",
	"textarea": "Home_textarea__lSHf7",
	"generatebutton": "Home_generatebutton__omKYX",
	"loadingwheel": "Home_loadingwheel__IWJnE",
	"svgicon": "Home_svgicon__PLaWz",
	"messagelist": "Home_messagelist__YHr8p",
	"letterlist": "Home_letterlist__HxZRR",
	"messagelistloading": "Home_messagelistloading__tlCYV",
	"usermessage": "Home_usermessage__tWHWR",
	"usermessagewaiting": "Home_usermessagewaiting__PYv_4",
	"loading-gradient": "Home_loading-gradient__8jpVG",
	"apimessage": "Home_apimessage__VhfTn",
	"fadein": "Home_fadein__CBLON",
	"markdownanswer": "Home_markdownanswer__UUDfu",
	"boticon": "Home_boticon__Xr0Q4",
	"usericon": "Home_usericon___BrVD",
	"letteranswer": "Home_letteranswer__Z5jxO",
	"letternanswer": "Home_letternanswer__9ITLx",
	"lettanswer": "Home_lettanswer__HcGlE",
	"center": "Home_center__4BFgC",
	"cloud": "Home_cloud__S7par",
	"pointsnormal": "Home_pointsnormal__yRwA_",
	"pointsdim": "Home_pointsdim__x_zcw",
	"footer": "Home_footer____T7K"
};


/***/ }),

/***/ 525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(924);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(285);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// pages/download-array.js




const DownloadArray = ()=>{
    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dmessages, setDmessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            role: "assistant",
            content: "Hi, there! Simply type the job title, job description, and a few details about your experience and I'll respond with your cover letter!"
        }
    ]);
    const getGPTResponse = async ()=>{
        setLoading(true);
        const userInput = "Business analyst experienced in Jira and NoSQL databases.";
        const context = [
            ...dmessages,
            {
                role: "user",
                content: userInput
            }
        ];
        setDmessages(context);
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: context
            })
        });
        const data = await response.json();
        setDmessages((prevdMessages)=>[
                ...prevdMessages,
                {
                    role: "assistant",
                    content: data.result.content
                }
            ]);
        const results = dmessages.map((dmessage)=>dmessage.content.trim());
        setContent(results);
        console.log([
            results
        ]);
        setLoading(false);
    };
    const downloadTextFile = ()=>{
        const data = content.join("\n");
        const blob = new Blob([
            data
        ], {
            type: "text/plain;charset=utf-8"
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "api-response-data.txt";
        link.click();
        document.body.appendChild(link);
        link.click();
        setTimeout(()=>{
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        }, 100);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: getGPTResponse,
                disabled: loading,
                children: loading ? "Loading..." : "Get API Response Data"
            }),
            content.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: downloadTextFile,
                        children: "Download as Text File"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Preview:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: content.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: item
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadArray);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;