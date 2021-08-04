import React, {Component} from 'react'

export default class Saudacao extends Component {
  state = {
    tipo: "",
    nome: ""
  }

  setTipo(evento){
    this.setState({tipo: evento.target.value
    })
  
  }

  
  setNome(evento){
    this.setState({nome: evento.target.value
    })
  
  }

  render(){
    const {tipo, nome} = this.state
    return(
      <div>
        <h1>{tipo} {nome}</h1>
        <hr />
        <input type="text" placeholder="Tipo"  onChange={evento =>
          this.setTipo(evento)} value={tipo}/>
        <input type="text" placeholder="Nome"  onChange={evento =>
          this.setNome(evento)} value={nome}/>
      </div>
    )
  }
}