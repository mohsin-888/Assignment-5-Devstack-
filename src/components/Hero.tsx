import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">

        <div>
          <h1  className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

       <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-6 py-3 text-white">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Development Stack"
          className="w-full max-w-sm md:max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;