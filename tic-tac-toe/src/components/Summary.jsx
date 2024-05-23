import Modal from './Modal'
import PlayerContext from '../store/PlayerContext'
import { useContext } from 'react'

const Summary = () => {

  const playerCtx = useContext(PlayerContext);

  function handleClick(){
    playerCtx.reset()
   
  }
 
  return ( 
      <Modal open={playerCtx.win===true || playerCtx.isDraw===true}>
        {playerCtx.win && <p>Player {playerCtx.currentPlayer} Wins</p>}
        {playerCtx.isDraw && <p>It was draw</p>}
          <button onClick={handleClick}>Close</button>
      </Modal>
  )
}

export default Summary