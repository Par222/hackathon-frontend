import EventCard from "../../../components/events/EventCard"

function Index(props){
    return(
        <div className="w-full px-5 py-5">
            <div className="font-semibold text-3xl flex" id="header">Events</div>
            <div id="content" className="py-5">
                <EventCard></EventCard>
            </div>
        </div>
    )
}

export default Index