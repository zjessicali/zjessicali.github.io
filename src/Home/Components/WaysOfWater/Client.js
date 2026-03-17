function Client() {
  return (
    <section className=" w-full mb-16" id="Client">
      <h1 className="font-DM text-pinkie uppercase mb-6">Client</h1>

      <div className="grid grid-cols-2 gap-x-10">
        <div className="">
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749861721/ExpoMockup_wqzzmp.jpg"
            alt="Branding mockup for The Ways of Water"
            className="w-full h-auto"
          ></img>
        </div>
        <p className="font-DM text-lg ">
          The Ways of Water is a group exhibition hosted by Holland Festival
          with the of emphasizing the connection between water and humankind
          through different types of artworks created by 8 different artists.
        </p>
      </div>
    </section>
  );
}

export default Client;
