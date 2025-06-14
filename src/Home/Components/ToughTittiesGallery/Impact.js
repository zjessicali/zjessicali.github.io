function Impact() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Impact
        </p>
      </section>
      <div className="md:col-span-2">
        <p className="text-2xl my-3 md:mb-5 md:mt-0">
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
            <p className="text-pinkie text-6xl ml-3 mr-1">“</p>
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
            <p className="text-pinkie text-6xl ml-3 mr-1">“</p>
            <p className="my-1">
              It's good that you are able to add different shapes, since media
              like porn shows a lot of the same boobs and makes people insecure,
              thinking boobs should look a same way.”
            </p>
          </div>
          <div className="flex my-4">
            <img
              src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749861076/persona3_gkoaj0.png"
              alt="User Memoji"
              className="w-1/6 h-full md:w-[10%]"
            ></img>
            <p className="text-pinkie text-6xl ml-3 mr-1">“</p>
            <p className="my-1">
              I think it is great to see people who have the same experiences
              and the spiritual support with it. “
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
