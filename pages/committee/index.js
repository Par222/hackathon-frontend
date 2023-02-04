import {useRouter} from "next/router";
import BarChart from "../../components/committee/BarChart";
import AppointmentCalendar from "../../components/committee/Calendar";
import Sidebar from "../../components/committee/Sidebar"
import UpcomingTable from "../../components/committee/UpcomingTable"

const Index = () => {
    const router = useRouter();
    return(
        <div className="w-full px-5 py-5">
            <div className="font-semibold text-3xl flex" id="header">Overview</div>
            <div className="py-5 w-full px-5" id="content">
                <div className="grid-cols-3 grid w-full gap-36" id="cards">
                    <div className="px-3 py-3 border-2 border-tertiaryblue-100 rounded-md  hover:border-pink-600 flex flex-row items-center justify-center transition-all duration-200 bg-slate-200 bg-opacity-20 h-20">
                        <div className="text-lg">Events Held</div>
                        <div className="px-5 text-sm">
                            3
                        </div>
                    </div>
                    <div className="px-3 py-3 border-2 border-tertiaryblue-100 rounded-md  hover:border-pink-600 flex flex-row items-center justify-center transition-all duration-200 bg-slate-200 bg-opacity-20 h-20">
                        <div className="text-lg">Upcoming Events</div>
                        <div className="text-sm px-5">
                            2
                        </div>
                    </div>
                    <div className="px-3 py-3 border-2 border-tertiaryblue-100 rounded-md hover:border-pink-600 flex flex-row items-center justify-center transition-all duration-200 bg-slate-200 bg-opacity-20 h-20">
                        <div className="text-lg">Events Pending for Approval</div>
                        <div className="text-sm px-5">
                            1
                        </div>
                    </div>
                </div>
                    {/* <div className="px-3 py-5 border-2 border-tertiaryblue-100 rounded-md  hover:border-pink-600 flex flex-col items-center justify-center transition-all duration-200">
                        <div className="text-lg">Participation Stats</div>
                        <div className="text-sm px-5">
                            <BarChart></BarChart>
                        </div>
                    </div> */}
                <div className="w-[50%]">
                    <div id="table header" className="text-2xl font-semibold py-5 flex w-full px-10">Upcoming Events: <div className="w-5 px-5 hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8" onClick={() => {
                            router.push('/committee/postevents')
                        }}><path fill="#fff" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg></div>
                    </div>
                    {/* events table */}
                    <UpcomingTable></UpcomingTable>
                </div>
                <div className="w-[50%]">
                    <AppointmentCalendar></AppointmentCalendar>
                </div>
            </div>
        </div>
    )
}

export default Index