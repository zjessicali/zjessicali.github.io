function Framing() {
  return (
    <div className="md:grid md:grid-cols-4 border-b-2 border-porple">
      <section
        className="hidden md:block md:col-span-1 border-r-2 border-porple lg:px-20 px-10 py-12
            font-medium font-Manrope text-2xl opacity-70"
      >
        Framing
      </section>
      <section className="px-12 py-12 col-span-2">
        <p className="font-Manrope text-2xl mb-3 text-porple ">
          How might we allow users to easily explore different products based on
          the ingredients they need for their skincare?
        </p>
      </section>
    </div>
  );
}

export default Framing;
