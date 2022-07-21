import * as React from 'react'
import * as Styles from './flipdownImage.module.scss'
import FlipdownItem from '../../components/flipdownItem/flipdownItem'
import Flip from '../../images/new-flip.m4a'
import {Howl} from 'howler';
import { useState } from "react"

const Layout = ({ section, vol }) => {
	const images = section.blockContent;
	const [flipped, setFlipped] = useState(false);

	const card = new Howl({
		src: [Flip],
		volume: 0.2,
		preload: true
	});

	const toggleFlipped = () => {
		const elements = document.querySelectorAll(".flipdownItemSelector");
		let timeout = 0;

		if(flipped === false) {
			setFlipped(true);
			Array.from(elements).forEach((element, index) => {
				if(!element.classList.contains("flipdownItem-module--hovered--XuJQn")) {
					timeout+=100;
				}
					setTimeout(() => {
						if(!element.classList.contains("flipdownItem-module--hovered--XuJQn")) {
							element.classList.add("flipdownItem-module--hovered--XuJQn");
							card.play();
						}
					}, timeout);
			});
		} else {
			setFlipped(false);
			Array.from(elements).forEach((element, index) => {
				if(element.classList.contains("flipdownItem-module--hovered--XuJQn")) {
					timeout+=100;
				}
				setTimeout(() => {
					if(element.classList.contains("flipdownItem-module--hovered--XuJQn")) {
						element.classList.remove("flipdownItem-module--hovered--XuJQn");
						card.play();
					}
				}, timeout);
			});
		}
	}
	

	return (
		<div>
			<div className={Styles.flipdownContainer}>
				{
					images.map((section, i) => (
						<FlipdownItem val={section} key={i} vol={vol} flipped={flipped} />
					))
				}
			</div>
			<button className={Styles.flipper} onClick={toggleFlipped}><img src='https://images.ctfassets.net/74ncoczcn9dm/4WKVCeapsdjl6kinh9LbwI/f5ad779d24d00f229e0b5a25badfc3a0/eye.svg' alt="Click to flip"></img></button>
		</div>
	)
}

export default Layout