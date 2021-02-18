
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {

  const { data } = await graphql(`
    query MyQuery {
        LOLLIES {
            getAllLollies {
              topColor
              middleColor
              bottomColor
              link
              message
              toField
              fromField
            }
        }
      }
      `)

  console.log("data in gatsby-node.js >>>>>>>>>>>>>>>>>>>>>>>>>:", data.LOLLIES.getAllLollies)

  data.LOLLIES.getAllLollies.forEach((node) => {
    actions.createPage({
      path: `lollies/${node.link}`,
      component: path.resolve(`./src/templates/dynamicLollyPage.tsx`),
      context: node
    })
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   if (page.path.match(/^\/`lollies/)) {
//     page.matchPath = "/lollies/*";
//     createPage(page);
//   }
// };
