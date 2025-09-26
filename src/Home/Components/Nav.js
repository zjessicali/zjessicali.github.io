import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className=" text-grey grid grid-cols-4 gap-10 p-5 w-full text-sm opacity-60">
        <Link to="/" className="font-DM animate-fadeUp hover-link">
          ✧ jessica
        </Link>
        <div className="animate-fadeUp flex col-span-3 gap-x-10">
          <h1 className="font-DM hover-link">projects</h1>
          <h1 className="font-DM hover-link">sandbox</h1>
          <h1 className="font-DM hover-link">about</h1>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Nav;
