function Overview() {
  return (
    <div className="md:grid md:grid-cols-4 border-b-2 border-porple">
      <section
        className="hidden md:block md:col-span-1 border-r-2 border-porple lg:px-20 px-10 py-12
          font-medium font-Manrope text-2xl opacity-70"
      >
        Overview
      </section>
      <section className="px-12 py-12 col-span-2">
        <img
          alt="Tough Titties Gallery Logo"
          src="/ProjectImages/Typology/Overview.png"
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
