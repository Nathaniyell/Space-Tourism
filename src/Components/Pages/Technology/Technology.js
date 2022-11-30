import React from "react";
import styles from "./technology.module.css";
import TechnologyItems from "./TechnologyItems";

const Destination = () => {
  return (
    <div className={styles.container}>
      <h3>
        <span>03</span>Space Launch 101
      </h3>
      <TechnologyItems />
    </div>
  );
};

export default Destination;
