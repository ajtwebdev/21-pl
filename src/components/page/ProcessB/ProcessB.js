import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Section, Container, GridAuto } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  color: var(--txt-light);
`

const ProcessItem = styled.div`
  padding: 2em;
  text-align: center;
  background: var(--clr-light);
  color: var(--txt-dark);
  height: 100%;
  box-shadow: var(--shadow-light);
  border-radius: var(--br);

  h3 {
    font-size: 6rem;
    font-family: var(-ff-alfa);
    text-shadow: 2px 2px 2px rgba(47, 184, 20, 0.9);
  }
`
const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 6em auto 25em;
`

const Bg = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: var(--clr-dark);
`

const Bottom = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;
  background: var(--clr-dark);
`

export default function ProcessB({ title, subheader, body, processContent }) {
  return (
    <Section>
      <GridWrapper>
        <Bg />
        <Bottom className="spacing">
          <Text className="spacing">
            <Container className="spacing">
              <div>
                <p className="subheader">{subheader}</p>
                <h2 className="title ">{title}</h2>
              </div>
              {body ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${body}`,
                  }}
                />
              ) : null}
            </Container>
          </Text>
          <Container>
            <GridAuto>
              {processContent.map(item => {
                return (
                  <ProcessItem>
                    <h3>{item.number}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${item.body}`,
                      }}
                    />
                  </ProcessItem>
                )
              })}
            </GridAuto>
          </Container>
        </Bottom>
      </GridWrapper>
    </Section>
  )
}
