import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 968px;
    padding: 30px 40px 40px 38px;
  }
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
  }
`;

export const HeaderText = styled.div`
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    text-align: start;
  }
`;

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
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    margin-bottom: 0;
  }
`;

export const SectionFooter = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;
