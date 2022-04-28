import { createRef } from "react";
import axios from 'axios';

export default function NameSubmission({ handleName, endpoint }) {
  let nameRef = createRef();

  async function handleClick() {
    //await axios.put(endpoint, {name: nameRef.current.value});
    handleName(nameRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={nameRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}
