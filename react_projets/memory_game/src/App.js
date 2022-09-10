import './App.css';
import { useEffect, useState } from "react";
import { SingleCard } from './SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false }
];

function App() {

  const [ cards, setCards ] = useState([]);
  const [ turns, setTurns ] = useState(0);
  const [ choiceOne, setChoiceOne] = useState(null);
  const [ choiceTwo, setChoiceTwo] = useState(null);
  const [ disabled, setDisabled ] = useState(false);


  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random()}));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo) {
      setDisabled(true);   
      
      if(choiceOne.src === choiceTwo.src) {
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
        setTimeout(() => resetTurns(), 1000);
      }      
    }
  }, [choiceOne, choiceTwo]);

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
            flipped={ card === choiceOne || card === choiceTwo  || card.matched }
            disabled={disabled}
          />      
        ))}
      </div>
      <h3>{`Turns: ${turns}`}</h3>
    </div>
  );
}

export default App;
