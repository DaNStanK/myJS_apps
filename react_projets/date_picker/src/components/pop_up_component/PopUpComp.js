import './PopUpComp.css'

export const PopUpComp = ({ selectHour, partOfDay, date, setView }) => {

  return (
    <div className="pop-up-background">
      <div className="pop-up-window">
        <i 
          className="fa-solid fa-xmark"
          onClick={() => setView(false)}
        ></i>
        <p
          className={'app-button'}
        >{`Your appointment is set to ${selectHour} at ${partOfDay}, ${date.toDateString()}`}</p>
      </div>
    </div> 
  )
}