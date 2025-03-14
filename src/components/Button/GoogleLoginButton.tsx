import { useEffect } from 'react'
import env from '../../configs/env'
import axiosInstance from '../../configs/axiosConfig'
import { useGoogleLogin } from '@react-oauth/google'
import toast from 'react-hot-toast'

declare global {
  interface Window {
    google: any
  }
}

const GoogleLoginButton = () => {
  const handleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async ({ code }) => {
      axiosInstance
        .post('/api/auth/google-login', { code })
        .then((response) => {
          toast.success('Login Success')
          console.log('✅ Login Success:', response.data) // Log phản hồi từ server
        })
        .catch((error) => {
          console.error(
            '❌ Login Failed:',
            error.response?.data || error.message,
          )
        })
    },
    onError: (error) => {
      toast.error('Google sign-in failed. Please try again.')
      console.error(error)
    },
  })

  return (
    <button
      onClick={() => handleLogin()}
      className="cursor-pointer bg-blue-600 p-4 text-white"
    >
      Continue with Google
    </button>
  )
}

export default GoogleLoginButton
