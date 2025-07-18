import React, { useEffect, useState } from 'react'
import '../css/DigitalClock.css'
export const DigitalClock = () => {
 
const [currentTime, setCurrentTime] = useState(new Date());

useEffect(()=>{
   const timer = setInterval(() =>{
      setCurrentTime(new Date());
   },1000);
   return () => clearInterval(timer);
},[]);

const formatTime = (hour) =>{
     return hour === 0 ? 12 : hour > 12 ? hour-12 : hour;
}
const formatWithLeadingZero = (num) =>{
   return num < 10 ? `0${num}` : num;
};
const formatDate = (date) =>{
 const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}
 
  return (
    <>
    <div className="digital-clock">
        <h1>Digital clock</h1>
        <div className="time">
           {formatWithLeadingZero(formatTime(currentTime.getHours()))}:
           {
            formatWithLeadingZero(currentTime.getMinutes())
           }:
           {
            formatWithLeadingZero(currentTime.getSeconds())
           }
            {
            currentTime.getHours() >= 12 ? " PM" : " AM"
           }
        </div>
        <div className="date">
           {formatDate(currentTime)}
        </div>
    </div>
     
    
    </>
  )
}
