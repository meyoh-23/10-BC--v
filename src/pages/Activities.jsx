import { activities } from "../assets/constants";
import ActivityCard from "../components/ActivityCard";


const Activities = () => {
  return (
    <section className="mt-28 flex flex-col items-center gap-4 w-5/6 mx-auto mb-5">
      <h2 className="pt-10 text-center text-h2 font-raleway font-bold">Our Activities</h2>
      <p className="text-p text-center font-Oswald font-medium max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quibusdam inventore cum et quaerat, facilis voluptate quis facere, eos est earum quo. Quaerat sit, labore laboriosam a est qui ratione.
      </p>
      <div className="flex flex-col items-start gap-6">
        {
          activities.map((activity) => ( 
            <ActivityCard 
            key={activity.title}
            {...activity}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Activities;