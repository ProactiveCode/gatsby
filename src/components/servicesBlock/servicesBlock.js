import * as React from 'react'
import * as Styles from './servicesBlock.module.scss'
import c from 'classnames'

const FullHero = ({ section }) => {

	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
  	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c('container', 'container' + section.containerSize)}>
				<div className={c(Styles.servicesBlockTitle, Styles[section.titleAlign])}>		
					<h2 dangerouslySetInnerHTML={{__html: section.title}}></h2>
				</div>	
				<div className={c(Styles.servicesBlockWrap, section.extra_class)}>
					<div className={c(Styles.servicesBlockVideo)}>		
						<video playsInline="true" loading="lazy" src={section.contentVideo} autoPlay={true} muted={true} loop={true}></video>
					</div>	
					<div className={c(Styles.serviceBlockFlex, 'serviceBlockBG')}>		
						<div className={c(Styles.serviceBlockCol, Styles.serviceBlockColLeft)}>		
							{
								(section.leftColumn) ?  <div dangerouslySetInnerHTML={{__html: section.leftColumn}}></div> : ''
							}
						</div>
						<div className={c(Styles.serviceBlockCol, Styles.serviceBlockColRight)}>		
							{
								(section.rightColumn) ?  <div dangerouslySetInnerHTML={{__html: section.rightColumn}}></div> : ''
							}
						</div>
					</div>
				</div>
			</div>
		</section>
  	)
}

export default FullHero