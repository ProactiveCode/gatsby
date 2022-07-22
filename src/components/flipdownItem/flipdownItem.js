import * as React from 'react'
import * as Styles from './flipdownItem.module.scss'
import { useState } from "react"
import Flip from '../../images/new-flip.m4a'
import c from 'classnames'
import {Howl} from 'howler';


const Layout = ({ val, vol, flipped }) => {
	const [hovered, setHovered] = useState(false);

	const card = new Howl({
		src: [Flip],
		volume: 0.2,
		preload: true
	});

	const toggleHover = (elem) => {
		if(vol === true) {
			card.play();
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
		<div className={c(Styles.flipdownItem, 'flipdownItemSelector', {[Styles.hovered]:hovered})} role="switch" aria-checked="false" aria-label="Flipping image" onMouseEnter={toggleHover} tabIndex="0">
			<div className={Styles.flipdownItemWrap}>
				<div className={Styles.flipdownItemFront} style={{backgroundImage: "url(" + val.flipDownFront + ")"}}>
				</div>
				<div className={Styles.flipdownItemBack} style={{backgroundImage: "url(" + val.flipDownBack + ")"}}>
				</div>
			</div>
		</div>

	)
}

export default Layout