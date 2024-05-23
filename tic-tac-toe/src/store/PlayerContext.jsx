import { createContext, useReducer } from "react";


const ACTIONS = {
    CHANGE_PLAYER: "CHANGE_PLAYER",
    CHANGE_TEXT: "CHANGE_TEXT",
    WIN_CHECK: "WIN_CHECK",
    DRAW_CHECK: "DRAW_CHECK",
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
    checkDraw: () => {},
    changeText: () => {},
    reset: () => {},
})

function boardReducer(state, action){

    if(action.type === ACTIONS.RESET){
        let resetValue = ["-","-","-","-","-","-","-","-","-"]
        let resetCurrentPlayer = 'X'
        let resetWin = false
        let resetDraw = false

      //value:["-","-","-","-","-","-","-","-","-"], currentPlayer: 'X', win: false
        return {...state, value: resetValue, currentPlayer: resetCurrentPlayer, win: resetWin, isDraw: resetDraw}
    }




    if(action.type === ACTIONS.CHANGE_PLAYER){
        let updatedPlayer = state.currentPlayer

        updatedPlayer = updatedPlayer==="X" ? "O":"X"
        return {...state, currentPlayer: updatedPlayer}
    }

    if(action.type === ACTIONS.CHANGE_TEXT){
        let updatedBoard = [...state.value]
        if(updatedBoard[action.position]==="-")
            updatedBoard[action.position] = state.currentPlayer

        return {...state, value: updatedBoard}
    }

    if(action.type === ACTIONS.WIN_CHECK){
        let updatedPlayer = state.currentPlayer
        let updatedBoard = [...state.value]
        let cPlayer = state.currentPlayer
        let oWin = state.oWin
        let xWin = state.xWin
        
        

        if(    (updatedBoard[0] === updatedBoard[1] && updatedBoard[1] === updatedBoard[2] && updatedBoard[2] === cPlayer)
            || (updatedBoard[3] === updatedBoard[4] && updatedBoard[4] === updatedBoard[5] && updatedBoard[5] === cPlayer)
            || (updatedBoard[6] === updatedBoard[7] && updatedBoard[7] === updatedBoard[8] && updatedBoard[8] === cPlayer)
            || (updatedBoard[0] === updatedBoard[3] && updatedBoard[3] === updatedBoard[6] && updatedBoard[6] === cPlayer)
            || (updatedBoard[1] === updatedBoard[4] && updatedBoard[4] === updatedBoard[7] && updatedBoard[7] === cPlayer)
            || (updatedBoard[2] === updatedBoard[5] && updatedBoard[5] === updatedBoard[8] && updatedBoard[8] === cPlayer)
            || (updatedBoard[0] === updatedBoard[4] && updatedBoard[4] === updatedBoard[8] && updatedBoard[8] === cPlayer)
            || (updatedBoard[2] === updatedBoard[4] && updatedBoard[4] === updatedBoard[6] && updatedBoard[6] === cPlayer)){

            if(updatedPlayer==="X"){
                xWin = xWin+1
                return {...state, win: true, xWin: xWin}
            }
            else{
                oWin = oWin+1
                return {...state, win: true, oWin: oWin}
            }
        
                
        }

        return state
    }

    if(action.type === ACTIONS.DRAW_CHECK){
            let updatedBoard = [...state.value]
            let draw = state.draw
       if(!updatedBoard.includes("-")){
            draw = draw+1
            return {...state, isDraw: true, draw}
       }

       return state
    }

   

}

export function PlayerContextProvider({children}){

    const [board, dispatchBoardAction] = useReducer(boardReducer,
        {value:["-","-","-","-","-","-","-","-","-"],
         currentPlayer: 'X', 
         win: false,
         isDraw: false,
         draw: 0,
         xWin: 0,
         oWin: 0
        });


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
        checkWin,
        checkDraw,
        changeText,
        reset
    }

    return <PlayerContext.Provider value={playerContext}>{children}</PlayerContext.Provider>

}

export default PlayerContext;