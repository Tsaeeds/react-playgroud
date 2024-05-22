import { createContext, useReducer } from "react";


const ACTIONS = {
    CHANGE_PLAYER: "CHANGE_PLAYER",
    CHANGE_TEXT: "CHANGE_TEXT",
    WIN_CHECK: "WIN_CHECK"
}

const PlayerContext = createContext({
    boardValues: [],
    currentPlayer: '',
    changeplayer: () => {},
    checkWin: () => {},
    changeText: () => {}
})

function boardReducer(state, action){

    if(action.type === "CHANGE_PLAYER"){
        let updatedPlayer = state.currentPlayer

        updatedPlayer = updatedPlayer==="X" ? "O":"X"
        console.log(updatedPlayer)
        return {...state, currentPlayer: updatedPlayer}
    }

    if(action.type === ACTIONS.CHANGE_TEXT){
        let updatedBoard = [...state.value]
        updatedBoard[action.position] = state.currentPlayer

        return {...state, value: updatedBoard}
    }

}

export function PlayerContextProvider({children}){

    const [board, dispatchBoardAction] = useReducer(boardReducer,{value:["-","-","-","-","-","-","-","-","-"], currentPlayer: 'X'});

    function changeplayer(){
        dispatchBoardAction({type: "CHANGE_PLAYER"})
    }

    function changeText(position){
        dispatchBoardAction({type: ACTIONS.CHANGE_TEXT, position})
    }

    function checkWin(){
        dispatchBoardAction({type: "WIN_CHECK"})
    }

    const playerContext = {
        boardValues: board.value,
        currentPlayer: board.changeplayer,
        changeplayer,
        checkWin,
        changeText
    }

    return <PlayerContext.Provider value={playerContext}>{children}</PlayerContext.Provider>

}

export default PlayerContext;