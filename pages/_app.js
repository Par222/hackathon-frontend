import EventCard from '../components/events/EventCard'
import Layout from '../components/Layout'
import { EventsContext } from '../context/eventsContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<EventsContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </EventsContext>)
}

export default MyApp
