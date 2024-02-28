function Header() {
  return (
    <header className="bg-pinkie h-[40vh] relative md:h-[78vh] border-b-2 border-porple">
      <h1 className="font-Manrope font-medium text-left hidden md:block text-3xl lg:text-5xl absolute bottom-16 w-[550px] lg:w-[1000px] md:leading-tight lg:leading-tight ml-10 lg:ml-20">
        Hi, it’s Jessica Li, a designer and student looking to create meaningful
        and memorable experiences. ✧
      </h1>
      <h1 className="font-Manrope font-medium text-left text-2xl absolute bottom-9 w-80 leading-8 ml-6 md:hidden">
        Hi, it’s Jessica Li, a designer creating meaningful and memorable
        experiences. ✧
      </h1>
    </header>
  );
}

export default Header;
