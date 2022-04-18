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
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
