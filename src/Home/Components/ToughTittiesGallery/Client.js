function Client() {
  return (
    <section className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Client
        </p>
      </section>
      <div className="md:col-span-2">
        <p className="mb-5 md:text-lg">
          Tough Titties Designs was created and founded by Emma Hands as a brand
          specializing in creating light-hearted designed items that promote
          female empowerment and raise awareness for breast cancer.
        </p>
        <div className="flex justify-between w-full items-center">
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749860831/client1_rvha3p.jpg"
            alt="Sista Hood stickers"
            className="max-w-[49%] h-full"
          ></img>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749860980/client2_xz5ucu.jpg"
            alt="Tough Titties stickers"
            className="max-w-[49%] h-full "
          ></img>
        </div>
      </div>
      <div className="mb-14">
        <h1 className="text-2xl mb-3 md:text-2xl">Business needs.</h1>
        <p className="mb-7 md:text-lg">
          After interviewing Hands, we identified several pain points which led
          to insightful design directions, including:
        </p>
        <div className="mb-7 md:mb-10">
          <h2 className="text-xl mb-4 md:text-2xl">
            1. Defining the distinction between brand and identity.
          </h2>
          <h2 className="text-xl mb-4 md:text-2xl">
            2. Bridging the physical and digital touchpoints.
          </h2>
          <h2 className="text-xl mb-4 md:text-2xl">
            3. Building community connections to the audience.
          </h2>
        </div>
        <img
          src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749860983/researchFigjam_klna4c.jpg"
          alt="User research done for Tough Titties Design."
        ></img>
      </div>
    </section>
  );
}

export default Client;
