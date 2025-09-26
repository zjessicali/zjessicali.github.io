import AutoplayVideo from "../Autoplay";

function Solution() {
  return (
    <div className="w-full mb-16 font-DM" id="Solution">
      <h1 className="font-DM text-pinkie uppercase mb-6">Solution</h1>
      <p className="font-DM mb-6">
        Date Requests: By systemizing the process, people who have a harder tie
        saying no can instead simply press a button, or even choose not to
        receive dates at all.
      </p>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (1) Control When You Receive Date Requests
        </h1>
        <div className="grid grid-cols-2 gap-x-10 mb-8">
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758864193/1Setting_k6g5fk.png"
            alt="Post purchase cards mockup."
            className="w-2/3 rounded"
          ></img>
        </div>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (2) Sending & (not) receiving requests
        </h1>
        <div className="grid grid-cols-2 gap-x-10 mb-8">
          <AutoplayVideo
            className="w-2/3 rounded"
            controls={false}
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1758920803/2_prkit8.mov"
          ></AutoplayVideo>
          <AutoplayVideo
            className="w-2/3 rounded"
            controls={false}
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1758920809/2_2_sycw6h.mov"
          ></AutoplayVideo>
        </div>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (3) Finding the Perfect Time
        </h1>
        <div className="grid grid-cols-2 gap-x-10 mb-8">
          <AutoplayVideo
            className="w-2/3 rounded"
            controls={false}
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1758920811/3_dio10c.mov"
          ></AutoplayVideo>
        </div>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (4) Swipe Right on Your plans
        </h1>
        <div className="grid grid-cols-2 gap-10 mb-8">
          <AutoplayVideo
            className="w-2/3 rounded"
            controls={false}
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1758920819/4_ucan0v.mov"
          ></AutoplayVideo>
        </div>
      </section>
    </div>
  );
}

export default Solution;
