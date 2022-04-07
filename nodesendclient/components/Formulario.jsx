import React, {useState, useContext} from 'react'
import appContext from '../context/app/appContext';

const Formulario = () => {

    const [tienePassword, setTienePassword] = useState(false);

    const AppContext = useContext(appContext);
    const {agregarPassword, agregarDescargas} = AppContext;

  return (
    <div className="w-full mt-5">
        <div>
            <label htmlFor="descargas" className="text-clamp text-gray-800">Eliminar enlace tras:</label>
            <select onChange={e => agregarDescargas(parseInt(e.target.value))} className="text-clamp appearence-none w-full mt-2 bg-white border border-redline text-black py-3 px-4 pr-6 rounded leading-none focus:outline-none focus:border-gray-700" name="descargas" id="descargas">
                <option value="" selected disabled>Seleccioné N° de Descargas</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="50">50</option>
            </select>
        </div>
        <div className="mt-5">
            <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-clamp text-gray-800 mb-2">¿Protección con Contraseña?</label>
                <input onChange={() => setTienePassword(!tienePassword)} className="mr-5" type="checkbox" name="" id="" />
            </div>
            {tienePassword ? (
                <input onChange={(e) => agregarPassword(e.target.value)} type="password" className="text-clamp appearence-none w-full mt-2 bg-white border border-redline text-black py-3 px-4 pr-6 rounded leading-none focus:outline-none focus:border-gray-700" name="password" id="password" placeholder="Password"/>
            ) : null }
            
        </div>
    </div>
  )
}

export default Formulario