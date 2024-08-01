
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {


  // <h1>welcome to my app</h1>
  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
