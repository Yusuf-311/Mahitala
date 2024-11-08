import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import ForumDiskusi from "./pages/ForumDiskusi";
import Footer from "./components/Footer";

import DiskusiTeratasMain from "./pages/DiskusiTeratasMain";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forum-diskusi" element={<ForumDiskusi />} />
        <Route path="/diskusi-terakhir" element={<DiskusiTeratasMain />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
