import AutoplayVideo from "../Autoplay.js";

function DesignDecisions() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Design Decisions
        </p>
      </section>
      <div className="md:col-span-2">
        <section className="mb-12">
          <img
            src="/ProjectImages/ToughTittiesGallery/testing.png"
            alt="Results of UI Testing."
          ></img>
          <p className="text-2xl my-3">
            We conducted 9 user tests, around 20 minutes each, accompanied with
            a survey and interviews about user expectations.
          </p>
          <p className="md:text-lg">
            While user testing was not required in this hackathon, it gave us
            great insights and had major influences in our final design. The
            feedback helped us to find major pain points, which we further
            iterated on in our solution.
          </p>
        </section>
        <section className="mb-12">
          <img
            src="/ProjectImages/ToughTittiesGallery/PostPurchaseMockup.png"
            alt="Mockup of our post purchase card."
          ></img>
          <p className="text-2xl my-3">
            Our post purchase card serves as a bridge between physical products
            to digital media.
          </p>
          <p className="md:text-lg">
            Through our testing, we found that it was important to have a clear
            purpose of the card, so we went through many iterations to ensure a
            strong call to action with a simple and minimalistic layout as to
            not overload it.
          </p>
        </section>
        <section className="mb-12">
          <AutoplayVideo src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402283/1_landing_gln5ep.mp4" />
          <p className="text-2xl my-3 ">
            Upon entering the gallery, the user will be welcomed by 10 random
            pairs or titties.
          </p>
          <p className="md:text-lg">
            This is to mimic a real life gathering experience, where you never
            know who you will meet. Of course, a shuffle button along with
            filtering and search is there so that the users can easily explore
            stories they resonate with.
          </p>
        </section>
        <section className="mb-12">
          <AutoplayVideo src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402282/2_code_v1ssbl.mp4" />
          <p className="text-2xl my-3">
            The post-purchase card comes back into play when creating your own
            story.
          </p>
          <p>
            The user will enter the unique code on their card before writing
            their own story onto the Tough Titties Gallery. This is to prevent
            abuse and unwanted contents from being posted.
          </p>
        </section>
        <section className="mb-12">
          <AutoplayVideo src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402283/3_customize_zptnud.mp4" />

          <p className="text-2xl my-3">
            Breast customizations allow for a large variety of combinations for
            users to resonate with.
          </p>
          <p>
            This allows users to express themselves in alignment with Emma
            Hands' style, enabling them to contribute to the gallery with their
            unique identity. We aim for inclusivity by providing customization
            tools and an "I don't feel represented" button, to empower users to
            express their sentiments and provide valuable feedback if they feel
            unrepresented.
          </p>
        </section>
        <section className="mb-12">
          <AutoplayVideo src="https://res.cloudinary.com/de9qkjreb/video/upload/v1749402283/4_sticker_m204nc.mp4" />

          <p className="text-2xl my-3">
            Interactive stories connect people, offering reassurance and
            support.
          </p>
          <p>
            In addition to reading others’ stories, people can interact through
            stamps, to further empathize that they aren’t alone. This page
            offers view indicators and a ratio bar on to strengthen the sense of
            participation and community.
          </p>
        </section>
        <section className="mb-12">
          <p className="text-2xl my-3">
            In order to maintain the brand identity, our team aimed to maintain
            a fun and light-hearted approach, inspired by Hands' designs,
            despite the serious problem space.{" "}
          </p>
          {/* TO DO HERE */}
          <div className="flex justify-between w-full items-center md:items-end">
            <div className="w-1/3 h-full pr-2">
              <div className="my-2">
                <p className="text-xs lg:text-sm">#FFFFFF</p>
                <div className="bg-[#FFFFFF] h-4  lg:h-8"></div>
              </div>
              <div className="my-2">
                <p className="text-xs lg:text-sm">#F3B2E5</p>
                <div className="bg-[#F3B2E5] h-4  lg:h-8"></div>
              </div>
              <div className="my-2  md:mb-0">
                <p className="text-xs lg:text-sm">#D4AED1</p>
                <div className="bg-[#D4AED1] h-4  lg:h-8"></div>
              </div>
            </div>
            <img
              src="/ProjectImages/ToughTittiesGallery/client1.png"
              alt="Sista Hood stickers"
              className="w-1/3 h-full object-cover pr-1"
            ></img>
            <img
              src="/ProjectImages/ToughTittiesGallery/client2.png"
              alt="Tough Titties stickers"
              className="w-1/3 h-full object-cover pr-1"
            ></img>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DesignDecisions;
