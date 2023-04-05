import styled from 'styled-components';

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing(12)};
  cursor: pointer;
`;

export const LogoIcon = styled.svg`
  display: inline-block;
`;

export const LogoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.max};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const LogoVersion = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.min};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.grey};
  margin-left: ${({ theme }) => theme.spacing(1)};
`;
