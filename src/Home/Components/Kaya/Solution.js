import AutoplayVideo from "../Autoplay";

function Solution() {
  return (
    <div className="w-full mb-16 font-DM" id="Solution">
      <h1 className="font-DM text-pinkie uppercase mb-4">Solution</h1>
      <section className="mb-16">
        <div className="grid grid-cols-5 gap-x-3 grid-rows-6 gap-y-3 aspect-[4/2]">
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789195803/kaya1_cyxrl7.png"
            alt="Our new redesign of KAYA."
            className="rounded col-span-2 row-span-6 w-full h-auto object-cover self-stretch"
          ></img>

          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789195804/kaya2_wmsfg9.png"
            alt="Annotation abilities"
            className="col-span-2 row-span-4 rounded object-cover self-stretch"
          />

          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789195804/kaya3_sfraxk.png"
            alt="Outdoor boulderers"
            className="col-span-1 row-span-4 rounded object-cover self-stretch"
          />

          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789195804/kaya4_kfmrd3.png"
            alt="Annotation abilities"
            className="col-span-3 row-span-2 w-full h-full rounded object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Solution;
