"use client";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  let textColor = "";
  if (value === "X") textColor = "text-red-600"; 
  if (value === "O") textColor = "text-green-600"; 
  
  return (
    <button
      onClick={onSquareClick}
      className={`w-30 h-30 text-4xl border border-gray-500 rounded-4xl flex items-center justify-center bg-sky-100 hover:bg-blue-800 font-bold ${textColor}`}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const draw = !winner && squares.every(Boolean);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i] || draw) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  
  const status = winner
    ? "Winner: " + winner
    : draw ? "Draw" : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="flex mb-4 text-center font-bold text-3xl text-blue-100 items-center justify-center pt-2">{status}</div>
      <div className="w-full bg-sky-500 p-6">
        <div className="flex gap-16 my-8">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex gap-16 my-8">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex gap-16 my-8">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    const description =
      move > 0 ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="text-cyan-300 font-bold hover:underline bg-cyan-900 w-full rounded-4xl"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <div className="flex gap-6 p-6 bg-blue-800 shadow-lg rounded-lg">
        {/* Tablero */}
        <div className= "game-board bg-sky-900 shadow-lg rounded-lg">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        {/* movimientos */}
        <div className="game-info bg-sky-600 shadow-lg rounded-lg p-6 flex-1 min-w-[300px] md:min-w-[400px] text-center items-center">
          <h2 className="font-bold mb-3 text-center text-3xl">Instructions</h2>
        <ol className="space-y-2 text-2xl text-center pt-8">{moves}</ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
  return null;
}
