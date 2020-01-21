import React, {useState} from 'react';
import './App.css';

const EventList = ({ plans, changePlans }) => {
  console.log( plans );
  return (
    <ul>
      {
        plans.map( (plan, idx) => {
          return (
            <li key={ idx } >
              <p>{plan.date.toDateString()} {plan.title}</p>
            </li>
          );
        })
      }
    </ul>
  );
};

function CreateEvent ({onChange, onSubmit, plan}) {
  return(
    <form id="today" onSubmit={ onSubmit }>
        <input name='date' value={ plan.date } onChange={onChange}/>
        <input name='title' value={ plan.title }onChange={onChange}/>
        <input name='content' value={ plan.content } onChange={onChange}/>
        <button disabled={!plan.title && !plan.content}>Save Event</button>
    </form>
  );
}

function App() {

  // Initialize header
  const today = new Date();
  const currentDay = today.getDay();

  let dayString = '';
  switch ( currentDay ) {
    case 0: dayString = 'Sunday';
      break;
    case 1: dayString = 'Monday';
      break;
    case 2: dayString = 'Tuesday';
      break;
    case 3: dayString = 'Wednesday';
      break;
    case 4: dayString = 'Thursday';
      break;
    case 5: dayString = 'Friday';
      break;
    case 6: dayString = 'Saturday';
      break;
    default:dayString = 'Saturday';
  }

  // Initialize useState
  const [ plans, setPlans ] = useState([]);
  let [ plan, setPlan] = useState({date: '', title: '', content:''});

  // Initialize event handlers
  const onChange = (ev)=> {
    console.log("In onChange", ev.target);
    setPlan({...plan, [ev.target.name]:ev.target.value });
  }

  const onSubmit = (ev)=> {
    ev.preventDefault();
    console.log("In onSubmit", ev.target);
    const date = new Date( plan.date );
    setPlans([...plans, {...plan, date}]);
  }

  return (
    <div className="App">
      <h1>The Acme Event Site</h1>
      <h2> Today is: {dayString}</h2>
        <CreateEvent onChange={onChange} onSubmit={onSubmit} plan={plan}/>

      <h2> All {plans.length} Events:</h2>
      <form id="future">
        <EventList plans= { plans }/>
      </form>
      <form id="past">
      </form>
    </div>
  );
}

export default App;
