import AutoplayVideo from "../Autoplay";

function Solution() {
  return (
    <div className=" w-full mb-16" id="Solution">
      <h1 className="font-DM text-pinkie uppercase mb-6">Solution</h1>
      <div className="mb-10">
        <p className="font-DM">
          Through graphical and interaction design experimentation, we created
          post-event microsite to serve as an immersive archive for the audience
          to relive and explore further.
        </p>
      </div>
      <div className="mb-10">
        <AutoplayVideo src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402642/demo_pi9pj5.mp4"></AutoplayVideo>
      </div>
      <p className="font-DM mb-2">
        Upon landing on the microsite, users are greeted with a lobby of sorts,
        where they are introduced to the page and given hints on how to
        navigate. From there, they can explore the exhibition's eight different
        artists.
      </p>
      <p className="font-DM mb-12">
        The artist pages provide more detailed information about the artists and
        the works they created for the exhibition. Users can also find
        additional information about each piece on these pages.
      </p>
    </div>
  );
}

export default Solution;
