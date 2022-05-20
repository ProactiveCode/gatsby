import * as React from "react"
import { useState } from "react"
import { Link,graphql } from 'gatsby'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Section from '../../components/section/section'
import Title from '../../components/title/title'
import Generic from '../../components/generic/generic'
import { Helmet } from "react-helmet"
import c from 'classnames'
import * as Styles from './blogIndex.module.scss'

function FilterByTopic(filteredData, topic) {
	// Avoid filter for empty string
	if (!topic || topic === "all") {
		return filteredData;
	}
	const filteredPosts = filteredData.filter((post) => 
		JSON.stringify(post.categories).toLowerCase().includes(topic)	
	);
	return filteredPosts;
};

function searchTopic(filteredData, term) {
	// Avoid filter for empty string
	if (!term) {
		return filteredData;
	}
	const filteredPosts = filteredData.filter((post) => 
		post.blogTitle.toLowerCase().includes(term)	
	);
	return filteredPosts;
};

	
function orderItems(filteredData, order) {
	if (order === "asc") {
		filteredData.sort(function(a,b){
			return new Date(b.createdAt) - new Date(a.createdAt);
		});
	} else {
		filteredData.sort(function(a,b){
			return new Date(a.createdAt) - new Date(b.createdAt);
		});
	}
	const ordered = filteredData;
	return ordered;
};

