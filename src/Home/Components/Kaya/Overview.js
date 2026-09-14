function Overview() {
  return (
    <div className=" w-full mb-16" id="Overview">
      <img
        src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789369495/kaya_ssb6ex.png"
        alt="Kaya Beta Journals"
        className="w-full   rounded-lg"
      ></img>
      <section className="w-full grid mt-6 grid-cols-4 gap-x-10">
        <div>
          <h1 className="font-DM uppercase opacity-60 mb-2">Roles</h1>
          <list className="font-DM">
            <p>UX Design</p>
            <p>Prototyping</p>
            <p>Interaction Design</p>
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
            <p>Yee Loong Tang</p>
            <p>Celine August Santoso</p>
            <p>Kaleigh Tran</p>
            <p>Katrina Tam</p>
            <p>Angelica Wong</p>
          </list>
        </div>
      </section>
      <section className="w-full grid grid-cols-2 mt-7 gap-x-10">
        <div>
          <h1 className="font-DM uppercase opacity-60 mb-2">Problem</h1>
          <p className="font-DM">
            Outdoor boulderers are dropping off after using KAYA to navigate to
            their rock, using several other platforms instead to keep track of
            progress.
          </p>
        </div>
        <div className=" ">
          <h1 className="font-DM uppercase opacity-60 mb-2">Outcome</h1>
          <p className="font-DM ">
            We created the Beta Journal, a reimagined app experience that
            restructures the information architecture and introduces new
            features to help outdoor boulderers track and reflect on their
            progress.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Overview;
