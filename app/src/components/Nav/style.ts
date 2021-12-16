import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;

  ul {
    display: flex;
  }

  li {
    margin: 0 50px;
    font-size: 18px;
    color: #111;
  }
  
  a {
    &:hover {
      color: blue;
    }
  }
`;