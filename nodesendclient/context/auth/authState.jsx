import authContext from './authContext';
import React, {useReducer} from 'react';
import authReducer from './authReducer';
import {USUARIO_AUTENTICADO, 
    REGISTRO_EXISTOSO,
    USUARIO_YA_EXISTE,
    LIMPIAR_ALERTA,
    INICIO_EXISTO,
    INICIO_ERROR,
    CERRAR_SESION
} from '../../types';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';


const AuthState = ({children}) => {

    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        isAuthenticated: null,
        user: null,
        loading: true,
        error: null,
        msg: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    //registro de usuarios
    const registroUsuario = async (datos) => {
        try {
            const respuesta = await clientAxios.post('/api/usuarios', datos);
            dispatch({
                type: REGISTRO_EXISTOSO,
                payload: respuesta.data.msg
            });
        } catch (error) {
            dispatch({
                type: USUARIO_YA_EXISTE,
                payload: error.response.data.msg
            });
        }
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA,
                payload: null
            });
        }, 3000);
    }

    const iniciarSesion = async (datos) => {
       try {
            const respuesta = await clientAxios.post('/api/auth', datos);
            dispatch({
                type: INICIO_EXISTO,
                payload: respuesta.data.token
            });
       } catch (error) {
              dispatch({
                    type: INICIO_ERROR,
                    payload: error.response.data.msg
              })
       }
       setTimeout(() => {
        dispatch({
            type: LIMPIAR_ALERTA,
            payload: null
        })
        }, 2500);
    }

    //retorna el usuario autenticado al recargar en base al TOKEN JWT   en localStorage
    const obtenerUsuario = async () => {
       const token = localStorage.getItem('token');
         if (token) {
                tokenAuth(token);
            try {   
                const respuesta = await clientAxios.get('/api/auth');
                if(respuesta.data.usuario){
                        dispatch({
                        type: USUARIO_AUTENTICADO,
                        payload: respuesta.data.usuario
                    })
                }
            } catch (error) {
                console.log(error);
            }
         }
    }

    const cerrarSesion = async () => {
        dispatch({
            type: CERRAR_SESION
        })
    }


    return (
        <authContext.Provider 
        value={{
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
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthState;