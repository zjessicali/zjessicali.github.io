function DesignDecisions() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5 lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-5/6 rounded-full lg:py-[2px]"
        >
          Features
        </p>
      </section>
      <div className="md:col-span-2">
        <section className="mb-12">
          <p className="text-2xl mb-3">Clear navigation pop up.</p>
          <p className="mb-5 md:text-lg">
            To access to popular key ingredients, a shop by ingredient option
            has been introduced to the navigation drop-down menu. Initially
            extensive, Typology's dropdown menu was condensed into distinct
            sections for improved user navigation and ease of access.
          </p>
          <p className="text-xl mb-2">Current Navigation</p>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862736/before_ubpkpr.jpg"
            alt="Typology's current navigation bar."
            className="mb-3"
          ></img>
          <p className="text-xl mb-2">Reworked Navigation</p>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862736/before_ubpkpr.jpg"
            alt="Our new navigation bar for Typology."
            className="mb-5"
          ></img>
        </section>
        <section className="mb-12">
          <p className="text-2xl mb-3">
            New product listing page by ingredients
          </p>
          <p className="md:text-lg mb-3">
            The target concern for each product is labeled on the PLP so that
            the user can easily discern each product from another, especially
            when an ingredient has many different uses.
          </p>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862808/PLP_fbdfjq.jpg"
            alt="An top portion of our PLP."
            className="mb-5"
          ></img>
        </section>
        <section className="mb-12">
          <p className="text-2xl mb-3">Target concern recommendations</p>
          <p className="md:text-lg mb-3">
            The PLP will recommend users similar ingredients to target their
            skin concern as to allow users to explore other options and perhaps
            discover new ingredients to help them out.
          </p>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862836/Target_bt3k7w.png"
            alt="An top portion of our PLP."
            className="mb-5"
          ></img>
        </section>
        <section className="mb-12">
          <p className="text-2xl mb-3">Ingredients page search bar</p>
          <p className="md:text-lg mb-3">
            A smoother method for both new and returning customers to find more
            information on the ingredients they would like in their products. By
            replacing a glossary with a search bar, we are making use of Hick’s
            Law, as to not overwhelm the user with confusing ingredient names.
          </p>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862861/Ingredients_ta7gv3.jpg"
            alt="An top portion of our PLP."
            className="mb-5"
          ></img>
        </section>
        <section className="mb-12">
          <p className="text-2xl mb-3">
            Visualized and interactive information
          </p>
          <p className="md:text-lg mb-3">
            A visual graphic of key uses of each ingredient is displayed adding
            additional text to allow meaningful interaction for the user to
            easily understand and remember the key information.
          </p>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862896/InteractiveInformation_kvxf4j.jpg"
            alt="An top portion of our PLP."
            className="mb-5"
          ></img>
        </section>
        <section className="mb-12">
          <p className="text-2xl mb-3">Related articles</p>
          <p className="md:text-lg mb-3">
            Articles by Typology’s experts about the ingredients are displayed
            on the page to better connect Typology’s existing articles into the
            users experience. Users who are interested can explore further as
            they wish.
          </p>
          <img
            src="https://res.cloudinary.com/de9qkjreb/image/upload/v1749862934/Articles_ryvt4g.jpg"
            alt="An top portion of our PLP."
            className=""
          ></img>
        </section>
      </div>
    </div>
  );
}

export default DesignDecisions;
