import * as React from 'react'
import * as Styles from './footer.module.scss'
import c from 'classnames'
import { Link } from 'gatsby'

const Layout = ({ line, children, containerSize, align }) => {
	return (
		<footer className={c(Styles.footer, 'footer')}>
			<div className={c("container", "container1200", Styles.footerWrap)}>
				<div className={Styles.footerLogoSection}>
					<div className={Styles.footerLogo}>
						<img src="https://images.ctfassets.net/74ncoczcn9dm/BjTTMmbDsuVLBxIkwdmyH/e47fb9e2346b93ba3edd44582af80263/logo-no-text.svg" alt="Digital Energy logo" />
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
					<Link to="/contact">Contact Us</Link>
					<Link to="/blog">Blog</Link>
				</div>
				<div className={Styles.footerServices}>
					<p>Services</p>
					<Link to="/web-development">Web Development</Link>
					<Link to="/seo">SEO</Link>
					<Link to="/web-design">Design</Link>
					<Link to="/">Video Editing</Link>
					<Link to="/">Hosting</Link>
				</div>
				<div className={Styles.footerCase}>
					<p>Case Studies</p>
					<Link to="/coming-soon">Great Green Systems</Link>
					<Link to="/coming-soon">Yorkshire Children’s Centre</Link>
					<Link to="/coming-soon">Powher</Link>
					<Link to="/coming-soon">Field Gibson Media</Link>
				</div>
				<div className={Styles.footerWild}>
					<div className={"footerWildInfo"}>
						<p>Digital Energy is 100% Carbon Offset and partnered with:</p>	
						<a href="https://www.makeitwild.co.uk/" target="_blank" rel="noopener noreferrer">Make It Wild</a>
					</div>
					<div className={Styles.footerWildLogo}>
						<img src="https://images.ctfassets.net/74ncoczcn9dm/5LwEAUBTfyz1w7ZTFMktXS/0323e372479842cef89974aaa1426652/carbon-offset-logo.png?h=250" alt="Digital Energy logo" />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Layout