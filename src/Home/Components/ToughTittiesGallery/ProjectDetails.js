function ProjectDetails() {
  return (
    <div className="md:grid md:grid-cols-4">
      <div
        className="border-b-2 border-porple bg-white 
        md:col-span-3 md:border-r-2 md:overflow-hidden lg:px-20 md:px-10 md:py-6"
      >
        <img
          alt="Tough Titties Gallery Mockup"
          src="/ProjectImages/ToughTittiesGallery/ToughTitties.png"
          className="h-72 w-full object-cover overflow-hidden
             md:w-full md:h-fit md:max-h-[900px]"
        ></img>
      </div>
      <section className="px-12 py-7 bg-white border-b-2 border-porple">
        <div className="md:flex md:flex-col md:justify-end md:h-full">
          <div>
            <h1 className="uppercase font-manrope text-xs md:text-sm md:font-medium">
              Contributions
            </h1>
            <p className="font-manrope text-sm md:text-base">
              UX Design, Interaction Design, Prototyping, Scheduling
            </p>
          </div>
          <div className="mt-6">
            <h1 className="uppercase font-manrope text-xs md:text-sm md:font-medium">
              Tools
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Figma, Procreate, Zoom
            </p>
          </div>
          <div className="mt-6">
            <h1 className="uppercase font-manrope text-xs md:text-sm md:font-medium">
              Context
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Eunoia Hackathon, 2023, 1 Week
            </p>
          </div>
          <div className="mt-6">
            <h1 className="uppercase font-manrope text-xs md:text-sm md:font-medium">
              Team
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Sarah Pang, Amiko Tong, Carmen Law
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
