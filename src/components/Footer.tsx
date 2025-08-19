import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[--color-ninjaDark] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-[--color-ninjaOrange] rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Coding Ninjas</h3>
                <p className="text-sm text-gray-400">Learn. Code. Succeed.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Empowering students to become coding ninjas with industry-relevant curriculum, 
              expert mentors, and hands-on projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-[--color-ninjaOrange]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.554.894l-1.25 7A2 2 0 005.275 15H19a2 2 0 002-2V9a2 2 0 00-2-2H8.5l-.75-1.5H5a2 2 0 00-2 2z" />
                </svg>
                <span>50,000+ Students Enrolled</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-[--color-ninjaOrange]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>200+ Expert Mentors</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-[--color-ninjaOrange]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Courses</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Data Structures & Algorithms
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Full Stack Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Android Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Python Programming
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Java Foundation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Free Tutorials
                </Link>
              </li>
              <li>
                <Link to="/practice" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Practice Problems
                </Link>
              </li>
              <li>
                <Link to="/interview-prep" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link to="/career-guidance" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Webinars & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/hiring" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  We're Hiring
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-[--color-ninjaOrange] transition-colors duration-200 hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Coding Ninjas</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new courses, tech trends, and career opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[--color-ninjaOrange] focus:ring-2 focus:ring-[--color-ninjaOrange]/20 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-[--color-ninjaOrange] text-white rounded-2xl font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {currentYear} Coding Ninjas. All rights reserved.
            </div>
            
            {/* Social Media Links - replaced inline SVGs with direct icon links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/codingninjas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Coding Ninjas on LinkedIn"
                className="text-gray-400 hover:text-[--color-ninjaOrange] transition-colors duration-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 filter invert"
                />
              </a>

              <a
                href="https://www.instagram.com/codingninjas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Coding Ninjas on Instagram"
                className="text-gray-400 hover:text-[--color-ninjaOrange] transition-colors duration-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 filter invert"
                />
              </a>

              <a
                href="https://x.com/CodingNinjas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Coding Ninjas on X"
                className="text-gray-400 hover:text-[--color-ninjaOrange] transition-colors duration-200"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/x.svg"
                  alt="X"
                  className="w-6 h-6 filter invert"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer