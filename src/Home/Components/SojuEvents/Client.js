function Client() {
  return (
    <div className="bg-white md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20 ">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Client
        </p>
      </section>
      <section className="col-span-2">
        <p className="font-Manrope mb-5 text-porple md:text-lg">
          Soju Events is an entertainment company based in Vancouver, dedicated
          to promoting Korean arts and culture. Through events such as Soju
          Sunday, they aim to celebrate and share Korean culture, fostering a
          community where enthusiasts can connect.
        </p>
        <img
          src="/ProjectImages/SojuEvents/Client.jpg"
          alt="Soju Sunday event"
        ></img>
      </section>
    </div>
  );
}

export default Client;
