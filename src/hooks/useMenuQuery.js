import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      wpMenu(name: { eq: "Main Menu" }) {
        menuItems {
          nodes {
            url
            parentId
            label
            id
            childItems {
              nodes {
                label
                url
                parentId
                childItems {
                  nodes {
                    id
                    label
                    parentId
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data
}
