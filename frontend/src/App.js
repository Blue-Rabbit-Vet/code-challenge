import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NameList from './components/NameList.js'

function App() {
  const [myName, setName] = useState('Cynthia');
  const [image, setImage] = useState('')
  useEffect(() => {
    getMyName();
  })
  const getMyName = () => {
    axios.get('http://localhost:3001/api/name')
      .then(res => {
        setName(res.data[0].firstName + ' ' + res.data[0].lastName)
        setImage(res.data[0].image)
      })
  }

  return (
    <div className="App">
      <div id="NameItem">
        <p id="name">My name is: {myName}</p>
        <img src={image} alt="Cynthia" id="avatar"></img>
      </div>
      <div className="NameList">
        <NameList />
      </div>
    </div>
  );
}

export default App;
