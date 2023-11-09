import React from 'react'

function History({history}) {
  return (
    
        <div className="history">
          <h4>History</h4>
          {/* <ul>
            {history.map((step) => {
              const desc = (step!=0) ? "Go to move #" + step : "Go to game start";
              return (
                <li key={step}>
                  <button >{desc}</button>
                </li>
              );
            })}
          </ul> */}
        </div>
      
  )
}

export default History

