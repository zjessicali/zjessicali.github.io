function Overview() {
  return (
    <div className=" w-full mb-16">
      <img
        src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758679656/Icon_olfdvn.png"
        alt="Tough Titties Gallery"
        className="w-full   rounded-lg"
      ></img>
      <section className="w-full grid mt-6 grid-cols-4 gap-x-10">
        <div>
          <h1 className="font-DM uppercase opacity-60 mb-2">Roles</h1>
          <list className="font-DM">
            <p>UX Design</p>
            <p>Prototyping</p>
          </list>
        </div>
        <div className="">
          <h1 className="font-DM uppercase opacity-60 mb-2">Timeline</h1>
          <list className="font-DM ">
            <p>3 weeks</p>
          </list>
        </div>
        <div className="">
          <h1 className="font-DM uppercase opacity-60 mb-2">Tools</h1>
          <list className="font-DM ">
            <p>Figma</p>
          </list>
        </div>
        <div className=" ">
          <h1 className="font-DM uppercase opacity-60 mb-2">Team</h1>
          <list className="font-DM ">
            <p>Ana Lizarraga</p>
            <p>Rabab Attarazi</p>
          </list>
        </div>
      </section>
      <section className="w-full grid grid-cols-2 mt-7 gap-x-10">
        <div>
          <h1 className="font-DM uppercase opacity-60 mb-2">Problem</h1>
          <p className="font-DM">
            How might we make the process of asking for a date more seamless
            while ensuring the comfort of all users?
          </p>
        </div>
        <div className=" ">
          <h1 className="font-DM uppercase opacity-60 mb-2">Outcome</h1>
          <p className="font-DM ">
            We created a feature where users can choose to send or receive date
            requests, or even choose not to receive date requests at all from
            certain people.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Overview;
