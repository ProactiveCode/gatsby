import * as React from 'react'
import * as Styles from './button.module.scss'
import c from 'classnames'
import { useState, useRef, useEffect } from "react"

const Layout = ({ classes, link, text, hoverText}) => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const [BtnText, setBtnText] = useState(text);


	return (
		<a href="javascript:void(0);" className={c(classes)} onMouseEnter={() => setBtnText(hoverText)} onMouseLeave={() => setBtnText(text)}>{BtnText}</a>
	)
}

export default Layout