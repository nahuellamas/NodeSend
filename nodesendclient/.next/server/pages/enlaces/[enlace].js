"use strict";
(() => {
var exports = {};
exports.id = 43;
exports.ids = [43];
exports.modules = {

/***/ 5908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ axios)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./config/axios.jsx

const clientAxios = external_axios_default().create({
    baseURL: "https://send-node-api.herokuapp.com/"
});
/* harmony default export */ const axios = (clientAxios);


/***/ }),

/***/ 3931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getServerSidePaths": () => (/* binding */ getServerSidePaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(993);
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8583);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5908);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2324);







async function getServerSideProps({ params  }) {
    const { enlace  } = params;
    // console.log(enlace)
    const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/api/enlaces/${enlace}`);
    return {
        props: {
            enlace: resultado.data
        }
    };
}
async function getServerSidePaths() {
    const ServerEnlaces = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get('/api/enlaces');
    return {
        paths: ServerEnlaces.data.enlaces.map((enlace)=>({
                params: {
                    enlace: enlace.url
                }
            })
        ),
        fallback: false
    };
}
const Enlaces = ({ enlace  })=>{
    const { 0: tienepassword , 1: setTienePassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(enlace.password);
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const AppContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_app_appContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const { mostrarAlerta , mensaje_archivo  } = AppContext;
    const verificarPassword = async (e)=>{
        e.preventDefault();
        const data = {
            password
        };
        try {
            const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].post */ .Z.post(`/api/enlaces/${enlace.enlace}`, data);
            setTienePassword(resultado.data.password);
        } catch (error) {
            mostrarAlerta(error.response.data.msg);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: tienepassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-clamp-1 text-redline uppercase font-bold text-center mb-4",
                    children: "Enlace protegido por Password"
                }),
                mensaje_archivo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    mensaje: mensaje_archivo
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-11/12 lg:w-6/12 m-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: (e)=>verificarPassword(e)
                        ,
                        className: "bg-white w-full rounded shadow-md px-8 pt-6 pb-8 mb-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "password",
                                        className: "block text-gray-600 text-sm font-bold mb-2",
                                        children: "Contrase\xf1a"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        onChange: (e)=>setPassword(e.target.value)
                                        ,
                                        value: password,
                                        type: "password",
                                        id: "password",
                                        className: "focus/:outline-none focus:shadow-outline border-b text-sm appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                        placeholder: "Password del Enlace"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: "bg-redline w-full rounded p-2 font-bold text-clamp uppercase hover:bg-black ease-in-out duration-300 text-white",
                                    children: "Validar"
                                })
                            })
                        ]
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-redline text-clamp text-center",
                    children: "Descargar archivo compartido:"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center mt-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `${"https://send-node-api.herokuapp.com/"}api/archivos/${enlace.archivo}`,
                        className: "bg-redline hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded uppercase",
                        children: "Descargar"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enlaces);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,295], () => (__webpack_exec__(3931)));
module.exports = __webpack_exports__;

})();