import { Routes,Route } from "react-router-dom";
import React from "react";
import BookNow from "./Pages/BookNow/BookNow";
import Header from "./Pages/Header/Header";
import Horizontaldivider from "./reusable/Horizontaldivider";
import Details from "./Pages/Details/Details";
import Book from "./reusable/Book";
import InfoSection from "./Pages/Info/Info";
import ContactMain from "./Pages/Contact/ContactMain";
import Map from "./components/Map";
import Footer from "./Pages/Footer/Footer";
import '@fontsource/poppins';
import '@fontsource/playfair-display'; 
import BookingForm from "./booking";



const App = () => {
  return (
    <div>
    <div className="max-w-[1440px] mx-auto bg-white">
      < Header />
      <Routes>
        <Route path="/" element={<BookNow />}/>
      </Routes>
      <Horizontaldivider />
      <Routes>
        <Route path="/" element={<Details />}/>
      </Routes>
      <Routes>
        <Route path="/" element={<BookingForm />}/>
      </Routes>
      <Routes>
        <Route path="/" element={<InfoSection />}/>
      </Routes>
      <Horizontaldivider />
      <Routes>
        <Route path="/" element={<Book />}/>
      </Routes>
      <Routes>
        <Route path="/" element={<ContactMain />}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Map />}/>
      </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
