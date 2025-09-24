import Carousel from "../Carousel";

function Swift() {
  const images = [
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758753678/Swift1_afrqfw.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758753673/Swift2_bw52su.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758753676/Swift3_iacpxh.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758753674/Swift4_sqb4sh.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758753678/Swift5_ecf5t4.png",
 
  ];
  return (
    <>
    
    <section className="mb-16">
      <h1 className="font-DM opacity-60 uppercase mb-4">Taylor Swift Activation</h1>
      <div className="mb-8">
        {/* CAROUSELLLL */}
              <Carousel images={images}></Carousel>
      </div>

      <div className="grid grid-cols-2 gap-x-10">
      <p>
        With a fast turnaround, I created assets for YVR’s activation welcoming Taylor Swift fans to Vancouver, supporting both the in-terminal experience and the accompanying social media campaign. For this activation, I created signages, a cut out in the likeness of Swift, and a piano vinyl wrap. 
      </p>
      <p>
        The activation boosted YVR’s social media engagement, as fans shared photos and interacted with the installations, creating a memorable and shareable welcome
      </p>
      </div>
    </section>
    </>
  );
}

export default Swift;
