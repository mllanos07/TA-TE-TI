import { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleCellClick = (rowIndex, cellIndex) => {
    // si la celda ya está ocupada, no hacemos nada
    if (board[rowIndex][cellIndex] !== null) return;

    // actualizar el tablero con un movimiento (por ahora marcamos con 'X')
    // logica: devuelve la misma matriz modificada en la coordenada donde se hizo click 
    // const x = 0; const y = 2
    // board.map((row, rIndex) => row.map((cell, cIndex) => rIndex === x && cIndex === y ? 'X' : cell))

    const newBoard = board.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === cellIndex ? 'X' : cell
      )
    );

    setBoard(newBoard); // actualizamos el estado del tablero
  };

  return (
    <>
      <h1>Ta-Te-Ti</h1>
      <div className="board">
        {/* Fila 1 */}
        <div className="row">
          <div className="celda" onClick={() => handleCellClick(0, 0)}>{board[0][0]}</div>
          <div className="celda" onClick={() => handleCellClick(0, 1)}>{board[0][1]}</div>
          <div className="celda" onClick={() => handleCellClick(0, 2)}>{board[0][2]}</div>
        </div>
        {/* Fila 2 */}
        <div className="row">
          <div className="celda" onClick={() => handleCellClick(1, 0)}>{board[1][0]}</div>
          <div className="celda" onClick={() => handleCellClick(1, 1)}>{board[1][1]}</div>
          <div className="celda" onClick={() => handleCellClick(1, 2)}>{board[1][2]}</div>
        </div>
        {/* Fila 3 */}
        <div className="row">
          <div className="celda" onClick={() => handleCellClick(2, 0)}>{board[2][0]}</div>
          <div className="celda" onClick={() => handleCellClick(2, 1)}>{board[2][1]}</div>
          <div className="celda" onClick={() => handleCellClick(2, 2)}>{board[2][2]}</div>
        </div>
      </div>
    </>
  );
}

export default App;
