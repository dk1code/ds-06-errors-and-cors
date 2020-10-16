import React from 'react';
import './App.css';

function App() {

  const postReqHandle = () => {
    console.log("POST fetch");
    fetch("http://localhost:5000/postme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "POST message"
      })
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }
  
  return (
    <div>
      <button onClick={postReqHandle}>Make POST call!</button>
    </div>
  );
}

export default App;
