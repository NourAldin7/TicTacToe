import React, { useState } from "react"
import './styles/tbutton.css'



function MButton({ value, onClick }) {
  return (
    <input onClick={onClick} className="midButton" type="button" value={value} />
  )
}

function LButton({ value, onClick }) {
  return (
    <input onClick={onClick} className="lastButton" type="button" value={value} />
  )
}

function winner(squares) {
  const lines = [
    [1, 2, 0],
    [4, 5, 3],
    [7, 8, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
    {
      alert("Player " + squares[a] + " won the match")
      return squares[a]
    }
  }
  return null
}

function Board() {
  const [xTurn, setXTurn] = useState(true)
  const [squares, setSquare] = useState(Array(9).fill(null))

  

  function changePlayer(i) {
    if (squares[i] || winner(squares))
      return
    const nextSquares = squares.slice()
    nextSquares[i] = xTurn ? "X" : "O"
    setSquare(nextSquares)
    setXTurn(!xTurn)
  }

  return (
    <>
      <div id="main" className="screenMiddle">
        <MButton value={squares[0]} onClick={() => changePlayer(0)}></MButton>
        <MButton value={squares[1]} onClick={() => changePlayer(1)}></MButton>
        <LButton value={squares[2]} onClick={() => changePlayer(2)}></LButton>
        <hr />
        <MButton value={squares[3]} onClick={() => changePlayer(3)}></MButton>
        <MButton value={squares[4]} onClick={() => changePlayer(4)}></MButton>
        <LButton value={squares[5]} onClick={() => changePlayer(5)}></LButton>
        <hr />
        <MButton value={squares[6]} onClick={() => changePlayer(6)}></MButton>
        <MButton value={squares[7]} onClick={() => changePlayer(7)}></MButton>
        <LButton value={squares[8]} onClick={() => changePlayer(8)}></LButton>
      </div>
      <h1>{xTurn ? "X" : "O"} turn</h1>
    </>
  )
}
function App() {
  return(
    <Board></Board>
  )
}
export default App
