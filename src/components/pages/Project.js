import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../helpers/ProjectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <div className="project main__wrapper">
      <h1 className="project__title">{project.title}</h1>
      <img src={project.image} alt={project.imageAlt} className="project__image" />
      <p>{project.copy}</p>
    </div>
  );
};

export default Project;
