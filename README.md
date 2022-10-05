<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby DE Theme
</h1>

## 🚀 Quick start

1.  **Install Gatsby & its prerequisites.**

    Use the [Gatsby tutorial](https://www.gatsbyjs.com/docs/tutorial/) to install and learn the basics. Once that's done learn about React states [here](https://reactjs.org/docs/hooks-state.html). I would not recommend trying to edit this without these 2 things learnt to a good degree of detail.
    <br><br>

2.  **Start developing.**

    Once you have learnt the basics you can work on the site. Open the files in VSCode & open terminal. Then you can run a number of commands:
      <br><br>
      **Develop locally (static)**
      
      This will start the development process, this will need to be cancelled and re ran everytime something changes on Contentful

      ```shell
      gatsby develop
      ```

      <br><br>
      **Develop locally (Dynamic)**
      
      This will start the development process, this process can update content on your machine from Contentful by running an extra function in terminal with this process running.

      ```shell
      Run this in terminal inside VSCode

      ENABLE_GATSBY_REFRESH_ENDPOINT=true gatsby develop
      ```

       ```shell
      Run this in a seperate terminal window whenever you want to pull in content updates from Contentful
      
      curl -X POST http://localhost:8000/__refresh
      ```

3.  **Open the code and make changes**

    The site is now running at http://localhost:8000.

    Any changes will update in real time. A quick run down of file structure:

    * components - *All blocks are stored here, each block is the js file and has its own styles/imports/JS*
    * images - *contains any locally hosted images/files not really used for images due to CMS*
    * pages - *All main pages stored here:*
        * 404 is static apart from redirects.
        * Blog contains blog homepage, single post and their styles. It's in a blog folder to force /blog/ in url. Blog homepage (index.js) is static as it contains alot of filters etc. How it works with queries etc is explained in the Gatsby tutorial. The individual posts are stored in {contentfulBlogPost.slug}.js. This page will render WYSIWYG content and generate pages as they exist in Contentful, again how this works with queries will be clear after the Gatsby tutorial.
        * {contentfulPage.slug}.js Generate all pages as they exist in contentful. The Gatsby tutorial will help with understanding this page. As a basic overview this is the main page for the whole site, all blocks are imported into this JS page, and then it cycles through each block passed from Contentful and loads its when needed.
        * robots - usual robots.txt stuff.
    * sass - *usual directory for SASS, contains reset/typography/layout styles etc. Anything added to this folder should be added styles.scss, but blocks does not.*
    * static - *This folder doesn't do anything atm, I added JSONs in there as examples if you need to add blocks to Contentful with them.*
    * gatsby-browser.js - *Add changes to browser side*
    * gatsby-config.js - *Contains all plugins setup info (Tutorial will explain)*
    * gatsby-ssr.js - *Add changes to server side*
<br><br>

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

<br><br>

## 🚀 Deploying changes

Deploying should be pretty straight forward as if you have this then you should still be linked to the Git repo. To deploy code changes you should simply commit and push your files from here. This will automatically start a deployment on Digital Ocean. I'd recommend heading to the [Digital Ocean app](https://cloud.digitalocean.com/apps/74ae4e4d-5cbb-462d-af44-9e317b22987b/overview) to monitor it as it will display any errors there. Once the the deployment says 'deployment went live' then your changes should be visible on the live site.

To deploy just content changes, you can make the changes on Contentful and publish them on there. Then head to the [Digital Ocean app](https://cloud.digitalocean.com/apps/74ae4e4d-5cbb-462d-af44-9e317b22987b/overview) and at the top right press Actions & then press Force Rebuild & Deploy, check the 'Clear Build Cache' option.

<br><br>

## 🚀 Extra Info

**Simulate a Digital Ocean Build**
  
This will simulate a deployment to the live servers. Deploying to a live server will sometimes throw errors that can't be seen in local environments so this is a good test without using build minutes.

```shell
gatsby build
```

You can view the built files by running

```shell
gatsby serve
```

<br>

**Clean Gatsby local cache**
  
You can clean the local Gatsby cache if needed

```shell
gatsby clean
```
