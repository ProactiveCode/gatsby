import * as React from 'react'
import * as Styles from './flipdownImage.module.scss'
import FlipdownItem from '../../components/flipdownItem/flipdownItem'
import { useState } from "react"

const Layout = ({ section, vol }) => {
	const images = section.blockContent;
	const [flipped, setFlipped] = useState(false);
	const [audio] = useState(typeof Audio !== "undefined" && new Audio('https://assets.ctfassets.net/74ncoczcn9dm/7N1qebAy0OYcr41PwuM0dX/f28a9f7fcab8e5dd68f3d0e34fa1a714/FLIP.wav'));

	const toggleFlipped = () => {
		const elements = document.querySelectorAll(".flipdownItemSelector");
		let timeout = 0;

		if(flipped == false) {
			setFlipped(true);
			Array.from(elements).forEach((element, index) => {
				if(!element.classList.contains("flipdownItem-module--hovered--XuJQn")) {
					timeout+=100;
				}
					setTimeout(() => {
						if(!element.classList.contains("flipdownItem-module--hovered--XuJQn")) {
							element.classList.add("flipdownItem-module--hovered--XuJQn");
							audio.cloneNode(true).play();
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
						audio.cloneNode(true).play();
						console.log('fasel has it');
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
			<button className={Styles.flipper} onClick={toggleFlipped}><img src='https://images.ctfassets.net/74ncoczcn9dm/4WKVCeapsdjl6kinh9LbwI/f5ad779d24d00f229e0b5a25badfc3a0/eye.svg' alt="Click to flip image"></img></button>
		</div>
	)
}

export default Layout