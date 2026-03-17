function Process() {
  return (
    <div className="w-full mb-16 font-DM" id="Process">
      <h1 className="font-DM text-pinkie uppercase mb-6">Process</h1>
      <section className="my-7 ">
        <div className="grid grid-cols-2 gap-x-10 mb-8">
          <img
            className="w-full h-full object-cover rounded"
            alt="Art Direction Poster"
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749861838/FinalPoster_egywdc.jpg"
          ></img>
          <div className="h-full flex flex-col gap-4">
            <img
              className="rounded"
              alt="Art Direction Mockup"
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1773789273/1Mockup2_kmma93.png"
            ></img>
            <img
              className="rounded"
              alt="Art Direction Mockup"
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1773789269/1Mockup4_ti0em4.png"
            ></img>
          </div>
        </div>
        <p className="font-DM">
          Through three weeks of graphical exploration, we landed on this final
          art direction, created by a teammate and I, after studying the
          qualities and works of Dan Friedman and Ellen Lupton extensively. This
          direction uses layering to add dimension and depth, overlapping
          elements to establish meaningful connections within the composition.
          The rigid grid prevents arbitrary component placement and aligns with
          our inclination to experiment with unpredictability.
        </p>
      </section>
      <section>
        <p>
          Below is a different direction I had worked on, which we didn’t adapt
          into a microsite due to feasibility.
        </p>
        <div className="grid grid-cols-2 gap-10 mt-8">
          <div className="flex flex-col gap-8">
            <img
              className="w-full rounded"
              alt="Art Direction Poster"
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749861949/Poster2_a3mkro.jpg"
            ></img>
            <img
              className="w-full rounded"
              alt="Art Direction Mockup"
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862185/2Mockup3_akjq5b.png"
            ></img>
          </div>
          <div className="h-full flex flex-col gap-8">
            <img
              className="w-full rounded"
              alt="Art Direction Mockup"
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862189/2Mockup1_abpxhw.png"
            ></img>
            <img
              className="w-full rounded"
              alt="Art Direction Mockup"
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862187/2Mockup2_ucjvwg.png"
            ></img>
            <img
              className="w-full rounded"
              alt="Art Direction Mockup"
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862191/2Mockup4_er3rlv.png"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;
