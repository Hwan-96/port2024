import React from "react";

import { skillText } from "../constants";

const Skill = () => {
    return (
      <section id="skill">
        <div className="skill-inner">
          <h2 className="skill-title">Used stack<em> 이런 기술을 사용했어요</em></h2>
          <div className="skill-desc">
            {skillText.map((skill,key)=>(
              <div key={key}>
                <div className="card">
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.subtit.map((subtitle, index) => (
                      <li key={index}>
                        <span>{subtitle}</span>
                        <p>{skill.desc[index]}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Skill;