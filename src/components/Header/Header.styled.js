import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 0;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
