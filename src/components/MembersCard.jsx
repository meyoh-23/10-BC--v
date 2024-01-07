/* eslint-disable react/prop-types */

import { useState } from "react";

const MembersCard = ({name, role, image, comments} ) => {
    const [showInfo, setShowInfo] = useState(false);
    const names = (name.split(' '));

    const firstName = names[0]
    return (
    <article className=" mx-auto flex  flex-col items-center justify-between max-w-[450px] gap-3 border-solid border-4 border-sky-950 my-4 rounded-br-2xl relative">
        <div className="flex flex-col  items-center gap-4 md:flex-row">
            <img src={image} alt="member- image" className="max-w-[200px] border-solid border-2 border-red-400 mt-2 mx-2 rounded-md"/>
            <div className="flex flex-col gap-4 items-center p-2 justify-start border-solid border-4 border-sky-950 my-4 rounded-br-2xl shadow-lg bg-indigo-400 shadow-indigo-400/50 mr-2">
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>
        {showInfo && 
        <div className="absolute top-0  w-full h-full z-10 dark__overlay">
            <div className="w-{90%} h-[90%] mx-auto mt-5 flex flex-col justify-center gap-4 items-center bg-white rounded-md">
                <p className="text-center px-3">
                    {comments}
                </p>
                <button className="text-white p-3 bg-primary rounded-md" onClick={() => setShowInfo(!showInfo)}>
                    close
                </button>
            </div>
        </div>}
        <button type="button" className="bg-primary rounded-md text-white p-2 my-2" onClick={() =>setShowInfo(!showInfo)}>
            more on {firstName}
        </button>
    </article>
    )
}

export default MembersCard;