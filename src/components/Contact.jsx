import React from "react";

import { contactText } from "../constants";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-inner">
        <h2 className="contact-tit">Contact</h2>
        <div className="contact-text">
          <div className="text">
            {contactText.map((contact,key)=>(
              <div key={key}>
                <a href={contact.link} target="_blank" rel="noreferrer">
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;