import React from 'react';
import styles from "../../styles/style";
import EventCard from "./EventCard";

  
const Events = () => {
  return (
    <div>
        <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
            <h1> popular events </h1>
            </div>
            
            <div className="w-full grid">
            <EventCard />
            </div>
        </div>
    </div>
  )
}

export default Events