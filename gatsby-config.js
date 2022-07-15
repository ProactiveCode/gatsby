module.exports = {
  siteMetadata: {
    title: `Digital Energy`,
    siteUrl: `https://digitalenergy.agency/`
  },
  plugins: ["gatsby-plugin-sass", 
  "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-1XL9ZWN67P",
      ],
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
        send_page_view: true
      },
      pluginConfig: {
        head: false,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {   
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Digital Energy",
        short_name: "Digital Energy",
        start_url: "/",
        background_color: "#1060A8",
        theme_color: "#1060A8",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.png",
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        }, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
  },
  {
    /* Include plugin */
    resolve: "gatsby-omni-font-loader",
  
    /* Plugin options */
    options: {
  
      /* Font loading mode */
      mode: "async",
  
      /* Enable font loading listener to handle FOUT */
      enableListener: true,
  
      /* Preconnect URL-s. This example is for Google Fonts */
      preconnect: ["https://use.typekit.net"],
  
  
      /* Web fonts. File link should point to font CSS file. */
      web: [{
          /* Exact name of the font as defied in @font-face CSS rule */
          name: "arboria",
          /* URL to the font CSS file with @font-face definition */
          file: "https://use.typekit.net/pgr3vtw.css",
        },
      ],
    },
  },
  {
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: "74ncoczcn9dm",
      accessToken: "RaBpqvATs2YyTaae1W7nv1viNHO0c9Khww_Vl81H7_Q",
    },
  },
  "gatsby-plugin-sitemap",
  "gatsby-plugin-mdx"]
};