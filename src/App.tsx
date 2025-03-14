import { Link } from 'react-router'

function App() {
  return (
    <>
      <header className="flex justify-between p-6">
        <h1>Logo hoặc Tên Trang Web</h1>
        <div className="space-x-2">
          <Link to={'auth/login'}>
            <button className="cursor-pointer bg-gray-600 p-4 text-white">
              Đăng nhập
            </button>
          </Link>
          <Link to={'auth/register'}>
            <button className="cursor-pointer bg-gray-600 p-4 text-white">
              Đăng ký
            </button>
          </Link>
        </div>
      </header>
    </>
  )
}

export default App
