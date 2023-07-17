//imported the necessary components aswell as
//use state and use effect
import Header from "./Header";
import Word from './Word'
import WrongLetters from "./WrongLetters";
import Picture from "./Picture";
import WinOrLose from "./WinOrLose";
import { useState, useEffect } from "react";

//created an array of words for the site to choose from
//and gave that random word a variable name to use
const words = ["dog", "cat", "mouse"];
const index = Math.floor(Math.random() * words.length);
const chosenWord = words[index];

//in this components i used use state to keep track of the state of 
//if the game is playable and the correct and wrong letters arrays
//and displayed the necessary conent from the imported components as well
//as the props given
function Game(){

    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    //i used use effect here to create a keydown event listener
    //and what it does is it checks to see if the random word
    //has the letter the user types and then checks if the correct letters
    //array has that letter or not and if not it pushes that letter
    //and if the chosen word doesnt have the letter the user picks 
    //then it checks if the wrong letters array has that letter and then if it doesnt 
    //it pushes that letter
    //also this removes the event listener so that the program doesnt create so many
    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                if (chosenWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    }
                    
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter]);
                    } 
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);
    
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);
    

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <h2>GUESS THE WORD</h2>
                <Picture wrongLetters={wrongLetters}/>
                <WrongLetters wrongLetters={wrongLetters}/>
                <Word selectedWord = {chosenWord} correctLetters = {correctLetters}/>
                <WinOrLose correctLetters={correctLetters} wrongLetters={wrongLetters} chosenWord={chosenWord} setPlayable={setPlayable}/>
            </div>
            
        </div>
    )
}

export default Game;