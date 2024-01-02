import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroDatas } from "../utils/data";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
import { TypeAnimation } from "react-type-animation";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className="py-2 flex flex-1 flex-col  items-start  justify-center gap-6">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center justify-center gap-2 p-3 bg-orange-100 rounded-md border-[2px]"
        >
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
        </motion.div>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:text-[2.5rem] text-[2rem] text-headingColor"
        >
          MAK the fastest Delivery{" "}
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="md:text-[3.5rem] text-[2.5rem]  tracking-wide">
            <span className="text-orange-600 font-bold">Get Your Food</span>
            <br />
            <TypeAnimation
              sequence={[
                "In Your City !",
                2000,
                "In Less than 1 hour !",
                2000,
                "In Lowest Budget !",
                2000,
              ]}
              speed={50}
              className="font-medium bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient font-medium"
              wrapper="span"
              repeat={Infinity}
            />
          </p>
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-base text-textColor text-center md:text-left "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          deserunt minima esse delectus natus voluptatibus nulla sunt pariatur
          vero temporibus?
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <button
            type="button"
            className="bg-gradient-to-br from-orange-400 to-orange-600 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto text-white"
          >
            Order Now
          </button>
        </motion.div>
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
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                key={heroData.id}
                className="lg:w-190 h-fit min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
              >
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <img
                    src={heroData.imgSrc}
                    className="w-20 lg:w-40 -mt-10 lg:-mt-24"
                    alt=""
                  />
                </motion.div>

                <motion.p
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-sm lg:text-base font-semibold text-textColor"
                >
                  {heroData.name}
                </motion.p>
                <motion.p
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-xs lg:text-sm text-lighttextGray font-semibold my-2"
                >
                  {heroData.decp}
                </motion.p>
                <p className="text-xs lg:text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-500">$</span>
                  {heroData.price}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
