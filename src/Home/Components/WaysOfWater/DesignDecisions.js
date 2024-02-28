function DesignDecisions() {
  return (
    <div className="border-b-2 border-porple text-porple font-manrope md:grid md:grid-cols-4">
      <div className="md:border-r-2 border-porple px-10 lg:px-20 pt-7 pb-3 md:py-12">
        <h3 className="opacity-70 text-sm mb-3 md:font-medium md:font-Manrope md:text-2xl">
          Design Decisions
        </h3>
      </div>
      <div className="px-10 pb-7 md:py-12 md:col-span-2">
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
