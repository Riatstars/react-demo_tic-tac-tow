import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";
function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  //Declaring a Winner
  useEffect(() => {
    "Your code here";
  }, [history]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  
  //Handle player
  const handleClick = (i) => {
    if (!winner) {
      if (squares[i] === null) {
        squares[i] =  xIsNext? "X" : "O";
        const historyLog = [...squares]
        //square làm nhiễu data trong history, nên phải chứa trạng thái hiện tại của squares trong 1 biến tạm để gắn vào history
        //vì nếu gắn thẳng setHistory((history)=> [...history, squares]) thì sẽ bị lỗi dữ liệu
        setXIsNext((prevState)=>!prevState )
        setHistory((history)=> [...history, historyLog])
        setWinner(calculateWinner(squares))
    }
  };
}
  const handleHistoryClick = (step,index) =>{
    const timeSlice = [...step]
    //step cũng giống như squares ở trên, phải chứa trạng thái hiện tại trong biến tạm để lấy giá trị rồi mới đặt cho squares
    //
    setSquares(timeSlice)
    setHistory(history.slice(0,index+1))
    setXIsNext(((index%2)===0)? true: false)
    setWinner(null)
    console.log('history click')
  }
  
  //Restart game
  const handlRestart = () => {
    "Your code here";
    setSquares(Array(9).fill(null))
    setHistory([Array(9).fill(null)])
    setXIsNext(true)
    setWinner(null)
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board squares={squares} handleClick={handleClick} />
        <History history={history}
        handleHistoryClick={handleHistoryClick}/>
      </div>
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  )
}

export default Game