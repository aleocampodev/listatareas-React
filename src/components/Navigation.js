import React, {Component} from 'react'
import './Navigation.css'
import logo from '../imagenes/logo.svg';


class Navigation extends Component {
    constructor(props){
      super(props);
      this.state ={
      }
      console.log(this.props)
    }
   
    
    render(){
       console.log(this.state.tasks);
        return(
          <nav>
            <div className="header-nav">
              <h1 className="title-nav">{this.props.titulo}</h1>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <ul>
              <li>Mensajes</li>
              <li>Scrum</li> 
              <li>Agenda</li>
            </ul>
            <span className="num">
              {this.props.conteo}
          </span>
          </nav>
        )
    }
}

export default Navigation