import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ApiTestPage from "./pages/ApiTestPage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import "bootstrap/dist/css/bootstrap.min.css";

// There are various different kinds of routers in the React Router Dom package.
// Within the router, routes can be set up by declaring individual routes with a URL path and the component to be
// rendered upon accessing said path.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/api-test" element={<ApiTestPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
