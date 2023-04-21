import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../buttons"
import { Container, Flex, Section } from "../layoutComponents"

const Text = styled.div``

const Img = styled.img`
  box-shadow: 20px 20px 0px 1px var(--clr-accent);
  max-height: 450px;
`

export default function ImageRight(props) {
  return (
    <Section>
      <Container>
        <Flex>
          <Text className="spacing">
            <div>
              <p className="subheader">{props.subheader}</p>
              <h2 className="title">{props.title}</h2>
            </div>
            <p>{props.body}</p>
            <ButtonPrimary to={props.to}>{props.button}</ButtonPrimary>
          </Text>
          <Img src={props.img} alt={props.alt} />
        </Flex>
      </Container>
    </Section>
  )
}
