import React, {useState, useEffect} from 'react'
import API from '../utils/API'
import moment from 'moment'
import axios from 'axios'

export default function AllEvents(props){
    const loggedUser = localStorage.getItem('user')
    const [events, setEvents] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        getEvents()
    },[])
    
    async function getEvents(){
        let eventsData = await API.getInfo() 
        console.log('props=', loggedUser)
        let currentUserData = eventsData.data.filter(user => user.email === loggedUser)
        console.log('currentUserData =', currentUserData)
        if (currentUserData[0]){
            //console.log('currentUserData=', currentUserData[0])
            //console.log('Prepare to set events', currentUserData[0].events)
            setUser(currentUserData[0])
            setEvents(currentUserData[0].events)
        } else{
            console.log('No currentUserData')
        }
        
    }

    function convertISO(date){
        //var str = '2011-04-11T10:20:30Z';
        var parts = date.slice(0, -1).split('T');
        var dateComponent = parts[0];
        var timeComponent = parts[1];
        console.log('date', dateComponent);
        console.log('time', timeComponent);
        return dateComponent + ' ' + timeComponent
    }
    async function twilioReq(msg,time){
      const result = await fetch('http://localhost:3000/api/twilio',{method:'POST', headers:{'Content-Type': 'application/json'},body:JSON.stringify({message: msg, number:'6478638146'})})
    }

    async function sendMail(user, eventData){
      //console.log(eventData)
      let result = await API.sendReminder(user, eventData)
    }

    return (
        <section>
            <h2>Upcoming Events ({events.length})</h2>
            <ul>{events.length ?
            events.map((event) => {
                return(
                  <div className="card text-center rounded-lg">
                    <div className="card-header">
                      Start: {event.start} 
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{event.title}</h5>
                      <p className="card-text"></p>
                      <a href="/CalendarMain" className="btn btn-primary">View in Calendar</a>
                      <button className="btn btn-primary" onClick={()=>sendMail(user, event)}>Set Reminder</button>

                    </div>
                    <div className="card-footer text-muted">
                      End: {event.end} 
                    </div>
                  </div>
                )
              })
            : <><h4>You have no events 😔</h4>
              <h5>Visit the Calendar to add new events!</h5></>
            }
            </ul>
            
       </section>
    )
}