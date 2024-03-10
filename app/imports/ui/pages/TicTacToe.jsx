import React, { useState } from 'react';
import Board from '../components/Board';

// eslint-disable-next-line react/function-component-definition
export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = history.slice(0, currentMove + 1);
    nextHistory.push(nextSquares);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((_, move) => {
    const desc = move === 0 ? 'Go to game start' : `Go to move #${move}`;
    // Only render "Go to game start" button when at the start (i.e., when currentMove is 0)
    if (move !== 0 || currentMove === 0) {
      return (
        <li key={move}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    }
    return null; // Otherwise, don't render anything for move 0 if currentMove is not 0
  });

  return (
    <div className="game">
      <div className="game-board">
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
