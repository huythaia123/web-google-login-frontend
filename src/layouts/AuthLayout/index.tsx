import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
      <p>AuthLayout</p>
      <Outlet />
    </div>
  )
}

export default AuthLayout
