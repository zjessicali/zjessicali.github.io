function ProjectDetails() {
  return (
    <div className="bg-white py-6 md:py-10 lg:py-20">
      <div className="md:col-span-3md:overflow-hidden px-6 lg:px-20 md:px-10">
        <img
          alt="The Ways Of Water Microsite Mockup"
          src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749861589/Microsite_nuflzh.jpg"
          className=" w-full object-cover overflow-hidden
             md:w-full  md:max-h-[900px]"
        ></img>
      </div>
      <section className="px-6 md:px-10 lg:px-20 py-6 md:pt-8 lg:pt-12 bg-white ">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-y-4">
          <div>
            <h1 className="uppercase font-manrope text-xs md:text-sm text-grey mb-2 md:mb-2 lg:mb-4">
              Contributions
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Project Management
              <br />
              Art Direction
              <br />
              Interaction Design
              <br />
              Content Strategy
            </p>
          </div>
          <div className="">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Tools
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Figma
              <br />
              Photoshop
              <br />
              After Effects
              <br />
              Protopie
            </p>
          </div>
          <div className="">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Context
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Academic
              <br />
              2022
              <br />5 Weeks
            </p>
          </div>
          <div className="">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Team
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Carmen Law
              <br />
              Annie Zhang
              <br />
              Stella Faustin Angelina
              <br />
              Danny Castro
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
