import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./rating.module.css";

const Rating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const createArray = (length) => [...Array(length)];

  const Star = ({ selected = false, onSelect }) => {
    return (
      <FaStar
        color={selected ? "gold" : "gray"}
        size={30}
        onClick={onSelect}
      />
    );
  };

  return (
    <div className={styles.wrapper}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}

      {selectedStars > 0 ? (<h3>You`ve been selected {selectedStars} stars</h3>) : null}
    </div>
  );
};

export default Rating;
