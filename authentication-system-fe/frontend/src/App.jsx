import Navbar from "./views/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
      </AuthProvider>

    </Router>

  )
}

export default App;