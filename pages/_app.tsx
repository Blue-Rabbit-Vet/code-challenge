import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import UserContext from "../components/Common/UserContext";
import { useState } from "react";
import { UserData } from "../lib/db";
import { ReturnResult } from "../components/Common/CommonFunctions";

function MyApp({ Component, pageProps }: AppProps) {
  const [userDataList, setUserDataList] = useState<UserData[]>([]);
  return (
    <UserContext.Provider
      value={{
        userDataList: userDataList,
        setUserDataList: setUserDataList,
      }}
    >
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
