import styled from 'styled-components';

export const StyledNavigation = styled.div`
  padding: 100px 20px 20px 20px;
  width: 300px;
  background-color: #c4c4c4;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  transition: all 0.3s;

  &.active {
    transform: translateX(0);
  }
`;

export const ArrowButton = styled.button`
  color: '#747474';
  background-color: rgba(255, 255, 255, 0);
  border: none;
  position: absolute;
  font-size: 40px;
  cursor: pointer;

  &.arrow-right {
    top: 15px;
    left: 15px;
  }

  &.arrow-left {
    top: 15px;
    right: 15px;
  }
`;

export const NavItemContainer = styled.ul`
  width: 100%;
`;

export const NavItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #e9e9e9;
`;
