function Reflection() {
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
        <p className="md:text-lg md:mb-3">
          Through this hackathon, I was able to work with people in this field
          with different experiences and gained new understandings.
          Additionally, we worked with a mentor that taught us many things
          throughout the process, such as how to conduct research and ideate
          more creatively.
        </p>
        <p className="md:text-lg md:mb-3">
          The time constraints of a one-week project forced us to work at a
          rapid pace, limiting our time for extensive decision-making and
          experimentation. However, this taught me how to work with my team to
          quickly come to a decision together and work efficiently.
        </p>
      </div>
      <div className="md:hidden h-12"></div>
    </section>
  );
}

export default Reflection;
