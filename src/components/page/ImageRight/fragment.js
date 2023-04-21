module.exports = () => {
  return `
        subheader
        title
        body
        image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
    `
}
