import * as React from 'react'
import * as Styles from './faqs.module.scss'
import c from 'classnames'
import FaqSingle from '../../components/faqSingle/faqSingle'

const Layout = ({ section }) => {
	const questions = section.items;
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c('section', section.sectionInfo[0].bgColor, 'section_' + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url('${section.sectionInfo[0].image}')`} : {}}>
			<div className={c(Styles.faqs, 'container', 'container' + section.containerSize)}>
				<h2 className='mb-40'>{section.title ? section.title : 'FAQs'}</h2>
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