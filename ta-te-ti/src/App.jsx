import { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleCellClick = (x, y) => {
    // si la celda ya está ocupada, no hacemos nada
    if (board[x][y] !== null) return;

    // actualizar el tablero con un movimiento (por ahora marcamos con 'X')
    // logica: llama a setBoard pasandole un nuevo board con una X en la coordenada (x, y) donde se hizo click 
    // let posX = 0; let posY = 2;
    // a.map((fila, fIndex) => fila.map((cell, cIndex) => fIndex === posX && cIndex === posY ? 'X' : cell))
    const newBoard = board.map((fila, fIndex) =>
      fila.map((cell, cIndex) =>
        fIndex === x && cIndex === y ? 'X' : cell
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
