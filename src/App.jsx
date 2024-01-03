import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailProduct from "./pages/DetailProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
