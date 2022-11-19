import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      {" "}
      <h1>Test Page</h1>
      <Link to="/login">click me here to start</Link>
    </div>
  );
};

export default Home;
