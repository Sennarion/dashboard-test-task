import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: ${({ theme }) => theme.media.mobile}) {
    max-width: ${({ theme }) => theme.media.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    max-width: ${({ theme }) => theme.media.desktop};
  }
`;
