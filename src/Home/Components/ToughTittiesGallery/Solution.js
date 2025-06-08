function Solution() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Solution
        </p>
      </section>
      <div className="md:col-span-2">
        <p className="text-2xl mb-3 md:mb-7">
          Our proposed design is an interactive space where customers can
          connect with one another.
        </p>
        <video controls>
          <source src="videos/ToughTittiesGallery/flow.mp4" type="video/mp4" />
          Your browser does not support videos.
        </video>
        <p className="mt-7 mb-3 md:text-lg">
          Here, they can share personal stories and experiences. Our solution
          uses breast icons to represent individuals, and displays written
          stories when the icons are selected.
        </p>

        <p className="md:text-lg">
          We extensively explored a diverse range of concepts, encompassing both
          physical and digital realms. Notably, we embraced the unconventional
          approach of considering the "worst possible idea," which,
          surprisingly, found integration within our solution.
        </p>
      </div>
    </div>
  );
}

export default Solution;
