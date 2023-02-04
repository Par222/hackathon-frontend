import {useRouter} from "next/router";
import Sidebar from "../../components/committee/Sidebar"
import UpcomingTable from "../../components/committee/UpcomingTable"

const Index = () => {
    const router = useRouter();
    return(
        <div className="w-full px-5 py-5">
            <div className="font-semibold text-3xl flex" id="header">Overview</div>
            <div className="py-5 w-full" id="content">
                <div className="grid-cols-4 grid w-full gap-5" id="cards">
                    <div className="bg-blackShade-50 px-3 py-3 rounded-md">
                        <div className="text-xl">Events Held</div>
                        <div className="py-2">
                            3
                        </div>
                    </div>
                    <div className="bg-blackShade-50 px-3 py-3 rounded-md">
                        <div className="text-xl">Upcoming Events</div>
                        <div className="py-2">
                            2
                        </div>
                    </div>
                    <div className="bg-blackShade-50 px-3 py-3 rounded-md">
                        <div className="text-xl">Events Pending for Approval</div>
                        <div className="py-2">
                            1
                        </div>
                    </div>
                    <div className="bg-blackShade-50 px-3 py-3 rounded-md">
                        <div className="text-xl">Participation Stats</div>
                        <div className="py-2">
                            chart
                        </div>
                    </div>
                </div>
                <div id="table header" className="text-2xl font-semibold py-5 flex w-full ">Upcoming Events: <div className="w-5 px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8" onClick={() => {
                        router.push('/committee/postevents')
                    }}><path fill="#fff" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg></div>
                </div>
                {/* events table */}
                <UpcomingTable></UpcomingTable>
            </div>
        </div>
    )
}

export default Index