import Image from "next/image";
import { User } from "../../lib/db";

const HomeHeader = ({ name }: { name: string }) => {
  return (
    <div className="main p-sm-5 p-3 d-flex flex-column align-items-center justify-content-center">
      <h1 className="title my-3">
        <span>Hi, my name is</span> <span className="name">{name ?? ""}</span>
      </h1>
      <div className="blue-rabbit" />
    </div>
  );
};

export default HomeHeader;
