import React, { useEffect } from "react";

import { introText } from "../constants"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'

const Intro = () => {
	useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger);
		const headTxt = new SplitType('.intro-title .child', { types: 'words, chars', });
		// const titleWrap = new SplitType('.intro-title', { types: 'chars,' })

		// 인트로 키워드 애니메이션
		const introAni = gsap.timeline({
			scrollTrigger: {
				trigger: "#intro",
				start: "0% 0%",
				end: "100% 100%",
				scrub: 0,
				},
			});
			introAni.to(".intro-title .before .char", {
				yPercent: -100,
				stagger:{
					from: "random",
					amount: 1,
				},
				delay: 0.5,
			})
			introAni.to(".intro-title .after .char", {
				yPercent: -100,
				stagger:{
					from: "random",
					amount: 1,
				}
			})

			return () => {
				ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			};
	},[]);

	return (
			<section id="intro">
					<div className="intro-inner">
							<ul className="intro-title">
									<li aria-label={introText.title[0]}>{introText.title[0]}</li>
									<li>
										<span aria-label={introText.desc[0]}>{introText.desc[0]}</span>
										<br className="block"/>
										<span className="parent">
											<span className="child before" aria-hidden="true" aria-label={introText.desc[1]}>{introText.desc[1]}</span>
											<span className="child after" aria-hidden="true" aria-label={introText.desc[2]}>{introText.desc[2]}</span>
										</span>
									</li>
									<li aria-label={introText.title[1]}>{introText.title[1]}</li>
							</ul>
					</div>
			</section>
	);
};

export default Intro;