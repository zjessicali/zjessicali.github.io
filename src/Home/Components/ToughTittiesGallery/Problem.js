function Problem() {
  return (
    <div className="bg-white text-porple font-Manrope border-b-2 border-porple md:grid md:grid-cols-4 ">
      <div className="md:border-r-2 border-porple px-10 lg:px-20 pt-7 pb-3 md:py-12">
        <h3 className="opacity-70 text-sm md:font-medium md:font-Manrope md:text-2xl">
          Problem Statement
        </h3>
      </div>
      <div className="px-10 pb-7 md:py-12 md:col-span-2">
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
