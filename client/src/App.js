import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ApiTestPage from "./components/ApiTestPage";

// There are various different kinds of routers in the React Router Dom package.
// Within the router, routes can be set up by declaring individual routes with a URL path and the component to be
// rendered upon accessing said path.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/api-test" element={<ApiTestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
