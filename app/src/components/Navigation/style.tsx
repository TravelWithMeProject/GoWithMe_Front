import styled from 'styled-components';

export const StyledNavigation = styled.div<{
  width: number;
  isOpen: boolean;
  color: string;
}>`
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.color};
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(${(props) => (props.isOpen ? 0 : 150 * -1)}%);
`;
export const Button = styled.button<{
  location: number;
  color: string;
}>`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  position: absolute;
  z-index: 100;
  left: ${(props) => props.location}px;
  top: 50px;
  font-size: 40px;
  color: ${(props) => props.color};
`;

export const NavItemContainer = styled.div`
  width: 100%;
  padding-top: 100px; // Head의 height로 변경
`;

export const NavItem = styled.div<{
  color: string;
}>`
  width: calc(100% - 60px);
  margin: 20px;
  padding: 10px;
  background-color: ${(props) => props.color};
`;
