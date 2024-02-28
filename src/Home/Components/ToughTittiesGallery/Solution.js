function Solution() {
  return (
    <div className="border-b-2 border-porple text-porple font-manrope md:grid md:grid-cols-4 ">
      <div className="md:border-r-2 border-porple px-10 lg:px-20 pt-7 pb-3 md:py-12">
        <h3 className="opacity-70 text-sm md:font-medium md:font-Manrope md:text-2xl ">
          Our Solution
        </h3>
      </div>
      <div className="px-10 pb-7 md:py-12 md:col-span-2">
        <p className="text-2xl mb-3 md:mb-7">
          Our proposed design is an interactive space where customers can
          connect with one another.
        </p>
        <video controls>
          <source src="videos/ToughTittiesGallery/demo.mp4" type="video/mp4" />
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
