import AutoplayVideo from "../Autoplay";

function Solution() {
  return (
    <div className="w-full mb-16 font-DM" id="Solution">
      <h1 className="font-DM text-pinkie uppercase mb-6">Solution</h1>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (1) bridging the gap between physical products to digital media.
        </h1>
        <div className="grid grid-cols-2 gap-x-10 mb-8">
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758667019/PostPurchaseMockup_jvpq1g_a3d817.jpg"
            alt="Post purchase cards mockup."
            className="w-full rounded"
          ></img>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758667536/MacBook_Pro_16__-_33_eakjp2.jpg"
            alt="Enter unique access code to create your own Titties."
            className="w-full rounded"
          ></img>
        </div>
        <p>
          With each purchase, customers receive a post-purchase card directing
          them to the Tough Titties Gallery. The card includes a unique code
          that allows the customer to create their own entry, to prevent abuse
          or malicious contents.
        </p>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (2) creating an intimate space of representation
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
        <p className="mb-2">
          Upon entering the gallery, the user will be welcomed by 10 random
          pairs or titties. This is to mimic a real life gathering experience,
          where you never know who you will meet.
        </p>
        <p>
          I was responsible for designing and prototyping this page, as well as
          illustrating a diverse set of titties. The team initially wanted 10
          images to appear in completely random positions, but to keep it
          technically feasible, I suggested fixing the positions on the page,
          randomizing which titties appear on refresh or shuffle.
        </p>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (3) representation through titties and stories
        </h1>
        <div className="grid grid-cols-2 gap-x-10 mb-8">
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758672717/Screenshot_2025-09-23_171122_ljsuxn.png"
            alt="Filter options."
            className="w-full rounded"
          ></img>
          <AutoplayVideo
            className="w-full rounded"
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1758673558/flow_dv9iyf_60b11b.mp4"
          ></AutoplayVideo>
        </div>

        <p>
          Breast customizations offer diverse options for self-expression in
          Emma Hands’ style, enabling users to contribute their unique identity
          to the gallery. To ensure inclusivity, we also provide users a way to
          opt out, along with an ‘I don’t feel represented’ button for feedback
          and empowerment. Afterwards, users can write their own stories to
          share to those within the community.
        </p>
      </section>
      <section className="mb-16">
        <h1 className="font-DM opacity-60 uppercase mb-4">
          (4) Connecting supporters of women empowerment
        </h1>
        <div className="grid grid-cols-2 gap-10 mb-8">
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758677044/Screenshot_2025-09-23_182230_h9yyge.png"
            alt="Hover Mia's titties on home screen."
            className="w-full rounded"
          ></img>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1758677043/Screenshot_2025-09-23_182305_jim88d.png"
            alt="View Mia's Story."
            className="w-full rounded"
          ></img>
          <AutoplayVideo
            className="w-full rounded"
            src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402283/4_sticker_m204nc.mp4"
          ></AutoplayVideo>
          <p>
            In addition to reading others’ stories, people can interact through
            stamps, to further empathize that they aren’t alone. This page
            offers view indicators and a ratio bar on to strengthen the sense of
            participation and community. I worked closely with another team mate
            on this page, prototyping the stamping animation.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Solution;
