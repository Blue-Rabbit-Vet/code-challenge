import Image from "next/image";
import { UserData } from "../../lib/db";
import { useContext, useEffect } from "react";
import { getNames, ReturnResult } from "../Common/CommonFunctions";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userContext from "../Common/UserContext";

const UserDatabaseView = ({ route }: { route: string }) => {
  const { userDataList, setUserDataList } = useContext(userContext);

  useEffect(() => {
    getNames(setUserDataList);
  }, [setUserDataList]);

  const deleteUser = async (id: number) => {
    await fetch("/api/names", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
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

  return (
    <div className="card flex-fill">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
            <span className="fw-bold">Names Database</span>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
            <p className="mb-0 fw-bold">{route}api/names</p>
          </div>
        </div>
      </div>
      <div className="card-body user-list flex-fill">
        {userDataList?.length > 0 ? (
          <></>
        ) : (
          <span className="fst-italic small text-muted p-3">
            0 results returned
          </span>
        )}
        {userDataList?.map((n) => (
          <div key={n.id} className="p-2 d-flex align-items-center">
            <div className="rounded-circle shadow border border-secondary profile-picture-sm d-flex align-items-center justify-content-center">
              <img
                src={
                  n?.avatar?.length > 0
                    ? n?.avatar
                    : "/images/generic-user-icon-18.jpg"
                }
                alt="user avatar image"
                height={40}
              />
            </div>

            <span className="ms-3">{n.name}</span>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center ms-auto"
              onClick={() => deleteUser(n.id)}
            >
              <FontAwesomeIcon icon={faTrash} width={15} height={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDatabaseView;
