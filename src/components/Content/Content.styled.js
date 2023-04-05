import styled from 'styled-components';

export const StyledContent = styled.div`
  flex-grow: 1;
  padding: 41px 71px;
`;

export const ContentTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight(36, 24)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.normal};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 51px;
`;
