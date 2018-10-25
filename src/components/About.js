import React, { Component } from "react";
import Bio from "./Bio";
import Skills from "./Skills";
import Jobs from "./Jobs";

class About extends Component {
  render() {
    const { bio, skills, jobs } = this.props;
    return (
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <Bio bio={bio} />
          <Skills skills={skills} />
          <Jobs jobs={jobs} />
        </div>
      </main>
    );
  }
}

export default About;
