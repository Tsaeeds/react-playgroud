import { createContext, useReducer } from "react";


const ACTIONS = {
    CHANGE_PLAYER: "CHANGE_PLAYER",
    CHANGE_TEXT: "CHANGE_TEXT",
    WIN_CHECK: "WIN_CHECK",
    DRAW_CHECK: "DRAW_CHECK"
}

const PlayerContext = createContext({
    boardValues: [],
    currentPlayer: '',
    win: false,
    changeplayer: () => {},
    checkWin: () => {},
    changeText: () => {}
})

function boardReducer(state, action){

    if(action.type === ACTIONS.CHANGE_PLAYER){
        let updatedPlayer = state.currentPlayer

        updatedPlayer = updatedPlayer==="X" ? "O":"X"
        return {...state, currentPlayer: updatedPlayer}
    }

    if(action.type === ACTIONS.CHANGE_TEXT){
        let updatedBoard = [...state.value]
        updatedBoard[action.position] = state.currentPlayer

        return {...state, value: updatedBoard}
    }

    if(action.type === ACTIONS.WIN_CHECK){
        let updatedBoard = [...state.value]
        let cPlayer = state.currentPlayer
        

        if(    (updatedBoard[0] === updatedBoard[1] && updatedBoard[1] === updatedBoard[2] && updatedBoard[2] === cPlayer)
            || (updatedBoard[3] === updatedBoard[4] && updatedBoard[4] === updatedBoard[5] && updatedBoard[5] === cPlayer)
            || (updatedBoard[6] === updatedBoard[7] && updatedBoard[7] === updatedBoard[8] && updatedBoard[8] === cPlayer)
            || (updatedBoard[0] === updatedBoard[3] && updatedBoard[3] === updatedBoard[6] && updatedBoard[6] === cPlayer)
            || (updatedBoard[1] === updatedBoard[4] && updatedBoard[4] === updatedBoard[7] && updatedBoard[7] === cPlayer)
            || (updatedBoard[2] === updatedBoard[5] && updatedBoard[5] === updatedBoard[8] && updatedBoard[8] === cPlayer)
            || (updatedBoard[0] === updatedBoard[4] && updatedBoard[4] === updatedBoard[8] && updatedBoard[8] === cPlayer)
            || (updatedBoard[2] === updatedBoard[4] && updatedBoard[4] === updatedBoard[6] && updatedBoard[6] === cPlayer)){
            return {...state, win: true}
        }

        return state
    }

}

export function PlayerContextProvider({children}){

    const [board, dispatchBoardAction] = useReducer(boardReducer,{value:["-","-","-","-","-","-","-","-","-"], currentPlayer: 'X', win: false});

    function changeplayer(){
        dispatchBoardAction({type: ACTIONS.CHANGE_PLAYER})
    }

    function changeText(position){
        dispatchBoardAction({type: ACTIONS.CHANGE_TEXT, position})

    }

    function checkWin(){
        dispatchBoardAction({type: ACTIONS.WIN_CHECK})
    }

    function checkDraw(){
        dispatchBoardAction({type: ACTIONS.DRAW_CHECK})
    }

    const playerContext = {
        boardValues: board.value,
        currentPlayer: board.currentPlayer,
        win: board.win,
        changeplayer,
        checkWin,
        changeText
    }

    return <PlayerContext.Provider value={playerContext}>{children}</PlayerContext.Provider>

}

export default PlayerContext;