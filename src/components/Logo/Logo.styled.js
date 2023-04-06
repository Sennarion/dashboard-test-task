import styled from 'styled-components';

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    margin-bottom: 52px;
  }
`;

export const LogoIcon = styled.svg`
  display: inline-block;
`;

export const LogoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.max};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight(39, 26)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.high};
`;

export const LogoVersion = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.min};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight(15, 10)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.low};
  color: ${({ theme }) => theme.colors.grey};
  margin-left: 4px;
`;
