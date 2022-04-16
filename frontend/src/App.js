import './App.css';
import React, { useState } from 'react';





function App() {

  const handleClick = async() => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(['2c:f0:5d:76:d4:9c'])
  };

    await fetch("/api/v1/wakeup", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setResponse({
            data: result,
            loading: false
        })
        },
        (error) => {
          setResponse(error);
        }
      )
}

  const [response, setResponse] = useState({
    data: '',
    loading: true
})
  return (
    <div className="App">
      <button className="wakeup-button" onClick={handleClick}>
        Wake my pc up
      </button>
      <div>
            {response.loading?'No data ':
            response.data}
        </div>
    </div>
  );
}

export default App;
