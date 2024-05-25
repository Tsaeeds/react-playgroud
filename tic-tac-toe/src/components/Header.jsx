import PlayerContext from '../store/PlayerContext'
import React, { useContext} from 'react'

export default function Header() {

  const playerCtx = useContext(PlayerContext);

 

  return (
    <header id="main-header">
      <div id="title">
        <h1>TIC TAC TOE </h1>
      </div>
      <nav>
        X Wins: {playerCtx.xWin}
      </nav>
      <nav>
        O Wins: {playerCtx.oWin}
      </nav>
      <nav>
        Draw: {playerCtx.draw}
      </nav>
      <nav>
        Current Player: {playerCtx.currentPlayer}
      </nav>
    </header>
  );
}
