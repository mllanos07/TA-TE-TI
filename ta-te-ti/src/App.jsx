import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [jugador, setJugador] = useState("X")
  const [ganador, setGanador] = useState(null)
  const [jugadas, setJugadas] = useState(0)

  const handleCellClick = (x, y) => {
    // si la celda ya está ocupada => no hacemos nada
    if (board[x][y] !== null){ 
      return;
    }
    // si ya hay un ganador => no hago nada
    if (ganador !== null){
      return;
    }

    console.log(`manejando click en la celda [${x}][${y}]`)

    // logica: llama a setBoard pasandole un nuevo board con una X en la coordenada (x, y) donde se hizo click 
    // let posX = 0; let posY = 2;
    // a.map((fila, fIndex) => fila.map((cell, cIndex) => fIndex === posX && cIndex === posY ? 'X' : cell))
    const newBoard = board.map((fila, fIndex) =>
      fila.map((cell, cIndex) =>
        fIndex === x && cIndex === y ? jugador : cell
      )
    );
    setBoard(newBoard);
    // booleano ? accion_si_true : accion_false  
    jugador === "O" ? setJugador("X") : setJugador("O")

    setJugadas(jugadas + 1)
  };
  

  const handleReset = () => {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])
    setGanador(null)
    setJugador("X")
    setJugadas(0)
}

  useEffect(() => {
    // filas
    if (board[0][0] && board[0][0] === board[0][1] && board[0][1] === board[0][2]){
      setGanador(board[0][0])
    }
    if (board[1][0] && board[1][0] === board[1][1] && board[1][1] === board[1][2]){
      setGanador(board[1][0])
    }
    if (board[2][0] && board[2][0] === board[2][1] && board[2][1] === board[2][2]){
      setGanador(board[2][0])
    }
    // columnas
    if (board[0][0] && board[0][0] === board[1][0] && board[1][0] === board[2][0]){
      setGanador(board[0][0])
    }
    if (board[0][1] && board[0][1] === board[1][1] && board[1][1] === board[2][1]){
      setGanador(board[0][1])
    }
    if (board[0][2] && board[0][2] === board[1][2] && board[1][2] === board[2][2]){
      setGanador(board[0][2])
    }
    // diagonales
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
      setGanador(board[0][0])
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
      setGanador(board[0][2])
    }

    if (jugadas == 9 && ganador == null){
      setGanador("Empate")
    }
  }, [board])

  return (
    <>
      <h1>Ta-Te-Ti</h1>
      <h2>Ganador: {ganador}</h2>
      <h3>Cantidad de jugadas: {jugadas}</h3>
      <div className="board">
        {/* fila 1 */}
        <div className="row">
          <div className="celda" onClick={() => handleCellClick(0, 0)}>{board[0][0]}</div>
          <div className="celda" onClick={() => handleCellClick(0, 1)}>{board[0][1]}</div>
          <div className="celda" onClick={() => handleCellClick(0, 2)}>{board[0][2]}</div>
        </div>
        {/* fila 2 */}
        <div className="row">
          <div className="celda" onClick={() => handleCellClick(1, 0)}>{board[1][0]}</div>
          <div className="celda" onClick={() => handleCellClick(1, 1)}>{board[1][1]}</div>
          <div className="celda" onClick={() => handleCellClick(1, 2)}>{board[1][2]}</div>
        </div>
        {/* fila 3 */}
        <div className="row">
          <div className="celda" onClick={() => handleCellClick(2, 0)}>{board[2][0]}</div>
          <div className="celda" onClick={() => handleCellClick(2, 1)}>{board[2][1]}</div>
          <div className="celda" onClick={() => handleCellClick(2, 2)}>{board[2][2]}</div>
        </div>
        <br></br>
        <button onClick={() => handleReset()}>Resetear partida</button>
      </div>
    </>
  );
}

export default App;
