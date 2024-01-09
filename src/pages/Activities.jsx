/* eslint-disable react/no-unescaped-entities */
import { activities } from "../assets/constants";
import ActivityCard from "../components/ActivityCard";


const Activities = () => {
  return (
    <section className="mt-28 flex flex-col items-center gap-4 w-5/6 mx-auto mb-5">
      <h2 className="pt-10 text-center text-h2 font-raleway font-bold">Our Activities</h2>
      <p className="text-p text-center font-Oswald font-medium max-w-lg">
        We are a collective of individuals dedicated to cultivating strong bonds, enriching our community, and nurturing the spirit of friendship through a diverse array of annual activities.
      </p>
      <p className="text-p text-center font-Oswald font-medium max-w-lg">
        Our calendar brims with initiatives that encapsulate the essence of giving back to the community. Furthermore, within the sanctum of our club, each member's journey is cherished and celebrated. We understand the importance of individual growth and fulfillment.
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