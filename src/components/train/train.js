import * as React from 'react'
import * as Styles from './train.module.scss'
import c from 'classnames'
import { gsap }  from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react"

const Train = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				markers: true,
			  	trigger: ".mainTrain",
				start: "top bottom+=200",
			  	scrub: true,
			},
		  });
		  tl.to(".mainTrain img", {transform: "TranslateX(30%)", delay: 0.25, ease: 'sine'})
	}, []);

  	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c(Styles.trainWrap)}>
				<div className={c('container', 'container1000')}>
					<div className={c(Styles.trainTitle)}>
						<div dangerouslySetInnerHTML={{__html: section.content}}></div>
					</div>
				</div>
				<div className={c(Styles.trainImage, 'mainTrain')}>
					<img src='https://images.ctfassets.net/74ncoczcn9dm/4BdggIR8AkjUyyaN8vd7Uv/4d19be9046ddeca6bc8f1459c441f5de/large-train.png' alt='Train'></img>
				</div>
				<div className={c('container', 'container1000')}>
					<div className={c(Styles.trainText)}>
						<div dangerouslySetInnerHTML={{__html: section.contentPara}}></div>
					</div>
				</div>
			</div>
		</section>
  	)
}

export default Train