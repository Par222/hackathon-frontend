import Sidebar from "../../components/committee/Sidebar"
import UpcomingTable from "../../components/committee/UpcomingTable"

const Index = () => {
    return(
        <div className="w-full px-5 py-5">
            <div className="font-bold text-3xl flex" id="header">Overview</div>
            <div className="py-5" id="content">
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
                <div id="table header" className="text-2xl font-semibold py-5">Upcoming Events:</div>
                {/* events table */}
                <UpcomingTable></UpcomingTable>
            </div>
        </div>
    )
}

export default Index