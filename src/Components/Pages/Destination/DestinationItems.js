import React, { useState } from "react";
import Wrapper from "../../Wrapper";
import styles from "./destination.module.css";
import data from "../../data.json";
import pics0 from '../../assets/destination/image-moon.png'
import pics1 from '../../assets/destination/image-mars.png'
import pics2 from '../../assets/destination/image-europa.png'
import pics3 from '../../assets/destination/image-titan.png'

const destination = data.destinations;
const planetImgs = [pics0, pics1, pics2, pics3]
const DestinationItems = () => {
  const [pictures, setPictures] = useState(pics0)
  const [planets] = useState(destination);
  const [value, setValue] = useState(0);

  const { name, description, distance, travel } = planets[value];
  //destructure the planets array and pick out these properties from each index as specified in planets[value]

  function changePictureHandler(index){
    setValue(index)
    setPictures(planetImgs[index])
  }

  return (
    <Wrapper>
      {destination.length > 0 && (
        <div className={styles.centralize}>
        <main className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.image}>
               <img src={pictures} alt={name} width="100%" />
              
            </div>
          </div>
          <aside className={styles.right}>
            <nav>
              {planets.map((item, index) => {
                return (
                  <div className={styles.buttons}>
                    <button
                      type="button"
                      onClick={() => changePictureHandler(index)}
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
        </div>
      )}
    </Wrapper>
  );
};

export default DestinationItems;
