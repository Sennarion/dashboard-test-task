import styled from 'styled-components';

export const StyledNav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const NavItem = styled.li`
  width: 100%;
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  padding-right: 8px;
  border-radius: 8px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : 'transparent'};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.navTextColor};
  cursor: pointer;

  transition: background-color ${({ theme }) => theme.animation.cubicBezier},
    color ${({ theme }) => theme.animation.cubicBezier};
`;

export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const NavItemIcon = styled.svg`
  display: inline-block;
  fill: currentColor;
`;

export const NavItemText = styled.p`
  line-height: ${({ theme }) => theme.lineHeight(21, 14)};
`;

export const NavItemArrow = styled.svg`
  display: inline-block;
  fill: currentColor;
`;
