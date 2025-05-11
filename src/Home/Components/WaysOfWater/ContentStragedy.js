function ContentStragedy() {
  return (
    <section className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <div className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Content Strategy
        </p>
      </div>
      <div className="md:col-span-2">
        <video controls>
          <source
            src="videos/WaysOfWater/fullwalkthrough.mp4"
            type="video/mp4"
          />
          Your browser does not support videos.
        </video>
        <p className="text-2xl my-3">
          Create a post-event microsite to serve as an immersive archive for the
          audience to relive and explore further.
        </p>
        <p className="mb-5 md:text-lg">
          Upon landing on the microsite, users are greeted with a lobby of
          sorts, where they are introduced to the page and given hints on how to
          navigate. From there, they can explore the exhibition's eight
          different artists.
        </p>
        <p className="md:text-lg">
          The artist pages provide more detailed information about the artists
          and the works they created for the exhibition. Users can also find
          additional information about each piece on these pages.
        </p>
      </div>
    </section>
  );
}

export default ContentStragedy;
