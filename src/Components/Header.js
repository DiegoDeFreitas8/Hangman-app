//imported row, button, my popup component, usestate 
//and my css page
import {Row, Button} from 'react-bootstrap';
import Popup from './Popup';
import './myStyle.css'
import React from 'react';
import {useState} from 'react';

//in this header component i am displaying my heading 
//of the page as well as a button that can be clicked and
//i used usestate to change the state of popup
//which will make the popup component appear
function Header(){

    const [popup, setPopup] = useState(false);

    function helpClick(){
        setPopup(true);
    }


    return(
        <div>
            <Row>
            <header className='header'>
                <div className='container'>
                    <div className='hangmanH'>
                        <h1>HANGMAN</h1>
                    </div>
                </div>
                <div className='helpBtn'>
                    <Button variant="success" className='help' onClick={helpClick}>HELP</Button>
                </div>
                
            </header>
            <hr></hr>
            </Row>
            <div>
                <Popup trigger={popup} setTrigger={setPopup}/>
            </div>
        </div>

        
        
    )

}

export default Header;