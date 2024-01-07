import { useState } from "react";
import Boys from "../assets/boys-hero.jpg"

const Hero = () => {
  const [info, showInfo] = useState(false);
  return (
    <section className="hidden overflow-hidden sm:flex flex-col items-center gap-4 mt-16 relative py-20">
      <div className="absolute top-[-20px] py-4left-0 w-[100%] h-[100%] z-10 dark__overlay py-10"/>
      <h1 className="text-center">The 10 Boys Club</h1>
      <div className=" flex justify-between w-[95%] mx-auto items-center ">
        <div className="flex flex-col items-start w-1/2 gap-4">
          <h1 className="text-start">Welcome <br /> to The 10 Boys Club! </h1>
          <p className="max-w-[400px]">
            We are a collective of ten dynamic young men dedicated to making a positive impact on our community
          </p>
          <p className="max-w-[400px]">
            Our mission goes beyond mere camaraderie; we strive to foster meaningful friendships, pool resources, and make impactful investments.
          </p>
          <button className="bg-primary text-white p-2 text-center rounded-md z-20" onClick={() =>showInfo(!info)}>
            { info ?"show less" : "read more"}
          </button>
        </div>
        <div className="overflow-hidden w-1/2">
          <img src={Boys} alt="" className="min-w-[400px] h-auto rounded-md"/>
        </div>
      </div>
      <div className="hidden">
        Mobile Hero
      </div>
      {
        info && <article className="max-w-[450px] text-center z-20 border-4 bg-white border-red-300 rounded-lg p-6 absolute top-20 mx-auto">
          As Boys Club,our primary focus remains on cultivating a safe and supportive environment where each member can freely express themselves. Join us as we unite to create lasting change and forge a space where every voice is valued.
        </article>
      }
    </section>
  )
}

export default Hero;