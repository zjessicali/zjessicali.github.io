function Header() {
  return (
    <header className="bg-pinkie h-[40vh] relative md:h-[78vh] border-b-2 border-porple">
      <h1
        className="font-Manrope font-medium text-left hidden text-3xl absolute bottom-16 w-[550px] ml-10 animate-fadeUp
                    md:block md:leading-tight  
                    lg:text-5xl lg:w-[1000px] lg:leading-tight lg:ml-20"
      >
        Hi, it’s Jessica Li, a designer and student looking to create thoughtful
        and memorable experiences. ✧
      </h1>
      <h1 className="font-Manrope font-medium text-left text-2xl absolute bottom-9 w-80 leading-8 ml-6 animate-fadeUp md:hidden">
        Hi, it’s Jessica Li, a designer creating thoughtful and memorable
        experiences. ✧
      </h1>
    </header>
  );
}

export default Header;
