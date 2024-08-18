import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './Pages/Main.jsx'
import Registration from './Pages/Registration.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Main></Main> */}
    <Registration></Registration>
  </StrictMode>,
)
