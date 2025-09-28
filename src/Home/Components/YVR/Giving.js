import Carousel from "../Carousel";

function Giving() {
  const images = [
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1759015590/GT1_jmljjs.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1759015627/GT2_rj2ia9.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1759015578/GT3_wlt7ph.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1759015609/GT4_e9oaso.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1759015553/GT5_wttgdt.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1759015618/GT6_oo4ddn.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1759015543/GT7_dxwe7x.png",
  ];
  return (
    <>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">Giving Thanks</h1>
        <div className="mb-8">
          {/* CAROUSELLLL */}
          <Carousel images={images}></Carousel>
        </div>

        <div className="grid grid-cols-2 gap-x-10">
          <p>
            I created the creative direction of the experiential activations
            across this campaign to create a positive and uplifting atmosphere
            at YVR. This involved creating the collaterals to bring the concept
            to life through postcards, reflection plaques, signages, and
            mailboxes.
          </p>
          <p>
            This initiative created an airport experience that fostered positive
            emotions, boosted revenue, and strengthened the brand. Branded
            postcards featuring my designs were sent across the world, and
            installations by an external agency drew inspiration from my work.
          </p>
        </div>
      </section>
    </>
  );
}

export default Giving;
