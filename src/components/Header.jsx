import React, { useState } from "react";

import { headerNav } from "../constants";

const Header = () => {

	const [show,setShow] = useState(false);

	const toggleMenu = () =>{
		setShow((preShow) => !preShow);
	};

	return (
		<header id="header" role="banner">
			<div className="header-inner">
				<div className="header-logo">
					<a href="/">YunHwan. Kim<em>portfolio</em></a>
				</div>
				<nav className={`header-nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
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