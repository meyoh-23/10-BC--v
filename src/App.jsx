import {Routes, Route} from "react-router-dom"
import {Footer, Navbar} from "./components";
import {Activities, ContactUs, Home, Members} from "./pages";
import Colors from "./pages/Colors";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path= "/members" element={<Members/>}/>
      <Route path="/activities" element={<Activities/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/test-colors" element={<Colors/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
