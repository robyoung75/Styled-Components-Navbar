// styled components
import styled, { css } from "styled-components";

// media query breakpoints and devices
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

// media query for each device size
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

// flex styles
const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;

// shared styles...primarily for divs
const sharedStyles = css`
  ${(props) => props.isFlex && flexStyles};

  background-color: ${(props) => props.backgroundColor};
  background: ${(props) => props.background};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  display: ${(props) => props.display};
`;

// shared styles for Typography, p, h1 - h6
const sharedTypography = css`
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
`;

const Title = styled.h1`
  ${sharedTypography}
`;

const SubTitle = styled.h3`
  ${sharedTypography}
`;

const StyledP = styled.p`
  ${sharedTypography}
`;
// Styled div
const StyledWrapper = styled.div`
  ${(props) => props.isFlex && flexStyles};
  ${sharedStyles}
`;

// Navbar Styles
const NavList = styled.ul`
  ${(props) => props.isFlex && flexStyles}

  list-style: none;
  background-color: ${(props) => props.backgroundColor || "grey"};
  padding: 0;
  margin: 0;
  z-index: 8;
  transform: ${(props) =>
    props.isActive ? "translateY(-110%)" : "translateY(0%)"};
  opacity: ${(props) => (props.isActive ? 0 : 1)};
  width: 100%;
  @media ${device.tablet} {
    flex-direction: row;
    transform: translateY(0);
    opacity: 1;
  }
`;

const NavListItem = styled.li`
  padding: 25px;
  height: 100%;
  margin: 3px;
  width: ${(props) => props.listItemWidth || "100%"};

  &:hover .navbar__dropdownContentLeft {
    opacity: 1;
    z-index: 1;
    pointer-events: all;
    display: flex;
  }

  &:hover .navbar__dropdownContentRight {
    opacity: 1;
    z-index: 1;
    pointer-events: all;
    display: flex;
  }

  .navbar__dropdownContentRight {
    @media ${device.tablet} {
      left: 87%;
    }
  }

  .navbar__dropdownContentLeft {
    @media ${device.tablet} {
      left: 37%;
    }
  }
`;

const StyledDropdownContent = styled.div`
  ${(props) => props.isFlex && flexStyles}
  background-color: ${(props) => props.backgroundColor};
  padding: 30px 15px;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 15px);
  border-radius: 10px;
  transition: opacity 0.5s;
  opacity: 0;
  pointer-events: none;
  transition-delay: 0.3s;
  z-index: -1;  

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    background-color: ${(props) => props.backgroundColor};
    
    transform: rotate(45deg) translate(-50%, -50%);
  }
`;

const NavListItemLink = styled.a`
  color: ${(props) => props.primaryColor};
  text-decoration: none;
  display: block;
  text-align: center;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.15);
    color: #8162ce;
    cursor: pointer;
  }
`;

const StyledDropdownLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.secondaryColor};
  white-space: nowrap;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    transform: translateX(5px);
  }
`;

const StyledHamburger = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const activeStylesBuns = css`
  transform: translate(0, 0) rotate(0deg);
`;

const activeStylesMiddle = css`
  transform: translateX(0);
`;

const StyledHamburgerTop = styled.span`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 2px 0;
  transition: all 0.5s;
  transform: translate(0, 6px) rotate(45deg);
  ${(props) => props.isActive && activeStylesBuns}
`;

const StyledHamburgerMiddle = styled.span`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 2px 0;
  transition: all 0.5s;
  transform: translateX(100px);
  ${(props) => props.isActive && activeStylesMiddle}
`;

const StyledHamburgerBottom = styled.span`
  width: 15px;
  height: 2px;
  background-color: black;
  margin: 2px 0;
  transition: all 0.5s;
  transform: translate(0, -6px) rotate(-45deg);
  ${(props) => props.isActive && activeStylesBuns}
`;
export {
  StyledWrapper,
  NavList,
  NavListItem,
  StyledDropdownContent,
  NavListItemLink,
  StyledDropdownLink,
  StyledHamburger,
  StyledHamburgerTop,
  StyledHamburgerMiddle,
  StyledHamburgerBottom,
  device,
  Title,
  SubTitle,
  StyledP
};
