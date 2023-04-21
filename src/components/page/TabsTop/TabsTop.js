import React from "react"
import { Section, Container, Flex } from "../../layoutComponents"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  .css-1xhq01z {
    justify-content: center;
  }

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

const StyledImg = styled(GatsbyImage)`
  object-fit: cover;
`

export default function TabsTop({ title, tabsContent }) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Text>
            <h2 className="title">{title}</h2>
          </Text>

          <Tabs>
            <TabList>
              {tabsContent.map(tab => {
                return <Tab>{tab.tabLabel}</Tab>
              })}
            </TabList>

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
                      <StyledImg
                        image={
                          tab.tabImage.localFile.childImageSharp.gatsbyImageData
                        }
                        alt={tab.tabImage.altText}
                      />
                    </Flex>
                  </TabPanel>
                )
              })}
            </TabPanels>
          </Tabs>
        </Container>
      </Section>
    </Wrapper>
  )
}
