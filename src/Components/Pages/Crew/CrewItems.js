import React, { useState } from "react";
import Wrapper from "../../Wrapper";
import crewStyles from "./crew.module.css";
import data from "../../data.json";
import { BsCircle } from "react-icons/bs";
import pics0 from '../../assets/crew/image-douglas-hurley.png'
import pics1 from '../../assets/crew/image-mark-shuttleworth.png'
import pics2 from '../../assets/crew/image-victor-glover.png'
import pics3 from '../../assets/crew/image-anousheh-ansari.png'

const crew = data.crew;
const crewPictures = [pics0, pics1, pics2, pics3]
const CrewItems = () => {
  const [pictures, setPictures] = useState(pics0)
  const [people] = useState(crew);
  const [value, setValue] = useState(0);
  const { name, role, bio } = people[value];
  //destructure the people array and pick out these properties from each index as specified in people[value]

  const changePictureHandler=(index)=>{
    setValue(index)
    setPictures(crewPictures[index])
  }

  return (
    <Wrapper>
      {crew.length > 0 && (
        <div className={crewStyles.centralize}>
        <main className={crewStyles.body}>
          <div className={crewStyles.left}>
            <div className={crewStyles.image}>
              <img src={pictures} alt={name} width="100%" />
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
                      onClick={() => changePictureHandler(index)}
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
        </div>
      )}
    </Wrapper>
  );
};

export default CrewItems;
