import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Travel Booking App',
      description: 'Full-stack app using MERN for booking tours and travel packages.',
    },
    {
      name: 'E-Commerce Store',
      description: 'React-based frontend with shopping cart and admin panel.',
    },
    {
      name:'TO-DO Application Create',
      description:'Useing   HTML,  CSS,  JAVASCRIPT',
    },
    {
      name:'Landing-Page',
      description:'Create Landing-Page And User used to DeskTop, Tablet And Moblie Phone viewed',
    }

  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, i) => (
          <div key={i} className="card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
