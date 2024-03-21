import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";

import pj01 from "../assets/img/pj01.jpg";
import pj01bg from "../assets/img/pj01bg.jpg";
import pj02 from "../assets/img/pj02.jpg";
import pj02bg from "../assets/img/pj02bg.jpg";
import pj03 from "../assets/img/pj03.jpg";
import pj03bg from "../assets/img/pj03bg.jpg";

export const headerNav = [
	{
		title: "<intro>",
		url: "#intro",
	},
	{
		title: "<skill>",
		url: "#skill",
	},
	{
		title: "<site>",
		url: "#site",
	},
	{
		title: "<portfolio>",
		url: "#port",
	},
	{
		title: "<contact>",
		url: "#contact",
	},
];

export const introText = {
	title: ["Kim Yun Hwan:","Web Experiences"],
	desc: ["Crafting"," interaction"," Creative"]
}

export const skillText = [
  {
    title: "Front-end",
		subtit: ["HTML/CSS","JavaScript","React","Bootstrap","Vue"],
    desc: [
			"HTML은 웹 페이지의 구조를 정의하고, 시멘틱 태그를 사용하여 마크업을 구현하고, CSS는 스타일 및 레이아웃을 지정하는 데 사용됩니다. 마크업에 디자인을 적용하여 웹 페이지를 시각적으로 꾸며줍니다.",
			"웹에서 동적인 기능을 하는 프로그래밍 언어입니다. 웹 개발에서 널리 사용되며, 이벤트 처리, DOM 조작, Ajax를 이용한 비동기 통신 등 다양한 기능을 할 수 있습니다.",
			"UI를 구축하기 위한 라이브러리로, 컴포넌트를 사용하여 복잡한 UI를 구성하고 관리하는 데 용이합니다. 가상 DOM을 활용하여 성능을 최적화하고, 단방향 데이터 흐름을 갖추어 상태 관리를 용이하게 합니다.",
			"반응형 디자인, UI 컴포넌트를 쉽게 구축하기 위한 프레임워크로, Grid, 텍스트 스타일링, Form, Button, Nav 등 다양한 요소를 제공하여 빠르게 웹을 구축할 수 있어서 사용했습니다.",
			"Vue도 리액트와 같은 SPA를 개발할때 사용됩니다. 아직 공부중에 있습니다.",
		],
  },
  {
    title: "Library",
		subtit: ["Swiper","SCSS","jQuery","Gsap","Anime",],
    desc: [
			"Demo를 활용한 여러가지 슬라이드 구현이 가능하여 사용합니다.",
			"CSS 속성들이 사용되는 Class의 구조를 보다 쉽게 관리 및 수정이 가능하고 압축된 사용이 가능해서 사용하였습니다.",
			"JavaScript로 DOM 조작 및 이벤트 처리를 단순화하는 라이브러리이며 요소를 쉽게 조작하고, Ajax 요청을 간편하게 보낼 수 있으며, 애니메이션과 UI 기능을 포함하고 있어서 사용했습니다.",
			"GSAP은 인터렉티브한 애니메이션을 만들기 위한 라이브러리로, Tween, Timeline, ScrollTrigger 등 다양한 기능을 제공하고, 성능이 우수하며 브라우저 호환성이 좋기 때문에 사용하게 되었습니다.",
			"가볍고 간편한 애니메이션 라이브러리로, CSS 속성을 사용하여 쉽게 애니메이션을 만들 수 있고, SVG 조작이 용이하여 사용했습니다.",
		],
  },
  {
    title: "Tool",
		subtit: ["Figma","Slack","Github","Photoshop","illustrator"],
    desc: [
			"웹사이트를 디자인하고 같은 반복적인 작업이 필요할 때는 컴포넌트 분리 후 수정하는등 유지보수에 용이한 기능이 제공되어 사용하게 되었습니다.",
			"협업하는 사람들 혹은 회사내에서 팀에서 코드 공유 및 업무분배에 좋은 수단이여서 사용하게 되었습니다.",
			"브랜치를 나누어 작업하며 메인 브랜치에 merge를 하거나, 팀프로젝트를 진행하여 여러기능을 사용해 보았으며, 개인 프로젝트들을 자주 커밋하며 사용합니다.",
			"그래픽 툴이며 피그마에서 보다 디테일한 이미지 조정이 필요한 상황에서 주로 사용합니다. 개인적으로는 피그마로 와이어프레임을 설계하고 포토샵으로 시안을 제작합니다.",
			"벡터 이미지가 필요하거나 정교한 그래픽 작업을 하기 위해 사용합니다. 현재는 주로 로고나 포토샵에서 작업할때 필요한 그래픽을 제작하며 사용합니다.",
		],
  },
];

