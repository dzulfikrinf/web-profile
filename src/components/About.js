import React, { Component } from "react";
import { ImUser } from "react-icons/im";
import { BiSolidGraduation } from "react-icons/bi";
import { PiUserListBold } from "react-icons/pi";
import foto from '../assets/foto.jpg';
import Profile from './about/profile';
import Education from "./about/edu";
import Experience from "./about/exp";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "profile",
    };
  }

  handleTabClick(tabId) {
    this.setState({
      activeTab: tabId,
    });
  }

  render() {
    return (
      <>
      <div className="about">
        <div className="foto-profile">
          <img src={foto} className="foto" />
        </div>
        <div className="about-tabs">
          <ul className="nav nav-tabs mb-3" id="ex1" role="tablist" style={{ marginTop: '5%' }}>
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link ${this.state.activeTab === "profile" ? "active" : ""}`}
                id="ex1-tab-1"
                data-mdb-toggle="tab"
                onClick={() => this.handleTabClick("profile")}
                role="tab"
                aria-controls="profile"
                aria-selected={this.state.activeTab === "profile"}
              >
                <ImUser size={40}/>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link ${this.state.activeTab === "edu" ? "active" : ""}`}
                id="ex1-tab-2"
                data-mdb-toggle="tab"
                onClick={() => this.handleTabClick("edu")}
                role="tab"
                aria-controls="edu"
                aria-selected={this.state.activeTab === "edu"}
              >
                <BiSolidGraduation size={40}/>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link ${this.state.activeTab === "exp" ? "active" : ""}`}
                id="ex1-tab-3"
                data-mdb-toggle="tab"
                onClick={() => this.handleTabClick("exp")}
                role="tab"
                aria-controls="exp"
                aria-selected={this.state.activeTab === "exp"}
              >
                <PiUserListBold size={40}/>
              </a>
            </li>
          </ul>

          <div className="tab-content" id="ex1-content">
            <div className={`tab-pane fade ${this.state.activeTab === "profile" ? "show active" : ""}`} id="profile" role="tabpanel" aria-labelledby="profile">
              <Profile />
            </div>
            <div className={`tab-pane fade ${this.state.activeTab === "edu" ? "show active" : ""}`} id="edu" role="tabpanel" aria-labelledby="edu">
              <Education />
            </div>
            <div className={`tab-pane fade ${this.state.activeTab === "exp" ? "show active" : ""}`} id="exp" role="tabpanel" aria-labelledby="exp">
              <Experience />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default About;
