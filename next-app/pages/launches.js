import React from 'react'
import Card from '../components/Card'
import { getLaunches } from '../pages/utils'

const launches = ({ missions }) => {
    return (
        <>  
        <h1 className="text-center text-white xl:text-9xl md:text-9xl sm:text-9xl text-5xl p-5 font-barcode">All Launches</h1>
            <div className="w-11/12 mx-auto flex flex-wrap gap-x-4">
                {missions.map((mission, index) => (<Card key={index} document={mission} />))}
            </div>
        </>
    )
}


export async function getStaticProps() {

    let missions = await getLaunches();

    return {
        props: {
            missions,
        },
    }
}

export default launches
