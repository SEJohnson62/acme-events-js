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
  const [ plans, setPlans] = useState([]);
  const [ plan, setPlan ] = useState({date: today, title: '', content: ''});
  const onChange = (ev)=> {
    const change = {};
    change[ev.target.name] = ev.target.value;
    setPlan({...setPlan, ...change})
  }
  const onSubmit = (ev)=> {
    ev.preventDefault();
    setPlans([...plans, plan]);
  }
  return (
    <div className="App">
      <h1>The Acme Event Site</h1>
      <h2> Today is:</h2>
      <form onSubmit={ onSubmit }>
        <input name='date' value= {today} onChange={onChange}/>
        <input name='title' value={ plan.title } onChange={onChange}/>
        <input name='content' value={ plan.content } onChange={onChange}/>
        <button>Save Event</button>
      </form>
    </div>
  );
}

export default App;
