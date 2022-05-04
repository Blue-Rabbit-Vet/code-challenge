import Head from "next/head";

const Layout = ({ children }: any) => {
  return (
    <div className="min-vh-100 d-flex flex-column ">
      <Head>
        <title>Ross McLain Code Challenge</title>
        <meta
          name="description"
          content="An application built specifically as my submission for the blue rabbit code challenge."
        />
        <link
          rel="icon"
          href="http://bluerabbit.vet/wp-content/uploads/2022/03/111Group-216.png"
        />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
