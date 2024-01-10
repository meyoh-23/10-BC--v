/* eslint-disable react/prop-types */

import { useState } from "react";

const MembersCard = ({name, role, image, comments} ) => {
    const [showInfo, setShowInfo] = useState(false);
    const names = (name.split(' '));

    const firstName = names[0]
    return (
    <article className=" mx-auto flex  flex-col items-center justify-between w-[99%] ss:w-[400px] gap-3 border-none shadow-2xl my-4 rounded-br-2xl relative">
        <div className="flex flex-col  items-center gap-4 md:flex-row">
            <img src={image} alt="member- image" className="max-w-[200px] mt-2 mx-2 rounded-md z-[5] drop-shadow-xl shadow-lg" />
            <div className="flex flex-col gap-4 items-center p-2 justify-start my-4 rounded-br-2xl shadow-2xl shadow-indigo-400/50 mr-2">
                <p className="text-h2 font-raleway font-bold text-primary text-center">{name}</p>
                <p className="text-h3 font-Oswald text-bgButtonSecondary text-center font-medium">{role}</p>
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
        <button type="button" className="bg-bgButton rounded-md p-2 my-2 text-primary text-little font-raleway font-bold" onClick={() =>setShowInfo(!showInfo)}>
            More From {firstName}
        </button>
    </article>
    )
}

export default MembersCard;