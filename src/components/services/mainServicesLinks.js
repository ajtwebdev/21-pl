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
  grid-template-columns: 140px auto 2em;
  grid-template-rows: 2em auto 2em;
`

const List = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
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
  grid-row: 2 / -1;
  grid-column: 2 / -1;
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

export default function MainServicesLinks() {
  return (
    <Section>
      <div className="spacing">
        <Container>
          <Text className="spacing">
            <div>
              <p className="subheader accent">find the services you need</p>
              <h2 className="title">
                bring your landscaping calgary project to life
              </h2>
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
          <List>
            <ItemLink to="/residential-services-hardscaping">
              <StaticImage
                src="../../images/hardscaping-calgary.jpg"
                alt="calgary hardscaping services"
              />
              <div>
                <h3 className="subheader">hardscaping</h3>
                <ButtonUnderline
                  className="service-button"
                  to="/residential-services-hardscaping"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </ItemLink>
            <ItemLink to="/residential-services/softscaping">
              <StaticImage
                src="../../images/softscaping-calgary.jpg"
                alt="calgary softscaping services"
              />
              <div>
                <h3 className="subheader">softscaping</h3>
                <ButtonUnderline
                  className="service-button"
                  to="/residential-services/softscaping"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </ItemLink>
            <ItemLink to="/residential-services/outdoor-living">
              <StaticImage
                src="../../images/outdoor-living-calgary.jpg"
                alt="outdoor landscaping services calgary"
              />
              <div>
                <h3 className="subheader">outdoor services</h3>
                <ButtonUnderline
                  className="service-button"
                  to="/residential-services/outdoor-living"
                >
                  learn more &#8594;
                </ButtonUnderline>
              </div>
            </ItemLink>
          </List>
          <Bg />
        </Grid>
      </div>
    </Section>
  )
}
