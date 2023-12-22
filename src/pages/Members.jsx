import { members } from "../assets/constants";
import MembersCard from "../components/MembersCard";

const Members = () => {
  return (
    <section className="mt-28 w-5/6 mx-auto">
      <h1 className="text-center">Meet the team</h1>
      <div className="flex flex-col gap-8 mx-auto my-10">
          <div className="flex flex-wrap items-start justify-between gap-10">
            {
              members.map((member) => ( 
                <MembersCard
                key={member.id}
                image={member.image}
                name={member.name}
                comments={member.comments}
                role={member.Profession}
                />
              ))
            }
          </div>
      </div>
    </section>
  )
}

export default Members;