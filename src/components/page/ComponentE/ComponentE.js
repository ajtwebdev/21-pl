import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Section, Container, GridThree } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`

const StyledImg = styled(GatsbyImage)`
  height: 300px;
  width: 100%;
`

const Item = styled.div`
  text-align: center;

  border: 1px solid var(--clr-tan);
  border-radius: var(--br);

  div {
    padding: 2em;
  }
`

export default function ComponentE({ subheader, title, content }) {
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div className="">
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
        </Text>
        <GridThree>
          {content.map(item => {
            return (
              <Item className="spacing">
                <StyledImg
                  image={item.image.localFile.childImageSharp.gatsbyImageData}
                  alt={item.image.altText}
                  s
                />
                <div>
                  <h3 className="subheader accent">{item.title}</h3>
                  {item.description ? (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${item.description}`,
                      }}
                    />
                  ) : null}
                </div>
              </Item>
            )
          })}
        </GridThree>
        <center>
          <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
