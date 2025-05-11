function ProjectDetails() {
  return (
    <div className="bg-white py-6 md:py-10 lg:py-20">
      <div className="md:col-span-3 md:overflow-hidden px-6 lg:px-20 md:px-10 ">
        <img
          alt="The Ways Of Water Microsite Mockup"
          src="/ProjectImages/typology.png"
          className=" w-full object-cover overflow-hidden
             md:w-full  "
        ></img>
      </div>
      <section className="px-6 md:px-10 lg:px-20 py-6 md:pt-8 lg:pt-12 bg-white ">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-y-4">
          <div>
            <h1 className="uppercase font-manrope text-xs md:text-sm text-grey mb-2 md:mb-2 lg:mb-4">
              Contributions
            </h1>
            <p className="font-manrope text-sm md:text-base ">
              Research
              <br />
              Mockups <br />
              Interaction Design
              <br />
              Visual Design
            </p>
          </div>
          <div className="mt-0">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Context
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Academic
              <br /> 2022
              <br />3 Weeks
            </p>
          </div>
          <div className="mt-0">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Tools
            </h1>
            <p className="font-manrope text-sm md:text-base">Figma</p>
          </div>
          <div className="mt-0 ">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4 ">
              Team
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Carmen Law
              <br />
              Annie Zhang
              <br />
              Stella Faustin Angelina
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
