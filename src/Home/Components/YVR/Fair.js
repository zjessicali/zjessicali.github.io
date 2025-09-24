import Carousel from "../Carousel";

function Fair() {
  const images =[
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758754809/SF1_kirkee.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758754798/SF2_rpvsfa.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758754810/SF3_lbqkdn.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758754806/SF4_gsh7zq.jpg"
  ]
  return (
    <>
    
    <section className="mb-16">
      <h1 className="font-DM opacity-60 uppercase mb-4">Digital Twin UI</h1>
      <div className="mb-8">
        {/* CAROUSELLLL */}
              <Carousel images={images}></Carousel>
      </div>

      <div className="grid grid-cols-2 gap-x-10">
      <p>
        I created the overarching look and feel for the YVR Summer Fair, another marketing activation, working with pastel colors and florals to create a fun and lively experience for guests. This included mostly signages and a claw machine.</p>
      <p>
        The campaign turned ice cream and wine samplings into sales, while the signage guided passengers with clear event and sampling details.      </p>
      </div>
    </section>
    </>
  );
}

export default Fair;
