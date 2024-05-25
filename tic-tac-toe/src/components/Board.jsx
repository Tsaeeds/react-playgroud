import PlayerContext from '../store/PlayerContext'
import { useContext} from 'react'

const Board = ({value, onClick}) => {

    const playerCtx = useContext(PlayerContext);


    function handleClick(i){

      if(playerCtx.currentPlayer==="O" && playerCtx.boardValues[i]==="--"){
        document.getElementById(i).classList.add("oButtonColor")
        document.getElementById(i).classList.remove("xButtonColor")

      }else if(playerCtx.currentPlayer==="X" && playerCtx.boardValues[i]==="--"){
        document.getElementById(i).classList.add("xButtonColor")
        document.getElementById(i).classList.remove("oButtonColor")
      }

      playerCtx.changeplayer(i)
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