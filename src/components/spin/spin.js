import * as React from 'react'
import * as Styles from './spin.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();

	const toggleFlip = () => {
		if(document.getElementById('spinmobile').classList.contains('flipItem')) {
			document.getElementById('spinmobile').classList.remove("flipItem");
			document.getElementById('spinbutton').innerHTML = 'Tell me...';
		} else {
			document.getElementById('spinmobile').classList.add("flipItem");
			document.getElementById('spinbutton').innerHTML = 'Sorry, what was the question?';
		}
	}

	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)}>
			<div className={c(Styles.spin)}>
				<div className={c('container', 'container' + section.size, Styles[section.alignment], Styles.spinBG)} style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}} >
					<div className={Styles.spinWrap}>
						<div className={Styles.spinCol}>
							<div className={Styles.col1} dangerouslySetInnerHTML={{__html: section.contentLeft}}></div>
						</div>
						<div className={Styles.spinCol}>
							<div dangerouslySetInnerHTML={{__html: section.contentRight}}></div>
						</div>
					</div>
					<div id="spinmobile" className={Styles.spinWrapMobile}>
						<div className={Styles.spinMobUp}>
							<div dangerouslySetInnerHTML={{__html: section.contentRight}}></div>
							<button id="spinbutton" className='btn' onClick={toggleFlip}>Tell me...</button>
						</div>
						<div className={Styles.spinMobDown}>
							<div dangerouslySetInnerHTML={{__html: section.contentLeft}}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Layout