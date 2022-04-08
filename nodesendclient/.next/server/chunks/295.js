"use strict";
exports.id = 295;
exports.ids = [295];
exports.modules = {

/***/ 8583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8216);
/* harmony import */ var _context_app_appContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2324);




const Alerta = ()=>{
    const AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const { msg  } = AuthContext;
    const AppContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_app_appContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { mensaje_archivo  } = AppContext;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-redline py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto",
        children: msg || mensaje_archivo
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alerta);


/***/ }),

/***/ 993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/auth/authContext.jsx
var authContext = __webpack_require__(8216);
// EXTERNAL MODULE: ./context/app/appContext.jsx
var appContext = __webpack_require__(2324);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header.jsx







const Header = ()=>{
    const router = (0,router_.useRouter)();
    const AuthContext = (0,external_react_.useContext)(authContext/* default */.Z);
    const { obtenerUsuario , user , cerrarSesion  } = AuthContext;
    const AppContext = (0,external_react_.useContext)(appContext/* default */.Z);
    const { limpiarState  } = AppContext;
    (0,external_react_.useEffect)(()=>{
        obtenerUsuario();
    }, [
        obtenerUsuario
    ]);
    const redirect = ()=>{
        router.push('/');
        limpiarState();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "py-8 flex flex-col md:flex-row items-center justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                alt: "favicon",
                onClick: ()=>redirect()
                ,
                className: "mb-8 sm:mb-4 cursor-pointer",
                src: "/favicon.svg",
                width: 400,
                height: 100
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex gap-3",
                children: user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "\xa1Hola ",
                                user.nombre,
                                "!"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "bg-black px-5 py-3 rounded text-white font-bold uppercase text-clamp",
                            type: "button",
                            onClick: ()=>{
                                cerrarSesion();
                            },
                            children: "Cerrar Sesi\xf3n"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "bg-redline rounded px-5 py-3 font-bold text-white uppercase",
                                children: "Iniciar Sesi\xf3n"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/crearcuenta",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "bg-black rounded px-5 py-3 font-bold text-white uppercase",
                                children: "Crear Cuenta"
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout.jsx



const Layout = ({ children , pagina  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "NodeSend - ",
                            pagina
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.svg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-gray-100 min-h-screen",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "mt-10",
                            children: children
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 2324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const appContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appContext);


/***/ }),

/***/ 8216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);


/***/ })

};
;