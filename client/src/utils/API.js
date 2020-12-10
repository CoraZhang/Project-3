/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default {
    // event requests
    addEvent: function(eventData, userData){
        return axios.post("/api/events", {events: eventData, user: userData})
    },
    updateEvent: function(eventData, userData){
        return axios.put("/api/events/" + eventData.event.id, {events: eventData, user: userData})
    },
    deleteEvent: async function(id, userData){
        return axios.delete(`/api/events/${id}`, { data: userData })
        // const response = await fetch('/api/events/' + id, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-type': 'application/json'
        //     }
        // })

        // return response

    },
    // note requests
    saveNote: function(noteData, userData){
        return axios.post("/api/notes", {notes: noteData, user: userData} )
    },
    getInfo: function(){
        return axios.get("/api/users")
    },
    addUser: function(userData){
        //console.log('API user data received: ', userData)
        return axios.post("/api/users", userData)
    },
    sendReminder: function(user, eventData){
        return axios.post("/api/reminder", {user: user, events: eventData})
    }
}