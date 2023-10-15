import React from "react";
import ProjectPreview from './ProjectPreview';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Gaming streaming portal',
      imageSrc: '/images/projects/01-thumb.jpg',
      imageAlt: 'Gaming streaming portal'
    },

    {
      title: 'Video service',
      imageSrc: '/images/projects/02-thumb.jpg',
      imageAlt: 'Video service'
    },

    {
      title: 'Video portal',
      imageSrc: '/images/projects/03-thumb.jpg',
      imageAlt: 'Video portal'
    },

    {
      title: 'Dating app',
      imageSrc: '/images/projects/04-thumb.jpg',
      imageAlt: 'Dating app'
    },

    {
      title: 'Landing',
      imageSrc: '/images/projects/05-thumb.jpg',
      imageAlt: 'Project-05'
    },

    {
      title: 'Gaming community',
      imageSrc: '/images/projects/06-thumb.jpg',
      imageAlt: 'Gaming community'
    }
  ];

  return (
    <div className='main__wrapper my-16'>
      <h2 className="text-center text-[#5C62EC] mb-14">Projects</h2>
      <div className='cards'>
        {projects.map((project, index) => (
          <ProjectPreview
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
