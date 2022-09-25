// styles
import './DateComp.css';

import Calendar from 'react-calendar';

export const DateComp = ({ date, setDate }) => { 

  return (
    <div className='container'>
      <div className='calendar-container'>
        <Calendar 
          onChange={setDate} 
          value={date}
          minDate={new Date()}
        />
      </div>      
    </div>
  )
}