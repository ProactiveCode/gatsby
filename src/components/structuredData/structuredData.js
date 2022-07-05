import * as React from 'react'
import c from 'classnames'
import Helmet from 'react-helmet'

const Layout = ({ val }) => {
	console.log('test');
	return (
		<script type="application/ld+json">{JSON.stringify(val)}</script>
	)
}

export default Layout