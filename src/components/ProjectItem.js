import React, { Component } from "react";

class ProjectItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="item">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={`img/${project.image}`} alt={project.name} />
        </a>
        {project.name}
      </div>
    );
  }
}

export default ProjectItem;
