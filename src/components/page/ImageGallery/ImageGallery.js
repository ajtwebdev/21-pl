import React from "react"
import styled from "styled-components"
import { Section } from "../../layoutComponents"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledImg = styled(GatsbyImage)``

const Wrapper = styled.div``

const Text = styled.div`
  max-width: 110ch;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;

  @media screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }
`

export default function ImageGallery({ subheader, title, body, imageGallery }) {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            />
          </Text>
          <Grid>
            {imageGallery.map(image => {
              return (
                <StyledImg
                  image={image.localFile.childImageSharp.gatsbyImageData}
                  alt={image.altText}
                />
              )
            })}
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  )
}
