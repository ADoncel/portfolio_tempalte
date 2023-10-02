import Navmenu from "./components/Navmenu/Navmenu";

import Footer from "./components/Footer/Footer";

import "./App.css";
import logo from "./assets/logo_nobg.png";

function App() {
  return (
    <>
      <div id="header">
        <img src={logo} className="header__logo" width={"120px"} />
      </div>
      <div id="main">
        <Navmenu />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
