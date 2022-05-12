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
import Footer from '../components/footer/footer'
import RecentPosts from '../components/recentPosts/recentPosts'
import { Helmet } from "react-helmet"
import c from 'classnames'
import { useState, useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = ({data}) => {
	const prevScrollY = useRef(0);
	const [goingUp, setGoingUp] = useState(false);
	console.log(data);

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
		// console.log(goingUp, currentScrollY);

		const elements = document.querySelectorAll(".section");
			Array.from(elements).forEach((element, index) => {
				// console.log(element.offsetHeight);
				// console.log(index);
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
			<Footer></Footer>
		</main>
  	)
}

export const query = graphql`
query {
  allFile(
	filter: {sourceInstanceName: {eq: "blog"}, ext: {eq: ".mdx"}}
	sort: {fields: childrenMdx___frontmatter___date, order: DESC}
  ) {
	nodes {
	  childMdx {
		frontmatter {
		  title
		  excerpt
		}
		slug
		id
	  }
	}
  }
}
`

export default IndexPage
