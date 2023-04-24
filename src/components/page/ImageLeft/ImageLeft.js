import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section, FlexMobileOpp } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"

const Text = styled.div``

const StyledImg = styled(GatsbyImage)`
  box-shadow: -20px 20px 0px 1px var(--clr-accent);
  min-height: 450px;
  align-self: stretch;
`

export default function ImageLeft({ subheader, title, body, image }) {
  const img = getImage(image)
  return (
    <Section>
      <Container>
        <FlexMobileOpp>
          {/*<StaticImage src="../../../images/ph.jpg" className="stretch" />
          <StyledImg
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.altText}
            className="stretch"
          /> */}
          <StyledImg
            image={img}
            alt=""
            className="stretch"
          />
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            ></div>
            <ButtonPrimary to="/contact">contact us</ButtonPrimary>
          </Text>
        </FlexMobileOpp>
      </Container>
    </Section>
  )
}
