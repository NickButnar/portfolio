import React from "react";

const ProjectPreview = ({imageSrc, imageAlt, title}) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={imageAlt} className="card__image" />
      <h3 className="card__title">{title}</h3>
    </div>
  )
}

export default ProjectPreview;
