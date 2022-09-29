exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions;
    
    createRedirect({
    fromPath: `/web-development/`,
    toPath: `/web-development-leeds/`,
  });
}