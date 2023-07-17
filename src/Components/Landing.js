//imported a button and my header component
import { Button } from "react-bootstrap";
import Header from "./Header";

//in this components i display my header components as well as
//a button to direct the user to the hangman game
function Landing(){
    return (
        <div>
            <div>
                <Header/>
            </div><br/>
            <h3 className="h3">Do you challenge yourself to a game of hangman ?</h3><br/>
            <Button href="/game" variant='primary' className="play">PLAY HANGMAN</Button>
        </div>
    )
}

export default Landing;