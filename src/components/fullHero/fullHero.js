import * as React from 'react'
import * as Styles from './fullHero.module.scss'
import c from 'classnames'
import { useState } from "react"

const FullHero = ({ section }) => {
	const [modal, setModal] = useState(false);
	// const toggleModal = () => setModal(!modal);

	const toggleModal = (elem) => {		
		if (typeof window !== 'undefined') {
			var vid = document.getElementById("deModalVid");
			var modal = document.getElementsByClassName('videoModal')[0];

			if(modal.classList.contains('is-open')) {
				modal.classList.remove("is-open");
				vid.pause();
				setModal(false);
			} else {
				modal.classList.add("is-open");
				setModal(true);
				vid.play();
			}
		}
	}

	function getCookieValue(name) {
		if (typeof window !== 'undefined') {
			return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
		}
	}
	let checker = 0;

	if(getCookieValue('homeVidPlayed')) {
		checker = 1;
	}

	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();
  	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			<div className={c(Styles.fullHero)}>
				{
					(checker === 0) ?  <div className={c(Styles.fullHeroVideo, 'homeHeroVid')}><video playsInline="true" loading="lazy" src="https://videos.ctfassets.net/74ncoczcn9dm/1b6fauTPmGucGUnob1qc0m/333550a77a8ebdfd3088e7fa02c160f5/ggs-case-study-video-420.mp4" autoPlay={true} muted={true}></video></div> : ''
				}
				<div className={c(Styles.fullHeroReply, 'homeHeroReplay')}><button onClick={toggleModal} className={c('btn', 'btn--replay')}>Replay Showcase</button></div>
				
				<div className={c(Styles.deModal, 'videoModal', {['is-open']:modal})} style={{opacity: 0, zIndex: -1}}>
					<div className={c(Styles.deModal__bg)} onClick={toggleModal}></div>
					<div className={c(Styles.deModal__wrapper)}>
						<div className={c(Styles.deModal__inner)}>
							<div className={c(Styles.deModal__close)} onClick={toggleModal}></div>
							<video id="deModalVid" loading="lazy" src="https://videos.ctfassets.net/74ncoczcn9dm/1b6fauTPmGucGUnob1qc0m/333550a77a8ebdfd3088e7fa02c160f5/ggs-case-study-video-420.mp4" controls={true}></video>
						</div>
					</div>
				</div>
				<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300">
					<defs>
					<filter id='glowHero' width='200%' height='200%' x='-50%' y='-50%' filterUnits='objectBoundingBox'> <feOffset in='SourceAlpha' result='shadowOffsetOuter1' /> <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='9' /> <feColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0.77 0 0 0 0 0.20 0 0 0 0 0.97 0 0 0 1 0' /> <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter2' /> <feGaussianBlur in='shadowOffsetOuter2' result='shadowBlurOuter2' stdDeviation='11' /> <feColorMatrix in='shadowBlurOuter2' result='shadowMatrixOuter2' values='0 0 0 0 0.77 0 0 0 0 0.20 0 0 0 0 0.97 0 0 0 0.9 0' /> <feOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter3' /> <feGaussianBlur in='shadowOffsetOuter3' result='shadowBlurOuter3' stdDeviation='14' /> <feColorMatrix in='shadowBlurOuter3' result='shadowMatrixOuter3' values='0 0 0 0 0.77 0 0 0 0 0.20 0 0 0 0 0.97 0 0 0 0.8 0' /> <feOffset dx='2' dy='2' in='SourceAlpha' result='shadowOffsetOuter4' /> <feGaussianBlur in='shadowOffsetOuter4' result='shadowBlurOuter4' stdDeviation='5' /> <feColorMatrix in='shadowBlurOuter4' result='shadowMatrixOuter4' values='0 0 0 0 0.77 0 0 0 0 0.20 0 0 0 0 0.97 0 0 0 0.69678442 0' /> <feOffset dy='2' in='SourceAlpha' result='shadowOffsetOuter5' /> <feGaussianBlur in='shadowOffsetOuter5' result='shadowBlurOuter5' stdDeviation='12' /> <feColorMatrix in='shadowBlurOuter5' result='shadowMatrixOuter5' values='0 0 0 0 0.77 0 0 0 0 0.20 0 0 0 0 0.97 0 0 0 0.649371603 0' /> <feMerge> <feMergeNode in='shadowMatrixOuter1' /> <feMergeNode in='shadowMatrixOuter2' /></feMerge> </filter>
					</defs>
				<g>
					<g>
						<g>
							<path fill='#000' class='homelogosvg' filter='url(#glowHero)' d="M111.9,165L111.9,165l-0.7,0C111.4,165,111.6,165,111.9,165z"/>
							<path fill='#1160A8' class='homelogosvgblue' d="M111.9,165L111.9,165l-0.7,0C111.4,165,111.6,165,111.9,165z"/>
							<path fill='#000' class='homelogosvg' filter='url(#glowHero)' d="M111.9,225.3v42.8H70.8c-28.8,0-53.2-17.5-64.1-42.8H111.9z"/>
							<path fill='#1160A8' class='homelogosvgblue' d="M111.9,225.3v42.8H70.8c-28.8,0-53.2-17.5-64.1-42.8H111.9z"/>
							<path  fill='#000' class='homelogosvg' filter='url(#glowHero)'d="M111.9,212.5H2.5c-1.3-5.5-2-11.3-2-17.3c0-6,0.7-11.7,2-17.3h109.4V212.5z"/>
							<path fill='#1160A8' class='homelogosvgblue' d="M111.9,212.5H2.5c-1.3-5.5-2-11.3-2-17.3c0-6,0.7-11.7,2-17.3h109.4V212.5z"/>
						</g>
						<g>
							<path fill='#000' class='homelogosvg' filter='url(#glowHero)'d="M175.3,61.9c-11-25.2-35.3-42.8-64.1-42.8H70.1v42.8H175.3z"/>
							<path fill='#1160A8' class='homelogosvgblue' d="M175.3,61.9c-11-25.2-35.3-42.8-64.1-42.8H70.1v42.8H175.3z"/>
							<path fill='#000' class='homelogosvg' filter='url(#glowHero)' d="M175.3,122.2c-10.9,25.1-34.9,42.6-63.4,42.8c-0.2,0-0.4,0-0.7,0H6.7c10.9-25,34.9-42.6,63.4-42.8
								c0.2,0,0.4,0,0.7,0H175.3z"/>
							<path fill='#1160A8' class='homelogosvgblue' d="M175.3,122.2c-10.9,25.1-34.9,42.6-63.4,42.8c-0.2,0-0.4,0-0.7,0H6.7c10.9-25,34.9-42.6,63.4-42.8
								c0.2,0,0.4,0,0.7,0H175.3z"/>
							<path fill='#000' class='homelogosvg' filter='url(#glowHero)' d="M70.8,122.2c-0.2,0-0.5,0-0.7,0v0H70.8z"/>
							<path fill='#1160A8' class='homelogosvgblue' d="M70.8,122.2c-0.2,0-0.5,0-0.7,0v0H70.8z"/>
							<path fill='#000' class='homelogosvg' filter='url(#glowHero)' d="M70.1,109.3h109.4c1.3-5.5,2-11.3,2-17.3c0-6-0.7-11.7-2-17.3H70.1V109.3z"/>
							<path fill='#1160A8' class='homelogosvgblue' d="M70.1,109.3h109.4c1.3-5.5,2-11.3,2-17.3c0-6-0.7-11.7-2-17.3H70.1V109.3z"/>
						</g>
					</g>
					<g>
						<path class="fillwhite" d="M125.3,216.6V178h11.5c10.5,0,18.8,8.7,18.8,19.3c0,10.7-8.3,19.3-18.8,19.3H125.3z M136.9,215.3
							c9.7,0,17.4-8.1,17.4-18c0-9.9-7.7-18-17.4-18h-10.2v36.1H136.9z"/>
						<path class="fillwhite" d="M161.7,177.9c0.8,0,1.3,0.6,1.3,1.6s-0.5,1.6-1.3,1.6c-0.8,0-1.3-0.6-1.3-1.6S160.9,177.9,161.7,177.9z
							M161,187v27.8h1.3V187H161z"/>
						<path class="fillwhite" d="M173.9,223.5c3.5,2.6,7.1,3.3,11.1,3.3c7.6,0,12.7-5.1,12.7-12.6v-7.5c-2,5.4-6.8,8.7-13,8.7
							c-8.8,0-14.2-6.4-14.2-14.5c0-7.9,5.1-14.5,14.1-14.5c6.6,0,11.2,3.6,13.1,8.8V187h1.3v27.2c0,8.2-5.6,13.8-14,13.8
							c-4.3,0-8-0.8-11.7-3.4L173.9,223.5z M184.7,214.2c7.5,0,13.1-5.4,13.1-13.3c0-7.4-5.2-13.2-13.2-13.2c-8.1,0-12.7,6-12.7,13.2
							C171.8,208.4,176.8,214.2,184.7,214.2z"/>
						<path class="fillwhite" d="M209.9,177.9c0.8,0,1.3,0.6,1.3,1.6s-0.5,1.6-1.3,1.6c-0.8,0-1.3-0.6-1.3-1.6S209.2,177.9,209.9,177.9z
							M209.3,187v27.8h1.3V187H209.3z"/>
						<path class="fillwhite" d="M235.6,207.6c0.3,0.7,0.3,1.4,0.3,1.4c0,3.6-2.5,6.4-6.8,6.4c-3.5,0-7.2-1.3-7.2-9v-18.1h-5.1V187h5.1
							l0.4-9.4h1v9.4h9.4v1.2h-9.4v18.1c0,6.6,3.1,7.8,5.9,7.8c3.4,0,5.4-2.2,5.4-5.2c0,0,0-1-0.2-1.4H235.6z"/>
						<path class="fillwhite" d="M253.4,186.4c6.6,0,11.2,3.6,13.1,8.8V187h1.3v27.8h-1.3v-8.1c-2,5.4-6.8,8.7-13,8.7
							c-8.8,0-14.2-6.4-14.2-14.5C239.2,193,244.3,186.4,253.4,186.4z M253.5,214.2c7.5,0,13.1-5.4,13.1-13.3c0-7.4-5.2-13.2-13.2-13.2
							c-8.1,0-12.7,6-12.7,13.2C240.6,208.4,245.6,214.2,253.5,214.2z"/>
						<path class="fillwhite" d="M278.2,177.9h1.3v36.9h-1.3V177.9z"/>
					</g>
					<g>
						<path class="fillwhite" d="M125.3,268v-38.6h22.8v1.3h-21.5v17.8h18.8v1.3h-18.8v17h21.5v1.3H125.3z"/>
						<path class="fillwhite" d="M159,268.3h-1.3v-27.8h1.3v6.8c2.3-5.6,7.6-7.4,10.6-7.4c5.7,0,11.9,2.5,11.9,12.3v16.1h-1.3v-16.1
							c0-8.8-5.5-11.1-10.6-11.1c-3.5,0-10.4,2.7-10.6,12.2V268.3z"/>
						<path class="fillwhite" d="M215.4,264.1c-3.3,3.3-7.5,4.3-11.2,4.3c-9.3,0-15.4-6.5-15.4-14.4c0-8,6.2-14.6,14.9-14.6
							c6.7,0,13,3.9,13.4,13.1h-26.8c-0.1,0.5-0.1,1-0.1,1.5c0,7.2,5.5,13.1,14,13.1c3.4,0,7.2-1,10.3-4L215.4,264.1z M190.5,251.4h25.2
							c-0.7-7.4-6.1-10.8-11.9-10.8C196.6,240.6,191.6,245.5,190.5,251.4z"/>
						<path class="fillwhite" d="M225.8,248c1.3-4.7,4.2-8.4,9.9-8.4c0.5,0,1.3,0.1,1.7,0.1v1.3c-0.5-0.1-1.3-0.1-1.7-0.1
							c-8.1,0-9.8,8.9-9.9,16.3V268h-1.3v-27.8h1.3V248z"/>
						<path class="fillwhite" d="M242,276.4c3.5,2.6,7.1,3.3,11.1,3.3c7.6,0,12.7-5.1,12.7-12.6v-7.5c-2,5.4-6.8,8.7-13,8.7
							c-8.8,0-14.2-6.4-14.2-14.5c0-7.9,5.1-14.5,14.1-14.5c6.6,0,11.2,3.6,13.1,8.8V240h1.3v27.2c0,8.2-5.6,13.8-14,13.8
							c-4.3,0-8-0.8-11.7-3.4L242,276.4z M252.7,267.1c7.5,0,13.1-5.4,13.1-13.3c0-7.4-5.2-13.2-13.2-13.2c-8.1,0-12.7,6-12.7,13.2
							C239.9,261.3,244.8,267.1,252.7,267.1z"/>
						<path class="fillwhite" d="M273.6,240h1.5l11.6,27.1L298,240h1.5l-17,40.3h-1.3l4.8-11.7L273.6,240z"/>
					</g>
				</g>
				</svg>
				{
					(section.content) ?  <div dangerouslySetInnerHTML={{__html: section.content}}></div> : ''
				}
			</div>
		</section>
  	)
}

export default FullHero