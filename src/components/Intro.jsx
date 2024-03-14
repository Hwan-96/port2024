import React, { useEffect } from "react";

import about from "../assets/img/about.jpg";
import { introText } from "../constants"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Intro = () => {
	useEffect(()=>{
		document.querySelectorAll(".split").forEach(t => {
			let oldText = t.innerText;
			let newText = "";
			for(let i = 0; i<t.innerText.length; i++){
				newText += "<span aria-hidden='true'>";
				if(t.innerText[i] === " "){
					newText += "&nbsp";
				}else{
					newText += t.innerText[i];
				}
				newText += "</span>";
			}
			t.innerHTML = newText;
			t.setAttribute("aria-label", oldText);
		})

		setTimeout(()=>{
			gsap.to(".split span",{
				duration: .3,
				opacity: 1,
				y: 0,
				stagger: 0.1,
			})
		},3500);
		gsap.registerPlugin(ScrollTrigger);
		const introAni = gsap.timeline({
			scrollTrigger: {
				trigger: "#intro",
				start: "top top",
				end: "+=3000",
				scrub: true,
				pin: true,
				anticipatePin: 1,
				markers: true
				},
			});

			introAni.to("#intro .intro-text", { height: "50vh", duration: 2, autoAlpha: 1 })
				.to("#intro .intro-text", { autoAlpha: 0 });

			return () => {
				ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			};
	},[]);

	return (
			<section id="intro">
					<div className="intro-inner">
							<ul className="intro-title">
									<li className="split" aria-label={introText.title[0]}>{introText.title[0]}</li>
									<li className="split" aria-label={introText.title[1]}>{introText.title[1]}</li>
							</ul>
							<div className="intro-text">
									<ul className="text">
											<li>{introText.desc[0]}</li>
											<li>{introText.desc[1]}</li>
											<li>{introText.desc[2]}</li>
									</ul>
									<div className="img">
											<img src={about} alt="about" />
									</div>
							</div>
					</div>
			</section>
	);
};

export default Intro;