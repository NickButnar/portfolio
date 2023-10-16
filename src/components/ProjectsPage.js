import React from "react";
import ProjectPreview from './ProjectPreview';

const ProjectsPage = () => {
  const projects = [
    {
      route: "project/0",
      title: 'Gaming streaming portal',
      imageSrc: '/images/projects/01-thumb.jpg',
      imageAlt: 'Gaming streaming portal'
    },

    {
      route: "project/1",
      title: 'Video service',
      imageSrc: '/images/projects/02-thumb.jpg',
      imageAlt: 'Video service'
    },

    {
      route: "project/2",
      title: 'Video portal',
      imageSrc: '/images/projects/03-thumb.jpg',
      imageAlt: 'Video portal'
    },

    {
      route: "project/3",
      title: 'Dating app',
      imageSrc: '/images/projects/04-thumb.jpg',
      imageAlt: 'Dating app'
    },

    {
      route: "project/4",
      title: 'Landing',
      imageSrc: '/images/projects/05-thumb.jpg',
      imageAlt: 'Project-05'
    },

    {
      route: "project/5",
      title: 'Gaming community',
      imageSrc: '/images/projects/06-thumb.jpg',
      imageAlt: 'Gaming community'
    }
  ];

  return (
    <div className='main__wrapper mt-16 mb-32'>
      <h2 className="text-center text-[#5C62EC] mb-14">Projects</h2>
      <div className='cards'>
        {projects.map((project, index) => (
          <ProjectPreview
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            route={project.route}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
