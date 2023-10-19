import React from "react";
import ProjectPreview from '../ProjectPreview/ProjectPreview';
import styles from "./projects.module.css";

const Projects = () => {
  const items = [
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
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {items.map((item, index) => (
          <ProjectPreview
            key={index}
            title={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
