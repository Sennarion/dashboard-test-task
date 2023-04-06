import styled from 'styled-components';

export const Menu = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.bgColor};
  z-index: 200;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  transition: opacity ${({ theme }) => theme.animation.cubicBezier};

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
