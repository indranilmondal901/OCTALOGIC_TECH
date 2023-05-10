import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserQ from './components/question1/UserQ';
import WheelQ from './components/question2/WheelQ';
import VehicleQ from './components/question3/VehicleQ';
import VehicleModelQ from './components/question4/VehicleModelQ';
import DateRange from './components/question5/DateRange';
import Bookings from './components/viewBookingsPage/Bookings';
import "../src/App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserQ />} />
        <Route path='/q2' element={<WheelQ />} />
        <Route path='/q3' element={<VehicleQ />} />
        <Route path='/q4' element={<VehicleModelQ />} />
        <Route path='/q5' element={<DateRange />} />
        <Route path='/allbooking' element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
