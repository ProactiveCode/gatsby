import * as React from 'react'
import c from 'classnames'
import { useState} from "react"

const Layout = ({ classes, link, text, hoverText}) => {
	const [BtnText, setBtnText] = useState(text);

	return (
		<a href={link} className={c(classes)} onMouseEnter={() => setBtnText(hoverText)} onMouseLeave={() => setBtnText(text)}>{BtnText}</a>
	)
}

export default Layout