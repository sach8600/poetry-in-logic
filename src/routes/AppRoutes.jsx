import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../shared/Layout";
import Landing from "../pages/Landing";
import Studio from "../pages/Studio";
import Gallery from "../pages/Gallery";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
