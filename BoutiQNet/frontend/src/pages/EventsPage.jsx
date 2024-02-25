import React, {useEffect,useState} from 'react'
import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import styles from "../styles/style";
const EventsPage = () => {
  return (
    <div>
      <Header activeHeading={4}/>
      <EventCard active={true}/>
      <EventCard active={true}/>

    </div>
  )
}

export default EventsPage
