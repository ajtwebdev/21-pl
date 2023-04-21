import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../buttons"
import { Container, Flex, FlexMobileOpp, Section } from "../layoutComponents"

const Text = styled.div``

const Img = styled.img`
  box-shadow: 20px 20px 0px 1px var(--clr-accent);
  max-height: 450px;
`

export default function ImageLeft(props) {
  return (
    <Section>
      <Container>
        <FlexMobileOpp>
          <Img src={props.img} alt={props.alt} />
          <Text className="spacing">
            <div>
              <p className="subheader">{props.subheader}</p>
              <h2 className="title">{props.title}</h2>
            </div>
            <p>{props.body}</p>
            <ButtonPrimary to={props.to}>{props.button}</ButtonPrimary>
          </Text>
        </FlexMobileOpp>
      </Container>
    </Section>
  )
}
