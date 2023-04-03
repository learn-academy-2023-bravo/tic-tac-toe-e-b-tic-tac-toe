import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
 
  //This function counts player turns 
  const [count, setCount] = useState(0)

  //On clicks we need to set count plus one
  const handleGamePlay = (clickedSquare) => {
    let updateSquare = [...squares]
    setCount(count + 1)
    if(count % 2 !== 0) {
      updateSquare[clickedSquare] = "❌"   
    } else {
      updateSquare[clickedSquare] = "🧿"
    }
      
  }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {
          squares.map((square, index) => {
            return <Square
            square={square}
            index={index}
            key={index}
            handleGamePlay={handleGamePlay}
            />
          })
        }
      </div>
    </>
  )
}

export default App