import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonUnderline } from "../buttons"
import { Container, Section } from "../layoutComponents"
import { Link } from "gatsby"

const device = {
  md: "48em",
}

const Text = styled.div`
  max-width: 90ch;
  width: 100%;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2em auto 140px;
  grid-template-rows: 2em auto 2em;
`

const List = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;

  @media screen and (max-width: ${device.md}) {
    grid-template-columns: 1fr;
  }

  & > * {
    justify-self: center;
    align-self: center;
  }
`

const Bg = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;

  z-index: 1;
  background: var(--clr-accent);
`

const ItemLink = styled(props => <Link {...props} />)`
  background: var(--clr-dark);
  color: var(--txt-light);
  text-decoration: none;

  div {
    padding: 1em;
  }

  &:hover {
    color: var(--txt-light);
  }
`

export default function MainTrends() {
  return (
    <Section>
      <div className="spacing">
        <Container>
          <Text className="spacing ">
            <div>
              {/* <p className="subheader accent">title for trends</p> */}
              <h2 className="title">landscaping trends in calgary</h2>
            </div>
            <p>
              Your home is your pride and joy, and we are the professionals who
              can help you maintain its outdoor beauty. Increasing your
              property's value and making your yard the envy of the block,
              Project Landscape ensures that your landscaping needs are met.
              From irrigation seasonal clean-up, construction and more services,
              we are the Calgary Landscaping experts you can trust for all your
              residential landscaping needs.
            </p>
          </Text>
        </Container>
        <Grid>
          <Bg />
          <List>
            <ItemLink to="/blog">
              <StaticImage
                src="../../images/calgary-landscaping-color.jpg"
                alt="calgary hardscaping services"
              />
              <div>
                <h3 className="subheader">design with color</h3>
                <ButtonUnderline className="service-button" to="/blog">
                  read more &#8594;
                </ButtonUnderline>
              </div>
            </ItemLink>
            <ItemLink to="/blog">
              <StaticImage
                src="../../images/calgary-landscaping-texture.jpg"
                alt="calgary softscaping services"
              />
              <div>
                <h3 className="subheader">design with texture</h3>
                <ButtonUnderline className="service-button" to="/blog">
                  read more &#8594;
                </ButtonUnderline>
              </div>
            </ItemLink>
            <ItemLink to="/blog">
              <StaticImage
                src="../../images/calgary-landscaping-scale.jpg"
                alt="outdoor landscaping services calgary"
              />
              <div>
                <h3 className="subheader">design with size</h3>
                <ButtonUnderline className="service-button" to="/blog">
                  read more &#8594;
                </ButtonUnderline>
              </div>
            </ItemLink>
          </List>
        </Grid>
      </div>
    </Section>
  )
}
