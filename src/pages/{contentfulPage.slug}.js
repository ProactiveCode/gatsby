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
import { Helmet } from "react-helmet"
import { useState, useRef, useEffect } from "react"

const Page = ({ data }) => {
	const pageData = JSON.parse(data.contentfulPage.mainContent.internal.content);
	console.log(data);
	const title = data.contentfulPage.metaTitle;
	const desc = data.contentfulPage.metaDescription;
	const sections = pageData['sections'];
	console.log(sections);
	let playedBC = 0;
	let playedPhone = 0;
	var audio = new Audio('https://www.w3schools.com/html/horse.mp3');

	const prevScrollY = useRef(0);
	const [goingUp, setGoingUp] = useState(false);
	console.log(data);
	let volOn = 0;
	const [volume, setVolume] = useState(false);
	const off = 'https://images.ctfassets.net/74ncoczcn9dm/4sGcdhMmgkrpRoy3Tt55Vo/29294a8b83887e95ac2815ce9e82db34/volumeoff.svg';
	const on = 'https://images.ctfassets.net/74ncoczcn9dm/WcpUD1LGczvC9XIEWLd2U/becf8f460f27dc206e331e466fe483ee/volumeon.svg';

	const toggleVolume = () => {
		const vol = document.querySelectorAll(".homevolume")[0];

		if(volOn == 0) {
			// setVolume(true);
			vol.src = on;
			volOn = 1;
		} else {
			// setVolume(false);
			vol.src = off;
			volOn = 0;
			console.log('pause');
			console.log(audio);
			audio.pause();
			audio.currentTime = 0;
		}
	}

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
			} else {
				offset = 200;
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
					if (current === '/') {
						if(locator !== sectionID) {
							document.getElementsByClassName('page-locator')[0].textContent = sectionID;
						}
					}

					if(element.classList.contains('pink')) {
						document.getElementsByClassName('contact-link')[0].classList.add("contact-white");
					} else {
						document.getElementsByClassName('contact-link')[0].classList.remove("contact-white");
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
				return <TwoCol section={val} />;
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
		  default:
			return "Block not found.";
		}
	};

  return (
		<main>
			<Helmet>
				<title>{title}</title>
				<meta name="title" content={title}></meta>
				<meta name="description" content={desc}></meta>
				<meta name="keywords" content="keywords"></meta>
			</Helmet>
			<Header></Header>
			{  window.location.pathname == "/" && <a href="javascript:void(0);" onClick={toggleVolume}><img className="homevolume" src="https://images.ctfassets.net/74ncoczcn9dm/4sGcdhMmgkrpRoy3Tt55Vo/29294a8b83887e95ac2815ce9e82db34/volumeoff.svg" alt="Turn volume on"></img></a> }
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