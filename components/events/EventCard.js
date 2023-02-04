import { useContext, useEffect, useState } from "react";
import GenericModal from "../common/GenericModal";
import { eventListContext } from "../../context/eventsContext";
import moment from "moment/moment";
import { useRouter } from "next/router";
function EventCard(props) {
  const [showModal, setModal] = useState(false);
  const [eventDet, setEventDet] = useState({});
  const router = useRouter();
  const closeHandler = () => {
    setModal(false);
  };
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
  return (
    <div className={`${showModal ? "h-[70vh] overflow-hidden" : ""}`}>
      {showModal && (
        <GenericModal
          closeHandler={closeHandler}
          isStepModal={false}
          setTitle={false}
        >
          <div className=" w-full ">
            <div>
              <img src={eventDet.banner} alt="" className="w-full" />
            </div>
            <div className="px-5">
              <div className="flex mt-3 mb-6">
                <div className="text-3xl font-semibold">{eventDet.name}</div>
                <div
                  className="text-3xl px-3 font-semibold flex"
                  onClick={() => {
                    router.push(`/committee/editevent/${eventDet._id}`);
                    // console.log("click")
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 flex items-center"
                  >
                    <path
                      fill="#5F5F5F"
                      d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                    />
                  </svg>
                </div>
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
                    {moment(eventDet.date).format("DD-MM-YYYY")}
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
                    {moment(eventDet.time).format("HH:MM")}
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
                  <div className="px-2">{eventDet.venue}</div>
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
                  <div className="px-2">{eventDet.domain}</div>
                </div>
              </div>
              <div className="text-lg mt-6 mb-3 ">
                {eventDet.description}
              </div>
            </div>
          </div>
        </GenericModal>
      )}
      <div id="table" className="grid grid-cols-4 gap-5 px-16">
        {events.map((event) => (
          <div
            className=" rounded-sm w-[300px] hover:w-[360px] hover:-translate-y-3 hover:-translate-x-7 transition-all duration-200 hover: cursor-pointer"
            onClick={() => {
              setModal(true);
              setEventDet(event);
            }}
          >
            <div id="header" className="h-50 opacity-90 ">
              <img
                src={`${event.banner}`}
                alt=""
                className="h-full w-full object-contain object-center"
              />
            </div>
            {/* <div
              id="content"
              className="bg-blackShade-50 py-3 px-3 grid grid-cols-2 gap-3 -translate-y-8 "
            >
              <div className="text-xl font-semibold">{event.name}</div>
              <div className="text-lg ">
                Date: {moment(event.date).format('DD-MM-YYYY')}
              </div>
              <div className="text-lg ">
                Time: {moment(event.time).format('HH:MM')}
              </div>
              <div className="text-lg ">Venue: {event.venue}</div>
            </div> */}
          </div>
        ))}
      </div>
      {/* <div className="flex justify-end px-20 py-2 cursor-pointer" onClick={() => {
                setViewAll(!clickedViewAll)
            }}>{clickedViewAll?"View All>>": "View Less<<"}</div> */}
      {/* <ReactTooltip anchorId="icon"/> */}
    </div>
  );
}

export default EventCard;
