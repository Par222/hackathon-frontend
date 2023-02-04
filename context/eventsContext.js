import React, { useEffect, useState } from 'react';
import axios from "axios";

export const eventListContext = React.createContext()

function EventsContext({children}){
    const [events, setEvents] = useState([])
    async function getEvents(){
        const response = await axios.get('http://localhost:5000/api/events',{},{})
        setEvents(response.data)
        console.log(response)
    }
    useEffect(() => {
       
        getEvents()
    }, [])

    return(
        <eventListContext.Provider value = {{events, setEvents, getEvents}}>
            {children}
        </eventListContext.Provider>
    )
}

export {EventsContext}