import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section, FlexMobileOpp } from "../../layoutComponents"
import { ButtonPrimary, ButtonSecondaryLight } from "../../buttons"

const Wrapper = styled.div`
  background: var(--clr-accent);
`

const Text = styled.div`
  color: var(--txt-light);
`

const StyledImg = styled(GatsbyImage)`
  box-shadow: -20px 20px 0px 1px var(--clr-tan);
  min-height: 450px;
  align-self: stretch;
`

export default function ImageLeftDark({ subheader, title, body, image }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            {/* <StyledImg
              image={image.localFile.childImageSharp.gatsbyImageData}
              alt={image.altText}
              className="stretch"
            /> */}
            <StaticImage src="../../../images/ph.jpg" className="stretch" />
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
              <ButtonSecondaryLight to="/contact">
                talk to us today
              </ButtonSecondaryLight>
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
