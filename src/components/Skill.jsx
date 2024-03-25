import React, { useEffect } from "react";

import { skillText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skill = () => {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#skill",
        start: "top top",
        end: "100%",
        pin: true,
        scrub: 1,
        markers: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });
    if (window.innerWidth >= 800) {
      t1.to(".skill-title img", {
        scale: 0.5,
        transformOrigin: "left top"
      },"<")
      .to(".c1", {
        yPercent: -300
      })
      .to(".c2", {
        yPercent: -400
      })
      .to(".c3", {
        yPercent: -300
      });
    }
  }, [])

    return (
      <section id="skill">
        <div className="skill-inner">
          <h2 className="skill-title">
            <span>Used stack</span>
            <img src="/title02.png" alt="" />
          </h2>
          <div className="skill-desc">
            {skillText.map((skill,key)=>(
              <div key={key}>
                <div className={`card c${key+1}`}>
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