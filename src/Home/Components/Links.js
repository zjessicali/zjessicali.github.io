function Links() {
  const style =
    "font-Manrope text-2xl text-left px-6 pb-1 text-porple md:text-3xl lg:text-4xl md:px-5 flex items-end";
  return (
    <div className="py-6 md:py-5 bg-pinkie md:bg-white md:bottom-0 md:h-full md:flex md:flex-col md:justify-end ">
      <h1 className="hidden">about</h1>
      <h1 className={style}>
        <a href="https://www.linkedin.com/in/jessica-li-029281201/">linkedin</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          fill="none"
          className="h-4 mb-[6px] ml-1 lg:h-6"
        >
          <mask id="path-1-inside-1_753_6" fill="white">
            <path d="M3.61523 0H27.1152V23.5H3.61523V0Z" />
          </mask>
          <path
            d="M27.1152 0H29.8268V-2.71154H27.1152V0ZM3.61523 2.71154H27.1152V-2.71154H3.61523V2.71154ZM24.4037 0V23.5H29.8268V0H24.4037Z"
            fill="#2C1733"
            mask="url(#path-1-inside-1_753_6)"
          />
          <line
            x1="26.2663"
            y1="0.958674"
            x2="0.958597"
            y2="26.2664"
            stroke="#2C1733"
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
          className="h-4 mb-[6px] ml-1 lg:h-5"
        >
          <rect
            x="1.125"
            y="1.125"
            width="25.75"
            height="18.75"
            stroke="#2C1733"
            stroke-width="2.25"
          />
          <path d="M1 1L14 14L27 1" stroke="#2C1733" stroke-width="2.25" />
        </svg>
      </h1>
      <h1 className={style}>
        <a href="TODO!!" target="_blank" rel="noopener noreferrer">
          resumé
        </a>
      </h1>
      <div className="h-12 md:h-0"></div>
    </div>
  );
}

export default Links;
