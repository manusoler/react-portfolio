import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  render() {
    const { projects } = this.props;
    let projectsContent = null;
    if (projects) {
      projectsContent = projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ));
    }
    return (
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">projects</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">{projectsContent}</div>
      </main>
    );
  }
}

export default Projects;
