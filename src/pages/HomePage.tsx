import { Link } from 'react-router-dom'
import CourseShowcase from '../components/CourseShowcase'

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[--color-ninjaDark] via-gray-900 to-[--color-ninjaDark] text-white py-24 lg:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[--color-ninjaOrange] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <span className="w-2 h-2 bg-[--color-ninjaOrange] rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Trusted by 50,000+ students</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
                Master{' '}
                <span className="text-[--color-ninjaOrange]">Coding</span>{' '}
                Skills with Industry Experts
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                Learn programming from top industry professionals with hands-on projects, 
                live classes, and personalized mentorship. Start your coding journey today!
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <Link 
                  to="/courses" 
                  className="px-10 py-5 bg-[--color-ninjaOrange] text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                >
                  Explore Courses
                </Link>
                <button className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[--color-ninjaDark] transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-8 text-base text-gray-400">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Live Classes</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">1-on-1 Mentorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Job Guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[--color-ninjaOrange] to-orange-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 text-[--color-ninjaDark] shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[--color-ninjaOrange] rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Featured Course</h3>
                      <p className="text-gray-600">Most Popular</p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Data Structures & Algorithms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Web Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="font-medium">Machine Learning</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-[--color-ninjaOrange]">₹999</span>
                      <span className="text-lg text-gray-500 line-through">₹1999</span>
                    </div>
                    <button className="w-full py-4 bg-[--color-ninjaOrange] text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold text-[--color-ninjaOrange] mb-4 group-hover:scale-110 transition-transform duration-300">50K+</div>
              <div className="text-gray-600 font-medium text-lg">Students Enrolled</div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold text-[--color-ninjaOrange] mb-4 group-hover:scale-110 transition-transform duration-300">200+</div>
              <div className="text-gray-600 font-medium text-lg">Expert Mentors</div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold text-[--color-ninjaOrange] mb-4 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-gray-600 font-medium text-lg">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-5xl lg:text-6xl font-bold text-[--color-ninjaOrange] mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-600 font-medium text-lg">Companies Hiring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[--color-ninjaDark] mb-6">
              Explore Our Course Categories
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              Choose from a wide range of programming courses designed by industry experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Programming Fundamentals */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-[--color-ninjaOrange]/20 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[--color-ninjaDark] mb-6">Programming Fundamentals</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">Master the basics of programming with our comprehensive courses in Java, Python, and C++.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Java Foundation</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Python for Beginners</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>C++ Programming</span>
                </div>
              </div>
              <Link to="/courses" className="inline-flex items-center gap-3 text-[--color-ninjaOrange] font-bold text-lg hover:gap-4 transition-all duration-300">
                Explore Courses
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Web Development */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-[--color-ninjaOrange]/20 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[--color-ninjaDark] mb-6">Web Development</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">Build modern web applications with our full-stack development courses.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Full Stack Web Development</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>React.js Development</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Node.js Backend</span>
                </div>
              </div>
              <Link to="/courses" className="inline-flex items-center gap-3 text-[--color-ninjaOrange] font-bold text-lg hover:gap-4 transition-all duration-300">
                Explore Courses
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Data Science */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-[--color-ninjaOrange]/20 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[--color-ninjaDark] mb-6">Data Science</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">Master data analysis, machine learning, and AI with Python and advanced tools.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Machine Learning</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Python for Data Science</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Deep Learning</span>
                </div>
              </div>
              <Link to="/courses" className="inline-flex items-center gap-3 text-[--color-ninjaOrange] font-bold text-lg hover:gap-4 transition-all duration-300">
                Explore Courses
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <CourseShowcase />

      {/* Testimonials Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[--color-ninjaDark] mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              Hear from our successful students who have transformed their careers with Coding Ninjas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                "Coding Ninjas helped me transition from a non-tech background to a successful software developer. The mentors are amazing and the curriculum is industry-relevant."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[--color-ninjaOrange] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <div className="font-bold text-[--color-ninjaDark] text-lg">Amit Kumar</div>
                  <div className="text-gray-600">Software Developer at Google</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                "The DSA course at Coding Ninjas was exceptional. I learned problem-solving techniques that helped me crack interviews at top tech companies."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[--color-ninjaOrange] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
                <div>
                  <div className="font-bold text-[--color-ninjaDark] text-lg">Priya Sharma</div>
                  <div className="text-gray-600">SDE at Amazon</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                "Full Stack Web Development course gave me the skills to build complete applications. The project-based learning approach was perfect for me."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[--color-ninjaOrange] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <div>
                  <div className="font-bold text-[--color-ninjaDark] text-lg">Rahul Verma</div>
                  <div className="text-gray-600">Full Stack Developer at Microsoft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[--color-ninjaDark] to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-[--color-ninjaOrange] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of students who have successfully transformed their careers with Coding Ninjas. 
            Start learning today and become a coding ninja!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/courses" 
              className="px-10 py-5 bg-[--color-ninjaOrange] text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Get Started Now
            </Link>
            <button className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[--color-ninjaDark] transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
