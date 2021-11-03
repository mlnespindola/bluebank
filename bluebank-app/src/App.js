import Homepage from "./components/homepage/Homepage";
import TopBar from "./layout/topbar/TopBar";
import About from "./components/about/About";
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import { Route } from "react-router";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Route path="/" exact>
          <Homepage />
          <About />
        </Route>
      </div>
    </div>
  );
}

export default App;
