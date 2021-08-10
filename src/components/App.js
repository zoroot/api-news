import "./App.css";
import React, { Component } from "react";
import News from "./News/News";
import SideNews from "./News/SideNews";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=espn&from=2021-08-10",
      },
      news2: {
        type: "everything",
        query: "domains=nba.com&language=en&from=2021-08-10",
      },
      news3: {
        type: "everything",
        query: "q=messi&language=fr&from=2021-08-10",
      },
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper black lighten-4">
              <a href="#" className="bran-logo center">
                Give Me Newzzz
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <SideNews side news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
