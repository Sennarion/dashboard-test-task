import styled from 'styled-components';

export const Main = styled.main`
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    height: 100vh;
    min-height: 1000px;
    display: flex;
  }
`;
