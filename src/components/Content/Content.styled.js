import styled from 'styled-components';

export const StyledContent = styled.div`
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    padding: 41px 95px 41px 71px;
  }
`;

export const ContentTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight(36, 24)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.normal};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    margin-bottom: 51px;
  }
`;