export const siteText = [
	{
		text: ["첫번째 포트폴리오","학원을 수료하며 처음 제작한 포트폴리오, 학원에서 제시해준 Pullpage.js를 사용하지 않고 웹 트렌드를 조사하며 Scroll을 이용한 웹을 만들려고 노력하였던 웹 사이트"],
		title: "First Portfolio",
		code:"http://yunhwan96.pe.kr",
		view:"http://yunhwan96.pe.kr",
		info:[
			"기여도 : 100% Persnol",
			"production period : 20 days",
			"use stack : HTML/CSS, JavaScript, jQuery, Scss, Gsap",
		],
		img: pj01,
		bg: pj01bg,
		name:"첫번째 포트폴리오",
	},
	{
		text: ["호요버스 전체페이지","제작 당시 좋아했던 게임사의 전체페이지를 리뉴얼하며 많은 Tab, Gallery, Animation을 구현하느라 어려웠고, 해결해 나가며 성취감이 컷던 프로젝트"],
		title: "HOYOVERSE",
		code:"http://yunhwan96.pe.kr",
		view:"http://yunhwan96.pe.kr",
		info:[
			"사이트 코딩 소제목",
			"production period : 2 days 플젝걸린기간",
			"use stack : 기술스택",
		],
		img: pj02,
		bg: pj02bg,
		name:"호요버스 홈페이지",
	},
	{
		text: ["아더에러 전체페이지","Git을 활용해 처음으로 협업을 해보았던 프로젝트, 리더로써 모자란 점을 많이 배웠고, 책임감을 가지고 프로젝트 완성도를 위해 갖은 노력을 했던 프로젝트"],
		title: "ADERERROR",
		code:"http://yunhwan96.pe.kr",
		view:"http://yunhwan96.pe.kr",
		info:[
			"사이트 코딩 소제목",
			"production period : 2 days 플젝걸린기간",
			"use stack : 기술스택",
		],
		img: pj03,
		bg: pj03bg,
		name:"아더에러 홈페이지",
	},
	// {
	// 	text: ["사이트2","본문","내용"],
	// 	title: "사이트2 제목 ex) Hoyoverse",
	// 	code:"http://yunhwan96.pe.kr/",
	// 	view:"http://yunhwan96.pe.kr",
	// 	info:[
	// 		"사이트 코딩 소제목",
	// 		"production period : 2 days 플젝걸린기간",
	// 		"use stack : 기술스택",
	// 	]
	// },
];

export const portText = [
	{
		num: "01",
		title: "국립중앙도서관",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port01,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
	{
		num: "02",
		title: "Newjeans",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port02,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
	{
		num: "03",
		title: "2023 Web Trend",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port03,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
	{
		num: "04",
		title: "Sake09",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port04,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
	{
		num: "05",
		title: "Laftel",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port05,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
	{
		num: "06",
		title: "Steam",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port06,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
	{
		num: "07",
		title: "포트폴리오 07",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port07,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
	{
		num: "08",
		title: "포트폴리오 08",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port08,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
	{
		num: "09",
		title: "포트폴리오 09",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port09,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
	{
		num: "10",
		title: "포트폴리오 10",
		desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique temporibus ut totam animi quisquam rerum voluptate veritatis soluta est culpa.",
		img: port10,
		code:"http://yunhwan96.pe.kr/",
		view:"http://yunhwan96.pe.kr/",
		name:"이미지 alt",
	},
];

export const contactText = [
	{
		link: "tel:010-5844-1752",
		title: "Phone: 010. 5844. 1752",
	},
	{
		link: "mailto:yunhwan0960@gmail.com",
		title: "mail: yunhwan0960@gmail.com",
	},
]