import React, { useState } from "react";
import Wrapper from "../../Wrapper";
import styles from "./destination.module.css";
import data from "../../data.json";

const destination = data.destinations;
const DestinationItems = () => {
  const [planets] = useState(destination);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];
  //destructure the planets array and pick out these properties from each index as specified in planets[value]

  return (
    <Wrapper>
      {destination.length > 0 && (
        <main className={styles.main}>
          <div className={styles.left}>
            <div className={styles.image}>
              <img src={images.png} alt={name} width="100%" />
            </div>
          </div>
          <aside className={styles.right}>
            <nav>
              {planets.map((item, index) => {
                return (
                  <div className={styles.buttons}>
                    <button
                      type="button"
                      onClick={() => setValue(index)}
                      className={styles.btn}
                      key={index}
                    >
                      {item.name}
                    </button>
                  </div>
                );
              })}
            </nav>
            <div className={styles.text}>
              <h1>{name}</h1>
              <p>{description}</p>
              <div className={styles.bottom}>
                <div>
                  <span>avg distance</span>
                  <p>{distance}</p>
                </div>
                <div>
                  <span>est. travel time</span>
                  <p>{travel}</p>
                </div>
              </div>
            </div>
          </aside>
        </main>
      )}
    </Wrapper>
  );
};

export default DestinationItems;
