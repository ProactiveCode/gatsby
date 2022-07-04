import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header/header'
import FullHero from '../components/fullHero/fullHero'
import Footer from '../components/footer/footer'
import TwoCol from '../components/twoCol/twoCol'
import Logos from '../components/logos/logos'
import RecentPosts from '../components/recentPosts/recentPosts'
import Title from '../components/title/title'
import ContactForm from '../components/contact/contact'
import VideosSection from '../components/videosSection/videosSection'
import Generic from '../components/generic/generic'
import Faqs from '../components/faqs/faqs'
import NewHero from '../components/newHero/newHero'
import MainVideo from '../components/mainVideo/mainVideo'
import Testimonials from '../components/testimonials/testimonials'
import Neon from '../images/neon.wav'
import { Helmet } from "react-helmet"
import { useState, useRef, useEffect } from "react"

const Page = ({ data }) => {
	const pageData = JSON.parse(data.contentfulPage.mainContent.internal.content);
	const title = data.contentfulPage.metaTitle;
	const desc = data.contentfulPage.metaDescription;
	const sections = pageData['sections'];
	let playedBC = 0;
	let playedPhone = 0;
	let playedPop = 0;
	const [audio] = useState(typeof Audio !== "undefined" && new Audio(Neon));
	const [pop] = useState(typeof Audio !== "undefined" && new Audio('https://assets.ctfassets.net/74ncoczcn9dm/1T4c7qvsA56hqIlsXzeKA1/c6be3206e7461b462735333a4b640d74/pop.wav'));
	

	const prevScrollY = useRef(0);
	const [goingUp, setGoingUp] = useState(false);
	let volOn = 0;
	const [volume, setVolume] = useState(false);
	const off = 'https://images.ctfassets.net/74ncoczcn9dm/4sGcdhMmgkrpRoy3Tt55Vo/29294a8b83887e95ac2815ce9e82db34/volumeoff.svg';
	const on = 'https://images.ctfassets.net/74ncoczcn9dm/WcpUD1LGczvC9XIEWLd2U/becf8f460f27dc206e331e466fe483ee/volumeon.svg';
	let arrayAdded = [];
	let hasGend = 0;

	function setCookie(name, value, days) {
		var expires = "";
		if (days) {
		  var date = new Date();
		  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		  expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}

	function getCookieValue(name) {
		if (typeof window !== 'undefined') {
			return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
		}
	}
		

	setTimeout(() => {
		if (typeof window !== 'undefined') {
			if(data.contentfulPage.slug === "index") {
				const indi = document.getElementsByClassName('indicator')[0];
				const loadElements = document.querySelectorAll(".section");
				let count = 0;
				indi.innerHTML = '';
				Array.from(loadElements).forEach((element, index) => {
					var sectionID = element.dataset.id;
					var safeSection = sectionID.replace(/\s+/g, '-').replace("'", '').toLowerCase();
					if(!arrayAdded.includes(sectionID)) {
						arrayAdded.push(sectionID);
						if(count === 0) {
							indi.innerHTML += '<a href="/#' + safeSection +'" aria-label="Home page ' + sectionID + ' section" id="indicator-' + safeSection +'" class="indiclass is-active"><div class="scrollIndiInner"></div></a>';
						} else {
							indi.innerHTML += '<a href="/#' + safeSection +'" aria-label="Home page ' + sectionID + ' section" id="indicator-' + safeSection +'" class="indiclass"><div class="scrollIndiInner"></div></a>';
						}
					}
					count++;
				});

				if(!getCookieValue('homeVidPlayed')) {
					setTimeout(() => {
						document.getElementsByClassName('homeHeroVid')[0].classList.add("videoDone");
						setCookie('homeVidPlayed',1, 30);
					}, 37000);
				}
			}
		}
	}, 1);


	const toggleVolume = () => {
		const vol = document.querySelectorAll(".homevolume")[0];

		if(volOn == 0) {
			setVolume(true);
			vol.src = on;
			volOn = 1;
		} else {
			setVolume(false);
			vol.src = off;
			volOn = 0;
			audio.pause();
			audio.currentTime = 0;
		}
	}

	let videoHide = 0;
	let menuOpened = 0;
	let menuClosed = 0;

	useEffect(() => {
	  const handleScroll = () => {
		const current = window.location.pathname;
		let offset = 200;
		let up = false;
		const currentScrollY = window.scrollY;

			if (prevScrollY.current < currentScrollY && goingUp) {
				up = false;
			}

			if (prevScrollY.current > currentScrollY && !goingUp) {
				up = true;
			}

			if(up) {
				offset = 400;

				if(menuClosed === 0 && currentScrollY < 100 && current === '/' && window.innerWidth > 1299) {
					menuClosed = 1;
					document.getElementsByClassName('header-module--burgerOuterWrap--17l12')[0].classList.remove('header-module--burgerOpen--PxR-V');
					document.getElementsByClassName('header-module--burger--ZYCyO')[0].classList.remove('header-module--burgerOpen--PxR-V');
				}

			} else {
				offset = 200;

				if(videoHide === 0 && currentScrollY > 100 && !getCookieValue('homeVidPlayed')) {
					videoHide = 1;
					document.getElementsByClassName('homeHeroVid')[0].classList.add("videoDone");
					setCookie('homeVidPlayed',1, 30);
				}

				if(menuOpened === 0 && currentScrollY > 100 && current === '/' && window.innerWidth > 1299) {
					menuOpened = 1;
					document.getElementsByClassName('header-module--burgerOuterWrap--17l12')[0].classList.add('header-module--burgerOpen--PxR-V');
					document.getElementsByClassName('header-module--burger--ZYCyO')[0].classList.add('header-module--burgerOpen--PxR-V');
				}
			}
			prevScrollY.current = currentScrollY;
			const footer = document.querySelectorAll(".footer")[0];
			const header = document.querySelectorAll(".header")[0];

			if((currentScrollY + footer.getBoundingClientRect().top) <= (currentScrollY + (window.innerHeight - 72)) && ((currentScrollY + footer.getBoundingClientRect().top) + footer.offsetHeight) > currentScrollY) {
				header.classList.add('posAbs');
			} else {
				header.classList.remove('posAbs');
			}

			const elements = document.querySelectorAll(".section");
			Array.from(elements).forEach((element, index) => {
				if((currentScrollY + element.getBoundingClientRect().top) <= (currentScrollY + (window.innerHeight - offset)) && ((currentScrollY + element.getBoundingClientRect().top) + element.offsetHeight) > currentScrollY) {
					var locator = document.getElementsByClassName('page-locator')[0].textContent;
					var sectionID = element.dataset.id;
					var safeSection = 'indicator-' + sectionID.replace(/\s+/g, '-').replace("'", '').toLowerCase();
					if (current === '/') {
						if(locator !== sectionID) {
							document.getElementsByClassName('page-locator')[0].textContent = sectionID;
							document.querySelectorAll('.indiclass').forEach(x=>x.classList.remove("is-active"));
							document.getElementById(safeSection).classList.add("is-active");
						}
					}

					if(element.classList.contains('pink')) {
						document.getElementsByClassName('contact-link')[0].classList.add("contact-white");
						document.getElementsByClassName('headerLinksRight')[0].classList.add("hover-blue");
						document.getElementsByClassName('headerLinksLeft')[0].classList.add("hover-blue");
						document.getElementsByClassName('indicator')[0].classList.add("change-active");
					} else {
						document.getElementsByClassName('contact-link')[0].classList.remove("contact-white");
						document.getElementsByClassName('headerLinksRight')[0].classList.remove("hover-blue");
						document.getElementsByClassName('headerLinksLeft')[0].classList.remove("hover-blue");
						document.getElementsByClassName('indicator')[0].classList.remove("change-active");
					}

					if (current === '/') {
						if(sectionID === "Our Energy") {
							setTimeout(() => {
								if(playedBC === 0 && volOn === 1) {
									audio.cloneNode(true).play();
								}
								playedBC = 1;
								document.querySelectorAll('.bcmain').forEach(x=>x.classList.add('bcmainOn'));
								document.querySelectorAll('.bcmainwhite').forEach(x=>x.classList.add('bcmainwhiteOn'));
								document.querySelectorAll('.seemore').forEach(x=>x.classList.add('seemoreOn'));
								document.querySelectorAll('.seemorewhite').forEach(x=>x.classList.add('seemorewhiteOn'));
							}, 1000);
						}

						if(sectionID === "Let's talk") {
							setTimeout(() => {
								if(playedPhone === 0 && volOn === 1) {
									audio.cloneNode(true).play();
								}
								playedPhone = 1;
								document.querySelectorAll('.defaultflicker').forEach(x=>x.classList.add('defaultflickerOn'));
								document.querySelectorAll('.defaultflickerwhite').forEach(x=>x.classList.add('defaultflickerwhiteOn'));
								document.querySelectorAll('.phone').forEach(x=>x.classList.add('phoneOn'));
								document.querySelectorAll('.phonewhite').forEach(x=>x.classList.add('phonewhiteOn'));
								document.querySelectorAll('.timed').forEach(x=>x.classList.add('timedOn'));
								document.querySelectorAll('.timedwhite').forEach(x=>x.classList.add('timedwhiteOn'));
								document.querySelectorAll('.timed2').forEach(x=>x.classList.add('timed2On'));
								document.querySelectorAll('.timed2white').forEach(x=>x.classList.add('timed2whiteOn'));
								document.querySelectorAll('.timed3').forEach(x=>x.classList.add('timed3On'));
								document.querySelectorAll('.timed3white').forEach(x=>x.classList.add('timed3whiteOn'));
							}, 1000);
							setTimeout(() => {
								document.querySelectorAll('.timed').forEach(x=>x.classList.remove('timedOn'));
								document.querySelectorAll('.timedwhite').forEach(x=>x.classList.remove('timedwhiteOn'));
								document.querySelectorAll('.timed2').forEach(x=>x.classList.remove('timed2On'));
								document.querySelectorAll('.timed2white').forEach(x=>x.classList.remove('timed2whiteOn'));
								document.querySelectorAll('.timed3').forEach(x=>x.classList.remove('timed3On'));
								document.querySelectorAll('.timed3white').forEach(x=>x.classList.remove('timed3whiteOn'));
								if(playedPop === 0 && volOn === 1) {
									pop.cloneNode(true).play();
								}
								playedPop = 1;
								document.querySelectorAll('.willbreak')[0].classList.add('hide');
								document.querySelectorAll('.brokenPart')[0].classList.add('show');
							}, 14500);
						}
					}
				}
			});
	  };
  
	  window.addEventListener("scroll", handleScroll, { passive: true });
  
	  return () => window.removeEventListener("scroll", handleScroll);
	}, [goingUp]);

	const LoadSection = ({ val }) => {
		switch (val.__typename) {
			case "TitleBlock" :
				return <Title section={val} />;
			case "FullHero" :
				return <FullHero section={val} />;
			case "MultiColumns" :
				return <TwoCol section={val} vol={volume} />;
			case "Generic" :
				return <Generic section={val} />;
			case "Videos" :
				return <VideosSection section={val} />;
			case "Logos" :
				return <Logos section={val} />;
			case "ContactForm" :
				return <ContactForm section={val} />;
			case "RecentPosts" :
				return <RecentPosts section={val} />;
			case "Faqs" :
				return <Faqs section={val} />;
			case "NewHero" :
				return <NewHero section={val} />;
			case "MainVideo" :
				return <MainVideo section={val} />;
			case "Testimonials" :
				return <Testimonials section={val} />;
		  default:
			return "Block not found.";
		}
	};

	let currentPageClass = 'noneHome';

	if (typeof window !== 'undefined') {
		if(data.contentfulPage.slug === "index") {
			currentPageClass = 'home';
		}
	}

  return (
		<main className={currentPageClass}>
			<Helmet htmlAttributes={{lang: 'en'}}>
				<title>{title}</title>
				<meta name="title" content={title}></meta>
				<meta name="description" content={desc}></meta>
				<meta name="keywords" content="keywords"></meta>
			</Helmet>
			<Header></Header>
			{ data.contentfulPage.slug == "index" && <button style={{display: 'block'}} onClick={toggleVolume}><img className="homevolume" src="https://images.ctfassets.net/74ncoczcn9dm/4sGcdhMmgkrpRoy3Tt55Vo/29294a8b83887e95ac2815ce9e82db34/volumeoff.svg" alt="Turn volume on"></img></button> }
			{
				sections.map((section, i) => (
					<LoadSection val={section} key={i} />
				))
			}
			<Footer></Footer>
		</main>
  	)
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      title
	  slug
	  id
	  metaTitle
      metaDescription
      mainContent {
        internal {
          content
        }
      }
    }
  }
`;

export default Page;