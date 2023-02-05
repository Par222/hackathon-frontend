import { async } from "@firebase/util";
import axios from "axios";
import moment from "moment/moment";
import { useContext, useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { eventListContext } from "../../context/eventsContext";

function UpcomingTable(props) {
  const [clickedViewAll, setViewAll] = useState(true);
  const { events, setEvent } = useContext(eventListContext);
  // const events=[{
  //     "name": "SPIT Hackathon",
  //     "description": "Hacking",
  //     "venue": "4th floor",
  //     "date": "04/02/2023",
  //     "time":"10:00",
  //     "status": "approved",
  //     "banner": "https://storage.googleapis.com/download/storage/v1/b/face-server-c2fcd.appspot.com/o/resources%2FpnWWqVadcHzf.png?generation=1641895546480687&alt=media",

  // },{
  //     "name": "SPIT Hackathon",
  //     "description": "Hacking",
  //     "venue": "4th floor",
  //     "date": "04/02/2023",
  //     "time":"10:00",
  //     "status": "pending",
  //     "banner": "https://storage.googleapis.com/download/storage/v1/b/face-server-c2fcd.appspot.com/o/resources%2FpnWWqVadcHzf.png?generation=1641895546480687&alt=media",

  // },{
  //     "name": "SPIT Hackathon",
  //     "description": "Hacking",
  //     "venue": "4th floor",
  //     "date": "04/02/2023",
  //     "time":"10:00",
  //     "status": "approved",
  //     "banner": "https://storage.googleapis.com/download/storage/v1/b/face-server-c2fcd.appspot.com/o/resources%2FpnWWqVadcHzf.png?generation=1641895546480687&alt=media",

  // },{
  //     "name": "SPIT Hackathon",
  //     "description": "Hacking",
  //     "venue": "4th floor",
  //     "date": "04/02/2023",
  //     "time":"10:00",
  //     "status": "approved",
  //     "banner": "https://storage.googleapis.com/download/storage/v1/b/face-server-c2fcd.appspot.com/o/resources%2FpnWWqVadcHzf.png?generation=1641895546480687&alt=media",

  // },]
  let eventArr = [];
  if (clickedViewAll) {
    eventArr = events.slice(0, 3);
  } else {
    eventArr = events;
  }
  const requestHandler=async(eventID,committee)=>{
    console.log(committee)

    
    const response = await axios.post('http://localhost:5000/api/approval-request',{
        eventID,
        committeeID:committee
        
    })

  }
  return (
    <div>
      <div id="table" className="grid grid-cols-2 gap-10 px-20 mt-10 ">
        {eventArr.map((event) => (
          <div className=" rounded-sm ">
            <div id="header" className="h-45 opacity-90 ">
              <img
                src={`${event.banner}`}
                alt=""
                className="h-full w-full object-contain object-center"
              />
            </div>

            <div className="text-xl font-semibold px-3">
              {event.status === "approved" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-8 -translate-y-24"
                  data-tooltip-content={event.status}
                  id="icon"
                >
                  <path
                    fill="#75BE17"
                    d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
              ) : (
                <></>
              )}{" "}
              {event.status === "pending" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-8 -translate-y-24"
                  data-tooltip-content={event.status}
                  id="icon"
                >
                  <path
                    fill="#fab005"
                    d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"
                  />
                </svg>
              ) : (
                <></>
              )}
            </div>
           
              <button className="bg-pink-600 py-2 px-4 rounded-md mx-20 " onClick={()=>requestHandler(event.id,event.committee)}>
                Verify Event
              </button>
            
          </div>
        ))}
      </div>
      {eventArr.length>3?<div
        className="flex justify-end px-20 py-2 cursor-pointer"
        onClick={() => {
          setViewAll(!clickedViewAll);
        }}
      >
        {clickedViewAll ? "View All>>" : "View Less<<"}
      </div>: <></>}
      {/* <ReactTooltip anchorId="icon"/> */}
    </div>
  );
}
export default UpcomingTable;
