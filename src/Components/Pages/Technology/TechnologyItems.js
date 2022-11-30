import React, { useState } from "react";
import Wrapper from "../../Wrapper";
import technologyStyles from "./technology.module.css";
import data from "../../data.json";


const technology = data.technology;
const TechnologyItems = () => {
  const [spaceLaunch] = useState(technology);
  const [value, setValue] = useState(0);

  const { name, images, description} = spaceLaunch[value];
  //destructure the people array and pick out these properties from each index as specified in people[value]
  return (
    <Wrapper>
      {technology.length > 0 && (
        <main className={technologyStyles.body}>
          <div className={technologyStyles.left}>
            <div className={technologyStyles.image}>
              <picture>
                <source media="(min-width: 768px)" srcSet={images.landscape} />
              <img src={images.portrait} alt={name} width="100%" />
              </picture>
            </div>
          </div>
          <aside className={technologyStyles.right}>
            <div className={technologyStyles.text}>
              <p className={technologyStyles.terminology}>The Terminology...</p>
              <h1>{name}</h1>
              <p className={technologyStyles.description}>{description}</p>
              <p></p>
            </div>
            <nav>
              {technology.map((item, index) => {
                return (
                  <div className={technologyStyles.buttons}>
                    <button
                      type="button"
                      onClick={() => setValue(index)}
                      className={technologyStyles.btn}
                      key={index}
                    >
                    {index + 1}
                    </button>
                  </div>
                );
              })}
            </nav>
          </aside>
        </main>
      )}
    </Wrapper>
  );
};

export default TechnologyItems;
