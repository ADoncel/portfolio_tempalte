import logo from "./assets/logo_nobg.png";
import Footer from "./components/Footer/Footer";
import Navmenu from "./components/Navmenu/Navmenu";

import "./App.css";

function App() {
  return (
    <>
      <div id="header">
        <img src={logo} className="header__logo" width={"120px"} alt="logo" />
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
