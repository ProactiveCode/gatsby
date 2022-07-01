import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

// markup
const NotFoundPage = () => {
  return (
    <main className={'four04'}>
      <Helmet htmlAttributes={{lang: 'en'}}>
				<title>Page not found</title>
				<meta name="title" content='Page not found | Digital Energy'></meta>
				<meta name="description" content="Sorry page could not be found | Digital Energy"></meta>
			</Helmet>
      <div className="four04Main">
        <img src="https://images.ctfassets.net/74ncoczcn9dm/147KDh3wE2SYfpqLq8yBSW/d819bc5eb9a05c4e5e7f661cfe04664d/digital-energy-logo-final.svg" alt="Digital Energy Logo"></img>
        <h1>Page not found</h1>
        <p>Sorry! we couldn’t find what you were looking for.</p>
        <Link to="/" className="btn">Go home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage
