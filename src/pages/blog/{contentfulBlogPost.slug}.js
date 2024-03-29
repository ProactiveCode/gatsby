import * as React from 'react'
import { graphql } from 'gatsby'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import RandomPosts from '../../components/randomPosts/randomPosts'
import { Helmet } from "react-helmet"
import c from 'classnames'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as Styles from './blogPost.module.scss'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useState, useRef, useEffect } from "react"

const BlogPost = ({data}) => {
	const blog = data.contentfulBlogPost;
	const richText = blog.Blogcontent;
	const title = data.contentfulBlogPost.metaTitle;
	const desc = data.contentfulBlogPost.metaDescription;

	const options = {
		renderMark: {
		  [MARKS.BOLD]: (text) => <strong>{text}</strong>,
		},
		renderNode: {
		  [INLINES.HYPERLINK]: (node, children) => {
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


	const prevScrollY = useRef(0);
	const [goingUp] = useState(false);

	useEffect(() => {
	  const handleScroll = () => {
			const currentScrollY = window.scrollY;
			prevScrollY.current = currentScrollY;
			const footer = document.querySelectorAll(".footer")[0];
			const header = document.querySelectorAll(".header")[0];

			if((currentScrollY + footer.getBoundingClientRect().top) <= (currentScrollY + (window.innerHeight - 72)) && ((currentScrollY + footer.getBoundingClientRect().top) + footer.offsetHeight) > currentScrollY) {
				header.classList.add('posAbs');
			} else {
				header.classList.remove('posAbs');
			}
	  };
  
	  window.addEventListener("scroll", handleScroll, { passive: true });
  
	  return () => window.removeEventListener("scroll", handleScroll);
	}, [goingUp]);

	return (
		<main className={c('grey')}>
			<Helmet>
				<title>{title ? title : 'Blog | Digital Energy'}</title>
				<meta name="title" content={title ? title : 'Blog | Digital Energy'}></meta>
				<meta name="description" content={desc ? desc : 'Blog | Digital Energy'}></meta>
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
							{blog.author ? 		
								<div className={Styles.blogContentAuthor}>
									<img src={blog.author.authorImage ? blog.author.authorImage.url : "https://via.placeholder.com/300"} alt="Author" />
									<p><strong>{blog.author.name}</strong></p>
									<p><em>{blog.author.position}</em></p>
								</div> : ''
							}
							<div className={Styles.blogDate}>
								<p>{blog.publishedDate}</p>
							</div>
							{blog.categories ? <div className={Styles.blogCats}> 	
								{ 
									blog.categories.map((category) => 
									( <p>{category.name}</p> )) 
								} 
							</div> : ''}
							<div className={Styles.blogContentMetaInner}>
								<div className={Styles.blogRelated}>
									<h5>You might be interested</h5>
									<RandomPosts></RandomPosts>
								</div>
							</div>
						</div>
					</div>
					<div className={Styles.backToBlog}>
						<a href="/blog">Back to blog</a>
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
			metaTitle
			metaDescription {
			  metaDescription
			}
			author {
				id
				name
				position
				authorImage {
					url
				}
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
			publishedDate(formatString: "DD MMMM, YYYY")
			createdAt(formatString: "DD MMMM, YYYY")
			categories {
				name
			}
		}
  	}
`;
export default BlogPost