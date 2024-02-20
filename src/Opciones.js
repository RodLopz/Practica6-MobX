import React from "react";
import {inject, observer} from "mobx-react"
import cursosStore from "./stores/CursosStore";
class Opciones extends React.Component {
    nombreRef = React.createRef();
    fotoRef = React.createRef();
    
    render(){
       
        return <div>
            <h1>Tengo en total {cursosStore.numeroCursos} cursos</h1>
           
            <form onSubmit={e=>{
                e.preventDefault();
                cursosStore.agregarCurso({
                    nombre:this.nombreRef.current.value,
                    foto: this.fotoRef.current.value
                })
                e.target.reset();
            }}>
                <input 
                type="text"
                placeholder="URL de la foto del curso"
                required
                ref={this.fotoRef}
                >
                </input>
                <input 
                type="text"
                placeholder="Nombre del curso"
                required
                ref={this.nombreRef}
                >
                </input>
               <button type="submit">Guardar Curso</button>
            </form>
            <button id="borrar" onClick={()=>{
                    cursosStore.borrarCurso();
                }}> Borrar todos los cursos
                </button>
            <ul>
                {cursosStore.cursos.map(curso=> (
                    <li key={curso.nombre}>
                        <h2>{curso.nombre}</h2>
                        <img
                        src={curso.foto}
                        alt={curso.nombre}
                        style={{maxWidth: "150px"}}
                        >
                        </img>

                    </li>
                ))}
            </ul>

            </div>
    }
}
export default inject("CursosStore")(observer(Opciones));