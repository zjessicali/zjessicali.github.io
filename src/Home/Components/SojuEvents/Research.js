function Research() {
  return (
    <section className="bg-white md:grid md:grid-cols-4 md:gap-5 lg:mx-20 md:mx-10 mx-6 pb-6 md:pb-10 lg:pb-20">
      <section className="mb-4">
        <p
          className="font-Manrope lg:text-lg text-grey 
    uppercase border border-grey text-center w-5/6 rounded-full lg:py-[2px]"
        >
          Research
        </p>
      </section>
      <div className="md:col-span-2">
        <p className="font-Manrope text-2xl mb-3 text-porple ">
          Does the Soju Events website create a smooth and intuitive user
          experience across the website for new users wanting to go to Soju
          Sunday for the first time?
        </p>
        <p className="font-Manrope mt-5 text-porple md:text-lg">
          We did research with 9 participants aged 20-23 that have heard of Soju
          Sunday but had never attended. These users were also very familiar
          with mobile devices, as we conducted testing solely on mobile phones.
          For each participant, we conducted a task based think aloud study with
          them to understand pain points and needs.
        </p>
      </div>
    </section>
  );
}

export default Research;
