import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonInline } from "../../buttons"
import ServiceForm from "../../forms/serviceForm"
import { Container, Section } from "../../layoutComponents"
import { useMenuQuery } from "../../../hooks/useMenuQuery"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--txt-dark-secondary);
  border-radius: var(--br);

  a {
    color: var(--clr-accent);
  }
`

export default function ServiceArea({ title, content1, content2 }) {
  const menuData = useMenuQuery()
  return (
    <Section>
      <Container>
        <Wrapper>
          <Aside className="spacing">
            <Navigation className="spacing">
              <h3 className="caps accent title bold">
                Landscaping <br /> Services
              </h3>
              <div>
                <ul>
                  {menuData.wpMenu.menuItems.nodes.map(mainItem => {
                    return (
                      <>
                        {mainItem.childItems.nodes.map(childItem1 => {
                          return (
                            <>
                              {childItem1.childItems.nodes.map(childItem2 => {
                                return (
                                  <li key={childItem2.id}>
                                    <ButtonInline to={childItem2.url}>
                                      {childItem2.label}
                                    </ButtonInline>
                                    <hr />
                                  </li>
                                )
                              })}
                            </>
                          )
                        })}
                      </>
                    )
                  })}
                </ul>
              </div>
            </Navigation>
            <div className="service-form">
              <ServiceForm />
            </div>
          </Aside>
          <Content className="spacing">
            <div>
              <p className="caps dark bold">
                EXPERIENCED • PROFESSIONAL • COMPLETE SATISFACTION
              </p>
              <h1 className="title dark bold italics">{title}</h1>
            </div>
            <div>
              <article
                dangerouslySetInnerHTML={{
                  __html: `${content1}`,
                }}
              />
            </div>
            <ServiceAreas>
              <p
                className="center bold"
                dangerouslySetInnerHTML={{
                  __html: `${content2}`,
                }}
              />
            </ServiceAreas>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}
