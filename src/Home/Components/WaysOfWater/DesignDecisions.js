function DesignDecisions() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5 lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-5/6 rounded-full lg:py-[2px]"
        >
          Design Decisions
        </p>
      </section>
      <div className="md:col-span-2">
        <section className="mb-12">
          <video controls>
            <source
              src="videos/WaysOfWater/1Deconstruct.mp4"
              type="video/mp4"
            />
            Your browser does not support videos. TO REPLACE
          </video>
          <p className="text-2xl my-3">
            Deconstructing the composition to transition smoothly to the next
            page.
          </p>
          <p className="mb-3 md:text-lg">
            Upon landing on the microsite, users are greeted with a lobby of
            sorts, where they are introduced to the page and given hints on how
            to navigate. From there, they can explore the exhibition's eight
            different artists.
          </p>
          <p className="md:text-lg">
            The artist pages provide more detailed information about the artists
            and the works they created for the exhibition. Users can also find
            additional information about each piece on these pages.
          </p>
        </section>
        <section className="mb-12">
          <video controls>
            <source src="videos/WaysOfWater/2Denial.mp4" type="video/mp4" />
            Your browser does not support videos.
          </video>
          <p className="text-2xl my-3">
            Denial and reward to create an immersive journey.
          </p>
          <p className="md:text-lg">
            We purposely kept the browsing hints vague to encourage users to
            explore different methods to navigate the canvas. They can drag,
            scroll, bring the cursor out of frame, or use arrow keys.
          </p>
        </section>
        <section className="mb-12">
          <video controls>
            <source src="videos/WaysOfWater/3TopNav.mp4" type="video/mp4" />
            Your browser does not support videos.
          </video>
          <p className="text-2xl my-3">
            Top navigation bar: Locate within the flow to other pages.
          </p>
          <p className="md:text-lg">
            It can also help users who are not interested in exploring through
            the whole page to directly access the page they’re looking for.
          </p>
        </section>
        <section className="mb-12">
          <video controls>
            <source src="videos/WaysOfWater/4MiniMap.mp4" type="video/mp4" />
            Your browser does not support videos.
          </video>
          <p className="text-2xl my-3">Mini-map as secondary nav.</p>
          <p className="md:text-lg">
            The mini-map allows users to quickly access their desired section on
            the page, or even use as a ‘map’ to guide them to the desired area.
          </p>
        </section>
        <section className="">
          <video controls>
            <source src="videos/WaysOfWater/5Water.mp4" type="video/mp4" />
            Your browser does not support videos.
          </video>
          <p className="text-2xl my-3">
            Water like elements to further immerse users into the exhibition.
          </p>
          <p className="md:text-lg">
            To match the water theme, we incorporated details within elements
            such as the wavy cursor or the bouncy secondary nav.
          </p>
        </section>
      </div>
    </div>
  );
}

export default DesignDecisions;
