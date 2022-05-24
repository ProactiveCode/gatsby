import * as React from 'react'

const headComponents = [
    <link rel="preload" as="style" href="https://use.typekit.net/pgr3vtw.css"></link>
  ]
  
  export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents(headComponents)
  }