import { useState } from 'react'
import { Link } from 'react-router-dom'

function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popularity')

  const categories = [
    { id: 'all', name: 'All Courses', count: 25 },
    { id: 'dsa', name: 'Data Structures & Algorithms', count: 8 },
    { id: 'web', name: 'Web Development', count: 6 },
    { id: 'ml', name: 'Machine Learning & AI', count: 4 },
    { id: 'mobile', name: 'Mobile Development', count: 3 },
    { id: 'devops', name: 'DevOps & Cloud', count: 4 }
  ]

  const courses = [
    {
      id: 1,
      title: "Data Structures & Algorithms with Java",
      description: "Master DSA fundamentals with Java. Learn arrays, linked lists, trees, graphs, and advanced algorithms.",
      category: "dsa",
      price: 999,
      originalPrice: 1999,
      duration: "6 months",
      level: "Beginner to Advanced",
      rating: 4.8,
      students: 15000,
      image: "bg-blue-500",
      features: ["Live Classes", "Project Based", "Interview Prep", "Certificate"],
      instructor: "Rahul Kumar",
      company: "Google"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      description: "Build complete web applications with React, Node.js, and MongoDB. Learn frontend and backend development.",
      category: "web",
      price: 1499,
      originalPrice: 2999,
      duration: "8 months",
      level: "Intermediate",
      rating: 4.7,
      students: 12000,
      image: "bg-green-500",
      features: ["Live Classes", "Project Based", "Mentorship", "Certificate"],
      instructor: "Priya Sharma",
      company: "Amazon"
    },
    {
      id: 3,
      title: "Machine Learning & Artificial Intelligence",
      description: "Learn ML algorithms, deep learning, and build intelligent applications with Python and TensorFlow.",
      category: "ml",
      price: 1999,
      originalPrice: 3999,
      duration: "10 months",
      level: "Advanced",
      rating: 4.9,
      students: 8000,
      image: "bg-purple-500",
      features: ["Live Classes", "Project Based", "Research Papers", "Certificate"],
      instructor: "Anjali Patel",
      company: "Microsoft"
    },
    {
      id: 4,
      title: "Android App Development with Kotlin",
      description: "Build modern Android apps using Kotlin, Jetpack Compose, and Material Design principles.",
      category: "mobile",
      price: 1299,
      originalPrice: 2499,
      duration: "7 months",
      level: "Intermediate",
      rating: 4.6,
      students: 9000,
      image: "bg-indigo-500",
      features: ["Live Classes", "Project Based", "Play Store", "Certificate"],
      instructor: "Vikram Singh",
      company: "Flipkart"
    },
    {
      id: 5,
      title: "DevOps & Cloud Computing",
      description: "Master Docker, Kubernetes, AWS, and CI/CD pipelines for modern software development.",
      category: "devops",
      price: 1799,
      originalPrice: 3499,
      duration: "9 months",
      level: "Intermediate",
      rating: 4.5,
      students: 7000,
      image: "bg-orange-500",
      features: ["Live Classes", "Project Based", "Cloud Labs", "Certificate"],
      instructor: "Rajesh Kumar",
      company: "Infosys"
    },
    {
      id: 6,
      title: "System Design & Architecture",
      description: "Learn to design scalable systems, microservices, and distributed systems for large-scale applications.",
      category: "dsa",
      price: 1599,
      originalPrice: 3199,
      duration: "6 months",
      level: "Advanced",
      rating: 4.8,
      students: 6000,
      image: "bg-red-500",
      features: ["Live Classes", "Case Studies", "Interview Prep", "Certificate"],
      instructor: "Suresh Verma",
      company: "Netflix"
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'students':
        return b.students - a.students
      default:
        return b.students - a.students // popularity
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[--color-ninjaDark] text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-gray-300">
            Choose from our comprehensive range of programming courses designed by industry experts
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Courses</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="students">Most Students</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {sortedCourses.length} of {courses.length} courses
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">View:</span>
            <button className="p-2 text-gray-400 hover:text-[--color-ninjaOrange]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </button>
            <button className="p-2 text-[--color-ninjaOrange]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border">
              {/* Course Image */}
              <div className={`h-48 ${course.image} flex items-center justify-center relative`}>
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white text-gray-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  {course.rating} ⭐
                </div>
                
                {/* Level Badge */}
                <div className="absolute bottom-4 left-4 bg-[--color-ninjaOrange] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {course.level.split(' ')[0]}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                    {categories.find(c => c.id === course.category)?.name}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold mb-2 text-[--color-ninjaDark]">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                {/* Instructor */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                    {course.instructor.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{course.instructor}</p>
                    <p className="text-xs text-gray-500">{course.company}</p>
                  </div>
                </div>

                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-600">{course.students.toLocaleString()}+</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-[--color-ninjaOrange]">₹{course.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹{course.originalPrice}</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">
                    {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                  </span>
                </div>

                <Link to={`/courses/${course.id}`} className="w-full py-3 bg-[--color-ninjaOrange] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors block text-center">
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {sortedCourses.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-[--color-ninjaOrange] text-[--color-ninjaOrange] rounded-lg font-semibold hover:bg-[--color-ninjaOrange] hover:text-white transition-colors">
              Load More Courses
            </button>
          </div>
        )}

        {/* No Results */}
        {sortedCourses.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search criteria or browse all courses</p>
            <button 
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
              }}
              className="px-6 py-2 bg-[--color-ninjaOrange] text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              View All Courses
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursesPage
