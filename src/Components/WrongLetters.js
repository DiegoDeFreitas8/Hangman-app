import React from 'react';

//in this components i used props and an if statement 
//to make the heading for the wrong letters appear
//as it only has to be more than 1 to appear
//i also used map() to map through the wrong letters array
//and return each letter in that array so the user
//can see the wrong letters they have chosen
function WrongLetters(props){
    return(
        <div className='wrong'>
            <div>
                <div>
                    <h3>
                        {props.wrongLetters.length > 0 ? "WRONG LETTERS" : ''}
                    </h3>
                </div>
                <div className='wrong-container'>
                    <p className='wrongLetters'>
                        {props.wrongLetters.map((letter, index) => {
                            return(
                                <h4 key={index}>{letter}, </h4>
                            )
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WrongLetters;