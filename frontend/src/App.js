import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NameList from './components/NameList.js'

function App() {
  const [myName, setName] = useState('Cynthia');
  useEffect(() => {
    getMyName();
  })
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
        <NameList />
      </div>
    </div>
  );
}

export default App;
