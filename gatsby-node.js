
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    
    const { data } = await graphql(`
    query MyQuery {
        LOLLIES {
          getAllLollies {
          bottomColor
          fromField
          link
          message
          middleColor
          toField
          topColor
          }
        }
      }
      `)
      
    console.log("Data in gatsby-node.js >>>>>>>>>>>>>>>>:", data)

  data.LOLLIES.getAllLollies.forEach((node) => {
    actions.createPage({
      path: `lollies/${node.link}`,
      component: path.resolve(`./src/components/dynamicLollyPage.tsx`),
      context: node
    })
  })
}
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/lollies/)) {
    page.matchPath = "/lollies/*";
    createPage(page);
  }
};