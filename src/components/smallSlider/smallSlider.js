import * as React from 'react'
import * as Styles from './smallSlider.module.scss'
import c from 'classnames'
import { useState } from "react"

const Layout = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();

	const [clicked, setClicked] = useState(false);

	const toggleClick = (elem) => {
		if (typeof window !== 'undefined') {
			if(window.innerWidth < 768) {
				if(elem.target.closest('.smallSliderClicker').classList.contains('smallSlider-module--clicked--0XcQc')) {
					elem.target.closest('.smallSliderClicker').classList.remove("smallSlider-module--clicked--0XcQc");
					setClicked(false);
				} else {
					elem.target.closest('.smallSliderClicker').classList.add("smallSlider-module--clicked--0XcQc");
					setClicked(true);
				}
			}
		}
	}

	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)}>
			<div className={c(Styles.smallSlider)}>
				<div className={c('container', 'container' + section.size, Styles[section.colour])}  style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}} >
					<div className={c(Styles.smallSliderWrap,'smallSliderClicker')} onClick={toggleClick}>
						<div className={Styles.smallSliderLeft}>
							<div className={Styles.smallSliderContentWrapLeft} dangerouslySetInnerHTML={{__html: section.col1}}></div>
						</div>
						<div className={Styles.smallSliderRight}>
							<div className={Styles.smallSliderContentWrapRight} dangerouslySetInnerHTML={{__html: section.col2}}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Layout