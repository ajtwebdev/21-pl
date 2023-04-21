import React from "react"
import styled from "styled-components"
import { Container, Section } from "../../layoutComponents"
import { GatsbyImage } from "gatsby-plugin-image"

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

  ul {
    padding: 2em;
  }

  p {
    ul {
      padding-left: 2em;
    }
  }

  @media screen and (max-width: ${device.md}) {
    grid-template-columns: 1fr;
  }
`

const Bg = styled.div`
  grid-row: 2 / -1;
  grid-column: 2 / -1;
  z-index: 1;
  background: var(--clr-accent);
`

const Item = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light);
  text-decoration: none;

  div {
    padding: 1em;
  }
`

const StyledImg = styled(GatsbyImage)`
  width: 100%;
  height: 400px;
`

const Button = styled.div`
  cursor: pointer;
  display: inline-block;
  font-family: var(--ff-alfa);
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  text-decoration: underline;
  font-style: italic;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-accent);
`

export default function ComponentA({ subheader, title, body, componentItems }) {
  return (
    <Section>
      <div className="spacing">
        <Container>
          <Text className="spacing">
            <div>
              <p className="subheader accent">{subheader}</p>
              <h2 className="title">{title}</h2>
              {body ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${body}`,
                  }}
                />
              ) : null}
            </div>
          </Text>
        </Container>
        <Grid>
          <List>
            {componentItems.map(item => {
              return (
                <Item>
                  <StyledImg
                    image={item.image.localFile.childImageSharp.gatsbyImageData}
                    alt={item.image.altText}
                  />
                  <div>
                    <h3 className="subheader">{item.title}</h3>
                    {item.text ? (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${item.text}`,
                        }}
                      />
                    ) : null}
                    {item.button ? (
                      <Button
                        dangerouslySetInnerHTML={{
                          __html: `${item.button}`,
                        }}
                      />
                    ) : null}
                  </div>
                </Item>
              )
            })}
          </List>
          <Bg />
        </Grid>
      </div>
    </Section>
  )
}
