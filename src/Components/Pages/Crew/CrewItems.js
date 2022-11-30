import React, { useState } from "react";
import Wrapper from "../../Wrapper";
import crewStyles from "./crew.module.css";
import data from "../../data.json";
import { BsCircle } from "react-icons/bs";

const crew = data.crew;
const CrewItems = () => {
  const [people] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = people[value];
  //destructure the people array and pick out these properties from each index as specified in people[value]
  return (
    <Wrapper>
      {crew.length > 0 && (
        <main className={crewStyles.body}>
          <div className={crewStyles.left}>
            <div className={crewStyles.image}>
              <img src={images.png} alt={name} width="100%" />
            </div>
          </div>
          <aside className={crewStyles.right}>
            <div className={crewStyles.text}>
              <p className={crewStyles.role}>{role}</p>
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>
            <nav>
              {people.map((item, index) => {
                return (
                  <div className={crewStyles.buttons}>
                    <button
                      type="button"
                      onClick={() => setValue(index)}
                      className={crewStyles.btn}
                      key={index}
                    >
                      <BsCircle />
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

export default CrewItems;
