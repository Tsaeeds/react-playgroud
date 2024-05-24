import Modal from './Modal'
import PlayerContext from '../store/PlayerContext'
import { useContext, useEffect, useState } from 'react'

const Summary = () => {

  const playerCtx = useContext(PlayerContext);

  function handleClick(){
    playerCtx.reset()
   
  }
 
  return ( 
      <Modal open={playerCtx.win || playerCtx.isDraw}>
        {playerCtx.win && <p>Player {playerCtx.currentPlayer} Wins</p>}
        {playerCtx.isDraw && <p>It was draw</p>}
          <button onClick={handleClick}>Close</button>
      </Modal>
  )
}

export default Summary