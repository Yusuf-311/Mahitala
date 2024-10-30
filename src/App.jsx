import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import ForumDiskusi from "./pages/ForumDiskusi";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forum-diskusi" element={<ForumDiskusi />} />
      </Routes>
    </>
  );
}

export default App;
