import React, { useState } from "react";
import Wrapper from "../../Wrapper";
import technologyStyles from "./technology.module.css";
import data from "../../data.json";
import pics0 from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import pics1 from '../../assets/technology/image-spaceport-portrait.jpg'
import pics2 from '../../assets/technology/image-space-capsule-portrait.jpg'
import pics00 from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import pics11 from '../../assets/technology/image-spaceport-landscape.jpg'
import pics22 from '../../assets/technology/image-space-capsule-landscape.jpg'


const portraitImages = [pics0, pics1, pics2]
const landscapeImages = [pics00, pics11, pics22]
const technology = data.technology;
const TechnologyItems = () => {
  const [portrait, setPortrait] = useState(pics0)
  const [landscape, setLandscape] = useState(pics00)
  const [spaceLaunch] = useState(technology);
  const [value, setValue] = useState(0);
  const { name, description} = spaceLaunch[value];
  //destructure the people array and pick out these properties from each index as specified in people[value]

 const imageChangeHandler =(index)=>{
  setPortrait(portraitImages[index])
  setValue(index)
  setLandscape(landscapeImages[index])
 }

  return (
    <Wrapper>
      {technology.length > 0 && (
        <main className={technologyStyles.body}>
          <div className={technologyStyles.left}>
            <div className={technologyStyles.image}>
              <picture>
                <source media="(min-width: 768px)" srcSet={portrait} />
              <img src={landscape} alt={name} width="100%" />
              </picture>
            </div>
          </div>
          <aside className={technologyStyles.right}>
            <nav>
              {technology.map((item, index) => {
                return (
                  <div className={technologyStyles.buttons}>
                    <button
                      type="button"
                      onClick={() => imageChangeHandler(index)}
                      className={technologyStyles.btn}
                      key={index}
                    >
                    {index + 1}
                    </button>
                  </div>
                );
              })}
            </nav>
            <div className={technologyStyles.text}>
              <p className={technologyStyles.terminology}>The Terminology...</p>
              <h1>{name}</h1>
              <p className={technologyStyles.description}>{description}</p>
              <p></p>
            </div>
          </aside>
        </main>
      )}
    </Wrapper>
  );
};

export default TechnologyItems;
