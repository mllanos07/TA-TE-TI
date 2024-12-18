import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [jugador, setJugador] = useState("X")
  const [ganador, setGanador] = useState("")
  const [jugadasX, setJugadasX] = useState([])
  const [jugadasO, setJugadasO] = useState([])

  const resetButtonRef = useRef(null);

  const handleCellClick = (x, y) => {
    // si la celda ya está ocupada => no hacemos nada
    if (board[x][y] !== null){ 
      return;
    }
    // si ya hay un ganador => no hago nada
    if (ganador !== ""){
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

    if(jugador === "X"){
      setJugadasX([...jugadasX, [x, y]])
    } else {
      setJugadasO([...jugadasO, [x, y]])
    }
  };
  

  const handleReset = () => {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])
    setGanador("")
    setJugador("X")
    setJugadasX([])
    setJugadasO([])
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
  }, [board])

  useEffect(() => {
    if (ganador || (jugadasX.length + jugadasO.length === 9)) {
      resetButtonRef.current?.focus();
    }
  }, [ganador, jugadasX.length, jugadasO.length ]);

  return (
    <>
      <h1>Ta-Te-Ti</h1>
      <h2>Ganador: { (jugadasX.length+jugadasO.length === 9 && ganador === "") ? "Empate" : ganador}</h2> 
      <h3 className='jugadas'>X: {jugadasX.map((j) => `(${j[0]}:${j[1]})`).join(", ")}</h3>
      <h3 className="jugadas">O: {jugadasO.map((j) => `(${j[0]}:${j[1]})`).join(", ")}</h3>
      <h3>Turno de: {(jugadasX.length+jugadasO.length === 9 || ganador !== "") ? "Juego terminado" : jugador}</h3>
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
        <button ref={resetButtonRef} onClick={() => handleReset()}>Resetear partida</button>
      </div>
    </>
  );
}

export default App;
