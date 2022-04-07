import {REGISTRO_EXISTOSO, 
        USUARIO_YA_EXISTE,
        LIMPIAR_ALERTA,
        INICIO_EXISTO,
        INICIO_ERROR,
        USUARIO_AUTENTICADO,
        CERRAR_SESION
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXISTOSO:
            return {
                ...state,
                msg: action.payload
            }
        case USUARIO_YA_EXISTE:
        case INICIO_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        case LIMPIAR_ALERTA:
            return {
                ...state,
                msg: action.payload
            }
        case INICIO_EXISTO:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            }
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false
            }
        default:
            return state;
    }
}