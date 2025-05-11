function ProjectDetails() {
  return (
    <div className="bg-white py-6 md:py-10 lg:py-20">
      <section className="px-6 md:px-10 lg:px-20 py-6 md:pt-8 lg:pt-12 bg-white ">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-y-4">
          <div>
            <h1 className="uppercase font-manrope text-xs md:text-sm text-grey mb-2 md:mb-2 lg:mb-4">
              Contributions
            </h1>
            <p className="font-manrope text-sm md:text-base">
              User Research
              <br />
              UI Design
              <br />
              External Contact
            </p>
          </div>
          <div className="">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Tools
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Figma
              <br />
              Zoom
              <br />
              Google Docs
            </p>
          </div>
          <div className="">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Context
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Academic
              <br />
              2025
              <br />4 Weeks
            </p>
          </div>
          <div className="">
            <h1 className="uppercase font-manrope text-xs md:text-sm  text-grey mb-2 md:mb-2 lg:mb-4">
              Team
            </h1>
            <p className="font-manrope text-sm md:text-base">
              Katrina Tam
              <br />
              Kaleigh Tran
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
