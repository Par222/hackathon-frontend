import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GenericModal from '../../components/common/GenericModal';

const Requests = (props) => {
  const [requests, setrequests] = useState({});
  const [showModal, setModal] = useState(false)
  const [currentRequest, setRequest] = useState({})
  // const [requestsList, setRequests] = useState([])
  const requestsList = [{
    "name": "Hackathon",
    "date":"05-02-2023",
    "time": "22:00",
    "domain": "Tech",
    "committee":"CSI",
    "venue": "Bhavan's Ground",
    "description": "Hacking"
  },{
    "name": "Hackathon",
    "date":"05-02-2023",
    "time": "22:00",
    "domain": "Tech",
    "committee":"CSI",
    "venue": "Bhavan's Ground",
    "description": "Hacking"
  },{
    "name": "Hackathon",
    "date":"05-02-2023",
    "time": "22:00",
    "domain": "Tech",
    "committee":"CSI",
    "venue": "Bhavan's Ground",
    "description": "Hacking"
  },{
    "name": "Hackathon",
    "date":"05-02-2023",
    "time": "22:00",
    "domain": "Tech",
    "committee":"CSI",
    "venue": "Bhavan's Ground",
    "description": "Hacking"
  },]
  async function getRequests(designation,id){
    console.log(designation,id)
    const response = await axios.post(`http://localhost:5000/api/events/requests`,{
      "designation": designation,
    })
    console.log(response.data)
  }
  async function getToken(){
    const id = localStorage.getItem('id');
    console.log(id)
    const response = await axios.get(`http://localhost:5000/api/faculty?id=${id}`)
    console.log(response)
    // getRequests(response.designation,id );
  }
  useEffect(() => {
    getToken()
  },[])
  return (
    <div>
      {showModal && <GenericModal closeHandler={() => {setModal(false)}}>
        <div className=" w-full ">
            <div className="px-5">
              <div className="flex mt-3 mb-6">
                <div className="text-3xl font-semibold">{currentRequest.name}</div>
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
                    {/* {moment(eventDet.date).format("DD-MM-YYYY")} */} {currentRequest.date}
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
                    {/* {moment(eventDet.time).format("HH:MM")} */} {currentRequest.time}
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
                  <div className="px-2"> {currentRequest.venue}</div>
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
                  <div className="px-2">{currentRequest.domain}</div>
                </div>
                
              </div>
              <div className="text-lg mt-6 mb-3 ">
                  {currentRequest.description}
              </div>
            </div>
            <div className='flex justify-between px-40 py-5'>
              <button className='text-lg bg-lime-400 text-black rounded-md px-5 py-2'>Approve</button>
              <button className='text-lg bg-[#CF0A0A] rounded-md px-5 py-2'>Decline</button>
            </div>
          </div>
        </GenericModal>}
      <div className="p-4 w-[900px]">
        <h1 className="text-center text-xl mb-2 tracking-wider">
          Pending Approvals
        </h1>
        <div className="flex flex-col px-3 py-2 gap-3">
          <div className="flex gap-4 text-pink-600 border-2 border-pink-400 bg-tertiaryblue-400 justify-between items-center bg-tertiaryblue-  rounded-md p-4">
            <div className="text-lg">Name</div>
            <div className="text-lg">Committee</div>
            <div className="text-lg">Date</div>
            <div className="text-lg">Action</div>
          </div>
          {requestsList.map((e) => {
            return (
              <div className="flex gap-4 shadow-md shadow-black-lg  hover:border-2 hover:border-pink-400 hover:bg-pink-400/20 cursor-pointer transition-all justify-between items-center bg-tertiaryblue-200 rounded-md p-4" onClick={() => 
              {setModal(true)
              setRequest(e)}}>
                <div className="text-lg ">{e.name}</div>
                <div className="text-lg ml-8">{e.committee}</div>
                <div className="text-lg">{e.date}</div>
                <div className="flex gap-3 items-center">
                  <button className="w-8 p-1 h-8  rounded-lg text-lime-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path
                        fill="#77D970"
                        d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                      />
                    </svg>
                  </button>
                  <button className="w-6 h-6 rounded-lg position-relative">
                    {/* <div className="h-10 w-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          height="19"
                          width="19"
                        >
                          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                        </svg>
                      </div> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#CF0A0A"
                    >
                      <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                    </svg>
                  </button>
                  {/* <a href="" className="text-decoration-none drop-shadow-lg ">
                      <div className="p-1 drop-shadow-lg shadow-blue-600/50">
                        View More
                      </div>
                    </a> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Requests;
