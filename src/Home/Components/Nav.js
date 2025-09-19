import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className=" text-grey grid grid-cols-3 gap-10 px-5 py-5 w-full text-sm opacity-60">
        <Link to="/" className="font-DM animate-fadeUp">
          ✧ jessica
        </Link>
        <div className="animate-fadeUp flex col-span-2 gap-10">
          <h1 className="font-DM px-4">projects</h1>
          <h1 className="font-DM">sandbox</h1>
          <h1 className="font-DM">about</h1>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Nav;
