import PlayerContext from '../store/PlayerContext'
import React, { useContext, useEffect } from 'react'

const Board = ({value, onClick}) => {

    const playerCtx = useContext(PlayerContext);

    console.log(playerCtx.currentPlayer)

    useEffect(()=>{
        if(playerCtx.win){
            alert("You Win!")
        }
    },[playerCtx.win])

  

    function handleClick(i){
        playerCtx.changeText(i)
        playerCtx.changeplayer()
        playerCtx.checkWin()
    }

  return (
    <>{playerCtx.boardValues.map((v,i) => {
    return <h3 key={i} className='grid-item' onClick={handleClick.bind(null,i)}>{v}</h3>
    })}</>
  )
}

export default Board