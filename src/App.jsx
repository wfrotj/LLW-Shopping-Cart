import React from "react";
import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import "./App.css";

function App() {
  return (
    <div className="root">
      <Navbar />
      <ProductGallery />
    </div>
  );
}

export default App;
