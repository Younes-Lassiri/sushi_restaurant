import Explore from "./Explore/Explore";
import Landing from "./Landing/Landing";
import Order from "./Order/Order";
import Collection from './Collection/Collection';
import Contact from './Contact/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./Video/Video";
import Chef from "./Chef/Chef";
import Plat from "./Plat/Plat";
import Footer from "./Footer/Footer";
import Detail from "./Detail/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          (
            <div>
              <Landing/>
              <Explore/>
              <Order/>
              <Collection/>
              <Video/>
              <Chef/>
              <Plat/>
              <Contact/>
              <Footer/>
            </div>
          )
        }/>
        <Route path="/product/:name" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
