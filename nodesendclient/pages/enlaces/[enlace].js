import Layout from '../../components/Layout';
import Alerta from '../../components/Alerta';
import clientAxios from '../../config/axios';
import React, {useState} from 'react';
import appContext from '../../context/app/appContext';
import { useContext } from 'react';

export async function getServerSideProps({params}) {
    const { enlace } = params;
    // console.log(enlace)
   const resultado = await clientAxios.get(`/api/enlaces/${enlace}`);
    return {
        props: {
            enlace: resultado.data
        }
    }
}

export async function getServerSidePaths() {
        const ServerEnlaces = await clientAxios.get('/api/enlaces');
        return {
            paths: ServerEnlaces.data.enlaces.map( enlace => ( {
                params: { enlace : enlace.url }
            })),
            fallback: false
        }
}

const Enlaces = ({enlace}) => {
    const [tienepassword, setTienePassword] = useState(enlace.password);
    const [password, setPassword] = useState('');

    const AppContext = useContext(appContext);
    const {mostrarAlerta, mensaje_archivo} = AppContext;

    const verificarPassword = async (e) => {
        e.preventDefault();
        const data = {
            password
        }
        try {
            const resultado = await clientAxios.post(`/api/enlaces/${enlace.enlace}`, data);
            setTienePassword(resultado.data.password);
        } catch (error) {
            mostrarAlerta(error.response.data.msg);
        }
    }   
    return (
        <Layout>
            {tienepassword ? (
                <>
                    <h2 className="text-clamp-1 text-redline uppercase font-bold text-center mb-4">Enlace protegido por Password</h2>
                    {mensaje_archivo ? (<Alerta mensaje={mensaje_archivo} /> ) : null}
                    <div className="w-11/12 lg:w-6/12 m-auto">
                        <form onSubmit={e => verificarPassword(e)} className="bg-white w-full rounded shadow-md px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-600 text-sm font-bold mb-2">Contraseña</label>
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password"  id="password" className="focus/:outline-none focus:shadow-outline border-b text-sm appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password del Enlace" />
                            </div>
                            <div className="w-full">
                                <button type="submit" className="bg-redline w-full rounded p-2 font-bold text-clamp uppercase hover:bg-black ease-in-out duration-300 text-white">
                                    Validar
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            ) : (
            <>
                <h1 className="text-redline text-clamp text-center">Descargar archivo compartido:</h1>
                <div className="flex items-center justify-center mt-5">
                    <a href={`${process.env.backendURL}api/archivos/${enlace.archivo}`} className="bg-redline hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded uppercase">Descargar</a>
                </div>
            </> 
            )}
        </Layout>
    )
}

export default Enlaces;
