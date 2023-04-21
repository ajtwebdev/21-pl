module.exports = () => {
  return `
        title
        description
        subheader
        image {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      `
}
