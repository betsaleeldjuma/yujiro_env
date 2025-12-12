import { useState } from "react"
import { admin } from "./data/hero"

const Hero = () => {
    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [isProfil, setIsProfil] = useState(false)

  return (
    <div className="flex justify-between items-center p-10 text-[#610094]">
        {/* Salutation */}
        <div className="w-[40%]">
            {!isOpenDescription ? 
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-bold text-5xl text-shadow-[0_0_15px_5px_black]">Hi I'm Yujiro_Zenin</h1>
                <button onClick={() => setIsOpenDescription(!isOpenDescription)} className="hover:text-white underline">View description</button>
            </div>
            : <div className="flex flex-col gap-2 shadow-[0_0_15px_5px_black] p-10">
                <h1 className="font-bold text-4xl">Hi I'm Yujiro_Zenin</h1>
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-2xl">{admin.description}</p>
                    </div>
                    <button onClick={() => setIsOpenDescription(!isOpenDescription)} className="hover:text-white underline">Close description</button>
                </div>
            </div>}
        </div>
        {/* Profil */}
        <div className="flex flex-col justify-center items-center w-[40%] gap-2">
            <img src={admin.src} alt={admin.name} onClick={() => setIsProfil(!isProfil)} className="rounded-full hover:shadow-[0_0_15px_5px_#C8ACD6]"/>
            {!isProfil && <div>
                <h1 className="text-4xl font-extrabold">{admin.name}</h1>
                <h2 className="font-bold text-3xl">{admin.pseudoName}</h2>
                {/* <p>{admin.phone}</p>
                <a href={admin.linkedIn} className="hover:text-white">LinkedIn</a> */}
            </div>}
        </div>
    </div>
  )
}

export default Hero