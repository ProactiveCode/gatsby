import * as React from 'react'
import * as Styles from './videosSection.module.scss'
import c from 'classnames'
import CButton from '../button/button'

const Layout = ({ line, children, containerSize, align }) => {
	return (
		<div className={Styles.videosWrap}>
			<div className={Styles.videos}>
				<div className={Styles.videosInner}>
					<div className={Styles.video}>
						<video id="tv-room-video" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true} src="https://www.apple.com/105/media/us/apple-tv-4k/2021/77588a6b-7e3e-47cd-ac58-9b8b6db59855/anim/sizzle/large_2x.mp4"></video>
					</div>
					<div className={Styles.video}>
						<video id="tv-room-video" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true}  src="https://www.apple.com/105/media/us/apple-tv-4k/2021/77588a6b-7e3e-47cd-ac58-9b8b6db59855/anim/sizzle/large_2x.mp4"></video>
					</div>
					<div className={Styles.video}>
						<video id="tv-room-video" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true}  src="https://www.apple.com/105/media/us/apple-tv-4k/2021/77588a6b-7e3e-47cd-ac58-9b8b6db59855/anim/sizzle/large_2x.mp4"></video>
					</div>
				</div>
			</div>
			<div className={Styles.videosTexts}>
				<div className={Styles.videoText}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Great Green Systems</h3>
							<h4>E-commerce website</h4>
							<p>Moving towards a greener and more sustainable world to live. Something we are passionate about.</p>
							<CButton link="test" text="Take a peek" hoverText="Snealy Peek" classes="btn"></CButton>
						</div>
					</div>
				</div>
				<div className={c(Styles.videoText, Styles.blue)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Great Green Systems 222</h3>
							<h4>E-commerce website</h4>
							<p>Moving towards a greener and more sustainable world to live. Something we are passionate about.</p>
							<CButton link="test" text="Take a peek" hoverText="Snealy Peek" classes="btn"></CButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout