import React from 'react'

function History({history,handleHistoryClick}) {
  return (
    
        <div className="history">
          <h4>History</h4>
          <ul>
            {history.map((step,index) => {
              
              const desc = (index !== 0) ? "Go to move #" + index : "Go to game start";
              return (
                <li key={index}>
                  <button onClick={()=>handleHistoryClick(step,index)}>{desc}</button>
                </li>
              );
            })}
          </ul>
        </div>
      
  )
}

export default History

