import PlayerContext from '../store/PlayerContext'
import { useContext} from 'react'

const Board = ({value, onClick}) => {

    const playerCtx = useContext(PlayerContext);

  
  

    function handleClick(i){
        playerCtx.changeText(i)
        playerCtx.changeplayer()
        console.log("AFTER: "+ playerCtx.boardValues)
        playerCtx.checkWin()
        playerCtx.checkDraw()
          // const timeout = setTimeout(()=>{
          //   playerCtx.checkWin()
          //   playerCtx.checkDraw()
          //   clearTimeout(timeout)
          // },2000)
     
    }

  return (
    <>{playerCtx.boardValues.map((v,i) => {
    return <h3 key={i} className='grid-item' onClick={handleClick.bind(null,i)}>{v}</h3>
    })}</>
  )
}

export default Board