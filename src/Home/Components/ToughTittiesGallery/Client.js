function Client() {
  return (
    <section className="border-b-2 border-porple md:grid md:grid-cols-4 ">
      <div className="md:border-r-2 border-porple px-10 lg:px-20 pt-7 pb-3 md:py-12">
        <h1
          className="opacity-70 text-sm 
        md:font-medium md:font-Manrope md:text-2xl "
        >
          Our Client
        </h1>
      </div>
      <div className="px-10 pb-7 md:py-12 md:col-span-2">
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
