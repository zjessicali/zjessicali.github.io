function UserResearch() {
  return (
    <section className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          User Research
        </p>
      </section>
      <div className="md:col-span-2">
        <div>
          <h1 className="text-2xl mb-3 md:text-2xl">
            Conducting user research.
          </h1>
          <p className="mb-8 md:text-lg">
            After analyzing Hand’s Etsy and Instagram pages, we wanted to
            understand user pain points deeper, so we interviewed with
            both previous and potential buyers of Hands' products.
          </p>
          <p className="mb-3">We found that:</p>
          <div className="mb-8">
            <h2 className="text-xl mb-4 md:text-2xl">
              1. Around 50% of Hands’ customers write purchase notes to her
              during online shopping.{" "}
            </h2>
            <h2 className="text-xl mb-4 md:text-2xl">
              2. Customers like to share their experiences and motivations on
              Etsy reviews.
            </h2>
            <h2 className="text-xl mb-4 md:text-2xl">
              3. There is a lack of community on her social medias.
            </h2>
            <h2 className="text-xl mb-4 md:text-2xl">
              4.Supporters of women empowerment find representation important.
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
