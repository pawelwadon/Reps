import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '../pages/Index';
import Workouts from '../pages/Workouts';
import Exercises from '../pages/Exercises';
import Statistics from '../pages/Statistics';
import Profile from '../pages/Profile';
import Sidebar from '../components/Sidebar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="sm:flex sm:min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}