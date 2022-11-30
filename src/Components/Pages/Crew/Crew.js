import React from "react";
import styles from "./crew.module.css";
import CrewItems from "./CrewItems";



const Destination = () => {
   return (
    <div className={styles.container}>
      <h3>
        <span>02</span>Meet your Crew
      </h3>
            <CrewItems  />
    </div>
  );
};

export default Destination;
