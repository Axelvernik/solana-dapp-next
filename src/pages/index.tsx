import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>BugBearz Treasury</title>
        <meta
          name="description"
          content="BugBearz Treasury"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
