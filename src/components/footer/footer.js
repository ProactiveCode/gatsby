import * as React from 'react'
import * as Styles from './footer.module.scss'
import c from 'classnames'
import { Link } from 'gatsby'

const Layout = ({ line, children, containerSize, align }) => {
	return (
		<footer className={Styles.footer}>
			<div className={c("container", "container1200", Styles.footerWrap)}>
				<div className={Styles.footerLogoSection}>
					<div className={Styles.footerLogo}>
						<img src="https://via.placeholder.com/100" alt="Digital Energy logo" />
					</div>
					<div className={Styles.footerInfo}>
						<p><strong>Digital Energy</strong></p>
						<p>Trading Branch of The Proactive Group Ltd</p>
						<p className={Styles.mt}>Registered Address</p>
						<p><strong>Unit 2, Hawthorne Court Howley Park</strong></p>
						<p><strong>Road, Morley, Leeds, England, LS27 0FD</strong></p>
						<p className={Styles.mt}>Registered No:</p>
						<p><strong>11097037</strong></p>
						<p>VAT No:</p>
						<p><strong>358540088</strong></p>
					</div>
				</div>
				<div className={Styles.footerPages}>
					<Link to="/" className={Styles.a}>Contact Us</Link>
					<Link to="/" className={Styles.a}>Blog</Link>
				</div>
				<div className={Styles.footerServices}>
					<p>Services</p>
					<Link to="/" className={Styles.a}>Contact Us</Link>
					<Link to="/" className={Styles.a}>Blog</Link>
					<Link to="/" className={Styles.a}>Contact Us</Link>
					<Link to="/" className={Styles.a}>Blog</Link>
					<Link to="/" className={Styles.a}>Blog</Link>
				</div>
				<div className={Styles.footerCase}>
					<p>Case Studies</p>
					<Link to="/" className={Styles.a}>Contact Us</Link>
					<Link to="/" className={Styles.a}>Blog</Link>
					<Link to="/" className={Styles.a}>Contact Us</Link>
					<Link to="/" className={Styles.a}>Blog</Link>
				</div>
				<div className={Styles.footerWild}>
					<div className={Styles.footerWildInfo}>
						<p>Digital Energy is 100% Carbon Offset and partnered with:</p>	
						<a href="http://" target="_blank" rel="noopener noreferrer">Make It Wild</a>
					</div>
					<div className={Styles.footerWildLogo}>
						<img src="https://via.placeholder.com/100" alt="Digital Energy logo" />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Layout