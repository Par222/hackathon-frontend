import { async } from "@firebase/util";
import Modal from "../../components/committee/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
const Index = () => {
  const [relevant, setRelevant] = useState([]);
  const [selected, setSelected] = useState({});
  const [id, setId] = useState("");
  const [currentEvent, setCurrentEvent] = useState({});
  const [count, setCount] = useState(0);
  const [event, setEvents] = useState([]);
  const fetchEvents = async () => {
    const response = await axios.get(`http://localhost:5000/api/events`);
    setEvents(response.data);
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  useEffect(() => {
    console.log(event);
  }, [event]);
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:5000/api/committee?name=${name}`
    );
    setRelevant(response.data);
  };
  return (
    <>
      {showModal && (
        <Modal
          id={id}
          showModal={showModal}
          closeHandler={() => setShowModal(false)}
          isStepModal={false}
          setTitle={false}
          event={currentEvent}
        ></Modal>
      )}
      {event && event.length > 0 && (
        <div>
          <div>
            <div>
              <div className="flex space-x-10 my-10 mx-20 items-center justify-between cursor-pointer">
                <div
                  onClick={() => {
                    if (count - 1 >= 0) setCount(count - 1);
                  }}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={40}
                    height={40}
                  >
                    <path
                      fill="#fff"
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                    />
                  </svg>
                </div>

                <img
                  src={event[count].banner}
                  className="w-[500px] h-[350px]"
                  onClick={() => {
                    setId(event[count].id);
                    setCurrentEvent(event[count]);
                    console.log(event[count]);
                    setShowModal(true);
                  }}
                ></img>

                <div
                  onClick={() => {
                    if (count + 1 < event.length) setCount(count + 1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={40}
                    height={40}
                  >
                    <path
                      fill="#fff"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="text-whote text-lg my-5 px-10">
              Search For Committees
            </h1>
            <form className="px-10 " onSubmit={submitHandler}>
              <></>
              <input
                className="bg-white w-[40%] py-2 rounded-sm text-black shadow-md border "
                onChange={(e) => setName(e.target.value)}
              ></input>
              <button className=" py-3 px-8 mx-5 rounded-sm bg-pink-600 border-white  ">
                Search
              </button>
              <></>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Index;
