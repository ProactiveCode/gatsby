import * as React from 'react'
import * as Styles from './testimonials.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	const testimonials = section.items;
	return (
		<section data-id={section.sectionInfo[0].identifier} className={c('section', section.sectionInfo[0].bgColor, 'section_' + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url('${section.sectionInfo[0].image}')`} : {}}>
			<div className={c(Styles.testimonials, 'container', 'container' + section.containerSize)}>
				<h2 className='mb-40'>{section.title ? section.title : 'FAQs'}</h2>
				{
					testimonials.map((section, i) => (
						<div className={c(Styles.testimonialsItem)}>
							<div className={Styles.testimonialsText} dangerouslySetInnerHTML={{__html: section.body}}></div>
							<div className={c(Styles.testimonialsLower)}>
								{section.person ? <div className={c(Styles.testimonialsPerson)}><p>{section.person}</p></div> : ''}
								{section.position ? <div className={c(Styles.testimonialsPosition)}><p>{section.position}</p></div> : ''}
								{section.company ? <div className={c(Styles.testimonialsCompany)}><p>{section.company}</p></div> : ''}
							</div>
						</div>
					))
				}
				<div className={Styles.testimonialsTouch}>
					<a href="/contact" class="btn"><em>Let's Chat</em></a>
				</div>
			</div>
		</section>
	)
}

export default Layout