// style
import './App.css';

// components
import { HeaderComp } from './components/header_component/HeaderComp';
import { DateComp } from './components/date_component/DateComp';
import { MiddleComp } from './components/middle_component/MiddleComp';
import { PopUpComp } from './components/pop_up_component/PopUpComp';

// hooks
import { useState } from 'react'

function App() {
  // setting the states of users choice per each section
  const [date, setDate] = useState(new Date());
  const [partOfDay, setPartOfDay] = useState('');
  const [selectHour, setSelectHour] = useState('');
  const [view, setView] = useState(false);

  return (

    <div className="App">
      <HeaderComp />
      <DateComp 
        date={date} 
        setDate={setDate} 
      />
      <MiddleComp
        date={date}
        setPartOfDay={setPartOfDay}
        setSelectHour={setSelectHour}
      />
      <button
        onClick={() => setView(true)}
        className={'app-button'}
      >APPLY</button>
      {view &&
        <PopUpComp
          setView={setView}
          selectHour={selectHour}
          partOfDay={partOfDay}
          date={date} 
        />}
    </div>
  );
}

export default App;
