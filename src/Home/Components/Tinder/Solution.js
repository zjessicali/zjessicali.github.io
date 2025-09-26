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
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758667019/PostPurchaseMockup_jvpq1g_a3d817.jpg"
            alt="Post purchase cards mockup."
            className="w-full rounded"
          ></img>
        </div>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (2) Sending & (not) receiving requests
        </h1>
        <div className="grid grid-cols-2 gap-x-10 mb-8">
          <AutoplayVideo
            className="w-full rounded"
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1758671464/flow_dv9iyf_9472cb.mp4"
          ></AutoplayVideo>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758671600/Screenshot_2025-09-23_165144_bn3w3h.png"
            alt="Filter options."
            className="w-full rounded"
          ></img>
        </div>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (3) Finding the Perfect Time
        </h1>
        <div className="grid grid-cols-2 gap-x-10 mb-8">
          <AutoplayVideo
            className="w-full rounded"
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1758673558/flow_dv9iyf_60b11b.mp4"
          ></AutoplayVideo>
        </div>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (4) Swipe Right on Your plans
        </h1>
        <div className="grid grid-cols-2 gap-10 mb-8">
          <AutoplayVideo
            className="w-full rounded"
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402283/4_sticker_m204nc.mp4"
          ></AutoplayVideo>
        </div>
      </section>
    </div>
  );
}

export default Solution;
