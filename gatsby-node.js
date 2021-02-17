
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {

  const { data } = await graphql(`
    query MyQuery {
        LOLLIES {
            getAllLollies {
             link
            }
        }
      }
      `)

  console.log("data in gatsby-node.js >>>>>>>>>>>>>>>>>>>>>>>>>:", data)

  data.LOLLIES.getAllLollies.forEach(({ link }) => {
    actions.createPage({
      path: `lollies/${link}`,
      component: path.resolve(`./src/templates/dynamicLollyPage.tsx`),
      context: {
         link: link,
      }
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