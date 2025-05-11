function Recommendations() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5 lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
          uppercase border border-grey text-center w-5/6 rounded-full lg:py-[2px]"
        >
          Recommendations
        </p>
      </section>
      <section className=" md:col-span-2">
        <section className="pb-8">
          <div className="pb-4">
            <p className="font-Manrope text-2xl mb-3 text-porple ">
              #1. New Menu
            </p>
            <img
              src="/ProjectImages/SojuEvents/Problem1.png"
              alt="User problems"
              className="w-full"
            ></img>
            <p className="font-Manrope my-5 text-porple md:text-lg">
              Problems addressed: Navigation confusion. Lack of hierarchy.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <img
                src="/ProjectImages/SojuEvents/Menu1.png"
                alt="Old version of menu"
                className="w-full"
              ></img>
              <p className="text-grey font-Manrope text-sm py-2">Old menu.</p>
            </div>
            <div>
              <img
                src="/ProjectImages/SojuEvents/Menu2.png"
                alt="Mockup with our recommendations."
                className="w-full"
              ></img>
              <p className="text-grey font-Manrope text-sm py-2">
                Mockup with our recommendations.
              </p>
            </div>
          </div>
          <p className="font-Manrope my-5 text-porple md:text-lg">
            We advised rearranging the navigation structure while logically
            grouping secondary pages to clearly emphasize important links, such
            as those for ticket purchases, upcoming events, and
            location-specific information.
          </p>
        </section>
        <section className="pb-8">
          <div className="pb-4">
            <p className="font-Manrope text-2xl mb-3 text-porple ">
              #2. New Book Tickets Flow
            </p>
            <img
              src="/ProjectImages/SojuEvents/Problem2.png"
              alt="User problems"
              className="w-full"
            ></img>
            <p className="font-Manrope my-5 text-porple md:text-lg">
              Problems addressed: Navigation confusion. Visual inconsistencies.
              Information overload.
            </p>
          </div>
          <div className="pb-8">
            <img
              src="/ProjectImages/SojuEvents/Problem2Flow.png"
              alt="Flow of original website"
              className="w-full"
            ></img>
            <p className="font-Manrope my-2 text-porple md:text-lg">
              The above chart shows how users can to buy tickets on the Soju
              Events website. Both flows requires 5 steps, which users
              complained to be quite tedious. The first flow also confused
              users, making them feel disoriented.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="/ProjectImages/SojuEvents/Book1.png"
              alt="Mockup of new flow"
              className="w-full"
            ></img>
            <img
              src="/ProjectImages/SojuEvents/Book2.png"
              alt="Mockup of new flow"
              className="w-full"
            ></img>
            <img
              src="/ProjectImages/SojuEvents/Book3.png"
              alt="Mockup of new flow"
              className="w-full"
            ></img>
          </div>
          <p className="text-grey font-Manrope text-sm py-2">
            Mockup of new flow.
          </p>
          <p className="font-Manrope my-2 text-porple md:text-lg">
            For a more intuitive flow, we’ve first chosen to completely remove
            the location popup in the footer and link it to the Buy Tickets page
            instead. Because most users won’t be looking at Edmonton and
            Calgary, as there aren’t events planned there yet, we opted to place
            those as tabs in the page, instead of an important place such as the
            menu, so users can reduce clicks. To further quicken this process,
            we have the Buy Tickets button link directly to the checkout.
          </p>
          <p className="font-Manrope my-2 text-porple md:text-lg">
            Any information shown on the Event Create page before was instead
            placed on the Buy Tickets page above the poster, so users can find
            this information in a more digestible way, as they found it hard to
            extract important information there.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Recommendations;
