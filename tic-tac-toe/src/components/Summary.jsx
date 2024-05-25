import Modal from './Modal'
import PlayerContext from '../store/PlayerContext'
import { useContext, useEffect, useState} from 'react'

const Summary = () => {

  const playerCtx = useContext(PlayerContext);
  const[showModal, setShowModal] = useState(false); 
    
  useEffect(()=>{

      const timeout = setTimeout(()=>{
          if(playerCtx.win || playerCtx.isDraw)
            setShowModal(true)
          else
            setShowModal(false)
      },400)
    
      return () => {
        clearTimeout(timeout)
      }
  },[playerCtx.win,playerCtx.isDraw])

  function handleClick(){
    setShowModal(false)
    for(let i=0; i<playerCtx.boardValues.length; i++){
      document.getElementById(i).classList.remove("xButtonColor")
      document.getElementById(i).classList.remove("oButtonColor")
    }
    playerCtx.reset()
   
  }
 
  return ( 
      <Modal open={showModal}>
        {playerCtx.win && <p>Player {playerCtx.currentPlayer} Wins</p>}
        {playerCtx.isDraw && <p>It was draw</p>}
          <button onClick={handleClick}>Close</button>
      </Modal>
  )
}

export default Summary