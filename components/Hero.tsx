import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    // bg-[url()] bg-no-repeat

    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 lg:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-20 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="xl:text-[45px] lg:text-[40px] text-[27px] text-black font-extrabold">
              Build Powerfull <br className="hidden lg:inline" /> Interaction
              Apps with <br className="hidden lg:inline" />
              <h1 className="text-indigo-500 xl:text-[45px] xl:text-[41px] md:text-[30px]">
                Code Chat.
              </h1>
            </h1>
            <p className="mb-8 leading-relaxed text-xs md:text-sm">
              Build Powerfull Interaction Apps with Code Chat & Real Time
              Interaction. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Fugiat tenetur quibusdam ullam temporibus iure obcaecati, at
              officia!
            </p>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full hidden lg:inline-block">
              Neutra shabby chic ramps, viral fixie.
            </p>
            <div className="flex lg:flex-row md:flex-col gap-2">
              <Button className=" px-8 py-8">Start Building</Button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-[8px] md:text-xs text-gray-600 ">
                    COMMING SOON
                  </span>
                  <span className="title-font font-medium text-xs">
                    Google Play
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded scale-125"
              alt="hero"
              src="https://static-assets.pixelied.com/features/fade-image/hero-img.webp?v=2"
            />
          </div>
        </div>
      </section>

      {/* <div className="relative h-[90vh] px-10 md:px-40  bg-black text-white bg-[url(https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8334.jpg?size=626&ext=jpg&ga=GA1.1.1744345052.1697731330&semt=ais)] bg-bottom bg-cover bg-no-repeat">
        <div className="flex items-center justify-center h-full w-full ">
          <div className="md:px-20 ">
            <h1 className="text-[42px] font-extrabold">
              Build Powerfull <br className="hidden lg:inline" /> Interaction
              Apps with <br className="hidden lg:inline" />
              <h1 className="text-blue-600">Code Chat.</h1>
            </h1>
            <h3 className="text-[20px] py-4">
              Build Powerfull Interaction Apps{" "}
              <br className="hidden md:inline" />
              with Code Chat & Real Time Interaction.
            </h3>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
