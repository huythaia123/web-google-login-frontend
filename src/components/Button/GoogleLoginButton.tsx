import axiosInstance from '../../configs/axiosConfig'
import { useGoogleLogin } from '@react-oauth/google'
import toast from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'

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
      className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded border border-gray-200 bg-white py-3 font-medium text-black transition-all hover:bg-blue-50/50"
    >
      <FcGoogle className="text-2xl" />
      <span>Đăng nhập với Google</span>
    </button>
  )
}

export default GoogleLoginButton
