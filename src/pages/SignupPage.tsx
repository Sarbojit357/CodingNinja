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
      <h1 className="text-2xl font-bold mb-4">Create account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="p-3 border rounded" required />
          <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="p-3 border rounded" />
        </div>

        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded w-full" required />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" className="p-3 border rounded" required />
          <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" className="p-3 border rounded" required />
        </div>

        <div className="flex items-center gap-3">
          <input id="agree" name="agreeToTerms" type="checkbox" checked={!!formData.agreeToTerms} onChange={handleChange} />
          <label htmlFor="agree">I agree to the terms and conditions</label>
        </div>

        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-600">{success}</div>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[--color-ninjaOrange] text-white rounded font-semibold disabled:opacity-60"
        >
          {loading ? 'Creating account...' : step < 3 ? 'Next' : 'Create account'}
        </button>
      </form>
    </div>
  )
}
