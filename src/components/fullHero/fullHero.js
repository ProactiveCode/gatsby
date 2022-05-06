import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as Styles from './fullHero.module.scss'
import c from 'classnames'

const FullHero = ({ bgcolour, image }) => {
  	return (
		<div className={c(Styles.fullHero, bgcolour)}>
			<StaticImage className={Styles.fullWidthGI} width={200} alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="../../images/digital-energy-logo-final.svg" />
		</div>
  	)
}

export default FullHero