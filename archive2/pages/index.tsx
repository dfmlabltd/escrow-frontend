import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      {" "}
      <h1>Test Page</h1>
      <Link href="/login">click me here to start</Link>
    </div>
  );
};

export default Home;
