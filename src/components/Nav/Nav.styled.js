import styled from 'styled-components';

export const StyledNav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)};
`;

export const NavItem = styled.li`
  width: 100%;
  min-width: 250px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(2)};
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
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const NavItemIcon = styled.svg`
  display: inline-block;
  fill: currentColor;
`;

export const NavItemText = styled.p``;

export const NavItemArrow = styled.svg`
  display: inline-block;
  fill: currentColor;
`;
