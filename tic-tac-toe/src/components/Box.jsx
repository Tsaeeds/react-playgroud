// import React, { useContext, useState } from 'react'
// import PlayerContext from '../store/PlayerContext'
import Board from './Board'


const Box = () => {

     //const playerCtx = useContext(PlayerContext);
    //const [boardValues, setBoardValues] = useState(["-","-","-","-","-","-","-","-","-"])

 
  return (
    <div id='box' className='grid-container'>
      <Board /> 
      </div>
  )
}

export default Box