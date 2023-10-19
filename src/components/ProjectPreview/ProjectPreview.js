import React, { useState } from "react";
import styles from "./preview.module.css";

const ProjectPreview = ({ route, imageSrc, imageAlt, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.preview} ${hovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={route}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
        <h3 className={`${styles.title} ${hovered ? "hidden" : ""}`}>{title}</h3>
        <p className={`${styles.text} ${hovered ? "" : "hidden"}`}>
          Learn more about {title}
        </p>
      </a>
    </div>
  );
}

export default ProjectPreview;
