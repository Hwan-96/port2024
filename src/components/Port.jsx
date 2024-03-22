import React, { useEffect, useRef, useState } from "react";

import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#port",
        start: "top top",
        end: "1000%",
        pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });
    t1.to(".port-item", {
      scale: 1,
      rotate: 360,
    })
    let isNegative = false;
    t1.to(".port-item", {
      xPercent: () => {
        if (isNegative) {
          isNegative = false;
          return -400;
        } else {
          isNegative = true;
          return 300;
        }
      },
      stagger: {
        from: "end",
        amount: 3,
        x: () => Math.random() * 300 - 150, // 랜덤한 x 포지션 값
        y: () => Math.random() * 300 - 150, // 랜덤한 y 포지션 값
      },
    })
    t1.to(".port h2 span", {
      scale: 60,
      ease: "none",
      duration: 2,
    })
  }, [])

  return (
    // <section id="port" ref={horizontalRef}>
    <section id="port">
      <div className="port">
        <h2>
          <span>Portfolio</span>
        </h2>
        <div className="port-inner">
          <div className="port-wrap">
            {portText.map((port,key) => (
              <article
                className={`port-item p${key+1}`}
                key={key}
                // ref={(el) => (sectionRef.current[key] = el)}
                >
                <span className="num">{port.num}</span>
                <a 
                href={port.code}
                target="_blank" 
                className="img" 
                rel="noreferrer noopener">
                  <img src={port.img} alt={port.name}></img>
                </a>
                <h3 className="title">{port.title}</h3>
                <p className="desc">{port.desc}</p>
                <a
                href={port.view}
                target="_blank"
                className="site"
                rel="noreferrer noopener">
                  사이트 보기
                  </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Port;