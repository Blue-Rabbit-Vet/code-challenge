import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [myName, setName] = useState('Cynthia');
  const [nameList, setLists] = useState([]);
  useEffect(() => {
    getMyName();
  },[])
  const getMyName = () => {
    axios.get('http://localhost:3001/api/name')
      .then(res => {
        setName(res.data[0].firstName + ' ' + res.data[0].lastName)
      })
  }

  return (
    <div className="App">
      <div className="myName">
        <p>My name is: </p>
        <p>{myName}</p>
      </div>
      <div className="NameList">
        <button className="add">Add a Name</button>
      </div>
    </div>
  );
}

export default App;
