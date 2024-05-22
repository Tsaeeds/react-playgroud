import React, { useState } from 'react'

const Board = () => {

   const [boardValue, setBoardValue] =  useState(["-","-","-","-","-","-","-","-","-"])

  return (
    <div>{boardValue.map(val => val)}</div>
  )
}

export default Board