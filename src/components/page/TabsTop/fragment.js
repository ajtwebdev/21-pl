module.exports = () => {
  return `
  title
  tabsContent {
    tabTitle
    tabList
    tabLabel
    tabBody
    tabImage {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  `
}
