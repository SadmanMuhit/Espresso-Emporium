import React from "react";

const Banner = () => {
  return (
    <>
    <section className="relative">
      <div className="absolute inset-0">
        <img src="/banner.png" alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="relative z-10 container m-auto pt-[288px] pb-[288px] flex justify-end">
        <div>
          <h1 className="text-white text-[55px] font-normal font-rancho">Would you like a Cup of Delicious Coffee?</h1>
          <p className="text-white text-base font-raleway font-normal flex w-[724px]">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Banner;
