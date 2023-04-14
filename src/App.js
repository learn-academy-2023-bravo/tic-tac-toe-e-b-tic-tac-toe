import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
 
  //This function counts player turns 
  const [count, setCount] = useState(1)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    console.log("test2")
    return null;
  }

  //On clicks we need to set count plus one
  const handleGamePlay = (clickedSquare) => {
    let updateSquare = [...squares]

    // This conditional checks to see if there is a winner, a tie or if game can continue on.
    if(calculateWinner(squares) === "❌" || calculateWinner(squares) === "🧿"){
      return alert(`Winner is ${calculateWinner(squares)}`)

    } else if (count === 9){
      return alert( "'Tis a tie!")

    } else {
      //this nested conditional checks if the box is unclicked and it marks it otherwise 
      if(squares[clickedSquare] === null && count % 2 !== 0) {
        console.log(count)
        updateSquare[clickedSquare] = "❌"
        setSquares(updateSquare)

      } else if (squares[clickedSquare] === null && count % 2 === 0){
        console.log(count)
        updateSquare[clickedSquare] = "🧿"
        setSquares(updateSquare)

      } else {
        alert("this box is already taken")
      }
      setCount(count +1)
      console.log(`count is ${count}`)
    }
  }


  return (
    <>
      <h1>Tic Tac NO!</h1>
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