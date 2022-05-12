import * as React from 'react'
import * as Styles from './flipdownImage.module.scss'
import FlipdownItem from '../../components/flipdownItem/flipdownItem'

const Layout = ({ section }) => {
	const images = section.blockContent;

	return (
		<div className={Styles.flipdownContainer}>
			{
				images.map((section, i) => (
					<FlipdownItem val={section} key={i} />
				))
			}
		</div>
	)
}

export default Layout