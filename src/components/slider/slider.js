import * as React from 'react'
import * as Styles from './slider.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();

	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)}>
			<div className={c(Styles.slider)} style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}} >
				<div className={c('container', 'container' + section.size, Styles[section.alignment])}>
					<div className={Styles.sliderWrap}>
						<div className={Styles.sliderLeft}>
							<div dangerouslySetInnerHTML={{__html: section.contentLeft}}></div>
						</div>
						<div className={Styles.sliderRight}>
							<div dangerouslySetInnerHTML={{__html: section.contentRight}}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Layout