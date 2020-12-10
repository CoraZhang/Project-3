const db = require("../models");

async function findAll(req, res) {
  let result = await db.User.find();
  console.log("Retrieved from the Database: ", result);
  res.json(result);
}

async function createUser(req, res) {
  console.log(
    "Controller.create function reached ... Data received: ",
    req.body
  );
  //if statement to detemine if user already exists
  let dbRes = await db.User.find({email: req.body.email})
  if (!(dbRes == false)) {
    console.log('Current user found! =>', dbRes)
    return
  } else {
    let result = await db.User.create(req.body);
    console.log('New user added', result)
  }
  
}

async function addEvent(req, res) {
  const hacksolution = await db.User.find();
  console.log('hack solution: ', JSON.parse(JSON.stringify(hacksolution))[0].events)
  const events = JSON.parse(JSON.stringify(hacksolution))[0].events
  console.log(
    "[usersController addEvent] function reached: req.body=",
    req.body.events
  );
  let result = await db.User.findOneAndUpdate(
    { email: req.body.user },
    { events: [...events,req.body.events] } ,
    function (error, success) {
      if (error) {
        console.log('ERROR!!!', error);
      } else {
        console.log('Successfully added event');
      }
    }
  );
  console.log('addEvent: ', result)
}

async function updateEvent(req, res) {  
  console.log(`New data for event with id ${req.params.id}, ${req.body.events.oldEvent.title} = ${JSON.stringify(req.body.events.event)}`)
  let result = await db.User.findOneAndUpdate({'events.id':req.params.id}, {$set: {'events.$': req.body.events.event}})
  console.log('[updateEvent] function result=', result)
}

async function removeEvent(req, res) {
  console.log(`Deleting item id: ${req.params.id} from the database. req.body=`, req.body);

  let result = await db.User.findOneAndRemove({'event.id': req.params.id}, {$pull: {events: {id: req.params.id}}}, function(err, obj){
    if (err){
      console.log('ERROR!!!', err)
    } else{
      console.log('SUCCESSFULLY deleted item', obj)
    }
  })
  res.send({ message: "Deleted Item" });
}


async function addNote(req, res) {
  const hacksolution = await db.User.find({});
  console.log('hack solution: ', JSON.parse(JSON.stringify(hacksolution))[0].notes)
  const notes = JSON.parse(JSON.stringify(hacksolution))[0].notes
  console.log(
    "[usersController addNote] function reached: req.body.notes=",
    req.body.notes
  );
  let result = await db.User.findOneAndUpdate(
    { email: req.body.user },
    { notes: [...notes,req.body.notes] } ,
    function (error, success) {
      if (error) {
        console.log('ERROR!!!', error);
      } else {
        console.log('Successfully added note');
      }
    }
  );
  console.log('addNote: ', result)
}


module.exports = {
  findAll,
  createUser,
  addEvent,
  updateEvent,
  removeEvent,
  addNote,
};
