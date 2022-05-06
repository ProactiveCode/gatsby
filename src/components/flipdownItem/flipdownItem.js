import * as React from 'react'
import * as Styles from './flipdownItem.module.scss'
import { useState } from "react"
import c from 'classnames'


const Layout = ({ containerSize, children }) => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<div className={c(Styles.flipdownItem, {[Styles.hovered]:hovered})} onMouseEnter={toggleHover}>
			<div className={Styles.flipdownItemWrap}>
				{children}
			</div>
		</div>
	)
}

export default Layout