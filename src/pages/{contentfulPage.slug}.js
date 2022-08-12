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
import Generic from '../components/generic/generic'
import Faqs from '../components/faqs/faqs'
import NewHero from '../components/newHero/newHero'
import LargeHero from '../components/largeHero/largeHero'
import MainVideo from '../components/mainVideo/mainVideo'
import ServicesBlock from '../components/servicesBlock/servicesBlock'
import Testimonials from '../components/testimonials/testimonials'
import CookiesBar from '../components/cookies/cookies'
import Floating from '../components/floating/floating'
import Neon from '../images/neon-compressed.m4a'
import Bulb from '../images/pop.wav'
import { Helmet } from "react-helmet"
import { useState, useRef, useEffect } from "react"
import {Howl} from 'howler';
import Cookies from 'js-cookie'
import loadable from '@loadable/component'

const VideosSection = loadable(() => import('../components/videosSection/videosSection'));
const Train = loadable(() => import('../components/train/train'));

const Page = ({ data }) => {
	const pageData = JSON.parse(data.contentfulPage.mainContent.internal.content);
	const title = data.contentfulPage.metaTitle;
	const desc = data.contentfulPage.metaDescription;
	const sections = pageData['sections'];

	const clip = new Howl({
		src: [Neon],
		volume: 1,
		preload: true
	});

	const bulbpop = new Howl({
		src: [Bulb],
		volume: 1,
		preload: true
	});

	const prevScrollY = useRef(0);
	const [goingUp] = useState(false);
	let volOn = 0;
	const [volume, setVolume] = useState(false);
	const off = 'https://images.ctfassets.net/74ncoczcn9dm/4sGcdhMmgkrpRoy3Tt55Vo/29294a8b83887e95ac2815ce9e82db34/volumeoff.svg';
	const on = 'https://images.ctfassets.net/74ncoczcn9dm/WcpUD1LGczvC9XIEWLd2U/becf8f460f27dc206e331e466fe483ee/volumeon.svg';
	let arrayAdded = [];


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

				if(!Cookies.get('homeVidPlayed')) {
					setTimeout(() => {
						document.getElementsByClassName('homeHeroVid')[0].classList.add("videoDone");
						Cookies.set('homeVidPlayed', 1);
					}, 35500);
				}

				setTimeout(() => {
					if(window.location.hash.substr(1)) {
						let urlID = window.location.hash.substr(1);
						document.getElementById(urlID).scrollIntoView({
							behavior: 'smooth'
						  });
					}
				}, 500);
				
			}
		}
	}, 1);


	const toggleVolume = () => {
		const vol = document.querySelectorAll(".homevolume")[0];

		if(volOn === 0) {
			setVolume(true);
			vol.src = on;
			volOn = 1;
		} else {
			setVolume(false);
			vol.src = off;
			volOn = 0;
		}
	}

	useEffect(() => {
		let videoHide = 0;
		let menuOpened = 0;
		let menuClosed = 0;
		let playedBC = 0;
		let playedPhone = 0;
		let playedPop = 0;
		let devDone = 0;
		let designDone = 0;
		let seoDone = 0;
		let hostDone = 0;

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

				if(videoHide === 0 && currentScrollY > 100 && !Cookies.get('homeVidPlayed')) {
					videoHide = 1;
					document.getElementsByClassName('homeHeroVid')[0].classList.add("videoDone");
					Cookies.set('homeVidPlayed', 1);
					document.getElementById("homeVideoVid").pause();
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
						document.getElementsByClassName('page-locator')[0].classList.add("contact-white");
						document.getElementsByClassName('headerLinksRight')[0].classList.add("hover-blue");
						document.getElementsByClassName('headerLinksLeft')[0].classList.add("hover-blue");
						document.getElementsByClassName('indicator')[0].classList.add("change-active");
					} else {
						document.getElementsByClassName('contact-link')[0].classList.remove("contact-white");
						document.getElementsByClassName('page-locator')[0].classList.remove("contact-white");
						document.getElementsByClassName('headerLinksRight')[0].classList.remove("hover-blue");
						document.getElementsByClassName('headerLinksLeft')[0].classList.remove("hover-blue");
						document.getElementsByClassName('indicator')[0].classList.remove("change-active");
					}

					if (current === '/') {
						if(sectionID === "Our Energy") {
							setTimeout(() => {
								if(playedBC === 0 && volOn === 1) {
									// audio.cloneNode(true).play();
									clip.play();
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
									// audio.cloneNode(true).play();
									clip.play();
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
									// pop.cloneNode(true).play();
									bulbpop.play();
								}
								playedPop = 1;
								document.querySelectorAll('.willbreak')[0].classList.add('hide');
								document.querySelectorAll('.brokenPart')[0].classList.add('show');
							}, 14500);
						}
					}

					if (current === '/web-development/' || current === '/seo/' || current === '/web-design/' || current === '/web-hosting/') {
						if(currentScrollY > 100) {
							setTimeout(() => {
								document.getElementById('floatingContact').classList.add('showFloating');
							}, 10);
						} else {
							setTimeout(() => {
								document.getElementById('floatingContact').classList.remove('showFloating');
							}, 10);
						}
					}

					if (current === '/services/') {
						if(sectionID === "serviceDev") {
							setTimeout(() => {
								if(devDone === 0) {
									devDone = 1;
									document.getElementById('servicedev').classList.add('showItem');
								}
							}, 1000);
						}

						if(sectionID === "serviceDesign") {
							setTimeout(() => {
								if(designDone === 0) {
									designDone = 1;
									document.getElementById('servicedesign').classList.add('showItem');
								}
							}, 1000);
						}

						if(sectionID === "serviceSEO") {
							setTimeout(() => {
								if(seoDone === 0) {
									seoDone = 1;
									document.getElementById('serviceseo').classList.add('showItem');
								}
							}, 1000);
						}

						if(sectionID === "serviceHosting") {
							setTimeout(() => {
								if(hostDone === 0) {
									hostDone = 1;
									document.getElementById('servicehosting').classList.add('showItem');
								}
							}, 1000);
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
				return <FullHero section={val} vol={volume} />;
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
			case "Train" :
				return <Train section={val} />;
			case "LargeHero" :
				return <LargeHero section={val} />;
			case "Service" :
				return <ServicesBlock section={val} />;
			case "Floating" :
				return <Floating section={val} />;
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

	setTimeout(() => {
		if (typeof window !== 'undefined') {
			var element = document.getElementById("main");
			element.className = '';
			element.classList.add(currentPageClass);
		}
	}, 10);
  return (
		<main id="main" className={currentPageClass}>
			<Helmet htmlAttributes={{lang: 'en', style: 'background-color: #2E2D2C;'}} >
				<title>{title}</title>
				<meta name="title" content={title}></meta>
				<meta name="description" content={desc}></meta>
				<script type="application/ld+json">
					{JSON.stringify({ "@context": "http://www.schema.org",
						"@type": "ProfessionalService",
						"name": "Digital Energy Agency",
						"url": "https://digitalenergy.agency",
						"sameAs": [
							"https://www.facebook.com/digitalenagency/",
							"https://www.instagram.com/digitalenergyagency/",
							"https://twitter.com/DigitalEnAgency",
							"https://morley-leeds.cylex-uk.co.uk/company/digital-energy-27728222.html",
							"https://www.acompio.co.uk/Digital-Energy-36494677.html",
							"https://foursquare.com/v/digital-energy/61dac9e0013a301c21381104",
							"https://www.yell.com/biz/proactive-code-leeds-10348494/"
						],
						"logo": "https://images.ctfassets.net/74ncoczcn9dm/BjTTMmbDsuVLBxIkwdmyH/e47fb9e2346b93ba3edd44582af80263/logo-no-text.svg",
						"description": "Digital Energy is a Leeds based digital agency offering unique solutions across SEO (Search Engine Optimisation) & Digital Marketing, Web Development, Website Design, Web Hosting and Google Pay-Per-Click Advertising. We work with some of the regions fastest growing and most exciting brands, specialising in creating websites and web solutions tailored to meeting the unique demands of our customers, and engaging digital marketing, that's focused on driving maximum return on investment.",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "Hawthorne court, Howley Park Rd E, Morley",
							"addressLocality": "Leeds",
							"addressRegion": "West Yorkshire",
							"postalCode": "LS27 0FD",
							"addressCountry": "United Kingdom"
						},
						"geo": {
							"@type": "GeoCoordinates",
							"latitude": "53.7344062",
							"longitude": "-1.6101456"
						},
						"hasMap": "https://g.page/proactive-code?share",
						"openingHours": "Mo 08:30-17:30 Tu 08:30-17:30 We 08:30-17:30 Th 08:30-17:30 Fr 08:30-17:30",
						"telephone": "+44 01138500164"
					})}
				</script>
				<script type="application/ld+json">
					{JSON.stringify({ 
						"@context":"https://schema.org",
						"@type":"Product",
						"name":"Digital Energy Services",
						"image": {
							"@type":"ImageObject",
							"url":"https://images.ctfassets.net/74ncoczcn9dm/BjTTMmbDsuVLBxIkwdmyH/e47fb9e2346b93ba3edd44582af80263/logo-no-text.svg"
						},
						"description":"Digital Energy is a Leeds based digital agency offering unique solutions across SEO (Search Engine Optimisation) & Digital Marketing, Web Development, Website Design, Web Hosting and Google Pay-Per-Click Advertising.",
						"brand": {
							"@type":"Organization",
							"name":"Digital Energy Agency"
						},
						"aggregateRating": {
							"@type":"AggregateRating",
							"ratingValue":"5.0",
							"reviewCount":"5"
						}
					})}
				</script>
				<script type="application/ld+json">
					{JSON.stringify({ 
						"@context":"https://schema.org",
						"@type":"WebSite",
						"name":"Digital Energy Agency",
						"url":"https://www.digitalenergy.agency"
					})}
				</script>
			</Helmet>
			<Header></Header>
			{ data.contentfulPage.slug === "index" && <button style={{display: 'block'}} onClick={toggleVolume}><img className="homevolume" src="https://images.ctfassets.net/74ncoczcn9dm/4sGcdhMmgkrpRoy3Tt55Vo/29294a8b83887e95ac2815ce9e82db34/volumeoff.svg" alt="Turn volume on"></img></button> }
			{
				sections.map((section, i) => (
					<LoadSection val={section} key={i} />
				))
			}
			<Footer></Footer>
			<CookiesBar></CookiesBar>
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