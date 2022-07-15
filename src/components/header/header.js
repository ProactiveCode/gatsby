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
								<StaticImage width={50} alt="Menu left side" src="../../images/burger-left.webp" />
							</div>
							<div className={Styles.burgerRight}>
								<StaticImage width={50} alt="Menu right side" src="../../images/burger-right.webp" />
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
						<a href="https://www.instagram.com/proactive_code/" aria-label="Instagram" rel="noreferrer" target="_blank" className={Styles.link}>
							<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 56.7 56.7">
							<g>
								<path fill="#ffffff" d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
									c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
								<circle fill="#ffffff" cx="41.5" cy="16.4" r="2.9"/>
								<path fill="#ffffff" d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7
									c2.7,2.6,6.3,3.9,10.4,3.9h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9
									c0,3.1-1.1,5.6-2.9,7.3s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3
									c1.7-1.7,4.3-2.6,7.3-2.6h20.6c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
							</g>
							</svg>
						</a>
						<a href="https://www.linkedin.com/company/proactive-code/" aria-label="LinkedIn" rel="noreferrer" target="_blank" className={Styles.link}>
							<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300">
							<path fill="#ffffff" style={{fillRule: 'evenodd', clipRule: 'evenodd'}} d="M262.5,0h-225C16.8,0,0,16.8,0,37.5v225C0,283.2,16.8,300,37.5,300h225c20.7,0,37.5-16.8,37.5-37.5v-225
								C300,16.8,283.2,0,262.5,0z M86,255.8H35.8V104.7H86V255.8z M60.9,84h-0.3c-16.9,0-27.8-11.6-27.8-26.1c0-14.8,11.2-26.1,28.4-26.1
								c17.2,0,27.8,11.3,28.1,26.1C89.3,72.4,78.4,84,60.9,84z M263.2,257.6h-50.2v-80.9c0-20.3-7.3-34.2-25.5-34.2
								c-13.9,0-22.2,9.3-25.8,18.4c-1.3,3.2-1.7,7.7-1.7,12.3v84.4h-50.2c0,0,0.7-137,0-151.1h50.2v21.4c6.7-10.3,18.6-25,45.3-25
								c33.1,0,57.8,21.6,57.8,68V257.6z"/>
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