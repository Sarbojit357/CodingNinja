import { useState } from 'react'

interface EventType {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  mode: string;
  price: number;
  originalPrice: number;
  seats: number;
  availableSeats: number;
  image: string;
  instructor: string;
  company: string;
  topics: string[];
  highlights: string[];
}

function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null)
  const [showRegistration, setShowRegistration] = useState(false)

  const categories = [
    { id: 'all', name: 'All Events', count: 12 },
    { id: 'workshop', name: 'Workshops', count: 4 },
    { id: 'webinar', name: 'Webinars', count: 3 },
    { id: 'hackathon', name: 'Hackathons', count: 2 },
    { id: 'competition', name: 'Competitions', count: 2 },
    { id: 'meetup', name: 'Meetups', count: 1 }
  ]

  const events = [
    {
      id: 1,
      title: "Advanced DSA Workshop",
      description: "Join us for an intensive 2-day workshop on advanced data structures and algorithms. Learn from industry experts and practice with real coding problems.",
      category: "workshop",
      date: "2024-02-15",
      time: "10:00 AM - 6:00 PM",
      duration: "2 days",
      location: "Bangalore",
      mode: "Offline",
      price: 999,
      originalPrice: 1999,
      seats: 50,
      availableSeats: 23,
      image: "bg-blue-500",
      instructor: "Rahul Kumar",
      company: "Google",
      topics: ["Advanced Trees", "Graph Algorithms", "Dynamic Programming", "Interview Prep"],
      highlights: ["Live Coding Sessions", "Problem Solving", "Mock Interviews", "Certificate"]
    },
    {
      id: 2,
      title: "Web Development Masterclass",
      description: "Master modern web development with React, Node.js, and cloud deployment. Build real projects and deploy them live.",
      category: "workshop",
      date: "2024-02-20",
      time: "9:00 AM - 5:00 PM",
      duration: "3 days",
      location: "Mumbai",
      mode: "Hybrid",
      price: 1499,
      originalPrice: 2999,
      seats: 40,
      availableSeats: 15,
      image: "bg-green-500",
      instructor: "Priya Sharma",
      company: "Amazon",
      topics: ["React Hooks", "Node.js Backend", "Database Design", "AWS Deployment"],
      highlights: ["Project Building", "Live Deployment", "Code Reviews", "Portfolio"]
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description: "Introduction to machine learning concepts, algorithms, and practical implementation using Python and popular ML libraries.",
      category: "webinar",
      date: "2024-02-18",
      time: "7:00 PM - 9:00 PM",
      duration: "2 hours",
      location: "Online",
      mode: "Online",
      price: 299,
      originalPrice: 599,
      seats: 200,
      availableSeats: 89,
      image: "bg-purple-500",
      instructor: "Anjali Patel",
      company: "Microsoft",
      topics: ["ML Basics", "Supervised Learning", "Python Libraries", "Real Applications"],
      highlights: ["Live Demo", "Q&A Session", "Resource Kit", "Recording Access"]
    },
    {
      id: 4,
      title: "24-Hour Coding Hackathon",
      description: "Build innovative solutions in 24 hours. Work in teams, learn new technologies, and win exciting prizes.",
      category: "hackathon",
      date: "2024-02-25",
      time: "10:00 AM - 10:00 AM",
      duration: "24 hours",
      location: "Delhi",
      mode: "Offline",
      price: 499,
      originalPrice: 999,
      seats: 100,
      availableSeats: 45,
      image: "bg-orange-500",
      instructor: "Vikram Singh",
      company: "Flipkart",
      topics: ["Team Building", "Rapid Prototyping", "Pitch Presentation", "Networking"],
      highlights: ["Prizes Worth ₹2L", "Mentorship", "Food & Snacks", "Swag Kit"]
    },
    {
      id: 5,
      title: "System Design Interview Prep",
      description: "Prepare for system design interviews with real case studies, scalability discussions, and hands-on design exercises.",
      category: "webinar",
      date: "2024-02-22",
      time: "6:00 PM - 8:00 PM",
      duration: "2 hours",
      location: "Online",
      mode: "Online",
      price: 399,
      originalPrice: 799,
      seats: 150,
      availableSeats: 67,
      image: "bg-red-500",
      instructor: "Suresh Verma",
      company: "Netflix",
      topics: ["System Architecture", "Scalability", "Database Design", "Load Balancing"],
      highlights: ["Case Studies", "Interview Tips", "Practice Problems", "Expert Q&A"]
    },
    {
      id: 6,
      title: "Tech Career Meetup",
      description: "Network with industry professionals, learn about career opportunities, and get insights into the tech industry.",
      category: "meetup",
      date: "2024-02-28",
      time: "6:00 PM - 9:00 PM",
      duration: "3 hours",
      location: "Pune",
      mode: "Offline",
      price: 199,
      originalPrice: 399,
      seats: 80,
      availableSeats: 32,
      image: "bg-indigo-500",
      instructor: "Rajesh Kumar",
      company: "Infosys",
      topics: ["Career Growth", "Industry Trends", "Networking", "Mentorship"],
      highlights: ["Networking", "Panel Discussion", "Refreshments", "Career Guidance"]
    }
  ]

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTimeRemaining = (dateString: string) => {
    const eventDate = new Date(dateString).getTime();
    const now = new Date().getTime();
    const diffTime = eventDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) return 'Event ended'
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    return `${diffDays} days left`
  }

  const handleEventClick = (event: EventType) => {
    setSelectedEvent(event)
    setShowRegistration(false)
  }

  const handleRegister = () => {
    setShowRegistration(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[--color-ninjaDark] text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-300">
            Join our exciting events, workshops, and hackathons to enhance your skills and network with industry experts
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Events</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for events..."
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
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent">
                <option value="date">Date (Earliest First)</option>
                <option value="price">Price (Low to High)</option>
                <option value="seats">Available Seats</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredEvents.length} of {events.length} events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border cursor-pointer" onClick={() => handleEventClick(event)}>
              {/* Event Image */}
              <div className={`h-48 ${event.image} flex items-center justify-center relative`}>
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {categories.find(c => c.id === event.category)?.name}
                </div>
                
                {/* Time Remaining Badge */}
                <div className="absolute top-4 right-4 bg-[--color-ninjaOrange] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {getTimeRemaining(event.date)}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                {/* Title and Description */}
                <h3 className="text-xl font-semibold mb-2 text-[--color-ninjaDark]">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                {/* Instructor */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                    {event.instructor.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{event.instructor}</p>
                    <p className="text-xs text-gray-500">{event.company}</p>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{event.time} • {event.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{event.location} • {event.mode}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-600">{event.availableSeats} of {event.seats} seats available</span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-[--color-ninjaOrange]">₹{event.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹{event.originalPrice}</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">
                    {Math.round(((event.originalPrice - event.price) / event.originalPrice) * 100)}% OFF
                  </span>
                </div>

                <button className="w-full py-3 bg-[--color-ninjaOrange] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-[--color-ninjaOrange] text-[--color-ninjaOrange] rounded-lg font-semibold hover:bg-[--color-ninjaOrange] hover:text-white transition-colors">
              Load More Events
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search criteria or browse all events</p>
            <button 
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
              }}
              className="px-6 py-2 bg-[--color-ninjaOrange] text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              View All Events
            </button>
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[--color-ninjaDark]">{selectedEvent?.title}</h2>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {!showRegistration ? (
                <div>
                  {/* Event Image */}
                  <div className={`h-64 ${selectedEvent?.image} rounded-lg flex items-center justify-center mb-6`}>
                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Event Details */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Event Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600">{formatDate(selectedEvent?.date || '')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-600">{selectedEvent?.time} • {selectedEvent?.duration}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-600">{selectedEvent?.location} • {selectedEvent?.mode}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="text-gray-600">{selectedEvent?.availableSeats} of {selectedEvent?.seats} seats available</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Instructor</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-xl font-semibold text-gray-700">
                          {selectedEvent?.instructor?.charAt(0)}
                        </div>
                        <div>
                          <p className="text-lg font-medium">{selectedEvent?.instructor}</p>
                          <p className="text-gray-600">{selectedEvent?.company}</p>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-4">Topics Covered</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedEvent?.topics?.map((topic: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedEvent?.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">What You'll Get</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedEvent?.highlights?.map((highlight: string, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and Registration */}
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-[--color-ninjaOrange]">₹{selectedEvent?.price}</span>
                        <span className="text-lg text-gray-500 line-through">₹{selectedEvent?.originalPrice}</span>
                        <span className="text-sm text-green-600 font-medium">
                          {Math.round(((selectedEvent?.originalPrice || 0) - (selectedEvent?.price || 0)) / (selectedEvent?.originalPrice || 1) * 100)}% OFF
                        </span>
                      </div>
                      <button 
                        onClick={handleRegister}
                        className="px-8 py-3 bg-[--color-ninjaOrange] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-6">Event Registration</h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">College/Company</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent" />
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button 
                        type="button"
                        onClick={() => setShowRegistration(false)}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      >
                        Back to Details
                      </button>
                      <button 
                        type="submit"
                        className="px-6 py-2 bg-[--color-ninjaOrange] text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                      >
                        Complete Registration
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventsPage
