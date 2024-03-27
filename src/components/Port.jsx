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
      delay: 0.2,
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
        amount: 2,
        x: () => Math.random() * 300 - 150, // 랜덤 포지션
        y: () => Math.random() * 300 - 150,
      },
      autoAlpha: 0,
    })
    t1.to(".port h2 img", {
      xPercent: 130,
      ease: "none",
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])

  return (
    <section id="port">
      <div className="port">
        <h2>
          <span>Portfolio</span>
          <img src="/title01.png" alt="" />
        </h2>
        <div className="port-inner">
          <div className="port-wrap">
            {portText.map((port,key) => (
              <article
                className={`port-item p${key+1}`}
                key={key}
                >
                <span className="num">{port.num}</span>
                <a 
                href={port.view}
                target="_blank" 
                className="img" 
                rel="noreferrer noopener">
                  <img src={port.img} alt={port.name}></img>
                </a>
                <h3 className="title">{port.title}</h3>
                <p className="desc">{port.desc}</p>
                <div className="info">
                  <span>{port.info[0]}</span>
                  <span>{port.info[1]}</span>
                </div>
                <a
                href={port.code}
                target="_blank"
                className="site"
                rel="noreferrer noopener">
                  <span>{port.btn}</span>
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