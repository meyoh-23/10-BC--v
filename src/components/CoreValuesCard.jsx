

// eslint-disable-next-line react/prop-types
const CoreValuesCard = ({value, description, icon}) => {
  return (
    <article className="mx-4 my-5 text-center">
        <div className="flex gap-3 items-end ">
            <span>{icon}</span>
            <h4>{value}</h4>
        </div>
        <p className="ml-4 my-3 text-left">
            {description}
        </p>
    </article>
  )
}

export default CoreValuesCard;