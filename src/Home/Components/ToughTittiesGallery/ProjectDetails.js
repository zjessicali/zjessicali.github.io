function ProjectDetails() {
  return (
    <div className="bg-white py-6 md:py-10 lg:py-20">
      <div className="md:col-span-3 md:overflow-hidden px-6 lg:px-20 md:px-10 ">
        <img
          alt="Tough Titties Gallery Mockup"
          src="/ProjectImages/ToughTittiesGallery/ToughTitties.png"
          className="h-72 w-full object-cover overflow-hidden
             md:w-full md:h-fit md:max-h-[900px]"
        ></img>
      </div>
      <section className="px-6 md:px-10 lg:px-20 py-6 md:pt-8 lg:pt-12 bg-white ">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-y-4">
          <div>
            <h1 className="uppercase font-manrope text-xs md:text-sm text-grey mb-2 md:mb-2 lg:mb-4">
              Contributions
            </h1>
            <p className="font-manrope text-sm md:text-base ">
              UX Design
              <br />
              Interaction Design <br />
              Prototyping
              <br />
              Project Management
            </p>
          </div>
          <div className="mt-0">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Context
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Eunoia UX Hackathon
              <br /> 2023
              <br />1 Week
            </p>
          </div>
          <div className="mt-0">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Tools
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Figma
              <br />
              Procreate
              <br />
              Zoom
            </p>
          </div>
          <div className="mt-0 ">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4 ">
              Team
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Carmen Law
              <br />
              Amiko Tong
              <br />
              Sarah Pang
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
