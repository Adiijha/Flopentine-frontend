import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/landingPage/Header";
import Hero from "./components/landingPage/Hero";
import Footer from "./components/landingPage/Footer";
import Dashboard from './components/Dashboard/Dashboard';  // Import the Dashboard component

const App = () => {
  return (
    <Router>
      <div>
        {/* Header will be present on all pages */}
        <Header />

        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Hero />} />
          {/* Dashboard Page */}
          <Route path="/stories" element={<Dashboard />} />
        </Routes>

        {/* Footer will be present on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
