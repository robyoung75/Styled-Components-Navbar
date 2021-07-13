import { useState } from "react";
import Hamburger from "./Hamburger";
import {
  StyledWrapper,
  NavList,
  NavListItem,
  NavListItemLink,
  StyledDropdownContent,
  StyledDropdownLink
} from "./Styles";

import "./App.css";

function Navbar({
  flexDirection,
  primaryColor,
  secondaryColor,
  listItemWidth,
  backgroundColor,
  display,
  isFlex
}) {
  const [isActive, setIsActive] = useState(true);

  const handleNavbar = (e) => {
    e.preventDefault();
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <StyledWrapper
      backgroundColor="#31394d"
      height="55px"
      position="fixed"
      isFlex
      justifyContent="center"
    >
      <NavList
        className="navbar__list"
        isActive={isActive}
        isFlex={isFlex}
        flexDirection={flexDirection}
        backgroundColor={backgroundColor}
        justifyContent="space-evenly"
      >
        <NavListItem listItemWidth={listItemWidth}>
          <NavListItemLink primaryColor={primaryColor}>Home</NavListItemLink>
        </NavListItem>
        <NavListItem listItemWidth={listItemWidth}>
          <StyledWrapper className="navbar__dropdown">
            <NavListItemLink
              className="navbar__link"
              primaryColor={primaryColor}
            >
              Dropdown
            </NavListItemLink>
          </StyledWrapper>
          <StyledDropdownContent
            className="navbar__dropdownContentLeft"
            isFlex={isFlex}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgba(255,255,255,.9)"
          >
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #1
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #1
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #1
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #1
            </StyledDropdownLink>
          </StyledDropdownContent>
        </NavListItem>
        <NavListItem listItemWidth={listItemWidth}>
          <NavListItemLink primaryColor={primaryColor}>About</NavListItemLink>
        </NavListItem>
        <NavListItem className="navbar__listItem" listItemWidth={listItemWidth}>
          <StyledWrapper className="navbar__dropdown">
            <NavListItemLink
              className="navbar__link"
              primaryColor={primaryColor}
            >
              Dropdown #2
            </NavListItemLink>
          </StyledWrapper>
          <StyledDropdownContent
            className="navbar__dropdownContentRight"
            isFlex={isFlex}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgba(255,255,255,.9)"
          >
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #2
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #2
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #2
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #2
            </StyledDropdownLink>
          </StyledDropdownContent>
        </NavListItem>
      </NavList>

      <Hamburger
        backgroundColor="rgba(143,68,253)"
        width="35px"
        height="35px"
        right="10px"
        top="10px"
        onClick={handleNavbar}
        isActive={isActive}
        display={display}
      />
    </StyledWrapper>
  );
}

export default Navbar;
