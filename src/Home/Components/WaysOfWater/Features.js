import AutoplayVideo from "../Autoplay";

function Features() {
  return (
    <div className="w-full mb-16 font-DM" id="Features">
      <h1 className="font-DM text-pinkie uppercase mb-6">Features</h1>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (1) Using Denial and reward to create an immersive journey
        </h1>
        <div className=" mb-8">
          <AutoplayVideo
            className="w-full rounded"
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402638/2_denial_rorrif.mp4"
          ></AutoplayVideo>
        </div>
        <p>
          We purposely kept the browsing hints vague to encourage users to
          explore different methods to navigate the canvas. They can drag,
          scroll, bring the cursor out of frame, or use arrow keys.
        </p>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (2) Top navigation bar: locate within the flow to other pages
        </h1>
        <div className="mb-8">
          <AutoplayVideo
            className="w-full rounded"
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402645/3_topnav_e06crg.mp4"
          ></AutoplayVideo>
        </div>
        <p className="mb-2">
          This serves as a main navigation and can also help users who are not
          interested in exploring through the whole page to directly access the
          page they’re looking for.
        </p>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (3) Mini-map as secondary nav
        </h1>
        <div className=" mb-8">
          <AutoplayVideo
            className="w-full rounded"
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402636/4_minimap_oanjqf.mp4"
          ></AutoplayVideo>
        </div>

        <p>
          The mini-map allows users to quickly access their desired section on
          the page, or even use as a ‘map’ to guide them to the desired area.
        </p>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (4) Water like elements to further immerse users into the exhibition.
        </h1>
        <div className=" mb-8">
          <AutoplayVideo
            className="w-full rounded"
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402642/5_water_au4fg9.mp4"
          ></AutoplayVideo>
        </div>

        <p>
          To match the water theme, we incorporated details within elements such
          as the wavy cursor or the bouncy secondary nav.
        </p>
      </section>
    </div>
  );
}

export default Features;
