
import React, { useState } from 'react';

const Formulario: React.FC = () => {
    const [rut, setRut] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!nombre || !apellido || !correo || !telefono) {
            alert("¡Todos los campos son requeridos!");
        } else if (!validarCorreo(correo)) {
            alert("¡El correo electrónico no tiene un formato válido!");
        } else {
            alert("Formulario enviado correctamente, Gracias por contactarnos");
            // Aquí puedes manejar la lógica para enviar el formulario
        }

        // Limpiar los campos del formulario
        setRut('');
        setNombre('');
        setApellido('');
        setCorreo('');
        setTelefono('');
    };

    const validarCorreo = (email: string): boolean => {
        // Expresión regular para validar el formato de correo electrónico
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(email);
    };

    return (
        <div>
            <div className="titulo">
                <h1>Formulario de contacto</h1>
            </div>
            <div className='container'>
                <div className="formulario">
                    <form onSubmit={handleSubmit} id="formulario">
                        <input
                            type="number"
                            id="rut-cliente"
                            placeholder="Ingrese su rut"
                            value={rut}
                            onChange={(e) => setRut(e.target.value)}
                        />
                        <input
                            type="text"
                            id="nombre-cliente"
                            placeholder="Ingrese su nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <input
                            type="text"
                            id="apellido-cliente"
                            placeholder="Ingrese su apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                        <input
                            type="text"
                            id="correo-cliente"
                            placeholder="Ingrese su correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                        <input
                            type="tel"
                            id="telefono-cliente"
                            placeholder="Ingrese su número de teléfono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                        <button type="submit" id="button">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;

