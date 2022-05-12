import * as React from 'react'
import * as Styles from './flipdownItem.module.scss'
import { useState } from "react"
import c from 'classnames'


const Layout = ({ val }) => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);
	
	return (
		<div className={c(Styles.flipdownItem, {[Styles.hovered]:hovered})} onMouseEnter={toggleHover}>
			<div className={Styles.flipdownItemWrap}>
				<div className={Styles.flipdownItemFront}>
					<img src={val.flipDownFront} alt={val.flipDownFrontAlt}></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src={val.flipDownBack} alt={val.flipDownBackAlt}></img>
				</div>
			</div>
		</div>
	)
}

export default Layout