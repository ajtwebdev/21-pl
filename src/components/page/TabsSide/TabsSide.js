import React from "react"
import { Section, Container, Flex } from "../../layoutComponents"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  .css-52dxnr {
    font-family: var(--ff-alfa);
    font-size: var(--fs-sm);
    font-weight: var(--fw-button);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .css-52dxnr[aria-selected="true"],
  .css-52dxnr[data-selected] {
    --tabs-color: var(--clr-tan);
    border-color: currentcolor;
  }

  css-13o7eu2 {
    padding: 2em;
    border: 1px solid var(--clr-tan);
    border-radius: var(--br);
  }
`

const Text = styled.div`
  text-align: center;
`

const ListBox = styled.div``

const TabsWrapper = styled.div`
  .css-13o7eu2 {
    display: flex;
    @media screen and (max-width: 550px) {
      flex-direction: row;
    }
  }
`

const TabListWrapper = styled.div`
  .css-1xhq01z {
    flex-direction: column;

    @media screen and (max-width: 550px) {
      flex-direction: row;
    }
  }
`
const PanelsWrapper = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  p {
    a {
      cursor: pointer;
      display: inline-block;
      font-family: var(--ff-alfa);
      font-size: var(--fs-sm);
      font-weight: var(--fw-button);
      font-style: italic;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--clr-accent);

      // this is for when an icon is used inside too
      div {
        display: flex;
        align-items: center;

        & > * + * {
          margin-left: 0;
          padding-left: 0;
        }
      }
      &:hover {
        color: var(--clr-accent);
      }
    }
  }
`

export default function TabsSide({ title, tabsContent }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Text>
            <h2 className="title">{title}</h2>
          </Text>
          <TabsWrapper>
            <Tabs>
              <TabListWrapper>
                <TabList>
                  {tabsContent.map(tab => {
                    return <Tab>{tab.tabLabel}</Tab>
                  })}
                </TabList>
              </TabListWrapper>
              <PanelsWrapper>
                <TabPanels>
                  {tabsContent.map(tab => {
                    return (
                      <TabPanel>
                        <Flex>
                          <div className="spacing">
                            <h3 className="subheader accent">{tab.tabTitle}</h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: `${tab.tabBody}`,
                              }}
                            />
                            <ListBox>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `${tab.tabList}`,
                                }}
                              />
                            </ListBox>
                          </div>
                          <GatsbyImage
                            image={
                              tab.tabImage.localFile.childImageSharp
                                .gatsbyImageData
                            }
                            alt={tab.tabImage.altText}
                          />
                        </Flex>
                      </TabPanel>
                    )
                  })}
                </TabPanels>
              </PanelsWrapper>
            </Tabs>
          </TabsWrapper>
        </Container>
      </Section>
    </Wrapper>
  )
}
