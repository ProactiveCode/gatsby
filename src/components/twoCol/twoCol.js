import * as React from 'react'
import * as Styles from './twoCol.module.scss'
import Column from '../../components/column/column'
import c from 'classnames'

const Layout = ({ section }) => {
	const columns = section.columns;
	return (
		<section data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c(Styles.twoCol, "container", "container" + section.containerSize)}>
				{
					columns.map((section, i) => (
						<Column val={section} key={i} />
					))
				}
			</div>
		</section>
	)
}

export default Layout