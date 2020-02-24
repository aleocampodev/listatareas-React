import React, { Component} from 'react';
import Navigation from './components/Navigation';
import TodoForm   from './components/TodoForm';
import './App.css';

//data
import {tasks} from './data/tasks.json';
class App extends Component{
  constructor(){
     super();
     this.state={
        tasks
     }
     this.handleAddTask = this.handleAddTask.bind(this);
  }

  removeTask(index){
    if(window.confirm('¿Estas seguro de querer eliminarlo?'))
    this.setState({
      tasks:this.state.tasks.filter((e,i) => {
        return i !== index;

      })
    });
    console.log(index); 
  }

  handleAddTask(task){
    this.setState({
      tasks:[...this.state.tasks,task]
    })
  }

  render() {
    const titulo="Lista de Tareas"
    const chores = this.state.tasks.map((task , i) => {
      return ( 
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header text-center">
              <h3>{task.titulo}</h3>
              <span className="badge btn-outline-warning ml-2">
                {task.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p>{task.descripcion}</p>
              <p><mark>{task.responsable}</mark></p>
            </div>
            <div className="card-footer bg-info">
              <button 
                className="btn  btn-warning"
                onClick={this.removeTask.bind(this,i)}>
               Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    });
  
    return(
      <div className="App">
        <Navigation titulo={titulo} conteo={this.state.tasks.length}></Navigation>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <TodoForm onAddTask={this.handleAddTask} titulo={titulo}></TodoForm>
            </div>
            <div className="col-md-8">
              <div className="row">
                {chores}
            
              </div>
            </div>
            <div className="footer-card">
                <ul className="footer-nav">
                   <li>Mensajes</li>
                   <li>Scrum</li>
                   <li>Agenda</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
