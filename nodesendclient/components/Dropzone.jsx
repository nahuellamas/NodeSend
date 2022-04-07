import {useDropzone} from 'react-dropzone';
import {useCallback, useContext} from 'react';
import Formulario from '../components/Formulario';
import appContext from '../context/app/appContext';
import authContext from '../context/auth/authContext';

const Dropzone = () => {
    const AuthContext = useContext(authContext);
    const {user, isAuthenticated} = AuthContext;

    const AppContext = useContext(appContext);
    const {mostrarAlerta, subirArchivo, cargando, crearEnalace} = AppContext;

    const onDropRejected = () => {
        mostrarAlerta('El limite es 1MB, obten una cuenta gratis para subir archivos más grandes');
    }

    const onDropAccepted = useCallback( async (acceptedFiles) => {
        const formData = new FormData(); //cramos el objeto form-data
        formData.append('archivo', acceptedFiles[0]); //agregamos el archivo al form-data
        subirArchivo(formData, acceptedFiles[0].name); //enviamos el form-data al backend
    }, [] );

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDropAccepted, onDropRejected, maxSize: 1000000});

    const archivos = acceptedFiles.map(file => (
        <li className="bg-white flex-1 w-fit p-3 mb-1 shadow-lg rounded" key={file.lastModified}>
            <p className="font-bold text-clamp">{file.path} - {(file.size / Math.pow(1024, 2)).toFixed(2)} MB</p>
        </li>
    ));


  return (
    <div className="flex-1 mb-3 mx-2 py-10 lg:mt-0 flex flex-col items-center justify-center border-dashed border-redline border-2 bg-redline-100 px-4" >
        {acceptedFiles.length > 0 ? (
            <div className="mt-2 w-full">
                <h4 className="text-clamp-1 font-bold text-center mb-2">Archivos</h4>
                <ul>
                    {archivos}
                </ul>

                {isAuthenticated ? (
                    <Formulario />
                ) : ''}

                {cargando ? <p className="text-clamp text-center text-redline">Cargando archivo...</p> : (
                    <button onClick={() => crearEnalace()} type="button" className="bg-redline w-fit py-3 px-5 rounded text-white mt-5 hover:bg-black ease-in-out duration-300">
                    Crear Enlace
                    </button>
                )}
                
            </div>
         ) : (
        <div {...getRootProps({className: 'dropzone w-full py-32'})}>
            <input className="h-100" {...getInputProps( )} />
            { isDragActive ? (
                <p className="text-center text-bacl font-bold">¡Suelta el Archivo!</p>
            ) : (
                <div className="text-center">
            <p className="font-bold">Arrastrá tu archivo aquí!</p>
            <button type="button" className="bg-redline w-fit py-3 px-5 rounded text-white mt-5 hover:bg-black ease-in-out duration-300">Buscá tus archivos</button>
            </div>
            )}
        </div>
        )}

    </div>
  )
}

export default Dropzone