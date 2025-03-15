import { useForm } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import GoogleLoginButton from '../../components/Button/GoogleLoginButton'
import { useState } from 'react'

type LoginFormValues = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (data: LoginFormValues) => {
    console.log(data)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          Đăng nhập
        </h2>
        <p className="mt-2 text-center text-gray-500">
          Sử dụng tài khoản của bạn
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded border border-gray-400 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              {...register('email', { required: 'Email là bắt buộc' })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="mt-1 w-full rounded border border-gray-400 px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                {...register('password', { required: 'Mật khẩu là bắt buộc' })}
              />
              <button
                type="button"
                className="absolute top-1/2 right-0 flex -translate-y-1/2 cursor-pointer items-center p-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="h-5 w-5 text-gray-500" />
                ) : (
                  <AiOutlineEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full cursor-pointer rounded bg-gray-700 py-3 font-medium text-white transition-all hover:bg-gray-700/90"
          >
            Đăng nhập
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>
          <p className="px-3 text-gray-500">Hoặc</p>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <GoogleLoginButton />
      </div>
    </div>
  )
}

export default Login
