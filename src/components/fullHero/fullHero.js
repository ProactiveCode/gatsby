import * as React from 'react'
import { fullHero, fullWidthGI } from './fullHero.module.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const FullHero = ({ bgcolour, image }) => {
	console.log('image: ' + image);
	const imageSrc = getImage(image);
	console.log(imageSrc);
  	return (
		<div className={fullHero} style={{backgroundColor: bgcolour}}>
			<GatsbyImage className={fullWidthGI} image={imageSrc} width={250} alt={"Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"} />
		</div>
  	)
}

export default FullHero