// hooks
import { useState, date } from 'react';

// components
import { DayPartComp } from '../day_part_component/DayPartComp';
import { TimeComp } from '../time_component/TimeComp';

// styles
import './MiddleComp.css'


export const MiddleComp = ({ setPartOfDay, setSelectHour }) => {

  // setting states for responsiveness of the users choice
  const [morning, setMorning] = useState(false);  
  const [afternoon, setAfternoon] = useState(false);
  const [evening, setEvening] = useState(false);  

  return (
    <div className='middle-section'>
      <DayPartComp 
        setPartOfDay={setPartOfDay}
        morning={morning}
        setMorning={setMorning}
        afternoon={afternoon}
        setAfternoon={setAfternoon}
        evening={evening}
        setEvening={setEvening}
      />
      <TimeComp 
        date={date} 
        setSelectHour={setSelectHour}
        morning={morning}
        afternoon={afternoon}
        evening={evening} 
      />
    </div>
  )
}