import { createRef } from "react";
import axios from 'axios';

export default function ImgSubmission({ handleImg, endpoint }) {
  let imgRef = createRef();

  function convertImgToString() {
  }

  function handleClick() {
    imgRef.current.click();
  }

  async function handleUpload(e) {
    let imgString = convertImgToString(e.target.value);
    //let response = await axios.put(endpoint, {userImg: imgString});
    handleImg(`data${response.data.img}`)
  }
    return (
      <div>
        <input style={{display: "none"}} type="file" ref={imgRef} onChange={handleUpload}/>
        <button onClick={handleClick}>Upload Avatar</button>
      </div>
    );
  }