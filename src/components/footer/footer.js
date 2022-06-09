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
					<a href="/contact">Contact Us</a>
					<a href="/blog">Blog</a>
				</div>
				<div className={Styles.footerServices}>
					<p>Services</p>
					<a href="/web-development">Web Development</a>
					<a href="/seo">SEO</a>
					<a href="/web-design">Design</a>
					<a href="/">Video Editing</a>
					<a href="/">Hosting</a>
				</div>
				<div className={Styles.footerCase}>
					<p>Case Studies</p>
					<a href="/coming-soon">Great Green Systems</a>
					<a href="/coming-soon">Yorkshire Children’s Centre</a>
					<a href="/coming-soon">Powher</a>
					<a href="/coming-soon">Field Gibson Media</a>
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