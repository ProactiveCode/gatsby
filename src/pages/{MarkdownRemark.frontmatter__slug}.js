import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header/header'
import Flipdown from '../components/flipdownImage/flipdownImage'
import TwoCol from '../components/twoCol/twoCol'
import Column from '../components/column/column'
import Section from '../components/section/section'
import FullHero from '../components/fullHero/fullHero'
import { Helmet } from "react-helmet"

export default function Template({ data }) {
    console.log(data.markdownRemark.html);
  const { markdownRemark } = data // data.markdownRemark holds your post data
  console.log(markdownRemark);
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        page_sections {
          template {
            desc
            title
            keywords
            name
          }
        }
      }
    }
  }
`