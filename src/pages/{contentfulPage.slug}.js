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
import { Helmet } from "react-helmet"
import { useState, useRef, useEffect } from "react"

const Page = ({ data }) => {
	const pageData = JSON.parse(data.contentfulPage.mainContent.internal.content);
	console.log(data);
	const title = data.contentfulPage.metaTitle;
	const desc = data.contentfulPage.metaDescription;
	const sections = pageData['sections'];
	console.log(sections);

	const prevScrollY = useRef(0);
	const [goingUp, setGoingUp] = useState(false);
	console.log(data);

	useEffect(() => {
	  const handleScroll = () => {
		const current = window.location.pathname;
		let offset = 200;
		let up = false;
		if (current === '/') {
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

			const elements = document.querySelectorAll(".section");
			Array.from(elements).forEach((element, index) => {
				if((currentScrollY + element.getBoundingClientRect().top) <= (currentScrollY + (window.innerHeight - offset)) && ((currentScrollY + element.getBoundingClientRect().top) + element.offsetHeight) > currentScrollY) {
					var locator = document.getElementsByClassName('page-locator')[0].textContent;
					var sectionID = element.dataset.id;

					if(locator !== sectionID) {
						document.getElementsByClassName('page-locator')[0].textContent = sectionID;
					}

					if(element.classList.contains('pink')) {
						document.getElementsByClassName('contact-link')[0].classList.add("contact-white");
					} else {
						document.getElementsByClassName('contact-link')[0].classList.remove("contact-white");
					}

					if(sectionID === "Our Energy") {
						setTimeout(() => {
							document.querySelectorAll('.bcmain').forEach(x=>x.classList.add('bcmainOn'));
							document.querySelectorAll('.bcmainwhite').forEach(x=>x.classList.add('bcmainwhiteOn'));
							document.querySelectorAll('.seemore').forEach(x=>x.classList.add('seemoreOn'));
							document.querySelectorAll('.seemorewhite').forEach(x=>x.classList.add('seemorewhiteOn'));
						}, 1000);
					}

					if(sectionID === "Let's talk") {
						setTimeout(() => {
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
			});
		} else {

		}
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