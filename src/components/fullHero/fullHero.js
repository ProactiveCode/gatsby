import * as React from "react";
import * as Styles from "./fullHero.module.scss";
import c from "classnames";

// import { useState } from "react"
// import Cookies from 'js-cookie'

const FullHero = ({ section, vol }) => {
  // let [outerModal, setModal] = useState(false);
  // let play = true;

  // if(vol === true) {
  // 	play = false;
  // }

  // const toggleModal = () => {
  // 	if (typeof window !== 'undefined') {
  // 		var vid = document.getElementById("deModalVid");
  // 		var modal = document.getElementsByClassName('videoModal')[0];

  // 		if(modal.classList.contains('is-open')) {
  // 			modal.classList.remove("is-open");
  // 			vid.pause();
  // 			setModal(false);
  // 		} else {
  // 			modal.classList.add("is-open");
  // 			setModal(true);
  // 			vid.play();
  // 		}
  // 	}
  // }

  // setTimeout(() => {
  // 	if (typeof window !== 'undefined') {
  // 		var video = document.getElementById("homeVideoMain");
  // 		const videoMain = document.getElementById("homeVideoVid");

  // 		if(Cookies.get('homeVidPlayed')) {
  // 			video.classList.remove("showVid");
  // 		} else {
  // 			video.classList.add("showVid");
  // 			videoMain.play();
  // 		}
  // 	}
  // }, 1);

  const safeID = section.sectionInfo[0].identifier
    .replace(/\s+/g, "-")
    .replace("'", "")
    .toLowerCase();
  return (
    <section
      id={safeID}
      data-id={section.sectionInfo[0].identifier}
      className={c(
        "section",
        section.sectionInfo[0].bgColor,
        "section_" + section.sectionInfo[0].size
      )}
      style={
        section.sectionInfo[0].image
          ? { backgroundImage: `url("${section.sectionInfo[0].image}")` }
          : {}
      }
    >
      <div className={c(Styles.fullHero)}>
        {/* <div id="homeVideoMain showVid" className={c(Styles.fullHeroVideo, 'homeHeroVid')}>
					<video id="homeVideoVid" playsInline="true" loading="lazy" src={section.contentVideo} autoPlay={false} muted={play}></video>
				</div>
				
				<div className={c(Styles.fullHeroReply, 'homeHeroReplay')}>
					<button onClick={toggleModal} className={c('btn', 'btn--replay')}>Replay Showcase</button>
				</div>

				<div className={c(Styles.deModal, 'videoModal')} style={{opacity: 0, zIndex: -1}}>
					<button className={c(Styles.deModal__bg)} onClick={toggleModal} aria-label="Close modal"></button>
					<div className={c(Styles.deModal__wrapper)}>
						<div className={c(Styles.deModal__inner)}>
							<button className={c(Styles.deModal__close)} aria-label="Close modal" onClick={toggleModal}></button>
							<video id="deModalVid" loading="lazy" src={section.contentVideo} controls={true}></video>
						</div>
					</div>
				</div> */}
        <img
          src="https://images.ctfassets.net/74ncoczcn9dm/4FQcVwyhwt7ziB7XMc1iYz/cdf560b5fb5d3efdd4711ed85d79738e/new-brand-coming-soon.webp"
          alt="new brand logo"
        />

        {section.content ? (
          <div dangerouslySetInnerHTML={{ __html: section.content }}></div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default FullHero;
