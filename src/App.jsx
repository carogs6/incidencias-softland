import  { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errors, setErrors] = useState({ usuario: '', email: '', descripcion: '' });

  const bodyData = {
    "fields": {
      "project": {
        "id": "10010"
      },
      "summary": `${email})`,
      "description": {
        "type": "doc",
        "version": 1,
        "content": [
            {
            "type": "paragraph",
            "content": [
                {
                "text": descripcion,
                "type": "text"
                }
            ]
            }
        ]
    },
    "reporter": {
      "id": "712020:75da847b-f656-4020-a3fd-84d8811cd76f"
    },
      "issuetype": {
        "id": "10038"
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de nombre no vacío
    if (!usuario.trim()) {
      setErrors({ ...errors, usuario: 'El nombre no puede estar vacío' });
      return;
    }

    // Validación de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setErrors({ ...errors, email: 'Ingresa un correo electrónico válido' });
      return;
    }

    // Validación de descripción no vacía
    if (!descripcion.trim()) {
      setErrors({ ...errors, descripcion: 'La descripción no puede estar vacía' });
      return;
    }

      // Restablece los mensajes de error en caso de éxito
      setErrors({ usuario: '', email: '', descripcion: '' });

      // Ahora, realiza la solicitud POST usando axios
    try {
      const response = await axios.post('http://localhost:3001/api/notify-incident', bodyData);
      console.log('Respuesta del servidor:', response.data);

      // Puedes realizar alguna acción adicional después de una solicitud exitosa
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);

      // Puedes manejar el error y mostrar un mensaje al usuario si es necesario
    }


  }

  return (
    <div className="grid min-h-screen grid-col items-center bg-softlandbg sm:grid-cols-2">
      <div>
        <div className='flex flex-col w-full'>
          <img src='https://softland.com.ar/wp-content/uploads/2020/09/logo-blanco-1.png' className='flex items-start w-36 p-1'></img>
          <h1 className="text-3xl font-bold w-full flex items-center justify-center font-titilliumWeb text-slate-200">Notificar incidencia</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* <div className="text-red-500">
            {errors.usuario && <div>{errors.usuario}</div>}
            {errors.email && <div>{errors.email}</div>}
            {errors.descripcion && <div>{errors.descripcion}</div>}
          </div> */}
          <h1 className="text-3xl font-bold w-full flex items-center justify-center font-titilliumWeb text-slate-200">Notificar incidencia</h1>
          <div className="space-y-12">
            <div className="pb-12">
              <div className="mt-8 grid grid-cols-1 gap-x-2 gap-y-4">
                <div className="">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-slate-100">
                    Usuario
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="px-3 block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      // type="email"
                      autoComplete="email"
                      className="px-3 block w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className='mt-1'>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-slate-100">
                    Incidencia
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="textarea"
                      rows="3"
                      cols="50"
                      placeholder='Informar si se encontro alguna inconsistencia o si hay algun error'
                      className="px-3 mt-2 block w-full rounded-md border-0  py-1.5 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-slate-100">
                    Subir archivo
                  </label>
                  <div className="mt-1 flex rounded-lg border border-dashed border-gray-300/25 p-1">
                    <div className="text-center">
                      <div className="flex text-sm leading-6 text-gray-400">
                        <label
                          htmlFor="file-upload"
                          className="relative px-2 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 hover:bg-sky-200"
                        >
                          <span>Subir archivo</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-9 flex items-center justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Informar incidencia
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        {/* <div className="relative max-w-md w-full">
                <div className="absolute top-1 left-2 inline-flex items-center p-2">
                    <i className="fas fa-search text-gray-400"></i>
                </div>
                <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
            </div> */}
        <h1 className="text-3xl font-bold w-full flex items-center justify-center font-titilliumWeb text-slate-200">Incidencia creadas</h1>

      </div>
    </div>
  )
}

export default App;