import React from 'react';

const Skills = () => {
  const skills = ['✅HTML5', '✅CSS3', '✅JavaScript', '✅React.js', '✅Node.js', '✅MongoDB', '✅Express.js','✅GitHub'];

  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>
      <ul className="skill-list">
        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  );
};

export default Skills;
