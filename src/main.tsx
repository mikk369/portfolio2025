import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import './general.css'
import './mediaQuerys.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
