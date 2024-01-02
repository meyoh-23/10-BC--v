/* eslint-disable react/prop-types */

const LeaderCard = ({name, role, image}) => {
  return (
    <article className="my-4 mx-2 flex flex-col ss:flex-row gap-3 items-center rounded-br-2xl bg-zinc-600 max-w-md justify-between overflow-x-hidden">
        <img src={image} alt={name}  className="max-w-[200px] max-h-[300px] rounded-md my-3 mx-3"/>
        <div className="border-solid border-white mx-4 flex flex-col justify-between items-center">
          <p>{name}</p>
          <h2>{role}</h2>
        </div>
    </article>
  )
}

export default LeaderCard;