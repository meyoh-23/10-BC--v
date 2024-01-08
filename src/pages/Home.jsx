/* import membersImage from "./../assets/boys.jpg" */
import {  values, leaders } from "../assets/constants";
import {  Hero, CoreValuesCard, LeaderCard, ValueSlider } from "../components";

const Home = () => {

  return (
    <section className="w-full">
        <Hero/>
        <div className="flex flex-col items-center gap-6 py-7 mt-8">
            <h1 className="text-secondary font-raleway font-bold text-h2">Leaders</h1>
            <div className="flex flex-wrap justify-center items-center">
                {
                    leaders.map((leader) => ( 
                        <LeaderCard key={leader.name} {...leader}/>
                    ))
                }
            </div>
        </div>
        <div className="w-5/6 mt-4 mx-auto">
            <h1 className="text-center text-secondary font-raleway font-bold text-h2">Core values</h1>
            <div className="flex flex-wrap justify-between gap-4">
                {
                    values.map((item) => ( 
                        <CoreValuesCard
                        key={item.id}
                        description={item.description}
                        value={item.value}
                        />
                    ))
                }
            </div>
        </div>
        <div className="items-center mt-6 w-5/6 mx-auto ">
            <h2 className="text-center my-4 text-secondary font-raleway font-bold text-h3">Being Part of the Boys Entails...</h2>
            <ValueSlider/>
        </div>
    </section>
  )
}

export default Home;