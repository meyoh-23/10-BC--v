import {Routes, Route} from "react-router-dom"
import {Footer, Navbar} from "./components";
import {Activities, ContactUs, Home, Members} from "./pages";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path= "/members" element={<Members/>}/>
      <Route path="/activities" element={<Activities/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
