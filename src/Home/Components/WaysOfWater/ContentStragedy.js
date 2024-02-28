function ContentStragedy() {
  return (
    <section className="border-b-2 border-porple md:grid md:grid-cols-4 ">
      <div className="md:border-r-2 border-porple px-10 lg:px-20 pt-7 pb-3 md:py-12">
        <h1
          className="opacity-70 text-sm 
        md:font-medium md:font-Manrope md:text-2xl "
        >
          Content Stragedy
        </h1>
      </div>
      <div className="px-10 pb-7 md:py-12 md:col-span-2">
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
