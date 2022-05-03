import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NameList = (props) => {
  const [nameList, setLists] = useState([]);
  const [first, setF] = useState('');
  const [last, setL] = useState('')
  const getNameList = () => {
    axios.get('http://localhost:3001/api/name')
      .then(res => {
        setLists(res.data)
      })
  }
  useEffect(() => {
    getNameList()
  })
  const addName = () => {
    if(first.length && last.length) {
      axios.post('http://localhost:3001/api/name', {firstName: first, lastName: last})
        .then(res => {
        console.log('success add a name')
      })
        .catch(err => console.log(err))

    } else {
      alert('Please enter full name')
    }
  }
  return (
    <>
      <p>Display Name List: </p>
      {nameList.map((name, index) =>
        <div id="NameItem">
          <p key={index}>{name.firstName + ' ' + name.lastName}</p>
          <img src={name.image} alt={name.image} id="avatar"></img>
        </div>
      )}
      <form>
        <div>
          <label>Enter first name</label>
          <input type="text" name="fn" required onChange={(e) => setF(e.target.value)}></input>
        </div>
        <div>
          <label>Enter last name</label>
          <input type="text" name="ln" required onChange={(e) => setL(e.target.value)}></input>
        </div>
      </form>
      <br></br>
      <button className="add" onClick={addName}>Add a Name</button>
    </>
  )
}

export default NameList;