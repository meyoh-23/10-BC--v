import { members } from "../assets/constants";
import { MemberCard } from "../components";

const Members = () => {
  return (
    <section className="mt-28 w-5/6 mx-auto">
      <h1 className="text-center text-secondary font-raleway text-h2 font-bold pt-10">Meet the team</h1>
      <div className="flex flex-col gap-8 mx-auto my-10">
          <div className="flex flex-wrap items-start justify-start gap-8">
            {
              members.map((member) => ( 
                <MemberCard
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