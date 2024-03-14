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
			gsap.to(".intro-text",{autoAlpha: 1, duration: 2, delay: 1})
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

			introAni.to("#intro .intro-title",{  })
				.to("#intro .intro-text", { height: "70vh", duration: 2, autoAlpha: 1 })

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

									<div className="profile">
										<ul className="profile-text">
											<li>저는 새로운 도전에 대한 열정과 긍정적인 자세를 가지고 있습니다.</li>
											<li>벽을 만나 부딪혀도 포기하지 않고 다시 일어나</li>
											<li>끊임없이 연구하여 해결 할 수 있는 능력을 갖추도록 노력합니다.</li>
											<li>새로운 것에 대한 학습을 통해 능력있는 프론트엔드 개발자로 성장하여,</li>
											<li>다채롭고 가치있는 웹 경험을 만들어내는 것이 저의 목표입니다.</li>
										</ul>
									</div>
							</div>
					</div>
			</section>
	);
};

export default Intro;