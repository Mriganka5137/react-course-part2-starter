import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <div>
        <Link to="/users">Users</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default HomePage;
