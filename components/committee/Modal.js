import { useContext, useEffect, useState } from "react";
import GenericModal from "../common/GenericModal";
import { eventListContext } from "../../context/eventsContext";
import moment from "moment/moment";
import { useRouter } from "next/router";
import axios from "axios";
function Modal(props) {
  const [eventDet, setEventDet] = useState({});
  const router = useRouter();
//   const fetchEventDetails=async()=>{
//     const res=await axios.get(`http://localhost:5000/api/events?id=${props.id}`)
//     setEventDet(res.data)

//   }
  useEffect(()=>{
    setEventDet(props.event)
  },[props.event])

  console.log(props.event)

  const { events, setEvent } = useContext(eventListContext);
  async function registerEvent(event){
    const response = await axios.post(`http://localhost:5000/api/events/register`,{
      "studentid": localStorage.getItem("id"),
      "eventid": props.event._id
    })
    console.log(response)
    props.closeHandler()
  }
  let val = false
  if(props.event.registrations.includes(localStorage.getItem("id"))){
    val = true
  }
  // console.log(props.event.registrations)
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
  return (
    <div className={`${props.showModal ? " overflow-hidden" : ""}`}>
    
        <GenericModal
          closeHandler={props.closeHandler}
          isStepModal={false}
          setTitle={false}
        >
          <div className=" w-full ">
            <div className="flex justify-center ">
              <img src={props.event.banner} alt="" className=" h-[450px] " />
            </div>
            <div className="px-5 my-10">
              <div className="flex mt-3 mb-6">
                <div className="text-3xl font-semibold">{props.event.name}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                <div className="text-sm flex ">
                  <div className="w-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#5F5F5F"
                        d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
                      />
                    </svg>
                  </div>
                  <div className="px-2">
                    {moment(props.event.date).format("DD-MM-YYYY")}
                  </div>
                </div>
                <div className="text-sm flex">
                  <div className="w-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#5F5F5F"
                        d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                      />
                    </svg>
                  </div>{" "}
                  <div className="px-2">
                    {moment(props.event.time).format("HH:MM")}
                  </div>
                </div>
                <div className="text-sm flex">
                  <div className="w-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="#5F5F5F"
                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                      />
                    </svg>
                  </div>{" "}
                  <div className="px-2">{props.event.venue}</div>
                </div>
                <div className="text-sm flex">
                  <div className="w-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#5F5F5F"
                        d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
                      />
                </svg>
                  </div>{" "}
                  <div className="px-2">{props.event.domain}</div>
                </div>
              <div className="text-sm flex">
                  <div className="w-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#5f5f5f" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                  </div>
                  <div className="px-2">
                    {props.event?.registrations.length}
                  </div>
                </div>
              </div>
              <div className="text-lg mt-6 mb-3 ">
                {props.event.description}
              </div>
              <div className="flex justify-start pt-3">
                <button className={`${val?"bg-slate-700":"bg-pink-600"} px-2 py-2 rounded-md`} onClick={() => {registerEvent(props.event)}} disabled={val}>REGISTER</button>
              </div>
            </div>
          </div>
        </GenericModal>
      
    </div>
  );
}

export default Modal;
