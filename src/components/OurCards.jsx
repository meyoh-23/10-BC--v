/* eslint-disable react/prop-types */

const OurCards = ({ value, illustration, description }) => {
    return (
        <article className="flex items-center justify-center flex-col min-w-[270px] min-h-[200px] gap-5 relative">
            <img src={illustration} alt={value}  className="max-w-full max-h-full rounded-md z-[1]"/>
            <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col gap-4 items-center justify-center">
                <h4 className="text-blue-700">{value}</h4>
                <p className="text-center text-red-700">{description}</p>
            </div>
        </article>
    )
}

export default OurCards;