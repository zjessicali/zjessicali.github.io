function Impact() {
  return (
    <div className="bg-white text-porple font-Manrope md:grid md:grid-cols-4  border-b-2 border-porple">
      <div className="md:border-r-2 border-porple px-10 lg:px-20 pt-7 pb-3 md:py-12">
        <h3 className="opacity-70 text-sm md:font-medium md:font-Manrope md:text-2xl">
          Impact
        </h3>
      </div>
      <div className="px-10 pb-7 md:py-12 md:col-span-2">
        <p className="text-2xl my-3 md:mb-5 md:mt-0">
          The responses from users were positive and sparked interests in
          building a community through interactions.
        </p>
        <div>
          {/* can for loop here */}
          <div className="flex my-4">
            <img
              src="/ProjectImages/ToughTittiesGallery/persona1.png"
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
              src="/ProjectImages/ToughTittiesGallery/persona2.png"
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
              src="/ProjectImages/ToughTittiesGallery/persona3.png"
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
