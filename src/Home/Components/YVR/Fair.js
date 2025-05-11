function Fair() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
            uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Summer Fair
        </p>
      </section>

      <section className="col-span-2">
        <section className="grid grid-cols-2 gap-2 ">
          <img src="/ProjectImages/YVR/Fair1.jpg" alt="Summer Activation"></img>
          <img
            src="/ProjectImages/YVR/Fair2.jpg"
            alt="Summer Fair Activation"
          ></img>
          <img
            src="/ProjectImages/YVR/Fair3.jpg"
            alt="Summer Fair Activation"
          ></img>
          <img
            src="/ProjectImages/YVR/Fair4.jpg"
            alt="Summer Fair Activation"
          ></img>
        </section>
        <p className="font-Manrope text-porple md:text-lg py-3"></p>
      </section>
    </div>
  );
}

export default Fair;
