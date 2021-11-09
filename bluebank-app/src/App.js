import Homepage from "./components/homepage/Homepage";
import TopBar from "./layout/topbar/TopBar";
import About from "./components/about/About";
import Login from "../src/pages/login/Login";
import Wallet from "./pages/dashboard/wallet/Wallet";
import Register from "../src/pages/register/Register";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router";
import "./app.scss";

import { initializeApp } from "firebase/app";
import { AuthProvider } from "./contexts/AuthContext";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

initializeApp(firebaseConfig);

function App() {
  const history = useHistory();

  function redirectBtn(){
    history.push("/register");
  }

  return (
    <AuthProvider>
      <div className="app">
        <div className="sections">
          <Switch>
            <Route path="/" exact>
              <TopBar />
              <Homepage onRegisterBtn={redirectBtn}/>
              <About onRegisterBtn={redirectBtn}/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
          </Switch>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
