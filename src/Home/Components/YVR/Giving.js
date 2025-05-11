function Giving() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
            uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Giving Thanks
        </p>
      </section>

      <section className="col-span-2">
        <section className="grid grid-cols-2 gap-2 ">
          <img
            src="/ProjectImages/YVR/Giving1.jpg"
            alt="Giving Thanks Campaign"
          ></img>
          <img
            src="/ProjectImages/YVR/Giving2.jpg"
            alt="Giving Thanks Campaign"
          ></img>
          <img
            src="/ProjectImages/YVR/Giving3.jpg"
            alt="Giving Thanks Campaign"
          ></img>
          <img
            src="/ProjectImages/YVR/Giving4.jpg"
            alt="Giving Thanks Campaign"
          ></img>
        </section>
        <p className="font-Manrope text-porple md:text-lg py-3"></p>
      </section>
    </div>
  );
}

export default Giving;
