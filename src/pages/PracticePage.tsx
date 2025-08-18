import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Problem {
  id: number
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  category: string
  solvedBy: number
  acceptanceRate: number
  tags: string[]
}

interface Contest {
  id: number
  title: string
  startTime: string
  duration: string
  participants: number
  prizes: string
  status: 'Upcoming' | 'Ongoing' | 'Completed'
}

function PracticePage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const problems: Problem[] = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Arrays",
      solvedBy: 15420,
      acceptanceRate: 89.5,
      tags: ["Array", "Hash Table", "Two Pointers"]
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      category: "Linked Lists",
      solvedBy: 12340,
      acceptanceRate: 76.2,
      tags: ["Linked List", "Math", "Recursion"]
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      category: "Strings",
      solvedBy: 9870,
      acceptanceRate: 68.9,
      tags: ["String", "Sliding Window", "Hash Table"]
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      category: "Arrays",
      solvedBy: 6540,
      acceptanceRate: 45.2,
      tags: ["Array", "Binary Search", "Divide and Conquer"]
    },
    {
      id: 5,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      solvedBy: 18760,
      acceptanceRate: 92.1,
      tags: ["Stack", "String"]
    },
    {
      id: 6,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      category: "Linked Lists",
      solvedBy: 5430,
      acceptanceRate: 52.8,
      tags: ["Linked List", "Heap", "Divide and Conquer"]
    }
  ]

  const contests: Contest[] = [
    {
      id: 1,
      title: "Weekly Coding Challenge #45",
      startTime: "2024-01-15T10:00:00Z",
      duration: "2 hours",
      participants: 1250,
      prizes: "₹10,000",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "DSA Master Contest",
      startTime: "2024-01-20T14:00:00Z",
      duration: "3 hours",
      participants: 2100,
      prizes: "₹25,000",
      status: "Upcoming"
    },
    {
      id: 3,
      title: "Algorithm Sprint",
      startTime: "2024-01-10T09:00:00Z",
      duration: "1.5 hours",
      participants: 890,
      prizes: "₹5,000",
      status: "Completed"
    }
  ]

  const filteredProblems = problems.filter(problem => {
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty
    const matchesCategory = selectedCategory === 'all' || problem.category === selectedCategory
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         problem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesDifficulty && matchesCategory && matchesSearch
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'text-blue-600 bg-blue-100'
      case 'Ongoing': return 'text-green-600 bg-green-100'
      case 'Completed': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[--color-ninjaDark] to-gray-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Practice Coding Problems
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Sharpen your coding skills with our curated collection of problems, 
              participate in contests, and track your progress
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-[--color-ninjaOrange] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Start Practicing
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[--color-ninjaDark] transition-colors">
                View Leaderboard
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Problems Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[--color-ninjaDark] mb-2">
                    Coding Problems
                  </h2>
                  <p className="text-gray-600">
                    {filteredProblems.length} problems available
                  </p>
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
                  >
                    <option value="all">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="Arrays">Arrays</option>
                    <option value="Strings">Strings</option>
                    <option value="Linked Lists">Linked Lists</option>
                    <option value="Stack">Stack</option>
                    <option value="Trees">Trees</option>
                    <option value="Graphs">Graphs</option>
                  </select>
                </div>
              </div>

              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search problems by title or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Problems List */}
              <div className="space-y-4">
                {filteredProblems.map((problem) => (
                  <div key={problem.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-[--color-ninjaDark] hover:text-[--color-ninjaOrange] cursor-pointer">
                            {problem.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {problem.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span>{problem.solvedBy.toLocaleString()} solved</span>
                          <span>{problem.acceptanceRate}% acceptance</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-[--color-ninjaOrange] text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
                          Solve
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                          Discuss
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProblems.length === 0 && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No problems found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search query</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contests */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[--color-ninjaDark] mb-4">Upcoming Contests</h3>
              <div className="space-y-4">
                {contests.map((contest) => (
                  <div key={contest.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-[--color-ninjaDark] text-sm">{contest.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contest.status)}`}>
                        {contest.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1 mb-3">
                      <div>📅 {formatDate(contest.startTime)}</div>
                      <div>⏱️ {contest.duration}</div>
                      <div>👥 {contest.participants} participants</div>
                      <div>🏆 {contest.prizes}</div>
                    </div>
                    <button className="w-full px-3 py-2 bg-[--color-ninjaOrange] text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link to="/events" className="text-[--color-ninjaOrange] hover:text-orange-600 text-sm font-medium">
                  View All Contests →
                </Link>
              </div>
            </div>

            {/* Progress Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[--color-ninjaDark] mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Problems Solved</span>
                  <span className="font-semibold text-[--color-ninjaOrange]">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current Streak</span>
                  <span className="font-semibold text-green-600">7 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rank</span>
                  <span className="font-semibold text-blue-600">#1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Points</span>
                  <span className="font-semibold text-purple-600">1,850</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[--color-ninjaOrange] h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">65% to next level</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[--color-ninjaDark] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors text-left">
                  📚 Study Plan
                </button>
                <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-lg font-medium hover:bg-green-100 transition-colors text-left">
                  🎯 Daily Challenge
                </button>
                <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition-colors text-left">
                  📊 Performance Analytics
                </button>
                <button className="w-full px-4 py-3 bg-orange-50 text-orange-700 rounded-lg font-medium hover:bg-orange-100 transition-colors text-left">
                  🏆 Leaderboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticePage
