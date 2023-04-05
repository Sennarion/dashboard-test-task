import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 968px;
  padding: 30px 40px 40px 38px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  overflow: hidden;
`;

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
`;

export const HeaderText = styled.div``;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight(33, 22)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.low};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 7px;
`;

export const SectionDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight(21, 14)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.low};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SectionFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;
