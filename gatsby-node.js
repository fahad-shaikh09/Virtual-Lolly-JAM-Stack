
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
      
    console.log(data)

  data.LOLLIES.getAllLollies.forEach(({ link }) => {
    actions.createPage({
      path: `lollies/${link}`,
      component: path.resolve(`./src/components/DynamicLollyPage.tsx`),
      context: {
        link: link,
      },
    })
  })
}