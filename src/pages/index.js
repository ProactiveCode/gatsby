import * as React from "react"
import Header from '../components/header/header'
import Flipdown from '../components/flipdownImage/flipdownImage'
import TwoCol from '../components/twoCol/twoCol'
import Column from '../components/column/column'
import Section from '../components/section/section'
import FullHero from '../components/fullHero/fullHero'
import Title from '../components/title/title'
import Videos from '../components/videosSection/videosSection'
import Logos from '../components/logos/logos'
import { Helmet } from "react-helmet"
import c from 'classnames'
import { useState, useRef, useEffect } from "react"
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
	const prevScrollY = useRef(0);
	const [goingUp, setGoingUp] = useState(false);

	useEffect(() => {
	  const handleScroll = () => {
		const currentScrollY = window.scrollY;
		if (prevScrollY.current < currentScrollY && goingUp) {
		  setGoingUp(false);
		}
		if (prevScrollY.current > currentScrollY && !goingUp) {
		  setGoingUp(true);
		}
  
		prevScrollY.current = currentScrollY;
		console.log(goingUp, currentScrollY);

		const elements = document.querySelectorAll(".section");
			Array.from(elements).forEach((element, index) => {
				console.log(element.offsetHeight);
				console.log(index);
			});
	  };
  
	  window.addEventListener("scroll", handleScroll, { passive: true });
  
	  return () => window.removeEventListener("scroll", handleScroll);
	}, [goingUp]);
	
  	return (
		<main>
			<Helmet>
				<title>My Title fff</title>
				<meta name="title" content="title"></meta>
				<meta name="description" content="desc"></meta>
				<meta name="keywords" content="keywords"></meta>
			</Helmet>
			<Header pageTitle="Home Page">
				<p>I'm making this by following the Gatsby Tutorial.</p>
			</Header>
			<FullHero bgcolour="grey" image="../../../blog/post-2/p2.jpg" />
			<Section identifier="test" bgcolour="pink">
				<TwoCol containerSize="container1000">
					<Column type="col40">
						<h1>Our energy, your passion</h1>
						<p>We're a passionate digital agency that connects with you to create your digital vision in an intuitive way that delivers engaging results.</p>
					</Column>
					<Column type="col60">
						<Flipdown></Flipdown>
					</Column>
				</TwoCol>
			</Section>
			<Section identifier="bigchange" bgImage="/images/digital-energy-logo-final.svg">
				<div className={c('container', 'container800', 'svganim')}>
					<svg viewBox="0 0 365 365">
						<g id="H-letter">
							<line class="st0" x1="17" y1="0" x2="17" y2="124"/>
							<line class="st0" x1="33" y1="62" x2="68" y2="62"/>
							<line class="st0" x1="84" y1="0" x2="84" y2="124"/>
						</g>
						<g id="E-letter">
							<line class="st0" x1="138" y1="0" x2="138" y2="124"/>
							<line class="st0" x1="154" y1="17" x2="201" y2="17"/>
							<line class="st0" x1="154" y1="62" x2="196" y2="62"/>
							<line class="st0" x1="154" y1="107" x2="201" y2="107"/>
						</g>
						<g id="L-one-letter">
							<line class="st0" x1="243" y1="0" x2="243" y2="124"/>
							<line class="st0" x1="237" y1="107" x2="281" y2="107"/>
						</g>
						<g id="L-two-letter">
							<line class="st0" x1="319" y1="-1" x2="319" y2="123"/>
							<line class="st0" x1="310" y1="107" x2="354" y2="107"/>
						</g>
						<g id="O-letter">
							<circle class="st1" cx="183" cy="246.9" r="48"/>
						</g>
					</svg>
				</div>
			</Section>
			<Section identifier="test" bgcolour="grey" smaller="sectionSmall">
				<Title line="linePink" containerSize="container800" align="right">
					<h3 className={"large"}>What<br></br>we've done</h3>
				</Title>
			</Section>
			<Videos></Videos>
			<Section bgcolour="black">
				<div className={c('container', 'container800', 'carbon')}>
					<StaticImage width={800} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="../images/carbon.png" />
					<p>100% carbon off-set, we take our responsibilities serious. We have teamed up with Make It Wild to help us achieve our goals.</p>
				</div>
			</Section>
			<Section identifier="test" bgcolour="grey" smaller="sectionSmall">
				<Title line="linePink" containerSize="container800" align="left">
					<h2 className={"large"}>Who We’ve Helped<br></br>Along The Way</h2>
				</Title>
				<Logos containerSize="container800">
					<img width={'100%'} className={'logo'} objectFit={'contain'} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://via.placeholder.com/200x100" />
					<img width={'100%'} className={'logo'} objectFit={'contain'} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://via.placeholder.com/200x100" />
					<img width={'100%'} className={'logo'} objectFit={'contain'} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://via.placeholder.com/200x100" />
					<img width={'100%'} className={'logo'} objectFit={'contain'} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://via.placeholder.com/200x100" />
					<img width={'100%'} className={'logo'} objectFit={'contain'} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://via.placeholder.com/200x100" />
					<img width={'100%'} className={'logo'} objectFit={'contain'} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://via.placeholder.com/200x100" />
					<img width={'100%'} className={'logo'} objectFit={'contain'} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://via.placeholder.com/200x100" />
					<img width={'100%'} className={'logo'} objectFit={'contain'} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://via.placeholder.com/200x100" />
					<img width={'100%'} className={'logo'} objectFit={'contain'} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="https://via.placeholder.com/200x100" />
				</Logos>
			</Section>
			<Section identifier="test" bgcolour="blue" smaller="sectionSmall">
				<Title containerSize="container800">
					<h3 className={"large"}>We Like To<br></br>Share</h3>
					<p className={"container600"}>The team at Digital Energy come with lots of knowledge, ideas and creativity. We want to share with you our thoughts, recommendations, ideas and tips. We hope there is something here for everyone. </p>
				</Title>
			</Section>
		</main>
  	)
}

export default IndexPage
