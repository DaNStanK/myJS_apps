import './App.css';
import { useEffect, useState } from "react";
import { SingleCard } from './components/SingleCard';
import { cardImages } from './mockData/cardImages';


function App() {
  // setting the state of the cards
  const [ cards, setCards ] = useState([]);
  
  // setting the state of the turns per game
  const [ turns, setTurns ] = useState(0);

  // setting the state of the clicked cards
  const [ choiceOne, setChoiceOne] = useState(null);
  const [ choiceTwo, setChoiceTwo] = useState(null);
  
  // state needed for limiting the user to click more then two cards at before comparing the values of the those two cards
  const [ disabled, setDisabled ] = useState(false);

  // shuffle cards function and resetting the choices and turns
  const shuffleCards = () => {    
    // duplicating the cards and adding random order in the array
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5) // if random number is positive sort will switch the order and when negative will remain as it is
      .map(card => ({ ...card, id: Math.random()})); // adding id property for latter mapping and using i to ensure not repeating numbers appear
      
      // setting cards value to shuffledCards
      setCards(shuffledCards);
      console.log(cards);

    // resetting choice if there were any
    setChoiceOne(null);
    setChoiceTwo(null);

    // resetting the turns to 0
    setTurns(0);
  };

  // setting choices values
  const handleChoice = (card) => {
    // ternary operator to check which value should be set on each click on the cards
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare choices
  useEffect(() => {
    // checking if the two choices have value
    if(choiceOne && choiceTwo) {      
      setDisabled(true); // after matching setting it to true will disable the client to continue clicking on other cards and wait for the resetTurns function to execute  
      
      // comparing the src property value to see if they are the same
      if(choiceOne.src === choiceTwo.src) {

        // changing the matched property only on the matched cards to true
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurns();
      } else {
        // setting one second delay before resetting the turns if there is no match in the chosen cards
        setTimeout(() => resetTurns(), 1000);
      }      
    }
  }, [choiceOne, choiceTwo]);  // each time we have change in the state of this variables the function inside this hook is called

  // setting shuffled cards at page rendering 
  useEffect(() => {
    shuffleCards();
  }, []);

   // reset choices and increase turn
   const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(previousTurns => previousTurns + 1);
    setDisabled(false);
  }

  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card => (        
          <SingleCard 
            card={card} 
            key={card.id} 
            handleChoice={handleChoice}
            flipped={ card === choiceOne || card === choiceTwo  || card.matched } // need this boolean prop for css class styling
            disabled={disabled}
          />      
        ))}
      </div>
      <h3>{`Turns: ${turns}`}</h3>
    </div>
  );
}

export default App;
