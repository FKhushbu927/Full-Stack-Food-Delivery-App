import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroDatas } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex flex-1 flex-col  items-start  justify-center gap-6">
        <div className="flex items-center justify-center gap-2 p-2 bg-orange-100 rounded-md border-[2px]">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              className="w-full h-full object-contain "
              src={Delivery}
              alt=""
            />
          </div>
        </div>
        <p className="md:text-[3.5rem] text-[2.5rem] font-bold tracking-wide text-headingColor">
          The fastest Delivery in{" "}
          <span className="text-orange-600 md:text-[4rem] text-[3rem]">
            {" "}
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          deserunt minima esse delectus natus voluptatibus nulla sunt pariatur
          vero temporibus?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-600 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="h-420 lg:h-650 w-full lg:w-auto ml-auto"
          alt=""
        />
        <div className="w-full h-full absolute grid grid-cols-2 gap-14 top-0 left-0 px-6 lg:px-32 py-16 ">
          {heroDatas &&
            heroDatas.map((heroData) => (
              <div
                key={heroData.id}
                className="lg:w-190 h-fit min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
              >
                <img
                  src={heroData.imgSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-24"
                  alt=""
                />
                <p className="text-sm lg:text-base font-semibold text-textColor">
                  {heroData.name}
                </p>
                <p className="text-xs lg:text-sm text-lighttextGray font-semibold my-2">
                  {heroData.decp}
                </p>
                <p className="text-xs lg:text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-500">$</span>
                  {heroData.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
