import Image from "next/image";
import { User } from "../../lib/db";

const UserProfile = ({ name, avatar }: User) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="profile-picture mb-4 rounded-circle shadow d-flex align-items-center justify-content-center position-relative">
        <img
          src={avatar?.length > 0 ? avatar : "/images/generic-user-icon-18.jpg"}
          alt="User Profile Avatar Image"
          height={130}
        />
      </div>
      <h3 className="profile-name fw-bold mb-3">{name}</h3>
    </div>
  );
};

export default UserProfile;
