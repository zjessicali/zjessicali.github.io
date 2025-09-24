function Overview() {
  return (
    <div className=" w-full mb-16">
      <div className="grid grid-cols-2 gap-x-10">
        <img
          src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758755454/YVR1_egk8ug.png"
          alt="Tough Titties Gallery"
          className="w-full rounded"
        ></img>
        <img
          src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758755452/YVR2_q3d3rc.png"
          alt="Tough Titties Gallery"
          className="w-full   rounded"
        ></img>
      </div>
      <section className="w-full grid mt-6 grid-cols-4 gap-x-10">
        <div className="col-span-2">
          During my internship at YVR, I worked on a small design team of three, where I was assigned projects and tasks by the team lead. My process typically involved meeting with requesting teams to understand their goals, developing initial drafts for review and feedback, and then producing final deliverables tailored to the print shop’s requirements. Below, I showcase several projects I took ownership of.
        </div>
        <div className="">
          <h1 className="font-DM uppercase opacity-60 mb-2">Timeline</h1>
          <list className="font-DM ">
            <p>8 months</p>
          </list>
        </div>
        <div className="">
          <h1 className="font-DM uppercase opacity-60 mb-2">Tools</h1>
          <list className="font-DM ">
            <p>Adobe Illustrator</p>
            <p>Adobe InDesign</p>
            <p>Figma</p>
            <p>Monday</p>
          </list>
        </div>
        
      </section>
      
    </div>
  );
}

export default Overview;
