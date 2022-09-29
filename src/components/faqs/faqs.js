import * as React from 'react'
import c from 'classnames'
import FaqSingle from '../../components/faqSingle/faqSingle'
import * as Styles from './faqs.module.scss'

const Layout = ({ section }) => {
	const questions = section.items;
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c('section', section.sectionInfo[0].bgColor, 'section_' + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url('${section.sectionInfo[0].image}')`} : {}}>
			<div className={c('container', 'container' + section.containerSize)}>
				{/* <h2 className='mb-40'>{section.title ? section.title : 'FAQs'}</h2> */}
				<img className={Styles.titleImg} src="https://images.ctfassets.net/74ncoczcn9dm/xIGwyB8jzv8VKoL4cclyb/7a6f6497e581d5003ecffe1686983973/faqs.png" alt="FAQs"></img>
				{
					questions.map((section, i) => (
						<FaqSingle val={section} key={i} />
					))
				}
			</div>
		</section>
	)
}

export default Layout