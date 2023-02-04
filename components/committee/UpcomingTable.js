import { useState } from "react"

function UpcomingTable(props){
    const [clickedViewAll, setViewAll] = useState(true)
    const events=[{
        "name": "SPIT Hackathon",
        "description": "Hacking",
        "venue": "4th floor",
        "date": "04/02/2023",
        "time":"10:00",
        "status": "approved",
        "banner": "",

    },{
        "name": "SPIT Hackathon",
        "description": "Hacking",
        "venue": "4th floor",
        "date": "04/02/2023",
        "time":"10:00",
        "status": "approved",
        "banner": "",

    },{
        "name": "SPIT Hackathon",
        "description": "Hacking",
        "venue": "4th floor",
        "date": "04/02/2023",
        "time":"10:00",
        "status": "approved",
        "banner": "",

    },{
        "name": "SPIT Hackathon",
        "description": "Hacking",
        "venue": "4th floor",
        "date": "04/02/2023",
        "time":"10:00",
        "status": "approved",
        "banner": "",

    },]
    let eventArr = []
    if(clickedViewAll){
        eventArr = events.slice(0,3)
    }
    else{
        eventArr = events
    }
    return(
        <div>
            <div id="table" className="grid grid-cols-3 gap-2 px-20">
                {eventArr.map((event) => (
                    <div className="bg-blackShade-50 rounded-sm ">
                        <div>
                            {event.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end">View All</div>
        </div>
    )
}
export default UpcomingTable