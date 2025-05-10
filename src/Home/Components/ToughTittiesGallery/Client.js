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
            src="/ProjectImages/ToughTittiesGallery/client1.png"
            alt="Sista Hood stickers"
            className="max-w-[49%] h-full"
          ></img>
          <img
            src="/ProjectImages/ToughTittiesGallery/client2.png"
            alt="Tough Titties stickers"
            className="max-w-[49%] h-full "
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Client;
