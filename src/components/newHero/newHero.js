import * as React from 'react'
import * as Styles from './newHero.module.scss'
import c from 'classnames'

const newHero = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
  	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div>
				<div className={c(Styles.newHeroWrap, '')}>
					<div className={Styles.newHeroMob}>
						<img src={section.mobileImage} alt={section.contentMobileImageAlt}></img>
					</div>
					<div className={c(Styles.newHeroContent)}>
						{
							(section.content) ?  <div className={c(Styles.newHeroContentDiv, 'container', 'container1000')} dangerouslySetInnerHTML={{__html: section.content}}></div> : ''
						}
					</div>
					<div className={Styles.newHeroImage}>
						<img src={section.contentImage} alt={section.contentImageAlt}></img>
					</div>
				</div>
			</div>
		</section>
  	)
}

export default newHero