import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { AnchorPrimary } from "../../buttons"
import { Container, Section } from "../../layoutComponents"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2em auto 4em auto;
  grid-template-rows: 4em auto 4em;
`

const Img = styled.div`
  grid-row: 1 / span 2;
  grid-column: 2 / span 1;
  z-index: 2;
`

const Bg = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  background: var(--clr-dark);
  border-radius: var(--br);
`

const Text = styled.div`
  grid-row: 2 / -1;
  grid-column: 4 / -1;
  z-index: 2;
  align-self: center;
  color: var(--txt-light);
`

export default function Ebook({ title, image }) {
  return (
    <Section>
      <Container>
        <Grid>
          <Img>
            <GatsbyImage
              image={image.localFile.childImageSharp.gatsbyImageData}
              alt={image.altText}
            />
          </Img>
          <Bg />
          <Text className="spacing">
            <h2 className="title">{title}</h2>
            <AnchorPrimary href="" target="_blank">
              request free download
            </AnchorPrimary>
          </Text>
        </Grid>
      </Container>
    </Section>
  )
}
