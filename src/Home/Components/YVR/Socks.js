function Socks() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
              uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Socks!
        </p>
      </section>

      <section className="col-span-2">
        <section className="">
          <img src="/ProjectImages/YVR/Socks.png" alt="Socks"></img>
        </section>
        <p className="font-Manrope text-porple md:text-lg py-3"></p>
      </section>
    </div>
  );
}

export default Socks;
