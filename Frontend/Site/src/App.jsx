import { Routes, Route} from 'react-router-dom'
import About from './components/About'
import AllEvents from './components/AllEvents'
import Events from './components/Events'
import CollegeRegistration from './components/CollegeRegistration'
import EventRegistration from './components/EventRegistration'
import './index.css'
import EventSelection from './components/EventSelection'

function App() {
  return (
    <>
        <Routes>
          <Route element={<About />} path="/" />
          <Route path="/all-events" element={<AllEvents />} />
          <Route path="/events" element={<Events />} />
          <Route element={<CollegeRegistration />} path="/college-registration" />
          <Route element={<EventRegistration />} path="/event-registration" />
          <Route element={<EventSelection />} path="/event-selection" />
          {/* <About />  */}
          {/* <Events/> */}
          {/* <CollegeRegistration /> */}
          {/* <EventRegistration /> */}
          
        </Routes>
    </>
  )
}

export default App