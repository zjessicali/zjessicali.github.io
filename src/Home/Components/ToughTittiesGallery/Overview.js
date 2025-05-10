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
          Tough Titties Gallery is a one week project which placed 4th for the
          Eunoia UX Hackathon in 2023, for Tough Titties Designs. Following the
          hackathon, Emma Hands, the founder, reached out to us personally to
          inquire about our interest in future work with her.
        </p>
        <img
          alt="Tough Titties Gallery Logo"
          src="/ProjectImages/ToughTittiesGallery/GalleryLogo.png"
        ></img>
      </section>
    </div>
  );
}

export default Overview;
