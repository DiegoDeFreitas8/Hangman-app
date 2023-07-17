import React from 'react';

//in this component i used props to get the chosen word
//and the correct letters array
//and i split the chosen word into an array of letters and then map
//through that array and for each letter i check if the 
//correct letters array has it and if it does it will display the letter
//and if it doesnt it will just display a line
function Word(props){
    return(
        <div className='word'>
            {props.selectedWord.split('').map((letter, index) => {
                return (
                    <h3 className='letter' key={index}>
                        {props.correctLetters.includes(letter) ? letter : '_'}
                    </h3>
                )
            })}
        </div>
    )
}

export default Word;