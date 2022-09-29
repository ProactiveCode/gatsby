import * as React from 'react'
import * as Styles from './serviceHero.module.scss'
import c from 'classnames'

const FullHero = ({ section, vol }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();

	const hidebg = (elem) => {
		document.getElementById('servicebg').classList.add('hidebg');
	}

	setTimeout(() => {
		document.getElementById('servicebg').classList.add('hidebg');
	}, 7200);
  	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size, Styles.homeRel, Styles.serviceHero)} style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div id='servicebg' className={c(Styles.serviceHeroBGVid)} style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
				<img src={section.mobileLogo} alt="Logo"></img>
				<h1>{section.mobileTitle}</h1>
				<button onClick={hidebg}>Skip this bit</button>
			</div>
			<div className={c(Styles.serviceHeroContent)}>		
				{
					(section.content) ?  <div dangerouslySetInnerHTML={{__html: section.content}}></div> : ''
				}
			</div>
		</section>
  	)
}

export default FullHero