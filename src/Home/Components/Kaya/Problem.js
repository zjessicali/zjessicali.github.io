function Problem() {
  return (
    <div className=" w-full mb-16" id="Problem">
      <h1 className="font-DM text-pinkie uppercase mb-6">Problem</h1>
      <p className="font-DM mb-2">
        Through 3 phases of user research, we uncovered the following.
      </p>
      <p className="font-DM text-base mb-8">
        Currently, users only stay in the platform to fulfill their navigation
        needs, as KAYA’s quantitative tracking methods were not useful to them,
        opting to instead leave the platform to fulfill their needs in camera
        roll and notes apps.{" "}
      </p>
      <div>
        <img
          src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789195089/Kaya_new_journey_yyasou.jpg"
          alt="Where we see opportunity in the Kaya journey"
          className="w-full rounded mb-8"
        ></img>
        <div className="flex w-full gap-8">
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789195252/Kaya_observation1_gwcba2.png"
            alt="Users watching videos in camera roll."
            className="w-full flex-1 rounded min-w-0"
          ></img>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789195253/Kaya_observation2_g6aptz.png"
            alt="Users taking notes during sessions."
            className="w-full flex-1 rounded min-w-0"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Problem;
