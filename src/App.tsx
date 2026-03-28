import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import ProtectedRoute from "./components/ProtectedRoute"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App