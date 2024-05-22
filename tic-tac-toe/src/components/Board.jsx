import PlayerContext from '../store/PlayerContext'
import React, { useContext, useState } from 'react'

const Board = ({value, onClick}) => {

    const playerCtx = useContext(PlayerContext);

    function handleClick(i){
        console.log(i)
        playerCtx.changeText(i)
        playerCtx.changeplayer()
    }

  return (
    <>{playerCtx.boardValues.map((v,i) => {
    return <h3 key={i} className='grid-item' onClick={handleClick.bind(null,i)}>{v}</h3>
    })}</>
  )
}

export default Board