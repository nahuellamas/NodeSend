"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
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


/***/ }),

/***/ 8394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./context/auth/authContext.jsx
var authContext = __webpack_require__(8216);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./types/index.jsx
const USUARIO_AUTENTICADO = 'USUARIO_AUTENTICADO';
const LIMPIAR_ALERTA = 'LIMPIAR_ALERTA';
const MOSTRAR_ALERTA = 'MOSTRAR_ALERTA';
const REGISTRO_EXISTOSO = 'REGISTRO_EXISTOSO';
const USUARIO_YA_EXISTE = 'USUARIO_YA_EXISTE';
const INICIO_EXISTO = 'INICIO_EXISTO';
const INICIO_ERROR = 'INICIO_ERROR';
const CERRAR_SESION = 'CERRAR_SESION';
const SUBIENDO_ARCHIVO = 'SUBIENDO_ARCHIVO';
const SUBIR_ARCHIVO_EXITO = 'SUBIR_ARCHIVO_EXITO';
const SUBIR_ARCHIVO_ERROR = 'SUBIR_ARCHIVO_ERROR';
const CREAR_ENLACE_EXITO = 'CREAR_ENLACE_EXITO';
const CREAR_ENLACE_ERROR = 'CREAR_ENLACE_ERROR';
const LIMPIAR_STATE = 'LIMPIAR_STATE';
const AGREGAR_PASSWORD = 'AGREGAR_PASSWORD';
const AGREGAR_DESCARGAS = 'AGREGAR_DESCARGAS';

;// CONCATENATED MODULE: ./context/auth/authReducer.jsx

/* harmony default export */ const authReducer = ((state, action)=>{
    switch(action.type){
        case REGISTRO_EXISTOSO:
            return {
                ...state,
                msg: action.payload
            };
        case USUARIO_YA_EXISTE:
        case INICIO_ERROR:
            return {
                ...state,
                msg: action.payload
            };
        case LIMPIAR_ALERTA:
            return {
                ...state,
                msg: action.payload
            };
        case INICIO_EXISTO:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            };
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
});

// EXTERNAL MODULE: ./config/axios.jsx + 1 modules
var axios = __webpack_require__(5908);
;// CONCATENATED MODULE: ./config/tokenAuth.jsx

const tokenAuth = (token)=>{
    if (token) {
        axios/* default.defaults.headers.common.Authorization */.Z.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axios/* default.defaults.headers.common.Authorization */.Z.defaults.headers.common.Authorization;
    }
};
/* harmony default export */ const config_tokenAuth = (tokenAuth);

;// CONCATENATED MODULE: ./context/auth/authState.jsx







