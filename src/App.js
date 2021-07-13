import Navbar from "./Navbar";
import { StyledWrapper, Title, SubTitle, StyledP } from "./Styles";
import "./App.css";

export default function App() {
  return (
    <StyledWrapper isFlex flexDirection="column">
      <Navbar
        isFlex
        flexDirection="column"
        primaryColor="rgba(255,255,255,.89)"
        secondaryColor="rgba(131,58,180,1)"
        backgroundColor="#31394d"
      ></Navbar>

      <StyledWrapper
        isFlex
        flexDirection="column"
        height="1000px"
        background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(49,57,77,1) 50%, rgba(131,58,180,1) 100%)"
        borderBottom="2px solid #fff"
        padding="75px 10px 0 10px"
      >
        <Title color="rgba(255,255,255,.89)" padding="1rem">
          Styled-Components
        </Title>
        <SubTitle color="rgba(255,255,255,.89)" padding="0 0 1rem 1rem">
          Navbar
        </SubTitle>
        <StyledP color="rgba(255,255,255,.6)" padding="0 0 1rem 1rem">
          Responsive Navbar with Hamburger and Dropdowns
        </StyledP>
      </StyledWrapper>

      <StyledWrapper
        height="1000px"
        background="linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(49,57,77,1) 50%, rgba(0,0,0,1) 100%)"
      ></StyledWrapper>
    </StyledWrapper>
  );
}
