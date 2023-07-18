import React from 'react';
import {Button} from 'react-bootstrap';
//imported a button


//in this component i used props to get the necessary information
//and firstly made empty variables that will be changes 
function WinOrLose(props){
    
    let message = ' ';
    let messageWord = ' ';
    
    //created a nested function that uses 3 arguments
    //and i split the chosen wordinto an array of letters 
    //then created a variable with the value of "win"
    //then i used a for loop to loop through the array of letters and for 
    //each letter it will check if the correct letters array has that letter
    //and if not it will change status to nothing which means the game is still on
    //and it will check if the wrong letters array length is == 8
    //then status becoms "lose"
    function CheckWinOrLose(correctLetters, wrongLetters, chosenWord){
        let word = chosenWord.split('');
        let status = "win";
    
        for(let i = 0; i < word.length; i++){
            let letter = word[i]
            if(!correctLetters.includes(letter)){
                status = ""
            }
            else if(wrongLetters.length == 8){ 
                status = "lose"
            }
        }
        return status;
    };


    //then i used an if statement to see if the outcome of the function above
    //is == "win" and if it is it will change the value of message and the same goes
    //for the else if but instead it looks to see if the outcome of the function above == "lose"
    if(CheckWinOrLose( props.correctLetters, props.wrongLetters, props.chosenWord) === 'win'){
        message = 'Congratulations, You have Won!';
        props.setPlayable(false);
    
    }
    else if(CheckWinOrLose( props.correctLetters, props.wrongLetters, props.chosenWord) === 'lose'){
        message = 'Unfortunately you have lost...';
        messageWord = `The word was: ${props.chosenWord}`; 
        props.setPlayable(false);
    }

    //created another function that will refresh the page by a click of the button
    //and this will allow the user to play again
    function PlayAgain(){
        window.location.reload()
    }
    
    //in my return i used an iff because this is a popup message
    //to tell the user if they have won or lost
    //so if the message variable value is not equal to nothing then display the 
    //popup with the necessary information else dont display the popup
    return (message != ' ') ? (
        <div className='popup' >
            <div className='popupInner'>
                <h4>{message}</h4>
                <h5>{messageWord}</h5>
                <Button variant='danger' className='closeBtn' onClick={PlayAgain}>PLAY AGAIN</Button>
            </div>
        </div>
    ) : '';
}

export default WinOrLose;