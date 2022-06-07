import * as React from 'react'
import * as Styles from './faqSingle.module.scss'
import c from 'classnames'
import { useState } from "react"

const Layout = ({ val }) => {
	const [expanded, setExpanded] = useState(false);
	const toggleExpand = () => setExpanded(!expanded);
	return (
		<div className={c(Styles.faq, {[Styles.faqOpen]:expanded})}>
			<div className={c(Styles.faqQuestion, 'faqQuestion')}>
				<a href="javascript:void(0);" onClick={toggleExpand}><h3>{val.question}</h3></a>
			</div>
			<div className={Styles.faqAnswer}>
				<div dangerouslySetInnerHTML={{__html: val.answer}}></div>
			</div>
		</div>
	)
}

export default Layout