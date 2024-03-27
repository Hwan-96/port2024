import React, { useState, useEffect } from "react";

import { headerNav } from "../constants";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Header = () => {

	const [show,setShow] = useState(false);

	const toggleMenu = () =>{
		setShow((preShow) => !preShow);
	};

	useEffect(() => {

		gsap.registerPlugin(ScrollToPlugin);

		const scrollToSection = (sectionId) => {
			gsap.to(window, {
				scrollTo: {
					y: sectionId,
					offsetY: 0,
					autoKill: false
				},
				duration: 1,
				ease: 'power3.inOut'
			});
		};

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        scrollToSection(sectionId);
      });
    });
  }, []);

	return (
		<header id="header" role="banner">
			<div className="header-inner">
				<div className="header-logo">
					<a href="/">YunHwan. Kim<em>portfolio</em></a>
				</div>
				<nav className={`header-nav ${show ? "show" : ""}`} role="navigation" aria-label="메인메뉴">
					<ul>
						{headerNav.map((nav, key)=>(
							<li key={key}>
								<a href={nav.url}>{nav.title}</a>
							</li>
						))}
					</ul>
				</nav>
				<div
					className="header-nav-mo"
					id="headerToggle"
					aria-controls="primary-menu"
					aria-expanded={show ? "true":"false"}
					role="button" 
					tabIndex="0"
					onClick={toggleMenu}
				>
					<div className="mo-btn-wrap">
						<span></span>
					</div>
				</div>
			</div>
		</header>
	)
};

export default Header;