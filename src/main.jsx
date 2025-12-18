import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId="85078767422-lbd0jv56uof98o9jt82djemh2vk0f7be.apps.googleusercontent.com">
       <App />
    </GoogleOAuthProvider>;
    </BrowserRouter>
  </StrictMode>,
)
