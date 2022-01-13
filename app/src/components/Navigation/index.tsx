import React, { useState } from 'react';
import { Button, NavItem, NavItemContainer, StyledNavigation } from './style';

interface Props {
  width: number;
}

const Navigation = ({ width }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        location={isOpen ? 300 : 15}
        color="#747474"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '<' : '>'}
      </Button>
      <StyledNavigation color="#C4C4C4" isOpen={isOpen} width={width}>
        <NavItemContainer>
          <NavItem color="#E9E9E9">내 여행 일정 이름 1</NavItem>
          <NavItem color="#E9E9E9">내 여행 일정 이름 1</NavItem>
          <NavItem color="#E9E9E9">내 여행 일정 이름 1</NavItem>
        </NavItemContainer>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
