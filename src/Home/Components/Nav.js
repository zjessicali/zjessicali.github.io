import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="z-50 md:hidden fixed bottom-0 bg-white flex justify-between px-6 w-full h-12 items-center border-t-2 border-porple lg:text-base md:text-sm">
        <Link to="/" className="font-Manrope md:hidden">
          jessica ✧
        </Link>
        {/* <h6 className="font-Manrope">jessica ✧</h6> */}
        {/* <h6 className="font-Manrope">about</h6> */}
        <Link to="about" className="font-Manrope md:hidden">
          about
        </Link>
      </div>
      <div className="hidden md:flex bg-pinkie z-50 justify-between md:px-10 lg:px-20 py-8 w-full h-12 items-center">
        <Link to="/" className="font-Manrope">
          jessica ✧
        </Link>
        <h6 className="font-Manrope opacity-50">seeking for summer 2025</h6>
      </div>
      <div></div>
    </>
  );
};

export default Nav;
