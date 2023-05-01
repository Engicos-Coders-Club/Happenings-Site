import { Routes, Route} from 'react-router-dom'
import About from './components/About'
import AllEvents from './components/AllEvents'
import Events from './components/Events'
import CollegeRegistration from './components/CollegeRegistration'
import EventRegistration from './components/EventRegistration'
import './index.css'
import EventSelection from './components/EventSelection'
import TicketsSection from './components/TicketsSection'
import BookTickets from './components/BookTickets'

function App() {
  return (
    <>
        <Routes>
          <Route element={<About title="About"/>} path="/" />
          <Route path="/all-events" element={<AllEvents title="All Events"/>} />
          <Route path="/events" element={<Events title="Events"/>} />
          <Route element={<CollegeRegistration  title="College Registration"/>} path="/college-registration"/>
          <Route element={<EventRegistration title="Event Registration"/>} path="/event-registration" />
          <Route element={<EventSelection title="Event Selection"/>} path="/event-selection"/>
          <Route element={<TicketsSection title="Tickets"/>} path="/tickets"/>
          <Route element={<BookTickets title="Buy Tickets"/>} path="/buy"/>
          {/* <About />  */}
          {/* <Events/> */}
          {/* <CollegeRegistration /> */}
          {/* <EventRegistration /> */}
          
        </Routes>
    </>
  )
}

export default App