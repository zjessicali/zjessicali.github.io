function Client() {
  return (
    <section className=" w-full mb-16">
      <h1 className="font-DM text-pinkie uppercase mb-6">Client</h1>

      <div className="grid grid-cols-2 gap-x-10">
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
        <p className="font-DM text-lg leading-tight">
          Through the Eunoia UX Hackathon in 2023, we met Emma Hands, founder of
          Tough Titties Designs, a brand that creates light-hearted items
          promoting female empowerment and raising awareness for breast cancer.
          After the hackathon, she personally reached out to us to explore
          potential future collaborations.
        </p>
      </div>
    </section>
  );
}

export default Client;
