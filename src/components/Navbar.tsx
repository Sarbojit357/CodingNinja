import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[--color-ninjaOrange] rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[--color-ninjaDark]">Coding Ninjas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Courses Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 font-medium py-2"
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                <span>Courses</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Courses Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-96 bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-[--color-ninjaDark] mb-4 text-lg">Programming</h3>
                      <div className="space-y-3">
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">Java Foundation</Link>
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">Python for Beginners</Link>
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">C++ Programming</Link>
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">Data Structures & Algorithms</Link>
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">Advanced Data Structures</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[--color-ninjaDark] mb-4 text-lg">Development</h3>
                      <div className="space-y-3">
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">Full Stack Web Development</Link>
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">React.js Development</Link>
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">Machine Learning</Link>
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">Android Development</Link>
                        <Link to="/courses" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium">iOS Development</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link to="/courses" className="block text-center py-3 px-6 bg-[--color-ninjaOrange] text-white rounded-xl hover:bg-orange-600 transition-colors font-semibold text-lg">
                      View All Courses
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice */}
            <Link 
              to="/practice" 
              className={`text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 font-medium py-2 ${isActive('/practice') ? 'text-[--color-ninjaOrange]' : ''}`}
            >
              Practice
            </Link>

            {/* Events */}
            <Link 
              to="/events" 
              className={`text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 font-medium py-2 ${isActive('/events') ? 'text-[--color-ninjaOrange]' : ''}`}
            >
              Events
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 font-medium py-2"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Resources Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <div className="p-6">
                  <div className="space-y-4">
                    <Link to="/community" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium py-2">Community</Link>
                    <Link to="/blog" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium py-2">Blog</Link>
                    <Link to="/tutorials" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium py-2">Tutorials</Link>
                    <Link to="/interview-prep" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium py-2">Interview Prep</Link>
                    <Link to="/career-guidance" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium py-2">Career Guidance</Link>
                    <Link to="/coding-ninjas-studio" className="block text-gray-700 hover:text-[--color-ninjaOrange] transition-colors font-medium py-2">Coding Ninjas Studio</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Hiring */}
            <Link 
              to="/hiring" 
              className={`text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 font-medium py-2 ${isActive('/hiring') ? 'text-[--color-ninjaOrange]' : ''}`}
            >
              Hiring
            </Link>
          </div>

          {/* Right Side - Auth & Search */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-72 pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent text-gray-700 placeholder-gray-500"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Login */}
            <Link 
              to="/login" 
              className="text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 font-medium text-lg"
            >
              Login
            </Link>

            {/* Sign Up */}
            <Link 
              to="/signup" 
              className="px-8 py-3 bg-[--color-ninjaOrange] text-white rounded-xl hover:bg-orange-600 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 p-2"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-6">
            <div className="space-y-6">
              {/* Mobile Search */}
              <div className="relative px-4">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
                />
                <svg className="absolute left-8 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Mobile Menu Items */}
              <div className="px-4 space-y-4">
                <div>
                  <button 
                    onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    className="flex items-center justify-between w-full text-left text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 font-medium py-3 text-lg"
                  >
                    <span>Courses</span>
                    <svg className={`w-5 h-5 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isCoursesOpen && (
                    <div className="ml-4 mt-3 space-y-3">
                      <Link to="/courses" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Java Foundation</Link>
                      <Link to="/courses" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Python for Beginners</Link>
                      <Link to="/courses" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Full Stack Web Development</Link>
                      <Link to="/courses" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Machine Learning</Link>
                      <Link to="/courses" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Data Structures & Algorithms</Link>
                    </div>
                  )}
                </div>

                <Link 
                  to="/practice" 
                  className={`block py-3 text-lg ${isActive('/practice') ? 'text-[--color-ninjaOrange]' : 'text-[--color-ninjaDark] hover:text-[--color-ninjaOrange]'} transition-colors duration-200`}
                >
                  Practice
                </Link>

                <Link 
                  to="/events" 
                  className={`block py-3 text-lg ${isActive('/events') ? 'text-[--color-ninjaOrange]' : 'text-[--color-ninjaDark] hover:text-[--color-ninjaOrange]'} transition-colors duration-200`}
                >
                  Events
                </Link>

                <div>
                  <button 
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    className="flex items-center justify-between w-full text-left text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 font-medium py-3 text-lg"
                  >
                    <span>Resources</span>
                    <svg className={`w-5 h-5 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isResourcesOpen && (
                    <div className="ml-4 mt-3 space-y-3">
                      <Link to="/community" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Community</Link>
                      <Link to="/blog" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Blog</Link>
                      <Link to="/tutorials" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Tutorials</Link>
                      <Link to="/interview-prep" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Interview Prep</Link>
                      <Link to="/career-guidance" className="block text-gray-600 hover:text-[--color-ninjaOrange] transition-colors py-2">Career Guidance</Link>
                    </div>
                  )}
                </div>

                <Link 
                  to="/hiring" 
                  className={`block py-3 text-lg ${isActive('/hiring') ? 'text-[--color-ninjaOrange]' : 'text-[--color-ninjaDark] hover:text-[--color-ninjaOrange]'} transition-colors duration-200`}
                >
                  Hiring
                </Link>

                {/* Mobile Auth */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <Link 
                    to="/login" 
                    className="block text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] transition-colors duration-200 font-medium py-3 text-lg"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block px-8 py-3 bg-[--color-ninjaOrange] text-white rounded-xl hover:bg-orange-600 transition-colors duration-200 font-semibold text-lg text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar


