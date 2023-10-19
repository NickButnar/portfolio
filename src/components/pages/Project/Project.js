import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../../helpers/ProjectsList";
import styles from "./project.module.css";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <div className={styles.project}>
      <h1 className={styles.title}>{project.title}</h1>
      <img src={project.image} alt={project.imageAlt} className={styles.image} />
      <p>{project.copy}</p>
    </div>
  );
};

export default Project;
