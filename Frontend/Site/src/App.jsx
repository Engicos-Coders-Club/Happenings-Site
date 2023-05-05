import React, { useState, useEffect } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import AllEvents from './components/AllEvents'
import Events from './components/Events'
import CollegeRegistration from './components/CollegeRegistration'
import EventRegistration from './components/EventRegistration'
import './index.css'
import EventSelection from './components/EventSelection'
import TicketsSection from './components/TicketsSection'
import BookTickets from './components/BookTickets'
import Auth from './components/Auth'
import FogotPassword from './components/ForgotPassword'
import Teams from './components/Teams'

import GeneralRulePage from './components/GeneralRulePage'

import { useLocation } from "react-router-dom";
import Modal from './components/Modal'
import Layout from './Layout'
import { loadUser } from './actions/auth'
import { useDispatch } from 'react-redux'

function App() {
  // const location = useLocation();
  // console.log(location);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadUser())
  },[])

  return (

    <>
      {/* <BrowserRouter> */}
          <Routes>
               <Route element={<Layout title="Happenings" />} path="/" />
                <Route element={<CollegeRegistration title="College Registration" />} path="/college-registration" />
                <Route element={<EventRegistration title="Event Registration" />} path="/event-registration" />
                <Route element={<EventSelection title="Event Selection" />} path="/event-selection" />
                <Route element={<TicketsSection title="Tickets" />} path="/tickets" />
                <Route element={<AllEvents title="All Events" />} path="/all-events/:id" />
                <Route element={<BookTickets title="Buy Tickets" />} path="/buy" />
                <Route element={<Auth title="Authentication" />} path="/auth" />
                <Route element={<FogotPassword title="Fogot Password" />} path="/resetpass" />
                <Route element={<Teams title="Teams" />} exact matches path="/Teams/" />
                <Route element={<GeneralRulePage title="GeneralRulePage" />} path="/GeneralRule" />
                <Route element={<Modal title="Modal" />} path="/Modal" />
               
            </Routes>
      {/* </BrowserRouter> */}
      

    </>
  )
}

export default App