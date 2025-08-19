import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const [loading, setLoading] = useState(false) // now used in JSX

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleCourseSelect = (courseId: string) => {
    setFormData(prev => ({ ...prev, selectedCourse: courseId }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (step < 3) {
      setStep(prev => prev + 1)
      return
    }

    // final submission
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.password) {
      setError('Please fill required fields.')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      // replace with your real API endpoint when available
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
          course: formData.selectedCourse
        })
      })

      if (!res.ok) {
        // fallback for dev when backend is missing
        const fallbackUsers = JSON.parse(localStorage.getItem('mock_users') || '[]')
        fallbackUsers.push({ name: `${formData.firstName} ${formData.lastName}`, email: formData.email })
        localStorage.setItem('mock_users', JSON.stringify(fallbackUsers))
        setSuccess('Account created locally (dev fallback). Redirecting...')
        setTimeout(() => navigate('/', { replace: true }), 1000)
        return
      }

      setSuccess('Account created successfully. Redirecting...')
      setTimeout(() => navigate('/', { replace: true }), 1000)
    } catch (err: any) {
      setError((err && err.message) || 'Network error. Saved locally as fallback.')
      // dev fallback
      const fallbackUsers = JSON.parse(localStorage.getItem('mock_users') || '[]')
      fallbackUsers.push({ name: `${formData.firstName} ${formData.lastName}`, email: formData.email })
      localStorage.setItem('mock_users', JSON.stringify(fallbackUsers))
      setSuccess('Account created locally (dev fallback). Redirecting...')
      setTimeout(() => navigate('/', { replace: true }), 1000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Your Account</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step indicators */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-1/3 h-2 rounded ${
                s <= step ? 'bg-[--color-ninjaOrange]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            disabled={loading}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-[--color-ninjaOrange] disabled:opacity-50"
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            disabled={loading}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-[--color-ninjaOrange] disabled:opacity-50"
          />
          
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            disabled={loading}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-[--color-ninjaOrange] disabled:opacity-50"
          />
          
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            disabled={loading}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-[--color-ninjaOrange] disabled:opacity-50"
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              disabled={loading}
              className="rounded text-[--color-ninjaOrange] focus:ring-[--color-ninjaOrange]"
            />
            <label className="text-sm text-gray-600">
              I agree to the Terms and Conditions
            </label>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 bg-green-50 border border-green-200 text-green-600 rounded">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-4 rounded-xl font-semibold text-white
            ${loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[--color-ninjaOrange] hover:bg-orange-600 transition-colors'
            }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Creating Account...
            </span>
          ) : (
            'Create Account'
          )}
        </button>
      </form>
    </div>
  )
}
