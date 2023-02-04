import Link from "next/link";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
const Sidebar = (props) => {
    const [tabClicked, setTabClicked] = useState("overview");
    const router = useRouter();
    useEffect(() => {
        if(router.pathname === "/committee"){
            setTabClicked("overview")
        }
        else if(router.pathname === "/committee/events"){
            setTabClicked("events")
        }
        else if(router.pathname === "/committee/members"){
            setTabClicked("members")
        }
        else if(router.pathname === "/committee/profile"){
            setTabClicked("profile")
        }
        // else if(router.pathname === "/warddetails"){
        //     setTabClicked("ward")
        // }
        // else if(router.pathname === "/appointment"){
        //     setTabClicked("appointment")
        // }
    },[router.pathname]);
    return(
        <div className="w-full  items-center flex  font-semibold text-lg flex-row  bg-tertiaryblue-100 inset-0 z-50   opacity-80  ">
            <div className="px-5 py-1 font-medium text-sm text-white ">
                Committe Collab
            </div>
            <div className="flex flex-row px-2 space-x-7 text-sm mx-[25%]">
                <Link href="/committee">
                    <div className={` ${tabClicked === "overview" ? "border-b-2 border-pink-500 text-pink-500" : ""} transition-all  hover:border-b-2 px-5 py-4 cursor-pointer`} id="overview">Overview</div>
                </Link>            
                <Link href="/committee/events">
                    <div className={`  ${tabClicked === "events" ? "border-b-2 border-pink-500 text-pink-500" : ""} transition-all  hover:border-b-2 px-5 py-4 cursor-pointer`} id="event details">Events</div>
                </Link>
                <Link href="/committee/members">
                    <div className={`  ${tabClicked === "members" ? "border-b-2 border-pink-500 text-pink-500" : ""} transition-all  hover:border-b-2 px-5 py-4 cursor-pointer`} id="members details">Members</div>
                </Link>
                <Link href="/committee/profile">
                    <div className={`  ${tabClicked === "profile" ? "border-b-2 border-pink-500 text-pink-500" : ""} transition-all  hover:border-b-2 px-5 py-4 cursor-pointer`} id="profile details">Profile</div>
                </Link>
                {/* <Link href="/ambulance">
                    <div className={`hover:bg-tertiaryblue-50  hover:text-white  ${tabClicked === "ambulance" ? "bg-tertiaryblue-50  text-white rounded-lg" : "bg-white"} transition-all duration-200 border-b-2 px-5 py-4 hover:rounded-lg cursor-pointer`} id="ambulance details">Ambulance Details</div>
                </Link>
                <Link href="/warddetails">
                    <div className={`hover:bg-tertiaryblue-50  hover:text-white  ${tabClicked === "ward" ? "bg-tertiaryblue-50  text-white rounded-lg" : "bg-white"} transition-all duration-200 border-b-2 px-5 py-4 hover:rounded-lg cursor-pointer`} id="ward details">Ward Details</div>
                </Link> */}
                {/* <Link href="/login">
                    <div className={`hover:bg-tertiaryred-50 absolute top-[87%]  hover:text-white  ${tabClicked === "ward" ? "bg-tertiaryblue-50  text-white rounded-lg" : "bg-white"} transition-all duration-200 border-2 border-red-500 bg-red-500 px-16 py-4 rounded-lg cursor-pointer`} id="ward details">Sign Out</div>
                </Link> */}
            </div>
            <button className="bg-pink-600 text-sm  py-1 px-6 rounded-sm">Logout</button>
        </div>
    );
};
export default Sidebar;