import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Section, Container, GridAuto } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`

export default function StepsToRefer(props) {
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <h2 className="title">three easy steps</h2>
        </Text>
        <GridAuto>
          <div>
            <h3 className="subheader accent">1</h3>
            <p>Spread the word to your friends or family.</p>
          </div>
          <div>
            <h3 className="subheader accent">2</h3>
            <p>Fill out the contact info below.</p>
          </div>
          <div>
            <h3 className="subheader accent">3</h3>
            <p>You both receive $100!</p>
          </div>
        </GridAuto>
        <center>
          <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
