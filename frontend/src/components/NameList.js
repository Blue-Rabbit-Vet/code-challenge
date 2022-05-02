import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NameList = (props) => {
  const [nameList, setLists] = useState([]);
  const getNameList = () => {
    axios.get('http://localhost:3001/api/name')
      .then(res => {
        setLists(res.data)
      })
  }
  useEffect(() => {
    getNameList()
  })
  return (
    <>
      <p>Display Name List: </p>
      {nameList.map((name, index) =>
        <p key={index}>{name.firstName + ' ' + name.lastName}</p>
      )}
      <button className="add">Add a Name</button>
    </>
  )
}

export default NameList;