import AutoplayVideo from "../Autoplay";

function Solution() {
  return (
    <div className="w-full mb-16 font-DM" id="Solution">
      <h1 className="font-DM text-pinkie uppercase mb-4">Solution</h1>
      <section className="mb-8">
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
      <section>
        {/* videos go here */}
        <p className="font-DM mb-6">
          The Beta Journal serves as a centralized platform which empowers
          outdoor boulders to confidently capture and reflect on their climbing
          narrative, fostering a deeper sense of accomplishment and continuous
          growth.
        </p>
        {/* more videos */}
        <p className="font-DM">
          To support this, we restructured the app’s information architecture
          around journals, allowing users to access a dedicated journal for each
          boulder and track their progress throughout a project. I proposed
          adding the ability to take notes and annotate on specific frames of
          climbing videos, creating a more seamless way to document beta and
          revisit insights from previous attempts.
        </p>
        <img
          src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789245077/kaya_architecture_xx5fp7.png"
          alt="Architecture graph"
          className="w-full rounded "
        ></img>
      </section>
    </div>
  );
}

export default Solution;