const AuthState = ({ children  })=>{
    const initialState = {
        token:  false ? 0 : '',
        isAuthenticated: null,
        user: null,
        loading: true,
        error: null,
        msg: null
    };
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(authReducer, initialState);
    //registro de usuarios
    const registroUsuario = async (datos)=>{
        try {
            const respuesta = await axios/* default.post */.Z.post('/api/usuarios', datos);
            dispatch({
                type: REGISTRO_EXISTOSO,
                payload: respuesta.data.msg
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: USUARIO_YA_EXISTE,
                payload: error.response.data.msg
            });
        }
        setTimeout(()=>{
            dispatch({
                type: LIMPIAR_ALERTA,
                payload: null
            });
        }, 3000);
    };
    const iniciarSesion = async (datos)=>{
        try {
            const respuesta = await axios/* default.post */.Z.post('/api/auth', datos);
            dispatch({
                type: INICIO_EXISTO,
                payload: respuesta.data.token
            });
        } catch (error) {
            dispatch({
                type: INICIO_ERROR,
                payload: error.response.data.msg
            });
        }
        setTimeout(()=>{
            dispatch({
                type: LIMPIAR_ALERTA,
                payload: null
            });
        }, 2500);
    };
    //retorna el usuario autenticado al recargar en base al TOKEN JWT   en localStorage
    const obtenerUsuario = async ()=>{
        const token = localStorage.getItem('token');
        if (token) {
            config_tokenAuth(token);
            try {
                const respuesta = await axios/* default.get */.Z.get('/api/auth');
                if (respuesta.data.usuario) {
                    dispatch({
                        type: USUARIO_AUTENTICADO,
                        payload: respuesta.data.usuario
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    const cerrarSesion = async ()=>{
        dispatch({
            type: CERRAR_SESION
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(authContext/* default.Provider */.Z.Provider, {
        value: {
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            loading: state.loading,
            error: state.error,
            msg: state.msg,
            registroUsuario,
            iniciarSesion,
            obtenerUsuario,
            cerrarSesion
        },
        children: children
    }));
};
/* harmony default export */ const authState = (AuthState);

// EXTERNAL MODULE: ./context/app/appContext.jsx
var appContext = __webpack_require__(2324);
;// CONCATENATED MODULE: ./context/app/appReducer.jsx

/* harmony default export */ const appReducer = ((state, action)=>{
    switch(action.type){
        case MOSTRAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: action.payload
            };
        case LIMPIAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: null
            };
        case SUBIENDO_ARCHIVO:
            return {
                ...state,
                cargando: true
            };
        case SUBIR_ARCHIVO_EXITO:
            return {
                ...state,
                nombre: action.payload.nombre,
                nombre_original: action.payload.nombre_original,
                cargando: false
            };
        case SUBIR_ARCHIVO_ERROR:
            return {
                ...state,
                mensaje_archivo: action.payload,
                cargando: false
            };
        case CREAR_ENLACE_EXITO:
            return {
                ...state,
                url: action.payload
            };
        case LIMPIAR_STATE:
            return {
                ...state,
                mensaje_archivo: null,
                nombre: '',
                nombre_original: '',
                cargando: false,
                descargas: 1,
                password: '',
                autor: null,
                url: ''
            };
        case AGREGAR_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case AGREGAR_DESCARGAS:
            return {
                ...state,
                descargas: action.payload
            };
        default:
            return state;
    }
});

;// CONCATENATED MODULE: ./context/app/appState.jsx






const AppState = ({ children  })=>{
    const initialState = {
        mensaje_archivo: null,
        nombre: '',
        nombre_original: '',
        cargando: false,
        descargas: 1,
        password: '',
        autor: null,
        url: ''
    };
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(appReducer, initialState);
    const mostrarAlerta = (msg)=>{
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg
        });
        setTimeout(()=>{
            dispatch({
                type: LIMPIAR_ALERTA
            });
        }, 2500);
    };
    const subirArchivo = async (formData, nombre_archivo)=>{
        dispatch({
            type: SUBIENDO_ARCHIVO
        });
        try {
            const result = await axios/* default.post */.Z.post('/api/archivos', formData);
            dispatch({
                type: SUBIR_ARCHIVO_EXITO,
                payload: {
                    nombre: result.data.archivo,
                    nombre_original: nombre_archivo
                }
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: SUBIR_ARCHIVO_ERROR,
                payload: error.result.data.msg
            });
        }
    };
    const crearEnalace = async ()=>{
        const data = {
            nombre: state.nombre,
            nombre_original: state.nombre_original,
            descargas: state.descargas,
            password: state.password,
            autor: state.autor
        };
        try {
            const result = await axios/* default.post */.Z.post('/api/enlaces', data);
            dispatch({
                type: CREAR_ENLACE_EXITO,
                payload: result.data.msg
            });
        } catch (error) {
            console.log(error);
        }
    };
    const limpiarState = async ()=>{
        dispatch({
            type: LIMPIAR_STATE
        });
    };
    const agregarPassword = (password)=>{
        dispatch({
            type: AGREGAR_PASSWORD,
            payload: password
        });
    };
    const agregarDescargas = (descargas)=>{
        dispatch({
            type: AGREGAR_DESCARGAS,
            payload: descargas
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(appContext/* default.Provider */.Z.Provider, {
        value: {
            mostrarAlerta,
            mensaje_archivo: state.mensaje_archivo,
            subirArchivo,
            nombre: state.nombre,
            nombre_original: state.nombre_original,
            cargando: state.cargando,
            crearEnalace,
            descargas: state.descargas,
            password: state.password,
            autor: state.autor,
            url: state.url,
            limpiarState,
            agregarPassword,
            agregarDescargas
        },
        children: children
    }));
};
/* harmony default export */ const appState = (AppState);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(authState, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(appState, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8394));
module.exports = __webpack_exports__;

})();