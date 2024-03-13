import React from "react";

import about from "../assets/img/about.png";
import { introText } from "../constants"

const Intro = () => {
	return(
		<section id="intro">
			<div className="intro-inner">
				<h1 className="intro-title">
					<span>{introText.title[0]}</span>
					<span>{introText.title[1]}</span>
				</h1>
				<div className="intro-text">
					<ul className="text">
						<li>{introText.desc[0]}</li>
						<li>{introText.desc[1]}</li>
						<li>{introText.desc[2]}</li>
					</ul>
					<div className="img">
						<img src={ about } alt="about" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;