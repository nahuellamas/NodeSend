import Layout from '../components/Layout'
import Link from 'next/link'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useContext, useEffect} from 'react'
import authContext from '../context/auth/authContext'
import Alerta from '../components/Alerta'

const Crearcuenta = () => {
    const AuthContext = useContext(authContext)
    const {msg, registroUsuario} = AuthContext;




  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
              .required('El nombre es obligatorio')
              .min(3, 'El nombre debe tener al menos 3 caracteres'),
      email: Yup.string()
              .required('El email es obligatorio')
              .email('El email no es válido'),
      password: Yup.string()
              .required('La contraseña es obligatoria')
              .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    }),
    onSubmit: values => {
      registroUsuario(values)
    }
  })


  return (
    <Layout pagina="Crear Cuenta">
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
          <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-2">Crea tu Cuenta</h2>
          <p className="font-sm font-sans font-bold text-gray-600 text-center mb-4">Accede a todos los beneficios.</p>

          {msg ? <Alerta /> : null}

          <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg mx-5">
                <form onSubmit={formik.handleSubmit} className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-600 text-sm font-bold mb-2">Nombre</label>
                    <input type="text" value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur} id="nombre" className="focus/:outline-none focus:shadow-outline border-b text-sm appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nombre de Usuario" />
                    
                    {formik.touched.nombre && formik.errors.nombre ? (
                      <div className="my-2  border-l-4 border-black bg-redline p-2 text-clamp">
                        <p className="font-bold text-white">ERROR</p>
                        <p className="text-white">{formik.errors.nombre}</p>
                      </div>
                    ) : null}
              
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-bold mb-2">E-mail</label>
                    <input type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" className="focus/:outline-none focus:shadow-outline border-b text-sm appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Escribe tu email" />

                    {formik.touched.email && formik.errors.email ? (
                      <div className="my-2  border-l-4 border-black bg-redline p-2 text-clamp">
                        <p className="font-bold text-white">ERROR</p>
                        <p className="text-white">{formik.errors.email}</p>
                      </div>
                    ) : null}

                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-bold mb-2">Contraseña</label>
                    <input type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" className="focus/:outline-none focus:shadow-outline border-b text-sm appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password del Usuario" />

                    {formik.touched.password && formik.errors.password ? (
                      <div className="my-2  border-l-4 border-black bg-redline p-2 text-clamp">
                        <p className="font-bold text-white">ERROR</p>
                        <p className="text-white">{formik.errors.password}</p>
                      </div>
                    ) : null}

                  </div>
                  <div className="flex gap-5">
                  <button type="submit" className="bg-redline w-1/2 rounded p-2  font-bold text-clamp uppercase hover:bg-black ease-in-out duration-300 text-white">
                    Crear Cuenta
                  </button>
                  <Link href="/login" passHref>
                    <button type="button" className=" w-1/2 rounded p-2  font-bold text-clamp uppercase hover:text-black ease-in-out duration-300 text-gray-600">
                      Iniciar Sesion
                    </button>
                  </Link>
                  </div>
                </form>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Crearcuenta