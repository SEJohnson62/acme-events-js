import React, {useState} from 'react';
import './App.css';


function App() {
  const today = new Date();
  console.log( today );
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
  console.log(dayString);
  const [ plans, setPlans] = useState([]);
  const [ plan, setPlan ] = useState({date: today, title: '', content: ''});
  const onChange = (ev)=> {
    console.log("In onChange")
    const change = {};
    change[ev.target.name] = ev.target.value;
    setPlan({...setPlan, ...change})
  }
  const onSubmit = (ev)=> {
    ev.preventDefault();
    console.log("In onSubmit")
    setPlans([...plans, plan]);
  }
  return (
    <div className="App">
      <h1>The Acme Event Site</h1>
      <h2> Today is: {dayString}</h2>
      <form id="today" onSubmit={ onSubmit }>
        <input name='date' value= {today} onChange={onChange}/>
        <input name='title' value={ plan.title }onChange={onChange}/>
        <input name='content' value={ plan.content } onChange={onChange}/>
        <button disabled={!plan.title && !plan.content}>Save Event</button>
      </form>
      <form id="future">
      </form>
      <form id="past">
      </form>
    </div>
  );
}

export default App;
