import {useContext} from 'react'
import authContext from '../context/auth/authContext'
import appContext from '../context/app/appContext'


const Alerta = () => {

    const AuthContext = useContext(authContext);
    const {msg} = AuthContext;

    const AppContext = useContext(appContext);
    const {mensaje_archivo} = AppContext;
  return (
        <div className="bg-redline py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto">
            {msg || mensaje_archivo}
        </div>
  )
}

export default Alerta