import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from "react"
import * as Styles from './header.module.scss'
import c from 'classnames'

const Layout = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	let current = '';

	if (typeof window !== 'undefined') {
		current = window.location.pathname;
	}

	const toggleHover = (elem) => {
		if(document.getElementsByClassName('header-module--burgerOuterWrap--17l12')[0].classList.contains('header-module--burgerOpen--PxR-V')) {
			document.getElementsByClassName('header-module--burgerOuterWrap--17l12')[0].classList.remove('header-module--burgerOpen--PxR-V');
			document.getElementsByClassName('header-module--burger--ZYCyO')[0].classList.remove('header-module--burgerOpen--PxR-V');
			setBurgerOpen(false);
		} else {
			document.getElementsByClassName('header-module--burgerOuterWrap--17l12')[0].classList.add('header-module--burgerOpen--PxR-V');
			document.getElementsByClassName('header-module--burger--ZYCyO')[0].classList.add('header-module--burgerOpen--PxR-V');
			setBurgerOpen(true);
		}
	}

	return (
		<header className={c(Styles.header, "container", "header")}>
			<div className={Styles.headerWrap}>
				<div className={c(Styles.burgerOuterWrap, {[Styles.burgerOpen]:burgerOpen})}>
					<div className={c(Styles.burger, {[Styles.burgerOpen]:burgerOpen})}>
						<button className={Styles.burgerWrap} onClick={toggleHover}>
							<div className={Styles.burgerLeft}>
								<img width="50" alt="Menu left side" src="https://images.ctfassets.net/74ncoczcn9dm/FybEk8OG1Hl8Ey53F7owj/c2ad11c52a1c2526e3618db08d0892a0/burger-left.webp" />
							</div>
							<div className={Styles.burgerRight}>
								<img width="50" alt="Menu right side" src="https://images.ctfassets.net/74ncoczcn9dm/4eGaTvP7AU7tP6PXUl7UPv/c7d96422e423534974dc75005da32983/burger-right.webp" />
							</div>
						</button>
						<div className={c(Styles.link, Styles.linkLeft, 'headerLinksLeft')}>
							<a href="/">Home</a>
						</div>
						<div className={c(Styles.link, Styles.linkRight, 'headerLinksRight')}>
							<a href="/" className={Styles.mobileLink}>Home</a>
							<a href="/#caseStudies">Case Studies</a>
							<a href="/blog">Blog</a>
							<a href="/contact">Speak To Us</a>
						</div>
					</div>
					<a href="/" className={c(Styles.normalLink, 'hideOnHome')}>Home</a>
				</div>
				<div className={Styles.innerHeaderWrap}>
					<div className={Styles.socials}>
						<a href="https://www.facebook.com/digitalenagency/" aria-label="Facebook" rel="noreferrer" target="_blank" className={Styles.link}>
							<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300">
							<g>
								<path fill="#ffffff" d="M300,150C300,67.2,232.8,0,150,0S0,67.2,0,150c0,74.9,54.9,136.9,126.6,148.2V193.4H88.5V150h38.1v-33
									c0-37.6,22.4-58.4,56.7-58.4c16.4,0,33.6,2.9,33.6,2.9v36.9h-18.9c-18.6,0-24.4,11.6-24.4,23.4V150H215l-6.7,43.4h-35v104.8
									C245.1,286.9,300,224.9,300,150z"/>
								<path fill='none' d="M208.4,193.4L215,150h-41.6v-28.1c0-11.9,5.8-23.4,24.4-23.4h18.9V61.5c0,0-17.2-2.9-33.6-2.9
									c-34.3,0-56.7,20.8-56.7,58.4v33H88.5v43.4h38.1v104.8c7.6,1.2,15.5,1.8,23.4,1.8s15.8-0.6,23.4-1.8V193.4H208.4z"/>
							</g>
							</svg>
						</a>
						<a href="https://www.instagram.com/digitalenergyagency/" aria-label="Instagram" rel="noreferrer" target="_blank" className={Styles.link}>
							<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 49.8 49.7">
							<g>
								<path class="st0" fill="#ffffff" d="M24.9,12c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8s12.8-5.8,12.8-12.8S31.9,12,24.9,12z M24.9,33
									c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S29.4,33,24.9,33z"/>
								<circle class="st0"  fill="#ffffff" cx="38.2" cy="11.7" r="2.9"/>
								<path class="st0" fill="#ffffff" d="M45.7,4.2c-2.6-2.7-6.3-4.1-10.5-4.1H14.6C5.9,0.1,0.1,5.9,0.1,14.6v20.5c0,4.3,1.4,8,4.2,10.7
									c2.7,2.6,6.3,3.9,10.4,3.9h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V14.6C49.7,10.4,48.3,6.8,45.7,4.2z M45.3,35.2
									c0,3.1-1.1,5.6-2.9,7.3s-4.3,2.6-7.3,2.6H14.7c-3,0-5.5-0.9-7.3-2.6c-1.8-1.8-2.7-4.3-2.7-7.4V14.6c0-3,0.9-5.5,2.7-7.3
									c1.7-1.7,4.3-2.6,7.3-2.6h20.6c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V35.2L45.3,35.2z"/>
							</g>
							</svg>
						</a>
						<a href="https://www.linkedin.com/company/digital-energy-agency/" aria-label="LinkedIn" rel="noreferrer" target="_blank" className={Styles.link}>
							<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300">
							<path fill="#ffffff" style={{fillRule: 'evenodd', clipRule: 'evenodd'}} d="M262.5,0h-225C16.8,0,0,16.8,0,37.5v225C0,283.2,16.8,300,37.5,300h225c20.7,0,37.5-16.8,37.5-37.5v-225
								C300,16.8,283.2,0,262.5,0z M86,255.8H35.8V104.7H86V255.8z M60.9,84h-0.3c-16.9,0-27.8-11.6-27.8-26.1c0-14.8,11.2-26.1,28.4-26.1
								c17.2,0,27.8,11.3,28.1,26.1C89.3,72.4,78.4,84,60.9,84z M263.2,257.6h-50.2v-80.9c0-20.3-7.3-34.2-25.5-34.2
								c-13.9,0-22.2,9.3-25.8,18.4c-1.3,3.2-1.7,7.7-1.7,12.3v84.4h-50.2c0,0,0.7-137,0-151.1h50.2v21.4c6.7-10.3,18.6-25,45.3-25
								c33.1,0,57.8,21.6,57.8,68V257.6z"/>
							</svg>
						</a>
						<a href="https://www.reddit.com/user/DigitalEnergyAgency/" aria-label="Reddit" rel="noreferrer" target="_blank" className={Styles.link}>
							<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300">
							<g>
								<path fill="#ffffff" d="M186,204.6c-7.2,7.2-22.5,9.7-33.5,9.7c-11,0-26.3-2.5-33.5-9.7c-1.7-1.7-4.4-1.7-6.1,0
									c-1.7,1.7-1.7,4.4,0,6.1c11.4,11.4,33.2,12.2,39.6,12.2c6.4,0,28.2-0.9,39.6-12.2c1.7-1.7,1.7-4.4,0-6.1
									C190.4,202.9,187.7,202.9,186,204.6z"/>
								<path fill="#ffffff" d="M132.5,166.7c0-9.2-7.5-16.7-16.7-16.7c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7
									C125,183.3,132.5,175.9,132.5,166.7z"/>
								<path fill="#ffffff" d="M262.5,0h-225C16.8,0,0,16.8,0,37.5v225C0,283.2,16.8,300,37.5,300h225c20.7,0,37.5-16.8,37.5-37.5v-225
									C300,16.8,283.2,0,262.5,0z M245.3,171.3c0.4,2.3,0.5,4.6,0.5,7c0,35.9-41.8,65-93.3,65s-93.3-29.1-93.3-65c0-2.4,0.2-4.7,0.6-7.1
									c-8.1-3.7-13.8-11.8-13.8-21.3c0-12.9,10.4-23.3,23.3-23.3c6.3,0,11.9,2.5,16.1,6.5c16.2-11.6,38.5-19.1,63.3-19.8l11.9-55.8
									c0.2-1.1,0.9-2,1.8-2.6c0.9-0.6,2.1-0.8,3.1-0.6l38.8,8.2c2.7-5.5,8.3-9.3,14.9-9.3c9.2,0,16.7,7.5,16.7,16.7s-7.5,16.7-16.7,16.7
									c-8.9,0-16.2-7-16.6-15.9l-34.7-7.4l-10.6,50c24.5,0.9,46.5,8.3,62.4,19.8c4.2-4,9.9-6.5,16.2-6.5c12.9,0,23.3,10.4,23.3,23.3
									C259.1,159.5,253.4,167.7,245.3,171.3z"/>
								<path fill="#ffffff" d="M189.2,150c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7c9.2,0,16.7-7.5,16.7-16.7
									C205.8,157.5,198.4,150,189.2,150z"/>
							</g>
							</svg>
						</a>
						<a href="https://twitter.com/DigitalEnAgency" aria-label="Twitter" rel="noreferrer" target="_blank" className={Styles.link}>
							<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 32 32">
							<path class="st0" fill="#ffffff" d="M30,0H2C0.9,0,0,0.9,0,2v28c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V2C32,0.9,31.1,0,30,0z M26.1,10.9
								c0,0.2,0,0.4,0,0.7c0,6.8-5.3,14.7-14.9,14.7c-3,0-5.7-0.9-8-2.3c0.4,0,0.8,0.1,1.2,0.1c2.5,0,4.7-0.8,6.5-2.2
								c-2.3,0-4.2-1.5-4.9-3.6c0.3,0.1,0.6,0.1,1,0.1c0.5,0,0.9-0.1,1.4-0.2c-2.4-0.5-4.2-2.6-4.2-5.1c0,0,0,0,0-0.1
								c0.7,0.4,1.5,0.6,2.4,0.6c-1.4-0.9-2.3-2.5-2.3-4.3c0-0.9,0.3-1.8,0.7-2.6c2.6,3.1,6.4,5.2,10.8,5.4c-0.1-0.4-0.1-0.8-0.1-1.2
								c0-2.8,2.3-5.2,5.2-5.2c1.5,0,2.9,0.6,3.8,1.6c1.2-0.2,2.3-0.7,3.3-1.2c-0.4,1.2-1.2,2.2-2.3,2.8c1.1-0.1,2.1-0.4,3-0.8
								C28.1,9.2,27.2,10.1,26.1,10.9z"/>
							</svg>
						</a>
					</div>
					<div className={Styles.getInTouch}>
						<div className={"getInTouchWrap"}>
							<a href="/contact" className={'contact-link'}>Speak To Us</a>
						</div>
					</div>
					<div className={Styles.lowerLinks}>
						<div className={"lowerLinksWrap"}>
							<div className={Styles.lowerRotate}>
								<p className="page-locator">{(current === "/") ? 'Because We Care' : 'T: 0113 850 0164'}</p>
								<div className={c(Styles.scrollInd, 'indicator')}>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Layout