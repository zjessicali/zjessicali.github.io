import { Link } from "react-router-dom";
function Links() {
  const style =
    "group font-Manrope text-2xl text-left px-6 pb-1 md:px-0 text-porple md:text-2xl lg:text-4xl  flex items-end md:hover:text-pinkie";
  return (
    <div className="py-6 md:py-0 bg-pinkie md:bg-white md:bottom-0 md:h-full md:flex md:flex-col md:justify-end ">
      <Link to="/about" className={style}>
        about
      </Link>

      <h1 className={style}>
        <a href="https://www.linkedin.com/in/jessica-li-029281201/">linkedin</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          stroke="currentColor"
          className="h-4 mb-[6px]  lg:h-5 stroke-porple md:group-hover:stroke-pinkie"
          fill="none"
        >
          <line
            x1="26.2663"
            y1="0.958674"
            x2="0.958597"
            y2="26.2664"
            stroke-width="2.71154"
          />
          <line
            x1="27"
            y1="1.35577"
            x2="3"
            y2="1.35577"
            stroke-width="2.71154"
          />
          <line
            x1="26.3558"
            y1="5.92626e-08"
            x2="26.3558"
            y2="24"
            stroke-width="2.71154"
          />
        </svg>
      </h1>
      <h1 className={style}>
        <a href="mailto:z.jessicali2001@gmail.com">email</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 21"
          fill="none"
          stroke="currentColor"
          className="h-4 mb-[6px] ml-1 lg:h-5 stroke-porple md:group-hover:stroke-pinkie"
        >
          <rect
            x="1.125"
            y="1.125"
            width="25.75"
            height="18.75"
            stroke-width="2.25"
          />
          <path d="M1 1L14 14L27 1" stroke-width="2.25" />
        </svg>
      </h1>
      <h1 className={style}>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          resumé
        </a>
      </h1>
      <div className="h-12 md:h-0"></div>
    </div>
  );
}

export default Links;
