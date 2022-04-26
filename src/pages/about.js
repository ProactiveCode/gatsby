import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Defining the <Greeting> component
const Greeting = (icecreams) => {
    return (
      <p>Hi {icecreams.name}!</p>
    )
}

// Step 2: Define your component
const AboutPage = () => {
    return (
      <main>
          <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsbyasdadasdsa.</p>
    </Layout>
        <title>About Me</title>
        <h1>About Me</h1>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <Link to="/">Home</Link>
        <div className="clas">
            <div className="col1">
                <p>test</p>
            </div>
            <div className="col2">
                <p>test2</p>
                <Greeting name="dff" />
            </div>
        </div>
      </main>
    )
  }
  // Step 3: Export your component
  export default AboutPage