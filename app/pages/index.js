import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import NameSubmission from '../components/NameSubmission/NameSubmission'
import ImgSubmission from "../components/ImgSubmission/ImgSubmission";

export default function Home() {
  const endpoint = process.env.URL || "";

  // useEffect(() => {
  //   (async () => {
  //     let { data: user } = await axios.get(endpoint);
  //     setName(user.name);
  //     setImg(user.img);
  //   })();
  // }, []);

  let [name, setName] = useState("No username");
  let [img, setImg] = useState("");

  return (
    <div>
      <Image
        src={`data:image/png;base64,${img}`}
        width="300px"
        height="300px"
        alt="User Avatar"
      ></Image>
      {name}
      <NameSubmission handleName={setName} />
      <ImgSubmission handleImg={setImg} endpoint={endpoint} />
    </div>
  );
}
