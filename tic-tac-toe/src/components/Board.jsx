import React, { useContext, useState } from 'react'
import PlayerContext from '../store/PlayerContext'

const Board = () => {

    const playerCtx = useContext(PlayerContext);

  return (
    <div>{playerCtx.boardValues.map(v => v)}</div>
  )
}

export default Board