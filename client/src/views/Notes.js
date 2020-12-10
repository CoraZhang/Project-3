import React, { Component } from "react";
import { connect } from "react-redux";
import EditNote from "./EditNote";
import API from '../utils/API'
//import noteReducer from ".. /reducers/noteReducer";
class Note extends Component {
  
  componentDidMount(){
    getNotes()
  }

  render() {
    
    const notes = this.props.notes.map((note) => {
      return ( 
        <div className="note">
          <h2 className="note_title">{note.title}</h2>
          <p className="note_message">{note.message}</p>
          <div className="control-buttons">
             <button
              className="edit"
              onClick={
                () =>
                  this.props.dispatch({
                    type: "EDIT_NOTE",
                    id: note.id,
                  })
                //this.props.location.pop("/EditNotes")
              }
            >
              Edit
            </button>

            <button
              className="delete"
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE_NOTE",
                  id: note.id,
                })
              }
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    return notes.length > 0 ? <>{notes}</> : <h2>No Results to Display</h2>;
  }
}

const getNotes = async () => {
  const loggedUser = localStorage.getItem('user')
  let noteData = await API.getInfo()
  console.log('[getNotes] function result=', noteData.data)

  let currentUserData = noteData.data.filter(user => user.email === loggedUser)
    console.log('currentUserData =', currentUserData)
    if (currentUserData[0]){
      if (currentUserData[0].notes.length > 0){
        console.log('Prepare to set events', currentUserData[0].notes)
        currentUserData[0].notes.map((note)=> console.log(note.title))
        this.setState(currentUserData[0].notes)
      }
    } else{
        console.log('No currentUserData')
    }
}

const mapStateToProps = (state) => {
  return {
    notes: state,
  };
};
export default connect(mapStateToProps)(Note);
