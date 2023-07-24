import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [backendData, setBackendData]= useState()

  useEffect(()=>{
    callBackendApi()
    .then((data)=>{
      console.log(data)
      setBackendData(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  const callBackendApi = async()=>{
    const response = await fetch('/blogs');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
