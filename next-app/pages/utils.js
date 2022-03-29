export async function getLaunches() {
    const resLaunches = await fetch('https://api.spacexdata.com/v4/launches')
    const launchesData = await resLaunches.json()
    let img;
    let launches = launchesData.map(launch => {
        if (launch.links.patch.small === null) 
            img = "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"

        return {
          name: launch.name,
          date : String(Date(launch.date_UTC)),
          image: launch.links.patch.small || img,
          link: `/launch/${launch.id}`
        }
      })

    return launches
}

export async function getRockets() {
    const resRockets = await fetch('https://api.spacexdata.com/v4/rockets')
    if(resRockets.status !== 200) {
        return {
            message: "Error Getting Rockets"           
        }
    }
    const rocketsData = await resRockets.json()

    let rockets = rocketsData.map(rocket => {
        return {
            name: rocket.name,
            image: rocket.flickr_images[0],
            link: `/rocket/${rocket.id}`
        }
    })

    return rockets
}

