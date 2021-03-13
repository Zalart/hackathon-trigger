import './App.css';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Trigger from "./pages/Trigger";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Welcome {...props} />} />
          <Route exact path="/home" render={(props) => <Home {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/trigger" render={(props) => <Trigger {...props} />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;



