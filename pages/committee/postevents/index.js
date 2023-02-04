const { useState, useEffect } = require("react");
import moment from "moment/moment";
import DropFileUpload from "../../../components/common/DropFileUpload";
import DatePickers from "../../../components/common/DatePicker";
import TimePickers from "../../../components/common/TimePicker";
import axios from "axios";
import { storage } from "../../../firebase/firebase";
 import { useRouter } from "next/router";
import {
  getDownloadURL,
  ref,
  deleteObject,
  uploadBytes,
  getMetadata,
} from "firebase/storage";
import {toast} from "react-toastify"
const Index = () => {
  const [name, setName] = useState("");
  const router=useRouter()
  const [des, setDes] = useState("");
  const [type, setType] = useState("");
  const [venue, setVenue] = useState("");
  const [banner,setBanner]=useState("")
  const [image, setImageArray] = useState([]);
  const [Uploaded, setIsUploaded] = useState(false);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [startTime, setStartTime] = useState(moment().format("hh:mm:ss a"));
  const [endTime, setEndTime] = useState(moment().format("hh:mm:ss a"));
  const types = ["Tech", "Non Tech", "Sports", "Seminar", "Webinar"];
  const getImageURL = async (image) => {
    try {
      console.log(image)
      console.log(storage)
      const imageRef = ref(
        storage,
        `committee/${name}/${image.name}`
      );
      const imageUploadResponse = await uploadBytes(imageRef, image);
      console.log(imageUploadResponse)
      const imageDownloadResponse = await getDownloadURL(imageRef);
      console.log(imageDownloadResponse)
      return imageDownloadResponse;
    } catch (error) {
      console.log(error);
    }}
  
  const submitHandler = async(e) => {
    e.preventDefault();
   
    let eventInfo = {
     
      name,
      description: des,
      date,
      startTime,
      endTime,
      committee:"123",
      banner,
      domain:type

    };
    console.log(eventInfo)
    const res=await axios.post("http://localhost:5000/api/events",eventInfo).then(()=>{
      router.push('/committee')
     

    })

  };
  const venueHandler=()=>{
    
  }
  const upload = (accepted, rejected) => {
    setImageArray([...accepted]);
    setIsUploaded(true);
  };
  useEffect(()=>{
    if(image.length>0)
  getImageURL(image[image.length-1]).then((banner)=>setBanner(banner))
  },[image])
  return (
    <div className="bg-tertiaryblue-100 text-sm flex flex-col ">
      <div className="w-[100%] ">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="w-[100%] h-[400px] opacity-75"
        />
        <p className="translate-y-[-200px] text-white font-bold text-6xl mx-20">
          Create An Event
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex  justify-center w-[80%]  h-[80%] py-9 px-10 bg-tertiaryblue-100 text-white  font-medium font-display rounded-md opacity-95 "
      >
        <div className="flex flex-col w-[50%] mr-20">
          <label htmlFor="email" className="my-2 ">
            Event Title<span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            onChange={(event) => setName(event.target.value)}
            className="py-2 bg-tertiaryblue-100 border-b-2 w-[80%] mb-4 border-white text-white focus:outline-none px-1"
            placeholder="Enter event name"
          ></input>
          <label htmlFor="des">
            Event Description<span className="text-red-600">*</span>
          </label>
          <textarea
            id="des"
            onChange={(event) => setDes(event.target.value)}
            rows={1}
            placeholder="Enter event description"
            className="w-[80%] py-2 bg-tertiaryblue-100 border-b-2  mb-4 border-white text-white focus:outline-none px-1"
          ></textarea>
          <label htmlFor="type">
            Event Type<span className="text-red-600">*</span>
          </label>
          <select
            id="type"
            onChange={(event) => setType(event.target.value)}
            className="my-2 bg-tertiaryblue-100 border-b-2 w-[80%] mb-4 border-white text-white focus:outline-none py-2"
          >
            <option value="">Select event type</option>
            {types.map((type, i) => (
              <option value={type} id={i}>
                {type}
              </option>
            ))}
          </select>
          <p className="my-2">
            Event Banner Image<span className="text-red-600">*</span>
          </p>
          <div className="w-[80%]">
          <DropFileUpload
            msg={"Drag files to upload or"}
            extension="browse"
            uploadFiles={upload}
          ></DropFileUpload>

          </div>
         
          {Uploaded && (
            <img src={URL.createObjectURL(image[image.length - 1])}></img>
          )}
           <button
          type="submit"
          className="my-7 rounded-md text-white bg-pink-500 w-[25%] py-2 "
        >
          Post Event
        </button>
        </div>
        <div className="flex flex-col  w-[40%]">
          <label htmlFor="type" className="mt-4">
            Event Date<span className="text-red-600">*</span>
          </label>
          <div className="border-b-2 border-white">
            <DatePickers
              dateHandler={(date) => setDate(moment(date).format("YYYY-MM-DD"))}
            ></DatePickers>
          </div>
          <label htmlFor="type" className="mt-4">
            Event Start Time<span className="text-red-600">*</span>
          </label>
          <div className="border-b-2 border-white">
            <TimePickers
              timeHandler={(startTime) => setStartTime(moment(startTime).format("HH:MM"))}
            ></TimePickers>
          </div>
          <label htmlFor="type" className="mt-4">
            Event End Time<span className="text-red-600">*</span>
          </label>
          <div className="border-b-2 border-white">
            <TimePickers
              timeHandler={(endTime) => setEndTime(moment(startTime).format("HH:MM"))}
            ></TimePickers>
          </div>
          <button  className="my-10 bg-tertiarygrey-450 py-3 w-[50%] rounded-sm" type="button" onChange={()=>venueHandler}>
           Check Venue
          </button>

        </div>
      
      </form>
      
    </div>
    
  );
};
export default Index;
