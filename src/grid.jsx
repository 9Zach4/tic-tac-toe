import React from "react";
import { useState } from 'react';



const SquareButton = ({value, squaryClick}) => {

  return (
    <button className="border border-black h-12 w-12 bg-white text-3xl" onClick={squaryClick}>{value}</button>
  )
 }
export default SquareButton


export const Grid = () => {

 const [nextMove, setNextMove]= useState(true)
  const [squares, setSquares]= useState(Array(9).fill(null))


  const handleClick = (i) => {

    if (squares[i])
      return
    const nextSquares = squares.slice()
    nextSquares[i] = nextMove ? "🐮" : "🤖"
    setSquares(nextSquares)
    setNextMove(!nextMove)
  }
   
  // const winner = calculateWinner(squares)
  
    return (
  <div className="m-36 h-36 w-36 flex flex-wrap">
    <div className="grid grid-cols-3">
       <SquareButton value={squares[0]} squaryClick={()=>handleClick(0)} />
      <SquareButton value={squares[1]} squaryClick={()=>handleClick(1)}/>
      <SquareButton value={squares[2]} squaryClick={()=>handleClick(2)} />
    </div>
     <div className="grid grid-cols-3">
      <SquareButton value={squares[3]} squaryClick={()=>handleClick(3)} />
      <SquareButton value={squares[4]} squaryClick={()=>handleClick(4)} />
      <SquareButton value={squares[5]} squaryClick={()=>handleClick(5)} />
    </div>
     <div className="grid grid-cols-3">
      <SquareButton value={squares[6]} squaryClick={()=>handleClick(6)} />
      <SquareButton value={squares[7]} squaryClick={()=>handleClick(7)} />
      <SquareButton value={squares[8]} squaryClick={()=>handleClick(8)} />
      </div>
      </div>
    )

}
