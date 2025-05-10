function Header() {
  return (
    <header className="bg-pinkie h-[40vh] relative md:h-[78vh] border-b-2 border-porple">
      <div className="hidden absolute md:block bottom-16 md:ml-10 lg:ml-20">
        <h1
          className="font-Manrope font-medium text-left text-3xl w-[550px]  animate-fadeUp
                     md:leading-tight  
                    lg:text-5xl lg:w-[1200px] lg:leading-tight "
        >
          I’m Jessica, a ux and visual designer creating thoughtful and
          memorable experiences through intention and meaning. ✧
        </h1>
        <h2
          className="font-Manrope font-regular bottom-18 
                    lg:text-2xl md:mt-10"
        >
          Previously designing @ YVR Vancouver Airport Authority.
        </h2>
      </div>
      <h1 className="font-Manrope font-medium text-left text-2xl absolute bottom-9 w-80 leading-8 ml-6 animate-fadeUp md:hidden">
        Hi, it’s Jessica Li, a designer creating meaningful and memorable
        experiences. ✧
      </h1>
    </header>
  );
}

export default Header;
