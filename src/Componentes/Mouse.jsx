import { useState  } from "react";


export default function Mouse(props){
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)


  const setPosition = (e) => {
    setPositionX (positionX+e.clientX)
    console.log("Eixo X:"+positionX)

    setPositionY (positionX+e.clientY)
    console.log("Eixo Y:"+positionY)
  }


  return <div onMouseMove = {setPosition}> {props.name} {(positionX, positionY)}    </div>
}