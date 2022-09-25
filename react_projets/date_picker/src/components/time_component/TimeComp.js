// styles
import './TimeComp.css';

// import data base
import { morningHours} from '../../mockData/morningHours'
import { afternoonHours } from '../../mockData/afternoonHours';
import { eveningHours } from '../../mockData/eveningHours';

// hooks
import { useState } from 'react';

export const TimeComp = (
  { 
    morning, 
    afternoon, 
    evening, 
    setSelectHour 
  }) => {
  // adding state for later ternary purpose
  const [clicked, setClicked] = useState(null);
  
  const addValue = (id, day) => {
    setClicked(id)
    setSelectHour(day);
  }

  return (

    <div className='time-container'>
      {morning && morningHours.map(hour => (
        <button
          // ternary check for setting proper class name  
          className={(clicked === hour.id) ? 'time-item-checked': 'time-item'} 
          key={hour.id}
          onClick={() => addValue(hour.id, hour.name)}
        >{hour.name}</button>              
      ))}

      {afternoon && afternoonHours.map(hour => (
        <button
          // ternary check for setting proper class name
          className={(clicked === hour.id) ? 'time-item-checked': 'time-item'}
          key={hour.id}
          onClick={() => addValue(hour.id, hour.name)}
        >{hour.name}</button>
      ))}

      {evening && eveningHours.map(hour => (
        <button
          // ternary check for setting proper class name
          className={(clicked === hour.id) ? 'time-item-checked': 'time-item'}
          key={hour.id}
          onClick={() => addValue(hour.id, hour.name)}
        >{hour.name}</button>
      ))}      
    </div>

  )
}