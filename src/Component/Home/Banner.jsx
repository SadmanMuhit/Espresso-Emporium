import React from "react";

const Banner = () => {
  return (
    <>
      <section className="">
        <div className="bg-[url(/banner.png)] py-[288px] bg-cover bg-center bg-no-repeat">
          <div className="container m-auto flex justify-end items-center">
            <div>
              <h1 className="text-[55px] text-white font-rancho font-normal">
                Would you like a Cup of Delicious Coffee?
              </h1>
              <p className="text-base text-white font-normal font-raleway mt-4 w-[724px]">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <button className="mt-8 text-2xl font-normal font-rancho text-button py-[9px] px-[22px] transition-all duration-300 border border-transparent bg-orange hover:bg-transparent hover:text-white hover:border-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
