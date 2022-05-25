import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import FiltersContextProvider from "./context/FiltersContextProvider";

function App() {
  return (
    <FiltersContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </FiltersContextProvider>
  );
}

export default App;
