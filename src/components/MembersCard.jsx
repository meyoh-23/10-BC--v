/* eslint-disable react/prop-types */

const MembersCard = ({name, role, comments, image} ) => {
  return (
    <article className=" mx-auto flex  flex-col items-center justify-between max-w-[300px]">
        <div className=" flex flex-col justify-between gap-8 items-center">
            <img src={image} alt={name}  className=" w-[100px] h-[100px] rounded-full"/>
            <div className="flex flex-col">
                <h2>{name}</h2>
                <h3>{role}</h3>
            </div>
        </div>
        <div className=" text-left">
            <p>
                {comments}
            </p>
        </div>
    </article>
  )
}

export default MembersCard;