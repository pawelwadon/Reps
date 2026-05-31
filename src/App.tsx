import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '../pages/Index';
import Workouts from '../pages/Workouts';
import Exercises from '../pages/Exercises';
import Statistics from '../pages/Statistics';
import Profile from '../pages/Profile';
import Navbar from '../components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index path='' element={<Index/>}/>
        <Route path='/workouts' element={<Workouts/>}/>
        <Route path='/exercises' element={<Exercises/>}/>
        <Route path='/statistics' element={<Statistics/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
};