import React, { useState } from 'react';
import axios from 'axios';

const Requests = (props) => {
  const [requests, setrequests] = useState({});
  return (
    <div className="p-4 w-4/5">
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
        {[1, 2, 4, 4].map((e) => {
          return (
            <div className="flex gap-4 shadow-md shadow-black-lg  hover:border-2 hover:border-pink-400 hover:bg-pink-400/20 cursor-pointer transition-all justify-between items-center bg-tertiaryblue-200 rounded-md p-4">
              <div className="text-lg ">Hackathon</div>
              <div className="text-lg ml-8">CSI - SPIT</div>
              <div className="text-lg">Thursday, 9th January</div>
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
  );
};

export default Requests;
