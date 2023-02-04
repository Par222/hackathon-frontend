import EventCard from '../components/events/EventCard'
import Layout from '../components/Layout'
import { EventsContext } from '../context/eventsContext'
import {useRouter} from "next/router";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (typeof window !== 'undefined'){
  if(localStorage.getItem("id")){
    return (<EventsContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </EventsContext>)
  }
    return (<EventsContext>
      <Component {...pageProps} />
    </EventsContext>)
  }
}

export default MyApp;
