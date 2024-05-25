import { createContext, useReducer } from "react";


const ACTIONS = {
    CHANGE_PLAYER: "CHANGE_PLAYER",
    CHANGE_TEXT: "CHANGE_TEXT",
    WIN_OR_DRAW_CHECK: "WIN_OR_DRAW_CHECK",
    RESET: "RESET",
    INCREMENT: "INCREMENT"
}

const PlayerContext = createContext({
    boardValues: [],
    currentPlayer: '',
    win: false,
    isDraw: false,
    draw: 0,
    xWin: 0,
    oWin: 0,
    changeplayer: () => {},
    checkWin: () => {},
    changeText: () => {},
    reset: () => {},
})

function boardReducer(state, action){

    if(action.type === ACTIONS.RESET){
        let resetValue = ["--","--","--","--","--","--","--","--","--"]
        let resetCurrentPlayer = 'O'
        let resetWin = false
        let resetDraw = false

        return {...state, value: resetValue, currentPlayer: resetCurrentPlayer, win: resetWin, isDraw: resetDraw}
    }


    if(action.type === ACTIONS.CHANGE_PLAYER){
        let updatedPlayer = state.currentPlayer
        let updatedBoard = [...state.value]

        if(updatedBoard[action.position]==="--"){
            updatedPlayer = updatedPlayer==="X" ? "O":"X"
            return {...state, currentPlayer: updatedPlayer}
        }
        return state
    }

    if(action.type === ACTIONS.CHANGE_TEXT){
        let updatedBoard = [...state.value]
        if(updatedBoard[action.position]==="--")
            updatedBoard[action.position] = state.currentPlayer

        return {...state, value: updatedBoard}
    }

    if(action.type === ACTIONS.WIN_OR_DRAW_CHECK){
        let bVals = [...state.value]
        
        if(    (bVals[0] === bVals[1] && bVals[1] === bVals[2] && bVals[2] === state.currentPlayer)
            || (bVals[3] === bVals[4] && bVals[4] === bVals[5] && bVals[5] === state.currentPlayer)
            || (bVals[6] === bVals[7] && bVals[7] === bVals[8] && bVals[8] === state.currentPlayer)
            || (bVals[0] === bVals[3] && bVals[3] === bVals[6] && bVals[6] === state.currentPlayer)
            || (bVals[1] === bVals[4] && bVals[4] === bVals[7] && bVals[7] === state.currentPlayer)
            || (bVals[2] === bVals[5] && bVals[5] === bVals[8] && bVals[8] === state.currentPlayer)
            || (bVals[0] === bVals[4] && bVals[4] === bVals[8] && bVals[8] === state.currentPlayer)
            || (bVals[2] === bVals[4] && bVals[4] === bVals[6] && bVals[6] === state.currentPlayer)){

            if(state.currentPlayer==="X"){
                return {...state, win: true, xWin: ++state.xWin}
            }
            else{
                return {...state, win: true, oWin: ++state.oWin}
            }
        
                
        }else{
            let updatedBoard = [...state.value]
            let draw = state.draw
            if(!updatedBoard.includes("--")){
                    draw = draw+1
                    return {...state, isDraw: true, draw}
            }
        }

        return state
    }


}

export function PlayerContextProvider({children}){

    const [board, dispatchBoardAction] = useReducer(boardReducer,
        {value:["--","--","--","--","--","--","--","--","--"],
         currentPlayer: 'O',
         win: false,
         isDraw: false,
         draw: 0,
         xWin: 0,
         oWin: 0
        });


    function changeplayer(position){
        dispatchBoardAction({type: ACTIONS.CHANGE_PLAYER, position})
    }

    function changeText(position){
        dispatchBoardAction({type: ACTIONS.CHANGE_TEXT, position})

    }

    function checkWinOrDraw(){
        dispatchBoardAction({type: ACTIONS.WIN_OR_DRAW_CHECK})
    }


    function reset(){
        dispatchBoardAction({type: ACTIONS.RESET})
    }


   

    const playerContext = {
        boardValues: board.value,
        currentPlayer: board.currentPlayer,
        win: board.win,
        isDraw: board.isDraw,
        draw: board.draw,
        xWin: board.xWin,
        oWin: board.oWin,
        changeplayer,
        checkWinOrDraw,
        changeText,
        reset
    }

    return <PlayerContext.Provider value={playerContext}>{children}</PlayerContext.Provider>

}

export default PlayerContext;