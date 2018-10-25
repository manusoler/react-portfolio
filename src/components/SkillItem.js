import React from "react";

const SkillItem = props => {
  const { skill } = props;
  return (
    <div className="skill-item">
      <div className="skill-bar" style={{ width: `${skill.skill}%` }}>
        <span>{skill.name}</span>
      </div>
    </div>
  );
};

export default SkillItem;
