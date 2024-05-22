// import React, { useContext, useState } from 'react'
// import PlayerContext from '../store/PlayerContext'
import Board from './Board'

const Box = () => {

     //const playerCtx = useContext(PlayerContext);
    //const [boardValues, setBoardValues] = useState(["-","-","-","-","-","-","-","-","-"])

    function handleOnclick(e,i) {
      const index = e.target.id
    
      console.log(e.target.id)
      console.log(e)
    }
  return (
    <div id='box' className='grid-container'><Board onClick={handleOnclick} /> </div>
  )
}

export default Box