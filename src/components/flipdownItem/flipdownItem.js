import * as React from 'react'
import * as Styles from './flipdownItem.module.scss'
import { useState } from "react"
import c from 'classnames'


const Layout = ({ val, vol, flipped }) => {
	const [hovered, setHovered] = useState(false);
	const [audio] = useState(typeof Audio !== "undefined" && new Audio('https://assets.ctfassets.net/74ncoczcn9dm/7N1qebAy0OYcr41PwuM0dX/f28a9f7fcab8e5dd68f3d0e34fa1a714/FLIP.wav'));

	const toggleHover = (elem) => {
		if(vol == true) {
			audio.cloneNode(true).play();
		}
		
		if(elem.target.closest('.flipdownItemSelector').classList.contains('flipdownItem-module--hovered--XuJQn')) {
			elem.target.closest('.flipdownItemSelector').classList.remove("flipdownItem-module--hovered--XuJQn");
			setHovered(false);
		} else {
			elem.target.closest('.flipdownItemSelector').classList.add("flipdownItem-module--hovered--XuJQn");
			setHovered(true);
		}
	}
	
	return (
		<div className={c(Styles.flipdownItem, 'flipdownItemSelector', {[Styles.hovered]:hovered})} onMouseEnter={toggleHover}>
			<div className={Styles.flipdownItemWrap}>
				<div className={Styles.flipdownItemFront} style={{backgroundImage: "url(" + val.flipDownFront + ")"}}>
					{/* <img src={val.flipDownFront} alt={val.flipDownFrontAlt}></img> */}
				</div>
				<div className={Styles.flipdownItemBack} style={{backgroundImage: "url(" + val.flipDownBack + ")"}}>
					{/* <img src={val.flipDownBack} alt={val.flipDownBackAlt}></img> */}
				</div>
			</div>
		</div>

	)
}

export default Layout