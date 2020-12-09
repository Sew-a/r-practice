import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";

import { Home } from "./components/Home";
import { Seasons } from "./components/Seasons";
import { Api } from "./components/Api";
import { Video } from "./components/Video";
import { Paginate } from "./components/Paginate";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="dropdownmenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/seasons">Seasons</Link>
            </li>
            <li>
              <Link to="/api">Api</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
            <li>
              <Link to="/paginate">Pagination</Link>
            </li>
          </ul>
        </nav>
        <div className="body-section">
          <Route path="/" exact component={Home} />
          <Route path="/seasons" exact component={Seasons} />
          <Route path="/api" exact component={Api} />
          <Route path="/video" exact component={Video} />
          <Route path="/paginate" exact component={Paginate} />
        </div>
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
