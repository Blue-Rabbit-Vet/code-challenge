import React, { Dispatch, SetStateAction } from "react";
import { UserData } from "../../lib/db";
import { ReturnResult } from "./CommonFunctions";

interface IUserContext {
  userDataList: UserData[];
  setUserDataList: Dispatch<SetStateAction<UserData[]>>;
}

const defaultUserContext = {
  userDataList: [],
  setUserDataList: () => [],
};

const UserContext = React.createContext<IUserContext>(defaultUserContext);

export default UserContext;
