//imported my css page and a button
import './myStyle.css';
import {Button} from 'react-bootstrap';
import React from 'react';

//this component only appears once it has been triggered to appear
//by a button and this popup is displaying the rules of the game 
//as well as a close button to close the popup
function Popup(props){
    
    function closeClick(){
        props.setTrigger(false)
    }

    return( props.trigger) ? (
        <div className='popup'>
            <div className='popupInner'>
                <ol className='rules'>
                    Rules of the game:
                    <li>This website will pick a random word</li>
                    <li>There will be a blank line for each letter in the word</li>
                    <li>You will start guessing letters by typing them in</li>
                    <li>If you guess the letter correctly, the letter will appear in its correct space</li>
                    <li>If you guess wrong, a part of the hangman will be drawn</li>
                    <li>You will win if you are able to guess the entire word correctly</li>
                    <li>You will lose if the entire hangman is drawn</li>
                </ol>
                <Button variant='danger' className='closeBtn' onClick={closeClick}>CLOSE</Button>
            </div>
        </div>
    ) : "";
}

export default Popup;