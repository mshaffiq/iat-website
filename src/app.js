import React from 'react';
import "./app.css"
import {Router, Route, browserHistory} from "react-router";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./components/Home";
import {Support} from "./components/Support";
import {Contact} from "./components/Contact";
import {Login} from "./components/Login";
import {Sell} from "./components/Sell";
import {Buy} from "./components/Buy";
import {Manage} from "./components/Manage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Router history={browserHistory} >
        <Route path={"/"} component={Home} />
        <Route path={"home"} component={Home} />
        <Route path={"support"} component={Support} />
        <Route path={"contact"} component={Contact} />
        <Route path={"login"} component={Login} />
        <Route path={"sell"} component={Sell} />
        <Route path={"buy"} component={Buy} />
        <Route path={"manage"} component={Manage} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
