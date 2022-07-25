import * as React from 'react'
import * as Styles from './videosMobile.module.scss'
import c from 'classnames'
import CButton from '../button/button'



const Layout = () => {
	return (
		<div id="caseStudies" data-id="Case Studies" className={c(Styles.videosWrap, 'videoHeight', 'section', 'section_none')}>
			<div>
				<div className={c(Styles.videoText, Styles.videoText1)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Great Green Systems</h3>
							<h4>E-commerce website</h4>
							<p>Moving towards a greener and more sustainable world to live. Something we are passionate about.</p>
							<CButton link="/great-green-systems" text="Take a peek" hoverText="Sneaky Peek" classes="btn"></CButton>
						</div>
						<div className={Styles.videoMobile}>
							<video preload="none" playsInline="true" aria-hidden="true" poster="https://images.ctfassets.net/74ncoczcn9dm/4Rbmgs0Az1jhNCjM8t6d8V/20bdf483c2edd6e5d3de35e7598900f8/ggs-vid-poster.webp" controls={true} src="https://videos.ctfassets.net/74ncoczcn9dm/1b6fauTPmGucGUnob1qc0m/333550a77a8ebdfd3088e7fa02c160f5/ggs-case-study-video-420.mp4">
							</video>
						</div>
					</div>
				</div>
				<div className={c(Styles.videoText, Styles.blue)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Yorkshire Childrens Centre</h3>
							<h4>On-line brand growth</h4>
							<p>Creating opportunities for young people to have a better life. Creating a new website to harness their vision.</p>
							<CButton link="/yorkshire-childrens-centre" text="Take a peek" hoverText="Sneaky Peek" classes="btn btn--alt-white"></CButton>
						</div>
						<div className={Styles.videoMobile}>
							<video preload="none" playsInline="true" aria-hidden="true" poster="https://images.ctfassets.net/74ncoczcn9dm/52EK8CA5JrbJ4iBCQmqSu2/9db07c0b9352eecd7ddbca739d342972/ycc-vid-poster.webp" controls={true} src="https://videos.ctfassets.net/74ncoczcn9dm/1qg9mkU5JIDcBTJRLFrgO3/2f44c0b6bf19816115d6dbc2cb2554f7/ycc-case-study-video-420.mp4">
							</video>
						</div>
					</div>
				</div>
				<div className={c(Styles.videoText)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Ultimate Life Stores</h3>
							<h4>Multi-national e-commerce</h4>
							<p>Providing women with health supplements designed for performance around the world.</p>
							<CButton link="/powher" text="Take a peek" hoverText="Sneaky Peek" classes="btn"></CButton>
						</div>
						<div className={Styles.videoMobile}>
							<video preload="none" playsInline="true" aria-hidden="true" poster="https://images.ctfassets.net/74ncoczcn9dm/nkq66kG6Ywr6PPyQPoS3z/5b94ee865dee80e47d5f6606991d8a97/powher-poster.webp" controls={true} src="https://videos.ctfassets.net/74ncoczcn9dm/3LKFWYUVq2AzS51Lhaya9q/bea889bb91ab5005b73ee461d0c678f3/powher-case-study-480.mp4">
							</video>
						</div>
					</div>
				</div>
				<div data-id="Case Studies"  playsInline="true" className={c(Styles.videoText, 'pink', 'last', 'section', 'sectionNone')}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Field Gibson Media</h3>
							<h4>Video animation</h4>
							<p>Giving the Finance industry engaging content and events. It's not all about the numbers.</p>
							<CButton link="/field-gibson-media" text="Take a peek" hoverText="Sneaky Peek" classes="btn btn--to-white"></CButton>
						</div>
						<div className={Styles.videoMobile}>
							<video preload="none" playsInline="true" aria-hidden="true" poster="https://images.ctfassets.net/74ncoczcn9dm/12G0lCWaVWCnHKhAIbWBDe/389d493988e4059cfed6692877352e54/fgm-poster.webp" controls={true} src="https://videos.ctfassets.net/74ncoczcn9dm/2M2RgqdX9i3H4QUMWERH2G/0bd7839f2164273bd3fad23e2265d736/fgm-case-study-480.mp4">
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout