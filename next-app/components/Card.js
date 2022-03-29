import React from 'react'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const Card = ({document}) => {
    const {name, date, image, link} = document
    return (
        <div className="w-60 h-72 flex flex-col items-center justify-around mx-auto bg-white rounded-md filter drop-shadow-greenDrop my-5 p-4">
        <div className="p-1">
            <img className="object-scale-down h-44" src={image} />
        </div>
        <h2 className="mx-auto font-bold text-black">{name}</h2>
        <h1 className="mx-auto text-gray">{date}</h1>
        <div className="mx-auto w-28 h-14 flex items-center justify-center text-white font-bold bg-secondary rounded-md filter drop-shadow-blackDrop">
            <Link href={link}>Learn More</Link>
        </div>
    </div>
    )
}


export default Card
