import { useState } from 'react';

export const Formulario = () => {
    


    const [nombreMascota, setNombreMascota] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [email, setEmail] = useState('');
    const [Alta, setAlta] = useState('');
    const [Sintomas, setSintomas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("nombre de mascota : ",nombreMascota);
        console.log("dueño de la mascota : ",nombrePropietario);
        console.log("correo del dueño : ",email);
        console.log("se le dio de alta el dia : ",Alta);
        console.log("la mascota tiene sintomas de : ",Sintomas);
    } 
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 ">
            {/* Titulo de la seccion del formulario*/}
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            {/* descripcion de la seccion formulario*/}
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            {/* formulario */}
            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreMascota}
                        onChange={ (e) => setNombreMascota(e.target.value) }
                        required
                    /> 
                     <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombrePropietario}
                        onChange={ (e) => setNombrePropietario(e.target.value) }
                        required
                    /> 
                  <label htmlFor="" className="block text-gray-700 uppercase font-bold">
                        
                    </label>
                    <input
                        id="email"
                        type="Email"
                        placeholder="email del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        required
                    /> 
                  <label htmlFor="" className="block text-gray-700 uppercase font-bold">
                        
                    </label>
                    <input
                        id="Alta"
                        type="date"
                        placeholder="Alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={Alta}
                        onChange={ (e) => setAlta(e.target.value) }
                        required
                    /> 
                  <label htmlFor="" className="block text-gray-700 uppercase font-bold">
                        
                    </label>
                    <input
                        id="Sintomas"
                        type="text-box"
                        placeholder="Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={Sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                        required
                    />

                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={  'Agregar Paciente' }
                />

            
            </form>
           
        </div>
        
    );
  };