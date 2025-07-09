import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tours from "./pages/Tours";
import Services from "./pages/Services";


import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Contact } from "lucide-react";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />

          {/* digər səhifələr */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
