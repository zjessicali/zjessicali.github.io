function Overview() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Overview
        </p>
      </section>
      <section className="col-span-2">
        <p className="font-Manrope mb-5 text-porple md:text-lg">
          During this second year project, my team and I created an expressive
          microsite for the Holland Festival. We spent the first three weeks
          experimenting with various graphic design qualities and principles,
          which led to our art direction for our microsite that we worked on for
          the last two weeks.
        </p>
        <img
          alt="Tough Titties Gallery Logo"
          src="/ProjectImages/WaysOfWater/ExpoMockup.png"
        ></img>
        <p className="font-Manrope my-5 text-porple md:text-lg">
          The Ways of Water is a group exhibition hosted by Holland Festival
          with the of emphasizing the connection between water and humankind
          through different types of artworks created by 8 different artists.
        </p>
      </section>
    </div>
  );
}

export default Overview;
