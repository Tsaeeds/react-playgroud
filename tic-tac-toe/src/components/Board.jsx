import PlayerContext from '../store/PlayerContext'
import { useContext, useState} from 'react'

const Board = ({value, onClick}) => {

    const playerCtx = useContext(PlayerContext);


    function handleClick(i){

      if(playerCtx.currentPlayer==="O"){
        document.getElementById(i).classList.add("xButtonColor")

      }else{
        document.getElementById(i).classList.add("oButtonColor")
      }

      playerCtx.changeplayer()
      playerCtx.changeText(i)
      playerCtx.checkWinOrDraw()
     
    }

  return (
    <>{playerCtx.boardValues.map((v,i) => {
    return <h3 key={i} id={i} className="grid-item" onClick={handleClick.bind(null,i)} >{v}</h3>
    })}</>
  )
}

export default Board