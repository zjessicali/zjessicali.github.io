function Overview() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Overview
        </p>
      </section>
      <section className="col-span-2">
        <img
          alt="Tough Titties Gallery Logo"
          src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862610/Overview_c1aso3.jpg"
        ></img>
        <p className="font-Manrope my-5 text-porple md:text-lg">
          "Our philosophy is not to add anything to our products to make them
          stand out; instead we pare them back and distil each formula down to
          the most essential, natural active ingredients.”
        </p>

        <p className="font-Manrope my-5 text-porple md:text-lg">
          Typology is a France-based skin care brand that values the importance
          of using only the most essential, natural active ingredients in their
          products. However, this aspect of their brand was not effectively
          reflected on their website.
        </p>
        <p className="font-Manrope text-2xl my-3 text-porple ">
          Therefore, we aimed to enhance the customer experience by highlighting
          the brand's commitment to ingredient clarity.
        </p>
      </section>
    </div>
  );
}

export default Overview;
