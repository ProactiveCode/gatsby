import * as React from 'react'
import * as Styles from './flipdownImage.module.scss'
import FlipdownItem from '../../components/flipdownItem/flipdownItem'
import { useState } from "react"

const Layout = ({ section }) => {
	const images = section.blockContent;
	const [flipped, setFlipped] = useState(false);

	const toggleFlipped = () => {
		const elements = document.querySelectorAll(".flipdownItemSelector");
		let timeout = 0;
		var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

		if(flipped == false) {
			setFlipped(true);
			Array.from(elements).forEach((element, index) => {
				timeout+=50;
				setTimeout(() => {
					element.classList.add("flipdownItem-module--hovered--XuJQn");
					audio.play();
				}, timeout);
			});
		} else {
			setFlipped(false);
			Array.from(elements).forEach((element, index) => {
				timeout+=50;
				setTimeout(() => {
					element.classList.remove("flipdownItem-module--hovered--XuJQn");
					audio.play();
				}, timeout);
			});
		}
	}
	

	return (
		<div>
			<div className={Styles.flipdownContainer}>
				{
					images.map((section, i) => (
						<FlipdownItem val={section} key={i} />
					))
				}
			</div>
			<a href="javascript:void(0);" className={Styles.flipper} onClick={toggleFlipped}><img src='https://images.ctfassets.net/74ncoczcn9dm/4WKVCeapsdjl6kinh9LbwI/f5ad779d24d00f229e0b5a25badfc3a0/eye.svg' alt="Click to flip image"></img></a>
		</div>
	)
}

export default Layout