import './App.css';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Trigger from "./pages/Trigger";
import Registration from "./pages/Registration";
import { TriggerProvider } from "./TriggerContext"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TriggerProvider>
          <div className="content">
            <Header />
            <Switch>
              <Route exact path="/" render={(props) => <Welcome {...props} />} />
              <Route exact path="/home" render={(props) => <Home {...props} />} />
              <Route exact path="/registration" render={(props) => <Registration {...props} />} />
              <Route exact path="/trigger" render={(props) => <Trigger {...props} />} />
            </Switch>
          </div>
          <div className="footer_wrapper">
            <Footer />
          </div>
        </TriggerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;



