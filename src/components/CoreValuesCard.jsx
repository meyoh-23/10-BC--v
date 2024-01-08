

// eslint-disable-next-line react/prop-types
const CoreValuesCard = ({value, description, }) => {
  return (
    <article className="mx-4 my-5 text-center drop-shadow-2xl">
        <div className="flex gap-3 items-end bg-bgButton rounded-md p-3 max-w-sm hover:text-bgButtonSecondary">
            <h4 className="text-secondary mx-auto text-h3 font-bold font-raleway hover:text-bgButtonSecondary">{value}</h4>
        </div>
        <p className="ml-3 my-3 text-left max-w-sm font-Oswald font-extralight text-h3">
            {description}
        </p>
    </article>
  )
}

export default CoreValuesCard;