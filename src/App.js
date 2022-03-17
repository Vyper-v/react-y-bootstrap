import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section1" element={<div>section</div>} />
        <Route path="/section2" element={<div>section</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
