import React from 'react';
import PropTypes from 'prop-types';
import { Square } from './Square';

export const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    // eslint-disable-next-line no-use-before-define
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  };

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onSquareClick={() => handleClick(i)}
    />
  );

  return (
    <div>
      <div className="status">{`Next player: ${xIsNext ? 'X' : 'O'}`}</div>
      {[...Array(3)].map((_, row) => (
        <div className="board-row" key={row}>
          {/* eslint-disable-next-line no-shadow */}
          {[...Array(3)].map((_, col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPlay: PropTypes.func.isRequired,
};

const calculateWinner = (squares) => {
  // This is the same calculateWinner function from your React app
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
