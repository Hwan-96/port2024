import React from "react";

import { siteText } from "../constants";

const Site = () => {
    return (
      <section id="site">
        <div className="site-inner">
          <h2 className="site-tit">
            <span>Project</span>
            <img src="/title00.png" alt="" />
          </h2>
          <div className="site-wrap">
            {siteText.map((site, key) => (
              <article className={`site-item s${key+1}`} key={key} style={{ background: `url(${site.bg})` }}>
                <div className="text">
                  <div className="tit">{site.title}</div>
                  <div className="info">
                    <span>{site.info[0]}</span>
                    <span>{site.info[1]}</span>
                    <span>{site.info[2]}</span>
                    <span>{site.info[3]}</span>
                  </div>
                  <div className="img-box">
                    <a 
                      href={site.code}
                      target="_blank" 
                      className="img" 
                      rel="noreferrer noopener">
                        <img src={site.img} alt={site.name}></img>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Site;