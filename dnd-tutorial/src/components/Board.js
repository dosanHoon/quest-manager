import Knight from './Knight';
import Square from './Square';


const squareCount = 8

function renderSquare(i, [knightX, knightY]) {
  const x = i % squareCount
  const y = Math.floor(i / squareCount)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null
  const size = `${100 / squareCount}%`
  return (
    <div key={i} style={{ width: size, height: size }}>
      <Square black={black}>{piece}</Square>
    </div>
  )
}

function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < Math.pow(squareCount, 2); i++) {
    squares.push(renderSquare(i, knightPosition))
  }
  return (
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
  );
}

export default Board;
