import * as React from 'react'
import * as Styles from './neonItems.module.scss'
import c from 'classnames'
import { useState } from "react"
import Glide from '@glidejs/glide'

const Layout = ({ section, vol }) => {
	const items = section.items;
	const direction = "column_" + section.colDir;
	const safeID = section.sectionInfo[0].identifier.replace(/\s+/g, '-').replace("'", '').toLowerCase();

	const [clicked, setClicked] = useState(false);

	const toggleClick = (elem) => {
		if (typeof window !== 'undefined') {
			if(window.innerWidth > 768) {
				if(elem.target.closest('.neonItem').classList.contains('neonItems-module--clicked--ODFnH')) {
					elem.target.closest('.neonItem').classList.remove("neonItems-module--clicked--ODFnH");
					setClicked(false);
				} else {
					elem.target.closest('.neonItem').classList.add("neonItems-module--clicked--ODFnH");
					setClicked(true);
				}
			}
		}
	}

	setTimeout(() => {
		if (typeof window !== 'undefined') {
			if(window.innerWidth < 768) {
			var slider = document.querySelector('.glide');

			if (slider) {
			var glide = new Glide(slider, {
				type: 'carousel',
				perView: 1
			});
			
			glide.mount();
			}
			}
		}
	}, 1000);


	return (
		<section id={safeID} data-id={section.sectionInfo[0].identifier} className={c("section", section.sectionInfo[0].bgColor, "section_" + section.sectionInfo[0].size, section.extra_class)} 
		style={ section.sectionInfo[0].image ? { backgroundImage:  `url("${section.sectionInfo[0].image}")`} : {}}>
			{
				(section.sectionInfo[0].video) ?  <video playsInline="true" loading="lazy" src={section.sectionInfo[0].video} loop={true} aria-hidden="true" autoPlay={true} muted={true}></video> : ''
			}
			<div className={c(Styles.neonItems, "container", "container" + section.size, Styles[direction])}>
				<div className="glide">
					<div className="glideTrack" data-glide-el="track">
						<div className={Styles.neonItemsWrap} >
						{
							items.map((section, i) => (
								<div className={c(Styles.neonItem, 'neonItem')} onClick={toggleClick}>
									<div className={Styles.neonItemImage}>
									</div>
									<div className={Styles.neonItemWrap}>
										<div className={Styles.neonItemTitle}>
											<div dangerouslySetInnerHTML={{__html: section.title}}></div>
										</div>
										<div className={Styles.neonItemText}>
											<p>{section.content}</p>
										</div>
									</div>
								</div>
							))
						}
						</div>
					</div>
					<div class="glide__arrows" data-glide-el="controls">
						<button data-glide-dir="<"></button>
						<button data-glide-dir=">" className='btnRight'></button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Layout