import PlayerContext from '../store/PlayerContext'
import { useContext, useEffect} from 'react'

const Board = ({value, onClick}) => {

    const playerCtx = useContext(PlayerContext);
  

    function handleClick(i){
      playerCtx.changeplayer()
        playerCtx.changeText(i)
        playerCtx.checkWin()
        
        // playerCtx.checkDraw()
  
     
    }


  return (
    <>{playerCtx.boardValues.map((v,i) => {
    return <h3 key={i} className='grid-item' onClick={handleClick.bind(null,i)} >{v}</h3>
    })}</>
  )
}

export default Board