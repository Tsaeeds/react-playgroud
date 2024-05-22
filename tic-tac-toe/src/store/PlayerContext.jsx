import { createContext, useReducer } from "react";

const PlayerContext = createContext({
    boardValues: [],
    currentPlayer: '',
    changeplayer: () => {},
    checkWin: () => {}
})

function boardReducer(state, action){

    if(action.type === "CHANGE_PLAYER"){
        let updatedPlayer = state.currentPlayer

        updatedPlayer = updatedPlayer==="X" ? "O":"X"

        return {...state, currentPlayer: updatedPlayer}
    }

}

export function PlayerContextProvider({children}){

    const [board, dispatchBoardAction] = useReducer(boardReducer,["-","-","-"])

    function changeplayer(){
        dispatchBoardAction({type: "CHANGE_PLAYER"})
    }

    function checkWin(){
        dispatchBoardAction({type: "WIN_CHECK"})
    }

    const playerContext = {
        boardValues: board.boardValues,
        currentPlayer: 'X',
        changeplayer,
        checkWin
    }

    return <PlayerContext.Provider value={playerContext}>{children}</PlayerContext.Provider>

}

export default PlayerContext;