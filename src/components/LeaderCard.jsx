/* eslint-disable react/prop-types */


const LeaderCard = ({name, role, image}) => {
  return (
    <article className="my-4 mx-2 flex gap-3">
        <div>
            <img src={image} alt={name} />
        </div>
        <div className="flex flex-col gap-4 text-left">
            <h1 className="font-Rajdhani my-2 text-3xl">{name}</h1>
            <h2 className="text-2xl font-kalnia mb-2">{role}</h2>
        </div>
    </article>
  )
}

export default LeaderCard;