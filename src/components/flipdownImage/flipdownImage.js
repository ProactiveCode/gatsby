import * as React from 'react'
import * as Styles from './flipdownImage.module.scss'
import { useState } from "react"
import FlipdownItem from '../../components/flipdownItem/flipdownItem'

const Layout = ({ containerSize, children }) => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<div className={Styles.flipdownContainer}>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
			<FlipdownItem>
				<div className={Styles.flipdownItemFront}>
					<img src="https://via.placeholder.com/100x50/ff0000"></img>
				</div>
				<div className={Styles.flipdownItemBack}>
					<img src="https://via.placeholder.com/100x50"></img>
				</div>
			</FlipdownItem>
		</div>
	)
}

export default Layout