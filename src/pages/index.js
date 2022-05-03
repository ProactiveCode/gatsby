import * as React from "react"
import Header from '../components/header/header'
import FullHero from '../components/fullHero/fullHero'
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <main>
      <Header pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Header>
      <FullHero bgcolour="#2E2D2C" image="../../../blog/post-2/p2.jpg" />

    </main>
  )
}

export default IndexPage
