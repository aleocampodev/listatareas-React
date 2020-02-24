import React , { Component }  from 'react';
import logo from '../imagenes/logo.svg';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            titulo: '',
            responsable:'',
            descripcion:'',
            prioridad:'baja',
        };
        this.handleInputChange =this.handleInputChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.props.onAddTask(this.state);
        console.log(this.state);
    }


    handleInputChange(e){
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })
        console.log(value,name);
    }

    render(){
        return(
            <div className="card box">
                <div className="card-header  header">
                    <h1>{this.props.titulo}</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <form className="card-body body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="titulo"
                            value={this.state.titulo}
                            onChange={this.handleInputChange}
                            className="form-control"
                            placeholder="Titulo"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsable"
                            value={this.state.responsable}
                            onChange={this.handleInputChange}
                            className="form-control"
                            placeholder="Responsable"
                        />
                    </div>
                    <div className="fom-group">
                        <input 
                            type="text"
                            name="descripcion"
                            value={this.state.descripcion}
                            onChange={this.handleInputChange}
                            className="form-control"
                            placeholder="Descripcion"
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="prioridad"
                            className="form-control mt-3"
                            value={this.state.prioridad}
                            onChange={this.handleInputChange}
                        >
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <button type="submit" className="card-footer btn  footer">
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}
 
export default TodoForm ;