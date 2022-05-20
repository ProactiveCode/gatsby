import * as React from 'react'
import { graphql } from 'gatsby'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { Helmet } from "react-helmet"
import c from 'classnames'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as Styles from './blogPost.module.scss'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({data}) => {
	const blog = data.contentfulBlogPost;
	console.log(blog.Blogcontent.raw);
	const richText = blog.Blogcontent;
	console.log(richText);
	// const pageData = JSON.parse(data.contentfulBlogPost.mainContent.internal.content);
	// console.log(pageData);
	// const title = data.contentfulBlogPost.metaTitle;
	// const desc = data.contentfulBlogPost.metaDescription;
	// const sections = pageData['sections'];
	// console.log(sections);

	const options = {
		renderMark: {
		  [MARKS.BOLD]: (text) => <strong>{text}</strong>,
		},
		renderNode: {
		  [INLINES.HYPERLINK]: (node, children) => {
			  console.log(node);
			const { uri } = node.data
			return (
			  <a href={uri} className="underline">
				{children}
			  </a>
			)
		  },
		  [BLOCKS.HEADING_1]: (node, children) => {
			return <h2>{children}</h2>
		  },
		  [BLOCKS.EMBEDDED_ASSET]: (node) => {
			    const { description, gatsbyImageData } = node.data.target
				
			    return (
			        <GatsbyImage
			          image={getImage(gatsbyImageData)}
			          alt={description}
			        />
			    )
			},
		},
	  }

	return (
		<main className={c('grey')}>
			<Helmet>
				{/* <title>{title}</title>
				<meta name="title" content={title}></meta>
				<meta name="description" content={desc}></meta>
				<meta name="keywords" content="keywords"></meta> */}
			</Helmet>
			<Header></Header>
				<div className={Styles.blogContentTitle}>
					<div className={c("container", "container1000")}>
						<h1>{blog.blogTitle ? <h1>{blog.blogTitle}</h1> : ''}</h1>
					</div>
				</div>
				<div className={c(Styles.blogContent, "container", "container1000")}>
					<div className={Styles.blogContentWrap}>
						<div className={Styles.blogContentText}>
							{blog.Blogcontent ? <div>{renderRichText(richText, options)}</div> : ''}
						</div>
						<div className={Styles.blogContentMeta}>
							<div className={Styles.blogContentMetaInner}>
								{blog.author ? 		
									<div className={Styles.blogContentAuthor}>
										<img src="https://via.placeholder.com/300" alt="Author" />
										<p><strong>{blog.author.name}</strong></p>
										<p><em>{blog.author.position}</em></p>
									</div> : ''
								}
								<div className={Styles.blogDate}>
									<p>{blog.createdAt}</p>
								</div>
								{blog.categories ? <div className={Styles.blogCats}> 	
									{ 
										blog.categories.map((category) => 
										( <p>{category.name}</p> )) 
									} 
								</div> : ''}
								<div className={Styles.blogRelated}>
									<h5>You might be interested</h5>

								</div>
							</div>
						</div>
					</div>
				</div>
			<Footer></Footer>
		</main>
	)
}

export const data = graphql`
  	query blogPostQuery($id: String) {
		contentfulBlogPost(id: { eq: $id }) {
			id
			blogTitle
			slug
			author {
				id
				name
				position
			}
			Blogcontent {
				raw
				references {
					... on ContentfulAsset {
					  contentful_id
					  title
					  description
					  gatsbyImageData(width: 1000)
					  __typename
					}
				}
			}
			createdAt(formatString: "DD MMMM, YYYY")
			categories {
				name
			}
		}
  	}
`;
export default BlogPost