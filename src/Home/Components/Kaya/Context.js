function Context() {
  return (
    <section className=" w-full mb-16" id="Context">
      <h1 className="font-DM text-pinkie uppercase mb-6">Context</h1>

      <div className="grid grid-cols-2 gap-x-10 mb-16">
        <div className="items-center">
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789193622/Kaya_Context_Graph_csd9hx.png"
            alt="What Kaya offers"
            className="w-full h-auto mt-8 mb-24"
          ></img>
          <p className="font-DM mb-8">
            KAYA offers boulders a streamlined way to locate, track and find
            *beta related information. Their unique approach to community,
            navigation, and performance tracking presents users with modern
            solution against traditional guidebooks.
          </p>
          <p className="font-DM text-xs">
            *beta refers to advice, tips, or specific information about how to
            climb a particular route or problem
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789193886/Kaya_old_lkdoao.png"
          alt="Screenshot of the Kaya app as of 2024."
          className="w-2/3 h-auto place-items-center mx-auto"
        ></img>
      </div>
      <div>
        <h1 className="font-DM opacity-60 uppercase mb-4">Intended Journeys</h1>
        <img
          src="https://res.cloudinary.com/de9qkjreb/image/upload/v1789194207/Kaya_old_journey_a9zkdh.jpg"
          alt="Intended journey of the current Kaya app"
          className="w-full h-auto mb-8"
        ></img>
        <div className="grid grid-cols-2 gap-x-10">
          <p className="font-DM">
            The current experience in the KAYA app serves to help users across
            their journey by helping them find boulders in the wild to climb
            suitable to their level, then navigating users to the boulder.
          </p>
          <div>
            <p className="font-DM mb-8">
              While you’re climbing, KAYA encourages users to log every attempt
              while you climbing, which allows users to then later review a
              quantitative analysis of their session* to track their progress.
            </p>
            <p className="font-DM text-xs">
              *session refers to every attempt to climb any boulder on that day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Context;
