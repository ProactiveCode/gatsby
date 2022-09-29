exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions;
    
    createRedirect({
    fromPath: `/test-page/`,
    toPath: `/web-development-leeds/`,
  });
}