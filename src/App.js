import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/gallery/Home";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
import AddBook from "./components/gallery/AddBook";
import BorrowBook from "./components/gallery/BorrowBook";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery/add" component={AddBook} />
          <Route exact path="/gallery/edit/:id" component={BorrowBook} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
