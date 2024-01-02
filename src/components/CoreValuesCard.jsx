

// eslint-disable-next-line react/prop-types
const CoreValuesCard = ({value, description, icon}) => {
  return (
    <article className="mx-4 my-5 text-center">
        <div className="flex gap-3 items-end border-b-8">
            <span className="material-symbols-outlined">{icon}</span>
            <h4>{value}</h4>
        </div>
        <p className="ml-6 my-3 text-left max-w-md">
            {description}
        </p>
    </article>
  )
}

<span className="material-symbols-outlined">
diversity_3
</span>
export default CoreValuesCard;