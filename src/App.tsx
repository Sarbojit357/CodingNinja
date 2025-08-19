import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CoursesPage from './pages/CoursesPage'
import PracticePage from './pages/PracticePage'
import EventsPage from './pages/EventsPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Router setup for just the Home route for now */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </main>
    </div>
  )
}
