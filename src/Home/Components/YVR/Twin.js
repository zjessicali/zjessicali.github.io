import Carousel from "../Carousel";

function Twin() {
  const images =[
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758754336/DT1_j4wzpr.png",
    "https://res.cloudinary.com/de9qkjreb/image/upload/v1758754336/DT2_g0z5xe.jpg"
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
        As one of my first projects, I was assigned work on the Digital Twin, a software that mirrors terminal activities for YVR employees. The team requested new login screens and asked for a Musqueam element on the main page. Rather than simply adding a piece of artwork, I considered how to incorporate it in a more meaningful way.      </p>
      <p>
        The login screens were successfully implemented into the product, and the Musqueam team responded positively to the land acknowledgement interaction, noting their appreciation during the approval process.      </p>
      </div>
    </section>
    </>
  );
}

export default Twin;
