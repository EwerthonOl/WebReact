import { useState  } from "react";

export default function Votos(props){
  const [voto, setVoto] = useState(0)

  const contaVoto = () => {
    setVoto (voto+1)
    console.log("Contando voto..."+voto)
  }

  const menosVoto = () => {
    setVoto (voto-1)
    console.log("Diminuindo voto..."+voto)
  }

  return <div> {props.name} ({voto}) <button onClick = {contaVoto}>+</button><button onClick = {menosVoto}>-</button> </div>
}