import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AuthLayout from './layouts/AuthLayout/index.tsx'
import Login from './pages/Login/index.tsx'
import Register from './pages/Register/index.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import env from './configs/env.ts'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>

    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>,
)
