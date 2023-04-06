import { useState } from 'react';
import useMediaQuery from 'hooks/useMediaQuery';
import { theme } from 'styles/theme';
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

export default function Nav({ toggleMenu }) {
  const isDesktop = useMediaQuery(`(min-width: ${theme.media.desktop})`);

  const [active, setActive] = useState(2);

  const onNavClick = idx => {
    setActive(idx);

    if (!isDesktop) toggleMenu();
  };

  return (
    <StyledNav>
      <NavList>
        {nav.map(({ title, icon }, idx) => (
          <NavItem
            key={title}
            isActive={idx === active}
            onClick={() => onNavClick(idx)}
          >
            <NavItemContent>
              <NavItemIcon width="24" height="24">
                <use href={`${icons}#${icon}`}></use>
              </NavItemIcon>
              <NavItemText>{title}</NavItemText>
            </NavItemContent>
            {idx !== 0 && (
              <NavItemArrow width="16" height="16">
                <use href={`${icons}#icon-chevron`}></use>
              </NavItemArrow>
            )}
          </NavItem>
        ))}
      </NavList>
    </StyledNav>
  );
}
