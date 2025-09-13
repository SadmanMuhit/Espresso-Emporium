import React from "react";

const Info = () => {
  return (
    <>
      <section className="bg-info">
        <div className="container mx-auto pt-[55px] flex justify-center gap-10 px-12">
          <div>
            <img src="/aroma.png" alt="" />
            <h2 className="text-4xl font-normal font-rancho text-text">
              Awesome Aroma
            </h2>
            <p className="text-base font-normal font-raleway text-p w-[300px] mt-2">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src="/high.png" alt="" />
            <h2 className="text-4xl font-normal font-rancho text-text">
              High Quality
            </h2>
            <p className="text-base font-normal font-raleway text-p w-[300px] mt-2">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div>
            <img src="/beans.png" alt="" />
            <h2 className="text-4xl font-normal font-rancho text-text">
              Pure Grades
            </h2>
            <p className="text-base font-normal font-raleway text-p w-[300px] mt-2">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
            <img src="/rosting.png" alt="" />
            <h2 className="text-4xl font-normal font-rancho text-text">
              Proper Roasting
            </h2>
            <p className="text-base font-normal font-raleway text-p w-[300px] mt-2">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
