import Knight from './components/Knight';
import Square from './components/Square';

function Board({ knightPosition }) {
  return (
    <Square black>
      <Knight />
    </Square>
  );
}

export default Board;
