function Overview() {
  return (
    <div className="md:grid md:grid-cols-4 border-b-2 border-porple">
      <section
        className="hidden md:block md:col-span-1 border-r-2 border-porple lg:px-20 px-10 py-12
          font-medium font-Manrope text-2xl opacity-70"
      >
        Overview
      </section>
      <section className="px-12 py-12 col-span-2">
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
