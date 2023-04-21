import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Flex } from "../layoutComponents"
import { IoMdArrowDropdown } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import { MdLocationOn, MdOutlineEmail } from "react-icons/md"
import { useMenuQuery } from "../../hooks/useMenuQuery"

import Logo from "../../images/project-landscape-logo-light.svg"

const device = {
  sm: "18em",
  md: "56em",
}

const Header = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
`

const Headertop = styled.div`
  padding: 1em 0;
  background: var(--clr-accent);

  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      &:nth-child(2),
      &:nth-child(3) {
        @media screen and (max-width: ${device.md}) {
          display: none;
        }
      }
    }

    & > * + * {
      margin-left: 1.5em;
    }
  }
`

const NavLinkTop = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-light);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }
`

const Headerbottom = styled.div`
  background: var(--clr-dark);
  padding: 1em 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const LogoContainer = styled.div`
  img {
    height: 70px;
    transition: 0.4s;

    &[data-active="true"] {
      height: 90px;
    }
  }
`

const Nav = styled.nav`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & > * + * {
    margin-left: 1.5em;
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    align-items: center;
    position: absolute;
    top: 150px;

    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: var(--clr-dark);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    border-top: 1px solid var(--txt-dark-secondary);
    padding: 1em 2em 2em;

    & > * + * {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`

const GetQuote = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-accent-darker);
    color: var(--txt-light);
  }
`

const DropdownAbout = styled.li`
  /* hover display only on desktop */

  @media screen and (min-width: ${device.md}) {
    div {
      display: ${({ dropdownAbout }) => (dropdownAbout ? "flex" : "none")};
      position: absolute;
      top: 155px;
      left: 0;
      width: 100%;
      z-index: 1000;
      opacity: 1;
    }
    ul {
      width: 100%;
      margin: 0;
      padding: 2em 2em 2em 4em;
      list-style-type: none;
      background: var(--clr-light);

      li {
        a {
          color: var(--txt-dark);
        }
      }
    }
  }
`
const DropdownServices = styled.li`
  /* hover display only on desktop */

  @media screen and (min-width: ${device.md}) {
    div {
      display: ${({ dropdownServices }) =>
        dropdownServices ? "flex" : "none"};
      position: absolute;
      top: 155px;
      left: 0;
      width: 100%;
      z-index: 1000;
      opacity: 1;
    }
    ul {
      width: 100%;
      margin: 0;
      padding: 2em 2em 2em 4em;
      list-style-type: none;
      background: var(--clr-light);

      li {
        a {
          color: var(--txt-dark);
        }
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-light);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
    color: var(--clr-accent);
  }

  @media screen and (max-width: ${device.md}) {
    font-size: var(--fs-b);
  }
`

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--clr-accent);

    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
    }
  }

  @media screen and (max-width: ${device.md}) {
    transform: scale(1);
    display: block;
    z-index: 10000;
  }
