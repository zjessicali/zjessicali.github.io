function Overview() {
  return (
    <div className=" w-full mb-16" id="Overview">
      <img
        src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749861589/Microsite_nuflzh.jpg"
        alt="Tough Titties Gallery"
        className="w-full   rounded-lg"
      ></img>
      <section className="w-full grid mt-6 grid-cols-4 gap-x-10">
        <div>
          <h1 className="font-DM uppercase opacity-60 mb-2">Roles</h1>
          <list className="font-DM">
            <p>Interaction Design</p>
            <p>Prototyping</p>
            <p>Art Direction</p>
            <p>Content Strategy</p>
          </list>
        </div>
        <div className="">
          <h1 className="font-DM uppercase opacity-60 mb-2">Timeline</h1>
          <list className="font-DM ">
            <p>5 weeks</p>
          </list>
        </div>
        <div className="">
          <h1 className="font-DM uppercase opacity-60 mb-2">Tools</h1>
          <list className="font-DM ">
            <p>Figma</p>
            <p>Photoshop</p>
          </list>
        </div>
        <div className=" ">
          <h1 className="font-DM uppercase opacity-60 mb-2">Team</h1>
          <list className="font-DM ">
            <p>Carmen Law</p>
            <p>Annie Zhang</p>
            <p>Stella Faustin Angelina</p>
            <p>Danny Castro</p>
          </list>
        </div>
      </section>
    </div>
  );
}

export default Overview;
