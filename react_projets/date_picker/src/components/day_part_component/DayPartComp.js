// styles
import './DayPartComp.css'

// hooks
import { useCallback } from "react";

export const DayPartComp = ({ 
    setPartOfDay, 
    morning, 
    setMorning, 
    afternoon, 
    setAfternoon, 
    evening, 
    setEvening 
  }) => {
  
  // setting the user choice
  const selectOption = useCallback((e) => {
    switch (e.target.innerText) {
      case 'Morning':
        return (
            setPartOfDay(e.target.innerText), 
            setMorning(true),
            setAfternoon(false),
            setEvening(false)
          );
        case 'Afternoon':
        return (
            setPartOfDay(e.target.innerText),
            setAfternoon(true),
            setMorning(false),
            setEvening(false)
          );
      case 'Evening':
        return (
            setPartOfDay(e.target.innerText),
            setEvening(true),
            setMorning(false),
            setAfternoon(false)
          );
      default:
        return console.error();
    }
  }, [setPartOfDay, setEvening, setMorning, setAfternoon]);

  return (

    <div className='middle-day-part-container'>
      {/* ternary check for setting proper class name */}
      <div className={morning ? `inner-day-part-elements-matched` : `inner-day-part-elements`}> 
        <i className="fa-regular fa-sun"></i>
        <p onClick={selectOption}>Morning</p>
      </div>
      {/* ternary check for setting proper class name */}
      <div className={afternoon ? `inner-day-part-elements-matched` : `inner-day-part-elements`}>
        <i className="fa-solid fa-sun"></i>
        <p onClick={selectOption}>Afternoon</p>
      </div>
      {/* ternary check for setting proper class name */}
      <div className={evening ? `inner-day-part-elements-matched` : `inner-day-part-elements`}>
        <i className="fa-regular fa-moon"></i>
        <p onClick={selectOption}>Evening</p>
      </div>
    </div>

  )
}
