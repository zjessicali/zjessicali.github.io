function Overview() {
  return (
    <div className=" w-full mb-12">
      <div className="w-full h-80 bg-pinkie rounded-lg"></div>
      <section className="w-full grid mt-6 grid-cols-4 gap-x-10">
        <div>
          <h1 className="font-DM uppercase opacity-60 mb-2">Roles</h1>
          <list className="font-DM">
            <p>UX Design</p>
            <p>Prototyping</p>
            <p>Project Management</p>
          </list>
        </div>
        <div className="">
          <h1 className="font-DM uppercase opacity-60 mb-2">Timeline</h1>
          <list className="font-DM ">
            <p>1 week</p>
          </list>
        </div>
        <div className="">
          <h1 className="font-DM uppercase opacity-60 mb-2">Tools</h1>
          <list className="font-DM ">
            <p>Figma</p>
            <p>Procreate</p>
            <p>Zoom</p>
          </list>
        </div>
        <div className=" ">
          <h1 className="font-DM uppercase opacity-60 mb-2">Team</h1>
          <list className="font-DM ">
            <p>Carmen Law</p>
            <p>Sarah Pang</p>
            <p>Amiko Tang</p>
          </list>
        </div>
      </section>
      <section className="w-full grid grid-cols-2 mt-7 gap-x-10">
        <div>
          <h1 className="font-DM uppercase opacity-60 mb-2">Problem</h1>
          <p className="font-DM">
            How might we help customers who support women empowerment better
            connect with the business by building a sense of community in a
            space that has a desire of belonging and interactions?
          </p>
        </div>
        <div className=" ">
          <h1 className="font-DM uppercase opacity-60 mb-2">Outcome</h1>
          <p className="font-DM ">
            We conducted user research, ideated, and developed a working
            prototype for user testing within a one week deadline.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Overview;
