import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="z-50 md:hidden fixed bottom-0 flex justify-between px-6 w-full h-12 items-center border-t-2 border-porple bg-white lg:text-base md:text-sm ">
        <Link to="/" className="font-Manrope md:hidden">
          ✧ jessica
        </Link>
        {/* JAN 2025 UPDATE: UNLINKED BC I HATE IT AND WANNA UPDATE IT LATER */}
        {/* <Link to="about" className="font-Manrope md:hidden">
          about
        </Link> */}
      </div>
      <div className="hidden md:flex bg-pinkie z-50 justify-between md:px-10 lg:px-20 py-8 w-full h-12 items-center">
        <Link to="/" className="font-Manrope  animate-fadeUp">
          ✧ jessica
        </Link>
        <div className="opacity-50 animate-fadeUp flex">
          <h1 className="font-Manrope px-4">
            <a href="https://www.linkedin.com/in/jessica-li-029281201/">
              linkedin
            </a>
          </h1>
          <h1 className="font-Manrope">
            <a href="mailto:z.jessicali2001@gmail.com">email</a>
          </h1>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Nav;
