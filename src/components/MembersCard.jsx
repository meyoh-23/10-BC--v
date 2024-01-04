/* eslint-disable react/prop-types */

const MembersCard = ({name, role, image} ) => {
    const names = (name.split(' '));
    const firstName = names[0]
    return (
    <article className=" mx-auto flex  flex-col items-center justify-between max-w-[450px] gap-3 border-solid border-4 border-sky-950 my-4 rounded-br-2xl">
        <div className="flex flex-col  items-center gap-4 md:flex-row">
            <img src={image} alt="member- image" className="max-w-[200px] border-solid border-2 border-red-400 mt-2 mx-2 rounded-md"/>
            <div className="flex flex-col gap-4 items-center p-2 justify-start border-solid border-4 border-sky-950 my-4 rounded-br-2xl shadow-lg bg-indigo-400 shadow-indigo-400/50 mr-2">
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>
        <button type="button" className="bg-primary rounded-md text-white p-2 my-2">
            more on {firstName}
        </button>
    </article>
    )
}

export default MembersCard;