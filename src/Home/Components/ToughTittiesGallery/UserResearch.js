function UserResearch() {
  return (
    <section className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Overview
        </p>
      </section>
      <div className="md:col-span-2">
        <div className="mb-14">
          <h1 className="text-2xl mb-3 md:text-2xl">
            Initial interview with Hands.
          </h1>
          <p className="mb-7 md:text-lg">
            After interviewing Hands, we identified several pain points which
            led to insightful design directions, including:
          </p>
          <div className="mb-7 md:mb-10">
            <h2 className="text-xl mb-4 md:text-2xl">
              Defining the distinction between brand and identity.
            </h2>
            <h2 className="text-xl mb-4 md:text-2xl">
              Bridging the physical and digital touchpoints.
            </h2>
            <h2 className="text-xl mb-4 md:text-2xl">
              Building community connections to the audience.
            </h2>
          </div>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749860983/researchFigjam_klna4c.jpg"
            alt="User research done for Tough Titties Design."
          ></img>
        </div>
        <div>
          <h1 className="text-2xl mb-3 md:text-2xl">
            Conducting additional research.
          </h1>
          <p className="mb-8 md:text-lg">
            For a deeper dive, we analyzed Hands' Etsy{" "}
            <br className="md:hidden" />
            and Instagram, engaging with individuals interested in her causes
            and products.
          </p>
          <p className="mb-3">We found that:</p>
          <div className="mb-8">
            <h2 className="text-xl mb-4 md:text-2xl">
              Around 50% of Hands’ customers write purchase notes to her during
              online shopping.{" "}
            </h2>
            <h2 className="text-xl mb-4 md:text-2xl">
              Customers like to share their experiences and motivations on Etsy
              reviews.
            </h2>
            <h2 className="text-xl mb-4 md:text-2xl">
              There is a lack of community on her social medias.
            </h2>
            <h2 className="text-xl mb-4 md:text-2xl">
              Supporters of women empowerment find representation important.
            </h2>
          </div>
          <p className="md:text-lg">
            This revealed a desire for storytelling and sharing experiences
            within Tough Titties Designs, highlighting a current disconnect in
            the current space.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserResearch;
