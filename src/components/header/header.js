import * as React from 'react'
import { Link } from 'gatsby'
import { useState } from "react"
import * as Styles from './header.module.scss'
import c from 'classnames'

const Layout = ({ pageTitle, children }) => {
	const [burgerOpen, setBurgerOpen] = useState(false);

	return (
		<header className={c(Styles.header, "container")}>
			<div className={Styles.headerWrap}>
				<div className={c(Styles.burger, {[Styles.burgerOpen]:burgerOpen})}>
					<button className={Styles.burgerWrap}  onClick={() => {setBurgerOpen(!burgerOpen);}}>
						<div className={Styles.burgerLeft}>
							<img src="https://via.placeholder.com/40" alt="Menu left side" />
						</div>
						<div className={Styles.burgerRight}>
							<img src="https://via.placeholder.com/40" alt="Menu right side" />
						</div>
					</button>
					<div className={c(Styles.link, Styles.linkLeft)}>
						<Link to="/" className={Styles.a}>Home</Link>
					</div>
					<div className={c(Styles.link, Styles.linkRight)}>
						<Link to="/" className={Styles.a}>right</Link>
					</div>
				</div>
				<div className={Styles.innerHeaderWrap}>
					<div className={Styles.socials}>
						<a href="#" target="_blank" className={Styles.link}>
							<img src="https://via.placeholder.com/40" alt="" />
						</a>
						<a href="#" target="_blank" className={Styles.link}>
							<img src="https://via.placeholder.com/40" alt="" />
						</a>
						<a href="#" target="_blank" className={Styles.link}>
							<img src="https://via.placeholder.com/40" alt="" />
						</a>
					</div>
					<div className={Styles.getInTouch}>
						<div className={Styles.getInTouchWrap}>
							<Link to="/" className={Styles.linka}>Get In Touch</Link>
						</div>
					</div>
					<div className={Styles.lowerLinks}>
						<div className={Styles.lowerLinksWrap}>
							<div className={Styles.lowerRotate}>
								<Link to="/" className={Styles.linkaSmall}>Who Gets Us</Link>
								<Link to="/" className={Styles.linkaSmall}>Hello From Us</Link>
								<Link to="/" className={Styles.linkaSmall}>Our Passion</Link>
								<Link to="/" className={Styles.linka}>Because We Care</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Layout