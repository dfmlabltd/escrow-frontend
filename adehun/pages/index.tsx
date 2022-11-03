import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      {" "}
      <h1>Test Page</h1>
      <a href="/login">click me here to start</a>
    </div>
  );
};

export default Home;
