//imported the components as well as route and routes 
import Landing from './Components/Landing';
import Game from './Components/Game'
import {Route, Routes} from 'react-router-dom'
import './App.css';

//in this component i used routes and route to give my main components a path
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route exact path='/game' element={<Game />}/>

      </Routes>
    </div>
  );
}

export default App;
