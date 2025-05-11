function Twin() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
              uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Digital Twin
        </p>
      </section>

      <section className="col-span-2">
        <img
          src="/ProjectImages/YVR/Twin1.jpg"
          alt="Digital Twin Login UI Desktop"
          className=" object-contain pb-2"
        ></img>
        <img
          src="/ProjectImages/YVR/Twin3.jpg"
          alt="Digital Twin Land Acknowledgement"
          className=" object-contain"
        ></img>
        <p className="font-Manrope mb-5 text-porple md:text-lg py-3"></p>
      </section>
    </div>
  );
}

export default Twin;
