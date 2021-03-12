import './App.css';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Trigger from "./pages/Trigger";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Welcome {...props} />} />
        <Route exact path="/home" render={(props) => <Home {...props} />} />
        <Route exact path="/registration" render={(props) => <Registration {...props} />} />
        <Route exact path="/trigger" render={(props) => <Trigger {...props} />} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;



