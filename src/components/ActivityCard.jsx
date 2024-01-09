/* eslint-disable react/prop-types */

const ActivityCard = ({ title, date, descritpion, image }) => {
  return (
    <article className="flex flex-col gap-3 shadow-2xl p-2">
        <h3 className="text-center font-raleway font-bold text-h3 text-primary">{title}</h3>
        <div className="p-3 flex flex-col  items-center md:flex-row justify-between gap-3 md:items-start">
            <img src={image} alt={title} className="md:max-w-[450px] h-auto rounded-md drop-shadow-xls"/>
            <div className="p-2 ">
                <p className="text-center">
                    {descritpion}
                </p>
            </div>
        </div>
        <div className="max-w-sm mx-auto p-2 rounded-md shadow-lg z-10 flex flex-center justify-between items-end gap-4">
            <button className="text-white font-raleway font-bold text-p text-center  bg-bgButton p-2 rounded-md">{date}</button>
            <button className="p-2 bg-bgButtonSecondary text-white rounded-md text-p text-center font-raleway font-bold">Read More</button>
        </div>
    </article>
  )
}

export default ActivityCard;