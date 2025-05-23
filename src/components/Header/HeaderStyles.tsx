import styled from "styled-components";
import { ThemeType } from "../../themes";

const HeaderContainer = styled.div<{theme: ThemeType}>`
  width: 100vw;
  height: 80px;
  background-color: ${props => props.theme.headerBackground};

  header {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .company-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h1 {
    color: ${props => props.theme.secondaryText};
    text-align: center;
    font-size: 1.2em;
  }

  img {
    width: 40px;
  }

  ul {
    width: 100vw;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 0px;

    li {
      padding: 10px 20px;
      button {
        margin-right: 20px;
        width: 80px;
        height: 30px;
        border-top-right-radius: 20px;
        background: ${props => props.theme.accent};
        color: ${props => props.theme.buttonText};
        font-size: 1em;
        text-align: left;
        border: none;
        cursor: pointer;
        &:hover {
          background: ${props => props.theme.accentHover};
        }
      }
    }

    a {
      color: ${props => props.theme.secondaryText};
      text-decoration: none;
      font-size: 1.2em;
      transition: 0.3s;
    }

    a:hover {
      color: ${props => props.theme.accentHover};
    }
  }
`;

export default HeaderContainer;
