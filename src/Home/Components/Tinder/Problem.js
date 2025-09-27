function Problem() {
  return (
    <div className=" w-full mb-16" id="Problem">
      <h1 className="font-DM text-pinkie uppercase mb-6">Problem</h1>

      <div className="mb-10">
        <div className="grid grid-cols-2 gap-x-10">
          <p className="font-DM">
            To understand current experiences in the dating space, we conducted
            in-depth interviews with five people aged 20–23, three of whom used
            Tinder. All participants identified as heterosexual.
          </p>
          <p className="font-DM">
            *Our research sample consisted of heterosexual men and women, which
            allowed us to compare gendered experiences; however, the solution is
            designed to be inclusive of all sexualities and gender identities.
          </p>
        </div>
      </div>
      <div className="mb-10">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="flex w-full ">
            <div className="w-12 pr-4 md:w-16 flex-shrink-0">
              <img
                src="https://em-content.zobj.net/source/apple/419/relieved-face_1f60c.png"
                alt="Relieved emote"
                className="w-full object-cover"
              ></img>
            </div>
            <p className="font-DM text-lg leading-tight">
              Men valued meeting dates in person and rarely described having
              negative experiences.
            </p>
          </div>
          <div className="flex w-full">
            <div className="w-12 pr-4 md:w-16 flex-shrink-0">
              <img
                src="https://em-content.zobj.net/source/apple/419/anxious-face-with-sweat_1f630.png"
                alt="Anxious emote"
                className="w-full object-cover"
              ></img>
            </div>
            <p className="font-DM text-lg leading-tight">
              Women often felt pressured by early date requests, found it hard
              to say no, resulting negative first-date experiences.
            </p>
          </div>
        </div>
      </div>
      <p className="font-DM">
        These contrasting revealed a misalignment in expectations between user,
        creating friction in the dating experience. We found the opportunity in
        creating a seamless process of asking for a date, ensuring comfort for
        all users.
      </p>
    </div>
  );
}

export default Problem;
