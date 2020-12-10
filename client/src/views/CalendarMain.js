import React, { useState, useEffect, useContext } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import API from '../utils/API'
import {UserContext} from '../UserContext'
import { v4 as uuidv4 } from 'uuid'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function CalendarMain() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [eventList, setEventList] = useState([])
  const {userInfo, setUserInfo} = useContext(UserContext)
  const [userEmail, setUserEmail] = useState("")
  const loggedUser = localStorage.getItem('user')
  const [title, setTitle] = useState("")
  const [selectInfo, setSelectInfo] = useState({})
  const [clickInfo, setClickInfo] = useState({})

  useEffect(() => {
    getEvents()
  }, [])


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [openEvent, setOpenEvent] = React.useState(false);

  // handle events for open and close add event modal

  const handleOpen = (eventInfo) => {
    setOpen(true);
    setSelectInfo(eventInfo)
  };

  const handleClose = () => {
    setOpen(false);
  };

  // handle events for open and close delete event dialog

  const handleClickOpen = (clickedInfo) => {
    setOpenEvent(true);
    setClickInfo(clickedInfo)
  };

  const handleClickClose = () => {
    setOpenEvent(false);
  };

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }


  function handleInputChange(event){
    const newEventTitle = event.target.value
    setTitle(newEventTitle)
  }

  function handleDateSelect() {
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clears date selection

    if (title) {
      calendarApi.addEvent({
        id: uuidv4(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick() {
    clickInfo.event.remove()
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  async function addEvents(data){
    
    let newEvent = {
      id: data.event.id,
      title: data.event.title,
      start: data.event.start,
      end: data.event.end,
      allDay: data.event.allDay
    }
    let result = await API.addEvent(newEvent, loggedUser)
  }

  async function getEvents(){
    let result = await API.getInfo()
    if (result.data){
      let currentUserData = result.data.filter(user => user.email === loggedUser)
      console.log('[currentUserData]:', result.data)
      currentUserData[0]?setEventList(currentUserData[0].events):setEventList([])
    
      
    }
    

  }

  async function updateEvent(data){
    let result = await API.updateEvent(data, loggedUser)
  }

  async function deleteEvent(data){
    let result = await API.deleteEvent(data.event.id, loggedUser)
  }

  return (
    <div className="App">
      <div className="container">
        <RenderSidebar handleWeekendsToggle={handleWeekendsToggle} weekendsVisible={weekendsVisible} currentEvents={currentEvents}/>

          {/* Modal for adding event */}
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <button className="btn btn-primary-outline float-right" onClick={handleClose} style={{backgroundColor: "transparent"}}><i class="fas fa-times"></i></button>
            <h2 id="transition-modal-title">Add a title for your event</h2>
            <div id="transition-modal-description">
                <div className="mb-3" >
                  <input onChange={handleInputChange} type="title" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked/>
                  <label className="form-check-label" for="flexSwitchCheckChecked">All Day</label>
                  <button className="btn btn-primary float-right" type="submit" onClick={() => {handleClose(); handleDateSelect()} }> Add to Calendar</button>
                </div>
            </div>
            
          </div>
        </Fade>
      </Modal>

        {/* Modal for deleting event */}
        <Dialog
          open={openEvent}
          onClose={handleClickClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Delete Event
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this event? This action is IRREVERSIBLE.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClickClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {handleClickClose(); handleEventClick()}} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          footerToolbar={{
            left: "",
            center: "",
            right: "",
          }}
          initalView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          events={eventList} //TODO: or use 'events' setting to fetch from a feed
          select={handleOpen}
          eventContent={renderEventContent} // custom render function
          eventClick={handleClickOpen}
          eventsSet={handleEvents}
          eventAdd={(response) => addEvents(response)}
          eventChange={(response) => updateEvent(response)}
          eventRemove={(response) => deleteEvent(response)}
        />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function RenderSidebar(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  return (
    <div>
      <div>
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click on an event to delete it</li>
        </ul>
      </div>
      <div>
        {/* Switch to toggle weekends */}
        <FormControlLabel
        control={
          <Switch
            checked={props.weekendsVisible}
            onChange={props.handleWeekendsToggle}
            name="checkedB"
            color="primary"
          />
        }
        label="Toggle Weekends"
      />
      </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}