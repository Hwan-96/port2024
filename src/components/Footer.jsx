import React from "react";
import { gsap } from 'gsap';

const Footer = () => {
	const ToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0, autoKill: false },
      ease: 'power3.inOut'
    });
  };

  return (
		<footer id="footer">
			<ul className="footer-inner">
				<li className="footer-copy">
					<p>© 2024 Kimyunhwan React Portfolio</p>
					<button className="top-btn" onClick={ToTop}>
						Top
					</button>
				</li>
				<li className="footer-right">
					<a href="https://github.com/Hwan-96" target="_blank">GitHub</a>
					<a href="https://velog.io/@dbsghks0960/posts" target="_blank">Velog</a>
				</li>
			</ul>
		</footer>
	)
};

export default Footer;