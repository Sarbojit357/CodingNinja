import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignupPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    selectedCourse: '',
    agreeToTerms: false,
    receiveUpdates: true
  })

  const [step, setStep] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const courses = [
    { id: 'dsa', name: 'Data Structures & Algorithms', price: '₹999', originalPrice: '₹1999' },
    { id: 'web', name: 'Full Stack Web Development', price: '₹1499', originalPrice: '₹2999' },
    { id: 'ml', name: 'Machine Learning', price: '₹1299', originalPrice: '₹2499' },
    { id: 'java', name: 'Java Foundation', price: '₹799', originalPrice: '₹1599' },
    { id: 'python', name: 'Python for Beginners', price: '₹699', originalPrice: '₹1399' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (step < 3) {
      setStep(step + 1)
    } else {
      // Final step: handle account creation
      if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.password) {
        setError('Please fill all required fields.')
        return
      }

      // Client-side confirm password check
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.')
        return
      }

      setLoading(true)
      try {
        // Replace this URL with your real signup endpoint
        const res = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            password: formData.password
          }),
        })

        if (!res.ok) {
          // try to read server error message
          const data = await res.json().catch(() => ({}))
          const message = data?.message || `Signup failed (status ${res.status})`
          // If endpoint not implemented (404) or server returns no useful message, fallback to local dev signup
          if (res.status === 404 || res.status === 500) {
            // dev fallback: save to localStorage and continue
            const users = JSON.parse(localStorage.getItem('mock_users' ) || '[]')
            users.push({ name: `${formData.firstName} ${formData.lastName}`, email: formData.email })
            localStorage.setItem('mock_users', JSON.stringify(users))
            setSuccess('Account created locally (dev fallback). Redirecting to home...')
            setTimeout(() => navigate('/', { replace: true }), 1000)
            return
          }
          throw new Error(message)
        }

        setSuccess('Account created successfully! Redirecting to home...')
        setTimeout(() => navigate('/', { replace: true }), 1000)
      } catch (err: any) {
        // Network error / fetch threw — provide actionable message and fallback option
        const msg = err?.message || 'Something went wrong'
        setError(msg + ' — check network/server. If you are running locally and have no backend, the app will save a mock account.')
        // Fallback: if fetch failed due to network, create a local mock account so UI can proceed during development
        try {
          const users = JSON.parse(localStorage.getItem('mock_users' ) || '[]')
          users.push({ name: `${formData.firstName} ${formData.lastName}`, email: formData.email })
          localStorage.setItem('mock_users', JSON.stringify(users))
          setSuccess('Account created locally (dev fallback). Redirecting to home...')
          setTimeout(() => navigate('/', { replace: true }), 1000)
        } catch {
          // ignore fallback errors
        }
      } finally {
        setLoading(false)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleCourseSelect = (courseId: string) => {
    setFormData(prev => ({ ...prev, selectedCourse: courseId }))
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
          placeholder="Enter your email address"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
          placeholder="Create a strong password"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[--color-ninjaOrange] focus:border-transparent"
          placeholder="Confirm your password"
        />
      </div>

      <div className="flex items-center">
        <input
          id="receiveUpdates"
          name="receiveUpdates"
          type="checkbox"
          checked={formData.receiveUpdates}
          onChange={handleChange}
          className="h-4 w-4 text-[--color-ninjaOrange] focus:ring-[--color-ninjaOrange] border-gray-300 rounded"
        />
        <label htmlFor="receiveUpdates" className="ml-2 block text-sm text-gray-900">
          Receive updates about courses and events
        </label>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Your Course</h3>
        <div className="space-y-3">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseSelect(course.id)}
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                formData.selectedCourse === course.id
                  ? 'border-[--color-ninjaOrange] bg-orange-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{course.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-[--color-ninjaOrange]">{course.price}</span>
                    <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 ${
                  formData.selectedCourse === course.id
                    ? 'border-[--color-ninjaOrange] bg-[--color-ninjaOrange]'
                    : 'border-gray-300'
                }`}>
                  {formData.selectedCourse === course.id && (
                    <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="agreeToTerms"
          name="agreeToTerms"
          type="checkbox"
          required
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="h-4 w-4 text-[--color-ninjaOrange] focus:ring-[--color-ninjaOrange] border-gray-300 rounded"
        />
        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
          I agree to the{' '}
          <Link to="/terms" className="text-[--color-ninjaOrange] hover:text-orange-600">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-[--color-ninjaOrange] hover:text-orange-600">
            Privacy Policy
          </Link>
        </label>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="flex justify-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-[--color-ninjaOrange] rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-3xl font-bold text-[--color-ninjaDark]">Coding Ninjas</span>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-[--color-ninjaDark]">
          Start Your Coding Journey
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-[--color-ninjaOrange] hover:text-orange-600">
            Sign in here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Step {step} of 3</span>
              <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[--color-ninjaOrange] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

            <div className="flex justify-between pt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Previous
                </button>
              )}
              
              <button
                type="submit"
                className="ml-auto px-8 py-3 bg-[--color-ninjaOrange] text-white rounded-xl font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {step === 3 ? 'Create Account' : 'Next Step'}
              </button>
            </div>
          </form>

          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          {success && <p className="mt-4 text-green-600 text-center">{success}</p>}

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              By creating an account, you agree to our{' '}
              <Link to="/terms" className="text-[--color-ninjaOrange] hover:text-orange-600">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-[--color-ninjaOrange] hover:text-orange-600">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
