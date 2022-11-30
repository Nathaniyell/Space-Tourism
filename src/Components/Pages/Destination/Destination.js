import React from "react";
import styles from "./destination.module.css";
import Navbar from "../../NavBar/Navbar";
import DestinationItems from "./DestinationItems";



const Destination = () => {
   return (
    <div className={styles.container}>
      <Navbar />
      <h3>
        <span>01</span>pick your destination
      </h3>
            <DestinationItems  />
    </div>
  );
};

export default Destination;
