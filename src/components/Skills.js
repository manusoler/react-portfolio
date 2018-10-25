import React, { Component } from "react";
import SkillItem from "./SkillItem";

class Skills extends Component {
  render() {
    const { skills } = this.props;
    let skillContent = null;
    if (skills) {
      skillContent = skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ));
    }
    return (
      <div className="skills-wrapper">
        <h3 className="text-secondary">SKILLS</h3>
        <div className="skills">{skillContent}</div>
      </div>
    );
  }
}

export default Skills;
