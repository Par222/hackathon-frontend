import { use, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import UpcomingTable from "../../../components/committee/UpcomingTable";
const Index = () => {
  const [profile, setProfile] = useState({});
  const router=useRouter()
  const fetchDetails = async () => {
    
    
    let id=router.query.slug
    const result=await axios.get(`http://localhost:5000/api/committee/${id}`)
    setProfile(result.data.committee)
    //console.log(result.data.committee)
  };
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
    <div className="translate-y-[-200px] px-20">
   <h1 className=" border-b-2 border-pink-500 text-pink-500 text-sm my-5 w-[5%]  py-2   ">Penidng Events Status</h1>
    <UpcomingTable></UpcomingTable>
    </div>
   
   
    </>
  );
};
export default Index;
