import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import Dropzone from '../components/Dropzone'
import Alerta from '../components/Alerta'
import {useContext, useEffect} from 'react'
import authContext from '../context/auth/authContext'
import appContext from '../context/app/appContext'

export default function Home() {
  const AuthContext = useContext(authContext);
  const {obtenerUsuario, isAuthenticated} = AuthContext;

  const AppContext = useContext(appContext);
  const {mensaje_archivo, url} = AppContext;
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      obtenerUsuario();
    }
  }, []);

  return (
    <Layout pagina="Inicio">
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">

        {url ? (
          <>
          <p className="text-center text-clamp font-bold mt-10"><span className="text-redline uppercase">Tu enlace es:</span> {`${process.env.frontendURL}/enlaces/${url}`}</p>
          <button onClick={() => {navigator.clipboard.writeText(`${process.env.frontendURL}/enlaces/${url}`)}} type="button" className="mt-10 bg-redline w-full py-3 px-5 rounded text-white hover:bg-black ease-in-out duration-300 uppercase font-bold">
            Copiar Enlace
          </button>
          </>
        ) : (
          <>
          {mensaje_archivo && <Alerta /> }

          <div className="lg:flex md:shadow-lg p-4 bg-white rounded ">
            <Dropzone />
            <div className="md:flex-1 mb-3 mx-2 lg:mt-0">
              <h2 className="text-clamp font-sans font-bold text-gray-800 my-4">Compartir archivos nunca fue tan sencillo y rapido</h2>
              <p className="text-clamp leading-loose">
                <span className="font-bold text-redline">ReactNodeSend</span>, incluye cifrado de archivos y protección con contraseña, te permite enviar archivos <strong>(de 0MB hasta 1MB)</strong> de forma segura. Cuando subes un archivo, React Node Send genera un enlace que puedes compartir con el recipiente. Para más seguridad, también tienes la opción de establecer una contraseña y cambiar la configuración de N° de descargas admitidas.
              </p>
              {!isAuthenticated ? (
                <Link href="/crearcuenta">
                <a className="font-bold text-redline text-clamp hover:text-black transition-all duration-300 ease-in-out">Crear una cuenta para proteger archivos</a>
              </Link>
              ) : null}
              
            </div>
          </div>
        </>
        )}
      
      </div>
    </Layout>
  )
}


