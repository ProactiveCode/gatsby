import * as React from 'react'
import { useState } from "react"
import * as Styles from './cookies.module.scss'
import c from 'classnames'
import Cookies from 'js-cookie'

const Layout = () => {
	setTimeout(() => {
		if (typeof window !== 'undefined') {
			var cookiebar = document.getElementById("cookiesBar");

			if(Cookies.get('cookiesClosed')) {
				cookiebar.classList.remove("showBar");
			} else {
				cookiebar.classList.add("showBar");
			}
		}
	}, 1);

	function declineCookies() {
		var cookiebar = document.getElementById("cookiesBar");
		cookiebar.classList.remove("showBar");
		Cookies.set('cookiesClosed', 'true', 365);
		console.log('decline');
	}

	function acceptCookies() {
		var cookiebar = document.getElementById("cookiesBar");
		cookiebar.classList.remove("showBar");
		Cookies.set('cookiesClosed', 'true', 365);
		console.log('accept');
	}


	return (
		<div id='cookiesBar' className={Styles.cookieBar}>
			<div className={Styles.cookieBarText}>
				<p>We use cookies, which are small text files, to improve your experience on our website and to show you personalised content. You can allow or decline them all.</p>
			</div>
			<div className={Styles.cookieBarButtons}>
				<button className='btn btn--smaller btn--white' onClick={declineCookies}>Decline</button>
				<button className='btn btn--smaller btn--alt-white' onClick={acceptCookies}>Accept</button>
			</div>
		</div>
	)
}

export default Layout