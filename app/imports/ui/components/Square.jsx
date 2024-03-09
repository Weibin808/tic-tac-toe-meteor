import React from 'react';
import PropTypes from 'prop-types';

export const Square = ({ value, onSquareClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="square" onClick={onSquareClick}>
    {value}
  </button>
);

Square.propTypes = {
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSquareClick: PropTypes.func.isRequired,
};
