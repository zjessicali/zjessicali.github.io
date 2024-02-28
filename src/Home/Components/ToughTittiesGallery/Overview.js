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
