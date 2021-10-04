import React, {useState} from 'react'

const Formulario = () => {

    const [fruta, setFrutas] = useState('')
    const [descripcion, setDescripcion] = useState('');

    const [lista, setLista]= useState([])

    const guardarDatos = (e) => {
        e.preventDefault();

        if(!fruta.trim()) {
            console.log('campo fruta vacio');
            return
        }

        if(!descripcion.trim()) {
            console.log("campo descripcion vacion");
            return
        }

        setLista([...lista, {fruta, descripcion}]);

        e.target.reset();

        setFrutas('');
        setDescripcion('')
    }
    
    return (
        <>
            <form onSubmit={guardarDatos}>
                <input type="text" onChange={(e)=> setFrutas(e.target.value)} placeholder='Ingresa fruta'/>

                <input type="text" onChange={(e)=> setDescripcion(e.target.value)} placeholder='Ingresa descripcion'/>

                <button type='submit'>Agregar</button>
            </form>
            <ul>
                {
                    lista.map((fruta, index) => (
                        <li key={index}>{fruta.fruta} - {fruta.descripcion}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Formulario;