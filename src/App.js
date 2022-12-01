import {Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Navbar from './Components/NavBar/Navbar';
import Crew from './Components/Pages/Crew/Crew';
import Destination from './Components/Pages/Destination/Destination';
import Technology from './Components/Pages/Technology/Technology';

function App() {
  return (
    <div>
      <Navbar />
     <Home />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destination' element={<Destination />} />
      <Route path='/crew' element={<Crew />} />
      <Route path='/technology' element={<Technology />} />
     </Routes>
    </div>
  );
}

export default App;
