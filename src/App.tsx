import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import NavbarComponent from "./component/Navbar";
import Price from "./component/Price";
import Order from "./component/Order";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <NavbarComponent />
        </div>
        <div className="content">
          <Route exact path="/prices" component={() => <Price />} />
          <Route exact path="/orders" component={() => <Order />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
