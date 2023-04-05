import { useState } from 'react';
import {
  StyledNav,
  NavList,
  NavItem,
  NavItemContent,
  NavItemIcon,
  NavItemText,
  NavItemArrow,
} from './Nav.styled';
import { nav } from 'data/nav';
import icons from 'assets/icons/icons.svg';

export default function Nav() {
  const [active, setActive] = useState(2);

  return (
    <StyledNav>
      <NavList>
        {nav.map(({ title, icon }, idx) => (
          <NavItem
            key={title}
            isActive={idx === active}
            onClick={() => setActive(idx)}
          >
            <NavItemContent>
              <NavItemIcon width="24" height="24">
                <use href={`${icons}#${icon}`}></use>
              </NavItemIcon>
              <NavItemText>{title}</NavItemText>
            </NavItemContent>
            <NavItemArrow width="16" height="16">
              <use href={`${icons}#icon-chevron`}></use>
            </NavItemArrow>
          </NavItem>
        ))}
      </NavList>
    </StyledNav>
  );
}
