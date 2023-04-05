import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${({ theme }) => theme.media.mobile}) {
    max-width: ${({ theme }) => theme.media.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    max-width: ${({ theme }) => theme.media.desktop};
  }
`;
