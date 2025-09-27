import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="max-[461px]:block text-grey grid grid-cols-4 gap-10 p-5 w-full text-sm opacity-60">
        <Link
          to="/"
          className="font-DM animate-fadeUp hover-link inline-block w-fit"
        >
          ✧ jessica
        </Link>
        <div className="max-[461px]:hidden animate-fadeUp flex col-span-3 gap-x-10">
          <Link className="font-DM hover-link" to="/">
            projects
          </Link>
          <Link className="font-DM hover-link" to="/sandbox">
            sandbox
          </Link>
          {/* <h1 className="font-DM hover-link">about</h1> */}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Nav;
