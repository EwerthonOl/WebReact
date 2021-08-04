import React from 'react'
import ReactDOM from 'react-dom'
import Saudacao from './Componentes/Saudacoes'
import Votos from './Componentes/Votos'
import Mouse from './Componentes/Mouse'

ReactDOM.render(
  <div>
    <Saudacao tipo="Boa tarde" nome="Ewerthon" />
    <Votos name="PHP" />
    <Votos name="JScript" />
    <Votos name="Java" />
    <div>
      <h3>Mouse</h3>
      <Mouse name="Eixo X: " />
      <Mouse name="Eixo Y: " />
    </div>
  </div>,
  document.getElementById('root')
)
