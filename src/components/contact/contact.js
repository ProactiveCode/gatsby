import * as React from 'react'
import * as Styles from './contact.module.scss'
import c from 'classnames'

const Layout = ({ section }) => {
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c('container', 'container' + section.size, section.extra_global_class, Styles[section.extra_block_class])}>
				<form action='https://getform.io/f/48b34680-adf7-402f-bc50-f0719a1f300e' method='POST'>
					<div className={Styles.formWrap}>
						<div className={Styles.form50}>
							<div className={Styles.formItem}>
								<p><strong>Leave your name here.</strong></p>
								<input type='text' name='name' required></input>
							</div>
						</div>
						<div className={Styles.form50}>
							<div className={Styles.formItem}>
								<p><strong>Drop your number here.</strong></p>
								<input type='text' name='number' required></input>
							</div>
							<div className={Styles.formItem}>
								<p className={Styles.formMt}><strong>Have an email we could use?</strong></p>
								<input type='email' name='email' required></input>
							</div>
						</div>
						<div className={Styles.form100}>
							<div className={Styles.formItem}>
								<p className={Styles.formNm}><strong>Give us your ideas, thoughts on how we can help you. </strong></p>
								<p className={Styles.font16}>We don’t need the full plan, because a conversation that follows will be when we get details we need.</p>
								<textarea name='message' required></textarea>
							</div>
						</div>
					</div>
					<div className={Styles.formSubmit}>
						<button type='submit' className='btn'>Send it over</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Layout