import * as React from 'react'
import * as Styles from './videosDesktop.module.scss'
import c from 'classnames'
import CButton from '../button/button'
import { gsap }  from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react"


const Layout = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const duration = document.getElementsByClassName('last')[0].offsetHeight;
		const height = (duration/2) - 75;
		
		const tl = gsap.timeline({
			scrollTrigger: {
			  trigger: ".videoHeight",
			  end: "bottom-=" + height + " center",
			  scrub: true,
			  pin: ".vidInner",
			},
		  });
		  tl.to("#tv-room-video4", {height: "0%", delay: 0.16, ease: 'sine'})
		  tl.to("#tv-room-video3", {height: "0%", delay: 0.16, ease: 'sine'})
		  tl.to("#tv-room-video2", {height: "0%", delay: 0.16, ease: 'sine'})
	}, []);

	return (
		<div id="caseStudies" data-id="Case Studies" className={c(Styles.videosWrap, 'videoHeight', 'section', 'section_none')}>
			<div className={c('container', 'container1200', 'rel' )}>
				<div className={Styles.videos}>
					<div className={c(Styles.videosInner, 'vidInner')}>
						<div className={c(Styles.video, 'vid1')}>
							<video style={{height: '99%'}} id="tv-room-video1" playsInline="true" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true} src="https://videos.ctfassets.net/74ncoczcn9dm/zhBptyr7ObvEoUX7NBLyN/0fc5e3d1765100c3d99d5d40e170f9e2/fgm-case-study-480.mp4"></video>
						</div>
						<div className={c(Styles.video, 'vid2')}>
							<video id="tv-room-video2" playsInline="true" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true}  src="https://videos.ctfassets.net/74ncoczcn9dm/110BtJBYyKA2NYdJqfVY1x/4dea683cd33f82565fdb5bc526bbcaca/powher-case-study-480.mp4"></video>
						</div>
						<div className={c(Styles.video, 'vid3')}>
							<video id="tv-room-video3" playsInline="true" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true}  src="https://videos.ctfassets.net/74ncoczcn9dm/1qg9mkU5JIDcBTJRLFrgO3/2f44c0b6bf19816115d6dbc2cb2554f7/ycc-case-study-video-420.mp4"></video>
						</div>
						<div className={c(Styles.video, 'vid4')}>
							<video id="tv-room-video4" playsInline="true" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true}  src="https://videos.ctfassets.net/74ncoczcn9dm/1b6fauTPmGucGUnob1qc0m/333550a77a8ebdfd3088e7fa02c160f5/ggs-case-study-video-420.mp4"></video>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className={c(Styles.videoText, Styles.videoText1)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Great Green Systems</h3>
							<h4>E-commerce website</h4>
							<p>Moving towards a greener and more sustainable world. Something we are passionate about.</p>
							<CButton link="/great-green-systems" text="Take a peek" hoverText="Sneaky Peek" classes="btn"></CButton>
						</div>
					</div>
				</div>
				<div className={c(Styles.videoText, Styles.blue)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Yorkshire Childrens Centre</h3>
							<h4>On-line brand growth</h4>
							<p>Creating new opportunities for young people to have a better life. Deploying a new brand to harness the charities vision.</p>
							<CButton link="/yorkshire-childrens-centre" text="Take a peek" hoverText="Sneaky Peek" classes="btn btn--alt-white"></CButton>
						</div>
					</div>
				</div>
				<div className={c(Styles.videoText)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Ultimate Life Stores</h3>
							<h4>Multi-national e-commerce</h4>
							<p>Pre-workout and dietary health supplements, specifically tailored for women</p>
							<CButton link="/powher" text="Take a peek" hoverText="Sneaky Peek" classes="btn"></CButton>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout