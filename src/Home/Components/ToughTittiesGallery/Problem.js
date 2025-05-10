function Problem() {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-5  lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
        uppercase border border-grey text-center w-2/3 md:w-5/6 rounded-full lg:py-[2px]"
        >
          Problem Statement
        </p>
      </section>
      <div className="md:col-span-2">
        <p className="mb-3">How might we...</p>
        <p className="text-2xl">
          help customers who support women empowerment better connect with the
          business by building a sense of community in a space that has a desire
          of belonging and interactions?
        </p>
      </div>
    </div>
  );
}

export default Problem;
