
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

  console.log("data.LOLLIES.getAllLollies in gatsby-node.js >>>>>>>>>>>>>>>>>>>>>>>>>:", data.LOLLIES.getAllLollies)

  data.LOLLIES.getAllLollies.forEach((node) => {
    actions.createPage({
      path: `lollies/${node.link}`,
      component: path.resolve(`./src/templates/dynamicLollyPage.tsx`),
      context: {
        data: node
      }
    })
  })
}
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   if (page.path.match(/^\/lollies/)) {
//     page.matchPath = "/lollies/*";
//     createPage(page);
//   }
// };