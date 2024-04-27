import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import Places from "./components/places/Places";
import PlaceDetail from "./components/placeDetail/PlaceDetail";
import Fees from "./components/fees/Fees";
import Activities from "./components/activities/Activities";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ActivityDetail from "./components/activityDetail/ActivityDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {["/", "national-park"].map((path, index) => (
          <Route key={index} path={path} element={<Home />} />
        ))}

        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
        <Route path="/places" element={<Places />} />
        <Route path="/places/:id" element={<PlaceDetail />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
