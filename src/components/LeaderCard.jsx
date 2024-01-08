/* eslint-disable react/prop-types */

const LeaderCard = ({name, role, image}) => {
  return (
    <article className="my-4 mx-2 flex flex-col ss:flex-row gap-3 items-center rounded-br-2xl  max-w-md justify-between overflow-x-hidden shadow-2xl z-10 shadow-indigo-500/50">
        <img src={image} alt={name}  className="max-w-[200px] max-h-[300px] rounded-md my-3 mx-3"/>
        <div className="border-solid border-white mx-4 flex flex-col justify-between items-center">
          <p className="font-h2 font-Oswald font-normal underline decoration-double decoration-bgButton">{name}</p>
          <h2 className="font-bold font-raleway text-primary text-h3">{role}</h2>
        </div>
    </article>
  )
}

export default LeaderCard;