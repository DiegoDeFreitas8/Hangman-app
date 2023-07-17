//imported all my images for the drawing 
//of the hangman
import React from 'react';
import img2 from './hangmandrawings/state2.GIF';
import img3 from './hangmandrawings/state3.GIF';
import img4 from './hangmandrawings/state4.GIF';
import img5 from './hangmandrawings/state5.GIF';
import img6 from './hangmandrawings/state6.GIF';
import img7 from './hangmandrawings/state7.GIF';
import img8 from './hangmandrawings/state8.GIF';
import img9 from './hangmandrawings/state9.GIF';
import img10 from './hangmandrawings/state10.gif';
import img11 from './hangmandrawings/state11.GIF';

//in this components i used props and checked the length 
//of the wrong letters array
//then i used if statements to display the images 
function Picture(props){
    const errors = props.wrongLetters.length;

    
    return(
        <div className='picture'>
            {errors == 0 ? <img src={img2} alt='img2' className='image'/> : ''}
            {errors == 1 ? <img src={img3} alt='img3' className='image'/> : ''}
            {errors == 2 ? <img src={img4} alt='img4' className='image'/> : ''}
            {errors == 3 ? <img src={img5} alt='img5' className='image'/> : ''}
            {errors == 4 ? <img src={img6} alt='img6' className='image'/> : ''}
            {errors == 5 ? <img src={img7} alt='img7' className='image'/> : ''}
            {errors == 6 ? <img src={img8} alt='img8' className='image'/> : ''}
            {errors == 7 ? <img src={img9} alt='img9' className='image'/> : ''}
            {errors == 8 ? <img src={img10} alt='img10' className='image'/> : ''}
            {errors == 9 ? <img src={img11} alt='img11' className='image'/> : ''}
        </div>
    )
}

export default Picture; 