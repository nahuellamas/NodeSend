import appContext from './appContext';
import appReducer from './appReducer';
import { useReducer } from 'react';
import clientAxios from '../../config/axios';
import {
    MOSTRAR_ALERTA,
    LIMPIAR_ALERTA,
    SUBIR_ARCHIVO_EXITO,
    SUBIR_ARCHIVO_ERROR,
    SUBIENDO_ARCHIVO,
    CREAR_ENLACE_EXITO,
    CREAR_ENLACE_ERROR,
    LIMPIAR_STATE,
    AGREGAR_PASSWORD,
    AGREGAR_DESCARGAS
} from '../../types';

const AppState = ({children}) => {
    const initialState = {
        mensaje_archivo: null,
        nombre: '',
        nombre_original: '',
        cargando: false,
        descargas: 1,
        password: '',
        autor: null,
        url: '',
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    const mostrarAlerta = msg => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg,
        });
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA,
            });
        }, 2500);
    }
    
    const subirArchivo = async (formData, nombre_archivo) => {
        dispatch({
            type: SUBIENDO_ARCHIVO,
        });

        try {
            const result = await clientAxios.post('/api/archivos', formData);
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
    }

    const crearEnalace = async () => {
        const data = {
            nombre: state.nombre,
            nombre_original: state.nombre_original,
            descargas: state.descargas,
            password: state.password,
            autor: state.autor
        }
        try {
            const result = await clientAxios.post('/api/enlaces', data);
            dispatch({
                type: CREAR_ENLACE_EXITO,
                payload: result.data.msg
            })
        } catch (error) {
            console.log(error);
        }
    }

    const limpiarState = async () => {
        dispatch({
            type: LIMPIAR_STATE,
        });
    }

    const agregarPassword = password => {
        dispatch({
            type: AGREGAR_PASSWORD,
            payload: password
        })
    }

    const agregarDescargas = descargas => {
        dispatch({
            type: AGREGAR_DESCARGAS,
            payload: descargas
        })
    }

    return(
        <appContext.Provider value={{
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
        }}>
            {children}
        </appContext.Provider>
    )
}

export default AppState;