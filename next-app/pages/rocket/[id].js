import React from 'react'
import ImageGallery from 'react-image-gallery';

const rocket = ({ rocket }) => {
    const images = rocket.flickr_images.map(image => {
        return {
            original: image,
            thumbnail: image
        }
    })
    return (
        <div className="text-white flex flex-col items-center w-7/12 mx-auto space-y-6">
            <h1 className="text-9xl mt-10 font-barcode text-center">{rocket.name}</h1>
            <p>{rocket.description}</p>
            <h2>Rocket Data Table</h2>
            <table className="table-fixed border-collapse border border-green-800 w-96">
                <tbody>
                    <tr>
                        <td className="border border-green-600 p-3">Engine Type</td>
                        <td className="border border-green-600 p-3">{rocket.engines.type}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Engine Count</td>
                        <td className="border border-green-600 p-3">{rocket.engines.number}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Engine Layout</td>
                        <td className="border border-green-600 p-3">{rocket.engines.layout || "Unknown"}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Engine Thrust to Weight</td>
                        <td className="border border-green-600 p-3">{rocket.engines.thrust_to_weight}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Engine Prop 1</td>
                        <td className="border border-green-600 p-3">{rocket.engines.propellant_1}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Engine Prop 2</td>
                        <td className="border border-green-600 p-3">{rocket.engines.propellant_2}</td>
                    </tr>
                </tbody>
            </table>

            {images.length > 0 ? (<><h2 className="text-4xl">Images of Rocket</h2><ImageGallery lazyLoad={true} items={images} /></>) : <p>No images available of rocket</p>}
        </div>
    )
}


export async function getServerSideProps(context) {

    const { id } = context.query;

    var res = await fetch('https://api.spacexdata.com/v4/rockets/' + id);
    const rocket = await res.json();
    // console.log(rocket)




    return {
        props: {
            rocket
        },
    }
}


export default rocket
