import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import { canMoveKnight, moveKnight } from './Game';
import Knight from './Knight';
import Square from './Square';


const squareCount = 8

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) moveKnight(toX, toY)
}

function renderSquare(i, knightPosition) {
  const x = i % squareCount
  const y = Math.floor(i / squareCount)

  const size = `${100 / squareCount}%`
  return (
    <div key={i} style={{ width: size, height: size }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}


function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < Math.pow(squareCount, 2); i++) {
    squares.push(renderSquare(i, knightPosition))
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}

export default Board;
