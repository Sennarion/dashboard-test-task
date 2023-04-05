import styled from 'styled-components';

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(10)}
    ${({ theme }) => theme.spacing(7)};
  padding-bottom: ${({ theme }) => theme.spacing(19)};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
`;

export const Content = styled.div`
  flex-grow: 1;
`;
