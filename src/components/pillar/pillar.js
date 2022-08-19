import * as React from 'react'
import * as Styles from './pillar.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c('container', 'container1200', Styles.overallWrapper)} style={ section.bgImage ? { backgroundImage:  `url("${section.bgImage}")`} : {}}>
				<div className={c('container', 'container' + section.size, section.extra_class, 'colDir' +  section.leftRight, Styles.pillarColWrap)}>
					<div className={Styles.pillarCol}>
						<div dangerouslySetInnerHTML={{__html: section.content}}></div>
					</div>
					<div className={c(Styles.pillarCol, Styles.pillarColMob, 'pillarColMobOverride' )}>
						<div className={c(Styles.mobileNum)}>
							<img src={section.mobileImage} alt='Number'></img>
						</div>
						<div className={c(Styles.mobileBorder, 'mobileBorderOverride')}>
							<img src='https://images.ctfassets.net/74ncoczcn9dm/53TZmcVzfdnsg8f3OM3K2n/87ed891050bed40ad1797ce1aa74a869/border-m.png' alt='Number'></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Layout