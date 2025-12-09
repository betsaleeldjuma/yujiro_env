import { useState } from "react"
import { admin } from "./data/profil"

const Profil = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-between p-5 items-center">
        {/* Salutation */}
        <div className="w-[40%]">
            {!isOpen ? 
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-bold text-5xl">Hi I'm Yujiro_Zenin</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="hover:text-white underline">View description</button>
            </div>
            : <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl">Hi I'm Yujiro_Zenin</h1>
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-2xl">{admin.description}</p>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="hover:text-white underline">Close description</button>
                </div>
            </div>}
        </div>
        <div className="flex flex-col justify-center items-center w-[40%]">
            <img src={admin.src} alt={admin.name} className="rounded-full"/>
            <h1 className="text-2xl font-extrabold">{admin.name}</h1>
            <h2 className="font-bold text-xl">{admin.pseudoName}</h2>
            <p>{admin.phone}</p>
            <a href={admin.linkedIn} className="hover:text-white">LinkedIn</a>
        </div>
    </div>
  )
}

export default Profil