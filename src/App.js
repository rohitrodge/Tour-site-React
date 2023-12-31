
import { useState } from 'react';
import './App.css';
import data from './data'
import Tours  from './components/Tours';


const App = () => {

const[tours, setTours] = useState(data);


{/* Remove Tour from tours function*/}

function removeTour(id){
  const newTour = tours.filter(tour => tour.id !== id);
  setTours(newTour);
}

if(tours.length === 0 ) {
  return(
    <div className="refresh">
      <h2> Happy Jouney !</h2>
      <button className= "btn-white" onClick={() => setTours(data)}>
        Refresh 
        </button>
    </div>
  ) 
}

  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}> </Tours>
    </div>
  );
}
  
export default App;