`

export default function HeaderBasic() {
  const data = useMenuQuery()

  const [nav, navOpen] = useState(false)
  const [dropdownAbout, dropdownOpenAbout] = useState(false)
  const [dropdownServices, dropdownOpenServices] = useState(false)
  const [scrolled, setScrolled] = useState(true)

  function toggleMenu() {
    navOpen(!nav)
  }

  function toggleDropdownAbout() {
    dropdownOpenAbout(!dropdownAbout)
  }
  function toggleDropdownServices() {
    dropdownOpenServices(!dropdownServices)
  }

  return (
    <div>
      <Header>
        <Headertop>
          <Container>
            <ul>
              <li>
                <NavLinkTop href="tel: 403-257-4059">
                  <div>
                    <FaPhone />
                  </div>
                  403-257-4059
                </NavLinkTop>
              </li>
              <li>
                <NavLinkTop href="mailto: office@projectlandscape.ca">
                  <div>
                    <MdOutlineEmail />
                  </div>
                  office@projectlandscape.ca
                </NavLinkTop>
              </li>
              <li>
                <NavLinkTop
                  href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                  target="_blank"
                >
                  <div>
                    <MdLocationOn />
                  </div>
                  3511 64 Ave Calgary
                </NavLinkTop>
              </li>
            </ul>
          </Container>
        </Headertop>
        <Headerbottom>
          <Container className="container">
            <LogoContainer>
              <Link to="/">
                <img src={Logo} alt="landscape company calgary logo" />
              </Link>
            </LogoContainer>
            <Nav>
              <Burger nav={nav} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </Burger>
              <NavList nav={nav}>
                <DropdownAbout
                  dropdownAbout={dropdownAbout}
                  onClick={toggleDropdownAbout}
                >
                  <StyledLink>
                    about
                    <IoMdArrowDropdown size={20} />
                  </StyledLink>
                  <div>
                    <ul>
                      <li>
                        <StyledLink to="/about">about us</StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/packages">packages</StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/areas-we-service">
                          service areas
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/free-resources">
                          free resources
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/warranty-request">
                          warranty request
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/financing">financing </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/strategic-partners">
                          strategic partners
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/refer-a-friend-to-project-landscape-ltd">
                          refer a friend
                        </StyledLink>
                      </li>
                    </ul>
                  </div>
                </DropdownAbout>
                <DropdownServices
                  dropdownServices={dropdownServices}
                  onClick={toggleDropdownServices}
                >
                  <StyledLink>
                    residential services
                    <IoMdArrowDropdown size={20} />
                  </StyledLink>
                  <div>
                    <ul>
                      <h3 className="subheader">
                        <Link to="/residential-services/softscaping">
                          softscaping
                        </Link>
                      </h3>
                      <li>
                        <StyledLink to="/residential-services/softscaping/sod">
                          sod
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/softscaping/calgary-mulch-and-decorative-rock">
                          mulch and decorative rock
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/softscaping/irrigation-installation-calgary">
                          irrigation installation
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/softscaping/artificial-turf-calgary">
                          artificial turf
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/softscaping/shrub-and-tree-planting-calgary">
                          shrub and tree planting
                        </StyledLink>
                      </li>
                      {/* {data.wpMenu.menuItems.nodes.map(mainItem => {
                        return (
                          <>
                            {mainItem.childItems.nodes.map(childItem1 => {
                              return (
                                <>
                                  {childItem1.childItems.nodes.map(
                                    childItem2 => {
                                      return (
                                        <li key={childItem2.id}>
                                          <StyledLink to={childItem2.url}>
                                            {childItem2.label}
                                          </StyledLink>
                                        </li>
                                      )
                                    }
                                  )}
                                </>
                              )
                            })}
                          </>
                        )
                      })} */}
                    </ul>
                    <ul>
                      <h3 className="subheader">
                        <Link to="/residential-services/hardscaping">
                          hardscaping
                        </Link>
                      </h3>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/garden-bed-edging">
                          garden bed edging
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/pavers">
                          pavers
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/concrete-contractors-calgary">
                          concrete installation
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/concrete-curbing-calgary">
                          concrete curbing
                        </StyledLink>
                      </li>

                      <li>
                        <StyledLink to="/residential-services/hardscaping/concrete-retaining-walls-calgary">
                          retaining walls
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/water-management">
                          water management
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/stairs-and-stepping-stones">
                          stairs and stepping stones
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/patios">
                          patios
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/hardscaping/backyard-sports-court-installation">
                          sports courts
                        </StyledLink>
                      </li>
                    </ul>
                    <ul>
                      <h3 className="subheader">
                        <Link to="/residential-services/outdoor-living">
                          outdoor living
                        </Link>
                      </h3>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/landscape-design-calgary">
                          landscape design
                        </StyledLink>
                      </li>

                      <li>
                        <StyledLink to="/residential-services/outdoor-living/outdoor-fireplace-calgary-landscaper">
                          fire pits and fire places
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/seat-walls-and-pillars">
                          seat walls and pillars
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/deck-builders-calgary">
                          decks
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/deck-railings-calgary">
                          railings
                        </StyledLink>
                      </li>

                      <li>
                        <StyledLink to="/residential-services/outdoor-living/privacy-screens-for-decks-calgary">
                          privacy screens
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/outdoor-landscape-lighting-calgary">
                          lighting services
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/outdoor-kitchen-calgary-landscaping-services">
                          outdoor kitchens
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/fence-builders-calgary">
                          fences
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/calgary-pergolas-and-patio-structures">
                          pergolas
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/calgary-landscape-water-features">
                          water features
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/residential-services/outdoor-living/garden-walls">
                          garden walls
                        </StyledLink>
                      </li>
                    </ul>
                  </div>
                </DropdownServices>
                <li>
                  <StyledLink to="/gallery">gallery</StyledLink>
                </li>
                <li>
                  <StyledLink to="/blog">blog</StyledLink>
                </li>

                <li>
                  <StyledLink to="/contact">contact</StyledLink>
                </li>
              </NavList>
            </Nav>
          </Container>
        </Headerbottom>
      </Header>
    </div>
  )
}
