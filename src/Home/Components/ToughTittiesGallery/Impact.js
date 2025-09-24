function Impact() {
  return (
    <div className="w-full mb-12 font-DM">
      <h1 className="font-DM text-pinkie uppercase mb-6">Impact</h1>
      <div className="">
        <p className="font-DM">
          The responses from users were positive and sparked interests in
          building a community through interactions.
        </p>
        <div>
          {/* can for loop here */}
          <div className="flex my-4">
            <img
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749861074/persona1_ahdptd.png"
              alt="User Memoji"
              className="w-1/6 h-full md:w-[10%]"
            ></img>
            <p className="text-pinkie text-6xl ml-3 mr-2 font-Manrope">“</p>
            <p className="my-1">
              I really like the concept, I never seen it before. It allows me to
              engage into female empowerment stuff that I enjoy, and give me a
              space to speak out. Reading others’ story will help let me know
              that I’m not alone, I’m not an outcast.”
            </p>
          </div>
          <div className="flex my-4">
            <img
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749861074/persona2_vyxalz.png"
              alt="User Memoji"
              className="w-1/6 h-full md:w-[10%]"
            ></img>
            <p className="text-pinkie text-6xl ml-3 mr-2 font-Manrope">“</p>
            <p className="my-1">
              It's good that you are able to add different shapes, since media
              like porn shows a lot of the same boobs and makes people insecure,
              thinking boobs should look a same way.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
