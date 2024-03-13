import React from "react";

import { skillText } from "../constants";

const Skill = () => {
    return (
      <section id="skill">
        <div className="skill-inner">
          <h2 className="skill-title">Challenge<em>나의 도전</em></h2>
          <div className="skill-desc">
            {skillText.map((skill,key)=>(
              <div>
                <span>{key+1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Skill;