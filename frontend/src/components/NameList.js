import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FcCheckmark, FcImageFile } from "react-icons/fc";

const NameList = (props) => {
  const [nameList, setLists] = useState([]);
  const [first, setF] = useState('');
  const [last, setL] = useState('');
  const [uploaded, setUploaded] = useState(false);
  const [imageInput, setI] = useState('http://placekitten.com/200/300')
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
      axios.post('http://localhost:3001/api/name', {firstName: first, lastName: last, image: imageInput})
        .then(res => {
          setUploaded(false);
      })
        .catch(err => console.log(err))

    } else {
      alert('Please enter full name')
    }
  }
  const uploadImage = (imgInput) => {
    const formData = new FormData();
    formData.append('file', imgInput[0])
    formData.append('upload_preset', process.env.REACT_APP_CLOUNDINARY_PRESET);
    axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUNDINARY_NAME}/image/upload`, formData)
      .then((res) => {
        setUploaded(true)
        setI(res.data.secure_url)
      })
      .catch(err => console.log(err))
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
        <div>
          <label>Upload image avatar</label>
          <input type="file" name="avatar" accept="image/png, image/jpeg" onChange={(e) => uploadImage(e.target.files)}></input>
          {uploaded ? <FcCheckmark /> : <FcImageFile />}
        </div>
      </form>
      <br></br>
      <button className="add" onClick={addName}>Add a Name</button>
    </>
  )
}

export default NameList;