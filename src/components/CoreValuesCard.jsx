

// eslint-disable-next-line react/prop-types
const CoreValuesCard = ({value, description, }) => {
  return (
    <article className="mx-4 my-5 text-center">
        <div className="flex gap-3 items-end bg-primary rounded-md p-3 max-w-sm hover:bg-pink-900">
            <h4 className="text-secondary mx-auto text-xl hover:text-white">{value}</h4>
        </div>
        <p className="ml-6 my-3 text-left max-w-md max-w-sm">
            {description}
        </p>
    </article>
  )
}

export default CoreValuesCard;