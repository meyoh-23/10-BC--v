/* import membersImage from "./../assets/boys.jpg" */
import { leaders, values } from "../assets/constants";
import LeaderCard from "../components/LeaderCard";
import CoreValuesCard from "../components/CoreValuesCard";
const Home = () => {
  return (
    <section className="w-full my-9">
        <div className="flex mx-auto w-5/6 flex-col sm:flex-row justify-between">
            <div className="flex flex-col text-start">
                <h1 className="text-xl font-oOswald font-bold"> <span className="text-xl font-kalnia"> The </span><br /> 10 Boys Club</h1>
                <p className="my-4">Magna fratanita</p>
                <p className="text-base font-Rajdhani max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellendus eum culpa illo exercitationem quidem, vero quae nulla! Maiores doloremque itaque fugiat officia minima error voluptas exercitationem reiciendis, molestias corrupti.
                </p>
            </div>
            <div className="mx-auto">
                a good bc image will do
            </div>
        </div>
        <div className="w-full my-4 px-4 bg-zinc-800 rounded-2xl">
            <h1 className="text-center my-4 text-xl font-novaSquare font-bold">Our Leaders</h1>
            <div className="flex mx-auto flex-wrap justify-center">
            {
                leaders.map((leader) => ( 
                    <LeaderCard
                    key={leader.id}
                    name={leader.name}
                    image={leader.image}
                    role={leader.role}
                    />
                ))
            }
            </div>
        </div>
        <div className="w-5/6 my-4 mx-auto">
            <h1 className="text-center text-2xl font-kalnia">Core values</h1>
            <div className="flex flex-wrap justify-between gap-4">
                {
                    values.map((item) => ( 
                        <CoreValuesCard
                        key={item.id}
                        icon={item.icon}
                        description={item.description}
                        value={item.value}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Home;