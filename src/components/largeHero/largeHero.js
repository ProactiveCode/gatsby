import * as React from 'react'
import * as Styles from './largeHero.module.scss'
import c from 'classnames'

const FullHero = ({ section, vol }) => {

	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
  	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size, Styles.homeRel)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c(Styles.largeHeroBGVid)}>
				<video playsInline="true" loading="lazy" src={section.contentVideo} autoPlay={true} muted={true}></video>
			</div>
			<div className={c(Styles.largeHeroContent)}>		
				{
					(section.content) ?  <div dangerouslySetInnerHTML={{__html: section.content}}></div> : ''
				}
			</div>
		</section>
  	)
}

export default FullHero