import { use, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import UpcomingTable from "../../../components/committee/UpcomingTable";
import { eventListContext } from "../../../context/eventsContext";
const Index = () => {
  const [profile, setProfile] = useState({});
  const [commEvents, setEvents] = useState([])
  const [eventsList, setEventsList] = useState({})
  const router=useRouter()
  const fetchDetails = async () => {
    
    
    let id=router.query.slug
    const result=await axios.get(`http://localhost:5000/api/committee/${id}`)
    setProfile(result.data.committee)
    const response = await axios.get('http://localhost:5000/api/events')
    setEventsList(response.data)
    //console.log(result.data.committee)
  };
  console.log(profile)
  console.log(eventsList)
  if(eventsList.length>0){
    eventsList.forEach((e) => {
    if(e.committee === router.query.slug && !commEvents.includes(e)){
      commEvents.push(e)
    }
  })
  }
  console.log(commEvents)
  useEffect(() => {
    fetchDetails();
  }, []);
  const [tab,setTab]=useState(1)

  return (
    <>
    <div className="">
     <img src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80" className="w-full h-[500px] opacity-20"></img>
    </div>
    <div className="flex space-x-6 justify-center items-center translate-y-[-400px]">
      <img
        src={profile.logo}
        className="rounded-full my-10  mx-10"
      ></img>
      <div className=" text-white py-2 px-5 w-[60%] rounded-md">
        <div className="text-5xl my-2 ">{profile.name}</div>
        <p className="font-Heading">{profile.description}</p>
        <p className=" my-5 text-lg font-medium">Faculty Mentor : {"D.r. Surekha Dholay"}</p>
      </div>
    </div>
    
   
   
    </>
  );
};
export default Index;
