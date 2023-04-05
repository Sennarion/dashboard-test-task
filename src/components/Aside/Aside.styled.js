import styled from 'styled-components';

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 37px 28px 76px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
`;

export const Content = styled.div`
  flex-grow: 1;
`;
