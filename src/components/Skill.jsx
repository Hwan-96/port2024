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
        end: "+=5000",
        // pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });
      t1.to(".card", {
        yPercent: -300,
        stagger: {
          from: "start",
          amount: 0.4,
        },
      })

      return () => {
				ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			};
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