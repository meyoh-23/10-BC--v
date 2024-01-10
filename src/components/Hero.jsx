import { useState } from "react";
import Boys from "../assets/boys-hero.jpg"

const Hero = () => {
  const [info, showInfo] = useState(false);
  return (
    <section className="overflow-hidden  flex-col items-center gap-4 mt-16 relative py-20">
      <h1 className="text-center text-h2 font-raleway font-bold">The 10 Boys Club</h1>
      <div className=" flex justify-between w-[95%] mx-auto items-center ">
        <div className="flex flex-col items-start w-[90%] sm:w-1/2 gap-4">
          <h1 className="text-center pl-2 font-Oswald font-medium text-h2 text-bgButtonSecondary">Welcome <br /> to The 10 Boys Club! </h1>
          <p className="max-w-[400px] text-secondary text-center mx-1 font-extralight font-Oswald">
            We are a collective of ten dynamic young men dedicated to making a positive impact on our community
          </p>
          <p className="max-w-[400px] text-secondary text-center mx-1 font-extralight font-Oswald">
            Our mission goes beyond mere camaraderie; we strive to foster meaningful friendships, pool resources, and make impactful investments.
          </p>
          <button className="bg-bgButtonSecondary hover:bg-primary mx-auto font-raleway font-bold text-white p-2 text-center rounded-md z-20" onClick={() =>showInfo(!info)}>
            { info ?"show less" : "read more"}
          </button>
        </div>
        <div className="overflow-hidden w-1/2 hidden sm:flex">
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