import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductDetail from "./components/ProductDetail";
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
