

const Hero = () => {
  return (
    <section className="w-full h-screen bg-hero-pattern flex flex-col items-center gap-4 my-auto">
      <div className=" flex justify-between w-5/6 mx-auto items-start pt-20 md:pt-[80px]">
        <div className="text-white flex flex-col justify-between items-start">
          <h1 className="mt-9"><span className="text-green-200 ">The</span> <br /> 10 Boys Club</h1>
          <p className="">
            Magna Fratanita
          </p>
          <p className="max-w-lg">
            The 10 Boys Club comprises ten spirited young men united by a profound friendship.
          </p>
        </div>
        <div className="text-white w-[500px] h-[300px] mt-10 bg-boys-hero rounded-lg shadow-indigo-500/50 shadow-xl hidden md:flex">
          <p className="my-8 text-center mx-auto max-w-sm">
            United Hearts, Empowered Hands: Investing in Friendship, Enriching Communities
          </p>
        </div>
      </div>
      <div className="mx-auto my-8">
        <button className="text-white">learn more</button>
      </div>
      <div className="hidden md:flex my-4 mx-auto">
        <p className="text-white text-center max-w-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium assumenda pariatur .
        </p>
      </div>
    </section>
  )
}

export default Hero;