// Step 2: Define your component
const Blog = ({data}) => {
	const posts = data.allContentfulBlogPost.nodes;

	//setup variables for the different filters filterPosts hold the var and set will be used to change it.
	const [filteredPosts, setFilteredPosts] = useState(posts);
	const [selectedTopic, setSelectedTopic] = useState("all");
	const [selectedSearch, setSelectedSearch] = useState("");
	const [selectedOrder, setSelectedOrder] = useState("asc");

	//each function handles the change and is called onChange in the form element. Sets the related filter using setSelect* and then it calls the 3 functions to filter the data. We first pass posts which has all posts from the query at the bottom, then it gradually gets less and less as we do the 3 filters. Finally we set the Filtered Posts to be the filtered content and React will automatically update the posts using the map function below in the content.
	const handleTopicChange = (event) => {
		setSelectedTopic(event.target.value);
        let filteredData = FilterByTopic(posts, event.target.value);
		filteredData = searchTopic(filteredData, selectedSearch);
        filteredData = orderItems(filteredData, selectedOrder);
        setFilteredPosts(filteredData);
	};

	const handleOrderChange = (event) => {
		setSelectedOrder(event.target.value);
        let filteredData = FilterByTopic(posts, selectedTopic);
		filteredData = searchTopic(filteredData, selectedSearch);
        filteredData = orderItems(filteredData, event.target.value);
        setFilteredPosts(filteredData);
	};
	
	const handleSearchChange = (event) => {
		setSelectedSearch(event.target.value);
		console.log(event.target.value);
        let filteredData = FilterByTopic(posts, selectedTopic);
		filteredData = searchTopic(filteredData, event.target.value);
        filteredData = orderItems(filteredData, selectedOrder);
        setFilteredPosts(filteredData);
	};

	const formSubmit = (event) => {
		event.preventDefault();
		document.getElementById("blogArticles").scrollIntoView({behavior: "smooth"});
	}

    return (
     	<main>
         	<Helmet>
				<title>Blog</title>
				<meta name="title" content="title"></meta>
				<meta name="description" content="desc"></meta>
				<meta name="keywords" content="keywords"></meta>
			</Helmet>
			<Header></Header>
			<Section identifier="test" bgcolour="grey" smaller="sectionSmall">
				<div className={c(Styles.blogHome)}>
					<Title section={{ "line": "pink", "content": "<h3 class='large'>Passion in<br>what we do</h3>", "alignment": "left", "__typename": "BlogTitle", "sectionInfo": [ { "size": "tiny", "image": "", "bgColor": "grey", "identifier": "Title-1" } ], "containerSize": "800" }}></Title>
					<div className={c('container', 'container800')}>
						<p>The team like to stay up to date on current trends in design, development and anything digital. There are some topics the team believe are worth sharing with you, so they have put together some articles to help inspire passion and creativity.</p>
						<Generic section={{ "size": "800", "content": "<img alt='Carbon offset' src='https://images.ctfassets.net/74ncoczcn9dm/3VDQ5Rk9V6VI17HAypma1G/67472bc4657b8ff5ef06b816c54a1950/carbon.png' />", "contentVideo": "", "__typename": "Generic", "extra_global_class": "", "extra_block_class": "", "sectionInfo": [ { "size": "small", "image": "", "bgColor": "grey", "identifier": "carbon" } ] }}></Generic>
					</div>
				</div>
				<div className={c('container', 'container1000')}>
					<h2 className="small">Must Read</h2>
					<div className={Styles.blogFeatured}>
						<div className={Styles.blogAuthor}>
							<img src="https://via.placeholder.com/300" alt="Author" />
							<p className={Styles.authorName}>Adam</p>
							<p className={Styles.authorPos}>The Developer</p>
						</div>
						<div className={Styles.blogInfo}>
							<Link to={'/blog/'}><h3>Blog title</h3></Link>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dicta quasi animi iusto pariatur aliquam facere cumque enim voluptatum at fuga ipsum incidunt magnam dolores.</p>
						</div>
					</div>
					<div className={Styles.blogFilters}>
						<h4>Helping you ﬁnd what you may be interested in</h4>
						<div className={Styles.blogFilterWrap}>
							<form action="javascript:void(0);">
								<div className={Styles.blogFilter}>
									<p>Tagged Topic:</p>
									<select name="topic" id="topic" value={selectedTopic} onChange={handleTopicChange}>
										<option value="all">All</option>
										<option value="coding">Coding</option>
										<option value="website">Website</option>
										<option value="trend">Trend</option>
									</select>
								</div>
								<div className={Styles.blogFilter}>
									<p>Date:</p>
									<select name="date" id="date" value={selectedOrder} onChange={handleOrderChange}>
										<option value="asc">Newest - Oldest</option>
										<option value="desc">Oldest - Newest</option>
									</select>
								</div>
								<div className={Styles.blogFilter}>
									<p>Search:</p>
									<input type="text" placeholder="Type Here..." onChange={handleSearchChange}></input>
								</div>
								<div className={c(Styles.blogFilter, Styles.blogSubmit)}>
									<button type="submit" onClick={formSubmit}>GO!</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className={c('container', 'container1000', Styles.blogArticlesWrap)}>
					<div id="blogArticles" className={c(Styles.blogArticles)}>
						{
							filteredPosts.map((node) => (
								<article key={node.id}>
									<Link to={`/blog/${node.slug}`}><h3>{node.blogTitle}</h3></Link>
									<p>{node.excerpt.excerpt}</p>
									<div className={Styles.articleInfo}>
										{node.author ? <p><strong>{node.author.name}</strong></p> : ''}
										{node.author ? <p><em>{node.author.position}</em></p> : ''}
										{node.createdAt ? <p><strong>{node.createdAt}</strong></p> : ''}
										{node.categories ? <div className={Styles.articleCats}> 	
											{ 
												node.categories.map((category) => 
												( <p>{category.name}</p> )) 
											} 
										</div> : ''}
									</div>
								</article>
							))
						}			
					</div>
					<div className={Styles.blogNone}>
						<p>Sorry! There are no articles that match your filters.</p>
					</div>	
				</div>
			</Section>
			<Footer></Footer>
      	</main>
    )
}

export const query = graphql`
query {
	allContentfulBlogPost( sort: {fields: Blogcontent___references___createdAt, order: ASC}) {
		nodes {
			blogTitle
			id
			slug
			author {
				name
				position
			}
			createdAt(formatString: "DD MMMM, YYYY")
			excerpt {
				excerpt
			}
			categories {
				name
			}
		}
	}
}
`
  // Step 3: Export your component
  export default Blog