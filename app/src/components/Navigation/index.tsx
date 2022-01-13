import React, { useCallback, useState } from 'react';
import {
  NavItem,
  NavItemContainer,
  StyledNavigation,
  ArrowButton,
} from './style';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      {!isOpen && (
        <ArrowButton className="arrow-right" onClick={onToggle}>
          {'>'}
        </ArrowButton>
      )}
      <StyledNavigation className={isOpen ? 'active' : ''}>
        <NavItemContainer>
          <NavItem>내 여행 일정 이름 1</NavItem>
          <NavItem>내 여행 일정 이름 1</NavItem>
          <NavItem>내 여행 일정 이름 1</NavItem>
        </NavItemContainer>
        <ArrowButton className="arrow-left" onClick={onToggle}>
          {'<'}
        </ArrowButton>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
