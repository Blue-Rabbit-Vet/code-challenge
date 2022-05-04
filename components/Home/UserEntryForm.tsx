import { User, UserData } from "../../lib/db";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { convertToBase64, ReturnResult } from "../Common/CommonFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "./UserProfile";
import userContext from "../Common/UserContext";

const UserEntryForm = () => {
  const { setUserDataList } = useContext(userContext);

  const [fileNameSelected, setFileNameSelected] = useState<string>("");
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [fileSelectedError, setFileSelectedError] = useState<string>("");
  const [nameEntered, setNameEntered] = useState<string>("");
  const [avatarGenerated, setAvatarGenerated] = useState<string>("");

  const createUser = async (user: User) => {
    await fetch("/api/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res: ReturnResult<UserData[]>) => {
        if (res.error) {
          console.error(res.error);
        } else {
          setUserDataList([...(res?.result ?? [])]);
        }
      });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser({ name: nameEntered, avatar: avatarGenerated });
    setNameEntered("");
    setFileNameSelected("");
    setFileSelected(null);
  };

  useEffect(() => {
    const handleFileUploadChange = async () => {
      if (fileSelected != null) {
        const fileSize = fileSelected.size / 1024 / 1024; // in MiB
        console.log(fileSize);
        console.log(fileSelected.size);
        if (fileSize < 0.8) {
          const base64 = await convertToBase64(fileSelected);

          setAvatarGenerated(base64);
          setFileSelectedError("");
        } else {
          setFileSelectedError("File Too Big! 1MB limit.");
        }
      } else {
        setAvatarGenerated("");
        setFileSelectedError("");
      }
    };
    handleFileUploadChange();
  }, [fileNameSelected, fileSelected]);

  return (
    <div>
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
          <span className="fw-bold">Add User</span>
          <FontAwesomeIcon
            icon={faUserPlus}
            width={24}
            height={24}
            className="me-2"
          />
        </div>
        <div className="card-body">
          <UserProfile name={nameEntered} avatar={avatarGenerated} />

          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <p className="fw-bold mb-2">Select Avatar:</p>
              <input
                value={fileNameSelected}
                className="form-control mb-3"
                type="file"
                name="userAvatar"
                accept=".jpeg, .png, .jpg, .gif"
                onChange={(e) => {
                  try {
                    setFileNameSelected(e?.target?.value);
                    setFileSelected(
                      e?.target?.files != null ? e?.target?.files[0] : null
                    );
                  } catch (e) {
                    console.error(e);
                  }
                }}
              />
            </div>
            <div>
              <p className="fw-bold mb-2">Enter Name:</p>
              <input
                value={nameEntered}
                type="text"
                className="form-control"
                placeholder="User's Name"
                minLength={2}
                onChange={(e) => {
                  setNameEntered(e?.target?.value);
                }}
                required
              />
            </div>
            {fileSelectedError.length > 0 ? (
              <div>
                <p className="alert alert-warning mt-3 py-2">
                  {fileSelectedError}
                </p>
              </div>
            ) : (
              <></>
            )}
            <div className="d-flex align-items-center justify-content-end">
              {fileSelectedError?.length > 0 ? (
                <button
                  type="button"
                  className="btn btn-blue-rabbit mt-3 disabled"
                  disabled
                >
                  Submit User
                </button>
              ) : (
                <button type="submit" className="btn btn-blue-rabbit mt-3">
                  Submit User
                </button>
              )}
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default UserEntryForm;
