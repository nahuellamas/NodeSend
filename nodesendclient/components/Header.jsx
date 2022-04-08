import Link from 'next/link'
import Image from 'next/image'
import {useContext, useEffect} from 'react'
import authContext from '../context/auth/authContext'
import appContext from '../context/app/appContext'
import {useRouter} from 'next/router'

const Header = () => {

    const router = useRouter()

  const AuthContext = useContext(authContext);
  const {obtenerUsuario, user, cerrarSesion} = AuthContext;

  const AppContext = useContext(appContext);
  const {limpiarState} = AppContext;

  useEffect(() => {
    obtenerUsuario();
  }, [obtenerUsuario]);

  const redirect = () => {
    router.push('/')
    limpiarState();
  }

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
        <Image alt="favicon" onClick={() => redirect()} className="mb-8 sm:mb-4 cursor-pointer"src="/favicon.svg" width={400} height={100} />
      

        <div className="flex gap-3">
          {user ? ( 
            <div className="flex items-center gap-3">
            <p>¡Hola {user.nombre}!</p>
            <button className="bg-black px-5 py-3 rounded text-white font-bold uppercase text-clamp" type="button"
            onClick={() => {cerrarSesion()}} >
              Cerrar Sesión
            </button>
            </div>
          ) : ( 
            <>
            <Link href="/login">
            <a className="bg-redline rounded px-5 py-3 font-bold text-white uppercase">Iniciar Sesión</a>
            </Link>
            <Link href="/crearcuenta">
              <a className="bg-black rounded px-5 py-3 font-bold text-white uppercase">Crear Cuenta</a>
            </Link>
            </>
           ) }
          
        </div>
    </header>
  )
}

export default Header