import { Link } from 'react-router-dom'

function CourseShowcase() {
  const featuredCourses = [
    {
      id: 1,
      title: "Data Structures & Algorithms in Java",
      description: "Master DSA fundamentals with Java. Learn problem-solving techniques, time complexity analysis, and crack coding interviews.",
      price: 999,
      originalPrice: 1999,
      duration: "6 months",
      level: "Beginner to Advanced",
      features: ["Live Classes", "1-on-1 Mentorship", "Interview Preparation", "Job Guarantee"],
      rating: 4.8,
      students: "15K+",
      image: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      description: "Build complete web applications with React.js, Node.js, and MongoDB. Learn frontend and backend development.",
      price: 1499,
      originalPrice: 2999,
      duration: "8 months",
      level: "Intermediate",
      features: ["Project-Based Learning", "Live Code Reviews", "Portfolio Building", "Career Support"],
      rating: 4.9,
      students: "12K+",
      image: "bg-gradient-to-br from-green-500 to-green-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      badge: "Best Seller"
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      description: "Master ML algorithms, deep learning, and AI fundamentals. Build real-world projects and deploy ML models.",
      price: 1999,
      originalPrice: 3999,
      duration: "10 months",
      level: "Advanced",
      features: ["Hands-on Projects", "Industry Mentors", "Kaggle Competitions", "Research Papers"],
      rating: 4.7,
      students: "8K+",
      image: "bg-gradient-to-br from-purple-500 to-purple-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: "Trending"
    },
    {
      id: 4,
      title: "Android App Development",
      description: "Create mobile apps for Android using Kotlin and modern development practices. Learn UI/UX design principles.",
      price: 1299,
      originalPrice: 2499,
      duration: "7 months",
      level: "Intermediate",
      features: ["App Store Publishing", "Material Design", "Firebase Integration", "Monetization"],
      rating: 4.6,
      students: "6K+",
      image: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      badge: "New"
    }
  ]

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-[--color-ninjaDark] mb-6">
            Featured Courses
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Choose from our most popular courses designed by industry experts to accelerate your career
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
          {featuredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-[--color-ninjaOrange]/20 hover:-translate-y-2 overflow-hidden group">
              {/* Course Header */}
              <div className={`${course.image} p-8 text-white relative`}>
                {course.badge && (
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold">
                    {course.badge}
                  </div>
                )}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">{course.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Course Details */}
              <div className="p-8">
                {/* Course Info */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[--color-ninjaDark] mb-2">{course.duration}</div>
                    <div className="text-gray-600 text-sm">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[--color-ninjaDark] mb-2">{course.level}</div>
                    <div className="text-gray-600 text-sm">Level</div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Rating and Students */}
                <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-lg font-bold text-[--color-ninjaDark]">{course.rating}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[--color-ninjaDark]">{course.students}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </div>
                
                {/* Pricing and CTA */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-[--color-ninjaOrange]">₹{course.price}</div>
                      <div className="text-lg text-gray-500 line-through">₹{course.originalPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full">
                        {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-[--color-ninjaOrange] text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Courses CTA */}
        <div className="text-center">
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[--color-ninjaDark] text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            View All Courses
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CourseShowcase
