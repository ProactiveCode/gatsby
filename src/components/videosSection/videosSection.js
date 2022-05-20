import * as React from 'react'
import * as Styles from './videosSection.module.scss'
import c from 'classnames'
import CButton from '../button/button'
import { Controller, Scene } from 'react-scrollmagic';
import { gsap }  from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useRef, useEffect, scrol } from "react"
import { CustomEase } from "gsap/CustomEase";

const mystyle = {
	backgroundColor: 'red',
	width: '100px',
	height: '100px'
};

const Layout = ({ line, children, containerSize, align }) => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);
	// const ref = useRef(null);

	useEffect(() => {
		// const element = ref.current;
		// gsap.to(
		// 	document.getElementsByClassName('test'),
		//   {
		// 	transform: "translateY(100px)",
		// 	paddingLeft: "100px",
		// 	scrollTrigger: {
		// 	  trigger: document.getElementsByClassName('testtrgier'),
		// 	  pin: true,
		// 	  end: "+=5000",
		// 	  scrub: true,
		// 	  markers: true
		// 	},
		//   }
		// );
		
		const duration = document.getElementsByClassName('last')[0].offsetHeight;
		const height = (duration/2) - 75;
		
		const tl = gsap.timeline({
			scrollTrigger: {
			  trigger: ".videoHeight",
			  end: "bottom-=" + height + " center",
			  scrub: true,
			  markers: true,
			  pin: ".vidInner",
			},
		  });
		  tl.to("#tv-room-video4", {height: "0%", delay: 0.16, ease: 'sine'})
		  tl.to("#tv-room-video3", {height: "0%", delay: 0.16, ease: 'sine'})
		  tl.to("#tv-room-video2", {height: "0%", delay: 0.16, ease: 'sine'})
	}, []);

	return (
		<div className={c(Styles.videosWrap, 'videoHeight')}>
			<div className={c('container', 'container1200', 'rel' )}>
				<div className={Styles.videos}>
					<div className={c(Styles.videosInner, 'vidInner')}>
						<div className={c(Styles.video, 'vid1')}>
							<video id="tv-room-video1" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true} src="https://www.apple.com/105/media/ww/apple-tv-4k/2021/89f305cb-74db-49e6-9745-c7ead3659151/anim/music/large_2x.mp4"></video>
						</div>
						<div className={c(Styles.video, 'vid2')}>
							<video id="tv-room-video2" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true}  src="https://www.apple.com/105/media/uk/apple-tv-4k/2021/89f305cb-74db-49e6-9745-c7ead3659151/anim/fitness/large_2x.mp4"></video>
						</div>
						<div className={c(Styles.video, 'vid3')}>
							<video id="tv-room-video3" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true}  src="https://www.apple.com/105/media/us/apple-tv-4k/2021/77588a6b-7e3e-47cd-ac58-9b8b6db59855/anim/sizzle/large_2x.mp4"></video>
						</div>
						<div className={c(Styles.video, 'vid4')}>
							<video id="tv-room-video4" preload="none" loop={true} aria-hidden="true" autoPlay={true} muted={true}  src="https://www.apple.com/105/media/us/apple-tv-4k/2021/89f305cb-74db-49e6-9745-c7ead3659151/anim/arcade/large_2x.mp4"></video>
						</div>
					</div>
				</div>
			</div>
			<div className={Styles.videosTexts}>
				<div className={c(Styles.videoText, Styles.videoText1)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Great Green Systems</h3>
							<h4>E-commerce website</h4>
							<p>Moving towards a greener and more sustainable world to live. Something we are passionate about.</p>
							<CButton link="test" text="Take a peek" hoverText="Sneaky Peek" classes="btn"></CButton>
						</div>
					</div>
				</div>
				<div className={c(Styles.videoText, Styles.blue)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Yorkshire Childrens Centre</h3>
							<h4>On-line brand growth</h4>
							<p>Creating opportunities for young people to have a better life. Creating a new website to harness their vision.</p>
							<CButton link="test" text="Take a peek" hoverText="Sneaky Peek" classes="btn"></CButton>
						</div>
					</div>
				</div>
				<div className={c(Styles.videoText, Styles.grey)}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Ultimate Life Stores</h3>
							<h4>Multi-national e-commerce</h4>
							<p>Providing women with health supplements designed for performance around the world.</p>
							<CButton link="test" text="Take a peek" hoverText="Sneaky Peek" classes="btn"></CButton>
						</div>
					</div>
				</div>
				<div className={c(Styles.videoText, Styles.pink, 'last')}>
					<div className={c('container', 'container800' )}>
						<div className={Styles.videoTextWrap}>
							<h3>Field Gibson Media</h3>
							<h4>Video animation</h4>
							<p>Giving the Finance industry engaging content and events. It's not all about the numbers.</p>
							<CButton link="test" text="Take a peek" hoverText="Sneaky Peek" classes="btn"></CButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Layout