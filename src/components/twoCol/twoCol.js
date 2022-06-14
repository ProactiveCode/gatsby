import * as React from 'react'
import * as Styles from './twoCol.module.scss'
import Column from '../../components/column/column'
import c from 'classnames'

const Layout = ({ section, vol }) => {
	const columns = section.columns;
	const direction = "column_" + section.colDir;
	return (
		<section data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			{
					(section.title) ?  <div className={c("container", "container" + section.containerSize)} dangerouslySetInnerHTML={{__html: section.title}}></div> : ''
			}
			<div className={c(Styles.twoCol, "container", "container" + section.containerSize, Styles[direction])}>
				{
					columns.map((section, i) => (
						<Column val={section} key={i} vol={vol} />
					))
				}
			</div>
		</section>
	)
}

export default Layout