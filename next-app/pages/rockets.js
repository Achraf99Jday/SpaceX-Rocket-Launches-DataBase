import React from 'react'
import Card from '../components/Card'
import { getRockets } from '../pages/utils'
import rocket from './rocket/[id]'

const rockets = ({ rockets }) => {
    if (rockets.message)
        return (<div className="text-white flex flex-col items-center w-7/12 mx-auto space-y-6"><h1 className="text-7xl">{rockets.message}</h1><h2 className="text-6xl">Please try again shortly</h2></div>)
    return (
        <div className="text-white flex flex-col items-center w-7/12 mx-auto space-y-6">
            <h1 className="text-center text-white text-8xl p-5 font-barcode">All Rockets</h1>
            <div className="w-11/12 mx-auto flex flex-wrap gap-x-4">
                {rockets.map((rocket, index) => (<Card key={index} document={rocket} />))}
            </div>
        </div>
    )
}


export async function getStaticProps() {

    let rockets = await getRockets();

    return {
        props: {
            rockets,
        },
    }
}

export default rockets
